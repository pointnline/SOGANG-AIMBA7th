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
    id: "m5go7n2c-1013",
    title: "Google Agentic AI Night (Beyond the Vibes Community)",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 19:00–22:00",
    venue: "구글 서울(강남파이낸스센터 22층), 서울 강남 테헤란로 152",
    region: "서울",
    host: "Beyond the Vibes Community (호스트 Thu Ya Kyaw · Sunny Park)",
    price: "무료(승인제 · 매진, 대기 신청만 가능)",
    priceType: "approval",
    link: "https://luma.com/m5go7n2c",
    linkType: "registration",
    point: "구글 서울 오피스에서 에이전틱 소프트웨어 개발, Antigravity 멀티에이전트, A2A 프로토콜, Google Cloud 배포까지 한 저녁에 다룬다. 10/10 기준 매진이라 대기 신청으로만 노릴 수 있어 추천에서 관심으로 내렸다. 같은 저녁 AI Salon·OpenSearch 밋업과 겹친다.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·장소(테헤란로 152 강남파이낸스센터 22F)·호스트·승인제 불변, sold_out=true·잔여 0석으로 바뀜",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "ai-salon-dev-korea-1013",
    title: "AI SALON X Dev Korea #2",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 18:30–21:15",
    venue: "SVC 서울(Luma 본문 표기), 서울 마포",
    region: "서울",
    host: "AI Salon · Dev Korea (호스트 Anton Reshetov · Jay Kim · Florian Ludot 외)",
    price: "무료(승인제, 잔여 약 40석)",
    priceType: "approval",
    link: "https://luma.com/AI-Salon-October-Seoul-2026",
    linkType: "registration",
    point: "글로벌 AI 토론 모임 AI Salon과 서울 개발자 커뮤니티 Dev Korea의 두 번째 공동 모임. 실제 AI 제품을 키운 빌더·그로스 담당자의 실무 발표가 중심이다. 같은 저녁 구글 Agentic AI Night가 매진돼 현실적인 대안이 된다.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·호스트·승인제 불변. 본문에 'Venue: SVC Seoul' 명시(직전 호 미공개 → 보강), 잔여 40석",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "opensearch-seoul-rag-1013",
    title: "OpenSearch Project Seoul Meetup — 메타 저장소 기반 로컬 문서 RAG",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 19:30–21:00",
    venue: "센터필드 EAST동 18층(테헤란로 231), 서울 강남 역삼",
    region: "서울",
    host: "OpenSearch Project Seoul (Meetup, 호스트 West K.)",
    price: "무료",
    priceType: "free",
    link: "https://www.meetup.com/opensearch-project-seoul/events/316379129/",
    linkType: "community",
    point: "수십 개 저장소의 사양 문서를 메모리화해 OpenSearch로 관리하고 memory MCP로 다루는 '메타 저장소' 전략으로 토큰 비용과 추론 시간을 줄인 사례가 메인 세션(조용진). 사내 딜 자료 검색을 붙일 때 그대로 대입해볼 실무 밀도. 식사 미제공, 출입 QR은 전날 문자 발송.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소(역삼 센터필드 EAST동 18층)·무료·세션 주제 등은 10-05 교차확인분 유지",
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
    point: "채널코퍼레이션·라이너 ML 엔지니어가 자체 모델 운영과 AI 에이전트용 검색엔진 구축 경험을 공유한다. 사내 문서 검색·딜 자료 RAG를 붙일 때의 실무 난점 청취용. 같은 날 오후 Replit 해커톤, 같은 저녁 PyTorchKR 세미나(서초)와 겹친다.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소(역삼역 GS타워)·호스트 등은 10-05 교차확인분 유지",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "replit-openai-hackathon-1014",
    title: "Replit x OpenAI x AWS x Gold House Ventures Hackathon",
    date: "2026-10-14",
    dateLabel: "2026-10-14(수) 13:00–19:00",
    venue: "서울 종로 사직동 일대 (승인자에게 정확한 장소 별도 안내)",
    region: "서울",
    host: "Replit · OpenAI · AWS · Gold House Ventures (Partiful 등록)",
    price: "참가비 미표기(승인제, 승인 참가자 100명)",
    priceType: "approval",
    link: "https://partiful.com/e/PVm8Ehw7QwzympSfwkB3",
    linkType: "registration",
    point: "Replit과 OpenAI 모델로 아이디어를 3시간 안에 실제 앱으로 만드는 해커톤(한국어·영어). 1등 상품이 Replit Pro 1년+OpenAI 크레딧 2.5만 달러로 크고, 파이어사이드 챗과 Top 3 데모가 붙는다. 바이브코딩으로 딜 업무 도구를 빠르게 만들어 보는 연습장이지만 평일 오후라 반차가 필요하다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Partiful 페이지 직접 확인(HTTP 200, 2026-10-10) — 시작·종료 시각(UTC→KST 13:00–19:00)·승인 참가자 100명·상품·아젠다 교차확인. 장소는 동네(Sajik-dong)만 공개, 참가비 표기 없음",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "yumithon-1017",
    title: "YUMITHON — 헤이유미 MCP로 만드는 맛집 에이전트 해커톤",
    date: "2026-10-17",
    dateLabel: "2026-10-17(토) 10:00–18:00",
    venue: "하이드미플리즈(을지로11길 33), 서울 중구 을지로",
    region: "서울",
    host: "Team.Human · 하이드미플리즈 (호스트 Dave · Dane Yu 외)",
    price: "무료(승인제, 잔여 30석)",
    priceType: "approval",
    link: "https://luma.com/2guk5d34",
    linkType: "registration",
    point: "맛집 검색·예약 MCP '헤이유미'(Claude·ChatGPT 공식 플러그인)를 붙여 하루 동안 나만의 에이전트를 만드는 토요일 해커톤. MCP 하나로 검색부터 예약까지 실제로 행동하는 에이전트를 짜 보는 압축 실습이다. 1등 상금 100만원.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-10-10) — start_at(UTC→KST 환산)·장소(을지로11길 33)·호스트·승인제·잔여 30석·본문(상금·MCP 제공) 교차확인",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "github-copilot-dev-days-pp-1018",
    title: "GitHub Copilot Dev Days (Seoul) — 파워 플랫폼 한국 유저 그룹 회차",
    date: "2026-10-18",
    dateLabel: "2026-10-18(일) 10:00–18:00",
    venue: "한국마이크로소프트 13층(더케이트윈타워 A동, 종로1길 50), 서울 종로",
    region: "서울",
    host: "파워 플랫폼 한국 유저 그룹 (이벤터스 채널)",
    price: "10,000원(신청 10/1~10/14)",
    priceType: "paid",
    link: "https://event-us.kr/powerplatform/event/136275",
    linkType: "registration",
    point: "GitHub Copilot Dev Days의 서울 일요일 회차. 10/24 회차(신청 마감·추첨)와 날짜·주최가 다른 별개 행사라, 그쪽에 떨어졌다면 Copilot을 하루 종일 배울 대안이 된다. 세션표는 페이지 본문이 스크립트로 로드돼 미확인.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "이벤터스 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시(10/18 10:00–18:00)·장소(한국 마이크로소프트 13층)·가격 10,000원·신청기간(10/1~10/14)·채널(파워 플랫폼 한국 유저 그룹) 교차확인. 세션 상세 미확인",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "daytona-hacksprint-seoul-1018",
    title: "Daytona HackSprint Seoul 해커톤 (AI Builders · Daytona · Nosana)",
    date: "2026-10-18",
    dateLabel: "2026-10-18(일) 14:00–18:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "AI Builders, Daytona, Nosana",
    price: "무료(승인제, 잔여 129석)",
    priceType: "approval",
    link: "https://luma.com/daytonaseoul1018",
    linkType: "registration",
    point: "'단순한 챗봇의 시대는 끝났다'를 내걸고 실시간 데이터 수집·워크플로우 자동화·인프라 관리·프로덕션 배포를 묶는 AI 애플리케이션을 만드는 일요일 오후 4시간 해커톤. 에이전트 샌드박스 인프라(Daytona) 위에서 딜 자동화 프로토타입을 압축 포맷으로 돌려보기 좋다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·호스트·승인제 불변, 잔여 129석. 장소 좌표 비공개(승인자 공개)",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "hanbit-ai-team-1020",
    title: "혼자 일하는 AI를 넘어, 함께 일하는 AI 팀 만들기 (한빛미디어 세미나)",
    date: "2026-10-20",
    dateLabel: "2026-10-20(화) 19:00–21:00",
    venue: "한빛미디어 1층 리더스홀(연희로2길 62), 서울 서대문",
    region: "서울",
    host: "한빛앤(한빛미디어)",
    price: "10,000원 · 도서 포함 35,000원(신청 ~10/20 13:00)",
    priceType: "paid",
    link: "https://event-us.kr/FKH3nHkjmPGh/event/136964",
    linkType: "registration",
    point: "여러 AI 에이전트가 역할을 나눠 함께 일하도록 '하네스'를 설계하는 법을 다루는 평일 저녁 세미나(도서 『하네스 엔지니어링 with 클로드 코드』 연계). 클로드 코드로 딜 리서치를 여러 에이전트에 나눠 돌리는 구조를 짤 때 바로 참고할 주제다.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "이벤터스 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시·장소(한빛미디어 1층 리더스홀)·주최·가격(1만원/도서 포함 3.5만원)·신청기간(10/7 12:00~10/20 13:00) 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "commitco-github-meetup-1022",
    title: "COMMIT/CO 오프라인 밋업 — GitHub × GitHub Copilot",
    date: "2026-10-22",
    dateLabel: "2026-10-22(목) 14:00–16:00",
    venue: "한국마이크로소프트 13층(더케이트윈타워 A동, 종로1길 50), 서울 종로",
    region: "서울",
    host: "COMMIT/CO 밋업 (발표: KH시스템즈 · MS MVP · Microsoft/GitHub 디벨로퍼 아드보캇)",
    price: "참가 신청 준비 중(비용 미표기)",
    priceType: "unknown",
    link: "https://www.commitco.kr/",
    linkType: "official",
    point: "Copilot 최신 업데이트(방은지, KH시스템즈), 놓치기 쉬운 GitHub 기능(김진석, MS MVP), 'Copilot에게 코딩 말고 무엇을 시킬까'(유저스틴, MS/GitHub) 3개 세션의 2시간 밋업. 같은 날 14:00 OpenAI DevDay Exchange와 겹쳐 하나만 고를 수 있다. 신청 페이지는 아직 열리지 않았다.",
    tier: 1,
    category: "개발",
    verified: "link-ok",
    verifyNote: "공식 페이지 직접 확인(HTTP 200, 2026-10-10) — 일시(10/22 14:00–16:00)·장소(한국마이크로소프트 13층)·세션 3개·발표자 확인. '참가 신청 준비 중'이라 비용·정원·주최 법인 미표기 → link-ok",
    jjFlag: "weekday-work",
    curate: "watch",
  },
  {
    id: "cursor-hackathon-seoul-1024",
    title: "Cursor × Grok Bot Hackathon Seoul #4",
    date: "2026-10-24",
    dateLabel: "2026-10-24(토) 10:30–19:00",
    venue: "서울 (Luma 승인 후 상세 장소 공개)",
    region: "서울",
    host: "SpaceXAI 커뮤니티 (호스트 SIREAL · 가온 · Dave · Jihee Woo · Eric Kim)",
    price: "무료(승인제)",
    priceType: "approval",
    link: "https://luma.com/06x2etd7",
    linkType: "registration",
    point: "서울 네 번째 Cursor 해커톤으로, 이번에는 Grok Bot과 Cursor로 '나 대신 일하는 봇'을 하루 만에 만든다. 셋업 핸즈온 뒤 12:00~16:30 해킹, Top 5 라이브 데모(3분 발표+1분 질의)로 겨룬다. 같은 날 GitHub Copilot Dev Days·Mobbin MCP 워크숍과 겹친다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·호스트·승인제 불변. 제목이 'Cursor Hackathon Seoul 4th'에서 'Cursor × Grok Bot Hackathon Seoul #4'로 바뀌고 본문 일정표가 공개됨. 장소 좌표 비공개",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "github-copilot-dev-days-seoul-1024",
    title: "GitHub Copilot Dev Days | Seoul",
    date: "2026-10-24",
    dateLabel: "2026-10-24(토) 12:00–18:00",
    venue: "한국마이크로소프트(더케이트윈타워 A동 13층, 종로1길 50), 서울 종로",
    region: "서울",
    host: "Microsoft 커뮤니티 이벤트 (Ticketa 등록)",
    price: "무료(신청 10/4 마감 · 10/8 추첨 발표)",
    priceType: "free",
    link: "https://ticketa.co/event/xzch6c1g",
    linkType: "registration",
    point: "키노트가 '비개발자가 GitHub Copilot으로 코드가 아닌 진짜 문제를 푸는 실전 AX'(이영빈, GM TCK 전략개발팀장)이고, 이어 Copilot 앱(트랙 A)·CLI(트랙 B) 워크숍이 4시간 이어진다. 신청이 10/4에 끝나 추첨 당첨자만 입장하므로, 떨어졌다면 10/18 유저 그룹 회차(이벤터스, 1만원)가 대안이다.",
    tier: 1,
    category: "개발",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소·시간표·신청기간(~10/4, 10/8 추첨) 등은 10-05 교차확인분 유지",
    jjFlag: "weekend",
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
    price: "무료(승인제, 잔여 5석)",
    priceType: "approval",
    link: "https://luma.com/8a5unpnu",
    linkType: "registration",
    point: "실제 앱 화면 라이브러리를 MCP로 AI 에이전트에 연결해 리서치·설계하는 영어 워크숍(한국어 요약 제공). 토요일 낮 90분이라 MCP 실습을 부담 없이 해볼 수 있다. 잔여석이 5석뿐이다.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·장소·호스트·승인제 불변, 잔여 5석",
    jjFlag: "weekend",
    curate: "watch",
  },
  {
    id: "mongodb-ug-seoul-6-1029",
    title: "MongoDB User Group Seoul Meetup #6 — Copilot SDK 에이전트와 에이전트 메모리",
    date: "2026-10-29",
    dateLabel: "2026-10-29(목) 19:00–21:40",
    venue: "한국마이크로소프트(종로1길 50), 서울 종로",
    region: "서울",
    host: "Seoul MongoDB User Group (Meetup)",
    price: "무료(사전 등록 필수, 선착순)",
    priceType: "free",
    link: "https://www.meetup.com/mongodb-usergroup-seoul/events/316356394/",
    linkType: "community",
    point: "오픈소스 면접 코치 앱 하나를 놓고 GitHub Copilot SDK 멀티에이전트 구조, MongoDB MCP 서버와 에이전트 스킬 연결, 에이전트 단기·장기 메모리 설계를 노트북 실습으로 이어 간다. 에이전트가 지난 대화를 기억하게 만드는 방법을 손으로 익히는 자리.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Meetup 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시(19:00 시작)·장소(Microsoft Korea Office, 종로1길 50)·주최, 본문 아젠다(~21:40 네트워킹)·무료·선착순 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "compiled-17-seoul-1109",
    title: "c0mpiled-17: Seoul — YC 'Request for Startups' 빌드 해커톤",
    date: "2026-11-09",
    dateLabel: "2026-11-09(월) 09:00–19:00",
    venue: "코엑스 스타트업 브랜치 2층 A01(영동대로 513), 서울 강남",
    region: "서울",
    host: "Transpose Platform · 아산나눔재단 · 한국벤처캐피탈협회(KVCA) · 한국벤처투자(KVIC) · 한국무역협회(KITA)",
    price: "무료(승인제, 약 150명 선발 · 신청 10/30 23:59 마감)",
    priceType: "approval",
    link: "https://luma.com/compiled-8lsr",
    linkType: "registration",
    point: "Y Combinator의 'Request for Startups' 주제 중 하나를 골라 현장에서 만들고 90초 데모로 심사받는 하루짜리 해커톤. 벤처캐피탈협회·한국벤처투자가 함께해 VC 시각에서 AI 창업 아이디어가 어떻게 평가되는지 볼 수 있다. 영어 진행, 평일 종일.",
    tier: 1,
    category: "빌드",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-10-10) — start_at(UTC→KST 환산)·장소(COEX Startup Branch 2F A01)·공동 주최·승인제·신청 마감(10/30)·영어 진행 교차확인. 직전 호에선 윈도우 밖(11/9)이라 탈락했던 건",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 2 · 빅테크/모델사 ─────────────
  {
    id: "if-kakao-26-1013",
    title: "if(kakao)26 — 카카오 개발자 컨퍼런스",
    date: "2026-10-13",
    dateEnd: "2026-10-14",
    dateLabel: "2026-10-13(화)~10-14(수)",
    venue: "카카오 AI 캠퍼스 (강남역·판교역 셔틀 운행, 상세 주소 페이지 미표기)",
    region: "수도권",
    host: "카카오",
    price: "무료(오프라인 참가 신청 마감, 전 세션 생중계)",
    priceType: "free",
    link: "https://if.kakao.com/2026",
    linkType: "official",
    point: "카카오의 연례 개발자 컨퍼런스로 전 세션이 생중계된다. 오프라인 신청은 이미 닫혔으니 국내 빅테크가 AI 에이전트를 서비스에 어떻게 붙이는지 온라인으로 챙겨보는 용도.",
    tier: 2,
    category: "빅테크",
    verified: "link-ok",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·신청 마감·생중계·셔틀 표기 등은 10-05 교차확인분 유지. 행사장 상세 주소는 페이지 미표기라 link-ok 유지",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "build-with-gemini-seoul-1014",
    title: "Build with Gemini Seoul — All Builders Day (Google Cloud)",
    date: "2026-10-14",
    dateLabel: "2026-10-14(수) 09:00–18:00",
    venue: "롯데호텔 월드 3층(올림픽로 240), 서울 송파",
    region: "서울",
    host: "Google Cloud",
    price: "무료(등록제 · Track 1 Business Builders는 등록 마감)",
    priceType: "free",
    link: "https://cloud.google.com/events/intl/ko-kr/build-with-gemini-seoul/all-builders-day?hl=ko",
    linkType: "official",
    point: "구글 클라우드의 하루짜리 AI 에이전트 핸즈온. 오전 키노트 'AI 시대, 빌더처럼 생각하고 실행하는 법' 뒤에 노코드 업무자동화(Track 1, HR·재무회계·영업 실무자 추천, 마감)·엔터프라이즈 에이전트 거버넌스(Track 2, IT 아키텍트)·프로코드 앱 개발(Track 3) 중 하나를 골라 오후 3시간 실습한다. 재무·회계 실무자 트랙이 먼저 마감된 것이 수요를 보여준다.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소(롯데호텔 월드 3층)·3트랙 대상·Track 1 등록 마감·아젠다 등은 10-05 교차확인분 유지",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "industrial-ai-expo-1021",
    title: "2026 산업AI EXPO (주제: Embodied AI) — AMXPO 2026 동시 개최",
    date: "2026-10-21",
    dateEnd: "2026-10-23",
    dateLabel: "2026-10-21(수)~10-23(금)",
    venue: "킨텍스 1전시장 2홀, 경기 고양 일산",
    region: "수도권",
    host: "과학기술정보통신부 주최 · 한국산업지능화협회(KOIIA)·KOTRA 주관",
    price: "무료(전시 사전등록)",
    priceType: "free",
    link: "https://industrialaiexpo.or.kr/main.asp",
    linkType: "official",
    point: "제조 AX와 Embodied AI를 한 자리에 모은 산업 AI 전시. 산업AI 컨퍼런스가 함께 열려 휴머노이드·산업로봇의 현장 적용 사례를 사흘 안에 훑는다. 같은 기간 킨텍스 1전시장에서 INSIGHT CONNECT×AMXPO(AX 팩토리) 컨퍼런스도 열려 한 번 방문으로 둘을 묶을 수 있다.",
    tier: 2,
    category: "전시",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일정(10/21~23)·장소(킨텍스 1전시장 2홀)·주최·주관·무료 사전등록 등은 10-05 교차확인분 유지",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "openai-devday-exchange-seoul-1022",
    title: "OpenAI DevDay Exchange 2026 — Seoul",
    date: "2026-10-22",
    dateLabel: "2026-10-22(목) 14:00~ (종료 시각·상세 프로그램은 승인 후 안내)",
    venue: "서울 (지원 승인 후 장소 공개)",
    region: "서울",
    host: "OpenAI",
    price: "무료(지원·승인제)",
    priceType: "approval",
    link: "https://events.openai.com/devdayexchange2026",
    linkType: "official",
    point: "OpenAI가 벵갈루루(10/16)·도쿄(10/20)에 이어 서울에서 여는 도시 순회 개발자 행사. OpenAI 제품·엔지니어링 팀의 기술 세션, 창업자·개발자의 실제 프로젝트와 Codex 워크플로우, 프로젝트 핸즈온 가이드가 예고돼 모델사의 에이전트 로드맵을 1차 소스로 듣는 통로. 10/5 기준 '심사 중이지만 지원은 계속 받는다'고 밝혔다. 같은 시각 COMMIT/CO 밋업과 겹친다.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 'Seoul - October 22'·14시 시작·추가 지원 가능·장소 승인 후 공개 등은 10-05 교차확인분 유지",
    jjFlag: "weekday-work",
    curate: "pick",
  },
  {
    id: "nvidia-ai-day-seoul-1109",
    title: "NVIDIA AI Day Seoul 2026 — 세션 + 핸즈온 워크숍",
    date: "2026-11-09",
    dateEnd: "2026-11-10",
    dateLabel: "2026-11-09(월)~11-10(화)",
    venue: "코엑스(세부 홀 페이지 미표기), 서울 강남",
    region: "서울",
    host: "NVIDIA",
    price: "11/10 원데이 워크숍 USD 199(얼리버드 ~10/19)·정가 USD 500 · AI Day 패스 가격은 페이지 미표기",
    priceType: "paid",
    link: "https://www.nvidia.com/ko-kr/ai-days/",
    linkType: "official",
    point: "NVIDIA가 코엑스에서 여는 이틀짜리 행사. 11/9 오전 10시 Deepu Talla(로보틱스·엣지 AI 부사장)의 피지컬 AI·Isaac·AI 팩토리 세션을 시작으로 에이전틱 AI·피지컬 AI·AI 인프라 트랙이 열리고, 11/10에는 NVIDIA 전문가의 유료 원데이 핸즈온 워크숍이 이어진다. 패스 소지자는 어소시에이트 인증 시험 1회 무료 응시. 피지컬 AI 섹터를 공급사 1차 소스로 듣는 자리.",
    tier: 2,
    category: "빅테크",
    verified: "verified",
    verifyNote: "NVIDIA 공식 페이지 직접 확인(HTTP 200, 2026-10-10) — '11월 9~10일, 2026 | 코엑스'·11/9 10:00 KST Deepu Talla 세션·트랙 구성·워크숍 참가비(USD 199 얼리버드 10/19 종료, USD 500 정가)·인증 시험 무료 응시 교차확인. AI Day 패스 가격과 세부 홀은 페이지 미표기(취소 규정에 패스 취소 수수료 50달러 명시)",
    jjFlag: "multi",
    curate: "pick",
  },

  // ───────────── TIER 3 · 투자/정책/산업 ─────────────
  {
    id: "kes-2026-1013",
    title: "KES 2026 한국전자전 — CES Asia Unveiled Seoul 동시 개최",
    date: "2026-10-13",
    dateEnd: "2026-10-16",
    dateLabel: "2026-10-13(화)~10-16(금) 10:00–17:00 (마지막 날 16:00)",
    venue: "코엑스 A·B홀, 서울 강남",
    region: "서울",
    host: "산업통상자원부 주최 · 한국전자정보통신산업진흥회(KEA) 주관",
    price: "20,000원(현장 입장 · 사전등록 시 무료)",
    priceType: "paid",
    link: "https://www.kes.org/",
    linkType: "official",
    point: "국내 최대 전자·IT 전시로 글로벌 키노트·컨퍼런스와 혁신상이 붙는다. 올해는 CES Asia Unveiled Seoul이 함께 열려 10/13 14:00 코엑스 401호 키노트로 시작한다. 산업 AI 하드웨어 흐름을 훑는 용도이며 참관 사전등록은 무료.",
    tier: 3,
    category: "전시",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일정·홀·관람시간·입장료·주최/주관·CES Asia Unveiled Seoul 키노트 등은 10-05 교차확인분 유지",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "pytorchkr-physical-ai-1014",
    title: "PyTorchKR 테크 세미나 — Physical AI",
    date: "2026-10-14",
    dateLabel: "2026-10-14(수) 19:00–22:00",
    venue: "오픈업(우제빌딩 2층, 서초대로40길 83, 서초역 도보 5분), 서울 서초",
    region: "서울",
    host: "파이토치 한국 사용자 모임(PyTorchKR)",
    price: "무료(신청 마감)",
    priceType: "free",
    link: "https://event-us.kr/pytorchkr/event/135213",
    linkType: "registration",
    point: "Physical AI를 주제로 한 파이토치 한국 커뮤니티의 평일 저녁 테크 세미나. 신청은 이미 닫혔으니 대기·현장 안내 공지를 확인하는 용도다(주차 불가). 같은 저녁 ML Engineer Meetup(역삼)과 겹친다.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "이벤터스 페이지 재확인(HTTP 200, 2026-10-10 재검증) — 일시·장소(오픈업 우제빌딩 2F)·주최·무료 불변, 신청 기간(~10/6) 종료로 마감 상태",
    jjFlag: "weekday-eve",
    curate: "watch",
  },
  {
    id: "seoul-innovest-summit-1019",
    title: "2026 서울투자서밋 (Seoul Innovest Summit)",
    date: "2026-10-19",
    dateEnd: "2026-10-20",
    dateLabel: "2026-10-19(월)~10-20(화)",
    venue: "콘래드 서울(예정), 서울 영등포 여의도",
    region: "서울",
    host: "서울시 · 서울투자진흥재단",
    price: "미표기(글로벌 투자자·혁신기업 초청형)",
    priceType: "unknown",
    link: "https://festival.seoul.go.kr/festival/main/festivalView.do?festacode=332",
    linkType: "official",
    point: "글로벌 투자자와 서울 혁신기업이 IR과 1:1 미팅으로 만나는 서울시 투자유치 서밋. 산업 AI 투자 흐름과 해외 기관 네트워킹 수요를 확인하는 자리이나 일반 참가 경로는 미표기(문의 02-120).",
    tier: 3,
    category: "산업",
    verified: "link-ok",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), '(예정) 2026-10-19~10-20 · 콘래드 서울(예정)' 표기 등은 10-05 교차확인분 유지. 참가 방식·비용 미표기라 link-ok 유지",
    jjFlag: "multi",
    curate: "watch",
  },
  {
    id: "modulabs-ai-for-science-1022",
    title: "수학 연구의 AI 혁신 — AI for Science/Engineering 연례 세미나 (리벨리온×모두의연구소)",
    date: "2026-10-22",
    dateLabel: "2026-10-22(목) 19:00–20:30",
    venue: "모두의연구소 강남캠퍼스(강남대로 324 디오슈페리움 2층), 서울 강남",
    region: "서울",
    host: "모두의연구소 커뮤니티 × 리벨리온 (호스트 SungTay · 이영빈)",
    price: "무료(선착순, 잔여 25석)",
    priceType: "free",
    link: "https://luma.com/6fx4hphm",
    linkType: "registration",
    point: "AI가 글쓰기·번역을 넘어 수학 문제를 이해하고 증명을 찾는 단계로 온 변화를 '자동 형식화(Autoformalization)'와 '자동 정리 증명(ATP)' 두 개념으로 푸는 리벨리온×모두의연구소 연례 강연. 90분 평일 저녁이라 AI 추론 능력의 최전선을 학술 관점에서 짚기 좋고, 같은 날 오후 OpenAI DevDay Exchange와 이어 붙일 수 있다.",
    tier: 3,
    category: "학술",
    verified: "verified",
    verifyNote: "Luma 페이지 재확인(HTTP 200, 2026-10-10 재검증) — start_at(UTC→KST 환산)·장소·호스트·무료·승인 불필요 불변, 잔여 25석",
    jjFlag: "weekday-eve",
    curate: "watch",
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
    point: "주제가 'AX 기반 디지털금융 전환'이다. 카카오페이 신원근 대표의 금융 AI 에이전트 기조연설, 에이전틱 AI와 금융의 미래, 토큰화·스테이블코인 세미나가 여의도에서 열려 증권사 실무와 가장 가깝다. 사전등록 10/21 마감.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소·주최·무료·사전등록 기간·세션 등은 10-05 교차확인분(공식 사이트+서울시 보도자료) 유지",
    jjFlag: "multi",
    curate: "pick",
  },
  {
    id: "k-cloud-seminar-1027",
    title: "K-클라우드 핵심 인프라 및 오픈소스 SW 기술 세미나",
    date: "2026-10-27",
    dateLabel: "2026-10-27(화) 14:00–17:30",
    venue: "코엑스 컨퍼런스룸(남) 307호, 서울 강남",
    region: "서울",
    host: "한국클라우드컴퓨팅연구조합",
    price: "무료(신청 9/30~10/26 14:00, 외부 링크 신청)",
    priceType: "free",
    link: "https://event-us.kr/cccr/event/136368",
    linkType: "registration",
    point: "한국클라우드컴퓨팅연구조합이 여는 K-클라우드 핵심 인프라·오픈소스 SW 기술 세미나. 클라우드·AI 인프라 흐름을 업계 단체 쪽에서 확인하는 평일 오후 자리이며, 세부 세션은 페이지에서 확인되지 않았다.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "이벤터스 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시(10/27 14:00–17:30)·장소(코엑스 컨퍼런스룸(남) 307호)·주최·무료·신청기간 교차확인. 세션 상세 미확인",
    jjFlag: "weekday-work",
    curate: "watch",
  },

  // ───────────── TIER 4 · 네트워킹 ─────────────
  {
    id: "awskrug-frontend-ai-1021",
    title: "AWSKRUG 프론트엔드 소모임 — AI 라이트닝 토크",
    date: "2026-10-21",
    dateLabel: "2026-10-21(수) 19:30–21:30",
    venue: "포스코타워 역삼 5층 리멤버앤컴퍼니(테헤란로 134), 서울 강남",
    region: "서울",
    host: "AWS 한국 사용자 모임(AWSKRUG) 프론트엔드 소모임 (Meetup)",
    price: "5,000원(신청 ~10/18 23:59, 입금순 확정, 정원 50)",
    priceType: "paid",
    link: "https://www.meetup.com/awskrug/events/316824282/",
    linkType: "community",
    point: "AI로 버전 마이그레이션하기, AI가 만든 E2E 테스트를 믿어도 되나, 비개발자가 AI로 프론트엔드를 만들며 배운 안전벨트 4가지 등 AI 실무 라이트닝 토크로 채운 평일 저녁 소모임. 비개발자 관점 발표가 있어 바이브코딩의 함정을 빠르게 점검하기 좋다.",
    tier: 4,
    category: "네트워킹",
    verified: "verified",
    verifyNote: "Meetup 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시·장소(포스코타워역삼), 본문 층·호스트 회사·참가비·신청 마감·정원·발표 주제 교차확인",
    jjFlag: "weekday-eve",
    curate: "watch",
  },

  // ───────────── 제외 (캘린더 비노출) ─────────────
  {
    id: "box2box-outbound-agent-1013",
    title: "[Box2Box] 아웃바운드 반복 업무를 끝내는 AI 에이전트 구축하기 (20명 한정 실전 워크숍)",
    date: "2026-10-13",
    dateLabel: "2026-10-13(화) 19:00–22:00",
    venue: "AB180(강남파이낸스플라자, 테헤란로 419), 서울 강남",
    region: "서울",
    host: "Box2Box 세일즈 클럽",
    price: "참가비 1만원(20명 한정 · 매진)",
    priceType: "paid",
    link: "https://luma.com/ruj0baqt",
    linkType: "registration",
    point: "타깃 리스트 발굴·콜드메일 작성·공고 모니터링 같은 아웃바운드 업무를 에이전트로 자동화하는 셋업 워크숍.",
    tier: 1,
    category: "에이전트",
    verified: "verified",
    verifyNote: "Luma 페이지 직접 확인(HTTP 200, 2026-10-10) — start_at(UTC→KST 환산)·장소·호스트·sold_out=true 교차확인. Luma 티켓 필드는 무료이나 본문에 노쇼 방지 참가비 1만원 명시",
    jjFlag: "weekday-eve",
    curate: "exclude",
    excludeReason: "세일즈 클럽 멤버 우선 20명 소규모 워크숍이며 이미 매진. 캘린더 비노출",
  },
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
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소 등은 10-05 교차확인분 유지",
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
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·호스트·매진 등은 10-05 교차확인분 유지",
    jjFlag: "weekend",
    curate: "exclude",
    excludeReason: "강사 개인이 여는 단일 도구 실습형 모임으로 강의 홍보 성격이 강하고 이미 매진. 캘린더 비노출",
  },
  {
    id: "ai-acceleration-day-1022",
    title: "AI Acceleration Day (Azwell AI)",
    date: "2026-10-22",
    dateLabel: "2026-10-22(목) 15:00–19:00",
    venue: "노보텔 앰배서더 서울 강남 보르도홀(봉은사로 130), 서울 강남",
    region: "서울",
    host: "Azwell AI (NVIDIA 국내 총판)",
    price: "무료",
    priceType: "free",
    link: "https://event-us.kr/azwellai/event/135306",
    linkType: "registration",
    point: "AI 인프라 도입 사례와 2026 투자 트렌드를 다루는 총판사 세미나.",
    tier: 3,
    category: "산업",
    verified: "verified",
    verifyNote: "이벤터스 페이지 직접 확인(HTTP 200, 2026-10-10) — JSON-LD 일시·장소(노보텔 앰배서더 서울 강남 보르도홀)·주최·무료 교차확인",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "GPU 총판사의 영업 성격 파트너 세미나. 캘린더 비노출",
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
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소·주최 등은 10-05 교차확인분 유지",
    jjFlag: "weekday-work",
    curate: "exclude",
    excludeReason: "MS 공식 행사가 아닌 파트너사 제품 판매형 세미나. 캘린더 비노출",
  },
  {
    id: "onoffmix-347929-1024",
    title: "[무료] 단 2일, 구글 ADK·n8n 활용 AI Agent 구축 (솔데스크)",
    date: "2026-10-24",
    dateEnd: "2026-10-25",
    dateLabel: "2026-10-24(토)~10-25(일)",
    venue: "솔데스크(관철동 13-13), 서울 종로",
    region: "서울",
    host: "솔데스크",
    price: "무료(고용보험 가입 재직자 국비 지원)",
    priceType: "free",
    link: "https://onoffmix.com/event/347929",
    linkType: "registration",
    point: "구글 ADK와 n8n으로 AI 에이전트를 구축하는 이틀짜리 재직자 훈련과정.",
    tier: 4,
    category: "교육",
    verified: "verified",
    verifyNote: "링크 재확인(HTTP 200, 2026-10-10 재검증), 일시·장소·주최·고용보험 국비 조건 등은 10-05 교차확인분 유지",
    jjFlag: "weekend",
    curate: "exclude",
    excludeReason: "고용보험 환급형 국비 교육(재직자 한정)으로 행사가 아닌 훈련과정. 캘린더 비노출",
  },
];

