# SOGANG AIMBA 7th Homepage Project Kickoff Audit

Date: 2026-05-11
Mode: Deal Ops lead, cross-team review
Scope: homepage management, development workflow, security, DB integration, design efficiency

## 1. Current Diagnosis

The site is a static GitHub Pages site generated from a Next.js 14 app.

- Source app: `next-app/`
- Published static files: `index.html`, `brief/`, `museum/`, `interview/`, `issues/`, `_next/`
- Deployment target: GitHub Pages at `https://pointnline.github.io/SOGANG-AIMBA7th/`
- Local preview checked: `http://127.0.0.1:8771/SOGANG-AIMBA7th/`
- Data layer: Supabase is documented and partially used in legacy issue pages.

Build status:

- `npm.cmd run build` succeeds.
- `npm run lint` is not usable yet because ESLint is not configured and opens an interactive setup prompt.
- Google Fonts optimization failed in the local build because the environment could not download the stylesheet.

## 2. Key Findings

### A. Operating Model

The repo currently mixes two roles:

1. Next app as the design/source system.
2. Static HTML files as the deployed GitHub Pages output.

This works, but the source of truth must be explicit. The biggest operational risk is editing generated HTML directly and later overwriting it through `npm run build:pages`.

Priority:

- Define `next-app/` as the source of truth for shared layout and current issue.
- Define `issues/vol_YYYYMMDD.html` legacy files as archives unless migrated into structured data.
- Add a publishing checklist so each weekly issue follows one repeatable path.

### B. Development Workflow

Strengths:

- Static export is simple and GitHub Pages friendly.
- `basePath` and `assetPrefix` are already configured for `/SOGANG-AIMBA7th`.
- Build is reproducible with `npm.cmd run build`.

Risks:

- ESLint is not configured, so `npm run lint` cannot act as a quality gate.
- `_next/` build assets are committed, causing noisy Git diffs whenever a build hash changes.
- `build-pages.ps1` deletes and recopies generated folders. This is acceptable, but it should be treated as the only publish path.

### C. Security

Observed:

- Supabase anon key is embedded in public HTML. This is normal for browser-side Supabase, but only safe if RLS is strict.
- `participation_submissions` is insert-only and raw submissions are not publicly selectable. This is the right baseline.
- `pulse_votes` allows public insert with option allowlist, but no server-side rate limit or uniqueness rule.
- `increment_weekly_issue_stat` is exposed to anon users. It allows only selected fields, but can still be called repeatedly.
- External scripts and fonts are loaded from CDNs and Google Fonts.

Immediate hardening:

- Add database-side spam controls: per-client or per-time-window vote limits where possible.
- Add a simple moderation workflow for submissions.
- Add Content Security Policy guidance for GitHub Pages.
- Avoid collecting unnecessary personal data.

### D. DB and Data Integration

The current design says Supabase should power:

- issue views, likes, checks
- AIMBA Pulse votes
- participation submissions
- Future Report rollups

Reality:

- `issues/vol_20260428.html` contains a Supabase participation form.
- `issues/future-report.html` reads Supabase data.
- The current Next-generated `issues/vol_20260504.html` uses mailto links instead of the Supabase form.
- Home Pulse currently shows static vote counts from `next-app/lib/data.ts`.

Conclusion:

The DB layer is conceptually right but not consistently connected to the latest Next-generated pages.

### E. Design Efficiency

Strengths:

- Visual identity is distinctive: Sogang wine, editorial serif, archive/museum/interview modules.
- Mobile responsive rules exist in `globals.css`.
- Content is centralized in `next-app/lib/data.ts`.

Risks:

- Heavy inline styles make future design changes expensive.
- Components use repeated spacing, typography, cards, and button styles without reusable primitives.
- Home Pulse is visually present but not functionally live.
- External fonts are a reliability dependency.
- Museum assets are locally stored, which is good for speed, but asset licensing and attribution need a clear record.

## 3. Reverse Questions

These questions define the real system before implementation.

### Business and Audience

1. Is this site primarily a weekly newsletter archive, an AIMBA community portal, or a data-collecting engagement platform?
2. Who is the main user: AIMBA 7th classmates, prospective AIMBA students, professors, or external partners?
3. What is the one action we want users to take on each visit: read, vote, submit, share, or attend events?

### Operations

