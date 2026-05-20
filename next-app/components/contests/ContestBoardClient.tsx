"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CONTESTS_DATA_URL,
  CONTESTS_SOURCE_REPO_URL,
  CONTESTS_SOURCE_SITE_URL,
  type ContestEntry,
  type ContestsFeed,
} from "@/lib/data";
import { TOKENS as T } from "@/lib/tokens";

const CACHE_KEY = "aimba_contests_feed_v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6;
const FETCH_TIMEOUT_MS = 1000 * 10;

type CategoryFilter = "ALL" | "IMAGE" | "VIDEO";
type SortKey = "deadline" | "recent";

type SectionKey = "starting_today" | "ongoing" | "awaiting_result";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isContestEntry(value: unknown): value is ContestEntry {
  return isRecord(value) && typeof value.title === "string";
}

function normalizeEntries(value: unknown): ContestEntry[] {
  return Array.isArray(value) ? value.filter(isContestEntry) : [];
}

function normalizeFeed(value: unknown): ContestsFeed | null {
  if (!isRecord(value) || !isRecord(value.sections)) return null;
  return {
    generated_at:
      typeof value.generated_at === "string" ? value.generated_at : undefined,
    notice: typeof value.notice === "string" ? value.notice : undefined,
    sections: {
      starting_today: normalizeEntries(value.sections.starting_today),
      ongoing: normalizeEntries(value.sections.ongoing),
      awaiting_result: normalizeEntries(value.sections.awaiting_result),
    },
  };
}

function readCachedFeed(): ContestsFeed | null {
  const raw = window.localStorage.getItem(CACHE_KEY);
  if (!raw) return null;
  const cached = JSON.parse(raw) as { fetched_at?: unknown; data?: unknown };
  if (
    typeof cached.fetched_at !== "number" ||
    Date.now() - cached.fetched_at > CACHE_TTL_MS
  ) {
    window.localStorage.removeItem(CACHE_KEY);
    return null;
  }
  return normalizeFeed(cached.data);
}

function safeExternalUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

const SECTION_META: Record<
  SectionKey,
  { label: string; short: string; tone: string }
> = {
  starting_today: { label: "오늘부터 시작", short: "Starting", tone: T.gold },
  ongoing: { label: "진행 중인 공모전", short: "Ongoing", tone: T.wine },
  awaiting_result: {
    label: "발표 대기 공모전",
    short: "Awaiting Result",
    tone: T.ink3,
  },
};

function classifyCategory(category: string | undefined): CategoryFilter {
  if (!category) return "ALL";
  if (category.includes("영상") || /video/i.test(category)) return "VIDEO";
  if (category.includes("이미지") || /image/i.test(category)) return "IMAGE";
  return "ALL";
}

function categoryLabel(cat: CategoryFilter): string {
  if (cat === "IMAGE") return "이미지";
  if (cat === "VIDEO") return "영상";
  return "전체";
}

function parseISO(date?: string): number | null {
  if (!date) return null;
  const t = Date.parse(date);
  return Number.isNaN(t) ? null : t;
}

