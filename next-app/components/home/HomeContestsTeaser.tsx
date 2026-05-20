import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

export function HomeContestsTeaser() {
  return (
    <div
      style={{
        marginTop: 22,
        background: T.paper2,
        border: `1px solid ${T.rule}`,
        borderRadius: 14,
        padding: "32px 36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 220,
          height: "100%",
          background: `linear-gradient(135deg, transparent 0%, ${T.wineSoft}11 60%, ${T.wineSoft}22 100%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: 40,
          alignItems: "center",
          position: "relative",
        }}
        className="brief-lead-grid"
      >
        <div>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: T.wine,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            AI CONTEST BOARD · LIVE FEED
          </div>
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 32,
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.2,
              margin: 0,
              color: T.ink,
              letterSpacing: "-0.012em",
            }}
          >
            국내 AI 이미지·영상 공모전,
            <br />
            한 신문에서 한눈에.
          </h3>
          <p
            style={{
              fontFamily: "var(--korean)",
              fontSize: 13.5,
              lineHeight: 1.85,
              color: T.ink2,
              marginTop: 16,
              maxWidth: 520,
            }}
          >
            공개 데이터 소스의 공모전 정보를 P&amp;L 신문 스타일로 재구성해
            마감일·주최·부문 필터를 한 화면에 정리했습니다. 데이터 원본은{" "}
            <strong style={{ color: T.wine }}>junyeo217/ai-contest-board</strong>
            의 공개 JSON을 실시간 인용합니다.
          </p>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={sitePath("/contests/")}
              style={{
                padding: "12px 22px",
                background: T.wine,
                color: T.paper,
                borderRadius: 6,
                fontFamily: "var(--sans)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                display: "inline-block",
              }}
            >
              BOARD 열기 →
            </a>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: T.ink3,
                letterSpacing: "0.1em",
              }}
            >
              DATA · junyeo217/ai-contest-board
            </span>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            background: "#fff",
            border: `1px solid ${T.rule}`,
            borderRadius: 8,
            padding: "20px 22px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: T.wine,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            BOARD SECTIONS
          </div>
          {[
            { label: "오늘 시작 공모전", short: "STARTING" },
            { label: "진행 중인 공모전", short: "ONGOING" },
            { label: "발표 대기 공모전", short: "AWAITING" },
          ].map((sec) => (
            <div
              key={sec.short}
              style={{
                padding: "10px 0",
                borderBottom: `1px solid ${T.rule}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--korean)",
                  fontSize: 13.5,
                  color: T.ink2,
                  fontWeight: 500,
                }}
              >
                {sec.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: T.ink3,
                  letterSpacing: "0.12em",
                }}
              >
                {sec.short}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: 12,
              fontFamily: "var(--mono)",
              fontSize: 10.5,
              color: T.ink3,
              letterSpacing: "0.1em",
            }}
          >
            FILTER · 이미지 / 영상 / 전체
          </div>
        </div>
      </div>
    </div>
  );
}
