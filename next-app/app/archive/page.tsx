import type { Metadata } from "next";
import { BrandMark } from "@/components/BrandLogo";
import { SiteFooter } from "@/components/SiteFooter";
import { ArchiveExplorer } from "@/components/archive/ArchiveExplorer";
import { TOPIC_GROUPS } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "토픽 아카이브 · SOGANG AIMBA 7th Weekly Brief",
  description:
    "AI · 비즈니스 · MBA · 창업 · Vibe Coding 등 토픽별로 여러 호를 가로질러 탐색하는 아카이브.",
  alternates: { canonical: "/SOGANG-AIMBA7th/archive/" },
};

export default function ArchivePage() {
  const totalArticles = TOPIC_GROUPS.reduce((n, g) => n + g.count, 0);

  return (
    <div
      style={{
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--korean)",
        minHeight: "100vh",
      }}
    >
      <header
        className="brief-header"
        style={{
          padding: "28px 48px 24px",
          borderBottom: `3px double ${T.ink}`,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <a
          href={sitePath("/")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: T.ink,
            marginBottom: 22,
          }}
        >
          <BrandMark tone="dark" size="small" />
          <span
            style={{
              fontFamily: "var(--sans)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: T.ink3,
            }}
          >
            ← Home
          </span>
        </a>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            letterSpacing: "0.28em",
            color: T.wine,
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          TOPIC ARCHIVE · 호를 가로지르는 탐색
        </div>
        <h1
          className="brief-title"
          style={{
            fontFamily: "var(--serif-display)",
            fontSize: 46,
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
          }}
        >
          토픽 아카이브
        </h1>
        <p
          style={{
            fontFamily: "var(--korean)",
            fontSize: 14,
            lineHeight: 1.8,
            color: T.ink2,
            marginTop: 14,
            maxWidth: 640,
          }}
        >
          한 호 안에서 읽는 대신, <strong>토픽을 골라 여러 호를 가로질러</strong>{" "}
          모아 봅니다. 현재 {TOPIC_GROUPS.length}개 토픽 · {totalArticles}개
          기사를 탐색할 수 있습니다.
        </p>
      </header>

      <main
        className="brief-sections"
        style={{
          padding: "32px 48px 64px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <ArchiveExplorer />
      </main>

      <SiteFooter />
    </div>
  );
}
