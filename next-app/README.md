# SOGANG AIMBA 7th · Weekly Brief

서강대 AIMBA 7기 미래혁신국 — 매주 발행되는 큐레이션 브리핑.

Next.js 14 (App Router) + TypeScript + Tailwind 기반.
배포 타깃은 Vercel.

---

## 페이지

| Path           | 설명                                                          |
| -------------- | ------------------------------------------------------------- |
| `/`            | Main Home — Pulse · Healing · Archive timeline · Museum 입구 |
| `/brief`       | Weekly Brief — 매 호의 본문 (Vol. 23, Lead + Archive table)  |
| `/museum`      | S.A Museum — The Quiet Room (흑백 미니멀 큐레이션)           |
| `/interview`   | Interview Room — 격주 발행, 7기 원우 인터뷰                  |

---

## 로컬 개발

```bash
cd next-app
npm install   # 또는 pnpm i / yarn
npm run dev
```

브라우저에서 <http://localhost:3000> 접속.

## 빌드

```bash
npm run build
npm run start
```

---

## Vercel 배포

가장 빠른 길:

1. 이 폴더(`next-app/`)를 GitHub 레포에 push
2. <https://vercel.com/new> 에서 해당 레포 import
3. **Root Directory**를 `next-app` (또는 push한 위치)로 지정
4. Framework Preset: `Next.js` (자동 감지) — 그대로 Deploy

환경 변수는 현재 단계에서는 필요 없음. CMS·DB 연결 시 `.env.local`에 추가.

또는 Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## 폴더 구조

```
next-app/
├─ app/
│  ├─ layout.tsx              ← 폰트 + globals
│  ├─ globals.css             ← 디자인 토큰 + Tailwind
│  ├─ page.tsx                ← / (Home)
│  ├─ brief/page.tsx          ← /brief
│  ├─ museum/page.tsx         ← /museum
│  └─ interview/page.tsx      ← /interview
├─ components/
│  ├─ SiteFooter.tsx
│  └─ home/
│     ├─ HomeHeader.tsx
│     ├─ HomeSidebar.tsx
│     ├─ HomePulse.tsx
│     ├─ HomeHealingNote.tsx
│     ├─ HomeArchiveTimeline.tsx
│     ├─ HomeMuseumTeaser.tsx
│     ├─ HomeInterviewRoom.tsx
│     └─ HomeCalendarBooks.tsx
├─ lib/
│  ├─ tokens.ts               ← 색·폰트 토큰 (TS)
│  └─ data.ts                 ← 모든 페이지의 임시 데이터
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
└─ package.json
```

---

## 디자인 토큰

CSS 변수: `app/globals.css` `:root`
TS 객체: `lib/tokens.ts` (컴포넌트에서는 보통 이쪽을 import)

핵심 컬러:

| 토큰              | 값          | 용도                           |
| ----------------- | ----------- | ------------------------------ |
| `wine` / `wineDeep` | `#8B0029` / `#5e001b` | 서강 시그니처. 헤더, 강조, 핫스팟 |
| `gold` / `goldDeep` | `#b89967` / `#a07f47` | 메타 라벨, 섹션 코드           |
| `paper`           | `#faf6ef`   | 기본 배경 (크림색 종이)        |
| `paper2/3`        | `#f3ede2` / `#ebe3d4` | 카드, 섹션 배경                |
| `ink`             | `#1a1714`   | 본문 텍스트                    |
| `ink2/3`          | `#3d342d` / `#6b5e54` | 보조 텍스트                    |
| `rule`            | `#e6dfd5`   | 1px 구분선                     |

폰트:

- Newsreader (Serif Display) — 헤드라인, italic 강조
- Inter Tight (Sans) — 라벨, 메타데이터, smallcaps
- JetBrains Mono — 카탈로그 코드, 숫자
- Noto Serif KR — 한글 본문 / 시리프
- Pretendard — 한글 산세리프 (UI)

---

## 데이터 → CMS 연결

지금은 `lib/data.ts`에 정적 import. 다음 단계:

1. **Notion DB 연결** — 가장 빠름. `@notionhq/client` + ISR.
   ```ts
   // app/page.tsx
   export const revalidate = 60 * 60; // 1시간
   ```
2. **Sanity / Contentful / Strapi** — Schema 분리, 에디터 권한 관리 가능
3. **Markdown + GitHub** — `content/issues/vol-23.md` 형태로 PR 기반 발행

`lib/data.ts`의 export 시그니처를 그대로 유지하면 컴포넌트는 건드릴 필요 없음.

---

## 다음에 해야 할 일

- [ ] 모바일 레이아웃 (현재 데스크톱 1200~1280px 가정)
- [ ] 각 호 상세 페이지 `/brief/[vol]` 동적 라우팅
- [ ] 인터뷰 상세 `/interview/[slug]`
- [ ] 미술관 작품 상세 `/museum/[no]`
- [ ] CMS 연결
- [ ] 검색
- [ ] 구독 폼 (이메일)
- [ ] OG 이미지 (`opengraph-image.tsx`)

---

## 라이선스 / 운영

운영: 서강대 AI MBA 7기 미래혁신국.
모든 큐레이션 콘텐츠는 교육 목적의 요약이며, 출처는 호 단위로 인용.
