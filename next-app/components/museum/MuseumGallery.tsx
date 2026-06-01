"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CURATED_WORKS, MUSEUM_WORKS } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import { TOKENS as T } from "@/lib/tokens";

const M = {
  bg: "#0a0a0a",
  paper: "#ededeb",
  ink3: "#7a7a7a",
  rule: "rgba(237,237,235,0.12)",
  wine: T.wine,
};

type MuseumWork = (typeof MUSEUM_WORKS)[number];

export function MuseumGallery() {
  const works = MUSEUM_WORKS;
  const [current, setCurrent] = useState(0);
  const featureRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (dir: number) => {
      setCurrent((c) => (c + dir + works.length) % works.length);
    },
    [works.length]
  );

  // 키보드 ← → 로 작품 넘기기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const selectWork = (i: number) => {
    setCurrent(i);
    // 컬렉션에서 작품을 고르면 대형 뷰어로 부드럽게 이동
    featureRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const work = works[current];

  return (
    <>
      {/* 🖼️ 이번 호 큐레이션 10점 — vol seed 기반 결정론적 선택. 클릭 시 위 뷰어로 로드 */}
      <section
        style={{
          padding: "44px 64px 8px",
          maxWidth: 1400,
          margin: "0 auto",
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
          <div
            style={{
              fontFamily: "var(--serif-display)",
              fontStyle: "italic",
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            🖼️ 이번 호 큐레이션 10점
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: M.ink3,
              textTransform: "uppercase",
            }}
          >
            CURATED · {CURATED_WORKS.length} OF {works.length}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(116px, 1fr))",
            gap: 14,
          }}
        >
          {CURATED_WORKS.map((cw) => {
            const idx = works.findIndex((w) => w.index === cw.index);
            const active = idx === current;
            return (
              <button
                key={cw.index}
                type="button"
                onClick={() => idx >= 0 && selectWork(idx)}
                aria-label={`${cw.artist} - ${cw.work}`}
                title={`${cw.work} · ${cw.artist}`}
                style={{
                  border: active
                    ? `1px solid ${M.wine}`
                    : `1px solid ${M.rule}`,
                  background: "transparent",
                  padding: 6,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <ThumbVisual work={cw} active={active} />
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    color: active ? M.wine : M.ink3,
                    marginTop: 8,
                  }}
                >
                  NO. {cw.index}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 대형 피처 뷰어 (이전/다음으로 넘김) */}
      <section
        ref={featureRef}
        className="museum-feature"
        style={{
          padding: "60px 64px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 80,
          alignItems: "end",
          maxWidth: 1400,
          margin: "0 auto",
          scrollMarginTop: 24,
        }}
      >
        <div
          style={{
            aspectRatio: "4/5",
            position: "relative",
            background: "#0e0e0e",
            padding: 56,
            boxShadow: "0 50px 120px rgba(0,0,0,0.6)",
          }}
        >
          <FeatureVisual work={work} priority={current === 0} />

          {/* 좌/우 넘김 클릭 영역 */}
          <NavArrow side="left" onClick={() => go(-1)} label="이전 작품" />
          <NavArrow side="right" onClick={() => go(1)} label="다음 작품" />

          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 56,
              right: 56,
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--mono)",
              fontSize: 9,
              color: M.ink3,
              letterSpacing: "0.18em",
            }}
          >
            <span>NO. {work.index}</span>
            <span>
              {work.year} · {work.mood}
            </span>
          </div>
        </div>

        <aside style={{ paddingBottom: 8 }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.32em",
              color: M.wine,
              fontWeight: 600,
              marginBottom: 36,
            }}
          >
            ON VIEW · MASTERPIECE
          </div>
          <h2
            style={{
              fontFamily: "var(--serif-display)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: 52,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 12px",
            }}
          >
            {work.work}
          </h2>
          <div
            style={{
              fontFamily: "var(--serif-display)",
              fontSize: 18,
              color: M.ink3,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            {work.artist}
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, marginTop: 8 }}>
              {work.year} · {work.medium}
            </div>
          </div>

          {/* 이전 / 다음 네비게이션 + 카운터 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="이전 작품"
              style={navBtnStyle}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="다음 작품"
              style={navBtnStyle}
            >
              →
            </button>
            <span
              className="tabular"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.18em",
                color: M.ink3,
              }}
            >
              {work.index} / {String(works.length).padStart(2, "0")}
            </span>
          </div>

          <div style={{ height: 1, background: M.rule, marginBottom: 32 }} />
          <p
            style={{
              fontFamily: "var(--korean)",
              fontSize: 15,
              lineHeight: 2.0,
              color: "rgba(237,237,235,0.72)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            {work.note}
          </p>
          <a
            href={work.sourceUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 26,
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              color: M.ink3,
              textTransform: "uppercase",
            }}
          >
            {work.collection} · {work.license} →
          </a>
        </aside>
      </section>

      {/* The Collection — 행 클릭 시 대형 뷰어로 로드 */}
      <section
        style={{
          padding: "80px 64px 64px",
          borderTop: `1px solid ${M.rule}`,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: 28,
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--serif-display)",
              fontStyle: "italic",
              fontSize: 36,
              fontWeight: 300,
              margin: 0,
              letterSpacing: "-0.015em",
            }}
          >
            The Collection
          </h3>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: M.ink3,
              textTransform: "uppercase",
            }}
          >
            {works.length} MASTERPIECES · 클릭하면 위에서 감상
          </div>
        </div>

        {works.map((w, i) => {
          const active = i === current;
          return (
            <div
              key={w.index}
              className="museum-row"
              role="button"
              tabIndex={0}
              onClick={() => selectWork(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectWork(i);
                }
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 110px 1.1fr 1.4fr 160px",
                padding: "28px 0",
                borderTop: `1px solid ${M.rule}`,
                borderLeft: active
                  ? `2px solid ${M.wine}`
                  : "2px solid transparent",
                paddingLeft: 18,
                marginLeft: -20,
                alignItems: "baseline",
                cursor: "pointer",
                background: active ? "rgba(139,0,41,0.06)" : "transparent",
                color: active ? M.paper : "rgba(237,237,235,0.62)",
                transition: "background 0.15s ease, color 0.15s ease",
              }}
            >
              <div
                className="tabular"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: active ? M.wine : M.ink3,
                }}
              >
                NO. {w.index}
              </div>
              <div>
                <ThumbVisual work={w} active={active} />
              </div>
              <div
                style={{
                  fontFamily: "var(--serif-display)",
                  fontStyle: "italic",
                  fontSize: 28,
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                {w.work}
              </div>
              <div style={{ fontFamily: "var(--korean)", fontSize: 14 }}>
                {w.artist}
                <div style={{ color: M.ink3, fontSize: 11, marginTop: 3 }}>
                  {w.year} · {w.collection}
                </div>
                <div style={{ color: M.ink3, fontSize: 12, marginTop: 4 }}>
                  {w.note}
                </div>
              </div>
              <div
                style={{
                  textAlign: "right",
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                {active ? (
                  <span style={{ color: M.wine }}>ON VIEW</span>
                ) : (
                  <a
                    href={w.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    SOURCE →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

const navBtnStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: `1px solid ${M.rule}`,
  background: "transparent",
  color: M.paper,
  fontSize: 18,
  lineHeight: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function NavArrow({
  side,
  onClick,
  label,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        position: "absolute",
        top: 56,
        bottom: 56,
        [side]: 0,
        width: 72,
        border: "none",
        background: "transparent",
        color: "rgba(237,237,235,0.55)",
        fontSize: 26,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}

function FeatureVisual({
  work,
  priority,
}: {
  work: MuseumWork;
  priority: boolean;
}) {
  const baseStyle = {
    position: "absolute" as const,
    inset: 56,
    width: "calc(100% - 112px)",
    height: "calc(100% - 112px)",
  };

  if (work.image) {
    return (
      <div style={baseStyle}>
        <Image
          src={sitePath(work.image)}
          alt={`${work.artist} - ${work.work}`}
          fill
          priority={priority}
          sizes="(max-width: 900px) calc(100vw - 40px), 60vw"
          style={{ objectFit: "cover", filter: "saturate(0.92)" }}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`${work.artist} - ${work.work}`}
      role="img"
      style={{
        ...baseStyle,
        background: `linear-gradient(135deg, ${work.tone[0]}, ${work.tone[1]})`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    />
  );
}

function ThumbVisual({ work, active }: { work: MuseumWork; active: boolean }) {
  const opacity = active ? 1 : 0.72;
  if (work.image) {
    return (
      <Image
        src={sitePath(work.image)}
        alt={`${work.artist} - ${work.work}`}
        width={84}
        height={64}
        sizes="84px"
        style={{
          objectFit: "cover",
          borderRadius: 2,
          filter: "saturate(0.92)",
          opacity,
          width: 84,
          height: 64,
        }}
      />
    );
  }
  return (
    <div
      aria-label={`${work.artist} - ${work.work}`}
      role="img"
      style={{
        width: 84,
        height: 64,
        borderRadius: 2,
        background: `linear-gradient(135deg, ${work.tone[0]}, ${work.tone[1]})`,
        opacity,
      }}
    />
  );
}
