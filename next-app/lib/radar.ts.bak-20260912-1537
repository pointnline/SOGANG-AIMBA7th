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
  {
    id: "dstdawbc-0914",
    title: "Agent Economy: The Builders, Backers, and Openers (Stripe Community 서울)",
    date: "2026-09-14",
    dateLabel: "2026-09-14(월) 18:30–20:30",
    venue: "드레이퍼 스타트업 하우스 코리아, 서울 강남 가로수길",
    region: "서울",
    host: "Stripe Community (호스트 Sunghyun(Josh) Kim 외)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/dstdawbc",
    linkType: "registration",
    point: "에이전트가 직접 결제·구매하는 '에이전트 경제'를 빌더·투자자·플랫폼 세 시각에서 다루는 저녁 밋업. Vol.21 AI 코너(GPT-6 Astra 컴퓨터 사용)와 바로 이어지는 주제.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "mw84pfjm-0928",
    title: "Agentic Payments Onchain (t54 Labs · KBW 사이드)",
    date: "2026-09-28",
    dateLabel: "2026-09-28(월) 18:00–23:00",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "t54 Labs (호스트 Joel Mun · Claire Jung)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/mw84pfjm",
    linkType: "registration",
    point: "AI 에이전트의 온체인 결제를 주제로 한 KBW 주간 사이드 이벤트. RWA 코너(토큰화 자산 89% 유휴)와 에이전트 결제가 만나는 접점.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 장소는 페이지에 미표기(등록자 공개)",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "daytonaseoul-0919",
    title: "Daytona HackSprint Seoul 해커톤 (AI Builders × Daytona × Nosana)",
    date: "2026-09-19",
    dateLabel: "2026-09-19(토) 13:00–18:00",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "AI Builders, Daytona, Nosana",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/daytonaseoul",
    linkType: "registration",
    point: "에이전트 샌드박스 인프라 Daytona를 써서 반나절에 결과물을 내는 주말 해커톤. 바이브코딩 코너 노하우를 실전으로 옮길 수 있는 자리.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 장소는 페이지에 미표기(등록자 공개)",
    jjFlag: "weekend",
    curate: "pick",
  },
  {
    id: "xzoaosda-0911",
    title: "Builders & Brews: Seoul Hack Edition (Tavily · Nebius)",
    date: "2026-09-11",
    dateLabel: "2026-09-11(금) 17:00–22:00",
    venue: "WOOMUL, 서울 마포",
    region: "서울",
    host: "Tavily Events, Nebius Developer Community, Bloom",
    price: "무료(매진)",
    priceType: "free",
    link: "https://luma.com/xzoaosda",
    linkType: "registration",
    point: "검색 API Tavily와 GPU 클라우드 Nebius가 여는 금요일 저녁 미니 해킹. 매진 상태라 대기 등록만 가능.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 페이지 기준 매진(sold out)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "sa692amj-0909",
    title: "AAIF Seoul Chapter Event (Agentic AI Foundation 서울 챕터)",
    date: "2026-09-09",
    dateLabel: "2026-09-09(수) 18:30–21:30",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "AAIF Community Seoul (호스트 Seoyul Yoon · Junghwan Park · Hoon Jo)",
    price: "무료(매진)",
    priceType: "free",
    link: "https://luma.com/sa692amj",
    linkType: "community",
    point: "에이전트 AI 커뮤니티 서울 챕터 정기 모임. 매진이라 대기 등록만 가능 — 다음 회차를 잡으려면 캘린더 구독 권장.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 페이지 기준 매진, 장소 미표기",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "cw044bi8-0907",
    title: "AWS: AI 시대의 Data Platform — Rediscover Redshift (운영은 AI에게, 성능·비용은 최강으로)",
    date: "2026-09-07",
    dateLabel: "2026-09-07(월) 13:30–17:00",
    venue: "센터필드(Centerfield), 서울 강남 역삼",
    region: "서울",
    host: "AWS Korea (호스트 김규병·김기엽·김윤건)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/cw044bi8",
    linkType: "registration",
    point: "Redshift 운영 자동화를 AI 에이전트에 맡기는 AWS 세션. 데이터 플랫폼 담당 원우라면 비용 절감 사례 청취용.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 승인제 등록",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "b76kor0e-0930",
    title: "Where AI Meets RealFi at KBW 2026 (Pharos Network · The Capital Summit)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 14:00–19:00",
    venue: "피플더테라스(People the Terrace), 서울 강남 청담",
    region: "서울",
    host: "Pharos Network, THE CAPITAL SUMMIT (호스트 Michelle Kang)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/b76kor0e",
    linkType: "registration",
    point: "실물금융(RealFi)·RWA와 AI의 접점을 다루는 KBW 사이드 서밋. Vol.21 RWA 코너(토큰화 자산 89% 유휴)의 현장 검증용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "ai-festa-26-slw-1006",
    title: "AI FESTA 26 · 스마트라이프위크(SLW) 2026 — 국가 공식 '인공지능주간' 대표 행사",
    date: "2026-10-06",
    dateEnd: "2026-10-08",
    dateLabel: "2026-10-06(화)~10-08(목)",
    venue: "코엑스, 서울 강남",
    region: "서울",
    host: "과학기술정보통신부(AI Week 지정 행사) · 서울시(SLW)",
    price: "미표기(공식 페이지 참조)",
    priceType: "unknown",
    link: "https://www.aifesta.kr/",
    linkType: "official",
    point: "과기정통부가 지정한 국가 인공지능주간의 대표 전시·컨퍼런스. 국내 AI 정책·산업 지도를 한 번에 훑기에 가장 밀도 높은 3일.",
    tier: 3,
    category: "전시",
    verified: "verified",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-09-05) — og:description에 '과학기술정보통신부 지정 인공지능주간 대표 행사, 2026년 10월 6일~8일 서울 코엑스' 명시. SLW(slw.kr)도 HTTP 200. 참가비는 페이지 미표기",
    jjFlag: "multi",
    curate: "pick",
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
    verifyNote: "공식 행사 페이지 재확인(HTTP 200, 2026-09-05) — '2026.09.09 (수)' 09:00~16:00, 롯데월드타워 롯데시네마 5층, 주최 파이낸셜뉴스·과기정통부, 주관 NIPA. 참가비·등록링크는 페이지 미표기",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "try-everything-2026-0909",
    title: "Try Everything 2026 — 서울 글로벌 스타트업 페스티벌",
    date: "2026-09-09",
    dateEnd: "2026-09-10",
    dateLabel: "2026-09-09(수)~09-10(목)",
    venue: "DDP 동대문디자인플라자, 서울 중구",
    region: "서울",
    host: "서울특별시 외 (공식 페이지 기준)",
    price: "무료(사전등록 ~9/8)",
    priceType: "free",
    link: "https://www.tryeverything.or.kr/",
    linkType: "official",
    point: "서울시가 여는 스타트업 페스티벌 — IR·전시·글로벌 VC 세션. 창업 코너(튜링·인세라솔루션 라운드)의 후속 딜 흐름을 현장에서 확인하는 용도.",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "공식 페이지(HTTP 200, 2026-09-05) + 서울시 보도자료 페이지(news.seoul.go.kr, HTTP 200)로 날짜·장소 확인. 세부 프로그램별 시간·공동주최 목록은 미교차",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "kbw-2026-0929",
    title: "Korea Blockchain Week 2026 (KBW2026) — 메인 컨퍼런스",
    date: "2026-09-29",
    dateEnd: "2026-10-01",
    dateLabel: "2026-09-29(화)~10-01(목)",
    venue: "워커힐 호텔&리조트, 서울 광진",
    region: "서울",
    host: "KBW 조직위(FactBlock 외)",
    price: "유료(공식 티켓, 금액은 페이지 참조)",
    priceType: "paid",
    link: "https://koreablockchainweek.com/",
    linkType: "official",
    point: "아시아 최대 크립토·블록체인 주간의 본행사. RWA·토큰화 세션이 몰리고 사이드 이벤트(아래 3건)가 주변에 붙는다. 9/29 업비트 기관 서밋은 초청제.",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-09-05) — 타이틀에 'Sep. 29 - Oct 1, Seoul', 티켓 판매 중 표기. 장소 워커힐은 직전 호 검증분 재사용, 주최사 표기는 페이지 본문 미교차",
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
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 유료(is_free=false), 티켓 단가 19,900센트($199) 확인",
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
    price: "무료",
    priceType: "free",
    link: "https://luma.com/5mgf0u76",
    linkType: "registration",
    point: "AI와 온체인 데이터·차트 분석을 잇는 KBW 사이드 세션. 투자 리서치 관점의 AI 활용 사례 청취용.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "HSC_Seoul-1001",
    title: "HSC Conference Seoul (Metaverse Post)",
    date: "2026-10-01",
    dateLabel: "2026-10-01(목) 11:00–17:00",
    venue: "노보텔 앰배서더 서울 강남, 서울 강남",
    region: "서울",
    host: "Metaverse Post",
    price: "무료 등록 + 유료 티켓($150) 혼재, 페이지 참조",
    priceType: "split",
    link: "https://luma.com/HSC_Seoul",
    linkType: "registration",
    point: "KBW 마지막 날 강남에서 열리는 크립토·AI 컨퍼런스. 무료 등록 트랙이 있어 부담 없이 세션만 골라 들을 수 있다.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 무료 티켓과 15,000센트($150) 티켓 혼재 확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "superteamkr-0930",
    title: "Solana Summit Korea (Superteam Korea 캘린더, 초청제)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 10:00–17:00",
    venue: "서울 (캘린더 목록 기준, 상세 장소 미표기)",
    region: "서울",
    host: "Superteam Korea, Four Pillars",
    price: "초청제(invite-only)",
    priceType: "approval",
    link: "https://luma.com/superteamkr",
    linkType: "community",
    point: "솔라나 생태계 한국 서밋. 초청제라 일반 등록은 어렵지만 캘린더를 구독하면 주변 오픈 이벤트를 잡을 수 있다.",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "링크는 Luma 캘린더 페이지(HTTP 200, 2026-09-05)이며 개별 이벤트 페이지가 아님 — 일시는 캘린더 목록 기준, 장소·참가 조건은 미교차",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "44scjqry-0907",
    title: "AI 시대의 국방+제조+보안",
    date: "2026-09-07",
    dateLabel: "2026-09-07(월) 14:30–17:30",
    venue: "서울대학교 상산수리과학관, 서울 관악",
    region: "서울",
    host: "Luma 호스트 김송이",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/44scjqry",
    linkType: "registration",
    point: "국방·제조·보안 세 산업의 AI 도입을 한 자리에서 다루는 세미나. 방산·제조 원우에게 산업 인사이트 가치.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 주최 조직명은 페이지에 미표기(개인 호스트)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "jpmm44n1-0917",
    title: "우주에서의 AI 활용 — Beyond Earth Observation | AI for Science/Engineering 시리즈 (리벨리온×모두의연구소)",
    date: "2026-09-17",
    dateLabel: "2026-09-17(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스, 서울 강남",
    region: "서울",
    host: "리벨리온, 모두의연구소 커뮤니티",
    price: "무료(매진)",
    priceType: "free",
    link: "https://luma.com/jpmm44n1",
    linkType: "registration",
    point: "AI 반도체 리벨리온과 모두연의 과학·공학 AI 시리즈 — 이번 회차는 우주 데이터. 창업 코너(인세라솔루션 우주 광통신)와 맞물리는 주제. 매진.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 페이지 기준 매진",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "iroc2iar-0908",
    title: "[Box2Box] 한국에서 아웃바운드 리스트를 만들고, 우선순위를 만드는 법 with AI",
    date: "2026-09-08",
    dateLabel: "2026-09-08(화) 19:00–21:00",
    venue: "AB180 오피스, 서울 강남",
    region: "서울",
    host: "Box2Box (호스트 최현종 · 심정훈)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/iroc2iar",
    linkType: "registration",
    point: "B2B 영업 리스트 작성과 우선순위 산정을 AI로 자동화하는 실무 세션. 영업 조직 원우에게 바로 쓰는 워크플로.",
    tier: 3,
    category: "교육",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "kv83j9q4-0916",
    title: "9월 특별강연: 민주적 AI는 실현 가능할까?",
    date: "2026-09-16",
    dateLabel: "2026-09-16(수) 19:30–21:00",
    venue: "금산빌딩, 서울",
    region: "서울",
    host: "Luma 호스트 Chihye Noh · 고시랑 · 노서영",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/kv83j9q4",
    linkType: "registration",
    point: "AI 거버넌스·민주주의를 주제로 한 시민 강연.",
    tier: 3,
    category: "정책",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "exclude",
    excludeReason: "정책 담론 중심의 시민 강연으로 실무 AI 인사이트 밀도가 낮다고 판단 — 주최 조직 정보도 페이지에 미표기. 캘린더 비노출(관심 있으면 링크로 직접 확인)",
  },
  {
    id: "zecq09tp-0929",
    title: "DIGITAL AF • Exhibition & Side Events Space • Korea Blockchain Week",
    date: "2026-09-29",
    dateEnd: "2026-10-03",
    dateLabel: "2026-09-29(화) 16:00 ~ 10-03(토) 02:00",
    venue: "ARC Gangnam, 서울 강남",
    region: "서울",
    host: "Comooooab, AI Builders, BuilderBase",
    price: "무료 입장 + 유료 티켓($49/$149) 혼재",
    priceType: "split",
    link: "https://luma.com/zecq09tp",
    linkType: "registration",
    point: "KBW 주간 내내 열리는 전시·사이드 이벤트 공간. 저녁 네트워킹 동선으로 활용.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 무료·4,900센트·14,900센트 티켓 혼재 확인",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "37kr78y0-0913",
    title: "OOO Welcome #2 | Bring AI Into Your Real Work",
    date: "2026-09-13",
    dateLabel: "2026-09-13(일) 15:00–19:00",
    venue: "Beauty Selection, 서울",
    region: "서울",
    host: "Luma 호스트 Sergio · 이재규",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/37kr78y0",
    linkType: "community",
    point: "'내 실제 업무에 AI 넣기'를 주제로 한 일요일 오후 커뮤니티 모임. 가벼운 네트워킹 겸 사례 교환.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. 주최 조직명 미표기(개인 호스트)",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "06487qj1-0919",
    title: "엔터테크 스터디 클럽 #26",
    date: "2026-09-19",
    dateLabel: "2026-09-19(토) 15:00–17:30",
    venue: "헤이그라운드 서울숲점, 서울 성동",
    region: "서울",
    host: "Entertech Study Club",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/06487qj1",
    linkType: "community",
    point: "엔터테인먼트×테크 스터디 정기 모임 26회차. 콘텐츠·미디어 산업 원우의 토요일 스터디 선택지.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-05) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekend",
    curate: "watch",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-09-05",
  baseDate: "2026-09-07",
  rangeDays: 30,
  source:
    "2026-09-05 /aimba Vol.21 Phase 4C 레이더 재생성 (윈도우 2026-09-07~10-07, range 30) — 직전 08-10 스캔분 13건 중 윈도우 경과 12건 삭제(Seoul Tech Mixer 반복분·젠스파크 8/23·AI 서울 8월 행사 등), AI World 2026(9/9) 1건 유지·재검증, 신규 21건 추가. 링크 검증: 전 22건 HTTP 200(실패 0, 교체 0) — Luma 18건은 og:title·start_at(UTC→KST)·호스트·티켓 플래그를 페이지 원문에서 추출, 공식 페이지 4건(AI World·Try Everything·KBW·AI FESTA)은 타이틀·og:description으로 날짜·장소 확인. verified 등급: verified 19 / link-ok 3(Try Everything=공동주최 목록 미교차, KBW=주최사 미교차, Superteam Korea=캘린더 페이지라 개별 이벤트 메타 없음). ⚠️ 주의 — Luma __NEXT_DATA__의 첫 \"name\" 필드는 캘린더명(예: Personal)이라 행사명으로 쓰면 오류, og:title 기준으로 잡음. 장소 미표기(등록자 공개) 3건은 '서울(등록 후 공개)'로 표기. 큐레이션: pick 5(Agent Economy 9/14, Daytona HackSprint 9/19, Agentic Payments Onchain 9/28, AI Meets RealFi 9/30, AI FESTA 26 10/6~8) / watch 16 / exclude 1(민주적 AI 특강 — 실무 밀도 낮음). KBW 주간(9/28~10/3) 사이드 6건이 몰려 있어 9월 마지막 주가 밀도 최고. 10/2~10/7 구간은 AI FESTA 외 검증 통과 건 없음 — 다음 사이클 재스캔 필요.",
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
