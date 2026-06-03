# -*- coding: utf-8 -*-
"""museum_new.json(검증 통과 55점)을 lib/data.ts의 MUSEUM_WORKS 배열에 index 51~로 삽입.
정적 export 안전: json.dumps로 각 문자열을 유효한 TS 리터럴로 이스케이프."""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
DATA = os.path.join(REPO, "next-app", "lib", "data.ts")
NEW = os.path.join(HERE, "museum_new.json")

with open(NEW, encoding="utf-8") as f:
    works = json.load(f)

# 기존 마지막 항목(index "50" = renoir-two-sisters)의 tone 라인을 앵커로 사용
ANCHOR = '    tone: ["#c08c7a", "#456b6f"],\n  },\n];'

with open(DATA, encoding="utf-8") as f:
    src = f.read()

assert src.count(ANCHOR) == 1, f"anchor count != 1 ({src.count(ANCHOR)})"

lines = []
for i, w in enumerate(works):
    idx = str(51 + i).zfill(2)
    t0, t1 = w["tone"]
    lines.append("  {")
    lines.append(f'    index: "{idx}",')
    lines.append(f'    artist: {json.dumps(w["artist"], ensure_ascii=False)},')
    lines.append(f'    work: {json.dumps(w["work"], ensure_ascii=False)},')
    lines.append(f'    year: {json.dumps(w["year"], ensure_ascii=False)},')
    lines.append(f'    medium: {json.dumps(w["medium"], ensure_ascii=False)},')
    lines.append(f'    collection: {json.dumps(w["collection"], ensure_ascii=False)},')
    lines.append(f'    mood: {json.dumps(w["mood"], ensure_ascii=False)},')
    lines.append(f'    note: {json.dumps(w["note"], ensure_ascii=False)},')
    lines.append(f'    image: {json.dumps(w["image"], ensure_ascii=False)},')
    lines.append(f'    sourceUrl: {json.dumps(w["sourceUrl"], ensure_ascii=False)},')
    lines.append(f'    license: {json.dumps(w["license"], ensure_ascii=False)},')
    lines.append(f'    tone: [{json.dumps(t0)}, {json.dumps(t1)}],')
    lines.append("  },")

block = "\n".join(lines)
replacement = '    tone: ["#c08c7a", "#456b6f"],\n  },\n' + block + "\n];"
src2 = src.replace(ANCHOR, replacement)

total = 50 + len(works)
# 주석의 "50점" 카운트 갱신
src2 = src2.replace("MUSEUM_WORKS(50점)", f"MUSEUM_WORKS({total}점)")

with open(DATA, "w", encoding="utf-8") as f:
    f.write(src2)

print(f"Inserted {len(works)} works (index 51-{str(50+len(works)).zfill(2)}). Total = {total}.")
