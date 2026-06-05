# -*- coding: utf-8 -*-
"""
AIMBA Contest Board — 자체 크롤 소스 (기획/아이디어 부문 보강)
====================================================================
외부 단일 소스(junyeo217/ai-contest-board)는 이미지/영상 공모만 큐레이션해
'기획·아이디어' 필터가 항상 빈 화면이었다. 이 크롤러가 위비티(wevity)의
기획/아이디어 분야(cidx=1) 공모전을 수집해 우리 자체 JSON으로 떨군다.
프론트(ContestBoardClient)는 외부 소스 + 이 JSON을 병합해 렌더한다.

출력: next-app/public/data/contests-extra.json (ContestsFeed 스키마)
robots: 위비티는 Allow:/ (전체 허용). 예의상 요청 간 1.2s delay.
실행: scripts/ 디렉토리에서 `python crawl_contests.py` (홈 inspect.py shadow 회피)

씽굿(thinkcontest)은 cryptoEncode→subList 암호화 핸드셰이크 + 응답 jsonStr
암호화 구조라 안정 추출이 어려워 후속 과제로 분리한다(THINKGOOD_TODO 참조).
"""
import sys
import io
import re
import json
import time
import argparse
from datetime import datetime, timezone, timedelta
from pathlib import Path

import requests
from bs4 import BeautifulSoup

# Windows 콘솔 UTF-8 강제 (surrogate/CP949 깨짐 방지)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KST = timezone(timedelta(hours=9))
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124 Safari/537.36")
WEVITY_BASE = "https://www.wevity.com"
# cidx=1 → 분야: 기획/아이디어
WEVITY_LIST = WEVITY_BASE + "/?c=find&s=1&gub=1&cidx=1&gp={page}"
WEVITY_DETAIL = WEVITY_BASE + "/?c=find&s=1&gub=1&cidx=1&gbn=view&gp=1&ix={ix}"

OUT_PATH = (Path(__file__).resolve().parent.parent
            / "next-app" / "public" / "data" / "contests-extra.json")

DELAY = 1.2          # 요청 간 예의 지연(초)
DETAIL_DELAY = 1.2

# 안정성 가드: 수집량이 비정상이면 기존 파일을 보존(덮어쓰기 거부)한다.
MIN_ENTRIES = 5      # 이보다 적으면 사이트 구조변경/차단 의심
MIN_RATIO = 0.5      # 직전 대비 이 비율 미만으로 급감하면 의심
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def now_kst_iso() -> str:
    return datetime.now(KST).replace(microsecond=0).isoformat()


def fetch(session: requests.Session, url: str, tries: int = 3) -> str | None:
    for attempt in range(tries):
        try:
            r = session.get(url, timeout=20)
            if r.status_code == 200 and r.text:
                r.encoding = r.apparent_encoding or "utf-8"
                return r.text
            print(f"  [warn] {r.status_code} {url}")
        except requests.RequestException as e:
            print(f"  [retry {attempt+1}] {url} :: {e}")
        time.sleep(DELAY * (attempt + 1))
    return None


def parse_dday(text: str) -> int | None:
    m = re.search(r"D-(\d+)", text)
    if m:
        return int(m.group(1))
    if "D-DAY" in text or "D-day" in text:
        return 0
    return None


def parse_dates(
    detail_html: str,
) -> tuple[str | None, str | None, str | None, str | None]:
    """상세 페이지에서 접수기간(시작/끝)과 심사발표(있으면) 추출."""
    soup = BeautifulSoup(detail_html, "html.parser")
    start = end = result = None
    homepage = None
    for li in soup.select(".cd-info li, .view-info li, dl li, .info li, li"):
        label = " ".join(li.stripped_strings)
        if "접수기간" in label:
            dates = re.findall(r"20\d{2}[.\-]\d{1,2}[.\-]\d{1,2}", label)
            if dates:
                start = norm_date(dates[0])
                if len(dates) > 1:
                    end = norm_date(dates[1])
        elif ("심사발표" in label or "결과발표" in label) and result is None:
            dates = re.findall(r"20\d{2}[.\-]\d{1,2}[.\-]\d{1,2}", label)
            if dates:
                result = norm_date(dates[0])
        elif "홈페이지" in label and homepage is None:
            a = li.select_one("a[href^=http]")
            if a:
                homepage = a.get("href")
    return start, end, result, homepage  # type: ignore[return-value]


