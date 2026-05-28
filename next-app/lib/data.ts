// SOGANG AIMBA 7th - static content source for the fixed Next design.

export type Section =
  | "AI-LLM"
  | "BUS"
  | "MBA"
  | "STARTUP"
  | "GOV"
  | "CAMPUS"
  | "EVENT"
  | "MUSEUM";

export interface FilterItem {
  code: Section | "ALL";
  label: string;
  count: number;
  href: string;
}

export const CURRENT_ISSUE_PATH = "/issues/vol_20260504.html";
export const PARTICIPATE_PATH = `${CURRENT_ISSUE_PATH}#participateSection`;
export const FUTURE_REPORT_PATH = "/issues/future-report.html";

export const FILTERS: FilterItem[] = [
  { code: "ALL", label: "전체보기", count: 5, href: "#archive" },
  { code: "AI-LLM", label: "AI · LLM", count: 4, href: `${CURRENT_ISSUE_PATH}#ai` },
  { code: "BUS", label: "Business · Strategy", count: 4, href: `${CURRENT_ISSUE_PATH}#business` },
  { code: "MBA", label: "MBA Insight", count: 4, href: `${CURRENT_ISSUE_PATH}#mba` },
  { code: "STARTUP", label: "Startup · VC · PE", count: 4, href: `${CURRENT_ISSUE_PATH}#startup` },
  { code: "GOV", label: "정부과제 · 지원", count: 6, href: `${CURRENT_ISSUE_PATH}#government` },
  { code: "CAMPUS", label: "AIMBA · Campus", count: 5, href: `${CURRENT_ISSUE_PATH}#campus` },
  { code: "EVENT", label: "AI Events", count: 8, href: `${CURRENT_ISSUE_PATH}#events` },
  { code: "MUSEUM", label: "S.A Museum", count: 50, href: "/issues/museum.html" },
];

export interface PulseTopic {
  topic: string;
  votes: number;
}

export const PULSE_TOPICS: PulseTopic[] = [
  { topic: "AI Agent가 실제 업무를 바꾸는 방식", votes: 0 },
  { topic: "스타트업 투자·정부지원사업 기회", votes: 0 },
  { topic: "AI 시대 MBA 커리어 전환 전략", votes: 0 },
  { topic: "부동산·RWA·금융 인프라 변화", votes: 0 },
];

export const PULSE_METRICS = [
  { key: "PUBLISHED", value: "5", sub: "누적 발간 호수" },
  { key: "CURRENT", value: "Vol.5", sub: "2026.05.04 최신호" },
  { key: "TOP SIGNAL", value: "AI", sub: "워크플로 전환" },
] as const;

export interface BriefIssue {
  vol: number;
  date: string;
  shortDate: string;
  section: Section;
  sectionLabel: string;
  title: string;
  headline: string;
  path: string;
  read: string;
  views: string;
  live?: boolean;
  tags: string[];
}

export const BRIEF_ISSUES: BriefIssue[] = [
  {
    vol: 5,
    date: "2026.05.04",
    shortDate: "05.04",
    section: "AI-LLM",
    sectionLabel: "AI · Workflow",
    title: "AI의 승부처가 모델에서 워크플로로 넘어갔다",
    headline:
      "GPT-5.5, 워크스페이스 에이전트, 엔터프라이즈 AI 재편, 핀테크 투자 회복이 맞물리며 AI가 조직 운영 레이어로 올라온 주간.",
    path: "/issues/vol_20260504.html",
    read: "12분",
    views: "최신",
    live: true,
    tags: ["AI", "에이전트", "워크플로", "엔터프라이즈", "핀테크", "RWA", "창업지원"],
  },
  {
    vol: 4,
    date: "2026.04.28",
    shortDate: "04.28",
    section: "BUS",
    sectionLabel: "Business",
    title: "AI 승부처, 이제 모델보다 현업 전환 속도다",
    headline:
      "기술 뉴스의 승부가 모델 발표에서 끝나지 않고, 누가 더 빨리 조직 안으로 심는가로 이동한 한 주.",
    path: "/issues/vol_20260428.html",
    read: "10분",
    views: "archive",
    tags: ["AI", "비즈니스", "AIMBA", "조직", "현업전환", "MBA"],
  },
  {
    vol: 3,
    date: "2026.04.13",
    shortDate: "04.13",
    section: "STARTUP",
    sectionLabel: "Startup",
    title: "AI 시장, 확장보다 버티는 구조에 점수 주기 시작",
    headline:
      "IPO, 데이터센터, 보안 이슈가 맞물리며 AI 시장이 성장 서사보다 생존 구조를 묻기 시작한 주간.",
    path: "/issues/vol_20260413.html",
    read: "9분",
    views: "archive",
    tags: ["AI", "창업", "비즈니스", "IPO", "데이터센터", "보안"],
  },
  {
    vol: 2,
    date: "2026.04.04",
    shortDate: "04.04",
    section: "STARTUP",
    sectionLabel: "Trend",
    title: "기술과 자본, 다시 한 배를 탔다",
    headline:
      "Gemma 4, 에이전틱 AI, 글로벌 VC 확대, RWA 급성장이 겹치며 기술 뉴스가 다시 자본의 언어로 번역된 주간.",
    path: "/issues/vol_20260404.html",
    read: "9분",
    views: "archive",
    tags: ["트렌드", "창업지원", "에이전틱AI", "Gemma", "VC", "RWA"],
  },
  {
    vol: 1,
    date: "2026.03.28",
    shortDate: "03.28",
    section: "MBA",
    sectionLabel: "Productivity",
    title: "1인 생산성 폭발, 경쟁력의 공식이 바뀌기 시작했다",
    headline:
      "Claude Opus 4, 1인 소프트웨어 팩토리, RWA 확대가 겹치며 개인의 생산성이 조직 경쟁력을 다시 정의하기 시작한 첫 장면.",
    path: "/issues/vol_20260328.html",
    read: "9분",
    views: "archive",
    tags: ["트렌드", "창업지원", "Claude", "Opus", "1인", "RWA"],
  },
];

