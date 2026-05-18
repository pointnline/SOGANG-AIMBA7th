# Publishing Guide

This project is a weekly brief archive first.

The public site is a static GitHub Pages archive. `next-app/` is the source of
truth for the current homepage, current brief template, museum, and interview
pages. Root-level HTML files are generated output.

## Source Of Truth

- Edit shared design and current issue content in `next-app/`.
- Keep historical issue files in `issues/vol_YYYYMMDD.html`.
- Do not hand-edit generated files unless the change is intentionally archival.

Generated files:

- `index.html`
- `brief/index.html`
- `museum/index.html`
- `interview/index.html`
- `issues/vol_20260504.html`
- `issues/museum.html`
- `_next/`

## Weekly Publishing Flow

1. Update current issue content in `next-app/lib/data.ts`.
2. Update issue metadata in `issues/manifest.json`.
3. Run quality checks:

   ```powershell
   cd next-app
   npm.cmd run check
   ```

4. Export the static GitHub Pages files:

   ```powershell
   npm.cmd run build:pages
   ```

5. Preview locally from the parent directory of this repository. This mirrors
   GitHub Pages serving the repository under `/SOGANG-AIMBA7th/`:

   ```powershell
   cd ..
   python -m http.server 8771
   ```

6. Check these routes:

   - `http://127.0.0.1:8771/SOGANG-AIMBA7th/`
   - `http://127.0.0.1:8771/SOGANG-AIMBA7th/brief/`
   - `http://127.0.0.1:8771/SOGANG-AIMBA7th/museum/`
   - `http://127.0.0.1:8771/SOGANG-AIMBA7th/issues/future-report.html`

7. Commit source changes and generated output together.

## Archive Policy

The site identity is the weekly brief archive. Supabase-backed participation and
Future Report pages are optional supporting layers, not the primary product.

For each published issue, preserve:

- issue date
- headline
- section links
- source links
- generated static HTML

## Pre-Publish Checklist

- `npm.cmd run check` passes.
- Korean text renders correctly in browser.
- Links use `/SOGANG-AIMBA7th/` when they target generated pages.
- External source links open in a new tab where appropriate.
- Images have meaningful `alt` text.
- New issue is listed in `issues/manifest.json`.