def norm_date(s: str) -> str:
    """'2024.1.5' / '2024-12-5' 등을 ISO(YYYY-MM-DD)로 0-패딩 정규화.
    한 자리 월/일을 패딩하지 않으면 DATE_RE 검증 실패 + 프론트 Date.parse가
    엔진별로 NaN/오해석되어 D-day·마감정렬이 깨진다."""
    m = re.match(r"(20\d{2})[.\-](\d{1,2})[.\-](\d{1,2})", s.strip())
    if not m:
        return s.replace(".", "-").strip()
    y, mo, d = m.groups()
    return f"{y}-{int(mo):02d}-{int(d):02d}"


def status_to_section(status: str) -> str | None:
    s = status.strip()
    if "마감임박" in s or "접수중" in s:
        return "ongoing"
    if "접수예정" in s:
        return "ongoing"  # 예정도 진행 보드에 노출(시작일 표기)
    if "마감" in s:
        return None       # 마감된 공모는 진행 보드에서 제외
    return "ongoing"


def parse_list_page(html: str) -> list[dict]:
    soup = BeautifulSoup(html, "html.parser")
    items = soup.select("ul.list > li")
    out = []
    for li in items:
        tit_el = li.select_one(".tit")
        if not tit_el:
            continue  # 헤더 행 등
        a = li.select_one(".tit a[href*='ix=']") or li.select_one("a[href*='ix=']")
        if not a:
            continue
        # 제목: a 내부에서 배지 span(.stat spec/idea 등)을 제거한 순수 텍스트
        a_clean = BeautifulSoup(str(a), "html.parser").a
        for span in a_clean.select("span"):
            span.decompose()
        title = a_clean.get_text(strip=True)
        if not title or title == "공모전명":
            continue
        href = a.get("href")
        m = re.search(r"ix=(\d+)", href) if href else None
        ix = m.group(1) if m else None
        organ_el = li.select_one(".organ")
        organizer = organ_el.get_text(strip=True) if organ_el else ""
        full = " ".join(li.stripped_strings)
        # 분야 추출: .sub-tit("분야 : 기획/아이디어, ...")에서 깔끔히
        cat = ""
        sub = li.select_one(".sub-tit")
        if sub:
            cat = re.sub(r"^\s*분야\s*:?\s*", "", sub.get_text(" ", strip=True)).strip()
        if not cat:
            cat = "기획/아이디어"
        # 상태
        status = ""
        for kw in ("마감임박", "접수중", "접수예정", "마감"):
            if kw in full:
                status = kw
                break
        dday = parse_dday(full)
        out.append({
            "title": title, "ix": ix, "organizer": organizer,
            "category": cat, "status": status, "dday": dday,
            "list_url": (WEVITY_BASE + "/" + href) if href else None,
        })
    return out


def crawl_wevity(max_pages: int, fetch_detail: bool) -> list[dict]:
    session = requests.Session()
    session.headers.update({"User-Agent": UA})
    seen_ix: set[str] = set()
    entries: list[dict] = []
    for page in range(1, max_pages + 1):
        url = WEVITY_LIST.format(page=page)
        print(f"[위비티] 목록 p{page}: {url}")
        html = fetch(session, url)
        if not html:
            break
        rows = parse_list_page(html)
        if not rows:
            print("  (항목 없음 — 마지막 페이지)")
            break
        new_in_page = 0
        for row in rows:
            ix = row.get("ix")
            if ix and ix in seen_ix:
                continue
            if ix:
                seen_ix.add(ix)
            section = status_to_section(row.get("status", ""))
            if section is None:
                continue  # 마감 제외
            new_in_page += 1
            start = end = result = homepage = None
            detail_url = WEVITY_DETAIL.format(ix=ix) if ix else row.get("list_url")
            if fetch_detail and ix:
                time.sleep(DETAIL_DELAY)
                dhtml = fetch(session, detail_url)
                if dhtml:
                    start, end, result, homepage = parse_dates(dhtml)
            # 마감일 보정: 상세 없으면 D-day로 추정
            if not end and row.get("dday") is not None:
                end = (datetime.now(KST) + timedelta(days=row["dday"])).strftime("%Y-%m-%d")
            entry = {
                "title": row["title"],
                "category": row["category"],
                "organizer": row["organizer"] or "주최 미상",
                "submission_start": start,
                "submission_end": end,
                "result_date": result,
                "url": homepage or detail_url,
                "source_type": "crawl",
                "discovery_source": "위비티",
                "discovery_url": detail_url,
                "status": row.get("status") or "접수중",
                "source_checked_at": now_kst_iso(),
                "_section": section,
            }
            entries.append(entry)
        print(f"  +{new_in_page}건")
        time.sleep(DELAY)
    return entries


