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
    id: "openai-codex-meetup-0708",
    title: "OpenAI Codex Meetup — Seoul",
    date: "2026-07-08",
    dateLabel: "2026-07-08(수) 18:30–21:15",
    venue: "역삼로, 강남 (승인 후 상세 공개)",
    region: "서울",
    host: "OpenAI x Dev Korea",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/azfldlz7",
    linkType: "registration",
    point: "OpenAI 공식 Codex 밋업 — 에이전트 코딩 실전 사례, GPT 실시간 통역 제공. 딜 자동화 파이프라인에 직결.",
    tier: 1,
    category: "개발",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "qwen-meetup-agent-ai-0709",
    title: "Qwen Meetup Seoul #3 — Agent AI",
    date: "2026-07-09",
    dateLabel: "2026-07-09(목) 18:30–21:00",
    venue: "팀스파르타 3층, 테헤란로 311, 강남",
    region: "서울",
    host: "Qwen 커뮤니티",
    price: "무료",
    priceType: "free",
    link: "https://onoffmix.com/event/345327",
    linkType: "registration",
    point: "알리바바 Qwen 커뮤니티 에이전트 특집 — 오픈소스 LLM 에이전트 실전 사례. 접수마감 7/8 23:59.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "접수마감 7/8 23:59 — 마감 임박",
    jjFlag: "weekday-eve",
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
    point: "AI 에이전트로 논문 생성·리뷰 경쟁 해커톤(대상 $10k API 크레딧) — 에이전트 오케스트레이션 실전. 등록 오픈 중.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "직전 호 7/5 표기는 허브 캘린더 오독 — 7/12 NAVER D2SF로 확정(신규 링크)",
    jjFlag: "weekend",
    curate: "pick",
  },
  {
    id: "icml-night-instructkr-exa-0704",
    title: "ICML Night — Instruct.KR x Exa AI 서치 기술 밋업",
    date: "2026-07-04",
    dateLabel: "2026-07-04(토) 12:00–20:00",
    venue: "Sionic AI, 도곡동 950-6, 강남",
    region: "서울",
    host: "Instruct.KR, Exa AI",
    price: "무료(식음료 제공)",
    priceType: "free",
    link: "https://luma.com/7nt9s63z",
    linkType: "registration",
    point: "국내 LLM 커뮤니티(Instruct.KR) × Exa 검색 — AI 서치/리트리벌 기술 딥다이브. 딜 리서치 자동화 힌트.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "정원마감 — 대기자 명단 운영 중",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "d4d-hackathon-apac-0704",
    title: "D4D — Deploy for Defense Hackathon APAC (24H)",
    date: "2026-07-04",
    dateEnd: "2026-07-05",
    dateLabel: "2026-07-04(토) 09:00 ~ 07-05(일) 16:00",
    venue: "양재동, 서울 (등록 후 상세 공개)",
    region: "서울",
    host: "D4D (ICML 2026 코로케이션)",
    price: "무료(승인제) · 상금 1,500만원",
    priceType: "approval",
    link: "https://luma.com/2ew4xn7b",
    linkType: "registration",
    point: "디펜스 AI 24시간 해커톤(APAC) — 상금 1,500만원, 실전 빌드·배포 경험. 빌더 네트워크 확장 채널.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "정원 200명 대비 219+ 등록 — 승인 경쟁",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "nus-janestreet-agents-0709",
    title: "NUS x Jane Street Summit — Self-Evolution of AI Agents",
    date: "2026-07-09",
    dateLabel: "2026-07-09(목) 14:30–19:00",
    venue: "선릉역 인근 (코엑스 도보 15분), 강남",
    region: "서울",
    host: "NUS, Jane Street",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/rzkweojj",
    linkType: "registration",
    point: "글로벌 퀀트 트레이딩사(Jane Street)가 보는 '에이전트 자기진화' — 금융×AI 에이전트 프런티어 접점.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "잔여 5석(7/4 기준) — 신청 서두를 것",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "hf-seoul-meetup-0711",
    title: "Hugging Face Seoul Meetup",
    date: "2026-07-11",
    dateLabel: "2026-07-11(토) 12:00–17:30",
    venue: "역삼동 (AWS 장소 후원, 승인 후 공개)",
    region: "서울",
    host: "Hugging Face KREW",
    price: "무료",
    priceType: "approval",
    link: "https://luma.com/xej0o2jr",
    linkType: "registration",
    point: "한국 첫 Hugging Face 공식 밋업 — 국내 오픈소스 AI 프로젝트 5개 세션. 주말 참석 가능.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "정원 초과 — 대기자 명단 운영(191명 등록)",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "ax-hackathon-jocoding-0718",
    title: "AX 인재전쟁 2026 — OpenAI x 조코딩AX파트너스 해커톤 본선",
    date: "2026-07-18",
    dateLabel: "2026-07-18(토) 6시간 오프라인",
    venue: "워크모어 11층, 당산역 인근, 영등포",
    region: "서울",
    host: "조코딩AX파트너스 (OpenAI 협력)",
    price: "무료",
    priceType: "free",
    link: "https://hackathon.jocodingax.ai/",
    linkType: "official",
    point: "OpenAI×조코딩 6시간 해커톤 본선 — 상금 OpenAI 크레딧 최대 $10k. 접수 7/10까지, ICML 이후 공백기 실전 빌드.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "접수 6/23~7/10 — contestkorea 공고 교차확인",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "codegate-ai-hackathon-0721",
    title: "2026 코드게이트 AI 스타트업 해커톤",
    date: "2026-07-21",
    dateEnd: "2026-07-22",
    dateLabel: "2026-07-21(화) 09:00 ~ 07-22(수) 12:00 (무박)",
    venue: "스페이스쉐어 삼성역센터 리젠시홀, 영동대로96길 20 B1F, 강남",
    region: "서울",
    host: "한컴이노스트림",
    price: "무료",
    priceType: "free",
    link: "https://eduhancom.com/codegate",
    linkType: "official",
    point: "한컴 주최 AI 스타트업 무박 해커톤 — 3~5인 팀 단위. 접수마감 7/8, 평일 이틀 소요 주의.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "접수마감 7/8 — 팀 구성 필요",
    jjFlag: "multi",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 공식 ─────────────
  {
    id: "gdg-deepmind-ai4science-0711",
    title: "Google DeepMind Research x GDG AI for Science Meetup",
    date: "2026-07-11",
    dateLabel: "2026-07-11(토) 13:00–17:00",
    venue: "강남파이낸스센터(GFC) 21층 구글코리아, 테헤란로 152",
    region: "서울",
    host: "GDG AI for Science Korea, Google DeepMind",
    price: "무료(등록제)",
    priceType: "free",
    link: "https://gdg.community.dev/events/details/google-gdg-ai-for-science-korea-presents-google-deepmind-research-x-gdg-ai-for-science-meetup-1/",
    linkType: "official",
    point: "Google DeepMind 연구진 초청 AI for Science 밋업 — 구글코리아 개최, 등록 오픈 중. 주말 참석 가능한 빅테크 공식 행사.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    jjFlag: "weekend",
    curate: "pick",
  },
  {
    id: "furiosa-icml-0707",
    title: "Powered by Furiosa @ ICML",
    date: "2026-07-07",
    dateLabel: "2026-07-07(화) 19:00–22:00",
    venue: "FuriosaAI 7층, 도산대로 145, 강남",
    region: "서울",
    host: "FuriosaAI",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/ucsvw7oj",
    linkType: "registration",
    point: "국내 AI 반도체(NPU) 대표주자 FuriosaAI 오피스 행사(315명 등록) — AI 인프라 투자 관점 접점.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "cafe-compute-icml-0707",
    title: "Cafe Compute @ICML (Cerebras x OpenAI)",
    date: "2026-07-07",
    dateLabel: "2026-07-07(화) 19:00–22:00 (카페 팝업은 3일간)",
    venue: "카페 Gabedo·Devil's Door, 코엑스 인근, 강남",
    region: "서울",
    host: "Cerebras",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/cafecomputeicml",
    linkType: "registration",
    point: "Cerebras×OpenAI 카페 팝업+애프터파티 — ICML 패스 불필요. 컴퓨트·인프라 현업자 네트워킹.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "liner-vessl-happyhour-0708",
    title: "ICML Happy Hour — Liner x VESSL AI: Research to Scale",
    date: "2026-07-08",
    dateLabel: "2026-07-08(수) 19:00–22:00",
    venue: "Pubmymy 2층, 삼성동 149-20, 강남",
    region: "서울",
    host: "Liner, VESSL AI",
    price: "무료(승인제, 식음료 제공)",
    priceType: "approval",
    link: "https://luma.com/2js3bisk",
    linkType: "registration",
    point: "국내 AI 검색 유니콘 Liner × VESSL — '리서치→스케일' 검색·리서치 자동화 토크. 딜 리서치 자동화 벤치마크.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 3 · 투자/정책/산업/학술 ─────────────
  {
    id: "icml-2026-0706",
    title: "ICML 2026 — International Conference on Machine Learning",
    date: "2026-07-06",
    dateEnd: "2026-07-11",
    dateLabel: "2026-07-06(월)~07-11(토) (Tutorial 7/6 · Main 7/7~9 · Workshop 7/10~11)",
    venue: "코엑스 컨벤션 센터, 서울",
    region: "서울",
    host: "ICML / IMLS",
    price: "유료(워크숍 등록만 잔여)",
    priceType: "paid",
    link: "https://icml.cc/",
    linkType: "official",
    point: "세계 3대 ML 학회가 서울 COEX 개최 — AI 최전선 연구 동향과 글로벌 네트워크 동시에. 윈도우 내 최대 이벤트.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "튜토리얼·본회의 등록 매진 — 워크숍(7/10~11) 등록만 가능",
    jjFlag: "multi",
    curate: "pick",
  },
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
    point: "Plug and Play 딥테크 피칭데이 — AI·로보틱스 스타트업 10+ 피칭, 투자자 네트워킹. ICML 이후 공백기 핵심 딜소싱 접점.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "'Going fast' — RSVP 서두를 것",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "kgcci-ai-summit-0707",
    title: "AI Summit Seoul 2026 (KGCCI x Infineon)",
    date: "2026-07-07",
    dateLabel: "2026-07-07(화) 18:30–21:00",
    venue: "voco 서울강남 볼룸, 도산대로 144, 강남",
    region: "서울",
    host: "한독상공회의소(KGCCI), Infineon",
    price: "미표기(등록제)",
    priceType: "unknown",
    link: "https://korea.ahk.de/en/events-hub2/event-2025-2026/ai-summit-seoul-2026",
    linkType: "official",
    point: "한독상의×인피니언 AI 서밋 — AI 데이터센터 인프라 테마, 비즈니스 리더 네트워킹. 독일계 기업·인프라 투자 접점.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Infineon측 등록은 마감설 — AHK 페이지 등록 링크로 확인 필요",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "security-day-2026-0708",
    title: "제15회 정보보호의 날 기념식 — '안전한 AI 시대'",
    date: "2026-07-08",
    dateLabel: "2026-07-08(수) 10:00–18:00",
    venue: "신라호텔, 동호로 249, 중구",
    region: "서울",
    host: "과기정통부, KISA",
    price: "무료(사전등록 필수)",
    priceType: "free",
    link: "https://2026securityday.ai.kr/",
    linkType: "official",
    point: "정부 공식 'AI 보안' 정책 행사 — AI 시대 보안 규제·정책 방향 선행 신호. 금융권 AI 도입 리스크 관점.",
    tier: 3,
    category: "정책",
    verified: "verified",
    verifyNote: "KISA 공지 교차확인 완료",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "probml-2026-0705",
    title: "ProbML 2026 — Symposium on Probabilistic Machine Learning",
    date: "2026-07-05",
    dateLabel: "2026-07-05(일) 08:00–18:00",
    venue: "고등과학원(KIAS) 강당, 회기로 85, 동대문",
    region: "서울",
    host: "ProbML (ICML 2026 코로케이션)",
    price: "무료(사전등록·정원제한)",
    priceType: "free",
    link: "https://probml.cc/",
    linkType: "official",
    point: "ICML 직전 확률적 ML 심포지엄(베이지안·불확실성 정량화) — 프런티어 연구 무료 접점.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "정원마감 — 대기자 명단 운영(269+)",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "taic-2026-0706",
    title: "TAIC'26 — Thinking about AI's Capability",
    date: "2026-07-06",
    dateLabel: "2026-07-06(월) 09:00–17:30",
    venue: "스페이스쉐어 삼성역센터 B1, 강남",
    region: "서울",
    host: "GIST AI Days (ICML 코로케이션)",
    price: "미표기",
    priceType: "unknown",
    link: "https://luma.com/ojd6dd4p",
    linkType: "registration",
    point: "'AI 역량을 어떻게 볼 것인가' 워크숍 — AI 능력 평가·한계 담론. 거버넌스·리스크 관점 인사이트.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "정원마감 — 대기자 명단 운영(219+)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "icml-ai-education-0708",
    title: "ICML 2026: AI x Education",
    date: "2026-07-08",
    dateLabel: "2026-07-08(수) 19:00–22:00",
    venue: "서울 (등록 후 상세 공개)",
    region: "서울",
    host: "ICML 커뮤니티 (코로케이션)",
    price: "미표기",
    priceType: "unknown",
    link: "https://luma.com/61aacz14",
    linkType: "registration",
    point: "AI×교육 세션 — AIMBA·교육 관점에서 LLM의 학습 적용 사례 접점.",
    tier: 3,
    category: "교육",
    verified: "verified",
    verifyNote: "정원마감 — 대기자 명단 운영(209명 등록)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "taigr-afterparty-0710",
    title: "TAIGR 2026 Workshop Afterparty",
    date: "2026-07-10",
    dateLabel: "2026-07-10(금) 18:00–22:00",
    venue: "서울 (등록 후 상세 공개)",
    region: "서울",
    host: "Technical AI Governance (TAIGR)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/1wiotk0y",
    linkType: "registration",
    point: "기술적 AI 거버넌스 워크숍 애프터파티 — AI 정책·리스크 글로벌 연구자 네트워킹.",
    tier: 3,
    category: "정책",
    verified: "verified",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "math-mit-icml-drinks-0707",
    title: "Math x MIT — ICML After-Dinner Drinks (E14 Fund & Axiom)",
    date: "2026-07-07",
    dateLabel: "2026-07-07(화) 20:00–22:30",
    venue: "도산대로 81길, 강남 (등록 후 상세 공개)",
    region: "서울",
    host: "MIT E14 Fund, Axiom Math, Hico Ventures",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/rmev9nn6",
    linkType: "registration",
    point: "MIT E14 Fund·Axiom·Hico 애프터디너 — AI 딥테크 VC 네트워킹. 인수금융·PE 확장 관점 글로벌 투자자 접점.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "승인제 — 좌석 제한",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "icml-networking-lunch-0709",
    title: "ICML 2026 Networking Lunch @ML2",
    date: "2026-07-09",
    dateLabel: "2026-07-09(목) 11:00–14:00",
    venue: "서울 (등록 후 상세 공개)",
    region: "서울",
    host: "ML2 커뮤니티",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/jgjhzhly",
    linkType: "registration",
    point: "ICML 네트워킹 런치 — 등록 12명 수준으로 여유. 진입장벽 낮은 소규모 네트워킹 기회.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "등록 여유 — 12명 수준(7/4 기준)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "seoul-tech-mixer-fri",
    title: "Seoul Tech Mixer and Social (Tech / AI / Data / IT)",
    date: "2026-07-10",
    recurring: "매주 금 19:00~ (07-10 / 07-17 / 07-24 / 07-31)",
    dateLabel: "매주 금요일 19:00~",
    venue: "Seoul Brewery, 토정로3안길 10, 마포",
    region: "서울",
    host: "Seoul Tech Social",
    price: "5,000원(온라인 티켓만, 현장판매 없음)",
    priceType: "paid",
    link: "https://www.eventbrite.com/e/seoul-tech-mixer-and-social-tech-ai-data-it-registration-1987413362868",
    linkType: "community",
    point: "AI·데이터·개발자 커뮤니티 애프터워크 네트워킹(매주 금) — 7월 후반 공백기(7/17·24·31) 유일 상시 커버.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "무료→5,000원 온라인 티켓제로 변경 확인",
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
  generated: "2026-07-04",
  baseDate: "2026-07-04",
  rangeDays: 30,
  source:
    "2026-07-04 /radar --deploy 풀스캔 — WebSearch·Luma(Road to ICML 허브 49건)·Eventbrite·Meetup·온오프믹스·코엑스/킨텍스·정부기관 병렬 수집, 3트랙 에이전트 교차검증. 전 링크 25/25 HTTP 200 풀검증. 핵심 정정: Ralphthon은 7/5가 아니라 7/12 NAVER D2SF(luma.com/hjuo7auc, 등록 오픈) — 직전 호의 luma.com/7iiqamt2는 허브 캘린더였음. 등록 완전마감 행사(FriendliAI·VESSL Dinner·FAR.AI·SMW·Upstage 등)는 '갈 수 있는 행사' 원칙으로 제외, 대기자 운영 건은 노트와 함께 유지. 저밀도 중복 해피아워(Cantina·Turing·Goodfire·Japan Night 등 10+건) 미반영. 7/13~8/3 공백기는 AX 해커톤(7/18)·Deeptech Gathering(7/20)·코드게이트(7/21~22)·Seoul Tech Mixer(매주 금)로 커버 — 국내 주최측 공지가 1~2주 전 올라오는 패턴이라 7/10 전후 재스캔 권장. 미확정 리드(Stripe Seoul AI builders·AWSKRUG 7/14)는 URL 미해결로 미수록.",
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
