import { TOKENS as T } from "@/lib/tokens";
import { EVENTS, BOOKS } from "@/lib/data";

export function HomeCalendarBooks() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: 18,
        marginTop: 22,
      }}
    >
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
              이벤트 · 모임 캘린더
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
            {EVENTS.map((e, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i === EVENTS.length - 1 ? "none" : `1px solid ${T.rule}`,
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
                    {e.date}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9.5,
                      color: T.ink3,
                    }}
                  >
                    {e.day}
                  </div>
                </td>
                <td style={{ padding: "12px 8px", verticalAlign: "top" }}>
                  <div style={{ color: T.ink, fontWeight: 500 }}>{e.title}</div>
                  <div
                    style={{
                      color: T.ink3,
                      fontSize: 11.5,
                      marginTop: 3,
                    }}
                  >
                    {e.where}
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
                    {e.tag}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          background: T.paper2,
          border: `1px solid ${T.rule}`,
          borderRadius: 14,
          padding: "26px 28px",
        }}
      >
        <div
          style={{
            marginBottom: 16,
            paddingBottom: 12,
            borderBottom: `1px solid ${T.rule}`,
          }}
        >
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
            SHELF
          </div>
          <h4
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
            }}
          >
            원우 추천 도서
          </h4>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {BOOKS.map((b, i) => (
            <div key={i}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "2/3",
                  background: `linear-gradient(135deg, ${b.c1}, ${b.c2})`,
                  borderRadius: 2,
                  position: "relative",
                  boxShadow:
                    "0 6px 12px -6px rgba(0,0,0,0.3), inset 1px 0 0 rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 12,
                    right: 8,
                    fontFamily: "var(--serif-display)",
                    fontSize: 9.5,
                    color: "rgba(255,255,255,0.92)",
                    lineHeight: 1.25,
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  {b.title}
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 8,
                    bottom: 8,
                    fontFamily: "var(--mono)",
                    fontSize: 7,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {b.author.toUpperCase()}
                </div>
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontFamily: "var(--korean)",
                  fontSize: 10.5,
                  color: T.ink3,
                }}
              >
                추천 · {b.recommendedBy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
