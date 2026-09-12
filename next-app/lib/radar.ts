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
  // ───────────── TIER 1 · 에이전트/개발 ─────────────
  {
    id: "dstdawbc-0914",
    title: "Agent Economy: The Builders, Backers, and Openers (Stripe Community 서울)",
    date: "2026-09-14",
    dateLabel: "2026-09-14(월) 18:30–20:30",
    venue: "드레이퍼 스타트업 하우스 코리아, 서울 강남 가로수길",
    region: "서울",
    host: "Stripe Community (호스트 Sunghyun(Josh) Kim 외)",
    price: "무료(승인제, 잔여석 소수)",
    priceType: "approval",
    link: "https://luma.com/dstdawbc",
    linkType: "registration",
    point: "에이전트가 직접 결제·구매하는 '에이전트 경제'를 빌더·투자자·플랫폼 세 시각에서 다루는 Stripe 서울 커뮤니티 2회차 밋업. 결제·정산 자동화가 딜 실무에 닿는 지점을 보는 자리.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(강남구 가로수길 72)·호스트 교차확인. 승인제, 잔여 5석(near capacity)",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "sfdsjsxi-0918",
    title: "[AI IMPACT] AI for Good 해커톤 — 여러분의 아이디어가 서울시 정책이 됩니다",
    date: "2026-09-18",
    dateLabel: "2026-09-18(금) 09:30–16:55",
    venue: "서울AI허브, 서울 서초 우면동",
    region: "서울",
    host: "SpaceXAI for Seoul 캘린더 (호스트 Dave · Seungeun \"Rachel\" Lee 외)",
    price: "무료(승인제, 60석)",
    priceType: "approval",
    link: "https://luma.com/sfdsjsxi",
    linkType: "registration",
    point: "오전 10팀 해커톤 + 오후 정책 패널로 AI 아이디어를 서울시 정책으로 연결하는 행사. 주제에 주거·부동산이 포함돼 부동산금융 관점 문제정의를 직접 던져볼 수 있다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(서초구 우면동 141)·호스트 교차확인. 협력 기관(서울시·서울시교육청·서울대 공대·Google·큐네스티·법무법인 린)은 페이지 본문 기준",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "daytonaseoul-0919",
    title: "Daytona HackSprint Seoul 해커톤 (AI Builders × Daytona × Nosana)",
    date: "2026-09-19",
    dateLabel: "2026-09-19(토) 13:00–18:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "AI Builders, Daytona, Nosana",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/daytonaseoul",
    linkType: "registration",
    point: "에이전트 샌드박스 인프라 Daytona를 써서 반나절에 결과물을 내는 주말 해커톤. 딜 자동화 프로토타입을 실전으로 옮겨볼 수 있는 자리.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. 승인제, 잔여 56석. 장소는 페이지에 미표기(승인자 공개)",
    jjFlag: "weekend",
    curate: "pick",
  },
  {
    id: "mw84pfjm-0928",
    title: "Agentic Payments Onchain (t54 Labs · KBW 공식 사이드)",
    date: "2026-09-28",
    dateLabel: "2026-09-28(월) 18:00–23:00",
    venue: "서울 강남 (승인 후 상세 장소 안내)",
    region: "서울",
    host: "t54 Labs, Bloom (Ripple·Tenity 공동, 호스트 Joel Mun · Claire Jung)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/mw84pfjm",
    linkType: "registration",
    point: "Ripple·t54·Tenity·Bloom이 함께하는 KBW 공식 사이드 이벤트로 AI 에이전트의 온체인 결제를 다룬다. 토큰화 자산·RWA 결제 인프라가 에이전트와 만나는 접점.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. 장소는 좌표 비공개, 본문에 '강남 (신청 승인 후 안내)' 표기",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "9tuvvggu-0921",
    title: "Shipaton 2026: Seoul (RevenueCat × Dev Korea)",
    date: "2026-09-21",
    dateLabel: "2026-09-21(월) 16:00–21:15",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "RevenueCat · Dev Korea 캘린더 (호스트 Jaewoong Eum · Florian Ludot · Serin Heo)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/9tuvvggu",
    linkType: "registration",
    point: "앱 수익화 플랫폼 RevenueCat의 글로벌 앱 출시 챌린지 서울 모임 — 16시 모각코, 18:30 본 프로그램(RevenueCat Jaewoong Eum 토크). 자동화 도구를 앱으로 내고 과금하는 흐름 참고용.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. 장소는 페이지에 미표기(등록자 공개). 16:00은 모각코, 본 프로그램 18:30",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "0kun5o5z-0929",
    title: "Open AGI Frontier: AI Meets Robotics with Open AGI Salon",
    date: "2026-09-29",
    dateLabel: "2026-09-29(화) 14:00–18:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "Open AGI Salon (Luma 페이지 기준)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/0kun5o5z",
    linkType: "registration",
    point: "Sentient Foundation·Kaito AI·Axis Robotics가 참여해 에이전트·에이전트 인프라·피지컬AI를 다루는 KBW 주간 오후 세션. Physical AI 섹터 코너와 맞물리는 주제.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·호스트·본문 교차확인. 장소는 페이지에 미표기(승인자 공개)",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 ─────────────
  // (이번 윈도우 2026-09-14~10-14에는 검증 통과한 빅테크·모델사 공식 오프라인 행사 없음)

  // ───────────── TIER 3 · 투자/정책/산업 ─────────────
  {
    id: "bylinenetwork-fintech-0922",
    title: "금융 테크 컨퍼런스 2026 — AI x SECURITY x FINANCE (바이라인네트워크)",
    date: "2026-09-22",
    dateLabel: "2026-09-22(화) 08:30–17:30",
    venue: "FKI타워 컨퍼런스센터 1층 그랜드볼룸, 서울 영등포 여의도",
    region: "서울",
    host: "바이라인네트워크",
    price: "무료(사전신청 ~9/21 23:30)",
    priceType: "free",
    link: "https://event-us.kr/bylinenetwork/event/132790",
    linkType: "registration",
    point: "금융AI·AI보안·에이전틱AI를 하루에 묶은 여의도 금융 테크 컨퍼런스. 증권사 딜 실무에 AI 에이전트를 붙일 때의 보안·운영 쟁점을 금융권 사례로 점검하는 자리.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "event-us 신청 페이지 직접 확인(HTTP 200, 2026-09-12) — 일시·비용(무료)·장소(여의대로 24 FKI타워)·주최·신청기간(8/14~9/21) 교차확인, 모집 중",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "b76kor0e-0930",
    title: "Where AI Meets RealFi at KBW 2026 (Pharos Network · The Capital Summit)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 14:00–19:00",
    venue: "피플더테라스(People the Terrace), 서울 강남 청담",
    region: "서울",
    host: "Pharos Network, THE CAPITAL SUMMIT, TopNod (호스트 Michelle Kang)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/b76kor0e",
    linkType: "registration",
    point: "실물금융(RealFi)·RWA와 AI의 접점을 다루는 KBW 사이드 서밋. 부동산 등 실물자산 토큰화가 금융 구조로 어떻게 들어오는지 현장에서 확인하는 용도.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(강남구 도산대로81길 13)·호스트 교차확인. og:description은 3:00–7:00 PM으로 start_at(14:00)과 1시간 차이 — 현장 시작시각 재확인 필요",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "ai-festa-26-slw-1006",
    title: "AI FESTA 26 · 스마트라이프위크(SLW) 2026 — 국가 공식 '인공지능주간' 대표 행사",
    date: "2026-10-06",
    dateEnd: "2026-10-08",
    dateLabel: "2026-10-06(화)~10-08(목)",
    venue: "코엑스 A·B홀 및 300~308호, 서울 강남",
    region: "서울",
    host: "과학기술정보통신부(인공지능주간 지정) · 서울시·세계스마트시티기구(WeGO)(SLW, 주관 서울AI재단)",
    price: "무료(사전등록 ~10/5, 전시 관람 기준)",
    priceType: "free",
    link: "https://www.aifesta.kr/",
    linkType: "official",
    point: "과기정통부 지정 국가 인공지능주간의 대표 전시·컨퍼런스. SLW 2026 주제는 'AI로 그리는 미래도시의 일상'으로 피지컬AI 비중이 커 스마트시티·부동산 개발 관점의 AI 적용 지도를 한 번에 훑기 좋다.",
    tier: 3,
    category: "전시",
    verified: "verified",
    verifyNote: "공식 페이지 재확인(HTTP 200, 2026-09-12) — og:description '인공지능주간 대표 행사, 10월 6일~8일 코엑스'. 서울시 보도자료(news.seoul.go.kr/gov/archives/580148, HTTP 200)로 일시·장소·주최·사전등록(8/10~10/5, 사전등록자 전시 무료) 교차확인. slw.kr HTTP 200",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "x6pxlxks-0916",
    title: "2026 9월 서울벤처포럼",
    date: "2026-09-16",
    dateLabel: "2026-09-16(수) 17:30–21:20",
    venue: "서울벤처대학원대학교 2층 202호, 서울",
    region: "서울",
    host: "World Leaders Foundation",
    price: "Luma 등록 무료 + 포럼 회원 연회비 별도 안내",
    priceType: "split",
    link: "https://luma.com/x6pxlxks",
    linkType: "registration",
    point: "해외 투자유치 전략·TIPS 제도 변경 설명과 스타트업 3개사 IR 피칭으로 구성된 정기 벤처 포럼. 초기 기업 투자·인수 딜 흐름을 가까이서 보는 용도.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 본문에 회원제 연회비(리더 50만원~대기업 300만원) 안내 — 회원 모집 성격 포함",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "jpmm44n1-0917",
    title: "우주에서의 AI 활용 — Beyond Earth Observation | AI for Science/Engineering 시리즈 (리벨리온×모두의연구소)",
    date: "2026-09-17",
    dateLabel: "2026-09-17(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스(강남대로 324 디오슈페리움 2층), 서울 강남",
    region: "서울",
    host: "리벨리온, 모두의연구소 커뮤니티",
    price: "무료(매진)",
    priceType: "free",
    link: "https://luma.com/jpmm44n1",
    linkType: "registration",
    point: "AI 반도체 리벨리온과 모두연의 과학·공학 AI 시리즈 — 이번 회차는 우주 데이터. 우주 데이터센터 리서치와 맞물리는 주제. 매진이라 대기 등록만 가능.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 페이지 기준 매진",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "42i5ihlj-0921",
    title: "Sino-Korea Innovation Summit — Torch China–Korea AI Industry Forum",
    date: "2026-09-21",
    dateEnd: "2026-09-23",
    dateLabel: "2026-09-21(월) 13:00 ~ 09-23(수) 18:00",
    venue: "앰배서더 서울 풀만 호텔, 서울 중구 동호로",
    region: "서울",
    host: "FINWEX",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/42i5ihlj",
    linkType: "registration",
    point: "한중 AI 산업 포럼 — 9/21 오후 서밋 세션에 이어 정부·기업 방문 일정. 중국 AI·로보틱스 산업 동향을 국내에서 듣는 자리로 동계 글로벌 세미나(중국) 사전 탐색에 유용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at·end_at(UTC→KST 환산)·장소(중구 동호로 287)·호스트 교차확인. 9/22~23은 방문 프로그램",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "humanoids-summit-seoul-0922",
    title: "Humanoids Summit Seoul 2026",
    date: "2026-09-22",
    dateEnd: "2026-09-23",
    dateLabel: "2026-09-22(화)~09-23(수)",
    venue: "코엑스 컨벤션센터, 서울 강남",
    region: "서울",
    host: "ALM Ventures",
    price: "미표기(공식 페이지에 티켓 가격 없음)",
    priceType: "unknown",
    link: "https://humanoidssummit.com/seoul-1",
    linkType: "official",
    point: "휴머노이드·피지컬AI 산업 서밋의 서울판 이틀 일정. Physical AI 섹터워치 종목들의 산업 현장 시그널을 직접 확인하는 자리.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-09-12) — 아젠다 Day 1(9/22)·Day 2(9/23), 장소 COEX Convention Center(영동대로 513), 주최 ALM Ventures 표기. 티켓 가격은 페이지 미표기",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "5mgf0u76-0928",
    title: "AI Meets the Chart — A Horizon Series Event @KBW (GAEA Ventures · K1 Research)",
    date: "2026-09-28",
    dateLabel: "2026-09-28(월) 17:00–21:00",
    venue: "알버커피 강남(Alver Coffee Gangnam), 서울 강남",
    region: "서울",
    host: "GAEA Ventures, K1 Research",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/5mgf0u76",
    linkType: "registration",
    point: "AI 에이전트가 기술적 분석을 하고 매매까지 실행하는 사례를 다루는 KBW 사이드 세션. 투자 리서치·실행 자동화 관점의 AI 활용 사례 청취용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(강남대로102길 34)·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "kbw-2026-0929",
    title: "Korea Blockchain Week 2026 (KBW2026) — 메인 컨퍼런스",
    date: "2026-09-29",
    dateEnd: "2026-10-01",
    dateLabel: "2026-09-29(화)~10-01(목) (메인 컨퍼런스 9/30~10/1)",
    venue: "워커힐 호텔&리조트, 서울 광진",
    region: "서울",
    host: "KBW 조직위(FactBlock 외)",
    price: "유료(공식 티켓, 금액은 페이지 참조)",
    priceType: "paid",
    link: "https://koreablockchainweek.com/",
    linkType: "official",
    point: "아시아 최대 크립토·블록체인 주간의 본행사. RWA·토큰화 세션이 몰리고 강남 일대 사이드 이벤트가 붙는다. 9/29 업비트 기관 서밋은 초청제.",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "공식 페이지 재확인(HTTP 200, 2026-09-12) — 본문에 'September 29 Upbit Institutional Summit (Invite Only) / September 30 - Oct 1 Main Conference at Walkerhill Hotels & Resorts', 티켓 판매 중. 주최사 표기는 페이지 본문 미교차",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "cp87au4f-0929",
    title: "GWDC 2026 KOREA (Global Web3 Developer Conference)",
    date: "2026-09-29",
    dateEnd: "2026-09-30",
    dateLabel: "2026-09-29(화) 10:00 ~ 09-30(수) 19:00",
    venue: "aT센터, 서울 서초 양재",
    region: "서울",
    host: "Web3Labs",
    price: "유료(Pro 티켓 $199 등, 페이지 참조)",
    priceType: "paid",
    link: "https://luma.com/cp87au4f",
    linkType: "registration",
    point: "KBW 주간에 열리는 이틀짜리 웹3 개발자 컨퍼런스. 개발 세션 위주라 투자 목적이면 KBW 본행사가 우선.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(서초구 강남대로 27)·호스트 교차확인. 유료(is_free=false), 티켓 $199 확인",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "solana-summit-korea-0930",
    title: "Solana Summit Korea (Superteam Korea × Four Pillars, 초청제)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 09:30–17:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "Superteam Korea, Four Pillars",
    price: "무료(초청·승인제)",
    priceType: "approval",
    link: "https://luma.com/solana-summit-korea-2026",
    linkType: "registration",
    point: "스테이블코인·규제·자본시장을 다루는 기관 대상 초청제 서밋. 토큰증권·스테이블코인 규제가 증권사 자본시장 업무에 닿는 흐름 점검용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "개별 이벤트 페이지로 링크 교체(직전 호 캘린더 링크 luma.com/superteamkr) — HTTP 200, 2026-09-12. og:title·start_at(UTC→KST 환산)·호스트·승인제 교차확인. 장소는 페이지에 미표기",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "HSC_Seoul-1001",
    title: "HSC Conference Seoul (Metaverse Post)",
    date: "2026-10-01",
    dateLabel: "2026-10-01(목) 10:00–18:00",
    venue: "노보텔 앰배서더 서울 강남, 서울 강남",
    region: "서울",
    host: "Metaverse Post",
    price: "무료 등록 + 유료 티켓($150) 혼재, 페이지 참조",
    priceType: "split",
    link: "https://luma.com/HSC_Seoul",
    linkType: "registration",
    point: "KBW 마지막 날 강남에서 열리는 크립토·AI 컨퍼런스. 아젠다에 'Investments Today' 패널이 있고 무료 등록 트랙으로 세션만 골라 들을 수 있다.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(봉은사로 130)·호스트 교차확인. 시간이 직전 호 11:00–17:00에서 10:00–18:00으로 변경됨. 무료·$150 티켓 혼재",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "06487qj1-0919",
    title: "엔터테크 스터디 클럽 #26",
    date: "2026-09-19",
    dateLabel: "2026-09-19(토) 15:00–17:30",
    venue: "헤이그라운드 서울숲점, 서울 성동",
    region: "서울",
    host: "Entertech Study Club",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/06487qj1",
    linkType: "community",
    point: "엔터테인먼트×테크 스터디 26회차 — 주제 '생성 그 이후, AI 영상은 어떻게 산업이 되는가'. 콘텐츠·미디어 산업 원우의 토요일 스터디 선택지.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(성동구 왕십리로 115)·호스트 교차확인",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "hzcfbjon-0922",
    title: "NdotLight Physical AI Party @Humanoids Summit Seoul",
    date: "2026-09-22",
    dateLabel: "2026-09-22(화) 18:00–21:00",
    venue: "JBK 컨벤션홀, 서울 강남 봉은사로",
    region: "서울",
    host: "NdotLight",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/hzcfbjon",
    linkType: "registration",
    point: "Humanoids Summit 첫날 저녁 피지컬AI 네트워킹 — NVIDIA·삼성전자·리얼월드·홀리데이 로보틱스 패널 포함. 섹터워치 기업 관계자와 직접 대화할 수 있는 동선.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(강남구 봉은사로 619)·호스트 교차확인. end_at은 21:00이나 본문은 네트워킹 22:00까지로 표기",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "zecq09tp-0929",
    title: "DIGITAL AF! • United Art & Tech (KBW 주간 전시·사이드 이벤트)",
    date: "2026-09-29",
    dateEnd: "2026-10-03",
    dateLabel: "2026-09-29(화) 16:00 ~ 10-03(토) 02:00",
    venue: "ARC Gangnam(서초구 양재동), 서울",
    region: "서울",
    host: "Comooooab, AI Builders, BuilderBase, RayRay",
    price: "유료(티켓 €25~$149)",
    priceType: "paid",
    link: "https://luma.com/zecq09tp",
    linkType: "registration",
    point: "KBW 주간 내내 열리는 아트·테크 전시와 사이드 이벤트 공간. 저녁 네트워킹 동선으로 활용.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title이 'DIGITAL AF! • United Art & Tech'로 변경됨. start_at(UTC→KST 환산)·장소(서초구 양재동 14-15, 본문 'ARC Gangnam')·호스트 교차확인. 현재 is_free=false, 티켓 €25~$149",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "58lloj1f-1010",
    title: "zerobase tech week II.",
    date: "2026-10-10",
    dateLabel: "2026-10-10(토) 13:00–22:00",
    venue: "SJ 쿤스트할레, 서울 강남 언주로",
    region: "서울",
    host: "zerobase (호스트 Sam Kim)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/58lloj1f",
    linkType: "registration",
    point: "스타트업 스쿨 zerobase가 여는 토요일 스타트업 테크 컨퍼런스. 10월 둘째 주 유일한 주말 AI·스타트업 모임이라 네트워킹용으로 확보.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소(강남구 언주로148길 5)·호스트 교차확인. 게스트 라인업은 '추후 공개'로 미확정",
    jjFlag: "weekend",
    curate: "watch",
  },

  // ───────────── 제외 (캘린더 비노출) ─────────────
  {
    id: "kv83j9q4-0916",
    title: "9월 특별강연: 민주적 AI는 실현 가능할까?",
    date: "2026-09-16",
    dateLabel: "2026-09-16(수) 19:30–21:00",
    venue: "금산빌딩(강남구 삼성동), 서울",
    region: "서울",
    host: "기본소득당 AI 연구모임 (Luma 호스트 Chihye Noh 외)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/kv83j9q4",
    linkType: "registration",
    point: "AI 거버넌스·민주주의를 주제로 한 특별강연.",
    tier: 3,
    category: "정책",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-12) — og:title·start_at(UTC→KST 환산)·장소·본문 교차확인. 본문에 '기본소득당 AI 연구모임 특별강연' 명시",
    jjFlag: "weekday-eve",
    curate: "exclude",
    excludeReason: "정당(기본소득당) AI 연구모임 주최 강연으로 실무 AI·금융 인사이트 밀도가 낮다고 판단. 캘린더 비노출(관심 있으면 링크로 직접 확인)",
  },
  {
    id: "cwaixvls-0924",
    title: "Habsida Hackathon 2026 [ENG]",
    date: "2026-09-24",
    dateEnd: "2026-09-25",
    dateLabel: "2026-09-24(목) 11:00 ~ 09-25(금) 15:00",
    venue: "인천 연수구 비류대로 429",
    region: "수도권",
    host: "Habsida Coding School",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/cwaixvls",
    linkType: "registration",
    point: "코딩스쿨이 주최하는 영어 진행 창업 비즈니스 해커톤.",
    tier: 4,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-12) — og:title·start_at·end_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "multi",
    curate: "exclude",
    excludeReason: "코딩스쿨 주최 해커톤으로 교육기관 홍보 성격이 강하고 AI 직접 관련성이 불명확. 평일 이틀·인천 개최로 참석 비용도 큼. 캘린더 비노출",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-09-12",
  baseDate: "2026-09-14",
  rangeDays: 30,
  source:
    "2026-09-12 /radar --no-build 재생성 (윈도우 2026-09-14~10-14, range 30) — 직전 09-05 호 22건 중 윈도우 경과 8건 삭제(Builders & Brews 9/11·AAIF 9/9·AWS Redshift 9/7·AI World 9/9·Try Everything 9/9~10·국방+제조+보안 9/7·Box2Box 9/8·OOO Welcome 9/13), 13건 유지·재검증, Superteam 캘린더 링크 1건을 개별 이벤트 페이지(Solana Summit Korea)로 교체, 신규 10건 추가. 수집: Luma discover(seoul/ai·tech·crypto)·캘린더, event-us, 공식 페이지, 서울시 보도자료, WebSearch. 링크 검증: 전 24건 curl HTTP 200(실패 0) — Luma는 og:title·start_at(UTC→KST)·geo_address_info·호스트·ticket_info를 페이지 원문에서 추출, 공식 페이지(AI FESTA·KBW·Humanoids Summit)와 event-us는 본문으로 일시·장소 교차확인. verified 23 / link-ok 1(KBW=주최사 미교차). 변경 반영: HSC 10:00–18:00으로 시간 변경, DIGITAL AF 타이틀·유료 전환, KBW 워커힐 본문 확인. 큐레이션: pick 7(Agent Economy 9/14, AI for Good 해커톤 9/18, Daytona 9/19, 금융 테크 컨퍼런스 9/22, Agentic Payments 9/28, AI Meets RealFi 9/30, AI FESTA 26 10/6~8) / watch 15 / exclude 2(민주적 AI 특강, Habsida 해커톤). 제외(미수록): 윈도우 밖 젠스파크 해커톤 10/18·Cursor Hackathon 10/24, 2025년 Claude Code Meetup, AI 무관 IR·교육(SVC 투자유치 실무교육 등). 장소 미표기(승인자 공개) 5건. 10/2~10/14 구간은 AI FESTA·zerobase 10/10 외 검증 통과 건 없음 — 다음 사이클 재스캔 필요.",
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
