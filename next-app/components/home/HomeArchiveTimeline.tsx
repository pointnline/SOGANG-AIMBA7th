import { TOKENS as T } from "@/lib/tokens";
import { ARCHIVE_TIMELINE, BRIEF_ISSUES } from "@/lib/data";

export function HomeArchiveTimeline() {
  const featured = BRIEF_ISSUES.slice(0, 3);
  return (
    <div
      style={{
        marginTop: 40,
        padding: "30px 34px",
        background: T.paper2,
        borderRadius: 14,
        border: `1px solid ${T.rule}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 22,
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
            ARCHIVE TIMELINE
          </div>
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 26,
              fontWeight: 600,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            지난 23개의 호, 한 줄로 펼쳐보다
          </h3>
        </div>
        <a
          style={{
            fontFamily: "var(--sans)",
            fontSize: 12,
            color: T.wine,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          전체 아카이브 →
        </a>
      </div>

      <div style={{ position: "relative", height: 60, marginBottom: 24 }}>
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 0,
            right: 0,
            height: 1,
            background: T.ink,
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {ARCHIVE_TIMELINE.map((a, i) => {
            const isFeatured = i < 3;
            return (
              <div
                key={a.vol}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    color: isFeatured ? T.wine : T.ink3,
                    fontWeight: isFeatured ? 700 : 400,
                    opacity: i < 6 ? 1 : 0.5,
                  }}
                >
                  {String(a.vol).padStart(2, "0")}
                </span>
                <span
                  style={{
                    width: isFeatured ? 12 : 7,
                    height: isFeatured ? 12 : 7,
                    borderRadius: "50%",
                    background: isFeatured ? T.wine : T.ink3,
                    boxShadow: isFeatured
                      ? `0 0 0 4px ${T.paper}, 0 0 0 5px ${T.wineSoft}55`
                      : "none",
                    opacity: i < 6 ? 1 : 0.4,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    color: T.ink3,
                    opacity: i < 6 ? 0.7 : 0.3,
                  }}
                >
                  {a.shortDate}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
        }}
      >
        {featured.map((b, i) => (
          <article
            key={i}
            style={{
              background: "#fff",
              border: `1px solid ${T.rule}`,
              borderRadius: 10,
              padding: "16px 18px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--mono)",
                fontSize: 10,
                color: T.ink3,
                marginBottom: 10,
              }}
            >
              <span>VOL {b.vol}</span>
              <span>{b.shortDate}</span>
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9.5,
                letterSpacing: "0.18em",
                color: T.wine,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {b.section}
            </div>
            <div
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 17,
                fontWeight: 600,
                color: T.ink,
                lineHeight: 1.3,
              }}
            >
              {b.title}
            </div>
            {b.live && (
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  fontFamily: "var(--sans)",
                  fontSize: 9,
                  fontWeight: 700,
                  background: T.wine,
                  color: "#fff",
                  padding: "3px 8px",
                  borderRadius: 999,
                  letterSpacing: "0.1em",
                }}
              >
                NOW
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
