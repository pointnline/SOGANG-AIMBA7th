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
  {
    id: "ralphthon-icml-0712",
    title: "Ralphthon @ICML 'Auto Research' supported by Codex",
    date: "2026-07-12",
    dateLabel: "2026-07-12(일) 09:30–20:00",
    venue: "NAVER D2SF 강남 — 삼성화재 서초타워 18F",
    region: "서울",
    host: "Team Attention (Codex 후원)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/hjuo7auc",
    linkType: "registration",
    point: "AI 에이전트로 논문 생성·리뷰 경쟁 해커톤(대상 $10k API 크레딧) — 에이전트 오케스트레이션 실전.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "정원마감·대기자 전환 확인(7/11) — 신규 등록 불가, 대기자만",
    jjFlag: "weekend",
    curate: "watch",
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
    id: "hci-companion-day7-0714",
    title: "HCI 컴패니언 데이 #7 — AI가 혁신하는 우리 일상의 미래",
    date: "2026-07-14",
    dateLabel: "2026-07-14(화) 18:30–21:30",
    venue: "MARU360 B1, 강남",
    region: "서울",
    host: "CIT(컴패노이드 인스티튜트 오브 테크놀러지)",
    price: "미표기(승인제)",
    priceType: "unknown",
    link: "https://luma.com/dlczsjx6",
    linkType: "registration",
    point: "AI 일상 서비스 데모데이 — 치매 케어·공간설계 등 4개 프로젝트 시연 + AI 서비스 기획자 키노트. AI 서비스가 '어디에 먹히는지' 감 잡는 자리.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "참가비 미표기 — 승인제 등록",
    jjFlag: "weekday-eve",
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
    date: "2026-07-17",
    recurring: "매주 금 19:00~ (07-17 / 07-24 / 07-31 / 08-07)",
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

  // ───────────── 제외 (홍보성·저밀도) ─────────────
  {
    id: "etnews-claudecode-workshop-0715",
    title: "UX 기획·AI 구현 1-day 워크숍 with Claude Code·Codex",
    date: "2026-07-15",
    dateLabel: "2026-07-15(수) 10:00–17:00",
    venue: "YBM the Biz 강남교육연수센터 4F",
    region: "서울",
    host: "전자신문",
    price: "조기 330,000원 / 정가 352,000원 (VAT별도)",
    priceType: "paid",
    link: "https://conference.etnews.com/conf_info.html?uid=499",
    linkType: "official",
    point: "Claude Code·Codex 실습 커리큘럼이나 고가 유료 스킬업 클래스.",
    tier: 4,
    category: "교육",
    verified: "verified",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "언론사 주최 반복형 유료 스킬업 클래스(33만원+) — 홍보성·저밀도",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-07-11",
  baseDate: "2026-07-11",
  rangeDays: 30,
  source:
    "2026-07-11 /radar --deploy 풀스캔(야간) — WebSearch·Luma(discover/seoul/ai)·Eventbrite·Meetup·온오프믹스·이벤터스·Dev-Event(GitHub)·GDG·기업 공식페이지 병렬 수집. 전 링크 15/15 HTTP 200 풀검증. ICML 위크(7/4~11) 종료로 직전 호 17건 소멸, 접수마감 드롭 2건(AX 인재전쟁 7/10마감·코드게이트 7/8마감 — '갈 수 있는 행사' 원칙), 등록마감 미수록 1건(OpenAI Build Week Seoul 7/13). 랄프톤(7/12)은 정원마감·대기자 전환 확인 후 pick→watch 강등. 신규 핵심: 코파톤(7/30, 크래프톤 보도자료+언론 5개사 교차확인, 접수 7/17까지)·AX Skillathon(7/23, 무료 Codex 자동화 핸즈온)·Stripe Seoul(7/22, 직전 호 미해결 리드 해소). 범위외/부적합 스킵: AI Summit Seoul(8/19~21 윈도우 밖·차기 호 수록 예정)·Build for Impact 해커톤(고교생 전용)·리벨리온 8월 세미나(8/26)·vLLM Korea 밋업(4월 종료)·One-Punch 랄프톤(부산). 미해결 리드: AWSKRUG 7/14 밋업(meetup.com JS 렌더로 상세 URL 미확보)·모자이크넷 에이전트 운영 세미나(로켓펀치, 일시 표기 불안정·24.2만원 유료 — 제외 성격). 8/2~8/10 구간은 직무정보방(8/1)·Tech Mixer(금요 반복) 외 공지 희박 — 국내 행사 공지 1~2주 전 패턴상 7월 말 재스캔 권장.",
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
