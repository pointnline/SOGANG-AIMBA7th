import { TOKENS as T } from "@/lib/tokens";
import {
  FUTURE_REPORT_PATH,
  PARTICIPATE_PATH,
  PULSE_METRICS,
  PULSE_TOPICS,
} from "@/lib/data";
import { sitePath } from "@/lib/paths";

export function HomePulse() {
  return (
    <div
      id="aimbaPulse"
      style={{
        marginTop: 40,
        background: T.pulseBg,
        border: `1px solid ${T.rule}`,
        borderRadius: 14,
        padding: "30px 34px",
        boxShadow: "0 2px 0 rgba(0,0,0,0.02)",
      }}
    >
      <div
        className="home-panel-head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 11,
              letterSpacing: "0.24em",
              color: T.gold,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            AIMBA PULSE
          </div>
          <h2
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 30,
              fontWeight: 600,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            원우들의 관심이 어디로 움직이는지 보는 미래혁신국 상황판
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: T.wine,
            fontWeight: 700,
            padding: "6px 12px",
            background: "#fdeef1",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: T.wine,
              borderRadius: "50%",
            }}
          />
          LIVE SIGNAL
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--korean)",
          fontSize: 13.5,
          color: T.ink3,
          margin: "12px 0 24px",
          lineHeight: 1.65,
        }}
      >
        조회 · 반응 · 투표 · 제보를 모아 다음 브리프와 월간 Future Report의
        방향을 정합니다.
      </p>

      <div
        className="home-metric-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 28,
        }}
      >
        {PULSE_METRICS.map((m, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${T.rule}`,
              padding: "16px 20px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: T.ink3,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {m.key}
            </div>
            <div
              className="tabular"
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 40,
                fontWeight: 600,
                lineHeight: 1,
                color: T.ink,
                letterSpacing: "-0.02em",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "var(--korean)",
                fontSize: 11.5,
                color: T.ink3,
                marginTop: 6,
              }}
            >
              {m.sub}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          fontFamily: "var(--korean)",
          fontSize: 13.5,
          fontWeight: 600,
          color: T.ink2,
          marginBottom: 12,
        }}
      >
        다음 호에서 깊게 다뤘으면 하는 주제
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {PULSE_TOPICS.map((t, i) => (
          <li
            key={i}
            style={{
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${T.rule}`,
              padding: "13px 18px",
              marginBottom: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--korean)",
                fontSize: 14,
                color: T.ink,
              }}
            >
              {t.topic}
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                color: T.ink3,
                padding: "4px 10px",
                background: T.paper2,
                borderRadius: 999,
              }}
            >
              {t.votes}표
            </span>
          </li>
        ))}
      </ul>

      <div className="button-row" style={{ display: "flex", gap: 10, marginTop: 22 }}>
        <a
          href={sitePath(PARTICIPATE_PATH)}
          style={{
            padding: "12px 22px",
            background: T.wine,
            color: "#faf6ef",
            borderRadius: 8,
            fontFamily: "var(--korean)",
            fontSize: 13.5,
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          제보 · 의견 남기기
        </a>
        <a
          href={sitePath(FUTURE_REPORT_PATH)}
          style={{
            padding: "12px 22px",
            background: "#fff",
            color: T.ink,
            border: `1px solid ${T.rule}`,
            borderRadius: 8,
            fontFamily: "var(--korean)",
            fontSize: 13.5,
            fontWeight: 500,
            display: "inline-block",
          }}
        >
          월간 Future Report 보기
        </a>
      </div>
    </div>
  );
}
