# Security Notes

Date: 2026-05-11
Rechecked: 2026-05-18
Site identity: weekly brief archive

## Current Posture

The production site is a static GitHub Pages archive. There is no self-hosted
Next.js server in production.

This reduces exposure to server-side Next.js advisories, but the development
toolchain still needs regular dependency review.

## Completed In This Batch

- Upgraded `next` from `14.2.5` to `14.2.35`.
- Upgraded `eslint-config-next` from `14.2.5` to `14.2.35`.
- Upgraded `postcss` from `8.4.39` to `8.5.10`.
- Added a repeatable quality gate: `npm.cmd run check`.
- Added Supabase `vol-5` seed data.
- Added Supabase moderation status for raw submissions.
- Added URL validation for submitted links.
- Added a duplicate-vote cleanup and unique index for non-null `client_key`.
- Made Supabase policies rerunnable with `drop policy if exists`.

## Remaining Audit Items

`npm.cmd audit --audit-level=moderate` still reports 5 issues after the safe
14.x upgrade:

- `next`: remaining advisories require moving to Next 16.x according to npm.
- `eslint-config-next` / `@next/eslint-plugin-next`: transitive `glob` advisory.
- `next` bundled `postcss`: npm still reports a transitive copy under Next.

Supabase check on 2026-05-18:

- CDN script `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2` responds.
- Project host `lorcsmsbyqalbtbyoyzh.supabase.co` did not resolve from this
  environment, so Future Report now shows a visible data-status fallback when
  live aggregation cannot load.

## Risk Decision

For the current GitHub Pages static archive, do not force-upgrade to Next 16.x
inside this batch. That would be a framework migration, not a small security
patch.

Recommended next security batch:

1. Create a branch for Next 16 migration testing.
2. Run `npm.cmd audit fix --force` only on that branch.
3. Verify static export, `basePath`, and GitHub Pages output.
4. Keep production on the passing Next 14.2.35 build until the migration is
   verified.