export const ARCHIVE_TIMELINE = BRIEF_ISSUES.map((issue) => ({
  vol: issue.vol,
  shortDate: issue.shortDate,
  path: issue.path,
}));

export interface BriefArticle {
  title: string;
  desc: string;
  source: string;
  href: string;
}

export interface BriefSection {
  id: string;
  label: string;
  code: string;
  narrative: string;
  articles: BriefArticle[];
}

export const CURRENT_BRIEF = {
  vol: 5,
  dateLabel: "2026년 5월 4일",
  title: "AI의 승부처가 모델에서 워크플로로 넘어갔다",
  subtitle:
    "AI · Business · MBA · Startup · Government · Campus를 경영자 관점에서 해석한 AIMBA Weekly Briefing.",
  memoLines: [
    "이번 주는 AI 경쟁의 기준이 모델 출시 자체보다 누가 더 깊게 업무 흐름을 장악하느냐로 이동한 장면이 선명했습니다.",
    "에이전트형 실행, 엔터프라이즈 재설계, 핀테크·RWA 자본 회복이 동시에 나타나며 시장은 기능보다 실행 구조와 현업 전환 속도를 더 중요하게 보기 시작했습니다.",
  ],
  conclusion:
    "결국 다음 승자는 더 화려한 모델이 아니라, AI를 더 빨리 반복 가능한 업무 시스템으로 바꾸는 팀입니다.",
};

export const BRIEF_SECTIONS: BriefSection[] = [
  {
    id: "ai",
    label: "AI · LLM",
    code: "AI-LLM",
    narrative:
      "이번 주 AI 섹션의 핵심은 모델 성능 경쟁이 아니라 에이전트형 실행력 경쟁입니다. AIMBA 원우 관점에서는 어떤 모델이 더 똑똑한가보다, 내 업무 흐름에 얼마나 깊게 붙는가가 실제 생산성 격차를 만들기 시작했습니다.",
    articles: [
      {
        title: "Introducing GPT-5.5",
        desc: "복합 업무·코딩·리서치·컴퓨터 사용을 한 번에 수행하는 차세대 작업형 모델 공개.",
        source: "OpenAI",
        href: "https://openai.com/index/introducing-gpt-5-5/",
      },
      {
        title: "Introducing workspace agents in ChatGPT",
        desc: "조직 권한 안에서 장기 실행형 업무를 맡기는 공유 에이전트 개념 제시.",
        source: "OpenAI",
        href: "https://openai.com/index/introducing-workspace-agents-in-chatgpt/",
      },
      {
        title: "Introducing ChatGPT Images 2.0",
        desc: "이미지 생성 품질을 끌어올리며 멀티모달 활용 범위를 넓힌 신규 이미지 스택 발표.",
        source: "OpenAI",
        href: "https://openai.com/index/introducing-chatgpt-images-2-0/",
      },
      {
        title: "Introducing Claude Design by Anthropic Labs",
        desc: "Claude를 활용해 디자인·프로토타입·슬라이드 제작까지 확장하는 실험 제품 공개.",
        source: "Anthropic",
        href: "https://www.anthropic.com/news",
      },
    ],
  },
  {
    id: "business",
    label: "비즈니스 혁신",
    code: "BUSINESS",
    narrative:
      "AI가 더 이상 개별 툴이 아니라 조직 운영체계의 기본 레이어로 들어오고 있습니다. 경쟁력은 AI를 써보는 회사가 아니라 AI 중심으로 프로세스를 다시 짠 회사로 이동합니다.",
    articles: [
      {
        title: "The next phase of enterprise AI",
        desc: "AI를 전사 공통 인텔리전스 레이어로 재편하는 엔터프라이즈 전략.",
        source: "OpenAI",
        href: "https://openai.com/index/next-phase-of-enterprise-ai/",
      },
      {
        title: "Scaling Codex to enterprises worldwide",
        desc: "대기업의 코드리뷰·사고대응·업무자동화 확산 사례 공개.",
        source: "OpenAI",
        href: "https://openai.com/index/scaling-codex-to-enterprises-worldwide/",
      },
      {
        title: "Just how big is the AI investment wave?",
        desc: "AI 투자금이 데이터센터·전력·칩 등 물리 인프라로 집중되는 흐름 분석.",
        source: "Reuters",
        href: "https://www.reuters.com/graphics/USA-ECONOMY/AI-INVESTMENT/gkvlqbgxkpb/",
      },
      {
        title: "OpenAI acquires TBPN",
        desc: "AI 커뮤니케이션·미디어 접점을 강화하기 위한 OpenAI의 인수 사례.",
        source: "OpenAI",
        href: "https://openai.com/index/openai-acquires-tbpn/",
      },
    ],
  },
  {
    id: "mba",
    label: "MBA",
    code: "MBA",
    narrative:
      "기술을 많이 아는 사람보다 기술 변화의 조직적 의미를 해석하는 사람의 가치가 커지고 있습니다. 원우 경쟁력은 기술 신호를 사업 판단과 커리어 액션으로 번역하는 능력에서 벌어집니다.",
    articles: [
      {
        title: "What 81,000 people want from AI",
        desc: "대규모 사용자 조사로 AI에 대한 기대·불안·실사용 니즈를 정리.",
        source: "Anthropic",
        href: "https://www.anthropic.com/news",
      },
      {
        title: "2025 AIMBA 브로슈어",
        desc: "서강대 AIMBA의 교육 방향과 AI·빅데이터 기반 커리큘럼 정리.",
        source: "서강대 경영대",
        href: "https://sbs.sogang.ac.kr/sites/sbs/files/2025%20AIMBA%20%EB%B8%8C%EB%A1%9C%EC%8A%88%EC%96%B4.pdf",
      },
      {
        title: "2026 Build with AI: Hands-on Campus 행사참석 안내",
        desc: "AI 실습 중심 캠퍼스 행사로 실전형 AI 학습 루프 설계에 참고할 공지.",
        source: "SW중심대학사업단",
        href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
      },
      {
        title: "2026학년도 컴퓨터공학과 콜로퀴엄 안내",
        desc: "AI/컴퓨터공학 최신 연구 논점을 접할 수 있는 학과 콜로퀴엄 공지.",
        source: "서강대 인공지능학과",
        href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
      },
    ],
  },
  {
    id: "startup",
    label: "창업 · VC · PE",
    code: "STARTUP",
    narrative:
      "자본은 다시 움직이되 아무 데나 가지 않습니다. 핀테크, AI 인프라, 토큰화처럼 명확한 실사용과 시장 구조 변화가 있는 영역에 자금이 몰리고 있습니다.",
    articles: [
      {
        title: "19 US fintech startups have raised over $50M in 2025 so far",
        desc: "글로벌 핀테크 투자 회복과 미국 내 대형 라운드 증가 흐름.",
        source: "TechCrunch",
        href: "https://techcrunch.com/2025/04/23/19-us-fintech-startups-have-raised-over-50m-in-2025-so-far/",
      },
      {
        title: "Tokenized Real Estate Market to Reach $4T by 2035",
        desc: "부동산 토큰화 시장이 2035년 4조달러 규모로 커질 수 있다는 전망.",
        source: "CoinDesk",
        href: "https://www.coindesk.com/markets/2025/04/24/global-tokenized-real-estate-market-could-explode-to-usd4t-by-2035-deloitte-forecasts",
      },
      {
        title: "Just how big is the AI investment wave?",
        desc: "AI 스타트업 조달액과 인프라 CAPEX가 빠르게 확대되는 흐름.",
        source: "Reuters",
        href: "https://www.reuters.com/graphics/USA-ECONOMY/AI-INVESTMENT/gkvlqbgxkpb/",
      },
      {
        title: "OpenAI acquires TBPN",
        desc: "플랫폼·미디어·커뮤니티 접점까지 흡수하는 AI 생태계 확장형 M&A 사례.",
        source: "OpenAI",
        href: "https://openai.com/index/openai-acquires-tbpn/",
      },
    ],
  },
];

