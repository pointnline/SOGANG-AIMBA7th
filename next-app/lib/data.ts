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

export const CURRENT_ISSUE_PATH = "/issues/vol_20260601.html";
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
  { key: "PUBLISHED", value: "9", sub: "누적 발간 호수" },
  { key: "CURRENT", value: "Vol.9", sub: "2026.06.01 최신호" },
  { key: "TOP SIGNAL", value: "AI", sub: "에이전트 실력 경쟁" },
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
    views: "최신",
    live: true,
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
    views: "최신",
    live: true,
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

// 신규 디자인 호 레지스트리(최신호가 앞).
export const ISSUE_CONTENTS: IssueContent[] = [VOL9, VOL8, VOL7, VOL6];

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
];

// 명화 10점 로테이션 — vol을 seed로 MUSEUM_WORKS(50점)에서 결정론적으로 10점 선택.
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

export const FILTERS: FilterItem[] = [
  { code: "ALL", label: "전체보기", count: BRIEF_ISSUES.length, href: "#archive" },
  { code: "AI-LLM", label: "AI · LLM", count: filterSectionCount("ai"), href: `${CURRENT_ISSUE_PATH}#ai` },
  { code: "BUS", label: "Business · Strategy", count: filterSectionCount("business"), href: `${CURRENT_ISSUE_PATH}#business` },
  { code: "MBA", label: "MBA Insight", count: filterSectionCount("mba"), href: `${CURRENT_ISSUE_PATH}#mba` },
  { code: "STARTUP", label: "Startup · VC · PE", count: filterSectionCount("startup"), href: `${CURRENT_ISSUE_PATH}#startup` },
  { code: "GOV", label: "정부과제 · 지원", count: filterSectionCount("government"), href: `${CURRENT_ISSUE_PATH}#government` },
  { code: "CAMPUS", label: "AIMBA · Campus", count: filterSectionCount("campus"), href: `${CURRENT_ISSUE_PATH}#campus` },
  { code: "EVENT", label: "AI Events", count: EVENTS.length, href: `${CURRENT_ISSUE_PATH}#events` },
  { code: "MUSEUM", label: "S.A Museum", count: MUSEUM_WORKS.length, href: "/issues/museum.html" },
];
