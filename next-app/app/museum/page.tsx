import { TOKENS as T } from "@/lib/tokens";
import type { Metadata } from "next";
import { MUSEUM_WORKS } from "@/lib/data";
import { SiteFooter } from "@/components/SiteFooter";
import { sitePath } from "@/lib/paths";

const M = {
  bg: "#0a0a0a",
  paper: "#ededeb",
  ink3: "#7a7a7a",
  rule: "rgba(237,237,235,0.12)",
  wine: T.wine,
};

export const metadata: Metadata = {
  title: "S.A Museum · SOGANG AIMBA 7th",
  description: "브리핑 사이 잠깐 숨을 고르는 AIMBA 7기 월간 작품 큐레이션.",
};

export default function MuseumPage() {
  const featured = MUSEUM_WORKS[0];
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
        <span>2026 / MONTHLY 10</span>
      </header>

      <section className="museum-hero" style={{ padding: "180px 64px 80px", textAlign: "center" }}>
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
          ── ONE WORK · ONE NOTE · EVERY WEEK ──
        </div>
      </section>

      <section
        className="museum-feature"
        style={{
          padding: "60px 64px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 80,
          alignItems: "end",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            aspectRatio: "4/5",
            position: "relative",
            background: "#0e0e0e",
            padding: 56,
            boxShadow: "0 50px 120px rgba(0,0,0,0.6)",
          }}
        >
          <ArtworkVisual
            work={featured}
            variant="feature"
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 56,
              right: 56,
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--mono)",
              fontSize: 9,
              color: M.ink3,
              letterSpacing: "0.18em",
            }}
          >
            <span>№ {featured.index}</span>
            <span>{featured.year} · {featured.mood}</span>
          </div>
        </div>
        <aside style={{ paddingBottom: 8 }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: M.wine,
              fontWeight: 600,
              marginBottom: 36,
            }}
          >
            ● ON VIEW · MONTHLY SELECTION
          </div>
          <h2
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: 52,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 12px",
            }}
          >
            {featured.work}
          </h2>
          <div
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 18,
              color: M.ink3,
              fontWeight: 300,
              marginBottom: 48,
            }}
          >
            {featured.artist}
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 8 }}>
              {featured.year} · {featured.medium}
            </div>
          </div>
          <div style={{ height: 1, background: M.rule, marginBottom: 32 }} />
          <p
            style={{
              fontFamily: "var(--korean)",
              fontSize: 15,
              lineHeight: 2.0,
              color: "rgba(237,237,235,0.72)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            {featured.note}
          </p>
          <a
            href={featured.sourceUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 26,
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              color: M.ink3,
              textTransform: "uppercase",
            }}
          >
            {featured.collection} · {featured.license} →
          </a>
        </aside>
      </section>

      <section
        style={{
          padding: "80px 64px 64px",
          borderTop: `1px solid ${M.rule}`,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: 28,
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontStyle: "italic",
              fontSize: 36,
              fontWeight: 300,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            The Collection
          </h3>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: M.ink3,
              textTransform: "uppercase",
            }}
          >
            10 SELECTED WORKS · 2026
          </div>
        </div>
        {MUSEUM_WORKS.map((w) => (
          <div
            key={w.index}
            className="museum-row"
            style={{
              display: "grid",
              gridTemplateColumns: "60px 110px 1.1fr 1.4fr 160px",
              padding: "28px 0",
              borderTop: `1px solid ${M.rule}`,
              alignItems: "baseline",
              color: w.onView ? M.paper : "rgba(237,237,235,0.5)",
              cursor: "pointer",
            }}
          >
            <div
              className="tabular"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: w.onView ? M.wine : M.ink3,
              }}
            >
              № {w.index}
            </div>
            <div>
              <ArtworkVisual
                work={w}
                variant="thumb"
              />
            </div>
            <div
              style={{
                fontFamily: "var(--serif-display)",
                fontStyle: "italic",
                fontSize: 28,
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              {w.work}
            </div>
            <div style={{ fontFamily: "var(--korean)", fontSize: 14 }}>
              {w.artist}
              <div style={{ color: M.ink3, fontSize: 11, marginTop: 3 }}>
                {w.year} · {w.collection}
              </div>
              <div style={{ color: M.ink3, fontSize: 12, marginTop: 4 }}>
                {w.note}
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {w.onView ? (
                <a href={w.sourceUrl} target="_blank" rel="noreferrer" style={{ color: M.wine }}>● ON VIEW</a>
              ) : (
                <a href={w.sourceUrl} target="_blank" rel="noreferrer">SOURCE →</a>
              )}
            </div>
          </div>
        ))}
      </section>

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
          &ldquo;데이터가 답을 줄 때, 우리는 답을 빠르게 얻는다.
          <br />
          작품 앞에서, 우리는 비로소 —{" "}
          <em style={{ color: M.wine, fontWeight: 400 }}>좋은 질문</em>을 다시
          배운다.&rdquo;
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
          — AIMBA 7th 학예팀
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

type MuseumWork = (typeof MUSEUM_WORKS)[number];

function ArtworkVisual({
  work,
  variant,
}: {
  work: MuseumWork;
  variant: "feature" | "thumb";
}) {
  const isFeature = variant === "feature";
  const baseStyle = isFeature
    ? {
        position: "absolute" as const,
        inset: 56,
        width: "calc(100% - 112px)",
        height: "calc(100% - 112px)",
      }
    : {
        width: 84,
        height: 64,
      };

  if (work.image) {
    return (
      <img
        src={sitePath(work.image)}
        alt={`${work.artist} - ${work.work}`}
        style={{
          ...baseStyle,
          objectFit: "cover",
          borderRadius: isFeature ? 0 : 2,
          filter: "saturate(0.92)",
          opacity: work.onView || isFeature ? 1 : 0.72,
        }}
      />
    );
  }

  return (
    <div
      aria-label={`${work.artist} - ${work.work}`}
      role="img"
      style={{
        ...baseStyle,
        borderRadius: isFeature ? 0 : 2,
        background: `linear-gradient(135deg, ${work.tone[0]}, ${work.tone[1]})`,
        boxShadow: isFeature ? "inset 0 0 0 1px rgba(255,255,255,0.08)" : "none",
        opacity: work.onView || isFeature ? 1 : 0.72,
        position: isFeature ? "absolute" : "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: isFeature ? "18% 14%" : "18% 16%",
          borderTop: "1px solid rgba(255,255,255,0.32)",
          borderBottom: "1px solid rgba(0,0,0,0.22)",
          transform: "rotate(-6deg)",
        }}
      />
    </div>
  );
}
