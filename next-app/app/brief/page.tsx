import { TOKENS as T } from "@/lib/tokens";
import { BRIEF_ISSUES } from "@/lib/data";
import { SiteFooter } from "@/components/SiteFooter";

export default function BriefPage() {
  return (
    <div
      style={{
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--korean)",
      }}
    >
      {/* Masthead */}
      <header
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
          <a href="/">← HOME</a>
          <span style={{ display: "flex", gap: 18 }}>
            <span>구독 23,481</span>
            <span>·</span>
            <span>이번 호 조회 4,127</span>
            <span>·</span>
            <span style={{ color: T.wine, fontWeight: 600 }}>● LIVE</span>
          </span>
          <span>로그인 · 검색</span>
        </div>

        <div
          style={{
            padding: "36px 0 24px",
            textAlign: "center",
            position: "relative",
          }}
        >
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
            SINCE 1960 · SOGANG UNIVERSITY · AI MBA 7TH
          </div>
          <h1
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
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
            A weekly intelligence dossier on AI, business &amp; strategy — for
            executives in training.
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.3em",
              color: T.ink3,
            }}
          >
            VOL. VII · ISSUE 23 · 2026년 5월 9일 토요일
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            padding: "14px 0 16px",
            borderTop: `1px solid ${T.rule}`,
            fontFamily: "var(--sans)",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {[
            "AI · LLM",
            "Business",
            "Strategy",
            "Startup",
            "MBA Insight",
            "Campus",
            "S.A Museum",
          ].map((x, i) => (
            <a
              key={i}
              style={{
                color: i === 0 ? T.wine : T.ink,
                borderBottom:
                  i === 0 ? `2px solid ${T.wine}` : "2px solid transparent",
                paddingBottom: 4,
              }}
            >
              {x}
            </a>
          ))}
        </nav>
      </header>

      {/* Lead story */}
      <section
        style={{
          padding: "40px 48px",
          maxWidth: 1280,
          margin: "0 auto",
          borderBottom: `1px solid ${T.rule}`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
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
              ● THIS WEEK&rsquo;S LEAD · AI · LLM
            </div>
            <h2
              style={{
                fontFamily: "var(--serif-display)",
                fontWeight: 500,
                fontSize: 52,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                color: T.ink,
              }}
            >
              Anthropic, Claude 4.5의 &lsquo;경영 추론&rsquo;
              <br />
              <em style={{ fontWeight: 400, color: T.wine }}>
                — 컨설턴트를 대체하는가
              </em>
            </h2>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontSize: 12,
                color: T.ink3,
                margin: "20px 0 22px",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span>
                BY{" "}
                <strong style={{ color: T.ink }}>김민수 · 7기 미래혁신국</strong>
              </span>
              <span>·</span>
              <span>9분 읽기</span>
              <span>·</span>
              <span>출처 4건 인용</span>
            </div>
            <div
              style={{
                height: 240,
                background: `linear-gradient(135deg, ${T.paper2}, ${T.paper3})`,
                border: `1px solid ${T.rule}`,
                marginBottom: 22,
              }}
            />
            <div
              style={{
                columnCount: 2,
                columnGap: 28,
                fontSize: 15.5,
                lineHeight: 1.75,
                color: T.ink2,
                fontFamily: "var(--korean)",
                textAlign: "justify",
              }}
            >
              <p style={{ marginTop: 0 }}>
                <span
                  style={{
                    float: "left",
                    fontFamily: "var(--serif-display)",
                    fontSize: 64,
                    lineHeight: 0.85,
                    marginRight: 8,
                    marginTop: 4,
                    color: T.wine,
                    fontWeight: 500,
                  }}
                >
                  지
                </span>
                난 4월 30일 발표된 Claude 4.5 Sonnet은 단순한 모델 업그레이드가
                아니다. Anthropic은 이번 릴리스에서 처음으로 &lsquo;경영 사례
                추론&rsquo; 벤치마크를 공개했고, MBB 3사 출신 컨설턴트로 구성된
                평가단의 65%가 모델의 답변을 &lsquo;Junior Associate
                이상&rsquo;으로 평가했다.
              </p>
              <p>
                주목할 점은 가격 구조다. 한 시간당 750달러를 청구하던 Senior
                Associate의 산출물 단가가, API 호출 기준으로는 0.18달러까지
                떨어졌다. 같은 일을 4,000배 싸게 한다는 뜻이 아니다 — 같은 일을
                처음부터 다시 정의해야 한다는 뜻이다.
              </p>
              <p>
                <strong style={{ color: T.ink }}>경영자 시사점.</strong> AIMBA
                원우들이 던져야 할 질문은 &ldquo;AI가 컨설턴트를 대체하는가&rdquo;가
                아니다. &ldquo;내가 컨설턴트에게 의뢰하던 그 질문이, 애초에 좋은
                질문이었는가&rdquo;이다.
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
                PULL QUOTE
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--serif-display)",
                  fontSize: 30,
                  lineHeight: 1.25,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: T.ink,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;AI가 컨설턴트를 대체하는 게 아니다.
                <span style={{ color: T.wine }}>
                  {" "}
                  좋은 질문을 가진 사람
                </span>
                이, 그렇지 않은 사람을 대체할 뿐이다.&rdquo;
              </blockquote>
            </div>

            <div
              style={{
                background: T.paper2,
                padding: "20px 22px",
                border: `1px solid ${T.rule}`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                  color: T.ink,
                  marginBottom: 12,
                }}
              >
                INSIDE THIS ISSUE
              </div>
              <ol
                style={{
                  fontFamily: "var(--korean)",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: T.ink2,
                  paddingLeft: 18,
                  margin: 0,
                }}
              >
                <li>Anthropic Claude 4.5와 컨설팅의 종말</li>
                <li>OpenAI 거버넌스 균열 — 이사회 시각</li>
                <li>토스, 일본 진출 첫 분기 손익 분석</li>
                <li>K-Pop 4세대 IP 밸류에이션</li>
                <li>S.A Museum: 이번 주의 작품</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* Archive table */}
      <section
        style={{
          padding: "36px 48px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 22,
            paddingBottom: 12,
            borderBottom: `2px solid ${T.ink}`,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 32,
              fontWeight: 500,
              margin: 0,
              fontStyle: "italic",
              letterSpacing: "-0.015em",
            }}
          >
            The Archive
          </h3>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--korean)",
          }}
        >
          <thead>
            <tr
              style={{
                fontFamily: "var(--sans)",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: T.ink3,
                textTransform: "uppercase",
              }}
            >
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                  width: 70,
                }}
              >
                VOL
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                  width: 110,
                }}
              >
                DATE
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                  width: 130,
                }}
              >
                SECTION
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                }}
              >
                HEADLINE
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                  width: 70,
                }}
              >
                READ
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "12px 0",
                  borderBottom: `1px solid ${T.rule}`,
                  width: 90,
                }}
              >
                VIEWS
              </th>
            </tr>
          </thead>
          <tbody>
            {BRIEF_ISSUES.map((it, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: `1px solid ${T.rule}`,
                  background: it.live ? T.paper2 : "transparent",
                }}
              >
                <td
                  className="tabular"
                  style={{
                    padding: "18px 0",
                    fontFamily: "var(--serif-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    color: T.wine,
                    fontStyle: "italic",
                  }}
                >
                  № {it.vol}
                </td>
                <td
                  className="tabular"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: T.ink3,
                  }}
                >
                  {it.date}
                </td>
                <td>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      fontWeight: 700,
                      color: T.wine,
                    }}
                  >
                    {it.sectionLabel}
                  </span>
                </td>
                <td
                  style={{
                    fontFamily: "var(--serif-display)",
                    fontSize: 19,
                    fontWeight: 500,
                    color: T.ink,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.title}
                  {it.live && (
                    <span
                      style={{
                        marginLeft: 10,
                        fontFamily: "var(--sans)",
                        fontSize: 9,
                        background: T.wine,
                        color: T.paper,
                        padding: "3px 7px",
                        letterSpacing: "0.12em",
                        fontWeight: 700,
                        verticalAlign: "middle",
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </td>
                <td
                  className="tabular"
                  style={{
                    textAlign: "right",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: T.ink3,
                  }}
                >
                  {it.read}
                </td>
                <td
                  className="tabular"
                  style={{
                    textAlign: "right",
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    color: T.ink2,
                  }}
                >
                  {it.views}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <SiteFooter />
    </div>
  );
}
