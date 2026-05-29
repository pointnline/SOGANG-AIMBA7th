import Script from "next/script";

// ─────────────────────────────────────────────────────────────
// Google Analytics 4 (GA4) 통합
//
// 사용법: 아래 GA_MEASUREMENT_ID 에 조전무님 GA4 측정ID(G-XXXXXXXX)를 넣으면
// 모든 호(vol) 페이지에 자동 적용됩니다. 비워두면 아무것도 렌더링되지 않습니다.
//
// 추적 항목:
//  1) 호별 페이지뷰  — vol_2026xxxx.html 각각의 조회수
//  2) 기사 원문 링크 클릭 — GA4 '향상된 측정(Enhanced measurement)'의
//     아웃바운드 클릭 추적이 자동으로 외부 링크 클릭을 잡아줍니다.
//     (GA4 관리 > 데이터 스트림 > 향상된 측정 ON — 기본 활성)
// ─────────────────────────────────────────────────────────────
const GA_MEASUREMENT_ID = "G-YDZGVF8SF0";

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
