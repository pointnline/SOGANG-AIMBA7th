import { BrandMark } from "@/components/BrandLogo";
import { ContestBoardClient } from "@/components/contests/ContestBoardClient";
import { SiteFooter } from "@/components/SiteFooter";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

export const metadata = {
  title: "SOGANG AIMBA 7th · AI Contest Board",
  description:
    "국내 AI 이미지·영상 공모전을 P&L 신문 스타일로 정리한 큐레이션 보드. 데이터 원본은 junyeo217/ai-contest-board.",
};

export default function ContestsPage() {
  return (
    <div
      style={{
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--korean)",
        minHeight: "100vh",
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
          <a
            href={sitePath("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: T.ink,
            }}
          >
            <BrandMark tone="dark" size="small" />
            <span>HOME</span>
          </a>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <span>BOARD</span>
            <span>·</span>
            <span>국내 AI Contest</span>
            <span>·</span>
            <span style={{ color: T.wine, fontWeight: 600 }}>● LIVE FEED</span>
          </span>
          <a href={sitePath("/brief/")}>Weekly Brief →</a>
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
              fontSize: 76,
              lineHeight: 0.95,
              margin: 0,
              color: T.ink,
            }}
          >
            The <span style={{ color: T.wine }}>AI Contest</span> Board
          </h1>
          <div
            style={{
              fontFamily: "var(--korean)",
              fontSize: 15,
              fontStyle: "italic",
              color: T.ink2,
              marginTop: 14,
              fontWeight: 300,
            }}
          >
            국내 AI 이미지·영상 공모전을 매일 큐레이션해 신문 형태로 정리합니다.
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
            ["Home", sitePath("/")],
            ["Weekly Brief", sitePath("/brief/")],
            ["S.A Museum", sitePath("/museum/")],
            ["Interview", sitePath("/interview/")],
            ["Contests", sitePath("/contests/")],
          ].map(([label, href], i) => {
            const isCurrent = i === 4;
            return (
              <a
                href={href}
                key={href}
                style={{
                  color: isCurrent ? T.wine : T.ink,
                  borderBottom: isCurrent
                    ? `2px solid ${T.wine}`
                    : "2px solid transparent",
                  paddingBottom: 4,
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </header>

      <main
        style={{
          padding: "32px 48px 56px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <section
          className="brief-lead"
          style={{
            padding: "8px 0 28px",
            borderBottom: `1px solid ${T.rule}`,
            marginBottom: 28,
          }}
        >
          <div
            className="brief-lead-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.7fr",
              gap: 48,
              alignItems: "start",
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
                  marginBottom: 12,
                }}
              >
                BOARD INTRODUCTION · 큐레이션 노트
              </div>
              <h2
                className="brief-lead-title"
                style={{
                  fontFamily: "var(--serif-display)",
                  fontWeight: 500,
                  fontSize: 38,
                  lineHeight: 1.1,
                  margin: 0,
                  color: T.ink,
                }}
              >
                AI 이미지·영상 공모전을 한 화면에서.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: T.ink2,
                  marginTop: 18,
                  fontFamily: "var(--korean)",
                }}
              >
                창업가·기획자·디자이너에게 공모전은 단순 상금 기회가 아니라
                포트폴리오와 PoC를 검증할 무대입니다. 이 보드는 외부 데이터
                소스를 실시간으로 인용해 마감일·주최·부문을 한 번에 보여줍니다.
                공식 링크를 우선 노출하며, 발표 대기 라운드까지 추적합니다.
              </p>
            </article>

            <aside>
              <div
                style={{
                  borderTop: `3px solid ${T.ink}`,
                  paddingTop: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: T.wine,
                    fontWeight: 700,
                    marginBottom: 14,
                  }}
                >
                  HOW TO USE
                </div>
                <ol
                  style={{
                    fontFamily: "var(--korean)",
                    fontSize: 13,
                    lineHeight: 1.85,
                    color: T.ink2,
                    paddingLeft: 18,
                    margin: 0,
                  }}
                >
                  <li>부문 필터로 이미지·영상을 선택</li>
                  <li>마감 임박순 또는 최신 업데이트순으로 정렬</li>
                  <li>카드 클릭 → 공식 페이지로 이동해 접수</li>
                  <li>데이터는 외부 보드 실시간 인용 (출처 명시)</li>
                </ol>
              </div>
            </aside>
          </div>
        </section>

        <ContestBoardClient />
      </main>

      <SiteFooter />
    </div>
  );
}