function dDayLabel(end?: string): { text: string; tone: string } | null {
  const t = parseISO(end);
  if (t === null) return null;
  const now = Date.now();
  const diff = Math.ceil((t - now) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { text: "마감", tone: T.ink3 };
  if (diff === 0) return { text: "D-DAY", tone: T.wine };
  if (diff <= 7) return { text: `D-${diff}`, tone: T.wine };
  if (diff <= 30) return { text: `D-${diff}`, tone: T.gold };
  return { text: `D-${diff}`, tone: T.ink3 };
}

function formatDateRange(start?: string, end?: string): string {
  const fmt = (s?: string) => {
    const t = parseISO(s);
    if (t === null) return s || "미정";
    const d = new Date(t);
    return `${d.getFullYear().toString().slice(2)}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  };
  return `${fmt(start)} → ${fmt(end)}`;
}

export function ContestBoardClient() {
  const [feed, setFeed] = useState<ContestsFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stale, setStale] = useState(false);
  const [category, setCategory] = useState<CategoryFilter>("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("deadline");

  useEffect(() => {
    let cancelled = false;

    // 1) 캐시 우선 표시
    try {
      const cached = readCachedFeed();
      if (cached) {
        setFeed(cached);
        setStale(true);
      }
    } catch {
      // 캐시 무시
    }

    // 2) 네트워크 갱신
    (async () => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
      try {
        const res = await fetch(CONTESTS_DATA_URL, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = normalizeFeed(await res.json());
        if (!data) throw new Error("Invalid contests feed");
        if (cancelled) return;
        setFeed(data);
        setStale(false);
        setError(null);
        try {
          window.localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ fetched_at: Date.now(), data })
          );
        } catch {
          // 저장 실패 무시
        }
      } catch (err) {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : "fetch failed";
        setError(msg);
      } finally {
        window.clearTimeout(timeout);
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const grouped = useMemo(() => {
    const empty: Record<SectionKey, ContestEntry[]> = {
      starting_today: [],
      ongoing: [],
      awaiting_result: [],
    };
    if (!feed?.sections) return empty;

    const keys: SectionKey[] = ["starting_today", "ongoing", "awaiting_result"];
    for (const key of keys) {
      const list = feed.sections[key] || [];
      const filtered = list.filter((item) => {
        if (category === "ALL") return true;
        return classifyCategory(item.category) === category;
      });

      const sorted = [...filtered].sort((a, b) => {
        if (sortKey === "deadline") {
          const ea = parseISO(a.submission_end) ?? Number.MAX_SAFE_INTEGER;
          const eb = parseISO(b.submission_end) ?? Number.MAX_SAFE_INTEGER;
          return ea - eb;
        }
        const ra = parseISO(a.source_checked_at) ?? 0;
        const rb = parseISO(b.source_checked_at) ?? 0;
        return rb - ra;
      });

      empty[key] = sorted;
    }
    return empty;
  }, [feed, category, sortKey]);

  const totals = useMemo(() => {
    return {
      starting_today: grouped.starting_today.length,
      ongoing: grouped.ongoing.length,
      awaiting_result: grouped.awaiting_result.length,
    };
  }, [grouped]);

  const generatedAtLabel = useMemo(() => {
    const t = parseISO(feed?.generated_at);
    if (t === null) return "";
    const d = new Date(t);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} KST`;
  }, [feed]);

  return (
    <div>
      <ToolbarRow
        category={category}
        setCategory={setCategory}
        sortKey={sortKey}
        setSortKey={setSortKey}
        totals={totals}
        generatedAtLabel={generatedAtLabel}
        loading={loading}
        stale={stale}
        error={error}
      />

      {!feed && loading && <StatusLine label="공모전 데이터 불러오는 중..." />}

      {!feed && !loading && error && (
        <ErrorBlock message={error} />
      )}

      {feed && (
        <>
          <SectionBlock
            sectionKey="ongoing"
            entries={grouped.ongoing}
            sortKey={sortKey}
            category={category}
          />
          <SectionBlock
            sectionKey="starting_today"
            entries={grouped.starting_today}
            sortKey={sortKey}
            category={category}
          />
          <SectionBlock
            sectionKey="awaiting_result"
            entries={grouped.awaiting_result}
            sortKey={sortKey}
            category={category}
          />
        </>
      )}

      <CreditFooter />
    </div>
  );
}

