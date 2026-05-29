import { SiteFooter } from "@/components/SiteFooter";
import { MuseumGallery } from "@/components/museum/MuseumGallery";
import { MUSEUM_WORKS } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";
import type { Metadata } from "next";

const M = {
  bg: "#0a0a0a",
  paper: "#ededeb",
  ink3: "#7a7a7a",
  rule: "rgba(237,237,235,0.12)",
  wine: T.wine,
};

export const metadata: Metadata = {
  title: "S.A Museum · SOGANG AIMBA 7th",
  description:
    "퍼블릭 도메인 명화 50점으로 구성한 AIMBA 7기 S.A Museum 큐레이션.",
};

export default function MuseumPage() {
  return (
    <div
      style={{
        background: M.bg,
        color: M.paper,
        fontFamily: "var(--korean)",
        minHeight: "100vh",
      }}
    >
      <header
        className="museum-header"
        style={{
          padding: "32px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: M.ink3,
          textTransform: "uppercase",
        }}
      >
        <a href={sitePath("/")}>← BACK TO BRIEF</a>
        <span>S . A &nbsp;&nbsp; M U S E U M</span>
        <span>2026 / PUBLIC DOMAIN {MUSEUM_WORKS.length}</span>
      </header>

      <section
        className="museum-hero"
        style={{ padding: "180px 64px 80px", textAlign: "center" }}
      >
        <h1
          style={{
            fontFamily: "var(--serif-display)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: "-0.025em",
            margin: 0,
            color: M.paper,
          }}
        >
          A quiet room.
        </h1>
        <div
          style={{
            marginTop: 56,
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.32em",
            color: M.ink3,
            textTransform: "uppercase",
          }}
        >
          PUBLIC DOMAIN MASTERPIECES · ← → 로 넘기기
        </div>
      </section>

      <MuseumGallery />

      <section
        style={{
          padding: "120px 64px 100px",
          textAlign: "center",
          borderTop: `1px solid ${M.rule}`,
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.4em",
            color: M.ink3,
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          THE QUIET ROOM
        </div>
        <p
          style={{
            fontFamily: "var(--serif-display)",
            fontStyle: "italic",
            fontSize: 36,
            fontWeight: 300,
            lineHeight: 1.4,
            color: M.paper,
            maxWidth: 760,
            margin: "0 auto",
            letterSpacing: "-0.015em",
          }}
        >
          &ldquo;데이터가 작품을 고르는 순간,
          <br />
          우리는 가격보다 먼저{" "}
          <em style={{ color: M.wine, fontWeight: 400 }}>좋은 질문</em>을 다시
          배웁니다.&rdquo;
        </p>
        <div
          style={{
            marginTop: 36,
            fontFamily: "var(--sans)",
            fontSize: 11,
            letterSpacing: "0.18em",
            color: M.ink3,
            textTransform: "uppercase",
          }}
        >
          AIMBA 7th · S.A Museum
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
