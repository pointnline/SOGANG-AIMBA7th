import { CALENDAR_ROWS, RADAR_META, RADAR_TIERS } from "@/lib/radar";
import { TOKENS as T } from "@/lib/tokens";

// 무료/유료 뱃지 톤
function priceStyle(type: string): { bg: string; color: string; border: string } {
  switch (type) {
    case "free":
      return { bg: "#eef5ee", color: "#2f6b3a", border: "#cfe3cf" };
    case "approval":
      return { bg: "#fdeef1", color: T.wine, border: "#f0cdd5" };
    case "paid":
      return { bg: "#fff", color: T.ink3, border: T.rule };
    default:
      return { bg: "#fff", color: T.ink3, border: T.rule };
  }
}

export function HomeCalendarBooks() {
  const rows = CALENDAR_ROWS;

  return (
    <div style={{ marginTop: 22 }}>
      <div
        style={{
          background: "#fff",
          border: `1px solid ${T.rule}`,
          borderRadius: 14,
          padding: "26px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: `1px solid ${T.rule}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 10,
                letterSpacing: "0.24em",
                color: T.gold,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              UPCOMING · 향후 {RADAR_META.rangeDays}일
            </div>
            <h4
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 20,
                fontWeight: 600,
                margin: 0,
              }}
            >
              AI 행사 · 모임 레이더
            </h4>
          </div>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: T.ink3,
            }}
          >
            {rows.length}건 · 서울/수도권
          </span>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--korean)",
            fontSize: 13,
          }}
        >
          <tbody>
            {rows.map((event, index) => {
              const ps = priceStyle(event.priceType);
              return (
                <tr
                  key={`${event.sortKey}-${event.title}`}
                  style={{
                    borderBottom:
                      index === rows.length - 1 ? "none" : `1px solid ${T.rule}`,
                  }}
                >
                  <td
                    style={{
                      padding: "12px 0",
                      verticalAlign: "top",
                      width: 72,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11.5,
                        color: T.wine,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {event.shortDate}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9.5,
                        color: T.ink3,
                      }}
                    >
                      {event.day}
                      {event.rangeNote ? ` ${event.rangeNote}` : ""}
                    </div>
                  </td>

                  <td style={{ padding: "12px 8px", verticalAlign: "top" }}>
                    <div
                      style={{
                        color: T.ink,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "baseline",
                        gap: 7,
                      }}
                    >
                      <span
                        title={RADAR_TIERS[event.tier].desc}
                        style={{
                          flex: "0 0 auto",
                          width: 7,
                          height: 7,
                          borderRadius: 999,
                          background: RADAR_TIERS[event.tier].color,
                          transform: "translateY(-1px)",
                        }}
                      />
                      <span>
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "inherit" }}
                          >
                            {event.title}
                            <span style={{ color: T.wine, marginLeft: 5 }}>↗</span>
                          </a>
                        ) : (
                          event.title
                        )}
                        {event.jjWork ? (
                          <span
                            title="평일 업무시간 — 참석 시 일정 조정 필요"
                            style={{ marginLeft: 6, fontSize: 11 }}
                          >
                            ⚠️
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div
                      style={{
                        color: T.ink3,
                        fontSize: 11.5,
                        marginTop: 3,
                        paddingLeft: 14,
                      }}
                    >
                      {event.where}
                    </div>
                  </td>

                  <td
                    style={{
                      padding: "12px 0",
                      textAlign: "right",
                      verticalAlign: "top",
                      width: 92,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--mono)",
                        fontSize: 9.5,
                        letterSpacing: "0.04em",
                        color: ps.color,
                        background: ps.bg,
                        padding: "3px 8px",
                        border: `1px solid ${ps.border}`,
                        borderRadius: 999,
                        marginBottom: 4,
                      }}
                    >
                      {event.price}
                    </span>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        color: T.ink3,
                      }}
                    >
                      {event.tag}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          style={{
            marginTop: 14,
            paddingTop: 12,
            borderTop: `1px solid ${T.rule}`,
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 16px",
            fontFamily: "var(--mono)",
            fontSize: 9.5,
            color: T.ink3,
            letterSpacing: "0.04em",
          }}
        >
          <span>● 점 색 = 실무가치 티어</span>
          <span style={{ color: RADAR_TIERS[1].color }}>● T1 에이전트/개발</span>
          <span style={{ color: RADAR_TIERS[2].color }}>● T2 빅테크</span>
          <span style={{ color: RADAR_TIERS[3].color }}>● T3 투자/정책</span>
          <span style={{ color: RADAR_TIERS[4].color }}>● T4 네트워킹</span>
          <span>⚠️ = 평일 업무시간</span>
        </div>
      </div>
    </div>
  );
}