export const SUPPORT_GROUPS = [
  {
    id: "government",
    title: "정부과제 · 지원",
    note:
      "이번 주 추천은 관광 데이터·AI 활용 사업과 HL그룹 오픈이노베이션입니다. 단순 지원금보다 대기업 PoC·데이터 실증이 붙는 공고를 우선적으로 보시는 게 효율적입니다.",
    items: [
      "2026년 HL그룹 Smart Tech 오픈이노베이션 지원사업",
      "2026 관광기업 데이터·AI 활용 지원 사업",
      "2026년 교보생명 INNOSTAGE 오픈이노베이션",
      "2026년 부산광역시 공공데이터·AI 활용 창업경진대회",
      "전국민 AI 경진대회 · 인공지능 루키 대회 안내",
      "차세대반도체연계전공 및 ELITE 장학생 모집",
    ],
  },
  {
    id: "campus",
    title: "서강대 · Campus",
    note:
      "이번 주 캠퍼스 포인트는 윤송이 연사 라인과 Build with AI 행사입니다. 단순 청강보다 내 업에 바로 붙일 수 있는 실습/케이스 중심으로 참여 우선순위를 잡는 게 좋겠습니다.",
    items: [
      "2026 Build with AI: Hands-on Campus 행사참석 안내",
      "2026학년도 컴퓨터공학과 콜로퀴엄 안내",
      "[생각의 창 멘토링센터] 2026학년도 특별강연 안내",
      "제443회 글로벌 이슈 특강 안내",
      "AI특강: AI시대 가장 아름다운 미래(윤송이) 안내",
    ],
  },
];

export const EVENTS = [
  { date: "4월 15일", day: "수", title: "Physical AI 산업 전망 컨퍼런스", where: "여의도 FKI타워 컨퍼런스센터", tag: "컨퍼런스" },
  { date: "4월 17일", day: "금", title: "AI+TECH 2026", where: "온라인/오프라인 하이브리드", tag: "컨퍼런스" },
  { date: "4월 23일", day: "목", title: "금융AI, AI 에이전트 컨퍼런스", where: "FKI TOWER 그랜드볼룸 1", tag: "세미나" },
  { date: "4월 23일", day: "목", title: "2026 전북 IT 컨퍼런스", where: "전북 지역", tag: "보안" },
  { date: "4월 29일", day: "수", title: "2026 AI 서비스 트렌드 컨퍼런스", where: "포스코타워 역삼 이벤트홀", tag: "트렌드" },
  { date: "6월 25-26일", day: "목-금", title: "AAiCON 2026", where: "장소 미정", tag: "AI" },
  { date: "8월 19-21일", day: "수-금", title: "AI 서밋 서울 앤 엑스포", where: "코엑스 그랜드볼룸", tag: "글로벌" },
  { date: "4월 17일", day: "금", title: "제8회 부산 게임 개발자 컨퍼런스", where: "부산 글로벌게임센터", tag: "게임" },
];