4. Who publishes each weekly issue, and how many minutes should publishing take?
5. Should new issues be written directly in `next-app/lib/data.ts`, Markdown, Notion, Google Sheet, or Supabase?
6. Should old issue pages remain hand-authored HTML, or should they be migrated into one structured issue template?

### Data and DB

7. Do we need anonymous voting only, or member-level voting?
8. Is Supabase allowed to store names, sectors, and links, or should all submissions be anonymous by default?
9. Who reviews raw submissions before they become public content?
10. Should Future Report be fully automatic, editor-approved, or hybrid?

### Security

11. Is abuse risk low enough for public anonymous forms, or do we need captcha/rate limiting?
12. Should the Supabase project be production-grade with backups and alerting, or lightweight experimental infrastructure?
13. Are external CDN scripts acceptable, or should dependencies be bundled locally?

### Design

14. Should the site feel more like a premium editorial magazine, an operational dashboard, or a school community portal?
15. Which sections are essential for the first viewport: latest issue, participate, museum, interview, or archive?
16. Is S.A Museum a core feature or a brand-building side experience?

## 4. Recommended Execution Plan

### Phase 0: Freeze The Source Of Truth

Goal: prevent accidental overwrites and noisy rebuilds.

Actions:

- Treat `next-app/` as the source of truth.
- Treat root static files as generated output.
- Document one publishing command: `cd next-app && npm.cmd run build:pages`.
- Decide whether generated `_next/` files stay committed for GitHub Pages.

### Phase 1: Stabilize Development Quality

Goal: make every change verifiable.

Actions:

- Configure ESLint so `npm run lint` is non-interactive.
- Add `typecheck` script.
- Add a `check` script that runs build, lint, and typecheck.
- Add a short publish checklist to README or `PUBLISHING.md`.

Suggested scripts:

```json
{
  "typecheck": "tsc --noEmit",
  "check": "npm run typecheck && npm run lint && npm run build"
}
```

### Phase 2: Make Supabase Integration Consistent

Goal: connect the current site, not only older pages.

Actions:

- Move Supabase URL/key into one browser config module.
- Add a Next component or small client script for participation submissions.
- Decide whether Home Pulse should read live vote counts.
- Add `vol-5` to `weekly_issue_stats` seed data.
- Add DB constraints or RPCs to reduce duplicate voting and stat spam.

### Phase 3: Content Management Upgrade

Goal: publish weekly issues without editing large TS/HTML blocks.

Options:

- Simple: keep `next-app/lib/data.ts` but split into issue, museum, interview, and event files.
- Better: use Markdown/MDX per issue and generate pages.
- Best for operations: use Supabase or Notion/Google Sheet as a lightweight CMS, then generate static pages.

Recommended start:

- Split `next-app/lib/data.ts` into domain files first.
- Do not introduce a CMS until the weekly publishing flow is stable.

### Phase 4: Security And Governance

Goal: make public forms safe enough for ongoing use.

Actions:

- Add moderation states to `participation_submissions`.
- Add length and URL validation.
- Add abuse monitoring query in Supabase.
- Add a privacy notice near submission forms.
- Add a dependency/version review cadence.

### Phase 5: Design System Efficiency

Goal: reduce duplicated inline styles and make design changes cheap.

Actions:

- Create reusable components: `SectionHeader`, `Panel`, `EditorialCard`, `ButtonLink`, `MetricTile`.
- Move repeated layout styles into CSS classes.
- Keep tokens in `tokens.ts` and CSS variables aligned.
- Localize or self-host critical fonts if external font reliability matters.

## 5. First Implementation Batch

Recommended first batch:

1. Add ESLint config and `typecheck/check` scripts.
2. Add `PUBLISHING.md`.
3. Add Supabase config module and document public key/RLS model.
4. Update `SUPABASE_SETUP.sql` for `vol-5` and safer vote/stat controls.
5. Decide whether to wire current `vol_20260504.html` participation to Supabase or keep it as mailto.

## 6. Deal Ops Decision Memo

Current project is already viable as a static editorial site.

The main decision is whether it should become a real participation/data product. If yes, the next investment should go into DB consistency, moderation, and publishing workflow before more visual expansion.

Recommendation:

Start with operational hardening, then wire live data into the current Next-generated pages. Avoid a large CMS migration until the weekly publishing loop is stable.
