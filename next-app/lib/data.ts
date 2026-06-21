// SOGANG AIMBA 7th - static content source for the fixed Next design.

export type Section =
  | "AI-LLM"
  | "BUS"
  | "MBA"
  | "STARTUP"
  | "VIBE"
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

export const CURRENT_ISSUE_PATH = "/issues/vol_20260622.html";
export const PARTICIPATE_PATH = `${CURRENT_ISSUE_PATH}#participateSection`;
export const FUTURE_REPORT_PATH = "/issues/future-report.html";

// FILTERS 정의는 파일 하단으로 이동했다 — count를 실제 데이터에 자동연동하기 위해
// CURRENT_ISSUE·EVENTS·MUSEUM_WORKS·BRIEF_ISSUES 선언 이후에 계산한다. (아래 참조)

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
  { key: "PUBLISHED", value: "13", sub: "누적 발간 호수" },
  { key: "CURRENT", value: "Vol.13", sub: "2026.06.22 최신호" },
  { key: "TOP SIGNAL", value: "AI", sub: "에이전트 프로덕션 · 올트먼 방한연기 · STO" },
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
    vol: 13,
    date: "2026.06.22",
    shortDate: "06.22",
    section: "BUS",
    sectionLabel: "AI · 에이전트",
    title: "에이전트가 '데모'에서 '프로덕션'으로 — 올트먼 방한 연기에도 견고한 한·미 AI 동맹",
    headline:
      "엔터프라이즈 AI 에이전트가 72% 프로덕션에 진입하고, 올트먼 방한은 연기됐지만 한·미 AI 동맹은 견고하며, 한국 STO 무게추가 부동산에서 IP·콘텐츠로 옮겨간 주.",
    path: "/issues/vol_20260622.html",
    read: "14분",
    views: "최신",
    live: true,
    tags: ["AI에이전트", "엔터프라이즈", "STO", "올트먼", "RWA", "MBA", "바이브코딩"],
  },
  {
    vol: 12,
    date: "2026.06.16",
    shortDate: "06.16",
    section: "BUS",
    sectionLabel: "AI · IPO",
    title: "AI 상장 레이스 선언 — Fable 5·S-1·역대 최대 IPO가 겹친 주",
    headline:
      "Claude Fable 5·Anthropic-OpenAI S-1 동시 제출·SpaceX 역대 최대 IPO가 겹치며 AI가 드디어 자본시장 심판대에 오른 주.",
    path: "/issues/vol_20260616.html",
    read: "14분",
    views: "archive",
    tags: ["AI", "IPO", "Fable5", "RWA", "DBS금", "KB채권", "바이브코딩"],
  },
  {
    vol: 11,
    date: "2026.06.08",
    shortDate: "06.08",
    section: "BUS",
    sectionLabel: "AI · Agent OS",
    title: "AI가 '운영체제'로 들어온 주 — 엔터프라이즈 에이전트·오픈웨이트 약진",
    headline:
      "Snowflake·Experian·Meta가 '업무를 끝까지 자율로 처리하는' 엔터프라이즈 AI 에이전트를 내놓고, 미니맥스 M3·MS 자체모델 7종이 오픈웨이트·'AI 주권'으로 맞서며, AI 경쟁이 '모델 성능'에서 '에이전트 운영력'으로 넘어간 주.",
    path: "/issues/vol_20260608.html",
    read: "14분",
    views: "archive",
    tags: ["AI", "엔터프라이즈에이전트", "오픈웨이트", "Snowflake", "Experian", "RWA", "부동산금융"],
  },
  {
    vol: 10,
    date: "2026.06.03",
    shortDate: "06.03",
    section: "BUS",
    sectionLabel: "AI · Capital",
    title: "Anthropic $965B 질주 · 바이브코딩이 창업 표준이 된 주",
    headline:
      "Anthropic이 $65B 시리즈H로 OpenAI를 바짝 추격하고 Opus 4.8이 벤치마크 1위에 오르는 사이, '바이브코딩'이 2026 스타트업의 표준 개발 방식으로 자리잡은 주.",
    path: "/issues/vol_20260603.html",
    read: "14분",
    views: "archive",
    tags: ["AI", "Anthropic", "메가라운드", "Opus4.8", "바이브코딩", "RWA", "부동산금융"],
  },
  {
    vol: 9,
    date: "2026.06.01",
    shortDate: "06.01",
    section: "AI-LLM",
    sectionLabel: "AI · Frontier",
    title: "프런티어가 한 단계 더 위로 — 에이전트 실력 경쟁의 주",
    headline:
      "Claude Opus 4.8가 지능 지수 1위에 오르고 Qwen 3.7 Max·Cognition $1B가 겹치며, AI 경쟁이 '누가 더 똑똑한가'에서 '누가 더 오래·안전하게 일을 끝내는가'로 넘어간 주.",
    path: "/issues/vol_20260601.html",
    read: "13분",
    views: "archive",
    tags: ["AI", "Opus4.8", "에이전트", "Cognition", "RWA", "STO", "엔터프라이즈"],
  },
  {
    vol: 8,
    date: "2026.05.25",
    shortDate: "05.25",
    section: "BUS",
    sectionLabel: "AI · Profit",
    title: "AI가 수익을 증명하다 — 빅테크 지형도가 재편된 주",
    headline:
      "Anthropic 분기 흑자·Google I/O 2026 에이전트 선언·Karpathy 이적이 한 주에 겹치며, AI가 데모가 아닌 재무제표로 말하기 시작한 변곡점.",
    path: "/issues/vol_20260525.html",
    read: "13분",
    views: "archive",
    tags: ["AI", "Anthropic", "수익화", "GoogleIO", "인재이동", "유니콘", "AI중심대학"],
  },
  {
    vol: 7,
    date: "2026.05.18",
    shortDate: "05.18",
    section: "BUS",
    sectionLabel: "Enterprise AI",
    title: "AI가 소상공인·온프레미스 현장으로 내려온 주",
    headline:
      "Anthropic의 소상공인 공략, Dell Technologies World의 AI 팩토리 5,000곳, AlphaEvolve 실증, 국가 AI 컴퓨팅센터 실시협약이 겹치며 AI가 데모를 넘어 현장으로 내려온 주간.",
    path: "/issues/vol_20260518.html",
    read: "12분",
    views: "archive",
    tags: ["AI", "Dell", "온프레미스", "Anthropic", "GPU주권", "피지컬AI", "창업지원"],
  },
  {
    vol: 6,
    date: "2026.05.11",
    shortDate: "05.11",
    section: "BUS",
    sectionLabel: "Enterprise",
    title: "AI가 기업·교육·정책 전선을 동시에 재편한다 — 관망은 없다",
    headline:
      "OpenAI $4B 배포 자회사 출범, KPMG 27만 명 Claude 탑재, IESE·Darden의 AI 코어 전환이 겹치며 AI가 기업 운영체제로 올라선 주간.",
    path: "/issues/vol_20260511.html",
    read: "12분",
    views: "archive",
    tags: ["AI", "엔터프라이즈", "KPMG", "MBA", "에이전트", "창업지원"],
  },
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
    views: "archive",
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

// 발간물 항목별 원문 링크 지원: href/link 는 실제 검증된 URL만 채운다(가상 URL 금지). 없으면 생략.
export interface SupportItem {
  title: string;
  href?: string;
}

export interface SupportGroup {
  id: string;
  title: string;
  note: string;
  items: SupportItem[];
}

export interface EventItem {
  date: string;
  day: string;
  title: string;
  where: string;
  tag: string;
  link?: string;
}

// 한 호(號)의 전체 콘텐츠. 신규 디자인 호(vol 5~)는 여기서 생성된다.
export interface IssueContent {
  vol: number;
  dateLabel: string;
  isoDate: string; // vol_YYYYMMDD.html 파일명에 사용
  title: string;
  subtitle: string;
  memoLines: string[];
  conclusion: string;
  sections: BriefSection[];
  supportGroups: SupportGroup[];
  events: EventItem[];
}

const DEFAULT_SUBTITLE =
  "AI · Business · MBA · Startup · Government · Campus를 경영자 관점에서 해석한 AIMBA Weekly Briefing.";

const VOL5: IssueContent = {
  vol: 5,
  dateLabel: "2026년 5월 4일",
  isoDate: "20260504",
  title: "AI의 승부처가 모델에서 워크플로로 넘어갔다",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주는 AI 경쟁의 기준이 모델 출시 자체보다 누가 더 깊게 업무 흐름을 장악하느냐로 이동한 장면이 선명했습니다.",
    "에이전트형 실행, 엔터프라이즈 재설계, 핀테크·RWA 자본 회복이 동시에 나타나며 시장은 기능보다 실행 구조와 현업 전환 속도를 더 중요하게 보기 시작했습니다.",
  ],
  conclusion:
    "결국 다음 승자는 더 화려한 모델이 아니라, AI를 더 빨리 반복 가능한 업무 시스템으로 바꾸는 팀입니다.",
  sections: [
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
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주 추천은 관광 데이터·AI 활용 사업과 HL그룹 오픈이노베이션입니다. 단순 지원금보다 대기업 PoC·데이터 실증이 붙는 공고를 우선적으로 보시는 게 효율적입니다.",
      items: [
        { title: "2026년 HL그룹 Smart Tech 오픈이노베이션 지원사업", href: "https://www.venturesquare.net/announcement/1079940" },
        { title: "2026 관광기업 데이터·AI 활용 지원 사업", href: "https://touraz.kr/announcementList/pssrpView?pssrpSeqEnc=%5EgoLEJmaV*qcpvRMc9Qnkw%3D%3D&curPage=1" },
        { title: "2026년 교보생명 INNOSTAGE 오픈이노베이션", href: "https://www.kyobolifeinnostage.co.kr/innostage/" },
        { title: "2026년 부산광역시 공공데이터·AI 활용 창업경진대회" },
        { title: "전국민 AI 경진대회 · 인공지능 루키 대회 안내", href: "https://aichallenge4all.or.kr/" },
        { title: "차세대반도체연계전공 및 ELITE 장학생 모집", href: "https://ngs.sogang.ac.kr/front/cmsboardview.do?currentPage=1&searchField=ALL&searchValue=&searchLowItem=ALL&bbsConfigFK=7550&siteId=ngs&pkid=932718" },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 윤송이 연사 라인과 Build with AI 행사입니다. 단순 청강보다 내 업에 바로 붙일 수 있는 실습/케이스 중심으로 참여 우선순위를 잡는 게 좋겠습니다.",
      items: [
        {
          title: "2026 Build with AI: Hands-on Campus 행사참석 안내",
          href: "https://gdg.community.dev/events/details/google-gdg-campus-korea-presents-2026-build-with-ai-hands-on-campus/cohost-gdg-campus-korea/",
        },
        {
          title: "2026학년도 컴퓨터공학과 콜로퀴엄 안내",
          href: "https://cs.sogang.ac.kr/front/cmsboardview.do?currentPage=1&searchField=ALL&searchValue=&searchLowItem=ALL&bbsConfigFK=1905&siteId=cs&pkid=933435",
        },
        { title: "[생각의 창 멘토링센터] 2026학년도 특별강연 안내" },
        { title: "제443회 글로벌 이슈 특강 안내" },
        {
          title: "AI특강: AI시대 가장 아름다운 미래(윤송이) 안내",
          href: "https://www.newsis.com/view/NISX20260415_0003591759",
        },
      ],
    },
  ],
  events: [
    { date: "4월 15일", day: "수", title: "Physical AI 산업 전망 컨퍼런스", where: "여의도 FKI타워 컨퍼런스센터", tag: "컨퍼런스" },
    { date: "4월 17일", day: "금", title: "AI+TECH 2026", where: "온라인/오프라인 하이브리드", tag: "컨퍼런스", link: "https://dubiz.co.kr/Event/479" },
    { date: "4월 23일", day: "목", title: "금융AI, AI 에이전트 컨퍼런스", where: "FKI TOWER 그랜드볼룸 1", tag: "세미나", link: "https://www.etnews.com/20260422000276" },
    { date: "4월 23일", day: "목", title: "2026 전북 IT 컨퍼런스", where: "전북 지역", tag: "보안" },
    { date: "4월 29일", day: "수", title: "2026 AI 서비스 트렌드 컨퍼런스", where: "포스코타워 역삼 이벤트홀", tag: "트렌드" },
    { date: "6월 25-26일", day: "목-금", title: "AAiCON 2026", where: "장소 미정", tag: "AI", link: "https://aifrenz.org/aaicon26-registration" },
    { date: "8월 19-21일", day: "수-금", title: "AI 서밋 서울 앤 엑스포", where: "코엑스 그랜드볼룸", tag: "글로벌", link: "https://www.aisummit.co.kr/" },
    { date: "4월 17일", day: "금", title: "제8회 부산 게임 개발자 컨퍼런스", where: "부산 글로벌게임센터", tag: "게임" },
  ],
};

