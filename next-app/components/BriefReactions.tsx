"use client";

import { useEffect, useState } from "react";
import { TOKENS as T } from "@/lib/tokens";
import { trackEvent, hasFiredOnce, setFiredFlag } from "@/lib/ga";

// ─────────────────────────────────────────────────────────────
// 브리프 호(issue) 단위 좋아요 / 체크 버튼
//
// 클릭 → GA4 커스텀 이벤트(brief_like / brief_check) 발사.
// 한 브라우저당 1회만 집계되도록 localStorage 플래그로 중복 발사 차단.
// UX 는 토글(켜고 끄기 가능)하되, GA 이벤트는 최초 1회만 쏜다.
// 서버(Supabase) 없이 동작 — 실시간 카운터는 표시하지 않고 GA4 에 집계만 한다.
// ─────────────────────────────────────────────────────────────

type Props = {
  issueVol: number | string;
  issueTitle?: string;
};

export function BriefReactions({ issueVol, issueTitle }: Props) {
  const volKey = String(issueVol);
  const [liked, setLiked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [ready, setReady] = useState(false);

  // 마운트 시 저장된 상태 복원 (SSR/정적 export 안전)
  useEffect(() => {
    setLiked(hasFiredOnce(`brief_like_state_${volKey}`));
    setChecked(hasFiredOnce(`brief_check_state_${volKey}`));
    setReady(true);
  }, [volKey]);

  const toggle = (
    kind: "like" | "check",
    on: boolean,
    setOn: (v: boolean) => void
  ) => {
    const next = !on;
    setOn(next);
    setFiredFlag(`brief_${kind}_state_${volKey}`, next);
    // GA4 이벤트는 최초 1회만 (취소·재클릭 시 중복 집계 방지)
    if (next) {
      const fireKey = `brief_${kind}_fired_${volKey}`;
      if (!hasFiredOnce(fireKey)) {
        trackEvent(`brief_${kind}`, {
          issue_vol: volKey,
          issue_title: issueTitle ?? "",
        });
        setFiredFlag(fireKey, true);
      }
    }
  };

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "9px 16px",
    borderRadius: 999,
    border: `1px solid ${T.rule}`,
    background: "#fff",
    color: T.ink2,
    fontFamily: "var(--korean)",
    fontSize: 13.5,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all .15s ease",
  };

  const activeStyle: React.CSSProperties = {
    background: T.wine,
    color: T.paper,
    borderColor: T.wine,
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <button
        type="button"
        aria-pressed={liked}
        onClick={() => toggle("like", liked, setLiked)}
        style={{ ...btnBase, ...(ready && liked ? activeStyle : {}) }}
      >
        <span>{ready && liked ? "♥" : "♡"}</span>
        <span>좋아요{ready && liked ? " · 완료" : ""}</span>
      </button>
      <button
        type="button"
        aria-pressed={checked}
        onClick={() => toggle("check", checked, setChecked)}
        style={{ ...btnBase, ...(ready && checked ? activeStyle : {}) }}
      >
        <span>{ready && checked ? "✓" : "○"}</span>
        <span>읽음 체크{ready && checked ? " · 완료" : ""}</span>
      </button>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10.5,
          color: T.ink3,
          letterSpacing: "0.04em",
        }}
      >
        반응은 익명 집계됩니다
      </span>
    </div>
  );
}
