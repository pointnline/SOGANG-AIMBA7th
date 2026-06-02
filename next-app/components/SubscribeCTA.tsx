"use client";

import { SUBSCRIBE } from "@/lib/data";
import { TOKENS as T } from "@/lib/tokens";
import { trackEvent } from "@/lib/ga";

// ─────────────────────────────────────────────────────────────
// 구독 / 재방문 장치 — 새 호 발간 알림 받기.
//
// 텔레그램 채널(SUBSCRIBE.telegram)이 설정되면 텔레그램 버튼이 자동 노출되고,
// 없으면 이메일 알림(formUrl 또는 mailto 폴백)만 노출한다. 서버 없이 동작.
// 클릭 시 GA4 subscribe_click 이벤트로 채널별 전환을 집계한다.
// ─────────────────────────────────────────────────────────────

export function SubscribeCTA({
  variant = "panel",
}: {
  variant?: "panel" | "compact";
}) {
  const hasTelegram = Boolean(SUBSCRIBE.telegram);
  const emailHref = SUBSCRIBE.formUrl || SUBSCRIBE.mailto;
  const compact = variant === "compact";

  const fire = (channel: string) =>
    trackEvent("subscribe_click", { channel, variant });

  return (
    <section
      aria-label="구독"
      style={{
        marginTop: 22,
        background: T.wine,
        color: T.paper,
        borderRadius: 14,
        padding: compact ? "26px 28px" : "34px 40px",
        backgroundImage:
          "linear-gradient(135deg, #8B0029 0%, #5e001b 100%)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 10,
          letterSpacing: "0.32em",
          color: "rgba(255,255,255,0.72)",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        SUBSCRIBE · 발간 알림
      </div>
      <h3
        style={{
          fontFamily: "var(--serif-display)",
          fontSize: compact ? 24 : 28,
          fontWeight: 500,
          fontStyle: "italic",
          margin: 0,
          letterSpacing: "-0.012em",
        }}
      >
        {SUBSCRIBE.headline}
      </h3>
      <p
        style={{
          fontFamily: "var(--korean)",
          fontSize: 13.5,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.85)",
          marginTop: 12,
          maxWidth: 540,
        }}
      >
        {SUBSCRIBE.sub}
      </p>

      <div
        className="button-row"
        style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        {hasTelegram && (
          <a
            href={SUBSCRIBE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fire("telegram")}
            style={{
              padding: "12px 22px",
              background: "#fff",
              color: T.wine,
              borderRadius: 6,
              fontFamily: "var(--korean)",
              fontSize: 13.5,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ✈ 텔레그램으로 받기
          </a>
        )}
        <a
          href={emailHref}
          onClick={() => fire(SUBSCRIBE.formUrl ? "form" : "email")}
          style={{
            padding: "12px 22px",
            background: hasTelegram ? "rgba(255,255,255,0.12)" : "#fff",
            color: hasTelegram ? T.paper : T.wine,
            border: hasTelegram
              ? "1px solid rgba(255,255,255,0.4)"
              : "none",
            borderRadius: 6,
            fontFamily: "var(--korean)",
            fontSize: 13.5,
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          ✉ 이메일 알림 신청
        </a>
      </div>

      <div
        style={{
          marginTop: 14,
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.04em",
        }}
      >
        스팸 없음 · 새 호가 나올 때만
      </div>
    </section>
  );
}
