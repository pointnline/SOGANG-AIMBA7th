import { SiteFooter } from "@/components/SiteFooter";
import {
  BRIEF_ISSUES,
  BRIEF_SECTIONS,
  CURRENT_BRIEF,
  EVENTS,
  FUTURE_REPORT_PATH,
  PARTICIPATE_PATH,
  SUPPORT_GROUPS,
} from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

export default function BriefPage() {
  return (
    <div
      style={{
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--korean)",
      }}
    >
      <header
        className="brief-header"
        style={{
          background: T.paper,
          color: T.ink,
          padding: "28px 48px 0",
          borderBottom: `3px double ${T.ink}`,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          className="brief-topbar"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--sans)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: T.ink3,
            paddingBottom: 12,
            borderBottom: `1px solid ${T.rule}`,
          }}
        >
          <a href={sitePath("/")}>← HOME</a>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <span>VOL. {CURRENT_BRIEF.vol}</span>
            <span>·</span>
            <span>{CURRENT_BRIEF.dateLabel}</span>
            <span>·</span>
            <span style={{ color: T.wine, fontWeight: 600 }}>● CURRENT</span>
          </span>
          <a href={sitePath(FUTURE_REPORT_PATH)}>Future Report</a>
        </div>

        <div style={{ padding: "36px 0 24px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: T.wine,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            SOGANG UNIVERSITY · AI MBA 7TH · 미래혁신국
          </div>
          <h1
            className="brief-title"
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: 84,
              lineHeight: 0.95,
              margin: 0,
              color: T.ink,
            }}
          >
            The <span style={{ color: T.wine }}>AIMBA</span> Brief
          </h1>
          <div
            style={{
              fontFamily: "var(--korean)",
              fontSize: 16,
              fontStyle: "italic",
              color: T.ink2,
              marginTop: 14,
              fontWeight: 300,
            }}
          >
            {CURRENT_BRIEF.subtitle}
          </div>
        </div>

        <nav
          className="brief-nav"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 26,
            padding: "14px 0 16px",
            borderTop: `1px solid ${T.rule}`,
            fontFamily: "var(--sans)",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
            flexWrap: "wrap",
          }}
        >
          {[
            ["AI · LLM", "#ai"],
            ["Business", "#business"],
            ["MBA", "#mba"],
            ["Startup", "#startup"],
            ["Government", "#government"],
            ["Campus", "#campus"],
            ["Events", "#events"],
          ].map(([label, href], i) => (
            <a
              href={href}
              key={href}
              style={{
                color: i === 0 ? T.wine : T.ink,
                borderBottom:
                  i === 0 ? `2px solid ${T.wine}` : "2px solid transparent",
                paddingBottom: 4,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section
          className="brief-lead"
          style={{
            padding: "44px 48px",
            maxWidth: 1280,
            margin: "0 auto",
            borderBottom: `1px solid ${T.rule}`,
          }}
        >
          <div
            className="brief-lead-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 0.75fr",
              gap: 56,
            }}
          >
            <article>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: T.wine,
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                THIS WEEK&apos;S NARRATIVE · VOL. {CURRENT_BRIEF.vol}
              </div>
              <h2
                className="brief-lead-title"
                style={{
                  fontFamily: "var(--serif-display)",
                  fontWeight: 500,
                  fontSize: 52,
                  lineHeight: 1.05,
                  margin: 0,
                  color: T.ink,
                }}
              >
                {CURRENT_BRIEF.title}
              </h2>
              <div
                className="brief-copy"
                style={{
                  columnCount: 2,
                  columnGap: 28,
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: T.ink2,
                  fontFamily: "var(--korean)",
                  textAlign: "justify",
                  marginTop: 24,
                }}
              >
                {CURRENT_BRIEF.memoLines.map((line) => (
                  <p key={line} style={{ marginTop: 0 }}>
                    {line}
                  </p>
                ))}
                <p>
                  <strong style={{ color: T.ink }}>Conclusion.</strong>{" "}
                  {CURRENT_BRIEF.conclusion}
                </p>
              </div>
            </article>

            <aside>
              <div
                style={{
                  borderTop: `3px solid ${T.ink}`,
                  paddingTop: 14,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: T.wine,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  INSIDE THIS ISSUE
                </div>
                <ol
                  style={{
                    fontFamily: "var(--korean)",
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: T.ink2,
                    paddingLeft: 18,
                    margin: 0,
                  }}
                >
                  {BRIEF_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.label}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#government">정부과제 · 지원</a>
                  </li>
                  <li>
                    <a href="#events">AI 이벤트 · 컨퍼런스</a>
                  </li>
                </ol>
              </div>
              <a
                href={sitePath(PARTICIPATE_PATH)}
                style={{
                  display: "block",
                  background: T.wine,
                  color: T.paper,
                  padding: "15px 18px",
                  borderRadius: 6,
                  fontFamily: "var(--korean)",
                  fontWeight: 700,
                }}
              >
                이번 호 피드백 남기기 →
              </a>
            </aside>
          </div>
        </section>

        <section
          className="brief-sections"
          style={{ padding: "22px 48px 8px", maxWidth: 1280, margin: "0 auto" }}
        >
          {BRIEF_SECTIONS.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="brief-section-card"
              style={{
                margin: "28px 0",
                padding: "26px 28px",
                background: "#fff",
                border: `1px solid ${T.rule}`,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 20,
                  alignItems: "baseline",
                  marginBottom: 14,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--serif-display)",
                    fontSize: 30,
                    fontWeight: 500,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {section.label}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: T.wine,
                    letterSpacing: "0.18em",
                  }}
                >
                  {section.code}
                </span>
              </div>
              <p style={{ color: T.ink2, lineHeight: 1.75, marginTop: 0 }}>
                {section.narrative}
              </p>
              <div
                className="brief-article-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 14,
                  marginTop: 20,
                }}
              >
                {section.articles.map((article, index) => (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noreferrer"
                    key={article.title}
                    style={{
                      border: `1px solid ${T.rule}`,
                      borderRadius: 8,
                      padding: "16px 18px",
                      background: T.paper,
                      minHeight: 132,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: T.wine,
                        marginBottom: 8,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")} · {article.source}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--serif-display)",
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.25,
                        color: T.ink,
                      }}
                    >
                      {article.title}
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: T.ink3,
                        margin: "10px 0 0",
                      }}
                    >
                      {article.desc}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section
          className="brief-sections"
          style={{ padding: "0 48px", maxWidth: 1280, margin: "0 auto" }}
        >
          {SUPPORT_GROUPS.map((group) => (
            <section
              id={group.id}
              key={group.id}
              className="brief-section-card"
              style={{
                margin: "28px 0",
                padding: "26px 28px",
                background: T.paper2,
                border: `1px solid ${T.rule}`,
                borderRadius: 10,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--serif-display)",
                  fontSize: 30,
                  fontWeight: 500,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                {group.title}
              </h3>
              <p style={{ color: T.ink2, lineHeight: 1.75 }}>{group.note}</p>
              <div
                className="brief-article-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 10,
                }}
              >
                {group.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "#fff",
                      border: `1px solid ${T.rule}`,
                      borderRadius: 8,
                      padding: "13px 15px",
                      fontSize: 13.5,
                      color: T.ink2,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section
            id="events"
            className="brief-section-card"
            style={{
              margin: "28px 0",
              padding: "26px 28px",
              background: "#fff",
              border: `1px solid ${T.rule}`,
              borderRadius: 10,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--serif-display)",
                fontSize: 30,
                fontWeight: 500,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              AI 이벤트 · 컨퍼런스 · 학술회
            </h3>
            <div
              className="brief-article-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
                marginTop: 20,
              }}
            >
              {EVENTS.map((event) => (
                <div
                  key={`${event.date}-${event.title}`}
                  style={{
                    background: T.paper,
                    border: `1px solid ${T.rule}`,
                    borderRadius: 8,
                    padding: "14px 15px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: T.wine,
                      marginBottom: 8,
                    }}
                  >
                    {event.date} · {event.tag}
                  </div>
                  <div style={{ fontWeight: 700, lineHeight: 1.45 }}>
                    {event.title}
                  </div>
                  <div style={{ fontSize: 12, color: T.ink3, marginTop: 6 }}>
                    {event.where}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="participateSection"
            className="brief-section-card"
            style={{
              margin: "28px 0 40px",
              padding: "24px 28px",
              background: T.pulseBg,
              border: `1px solid ${T.rule}`,
              borderRadius: 10,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>Participate</h3>
            <p style={{ lineHeight: 1.7, color: T.ink2 }}>
              이번 호에서 가장 의미 있었던 섹션, 다음 호에서 다뤄줬으면 하는
              주제, 공유하고 싶은 기사·세미나·공고를 보내주세요.
            </p>
            <div className="button-row" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="mailto:?subject=AIMBA%20Brief%20Feedback" style={pillStyle}>
                이번 호 피드백
              </a>
              <a href="mailto:?subject=AIMBA%20Brief%20Topic%20Suggestion" style={pillStyle}>
                다음 주제 제안
              </a>
              <a href="mailto:?subject=AIMBA%20Brief%20Tip" style={pillStyle}>
                기사·세미나 제보
              </a>
            </div>
          </section>
        </section>

        <section
          id="archive"
          style={{ padding: "0 48px 42px", maxWidth: 1280, margin: "0 auto" }}
        >
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 32,
              fontWeight: 500,
              fontStyle: "italic",
              borderBottom: `2px solid ${T.ink}`,
              paddingBottom: 12,
            }}
          >
            The Archive
          </h3>
          <div style={{ display: "grid", gap: 10 }}>
            {BRIEF_ISSUES.map((issue) => (
              <a
                href={sitePath(issue.path)}
                key={issue.vol}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 120px 1fr 140px",
                  gap: 16,
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: `1px solid ${T.rule}`,
                }}
                className="archive-row"
              >
                <span style={{ color: T.wine, fontFamily: "var(--serif-display)", fontSize: 22 }}>
                  No. {issue.vol}
                </span>
                <span style={{ fontFamily: "var(--mono)", color: T.ink3, fontSize: 12 }}>
                  {issue.date}
                </span>
                <span style={{ fontFamily: "var(--serif-display)", fontSize: 20 }}>
                  {issue.title}
                </span>
                <span style={{ color: T.ink3, fontSize: 12, textAlign: "right" }}>
                  {issue.tags.slice(0, 2).join(" · ")}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

const pillStyle = {
  display: "inline-block",
  padding: "9px 14px",
  borderRadius: 999,
  border: `1px solid ${T.rule}`,
  background: "#fff",
  color: T.ink,
  fontSize: 13,
  fontWeight: 600,
};
