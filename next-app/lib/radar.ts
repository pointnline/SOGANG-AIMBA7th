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
    dateLabel: "2026-08-13(목)~08-14(금)",
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
    verifyNote: "공식 등록페이지(events.linuxfoundation.org) HTTP 200 재확인. Standard 가격 마감 8/3, 8/4부터 Late(₩650,000)로 인상 — 등록하려면 이번 주가 사실상 마지막. venue만 여전히 미공개(Seoul, Korea 표기)",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "agent-forge-hackathon-seoul-0822",
    title: "Agent Forge AI Hackathon Seoul 해커톤 — 하루 만에 프로덕션급 에이전트 만들기",
    date: "2026-08-22",
    dateLabel: "2026-08-22(토) 13:00–18:00",
    venue: "강남대로 일대 (승인 후 상세 주소 공개), 강남",
    region: "서울",
    host: "AI Builders (Bright Data, Daytona, Nosana, Qwen Cloud 공동)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/agentforgeseoul",
    linkType: "registration",
    point: "챗봇 수준을 넘어 '실시간 데이터 수집→워크플로 자동화→배포'까지 하루에 끝내는 해커톤 — 조전무님이 참석 가능한 몇 안 되는 주말 T1 행사. 상위 10팀 3분 발표라 관전만 해도 국내 에이전트 빌더들의 현재 수준이 한눈에 들어온다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-22T04:00Z(=KST 13:00), 종료 09:00Z. 39명 등록, 승인제·무료. 아젠다(13:00 체크인→13:30 스폰서 워크숍→14:00 팀빌딩→15:30 제출마감→15:45 상위 10팀 발표) 확인. 상금은 현금이 아닌 스폰서 크레딧. 정확한 주소는 승인 후 공개",
    jjFlag: "weekend",
    curate: "pick",
  },
  // ───────────── TIER 2 · 빅테크/모델사 ─────────────
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
    verifyNote: "공식 등록페이지 HTTP 200 재확인. ⚠️ Standard 등록 7/28 마감 — 현재는 Late 가격($450/₩660,000) 구간. Academic(₩110,000)은 AIMBA 재학 신분으로 확인해볼 여지 있음",
    jjFlag: "multi",
    curate: "pick",
  },
  // ───────────── TIER 3 · 투자/정책/산업 ─────────────
  {
    id: "ai-summit-seoul-expo-0819",
    title: "AI Summit Seoul & Expo 2026 (AIS 2026)",
    date: "2026-08-19",
    dateEnd: "2026-08-21",
    dateLabel: "2026-08-19(수)~08-21(금) 컨퍼런스 08-19~20 · 엑스포 08-19~21, 10:00–17:00",
    venue: "코엑스 그랜드볼룸 & B홀 전시장, 영동대로 513, 강남",
    region: "서울",
    host: "DMK Global, COEX, 한국무역협회(KITA)",
    price: "엑스포 사전등록 무료(~7/31 23:59) · 이후 ₩10,000 · 8/18~ ₩20,000 · 컨퍼런스 별도 유료",
    priceType: "split",
    link: "https://www.aisummitseoul.com/",
    linkType: "official",
    point: "국내 최대급 AI 산업 컨퍼런스+엑스포 9회째 — 6개 테마(Agentic AI·Physical AI·AI Transformation 등), 100+ 전시사, 80여 세션. NASA JPL 스티브 치엔·MS Research 호이펑 푼 연사진. 🔥 엑스포 무료 사전등록이 내일(7/31) 자정 마감 — 오늘 걸어둘 것.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 사이트(HTTP 200)+온오프믹스 사전등록 페이지(onoffmix.com/event/343072, HTTP 200) 교차확인. 무료 사전등록 마감 2026-07-31 23:59 → 이후 ₩10,000, 8/18부터 ₩20,000. 엑스포 운영시간 10:00–17:00로 갱신(직전 호 09:00–18:00 표기 수정)",
    jjFlag: "multi",
    curate: "pick",
  },
  // ───────────── TIER 1 · 에이전트/개발자동화 ─────────────
  {
    id: "vibe-coders-base44-0824",
    title: "Vibe Coders Jam Session: feat. Base44 바이브 코딩",
    date: "2026-08-24",
    dateLabel: "2026-08-24(월) 19:00–22:00",
    venue: "강남대로 일대 (승인 후 상세 주소 공개), 강남",
    region: "서울",
    host: "AI Builders, 모두의연구소 (박광석)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/base44seoul",
    linkType: "registration",
    point: "코드를 직접 안 쓰고 AI로 앱을 만드는 '바이브 코딩' 실습 잼 — 조전무님이 쓰시는 커맨드·대시보드류를 더 빨리 찍어내는 방법론. 데모 발표 신청(Speaker) 트랙도 열려 있다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-24T10:00Z(=KST 19:00), 종료 13:00Z. 36명 등록. 무료·승인제, 티켓 2종(Standard / Speaker 신청). 정확한 주소는 승인 후 공개",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "voice-ai-hackathon-seoul-0824",
    title: "Voice AI Hackathon Seoul 2026 — 실시간 듣고 말하고 판단하는 에이전트",
    date: "2026-08-24",
    dateLabel: "2026-08-24(월) 09:00–20:30",
    venue: "센터필드 12층, 역삼동 676, 강남",
    region: "서울",
    host: "Agora (Hennessy Solis, ZhengDerek)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/1jihwnz7",
    linkType: "registration",
    point: "실시간 음성 에이전트를 하루에 만드는 해커톤 — 참가는 어렵더라도 음성 AI가 어디까지 왔는지 확인용. 평일 종일이라 조전무님 일정과는 충돌.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-24T00:00Z, 종료 11:30Z, 장소 센터필드 12층 확인. 31명 등록·무료. ⚠️ 페이지 타임존이 Asia/Manila로 설정돼 있어 표기시각(KST 09:00~20:30)은 주최측 확인 필요",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  // ───────────── TIER 2 · 빅테크/모델사 ─────────────
  {
    id: "qwen-meetup-seoul-0819",
    title: "Qwen Meetup Seoul #4 — 오픈모델로 바이브코딩 비용 줄이기",
    date: "2026-08-19",
    dateLabel: "2026-08-19(수) 18:30–21:15",
    venue: "디캠프(dcamp) 선릉 6층 이벤트홀, 선릉로 551, 강남",
    region: "서울",
    host: "Dev Korea, Alibaba Cloud (Florian Ludot, Serin Heo)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/ssox1jth",
    linkType: "registration",
    point: "알리바바 Qwen·Kimi·GLM·DeepSeek 등 오픈모델 최신 동향 — 'Qwen3.7-Plus로 바이브코딩 비용 최적화'(Alibaba Cloud Korea) + '프로덕션 에이전트 뒤의 숨은 인프라'(TiDB) 2개 세션. AI 구독비를 줄이는 대안 스택 점검용.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-19T09:30Z(=KST 18:30), 종료 12:15Z, 장소 디캠프 선릉 6층 확인(주차 불가). 58명 등록·승인제. 한/영 병행. AI Summit Seoul 첫날과 날짜 겹침",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "elevencreative-seoul-0820",
    title: "ElevenCreative Meetup Seoul #1 — TTS v4, Dubbing v2, Music & Flow",
    date: "2026-08-20",
    dateLabel: "2026-08-20(목) 17:00–20:00",
    venue: "역삼동 일대 (승인 후 상세 주소 공개), 강남",
    region: "서울",
    host: "ElevenLabs (Jack Teramura)",
    price: "미상",
    priceType: "unknown",
    link: "https://luma.com/eleven-hn3l",
    linkType: "registration",
    point: "ElevenLabs 한국 첫 크리에이터 밋업 — 음성합성·더빙·음악 신기능 공개. Point & Line 콘텐츠(브랜드 채널) 제작 자동화 관점에서 볼 만하다.",
    tier: 2,
    category: "빅테크",
    verified: "link-ok",
    verifyNote: "Luma 페이지 HTTP 200 + 일시(2026-08-20T08:00Z=KST 17:00, 종료 11:00Z) 확인. ⚠️ 다만 등록자 0명·참가비 미표기·상세주소 미공개로 개최 확정도가 낮음 — 등록 전 재확인 필요",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  // ───────────── TIER 3 · 투자/정책/산업 ─────────────
  {
    id: "venture-park-builders-lab-0813",
    title: "[Venture Park - Builders Lab] AI Start-up Design & Build Workshop",
    date: "2026-08-13",
    dateLabel: "2026-08-13(목) 17:00–20:00 (오프라인+온라인 병행)",
    venue: "양화로 일대, 마포 (승인 후 상세 주소 공개)",
    region: "서울",
    host: "SVC SeoulGlobal, Designpreneurs & Co. (Sally Chung)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/2lqebgn4",
    linkType: "registration",
    point: "AI 시대 제품설계·PMF·프로토타이핑·해외 메시징을 3시간에 훑는 실습 워크숍 — 우수 3개사는 미국 시장 진출 30분 1:1 클리닉 제공. 온라인 병행이라 평일 저녁 부담이 적다.",
    tier: 3,
    category: "교육",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-13T08:00Z(=KST 17:00), 종료 11:00Z. 27명 등록·무료. 영어 진행(한국어 보조), 노트북+ChatGPT/Claude/Lovable 계정 지참 필요. MCP Dev Summit 첫날과 겹침",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "rebellions-modulabs-earth-0827",
    title: "[리벨리온x모두의연구소] 데이터로 읽는 지구: 기상·지구과학 분야의 AI 활용 (8월 세미나)",
    date: "2026-08-27",
    dateLabel: "2026-08-27(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스(디오슈페리움 2층), 강남대로 324, 강남",
    region: "서울",
    host: "리벨리온, 모두의연구소",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/pq7b7qsh",
    linkType: "registration",
    point: "국내 AI 반도체(NPU)사 리벨리온 후원 무료 세미나 8월편 — 기상·지구과학 AI. 기후 리스크가 부동산·인프라 자산 평가에 들어오는 흐름을 데이터 관점에서 볼 수 있다.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-27T10:00Z(=KST 19:00), 종료 11:30Z, 장소 모두의연구소 강남캠퍼스 확인. 무료, 51명 등록(잔여 있음)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "ai-world-2026-lotte-0909",
    title: "AI World 2026 — AI Shift: The New Economy (파이낸셜뉴스·과기정통부 공동주최)",
    date: "2026-09-09",
    dateLabel: "2026-09-09(수) 09:00–16:00",
    venue: "롯데월드타워 롯데시네마 5층, 서울 송파",
    region: "서울",
    host: "파이낸셜뉴스, 과학기술정보통신부 (주관 NIPA)",
    price: "미표기(공식 페이지에 참가비 안내 없음)",
    priceType: "unknown",
    link: "https://event.fnnews.com/event/397",
    linkType: "official",
    point: "과기정통부가 공동주최하는 6회째 연례 AI 포럼 — 'AI Shift: 새로운 경제'를 주제로 정책 방향과 산업 재편을 한자리에서 듣는 자리. 개별 툴 밋업과 달리 규제·정책 시그널을 잡기에 적합.",
    tier: 3,
    category: "정책",
    verified: "verified",
    verifyNote: "공식 행사 페이지 직접 확인 — 날짜 표기 '2026.09.09 (수)' 09:00~16:00, 장소 서울 롯데월드타워 롯데시네마 5층, 주최 파이낸셜뉴스·과기정통부, 주관 NIPA. 참가비·등록링크는 페이지에 미표기(문의 02-6965-0016). ⚠️ 검색 스니펫은 '9월 9일(목)'로 표기했으나 원문은 '(수)' — 원문 기준으로 정정",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  // ───────────── TIER 4 · 네트워킹/기타 ─────────────
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-08-14",
    recurring: "매주 금 19:00 (윈도우 내 08-14·08-21·08-28·09-04)",
    dateLabel: "2026-08-14(금) 19:00~",
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
    verifyNote: "Eventbrite 페이지 직접 확인(HTTP 200) — 매주 금 19:00, Seoul Brewery, ₩5,000 온라인 전용. ⚠️ 직전 호의 반복일자(08-01/08/15/22)는 실제로 토요일이라 오류였음 — 올바른 금요일(07-31/08-07/08-14/08-21/08-28)로 정정",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "genspark-korea-meetup-0823",
    title: "한국젠스파크AI연구회 8월 정기 Meet UP",
    date: "2026-08-23",
    dateLabel: "2026-08-23(일) 16:00–18:00",
    venue: "앙트레블(Cafe en Travel), 강남대로102길 45, 강남",
    region: "서울",
    host: "챗GPT강사, Genspark.ai",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/dbqo06sd",
    linkType: "registration",
    point: "Genspark AI Workspace 6.0 신기능 소개 및 강의기법 실습 모임.",
    tier: 4,
    category: "교육",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인 — 시작 2026-08-23T07:00Z(=KST 16:00), 장소 앙트레블 확인. 무료, 37명 등록",
    jjFlag: "weekend",
    curate: "exclude",
    excludeReason: "특정 제품(Genspark Workspace 6.0) 소개 + 앰배서더 주도 강사 대상 실습 — 홍보성·저밀도로 판단. 실무 인사이트보다 툴 마케팅 성격이 강해 캘린더 비노출",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-08-10",
  baseDate: "2026-08-10",
  rangeDays: 30,
  source:
    "2026-08-10 /aimba Phase 4C 레이더 재생성 (윈도우 2026-08-10~09-09, range 30) — 직전 07-30 스캔분 21건을 새 윈도우로 재계산: 종료·경과 9건 삭제(Q402 에이전트 결제 8/3, Voice Agent Builders 8/6, 코파톤 7/30, Runway AIF 8/7, Box2Box×AB180 8/4, DCMI 2026 8/3~7, 리벨리온x모두연 바이오 7/30, 마케팅 데이터커넥트 7/30, 직무정보방 밋업 8/1), 생존 12건 유지, 신규 1건 추가. 링크 검증: 생존 12건 + 신규 1건 = 전 13건 HTTP 200(실패 0, 교체 0). 신규 — AI World 2026(9/9 수, 롯데월드타워, 파이낸셜뉴스·과기정통부 공동주최, NIPA 주관). ⚠️ 검증으로 잡은 오류 2건: ①AI World 날짜를 검색 스니펫이 '9월 9일(목)'으로 표기했으나 공식 페이지 원문은 '(수)' — 원문 기준 정정 ②Seoul Tech Mixer는 반복 행사라 기준일을 윈도우 내 첫 금요일(08-14)로 재설정. 후보 검증 후 탈락 — ClawCon Seoul·OpenClaw+Web3 Korea(2026-04-02 종료)·OpenAI Codex Meetup Seoul(2026-07-08 종료)·Open AGI Builders Day(2026-07-09 종료)·서울 AI 행정혁신포럼(2026-07-14 종료): 검색에는 노출되나 Luma/온오프믹스 원문 start_at 확인 결과 전부 과거 행사. 윈도우 밖이라 제외: AI Meet The Chart(9/28)·Korea Blockchain Week(9/29). 8/28~9/9 구간은 AI World 외 신규 검증 통과 건이 없어 밀도가 낮음 — 다음 사이클에서 재스캔 필요.",
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
