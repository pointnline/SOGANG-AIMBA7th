// SOGANG AIMBA 7th — Shared design tokens (TS-friendly version of CSS vars)

export const TOKENS = {
  paper: "#faf6ef",
  paper2: "#f3ede2",
  paper3: "#ebe3d4",
  cream: "#f7f1e6",
  pulseBg: "#fff8ec",
  ink: "#1a1714",
  ink2: "#3d342d",
  ink3: "#6b5e54",
  rule: "#e6dfd5",
  wine: "#8B0029",
  wineDeep: "#5e001b",
  wineSoft: "#b3304f",
  gold: "#b89967",
  goldDeep: "#a07f47",
  black: "#0e0e10",
} as const;

export const FONTS = {
  korean: "var(--korean)",
  koreanSans: "var(--korean-sans)",
  serif: "var(--serif)",
  serifDisplay: "var(--serif-display)",
  sans: "var(--sans)",
  mono: "var(--mono)",
} as const;
