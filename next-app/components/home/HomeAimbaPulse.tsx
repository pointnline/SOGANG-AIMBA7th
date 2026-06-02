"use client";

import { useEffect, useState } from "react";
import { TOKENS as T } from "@/lib/tokens";
import { trackEvent, hasFiredOnce, setFiredFlag } from "@/lib/ga";

// ─────────────────────────────────────────────────────────────
// AIMBA Pulse — 다음 호에서 더 다뤘으면 하는 주제 투표
//
// 4개 토픽 중 1개 선택 → GA4 커스텀 이벤트(pulse_vote) 발사.
// 월(period)당 1회만 집계(localStorage). 서버 없이 동작.
// option_id 는 issues/future-report.html 의 voteOptions 와 동일하게 맞춤.
//
// 집계는 GA4 이벤트 'pulse_vote' 의 option_id 파라미터별 count 로 확인 →
// Future Report 발간 시점에 스냅샷으로 반영.
// ─────────────────────────────────────────────────────────────

const PULSE_OPTIONS = [
  { id: "ai-agent-workflow", label: "AI Agent가 실제 업무를 바꾸는 방식" },
  { id: "startup-funding", label: "스타트업 투자·정부지원사업 기회" },
  { id: "mba-career-shift", label: "AI 시대 MBA 커리어 전환 전략" },
  { id: "real-estate-rwa", label: "부동산·RWA·금융 인프라 변화" },
];

// 월 단위 투표 키 (브라우저 로컬 시간 기준 YYYY-MM)
function currentPeriod(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function HomeAimbaPulse() {
  const [voted, setVoted] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const p = currentPeriod();
    setPeriod(p);
    try {
      const saved = window.localStorage.getItem(`pulse_vote_${p}`);
      if (saved) setVoted(saved);
    } catch {
      /* noop */
    }
    setReady(true);
  }, []);

  const vote = (id: string) => {
    if (voted) return; // 이번 달 이미 투표함
    setVoted(id);
    try {
      window.localStorage.setItem(`pulse_vote_${period}`, id);
    } catch {
      /* noop */
    }
    const fireKey = `pulse_vote_fired_${period}`;
    if (!hasFiredOnce(fireKey)) {
      const opt = PULSE_OPTIONS.find((o) => o.id === id);
      trackEvent("pulse_vote", {
        option_id: id,
        option: opt?.label ?? id,
        period,
      });
      setFiredFlag(fireKey, true);
    }
  };

  return (
    <section
      id="aimbaPulse"
      style={{
        marginTop: 22,
        background: "#fff",
        border: `1px solid ${T.rule}`,
        borderRadius: 14,
        padding: "32px 36px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 10,
          letterSpacing: "0.32em",
          color: T.wine,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        AIMBA PULSE · 다음 호 주제 투표
      </div>
      <h3
        style={{
          fontFamily: "var(--serif-display)",
          fontSize: 28,
          fontWeight: 500,
          fontStyle: "italic",
          margin: 0,
          color: T.ink,
          letterSpacing: "-0.012em",
        }}
      >
        다음 호, 무엇을 더 깊게 다룰까요?
      </h3>
      <p
        style={{
          fontFamily: "var(--korean)",
          fontSize: 13.5,
          lineHeight: 1.8,
          color: T.ink2,
          marginTop: 12,
          maxWidth: 560,
        }}
      >
        한 가지를 골라주세요. 이번 달 투표는 Future Report의 미래 신호 레이더에
        반영됩니다.
      </p>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
        className="pulse-grid"
      >
        {PULSE_OPTIONS.map((opt) => {
          const isPicked = ready && voted === opt.id;
          const dimmed = ready && voted !== null && !isPicked;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => vote(opt.id)}
              disabled={ready && voted !== null}
              aria-pressed={isPicked}
              style={{
                textAlign: "left",
                padding: "16px 18px",
                borderRadius: 10,
                border: isPicked
                  ? `1.5px solid ${T.wine}`
                  : `1px solid ${T.rule}`,
                background: isPicked ? `${T.wine}` : T.paper,
                color: isPicked ? T.paper : T.ink,
                cursor: ready && voted !== null ? "default" : "pointer",
                opacity: dimmed ? 0.55 : 1,
                fontFamily: "var(--korean)",
                fontSize: 14.5,
                fontWeight: 600,
                lineHeight: 1.45,
                transition: "all .15s ease",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  color: isPicked ? "rgba(255,255,255,0.7)" : T.wine,
                  marginBottom: 7,
                }}
              >
                {isPicked ? "✓ MY VOTE" : "VOTE"}
              </span>
              {opt.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 16,
          fontFamily: "var(--mono)",
          fontSize: 10.5,
          color: T.ink3,
          letterSpacing: "0.04em",
        }}
      >
        {ready && voted
          ? "투표 완료 · 이번 달 투표가 반영되었습니다"
          : "익명 투표 · 이번 달 1회"}
      </div>
    </section>
  );
}
