// SOGANG AIMBA 7th — AI 이벤트 레이더 데이터 소스 (독립 파일)
//
// ⚠️ 이 파일은 /radar 커맨드(크론)가 통째로 재생성하는 "생성물"이다.
//    수기 편집보다, 다음 수집 사이클에서 자동 갱신되는 것을 기본으로 한다.
//    스키마(인터페이스)만 안정적으로 유지하고, RADAR_EVENTS 배열은 교체된다.
//
// 검증 상태(verified):
//   "verified"  = 링크 HTTP 200 + 날짜·장소·주최 교차확인 완료 (풀검증 통과)
//   "link-ok"   = 링크 도달 확인, 메타 교차검증 일부 미완
//   "seed"      = 베리해피독 수집분, 자동검증 전 (초기 시드)
//   "failed"    = 검증 실패 — 화면에 [미검증] 경고와 함께 노출
//
// 큐레이션(curate):  pick=추천 / watch=관심 / exclude=제외(저품질·홍보성)
// 조전무 시간대(jjFlag): weekday-work=평일 업무시간(⚠️) / weekday-eve=평일 저녁 / weekend=주말

export type RadarTier = 1 | 2 | 3 | 4;
export type RadarVerified = "verified" | "link-ok" | "seed" | "failed";
export type RadarCurate = "pick" | "watch" | "exclude";
export type RadarRegion = "서울" | "수도권" | "온라인";
export type RadarPriceType = "free" | "paid" | "approval" | "split" | "unknown";
export type RadarLinkType = "official" | "registration" | "partner" | "community";
export type RadarJjFlag = "weekday-work" | "weekday-eve" | "weekend" | "multi";

export interface RadarEvent {
  id: string;
  title: string;
  date: string; // ISO 시작일 YYYY-MM-DD
  dateEnd?: string; // 다일 행사 종료일
  dateLabel: string; // 화면 표기 "2026-06-06(토) 10:00"
  recurring?: string; // 반복 행사 표기 "매주 금 19:00"
  venue: string; // 장소
  region: RadarRegion;
  host: string; // 주최
  price: string; // 화면 표기 "무료" / "20,000원" / "유료(승인제)"
  priceType: RadarPriceType;
  link: string;
  linkType: RadarLinkType;
  point: string; // 한 줄 포인트
  tier: RadarTier; // 실무가치 1(최상)~4
  category: string; // 에이전트 / 빅테크 / 정책 / 전시 / 네트워킹 / 교육
  verified: RadarVerified;
  verifyNote?: string;
  jjFlag: RadarJjFlag; // 조전무 참석 시간대
  curate: RadarCurate;
  excludeReason?: string;
}

export interface RadarMeta {
  generated: string; // 생성일
  baseDate: string; // 기준일(향후 N일의 시작점)
  rangeDays: number; // 탐색 범위(일)
  source: string;
  total: number;
  pickCount: number;
  excludeCount: number;
}

// 실무가치 티어 정의 (정렬·뱃지에 사용)
export const RADAR_TIERS: Record<RadarTier, { label: string; desc: string; color: string }> = {
  1: { label: "T1 · 에이전트/개발", desc: "AI 에이전트·개발자동화 직접 관련", color: "#8B0029" },
  2: { label: "T2 · 빅테크/모델사", desc: "빅테크·모델사·클라우드 공식 행사", color: "#a07f47" },
  3: { label: "T3 · 투자/정책/산업", desc: "투자·정책·산업 인사이트 가치", color: "#3d342d" },
  4: { label: "T4 · 네트워킹", desc: "커뮤니티 네트워킹 가치", color: "#6b5e54" },
};