function ToolbarRow({
  category,
  setCategory,
  sortKey,
  setSortKey,
  totals,
  generatedAtLabel,
  loading,
  stale,
  error,
}: {
  category: CategoryFilter;
  setCategory: (c: CategoryFilter) => void;
  sortKey: SortKey;
  setSortKey: (s: SortKey) => void;
  totals: Record<SectionKey, number>;
  generatedAtLabel: string;
  loading: boolean;
  stale: boolean;
  error: string | null;
}) {
  const cats: CategoryFilter[] = ["ALL", "IMAGE", "VIDEO"];
  const sorts: { key: SortKey; label: string }[] = [
    { key: "deadline", label: "마감 임박순" },
    { key: "recent", label: "최신 업데이트순" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: 14,
        padding: "20px 24px",
        background: T.paper2,
        border: `1px solid ${T.rule}`,
        borderRadius: 10,
        marginBottom: 28,
      }}
    >
      <div
        className="brief-topbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          fontFamily: "var(--sans)",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: T.ink3,
          fontWeight: 600,
        }}
      >
        <span style={{ color: T.wine }}>
          AI CONTEST BOARD · 국내 이미지·영상 큐레이션
        </span>
        <span>
          {generatedAtLabel && <>업데이트 {generatedAtLabel}</>}
          {loading && !generatedAtLabel && " · 불러오는 중..."}
          {stale && !error && " · (캐시 표시 중)"}
          {error && !stale && " · 데이터 갱신 실패"}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                border: `1px solid ${c === category ? T.wine : T.rule}`,
                background: c === category ? T.wine : "#fff",
                color: c === category ? T.paper : T.ink2,
                fontFamily: "var(--sans)",
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              {categoryLabel(c)}
            </button>
          ))}
        </div>

        <div
          style={{
            width: 1,
            height: 22,
            background: T.rule,
          }}
        />

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {sorts.map((s) => (
            <button
              key={s.key}
              onClick={() => setSortKey(s.key)}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                border: `1px solid ${s.key === sortKey ? T.ink : T.rule}`,
                background: s.key === sortKey ? T.ink : "#fff",
                color: s.key === sortKey ? T.paper : T.ink2,
                fontFamily: "var(--sans)",
                fontSize: 12.5,
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: T.ink3,
            letterSpacing: "0.12em",
          }}
        >
          <span>진행중 {totals.ongoing}</span>
          <span>발표대기 {totals.awaiting_result}</span>
          {totals.starting_today > 0 && (
            <span>오늘시작 {totals.starting_today}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({
  sectionKey,
  entries,
  sortKey,
  category,
}: {
  sectionKey: SectionKey;
  entries: ContestEntry[];
  sortKey: SortKey;
  category: CategoryFilter;
}) {
  const meta = SECTION_META[sectionKey];

  if (entries.length === 0) {
    if (sectionKey === "starting_today") return null;
    return (
      <section
        className="brief-section-card"
        style={{
          margin: "20px 0",
          padding: "26px 28px",
          background: T.paper2,
          border: `1px solid ${T.rule}`,
          borderRadius: 10,
        }}
      >
        <SectionHead meta={meta} count={0} />
        <p
          style={{
            color: T.ink3,
            fontSize: 13.5,
            lineHeight: 1.7,
            margin: "10px 0 0",
          }}
        >
          {category === "ALL"
            ? "현재 표시할 공모전이 없습니다."
            : `현재 ${categoryLabel(category)} 부문에서 표시할 공모전이 없습니다.`}
        </p>
      </section>
    );
  }

  return (
    <section
      className="brief-section-card"
      style={{
        margin: "20px 0",
        padding: "26px 28px",
        background: "#fff",
        border: `1px solid ${T.rule}`,
        borderRadius: 10,
      }}
    >
      <SectionHead meta={meta} count={entries.length} />
      <div
        className="brief-article-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
          marginTop: 20,
        }}
      >
        {entries.map((entry, index) => (
          <ContestCard
            key={`${entry.title}-${index}`}
            entry={entry}
            index={index}
            highlightDeadline={sortKey === "deadline"}
          />
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  meta,
  count,
}: {
  meta: { label: string; short: string; tone: string };
  count: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 20,
        borderBottom: `1px solid ${T.rule}`,
        paddingBottom: 12,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--serif-display)",
          fontSize: 30,
          fontWeight: 500,
          fontStyle: "italic",
          margin: 0,
          color: T.ink,
        }}
      >
        {meta.label}
      </h3>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: meta.tone,
          fontWeight: 700,
        }}
      >
        {meta.short.toUpperCase()} · {count}건
      </span>
    </div>
  );
}