export interface BookItem {
  title: string;
  author: string;
  recommendedBy: string;
  c1: string;
  c2: string;
}

export const BOOKS: BookItem[] = [
  { title: "The Coming Wave", author: "Mustafa Suleyman", recommendedBy: "이지원 7기", c1: "#3a4a5c", c2: "#22303f" },
  { title: "실리콘밸리의 팀장들", author: "Kim Scott", recommendedBy: "박상민 7기", c1: "#c08c4f", c2: "#7d5728" },
  { title: "Prediction Machines", author: "Ajay Agrawal", recommendedBy: "정수현 7기", c1: "#8B0029", c2: "#5e001b" },
  { title: "Co-Intelligence", author: "Ethan Mollick", recommendedBy: "김도훈 7기", c1: "#1a1714", c2: "#3d342d" },
  { title: "제로 투 원", author: "Peter Thiel", recommendedBy: "이서연 7기", c1: "#e7d6b8", c2: "#b89967" },
  { title: "Designing Data-Intensive", author: "Martin Kleppmann", recommendedBy: "최재현 7기", c1: "#5b6e9a", c2: "#3a4a5c" },
];

export interface MuseumWork {
  index: string;
  artist: string;
  work: string;
  year: string;
  medium: string;
  collection: string;
  mood: string;
  note: string;
  image?: string;
  sourceUrl: string;
  license: string;
  onView?: boolean;
  tone: [string, string];
}