def build_feed(entries: list[dict]) -> dict:
    sections: dict[str, list[dict]] = {
        "starting_today": [], "ongoing": [], "awaiting_result": []
    }
    for e in entries:
        sec = e.pop("_section", "ongoing")
        sections.setdefault(sec, []).append(e)
    return {
        "generated_at": now_kst_iso(),
        "notice": "위비티 기획/아이디어 분야 자체 크롤 — AIMBA 보드 보강 소스",
        "source": "wevity.com (cidx=1 기획/아이디어)",
        "sections": sections,
    }


def validate_feed(feed: dict) -> list[str]:
    """출력 직전 스키마/값 무결성 점검. 치명/경고 메시지 리스트 반환."""
    errs: list[str] = []
    sections = feed.get("sections")
    if not isinstance(sections, dict):
        return ["sections 누락 또는 dict 아님"]
    for sec, items in sections.items():
        if not isinstance(items, list):
            errs.append(f"섹션 {sec} 가 리스트 아님")
            continue
        for i, e in enumerate(items):
            if not isinstance(e, dict) or not e.get("title"):
                errs.append(f"{sec}[{i}] title 없음(파싱 손상 의심)")
                continue
            for k in ("submission_start", "submission_end", "result_date"):
                v = e.get(k)
                if v and not DATE_RE.match(str(v)):
                    errs.append(f"{sec}[{i}] {k} 날짜형식 이상: {v}")
            u = e.get("url") or e.get("discovery_url")
            if u and not str(u).startswith(("http://", "https://")):
                errs.append(f"{sec}[{i}] url 비정상: {u}")
    return errs


def feed_total(feed: dict) -> int:
    sections = feed.get("sections", {})
    return sum(len(v) for v in sections.values() if isinstance(v, list))


def previous_total(path: Path) -> int | None:
    """기존 산출 파일의 항목 수(급감 판정 기준선). 없거나 깨졌으면 None."""
    try:
        old = json.loads(path.read_text(encoding="utf-8"))
        return feed_total(old)
    except Exception:
        return None


def atomic_write_json(path: Path, data: dict) -> None:
    """임시파일 기록 후 원자적 교체 — 중단 시 기존 파일 손상 방지."""
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(path)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--pages", type=int, default=4, help="위비티 목록 페이지 수")
    ap.add_argument("--no-detail", action="store_true", help="상세 페이지 생략(빠름)")
    ap.add_argument("--dry-run", action="store_true", help="파일 미기록, 결과만 출력")
    args = ap.parse_args()

    print(f"=== Contest crawl 시작 {now_kst_iso()} ===")
    entries = crawl_wevity(args.pages, fetch_detail=not args.no_detail)
    feed = build_feed(entries)
    total = sum(len(v) for v in feed["sections"].values())
    print(f"\n수집 완료: 총 {total}건 (ongoing {len(feed['sections']['ongoing'])})")
    for e in entries[:5]:
        print(f"  - {e['title'][:36]} | {e['category'][:24]} | "
              f"{e.get('submission_start')}~{e.get('submission_end')}")

    # ── 무결성 검증 ──────────────────────────────────────────────
    errs = validate_feed(feed)
    fatal = [e for e in errs if "title 없음" in e or "sections 누락" in e]
    if errs:
        print(f"[validate] 경고 {len(errs)}건:")
        for e in errs[:10]:
            print("  -", e)

    # ── 급감/빈약 가드: 비정상이면 기존 파일 보존 ────────────────
    prev = previous_total(OUT_PATH)
    if total < MIN_ENTRIES:
        print(f"[abort] {total}건(<{MIN_ENTRIES}) — 수집 실패 의심, 기존 파일 보존")
        return 2
    if prev is not None and prev > 0 and total < prev * MIN_RATIO:
        print(f"[abort] {total}건이 직전 {prev}건의 {MIN_RATIO:.0%} 미만 — 급감 의심, 보존")
        return 2
    if fatal:
        print(f"[abort] 치명 검증 오류 {len(fatal)}건 — 파싱 손상 의심, 보존")
        return 2

    if args.dry_run:
        print(f"[dry-run] 검증 통과(직전 {prev}건 → 신규 {total}건). 파일 미기록")
        return 0

    atomic_write_json(OUT_PATH, feed)
    print(f"기록: {OUT_PATH} ({total}건, 직전 {prev}건)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
