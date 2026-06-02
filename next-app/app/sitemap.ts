import type { MetadataRoute } from "next";
import { BRIEF_ISSUES } from "@/lib/data";

// 정적 export 호환 sitemap. 빌드 시 out/sitemap.xml 로 생성된다.
// (build-pages.ps1 이 out/sitemap.xml 을 repo 루트로 복사해 GitHub Pages 에 서빙)
export const dynamic = "force-static";

const BASE = "https://pointnline.github.io/SOGANG-AIMBA7th";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/brief/", priority: 0.9, freq: "weekly" },
    { path: "/archive/", priority: 0.8, freq: "weekly" },
    { path: "/museum/", priority: 0.6, freq: "monthly" },
    { path: "/contests/", priority: 0.6, freq: "weekly" },
    { path: "/interview/", priority: 0.5, freq: "monthly" },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p.path}`,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const issues: MetadataRoute.Sitemap = BRIEF_ISSUES.map((i) => ({
    url: `${BASE}${i.path}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...issues];
}