const VOL6: IssueContent = {
  vol: 6,
  dateLabel: "2026년 5월 11일",
  isoDate: "20260511",
  title: "AI가 기업·교육·정책 전선을 동시에 재편한다 — 관망은 없다",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주는 OpenAI가 $4B 규모 기업 배포 자회사를 전격 출범하고, Anthropic은 KPMG 27만 6천 명 전 직원에게 Claude를 탑재하며 컨설팅 빅4 전선을 열었습니다.",
    "MBA 현장에서는 IESE·Darden이 AI를 선택 과목이 아닌 필수 1학년 코어로 이동시키면서 '케이스 메서드의 죽음'이 아닌 '판단력 훈련의 재탄생'을 선언했습니다.",
  ],
  conclusion:
    "이번 주의 공통 화두는 하나입니다 — AI는 더 이상 부서 프로젝트가 아니라 기업 운영체제(OS)이며, 그 OS를 먼저 설계하는 조직이 다음 10년을 가져갑니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "OpenAI는 5월 5일 GPT-5.5 Instant로 ChatGPT 기본 모델을 교체하고, 같은 날 실시간 음성 추론 모델을 API에 공개했습니다. 5월 11일에는 $4B 기업배포 자회사(Deployment Co.)와 Tomoro 인수를 동시에 발표하며 엔터프라이즈 시장 정면 돌파를 선언했습니다. Anthropic은 5월 7일 Managed Agents에 Dreaming·Outcomes·Multiagent Orchestration 세 기능을 추가하며 자율 에이전트 생태계를 확장했습니다.",
      articles: [
        {
          title: "GPT-5.5 Instant: smarter, clearer, and more personalized",
          desc: "OpenAI가 5월 5일 ChatGPT 기본 모델을 GPT-5.5 Instant로 교체했습니다 — 고위험 프롬프트 대상 할루시네이션 52.5% 감소, 개인화 제어 강화.",
          source: "OpenAI",
          href: "https://openai.com/index/gpt-5-5-instant/",
        },
        {
          title:
            "OpenAI launches the OpenAI Deployment Company to help businesses build around intelligence",
          desc: "OpenAI가 5월 11일 TPG·Bain·Brookfield 등 19개사로부터 $4B+ 유치해 기업 전용 배포 자회사를 출범하고 컨설팅사 Tomoro(FDE 150명)를 인수했습니다.",
          source: "OpenAI",
          href: "https://openai.com/index/openai-launches-the-deployment-company/",
        },
        {
          title:
            "OpenAI to give EU access to new cyber model but Anthropic still holding out on Mythos",
          desc: "OpenAI가 EU 정부·기업·사이버 당국에 GPT-5.5-Cyber 접근권을 부여하면서 AI 모델 접근이 외교 통화로 부상했습니다.",
          source: "CNBC",
          href: "https://www.cnbc.com/2026/05/11/openai-eu-cyber-model-anthropic-mythos-gpt.html",
        },
        {
          title: "Anthropic updates Claude Managed Agents with three new features",
          desc: "Anthropic이 5월 7일 Dreaming(과거 세션 패턴 학습), Outcomes(성과 자동 평가), Multiagent Orchestration(병렬 전문 에이전트 위임) 세 기능을 Managed Agents에 추가했습니다.",
          source: "9to5Mac",
          href: "https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "IBM Think 2026(5월 4~7일, 보스턴)과 SAP Sapphire가 연달아 에이전트 AI 기반 엔터프라이즈 재설계 청사진을 공개했습니다. KPMG는 27만 6천 명 전 직원에 Claude를 탑재하는 빅4 최초 글로벌 AI 동맹을 체결했습니다. EY·Microsoft는 5년간 $1B 공동투자로 산업별 AI 솔루션 공동개발 전선을 열었습니다.",
      articles: [
        {
          title: "IBM Consulting Expands AI Capabilities to Accelerate Enterprise Transformation",
          desc: "IBM이 5월 6일 Context Studio·Process Studio를 공개하고, 헬스케어 기업 Providence에서 채용 리드타임 60% 단축·HR 담당자 업무 90% 절감 성과를 발표했습니다.",
          source: "IBM Newsroom",
          href: "https://newsroom.ibm.com/2026-05-06-ibm-consulting-expands-ai-capabilities-to-accelerate-enterprise-transformation",
        },
        {
          title:
            "KPMG integrates Claude across its core business and workforce of more than 276,000 in strategic alliance",
          desc: "KPMG 27만 6천 명 전 직원이 Claude를 탑재하고, PE 고객사 대상 KPMG Blaze로 IT 현대화를 가속 — Anthropic 최대 규모 빅4 동맹입니다.",
          source: "Anthropic",
          href: "https://www.anthropic.com/news/anthropic-kpmg",
        },
        {
          title: "SAP Sapphire 2026: SAP Unveils the Autonomous Enterprise",
          desc: "SAP CEO Christian Klein이 AI 에이전트가 비즈니스를 자율 운영하는 'Autonomous Enterprise' 비전을 발표하고 Anthropic Claude를 Joule 에이전트 파운데이션 모델로 채택했습니다.",
          source: "SAP News Center",
          href: "https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/",
        },
        {
          title:
            "EY and Microsoft announce global initiative to help clients scale AI enterprisewide value creation",
          desc: "EY·Microsoft가 5년간 $1B+ 공동투자로 산업별 통합 AI 솔루션 팀을 구성해 기업 전사적 AI 가치 창출을 지원하는 이니셔티브를 발표했습니다.",
          source: "Microsoft",
          href: "https://news.microsoft.com/source/2026/05/21/ey-and-microsoft-announce-global-initiative-to-help-clients-scale-ai-enterprisewide-value-creation-and-move-beyond-experimentation/",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "이번 주 MBA 씬의 핵심은 'AI를 어떻게 교육에 담을 것인가'에서 'AI 시대에 판단력을 어떻게 훈련할 것인가'로 질문이 전환됐다는 점입니다. IESE는 18개 1학년 필수과목 전체에 AI를 통합하고, Darden은 AI를 전략 코어 과목의 기본 도구로 선언했습니다. 서강대는 생성형 AI 기반 아이디어 공모전을 교내 전 구성원 대상으로 운영 중입니다.",
      articles: [
        {
          title: "IESE redesigns MBA for the age of AI",
          desc: "IESE가 9월 2026 입학생부터 18개 1학년 필수과목 전체에 AI를 통합하며 'AI를 사용할 수 있냐'가 아닌 '인간+AI 조직을 리드할 수 있냐'를 졸업 기준으로 재정립했습니다.",
          source: "GlobeNewswire",
          href: "https://www.globenewswire.com/news-release/2026/05/07/3290167/0/en/IESE-redesigns-MBA-for-the-age-of-AI.html",
        },
        {
          title:
            "Pedagogy Under Pressure: How AI Is Forcing Business Schools To Rethink How They Teach",
          desc: "Poets & Quants가 5월 7일 분석한 결과, 케이스 메서드의 위기는 AI가 답을 생성해서가 아니라 학습에 필수적인 '지적 마찰'이 사라질 수 있기 때문임을 지적했습니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/07/pedagogy-under-pressure-how-ai-is-forcing-business-schools-to-rethink-how-they-teach/?pq-category=thought-leadership",
        },
        {
          title: "Why Darden Is Moving AI Into the Core MBA Experience",
          desc: "Darden 경영대가 전략 필수과목에 AI 도구 전면 도입을 선언했습니다 — 'AI를 교실에서 쫓아낼 수 없다'는 전제 하에 AI 비판적 활용 역량을 핵심 졸업 요건으로 전환했습니다.",
          source: "Darden News",
          href: "https://news.darden.virginia.edu/2026/05/27/ai-mba-curriculum/",
        },
        {
          title: "2026 AI Driven University Idea Fair — 서강대 생성형 AI 기반 아이디어 공모전",
          desc: "서강대학교가 4월 15일~5월 29일 교내 전 구성원(학부·석박사·교직원) 대상으로 생성형 AI로 대학 현안을 해결하는 아이디어 공모전을 운영 중입니다 — 결선은 9월 4일.",
          source: "Sogang University",
          href: "https://contest.sogang.ac.kr/",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "한국 스타트업 씬에서 5월 첫째 주는 피지컬 AI·로보틱스 분야의 메가딜 주간이었습니다. 위로보틱스가 950억 시리즈B를 유치해 웨어러블 로봇을 넘어 휴머노이드 사업화에 본격 돌입했고, Upstage는 국가성장펀드로부터 5,600억을 추가 유치하며 한국 최초 AI 서비스 유니콘 지위를 공식화했습니다. 서울시는 글로벌 유니콘 발굴을 위한 Try Everything 2026 챌린지 접수를 개시했습니다.",
      articles: [
        {
          title: "위로보틱스, 950억 규모 시리즈B 투자 유치 — 휴머노이드 사업 본격화",
          desc: "위로보틱스가 5월 15일 JB인베스트먼트 주도로 950억 시리즈B를 유치했습니다 — WIM 보행보조로봇 3,000대 누적 판매 기반으로 휴머노이드 ALLEX 상용화에 속도를 냅니다.",
          source: "와우테일",
          href: "https://wowtale.net/2026/05/15/258765/",
        },
        {
          title: "Upstage Becomes Unicorn, Backed by Korea's Mother Fund and Growth Fund",
          desc: "국가성장펀드가 5월 3일 Upstage에 5,600억원을 투자하며 한국 최초 생성형 AI 유니콘의 글로벌 확장(미국·일본)과 GPU 인프라 투자를 뒷받침했습니다.",
          source: "Seoul Economic Daily",
          href: "https://en.sedaily.com/finance/2026/05/19/upstage-becomes-unicorn-backed-by-koreas-mother-fund-and",
        },
        {
          title:
            "Seoul Metropolitan Government Announces 'Try Everything 2026: Seoul Unicorn Challenge'",
          desc: "서울시가 5월 19일 글로벌 스타트업 대상 Try Everything 2026 챌린지를 개시했습니다 — 7개사 선발, 총 상금 1.2억원, 네이버클라우드 Greenhouse 연계, 접수 마감 6월 30일.",
          source: "BusinessWire",
          href: "https://www.businesswire.com/news/home/20260527551255/en/Seoul-Metropolitan-Government-Announces-Try-Everything-2026-Seoul-Unicorn-Challenge",
        },
        {
          title:
            "Q1 2026 Shatters Venture Funding Records As AI Boom Pushes Startup Investment To $300B",
          desc: "2026년 1분기 글로벌 벤처 투자가 $300B를 돌파하며 사상 최고치를 기록했습니다 — AI 붐이 VC 자금을 딥테크·피지컬 AI 전선으로 집중시키고 있습니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주 주목할 정부 지원은 K-콘텐츠 글로벌 론치패드(LA·아부다비·싱가포르 3개국)와 서울-보스턴 바이오 연계 프로그램입니다. 딥테크 창업패키지 모집도 상시 공고 중이니 AIMBA 창업 트랙 수강자는 반드시 확인하시기 바랍니다.",
      items: [
        {
          title: "2026 콘텐츠 스타트업 글로벌 엑셀러레이팅 프로그램(론치패드) 참가기업 모집 (접수 ~6/10)",
          href: "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=177867",
        },
        {
          title: "2026 서울-보스턴 스타트업허브 액셀러레이션 프로그램 참여기업 모집 (접수 ~6/7)",
          href: "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=177872",
        },
        {
          title: "2026 경기 스타트업 서밋 Invest Connect 1차 참가기업 모집 (접수 ~6/12)",
          href: "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=177850",
        },
        {
          title: "2026년 초기창업패키지(딥테크 특화형) 창업기업 모집 공고 — 최대 1.5억원",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000117173",
        },
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "2026년 제1차 창업성장기술개발사업(디딤돌) 시행계획 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116971",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "서강대 개교기념 축제(5/14~15)와 AI 아이디어 공모전(~5/29 접수) 두 이벤트가 겹친 주간입니다. AIMBA 재학생은 AI 공모전 참여로 실전 포트폴리오를 쌓을 수 있는 좋은 기회입니다.",
      items: [
        {
          title: "2026 서강대학교 AI Driven University Idea Fair — 생성형 AI 기반 아이디어 공모전 (접수 ~5/29)",
          href: "https://contest.sogang.ac.kr/",
        },
        {
          title: "서강대학교 개교기념 축제 (5월 14~15일, 대운동장)",
          href: "https://www.sogang.ac.kr/ko/academic-support/calendar",
        },
        {
          title: "서강대학교 경영대학원 MBA 공지사항",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?currentPage=1&searchField=ALL&searchValue=&searchLowItem=ALL&bbsConfigFK=2206&siteId=sbs",
        },
        {
          title: "서강대학교 2026학년도 1학기 전공 추가신청 및 변경 (5/6~19)",
          href: "https://www.sogang.ac.kr/ko/academic-support/calendar",
        },
      ],
    },
  ],
  events: [
    { date: "5월 6일~8일", day: "수~금", title: "AI EXPO KOREA 2026 (제9회 국제인공지능대전)", where: "COEX 1층 Hall A, 서울", tag: "전시/컨퍼런스", link: "https://www.aiexpo.co.kr/en/i1.php?s=11" },
    { date: "5월 14일~15일", day: "목~금", title: "서강대학교 개교기념 축제 ODYSSEY 2026", where: "서강대학교 대운동장, 서울", tag: "캠퍼스", link: "https://www.sogang.ac.kr/ko/academic-support/calendar" },
    { date: "6월 22일~24일", day: "월~수", title: "AAAI 2026 Summer Symposium Series", where: "동국대학교, 서울", tag: "학술컨퍼런스", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "6월 27일~7월 3일", day: "토~금", title: "Festival of Learning 2026 (AI·교육·HCI 국제학술제)", where: "서울", tag: "국제학술", link: "https://festival-of-learning-2026.info/" },
    { date: "8월 19일~21일", day: "수~금", title: "AI Summit Seoul & Expo 2026", where: "COEX 그랜드볼룸 & Exhibition Hall B, 강남구", tag: "컨퍼런스/전시", link: "https://www.eventbrite.com/e/ai-summit-seoul-2026-ais-2026-tickets-1986491576781" },
  ],
};

const VOL11: IssueContent = {
  vol: 11,
  dateLabel: "2026년 6월 8일",
  isoDate: "20260608",
  title:
    "AI가 '운영체제'로 들어왔다 — 엔터프라이즈 에이전트·오픈웨이트 약진이 겹친 주",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주의 신호는 분명합니다 — AI가 '더 똑똑한 모델' 경쟁에서 '업무를 끝까지 자율로 처리하는 에이전트' 경쟁으로 넘어갔습니다. Snowflake·Anthropic이 거버넌스된 데이터 위에서 Claude 에이전트를 돌리고, Experian은 대출 전 과정을 감사·인적감독 하에 자동화하는 '금융권 Agent OS'를, 메타는 예약·결제·판매까지 자율 수행하는 Business Agent를 공개했습니다.",
    "동시에 미니맥스 M3가 오픈웨이트로 프런티어 코딩 벤치를 찍고 마이크로소프트가 자체 모델 7종으로 'AI 주권'을 선언하면서, 기업이 AI를 빌려 쓰는 단계에서 직접 '내재화하고 운영하는' 단계로 빠르게 이동하고 있습니다.",
  ],
  conclusion:
    "AI의 승부처가 모델 성능에서 '업무를 자율로 끝내는 에이전트 운영력'으로 옮겨갔습니다 — 어떤 모델이 더 똑똑한가보다, 누가 더 빨리 에이전트를 거버넌스된 업무 흐름에 심는가가 다음 분기의 격차를 만듭니다. AIMBA 원우분들은 '어떤 AI를 쓸까'를 넘어 '어떤 업무를 에이전트에게 맡길까'를 설계하는 훈련을 지금 시작해야 합니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "이번 주 AI 섹션의 키워드는 '오픈웨이트의 약진'과 '자체 모델 내재화'입니다. 미니맥스 M3가 오픈웨이트 모델로 SWE-Bench Pro 59%를 찍으며 프런티어 코딩 경쟁에 합류했고, 마이크로소프트는 자체 모델 7종(MAI)을 공개하며 OpenAI 의존을 줄이는 'AI 주권' 노선을 분명히 했습니다. 딥시크는 창업 후 첫 외부펀딩으로 74억 달러를 추진하며 텐센트·CATL을 끌어들였습니다 — 빅테크가 자본과 오픈소스 양면에서 '독자 모델'을 두고 경쟁하는 국면입니다.",
      articles: [
        {
          title: "딥시크, 첫 외부 투자로 74억 달러 조달 추진…텐센트·CATL 합류",
          desc: "중국 AI 기업 딥시크가 창업 후 첫 외부 펀딩으로 약 500억 위안(74억 달러)을 모집 중이며, 창업자 량원펑이 30억 달러, 텐센트 15억 달러, CATL 7.4억 달러를 투입합니다. 투자 후 기업가치는 490억~560억 달러로 평가됩니다 — 중국 오픈소스 진영의 자본력이 한 단계 올라섰습니다.",
          source: "TechNode",
          href: "https://technode.com/2026/06/04/deepseek-in-talks-to-raise-7-billion-from-tencent-catl-and-other-investors/",
        },
        {
          title: "미니맥스, 오픈웨이트 'M3' 공개…1M 컨텍스트·코딩서 GPT-5.5 추월 주장",
          desc: "미니맥스가 6월 1일 공개한 오픈웨이트 모델 M3는 SWE-Bench Pro 59.0%로 GPT-5.5와 Gemini 3.1 Pro를 앞섰다고 밝혔으며, 자체 희소어텐션(MSA)으로 최대 100만 토큰 컨텍스트와 네이티브 멀티모달을 지원합니다 — 오픈웨이트가 프런티어 성능에 근접한 상징적 장면입니다.",
          source: "MiniMax",
          href: "https://www.minimax.io/blog/minimax-m3",
        },
        {
          title: "MS, 자체 AI 모델 7종 'MAI' 공개…오픈AI 의존 줄이기 본격화",
          desc: "마이크로소프트가 Build 2026에서 추론모델 MAI-Thinking-1(활성 350억 파라미터·25.6만 토큰 컨텍스트) 등 자체 모델 7종을 공개했습니다. 수레이만 AI CEO는 이 모델들이 GPT-5.5를 능가하면서 비용은 10분의 1 수준이라고 주장했습니다 — 플랫폼 기업의 '모델 내재화' 전략이 본격화됐습니다.",
          source: "IndexBox",
          href: "https://www.indexbox.io/blog/microsoft-unveils-seven-in-house-ai-models-at-build-2026-reducing-reliance-on-openai/",
        },
        {
          title: "시장 인텔리전스 'AlphaSense', 75억 달러 가치에 3.5억 달러 조달",
          desc: "금융·기업 리서치용 AI 검색 플랫폼 AlphaSense가 3.5억 달러를 유치하며 기업가치 75억 달러를 인정받았습니다 — 이번 주 크런치베이스 펀딩 톱10에 AI 스타트업이 대거 이름을 올리며, '모델'을 넘어 'AI 애플리케이션 레이어'로 자본이 확산되는 흐름을 보였습니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "AI 에이전트가 '엔터프라이즈 운영체제'로 들어가는 한 주였습니다. Snowflake·Anthropic은 데이터 거버넌스 위에서 Claude 에이전트를 돌리는 통합을 발표했고, Experian은 대출 전 과정을 감사·인적감독 하에 자동화하는 금융권용 'Agent OS'를, 메타는 예약·결제·판매를 자율 수행하는 Business Agent를 공개했습니다. AI가 '보조 도구'에서 '업무를 끝까지 처리하는 운영 레이어'로 이동하는 변곡점입니다.",
      articles: [
        {
          title: "스노우플레이크·앤트로픽, Summit 2026서 '거버넌스 갖춘 엔터프라이즈 AI' 가속",
          desc: "6월 1일 샌프란시스코 Snowflake Summit 26에서 양사는 Claude가 Cortex AI·Cortex Code·Snowflake Intelligence를 구동한다고 발표했습니다. Cortex Code는 사내 최단기간 7,100명+ 사용자를 모은 최고 성장 제품이 됐고, Block·Carvana·Notion 등이 데이터 이동 없이 거버넌스된 AI 에이전트를 운영 중입니다.",
          source: "Snowflake",
          href: "https://www.snowflake.com/en/news/press-releases/snowflake-and-anthropic-accelerate-enterprise-ai-adoption-driven-by-rising-demand-for-governed-ai/",
        },
        {
          title: "익스피리언, 금융용 '에이전트 운영체제(Agent OS)' 공개…서비스나우 첫 통합",
          desc: "6월 2일 익스피리언은 Ascend 플랫폼 위에 신뢰 가능한 에이전틱 AI 계층 'Agent Operating System'을 발표했고, 서비스나우가 첫 통합 파트너로 합류했습니다. 고객획득부터 신용결정·포트폴리오 모니터링까지 대출 전 과정을 감사·인적감독 하에 자동화하며, 2,300개 클라이언트 솔루션으로 확장될 예정입니다.",
          source: "Experian",
          href: "https://www.experianplc.com/newsroom/press-releases/2026/experian-brings-trusted-agentic-ai-to-financial-services-with-th",
        },
        {
          title: "메타, 기업용 'Business Agent' 출시…무료 시작 후 유료화로 수익모델 시험",
          desc: "6월 3일 런던 Conversations 컨퍼런스에서 메타는 예약·결제·판매성사·리드검증을 자율 수행하는 Business Agent를 공개했습니다. WhatsApp·Messenger·Instagram과 Shopify·Zendesk 등 외부 시스템에 연동되며, 초기 무료 제공 후 향후 유료 구독을 도입하는 단계적 과금 전략을 택했습니다.",
          source: "Global Banking & Finance Review",
          href: "https://www.globalbankingandfinance.com/meta-launches-enterprise-focused-ai-business-agent-automate/",
        },
        {
          title: "로리킷, '자가최적화 에이전트' 출시…출시 전 수천 시나리오로 검증",
          desc: "6월 4일 Money20/20 유럽에서 로리킷은 AI 고객지원 에이전트를 실서비스 투입 전 수천 개 고객 시나리오로 테스트·개선하는 self-optimising agents를 발표했습니다. 한 고객사는 출시 즉시 해결률 5%p, 이후 월 10%p 상승, 만족도는 직전 벤더 대비 30점 높았습니다 — 에이전트의 '단위경제'를 검증하는 방법론입니다.",
          source: "FF News",
          href: "https://ffnews.com/newsarticle/fintech/lorikeet-launches-self-optimising-agents-at-money20-20-europe",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "AI 시대 MBA의 화두가 '판단력 교육'과 '채용 변별력'으로 모였습니다. 스페인 IESE가 1학년 전 과목에 AI를 내재화하며 '판단력'에 베팅했고, Woxsen 교수진은 평가 무결성·형평성을 축으로 한 AI 윤리 프레임을 제시했습니다. 채용 시장에선 AI 유창성이 '기본값'이 되며 변별이 더 어려워지고, 졸업생 일자리는 소기업·AI 직군으로 재편되고 있습니다 — AIMBA 원우에게 '사람만이 하는 판단'의 가치가 커지는 국면입니다.",
      articles: [
        {
          title: "AI 시대, IESE는 MBA의 미래를 '판단력'에 건다 — 1년차 전 과목에 AI 내재화",
          desc: "스페인 IESE 경영대학원이 2026년 9월부터 풀타임 MBA를 전면 개편해, AI를 일부 선택과목에 '붙이는' 대신 1학년 모든 과목에 내재화합니다. 개인 AI 활용→업무 재설계→전략적 AI 통찰의 3단계 역량 체계를 세우고, 교수 120명 중 약 85명이 가을 해커톤에 참여했습니다. 루틴 업무가 자동화될수록 '판단력과 리더십'의 가치가 커진다는 베팅입니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/06/02/in-the-age-of-ai-iese-bets-the-mbas-future-on-judgment/",
        },
        {
          title: "AI가 MBA 강의실에 들어와도, 성적표는 여전히 '윤리'가 쥔다",
          desc: "Woxsen대 교수 2인은 경영대학원이 AI를 단순 도구로 다루지 말고 윤리적 프레임워크를 세워야 한다고 주장합니다. 핵심은 ①평가 무결성(프롬프트 실력이 아닌 학생의 사고를 측정) ②형평성(프리미엄 AI 접근 격차) ③허용·제한·금지 구간을 명시한 책임 사용 정책입니다. MBA 졸업생이 곧 기업 AI 거버넌스를 설계하므로, 강의실 규범이 미래 기업 윤리의 예행연습이라는 메시지입니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/06/01/when-ai-walks-into-the-mba-classroom-ethics-still-holds-the-grade-sheet/",
        },
        {
          title: "빅테크는 잊어라: 2026년 소기업이 신입 100만 명 채용 — 일부는 'AI가 못 뺏는' 일자리",
          desc: "Gusto 분석에 따르면 2026년 봄·여름 직원 1~49인 소기업이 20~24세 졸업생 약 97.4만 명을 채용하며 전년(96.2만)보다 소폭 늘어납니다. '대기업은 수비, 소기업은 공격' 구도 속에 전통적 재무분석·SW 엔지니어 신입은 줄고 AI·파운딩 엔지니어 수요가 급증합니다 — Z세대 커리어가 'AI 네이티브'와 '숙련 기술직' 두 갈래로 갈리고 있습니다.",
          source: "Fortune",
          href: "https://fortune.com/2026/05/01/one-million-new-grads-hired-small-businesses-2026-hottest-jobs-ai-proof-service-technicians/",
        },
        {
          title: "현행 채용 시스템은 'AI 준비된' 졸업생을 못 가려낸다 — SHL 100만 평가 분석",
          desc: "SHL이 100만 건 이상의 역량평가를 분석한 결과, 신입 졸업생은 학습민첩성·적응력 등 AI 시대 핵심 행동역량에서 오히려 경력직을 앞섰지만 기존 채용 절차가 이를 측정하지 못해 'AI 준비된 인재'를 놓치고 있다고 지적했습니다. NACE에 따르면 2025년 지원 건수는 26% 늘고 지원자 70%가 AI 도구를 썼습니다 — 채용은 더 붐비고 변별은 더 어려워졌습니다.",
          source: "HR Executive",
          href: "https://hrexecutive.com/current-hiring-processes-arent-built-to-find-ai-ready-graduates-data-finds/",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "자본이 '딥테크 하드웨어'와 'AI 인프라'로 동시에 몰렸습니다. 한국 민간 우주발사체 우나스텔라가 335억 원 시리즈B(알토스 리드)를 마감했고, 바이브코딩 수혜주 Supabase가 105억 달러 가치에 시리즈F를, AI 음악 Suno가 저작권 소송 와중에도 54억 달러 가치를 인정받았습니다. 로봇 파운데이션모델 Generalist AI는 20억 달러 가치에 4억 달러를 유치했습니다 — 소프트웨어를 넘어 우주·로봇·물리 AGI로 자본이 번지는 흐름입니다.",
      articles: [
        {
          title: "우주발사체 '우나스텔라', 335억 시리즈B 유치…누적 615억",
          desc: "한국 민간 최초 자체 개발 로켓 자력 발사(2025년 5월, 고흥)에 성공한 우주발사체 스타트업 우나스텔라가 335억 원 규모 시리즈B를 유치했습니다. 알토스벤처스가 리드하고 산업은행·스트롱벤처스·하나벤처스·우리벤처파트너스 등이 참여, 누적 투자액은 615억 원입니다. 엔진·차세대 발사체 개발과 시험·발사 인프라 확충에 투입해 '한국 뉴스페이스' 상용화에 박차를 가합니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1088208",
        },
        {
          title: "Supabase, 5억 달러 시리즈F…기업가치 105억 달러로 '바이브 코딩' 수혜",
          desc: "오픈소스 Postgres 백엔드 플랫폼 Supabase가 GIC 주도로 5억 달러 시리즈F를 유치하며 기업가치 105억 달러를 인정받았습니다. Stripe·Accel·Y Combinator·Salesforce Ventures 등이 참여했고, 직전 시리즈E(7개월 전) 대비 가치가 약 2배 뛰었습니다. AI 코딩 에이전트(특히 Claude Code)가 신규 DB 배포의 다수를 차지하며 DB 수가 전년 대비 600% 급증한 것이 성장 동력입니다.",
          source: "TNGlobal",
          href: "https://technode.global/2026/06/05/gic-leads-supabases-500m-series-f-funding/",
        },
        {
          title: "AI 음악 '서노(Suno)', 저작권 소송 와중에도 4억 달러 시리즈D",
          desc: "AI 음악 생성 서비스 Suno가 Bond 주도로 4억 달러 시리즈D를 유치, 기업가치 54억 달러를 기록했습니다. 7개월 전 24.5억 달러 대비 2배 이상입니다. 구독자 200만·연환산매출(ARR) 3억 달러, 하루 700만 곡 생성 규모입니다. UMG·Sony와 저작권 소송이 진행 중이지만 '공정이용' 논리로 맞서며 워너뮤직과는 라이선스 합의를 마쳤습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/06/03/still-facing-copyright-lawsuits-ai-music-generator-suno-raises-another-400m/",
        },
        {
          title: "로봇 파운데이션모델 'Generalist AI', 4억 달러 유치…기업가치 20억 달러",
          desc: "여러 로봇 플랫폼을 아우르는 '피지컬 AGI'를 표방하는 Generalist AI가 Radical Ventures 주도로 4억 달러를 유치하며 기업가치 20억 달러에 올랐습니다. 엔비디아 NVentures·베이조스·페이페이 리·나발 라비칸트 등이 참여했습니다. 딥마인드·보스턴다이내믹스 출신 팀이 창업, 플래그십 모델 'GEN-1'로 물리 작업 숙련도를 입증하며 로봇 데이터 인프라·상용 배포 확대에 자금을 투입합니다.",
          source: "SiliconANGLE",
          href: "https://siliconangle.com/2026/06/04/generalist-ai-raises-400m-2b-valuation-build-general-intelligence-real-world/",
        },
      ],
    },
    {
      id: "vibe",
      label: "Vibe Coding",
      code: "VIBE",
      narrative:
        "이번 호 Vibe Coding은 '서브에이전트와 에이전틱 워크플로'에 초점을 맞췄습니다. Claude Code 서브에이전트와 GitHub Copilot 에이전트 모드가 나란히 '아키텍처부터 매핑→계획→실행' 패턴을 권하고, CLAUDE.md·슬래시 명령 커스터마이징으로 반복 작업을 제거하는 실전 노하우가 정리됐습니다. 비개발자도 따라 할 수 있는 재현 가능한 워크플로로 바이브코딩이 성숙하고 있습니다 — AIMBA 원우가 직접 MVP를 빌드할 때 바로 쓸 수 있는 가이드입니다.",
      articles: [
        {
          title: "Claude Code 서브에이전트 실전 설정 가이드 (2026)",
          desc: "서브에이전트를 .claude/agents/(프로젝트)·~/.claude/agents/(유저) 디렉토리에 두는 우선순위 규칙과 code-reviewer.md(YAML frontmatter: name/description/tools/model) 템플릿, 내장 Explore·Plan·general 에이전트 활용법을 구체 예시로 설명합니다. 💡 핵심: 리뷰·리서치처럼 컨텍스트를 많이 잡아먹는 작업은 별도 서브에이전트로 위임해 메인 대화 오염을 막으세요.",
          source: "Tembo",
          href: "https://www.tembo.io/blog/claude-code-subagents",
        },
        {
          title: "GitHub Copilot 에이전트 능력 200% 끌어내기",
          desc: "Copilot agent mode에 '이 서비스를 도메인·인프라·인터페이스 레이어로 모듈 분해해줘' 같은 아키텍처 지향 프롬프트를 던져 다중 파일 변경·안전한 마이그레이션·리팩터링 계획을 단계별로 받는 1st-party 가이드입니다. 💡 핵심: 코딩 전에 '아키텍처 영향부터 매핑해줘'로 계획을 먼저 뽑고, 롤백 전략을 포함한 하위호환 변경을 요청하세요.",
          source: "GitHub Blog",
          href: "https://github.blog/ai-and-ml/github-copilot/how-to-maximize-github-copilots-agentic-capabilities/",
        },
        {
          title: "Claude Code 커스터마이징: CLAUDE.md·슬래시커맨드·서브에이전트",
          desc: "CLAUDE.md에 라이브러리 llms.txt 문서를 자동 로드시키고, /dexie-help 같은 슬래시커맨드와 전용 서브에이전트를 YAML frontmatter(allowed-tools, model: opus)로 정의하는 실제 코드 예시를 제공합니다. 💡 핵심: 자주 쓰는 지시는 슬래시커맨드로 패키징하고, 답변 전 항상 최신 공식문서를 WebFetch하도록 강제해 할루시네이션을 줄이세요.",
          source: "alexop.dev",
          href: "https://alexop.dev/posts/claude-code-customization-guide-claudemd-skills-subagents/",
        },
        {
          title: "아이디어에서 PR까지: GitHub Copilot 에이전틱 워크플로우",
          desc: "자연어로 이슈를 생성→Copilot coding agent에 할당→브랜치·환경 구성·코드베이스 탐색·계획 수립 후 draft PR을 자동 생성하는 전 과정을 보여주는 1st-party 가이드입니다(.chatmode.md 커스텀 모드, 원격 MCP 서버 설정 포함). 💡 핵심: 이슈를 '타이트하게' 좁히고 acceptance criteria를 명시한 뒤, 머지 전 반드시 PR 코드와 에이전트 추론을 리뷰하세요.",
          source: "GitHub Blog",
          href: "https://github.blog/ai-and-ml/github-copilot/from-idea-to-pr-a-guide-to-github-copilots-agentic-workflows/",
        },
      ],
    },
    {
      id: "rwa",
      label: "블록체인 · RWA",
      code: "RWA",
      narrative:
        "RWA·스테이블코인이 '결제·정산 인프라'로 본격 편입됐습니다. 머니그램이 6천만 송금망에 자체 스테이블코인 MGUSD를 탑재하고, 스트라이프·비자·마스터카드가 공동 스테이블코인 플랫폼을 추진합니다. 심비오틱은 RWA 환매 병목(최장 180일)을 즉시 현금화로 풀고, 비트겟은 토큰화 美주식을 선물 증거금으로 허용했습니다 — 토큰화가 '보유'를 넘어 '담보·결제'로 진화하는 분기점입니다.",
      articles: [
        {
          title: "머니그램, 자체 스테이블코인 'MGUSD' 출시…6천만 고객 송금망에 탑재",
          desc: "글로벌 송금기업 머니그램이 6월 2일 미 달러 스테이블코인 MGUSD를 스텔라(Stellar) 블록체인 위에 출시했습니다. 발행은 스트라이프 자회사 Bridge가 맡고 스마트컨트랙트는 M0, 지갑은 Fireblocks가 담당합니다. 6천만 활성 고객·전 세계 50만 소매 거점을 가진 송금망에 자체 디지털달러를 직접 탑재해, USDC 등 3자 의존에서 벗어나 크로스보더 송금 인프라를 내재화한 사례입니다.",
          source: "Ledger Insights",
          href: "https://www.ledgerinsights.com/moneygram-launches-retail-focused-stablecoin-mgusd/",
        },
        {
          title: "심비오틱 '리퀴드 레인' 출시…최장 180일 걸리던 RWA 환매를 즉시 현금화",
          desc: "패러다임·판테라·코인베이스 벤처스가 투자한 심비오틱이 6월 2일 토큰화 실물자산(RWA) 즉시 환매 상품 '리퀴드 레인'을 선보였습니다. 토큰화 펀드·사모대출 등은 환매에 수주~최장 180일이 걸렸는데, 검증된 마켓메이커를 RFQ(견적요청) 방식으로 연결해 USDC로 즉시 교환되게 합니다. RWA 시장이 330억 달러를 넘었지만 대부분 상시 환매가 불가능했던 유동성 병목을 정조준한 것입니다.",
          source: "CoinDesk",
          href: "https://www.coindesk.com/business/2026/06/02/symbiotic-aims-to-make-tokenized-assets-easier-to-cash-out-with-new-liquidity-network",
        },
        {
          title: "스트라이프·비자·마스터카드, 공동 스테이블코인 플랫폼 추진…코인베이스도 검토",
          desc: "6월 3일 보도에 따르면 글로벌 결제 3강 스트라이프·비자·마스터카드가 새로운 스테이블코인 플랫폼 출시를 눈앞에 두고 있으며, 코인베이스도 참여를 검토 중입니다. 약 3,250억 달러 규모로 커진 스테이블코인 시장을 '대안 화폐'가 아닌 '결제·정산 인프라'로 재편하려는 움직임입니다. 스트라이프는 Bridge를, 마스터카드는 BVNK를 인수했고, 비자는 4월 스테이블코인 정산 파일럿을 9개 블록체인으로 확대한 바 있습니다.",
          source: "CoinDesk",
          href: "https://www.coindesk.com/business/2026/06/03/payment-giants-stripe-visa-mastercard-said-to-be-among-backers-of-soon-to-debut-stablecoin-platform",
        },
        {
          title: "비트겟, 토큰화 美주식 15종을 선물 증거금으로 허용…전통자산·크립토 담보 통합",
          desc: "비트겟이 6월 4일부터 rAAPL·rTSLA·rNVDA·rQQQ·rSPY 등 토큰화 주식·ETF 15종을 통합거래계좌(UTA)에서 USDT-M 선물 증거금으로 사용할 수 있게 했습니다. 멀티에셋 모드를 통해 별도 자금 이체 없이 크립토와 전통자산 담보를 통합 운용하는 구조입니다. 비트겟은 이미 100종 이상의 토큰화 주식·ETF·원자재·외환을 제공 중으로, RWA가 단순 보유를 넘어 파생상품 담보로 편입되는 단계를 보여줍니다.",
          source: "Zawya",
          href: "https://www.zawya.com/en/press-release/companies-news/bitget-empowers-traders-to-use-tokenized-equities-as-collateral-for-futures-positions-u5tz56j3",
        },
      ],
    },
    {
      id: "re",
      label: "부동산 · 핀테크",
      code: "RE",
      narrative:
        "국내외 부동산이 '국지적 과열'과 '구조적 균열'로 갈렸습니다. 서울 아파트값이 0.25% 오르며 동탄이 0.60%로 전국 최고를 찍는 사이, 미국에선 시애틀 오피스 공실 36.5%가 CMBS 만기벽을 직격했습니다. 한편 렌딧 창업자의 AI 핀테크 하이퍼칼이 알토스 시드를 받으며 보험계리 자동화에 도전합니다 — 부동산금융 실무자가 국내 과열과 해외 균열, 그리고 핀테크 혁신을 함께 읽어야 할 국면입니다.",
      articles: [
        {
          title: "서울 아파트값 0.25% 또 올라…동탄 0.60% '전국 최고' 질주",
          desc: "한국부동산원 6월 첫째 주 주간동향(6/4 발표)에서 서울 아파트 매매가가 전주와 같은 0.25% 상승했습니다. 상승세가 강남(송파 0.28%)을 넘어 동대문 0.37%·강북 0.35% 등 외곽과 경기(광명 0.43%·성남 수정 0.42%)로 확산됐습니다. 반도체 훈풍을 탄 동탄은 0.60% 올라 전주(0.49%)보다 폭을 키우며 전국 최고 상승률을 기록했습니다 — 전세 부담에 밀린 실수요가 '가성비 지역'으로 이동하는 양상입니다.",
          source: "이투데이",
          href: "https://www.etoday.co.kr/news/view/2590474",
        },
        {
          title: "美 알토스벤처스가 점찍은 K-핀테크…렌딧 창업자 '하이퍼칼' 시드 유치",
          desc: "렌딧 창업자 김성준 대표의 신규 AI 핀테크 스타트업 하이퍼칼(HyperCal)이 6월 5일 미국 실리콘밸리 VC 알토스벤처스로부터 시드 투자를 유치했습니다. 보험 계리(Actuarial) 영역의 수작업·레거시 시스템 문제를 AI로 푸는 것이 목표로, 현재 PoC 단계입니다 — 글로벌 초기투자가 산업 특화 핀테크로 세분화되는 흐름을 보여주는 사례입니다.",
          source: "머니투데이",
          href: "https://www.mt.co.kr/future/2026/06/05/2026060509224033689",
        },
        {
          title: "美 오피스 공실 1위 된 시애틀…36.5% 공실에 CMBS 만기벽 직격",
          desc: "美 부동산 벤치마크: 시애틀 다운타운 오피스 공실률이 1분기 36.5%(전분기 33%)로 치솟아 샌프란시스코를 제치고 전국 최악으로 올라섰습니다(6/5 보도). 고금리·자산가치 하락으로 만기 도래 CMBS 대출의 차환이 막히면서, 월납 연체가 아닌 '만기 디폴트'가 핵심 리스크로 부상했습니다 — 한국 오피스·대체투자 익스포저 점검의 거울입니다.",
          source: "Commercial Real Estate Direct",
          href: "https://crenews.com/2026/06/05/seattles-office-struggles-could-impact-maturing-cmbs-loans/",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주 정부·공공 트랙의 핵심은 글로벌 액셀러레이팅 'K-Startup Grand Challenge 2026'(마감 6/17 15:00)과, 2026년 창업지원사업 통합공고·초기창업패키지 딥테크 특화형 모집입니다. AI·딥테크 창업자는 마감 전 아래 공고를 우선 확인하시길 권합니다.",
      items: [
        {
          title: "K-Startup Grand Challenge 2026 — 글로벌 스타트업 액셀러레이팅 (마감 6/17 15:00)",
          href: "https://ksgc.global/",
        },
        {
          title: "K-Startup 신규 사업 공고 — 전략기술 딥테크 창업 촉진·서울 AI 허브 등 모집 중",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "2026년 초기창업패키지(딥테크 특화형) 창업기업 모집 — 빅데이터·AI 등 딥테크 5대 분야",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000117173",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 6월 1일 신규 공지된 토론토대 연계 AI 융합 교육프로그램 모집과, AI 스킬 특강·Apple 디벨로퍼 아카데미 워크숍입니다. 경영대에서는 CFA Institute Rob Langrick 초청 특강도 예정돼 있으니, AIMBA 원우는 관심 프로그램의 마감일을 우선 점검하시길 권합니다.",
      items: [
        {
          title: "[AI학과] 2027년도 캐나다 University of Toronto AI 융합 교육프로그램 모집 (6/1 신규)",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "[SW중심대학] AI 시대 필요한 스킬 특강 & Apple 디벨로퍼 아카데미 소개 워크숍 (5/26)",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
        {
          title: "[경영대] CFA Institute Rob Langrick 초청 특강 안내",
          href: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do",
        },
        {
          title: "[MOT] 기술경영전문대학원 공지사항 (특강·포럼 상시 모니터링)",
          href: "https://sgmot.sogang.ac.kr/gopage/sogangmot/goboard2.jsp?bbsConfigFK=22&siteId=sogangmot",
        },
      ],
    },
  ],
  events: [
    { date: "6월 10일", day: "수", title: "Smart Tech Korea 2026 (AI & Big Data Show, 6/10~6/12)", where: "서울 COEX Hall A", tag: "전시/컨퍼런스", link: "https://en.smarttechkorea.com/aibigdatashow" },
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series (6/22~6/24)", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "7월 7일", day: "화", title: "ICML 2026 (International Conference on Machine Learning, 7/7~7/9)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
  ],
};

const VOL10: IssueContent = {
  vol: 10,
  dateLabel: "2026년 6월 3일",
  isoDate: "20260603",
  title:
    "자본·성능·개발문화가 동시에 정점 — Anthropic $965B 질주·Opus 4.8 1위·바이브코딩이 창업 표준이 된 주",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주 AI 경쟁은 자본과 성능 양쪽에서 정점을 찍었습니다. Anthropic이 시리즈 H로 650억 달러를 조달해 기업가치 약 9,650억 달러로 OpenAI를 바짝 추격했고, Claude Opus 4.8이 주요 리더보드에서 1위권에 오르며 IPO 경쟁의 압력을 한층 끌어올렸습니다.",
    "더 큰 변화는 '개발 문화'에서 일어났습니다. 자연어로 소프트웨어를 만드는 '바이브코딩'이 실험을 넘어 2026년 스타트업이 제품을 빌드하는 표준 워크플로로 자리잡았고, 이번 호부터 이를 다루는 'Vibe Coding' 코너를 신설했습니다.",
  ],
  conclusion:
    "자본·모델·개발문화 세 축이 같은 주에 임계점을 넘었으며, AI를 '쓰는 법(바이브코딩)'을 먼저 조직 워크플로에 체화하는 팀이 다음 분기를 가져갑니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "Anthropic은 5월 28일 플래그십 Claude Opus 4.8을 공개하며 Vellum·Artificial Analysis 등 주요 리더보드 선두권에 올랐고, 구글은 I/O 2026에서 경량·고속 Gemini 3.5 Flash와 에이전트 빌더 Gemini Spark를 선보이며 추격했습니다. 엔터프라이즈에서는 Asana가 노코드 에이전트 빌더 StackAI를 인수하며 '에이전트를 업무 플랫폼에 직접 심는' 경쟁이 본격화됐습니다.",
      articles: [
        {
          title: "Anthropic, 플래그십 Claude Opus 4.8 공개…OpenAI와 IPO 경쟁 가열",
          desc: "Anthropic이 5월 28일 플래그십 모델 Claude Opus 4.8을 공개했습니다 — 주요 지능 벤치마크에서 선두권에 오르며, OpenAI와의 기업가치·IPO 경쟁이 한층 달아올랐습니다.",
          source: "Yahoo Finance",
          href: "https://finance.yahoo.com/news/anthropic-debuts-flagship-claude-opus-48-ai-model-as-ipo-race-with-openai-heats-up-170000527.html",
        },
        {
          title: "Google I/O 2026: Gemini 3.5 Flash·Gemini Spark 공개",
          desc: "구글이 I/O 2026에서 경량·고속 Gemini 3.5 Flash와, 누구나 에이전트를 만드는 Gemini Spark를 선보이며 '에이전트 퍼스트' 전략을 재확인했습니다 — 모델 경쟁이 성능과 접근성 양면으로 확장됐습니다.",
          source: "Duke Digital Media",
          href: "https://sites.duke.edu/ddmc/2026/05/23/google-i-o-2026-gemini-3-5-flash-gemini-omni-gemini-spark/",
        },
        {
          title: "Vellum LLM 리더보드 2026 (5월 업데이트)",
          desc: "Vellum이 5월 29일 갱신한 LLM 리더보드에서 Claude Opus 4.8·GPT·Gemini 최신 모델의 추론·코딩·비용 지표를 한눈에 비교했습니다 — 어떤 작업에 어떤 모델을 쓸지 정하는 실무 기준점입니다.",
          source: "Vellum",
          href: "https://www.vellum.ai/llm-leaderboard",
        },
        {
          title: "Asana, 노코드 에이전트 빌더 StackAI 인수",
          desc: "Asana가 노코드 AI 에이전트 빌더 StackAI를 인수하며 업무관리 플랫폼에 에이전트 구축 기능을 직접 내재화했습니다 — SaaS 기업들이 '에이전트를 사들여 제품에 박는' 흐름을 보여준 사례입니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "AI 비즈니스가 '자본 규모'와 '수익 모델' 양쪽에서 동시에 시험대에 올랐습니다. Anthropic은 시리즈 H로 650억 달러를 조달하며 약 9,650억 달러 가치로 OpenAI를 바짝 추격했고, GitHub Copilot은 토큰 기반 과금으로 전환하며 'AI 도구의 단위경제'를 둘러싼 개발자 반발을 불렀습니다. 한편 '바이브코딩'은 2026년 스타트업이 제품을 만드는 표준 방식으로 자리잡았습니다.",
      articles: [
        {
          title: "Anthropic, 650억 달러 조달…IPO 앞두고 1조 달러 가치 육박",
          desc: "Anthropic이 시리즈 H로 650억 달러를 유치하며 기업가치 약 9,650억 달러에 올라 OpenAI를 바짝 추격했습니다 — IPO를 앞둔 AI 메가라운드 경쟁이 정점에 달했습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/",
        },
        {
          title: "'장난하나'…GitHub Copilot 토큰 과금 전환에 개발자 반발",
          desc: "GitHub Copilot이 정액제에서 토큰 기반 과금으로 전환하자 개발자들이 비용 예측 불가를 이유로 강하게 반발했습니다 — AI 코딩 도구의 지속가능한 단위경제가 핵심 쟁점으로 떠올랐습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/",
        },
        {
          title: "바이브코딩, 2026년 스타트업이 제품을 만드는 표준이 되다",
          desc: "SeedScope는 2026년 스타트업 다수가 기획부터 출시까지를 자연어 기반 '바이브코딩'으로 빌드하고 있다고 분석했습니다 — 비개발자 창업자도 AI 에이전트로 MVP를 빠르게 만드는 시대가 열렸습니다.",
          source: "SeedScope",
          href: "https://seedscope.ai/blog/vibe-coding-is-how-startups-are-being-built-in-2026.-here-is-what-founders-need-to-know.",
        },
        {
          title: "벤처 투자 라운드업 (5월 28일) — Fonoa·Corgi·Daloopa·Saris",
          desc: "Fonoa·Corgi·Daloopa·Saris 등 5월 말 주요 라운드를 정리했습니다 — 규제·세무·데이터 자동화처럼 '명확한 업무 병목을 푸는' AI 버티컬에 자본이 선별적으로 집중되는 흐름입니다.",
          source: "Tech Startups",
          href: "https://techstartups.com/2026/05/28/venture-capital-startup-funding-roundup-may-28-2026/",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "AI 시대 MBA의 핵심 화두는 '커리큘럼'과 '채용 기준'으로 동시에 모였습니다. 하버드 경영대학원이 AI를 정규 커리큘럼 전반에 통합하기 시작했고, GMAC 2026 조사는 경영대학원이 AI 역량을 커리큘럼의 핵심 축으로 빠르게 편입하고 있음을 보였습니다. 고용주들은 MBA 채용을 늘리면서도 'AI 유창성'을 채용의 기본 전제로 요구하기 시작했습니다.",
      articles: [
        {
          title: "하버드 경영대학원, AI를 커리큘럼 전면에 통합",
          desc: "하버드 비즈니스스쿨이 AI를 정규 커리큘럼 전반에 통합하는 개편에 착수했습니다 — 사례연구·재무·전략 과목에 AI 활용을 내재화하며, AI 시대 경영교육의 방향을 제시했습니다.",
          source: "Harvard Crimson",
          href: "https://www.thecrimson.com/article/2026/4/11/hbs-ai-integration/",
        },
        {
          title: "GMAC 2026: B스쿨 커리큘럼, AI 역량을 핵심 축으로",
          desc: "GMAC 2026 조사에 따르면 경영대학원들이 AI 활용 역량을 커리큘럼의 핵심 축으로 빠르게 편입하고 있으며, 지원자 평가와 졸업생 경쟁력에서도 AI 유창성이 변별 요소로 부상하고 있습니다.",
          source: "Careers360",
          href: "https://news.careers360.com/b-schools-skills-ai-curriculum-study-destination-career-outcomes-roi-gme-mba-business-masters-student-survey-gmac-report-2026",
        },
        {
          title: "고용주들 'MBA 채용 늘린다'…AI 유창성은 이제 기본값",
          desc: "CSP 글로벌이 매니저 500명을 조사한 결과, 2026년 더 많은 고용주가 MBA 채용을 계획하면서 AI 유창성을 채용의 '기본 전제'로 요구하기 시작했습니다 — AIMBA 원우에게 AI 실무 역량이 곧 시장 가치임을 보여줍니다.",
          source: "CSP Global",
          href: "https://online.csp.edu/resources/article/more-employers-plan-to-hire-mbas-in-2026-and-ai-fluency-is-now-the-baseline/",
        },
        {
          title: "2026 직무 트렌드: AI와 인간 역량, 그리고 채용 시장 전망",
          desc: "GMAC가 2026년 일터 트렌드로 AI 활용 능력과 인간 고유 역량(리더십·소통)의 결합을 꼽으며, MBA 졸업생의 채용 시장 전망을 분석했습니다 — '기술 + 사람' 역량을 함께 갖춘 인재가 우위에 섭니다.",
          source: "GMAC",
          href: "https://www.gmac.com/resources/learners/business-careers/career-planning/workplace-trends-job-market-predictions",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "자본이 'AI 경제의 운영 레이어'와 국내 딥테크에 동시에 몰렸습니다. 여러 LLM을 한 API로 묶는 모델 라우팅 인프라 OpenRouter가 1년 만에 기업가치를 두 배로 키워 13억 달러에 올랐고, 국내에서는 AR 광학 레티널(278억)과 통신 반도체 뉴라텍(218억)이 대형 라운드를 마감하며 자본이 소프트웨어를 넘어 하드웨어·딥테크로 확장되는 흐름을 보였습니다.",
      articles: [
        {
          title: "OpenRouter, 1년 만에 기업가치 두 배…13억 달러로 점프",
          desc: "여러 LLM을 한 API로 묶는 모델 라우팅 인프라 OpenRouter가 시리즈 B로 1억 1,300만 달러를 유치하며 기업가치 13억 달러에 올랐습니다 — AI 경제의 '운영 레이어'를 쥔 인프라에 자본이 집중되는 흐름입니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/26/openrouter-more-than-doubles-valuation-to-1-3b-in-a-year/",
        },
        {
          title: "AR 광학 레티널, 278억원 프리IPO 투자유치",
          desc: "AR 글래스용 광학기술 기업 레티널(Letinar)이 278억 원 규모 프리IPO 라운드를 유치하며, 국내 자본이 피지컬·하드웨어 AI 분야로 확장되는 흐름을 보여줬습니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1083124",
        },
        {
          title: "통신 반도체 뉴라텍, 218억원 투자유치",
          desc: "무선통신 반도체 설계 기업 뉴라텍이 218억 원을 유치하며, AI 인프라의 핵심인 반도체·통신 딥테크에 대한 투자 열기를 이어갔습니다 — 같은 주 레티널과 함께 국내 딥테크 라운드가 집중됐습니다.",
          source: "스타트업레시피",
          href: "https://startuprecipe.co.kr/archives/5818165",
        },
        {
          title: "2026년 5월, 시드·시리즈A AI·핀테크 스타트업에 초기 자금 집중",
          desc: "2026년 5월 국내외 시드·시리즈A 라운드가 AI·핀테크 버티컬에 집중되며, 초기 단계 스타트업으로도 글로벌 자금이 선별적으로 유입되는 흐름이 확인됐습니다.",
          source: "유스연합뉴스",
          href: "https://www.youthassembly.kr/news/949698",
        },
      ],
    },
    {
      id: "vibe",
      label: "Vibe Coding",
      code: "VIBE",
      narrative:
        "이번 호부터 신설하는 'Vibe Coding' 코너는 AI 에이전트와 자연어로 소프트웨어를 만드는 개발 문화를 다룹니다. Anthropic·Cursor 등 핵심 도구사가 잇따라 베스트 프랙티스를 공개하고, '스펙 주도 개발(SDD)'처럼 비개발자도 따라 할 수 있는 방법론이 정리되면서, 바이브코딩이 실험에서 '재현 가능한 워크플로'로 성숙하고 있습니다. AIMBA 원우가 직접 MVP를 만드는 데 바로 쓸 수 있는 실전 가이드를 모았습니다.",
      articles: [
        {
          title: "Claude Code 베스트 프랙티스 (Anthropic 공식 가이드)",
          desc: "Anthropic이 공개한 Claude Code 공식 가이드 — CLAUDE.md 설정, 컨텍스트 관리, 에이전트 워크플로 설계 등 AI 코딩의 기본기를 한 문서로 정리했습니다. 💡 핵심: 프로젝트 루트에 CLAUDE.md로 맥락을 풍부하게 주면 답의 질이 급상승합니다.",
          source: "Anthropic",
          href: "https://code.claude.com/docs/en/best-practices",
        },
        {
          title: "에이전트와 코딩하는 베스트 프랙티스 (Cursor)",
          desc: "Cursor가 정리한 에이전트 코딩 실전 가이드 — 작은 단위로 검증하고 규칙(rules)으로 일관성을 유지하는 법을 다룹니다. 💡 핵심: 큰 작업은 Plan 모드로 먼저 계획→승인→실행으로 쪼개세요.",
          source: "Cursor",
          href: "https://cursor.com/blog/agent-best-practices",
        },
        {
          title: "Claude Code, 첫날부터 알았으면 좋았을 팁들",
          desc: "실무 개발팀 Marmelab이 Claude Code를 쓰며 체득한 팁 모음 — 커스텀 명령, 컨텍스트 관리, 반복 작업 자동화 노하우입니다. 💡 핵심: 자주 쓰는 작업은 커스텀 슬래시 명령으로 만들어 반복을 제거하세요.",
          source: "Marmelab",
          href: "https://marmelab.com/blog/2026/04/24/claude-code-tips-i-wish-id-had-from-day-one.html",
        },
        {
          title: "Cursor로 하는 스펙 주도 개발(SDD)",
          desc: "Augment Code가 정리한 '스펙 주도 개발' 가이드 — 코드를 짜기 전에 명세를 먼저 합의하면 비개발자도 AI와 일관된 결과물을 만들 수 있다는 방법론입니다. 💡 핵심: 코딩 전에 스펙을 먼저 합의하면 AI 산출물이 의도에서 덜 벗어납니다.",
          source: "Augment Code",
          href: "https://www.augmentcode.com/guides/cursor-spec-driven-development",
        },
      ],
    },
    {
      id: "rwa",
      label: "블록체인 · RWA",
      code: "RWA",
      narrative:
        "RWA(실물연계자산) 토큰화가 자산운용 빅네임과 제도권으로 더 깊이 들어갔습니다. BlackRock이 스테이블코인 보유자를 겨냥한 토큰화 펀드를 확대하고, 스테이블코인을 제외한 전체 RWA 시장이 약 345억 달러로 1년 새 두 배로 커졌습니다. 월스트리트는 주식시장 전체의 토큰화 경쟁에 뛰어들었고, 한국은 디지털자산기본법·스테이블코인 발행 주체를 둘러싼 제도 설계 국면에 들어갔습니다.",
      articles: [
        {
          title: "BlackRock, 스테이블코인 보유자 겨냥 토큰화 펀드 확대",
          desc: "BlackRock이 이더리움 기반 토큰화 펀드를 스테이블코인 보유자에게 열며 온체인 정산 인프라에 프로덕션급 자본을 투입하고 있습니다 — 자산운용 빅네임의 RWA 진입이 가속되고 있습니다.",
          source: "SpazioCrypto",
          href: "https://en.spaziocrypto.com/rwa/blackrock-tokenized-funds-stablecoin-holders/",
        },
        {
          title: "RWA 시장 규모 345억 달러…1년 새 약 2배 성장",
          desc: "스테이블코인을 제외한 온체인 RWA 시장이 약 345억 달러로 1년 새 100% 이상 성장했으며, 토큰화 국채가 최대 비중을 차지했습니다 — 실험 단계를 넘어 제도권 인프라로 자리잡는 신호입니다.",
          source: "Bitcoin.com",
          href: "https://news.bitcoin.com/rwa-market-cap-37-5-billion-120-percent-growth-2026/",
        },
        {
          title: "월스트리트가 '주식시장 전체'를 토큰화하려는 이유",
          desc: "월스트리트가 주식시장 전체의 토큰화 경쟁에 뛰어들었으며, Bullish의 Equiniti 42억 달러 인수 등 인프라 선점 움직임이 본격화됐습니다 — 토큰화가 채권을 넘어 주식으로 확장되는 분기점입니다.",
          source: "CoinDesk",
          href: "https://www.coindesk.com/business/2026/05/14/here-is-why-wall-street-is-racing-to-tokenize-the-entire-stock-market",
        },
        {
          title: "디지털자산기본법·스테이블코인 발행주체 논쟁 본격화",
          desc: "한국에서 디지털자산기본법 입법과 원화 스테이블코인 발행 주체(은행 vs 비은행)를 둘러싼 제도 설계 논쟁이 본격화되며, 2026년이 제도권 RWA·스테이블코인의 분기점으로 부상했습니다.",
          source: "파이낸셜뉴스",
          href: "https://www.fnnews.com/news/202605051838387567",
        },
      ],
    },
    {
      id: "re",
      label: "부동산 · 핀테크",
      code: "RE",
      narrative:
        "부동산·금융 인프라가 '모험자본 공급'과 '리스크 관리' 양쪽에서 동시에 재편되고 있습니다. 종합금융투자사업자의 발행어음을 통한 모험자본 공급이 54조 원대로 커지며 자본시장이 부동산·벤처로 자금을 흘려보내는 엔진이 진화했고, 서울 아파트값은 약 3개월 만에 최대폭으로 반등했습니다. 동시에 저축은행의 부동산업 대출 연체율이 오르며 부동산금융의 건전성 관리가 핵심 과제로 떠올랐습니다.",
      articles: [
        {
          title: "모험자본 엔진 진화…종투사 발행어음 54조 시대",
          desc: "종합금융투자사업자의 발행어음 잔액이 54조 원대로 커지며, 자본시장이 부동산·벤처로 모험자본을 공급하는 엔진이 한 단계 진화했습니다 — 부동산금융 실무의 자금 조달 구조가 바뀌는 흐름입니다.",
          source: "파이낸셜뉴스",
          href: "https://www.fnnews.com/news/202605160903064409",
        },
        {
          title: "서울 아파트값 주간 +0.28%…3개월 만에 최대 상승",
          desc: "서울 아파트 매매가격이 주간 0.28% 올라 약 3개월 만에 최대 상승폭을 기록하며, 규제·금리 환경 속에서도 핵심지 수요가 견조함을 보였습니다.",
          source: "머니투데이",
          href: "https://www.mt.co.kr/amp/estate/2026/05/14/2026051414573745425",
        },
        {
          title: "저축은행 부동산업 대출 연체율 상승…건전성 경고등",
          desc: "저축은행의 부동산업종 대출 연체율이 오르며 부동산금융의 건전성 관리가 핵심 과제로 떠올랐습니다 — PF·브릿지 익스포저를 둔 금융사의 리스크 점검이 시급한 국면입니다.",
          source: "아주경제",
          href: "https://www.ajunews.com/view/20260531145617442",
        },
        {
          title: "NAR, 2026년 5월 미국 상업용 부동산 인사이트",
          desc: "전미부동산중개인협회(NAR)가 2026년 5월 상업용 부동산 시장 인사이트를 공개하며, 금리·공실·거래량 지표로 미국 CRE 시장의 회복·조정 신호를 진단했습니다 — 국내 부동산금융 비교 벤치마크입니다.",
          source: "NAR",
          href: "https://www.nar.realtor/commercial-real-estate-market-insights/may-2026-commercial-real-estate-market-insights",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주 정부·공공 트랙에서는 K-Startup을 통한 딥테크(DIPS)·방산·산업 AI 분야 지원사업 2차 모집이 잇따랐고, 중소벤처기업부의 2026년 창업지원사업 통합공고가 진행 중입니다. AI·딥테크 창업자·중소기업은 마감 전 아래 공고를 확인하시길 권합니다.",
      items: [
        {
          title: "딥테크(DIPS) AX 분야 2차 모집 — K-Startup 창업지원포털",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
        {
          title: "방산 스타트업 챌린지 2차 모집 — K-Startup 창업지원포털",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
        {
          title: "산업 AI EXPO 참가기업(공동관) 모집 — K-Startup 창업지원포털",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 6월 1일 신규 공지된 토론토대 연계 AI 융합 교육프로그램 모집입니다. 이와 함께 Apple 디벨로퍼 아카데미 연계 워크숍, 하계 AI·SW 실습멘토 모집 등 AI 실습 기회가 집중됐으니, AIMBA 원우는 관심 프로그램의 마감일을 우선 점검하시길 권합니다.",
      items: [
        {
          title: "토론토대 연계 AI 융합 교육프로그램 모집 (6/1 신규) — 인공지능학과 공지",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "Apple 디벨로퍼 아카데미 연계 워크숍·특강 안내 — SW중심대학사업단",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
        {
          title: "2026 하계 AI·SW 실습멘토 모집 — SW중심대학사업단",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
        {
          title: "서강대 인공지능학과 공지 (특강·콜로퀴엄 상시 모니터링)",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
      ],
    },
  ],
  events: [
    { date: "6월 10일", day: "수", title: "Smart Tech Korea 2026 (AI & Big Data Show, 6/10~6/12)", where: "서울 COEX", tag: "전시/컨퍼런스", link: "https://en.smarttechkorea.com/aibigdatashow" },
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series (6/22~6/24)", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "7월 7일", day: "화", title: "ICML 2026 (International Conference on Machine Learning, 7/7~7/9)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
  ],
};

const VOL9: IssueContent = {
  vol: 9,
  dateLabel: "2026년 6월 1일",
  isoDate: "20260601",
  title:
    "프런티어가 한 단계 더 위로 — Claude Opus 4.8·Qwen 3.7 Max·Cognition $1B가 만든 에이전트 실력 경쟁의 주",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주는 모델 발표가 '이벤트'에서 '분기 업데이트'로 일상화되는 가운데, Anthropic의 Claude Opus 4.8이 지능 지표 1위에 오르고 Alibaba Qwen 3.7 Max가 1M 토큰·에이전트 특화로 추격하며 프런티어 실력 경쟁이 한 단계 더 위로 올라간 장면이 선명했습니다.",
    "자본 시장에서는 AI 코딩 에이전트 Cognition이 8개월 만에 기업가치를 두 배로 키워 $26B에 $1B를 조달했고, 엔터프라이즈에서는 Anthropic·Salesforce가 '에이전트를 고객 보안 경계 안으로' 들이는 배포 경쟁에 들어갔습니다.",
  ],
  conclusion:
    "모델은 이제 '누가 더 똑똑한가'를 넘어 '누가 더 오래·안전하게 일을 끝내는가'로 평가받기 시작했으며, 이 자율 실행 신뢰도를 먼저 조직 워크플로에 심는 팀이 다음 분기를 가져갑니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "Anthropic은 5월 28일 Claude Opus 4.8을 공개하며 Artificial Analysis 지능 지수 1위(61.4)에 올랐고, Online-Mind2Web 84%로 에이전트형 작업의 신뢰도를 한 단계 끌어올렸습니다. Alibaba는 5월 20일 Qwen 3.7 Max를 정식 발표하며 1M 토큰 컨텍스트와 '에이전트 프런티어'를 내세워 35시간 연속 자율 실행을 시연했습니다. 모델 경쟁의 축이 단발 성능에서 '장기 자율 실행 + 비용'으로 이동했습니다.",
      articles: [
        {
          title: "Introducing Claude Opus 4.8",
          desc: "Anthropic이 5월 28일 Claude Opus 4.8을 공개했습니다 — Artificial Analysis 지능 지수 1위(61.4)로 GPT-5.5를 추월, Online-Mind2Web 84% 달성, claude.ai에 작업 노력(effort) 제어와 Claude Code '동적 워크플로' 기능을 추가했습니다.",
          source: "Anthropic",
          href: "https://www.anthropic.com/news/claude-opus-4-8",
        },
        {
          title: "Alibaba introduces Qwen3.7-Max as next-gen AI agent model",
          desc: "Alibaba가 5월 20일 클라우드 서밋에서 Qwen 3.7 Max를 정식 발표했습니다 — 1M 토큰 컨텍스트, Terminal-Bench·SWE-Bench Pro에서 상위권, 내부 테스트에서 1,000회 이상 도구 호출과 최대 35시간 자율 실행을 시연한 '에이전트 프런티어' 모델입니다.",
          source: "TechNode",
          href: "https://technode.com/2026/05/21/alibaba-introduces-qwen3-7-max-as-next-gen-ai-agent-model/",
        },
        {
          title:
            "Qwen Introduces Qwen3.7-Max: A Reasoning Agent Model With a 1M-Token Context Window",
          desc: "Qwen 3.7 Max는 1M 토큰 컨텍스트와 56.6 지능 지수를 갖춘 폐쇄형 에이전트 특화 모델로, $2.50/$7.50(100만 토큰) 가격으로 Opus 4.7 대비 약 절반 수준에서 장기 자율 코딩·추론 워크플로를 겨냥합니다.",
          source: "MarkTechPost",
          href: "https://www.marktechpost.com/2026/05/21/qwen-introduces-qwen3-7-max-a-reasoning-agent-model-with-a-1m-token-context-window/",
        },
        {
          title: "AI coding startup Cognition raises $1B at $25B pre-money valuation",
          desc: "Devin을 만든 Cognition이 Lux Capital·General Catalyst·8VC 주도로 $1B+를 조달해 기업가치 $26B에 올랐으며, 연환산 매출이 1년 만에 $37M→$492M으로 급증해 AI 코딩 에이전트의 엔터프라이즈 수요를 입증했습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "엔터프라이즈 AI의 화두가 '도입 여부'에서 '에이전트를 고객 보안 경계 안으로 어떻게 들이느냐'로 이동했습니다. Anthropic은 5월 19일 자체 인프라에서 도구를 실행하는 self-hosted 샌드박스와 MCP 터널을 공개했고, Salesforce는 5월 21일 검색을 행동으로 바꾸는 Agentforce Coworker를 베타 출시했습니다. ServiceNow·Accenture는 '실증 후 전사 확산' 모델로 에이전트 배포의 마지막 1마일을 메우고 있습니다.",
      articles: [
        {
          title: "New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels",
          desc: "Anthropic이 5월 19일 Code with Claude London에서 self-hosted 샌드박스(퍼블릭 베타)와 MCP 터널(리서치 프리뷰)을 공개했습니다 — 민감 데이터·도구 실행은 기업 내부에 두고, 오케스트레이션만 Anthropic이 담당해 '에이전트를 보안 경계 안으로' 들이는 모델입니다.",
          source: "Anthropic (Claude Blog)",
          href: "https://claude.com/blog/claude-managed-agents-updates",
        },
        {
          title: "Salesforce Announces Agentforce Coworker: AI 'In Every Search Bar'",
          desc: "Salesforce가 5월 21일 Agentforce Coworker를 베타 출시했습니다 — CRM·Slack·270여 개 외부 데이터를 하나의 대화형 인터페이스로 묶어 '검색을 답으로, 답을 실행으로' 바꾸며, 월 10억 회에 달하는 Salesforce 검색을 에이전트 행동으로 전환합니다.",
          source: "Salesforce Ben",
          href: "https://www.salesforceben.com/salesforce-announces-agentforce-coworker-ai-in-every-search-bar/",
        },
        {
          title:
            "ServiceNow and Accenture Launch Forward Deployed Engineering Program to Scale Agentic AI",
          desc: "ServiceNow와 Accenture가 5월 6일 Forward Deployed Engineering 프로그램을 출범했습니다 — 300여 개 사전 구축 에이전트 스킬을 고객 환경에서 직접 구현하며, '전사적 AI 효과를 지속한다'고 답한 리더가 32%에 그친 '실행 격차'를 메우는 것을 목표로 합니다.",
          source: "Accenture Newsroom",
          href: "https://newsroom.accenture.com/news/2026/servicenow-and-accenture-launch-forward-deployed-engineering-program-to-scale-agentic-ai-across-the-enterprise",
        },
        {
          title: "Anthropic debuts MCP tunnels and self-hosted sandboxes to lock down AI agent infrastructure",
          desc: "MCP 터널은 경량 게이트웨이가 단일 아웃바운드 연결만 열어, 내부 DB·사설 API·지식베이스·티켓 시스템을 인바운드 방화벽 규칙 없이 에이전트의 도구로 연결합니다 — 규제 산업의 에이전트 도입 장벽을 직접 겨냥한 설계입니다.",
          source: "The New Stack",
          href: "https://thenewstack.io/anthropic-mcp-tunnels-sandboxes/",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "이번 주 MBA 씬의 핵심은 'AI 시대에 MBA의 가치가 무엇인가'라는 질문이 학생·지원자·입학처 세 층위에서 동시에 제기됐다는 점입니다. Poets&Quants는 AI 벤처 창업자가 'AI는 내 커리어를, MBA는 내 사고를 바꿨다'고 말한 사례와, AI로 작성한 지원서가 입학처에서 통하지 않는다는 현장 진단을 같은 주에 다뤘습니다. 임원 교육 시장은 AI 주제로 사상 최대 규모로 성장 중입니다.",
      articles: [
        {
          title: "AI Changed My Career. The MBA Changed My Thinking",
          desc: "LBS 졸업생이자 AI 벤처 창업자가 'AI 시대일수록 MBA의 가치가 더 커진다'고 말합니다 — 기술은 커리어를 바꾸지만, 인간+AI 조직을 이끄는 판단력과 사고의 틀은 여전히 경영 교육에서 길러진다는 관점입니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/25/ai-changed-my-career-the-mba-changed-my-thinking/",
        },
        {
          title:
            "The MBA Applicant's Guide To AI In 2026: What's Allowed, What's Risky, And What To Avoid",
          desc: "입학 담당자들이 AI로 작성한 지원서가 '통조림 에세이'처럼 진정성이 떨어진다고 진단합니다 — AI를 브레인스토밍 보조로 쓰되, 자기 목소리를 잃으면 오히려 감점이라는 2026 지원 전략 가이드입니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/26/the-mba-applicants-guide-to-ai-in-2026-whats-allowed-whats-risky-and-what-to-avoid/",
        },
        {
          title: "Business schools boost revenue with executive education courses",
          desc: "하버드·MIT·Kellogg 등이 AI 주제 단기 임원 교육으로 수억 달러 매출을 창출하며, 글로벌 임원 교육 시장은 2026년 551억 달러 규모로 성장했습니다 — AIMBA 원우에게는 정규 학위 외 단기 AI 과정 활용의 레퍼런스입니다.",
          source: "Marketplace",
          href: "https://www.marketplace.org/story/2026/05/19/business-schools-boost-revenue-with-executive-education-courses",
        },
        {
          title: "The Top MBA Admissions Consultants Of 2026",
          desc: "Poets&Quants가 가장 호평받은 2026 MBA 입학 컨설턴트 순위를 공개했습니다 — Personal MBA Coach의 Scott Edinburgh가 9.98 만족도로 1위에 오르며, AI 시대 지원 시장에서도 '사람이 검증한 전략'의 수요가 유지됨을 보여줍니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/18/the-top-mba-admissions-consultants-of-2026/",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "자본은 '병목을 푸는 곳'으로 더 선명하게 집중되고 있습니다. 글로벌에서는 AI 코딩 에이전트 Cognition($1B)과 모델 라우팅 OpenRouter(시리즈B $113M)처럼 AI 경제의 운영 레이어를 쥔 기업에 대형 자금이 몰렸습니다. 국내에서는 웨어러블 로봇 위로보틱스가 950억 원 시리즈B로 5월 최대 규모 라운드를 기록하며, 피지컬 AI·딥테크로 자본이 확장되는 흐름을 보였습니다.",
      articles: [
        {
          title: "위로보틱스, 950억원 시리즈B 투자 유치…5월 국내 최대 라운드",
          desc: "보행 보조용 웨어러블 로봇 기업 위로보틱스가 950억 원 규모 시리즈B를 유치해 5월 둘째 주 국내 최대 라운드를 기록했으며, 자본이 소프트웨어 AI를 넘어 피지컬 AI·로보틱스 딥테크로 확장되는 흐름을 보여줬습니다.",
          source: "머니투데이",
          href: "https://www.mt.co.kr/amp/future/2026/05/17/2026051714180265167",
        },
        {
          title: "Venture Capital & Startup Funding Roundup, May 27, 2026",
          desc: "Cognition $1B+, Capchase $200M+, Thea Energy $100M 시리즈B 등 5월 27일 하루의 주요 라운드를 정리했습니다 — '검증된 엔터프라이즈 수요·컴퓨팅 비용 절감·소프트웨어 공급망 강화'에 자본이 집중된다는 분석입니다.",
          source: "Tech Startups",
          href: "https://techstartups.com/2026/05/27/venture-capital-startup-funding-roundup-may-27-2026/",
        },
        {
          title: "AI coding startup Cognition raises $1B at $25B pre-money valuation",
          desc: "Devin 개발사 Cognition이 $1B+를 조달해 기업가치 $26B에 올랐으며, 연환산 매출이 1년 만에 $37M→$492M으로 급증해 AI 에이전트가 실매출로 자본을 끌어들이는 단계에 진입했음을 보였습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/",
        },
        {
          title: "Q1 2026 Shatters Venture Funding Records As AI Boom Pushes Investment To $300B",
          desc: "Crunchbase 집계에서 2026년 1분기 글로벌 벤처 투자가 약 3,000억 달러로 사상 최대를 기록했으며, 자금이 소수의 대형 AI 확신 베팅에 쏠리는 '집중형 구조'가 2분기까지 이어지고 있습니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/",
        },
      ],
    },
    {
      id: "rwa",
      label: "블록체인 · RWA",
      code: "RWA",
      narrative:
        "RWA(실물연계자산) 토큰화가 '실험'에서 '제도권 인프라'로 넘어가는 신호가 동시에 나왔습니다. BlackRock의 BUIDL이 30억 달러 AUM을 돌파하고 Franklin Templeton의 BENJI가 8개 체인으로 확장되며 토큰화 국채 시장이 70억 달러를 넘어섰습니다. 국내에서는 토큰증권(STO) 법제화가 마무리되며 2026년이 실질적 개막 원년으로 자리잡았고, 중국은 위안화 스테이블코인·RWA를 전면 금지하며 규제 분기점을 만들었습니다.",
      articles: [
        {
          title: "RWA Stablecoins Explode in May: BlackRock, Franklin Templeton, and the On-Chain Future",
          desc: "5월 BlackRock BUIDL이 30억 달러 AUM을 돌파하고, Franklin Templeton BENJI가 8개 블록체인으로 확장되며 토큰화 국채 시장이 70억 달러를 넘어섰습니다 — 자산운용 빅네임이 온체인 정산 인프라에 프로덕션급 자본을 투입하기 시작했습니다.",
          source: "RWA Times",
          href: "https://rwatimes.substack.com/p/rwa-stablecoins-explode-in-may-blackrock",
        },
        {
          title: "Tokenized RWAs Grew From $6B To $31B, And The Real Race Is Just Starting",
          desc: "스테이블코인을 제외한 온체인 RWA가 1년 만에 약 60억→310억 달러로 5배 성장했으며, 국채가 약 45%로 최대 비중을 차지하고 토큰화 주식이 가장 빠르게 성장하는 신규 카테고리로 부상했습니다.",
          source: "Yellow.com Research",
          href: "https://yellow.com/research/tokenized-rwas-31b-market-growth-real-race-starting",
        },
        {
          title: "China bans yuan stablecoins and RWA tokenization in new crypto regulation",
          desc: "중국이 새 가상자산 규제로 위안화 스테이블코인과 RWA 토큰화를 전면 금지하며, 미국·홍콩의 제도권 편입 흐름과 정반대 방향을 택했습니다 — 글로벌 RWA 규제 지형이 두 갈래로 갈리는 분기점입니다.",
          source: "Crypto Valley Journal",
          href: "https://cryptovalleyjournal.com/focus/legal-and-compliance/china-bans-yuan-stablecoins-and-rwa-tokenization-in-new-crypto-regulation/",
        },
        {
          title: "Global Tokenized Real Estate Market Could Explode to $4T by 2035 (Deloitte)",
          desc: "Deloitte는 부동산 토큰화 시장이 2035년 4조 달러 규모로 성장할 수 있다고 전망합니다 — 국내 STO 법제화와 맞물려 부동산금융·대체투자의 토큰화 트랙이 AIMBA 원우의 실무 관심사로 부상하고 있습니다.",
          source: "CoinDesk",
          href: "https://www.coindesk.com/markets/2025/04/24/global-tokenized-real-estate-market-could-explode-to-usd4t-by-2035-deloitte-forecasts",
        },
      ],
    },
    {
      id: "re",
      label: "부동산 · 핀테크",
      code: "RE",
      narrative:
        "부동산·핀테크는 '명확한 ROI와 규제 안전판'이 있는 곳에만 자본이 가는 선별 국면입니다. 글로벌에서는 결제·클로징·심사 같은 핵심 워크플로에 박힌 프롭테크가 자금을 받고, 미국은 ROAD Act로 대형 기관의 단독주택 매집을 제한하며 규제가 시장 구조를 바꾸고 있습니다. RWA 토큰화와 부동산금융의 접점이 넓어지며 대체투자 트랙이 재편되고 있습니다.",
      articles: [
        {
          title: "Proptech VCs Want Faster Payback And Fewer Risks In 2026",
          desc: "프롭테크 VC들이 2026년 더 빠른 회수와 낮은 리스크를 요구하면서, 결제·클로징·조달 같은 핵심 거래 워크플로에 박혀 명확한 ROI를 내는 플랫폼에만 자금이 집중되는 선별 국면이 뚜렷해졌습니다.",
          source: "Inman",
          href: "https://www.inman.com/2026/02/11/proptech-vcs-want-faster-payback-and-fewer-risks-in-2026/",
        },
        {
          title: "2026 US Real Estate Market Trends: PropTech, Policy & Investments",
          desc: "2026년 3월 상원을 통과한 ROAD Act가 대형 기관투자자의 단독주택 추가 매입을 향후 15년간 제한하는 등, 정책이 프롭테크·대체투자 시장 구조를 직접 재편하고 있습니다 — 92% 이상의 상업용 부동산 기업이 AI 파일럿을 가동 중입니다.",
          source: "FifthRow",
          href: "https://www.fifthrow.com/blog/2026-us-real-estate-market-trends-prop-tech-policy-investments",
        },
        {
          title: "2026년 5월, 시드·시리즈A 투자 활발…AI·핀테크 스타트업에 글로벌 초기 자금 집중",
          desc: "부동산 금융 기술 기업 ReFiBuy가 1,360만 달러 시드를, 임베디드 금융 CredibleX가 무바달라 주도 1,500만 달러 시리즈A를 유치하는 등 핀테크가 특정 산업 버티컬과 결합해 글로벌 초기 자금을 흡수하고 있습니다.",
          source: "한국IT산업뉴스",
          href: "https://www.koreaiin.com/news/901379",
        },
        {
          title: "RWA Weekly: Crypto Market Structure Bill Advances; Meta Begins Stablecoin Payments",
          desc: "Meta가 Stripe 지원으로 일부 크리에이터에게 스테이블코인 결제를 시작하고 크립토 시장구조 법안이 진전되는 등, 핀테크 결제 레일이 스테이블코인·온체인 인프라로 확장되는 흐름이 이어졌습니다.",
          source: "PANews",
          href: "https://www.panewslab.com/en/articles/019de267-8de4-76ef-b3dc-984d29a07964",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "중소벤처기업부의 2026년 창업지원사업 통합공고와 민관협력 오픈이노베이션·기술개발 통합공고가 모집 중이며, 창업진흥원 예비창업패키지(약 491억 원, 300명 내외)는 6월부터 사업비 지원이 시작됩니다. AI·딥테크·핀테크 분야 창업자·중소기업은 마감 전 아래 공고를 즉시 확인하시길 권합니다.",
      items: [
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "2026년 민관협력 오픈이노베이션 지원사업 수요기업·기관 협업과제 모집 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000117048",
        },
        {
          title: "2026년 중소기업 기술개발 지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116943",
        },
        {
          title: "예비창업패키지 (창업진흥원) — 6월부터 사업비 지원 시작",
          href: "https://www.kised.or.kr/menu.es?mid=a10205010000",
        },
        {
          title: "K-Startup 창업지원포털 신규 사업 공고 목록",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 5월 28일 CFA Institute Rob Langrick 초청 특강과 제446회 글로벌 이슈 특강입니다. 또한 교내 생성형 AI 아이디어 공모전 접수가 5월 29일 마감(결선 9/4)을 앞두고 있어, AIMBA 원우는 금융·글로벌 이슈 특강과 공모전 참가를 우선순위로 점검하시길 권합니다.",
      items: [
        {
          title: "CFA Institute Rob Langrick 초청 특강 (5월 28일 16시) — 경영대학 공지",
          href: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do",
        },
        {
          title: "제446회 글로벌 이슈 특강(Special Lecture on Global Issues) 안내 (5/20)",
          href: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do",
        },
        {
          title: "서강대학교 생성형 AI 기반 아이디어 공모전 (접수 ~5/29, 결선 9/4)",
          href: "https://contest.sogang.ac.kr/",
        },
        {
          title: "서강대학교 인공지능학과 공지사항 (특강·콜로퀴엄 모니터링)",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "SW중심대학사업단 공지 (SW·AI 특강·해커톤)",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
      ],
    },
  ],
  events: [
    { date: "6월 10일", day: "수", title: "Smart Tech Korea 2026 (AI & Big Data Show, 6/10~6/12)", where: "서울 COEX", tag: "전시/컨퍼런스", link: "https://en.smarttechkorea.com/aibigdatashow" },
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series (6/22~6/24)", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "7월 7일", day: "화", title: "ICML 2026 (International Conference on Machine Learning, 7/7~7/9)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
    { date: "5월 29일 (마감)", day: "금", title: "서강대 생성형 AI 아이디어 공모전 — 접수 마감 (결선 9/4)", where: "서강대학교", tag: "교내 공모전", link: "https://contest.sogang.ac.kr/" },
    { date: "5월 28일 (기개최)", day: "목", title: "CFA Institute Rob Langrick 초청 특강 (참고용)", where: "서강대학교", tag: "교내 특강", link: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do" },
  ],
};

const VOL8: IssueContent = {
  vol: 8,
  dateLabel: "2026년 5월 25일",
  isoDate: "20260525",
  title:
    "AI가 수익을 증명하다 — Anthropic 첫 분기 흑자·Google I/O 2026·인재 대이동으로 재편되는 빅테크 지형도",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주는 AI 산업이 '실험'에서 '수익'으로 전환하는 역사적 변곡점을 통과했습니다. Anthropic의 분기 흑자 달성, Google I/O 2026의 에이전트 선언, Karpathy의 전격 이적이 같은 주에 터지며 업계 지형이 근본적으로 바뀌었습니다.",
    "국내에서는 레티널·뉴라텍 등 하드웨어 AI 스타트업이 대형 프리IPO를 마감하고, 서강대가 AI 중심대학으로 선정되는 등 산학연 전반에 AI 전환 모멘텀이 확산되고 있습니다.",
  ],
  conclusion:
    "AI는 이제 기술 시위(demo)가 아닌 재무제표로 말하는 시대에 진입했으며, 이 전환을 먼저 내재화하는 경영자와 조직이 다음 5년을 지배할 것입니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "구글은 I/O 2026(5월 19~20일)에서 Gemini 3.5 Flash와 Gemini Omni를 공개하며 '에이전트 퍼스트' 시대를 선언했습니다. 같은 날 Anthropic에는 AI 연구계의 스타 Andrej Karpathy가 합류했고, OpenAI는 AI 콘텐츠 진위 확인 표준(C2PA + SynthID)을 채택해 생성 AI 신뢰성 문제에 정면 대응했습니다. Meta는 8,000명을 감원하면서 전체 인력의 20%를 AI 전담 조직으로 재편해 AI 중심 구조조정의 새 모델을 제시했습니다.",
      articles: [
        {
          title:
            "Everything Google announced at I/O 2026: Gemini 3.5 Flash, Gemini Omni, Antigravity 2.0 & more",
          desc: "구글은 I/O 2026에서 Gemini 3.5 Flash(에이전틱 코딩 벤치마크 최고), 멀티모달 영상 생성 모델 Gemini Omni, 에이전트 전용 개발 플랫폼 Antigravity 2.0을 동시 발표하며 '에이전트 퍼스트 전략'을 공식화했습니다.",
          source: "9to5Google",
          href: "https://9to5google.com/2026/05/19/google-io-2026-news/",
        },
        {
          title: "OpenAI co-founder Andrej Karpathy joins Anthropic's pre-training team",
          desc: "테슬라·OpenAI 출신 AI 연구 거장 Andrej Karpathy가 Anthropic의 사전 학습(pretraining) 팀에 합류해 Claude를 활용한 AI 자동화 연구를 이끌 예정이며, 업계는 이를 Anthropic의 기술 경쟁력 강화 신호로 해석합니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/",
        },
        {
          title: "Advancing content provenance for a safer, more transparent AI ecosystem",
          desc: "OpenAI가 C2PA 표준 채택과 Google SynthID 워터마킹을 결합해 AI 생성 이미지의 출처를 공개 검증하는 'Verify' 툴을 출시하며, 딥페이크·허위 정보 대응을 위한 업계 표준 형성에 앞장섰습니다.",
          source: "OpenAI",
          href: "https://openai.com/index/advancing-content-provenance/",
        },
        {
          title: "Meta slashes 8,000 jobs as it pivots towards AI",
          desc: "메타가 전체 인력의 10%인 8,000명을 감원하고, 7,000명을 AI 전담 조직(Applied AI Engineering, Agent Transformation Accelerator 등)으로 재배치하며 115~135억 달러 규모 AI 인프라 투자를 뒷받침하는 전면 구조조정을 단행했습니다.",
          source: "NPR",
          href: "https://www.npr.org/2026/05/20/nx-s1-5826917/meta-layoffs-ai-jobs",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "Anthropic이 분기 매출 109억 달러·첫 영업이익 5억 5,900만 달러를 예고하며 AI 기업 수익화 가능성을 입증했습니다. JPMorgan은 글로벌 IB 전 부문에 AI 툴을 전면 배포했고, OpenAI-Dell 파트너십으로 Codex가 클라우드 밖 온프레미스 기업까지 침투하기 시작했습니다. 머스크의 OpenAI 소송이 배심원 2시간 만에 기각되며 OpenAI IPO 경로가 더 넓어졌습니다.",
      articles: [
        {
          title: "Anthropic set to hit $10.9 billion in revenue during second quarter, source says",
          desc: "Anthropic이 2분기에 매출 109억 달러·첫 영업이익 5억 5,900만 달러를 달성할 전망이며, 이는 생성 AI 기업이 대규모 컴퓨팅 비용에도 불구하고 분기 흑자를 낼 수 있음을 처음으로 증명한 이정표입니다.",
          source: "CNBC",
          href: "https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html",
        },
        {
          title: "JPMorgan rolls out AI tools in investment banking globally, senior banker says",
          desc: "JPMorgan이 글로벌 IB 전 부문에 AI 툴을 전면 도입했으며, CEO 제이미 다이먼은 AI 전문가를 늘리고 기존 뱅커 채용은 줄이겠다고 선언해 금융 인력 구조 변화의 방향을 명확히 했습니다.",
          source: "Global Banking & Finance",
          href: "https://www.globalbankingandfinance.com/jpmorgan-rolls-out-ai-tools-investment-banking-globally/",
        },
        {
          title:
            "OpenAI and Dell Technologies partner to bring Codex to hybrid and on-premises enterprise environments",
          desc: "OpenAI와 Dell이 Dell Technologies World에서 Codex의 하이브리드·온프레미스 배포 파트너십을 발표했으며, 이는 OpenAI가 Azure·클라우드를 벗어나 직접 기업 인프라에 AI 에이전트를 탑재하는 첫 사례입니다.",
          source: "OpenAI",
          href: "https://openai.com/index/dell-codex-enterprise-partnership/",
        },
        {
          title:
            "Jury throws out Elon Musk's lawsuit against OpenAI and Sam Altman in less than two hours",
          desc: "배심원단이 머스크의 OpenAI·샘 알트만 상대 소송을 2시간 만에 기각하면서 OpenAI의 영리법인 전환 정당성이 법적으로 확인됐고, IPO 추진의 마지막 법적 장애물이 사실상 제거됐습니다.",
          source: "NBC News",
          href: "https://www.nbcnews.com/tech/tech-news/openai-elon-musk-case-verdict-rcna345655",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "비즈니스 스쿨들이 MBA 수익 다각화 수단으로 AI 특화 단기 경영자 교육 과정을 앞다퉈 확대하고 있습니다. QS EMBA 랭킹에서 옥스퍼드 Saïd가 3년 연속 1위를 지켰고, Kellogg는 AI 마케팅 리더십 프로그램을 여름에 론칭했습니다. 서강대는 과기정통부로부터 'AI 중심대학'으로 선정돼 8년간 240억 원을 지원받게 됐습니다.",
      articles: [
        {
          title: "Business schools boost revenue with executive education courses",
          desc: "하버드·MIT·Kellogg 등 주요 비즈니스 스쿨들이 AI 주제 단기 임원 교육 과정으로 수억 달러의 추가 매출을 창출하고 있으며, 글로벌 임원 교육 시장은 2026년 551억 달러 규모로 성장했습니다.",
          source: "Marketplace",
          href: "https://www.marketplace.org/story/2026/05/19/business-schools-boost-revenue-with-executive-education-courses",
        },
        {
          title: "QS Executive MBA Ranking 2026: Oxford Saïd Is No. 1 Again",
          desc: "QS가 발표한 2026 EMBA 랭킹에서 옥스퍼드 Saïd가 3년 연속 1위를 차지했으며, MIT Sloan이 3위로 급상승했고, 상위 30개교 중 11개가 미국, 6개가 영국 소재로 Anglo-Saxon 학교들의 강세가 이어졌습니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/02/qs-executive-mba-ranking-2026-oxford-said-is-no-1-again/2/",
        },
        {
          title:
            "Kellogg School of Management Expands Executive Education Programs to Meet Global Demand",
          desc: "Kellogg이 2026년 여름 'AI Marketing Leadership' 과정을 새로 론칭하고, 10월에는 'Mastering the Human-AI Partnership'을 출시하는 등 AI 임원 교육 포트폴리오를 대폭 확장해 1년간 2,500명 이상이 수강하는 최대 과정으로 성장했습니다.",
          source: "PR Newswire",
          href: "https://www.prnewswire.com/news-releases/kellogg-school-of-management-expands-executive-education-programs-to-meet-global-demand-302783481.html",
        },
        {
          title: "서강대, 'AI 중심대학' 선정…8년간 240억원 지원받는다",
          desc: "서강대학교가 과기정통부 'AI 중심대학' 사업에 선정돼 2026~2033년 연 30억 원씩 총 240억 원을 지원받으며, 2028년 개관 목표인 'AI IMPACT COMPLEX' 건립을 통해 전공 무관 AI 융합 인재 양성에 나섭니다.",
          source: "뉴시스",
          href: "https://www.newsis.com/view/NISX20260513_0003627477",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "글로벌에서는 Hark가 시리즈 A에서 7억 달러를 조달하며 '범용 AI 인터페이스' 카테고리를 개척했고, Anthropic은 9,000억 달러 밸류에이션의 300억 달러 신규 라운드를 추진 중입니다. 국내에서는 AI 스마트글래스 광학 모듈 기업 레티널이 278억 원 프리IPO를 마감했고, AI 스타트업 업스테이지가 국내 생성 AI 기업 최초 유니콘으로 등극했습니다.",
      articles: [
        {
          title: "Hark raises $700M Series A for its secretive 'universal' AI interface",
          desc: "Brett Adcock이 창업한 AI 하드웨어 스타트업 Hark가 NVIDIA·Qualcomm·AMD 등의 참여로 시리즈 A 7억 달러를 조달해 기업가치 60억 달러를 기록했으며, 인간과 AI 시스템을 잇는 '범용 인터페이스' 하드웨어·모델 동시 개발을 추진합니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/05/21/hark-raises-700m-series-a-for-its-secretive-universal-ai-interface/",
        },
        {
          title: "Anthropic In Talks to Raise $30 Billion at $900 Billion Valuation",
          desc: "Anthropic이 Sequoia·Dragoneer·Altimeter 등이 참여하는 300억 달러 규모 신규 라운드를 9,000억 달러 밸류에이션으로 협상 중이며, 성사 시 OpenAI(8,520억 달러)를 제치고 세계 최고가 민간 AI 기업으로 올라섭니다.",
          source: "Bloomberg / Yahoo Finance",
          href: "https://finance.yahoo.com/news/anthropic-talks-raise-30-billion-210804604.html",
        },
        {
          title: "레티널, 278억 규모 프리IPO 투자 유치…'AI 글래스 핵심 부품 시장 선점'",
          desc: "디스플레이 기반 AI 글래스 광학 모듈 기업 레티널이 산업은행·롯데벤처스 등 16개 기관으로부터 278억 원 프리IPO를 완료해 누적 투자금 625억 원을 확보했으며, 2027년 기술특례상장을 목표로 합니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1083124",
        },
        {
          title: "업스테이지, 시리즈C 1차 1,800억 투자 유치…국내 생성형 AI 첫 유니콘",
          desc: "AI 스타트업 업스테이지가 사제파트너스 리드로 1,800억 원 시리즈C를 완료해 기업가치 1조 원을 돌파, 국내 생성 AI 기업 최초 유니콘으로 등극했으며 미국·일본 글로벌 시장 진출과 IPO를 동시 준비 중입니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1076198",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "과기정통부의 AI 중심대학 사업 선정을 비롯해, 중소벤처기업부의 창업지원사업 통합공고·민관협력 오픈이노베이션·기술개발 지원사업이 모집 중입니다. AI·딥테크·그린테크 분야 창업자·중소기업이라면 아래 공고를 즉시 확인하고 마감 전 신청하시길 권합니다.",
      items: [
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "2026년 민관협력 오픈이노베이션 지원사업 수요기업·기관 협업과제 모집 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000117048",
        },
        {
          title: "2026년 중소기업 기술개발 지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116943",
        },
        {
          title: "2026년 제1차 창업성장기술개발사업(디딤돌) 시행계획 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116971",
        },
        {
          title: "K-Startup 창업지원포털 신규 사업 공고 목록",
          href: "https://www.k-startup.go.kr/web/main/mainSection0.do",
        },
        {
          title: "2026년 서울시 기후테크 오픈이노베이션 지원사업 참여기업 모집 (벤처스퀘어)",
          href: "https://www.venturesquare.net/announcement/1078882",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "서강대학교는 AI 중심대학 선정(5월 13일)에 이어 교내 생성형 AI 아이디어 공모전(접수 마감 5월 29일)과 글로벌 AI 인재양성센터 공지를 통해 AI 전환 캠퍼스 구축을 가속하고 있습니다. AIMBA 재학생 및 교내 구성원은 공모전 참가와 AI 센터 프로그램을 적극 활용하시길 권합니다.",
      items: [
        {
          title: "AI Driven University Idea Fair — 서강대학교 생성형 AI 기반 아이디어 공모전 (접수 ~5/29, 결선 9/4)",
          href: "https://contest.sogang.ac.kr/",
        },
        {
          title: "서강대, 'AI 중심대학' 선정…8년간 240억원 지원받는다 (뉴시스 보도)",
          href: "https://www.newsis.com/view/NISX20260513_0003627477",
        },
        {
          title: "서강대학교 글로벌 AI 인재양성센터 공지사항",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=globalaiedu&bbsConfigFK=5451",
        },
        {
          title: "서강대학교 인공지능학과 공지사항",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=5110",
        },
        {
          title: "서강대학교 경영대학 MBA 공지사항",
          href: "https://sbs.sogang.ac.kr/sbs/sbs08_1_3.html",
        },
      ],
    },
  ],
  events: [
    { date: "6월 10일", day: "수", title: "Smart Tech Korea 2026 (AI & Big Data Show 포함)", where: "서울 COEX", tag: "전시/컨퍼런스", link: "https://en.smarttechkorea.com/aibigdatashow" },
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series — AI in Business, Strategy & Governance", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "7월 6일", day: "월", title: "ICML 2026 (International Conference on Machine Learning) — 메인 7/7~7/9", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
    { date: "9월 4일", day: "금", title: "서강대 생성형 AI 아이디어 공모전 — 결선 발표", where: "서강대학교", tag: "교내 행사", link: "https://contest.sogang.ac.kr/" },
    { date: "5월 6일 (기개최)", day: "수", title: "AI EXPO KOREA 2026 (5/6~5/8, 참고용)", where: "서울 COEX Hall A", tag: "전시", link: "https://www.aiexpo.co.kr/en/i1.php?s=11" },
  ],
};

const VOL7: IssueContent = {
  vol: 7,
  dateLabel: "2026년 5월 18일",
  isoDate: "20260518",
  title:
    "AI가 대기업을 넘어 소상공인·온프레미스 현장으로 내려온 주 — Dell·Anthropic·AlphaEvolve의 실증 전선",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주(5/12~5/18)는 AI가 빅테크의 데모를 넘어 '현장 실증'으로 내려온 장면이 선명했습니다. Anthropic은 미국 GDP의 44%를 차지하는 소상공인 시장을 정조준한 'Claude for Small Business'를 내놓았고, Dell은 Technologies World에서 AI 팩토리 고객을 5,000곳으로 늘리며 온프레미스 에이전트를 전면화했습니다.",
    "Google DeepMind는 AlphaEvolve 1년 성과(DNA 변이 탐지 오류 30%↓, 양자회로 오류 10배↓)를 공개하며 AI가 연구·인프라 최적화에서 실측 가능한 ROI를 만들기 시작했음을 입증했고, 국내에서는 과기정통부·삼성SDS 컨소시엄이 국가 AI 컴퓨팅센터 실시협약을 체결하며 'GPU 주권' 인프라가 본궤도에 올랐습니다.",
  ],
  conclusion:
    "AI 경쟁의 무게중심이 '누가 더 큰 모델을 만드나'에서 '누가 더 좁고 깊은 현장에 먼저 내려가나'로 이동하고 있습니다 — 소상공인, 온프레미스 데이터센터, 연구·국가 인프라가 다음 격전지입니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "이번 주 AI 섹션의 키워드는 '내려옴'입니다. 거대 모델 경쟁이 소강 국면에 들어선 사이, Anthropic은 소상공인 업무 자동화로, Dell·Microsoft는 온프레미스·데스크사이드 에이전트로, Google은 연구·인프라 최적화 실증으로 AI의 적용 지점을 현장 깊숙이 끌어내렸습니다. AIMBA 관점에서는 '어떤 모델이 더 똑똑한가'보다 '내 업무·내 데이터·내 서버에 얼마나 가까이 붙는가'가 도입 의사결정의 핵심 변수가 됐습니다.",
      articles: [
        {
          title: "Introducing Claude for Small Business",
          desc: "Anthropic이 5월 13일 QuickBooks·PayPal·HubSpot·Canva·Docusign 등 소상공인이 이미 쓰는 도구 안에서 작동하는 Claude 패키지를 출시했습니다 — 미국 GDP의 44%를 차지하지만 AI 도입이 뒤처진 소상공인 시장을 정조준하며, 5월 14일 시카고를 시작으로 무료 AI 교육 로드쇼도 병행합니다.",
          source: "Anthropic",
          href: "https://www.anthropic.com/news/claude-for-small-business",
        },
        {
          title: "AlphaEvolve: Gemini-powered coding agent scaling impact across fields",
          desc: "Google DeepMind가 5월 13일 AlphaEvolve 1년 성과를 공개했습니다 — 유전체학·양자물리·수학·AI 인프라에 적용해 DNA 변이 탐지 오류 30% 감소, Willow 양자칩 회로 오류 10배 개선을 달성했고, 차세대 TPU 설계와 Klarna·WPP 등 기업용으로 상용화됩니다.",
          source: "Google DeepMind",
          href: "https://deepmind.google/blog/alphaevolve-impact/",
        },
        {
          title:
            "Dell Technologies Delivers Production-Ready Agentic AI from Deskside to Data Center",
          desc: "Dell이 5월 18일 데스크사이드 에이전틱 AI 워크스테이션을 공개했습니다 — 민감 데이터를 클라우드로 보내지 않고 로컬에서 상시 AI 에이전트를 구동해 클라우드 토큰 비용을 최대 87% 절감하며, 온프레미스 AI의 현실적 대안을 제시했습니다.",
          source: "Dell Technologies",
          href: "https://www.dell.com/en-us/dt/corporate/newsroom/announcements/detailpage.press-releases~usa~2026~05~dell-technologies-delivers-production-ready-agentic-ai-from-deskside-to-data-center.htm",
        },
        {
          title: "Copilot Studio: 컴퓨터 사용 에이전트 정식 출시 (2026년 5월 업데이트)",
          desc: "Microsoft가 5월 Copilot Studio 업데이트로 화면을 직접 보고 조작하는 '컴퓨터 사용 에이전트'를 정식 출시(GA)하고, 단일 캔버스에서 에이전트 워크플로를 설계하는 새 워크플로 환경과 실시간 음성 기능을 추가했습니다.",
          source: "Microsoft",
          href: "https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/new-and-improved-computer-using-agents-a-new-workflows-experience-and-real-time-voice-experiences/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "5월 18일 미국 라스베이거스에서 개막한 Dell Technologies World 2026이 이번 주 엔터프라이즈 AI의 중심 무대였습니다. Dell은 NVIDIA 기반 AI 팩토리 고객을 1년 만에 5,000곳으로 늘리고 1년 차 ROI 최대 269%를 제시하며 'AI 야망과 성과의 간극'을 메우겠다고 선언했고, 프랑스 Mistral까지 Dell 인프라에 올라타며 주권형 온프레미스 진영을 넓혔습니다. 국내에서는 과기정통부가 삼성SDS 컨소시엄과 국가 AI 컴퓨팅센터 실시협약을 체결하며 'GPU 주권' 경쟁이 본격화됐습니다.",
      articles: [
        {
          title: "Dell Technologies World 2026: Enterprise AI Announcements This Week",
          desc: "Dell이 NVIDIA 기반 AI 팩토리 고객을 직전 분기 1,000곳 추가해 누적 5,000곳으로 늘렸고 1년 차 ROI 최대 269%를 보고했습니다 — Eli Lilly·Honeywell·Samsung 등이 클라우드가 아닌 '소유·통제하는 인프라'로 AI를 돌리는 흐름을 공식화했습니다.",
          source: "Dell",
          href: "https://www.dell.com/en-us/blog/dell-technologies-world-2026-enterprise-ai-announcements-this-week/",
        },
        {
          title: "Dell Technologies Closes the Gap Between AI Ambition and AI Outcomes",
          desc: "Dell이 5월 18일 AI 데이터 플랫폼·직접 액냉 컴퓨트·PowerRack·엣지 AI 워크스테이션을 묶은 차세대 AI 팩토리를 공개하며, '도입 의지'와 '실제 성과' 사이의 격차를 좁히는 통합 스택을 전면에 내세웠습니다.",
          source: "Dell Newsroom",
          href: "https://www.dell.com/en-us/dt/corporate/newsroom/announcements/detailpage.press-releases~usa~2026~05~dell-technologies-closes-the-gap-between-ai-ambition-and-ai-outcomes.htm",
        },
        {
          title: "Mistral AI Powers AI Innovation on Dell Technologies Infrastructure",
          desc: "프랑스 AI 기업 Mistral이 Dell 인프라 위에서 자사 모델을 구동하는 파트너십을 5월 18일 발표하며, 미국 빅테크 클라우드에 종속되지 않는 '주권형 온프레미스 AI' 선택지를 기업에 제시했습니다.",
          source: "Dell Newsroom",
          href: "https://www.dell.com/en-us/dt/corporate/newsroom/announcements/detailpage.press-releases~usa~2026~05~mistral-ai-powers-ai-innovation-on-dell-technologies-infrastructure.htm",
        },
        {
          title: "GPU 1.5만장 규모 '국가 AI컴퓨팅 센터', 삼성SDS가 맡는다",
          desc: "과기정통부가 5월 11일 삼성SDS·네이버클라우드·KT·카카오·삼성전자 등이 참여하는 컨소시엄과 총사업비 2조원 규모 국가 AI 컴퓨팅센터 실시협약을 체결했습니다 — 2028년까지 첨단 AI반도체 1만 5,000장 규모로 구축해 한국의 'GPU 주권'을 확보하는 게 목표입니다.",
          source: "뉴스1",
          href: "https://www.news1.kr/it-science/general-science/6163150",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "이번 주 MBA 화두는 '학위 한 번으로 끝나는 자격증'에서 '평생 갱신하는 역량'으로의 전환입니다. Poets & Quants는 경영교육이 엘리트 자격의 문지기에서 평생 학습 파트너로 바뀌어야 한다고 진단했고, AI 시대 리스킬링·임원교육 수요가 빠르게 커지고 있습니다. 서강대는 'AI 중심대학' 선정과 글로벌 AI 인재양성센터로 AIMBA 원우에게 평생학습형 AI 역량 강화 트랙을 열고 있습니다.",
      articles: [
        {
          title: "Rethinking The MBA: From One-Time Credential To Lifelong Capability",
          desc: "Poets & Quants가 5월 12일 경영교육이 '엘리트 학위의 문지기'에서 '평생 성장 파트너'로 전환해야 한다고 진단했습니다 — MBA의 미래는 학위의 명성이 아니라 그것이 가능케 하는 학습의 연속성으로 정의될 것이며, 개인이 반복적으로 돌아와 역량을 갱신하는 학습 생태계 설계가 관건이라 강조했습니다.",
          source: "Poets & Quants",
          href: "https://poetsandquants.com/2026/05/12/rethinking-the-mba-from-one-time-credential-to-lifelong-capability/",
        },
        {
          title: "서강대, 'AI 중심대학' 선정…8년간 240억원 지원받는다",
          desc: "서강대학교가 과기정통부 'AI 중심대학' 사업에 선정돼 2026~2033년 총 240억 원을 지원받으며, 2028년 개관 목표인 'AI IMPACT COMPLEX' 건립을 통해 전공 무관 AI 융합 인재 양성에 나섭니다 — AIMBA 원우에게도 K-AI 파운데이션·AX 융합 트랙이 열립니다.",
          source: "뉴시스",
          href: "https://www.newsis.com/view/NISX20260513_0003627477",
        },
        {
          title: "서강대학교 글로벌 AI 인재양성센터",
          desc: "서강대 글로벌 AI 인재양성센터가 국내 대학원생·청년 프리랜서를 대상으로 AI 분야 해외 선도대학 전공 교육 프로그램을 운영합니다 — AIMBA 원우가 평생학습형으로 AI 역량을 확장할 수 있는 공식 채널입니다.",
          source: "서강대학교",
          href: "https://scc.sogang.ac.kr/globalaiedu/index_new.html",
        },
        {
          title: "2025 AIMBA 브로슈어",
          desc: "서강대 AIMBA의 교육 방향과 AI·빅데이터 기반 커리큘럼을 정리한 공식 브로슈어로, AI 중심대학 전환 흐름 속에서 원우 커리어 설계의 기준점으로 참고할 자료입니다.",
          source: "서강대 경영대",
          href: "https://sbs.sogang.ac.kr/sites/sbs/files/2025%20AIMBA%20%EB%B8%8C%EB%A1%9C%EC%8A%88%EC%96%B4.pdf",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "투자 빙하기 속에서도 '버티컬 AI 에이전트'와 '피지컬 AI'에는 자금이 모이고 있습니다. 국내에서는 SNS 데이터 분석 기업 피처링이 153억 시리즈B로 마케팅 AI 에이전트 고도화에 나섰고, 건설 로보틱스 스타트업 엑스페너가 글로벌 펀딩을 받으며 현장형 피지컬 AI가 부상했습니다. 글로벌에서는 마케팅 에이전트 OS를 표방한 Nectar Social이 시리즈A를 마감하며 동일 흐름이 확인됐습니다.",
      articles: [
        {
          title: "피처링, 153억 규모 시리즈B 투자 유치…'AI 기반 글로벌 마케팅 허브 도약'",
          desc: "SNS 데이터 분석 기업 피처링이 산업은행·하나벤처스·키움인베스트먼트 등으로부터 153억 원 시리즈B를 유치해 누적 220억 원을 확보했습니다 — 약 1만 6,000개 고객사를 기반으로 인플루언서 마케팅 실무를 자동화하는 버티컬 AI 에이전트 고도화에 투자금을 집중합니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1083218",
        },
        {
          title: "Nectar Social raises $30M Series A for its agentic marketing OS",
          desc: "Nectar Social이 5월 14일 시리즈A 3,000만 달러를 유치했습니다 — 소셜 인텔리전스·커뮤니티 운영·인플루언서 툴링·고객경험·소셜 분석을 하나의 AI 스택으로 통합한 '에이전트형 마케팅 OS'를 표방하며, 피처링과 같은 마케팅 AI 카테고리의 글로벌 확장을 보여줍니다.",
          source: "Tech Startups",
          href: "https://techstartups.com/2026/05/14/top-startup-and-tech-funding-news-may-14-2025/",
        },
        {
          title: "Xpanner Lands $18M To Offer 'Automation As A Service' To Construction Sites",
          desc: "건설 현장 자동화 스타트업 엑스페너(Xpanner)가 로보틱스·피지컬 AI 기술로 시리즈B 1,800만 달러를 유치했습니다 — 굴착기 등 중장비를 자율화하는 '자동화 서비스(AaaS)' 모델로, 노동력 부족에 직면한 건설업에 현장형 피지컬 AI를 적용하는 사례입니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/real-estate-property-tech/xpanner-automation-as-a-service-for-construction-sites-startup-funding-physical-ai-robotics/",
        },
        {
          title: "[VS기획] 투자 빙하기에 카테고리 탈출…BM 재설계로 반전 노리는 스타트업",
          desc: "벤처스퀘어가 5월 14일 분석한 결과, 에듀테크 등 위축된 카테고리의 기업들이 AI 인프라·B2B SaaS·글로벌 플랫폼·라이프스타일로 사업모델을 재설계하며 투자 빙하기를 돌파하고 있습니다 — 자본이 소수 AI·하이퍼스케일에 쏠리는 가운데 생존 전략의 핵심은 BM 전환임을 보여줍니다.",
          source: "벤처스퀘어",
          href: "https://www.venturesquare.net/1079952",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주는 중소벤처기업부의 창업지원사업 통합공고와 6대 전략산업·12대 신산업 대상 초격차 스타트업 프로젝트(DIPS)가 핵심입니다. 단순 지원금보다 R&D·딥테크 연계가 붙는 공고를 우선적으로 확인하시길 권합니다.",
      items: [
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "2026년 초격차 스타트업 프로젝트(DIPS) 창업기업 모집 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000117030",
        },
        {
          title: "2026년 제1차 창업성장기술개발사업(디딤돌) 시행계획 공고",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116971",
        },
        {
          title: "K-Startup 창업지원포털 신규 사업 공고 목록",
          href: "https://www.k-startup.go.kr/web/main/index.do",
        },
        {
          title: "중소벤처기업부 사업공고 게시판",
          href: "https://www.mss.go.kr/site/smba/ex/bbs/List.do?cbIdx=310",
        },
        {
          title: "창업진흥원 사업공고 (알림마당)",
          href: "https://www.kised.or.kr/menu.es?mid=a10302000000",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "AI 중심대학 선정 이후 서강대 캠퍼스에는 AI 공모전·인재양성센터·AI·SW대학원 트랙이 동시에 열렸습니다. AIMBA 재학생은 생성형 AI 아이디어 공모전(접수 ~5/29)으로 실전 포트폴리오를 쌓을 수 있는 좋은 기회입니다.",
      items: [
        {
          title: "2026 AI Driven University Idea Fair — 서강대 생성형 AI 기반 아이디어 공모전 (접수 ~5/29)",
          href: "https://contest.sogang.ac.kr/",
        },
        {
          title: "서강대학교 글로벌 AI 인재양성센터",
          href: "https://scc.sogang.ac.kr/globalaiedu/index_new.html",
        },
        {
          title: "서강대학교 인공지능학과 공지사항",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=5110",
        },
        {
          title: "서강대학교 AI·SW대학원",
          href: "https://gsinfo.sogang.ac.kr/",
        },
        {
          title: "서강대학교 경영대학 MBA 공지사항",
          href: "https://sbs.sogang.ac.kr/sbs/sbs08_1_3.html",
        },
      ],
    },
  ],
  events: [
    { date: "5월 6일~8일 (기개최)", day: "수~금", title: "AI EXPO KOREA 2026 (제9회 국제인공지능대전)", where: "서울 COEX Hall A", tag: "전시", link: "https://www.aiexpo.co.kr/en/i1.php?s=11" },
    { date: "6월 10일~12일", day: "수~금", title: "Smart Tech Korea 2026 (AI & Big Data Show 포함)", where: "서울 COEX", tag: "전시/컨퍼런스", link: "https://en.smarttechkorea.com/aibigdatashow" },
    { date: "6월 22일~24일", day: "월~수", title: "AAAI 2026 Summer Symposium Series", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "6월 25일~26일", day: "목~금", title: "AAiCON 2026", where: "장소 미정", tag: "AI 컨퍼런스", link: "https://aifrenz.org/aaicon26-registration" },
    { date: "7월 7일~9일", day: "화~목", title: "ICML 2026 (International Conference on Machine Learning)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일~21일", day: "수~금", title: "AI Summit Seoul & Expo 2026", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
  ],
};

const VOL13: IssueContent = {
  vol: 13,
  dateLabel: "2026년 6월 22일",
  isoDate: "20260622",
  title:
    "에이전트가 '데모'에서 '프로덕션'으로 — 엔터프라이즈 72% 도입·올트먼 방한 연기에도 견고한 한·미 AI 동맹",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주의 신호는 '발표'에서 '도입의 현실'로 옮겨갔습니다. 지난주 AI가 자본시장(IPO 레이스)에 올랐다면, 이번 주는 그 AI가 실제 기업 현장에서 어떻게 작동하는지가 드러났습니다. 에이전틱 AI 엔터프라이즈 도입률이 72% 프로덕션 수준에 도달했지만, 동시에 60%의 거버넌스 공백과 79%의 도입 난항이 함께 보고되며 'AI는 깔았는데 ROI는 어디 있나'라는 질문이 본격화됐습니다.",
    "지정학 측면에서는 샘 올트먼의 방한이 출발 이틀 전 돌연 연기됐지만, OpenAI는 삼성·카카오·네이버와의 파트너십은 유효하다고 못 박았습니다. 한편 한국 STO(토큰증권) 시장은 제도화 6개월 만에 무게추가 부동산에서 IP·콘텐츠로 빠르게 이동하며, '제도는 열렸지만 유동성이라는 첫 시험대'를 통과해야 하는 국면에 들어섰습니다.",
  ],
  conclusion:
    "모델 발표 경쟁이 정점을 찍은 뒤, 시장은 이제 '누가 더 강한 모델을 내놓는가'가 아니라 '그 모델을 누가 실제 손익계산서에 반영하는가'를 묻기 시작했습니다. 에이전트는 프로덕션에 들어왔지만 ROI·거버넌스·인력 재배치라는 숙제를 동시에 던졌고, 한국 STO는 '제도 통과'와 '시장 생존'이 다른 문제임을 보여주고 있습니다. AIMBA 원우분들에게는 'AI를 도입하는 법'을 넘어 'AI 도입의 ROI를 증명하고 거버넌스를 설계하는 능력'이 다음 단계의 핵심 역량임을 일러주는 한 주입니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "프런티어 모델 경쟁은 6월 들어 '수렴' 국면에 접어들었습니다. 2주 사이 앤트로픽·OpenAI·구글·알리바바·딥시크 등에서 12종 안팎의 프런티어급 모델이 쏟아지며 성능 격차가 좁혀졌고, 경쟁의 무게중심은 '벤치마크 1위'에서 '코딩·에이전트 실행력'으로 이동했습니다. 마이크로소프트·구글이 앤트로픽·OpenAI의 코딩 모델 아성에 도전장을 냈고, 구글 클라우드 넥스트에서 공개된 A2A(Agent2Agent) 프로토콜로 '에이전트끼리 협업하는' 인프라 표준화가 본격화됐습니다.",
      articles: [
        {
          title: "MS·구글, 앤트로픽·OpenAI에 '코딩 모델' 도전장 — AI 군비경쟁의 다음 전선은 개발자",
          desc: "CNBC 보도에 따르면 마이크로소프트와 구글이 앤트로픽 Claude Code·OpenAI Codex가 주도해온 AI 코딩 모델 시장에 본격 진입했습니다. 코딩·에이전트 실행 능력이 프런티어 모델의 핵심 차별점으로 굳어지며, 'AI로 코드를 짜는 도구'가 빅테크 전면전의 새 전장으로 떠올랐습니다.",
          source: "CNBC",
          href: "https://www.cnbc.com/2026/06/01/microsoft-and-google-take-on-anthropic-and-openai-in-ai-coding-models.html",
        },
        {
          title: "구글 클라우드 넥스트 2026 — A2A 프로토콜·Workspace Studio로 '에이전트 협업' 표준 선점",
          desc: "구글이 클라우드 넥스트 2026에서 200개 이상 모델(앤트로픽 Claude 포함)을 품은 개발자 플랫폼, 노코드 에이전트 빌더, 그리고 에이전트 간 통신용 프로덕션급 A2A(Agent2Agent) 프로토콜을 공개했습니다. 단일 에이전트를 넘어 '여러 에이전트가 서로 일을 주고받는' 인프라가 표준화되는 신호입니다.",
          source: "The Next Web",
          href: "https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era",
        },
        {
          title: "6월 프런티어 모델 '수렴' — 2주 새 12종 쏟아지며 경쟁축이 코딩·실행력으로 이동",
          desc: "LLM 트래커 집계 기준, 6월 초 2주 동안 앤트로픽·OpenAI·구글·알리바바·딥시크·텐센트 등에서 프런티어/준프런티어급 모델 12종이 출시됐습니다. 추론 벤치마크 상단이 촘촘해지는 가운데 일부 중국 오픈모델(GLM 계열)이 소프트웨어 엔지니어링·터미널 실행 벤치마크에서 서구 최상위 모델을 앞서며, 경쟁축이 '지능'에서 '실행'으로 옮겨갔습니다.",
          source: "LLM Stats",
          href: "https://llm-stats.com/llm-updates",
        },
        {
          title: "2026년 6월 'AI 출시 러시'를 읽는 빌더의 의사결정 지도",
          desc: "한 달 사이 쏟아진 모델·에이전트 출시를 실무 도입 관점에서 정리한 가이드입니다. '최신 모델로 갈아탈지'보다 '어떤 작업에 어떤 모델·에이전트 조합을 쓸지'가 더 중요해졌다는 것이 핵심으로, 빠른 모델 교체보다 워크플로 설계가 ROI를 가른다는 메시지입니다.",
          source: "WaveSpeed",
          href: "https://wavespeed.ai/blog/posts/june-2026-ai-launch-wave/",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "AI 비즈니스의 화두가 '도입할 것인가'에서 '도입했는데 성과가 있는가'로 넘어갔습니다. 에이전틱 AI가 72% 프로덕션 수준까지 올라왔지만, 거버넌스 공백·ROI 미달·조직 갈등이 동시에 보고되며 'AI 도입의 두 번째 골짜기'가 드러난 한 주입니다. 지정학적으로는 샘 올트먼의 방한이 연기됐지만 한·미 AI 동맹의 구조는 흔들리지 않았습니다.",
      articles: [
        {
          title: "샘 올트먼 방한 돌연 연기 — 그러나 OpenAI '삼성·카카오·네이버 파트너십은 유효'",
          desc: "OpenAI가 6월 12일 샘 올트먼의 방한(6/14~15 예정)을 개인 사정을 이유로 출발 이틀 전 연기한다고 밝혔습니다. 올트먼은 삼성전자 수원 디지털시티 임직원 강연과 사장단, 네이버 최수연·카카오 정신아 CEO 면담을 앞두고 있었습니다. 방한은 미뤄졌지만 OpenAI는 AI 인프라·업무 도입·소비자 서비스 협력은 그대로 진행된다고 강조했습니다.",
          source: "Korea Herald · TechTimes",
          href: "https://www.techtimes.com/articles/318309/20260614/sam-altman-postpones-his-korea-visit-openai-says-partnerships-stand.htm",
        },
        {
          title: "엔터프라이즈 에이전틱 AI 72% 프로덕션 도입 — 그러나 거버넌스 공백 60%",
          desc: "에이전틱 AI 엔터프라이즈 도입이 72% 프로덕션 단계에 도달했고, 가트너는 2026년 말까지 기업 애플리케이션의 40%가 작업특화 AI 에이전트를 내장할 것으로 전망합니다. 다만 60%에 이르는 거버넌스 공백이 동시에 보고돼, '에이전트를 깔았지만 누가 어떻게 통제하는가'가 다음 과제로 떠올랐습니다.",
          source: "Agentic AI Institute",
          href: "https://agenticaiinstitute.org/agentic-ai-enterprise-adoption-2026-governance-gap/",
        },
        {
          title: "기업 79%가 AI 도입에 난항 — 투자는 늘었는데 ROI는 어디에",
          desc: "엔터프라이즈 AI 도입 조사에서 79%의 조직이 어려움을 겪고 있으며(전년 대비 두 자릿수 증가), C-suite의 54%가 'AI 도입이 회사를 분열시키고 있다'고 답했습니다. 생성형 AI에서 유의미한 ROI를 본 조직은 29%, AI 에이전트는 23%에 그쳐, 'AI 슈퍼유저'의 5배 생산성을 조직 전체 성과로 옮기는 것이 핵심 병목으로 지목됐습니다.",
          source: "Writer",
          href: "https://writer.com/blog/enterprise-ai-adoption-2026/",
        },
        {
          title: "딜로이트 '엔터프라이즈 AI 현황 2026' — 도입의 다음 골짜기는 '실행과 신뢰'",
          desc: "딜로이트의 2026 엔터프라이즈 AI 리포트는 기업들이 파일럿을 넘어 '전사 확산' 단계에서 가장 크게 좌초한다고 분석합니다. 모델 성능보다 데이터 거버넌스·워크플로 재설계·인력 재배치가 ROI를 가르며, 'AI를 신뢰 가능한 운영 시스템으로 만드는 능력'이 경쟁우위의 핵심으로 제시됩니다.",
          source: "Deloitte",
          href: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "이번 주 MBA·커리어 섹션의 메시지는 명확합니다 — 'AI 유창성'은 더 이상 차별화 요소가 아니라 채용의 기본값(baseline)이 됐습니다. 글로벌 비즈니스스쿨은 AI를 핵심 커리큘럼 전반에 녹이고 있고, 고용주는 'AI를 쓸 줄 아는가'를 넘어 'AI로 비즈니스 임팩트를 정량화할 수 있는가'를 묻기 시작했습니다.",
      articles: [
        {
          title: "2026 채용 시장 전망 — 'AI + 인간 고유 역량'이 MBA의 새 통화",
          desc: "BusinessBecause의 2026 일터 전망에 따르면, 고용주는 AI 유창성과 함께 문제해결·전략적 사고·적응력 같은 인간 고유 역량을 동시에 요구합니다. AI가 초급·반복 업무를 흡수할수록, 이를 감독·설계하는 관리자급 역량을 갖춘 MBA 인재의 가치가 오히려 부각됩니다.",
          source: "BusinessBecause",
          href: "https://www.businessbecause.com/news/mba-jobs/9981/workplace-trends-job-market-predictons-2026",
        },
        {
          title: "고용주 'AI 유창성은 이제 기본값' — 2026 MBA 채용 늘지만 기준이 달라졌다",
          desc: "2026년 고용주의 MBA 채용 1순위는 AI 유창성(35%), 비즈니스 임팩트 정량화 능력(31%), 실무 포트폴리오(25%) 순입니다. 응답자 4명 중 1명꼴로 'AI 능숙도는 차별화가 아닌 최소 기대치'라고 답했고, AI 역량을 갖춘 직무는 같은 일자리에서 56% 더 높은 보수를 받는 것으로 나타났습니다.",
          source: "Concordia (CSP)",
          href: "https://online.csp.edu/resources/article/more-employers-plan-to-hire-mbas-in-2026-and-ai-fluency-is-now-the-baseline/",
        },
        {
          title: "AI가 2026 비즈니스스쿨 강의실을 바꾸는 법 — 도구가 아니라 '사고 파트너'로",
          desc: "GMAC 분석에 따르면 비즈니스스쿨은 AI를 단순 도구가 아닌 '분석·의사결정의 사고 파트너'로 교육에 통합하고 있습니다. AI와 협업해 분석의 폭과 속도를 높이되, 최종 판단·윤리·전략은 인간이 책임지는 'human-AI 오케스트레이터' 역량이 MBA 교육의 새 표준으로 자리잡고 있습니다.",
          source: "GMAC",
          href: "https://www.gmac.com/resources/learners/business-careers/assess-grow-skills/artificial-intelligence-business-school-classroom",
        },
        {
          title: "2026 MBA 커리큘럼의 AI 통합 — AI 전략·데이터 거버넌스·인간-AI 협업이 코어로",
          desc: "2026년 전 세계 MBA 프로그램이 AI 전략, 머신러닝 기초, 데이터 거버넌스, 인간-AI 협업, AI 윤리를 핵심 과목으로 편입하고 있습니다. 선택과목 한두 개가 아니라 재무·마케팅·운영 등 기존 코어 전반에 AI가 스며드는 방식이며, AIMBA 원우의 학습 로드맵에도 직접적인 시사점을 줍니다.",
          source: "Exeed College",
          href: "https://exeedcollege.com/blog/ai-in-mba-curriculum-2026/",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "AI가 벤처 자본을 빨아들이는 흐름이 더 선명해졌습니다. 2026년 1분기 글로벌 벤처투자는 3,000억 달러를 돌파해 사상 최대를 기록했고, 그중 약 80%가 AI로 향했습니다. 6월에도 'AI 에이전트를 감시하는' 모니터링 레이어, 로보틱스(피지컬 AI), GPU 인프라로 메가라운드가 이어지며, 투자 무게추가 소프트웨어를 넘어 자율주행·로봇·제조로 확장되고 있습니다.",
      articles: [
        {
          title: "1분기 글로벌 벤처투자 3,000억 달러 사상 최대 — 80%가 AI로",
          desc: "크런치베이스 집계에 따르면 2026년 1분기 글로벌 벤처 펀딩이 3,000억 달러를 돌파해 역대 최고를 기록했고, 이 중 약 2,420억 달러(약 80%)가 AI에 집중됐습니다. 자본이 소프트웨어를 넘어 자율주행·로보틱스·제조로 흘러가며 'AI = 벤처시장 그 자체'가 된 국면입니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/record-breaking-funding-ai-global-q1-2026/",
        },
        {
          title: "코랄로직스 2억 달러 시리즈F — 'AI 에이전트를 감시하는' 모니터링 레이어에 베팅",
          desc: "옵저버빌리티 기업 코랄로직스가 2억 달러 시리즈F(포스트머니 16억 달러)를 유치했습니다. 자율 AI 에이전트가 프로덕션에 늘어날수록 '에이전트가 무슨 일을 하는지 지켜보는' 모니터링 인프라 수요가 급증한다는 베팅으로, 에이전트 시대의 '관제탑' 시장이 새로 열리고 있습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/06/03/coralogix-raises-200m-in-race-to-build-the-monitoring-layer-for-ai-agents/",
        },
        {
          title: "제너럴리스트 AI 4억 달러·밸류 20억 달러 — 로봇이 복잡한 작업을 배우는 '피지컬 AI' 대형 라운드",
          desc: "로봇이 복잡한 실물 작업을 수행하도록 하는 제너럴리스트 AI가 20억 달러 밸류에이션에 4억 달러를 유치했습니다. Figure AI·Skild AI 등과 함께 '피지컬 AI(로보틱스 파운데이션 모델)'가 2026년 벤처 자본의 최대 격전지로 부상하고 있습니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/",
        },
        {
          title: "모달 랩스 3.55억 달러 시리즈C — 'AI를 돌릴 GPU'를 파는 서버리스 인프라 메가라운드",
          desc: "서버리스 GPU 컴퓨팅 기업 모달 랩스가 3.55억 달러 시리즈C를 유치했습니다. 모델을 만드는 회사만큼 '모델을 실행할 GPU 용량을 손쉽게 빌려주는' 인프라 기업에 자본이 몰리며, AI 가치사슬의 '연료·엔진' 레이어가 별도의 거대 시장으로 자리잡고 있습니다.",
          source: "Crunchbase News",
          href: "https://news.crunchbase.com/venture/biggest-funding-rounds-june-5-2026/",
        },
      ],
    },
    {
      id: "vibe",
      label: "Vibe Coding",
      code: "VIBE",
      narrative:
        "이번 호 Vibe Coding은 '컨텍스트 엔지니어링'과 '스펙 주도 개발'에 초점을 맞췄습니다. 모델이 강해질수록 차이를 만드는 건 프롬프트가 아니라 '무엇을 컨텍스트에 넣고 무엇을 빼는가'라는 설계 역량입니다. 앤트로픽 공식 가이드 두 편과 검증된 실무 튜토리얼을 통해, 데모가 아니라 프로덕션을 버티는 워크플로의 공통 원칙을 정리했습니다.",
      articles: [
        {
          title: "Anthropic 공식 — 'Effective Context Engineering for AI Agents'",
          desc: "앤트로픽 엔지니어링 블로그의 핵심 가이드입니다. 컨텍스트 창은 빠르게 차고, 차오를수록 성능이 떨어진다는 단 하나의 제약에서 출발해 '필요한 것만 적시에 로드하는(just-in-time)' 설계를 제시합니다. 💡 핵심: 프롬프트를 길게 쓰지 말고, glob·grep 같은 도구로 런타임에 맥락을 끌어오도록 시스템을 설계하라.",
          source: "Anthropic",
          href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        },
        {
          title: "Claude Code 공식 베스트 프랙티스 — 계획·컨텍스트 관리·TDD",
          desc: "Claude Code 공식 문서의 베스트 프랙티스 모음입니다. CLAUDE.md를 '프로젝트 헌법'으로 삼고, /clear로 컨텍스트를 적극 비우며, 테스트를 명확한 통과 게이트로 쓰는 워크플로가 핵심입니다. 💡 핵심: TDD의 red→green 사이클이 에이전트에게 '명확한 피드백'을 주는 가장 강력한 단일 패턴이다.",
          source: "Claude Code Docs",
          href: "https://code.claude.com/docs/en/best-practices",
        },
        {
          title: "Claude Code로 하는 스펙 주도 개발(SDD) — 가능성과 한계",
          desc: "코드를 짜기 전에 마크다운으로 요구사항·규칙·제약을 먼저 합의하는 '스펙 주도 개발'을 Claude Code 관점에서 정리했습니다. 💡 핵심: 좋은 스펙은 자동화의 출력 품질을 결정하지만, 스펙이 모호하면 에이전트도 모호하게 일한다 — 스펙 작성 능력 자체가 새로운 개발 역량이다.",
          source: "Augment Code",
          href: "https://www.augmentcode.com/guides/claude-code-spec-driven-development",
        },
        {
          title: "실전 Claude Code 베스트 프랙티스 — 계획·컨텍스트 전달·TDD를 코드로",
          desc: "DataCamp의 실습형 튜토리얼로, 계획 모드로 나쁜 접근을 미리 거르고 세션 간 컨텍스트를 전달하는 구체적 절차를 단계별로 보여줍니다. 💡 핵심: '한 번에 다 시키기'보다 작업을 잘게 쪼개 각 단계를 검증 가능한 형태로 위임하는 것이 프로덕션 품질의 갈림길이다.",
          source: "DataCamp",
          href: "https://www.datacamp.com/tutorial/claude-code-best-practices",
        },
      ],
    },
    {
      id: "rwa",
      label: "블록체인 · RWA",
      code: "RWA",
      narrative:
        "RWA(실물자산 토큰화) 시장이 규모와 제도 양쪽에서 동시에 전진했습니다. 온체인 RWA가 6월 기준 317.6억 달러로 전년 대비 300% 급증했고, 토큰화 미국채가 그 중심에 섰습니다. 토큰화 '주식'은 온도(Ondo)가 60% 이상 점유율로 선두를 굳혔고, 한국에서는 기관들이 디지털자산 시장에 본격 진입하며 규제 정비가 빨라지고 있습니다.",
      articles: [
        {
          title: "온체인 RWA 317.6억 달러·전년比 +300% — 토큰화 미국채가 견인",
          desc: "코인게코 RWA 리포트 2026 기준 온체인 RWA가 317.6억 달러로 전년 대비 약 300% 급증했습니다. 토큰화 미국채가 약 147.9억 달러로 가장 큰 카테고리이며 6.5만 명 이상이 보유, 7일 APY 3.35% 수준입니다. '국채를 블록체인에서 사고파는' 인프라가 RWA의 기축으로 자리잡았습니다.",
          source: "CoinGecko Research",
          href: "https://www.coingecko.com/research/publications/rwa-report-2026",
        },
        {
          title: "토큰화 '주식' 시대 개막 — 온도(Ondo), 231개 자산·점유율 63%로 선두",
          desc: "온도 글로벌마켓이 애플·엔비디아·테슬라·QQQ·SPY 등 100개 이상 미국 주식·ETF를 토큰화하며, 6월 1일 기준 231개 상장 자산·약 11억 달러로 토큰화 주식 시장의 약 63%를 점유했습니다. 토큰화 주식 규모는 1년 만에 200만 달러대에서 수억 달러대로 폭증하며 가장 빠른 신규 카테고리가 됐습니다.",
          source: "MetaMask",
          href: "https://metamask.io/news/types-of-tokenized-real-world-assets-rwa-categories",
        },
        {
          title: "타이거리서치 '2026 한국 기관들의 디지털자산 시장 진출 총정리'",
          desc: "타이거리서치 분석에 따르면 2026년 한국 주요 금융기관·증권사가 STO·스테이블코인·커스터디 세 전선에서 디지털자산 시장에 동시 진입하고 있습니다. 제도 정비와 맞물려 '실험'에서 '사업'으로 넘어가는 전환점이며, 부동산금융·대체투자 실무자에게도 새로운 상품 설계 여지를 엽니다.",
          source: "Tiger Research (블록미디어)",
          href: "https://www.blockmedia.co.kr/archives/1099479",
        },
        {
          title: "2026 가상자산산업 10대 핵심 이슈 — STO 법제화 이후의 진검승부",
          desc: "법무법인 화우의 2026 전망은 STO 법제화 마무리 이후 토큰증권 유통·장외시장·투자자 보호가 본격 쟁점이 된다고 짚습니다. '제도는 열렸지만 누가 유동성과 신뢰를 만드는가'가 시장 성패를 가르며, 금융·부동산 실무자에게 규제 리스크와 기회를 동시에 던집니다.",
          source: "법률신문 (화우)",
          href: "https://www.lawtimes.co.kr/news/articleView.html?idxno=215219",
        },
      ],
    },
    {
      id: "re",
      label: "부동산 · 핀테크",
      code: "RE",
      narrative:
        "한국 STO(토큰증권) 시장이 제도화 약 6개월 만에 '첫 시험대'에 올랐습니다. 무게추가 부동산 조각투자에서 IP·콘텐츠 등 비정형 자산으로 빠르게 옮겨가고, STO 거래소 예비인가를 둘러싸고 증권가의 전략이 갈리고 있습니다. '제도 통과'와 '시장 생존'이 다른 문제임을 보여주는 국면입니다.",
      articles: [
        {
          title: "부동산 STO 힘 빠진다 — 무게추가 지식재산권·콘텐츠로 이동",
          desc: "마켓인(이데일리) 보도에 따르면 STO 시장 초기 성장을 이끌던 부동산 조각투자 플랫폼들이 잇따라 사업을 종료하거나 방향을 트는 가운데, 무게중심이 IP·콘텐츠 등 비정형 자산으로 옮겨가고 있습니다. 상장 리츠 대비 세제(배당소득세 15.4% vs 분리과세 9.9%) 불리가 부동산 STO의 구조적 한계로 지목됩니다.",
          source: "마켓인 (이데일리)",
          href: "https://marketin.edaily.co.kr/News/Read?newsId=04598566645447936",
        },
        {
          title: "STO 거래소 예비인가 — 빅5 중 한투증권만 이탈, 증권가 전략 명암",
          desc: "파이낸셜투데이 보도에 따르면 STO 장외거래소 예비인가를 앞두고 대형 증권사 5곳 중 한국투자증권만 컨소시엄에서 이탈하는 등 전략이 엇갈리고 있습니다. 토큰증권 인프라 주도권을 둘러싼 증권가의 베팅이 본격화되며, 누가 '제도화된 STO'의 표준을 쥘지 윤곽이 잡히는 중입니다.",
          source: "파이낸셜투데이",
          href: "https://www.ftoday.co.kr/news/articleView.html?idxno=353245",
        },
        {
          title: "STO 성패 가를 첫 시험대는 '유동성' — 리츠 사례의 시사점",
          desc: "이투데이 분석은 토큰증권 시장의 진짜 관문이 발행이 아니라 '유통 유동성'이라고 짚습니다. 앞서 상장 리츠가 겪은 거래 부진 사례를 들어, 제도가 열려도 사고팔 사람이 충분치 않으면 시장이 작동하지 않는다는 점을 경고합니다 — 부동산금융 실무자가 반드시 따져야 할 리스크입니다.",
          source: "이투데이",
          href: "https://www.etoday.co.kr/news/view/2543188",
        },
        {
          title: "2026 부동산 스타트업 투자 트렌드 — 프롭테크가 다시 주목받는 이유",
          desc: "뉴스N연합 정리에 따르면 2026년 부동산 스타트업은 시드(140만~1,000만 달러)부터 시리즈B(1,200만~8,600만 달러)까지 자금이 다시 유입되고 있습니다. 거래·관리·유지보수 전 영역에 AI·디지털 기술이 침투하며, 기존 방식으로 풀기 어렵던 부동산 병목을 실제 서비스로 푸는 프롭테크가 투자 우선순위로 복귀했습니다.",
          source: "뉴스N연합",
          href: "https://newsyonhap.com/news/109288",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주는 신규 개별 마감 공고보다, 연중 상시 모집으로 전환된 핵심 창업지원 채널을 점검할 시점입니다. 중기부·창업진흥원(KISED)의 예비·초기창업패키지와 K-Startup 신규 공고를 우선 확인하시고, 2026년 중앙부처·지자체 통합공고로 전체 라인업을 한눈에 파악하시길 권합니다. AI·딥테크 창업 트랙 원우는 상시 모집 사업의 접수 타이밍을 미리 잡아두는 것이 유리합니다.",
      items: [
        {
          title: "2026년 중앙부처·지자체 창업지원사업 통합공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
        {
          title: "예비창업패키지 — 예비창업자 사업화 지원 (창업진흥원·KISED)",
          href: "https://www.kised.or.kr/menu.es?mid=a10205010000",
        },
        {
          title: "초기창업패키지(일반형) — 3년 이내 초기 창업기업 (창업진흥원·KISED)",
          href: "https://www.kised.or.kr/menu.es?mid=a10205020000",
        },
        {
          title: "K-Startup 창업지원포털 — 신규 사업 공고 상시 확인",
          href: "https://www.k-startup.go.kr/web/main/index.do",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 AI학과의 '2027 캐나다 토론토대 AI 융합 교육프로그램' 모집과 경영대학원 하계 학사 일정입니다. 서강대가 'AI 중심대학'으로 AI 학과·프로그램을 빠르게 확장하는 흐름 속에서, AIMBA 원우는 교내 AI 특강·국제 융합 프로그램을 적극 활용하시길 권합니다.",
      items: [
        {
          title: "[AI학과] 2027년도 캐나다 University of Toronto AI 융합 교육프로그램 모집 (6/1 공고)",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "[경영대] 2026-2학기 'Knowledge, Character and Management' 사전수강신청 (6/18 공고)",
          href: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do",
        },
        {
          title: "[SW중심대학] 하계 AI·SW 특강·프로그램 모니터링",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
        {
          title: "[MOT] 기술경영전문대학원 특강·포럼 상시 모니터링",
          href: "https://sgmot.sogang.ac.kr/gopage/sogangmot/goboard2.jsp?bbsConfigFK=22&siteId=sogangmot",
        },
      ],
    },
  ],
  events: [
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series (6/22~6/24)", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "6월 25일", day: "목", title: "AAiCON 2026 (6/25~6/26)", where: "서울", tag: "AI 컨퍼런스", link: "https://aifrenz.org/aaicon26-registration" },
    { date: "7월 7일", day: "화", title: "ICML 2026 (International Conference on Machine Learning, 7/7~7/9)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
  ],
};

const VOL12: IssueContent = {
  vol: 12,
  dateLabel: "2026년 6월 16일",
  isoDate: "20260616",
  title:
    "AI 상장 레이스 선언 — Fable 5·S-1·역대 최대 IPO가 겹친 주",
  subtitle: DEFAULT_SUBTITLE,
  memoLines: [
    "이번 주의 신호는 하나로 수렴합니다 — AI가 드디어 공개 자본시장으로 들어옵니다. Claude Fable 5가 6월 9일 Mythos급 최강 모델로 일반 공개됐고, Anthropic은 $965B·OpenAI는 $852B 밸류에이션으로 S-1을 기밀 제출하며 AI 상장 레이스를 공식 선언했습니다. 같은 날(6월 11일) SpaceX가 $1.77T 밸류에이션·$75B 모집으로 역대 최대 IPO를 성사시키며, 기술 자본시장이 완전히 새로운 국면으로 넘어갔습니다.",
    "동시에 Claude Code Dynamic Workflows가 정식 출시되며 단일 세션에서 최대 1,000개 병렬 서브에이전트를 오케스트레이션하는 시대가 열렸습니다. OpenAI-Oracle Cloud 파트너십은 OCI 기존 크레딧으로 GPT 모델을 즉시 이용하는 길을 열어 엔터프라이즈 AI 조달의 장벽을 낮췄고, ChatGPT는 역대 최단기로 10억 사용자를 돌파했습니다.",
  ],
  conclusion:
    "Anthropic과 OpenAI가 동시에 IPO를 향해 달리고 Claude Fable 5가 '너무 강력해 일부 기능을 제한해야 했다'는 평가를 받는 지금 — AI 기업 가치평가와 에이전트 운영 능력이 함께 공개 심판대에 오른 역사적 분기점입니다. AIMBA 원우분들에게는 AI 투자 논리를 읽는 능력이 곧 실무 역량임을 보여주는 한 주입니다.",
  sections: [
    {
      id: "ai",
      label: "AI · LLM",
      code: "AI-LLM",
      narrative:
        "이번 주 AI 섹션을 장악한 사건은 단연 Claude Fable 5의 공개입니다. Anthropic은 6월 9일 Mythos급 모델을 일반에 처음 공개했으며, 역대 어떤 공개 AI 모델보다 강력하다는 평가와 함께 사이버보안·생물학 등 고위험 영역에서 비밀리에 역량을 제한했다가 연구자 반발로 번복한 논란이 동시에 불거졌습니다. DeepSeek은 V4 Pro를 75% 영구 인하하며 AI 토큰 가격 전쟁을 격화시켰고, Claude Code Dynamic Workflows 정식 출시로 병렬 에이전트 오케스트레이션이 실무 표준으로 올라섰습니다.",
      articles: [
        {
          title: "Claude Fable 5 공개 — Anthropic 역대 가장 강력한 Mythos급 모델을 일반 출시",
          desc: "Anthropic이 6월 9일 Mythos급 모델 Claude Fable 5를 일반 공개했습니다. 소프트웨어 엔지니어링·지식 업무·비전에서 기존 공개 모델을 압도하며, API·Amazon Bedrock·Vertex AI·Microsoft Foundry에서 이용 가능합니다. 입력 $10/출력 $50(100만 토큰)으로 Opus 4.8의 2배 수준입니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/",
        },
        {
          title: "Anthropic, Fable 5 '비밀 역량 제한' 번복 — AI 안전과 성능 사이의 긴장",
          desc: "Fortune이 보도한 바에 따르면, Anthropic은 Fable 5 출시 초기 고위험 영역(사이버보안·생물학·화학)에서 역량을 비밀리에 제한했으나 AI 연구자·개발자들의 강한 비판을 받아 이를 번복했습니다. AI 최강 모델의 안전성과 활용 가능성 사이 균형 논쟁이 본격화됐습니다.",
          source: "Fortune",
          href: "https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/",
        },
        {
          title: "Claude Code Dynamic Workflows 정식 출시 — 최대 1,000 서브에이전트 병렬 오케스트레이션",
          desc: "Anthropic이 Claude Code에 Dynamic Workflows를 정식 출시했습니다. Claude가 JavaScript 오케스트레이션 스크립트를 동적으로 작성해 단일 세션에서 수백~최대 1,000개의 서브에이전트를 병렬 실행합니다. 광범위한 버그 추적·대형 마이그레이션·보안 감사 같이 단일 에이전트로는 불가능했던 복잡 작업을 커버합니다.",
          source: "Anthropic",
          href: "https://claude.com/blog/introducing-dynamic-workflows-in-claude-code",
        },
        {
          title: "DeepSeek V4 Pro, 75% 영구 가격 인하 — AI 토큰 가격 전쟁 본격화",
          desc: "DeepSeek이 V4 Pro를 영구 75% 인하해 서방 프런티어 모델 전체를 가격으로 압박했습니다. 업계 전반의 AI 토큰 단가가 구조적으로 낮아지며 마진 압박이 심화되고, AI 비용의 진입장벽이 더 낮아지는 효과를 동시에 만들고 있습니다.",
          source: "BuildFastWithAI",
          href: "https://www.buildfastwithai.com/blogs/ai-news-today-june-11-2026",
        },
      ],
    },
    {
      id: "business",
      label: "비즈니스 혁신",
      code: "BUSINESS",
      narrative:
        "AI 비즈니스의 축이 '기술 경쟁'에서 '자본시장 상장 레이스'로 이동한 한 주였습니다. Anthropic($965B)과 OpenAI($852B)가 나란히 S-1을 기밀 제출하며 트릴리온 달러 AI 상장 레이스를 공식 선언했고, OpenAI-Oracle 파트너십은 기업 AI 조달의 구조적 장벽을 낮췄습니다. ChatGPT 10억 사용자 돌파는 AI 플랫폼이 '대중 인프라'임을 수치로 확정한 이정표입니다.",
      articles: [
        {
          title: "Anthropic, $965B 밸류에이션 S-1 기밀 제출 — 트릴리온 AI 상장 레이스 시작",
          desc: "Anthropic이 6월 1일 $965B 밸류에이션으로 S-1을 SEC에 기밀 제출하며 IPO를 공식화했습니다. 연환산 매출 $47B 기반, 10월 상장·$1.75~1.8T 밸류에이션 목표를 밝혔습니다. OpenAI($852B S-1, 6월 8일)와의 AI 상장 레이스가 역사상 가장 큰 스케일로 본격화됐습니다.",
          source: "TechCrunch",
          href: "https://techcrunch.com/2026/06/01/anthropic-files-to-go-public/",
        },
        {
          title: "OpenAI-Oracle Cloud 파트너십 — OCI 크레딧으로 GPT 모델·Codex 즉시 이용",
          desc: "OpenAI가 6월 11일 Oracle Cloud와 파트너십을 발표했습니다. OCI 기존 계약 크레딧으로 OpenAI 최신 모델과 Codex를 즉시 사용 가능하게 해 새 계약·법무 검토 없이 기업 AI 도입이 가능해집니다. Microsoft의 OpenAI 독점 계약이 해소된 이후 클라우드 전면 확장의 첫 성과입니다.",
          source: "OpenAI",
          href: "https://openai.com/index/openai-on-oracle-cloud/",
        },
        {
          title: "ChatGPT, 역대 최단기 10억 사용자 돌파 — 3년 만에 인류 최대 AI 플랫폼",
          desc: "ChatGPT가 출시 약 3년 만에 10억 사용자를 돌파하며 역대 최단기 성장 기록을 세웠습니다. Claude는 전년 대비 사용자 성장 모멘텀에서 1위를 기록 중이어서, AI 플랫폼 경쟁이 '규모'와 '성장속도' 두 축으로 나뉘고 있습니다.",
          source: "BuildFastWithAI",
          href: "https://www.buildfastwithai.com/blogs/ai-news-today-june-11-2026",
        },
        {
          title: "SpaceX, $1.77T 밸류에이션 역대 최대 IPO — AI·우주가 자본시장을 동시에 달구다",
          desc: "SpaceX가 6월 11일 주당 $135에 공모가를 확정하며 $75B 자금 모집, $1.77T 밸류에이션으로 역대 최대 IPO를 성사시켰습니다. Nasdaq 티커 SPCX로 6월 12일 거래를 시작했으며, 같은 주에 Anthropic·OpenAI S-1이 겹치며 기술 자본시장이 새 역사를 쓴 한 주였습니다.",
          source: "BuildFastWithAI",
          href: "https://www.buildfastwithai.com/blogs/ai-news-today-june-11-2026",
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      code: "MBA",
      narrative:
        "이번 주 MBA·커리어 섹션은 '서강대 AI 전환'과 '글로벌 MBA의 AI 역량 통합'이라는 두 흐름이 맞물렸습니다. 서강대가 학제간 AI 행동과학 대학원 프로그램을 발표하며 기존 AIMBA 원우의 학습 지형이 넓어졌고, 글로벌 B스쿨들은 AI 유창성을 교과 전반에 통합하는 것을 넘어 채용 시장의 '기본값'으로 만들고 있습니다.",
      articles: [
        {
          title: "서강대, 학제간 'AI 행동과학' 대학원 프로그램 발표 — 2026년 가을 개설",
          desc: "서강대학교가 심리학·교육·미디어·기술경영을 통합한 학제간 AI 행동과학 대학원 프로그램을 2026년 가을부터 개설한다고 발표했습니다. 인간 중심 AI 시대의 연구자·실무자를 양성하는 것을 목표로 하며, AIMBA 원우에게 AI 기술과 인간 행동 연구의 교차점에서 새로운 커리어 트랙이 열리고 있습니다.",
          source: "Sogang University",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "AI가 전 세계 MBA 프로그램을 재편하는 방식 — 커리큘럼·채용·역량 기준의 동시 변화",
          desc: "FIND MBA의 2026년 분석에 따르면 전 세계 주요 경영대학원이 AI를 일부 선택과목이 아닌 전공 커리큘럼 전반에 통합하고 있으며, 고용주들은 AI 유창성을 이제 '기본값(baseline)'으로 요구합니다. AI를 활용해 분석·리더십·전략적 판단을 높이는 능력이 MBA 학위의 새로운 가치 기준이 됩니다.",
          source: "FIND MBA",
          href: "https://find-mba.com/articles/how-ai-is-reshaping-mba-programs-around-the-world",
        },
        {
          title: "MBA + AI 2026: 가장 빠르게 성장하는 커리어 조합의 실전 가이드",
          desc: "2026년 AI 기술과 경영 역량을 결합한 MBA+AI 경력이 기술·금융·컨설팅 전 분야에서 가장 빠르게 성장하는 커리어 트랙으로 부상했습니다. AI가 루틴 업무를 자동화할수록 '데이터 기반 의사결정 + 조직 실행력'을 함께 갖춘 인재의 희소성과 시장 가치가 함께 올라갑니다.",
          source: "ipsedu.in",
          href: "https://www.ipsedu.in/blog/mba-ai-2026-career-guide/",
        },
        {
          title: "Ground Truth: AI for Business Summit 2026 — 실무 AI 적용 전략 집중 토론",
          desc: "위스콘신대학 비즈니스스쿨이 개최하는 'Ground Truth: AI for Business Summit'에서 MBA 교수·기업 리더들이 AI 투자 ROI 측정, 에이전트 조직 설계, 윤리적 AI 거버넌스를 집중 논의합니다. 이론을 실무로 전환하는 'ground truth' 관점이 MBA 교육의 핵심 화두로 부상했습니다.",
          source: "Wisconsin School of Business",
          href: "https://business.wisc.edu/events/page/2",
        },
      ],
    },
    {
      id: "startup",
      label: "창업 · VC · PE",
      code: "STARTUP",
      narrative:
        "자본시장이 'AI + 우주'라는 두 개의 새로운 기준점을 동시에 세운 한 주였습니다. SpaceX의 $1.77T 역대 최대 IPO와 Anthropic·OpenAI의 S-1 기밀 제출이 겹치며, 기술 스타트업 생태계가 단순 '벤처'에서 '트릴리온 달러 공개 자본시장'으로 넘어가는 변곡점이 선명해졌습니다. 서울시는 유니콘 챌린지로 글로벌 스타트업을 직접 유치하고 있고, K-Startup Grand Challenge 2026은 ⏰ D-1(6/17 15:00 마감)을 앞두고 있습니다.",
      articles: [
        {
          title: "SpaceX, 역대 최대 IPO 성사 — $1.77T 밸류에이션·$75B 모집·Nasdaq SPCX",
          desc: "SpaceX가 6월 11일 주당 $135에 공모가를 확정하며 역대 최대 IPO를 성사시켰습니다. $1.77T 밸류에이션·$75B 자금 조달·Nasdaq 티커 SPCX. 같은 주 Anthropic·OpenAI S-1이 겹치며 기술 자본시장이 '트릴리온 달러 복수 상장'의 새 국면에 진입했습니다.",
          source: "BuildFastWithAI",
          href: "https://www.buildfastwithai.com/blogs/ai-news-today-june-11-2026",
        },
        {
          title: "서울시 '2026 유니콘 챌린지' — 글로벌 스타트업 7개사 선발, 마감 6월 30일",
          desc: "서울시가 해외 스타트업 유치를 위한 '2026 서울 유니콘 챌린지'를 개최합니다. 7개사 선발, 총 상금 1.2억원, 네이버클라우드 Greenhouse 연계 지원. 접수 마감 6월 30일이며, 글로벌 스타트업의 한국 시장 진출 전략 발판으로 주목받고 있습니다.",
          source: "BusinessWire",
          href: "https://www.businesswire.com/news/home/20260527551255/en/Seoul-Metropolitan-Government-Announces-Try-Everything-2026-Seoul-Unicorn-Challenge",
        },
        {
          title: "K-Startup Grand Challenge 2026 ⏰ D-1(6/17) — 한국 진출 글로벌 스타트업 최대 기회",
          desc: "한국 대표 글로벌 액셀러레이팅 프로그램 K-Startup Grand Challenge(KSGC) 2026의 메인 트랙 접수가 6월 17일(수) 15:00 KST 마감됩니다. 상위 40팀 항공·숙박 지원, 상위 8팀 최대 5,000만원 사업화 지원, 10개월 프로그램. AI·딥테크·핀테크 글로벌 창업자라면 지금 바로 확인하세요.",
          source: "KSGC",
          href: "https://ksgc.global/",
        },
        {
          title: "한국 '딥테크 스타트업 패키지' — AI·로봇·바이오 초기기업 최대 3억원 지원",
          desc: "중소벤처기업부가 정비한 딥테크 스타트업 패키지는 AI·로봇·바이오헬스 5대 분야 초기기업에 최대 1.5억원, 스케일업 기업에 최대 3억원을 지원합니다. K-Startup과 연계해 연중 상시 모집 방식으로 전환했으며, AIMBA 창업 트랙 원우에게 실질적 창업 인프라를 제공합니다.",
          source: "KoreaTechDesk",
          href: "https://koreatechdesk.com/korea-startup-policy-2026-growth-ladder",
        },
      ],
    },
    {
      id: "vibe",
      label: "Vibe Coding",
      code: "VIBE",
      narrative:
        "이번 호 Vibe Coding은 '실제로 프로덕션에 배포되는 코드'를 만드는 워크플로에 초점을 맞췄습니다. Claude Code Dynamic Workflows가 정식 출시되며 병렬 서브에이전트 오케스트레이션이 가능해졌고, dev.to에서는 264개 프로덕션 프레임워크를 직접 빌드한 경험에서 나온 '실제로 배포되는 5가지 워크플로'가 큰 반향을 일으켰습니다. 데모가 아니라 스프린트를 버텨내는 코드를 만들려면 무엇이 달라야 하는지를 보여주는 가이드들입니다.",
      articles: [
        {
          title: "Claude Code Dynamic Workflows 실전 가이드 — 병렬 서브에이전트로 '불가능한 작업' 위임하기",
          desc: "Anthropic이 공식 출시한 Claude Code Dynamic Workflows 가이드입니다. Claude가 직접 JavaScript 오케스트레이션 스크립트를 작성해 수백 개의 병렬 서브에이전트를 조율하며, 결과가 검증된 뒤 하나의 통합 답변으로 돌아옵니다. 💡 핵심: 넓은 코드베이스 버그 추적·대형 마이그레이션·보안 감사 같은 '너무 큰 작업'은 Dynamic Workflows로 위임하세요.",
          source: "Anthropic (Claude Blog)",
          href: "https://claude.com/blog/introducing-dynamic-workflows-in-claude-code",
        },
        {
          title: "실제로 배포되는 바이브코딩 워크플로 5가지 — 데모용이 아닌 프로덕션 레벨",
          desc: "264개 프로덕션 프레임워크를 직접 빌드한 저자가 '살아남는 워크플로'를 정리했습니다. Claude Code(Opus + 200k context)의 Plan 모드로 나쁜 접근을 미리 걸러내고, Cursor automation rules로 반복을 자동화합니다. 💡 핵심: 스펙을 먼저 합의하고, 컨텍스트를 과제 단위로 좁히고, 테스트를 통과 게이트로 써야 데모가 아닌 코드가 나옵니다.",
          source: "DEV Community (dohkoai)",
          href: "https://dev.to/dohkoai/5-vibe-coding-workflows-that-actually-ship-production-code-in-2026-1nmn",
        },
        {
          title: "Claude Code vs Cursor vs Codex 2026 — 바이브코딩 도구 선택 가이드",
          desc: "직접 비교에 따르면 Claude Code는 복잡한 멀티파일 작업·장기 플래닝, Cursor는 에디터 내 즉각적 속도, Codex는 심층 모델 성능 비교 기준이 필요할 때 각각 강점을 발휘합니다. 💡 핵심: 도구 선택보다 '프로토타입→프로덕션 전환 단계별 도구 조합'이 더 중요합니다.",
          source: "Viblo.asia",
          href: "https://viblo.asia/p/cursor-vs-claude-code-vs-codex-which-is-better-for-vibe-coding-in-2026-bA468ealLKv",
        },
        {
          title: "바이브코딩으로 AI 에이전트 프로덕션 배포까지 — 2026 실전 가이드",
          desc: "프로토타입 → 스테이징 → 프로덕션 전 단계를 다루며, AI 에이전트를 배포 가능한 형태로 패키징하는 체크리스트를 제공합니다. 💡 핵심: 바이브코딩 결과물은 반드시 '환경 분리 + 에러 모니터링 + 롤백 계획'과 함께 배포하세요.",
          source: "devops.com",
          href: "https://devops.com/claude-codes-dynamic-workflows-take-on-the-tasks-that-were-too-big-to-automate/",
        },
      ],
    },
    {
      id: "rwa",
      label: "블록체인 · RWA",
      code: "RWA",
      narrative:
        "RWA 토큰화가 '투자상품 보유'를 넘어 '소매 접근성 확대'와 '기관 채권 인프라 혁신'으로 동시에 진화했습니다. DBS Bank가 소매 고객 대상 토큰화 실물 금을 발표했고, KB국민은행이 한국 금융사 최초로 $100M 블록체인 디지털 채권을 발행했습니다. 토큰화 RWA 시장은 589% 급성장하며 $30B를 넘어섰고, 일본 3대 은행은 공동 스테이블코인 발행을 추진 중입니다.",
      articles: [
        {
          title: "DBS Bank, 소매 고객 대상 토큰화 실물 금 출시 발표 — 1토큰=금 1g",
          desc: "싱가포르 DBS Bank가 6월 11일 소매 고객을 위한 'DBS Physical Gold Tokens'를 2026년 하반기 출시한다고 발표했습니다. 토큰 1개는 싱가포르 전용 금고의 실물 금 1g에 완전 대응됩니다. 발행·유통·보관 전 과정을 DBS가 내부 처리하며, DBS Digital Exchange에서 기관 투자자용 추가 상장도 검토 중입니다.",
          source: "CoinDesk",
          href: "https://www.coindesk.com/business/2026/06/11/singapore-bank-dbs-to-offer-tokenized-gold-to-retail-customers",
        },
        {
          title: "KB국민은행, 한국 최초 블록체인 디지털 채권 $100M 발행 — HSBC Orion 플랫폼",
          desc: "KB국민은행이 한국 금융사 최초로 HSBC Orion 디지털자산 플랫폼을 통해 $100M(만기 2년) 블록체인 기반 디지털 채권을 발행했습니다. HSBC가 단독 주관사를 맡았으며, 전통 채권 발행 프로세스를 블록체인으로 혁신한 한국 기관금융의 첫 사례입니다.",
          source: "crypto.news",
          href: "https://crypto.news/kb-kookmin-bank-raises-100m-through-blockchain-powered-digital-bond-sale/",
        },
        {
          title: "토큰화 RWA 시장 589% 급성장 — 주식·채권·원자재 전선 동시 확장",
          desc: "2025년 초부터 2026년 6월까지 토큰화 RWA 시장이 589% 급성장해 $30B를 돌파했습니다. 토큰화 채권·MMF가 83%(+$6.5B) 성장한 가운데, 토큰화 주식은 422% 급증하며 가장 빠른 신규 카테고리로 부상했습니다. 기관 보유자 수 898,800명으로 역대 최대 단월 증가를 기록하며 소매 확산 신호도 뚜렷합니다.",
          source: "blockchain.news",
          href: "https://blockchain.news/news/tokenized-rwa-growth-2026",
        },
        {
          title: "일본 3대 은행, 스테이블코인 공동 발행 추진 — 2027년 3월 목표",
          desc: "일본 3대 메가뱅크가 2027년 3월 이전 엔화 스테이블코인을 공동 발행하는 계획을 추진 중입니다. 홍콩 규제형 스테이블코인 하반기 출시, 한국 STO 법제화와 맞물려 아시아 주요 금융시장의 토큰화 인프라가 동시에 구축되는 흐름입니다.",
          source: "PANews",
          href: "https://www.panewslab.com/en/articles/019ebb26-7902-757f-a88f-f651269b80af",
        },
      ],
    },
    {
      id: "re",
      label: "부동산 · 핀테크",
      code: "RE",
      narrative:
        "국내 부동산이 전세 수급 불균형으로 10년 6개월 만의 최대 주간 상승을 기록했고, 핀테크 자본은 '명확한 업무 병목을 푸는 버티컬'에 집중되고 있습니다. 글로벌에서는 GENIUS Act 통과 이후 스테이블코인이 결제 레일로 기관금융에 본격 편입되며 핀테크·부동산금융의 교차점이 빠르게 확장되고 있습니다.",
      articles: [
        {
          title: "서울 아파트 전세 0.29% 급등 — 10년 6개월 만에 최고 주간 상승",
          desc: "한국부동산원 주간 조사에 따르면 서울 아파트 전세 가격이 0.29% 급등해 10년 6개월 이후 최고 주간 상승폭을 기록했습니다. 입주 물량 감소·매매 관망 전환이 맞물리며 주거 불안 우려가 커지고 있습니다. 부동산금융 실무자 관점에서 전세 부채 확대가 수요층 이동을 어떻게 바꾸는지 주목할 국면입니다.",
          source: "한국부동산원",
          href: "https://www.reb.or.kr/r-one/",
        },
        {
          title: "2026 한국 VC 시장 서울 중심 개편 — AI·핀테크 시리즈A $3B 돌파",
          desc: "2026년 한국 스타트업 시리즈A 투자가 $3B를 돌파했습니다. 전통 부동산금융 채널의 디지털화(embedded finance·대출심사 자동화·보험계리 AI)를 겨냥한 AI 핀테크가 초기 자금을 흡수하는 흐름이 뚜렷하며, 글로벌 VC의 한국 딥테크 투자 관심도 높아지고 있습니다.",
          source: "KoreaTechDesk",
          href: "https://koreatechdesk.com/korea-startup-policy-2026-growth-ladder",
        },
        {
          title: "GENIUS Act 통과 이후 스테이블코인이 핀테크 결제 레일로 기관금융에 진입",
          desc: "a16z crypto의 2026년 트렌드 분석에 따르면, GENIUS Act(2025.7)가 연방 프레임워크를 세운 이후 스테이블코인이 결제·정산 인프라로 금융권에 빠르게 편입되고 있습니다. 스트라이프·비자·마스터카드가 공동 스테이블코인 플랫폼을 추진하는 사이, 한국 원화 스테이블코인 발행 주체 논쟁도 본격화됩니다.",
          source: "a16z Crypto",
          href: "https://a16zcrypto.com/posts/article/trends-stablecoins-rwa-tokenization-payments-finance/",
        },
      ],
    },
  ],
  supportGroups: [
    {
      id: "government",
      title: "정부과제 · 지원",
      note:
        "이번 주 최대 임박 공고는 K-Startup Grand Challenge 2026 메인 트랙(⏰ D-1, 마감 6/17 15:00)입니다. 한국 딥테크 스타트업 패키지(AI·로봇·바이오, 최대 3억원)와 서울시 유니콘 챌린지(마감 6/30, 7개사 선발) 모집도 진행 중이니, 창업 트랙 원우분들은 우선순위를 정해 즉시 확인하시길 권합니다.",
      items: [
        {
          title: "K-Startup Grand Challenge 2026 메인 트랙 접수 ⏰ D-1 (마감 6/17 15:00 KST)",
          href: "https://ksgc.global/",
        },
        {
          title: "한국 딥테크 스타트업 패키지 — AI·로봇·바이오 5대 분야, 최대 3억원",
          href: "https://koreatechdesk.com/korea-startup-policy-2026-growth-ladder",
        },
        {
          title: "2026 서울 유니콘 챌린지 — 글로벌 스타트업 7개사, 마감 6/30",
          href: "https://www.businesswire.com/news/home/20260527551255/en/Seoul-Metropolitan-Government-Announces-Try-Everything-2026-Seoul-Unicorn-Challenge",
        },
        {
          title: "2026년 중앙부처 및 지자체 창업지원사업 통합 공고 (중소벤처기업부)",
          href: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/view.do?pblancId=PBLN_000000000116904",
        },
      ],
    },
    {
      id: "campus",
      title: "서강대 · Campus",
      note:
        "이번 주 캠퍼스 포인트는 서강대의 학제간 AI 행동과학 대학원 프로그램 발표와, 인공지능학과·SW중심대학 하계 프로그램 모집입니다. 서강대 'AI 중심대학' 선정(연 30억원, 8년 총 240억원) 이후 AI 관련 학과·프로그램이 빠르게 확장되고 있으니, AIMBA 원우는 교내 AI 프로그램을 적극 활용하시길 권합니다.",
      items: [
        {
          title: "[AI학과] 학제간 AI 행동과학 대학원 프로그램 (2026 가을 개설 예정)",
          href: "https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330",
        },
        {
          title: "[SW중심대학] 하계 AI·SW 특강 및 프로그램 모니터링",
          href: "https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250",
        },
        {
          title: "[경영대] 서강대 경영대학원 MBA 공지사항",
          href: "https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do",
        },
        {
          title: "[MOT] 기술경영전문대학원 공지사항 (특강·포럼 상시 모니터링)",
          href: "https://sgmot.sogang.ac.kr/gopage/sogangmot/goboard2.jsp?bbsConfigFK=22&siteId=sogangmot",
        },
      ],
    },
  ],
  events: [
    { date: "6월 22일", day: "월", title: "AAAI 2026 Summer Symposium Series (6/22~6/24)", where: "동국대학교, 서울", tag: "학술 심포지엄", link: "https://aaai.org/conference/summer-symposia/suss26/" },
    { date: "7월 7일", day: "화", title: "ICML 2026 (International Conference on Machine Learning, 7/7~7/9)", where: "서울 COEX", tag: "국제 학술대회", link: "https://icml.cc/" },
    { date: "8월 19일", day: "수", title: "AI Summit Seoul & Expo 2026 (8/19~8/21)", where: "서울 COEX 그랜드볼룸 & B홀", tag: "글로벌 AI 서밋", link: "https://www.aisummitseoul.com/" },
  ],
};

// 신규 디자인 호 레지스트리(최신호가 앞).
export const ISSUE_CONTENTS: IssueContent[] = [VOL13, VOL12, VOL11, VOL10];

// 빌드 시 NEXT_PUBLIC_ISSUE_VOL 로 어떤 호를 현재호로 렌더할지 선택(미지정 시 최신호).
const LATEST_VOL = Math.max(...ISSUE_CONTENTS.map((i) => i.vol));
const SELECTED_VOL = Number(process.env.NEXT_PUBLIC_ISSUE_VOL) || LATEST_VOL;
export const CURRENT_ISSUE: IssueContent =
  ISSUE_CONTENTS.find((i) => i.vol === SELECTED_VOL) ?? ISSUE_CONTENTS[0];

// 호환 export — 기존 컴포넌트는 그대로 현재호 데이터를 받는다.
export const CURRENT_BRIEF = {
  vol: CURRENT_ISSUE.vol,
  dateLabel: CURRENT_ISSUE.dateLabel,
  title: CURRENT_ISSUE.title,
  subtitle: CURRENT_ISSUE.subtitle,
  memoLines: CURRENT_ISSUE.memoLines,
  conclusion: CURRENT_ISSUE.conclusion,
};
export const BRIEF_SECTIONS: BriefSection[] = CURRENT_ISSUE.sections;
export const SUPPORT_GROUPS: SupportGroup[] = CURRENT_ISSUE.supportGroups;
export const EVENTS: EventItem[] = CURRENT_ISSUE.events;

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
  {
    index: "51",
    artist: "Hieronymus Bosch",
    work: "The Garden of Earthly Delights",
    year: "c. 1490-1510",
    medium: "Oil on oak panels",
    collection: "Museo del Prado",
    mood: "teeming fantasy",
    note: "천국·현세·지옥을 세 폭에 펼친 환상의 백과사전입니다. 들여다볼수록 새로운 형상이 끝없이 튀어나옵니다.",
    image: "/assets/museum/bosch-garden-earthly-delights.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a6b4a", "#d8c08a"],
  },
  {
    index: "52",
    artist: "Leonardo da Vinci",
    work: "The Last Supper",
    year: "1495-1498",
    medium: "Tempera on plaster",
    collection: "Santa Maria delle Grazie, Milan",
    mood: "frozen drama",
    note: "\"너희 중 하나가 나를 팔리라\"는 말이 떨어진 순간의 동요를 열두 제자의 몸짓으로 잡아냈습니다.",
    image: "/assets/museum/leonardo-last-supper.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6b5a3e", "#bfae84"],
  },
  {
    index: "53",
    artist: "Leonardo da Vinci",
    work: "Lady with an Ermine",
    year: "c. 1489-1491",
    medium: "Oil on walnut panel",
    collection: "Czartoryski Museum, Kraków",
    mood: "poised turn",
    note: "고개를 돌린 찰나의 우아함과 흰 담비의 긴장이 한 화면에 담겼습니다. 초상화에 움직임을 불어넣었습니다.",
    image: "/assets/museum/leonardo-lady-ermine.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3026", "#c9a96a"],
  },
  {
    index: "54",
    artist: "Sandro Botticelli",
    work: "Primavera",
    year: "c. 1480",
    medium: "Tempera on panel",
    collection: "Uffizi Gallery",
    mood: "blooming allegory",
    note: "봄의 신들이 춤추듯 늘어선 르네상스 신화화입니다. 발끝에 핀 수백 송이 꽃이 계절을 증언합니다.",
    image: "/assets/museum/botticelli-primavera.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Botticelli-primavera.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3e5a3a", "#e0cf90"],
  },
  {
    index: "55",
    artist: "Albrecht Dürer",
    work: "Self-Portrait at Twenty-Eight",
    year: "1500",
    medium: "Oil on panel",
    collection: "Alte Pinakothek, Munich",
    mood: "frontal gravity",
    note: "화가가 자신을 그리스도처럼 정면으로 그린 도발적 자화상입니다. 예술가의 자의식이 시대를 앞섰습니다.",
    image: "/assets/museum/durer-self-portrait-1500.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_1500_self-portrait_%28High_resolution_and_detail%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2e2620", "#a07a4a"],
  },
  {
    index: "56",
    artist: "Titian",
    work: "Bacchus and Ariadne",
    year: "1522-1523",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "leaping color",
    note: "전차에서 뛰어내리는 바쿠스의 순간을 강렬한 군청과 주홍으로 포착했습니다. 베네치아 색채의 정점입니다.",
    image: "/assets/museum/titian-bacchus-ariadne.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Titian_Bacchus_and_Ariadne.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#274a7a", "#d99a4a"],
  },
  {
    index: "57",
    artist: "Hans Holbein the Younger",
    work: "The Ambassadors",
    year: "1533",
    medium: "Oil on oak",
    collection: "The National Gallery, London",
    mood: "hidden skull",
    note: "부와 학식의 상징 사이, 비스듬히 봐야 보이는 해골이 누워 있습니다. 모든 영광의 끝을 숨겨둔 그림입니다.",
    image: "/assets/museum/holbein-ambassadors.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2f3a34", "#b6975a"],
  },
  {
    index: "58",
    artist: "El Greco",
    work: "View of Toledo",
    year: "c. 1599-1600",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "stormy green",
    note: "폭풍 직전의 톨레도를 초현실적 녹청으로 그린 풍경화입니다. 도시가 살아 떨고 있는 듯합니다.",
    image: "/assets/museum/elgreco-view-of-toledo.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:El_Greco_View_of_Toledo.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#23341f", "#9fb87a"],
  },
  {
    index: "59",
    artist: "Caravaggio",
    work: "Medusa",
    year: "1597",
    medium: "Oil on canvas on poplar shield",
    collection: "Uffizi Gallery",
    mood: "frozen scream",
    note: "목이 잘리는 순간의 비명을 둥근 방패 위에 새겼습니다. 공포의 정점을 연극처럼 멈춰 세웠습니다.",
    image: "/assets/museum/caravaggio-medusa.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Medusa_by_Caravaggio.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f2420", "#9c6a3a"],
  },
  {
    index: "60",
    artist: "Peter Paul Rubens",
    work: "The Three Graces",
    year: "c. 1635",
    medium: "Oil on oak panel",
    collection: "Museo del Prado",
    mood: "warm flesh",
    note: "세 여신의 살결을 따뜻한 빛으로 빚어낸 바로크의 관능입니다. 루벤스 특유의 풍요가 흐릅니다.",
    image: "/assets/museum/rubens-three-graces.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_The_Three_Graces%2C_1635.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6b5240", "#e3c4a0"],
  },
  {
    index: "61",
    artist: "Artemisia Gentileschi",
    work: "Judith Slaying Holofernes",
    year: "c. 1612-1613",
    medium: "Oil on canvas",
    collection: "Museo di Capodimonte, Naples",
    mood: "fierce resolve",
    note: "여성 화가가 그린 가장 단호한 복수의 장면입니다. 칼을 쥔 두 팔에 망설임이 없습니다.",
    image: "/assets/museum/gentileschi-judith.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Artemisia_Gentileschi_-_Giuditta_decapita_Oloferne_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a1f1a", "#b8902f"],
  },
  {
    index: "62",
    artist: "Anthony van Dyck",
    work: "Charles I at the Hunt",
    year: "c. 1635",
    medium: "Oil on canvas",
    collection: "Musée du Louvre",
    mood: "effortless rule",
    note: "왕을 사냥터에 무심히 세워 권위를 더 높인 초상입니다. 우아함이 곧 통치의 언어였습니다.",
    image: "/assets/museum/vandyck-charles-i.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anthonis_van_Dyck_037.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4038", "#c2a36a"],
  },
  {
    index: "63",
    artist: "Rembrandt van Rijn",
    work: "The Anatomy Lesson of Dr. Nicolaes Tulp",
    year: "1632",
    medium: "Oil on canvas",
    collection: "Mauritshuis",
    mood: "rapt attention",
    note: "해부 강의에 빨려든 시선들을 빛으로 묶어낸 집단 초상입니다. 과학과 죽음이 한 빛 아래 모였습니다.",
    image: "/assets/museum/rembrandt-anatomy-lesson.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#241c16", "#a8895a"],
  },
  {
    index: "64",
    artist: "Rembrandt van Rijn",
    work: "The Return of the Prodigal Son",
    year: "c. 1668",
    medium: "Oil on canvas",
    collection: "Hermitage Museum",
    mood: "tender mercy",
    note: "돌아온 아들을 감싸 안는 아버지의 두 손에 용서가 응축돼 있습니다. 렘브란트 말년의 깊이입니다.",
    image: "/assets/museum/rembrandt-prodigal-son.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Return_of_the_Prodigal_Son.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a1c14", "#c08a3a"],
  },
  {
    index: "65",
    artist: "Johannes Vermeer",
    work: "The Astronomer",
    year: "c. 1668",
    medium: "Oil on canvas",
    collection: "Musée du Louvre",
    mood: "quiet inquiry",
    note: "천구의에 손을 뻗은 학자의 고요한 탐구를 창빛으로 비췄습니다. 지식을 향한 손짓이 차분합니다.",
    image: "/assets/museum/vermeer-astronomer.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3220", "#c9b070"],
  },
  {
    index: "66",
    artist: "Jean-Honoré Fragonard",
    work: "The Swing",
    year: "1767",
    medium: "Oil on canvas",
    collection: "Wallace Collection, London",
    mood: "frivolous bloom",
    note: "그네 위로 벗겨진 신발 한 짝이 로코코의 장난기를 압축합니다. 정원 가득 분홍빛 향락이 번집니다.",
    image: "/assets/museum/fragonard-the-swing.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fragonard%2C_The_Swing.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3e5236", "#e7b9c8"],
  },
  {
    index: "67",
    artist: "Jacques-Louis David",
    work: "The Death of Marat",
    year: "1793",
    medium: "Oil on canvas",
    collection: "Royal Museums of Fine Arts of Belgium",
    mood: "stark martyr",
    note: "혁명가의 죽음을 성화처럼 단순하게 그린 정치적 추모화입니다. 빈 배경이 비극을 더 키웁니다.",
    image: "/assets/museum/david-death-of-marat.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Death_of_Marat_by_David.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#23282a", "#b39a6a"],
  },
  {
    index: "68",
    artist: "Jacques-Louis David",
    work: "Napoleon Crossing the Alps",
    year: "1801",
    medium: "Oil on canvas",
    collection: "Château de Malmaison",
    mood: "heroic gust",
    note: "실제와 무관하게 영웅으로 연출된 권력의 이미지입니다. 휘날리는 망토가 곧 선전이었습니다.",
    image: "/assets/museum/david-napoleon-alps.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:David_-_Napoleon_crossing_the_Alps_-_Malmaison1.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3026", "#c64a3a"],
  },
  {
    index: "69",
    artist: "Jean-Auguste-Dominique Ingres",
    work: "La Grande Odalisque",
    year: "1814",
    medium: "Oil on canvas",
    collection: "Musée du Louvre",
    mood: "elongated line",
    note: "해부학을 일부러 늘여 그린 우아한 곡선의 누드입니다. 아름다움을 위해 사실을 휘었습니다.",
    image: "/assets/museum/ingres-grande-odalisque.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a2e28", "#cda37a"],
  },
  {
    index: "70",
    artist: "Théodore Géricault",
    work: "The Raft of the Medusa",
    year: "1818-1819",
    medium: "Oil on canvas",
    collection: "Musée du Louvre",
    mood: "desperate hope",
    note: "난파선 생존자들의 절망과 한 줄기 희망을 피라미드 구도로 쌓았습니다. 실화가 낳은 거대한 비명입니다.",
    image: "/assets/museum/gericault-raft-medusa.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#23201c", "#a8794a"],
  },
  {
    index: "71",
    artist: "Eugène Delacroix",
    work: "Liberty Leading the People",
    year: "1830",
    medium: "Oil on canvas",
    collection: "Musée du Louvre",
    mood: "surging banner",
    note: "삼색기를 든 자유의 여신이 시민을 이끄는 혁명의 상징입니다. 연기 속에서 깃발만 선명합니다.",
    image: "/assets/museum/delacroix-liberty.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2e2a26", "#c5453a"],
  },
  {
    index: "72",
    artist: "Caspar David Friedrich",
    work: "The Sea of Ice",
    year: "1823-1824",
    medium: "Oil on canvas",
    collection: "Hamburger Kunsthalle",
    mood: "crushing silence",
    note: "얼음에 짓눌려 부서진 배를 통해 자연 앞 인간의 무력함을 그렸습니다. 낭만주의의 숭고가 차갑습니다.",
    image: "/assets/museum/friedrich-sea-of-ice.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Das_Eismeer_-_Hamburger_Kunsthalle_-_02.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4650", "#c4d2da"],
  },
  {
    index: "73",
    artist: "J. M. W. Turner",
    work: "Rain, Steam and Speed",
    year: "1844",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "dissolving motion",
    note: "비와 증기 속을 달리는 기차를 형체가 녹듯이 그렸습니다. 산업의 속도를 빛으로 번지게 했습니다.",
    image: "/assets/museum/turner-rain-steam-speed.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rain_Steam_and_Speed_the_Great_Western_Railway.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a4e34", "#e0cf98"],
  },
  {
    index: "74",
    artist: "Jean-François Millet",
    work: "The Gleaners",
    year: "1857",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "stooped labor",
    note: "추수 끝 이삭을 줍는 세 여인을 기념비처럼 그렸습니다. 가장 낮은 노동에 존엄을 입혔습니다.",
    image: "/assets/museum/millet-gleaners.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6b5a3a", "#d8c590"],
  },
  {
    index: "75",
    artist: "Jean-François Millet",
    work: "The Angelus",
    year: "1857-1859",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "dusk prayer",
    note: "들녘에서 종소리에 맞춰 고개 숙인 부부의 기도를 그렸습니다. 노동과 신앙이 황혼에 겹칩니다.",
    image: "/assets/museum/millet-angelus.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_%28II%29_001.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a4230", "#cdb27a"],
  },
  {
    index: "76",
    artist: "Gustave Courbet",
    work: "The Artist's Studio",
    year: "1855",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "allegory of self",
    note: "화가의 작업실에 사회 전체를 불러 모은 사실주의 선언입니다. 중앙에 화가 자신이 앉아 세상을 그립니다.",
    image: "/assets/museum/courbet-artists-studio.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Courbet_LAtelier_du_peintre.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2e2a22", "#a8895a"],
  },
  {
    index: "77",
    artist: "James McNeill Whistler",
    work: "Nocturne in Black and Gold",
    year: "1875",
    medium: "Oil on panel",
    collection: "Detroit Institute of Arts",
    mood: "falling sparks",
    note: "불꽃이 흩어지는 밤을 거의 추상에 가깝게 그렸습니다. 형태보다 분위기를 그린 선구적 작품입니다.",
    image: "/assets/museum/whistler-nocturne.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Whistler-Nocturne_in_black_and_gold.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1c1f24", "#bfa14a"],
  },
  {
    index: "78",
    artist: "Claude Monet",
    work: "Rouen Cathedral, Façade (Sunset)",
    year: "1892-1894",
    medium: "Oil on canvas",
    collection: "Musée Marmottan Monet",
    mood: "dissolving stone",
    note: "같은 성당을 빛에 따라 수십 번 다시 그린 연작의 한 장면입니다. 돌이 노을에 녹아내립니다.",
    image: "/assets/museum/monet-rouen-cathedral.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#6b4e3a", "#e6b878"],
  },
  {
    index: "79",
    artist: "Édouard Manet",
    work: "The Railway",
    year: "1873",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "veiled steam",
    note: "철창 너머 증기를 바라보는 등 돌린 소녀가 근대 도시의 단절을 암시합니다. 시선이 엇갈립니다.",
    image: "/assets/museum/manet-the-railway.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edouard_Manet_-_The_Railway_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4038", "#bcae8a"],
  },
  {
    index: "80",
    artist: "Edgar Degas",
    work: "The Dance Class",
    year: "1873-1876",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "rehearsal hush",
    note: "무대가 아닌 연습실의 지친 발레리나들을 비스듬히 잡았습니다. 화려함 뒤의 노동을 봤습니다.",
    image: "/assets/museum/degas-dance-class.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a5240", "#d8cba0"],
  },
  {
    index: "81",
    artist: "Berthe Morisot",
    work: "The Cradle",
    year: "1872",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "tender watch",
    note: "잠든 아기를 바라보는 어머니의 시선을 얇은 베일 너머로 그렸습니다. 인상주의 여성 화가의 대표작입니다.",
    image: "/assets/museum/morisot-the-cradle.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a4e54", "#dcd2c4"],
  },
  {
    index: "82",
    artist: "Gustave Caillebotte",
    work: "The Floor Scrapers",
    year: "1875",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "bent backs",
    note: "마룻바닥을 긁는 노동자의 등을 도시적 시선으로 그린 보기 드문 주제입니다. 빛이 마루를 미끄러집니다.",
    image: "/assets/museum/caillebotte-floor-scrapers.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a4632", "#c\u0345a885"],
  },
  {
    index: "83",
    artist: "Pierre-Auguste Renoir",
    work: "A Girl with a Watering Can",
    year: "1876",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "garden sweetness",
    note: "물뿌리개를 든 소녀를 정원의 빛 속에 부드럽게 녹였습니다. 르누아르 특유의 따뜻함이 가득합니다.",
    image: "/assets/museum/renoir-girl-watering-can.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Auguste_Renoir_-_A_Girl_with_a_Watering_Can_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3e5236", "#e3c4a8"],
  },
  {
    index: "84",
    artist: "Mary Cassatt",
    work: "The Boating Party",
    year: "1893-1894",
    medium: "Oil on canvas",
    collection: "National Gallery of Art",
    mood: "bold diagonal",
    note: "보트 위 모자(母子)와 뱃사공을 과감한 구도로 잡았습니다. 일본 판화의 영향이 또렷합니다.",
    image: "/assets/museum/cassatt-boating-party.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2e4a5a", "#e0d2a8"],
  },
  {
    index: "85",
    artist: "Georges Seurat",
    work: "Bathers at Asnières",
    year: "1884",
    medium: "Oil on canvas",
    collection: "The National Gallery, London",
    mood: "still afternoon",
    note: "강가에서 쉬는 노동자들을 점묘 직전의 차분한 빛으로 그렸습니다. 여가의 한낮이 멈춰 있습니다.",
    image: "/assets/museum/seurat-bathers-asnieres.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Baigneurs_a_Asnieres.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a6a4a", "#dccf90"],
  },
  {
    index: "86",
    artist: "Vincent van Gogh",
    work: "Café Terrace at Night",
    year: "1888",
    medium: "Oil on canvas",
    collection: "Kröller-Müller Museum",
    mood: "gaslit warmth",
    note: "별이 박힌 밤하늘 아래 노란 카페 불빛이 거리를 데웁니다. 검정 없이 그린 밤입니다.",
    image: "/assets/museum/vangogh-cafe-terrace.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f3a5a", "#e8c04a"],
  },
  {
    index: "87",
    artist: "Vincent van Gogh",
    work: "Self-Portrait",
    year: "1889",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "swirling blue",
    note: "소용돌이치는 청록 배경 속 화가의 응시가 형형합니다. 불안마저 붓질의 리듬이 됐습니다.",
    image: "/assets/museum/vangogh-self-portrait-1889.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a4a4a", "#a8b89a"],
  },
  {
    index: "88",
    artist: "Vincent van Gogh",
    work: "Wheatfield with Crows",
    year: "1890",
    medium: "Oil on canvas",
    collection: "Van Gogh Museum",
    mood: "ominous gold",
    note: "갈라지는 길과 까마귀 떼가 불길하게 흩어집니다. 화가 말년의 격정이 하늘을 짓누릅니다.",
    image: "/assets/museum/vangogh-wheatfield-crows.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4a6a", "#e3c24a"],
  },
  {
    index: "89",
    artist: "Vincent van Gogh",
    work: "Almond Blossoms",
    year: "1890",
    medium: "Oil on canvas",
    collection: "Van Gogh Museum",
    mood: "new life",
    note: "조카의 탄생을 축하하며 그린 맑은 하늘빛 꽃가지입니다. 고흐가 그린 가장 평온한 봄입니다.",
    image: "/assets/museum/vangogh-almond-blossoms.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a8aa0", "#eef0e2"],
  },
  {
    index: "90",
    artist: "Paul Cézanne",
    work: "The Large Bathers",
    year: "1898-1905",
    medium: "Oil on canvas",
    collection: "Philadelphia Museum of Art",
    mood: "structured nude",
    note: "인물과 나무를 삼각 구도로 묶어 자연과 신체를 건축처럼 쌓았습니다. 입체파의 문을 연 그림입니다.",
    image: "/assets/museum/cezanne-large-bathers.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#4a6a6a", "#d2c498"],
  },
  {
    index: "91",
    artist: "Paul Gauguin",
    work: "Vision after the Sermon",
    year: "1888",
    medium: "Oil on canvas",
    collection: "Scottish National Gallery",
    mood: "red ground",
    note: "환상과 현실을 붉은 들판으로 갈라놓은 상징주의 전환점입니다. 색이 곧 감정이 됐습니다.",
    image: "/assets/museum/gauguin-vision-sermon.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paul_Gauguin_137.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#8a2a2a", "#d8b86a"],
  },
  {
    index: "92",
    artist: "Henri Rousseau",
    work: "The Sleeping Gypsy",
    year: "1897",
    medium: "Oil on canvas",
    collection: "Museum of Modern Art (MoMA)",
    mood: "dreaming desert",
    note: "사막에 잠든 여인과 사자를 동화처럼 그린 소박파의 명작입니다. 달빛 아래 정적이 흐릅니다.",
    image: "/assets/museum/rousseau-sleeping-gypsy.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:La_Boh%C3%A9mienne_endormie.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f2a3a", "#c9a86a"],
  },
  {
    index: "93",
    artist: "Gustav Klimt",
    work: "Judith I",
    year: "1901",
    medium: "Oil on canvas",
    collection: "Belvedere, Vienna",
    mood: "gilded rapture",
    note: "황금 배경 위 유디트의 황홀한 표정이 위험과 관능을 동시에 풍깁니다. 클림트 금빛 시대의 시작입니다.",
    image: "/assets/museum/klimt-judith.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gustav_Klimt_039.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a2e1a", "#d4af37"],
  },
  {
    index: "94",
    artist: "Edvard Munch",
    work: "Madonna",
    year: "1894-1895",
    medium: "Oil on canvas",
    collection: "Munch Museum, Oslo",
    mood: "ecstatic dread",
    note: "성스러움과 죽음, 관능을 한 인물에 겹친 상징주의 초상입니다. 붉은 후광이 불안하게 휘감습니다.",
    image: "/assets/museum/munch-madonna.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#2a1f28", "#b04a5a"],
  },
  {
    index: "95",
    artist: "John Singer Sargent",
    work: "Carnation, Lily, Lily, Rose",
    year: "1885-1886",
    medium: "Oil on canvas",
    collection: "Tate Britain",
    mood: "twilight lanterns",
    note: "해 질 녘 등불을 켜는 두 소녀를 정원 가득한 꽃 사이에 그렸습니다. 빛의 마지막 순간을 붙잡았습니다.",
    image: "/assets/museum/sargent-carnation-lily.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Singer_Sargent_-_Carnation%2C_Lily%2C_Lily%2C_Rose_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a4a3a", "#e8d49a"],
  },
  {
    index: "96",
    artist: "John Singer Sargent",
    work: "Madame X",
    year: "1883-1884",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "scandalous poise",
    note: "창백한 살결과 검은 드레스의 대비가 당대를 발칵 뒤집은 초상입니다. 우아함이 곧 도발이었습니다.",
    image: "/assets/museum/sargent-madame-x.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f1c1a", "#c2a17a"],
  },
  {
    index: "97",
    artist: "Winslow Homer",
    work: "The Gulf Stream",
    year: "1899",
    medium: "Oil on canvas",
    collection: "The Metropolitan Museum of Art",
    mood: "lone peril",
    note: "부서진 배 위 홀로 남은 선원을 상어와 폭풍이 둘러쌉니다. 자연 앞 인간의 고립을 그렸습니다.",
    image: "/assets/museum/homer-gulf-stream.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f4a5a", "#cbb070"],
  },
  {
    index: "98",
    artist: "Thomas Eakins",
    work: "The Gross Clinic",
    year: "1875",
    medium: "Oil on canvas",
    collection: "Philadelphia Museum of Art",
    mood: "clinical light",
    note: "수술 강의장의 피와 집중을 사실 그대로 그려 충격을 준 작품입니다. 의학의 권위를 빛으로 세웠습니다.",
    image: "/assets/museum/eakins-gross-clinic.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#241c18", "#a8865a"],
  },
  {
    index: "99",
    artist: "Henri Rousseau",
    work: "The Dream",
    year: "1910",
    medium: "Oil on canvas",
    collection: "Museum of Modern Art (MoMA)",
    mood: "lush reverie",
    note: "정글 속 소파에 누운 여인을 통해 꿈의 논리를 그렸습니다. 수백 겹의 초록이 환상을 만듭니다.",
    image: "/assets/museum/rousseau-the-dream.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Henri_Rousseau_005.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#1f3a24", "#cfc06a"],
  },
  {
    index: "100",
    artist: "Jean-Léon Gérôme",
    work: "Pollice Verso",
    year: "1872",
    medium: "Oil on canvas",
    collection: "Phoenix Art Museum",
    mood: "roaring arena",
    note: "검투사의 생사를 가르는 군중의 엄지를 정밀하게 재현했습니다. 고대 로마를 사진처럼 부활시켰습니다.",
    image: "/assets/museum/gerome-pollice-verso.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jean-Leon_Gerome_Pollice_Verso.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a4632", "#d8b878"],
  },
  {
    index: "101",
    artist: "William-Adolphe Bouguereau",
    work: "The Birth of Venus",
    year: "1879",
    medium: "Oil on canvas",
    collection: "Musée d'Orsay",
    mood: "polished grace",
    note: "매끄러운 살결과 완벽한 균형으로 학원파의 이상미를 구현했습니다. 고전의 기술이 정점에 닿았습니다.",
    image: "/assets/museum/bouguereau-birth-of-venus.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a6a", "#e3cdb0"],
  },
  {
    index: "102",
    artist: "Grant Wood",
    work: "American Gothic",
    year: "1930",
    medium: "Oil on beaverboard",
    collection: "Art Institute of Chicago",
    mood: "stoic plains",
    note: "쇠스랑을 든 농부 부녀를 통해 미국 중서부의 완고함을 그렸습니다. 가장 많이 패러디된 초상입니다.",
    image: "/assets/museum/grant-wood-american-gothic.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a3e30", "#cab98a"],
  },
  {
    index: "103",
    artist: "Camille Pissarro",
    work: "Boulevard Montmartre, Spring",
    year: "1897",
    medium: "Oil on canvas",
    collection: "Private / Various collections",
    mood: "bustling haze",
    note: "창에서 내려다본 대로의 분주함을 봄빛 속에 풀었습니다. 도시의 움직임 자체가 주인공입니다.",
    image: "/assets/museum/pissarro-boulevard-montmartre.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Camille_Pissarro%2C_Boulevard_Montmartre%2C_spring.jpg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#5a5240", "#d2c2a0"],
  },
  {
    index: "104",
    artist: "Utagawa Hiroshige",
    work: "Plum Park in Kameido",
    year: "1857",
    medium: "Woodblock print",
    collection: "Various collections",
    mood: "blossom frame",
    note: "화면을 가로지른 매화 가지가 과감한 구도를 만듭니다. 고흐가 모사할 만큼 서구를 매혹했습니다.",
    image: "/assets/museum/hiroshige-plum-park.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:De_pruimenboomgaard_te_Kameido-Rijksmuseum_RP-P-1956-743.jpeg",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a5a3a", "#d88a8a"],
  },
  {
    index: "105",
    artist: "Johannes Vermeer",
    work: "Girl with a Red Hat",
    year: "c. 1665-1666",
    medium: "Oil on panel",
    collection: "National Gallery of Art",
    mood: "fleeting glance",
    note: "붉은 모자 아래 돌아보는 찰나의 시선을 작은 패널에 담았습니다. 빛의 점들이 살아 반짝입니다.",
    image: "/assets/museum/vermeer-girl-red-hat.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vermeer_-_Girl_with_a_Red_Hat.JPG",
    license: "Public Domain / Wikimedia Commons",
    tone: ["#3a2620", "#cf6a4a"],
  },
];

// 명화 10점 로테이션 — vol을 seed로 MUSEUM_WORKS(105점)에서 결정론적으로 10점 선택.
// Math.random 금지(빌드 재현성·정적 export 안전): 같은 vol → 항상 같은 10점.
export function curatedWorks(vol: number, n = 10): MuseumWork[] {
  const pool = [...MUSEUM_WORKS];
  // LCG 기반 결정론적 셔플 (seed = vol)
  let s = (vol * 9301 + 49297) % 233280 || 1;
  const rng = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}

// 이번 호 큐레이션 10점(현재 렌더 중인 호 기준). CURATED_WORKS[0] = 대표작.
export const CURATED_WORKS: MuseumWork[] = curatedWorks(SELECTED_VOL, 10);

// Interview Room — 첫 인터뷰 준비 중(coming soon). 실제 발행 전까지 정직한 예고 상태로 운영한다.
export const INTERVIEW_INTRO = {
  sectionQuote: "지금 가장 답하고 싶은 질문은 무엇인가요?",
  lead: "7기 원우 한 사람의 이야기를, 격주로 싣습니다. 첫 인터뷰를 준비하고 있습니다.",
  // 수신자 빈칸 + 제목 프리필 (사이트 공통 mailto 패턴)
  proposeMailto: "mailto:?subject=AIMBA%207th%20Interview%20%EC%A0%9C%EC%95%88",
};

// 외부 데이터 소스: 공모전 보드 (junyeo217/ai-contest-board, 출처 명시 조건으로 공개 JSON 활용)
export const CONTESTS_DATA_URL =
  "https://raw.githubusercontent.com/junyeo217/ai-contest-board/main/data/contests.json";
export const CONTESTS_SOURCE_REPO_URL =
  "https://github.com/junyeo217/ai-contest-board";
export const CONTESTS_SOURCE_SITE_URL =
  "https://junyeo217.github.io/ai-contest-board/";

// 자체 크롤 보강 소스: 위비티 기획/아이디어 분야(cidx=1) — 외부 단일 소스가
// 이미지/영상만 큐레이션해 '기획·아이디어' 필터가 빈 화면이던 문제를 보강한다.
// 정적 export와 동일 오리진에 떨구므로 basePath만 붙여 상대 경로로 fetch한다.
// scripts/crawl_contests.py 가 매일(GitHub Actions) 갱신한다.
export const CONTESTS_EXTRA_URL = `${
  process.env.NEXT_PUBLIC_BASE_PATH || ""
}/data/contests-extra.json`;
export const CONTESTS_EXTRA_SITE_URL = "https://www.wevity.com/?c=find&s=1&gub=1&cidx=1";

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

// ── 좌측 카탈로그 필터 (실제 데이터 자동연동) ───────────────────────────────
// count를 하드코딩하지 않는다. 현재호 섹션 기사 수 / AI Events 수 / 명화 수 /
// 누적 발간 호수에서 매 빌드 시 계산 → /aimba 발간 때마다 자동으로 정확히 맞춰진다.
const filterSectionCount = (id: string): number =>
  CURRENT_ISSUE.sections.find((s) => s.id === id)?.articles.length ?? 0;

// 정부과제·Campus는 sections가 아니라 supportGroups(items)에 들어있다 → 별도 카운트
const filterGroupCount = (id: string): number =>
  CURRENT_ISSUE.supportGroups.find((g) => g.id === id)?.items.length ?? 0;

export const FILTERS: FilterItem[] = [
  { code: "ALL", label: "전체보기", count: BRIEF_ISSUES.length, href: "#archive" },
  { code: "AI-LLM", label: "AI · LLM", count: filterSectionCount("ai"), href: `${CURRENT_ISSUE_PATH}#ai` },
  { code: "BUS", label: "Business · Strategy", count: filterSectionCount("business"), href: `${CURRENT_ISSUE_PATH}#business` },
  { code: "MBA", label: "MBA Insight", count: filterSectionCount("mba"), href: `${CURRENT_ISSUE_PATH}#mba` },
  { code: "STARTUP", label: "Startup · VC · PE", count: filterSectionCount("startup"), href: `${CURRENT_ISSUE_PATH}#startup` },
  { code: "VIBE", label: "Vibe Coding", count: filterSectionCount("vibe"), href: `${CURRENT_ISSUE_PATH}#vibe` },
  { code: "GOV", label: "정부과제 · 지원", count: filterGroupCount("government"), href: `${CURRENT_ISSUE_PATH}#government` },
  { code: "CAMPUS", label: "AIMBA · Campus", count: filterGroupCount("campus"), href: `${CURRENT_ISSUE_PATH}#campus` },
  { code: "EVENT", label: "AI Events", count: EVENTS.length, href: `${CURRENT_ISSUE_PATH}#events` },
  { code: "MUSEUM", label: "S.A Museum", count: MUSEUM_WORKS.length, href: "/issues/museum.html" },
];

// ── 구독 / 재방문 장치 ────────────────────────────────────────
// 새 호 발간 알림을 받을 채널. 텔레그램 채널을 개설하면 telegram 값만 채우면
// 버튼이 자동 활성화된다(비우면 텔레그램 버튼은 숨김). 그 전까지는 이메일(mailto)이 기본 동작.
export const SUBSCRIBE = {
  // 예: "https://t.me/aimba7th" — 채널/봇 링크. 비우면 텔레그램 버튼 숨김.
  telegram: "",
  // 구글폼 등 외부 구독 폼 URL. 비우면 mailto 폴백 사용.
  formUrl: "",
  // mailto 폴백 (수신: 조전무 · 제목·본문 프리필) — 방문자가 신청 메일을 보내면 아래 주소로 도착
  mailto:
    "mailto:jun160022@gmail.com?subject=AIMBA%207th%20Weekly%20Brief%20%EA%B5%AC%EB%8F%85%20%EC%8B%A0%EC%B2%AD&body=AIMBA%207th%20Weekly%20Brief%20%EC%83%88%20%ED%98%B8%20%EC%95%8C%EB%A6%BC%EC%9D%84%20%EB%B0%9B%EA%B3%A0%20%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%0A%EC%8B%A0%EC%B2%AD%EC%9E%90%20%EC%84%B1%ED%95%A8%3A%20%0A%EC%97%B0%EB%9D%BD%EC%B2%98(%EC%84%A0%ED%83%9D)%3A%20",
  headline: "매주, 새 호를 가장 먼저",
  sub: "AI · 비즈니스 · MBA · 창업 인사이트를 경영자 관점으로 정리해 보내드립니다. 발간 알림을 받아보세요.",
};

// ── 사이트 검색 인덱스 (무의존성·빌드타임 생성) ──────────────────
// 풀콘텐츠 호(ISSUE_CONTENTS)는 기사 단위, 전체 호(BRIEF_ISSUES)는 헤드라인 단위로
// 평탄화한다. 클라이언트에서 substring/토큰 매칭으로 즉시 검색(서버·외부 의존 0).
export interface SearchDoc {
  vol: number;
  date: string;
  code: string;
  sectionLabel: string;
  title: string;
  desc: string;
  source: string;
  href: string; // sitePath 적용 전 경로
  kind: "article" | "issue";
}

const ISSUE_PATH_BY_VOL = new Map(BRIEF_ISSUES.map((i) => [i.vol, i.path]));

export const SEARCH_INDEX: SearchDoc[] = [
  // 1) 풀콘텐츠 호: 섹션별 기사 단위 (깊은 검색)
  ...ISSUE_CONTENTS.flatMap((issue) => {
    const base =
      ISSUE_PATH_BY_VOL.get(issue.vol) ?? `/issues/vol_${issue.isoDate}.html`;
    return issue.sections.flatMap((sec) =>
      sec.articles.map((a) => ({
        vol: issue.vol,
        date: issue.dateLabel,
        code: sec.code,
        sectionLabel: sec.label,
        title: a.title,
        desc: a.desc,
        source: a.source,
        href: `${base}#${sec.id}`,
        kind: "article" as const,
      }))
    );
  }),
  // 2) 전체 호 헤드라인: 과거 호까지 호 단위로 커버 (넓은 검색)
  ...BRIEF_ISSUES.map((i) => ({
    vol: i.vol,
    date: i.date,
    code: i.section,
    sectionLabel: i.sectionLabel,
    title: i.title,
    desc: i.headline,
    source: `Vol.${i.vol}`,
    href: i.path,
    kind: "issue" as const,
  })),
];

// ── 아카이브 횡단(토픽별) 뷰 ──────────────────────────────────
// 풀콘텐츠 호의 섹션을 토픽 코드(code) 기준으로 가로로 묶는다 →
// "AI만 전 호 모아보기" 같은 종단(縱斷)이 아니라 횡단(橫斷) 탐색을 가능케 한다.
export interface TopicArticle {
  vol: number;
  date: string;
  href: string;
  title: string;
  desc: string;
  source: string;
}
export interface TopicGroup {
  code: string;
  label: string;
  count: number;
  articles: TopicArticle[];
}

export const TOPIC_GROUPS: TopicGroup[] = (() => {
  const map = new Map<string, TopicGroup>();
  for (const issue of ISSUE_CONTENTS) {
    const base =
      ISSUE_PATH_BY_VOL.get(issue.vol) ?? `/issues/vol_${issue.isoDate}.html`;
    for (const sec of issue.sections) {
      const g: TopicGroup =
        map.get(sec.code) ??
        { code: sec.code, label: sec.label, count: 0, articles: [] };
      for (const a of sec.articles) {
        g.articles.push({
          vol: issue.vol,
          date: issue.dateLabel,
          href: `${base}#${sec.id}`,
          title: a.title,
          desc: a.desc,
          source: a.source,
        });
      }
      g.count = g.articles.length;
      map.set(sec.code, g);
    }
  }
  // 최신 호가 위로 오도록 vol 내림차순 정렬
  for (const g of map.values()) g.articles.sort((a, b) => b.vol - a.vol);
  return [...map.values()].sort((a, b) => b.count - a.count);
})();

// ── 발간 검증 가드 (빌드/모듈 로드 시 1회) ──────────────────────
// 필수 필드 누락은 빌드를 막는다(throw). 링크 형식 등 약한 위반은 경고만 남긴다.
// /aimba 발간 때 데이터 실수를 빌드 단계에서 즉시 잡기 위한 안전장치.
(function validateIssues() {
  const linkOk = /^(https?:\/\/|\/|#|mailto:)/;
  for (const issue of ISSUE_CONTENTS) {
    const tag = `Vol.${issue?.vol ?? "?"}`;
    if (!issue.vol || !issue.title || !issue.isoDate) {
      throw new Error(`[data 검증] ${tag}: vol/title/isoDate 필수값 누락`);
    }
    if (!issue.sections?.length) {
      throw new Error(`[data 검증] ${tag}: sections 가 비어 있음`);
    }
    for (const sec of issue.sections) {
      if (!sec.id || !sec.code || !sec.label) {
        throw new Error(
          `[data 검증] ${tag}/${sec?.id ?? "?"}: 섹션 id/code/label 누락`
        );
      }
      for (const a of sec.articles ?? []) {
        if (!a.title || !a.href) {
          throw new Error(
            `[data 검증] ${tag}/${sec.id}: 기사 title/href 누락 (${a.title ?? "?"})`
          );
        }
        if (!linkOk.test(a.href) && typeof console !== "undefined") {
          console.warn(
            `[data 검증] ${tag}/${sec.id}: 비표준 링크 형식 — ${a.href}`
          );
        }
      }
    }
  }
})();
