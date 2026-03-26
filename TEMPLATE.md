# AIMBA 미래혁신국 주간 브리핑 — 크론 가이드

## 발간 규격
- 매주 토요일 08:00 KST
- HTML 신문 스타일 (issues/vol_YYYYMMDD.html)
- GitHub Pages 자동 배포

## 섹션 구성 (6+1 섹터 + 정부과제 + 서강대)

### 🤖 AI·LLM 최신 동향 (Full Width, 5건 = 2표시+3숨김)
- 글로벌 AI 모델/에이전트 발표, 벤치마크 돌파, 주요 인수합병
- LLM 성능 비교, AI 에이전트 트렌드

### 💼 비즈니스 혁신 (2열 좌측, 5건 = 2표시+3숨김)
- AI 기반 비즈니스 모델, 바이브코딩, 1인 기업, 생산성 혁신
- 금융·제조·서비스 AI 도입 사례

### 🔗 블록체인·RWA (2열 우측, 5건 = 2표시+3숨김)
- 토큰화, RWA, STO, DeFi, 크립토 규제
- KAIST BDA 연관 동향

### 🏠 부동산·핀테크 (2열 좌측, 5건 = 2표시+3숨김)
- 부동산 시장 동향, 프롭테크, 대체투자
- 핀테크 투자/규제

### 🚀 창업·VC·정부지원 (2열 우측, 5건 = 2표시+3숨김)
- VC 투자 트렌드, 액셀러레이터, 유니콘
- 창업 생태계 동향

### 🎓 MBA·커리어 (Full Width, 5건 = 2표시+3숨김)
- AI 시대 커리어, MBA 트렌드, 교육 정책

### ⚠️ "더보기" 토글 패턴 (모든 섹터 동일)
- 처음 2건은 바로 표시
- 나머지 3건은 `<div class="more-items" id="more-{id}">` 안에 숨김
- `<button class="more-toggle" onclick="toggleMore('{id}')">더보기 ▼</button>` 배치
- id 규칙: ai, biz, rwa, re, vc, mba

### 💡 이번 주 한줄 인사이트
- 위 뉴스 중 가장 임팩트 있는 것을 AIMBA 원우 관점에서 한 문단 해설
- 마지막 줄은 반드시 볼드로 "AIMBA 원우분들..." 형식

### 🏛️ 정부과제·창업지원 공고 (하단 섹션)
- 2열: 좌측 "창업지원 사업공고" / 우측 "정부 R&D·산학협력"
- 각 3건 이내, 신규는 NEW 배지
- 키워드: AI, 핀테크, 블록체인, MBA창업, 산학협력, 대학연계
- 하단에 "AIMBA 원우 추천 공고" 박스

### 🏫 서강대·AIMBA 소식 (하단 섹션)
- 서강대 공지, AIMBA 관련 특강/세미나, AI 관련 캠퍼스 이벤트
- 2~4건, 신규는 NEW 배지
- CSS: gov-box와 동일한 스타일 (배경 #E4E8ED, 테두리 #C0C8D4, 라벨 색상 #1a5276)

## 서강대 크롤링 소스 (browser 도구로 접근)

### 필수 크롤링 URL (매주 체크)
1. **경영대학 공지사항** (AIMBA 직접 관련)
   - `https://sbs.sogang.ac.kr/bbs/sbs/649/artclList.do`
   - 키워드 필터: AIMBA, AI, MBA, 특강, 세미나, 강연, 멘토링

2. **인공지능학과 공지**
   - `https://ai.sogang.ac.kr/front/cmsboardlist.do?siteId=ai&bbsConfigFK=6330`
   - AI 관련 특강, 세미나, 워크숍, 채용 공고

3. **기술경영전문대학원(MOT)**
   - `https://sgmot.sogang.ac.kr/gopage/sogangmot/goboard2.jsp?bbsConfigFK=22&siteId=sogangmot`
   - AI·기술경영 관련 강연, 포럼

4. **SW중심대학사업단**
   - `https://scc.sogang.ac.kr/front/cmsboardlist.do?siteId=sweducenter&bbsConfigFK=7250`
   - SW/AI 특강, 코딩 부트캠프, 해커톤

5. **평생교육원(FLEC)**
   - `https://flec.sogang.ac.kr`
   - AI 최고전문가과정, 디지털 전환 과정

### Google 검색 보조 (최근 1주)
- `site:sogang.ac.kr AI OR 인공지능 OR 세미나 OR 특강 OR 강연` (최근 1주 필터)
- `site:sogang.ac.kr AIMBA OR "AI MBA"` (최근 1주 필터)

### 크롤링 방법
1. browser 도구로 각 URL 접속
2. snapshot으로 게시판 내용 확인
3. 최근 1주 내 신규 게시글만 추출
4. 제목 + 날짜 + 링크 수집

## 뉴스 수집 방법
1. browser 도구로 Google 검색 (각 섹터별 키워드)
2. 실제 존재하는 기사만 포함 (가상 URL 절대 금지)
3. 기사 원문 링크 필수 포함
4. 한 주간(최근 7일) 뉴스 위주

## HTML 생성
1. issues/vol_20260328.html를 템플릿으로 복사
2. 날짜, Vol 번호, 기사 내용 교체
3. 서강대·AIMBA 소식 섹션을 정부과제 섹션 아래에 추가 (아래 HTML 참조)
4. issues/manifest.json 업데이트
5. index.html의 const issues = [...] 업데이트

### 서강대 섹션 HTML 블록
```html
<hr class="section-divider">
<div class="section-title" style="color:#1a5276;"><span class="emoji">🏫</span> 서강대 · AIMBA 소식</div>
<p style="font-size:12px; color:var(--text-light); margin-bottom:16px; font-family:'Noto Sans KR',sans-serif;">
  📅 서강대 캠퍼스 공지 · 특강 · 세미나 모니터링
</p>

<div class="gov-item" style="border-left-color:#1a5276;">
  <div class="gov-title"><span class="new-badge" style="background:#1a5276;">NEW</span> <a href="URL" target="_blank">제목</a></div>
  <div class="gov-desc">설명</div>
</div>
<!-- 반복 -->

<div class="gov-box" style="background:#E4E8ED; border-color:#C0C8D4;">
  <div class="label" style="color:#1a5276;">🎓 AIMBA 원우 관심 포인트</div>
  <p style="font-size:13px; color:#333; font-family:'Noto Sans KR',sans-serif; line-height:1.7;">
    코멘트 내용
  </p>
</div>
```

## 배포
```bash
cd ~/Projects/SOGANG-AIMBA7th
git add -A
git commit -m "📰 Vol.{VOL} — {DATE} 주간 브리핑"
git push origin main
```

## 텔레그램 알림
📰 AIMBA 미래혁신국 Vol.{VOL} 발간!
{DATE} | AI {N}건 · 창업 {N}건 · 정부과제 {N}건 · 서강대 {N}건
🔗 https://pointnline.github.io/SOGANG-AIMBA7th/issues/vol_YYYYMMDD.html

## 옵시디언 저장
/Users/jaykkobi/jaykko/JAYKKo/130-Education(교육)/131-서강대AIMBA/YYMMDD_AIMBA주간브리핑.md
