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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. 장소는 좌표 비공개, 본문에 '강남 (신청 승인 후 안내)' 표기",
    jjFlag: "weekday-eve",
    curate: "pick",
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
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·호스트·본문 교차확인. 장소는 페이지에 미표기(승인자 공개)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "m5go7n2c-1013",
    title: "Google Agentic AI Night (Beyond the Vibes Community)",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 19:00–22:00",
    venue: "구글 서울(강남파이낸스센터 22층), 서울 강남 테헤란로 152",
    region: "서울",
    host: "Beyond the Vibes Community (호스트 Thu Ya Kyaw · Sunny Park)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/m5go7n2c",
    linkType: "registration",
    point: "구글 서울 오피스에서 에이전틱 소프트웨어 개발, Antigravity 멀티에이전트, A2A 프로토콜, Google Cloud 배포까지 한 저녁에 다룬다. 딜 자동화 에이전트를 구글 스택으로 짤 때의 설계 선택지를 직접 확인하는 자리.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소(테헤란로 152 강남파이낸스센터 22F)·호스트·승인제 교차확인",
    jjFlag: "weekday-eve",
    curate: "pick",
  },
  {
    id: "ai-salon-dev-korea-1013",
    title: "AI SALON X Dev Korea #2",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 18:30–21:15",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "AI Salon · Dev Korea (호스트 Anton Reshetov · Jay Kim · Florian Ludot 외)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/AI-Salon-October-Seoul-2026",
    linkType: "registration",
    point: "글로벌 AI 토론 모임 AI Salon과 서울 개발자 커뮤니티 Dev Korea의 두 번째 공동 모임. 같은 날 구글 Agentic AI Night와 겹치므로 둘 중 하나를 고르는 용도.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·호스트·승인제 교차확인. 장소는 좌표 비공개(승인자 공개)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "1odx3eoy-1014",
    title: "ML Engineer Meetup (Channel Dev Meetup)",
    date: "2026-10-14",
    dateLabel: "2026-10-14(수) 18:00–21:30",
    venue: "GS타워(역삼역), 서울 강남",
    region: "서울",
    host: "Channel Dev Meetup (채널코퍼레이션)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/1odx3eoy",
    linkType: "registration",
    point: "채널코퍼레이션·라이너 ML 엔지니어가 자체 모델 운영과 AI 에이전트용 검색엔진 구축 경험을 공유한다. 사내 문서 검색·딜 자료 RAG를 붙일 때의 실무 난점 청취용.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소(역삼역 GS타워)·호스트 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "xgz5iyyv-0929",
    title: "Agentic Seoul by Minara (AI Agent × Finance)",
    date: "2026-09-29",
    dateLabel: "2026-09-29(화) 17:00–20:00",
    venue: "먼데이투썬데이 청담(도산대로67길 13-3 EMPRESS빌딩), 서울 강남",
    region: "서울",
    host: "Minara (호스트 Jay Shin 외)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/xgz5iyyv",
    linkType: "registration",
    point: "AI 에이전트가 금융 업무에 들어오는 방식을 다루는 KBW 주간 패널. 금융 에이전트의 실사용 사례를 짧게 훑는 저녁 동선.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트·승인제 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "k7ybhg3w-0930",
    title: "Next Builders: Building in the Age of AI (ShardLab)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 14:00–18:00",
    venue: "Hashed 사무실 20층(강남대로 374), 서울 강남",
    region: "서울",
    host: "ShardLab",
    price: "무료(승인제·매진)",
    priceType: "approval",
    link: "https://luma.com/k7ybhg3w",
    linkType: "registration",
    point: "해시드 신사옥에서 열리는 AI 시대 빌더 세션. 현재 매진 상태라 대기 등록 가능 여부만 확인하면 된다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인. sold_out=true",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "zoplh23g-0930",
    title: "THE NEXT AI & Payment CARNIVAL (LINE NEXT × INF CryptoLab)",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 15:00–19:00",
    venue: "빅플레이스(아이콘역삼빌딩, 테헤란로44길 8), 서울 강남",
    region: "서울",
    host: "LINE NEXT, INF CryptoLab",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/zoplh23g",
    linkType: "registration",
    point: "애니모카 Yat Siu가 상시 작동하는 에이전트를 주제로 기조연설하는 AI·결제 행사. 에이전트가 결제까지 수행하는 흐름을 금융 인프라 관점에서 볼 수 있다.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트·승인제 교차확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "yellowkorea-1001",
    title: "Yellow Korea Meetup | AI Agents",
    date: "2026-10-01",
    dateLabel: "2026-10-01(목) 14:00–17:00",
    venue: "카페 앙트레블(강남대로102길 45), 서울 강남",
    region: "서울",
    host: "CoinEasy, Yellow",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/Yellowkorea",
    linkType: "registration",
    point: "크립토 인프라 Yellow가 AI 에이전트를 주제로 여는 KBW 주간 밋업. 웹3 쪽 에이전트 활용 흐름 참고용.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "bnseoul26-1002",
    title: "Builder Nights Seoul – Agentic Edition (MetaMask · Vana · LF Decentralized Trust)",
    date: "2026-10-02",
    dateLabel: "2026-10-02(금) 16:00–19:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "MetaMask(Consensys), Vana, Linux Foundation Decentralized Trust, Ticker Capital",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/bnseoul26",
    linkType: "registration",
    point: "메타마스크·Vana·리눅스재단이 함께 여는 에이전틱 빌더 모임. 에이전트와 지갑·데이터 소유권 인프라의 결합을 개발자 시각으로 본다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·호스트·승인제 교차확인. 장소는 좌표 비공개(승인자 공개)",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "549sb2ds-1002",
    title: "OpenSource AI Mixer (Dev Korea)",
    date: "2026-10-02",
    dateLabel: "2026-10-02(금) 18:30–21:00",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "Dev Korea (호스트 Florian Ludot 외)",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/549sb2ds",
    linkType: "registration",
    point: "Kimi·MiniMax·Qwen 등 중국 오픈소스 모델을 주제로 한 개발자 저녁 모임. 동계 중국 세미나 사전 탐색과 저비용 모델 선택지 점검에 연결된다.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. 장소는 좌표 비공개(등록자 공개)",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "8a5unpnu-1024",
    title: "Research Fast and Design Live with Mobbin MCP (Designed Minds)",
    date: "2026-10-24",
    dateLabel: "2026-10-24(토) 12:00–13:30",
    venue: "디캠프(d·camp, 선릉로 551 새롬빌딩), 서울 강남 역삼",
    region: "서울",
    host: "Designed Minds",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/8a5unpnu",
    linkType: "registration",
    point: "실제 앱 화면 라이브러리를 MCP로 AI 에이전트에 연결해 리서치·설계하는 영어 워크숍(한국어 요약 제공). 토요일 낮 90분이라 MCP 실습을 부담 없이 해볼 수 있다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트·승인제 교차확인",
    jjFlag: "weekend",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 ─────────────
  {
    id: "samsung-ai-forum-0930",
    title: "Samsung AI Forum 2026 — The Agentic Shift",
    date: "2026-09-30",
    dateLabel: "2026-09-30(수) 09:00–17:00",
    venue: "삼성전자 서초사옥, 서울 서초 (온라인 생중계 병행)",
    region: "서울",
    host: "삼성전자",
    price: "현장=사전 초청자·임직원 한정 / 온라인 생중계",
    priceType: "unknown",
    link: "https://saif2026.com/",
    linkType: "official",
    point: "올해 주제가 '에이전틱 전환'이고 OpenAI·AWS가 기조연설을 맡는다. 현장은 초청제라 온라인 생중계로 빅테크의 에이전트 로드맵을 듣는 용도.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-09-29) — 일시·장소(서초사옥)·주제·현장 초청제·온라인 생중계 교차확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "if-kakao-26-1013",
    title: "if(kakao)26 — 카카오 개발자 컨퍼런스",
    date: "2026-10-13",
    dateEnd: "2026-10-14",
    dateLabel: "2026-10-13(화)~10-14(수)",
    venue: "카카오 AI 캠퍼스 (강남역·판교역 셔틀 운행, 상세 주소 페이지 미표기)",
    region: "수도권",
    host: "카카오",
    price: "무료(오프라인 신청 9/28 마감·10/1 이후 당첨 발표, 전 세션 생중계)",
    priceType: "free",
    link: "https://if.kakao.com/2026",
    linkType: "official",
    point: "카카오의 연례 개발자 컨퍼런스로 전 세션이 생중계된다. 국내 빅테크가 AI 에이전트를 서비스에 어떻게 붙이는지 온라인으로 챙겨볼 수 있다.",
    tier: 2,
    category: "빅테크",
    verified: "link-ok",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-09-29) — '2026.10.13(Tue) - 14(Wed) @Kakao AI Campus'·셔틀(강남역·판교역) 표기. 행사장 상세 주소는 페이지 미표기라 link-ok 처리",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "industrial-ai-expo-1021",
    title: "2026 산업AI EXPO (주제: Embodied AI) — AMXPO 2026 동시 개최",
    date: "2026-10-21",
    dateEnd: "2026-10-23",
    dateLabel: "2026-10-21(수)~10-23(금)",
    venue: "킨텍스, 경기 고양 일산",
    region: "수도권",
    host: "한국산업지능화협회(KOIIA)·KOTRA 주관",
    price: "무료(전시 사전등록)",
    priceType: "free",
    link: "https://industrialaiexpo.or.kr/main.asp",
    linkType: "official",
    point: "제조 AX와 Embodied AI를 한 자리에 모은 산업 AI 전시. 첫날 글로벌 산업AI 컨퍼런스가 함께 열려 휴머노이드·산업로봇의 현장 적용 사례를 볼 수 있다. 이번 호 피지컬 AI 섹션(Helix 2.5·삼현 액슬론·딜로이트 회수기간)의 국내 버전에 해당하는 자리.",
    tier: 2,
    category: "전시",
    verified: "link-ok",
    verifyNote: "공식 사이트 HTTP 200(2026-09-29 재검증) + 시작일 2026-10-21·주제(Embodied AI)·주관(KOIIA·KOTRA) 본문 확인. 단 사이트 본문에서 추출된 주소가 협회 사무실(서울 금천구)이라 개최 장소(킨텍스)는 교차검증 일부 미완 — link-ok 처리.",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 3 · 투자/정책/산업 ─────────────
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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·장소(강남구 도산대로81길 13)·호스트 교차확인. og:description은 3:00–7:00 PM으로 start_at(14:00)과 1시간 차이 — 현장 시작시각 재확인 필요",
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
    verifyNote: "공식 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:description '인공지능주간 대표 행사, 10월 6일~8일 코엑스'. 서울시 보도자료(news.seoul.go.kr/gov/archives/580148, HTTP 200)로 일시·장소·주최·사전등록(8/10~10/5, 사전등록자 전시 무료) 교차확인. slw.kr HTTP 200",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "seoul-fintech-week-1026",
    title: "서울 핀테크 위크 2026 (Seoul FinTech Week)",
    date: "2026-10-26",
    dateEnd: "2026-10-28",
    dateLabel: "2026-10-26(월)~10-28(수)",
    venue: "콘래드 서울 · IFC 더포럼, 서울 영등포 여의도",
    region: "서울",
    host: "서울시",
    price: "무료(사전등록 9/15~10/21)",
    priceType: "free",
    link: "https://www.seoulfintechweek.com/",
    linkType: "official",
    point: "주제가 'AX 기반 디지털금융 전환'이다. 카카오페이 신원근 대표의 금융 AI 에이전트 기조연설, 에이전틱 AI와 금융의 미래, 토큰화·스테이블코인 세미나가 여의도에서 열려 증권사 실무와 가장 가깝다.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "공식 사이트 HTTP 200(2026-09-29, 정적 HTML에 일정 미노출) + 서울시 보도자료(news.seoul.go.kr/economy/archives/574676, HTTP 200)로 일시·장소·주최·무료·사전등록 기간·세션 교차확인",
    jjFlag: "multi",
    curate: "pick",
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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·장소(강남대로102길 34)·호스트 교차확인",
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
    verifyNote: "공식 페이지 재확인(HTTP 200, 2026-09-29 재검증) — 본문에 'September 29 Upbit Institutional Summit (Invite Only) / September 30 - Oct 1 Main Conference at Walkerhill Hotels & Resorts', 티켓 판매 중. 주최사 표기는 페이지 본문 미교차",
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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·장소(서초구 강남대로 27)·호스트 교차확인. 유료(is_free=false), 티켓 $199 확인",
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
    verifyNote: "개별 이벤트 페이지로 링크 교체(직전 호 캘린더 링크 luma.com/superteamkr) — HTTP 200, 2026-09-29 재검증. og:title·start_at(UTC→KST 환산)·호스트·승인제 교차확인. 장소는 페이지에 미표기",
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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·장소(봉은사로 130)·호스트 교차확인. 시간이 직전 호 11:00–17:00에서 10:00–18:00으로 변경됨. 무료·$150 티켓 혼재",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "qejy2rqx-1007",
    title: "The Leap — SVC 서울 리버스 IR·스타트업 IR",
    date: "2026-10-07",
    dateLabel: "2026-10-07(수) 15:00–19:30",
    venue: "SVC 서울(마포 동교동 165-1), 서울 마포",
    region: "서울",
    host: "SVC Seoul Global Team",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/qejy2rqx",
    linkType: "registration",
    point: "VC가 투자 기준을 먼저 발표하는 리버스 IR과 스타트업 9곳(AI 3곳) IR을 한 번에 본다. 초기 AI 기업 밸류에이션 감각을 잡는 용도.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소·호스트 교차확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "seoul-innovest-summit-1019",
    title: "2026 서울투자서밋 (Seoul Innovest Summit)",
    date: "2026-10-19",
    dateEnd: "2026-10-20",
    dateLabel: "2026-10-19(월)~10-20(화)",
    venue: "콘래드 서울, 서울 영등포 여의도",
    region: "서울",
    host: "서울투자진흥재단",
    price: "미표기(기관투자자 대상)",
    priceType: "unknown",
    link: "https://v.daum.net/v/20260927140047291",
    linkType: "partner",
    point: "기관투자자를 대상으로 한 서울시 투자 서밋으로 Cognite 공동창업자가 기조연설한다. 산업 AI 투자 흐름과 해외 기관 네트워킹 수요를 확인하는 자리.",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "공식 행사 페이지 미확인 — 뉴스 기사(v.daum.net, HTTP 200, 2026-09-29)로 일시·장소·주최만 확인. 참가 방식·비용은 미확정",
    jjFlag: "multi",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
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
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-09-29 재검증) — og:title이 'DIGITAL AF! • United Art & Tech'로 변경됨. start_at(UTC→KST 환산)·장소(서초구 양재동 14-15, 본문 'ARC Gangnam')·호스트 교차확인. 현재 is_free=false, 티켓 €25~$149",
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
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29 재검증) — og:title·start_at(UTC→KST 환산)·장소(강남구 언주로148길 5)·호스트 교차확인. 게스트 라인업은 '추후 공개'로 미확정",
    jjFlag: "weekend",
    curate: "watch",
  },

  // ───────────── 제외 (캘린더 비노출) ─────────────
  {
    id: "vessl-neocloud-1015",
    title: "베슬AI '2026 네오클라우드 전략 발표회'",
    date: "2026-10-15",
    dateLabel: "2026-10-15(목) 10:00–11:00",
    venue: "드림플러스 강남(강남대로 311), 서울 서초",
    region: "서울",
    host: "베슬AI",
    price: "무료",
    priceType: "free",
    link: "https://luma.com/7z70ejex",
    linkType: "registration",
    point: "AI 인프라 스타트업 베슬AI의 네오클라우드 전략 발표.",
    tier: 2,
    category: "산업",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·장소 교차확인",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "기자 대상 1시간 기업 발표회로 일반 참석자 가치가 낮음. 캘린더 비노출",
  },
  {
    id: "genspark-hackathon-1018",
    title: "젠스파크AI 해커톤 (한국젠스파크AI연구회)",
    date: "2026-10-18",
    dateLabel: "2026-10-18(일) 12:00–15:00",
    venue: "서울 (Luma 등록 후 상세 장소 공개)",
    region: "서울",
    host: "챗GPT강사 (한국젠스파크AI연구회)",
    price: "무료(매진)",
    priceType: "free",
    link: "https://luma.com/xhy6dy2f",
    linkType: "registration",
    point: "젠스파크 도구 활용 3시간 해커톤.",
    tier: 4,
    category: "교육",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-09-29) — og:title·start_at(UTC→KST 환산)·호스트 교차확인. sold_out=true, 장소 좌표 비공개",
    jjFlag: "weekend",
    curate: "exclude",
    excludeReason: "강사 개인이 여는 단일 도구 실습형 모임으로 강의 홍보 성격이 강하고 이미 매진. 캘린더 비노출",
  },
  {
    id: "onoffmix-349960-1022",
    title: "MS Ai365 세미나 (엠클라우드브리지)",
    date: "2026-10-22",
    dateLabel: "2026-10-22(목) 13:00–17:00",
    venue: "GS타워 아모리스 역삼, 서울 강남",
    region: "서울",
    host: "엠클라우드브리지",
    price: "페이지 참조",
    priceType: "unknown",
    link: "https://onoffmix.com/event/349960",
    linkType: "registration",
    point: "마이크로소프트 AI 솔루션 파트너사의 제품 세미나.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "온오프믹스 페이지 직접 확인(HTTP 200, 2026-09-29) — 일시·장소·주최 교차확인",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "MS 공식 행사가 아닌 파트너사 제품 판매형 세미나. 캘린더 비노출",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-09-29",
  baseDate: "2026-09-28",
  rangeDays: 30,
  source:
    "2026-09-29 /radar --no-build --since 2026-09-28 --range 30 재생성 (윈도우 2026-09-28~10-28) — 직전 09-21 호 18건 중 경과 6건 삭제(Shipaton 9/21, Sino-Korea Summit 9/21, 바이라인 금융테크 9/22, Humanoids Summit Seoul 9/22, NdotLight 파티 9/22, Habsida 해커톤 9/24[제외]). 잔존 12건 curl 재검증 HTTP 200·Luma start_at 불변(실패 0). 신규 18건(Luma discover seoul/ai·캘린더, WebSearch, 공식 페이지·서울시 보도자료): 서울 핀테크 위크(10/26~28, 추천), Google Agentic AI Night(10/13, 추천), Samsung AI Forum(9/30), if(kakao)26(10/13~14), AI SALON X Dev Korea(10/13), ML Engineer Meetup(10/14), Agentic Seoul by Minara(9/29), Next Builders(9/30), AI & Payment CARNIVAL(9/30), Yellow Korea AI Agents(10/1), Builder Nights Seoul(10/2), OpenSource AI Mixer(10/2), The Leap(10/7), 서울투자서밋(10/19~20, 뉴스 출처 link-ok), Mobbin MCP 워크숍(10/24) + 제외 3건(베슬AI 발표회·젠스파크 해커톤·MS Ai365 파트너 세미나). 탈락: 한중 혁신 파트너십 포럼(9/29 초청제), AI4Sci Korea(9/27 시작·신청 마감), AI+X 컨퍼런스(부산), AI Builders meetup+JEV(개인 호스트 저녁 모임), KBW 순수 크립토 사이드, 과거 행사(MCP Dev Summit Seoul 8/13 등). 이월 확인: industrial-ai-expo 장소(킨텍스)·if(kakao) 행사장 주소는 교차검증 미완(link-ok).",
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
