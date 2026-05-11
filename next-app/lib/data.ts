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
  { code: "MUSEUM", label: "S.A Museum", count: 10, href: "/issues/museum.html" },
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
    artist: "Claude Monet",
    work: "Bridge over a Pond of Water Lilies",
    year: "1899",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "soft light",
    note: "정답보다 온도를 먼저 느끼게 하는 그림입니다. 보고 있으면 시선이 서두르지 않게 됩니다.",
    image: "/assets/museum/monet-water-lily-pond.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bridge_over_a_Pond_of_Water_Lilies_by_Claude_Monet_(1899).jpg",
    license: "Public Domain",
    onView: true,
    tone: ["#8aa08d", "#d6cfa9"],
  },
  {
    index: "02",
    artist: "Vincent van Gogh",
    work: "Wheat Field with Cypresses",
    year: "1889",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "breathing air",
    note: "바람이 화면 안에서 계속 움직이는 느낌입니다. 멈춰 있어도 에너지가 살아 있습니다.",
    image: "/assets/museum/vangogh-wheat-field-cypresses.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/436535",
    license: "Public Domain / Met Open Access",
    tone: ["#3a5f8f", "#d7a234"],
  },
  {
    index: "03",
    artist: "Pierre-Auguste Renoir",
    work: "Two Sisters",
    year: "1881",
    medium: "Oil on canvas",
    collection: "Art Institute of Chicago",
    mood: "warmth",
    note: "가볍고 따뜻한 공기가 먼저 들어옵니다. 복잡한 해석보다 밝은 기분을 남기는 쪽입니다.",
    image: "/assets/museum/renoir-two-sisters.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Renoir_-_The_Two_Sisters,_On_the_Terrace.jpg",
    license: "Public Domain",
    tone: ["#c08c7a", "#456b6f"],
  },
  {
    index: "04",
    artist: "John Singer Sargent",
    work: "Madame X",
    year: "1883-84",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "quiet tension",
    note: "조용한데 강합니다. 오래 볼수록 에너지보다 태도가 남는 그림에 가깝습니다.",
    image: "/assets/museum/sargent-madame-x.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/12127",
    license: "Public Domain / Met Open Access",
    tone: ["#121212", "#bda27b"],
  },
  {
    index: "05",
    artist: "Edgar Degas",
    work: "The Dance Class",
    year: "1874",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "movement",
    note: "정지된 장면인데 리듬이 느껴집니다. 화면 안의 작은 움직임들이 머리를 환기시켜 줍니다.",
    image: "/assets/museum/degas-dance-class.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/438817",
    license: "Public Domain / Met Open Access",
    tone: ["#c7b49a", "#67524d"],
  },
  {
    index: "06",
    artist: "Winslow Homer",
    work: "Breezing Up",
    year: "1876",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "open air",
    note: "이 페이지의 마지막은 조금 더 시원하게. 답답한 흐름을 바깥 공기로 바꿔주는 장면입니다.",
    image: "/assets/museum/homer-breezing-up.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_Breezing_Up_(A_Fair_Wind).jpg",
    license: "Public Domain",
    tone: ["#88a8c2", "#d7b36a"],
  },
  {
    index: "07",
    artist: "Berthe Morisot",
    work: "Young Woman Knitting",
    year: "ca. 1883",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "soft focus",
    note: "조용한 집중이 화면 전체를 감싸는 타입의 그림입니다. 마음을 낮은 톤으로 맞춰줍니다.",
    image: "/assets/museum/morisot-young-woman-knitting.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/437159",
    license: "Public Domain / Met Open Access",
    tone: ["#d8d1bf", "#8a8172"],
  },
  {
    index: "08",
    artist: "Camille Pissarro",
    work: "The Harvest, Pontoise",
    year: "1881",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "earth tone",
    note: "흙과 사람과 계절의 밀도가 차분하게 이어집니다. 급한 생각을 천천히 식혀줍니다.",
    image: "/assets/museum/pissarro-harvest-pontoise.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/459108",
    license: "Public Domain / Met Open Access",
    tone: ["#a98357", "#5c6c47"],
  },
  {
    index: "09",
    artist: "Childe Hassam",
    work: "Celia Thaxter's Garden",
    year: "1890",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "garden glow",
    note: "화면에 빛이 흩어지듯 깔립니다. 머리보다 눈이 먼저 편안해지는 계열입니다.",
    image: "/assets/museum/hassam-celia-thaxter-garden.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Celia_Thaxter%27s_Garden,_Isles_of_Shoals,_Maine_MET_DP139631.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#d0a36f", "#4b744a"],
  },
  {
    index: "10",
    artist: "Frederic Edwin Church",
    work: "Heart of the Andes",
    year: "1859",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "vast calm",
    note: "크게 숨 쉬고 싶을 때 어울리는 풍경입니다. 시야를 넓혀주는 쪽으로 작동합니다.",
    image: "/assets/museum/church-heart-of-the-andes.jpg",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/10481",
    license: "Public Domain / Met Open Access",
    tone: ["#2f5e4a", "#d2b179"],
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
