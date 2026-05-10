import { TOKENS as T } from "@/lib/tokens";
import { INTERVIEW_FEATURED, INTERVIEW_COUNT } from "@/lib/data";

export function HomeInterviewRoom() {
  const f = INTERVIEW_FEATURED;
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
        INTERVIEW ROOM · VOL. {INTERVIEW_COUNT} / 7
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          gap: 28,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.paper2}, ${T.paper3})`,
              border: `1px solid ${T.rule}`,
            }}
          />
          <div
            style={{
              fontFamily: "var(--korean)",
              fontSize: 12.5,
              color: T.ink2,
              marginTop: 12,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            <strong>{f.name}</strong>
            <br />
            <span style={{ color: T.ink3, fontSize: 11 }}>
              {f.cohort} · {f.field}
            </span>
          </div>
        </div>
        <div>
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
            &ldquo;MBA에 와서 처음 깨달은 건,
            <span style={{ color: T.wine }}>
              {" "}
              내가 어떤 질문에 답하고 싶은가
            </span>
            였습니다.&rdquo;
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
            의대 졸업 후 컨설턴트, 그리고 다시 학생으로. 격주 발행되는 7기 원우
            인터뷰. 지금까지{" "}
            <strong style={{ color: T.ink }}>{INTERVIEW_COUNT}편</strong>이
            발행됐고 앞으로 3명의 원우가 더 등장합니다.
          </p>
          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <a
              href="/interview"
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
              인터뷰 읽기 →
            </a>
            <button
              style={{
                padding: "11px 20px",
                background: "#fff",
                color: T.ink,
                border: `1px solid ${T.rule}`,
                borderRadius: 6,
                fontFamily: "var(--korean)",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              전체 인터뷰 ({INTERVIEW_COUNT})편
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
