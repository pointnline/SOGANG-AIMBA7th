"use client";

import { useState } from "react";
import { TOPIC_GROUPS } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";
import { trackEvent } from "@/lib/ga";

// ─────────────────────────────────────────────────────────────
// 아카이브 횡단 탐색 — 토픽(섹션 code) 기준으로 여러 호의 기사를 가로로 묶어 본다.
// "AI만 모아보기", "Vibe Coding만 모아보기" 식의 종단이 아니라, 호를 가로지르는
// 주제 탐색. TOPIC_GROUPS(빌드타임 집계)를 클라이언트에서 칩으로 전환.
// ─────────────────────────────────────────────────────────────

export function ArchiveExplorer() {
  const [active, setActive] = useState(TOPIC_GROUPS[0]?.code ?? "");
  const group =
    TOPIC_GROUPS.find((g) => g.code === active) ?? TOPIC_GROUPS[0];

  if (!group) return null;

  return (
    <div>
      {/* 토픽 칩 */}
      <div
        className="archive-chips"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 28,
        }}
      >
        {TOPIC_GROUPS.map((g) => {
          const on = g.code === active;
          return (
            <button
              key={g.code}
              type="button"
              onClick={() => {
                setActive(g.code);
                trackEvent("archive_topic", { code: g.code });
              }}
              aria-pressed={on}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 16px",
                borderRadius: 999,
                border: on ? `1.5px solid ${T.wine}` : `1px solid ${T.rule}`,
                background: on ? T.wine : "#fff",
                color: on ? T.paper : T.ink2,
                fontFamily: "var(--korean)",
                fontSize: 13,
                fontWeight: 600,
                transition: "all .15s ease",
              }}
            >
              {g.label}
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: on ? "rgba(255,255,255,0.75)" : T.ink3,
                }}
              >
                {String(g.count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {/* 선택 토픽의 호 횡단 기사 목록 */}
      <div style={{ display: "grid", gap: 14 }}>
        {group.articles.map((a, i) => (
          <a
            key={`${a.href}-${i}`}
            href={sitePath(a.href)}
            style={{
              display: "block",
              padding: "20px 22px",
              background: "#fff",
              border: `1px solid ${T.rule}`,
              borderRadius: 12,
            }}
            className="archive-topic-card"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: T.ink3,
              }}
            >
              <span style={{ color: T.wine, fontWeight: 700 }}>
                Vol.{a.vol}
              </span>
              <span>{a.date}</span>
              {a.source && <span>· {a.source}</span>}
            </div>
            <div
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 19,
                fontWeight: 600,
                color: T.ink,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              {a.title}
            </div>
            <p
              style={{
                fontFamily: "var(--korean)",
                fontSize: 13,
                lineHeight: 1.7,
                color: T.ink2,
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              {a.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
