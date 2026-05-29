import { TOKENS as T } from "@/lib/tokens";
import { INTERVIEW_INTRO } from "@/lib/data";
import { sitePath } from "@/lib/paths";

export function HomeInterviewRoom() {
  return (
    <div
      style={{
        marginTop: 22,
        background: T.cream,
        borderRadius: 14,
        padding: "36px 40px",
        border: `1px solid ${T.rule}`,
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 10,
          letterSpacing: "0.32em",
          color: T.wine,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        INTERVIEW ROOM · COMING SOON
      </div>
      <div
        style={{
          fontFamily: "var(--serif-display)",
          fontSize: 28,
          fontWeight: 500,
          fontStyle: "italic",
          lineHeight: 1.25,
          color: T.ink,
          letterSpacing: "-0.01em",
        }}
      >
        &ldquo;
        <span style={{ color: T.wine }}>{INTERVIEW_INTRO.sectionQuote}</span>
        &rdquo;
      </div>
      <p
        style={{
          fontFamily: "var(--korean)",
          fontSize: 13.5,
          lineHeight: 1.85,
          color: T.ink3,
          marginTop: 18,
          maxWidth: 600,
        }}
      >
        {INTERVIEW_INTRO.lead} 첫 인터뷰는 곧 공개됩니다.
      </p>
      <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
        <a
          href={sitePath("/interview")}
          style={{
            padding: "11px 20px",
            background: T.wine,
            color: "#faf6ef",
            borderRadius: 6,
            fontFamily: "var(--korean)",
            fontSize: 13,
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          인터뷰 룸 보기 →
        </a>
        <a
          href={INTERVIEW_INTRO.proposeMailto}
          style={{
            padding: "11px 20px",
            background: "#fff",
            color: T.ink,
            border: `1px solid ${T.rule}`,
            borderRadius: 6,
            fontFamily: "var(--korean)",
            fontSize: 13,
            fontWeight: 500,
            display: "inline-block",
          }}
        >
          참여 제안하기
        </a>
      </div>
    </div>
  );
}
