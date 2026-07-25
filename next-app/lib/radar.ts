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
    id: "mcp-dev-summit-seoul-0813",
    title: "MCP Dev Summit Seoul 2026 — Where the Agentic Stack Is Being Built",
    date: "2026-08-13",
    dateEnd: "2026-08-14",
    dateLabel: "2026-08-13(수)~08-14(목)",
    venue: "서울 (상세 장소 추후 공개 — OSS Korea와 같은 주)",
    region: "서울",
    host: "Agentic AI Foundation, The Linux Foundation",
    price: "Standard ₩520,000 · Academic ₩149,000 · Late(8/4~) ₩650,000",
    priceType: "paid",
    link: "https://events.linuxfoundation.org/mcp-dev-summit-seoul/",
    linkType: "official",
    point: "MCP(Model Context Protocol) 전문 개발자 서밋 — Anthropic Den Delimarsky 키노트 'Two Years of MCP', Google·AWS 스폰서. 에이전트 아키텍처·오케스트레이션·프로덕션 운영을 이틀간 집중. 딜 자동화 파이프라인 설계에 직결.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "공식 등록페이지(events.linuxfoundation.org) 날짜·가격·연사 직접 확인. AWS(Diamond)·Workato(Platinum)·Lablup(Startup) 스폰서 확인. venue만 미공개(Seoul, Korea 표기)",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "cofathon-krafton-oliveyoung-0730",
    title: "코파톤 Cofathon: AI Native Battlegrounds — 크래프톤 x CJ올리브영 해커톤",
    date: "2026-07-30",
    dateLabel: "2026-07-30(목) — 세부 시간 접수자 안내",
    venue: "펍지 성수(PUBG Seongsu), 성수동, 성동",
    region: "서울",
    host: "크래프톤, CJ올리브영 (OpenAI 기술 파트너)",
    price: "무료(참가신청 심사제)",
    priceType: "approval",
    link: "https://cofathon.getcofa.com/",
    linkType: "official",
    point: "게임사·유통사가 낸 '진짜 현업 문제'를 AI로 푸는 실무형 해커톤(상금 총 1,000만원) — 기업이 AI 인재를 뽑는 방식이 바뀌는 현장. 채용(서류면제) 연계.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "크래프톤 공식 보도자료·언론 다수 교차확인. 접수 7/17 마감, 7/23 결과 발표 완료 — 관전·네트워킹 참석 가능 여부 미확인",
    jjFlag: "weekday-work",
    curate: "pick",
  },

  // ───────────── TIER 2 · 빅테크/모델사 공식 ─────────────
  {
    id: "open-source-summit-korea-0811",
    title: "Open Source Summit Korea 2026",
    date: "2026-08-11",
    dateEnd: "2026-08-12",
    dateLabel: "2026-08-11(화)~08-12(수)",
    venue: "그랜드 인터컨티넨탈 서울 파르나스, 강남",
    region: "서울",
    host: "The Linux Foundation",
    price: "Standard $375/₩550,000 · Late(7/29~) $450/₩660,000 · Academic $75/₩110,000",
    priceType: "paid",
    link: "https://events.linuxfoundation.org/open-source-summit-korea/",
    linkType: "official",
    point: "키노트 8개+기술세션 68개 — Greg Kroah-Hartman 'Linux in the Land of LLMs', LG AI Research 이홍락 소장, IBM Priya Nagpurkar, NVIDIA 김찬란. Sovereign AI 패널 등 AI 정책·산업 인사이트 집약.",
    tier: 2,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 등록페이지(events.linuxfoundation.org) 날짜·가격·venue 직접 확인. Standard 등록 7/28 마감, 이후 Late 가격",
    jjFlag: "weekday-work",
    curate: "pick",
  },

  // ───────────── TIER 3 · 투자/정책/산업/학술 ─────────────
  {
    id: "ai-summit-seoul-expo-0819",
    title: "AI Summit Seoul & Expo 2026 (AIS 2026)",
    date: "2026-08-19",
    dateEnd: "2026-08-21",
    dateLabel: "2026-08-19(화)~08-21(목) 컨퍼런스 08-19~20 · 엑스포 08-19~21, 09:00–18:00",
    venue: "코엑스 그랜드볼룸 & B홀 전시장, 강남",
    region: "서울",
    host: "DMK Global, COEX, 한국무역협회(KITA)",
    price: "엑스포 사전등록 무료(~7/31) · 이후 ₩10,000~₩20,000 · 컨퍼런스 별도 유료",
    priceType: "split",
    link: "https://www.aisummitseoul.com/",
    linkType: "official",
    point: "국내 최대급 AI 산업 컨퍼런스+엑스포 9회째 — 6개 테마(Agentic AI·Physical AI·AI Transformation·Data Infra 등), 100+ 전시사, 30+ 세션. NASA JPL·MS Research·LG전자·SK바이오 연사진. 엑스포 사전등록 7/31까지 무료.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 사이트(aisummitseoul.com)+온오프믹스(엑스포 사전등록)+Eventbrite 교차확인. 엑스포 무료 사전등록 7/31 마감, 컨퍼런스 할인 마감 임박",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "ai-collective-seoul-geo-0728",
    title: "The AI Collective @Seoul 7월 모임 — GEO(생성엔진최적화)",
    date: "2026-07-28",
    dateLabel: "2026-07-28(월) 19:00~",
    venue: "패스트파이브 선릉센트럴점 B3F, 강남",
    region: "서울",
    host: "The AI Collective @Seoul (Juny Lee, 원혜리)",
    price: "미상",
    priceType: "unknown",
    link: "https://luma.com/rya5wmoq",
    linkType: "registration",
    point: "생성엔진최적화(GEO, AI검색에 내 콘텐츠가 노출되게 만드는 SEO의 AI판) 주제 커뮤니티 모임 — AI 검색 시대 마케팅·리서치 노출전략 감 잡기용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "정원(40명) 마감 — 대기자 등록만 가능(+37명 대기), 참석 불확실",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "rebellions-modulabs-bio-0730",
    title: "리벨리온 x 모두의연구소 7월 세미나 — 분자 시뮬레이션과 AI",
    date: "2026-07-30",
    dateLabel: "2026-07-30(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스(디오슈페리움 2층), 강남",
    region: "서울",
    host: "리벨리온, 모두의연구소",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/qg8j52y1",
    linkType: "registration",
    point: "국내 AI 반도체(NPU)사 리벨리온 후원 무료 세미나 — 분자 시뮬레이션×AI(교원대 박정빈 교수). 바이오×AI 연구 흐름을 90분에 맛보기.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 잔여 4석(7/25 기준)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "mkt-data-connect-genspark-0730",
    title: "마케팅데이터커넥트 14번째 밋업 — 글로벌 AI 기업의 마케팅 이야기",
    date: "2026-07-30",
    dateLabel: "2026-07-30(목) 19:00–21:00",
    venue: "마이크로소프트 코리아, 종로",
    region: "서울",
    host: "마케팅데이터커넥트 (Genspark.ai 협력)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/7e0qsqo6",
    linkType: "registration",
    point: "Genspark·ElevenLabs 현직 마케터가 말하는 글로벌 AI 기업의 일하는 방식 — AI 조직이 실제로 굴러가는 모습 인사이트.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 정원마감, 대기자 명단 운영 중. 접수 7/28 마감, 7/29 확정 통보",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "dcmi-2026-seoul-0803",
    title: "DCMI 2026 Seoul — Meaning-Driven AI: Metadata × Human Values",
    date: "2026-08-03",
    dateEnd: "2026-08-07",
    dateLabel: "2026-08-03(월)~08-07(금)",
    venue: "국립중앙도서관, 반포대로 201, 서초",
    region: "서울",
    host: "Dublin Core Metadata Initiative (DCMI)",
    price: "$75~$600(티어별)",
    priceType: "paid",
    link: "https://www.dublincore.org/conferences/2026/",
    linkType: "official",
    point: "메타데이터×AI 국제학회 24회째 — 'AI가 인간 가치를 이해하려면 구조화된 데이터가 핵심'이라는 주제. 데이터 거버넌스·AI 정렬 인사이트. 딜 자동화에 쓰는 데이터 구조 설계 관점에서 힌트.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "공식 사이트(dublincore.org) 날짜·venue·가격 직접 확인. 등록 오픈 중. 인퍼슨 전용 행사",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "ai-career-meetup-gongdeok-0801",
    title: "AI Meetup — Data/AI 직무 정보방 오프라인",
    date: "2026-08-01",
    dateLabel: "2026-08-01(금) 14:00~",
    venue: "공덕역 인근, 마포 (승인 후 상세 공개)",
    region: "서울",
    host: "Data/AI 직무 정보방 커뮤니티",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/kdpk5dqn",
    linkType: "registration",
    point: "Data/AI 직군 현직자·지망생 패널토크+발표+네트워킹 — 8월 초 공백기의 AI 커뮤니티 행사. AI 인력시장 온도 체감용.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 잔여 1석, 승인제. 랄프챌린지 병행(노트북 지참 필수)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-08-01",
    recurring: "매주 금 19:00~ (08-01 / 08-08 / 08-15 / 08-22)",
    dateLabel: "매주 금요일 19:00~",
    venue: "Seoul Brewery, 토정로3안길 10, 마포",
    region: "서울",
    host: "Seoul Tech Social",
    price: "5,000원(온라인 티켓만, 현장판매 없음)",
    priceType: "paid",
    link: "https://www.eventbrite.com/e/seoul-tech-mixer-and-social-tech-ai-data-it-tickets-1987413362868",
    linkType: "community",
    point: "AI·데이터·개발자 커뮤니티 애프터워크 네트워킹(매주 금) — 윈도우 전 구간을 커버하는 상시 채널.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Eventbrite 페이지 직접 확인 — 매주 금 반복, 온라인 티켓 ₩5,000",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-07-25",
  baseDate: "2026-07-25",
  rangeDays: 30,
  source:
    "2026-07-25 /radar 풀스캔 — WebSearch(약 20건)+WebFetch(약 15건) 병렬 수집: Luma(discover/seoul/ai)·Eventbrite·온오프믹스·Linux Foundation·Anthropic 공식·dublincore.org·aisummitseoul.com·brave-people/Dev-Event·GDG Korea·AWSKRUG·모두의연구소 등. 기준일 이동(7/20→7/25)으로 과거화된 4건 소멸: AX Skillathon(7/23, 종료)·Stripe Seoul Community(7/22, 종료)·Deeptech Gathering(7/20, 종료)·GDG I/O Extended(7/25, 당일=과거화). 직전 호 대비 존속 재확인 8건(코파톤 7/30·OSS Korea 8/11~12·AI Summit 8/19~21·AI Collective 7/28·리벨리온x모두연 7/30·마케팅데이터커넥트 7/30·직무정보방 8/1·Seoul Tech Mixer 반복) — 전건 WebFetch 링크 재검증(HTTP 200)+메타 교차확인 완료. 신규 검증 2건 추가 — MCP Dev Summit Seoul(8/13~14, events.linuxfoundation.org 공식 등록페이지 확인, Anthropic·Google·AWS 스폰서, 가격·연사 직접 확인)·DCMI 2026 Seoul(8/3~7, dublincore.org 공식 확인, 국립중앙도서관 venue·가격·등록 오픈 확인). AI Summit Seoul은 온오프믹스 엑스포 사전등록(무료~7/31) 발견으로 pick 승격, 가격·주최(KITA 공동) 정보 갱신. 마케팅데이터커넥트 venue를 MARU360→마이크로소프트 코리아 종로로 수정(Luma 페이지 최신 정보 반영). Seoul Tech Mixer 반복일자는 08-01/08-08/08-15/08-22로 롤링 갱신. AWSKRUG 여전히 'no upcoming events'. KDD 2026(8/9~13 제주)은 수도권 밖이라 제외.",
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
