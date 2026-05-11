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
      <body>{children}</body>
    </html>
  );
}
