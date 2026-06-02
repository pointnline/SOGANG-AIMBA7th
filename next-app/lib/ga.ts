// ─────────────────────────────────────────────────────────────
// GA4 이벤트 헬퍼
//
// 좋아요·체크·Pulse 투표 같은 사용자 인터랙션을 GA4 커스텀 이벤트로 발사한다.
// 측정ID(G-YDZGVF8SF0)는 components/GoogleAnalytics.tsx 에서 이미 config 됨.
// 여기서는 window.gtag 로 'event' 만 쏜다(별도 키 불필요, Supabase 미사용).
//
// 집계는 GA4 대시보드(보고서 > 참여도 > 이벤트)에서 이벤트 이름별 count 로 확인.
// Future Report 는 발간 시점에 그 수치를 스냅샷으로 박는다.
// ─────────────────────────────────────────────────────────────

type GAParams = Record<string, string | number | boolean | undefined>;

/** GA4 커스텀 이벤트 발사. gtag 미로딩(광고차단 등)이면 조용히 무시. */
export function trackEvent(name: string, params: GAParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", name, params);
    } else if (Array.isArray(w.dataLayer)) {
      // gtag.js 로딩 전이면 dataLayer 에 큐잉
      w.dataLayer.push(["event", name, params]);
    }
  } catch {
    /* 측정 실패는 UX 를 막지 않는다 */
  }
}

/** 한 브라우저에서 동일 이벤트 1회만 집계되도록 localStorage 플래그를 본다. */
export function hasFiredOnce(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

/** 이벤트 발사 플래그 저장(true)/해제(false). */
export function setFiredFlag(key: string, value: boolean): void {
  if (typeof window === "undefined") return;
  try {
    if (value) window.localStorage.setItem(key, "1");
    else window.localStorage.removeItem(key);
  } catch {
    /* 저장 불가(시크릿 모드 등)면 무시 */
  }
}