export const MUSEUM_WORKS: MuseumWork[] = [
  {
    index: "01",
    artist: "Vincent van Gogh",
    work: "The Starry Night",
    year: "1889",
    medium: "Oil on canvas",
    collection: "Museum of Modern Art (MoMA)",
    mood: "swirling night",
    note: "밤하늘이 소용돌이치듯 살아 움직이는, 반 고흐 생레미 요양원 시절의 대표작입니다. 불안과 생명력이 한 화면에 공존합니다.",
    image: "/assets/museum/vangogh-starry-night.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    onView: true,
    tone: ["#1c2a4a", "#e0b94e"],
  },
  {
    index: "02",
    artist: "Jan van Eyck",
    work: "The Arnolfini Portrait",
    year: "1434",
    medium: "Oil on oak panel",
    collection: "The National Gallery, London",
    mood: "meticulous detail",
    note: "거울과 촛불까지 정밀하게 그려낸 초기 유화의 정점입니다. 한 방 안에 결혼의 서약을 응축했습니다.",
    image: "/assets/museum/vaneyck-arnolfini.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Van_Eyck_-_Arnolfini_Portrait.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a3a2e", "#c8a96a"],
  },
  {
    index: "03",
    artist: "Sandro Botticelli",
    work: "The Birth of Venus",
    year: "c. 1485",
    medium: "Tempera on canvas",
    collection: "Uffizi Gallery",
    mood: "mythic grace",
    note: "조개를 타고 바다에서 태어난 비너스를 그린 르네상스의 상징입니다. 선의 우아함이 화면 전체를 흐릅니다.",
    image: "/assets/museum/botticelli-birth-of-venus.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3f6f78", "#e3c98f"],
  },
  {
    index: "04",
    artist: "Leonardo da Vinci",
    work: "Mona Lisa",
    year: "c. 1503-1519",
    medium: "Oil on poplar panel",
    collection: "Musée du Louvre",
    mood: "enigmatic calm",
    note: "세계에서 가장 유명한 초상화입니다. 스푸마토 기법으로 윤곽을 흐려 미소의 정체를 끝내 알 수 없게 만들었습니다.",
    image: "/assets/museum/leonardo-mona-lisa.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5b4a2e", "#9c8253"],
  },
  {
    index: "05",
    artist: "Michelangelo",
    work: "The Creation of Adam",
    year: "c. 1512",
    medium: "Fresco",
    collection: "Sistine Chapel, Vatican",
    mood: "divine spark",
    note: "신과 인간의 손가락이 맞닿기 직전을 그린 시스티나 천장화의 한 장면입니다. 닿지 않은 간극이 오히려 긴장을 만듭니다.",
    image: "/assets/museum/michelangelo-creation-of-adam.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#8a6a3a", "#d8c79a"],
  },
  {
    index: "06",
    artist: "Raphael",
    work: "The School of Athens",
    year: "1509-1511",
    medium: "Fresco",
    collection: "Apostolic Palace, Vatican",
    mood: "classical reason",
    note: "플라톤과 아리스토텔레스를 중심으로 고대 철학자들을 한자리에 모은 르네상스 인문주의의 결정체입니다.",
    image: "/assets/museum/raphael-school-of-athens.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a5a3a", "#b9a06a"],
  },
  {
    index: "07",
    artist: "Pieter Bruegel the Elder",
    work: "The Hunters in the Snow",
    year: "1565",
    medium: "Oil on panel",
    collection: "Kunsthistorisches Museum",
    mood: "winter stillness",
    note: "눈 덮인 마을로 사냥꾼들이 돌아오는 겨울 풍경입니다. 높은 시점에서 계절과 노동을 한눈에 담았습니다.",
    image: "/assets/museum/bruegel-hunters-in-snow.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5c6b78", "#cfd6dc"],
  },
  {
    index: "08",
    artist: "Caravaggio",
    work: "The Calling of Saint Matthew",
    year: "1599-1600",
    medium: "Oil on canvas",
    collection: "San Luigi dei Francesi, Rome",
    mood: "dramatic light",
    note: "어둠을 가르는 한 줄기 빛으로 부름의 순간을 연출한 바로크의 대표작입니다. 빛이 곧 서사입니다.",
    image: "/assets/museum/caravaggio-st-matthew.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Calling_of_Saint_Matthew_by_Carvaggio.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1a140e", "#c89a4a"],
  },
  {
    index: "09",
    artist: "Rembrandt van Rijn",
    work: "The Night Watch",
    year: "1642",
    medium: "Oil on canvas",
    collection: "Rijksmuseum",
    mood: "civic drama",
    note: "정적인 단체 초상화를 움직이는 한 장면으로 바꾼 렘브란트의 야심작입니다. 빛과 그림자로 인물에 위계를 부여했습니다.",
    image: "/assets/museum/rembrandt-night-watch.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Night_Watch_-_HD.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a2018", "#caa24a"],
  },
  {
    index: "10",
    artist: "Diego Velázquez",
    work: "Las Meninas",
    year: "1656",
    medium: "Oil on canvas",
    collection: "Museo del Prado",
    mood: "layered gaze",
    note: "화가 자신, 공주, 거울 속 왕과 왕비까지 시선이 겹겹이 얽힌 회화의 수수께끼입니다. 보는 사람마저 그림 안으로 끌어들입니다.",
    image: "/assets/museum/velazquez-las-meninas.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a3a2e", "#b59a6a"],
  },
  {
    index: "11",
    artist: "Johannes Vermeer",
    work: "The Milkmaid",
    year: "c. 1658",
    medium: "Oil on canvas",
    collection: "Rijksmuseum",
    mood: "quiet labor",
    note: "우유를 따르는 평범한 순간을 성스러운 정적으로 끌어올린 그림입니다. 창으로 들어오는 빛이 주인공입니다.",
    image: "/assets/museum/vermeer-milkmaid.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a6a", "#d8c07a"],
  },
  {
    index: "12",
    artist: "Rembrandt van Rijn",
    work: "Self-Portrait",
    year: "1659",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "honest aging",
    note: "노년의 자신을 가감 없이 응시한 자화상입니다. 화려함 대신 세월과 내면을 그렸습니다.",
    image: "/assets/museum/rembrandt-self-portrait.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a2c20", "#b89060"],
  },
  {
    index: "13",
    artist: "Johannes Vermeer",
    work: "View of Delft",
    year: "c. 1660-1661",
    medium: "Oil on canvas",
    collection: "Mauritshuis",
    mood: "luminous city",
    note: "비 갠 뒤의 델프트를 빛으로 포착한 풍경화입니다. 도시 전체가 한순간의 공기를 머금고 있습니다.",
    image: "/assets/museum/vermeer-view-of-delft.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:View_of_Delft%2C_by_Johannes_Vermeer.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6a78", "#cdbf8a"],
  },
  {
    index: "14",
    artist: "Johannes Vermeer",
    work: "Woman Holding a Balance",
    year: "c. 1664",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "poised stillness",
    note: "저울이 균형을 찾는 찰나를 그린 정밀한 실내화입니다. 평정과 절제의 미덕을 조용히 말합니다.",
    image: "/assets/museum/vermeer-woman-balance.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3040", "#c9b27a"],
  },
  {
    index: "15",
    artist: "Johannes Vermeer",
    work: "Girl with a Pearl Earring",
    year: "c. 1665",
    medium: "Oil on canvas",
    collection: "Mauritshuis",
    mood: "turning glance",
    note: "어둠 속에서 돌아보는 소녀와 빛나는 진주 귀고리. '북구의 모나리자'로 불리는 신비로운 초상입니다.",
    image: "/assets/museum/vermeer-pearl-earring.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1665_Girl_with_a_Pearl_Earring.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1c2630", "#d9c27e"],
  },
  {
    index: "16",
    artist: "Jeong Seon (정선)",
    work: "Inwangjesaekdo (인왕제색도)",
    year: "1751",
    medium: "Ink on paper",
    collection: "Leeum Museum / National Treasure",
    mood: "misty mountain",
    note: "비 갠 뒤의 인왕산을 진경산수로 담은 겸재 정선의 대표작이자 국보입니다. 실제 풍경을 조선의 붓으로 재해석했습니다.",
    image: "/assets/museum/jeongseon-inwang.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Inwangjesaekdo.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3a3a", "#9aa0a6"],
  },
  {
    index: "17",
    artist: "Katsushika Hokusai",
    work: "The Great Wave off Kanagawa",
    year: "c. 1831",
    medium: "Woodblock print",
    collection: "Various collections",
    mood: "surging wave",
    note: "거대한 파도 너머로 후지산이 보이는, 세계에서 가장 유명한 목판화입니다. 자연의 힘과 인간의 작음을 한 화면에 담았습니다.",
    image: "/assets/museum/hokusai-great-wave.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tsunami_by_hokusai_19th_century.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1d4e6b", "#e7e2cf"],
  },
  {
    index: "18",
    artist: "Katsushika Hokusai",
    work: "Fine Wind, Clear Morning (Red Fuji)",
    year: "c. 1831",
    medium: "Woodblock print",
    collection: "Various collections",
    mood: "clear dawn",
    note: "맑은 새벽 붉게 물든 후지산을 단순한 색면으로 표현했습니다. 절제된 구성의 힘이 돋보입니다.",
    image: "/assets/museum/hokusai-red-fuji.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_Fuji_southern_wind_clear_morning.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a3a2a", "#3a6a8a"],
  },
  {
    index: "19",
    artist: "Utagawa Hiroshige",
    work: "Sudden Shower over Shin-Ohashi Bridge",
    year: "1857",
    medium: "Woodblock print",
    collection: "Various collections",
    mood: "falling rain",
    note: "다리 위로 갑자기 쏟아지는 소나기를 가는 선으로 그렸습니다. 훗날 반 고흐가 모사했을 만큼 서구에 영향을 주었습니다.",
    image: "/assets/museum/hiroshige-sudden-shower.jpg",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?search=Hiroshige%20Atake%20sudden%20shower%20Shin-Ohashi",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4a5a", "#c9b88a"],
  },
  {
    index: "20",
    artist: "Francisco Goya",
    work: "The Third of May 1808",
    year: "1814",
    medium: "Oil on canvas",
    collection: "Museo del Prado",
    mood: "stark martyrdom",
    note: "처형 직전 두 팔을 든 남자를 빛으로 부각한 전쟁 고발화입니다. 근대 회화의 양심을 연 작품으로 꼽힙니다.",
    image: "/assets/museum/goya-third-of-may.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a2018", "#c2a24a"],
  },
  {
    index: "21",
    artist: "Caspar David Friedrich",
    work: "Wanderer above the Sea of Fog",
    year: "c. 1818",
    medium: "Oil on canvas",
    collection: "Kunsthalle Hamburg",
    mood: "sublime solitude",
    note: "안개의 바다를 내려다보는 한 사람의 뒷모습. 자연 앞에 선 인간의 고독을 그린 낭만주의의 상징입니다.",
    image: "/assets/museum/friedrich-wanderer.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6470", "#d2c5a8"],
  },
  {
    index: "22",
    artist: "John Constable",
    work: "The Hay Wain",
    year: "1821",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "pastoral calm",
    note: "강을 건너는 건초 수레와 영국 시골의 한낮을 담은 풍경화입니다. 평범한 일상을 서정으로 끌어올렸습니다.",
    image: "/assets/museum/constable-hay-wain.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Constable_The_Hay_Wain.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6a3a", "#cdbf8a"],
  },
  {
    index: "23",
    artist: "J. M. W. Turner",
    work: "The Fighting Temeraire",
    year: "1838",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "golden farewell",
    note: "퇴역하는 범선이 증기선에 끌려가는 황혼의 장면입니다. 한 시대가 저무는 순간을 빛으로 애도합니다.",
    image: "/assets/museum/turner-fighting-temeraire.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6a4a2a", "#e0b25a"],
  },
  {
    index: "24",
    artist: "Édouard Manet",
    work: "Le Déjeuner sur l'herbe",
    year: "1863",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "bold provocation",
    note: "정장 차림의 남자들 사이 나체의 여인을 배치해 당시 살롱에 충격을 준 그림입니다. 근대 회화의 시작을 알렸습니다.",
    image: "/assets/museum/manet-dejeuner.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4a2e", "#c2a86a"],
  },
  {
    index: "25",
    artist: "Édouard Manet",
    work: "Olympia",
    year: "1863",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "direct gaze",
    note: "관객을 똑바로 응시하는 여인으로 전통적 누드의 관습을 깨뜨린 도발적 작품입니다.",
    image: "/assets/museum/manet-olympia.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a2420", "#cbb07a"],
  },
  {
    index: "26",
    artist: "Claude Monet",
    work: "Woman with a Parasol",
    year: "1875",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "breezy light",
    note: "바람에 날리는 베일과 풀밭을 빠른 붓질로 담았습니다. 한순간의 빛과 움직임을 포착한 인상주의의 전형입니다.",
    image: "/assets/museum/monet-woman-with-parasol.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6a8ab0", "#e0d090"],
  },
  {
    index: "27",
    artist: "Claude Monet",
    work: "Impression, Sunrise",
    year: "1872",
    medium: "Oil on canvas",
    collection: "Musée Marmottan Monet",
    mood: "hazy harbor",
    note: "'인상주의'라는 이름이 바로 이 그림에서 나왔습니다. 항구의 아침 안개를 빠른 붓질로 포착했습니다.",
    image: "/assets/museum/monet-impression-sunrise.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a6a", "#e08a4a"],
  },
  {
    index: "28",
    artist: "Edgar Degas",
    work: "L'Absinthe",
    year: "1876",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "urban melancholy",
    note: "카페에 멍하니 앉은 두 사람으로 도시의 고독을 그린 작품입니다. 일상의 권태를 정직하게 담았습니다.",
    image: "/assets/museum/degas-absinthe.jpg",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?search=Degas%20In%20a%20Cafe%20L%27Absinthe",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6a5a3a", "#bca87a"],
  },
  {
    index: "29",
    artist: "Pierre-Auguste Renoir",
    work: "Bal du moulin de la Galette",
    year: "1876",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "dappled joy",
    note: "야외 무도회의 햇빛과 흥겨움을 반짝이는 색점으로 담았습니다. 인상주의의 행복한 순간입니다.",
    image: "/assets/museum/renoir-moulin-galette.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a5a6a", "#e0c07a"],
  },
  {
    index: "30",
    artist: "Gustave Caillebotte",
    work: "Paris Street; Rainy Day",
    year: "1877",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "rainy boulevard",
    note: "비 오는 파리 거리를 사진처럼 정밀하게 그린 작품입니다. 근대 도시의 새로운 풍경을 포착했습니다.",
    image: "/assets/museum/caillebotte-rainy-day.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6470", "#c9bda0"],
  },
  {
    index: "31",
    artist: "Pierre-Auguste Renoir",
    work: "Luncheon of the Boating Party",
    year: "1880-1881",
    medium: "Oil on canvas",
    collection: "The Phillips Collection",
    mood: "summer leisure",
    note: "강가 테라스에서의 여유로운 오찬을 그린 작품입니다. 빛과 대화, 여름 공기가 함께 살아 있습니다.",
    image: "/assets/museum/renoir-boating-party.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a7a5a", "#e0c488"],
  },
  {
    index: "32",
    artist: "Édouard Manet",
    work: "A Bar at the Folies-Bergère",
    year: "1882",
    medium: "Oil on canvas",
    collection: "Courtauld Gallery",
    mood: "mirrored solitude",
    note: "화려한 술집 한가운데 선 여종업원의 공허한 표정을 거울로 비춘 마네의 마지막 대작입니다.",
    image: "/assets/museum/manet-folies-bergere.jpg",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?search=Manet%20A%20Bar%20at%20the%20Folies-Bergere",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3026", "#c2a45a"],
  },
  {
    index: "33",
    artist: "Georges Seurat",
    work: "A Sunday on La Grande Jatte",
    year: "1884-1886",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "pointillist calm",
    note: "무수한 점으로만 화면을 채운 점묘법의 기념비입니다. 공원의 일요일을 과학적 색채로 재구성했습니다.",
    image: "/assets/museum/seurat-grande-jatte.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a3a", "#d8c87a"],
  },
  {
    index: "34",
    artist: "Vincent van Gogh",
    work: "Sunflowers",
    year: "1888",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "radiant yellow",
    note: "노랑만으로 생명력을 폭발시킨 반 고흐의 연작입니다. 시들어가는 꽃에서도 강렬한 에너지를 끌어냈습니다.",
    image: "/assets/museum/vangogh-sunflowers.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_127.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a5a1a", "#e7c23a"],
  },
  {
    index: "35",
    artist: "Vincent van Gogh",
    work: "The Bedroom",
    year: "1889",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "restful color",
    note: "아를의 자기 방을 평면적 색면으로 그렸습니다. 휴식을 표현하려 일부러 단순한 구도를 택했습니다.",
    image: "/assets/museum/vangogh-bedroom.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6a4a", "#d8b25a"],
  },
  {
    index: "36",
    artist: "Vincent van Gogh",
    work: "Irises",
    year: "1889",
    medium: "Oil on canvas",
    collection: "J. Paul Getty Museum",
    mood: "restless blue",
    note: "요양원 정원의 붓꽃을 생명력 넘치는 선으로 그렸습니다. 한 송이 흰 꽃이 무리 속에서 홀로 빛납니다.",
    image: "/assets/museum/vangogh-irises.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Irises_%281889%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a4a3a", "#5a7ab0"],
  },
  {
    index: "37",
    artist: "Paul Cézanne",
    work: "The Card Players",
    year: "1890-1895",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "grounded focus",
    note: "카드놀이에 몰입한 두 사람을 견고한 구조로 그렸습니다. 형태의 본질을 탐구한 세잔의 대표 연작입니다.",
    image: "/assets/museum/cezanne-card-players.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paul_C%C3%A9zanne%2C_Les_joueurs_de_carte_%281892-95%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a4a3a", "#a89a6a"],
  },
  {
    index: "38",
    artist: "Claude Monet",
    work: "Grainstack (Sunset)",
    year: "1890-1891",
    medium: "Oil on canvas",
    collection: "Museum of Fine Arts, Boston",
    mood: "light study",
    note: "같은 건초더미를 시간과 빛에 따라 반복해 그린 연작입니다. 대상보다 '빛 그 자체'가 주제입니다.",
    image: "/assets/museum/monet-haystack.jpg",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?search=Monet%20Grainstack%20Sunset%20Haystack",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a4a2a", "#e0b45a"],
  },
  {
    index: "39",
    artist: "Mary Cassatt",
    work: "The Child's Bath",
    year: "1893",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "tender care",
    note: "아이를 씻기는 일상의 친밀함을 위에서 내려다본 구도로 담았습니다. 모성의 순간을 섬세하게 포착했습니다.",
    image: "/assets/museum/cassatt-childs-bath.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6a7a8a", "#d8c0a0"],
  },
  {
    index: "40",
    artist: "Henri de Toulouse-Lautrec",
    work: "At the Moulin Rouge",
    year: "1892-1895",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "nightlife glow",
    note: "파리 밤 문화의 화려함과 권태를 동시에 담은 작품입니다. 인공조명 아래 인물들의 표정이 강렬합니다.",
    image: "/assets/museum/lautrec-moulin-rouge.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a2a3a", "#c2a050"],
  },
  {
    index: "41",
    artist: "Paul Cézanne",
    work: "Mont Sainte-Victoire",
    year: "c. 1902-1904",
    medium: "Oil on canvas",
    collection: "Various collections",
    mood: "structured nature",
    note: "같은 산을 반복해 그리며 형태를 면으로 분해한 연작입니다. 입체파로 가는 길을 연 그림입니다.",
    image: "/assets/museum/cezanne-mont-sainte-victoire.jpg",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?search=Cezanne%20Mont%20Sainte-Victoire%201904",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a6a6a", "#cdb884"],
  },
  {
    index: "42",
    artist: "Paul Gauguin",
    work: "Where Do We Come From? What Are We? Where Are We Going?",
    year: "1897-1898",
    medium: "Oil on canvas",
    collection: "Museum of Fine Arts, Boston",
    mood: "philosophical reverie",
    note: "탄생부터 죽음까지 인간의 일생을 한 화면에 펼친 고갱의 철학적 대작입니다. 제목 자체가 질문입니다.",
    image: "/assets/museum/gauguin-where-do-we-come-from.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paul_Gauguin_-_D%27ou_venons-nous.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a4a", "#c2a05a"],
  },
  {
    index: "43",
    artist: "James McNeill Whistler",
    work: "Whistler's Mother (Arrangement in Grey and Black No.1)",
    year: "1871",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "austere harmony",
    note: "옆모습으로 앉은 어머니를 회색과 검정의 조화로 그렸습니다. 인물화를 색과 형태의 '배열'로 본 작품입니다.",
    image: "/assets/museum/whistler-mother.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Whistlers_Mother_high_res.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a2a2a", "#b0a890"],
  },
  {
    index: "44",
    artist: "Edvard Munch",
    work: "The Scream",
    year: "1893",
    medium: "Tempera and pastel on cardboard",
    collection: "National Gallery of Norway",
    mood: "raw anxiety",
    note: "붉게 타오르는 하늘 아래 비명을 지르는 형상입니다. 현대인의 불안을 가장 직접적으로 표현한 그림입니다.",
    image: "/assets/museum/munch-the-scream.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a3a1a", "#e0a83a"],
  },
  {
    index: "45",
    artist: "Gustav Klimt",
    work: "The Kiss",
    year: "1907-1908",
    medium: "Oil and gold leaf on canvas",
    collection: "Belvedere, Vienna",
    mood: "golden embrace",
    note: "금박으로 뒤덮인 두 연인의 포옹입니다. 장식과 관능이 결합한 빈 분리파의 절정입니다.",
    image: "/assets/museum/klimt-the-kiss.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#7a5a1a", "#e7c84a"],
  },
  {
    index: "46",
    artist: "Gustav Klimt",
    work: "Portrait of Adele Bloch-Bauer I",
    year: "1907",
    medium: "Oil, silver and gold on canvas",
    collection: "Neue Galerie New York",
    mood: "gilded portrait",
    note: "금빛 패턴 속에 인물을 녹여낸 클림트의 대표 초상입니다. '오스트리아의 모나리자'로 불립니다.",
    image: "/assets/museum/klimt-adele.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gustav_Klimt_046.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6a5520", "#e3c64a"],
  },
  {
    index: "47",
    artist: "Claude Monet",
    work: "Bridge over a Pond of Water Lilies",
    year: "1899",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "soft reflection",
    note: "지베르니 정원의 일본식 다리와 수련을 그렸습니다. 말년 모네가 빛과 물에 몰두한 세계의 입구입니다.",
    image: "/assets/museum/monet-water-lily-pond.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bridge_over_a_Pond_of_Water_Lilies_by_Claude_Monet_(1899).jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#8aa08d", "#d6cfa9"],
  },
  {
    index: "48",
    artist: "Childe Hassam",
    work: "Celia Thaxter's Garden",
    year: "1890",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "garden glow",
    note: "빛이 흩어지는 섬의 정원을 미국 인상주의의 색채로 담았습니다. 눈이 먼저 편안해지는 그림입니다.",
    image: "/assets/museum/hassam-celia-thaxter-garden.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Celia_Thaxter%27s_Garden,_Isles_of_Shoals,_Maine_MET_DP139631.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#d0a36f", "#4b744a"],
  },
  {
    index: "49",
    artist: "Winslow Homer",
    work: "Breezing Up (A Fair Wind)",
    year: "1876",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "open air",
    note: "바람을 안고 달리는 작은 배를 그린 미국 해양화의 명작입니다. 시원한 바깥 공기가 화면을 채웁니다.",
    image: "/assets/museum/homer-breezing-up.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_Breezing_Up_(A_Fair_Wind).jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#88a8c2", "#d7b36a"],
  },
  {
    index: "50",
    artist: "Pierre-Auguste Renoir",
    work: "Two Sisters (On the Terrace)",
    year: "1881",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "warm color",
    note: "테라스에 앉은 두 자매를 따뜻한 색으로 담았습니다. 밝고 다정한 기분을 남기는 르네상스풍 인상주의입니다.",
    image: "/assets/museum/renoir-two-sisters.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Renoir_-_The_Two_Sisters,_On_the_Terrace.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#c08c7a", "#456b6f"],
  },
];

