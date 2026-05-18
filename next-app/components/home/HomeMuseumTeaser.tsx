import { MUSEUM_WORKS } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";
import Image from "next/image";

export function HomeMuseumTeaser() {
  const featured = MUSEUM_WORKS[0];

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
            S.A MUSEUM · TESSA LINE-UP
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
            미술품 투자 플랫폼의
            <br />
            작가 풀을 큐레이션으로 읽다.
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
            S.A Museum의 작품 풀을 Tessa 공개 작가 라인업 기준으로 다시
            세팅했습니다. 현재 <strong style={{ color: T.gold }}>{MUSEUM_WORKS.length}명</strong>의
            작가 이미지를 로컬 에셋으로 연결했습니다.
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
              TESSA public line-up · 2026
            </span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {featured.image ? (
            <Image
              src={sitePath(featured.image)}
              alt={`${featured.artist} - ${featured.work}`}
              width={640}
              height={853}
              priority
              sizes="(max-width: 900px) 100vw, 320px"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: `linear-gradient(180deg, ${featured.tone[0]}, ${featured.tone[1]})`,
                borderRadius: 4,
                boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6)",
              }}
            />
          )}
          <div
            style={{
              marginTop: 14,
              fontFamily: "var(--serif-display)",
              fontSize: 13,
              fontStyle: "italic",
              color: "#faf6ef",
            }}
          >
            {featured.artist} · {featured.work}
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(250,246,239,0.5)",
              marginTop: 4,
            }}
          >
            FEATURED · NO. {featured.index} / {MUSEUM_WORKS.length}
          </div>
        </div>
      </div>
    </div>
  );
}