export const RADAR_EVENTS: RadarEvent[] = [
  // ───────────── TIER 1 · 에이전트/개발자동화 ─────────────
  {
    id: "cortiq-agentic-summit-0703",
    title: "Cortiq Summit 2026: Agentic AI",
    date: "2026-07-03",
    dateLabel: "2026-07-03(금) 11:00–19:00",
    venue: "ITSquare, 오크우드 프리미어 코엑스 2층, 강남",
    region: "서울",
    host: "Seong Joon Oh (ICML 2026 코로케이션)",
    price: "일반 50,000원 / 학생 무료",
    priceType: "split",
    link: "https://luma.com/c3e67mf0",
    linkType: "registration",
    point: "ICML 직전 '에이전틱 AI' 집중 서밋 — 키노트·스폰서 세션·ICML 논문 프리뷰. 에이전트 실무·연구 한자리.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "icml-night-instructkr-exa-0704",
    title: "ICML Night — Instruct.KR x Exa AI 서치 기술 밋업",
    date: "2026-07-04",
    dateLabel: "2026-07-04(토) 12:00–20:00",
    venue: "코엑스 인근, 서울",
    region: "서울",
    host: "Instruct.KR, Exa AI",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/7nt9s63z",
    linkType: "registration",
    point: "국내 LLM 커뮤니티(Instruct.KR) × Exa 검색 — AI 서치/리트리벌 기술 딥다이브. 딜 리서치 자동화 힌트.",
    tier: 1,
    category: "개발",
    verified: "link-ok",
    verifyNote: "참가비 등록 페이지 확인 권장",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "d4d-hackathon-apac-0704",
    title: "D4D — Deploy for Defense Hackathon APAC",
    date: "2026-07-04",
    dateEnd: "2026-07-05",
    dateLabel: "2026-07-04(토)~07-05(일) 09:00–16:00",
    venue: "코엑스, 서울",
    region: "서울",
    host: "D4D (ICML 2026 코로케이션)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/2ew4xn7b",
    linkType: "registration",
    point: "ICML 사이드 해커톤(APAC) — 실전 빌드·배포 경험. 빌더 네트워크 확장 채널.",
    tier: 1,
    category: "빌드",
    verified: "link-ok",
    verifyNote: "참가비·참가자격 등록 페이지 확인 권장",
    jjFlag: "weekend",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 공식 ─────────────
  {
    id: "friendliai-night-icml-0706",
    title: "FriendliAI Night at ICML 2026",
    date: "2026-07-06",
    dateLabel: "2026-07-06(월) 19:00–21:00",
    venue: "코엑스 인근, 서울",
    region: "서울",
    host: "FriendliAI",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/lyx6rsfx",
    linkType: "registration",
    point: "국내 LLM 인프라사(FriendliAI) ICML 나이트 — 모델 서빙·추론 최적화 현업자 네트워킹.",
    tier: 2,
    category: "빅테크",
    verified: "link-ok",
    verifyNote: "참가비 무료 추정, 등록 페이지 확인 권장",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 3 · 투자/정책/산업/학술 ─────────────
  {
    id: "probml-2026-0705",
    title: "ProbML 2026 — Symposium on Probabilistic Machine Learning",
    date: "2026-07-05",
    dateLabel: "2026-07-05(일) 08:00–18:00",
    venue: "고등과학원(KIAS) 강당, 서울",
    region: "서울",
    host: "ProbML (ICML 2026 코로케이션)",
    price: "무료(사전등록·정원제한)",
    priceType: "free",
    link: "https://probml.cc/",
    linkType: "official",
    point: "ICML 2026 직전 코로케이션 확률적 ML 심포지엄(베이지안·불확실성 정량화) — 프런티어 연구 무료 접점.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "공식 기준 KIAS 강당·무료(어그리게이터 일부 COEX 오기) — 공식 확정",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "icml-2026-0706",
    title: "ICML 2026 — International Conference on Machine Learning",
    date: "2026-07-06",
    dateEnd: "2026-07-11",
    dateLabel: "2026-07-06(월)~07-11(토) (Tutorial 7/6 · Main 7/7~9 · Workshop 7/10~11)",
    venue: "코엑스 컨벤션 센터, 서울",
    region: "서울",
    host: "ICML / IMLS",
    price: "유료(등록비 별도)",
    priceType: "paid",
    link: "https://icml.cc/",
    linkType: "official",
    point: "세계 3대 ML 학회가 서울 COEX 개최 — AI 최전선 연구 동향과 글로벌 네트워크 동시에. 윈도우 내 최대 이벤트.",
    tier: 3,
    category: "학술",
    verified: "verified",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "taic-2026-0706",
    title: "TAIC'26 — Thinking about AI's Capability",
    date: "2026-07-06",
    dateLabel: "2026-07-06(월) 09:00–17:30",
    venue: "코엑스, 서울",
    region: "서울",
    host: "TAIC (ICML 2026 코로케이션)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/ojd6dd4p",
    linkType: "registration",
    point: "'AI 역량을 어떻게 볼 것인가' 주제 워크숍 — AI 능력 평가·한계 담론. 거버넌스·리스크 관점 인사이트.",
    tier: 3,
    category: "학술",
    verified: "link-ok",
    verifyNote: "참가비 등록 페이지 확인 권장",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "icml-ai-education-0708",
    title: "ICML 2026: AI x Education",
    date: "2026-07-08",
    dateLabel: "2026-07-08(수) 19:00–22:00",
    venue: "코엑스 인근, 서울",
    region: "서울",
    host: "ICML 커뮤니티 (코로케이션)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/61aacz14",
    linkType: "registration",
    point: "AI×교육 세션 — AIMBA·교육 관점에서 LLM의 학습 적용 사례 접점.",
    tier: 3,
    category: "교육",
    verified: "link-ok",
    verifyNote: "참가비 등록 페이지 확인 권장",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "smw-ai-mixer-0705",
    title: "SMW AI Networking Mixer (ICML 사이드)",
    date: "2026-07-05",
    dateLabel: "2026-07-05(일) 16:00–20:00",
    venue: "코엑스 인근, 서울",
    region: "서울",
    host: "SMW (ICML 2026 코로케이션)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/64qex8js",
    linkType: "registration",
    point: "ICML 방문 글로벌 연구자 × 국내 AI 빌더 네트워킹 믹서 — 주말 인맥 확장.",
    tier: 4,
    category: "네트워킹",
    verified: "link-ok",
    verifyNote: "참가비 등록 페이지 확인 권장",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "cafe-compute-icml-0707",
    title: "Cafe Compute @ICML",
    date: "2026-07-07",
    dateLabel: "2026-07-07(화) 19:00–22:00",
    venue: "코엑스 인근, 서울",
    region: "서울",
    host: "Cafe Compute (ICML 2026 코로케이션)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/cafecomputeicml",
    linkType: "registration",
    point: "ICML 사이드 커뮤니티 모임 — 컴퓨트·인프라 토픽 캐주얼 네트워킹.",
    tier: 4,
    category: "네트워킹",
    verified: "link-ok",
    verifyNote: "참가비 등록 페이지 확인 권장",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-07-03",
    recurring: "매주 금 19:00~ (07-03 / 07-10 / 07-17 / 07-24)",
    dateLabel: "매주 금요일 19:00~",
    venue: "Seoul Brewery, 10 Tojeong-ro 3an-gil, Mapo-gu",
    region: "서울",
    host: "Seoul Tech Social",
    price: "무료(음료·음식 자율 구매)",
    priceType: "free",
    link: "https://www.eventbrite.com/e/seoul-tech-mixer-and-social-tech-ai-data-it-registration-1987413362868",
    linkType: "community",
    point: "AI·데이터·개발자 커뮤니티 애프터워크 네트워킹(매주 금요일 반복) — 글로벌 테크 인맥 확장.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-06-29",
  baseDate: "2026-06-29",
  rangeDays: 30,
  source: "2026-06-29 /radar 리베이스(Vol.14 발간 연동) — 직전 2026-06-25 풀스캔 기준에서 발간일(06-29) 이전 종료 행사 3건 제거(Cursor Hackathon 06-27·Claude Bloom 06-25·AAiCON 06-25~26), 매주 금 Seoul Tech Mixer 시작점을 07-03로 재기준화. ICML 2026(7/6~11 COEX) 코로케이션 사이드이벤트 클러스터(7/3~8)가 핵심으로 그대로 유효 — Cortiq Agentic Summit·ICML Night·D4D 해커톤·FriendliAI·TAIC·ProbML·각종 네트워킹. 전 링크 직전 사이클 HTTP 200 검증분 유지. 윈도우 2026-06-29~07-29. ⚠️ 7/12~7/29 구간은 신규 확정 행사 희소 — 매주 금 Seoul Tech Mixer(07-17·07-24)만 커버, 다음 발간 사이클에서 풀 재스캔 권장. ProbML은 공식 기준 KIAS·무료 확정.",
  total: RADAR_EVENTS.length,
  pickCount,
  excludeCount,
};

// 화면 정렬용 헬퍼: 큐레이션(pick>watch>exclude) → 티어 → 날짜
const CURATE_ORDER: Record<RadarCurate, number> = { pick: 0, watch: 1, exclude: 2 };

export function sortedRadarEvents(): RadarEvent[] {
  return [...RADAR_EVENTS].sort((a, b) => {
    if (CURATE_ORDER[a.curate] !== CURATE_ORDER[b.curate]) {
      return CURATE_ORDER[a.curate] - CURATE_ORDER[b.curate];
    }
    if (a.tier !== b.tier) return a.tier - b.tier;
    return a.date.localeCompare(b.date);
  });
}

export const RADAR_PICKS = sortedRadarEvents().filter((e) => e.curate === "pick");
export const RADAR_WATCH = sortedRadarEvents().filter((e) => e.curate === "watch");
export const RADAR_EXCLUDED = sortedRadarEvents().filter((e) => e.curate === "exclude");

// ───────────── 캘린더 어댑터 ─────────────
// 홈 "AI 행사·모임 캘린더"가 레이더를 단일 소스로 읽도록 정규화한다.
// exclude(저품질)는 캘린더에서 빼고, 날짜순으로 정렬한다.

const DOW = ["일", "월", "화", "수", "목", "금", "토"];

function isoToShort(iso: string): string {
  const [, m, d] = iso.split("-").map(Number);
  return `${m}.${String(d).padStart(2, "0")}`;
}

function isoToDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  // 빌드 타임 결정적 계산(UTC 고정) — TZ 흔들림 방지
  return DOW[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
}

export interface CalendarRow {
  shortDate: string; // "6.06"
  day: string; // "토"
  rangeNote?: string; // "~6.12" / "매주"
  sortKey: string; // ISO
  title: string;
  where: string;
  link?: string;
  tag: string; // category
  tier: RadarTier;
  price: string;
  priceType: RadarPriceType;
  verified: RadarVerified;
  jjWork: boolean; // 평일 업무시간(⚠️)
}

export const CALENDAR_ROWS: CalendarRow[] = sortedRadarEvents()
  .filter((e) => e.curate !== "exclude")
  .map((e) => ({
    shortDate: isoToShort(e.date),
    day: e.recurring ? "금" : isoToDay(e.date),
    rangeNote: e.recurring ? "매주" : e.dateEnd ? `~${isoToShort(e.dateEnd)}` : undefined,
    sortKey: e.date,
    title: e.title,
    where: e.venue,
    link: e.link,
    tag: e.category,
    tier: e.tier,
    price: e.price,
    priceType: e.priceType,
    verified: e.verified,
    jjWork: e.jjFlag === "weekday-work",
  }))
  .sort((a, b) => a.sortKey.localeCompare(b.sortKey));
