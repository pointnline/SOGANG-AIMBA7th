import { EVENTS } from "@/lib/data";
import { TOKENS as T } from "@/lib/tokens";

export function HomeCalendarBooks() {
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
              UPCOMING
            </div>
            <h4
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 20,
                fontWeight: 600,
                margin: 0,
              }}
            >
              AI 행사 · 모임 캘린더
            </h4>
          </div>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: T.ink3,
            }}
          >
            2026 · MAY
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
            {EVENTS.map((event, index) => (
              <tr
                key={`${event.date}-${event.title}`}
                style={{
                  borderBottom:
                    index === EVENTS.length - 1 ? "none" : `1px solid ${T.rule}`,
                }}
              >
                <td
                  style={{
                    padding: "12px 0",
                    verticalAlign: "top",
                    width: 78,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      color: T.wine,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {event.date}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9.5,
                      color: T.ink3,
                    }}
                  >
                    {event.day}
                  </div>
                </td>
                <td style={{ padding: "12px 8px", verticalAlign: "top" }}>
                  <div style={{ color: T.ink, fontWeight: 500 }}>
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
                  </div>
                  <div
                    style={{
                      color: T.ink3,
                      fontSize: 11.5,
                      marginTop: 3,
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
                    width: 70,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9.5,
                      letterSpacing: "0.14em",
                      color: T.ink3,
                      padding: "3px 8px",
                      border: `1px solid ${T.rule}`,
                      borderRadius: 999,
                    }}
                  >
                    {event.tag}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
