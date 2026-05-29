import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const SITE_TITLE = "SOGANG AIMBA 7th · Weekly Brief";
const SITE_DESC =
  "서강대 AIMBA 원우를 위한 AI · 비즈니스 · 창업 인사이트 브리핑. 뉴스를 모으는 것이 아니라, 경영자 관점에서 해석합니다.";
// basePath(/SOGANG-AIMBA7th)를 포함한 절대 경로. metadataBase 기준으로 OG/아이콘 URL이 완성된다.
const OG_IMAGE = "/SOGANG-AIMBA7th/assets/sogang/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://pointnline.github.io"),
  title: SITE_TITLE,
  description: SITE_DESC,
  alternates: {
    canonical: "/SOGANG-AIMBA7th/",
  },
  icons: {
    icon: "/SOGANG-AIMBA7th/assets/sogang/favicon.ico",
    apple: "/SOGANG-AIMBA7th/assets/sogang/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/SOGANG-AIMBA7th/",
    siteName: "SOGANG AIMBA 7th",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SOGANG AIMBA 7th Weekly Brief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
