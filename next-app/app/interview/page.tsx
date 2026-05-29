import { TOKENS as T } from "@/lib/tokens";
import { INTERVIEW_INTRO } from "@/lib/data";
import { SiteFooter } from "@/components/SiteFooter";
import { sitePath } from "@/lib/paths";

export default function InterviewPage() {
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
        style={{
          padding: "28px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--sans)",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: T.ink3,
          textTransform: "uppercase",
          borderBottom: `1px solid ${T.rule}`,
        }}
      >
        <a href={sitePath("/")}>← BACK TO BRIEF</a>
        <span>INTERVIEW ROOM</span>
        <span>COMING SOON</span>
      </header>

      <section
        style={{
          padding: "120px 64px 60px",
          maxWidth: 880,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: 11,
            letterSpacing: "0.32em",
            color: T.wine,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          INTERVIEW ROOM · 준비 중
        </div>
        <h1
          style={{
            fontFamily: "var(--serif-display)",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 56,
            lineHeight: 1.2,
            letterSpacing: "-0.018em",
            margin: 0,
            color: T.ink,
          }}
        >
          &ldquo;
          <span style={{ color: T.wine }}>{INTERVIEW_INTRO.sectionQuote}</span>
          &rdquo;
        </h1>
      </section>

      <section
        style={{
          padding: "20px 64px 100px",
          maxWidth: 680,
          margin: "0 auto",
          fontFamily: "var(--korean)",
          fontSize: 16.5,
          lineHeight: 2.0,
          color: T.ink2,
          textAlign: "center",
        }}
      >
        <p>{INTERVIEW_INTRO.lead}</p>
        <p style={{ color: T.ink3, fontSize: 15, marginTop: 8 }}>
          첫 인터뷰는 곧 이 자리에 공개됩니다. 7기 원우라면, 당신의 이야기로
          이 방을 함께 채워주세요.
        </p>
        <div style={{ marginTop: 40 }}>
          <a
            href={INTERVIEW_INTRO.proposeMailto}
            style={{
              padding: "13px 26px",
              background: T.wine,
              color: "#faf6ef",
              borderRadius: 6,
              fontFamily: "var(--korean)",
              fontSize: 14,
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            인터뷰 참여 제안하기 →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
