"use client";

import { useEffect, useState } from "react";

// 철학 기반 힐링 노트 풀(30). 페이지 로드마다 랜덤으로 한 문장이 노출된다.
// 모두 출처(철학자/사상가)가 명확한 잠언만 수록 — 가상 인용 금지 원칙 준수.
const HEALING_NOTES: { text: string; author: string }[] = [
  { text: "상처를 통해 빛이 들어온다.", author: "루미 (13C, Persia)" },
  { text: "우리를 죽이지 못하는 것은 우리를 더 강하게 만든다.", author: "프리드리히 니체" },
  { text: "네 삶의 행복은 네 생각의 질에 달려 있다.", author: "마르쿠스 아우렐리우스" },
  { text: "우리는 현실보다 상상 속에서 더 자주 고통받는다.", author: "세네카" },
  { text: "너를 흔드는 것은 일어난 일이 아니라, 그 일에 대한 너의 생각이다.", author: "에픽테토스" },
  { text: "성찰하지 않는 삶은 살 가치가 없다.", author: "소크라테스" },
  { text: "천 리 길도 발밑의 한 걸음에서 시작된다.", author: "노자" },
  { text: "남을 아는 자는 지혜롭고, 자신을 아는 자는 밝다.", author: "노자" },
  { text: "잘못을 고치지 않는 것, 그것이 진짜 잘못이다.", author: "공자" },
  { text: "희망은 깨어 있는 자가 꾸는 꿈이다.", author: "아리스토텔레스" },
  { text: "변하지 않는 것은 오직 변한다는 사실뿐이다.", author: "헤라클레이토스" },
  { text: "삶은 뒤돌아볼 때 이해되지만, 앞을 향해 살아가야 한다.", author: "쇠렌 키르케고르" },
  { text: "한겨울에도, 내 안에는 꺾이지 않는 여름이 있었다.", author: "알베르 카뮈" },
  { text: "자극과 반응 사이에는 공간이 있고, 그 공간에 우리의 자유가 있다.", author: "빅터 프랭클" },
  { text: "인간은 자연에서 가장 약한 갈대지만, 생각하는 갈대다.", author: "블레즈 파스칼" },
  { text: "모든 고귀한 것은 드물고도 어렵다.", author: "바뤼흐 스피노자" },
  { text: "새는 알을 깨고 나온다. 알은 곧 세계다.", author: "헤르만 헤세" },
  { text: "서두르지 말라, 그러나 멈추지도 말라.", author: "요한 볼프강 폰 괴테" },
  { text: "마음속 풀리지 않는 모든 것을 향해 인내심을 가지라.", author: "라이너 마리아 릴케" },
  { text: "삶이 있는 한, 희망은 있다.", author: "키케로" },
  { text: "우리 뒤에 있는 것도 앞에 있는 것도, 우리 안에 있는 것에 비하면 사소하다.", author: "랄프 왈도 에머슨" },
  { text: "세상에서 보고 싶은 변화가 있다면, 네가 먼저 그 변화가 되어라.", author: "마하트마 간디" },
  { text: "길을 가로막는 장애물이, 바로 그 길이 된다.", author: "마르쿠스 아우렐리우스" },
  { text: "가장 좋은 것은 물과 같다. 물은 다투지 않고 낮은 곳으로 흐른다.", author: "노자 (上善若水)" },
  { text: "우물 안 개구리에게는 바다를 말할 수 없다.", author: "장자" },
  { text: "아는 것을 안다 하고 모르는 것을 모른다 하는 것, 그것이 참된 앎이다.", author: "공자" },
  { text: "운명은 원하는 자를 이끌고, 거부하는 자를 끌고 간다.", author: "세네카" },
  { text: "통제할 수 있는 것과 없는 것을 구별하라. 거기서 평온이 시작된다.", author: "에픽테토스" },
  { text: "춤추는 별을 낳으려면, 내면에 혼돈을 품고 있어야 한다.", author: "프리드리히 니체" },
  { text: "부드럽고 약한 것이 단단하고 강한 것을 이긴다.", author: "노자" },
];

export function HomeHealingNote() {
  // 정적 export 환경: 서버/첫 렌더는 0번으로 고정해 하이드레이션 불일치를 피하고,
  // 마운트 직후 useEffect 에서 랜덤으로 교체한다(=들어올 때마다 바뀜).
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    setIdx(Math.floor(Math.random() * HEALING_NOTES.length));
  }, []);

  const note = HEALING_NOTES[idx];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2px 0 0",
      }}
    >
      <div
        style={{
          position: "relative",
          transform: "rotate(-1.4deg)",
          background: "linear-gradient(180deg, #fff8e7, #f3e9ce)",
          padding: "24px 28px 22px",
          width: 290,
          boxShadow:
            "0 12px 22px -14px rgba(60,40,10,0.35), 0 2px 0 rgba(0,0,0,0.04)",
          borderRadius: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%) rotate(2deg)",
            width: 70,
            height: 18,
            background: "rgba(184,150,80,0.55)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        />
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.26em",
            color: "#8a6b3a",
            fontWeight: 700,
            marginBottom: 11,
            textAlign: "center",
          }}
        >
          — HEALING NOTE —
        </div>
        <div
          style={{
            fontFamily: '"Newsreader", "Noto Serif KR", serif',
            fontStyle: "italic",
            fontSize: 18,
            fontWeight: 400,
            color: "#3d2a16",
            letterSpacing: "-0.005em",
            lineHeight: 1.4,
            textAlign: "center",
            minHeight: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &ldquo;{note.text}&rdquo;
        </div>
        <div
          style={{
            fontFamily: "var(--korean)",
            fontSize: 11,
            color: "#6b5236",
            marginTop: 14,
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          — {note.author}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #d96666, #8b1f1f 70%)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
