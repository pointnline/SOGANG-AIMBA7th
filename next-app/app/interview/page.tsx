import { TOKENS as T } from "@/lib/tokens";
import { INTERVIEW_FEATURED, INTERVIEW_COUNT } from "@/lib/data";
import { SiteFooter } from "@/components/SiteFooter";
import { sitePath } from "@/lib/paths";

export default function InterviewPage() {
  const f = INTERVIEW_FEATURED;
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
        <span>VOL. {INTERVIEW_COUNT} / 7</span>
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
          INTERVIEW · 04
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
          &ldquo;MBA에 와서 처음 깨달은 건,
          <br />
          <span style={{ color: T.wine }}>
            내가 어떤 질문에 답하고 싶은가
          </span>
          였습니다.&rdquo;
        </h1>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            color: T.ink3,
            fontFamily: "var(--sans)",
            fontSize: 13,
            letterSpacing: "0.04em",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.paper2}, ${T.paper3})`,
              border: `1px solid ${T.rule}`,
            }}
          />
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "var(--korean)",
                fontSize: 14,
                color: T.ink,
                fontWeight: 600,
              }}
            >
              {f.name} · {f.cohort}
            </div>
            <div style={{ fontSize: 12, color: T.ink3 }}>
              {f.field} · 발행 {f.publishedAt}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "40px 64px 100px",
          maxWidth: 760,
          margin: "0 auto",
          fontFamily: "var(--korean)",
          fontSize: 16.5,
          lineHeight: 2.0,
          color: T.ink2,
        }}
      >
        <p>
          의대를 졸업하고, 컨설턴트로 3년. 그리고 다시 학생으로 돌아왔다.
          이지원(7기) 원우는 이번 인터뷰에서 자신의 질문이 어떻게 변해왔는지를
          이야기한다.
        </p>
        <h3
          style={{
            fontFamily: "var(--serif-display)",
            fontStyle: "italic",
            fontSize: 28,
            color: T.ink,
            marginTop: 56,
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          Q. AIMBA에 오기로 결심한 계기는?
        </h3>
        <p>
          [본문 placeholder] 인터뷰 본문은 격주로 발행됩니다. 김민수 에디터가
          진행했고, 7기 정유진이 정리했습니다.
        </p>
        <h3
          style={{
            fontFamily: "var(--serif-display)",
            fontStyle: "italic",
            fontSize: 28,
            color: T.ink,
            marginTop: 56,
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          Q. AI 시대에 MBA의 가치는?
        </h3>
        <p>
          [본문 placeholder] 다음 호에서는 박상민(7기, 핀테크 PM) 원우의 이야기를
          싣습니다.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
