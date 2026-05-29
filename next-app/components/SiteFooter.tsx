import { BrandMark } from "@/components/BrandLogo";
import { TOKENS as T } from "@/lib/tokens";

export function SiteFooter() {
  return (
    <footer
      style={{
        padding: "40px 64px",
        background: T.ink,
        color: "#faf6ef",
        fontFamily: "var(--korean)",
        fontSize: 12.5,
        lineHeight: 1.85,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 12,
        }}
      >
        <BrandMark tone="light" size="small" />
        <div>
          <div
            style={{
              fontFamily: "var(--serif-display)",
              fontStyle: "italic",
              fontSize: 22,
              color: "#faf6ef",
              lineHeight: 1.2,
            }}
          >
            SOGANG AIMBA 7th Weekly Brief
          </div>
          <div style={{ fontSize: 13, color: "rgba(250,246,239,0.55)" }}>
            미래혁신국 큐레이션 브리핑
          </div>
        </div>
      </div>
      <div style={{ color: "rgba(250,246,239,0.7)" }}>
        AI · Business · Startup · MBA Insight · S.A Museum · Interview Room
      </div>
      <div style={{ color: "rgba(250,246,239,0.55)" }}>
        발간 주기: 매주 월요일 08:00 KST · 운영: 서강대 AI MBA 7기 미래혁신국
      </div>
      <div
        style={{
          color: "rgba(250,246,239,0.4)",
          marginTop: 8,
          fontSize: 11,
        }}
      >
        © 2026 SOGANG AIMBA 7th · All curated content is summarized for
        educational use; original sources cited per item.
      </div>
    </footer>
  );
}
