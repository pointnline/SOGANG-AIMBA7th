"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SEARCH_INDEX, type SearchDoc } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";
import { trackEvent } from "@/lib/ga";

// ─────────────────────────────────────────────────────────────
// 사이트 검색 — 무의존성 클라이언트 검색.
//
// SEARCH_INDEX(빌드타임 평탄화: 풀콘텐츠 호 기사 + 전체 호 헤드라인)를
// 공백 토큰 AND 매칭으로 즉시 필터. 서버·외부 라이브러리 0.
// 사이드바의 기존 "SEARCH..." 자리( HomeSidebar )를 실제 입력으로 대체한다.
// ─────────────────────────────────────────────────────────────

function runSearch(q: string): SearchDoc[] {
  const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const hits: { d: SearchDoc; score: number }[] = [];
  for (const d of SEARCH_INDEX) {
    const title = d.title.toLowerCase();
    const hay = `${title} ${d.desc} ${d.source} ${d.sectionLabel} ${d.code} vol.${d.vol}`.toLowerCase();
    if (!tokens.every((t) => hay.includes(t))) continue;
    const titleHits = tokens.filter((t) => title.includes(t)).length;
    hits.push({ d, score: titleHits * 3 + (d.kind === "article" ? 1 : 0) });
  }
  hits.sort((a, b) => b.score - a.score || b.d.vol - a.d.vol);
  return hits.slice(0, 8).map((h) => h.d);
}

export function SiteSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  const results = useMemo(() => runSearch(q), [q]);

  // 외부 클릭 / Esc 로 닫기
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSelect = (d: SearchDoc) => {
    trackEvent("site_search_select", {
      query: q.slice(0, 60),
      target: d.href,
      vol: d.vol,
    });
  };

  return (
    <div
      ref={wrapRef}
      className="site-search"
      style={{ position: "relative", marginTop: 20 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          background: "#fff",
          border: `1px solid ${open ? T.wine : T.rule}`,
          borderRadius: 4,
          transition: "border-color .15s ease",
        }}
      >
        <span aria-hidden style={{ color: T.ink3, fontSize: 13 }}>
          ⌕
        </span>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            if (!firedRef.current && e.target.value.trim().length >= 2) {
              firedRef.current = true;
              trackEvent("site_search", { session: 1 });
            }
          }}
          onFocus={() => setOpen(true)}
          placeholder="호·기사·키워드 검색…"
          aria-label="사이트 검색"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--korean)",
            fontSize: 12.5,
            color: T.ink,
            minWidth: 0,
          }}
        />
        {q && (
          <button
            type="button"
            aria-label="검색어 지우기"
            onClick={() => {
              setQ("");
              setOpen(false);
            }}
            style={{ color: T.ink3, fontSize: 13, lineHeight: 1 }}
          >
            ✕
          </button>
        )}
      </div>

      {open && q.trim().length >= 1 && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            minWidth: 260,
            zIndex: 40,
            background: "#fff",
            border: `1px solid ${T.rule}`,
            borderRadius: 8,
            boxShadow: "0 12px 30px rgba(26,23,20,0.16)",
            overflow: "hidden",
            maxHeight: 380,
            overflowY: "auto",
          }}
        >
          {results.length === 0 ? (
            <div
              style={{
                padding: "16px 16px",
                fontFamily: "var(--korean)",
                fontSize: 12.5,
                color: T.ink3,
              }}
            >
              “{q.trim()}” 결과가 없습니다.
            </div>
          ) : (
            results.map((d, i) => (
              <a
                key={`${d.href}-${i}`}
                href={sitePath(d.href)}
                role="option"
                aria-selected={false}
                onClick={() => onSelect(d)}
                style={{
                  display: "block",
                  padding: "11px 14px",
                  borderBottom:
                    i < results.length - 1 ? `1px solid ${T.rule}` : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      color: T.wine,
                      fontWeight: 700,
                    }}
                  >
                    {d.code}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9.5,
                      color: T.ink3,
                    }}
                  >
                    Vol.{d.vol}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--korean)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: T.ink,
                    lineHeight: 1.35,
                  }}
                >
                  {d.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--korean)",
                    fontSize: 11.5,
                    color: T.ink3,
                    lineHeight: 1.5,
                    marginTop: 3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {d.desc}
                </div>
              </a>
            ))
          )}
          <div
            style={{
              padding: "8px 14px",
              background: T.paper2,
              fontFamily: "var(--mono)",
              fontSize: 9.5,
              color: T.ink3,
              letterSpacing: "0.04em",
            }}
          >
            {SEARCH_INDEX.length}개 항목에서 검색 · Esc 닫기
          </div>
        </div>
      )}
    </div>
  );
}