const pickCount = RADAR_EVENTS.filter((e) => e.curate === "pick").length;
const excludeCount = RADAR_EVENTS.filter((e) => e.curate === "exclude").length;

export const RADAR_META: RadarMeta = {
  generated: "2026-10-10",
  baseDate: "2026-10-12",
  rangeDays: 30,
  source:
    "2026-10-10 /radar --no-build --since 2026-10-12 --range 30 재생성 (윈도우 2026-10-12~11-11) — 직전 10-05 호 30건 중 경과 4건 삭제(AI FESTA 26·SVC The Leap·zerobase tech week II·AX 리더 공개강연). 잔존 26건 curl 재검증 전부 HTTP 200. 변경: 구글 Agentic AI Night 매진 → 추천에서 관심으로, AI Salon 장소 'SVC Seoul' 본문 확인, Cursor 해커톤 제목 'Cursor × Grok Bot Hackathon Seoul #4'로 바뀌고 일정표 공개, PyTorchKR Physical AI 신청 마감, 모두연 AI for Science 잔여 25석. 신규 12건(Luma discover 서울 geo API, dev-event README, 이벤터스 JSON-LD, Meetup, Partiful, 공식 페이지, WebSearch): Replit×OpenAI 해커톤(10/14), YUMITHON 헤이유미 MCP 해커톤(10/17), GitHub Copilot Dev Days 유저 그룹 회차(10/18), 한빛 AI 팀 하네스 세미나(10/20), AWSKRUG 프론트엔드 AI 라이트닝(10/21), COMMIT/CO GitHub 밋업(10/22, 신청 준비 중 link-ok), K-클라우드 세미나(10/27), MongoDB UG 서울 #6(10/29), c0mpiled-17 서울(11/9), NVIDIA AI Day Seoul(11/9~10, 추천) + 제외 2건(Box2Box 20명 매진 워크숍·Azwell AI 총판 세미나). 탈락(윈도우 밖): Intel AI Summit Seoul(11/12)·코리아 핀테크 위크(11/25~27)·PyTorch Day Korea(11/21)·MS AI Tour·웹케시 금융 AI Agent Conf·LinqAlpha·Anthropic Seoul Builder Summit(2025)·Claude Bloom(4/14)·Arize×DeepMind 밋업·Agent Forge 해커톤·Shiok in Seoul·AgentCamp Seoul·청년 AI 세미나(10/5). 탈락(일정 미공개): SK AI Summit 2026·네이버 DAN26·GDG DevFest Seoul·프롭테크 AI 비전 컨퍼런스('11월'만 표기)·Gemini Enterprise Champion OnBoard·WOOWACON 2026·Grok Bot 밋업(일정 재조정 중)·AI Tinkerers Seoul. 탈락(AI 직접성 낮음·홍보성): How to Win US Market with AI·MAGNIFIC After Hours·WORLD'S FAIR 코워킹·젠스파크 전자책 모임(매진)·WAKLY·Slush·PEN Ventures·맘엔텀·MBC AI콘텐츠랩·STO 최고위과정·AWSKRUG 성수 Kiro(10/28, 보안 절반·소규모)·인프라지스틱스 데이·팔로알토 세미나(벤더 행사). 기타: cometrue 행사(링크 응답 없음·벤더)·온라인 전용 공모전(KIC AI 에이전트 공모 등) 제외. 이월 확인: if(kakao) 행사장 주소·서울투자서밋 참가 경로·COMMIT/CO 신청 조건은 교차검증 미완(link-ok). NVIDIA AI Day 패스 가격은 페이지 미표기.",
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
