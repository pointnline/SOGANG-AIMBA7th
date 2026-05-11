import { TOKENS as T } from "@/lib/tokens";
import { sitePath } from "@/lib/paths";

export function HomeMuseumTeaser() {
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: T.gold,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            S.A MUSEUM · CURATION
          </div>
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 36,
              fontWeight: 500,
              fontStyle: "italic",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            데이터의 끝에서 우리는
            <br />한 점의 색 앞에 선다.
          </h3>
          <p
            style={{
              fontFamily: "var(--korean)",
              fontSize: 13.5,
              lineHeight: 1.85,
              color: "rgba(250,246,239,0.7)",
              marginTop: 18,
              maxWidth: 500,
            }}
          >
            S.A Museum은 브리핑 사이에 잠깐 숨을 고르는 월간 큐레이션입니다.
            이전 페이지의 Selected Works를 살려{" "}
            <strong style={{ color: T.gold }}>10점</strong>의 작품을 새
            전시 틀에 연결했습니다.
          </p>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <a
              href={sitePath("/museum")}
              style={{
                padding: "12px 22px",
                background: T.gold,
                color: "#0e0e10",
                borderRadius: 6,
                fontFamily: "var(--sans)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                display: "inline-block",
              }}
            >
              MUSEUM 입장 →
            </a>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "rgba(250,246,239,0.5)",
              }}
            >
              open · tue–sun · 24h online
            </span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              background:
                "linear-gradient(180deg, #d4541f 0%, #b53524 35%, #5b101c 75%, #2d0810 100%)",
              borderRadius: 4,
              boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6)",
            }}
          />
          <div
            style={{
              marginTop: 14,
              fontFamily: "var(--serif-display)",
              fontSize: 13,
              fontStyle: "italic",
              color: "#faf6ef",
            }}
          >
            Mark Rothko · Untitled, 1962
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(250,246,239,0.5)",
              marginTop: 4,
            }}
          >
            THIS WEEK · NO. 23 / 23
          </div>
        </div>
      </div>
    </div>
  );
}
