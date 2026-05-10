export function HomeHealingNote() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "36px 0 8px",
      }}
    >
      <div
        style={{
          position: "relative",
          transform: "rotate(-1.6deg)",
          background: "linear-gradient(180deg, #fff8e7, #f3e9ce)",
          padding: "36px 44px 32px",
          width: 520,
          boxShadow:
            "0 14px 28px -16px rgba(60,40,10,0.35), 0 2px 0 rgba(0,0,0,0.04)",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%) rotate(2deg)",
            width: 90,
            height: 22,
            background: "rgba(184,150,80,0.55)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.28em",
            color: "#8a6b3a",
            fontWeight: 700,
            marginBottom: 14,
            textAlign: "center",
          }}
        >
          — HEALING NOTE —
        </div>
        <div
          style={{
            fontFamily: '"Newsreader", "Noto Serif KR", serif',
            fontStyle: "italic",
            fontSize: 26,
            fontWeight: 400,
            color: "#3d2a16",
            letterSpacing: "-0.005em",
            lineHeight: 1.4,
            textAlign: "center",
          }}
        >
          &ldquo;상처를 통해
          <br />
          빛이 들어온다.&rdquo;
        </div>
        <div
          style={{
            fontFamily: "var(--korean)",
            fontSize: 12,
            color: "#6b5236",
            marginTop: 18,
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          — 루미 (13C, Persia)
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #d96666, #8b1f1f 70%)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
