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
    id: "awskrug-aieng-0622",
    title: "AWSKRUG #AIEngineering 소모임 — 터미널부터 엣지까지",
    date: "2026-06-22",
    dateLabel: "2026-06-22(월) 19:00–21:00",
    venue: "서울 강남구 테헤란로 231 센터필드 EAST 18층",
    region: "서울",
    host: "AWSKRUG AI Engineering",
    price: "5,000원",
    priceType: "paid",
    link: "https://www.meetup.com/awskrug/events/315009322/",
    linkType: "community",
    point: "팀용 CLI 설계 + Edge-Cloud AI 운영 실사례 2세션 — 실무 밀도 높음.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "신청 마감 2026-06-17 — 다음 회차(월례) 노릴 가치",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 공식 ─────────────
  {
    id: "claude-bloom-maru-paloalto-0625",
    title: "Claude Bloom × MARU × 래퍼 팔로알토",
    date: "2026-06-25",
    dateLabel: "2026-06-25(목) 19:00–21:00",
    venue: "마루360 11층 다이닝라운지, 역삼로 172, 강남",
    region: "서울",
    host: "Cliwant",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/r1fiimea",
    linkType: "partner",
    point: "Claude 커뮤니티 × 래퍼 팔로알토 파이어사이드 — 'AI 시대 창작'의 인간 관점 탐색. 등록 오픈.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "pick",
  },

  // ───────────── TIER 3 · 투자/정책/산업/학술 ─────────────
  {
    id: "aaai-summer-symposia-0622",
    title: "AAAI 2026 Summer Symposium Series",
    date: "2026-06-22",
    dateEnd: "2026-06-24",
    dateLabel: "2026-06-22(월)~06-24(수)",
    venue: "동국대학교, 서울",
    region: "서울",
    host: "AAAI",
    price: "유료($225~$660)",
    priceType: "paid",
    link: "https://aaai.org/conference/summer-symposia/suss26/",
    linkType: "official",
    point: "AI 최신 연구 국제 학술 심포지엄(AI in Business 세션 포함) — 프런티어 연구 동향 직접 접점.",
    tier: 3,
    category: "학술",
    verified: "verified",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "aaicon-2026-0625",
    title: "AAiCON 2026 (실용인공지능 컨퍼런스)",
    date: "2026-06-25",
    dateEnd: "2026-06-26",
    dateLabel: "2026-06-25(목)~06-26(금)",
    venue: "장소 미정",
    region: "서울",
    host: "AI 프렌즈학회",
    price: "유료(200,000원~)",
    priceType: "paid",
    link: "https://aifrenz.org/aaicon26-registration",
    linkType: "official",
    point: "국내 AI 실무·연구 커뮤니티(AI Frenz) 연례 컨퍼런스 — 국내 AI R&D 현황 파악 채널.",
    tier: 3,
    category: "학술",
    verified: "link-ok",
    verifyNote: "장소 미정, 날짜 등록 페이지 미명시(취소마감 6/19 기준 추정 6/25~26)",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "probml-2026-0705",
    title: "ProbML 2026 — Symposium on Probabilistic Machine Learning",
    date: "2026-07-05",
    dateLabel: "2026-07-05(일) 09:00~",
    venue: "고등과학원(KIAS) 강당, 서울",
    region: "서울",
    host: "ProbML / GMAsia (ICML 2026 코로케이션)",
    price: "무료(사전등록·정원제한)",
    priceType: "free",
    link: "https://probml.cc/",
    linkType: "official",
    point: "ICML 2026 직전 코로케이션 확률적 ML 심포지엄(베이지안·불확실성 정량화) — 프런티어 연구 무료 접점.",
    tier: 3,
    category: "학술",
    verified: "verified",
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

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "awskrug-data-0624",
    title: "AWSKRUG 데이터 소모임 69번째 밋업",
    date: "2026-06-24",
    dateLabel: "2026-06-24(수) 19:30–21:00",
    venue: "서울 강남구 테헤란로 231 센터필드 EAST 18층",
    region: "서울",
    host: "AWSKRUG 데이터 소모임",
    price: "무료(소액 참가비)",
    priceType: "free",
    link: "https://www.meetup.com/ko-kr/awskrug/events/314931400/",
    linkType: "community",
    point: "카카오스타일 Databricks 이관기(Glue→Unity Catalog) — AI 데이터 인프라 전환 실무 사례.",
    tier: 4,
    category: "개발",
    verified: "verified",
    verifyNote: "참가 신청·회비 입금 마감 2026-06-21 — 다음 회차 모니터링",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "build-localhost-seoul-0625",
    title: "Build //localhost:Seoul",
    date: "2026-06-25",
    dateLabel: "2026-06-25(목) 13:30–18:00",
    venue: "50, Jongno 1-gil, Jongno-gu, Seoul (종로)",
    region: "서울",
    host: "Global AI Community / DOT4(.NET 커뮤니티)",
    price: "확인 필요",
    priceType: "unknown",
    link: "https://luma.com/md1iheb7",
    linkType: "registration",
    point: "Microsoft Build 핵심 업데이트 + AI·개발 최신 기술 로컬 리캡(MVP들이 직접 분석).",
    tier: 4,
    category: "개발",
    verified: "verified",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-06-26",
    recurring: "매주 금 19:00~ (06-26 / 07-03 / 07-10 / 07-17)",
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

  // ───────────── 제외(exclude) · 저품질·홍보성 ─────────────
  {
    id: "rapidskillup-implementation-0623",
    title: "AI Implementation in Business | Seoul",
    date: "2026-06-23",
    dateLabel: "2026-06-23(화) 14:00",
    venue: "잠원동, Seoul",
    region: "서울",
    host: "Rapid Skill Up",
    price: "유료",
    priceType: "paid",
    link: "https://www.eventbrite.com/e/ai-implementation-in-business-seoul-registration-1027620128467",
    linkType: "registration",
    point: "기업 운영에 AI를 붙이는 워크숍.",
    tier: 4,
    category: "교육",
    verified: "seed",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "유료 반복형 스킬업 워크숍(Rapid Skill Up 시리즈) — 홍보성·저밀도",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-06-22",
  baseDate: "2026-06-22",
  rangeDays: 30,
  source: "2026-06-22 /radar 풀스캔 — Luma·Meetup·Nextrise·Eventbrite·AAAI·ICML·ProbML·GlobalAI 재수집, 전 링크 HTTP 200 재검증 완료(10/10). 지난 윈도우 종료 행사 6건(Push to Prod·Claude Build Day·SAIPCON·AI혁신포럼·Decoding AI·꿈환승 등) 정리, 06-22 이후 미래 행사만 잔존. 윈도우 2026-06-22~07-22. ⚠️ 7/12~7/22 구간은 신규 확정 행사 희소 — 매주 금 Seoul Tech Mixer(07-17)만 커버, 다음 사이클 재스캔 권장.",
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
