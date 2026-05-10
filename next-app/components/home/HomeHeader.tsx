import { TOKENS as T } from "@/lib/tokens";

export function HomeHeader() {
  return (
    <header
      style={{
        background: `linear-gradient(180deg, ${T.wineDeep} 0%, ${T.wine} 65%, #6b0021 100%)`,
        color: "#faf6ef",
        padding: "40px 64px 56px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--sans)",
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "rgba(250,246,239,0.78)",
          fontWeight: 600,
          paddingBottom: 14,
          borderBottom: "1px solid rgba(250,246,239,0.18)",
          position: "relative",
        }}
      >
        <span>SOGANG AIMBA 7TH · 미래혁신국</span>
        <div style={{ display: "flex", gap: 28 }}>
          <span>VOL. 23</span>
          <span>2026 · 05 · 09 SAT</span>
          <span>편집: 미래혁신국</span>
        </div>
      </div>

      <div style={{ marginTop: 40, position: "relative", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 22,
          }}
        >
          <svg
            width="74"
            height="58"
            viewBox="0 0 72 58"
            style={{ opacity: 0.85 }}
          >
            <g fill="rgba(250,246,239,0.85)">
              <rect x="6" y="22" width="6" height="34" />
              <rect x="16" y="14" width="6" height="42" />
              <rect x="26" y="6" width="8" height="50" />
              <polygon points="30,2 36,2 42,8 24,8" />
              <rect x="38" y="14" width="6" height="42" />
              <rect x="48" y="20" width="6" height="36" />
              <rect x="58" y="26" width="6" height="30" />
            </g>
          </svg>
          <h1
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 600,
              fontSize: 60,
              letterSpacing: "-0.012em",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            SOGANG AIMBA 7th{" "}
            <em style={{ fontWeight: 500, fontStyle: "italic" }}>
              Weekly Brief
            </em>
          </h1>
        </div>
        <div
          style={{
            fontFamily: "var(--korean)",
            fontSize: 16,
            marginTop: 24,
            color: "rgba(250,246,239,0.92)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          서강대 AIMBA 원우를 위한 AI · 비즈니스 · 창업 인사이트 브리핑
        </div>
        <div
          style={{
            fontFamily: "var(--korean)",
            fontSize: 13.5,
            marginTop: 10,
            color: "rgba(250,246,239,0.7)",
          }}
        >
          뉴스를 모으는 것이 아니라, 경영자 관점에서 해석합니다.
        </div>
      </div>
    </header>
  );
}
