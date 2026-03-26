# AIMBA 미래혁신국 주간 브리핑 — 크론 가이드

## 발간 규격
- 매주 토요일 08:00 KST
- HTML 신문 스타일 (issues/vol_YYYYMMDD.html)
- GitHub Pages 자동 배포

## 섹션 구성 (6+1 섹터 + 정부과제)

### 🤖 AI·LLM 최신 동향 (Full Width, 3건)
- 글로벌 AI 모델/에이전트 발표, 벤치마크 돌파, 주요 인수합병
- LLM 성능 비교, AI 에이전트 트렌드

### 💼 비즈니스 혁신 (2열 좌측, 2건)
- AI 기반 비즈니스 모델, 바이브코딩, 1인 기업, 생산성 혁신
- 금융·제조·서비스 AI 도입 사례

### 🔗 블록체인·RWA (2열 우측, 2건)
- 토큰화, RWA, STO, DeFi, 크립토 규제
- KAIST BDA 연관 동향

### 🏠 부동산·핀테크 (2열 좌측, 2건)
- 부동산 시장 동향, 프롭테크, 대체투자
- 핀테크 투자/규제

### 🚀 창업·VC·정부지원 (2열 우측, 2건)
- VC 투자 트렌드, 액셀러레이터, 유니콘
- 창업 생태계 동향

### 🎓 MBA·커리어 (Full Width, 1건)
- AI 시대 커리어, MBA 트렌드, 교육 정책

### 💡 이번 주 한줄 인사이트
- 위 뉴스 중 가장 임팩트 있는 것을 AIMBA 원우 관점에서 한 문단 해설
- 마지막 줄은 반드시 볼드로 "AIMBA 원우분들..." 형식

### 🏛️ 정부과제·창업지원 공고 (하단)
- 2열: 좌측 "창업지원 사업공고" / 우측 "정부 R&D·산학협력"
- 각 3건 이내, 신규는 NEW 배지
- 키워드: AI, 핀테크, 블록체인, MBA창업, 산학협력, 대학연계
- 하단에 "AIMBA 원우 추천 공고" 박스

## 뉴스 수집 방법
1. browser 도구로 Google 검색 (각 섹터별 키워드)
2. 실제 존재하는 기사만 포함 (가상 URL 절대 금지)
3. 기사 원문 링크 필수 포함
4. 한 주간(최근 7일) 뉴스 위주

## HTML 생성
1. issues/vol_20260328.html를 템플릿으로 복사
2. 날짜, Vol 번호, 기사 내용 교체
3. issues/manifest.json 업데이트
4. index.html의 const issues = [...] 업데이트

## 배포
```bash
cd ~/Projects/SOGANG-AIMBA7th
git add -A
git commit -m "📰 Vol.{VOL} — {DATE} 주간 브리핑"
git push origin main
```

## 텔레그램 알림
📰 AIMBA 미래혁신국 Vol.{VOL} 발간!
{DATE} | AI {N}건 · 창업 {N}건 · 정부과제 {N}건
🔗 https://pointnline.github.io/SOGANG-AIMBA7th/issues/vol_YYYYMMDD.html

## 옵시디언 저장
/Users/jaykkobi/jaykko/JAYKKo/130-Education(교육)/131-서강대AIMBA/YYMMDD_AIMBA주간브리핑.md