function ContestCard({
  entry,
  index,
  highlightDeadline,
}: {
  entry: ContestEntry;
  index: number;
  highlightDeadline: boolean;
}) {
  const dday = dDayLabel(entry.submission_end);
  const range = formatDateRange(entry.submission_start, entry.submission_end);

  const safeUrl = safeExternalUrl(entry.url);
  const linkProps = safeUrl
    ? { href: safeUrl, target: "_blank", rel: "noreferrer" as const }
    : { href: "#" };

  return (
    <a
      {...linkProps}
      style={{
        display: "block",
        border: `1px solid ${T.rule}`,
        borderRadius: 8,
        padding: "18px 18px 16px",
        background: T.paper,
        textDecoration: "none",
        color: T.ink,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            color: T.wine,
            letterSpacing: "0.12em",
          }}
        >
          {String(index + 1).padStart(2, "0")} · {entry.category || "AI"} ·{" "}
          {entry.organizer || "주최 미상"}
        </div>
        {dday && highlightDeadline && (
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 4,
              background: dday.tone,
              color: T.paper,
              letterSpacing: "0.08em",
            }}
          >
            {dday.text}
          </span>
        )}
      </div>

      <div
        style={{
          fontFamily: "var(--serif-display)",
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1.3,
          color: T.ink,
          marginBottom: 8,
        }}
      >
        {entry.title}
      </div>

      {entry.summary && (
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: T.ink3,
            margin: "0 0 12px",
          }}
        >
          {entry.summary}
        </p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          marginTop: "auto",
          paddingTop: 10,
          borderTop: `1px dashed ${T.rule}`,
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: T.ink3,
          letterSpacing: "0.06em",
        }}
      >
        <span>접수 {range}</span>
        {dday && !highlightDeadline && (
          <span style={{ color: dday.tone, fontWeight: 700 }}>{dday.text}</span>
        )}
      </div>
    </a>
  );
}

function StatusLine({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "60px 24px",
        textAlign: "center",
        fontFamily: "var(--korean)",
        fontSize: 14,
        color: T.ink3,
      }}
    >
      {label}
    </div>
  );
}

function ErrorBlock({ message }: { message: string }) {
  return (
    <div
      style={{
        padding: "28px",
        background: T.pulseBg,
        border: `1px solid ${T.rule}`,
        borderRadius: 10,
        marginBottom: 24,
      }}
    >
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 11,
          color: T.wine,
          letterSpacing: "0.22em",
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        데이터 일시 점검 중
      </div>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: T.ink2,
          margin: "0 0 14px",
        }}
      >
        공모전 데이터 소스를 불러오지 못했습니다. 잠시 후 다시 시도하시거나, 원본
        보드에서 직접 확인하실 수 있습니다.
      </p>
      <p
        style={{
          fontSize: 12,
          color: T.ink3,
          margin: "0 0 14px",
          fontFamily: "var(--mono)",
        }}
      >
        오류: {message}
      </p>
      <a
        href={CONTESTS_SOURCE_SITE_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: 999,
          background: T.wine,
          color: T.paper,
          fontFamily: "var(--korean)",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        원본 보드에서 보기 →
      </a>
    </div>
  );
}

function CreditFooter() {
  return (
    <div
      style={{
        marginTop: 32,
        padding: "20px 24px",
        background: T.paper2,
        border: `1px solid ${T.rule}`,
        borderRadius: 10,
        fontFamily: "var(--korean)",
        fontSize: 12.5,
        lineHeight: 1.7,
        color: T.ink3,
      }}
    >
      <div
        style={{
          fontFamily: "var(--sans)",
          fontSize: 10.5,
          letterSpacing: "0.22em",
          color: T.wine,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        DATA SOURCE
      </div>
      <p style={{ margin: "0 0 8px", color: T.ink2 }}>
        본 보드의 공모전 데이터는{" "}
        <a
          href={CONTESTS_SOURCE_REPO_URL}
          target="_blank"
          rel="noreferrer"
          style={{ color: T.wine, fontWeight: 700 }}
        >
          junyeo217/ai-contest-board
        </a>
        의 공개 JSON을 실시간으로 인용해 P&amp;L 신문 스타일로 재구성한
        결과입니다.
      </p>
      <p style={{ margin: 0 }}>
        원본 사이트는{" "}
        <a
          href={CONTESTS_SOURCE_SITE_URL}
          target="_blank"
          rel="noreferrer"
          style={{ color: T.wine, fontWeight: 700 }}
        >
          {CONTESTS_SOURCE_SITE_URL}
        </a>
        에서 확인할 수 있으며, 데이터 정확성·갱신 책임은 원본 운영자에게 있습니다.
        AIMBA 측은 큐레이션·렌더링만 담당합니다.
      </p>
    </div>
  );
}
