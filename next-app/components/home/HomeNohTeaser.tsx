import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

// 노정석 사고OS 관측소 — 외부 리서치 정적 HTML(public/research/noh-jungsuk)로 연결되는 다크 티저.
// S.A Museum 티저와 같은 다크 카드 문법을 쓰되, 액센트는 gold 대신 wine 계열로 구분한다.
const STATS = [
  { n: "26", label: "에피소드 전수 딥리딩", sub: "EP45 – EP99" },
  { n: "14", label: "멘탈모델 카탈로그", sub: "동형성 렌즈" },
  { n: "39", label: "예측 추적 검증", sub: "적중·반증" },
  { n: "12", label: "사상 진화 국면", sub: "7 변곡점" },
  { n: "4", label: "사고 OS 공리", sub: "3 레이어" },
  { n: "5", label: "조장군 플레이북", sub: "가져갈 교훈" },
] as const;

export function HomeNohTeaser() {
  return (
    <div
      style={{
        marginTop: 22,
        background: "#0e0e10",
        color: "#faf6ef",
        borderRadius: 14,
        padding: "36px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 우상단 와인빛 글로우 — 인식론 '관측소' 무드 */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${T.wineSoft}33 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 40,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: T.wineSoft,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            RESEARCH · AI FRONTIER 딥리딩
          </div>
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 34,
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.16,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            도망치던 전략가는 어떻게
            <br />
            의도를 가진 인간이 되었나
          </h3>
          <p
            style={{
              fontFamily: "var(--korean)",
              fontSize: 13.5,
              lineHeight: 1.85,
              color: "rgba(250,246,239,0.72)",
              marginTop: 18,
              maxWidth: 520,
            }}
          >
            노정석(Chester Roh)의 15개월 —{" "}
            <strong style={{ color: "#faf6ef" }}>26개 에피소드 전수 딥리딩</strong>
            으로 복원한 한 시리얼 앙트레프레너의 인식론적 기계. 요약이 아니라{" "}
            <strong style={{ color: T.wineSoft }}>사고의 OS</strong>를 해부한
            관측소입니다. 사상 진화 12국면, 멘탈모델 14, 예측 39건의 검증까지.
          </p>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={sitePath("/research/noh-jungsuk/")}
              style={{
                padding: "12px 22px",
                background: T.wine,
                color: "#faf6ef",
                borderRadius: 6,
                fontFamily: "var(--sans)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                display: "inline-block",
              }}
            >
              관측소 입장 →
            </a>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "rgba(250,246,239,0.5)",
              }}
            >
              Chester Roh · Epistemic OS · 2026
            </span>
          </div>
        </div>

        {/* 우측: 인식론 관측소 데이터 패널 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(250,246,239,0.12)",
            border: "1px solid rgba(250,246,239,0.12)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#0e0e10",
                padding: "16px 16px 14px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 30,
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "#faf6ef",
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--korean)",
                  fontSize: 11.5,
                  color: "rgba(250,246,239,0.78)",
                  marginTop: 6,
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  color: T.wineSoft,
                  marginTop: 4,
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
