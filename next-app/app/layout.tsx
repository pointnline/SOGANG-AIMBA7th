import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOGANG AIMBA 7th · Weekly Brief",
  description:
    "서강대 AIMBA 원우를 위한 AI · 비즈니스 · 창업 인사이트 브리핑. 뉴스를 모으는 것이 아니라, 경영자 관점에서 해석합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Noto+Sans+KR:wght@400;500;600;700;800&family=Noto+Serif+KR:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