export interface Interviewee {
  name: string;
  cohort: string;
  field: string;
  pullQuote: string;
  publishedAt: string;
}

export const INTERVIEW_FEATURED: Interviewee = {
  name: "이지원",
  cohort: "7기",
  field: "AI 헬스케어",
  pullQuote:
    "MBA에 와서 처음 깨달은 건, 내가 어떤 질문에 답하고 싶은가였습니다.",
  publishedAt: "2026.05.07",
};

export const INTERVIEW_COUNT = 4;

// 외부 데이터 소스: 공모전 보드 (junyeo217/ai-contest-board, 출처 명시 조건으로 공개 JSON 활용)
export const CONTESTS_DATA_URL =
  "https://raw.githubusercontent.com/junyeo217/ai-contest-board/main/data/contests.json";
export const CONTESTS_SOURCE_REPO_URL =
  "https://github.com/junyeo217/ai-contest-board";
export const CONTESTS_SOURCE_SITE_URL =
  "https://junyeo217.github.io/ai-contest-board/";

export interface ContestEntry {
  title: string;
  category: string;
  organizer: string;
  submission_start?: string;
  submission_end?: string;
  result_date?: string;
  url?: string;
  source_type?: string;
  discovery_source?: string;
  discovery_url?: string;
  evidence?: string;
  summary?: string;
  status?: string;
  source_checked_at?: string;
}

export interface ContestsFeed {
  generated_at?: string;
  notice?: string;
  sections: {
    starting_today?: ContestEntry[];
    ongoing?: ContestEntry[];
    awaiting_result?: ContestEntry[];
    [key: string]: ContestEntry[] | undefined;
  };
}
