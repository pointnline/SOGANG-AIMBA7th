import { TOKENS as T } from "@/lib/tokens";
import { MUSEUM_WORKS } from "@/lib/data";
import { SiteFooter } from "@/components/SiteFooter";

const M = {
  bg: "#0a0a0a",
  paper: "#ededeb",
  ink3: "#7a7a7a",
  rule: "rgba(237,237,235,0.12)",
  wine: T.wine,
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
        <a href="/">← BACK TO BRIEF</a>
        <span>S . A &nbsp;&nbsp; M U S E U M</span>
        <span>2026 / 023</span>
      </header>

      <section style={{ padding: "180px 64px 80px", textAlign: "center" }}>
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
          <div
            style={{
              position: "absolute",
              inset: 56,
              background:
                "linear-gradient(180deg, #d4541f 0%, #d4541f 32%, transparent 38%, transparent 50%, #5b101c 58%, #1f0408 95%)",
              filter: "blur(4px)",
            }}
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
            <span>№ 023</span>
            <span>OIL ON CANVAS · 235.9 × 206.7 CM</span>
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
            ● ON VIEW · MAY 9 — MAY 16
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
            Untitled, 1962
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
            Mark Rothko · 1903 — 1970
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
            한 주의 회의실, 한 주의 결산. 모든 숫자가 침묵으로 가라앉는 자리에 한
            점의 색이 남는다. 학예팀이 그 자리를 큐레이션합니다.
          </p>
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
            23 PLATES · 2026
          </div>
        </div>
        {MUSEUM_WORKS.map((w, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1.4fr 1fr 200px",
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
                <span style={{ color: M.wine }}>● ON VIEW</span>
              ) : (
                <span>VIEW NOTE →</span>
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
