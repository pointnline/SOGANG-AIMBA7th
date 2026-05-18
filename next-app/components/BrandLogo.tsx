type BrandLogoTone = "light" | "dark";
type BrandLogoSize = "small" | "medium" | "large";

const toneMap = {
  light: {
    primary: "#faf6ef",
    muted: "rgba(250,246,239,0.66)",
    accent: "#d7b777",
  },
  dark: {
    primary: "#1a1714",
    muted: "#6b5e54",
    accent: "#8B0029",
  },
};

const sizeMap = {
  small: 42,
  medium: 74,
  large: 96,
};

export function BrandMark({
  tone = "dark",
  size = "medium",
  label = "SOGANG AIMBA 7th",
}: {
  tone?: BrandLogoTone;
  size?: BrandLogoSize;
  label?: string;
}) {
  const c = toneMap[tone];
  const px = sizeMap[size];

  return (
    <svg
      aria-label={label}
      role="img"
      width={px}
      height={px}
      viewBox="0 0 96 96"
      style={{ display: "block", flex: "0 0 auto" }}
    >
      <circle cx="48" cy="48" r="44" fill="none" stroke={c.primary} strokeWidth="2.2" />
      <circle cx="48" cy="48" r="37" fill="none" stroke={c.muted} strokeWidth="1" />
      <path
        d="M48 16 73 28v20c0 17.5-10.4 27.2-25 34-14.6-6.8-25-16.5-25-34V28l25-12Z"
        fill="none"
        stroke={c.primary}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M32 38h32" stroke={c.accent} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 32h24l-12-7-12 7Z" fill={c.accent} />
      {[34, 42, 50, 58].map((x) => (
        <rect key={x} x={x} y="41" width="4" height="24" rx="1.2" fill={c.primary} />
      ))}
      <path d="M30 69h36" stroke={c.accent} strokeWidth="2.4" strokeLinecap="round" />
      <text
        x="48"
        y="87"
        textAnchor="middle"
        fontFamily="Inter, Noto Sans KR, system-ui, sans-serif"
        fontSize="8"
        fontWeight="800"
        fill={c.primary}
      >
        AIMBA 7
      </text>
    </svg>
  );
}

export function BrandLockup({
  tone = "dark",
  size = "medium",
  compact = false,
}: {
  tone?: BrandLogoTone;
  size?: BrandLogoSize;
  compact?: boolean;
}) {
  const c = toneMap[tone];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: compact ? 12 : 18,
        color: c.primary,
      }}
    >
      <BrandMark tone={tone} size={size} />
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontSize: compact ? 10 : 12,
            fontWeight: 800,
            letterSpacing: "0.18em",
            color: c.accent,
            lineHeight: 1,
          }}
        >
          SOGANG AIMBA 7TH
        </div>
        <div
          style={{
            fontFamily: "var(--serif-display)",
            fontSize: compact ? 20 : 28,
            fontWeight: 600,
            fontStyle: "italic",
            color: c.primary,
            lineHeight: 1.05,
            marginTop: 5,
          }}
        >
          Weekly Brief
        </div>
      </div>
    </div>
  );
}
