# SOGANG AIMBA 7th Weekly Brief

> 서강대 AI MBA 7기 미래혁신국이 운영하는 위클리 큐레이션 브리핑.
> AI · Business · Startup · MBA Insight를 경영자 관점에서 해석합니다.

🌐 **Live**: https://pointnline.github.io/SOGANG-AIMBA7th/

## 발간 정보

- **주기**: 매주 토요일 08:00 KST
- **포맷**: HTML 신문 스타일 (`issues/vol_YYYYMMDD.html`)
- **자동 배포**: GitHub Pages (push 시 자동 갱신)

## 사이트 구조

```
/
├── index.html              # 아카이브 + AIMBA Pulse 대시보드 + 투표
├── brief/index.html        # Next 디자인 기반 Weekly Brief 고정 틀
├── museum/index.html       # Next 디자인 기반 S.A Museum 고정 틀
├── interview/index.html    # Next 디자인 기반 Interview Room
├── _next/                  # Next static export assets
├── issues/
│   ├── vol_YYYYMMDD.html   # 주간 브리프 (회차별)
│   ├── future-report.html  # 월간 Future Report (Supabase 집계)
│   ├── museum.html         # Eye Candy Museum
│   ├── museum-monthly.html # 월간 전시 추천
│   └── manifest.json       # 발간 호 메타데이터
├── assets/sogang/          # 로고·favicon·OG 이미지
├── DATA_STACK.md           # 데이터 인프라(Supabase) 개요
├── SUPABASE_SETUP.sql      # Supabase 스키마/RLS/RPC
├── TEMPLATE.md             # 발간 운영 가이드
├── next-app/               # Main Home · S.A Museum · Weekly Brief 디자인 원본
└── scripts/                # Next export 결과를 GitHub Pages 구조로 복사
```

## 디자인 업데이트 절차

Main Home, S.A Museum, Weekly Brief의 고정 틀은 `next-app/`에서 수정합니다.
수정 후 아래 명령을 실행하면 GitHub Pages용 파일이 갱신됩니다.

```bash
cd next-app
npm run build:pages
```

이 명령은 다음 파일을 덮어씁니다.

- `index.html`
- `brief/index.html`
- `museum/index.html`
- `interview/index.html`
- `issues/vol_20260504.html`
- `issues/museum.html`
- `_next/`

## 섹터 구성

각 호는 6+1+1 섹터로 구성:

- 🤖 AI·LLM
- 💼 비즈니스 혁신
- 🔗 블록체인·RWA
- 🏠 부동산·핀테크
- 🚀 창업·VC·정부지원
- 🎓 MBA·커리어
- 💡 이번 주 한줄 인사이트
- 🏛️ 정부과제·창업지원 공고 / 🏫 서강대·AIMBA 소식

## 데이터 인프라

정적 사이트이지만 Supabase로 인터랙션을 수집합니다.

- `weekly_issue_stats` — 호별 조회·좋아요·체크 누적
- `pulse_votes` / `pulse_vote_counts` — AIMBA Pulse 투표
- `participation_submissions` — 원우 제보·의견·팁

자세한 내용은 [`DATA_STACK.md`](./DATA_STACK.md) 참고.

## 참여하기

- **제보·의견**: 사이트 사이드바의 "🤝 참여하기" 또는 각 호 하단의 참여 폼
- **주제 투표**: 메인 페이지의 AIMBA Pulse 패널
- **토론**: GitHub Issues (계획)

## 라이선스 및 인용 원칙

- 본 사이트의 큐레이션·해설 텍스트는 교육 목적의 요약이며, 모든 인용 기사는 원 출처를 명시합니다.
- 외부 작품·이미지는 가능한 경우 Public Domain / Wikimedia Commons 자료를 사용하며, 저작권 보호 중인 작품은 `museum-monthly.html`의 라이선스 표기를 참고하세요.

## 운영

서강대 AI MBA 7기 · 미래혁신국 큐레이션
