// RSS 피드 생성 — issues/manifest.json(순수 JSON) 을 읽어 feed.xml 을 repo 루트에 출력.
// 무의존성(node 내장 모듈만). build-pages.ps1 에서 호출한다.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const SITE = "https://pointnline.github.io/SOGANG-AIMBA7th";

const esc = (s) =>
  String(s ?? "").replace(
    /[<>&'"]/g,
    (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]
  );

const manifest = JSON.parse(
  readFileSync(join(repoRoot, "issues", "manifest.json"), "utf8")
);

const items = manifest
  .map((i) => {
    const link = `${SITE}/${i.path}`;
    const cats = (i.tags || []).map((t) => `      <category>${esc(t)}</category>`).join("\n");
    return `    <item>
      <title>${esc(`Vol.${i.vol} · ${i.date}`)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(i.headline)}</description>
${cats}
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>SOGANG AIMBA 7th · Weekly Brief</title>
    <link>${SITE}/</link>
    <description>서강대 AIMBA 7기 원우를 위한 AI · 비즈니스 · 창업 위클리 브리프</description>
    <language>ko</language>
${items}
  </channel>
</rss>
`;

writeFileSync(join(repoRoot, "feed.xml"), xml, "utf8");
console.log(`feed.xml generated: ${manifest.length} items`);
