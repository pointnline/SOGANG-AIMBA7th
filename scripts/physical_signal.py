#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
physical_signal.py — Physical AI 섹터워치 → AIMBA 브리핑 'Physical AI · 로보틱스' 섹션 주간 신호 다이제스트

목적: /aimba Phase 1에서 physical 섹터 수집 소스로 쓰는 '주간 신호' 한 장을 만든다.
     (급등락 종목 → 뉴스 검색 리드, CORE 뉴스 → 기사 후보, 레이어 등락 → narrative 1문장)

입력(섹터워치 데이터, 읽기 전용 — 절대 쓰지 않음):
  data/universe.json   196종목·9레이어
  data/history.jsonl   일별 압축 시세(p·c·c5·c20·m) — 주간 수익률은 여기서 시작일↔종료일 종가로 계산
  data/snapshot.json   최신 스냅샷(뉴스·외부신호·생성시각)

사용:
  python scripts/physical_signal.py --since 2026-08-31 --until 2026-09-07
  python scripts/physical_signal.py --since 2026-08-31 --until 2026-09-07 --out digest.md --json digest.json
  python scripts/physical_signal.py ... --strict   # 스냅샷이 3일 넘게 낡았으면 exit 2 (게이트용)

종료코드: 0 정상 / 1 입력 파일 없음·윈도우 데이터 없음 / 2 --strict 인데 스냅샷 stale
"""
import argparse
import io
import json
import os
import re
import sys
from datetime import date, datetime, timedelta
from email.utils import parsedate_to_datetime
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")  # cp949 콘솔 이모지 크래시 방지
except Exception:
    pass

DEFAULT_WATCH = Path(os.environ.get("PAI_WATCH_DIR", r"C:\Users\jun16\Projects\physical-ai-watch"))
STALE_DAYS = 3
# 시세 요약 성격의 잡음 매체/제목 (기사 후보에서 제외)
NOISE_SOURCES = {"Stocktwits", "MarketBeat", "Simply Wall St", "Seeking Alpha", "Zacks", "Investing.com", "TipRanks"}
NOISE_TITLE = re.compile(r"Stock Price|Trading Ideas|Stock Forecast|Price Target|주가 전망|목표주가|Analyst Rating", re.I)


def load_json(p: Path):
    if not p.exists():
        sys.exit(f"[ERR] 파일 없음: {p}")
    return json.load(io.open(p, encoding="utf-8"))


def parse_date(s: str) -> date:
    return datetime.strptime(s, "%Y-%m-%d").date()


def load_history(p: Path):
    if not p.exists():
        sys.exit(f"[ERR] 파일 없음: {p}")
    rows = []
    for line in io.open(p, encoding="utf-8"):
        line = line.strip()
        if not line:
            continue
        try:
            j = json.loads(line)
        except json.JSONDecodeError:
            continue
        if j.get("resolved", 0) > 0 and j.get("quotes"):
            rows.append(j)
    rows.sort(key=lambda r: r["date"])
    return rows


def pick_rows(rows, since: date, until: date):
    """시작 행 = since 이전(또는 같은) 마지막 거래일 행, 종료 행 = until 이전(또는 같은) 마지막 행."""
    start = None
    end = None
    for r in rows:
        d = parse_date(r["date"])
        if d <= since:
            start = r
        if d <= until:
            end = r
    if start is None:  # since 이전 데이터가 없으면 윈도우 안 첫 행
        for r in rows:
            if since <= parse_date(r["date"]) <= until:
                start = r
                break
    return start, end


def news_date(s: str):
    try:
        return parsedate_to_datetime(s).date()
    except Exception:
        return None


def fmt_pct(x):
    return f"{x:+.1f}%"


def build(args):
    W = Path(args.watch)
    uni = load_json(W / "data" / "universe.json")
    snap = load_json(W / "data" / "snapshot.json")
    rows = load_history(W / "data" / "history.jsonl")
    since, until = parse_date(args.since), parse_date(args.until)

    layers = {L["id"]: L.get("name", L["id"]) for L in uni.get("layers", [])}
    stocks = {s["ticker"]: s for s in uni.get("stocks", [])}

    # --- 신선도 ---
    gen = snap.get("generated", "")
    gen_date = None
    try:
        gen_date = datetime.fromisoformat(gen).date()
    except Exception:
        pass
    stale_days = (until - gen_date).days if gen_date else 999
    fresh = stale_days <= STALE_DAYS

    # --- 주간 수익률 ---
    start, end = pick_rows(rows, since, until)
    if not start or not end or start is end:
        print(f"[ERR] 윈도우({since}~{until}) 안에 비교할 history 행이 부족합니다. 행 수={len(rows)}, "
              f"마지막 행={rows[-1]['date'] if rows else '없음'}")
        sys.exit(1)
    rets = []
    for tkr, q1 in end["quotes"].items():
        q0 = start["quotes"].get(tkr)
        if not q0 or not q0.get("p") or not q1.get("p"):
            continue
        r = (q1["p"] / q0["p"] - 1) * 100
        s = stocks.get(tkr, {})
        rets.append({
            "ticker": tkr, "name": s.get("name", tkr), "market": s.get("market", "?"),
            "layer": s.get("layer", "?"), "core": bool(s.get("core")), "ret": round(r, 2),
            "mcap": q1.get("m"),
        })
    if not rets:
        print("[ERR] 수익률 계산 가능 종목 0")
        sys.exit(1)

    by_layer = {}
    for x in rets:
        by_layer.setdefault(x["layer"], []).append(x)
    layer_rows = []
    for L in sorted(by_layer):
        xs = by_layer[L]
        avg = sum(x["ret"] for x in xs) / len(xs)
        best = max(xs, key=lambda x: x["ret"])
        worst = min(xs, key=lambda x: x["ret"])
        layer_rows.append({"layer": L, "name": layers.get(L, L), "avg": round(avg, 2), "n": len(xs),
                           "best": best, "worst": worst})
    top = sorted(rets, key=lambda x: -x["ret"])[:5]
    bottom = sorted(rets, key=lambda x: x["ret"])[:5]
    core_top = sorted([x for x in rets if x["core"]], key=lambda x: -x["ret"])[:5]
    core_bottom = sorted([x for x in rets if x["core"]], key=lambda x: x["ret"])[:5]

    # --- 윈도우 내 CORE 뉴스 (기사 후보 리드) ---
    leads = []
    for tkr, items in (snap.get("news") or {}).items():
        s = stocks.get(tkr, {})
        for it in items or []:
            d = news_date(it.get("pubDate", ""))
            if not d or not (since <= d <= until):
                continue
            src = it.get("source", "")
            title = it.get("title", "")
            if src in NOISE_SOURCES or NOISE_TITLE.search(title):
                continue
            leads.append({"date": d.isoformat(), "ticker": tkr, "name": s.get("name", tkr),
                          "layer": s.get("layer", "?"), "title": title, "source": src, "link": it.get("link", "")})
    leads.sort(key=lambda x: x["date"], reverse=True)

    # --- 외부 신호 카운트 ---
    sig = snap.get("signals") or {}
    sig_counts = {}
    if isinstance(sig, dict):
        for k, v in sig.items():
            if isinstance(v, list):
                sig_counts[k] = len(v)
            elif isinstance(v, dict):
                for k2, v2 in v.items():
                    if isinstance(v2, list):
                        sig_counts[f"{k}.{k2}"] = len(v2)
    sig_date = sig.get("collected") or sig.get("date") if isinstance(sig, dict) else None

    # --- 브리핑용 1문장 초안 ---
    best_L = max(layer_rows, key=lambda x: x["avg"])
    worst_L = min(layer_rows, key=lambda x: x["avg"])
    sd, ed = start["date"], end["date"]
    sentence = (f"📡 섹터워치 주간 신호({sd[5:].replace('-', '/')}~{ed[5:].replace('-', '/')}, {len(rets)}종목 실측): "
                f"9레이어 중 가장 강한 층은 {best_L['name']}({best_L['layer']}) 평균 {fmt_pct(best_L['avg'])}, "
                f"가장 약한 층은 {worst_L['name']}({worst_L['layer']}) {fmt_pct(worst_L['avg'])}. "
                f"급등 1위 {top[0]['name']}({top[0]['ticker']}) {fmt_pct(top[0]['ret'])}, "
                f"급락 1위 {bottom[0]['name']}({bottom[0]['ticker']}) {fmt_pct(bottom[0]['ret'])}.")

    # --- 마크다운 ---
    md = []
    md.append(f"# 📡 Physical AI 섹터워치 주간 신호 ({since} ~ {until})")
    md.append(f"- 데이터: history.jsonl {sd} → {ed} 종가 비교, 종목 {len(rets)}/{len(stocks)} · "
              f"스냅샷 생성 {gen[:16]} → {'FRESH' if fresh else f'STALE({stale_days}일 경과) — run.bat 재실행 권장'}")
    md.append("- 출처: Physical AI Sector Watch 배치(FDR 시세·구글뉴스 RSS). 브리핑에 수치를 쓸 땐 '섹터워치 실측' 라벨을 붙인다.")
    md.append("")
    md.append("## 레이어별 주간 등락 (단순평균)")
    md.append("| 레이어 | 평균 | 종목수 | 최고 | 최저 |")
    md.append("|---|---:|---:|---|---|")
    for L in layer_rows:
        md.append(f"| {L['layer']} {L['name']} | {fmt_pct(L['avg'])} | {L['n']} | "
                  f"{L['best']['name']} {fmt_pct(L['best']['ret'])} | {L['worst']['name']} {fmt_pct(L['worst']['ret'])} |")
    md.append("")

    def block(title, xs):
        md.append(f"## {title}")
        for i, x in enumerate(xs, 1):
            md.append(f"{i}. {x['name']} ({x['ticker']}·{x['market']}·{x['layer']}{'·CORE' if x['core'] else ''}) {fmt_pct(x['ret'])}")
        md.append("")

    block("급등 TOP5 (전체)", top)
    block("급락 TOP5 (전체)", bottom)
    block("급등 TOP5 (CORE)", core_top)
    block("급락 TOP5 (CORE)", core_bottom)

    md.append(f"## 윈도우 내 CORE 종목 뉴스 — 기사 후보 리드 ({len(leads)}건, 잡음 매체 제외)")
    md.append("> 링크는 구글뉴스 RSS 리다이렉트다. 브리핑에 실을 땐 원문 URL을 찾아 HTTP 200을 다시 확인한다.")
    for x in leads[: args.max_leads]:
        md.append(f"- [{x['date']}] {x['name']}({x['ticker']}·{x['layer']}) — {x['title']} ({x['source']}) {x['link']}")
    md.append("")
    md.append("## 외부 신호 카운트 (arXiv·GitHub·SEC·Kaggle·HF)")
    md.append("- " + (", ".join(f"{k} {v}" for k, v in sig_counts.items()) if sig_counts else "없음")
              + (f" · 수집일 {sig_date}" if sig_date else ""))
    md.append("")
    md.append("## 브리핑용 1문장 초안 (physical 섹션 narrative 말미)")
    md.append(sentence)
    md.append("")
    md.append("## 수집 리드 (뉴스 검색어)")
    names = [x["name"] for x in top[:3] + bottom[:2]]
    md.append("- 급등락 종목명으로 검색: " + " · ".join(names))
    md.append("- 레이어 키워드: " + " · ".join(f"{L['layer']} {L['name']}" for L in sorted(layer_rows, key=lambda x: -abs(x['avg']))[:3]))

    out_md = "\n".join(md) + "\n"
    out_json = {
        "window": {"since": args.since, "until": args.until, "start_row": sd, "end_row": ed},
        "snapshot_generated": gen, "fresh": fresh, "stale_days": stale_days,
        "n": len(rets), "layers": layer_rows, "top": top, "bottom": bottom,
        "core_top": core_top, "core_bottom": core_bottom, "leads": leads[: args.max_leads],
        "signals": sig_counts, "sentence": sentence,
    }
    return out_md, out_json, fresh, stale_days


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--since", required=True, help="수집창 시작 YYYY-MM-DD")
    ap.add_argument("--until", required=True, help="수집창 끝(발간일) YYYY-MM-DD")
    ap.add_argument("--watch", default=str(DEFAULT_WATCH), help="physical-ai-watch 루트 (env PAI_WATCH_DIR)")
    ap.add_argument("--out", help="마크다운 저장 경로")
    ap.add_argument("--json", help="JSON 저장 경로")
    ap.add_argument("--max-leads", type=int, default=25)
    ap.add_argument("--strict", action="store_true", help="스냅샷 stale이면 exit 2")
    ap.add_argument("--quiet", action="store_true", help="stdout에 다이제스트를 찍지 않음")
    args = ap.parse_args()

    out_md, out_json, fresh, stale_days = build(args)
    if args.out:
        Path(args.out).parent.mkdir(parents=True, exist_ok=True)
        io.open(args.out, "w", encoding="utf-8", newline="\n").write(out_md)
    if args.json:
        Path(args.json).parent.mkdir(parents=True, exist_ok=True)
        io.open(args.json, "w", encoding="utf-8", newline="\n").write(json.dumps(out_json, ensure_ascii=False, indent=1))
    if not args.quiet:
        print(out_md)
    if args.strict and not fresh:
        print(f"[STALE] 스냅샷 {stale_days}일 경과 (임계 {STALE_DAYS}일) — run.bat 재실행 후 다시 시도", file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
