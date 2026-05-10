// SOGANG AIMBA 7th — Mock data for all pages
// 백엔드 / CMS 붙이기 전 단계의 임시 데이터.
// 모든 페이지가 이 파일을 import 해서 사용합니다.

export type Section =
  | "AI-LLM"
  | "BUS"
  | "MBA"
  | "STARTUP"
  | "CAMPUS"
  | "EVENT"
  | "MUSEUM";

export interface FilterItem {
  code: Section | "ALL";
  label: string;
  count: number;
}

export const FILTERS: FilterItem[] = [
  { code: "ALL", label: "전체보기", count: 23 },
  { code: "AI-LLM", label: "AI · LLM", count: 8 },
  { code: "BUS", label: "Business · Strategy", count: 5 },
  { code: "MBA", label: "MBA Insight", count: 3 },
  { code: "STARTUP", label: "Startup", count: 4 },
  { code: "CAMPUS", label: "AIMBA · Campus", count: 2 },
  { code: "EVENT", label: "AI Events", count: 1 },
  { code: "MUSEUM", label: "S.A Museum", count: 23 },
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
  { key: "TOTAL VIEWS", value: "1,284", sub: "브리프 누적 조회" },
  { key: "STRONG SIGNALS", value: "37", sub: "좋아요 + 체크" },
  { key: "TOP ISSUE", value: "AI", sub: "컨설팅의 종말" },
] as const;

export interface BriefIssue {
  vol: number;
  date: string; // 2026.05.09
  shortDate: string; // 05.09
  section: Section;
  sectionLabel: string;
  title: string;
  read: string;
  views: string;
  live?: boolean;
}

export const BRIEF_ISSUES: BriefIssue[] = [
  {
    vol: 23,
    date: "2026.05.09",
    shortDate: "05.09",
    section: "AI-LLM",
    sectionLabel: "AI · LLM",
    title: "Claude 4.5와 컨설팅의 종말",
    read: "38분",
    views: "4,127",
    live: true,
  },
  {
    vol: 22,
    date: "2026.05.02",
    shortDate: "05.02",
    section: "STARTUP",
    sectionLabel: "STARTUP",
    title: "한국 SaaS, GMV 1조원의 벽을 넘다",
    read: "32분",
    views: "6,841",
  },
  {
    vol: 21,
    date: "2026.04.25",
    shortDate: "04.25",
    section: "BUS",
    sectionLabel: "STRATEGY",
    title: "NVIDIA가 그리는 다음 10년의 자본 지도",
    read: "41분",
    views: "9,213",
  },
  {
    vol: 20,
    date: "2026.04.18",
    shortDate: "04.18",
    section: "MBA",
    sectionLabel: "MBA INSIGHT",
    title: "AI 시대 인적 자본의 재정의",
    read: "28분",
    views: "7,002",
  },
  {
    vol: 19,
    date: "2026.04.11",
    shortDate: "04.11",
    section: "BUS",
    sectionLabel: "BUSINESS",
    title: "소비재 기업의 AI 전환 — 코카콜라 사례",
    read: "35분",
    views: "5,488",
  },
];

// 23개 호 더미 — Archive timeline 용
export const ARCHIVE_TIMELINE = Array.from({ length: 23 }, (_, i) => ({
  vol: 23 - i,
  shortDate: `${5 - Math.floor(i / 4)}.${String((i % 4) * 7 + 2).padStart(
    2,
    "0",
  )}`,
}));

export interface EventItem {
  date: string;
  day: string;
  title: string;
  where: string;
  tag: string;
}

export const EVENTS: EventItem[] = [
  {
    date: "MAY 11",
    day: "토",
    title: "7기 미래혁신국 정기 모임",
    where: "서강대 GH 305",
    tag: "정기",
  },
  {
    date: "MAY 16",
    day: "목",
    title: "Future Report 5월호 발간 미팅",
    where: "온라인 (Zoom)",
    tag: "편집",
  },
  {
    date: "MAY 22",
    day: "수",
    title: "AI Agent 실무 적용 세미나",
    where: "서강대 GH 102",
    tag: "세미나",
  },
  {
    date: "MAY 31",
    day: "금",
    title: "7기 원우 네트워킹 디너",
    where: "광화문",
    tag: "네트워킹",
  },
];

export interface BookItem {
  title: string;
  author: string;
  recommendedBy: string;
  c1: string;
  c2: string;
}

export const BOOKS: BookItem[] = [
  {
    title: "The Coming Wave",
    author: "Mustafa Suleyman",
    recommendedBy: "이지원 7기",
    c1: "#3a4a5c",
    c2: "#22303f",
  },
  {
    title: "실리콘밸리의 팀장들",
    author: "Kim Scott",
    recommendedBy: "박상민 7기",
    c1: "#c08c4f",
    c2: "#7d5728",
  },
  {
    title: "Prediction Machines",
    author: "Ajay Agrawal",
    recommendedBy: "정수현 7기",
    c1: "#8B0029",
    c2: "#5e001b",
  },
  {
    title: "Co-Intelligence",
    author: "Ethan Mollick",
    recommendedBy: "김도훈 7기",
    c1: "#1a1714",
    c2: "#3d342d",
  },
  {
    title: "제로 투 원",
    author: "Peter Thiel",
    recommendedBy: "이서연 7기",
    c1: "#e7d6b8",
    c2: "#b89967",
  },
  {
    title: "Designing Data-Intensive",
    author: "Martin Kleppmann",
    recommendedBy: "최재현 7기",
    c1: "#5b6e9a",
    c2: "#3a4a5c",
  },
];

export interface MuseumWork {
  index: string;
  artist: string;
  work: string;
  era: string;
  onView?: boolean;
  tone: [string, string];
}

export const MUSEUM_WORKS: MuseumWork[] = [
  {
    index: "01",
    artist: "Mark Rothko",
    work: "Untitled, 1962",
    era: "1962",
    onView: true,
    tone: ["#d4541f", "#5b101c"],
  },
  {
    index: "02",
    artist: "Agnes Martin",
    work: "The Tree, 1965",
    era: "1965",
    tone: ["#e8dfc8", "#bca87f"],
  },
  {
    index: "03",
    artist: "Yves Klein",
    work: "IKB 79, 1959",
    era: "1959",
    tone: ["#1c2e8a", "#0a1448"],
  },
  {
    index: "04",
    artist: "Hilma af Klint",
    work: "The Ten Largest, 1907",
    era: "1907",
    tone: ["#d4a5a0", "#8a4a4f"],
  },
  {
    index: "05",
    artist: "Lee Ufan",
    work: "From Line, 1978",
    era: "1978",
    tone: ["#cfcfc8", "#404048"],
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
