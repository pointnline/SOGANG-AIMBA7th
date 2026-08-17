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
    point: "게임사·유통사가 낸 '진짜 현업 문제'를 AI로 푸는 실무형 해커톤(상금 총 1,000만원) — 기업이 AI 인재를 뽑는 방식이 바뀌는 현장. 접수 7/17까지 오픈 중.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "크래프톤 공식 보도자료·언론 다수 교차확인 — 채용(서류면제) 연계 성격, 세부 시간 미공개",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "ax-skillathon-fastcampus-0723",
    title: "비개발자를 위한 AX Skillathon — Codex 업무 자동화 핸즈온",
    date: "2026-07-23",
    dateLabel: "2026-07-23(목) 09:30–18:00",
    venue: "드림플러스 강남, 서울",
    region: "서울",
    host: "패스트캠퍼스 (OpenAI Codex 실습)",
    price: "무료(승인제·신청서 선발)",
    priceType: "approval",
    link: "https://luma.com/1qi41s1b",
    linkType: "registration",
    point: "비개발자가 자기 반복업무를 Codex로 자동화해 보는 무료 종일 워크숍 — 조전무 딜 업무 자동화와 정확히 같은 주제. 선착순 아닌 신청서 심사 선발.",
    tier: 1,
    category: "교육",
    verified: "verified",
    verifyNote: "평일 종일(⚠️) — 신청서 품질로 선발",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  // ───────────── TIER 2 · 빅테크/모델사 공식 ─────────────
  {
    id: "stripe-seoul-ai-builders-0722",
    title: "Stripe Seoul Community Meetup — For AI Product Builders",
    date: "2026-07-22",
    dateLabel: "2026-07-22(수) 18:30–20:30",
    venue: "프론트원 5층 박병원홀, 공덕, 마포",
    region: "서울",
    host: "Stripe Community, dcamp",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/tpcv75g2",
    linkType: "registration",
    point: "스트라이프 서울 커뮤니티 발족전 — AI 프로덕트를 글로벌로 파는 창업자·빌더 네트워킹. 결제 인프라×AI 수익화 접점. 직전 호 미해결 리드였던 행사.",
    tier: 2,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "잔여 1석 수준(7/11 기준) — 승인제, 사실상 대기 각오",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "open-source-summit-korea-0811",
    title: "Open Source Summit Korea 2026",
    date: "2026-08-11",
    dateEnd: "2026-08-12",
    dateLabel: "2026-08-11(화)~08-12(수)",
    venue: "그랜드 인터컨티넨탈 서울 파르나스 (추정), 강남",
    region: "서울",
    host: "The Linux Foundation",
    price: "Late 등록 $450/₩660,000(일반) · $75(학생·취미개발자)",
    priceType: "paid",
    link: "https://events.linuxfoundation.org/open-source-summit-korea/",
    linkType: "official",
    point: "클라우드·오픈소스·AI/데이터 등 8개 트랙의 글로벌 개발자 컨퍼런스 — 'Sovereign AI' 패널 등 AI 정책·산업 인사이트도 포함. IBM·Red Hat 등 골드 스폰서.",
    tier: 2,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 등록페이지(events.linuxfoundation.org)에서 날짜·가격 직접 확인. venue명은 공동개최 OpenSSF Community Day Korea 페이지에서 교차확인(본행사 페이지 자체엔 venue 미기재 — 신뢰도 중)",
    jjFlag: "weekday-work",
    curate: "pick",
  },

  // ───────────── TIER 3 · 투자/정책/산업/학술 ─────────────
  {
    id: "deeptech-gathering-0720",
    title: "Deeptech Innovation Gathering East Asia 2026",
    date: "2026-07-20",
    dateLabel: "2026-07-20(월) 14:00–18:00",
    venue: "d.camp, 강남",
    region: "서울",
    host: "Plug and Play Japan",
    price: "무료(RSVP)",
    priceType: "free",
    link: "https://www.eventbrite.com/e/deeptech-innovation-gathering-east-asia-2026-tickets-1991347968379",
    linkType: "registration",
    point: "Plug and Play 딥테크 피칭데이 — AI·로보틱스 스타트업 10+ 피칭, 투자자 네트워킹. 윈도우 내 핵심 딜소싱 접점.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "티켓 발권 버튼 활성 확인(7/11) — 직전 호 'Going fast', RSVP 서두를 것",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "ai-collective-seoul-geo-0728",
    title: "The AI Collective @Seoul 7월 모임 — GEO(생성엔진최적화)",
    date: "2026-07-28",
    dateLabel: "2026-07-28(화) 19:00~",
    venue: "패스트파이브 선릉센트럴점 B3F, 강남",
    region: "서울",
    host: "The AI Collective @Seoul (Juny Lee, 원혜리)",
    price: "미상",
    priceType: "unknown",
    link: "https://luma.com/rya5wmoq",
    linkType: "registration",
    point: "생성엔진최적화(GEO, 챗봇·AI검색에 내 콘텐츠가 노출되게 만드는 SEO의 AI판) 주제 커뮤니티 모임 — AI 검색 시대 마케팅·리서치 노출전략 감 잡기용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "정원(40명) 마감 — 대기자 등록만 가능, 참석 불확실",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "ai-summit-seoul-expo-0819",
    title: "AI Summit Seoul & Expo 2026 (AIS 2026)",
    date: "2026-08-19",
    dateEnd: "2026-08-21",
    dateLabel: "2026-08-19(수)~08-21(금) 컨퍼런스 08-19~20 · 엑스포 08-19~21, 09:00–18:00",
    venue: "코엑스 그랜드볼룸 & B홀 전시장, 강남",
    region: "서울",
    host: "DMK Global",
    price: "얼리버드 등록 진행중(금액 미상)",
    priceType: "paid",
    link: "https://www.aisummitseoul.com/",
    linkType: "official",
    point: "국내 최대급 AI 산업 컨퍼런스+엑스포 — 정책·투자·산업 인사이트를 사흘간 집중 흡수. 지난 호에는 윈도우 밖이라 스킵했던 건, 이번 호에 첫날이 걸려 등재.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "윈도우(~08-19)는 첫날만 겹침 — 전체 일정은 8/21까지, 다음 호에도 재등장 예정",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "rebellions-modulabs-bio-0730",
    title: "리벨리온 x 모두의연구소 7월 세미나 — 분자 시뮬레이션과 AI",
    date: "2026-07-30",
    dateLabel: "2026-07-30(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스, 강남",
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
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "mkt-data-connect-genspark-0730",
    title: "마케팅데이터커넥트 14번째 밋업 — 글로벌 AI 기업의 마케팅 이야기",
    date: "2026-07-30",
    dateLabel: "2026-07-30(목) 19:00–21:00",
    venue: "MARU360 B1 그로스세미나룸, 역삼로 172, 강남",
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
    verifyNote: "정원마감 — 대기자 명단 운영 중",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "io-extended-android-0725",
    title: "2026 Google I/O Extended — GDG Korea Android",
    date: "2026-07-25",
    dateLabel: "2026-07-25(토) 13:30~",
    venue: "컬리 본사 — 한국타이어빌딩 18층, 서울",
    region: "서울",
    host: "GDG Korea Android",
    price: "유료(Ticketa 발권)",
    priceType: "paid",
    link: "https://ticketa.co/event/vcp5wmp4",
    linkType: "registration",
    point: "구글 I/O 발표를 한국 개발자 커뮤니티가 리캡 — 온디바이스 AI·개발도구 세션 포함. 소비자 기기단 AI 흐름 파악용 주말 행사.",
    tier: 4,
    category: "개발",
    verified: "verified",
    verifyNote: "티켓 가격 미확인 — Ticketa 발권 후 GDG 플랫폼 Get Ticket 필요",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "ai-career-meetup-gongdeok-0801",
    title: "AI Meetup — Data/AI 직무 정보방 오프라인",
    date: "2026-08-01",
    dateLabel: "2026-08-01(토) 13:30–17:30",
    venue: "공덕역 인근, 마포 (승인 후 상세 공개)",
    region: "서울",
    host: "Data/AI 직무 정보방 커뮤니티",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/kdpk5dqn",
    linkType: "registration",
    point: "Data/AI 직군 현직자·지망생 패널토크+발표+네트워킹 — 8월 초 공백기의 유일한 주말 AI 커뮤니티 행사. AI 인력시장 온도 체감용.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-07-24",
    recurring: "매주 금 19:00~ (07-24 / 07-31 / 08-07 / 08-14)",
    dateLabel: "매주 금요일 19:00~",
    venue: "Seoul Brewery, 토정로3안길 10, 마포",
    region: "서울",
    host: "Seoul Tech Social",
    price: "5,000원(온라인 티켓만, 현장판매 없음)",
    priceType: "paid",
    link: "https://www.eventbrite.com/e/seoul-tech-mixer-and-social-tech-ai-data-it-registration-1987413362868",
    linkType: "community",
    point: "AI·데이터·개발자 커뮤니티 애프터워크 네트워킹(매주 금) — 윈도우 전 구간을 커버하는 상시 채널.",
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
  generated: "2026-07-20",
  baseDate: "2026-07-20",
  rangeDays: 30,
  source:
    "2026-07-20 /radar 풀스캔 — WebSearch(약 30건)+WebFetch(약 25건) 병렬 수집: Luma(discover/seoul/ai)·Eventbrite·Meetup·온오프믹스·이벤터스·GDG Korea·AWSKRUG·모두의연구소·패스트캠퍼스·dcamp·마루360·프론트원·Linux Foundation 등. 기준일 이동(7/11→7/20)으로 과거화된 3건 소멸: 랄프톤(7/12, 정원마감 후 watch 강등 상태였음)·HCI 컴패니언 데이 #7(7/14)·전자신문 Claude Code 워크숍(7/15, 33만원 유료 스킬업 — 제외 카테고리, 과거화로 자동 정리). 직전 호 대비 존속 재확인 9건(코파톤 7/30·AX Skillathon 7/23·Stripe Seoul 7/22·딥테크 게더링 7/20·리벨리온x모두의연구소 7/30·마케팅데이터커넥트 7/30·GDG I/O Extended 7/25·직무정보방 8/1·Seoul Tech Mixer 반복)은 링크 재검증 없이 날짜 유효성만 재확인(이전 사이클에서 이미 풀검증 완료). 신규 검증 3건 추가 — Open Source Summit Korea 2026(8/11~12, 공식 등록페이지 events.linuxfoundation.org 확인, venue는 공동개최 OpenSSF Community Day Korea 페이지로 교차확인)·AI Summit Seoul & Expo 2026(8/19~21, aisummitseoul.com 확인, 직전 호엔 윈도우 밖이라 스킵했던 건이 이번 호 첫날 겹침으로 등재·다음 호 재등장 예정)·The AI Collective @Seoul 7월 GEO 모임(7/28, luma.com/rya5wmoq 확인, 정원 40명 마감으로 대기자 등록만 가능). Seoul Tech Mixer 반복일자는 07-24/07-31/08-07/08-14로 롤링 갱신. 지속 공백: AWSKRUG 공식 Meetup 페이지 'no upcoming events' 재확인, 8/1~8/10 구간은 여전히 신규 공지 희박(국내 행사 공지 1~2주 전 패턴상 7월 말 재스캔 권장).",
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
