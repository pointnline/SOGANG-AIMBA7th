import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#8B0029",
          deep: "#5e001b",
          soft: "#b3304f",
          tint: "#f6e9ec",
        },
        gold: {
          DEFAULT: "#b89967",
          deep: "#a07f47",
        },
        paper: {
          DEFAULT: "#faf6ef",
          2: "#f3ede2",
          3: "#ebe3d4",
          cream: "#f7f1e6",
          pulse: "#fff8ec",
        },
        ink: {
          DEFAULT: "#1a1714",
          2: "#3d342d",
          3: "#6b5e54",
        },
        rule: "#e6dfd5",
      },
      fontFamily: {
        serif: [
          "Newsreader",
          "Source Serif 4",
          "Spectral",
          "Georgia",
          "serif",
        ],
        "serif-display": ["Newsreader", "Source Serif 4", "Georgia", "serif"],
        sans: [
          "Inter Tight",
          "Inter",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
        korean: ["Noto Serif KR", "Newsreader", "serif"],
        "korean-sans": [
          "Pretendard",
          "Noto Sans KR",
          "Inter Tight",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
