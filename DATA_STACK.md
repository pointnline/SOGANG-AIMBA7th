# AIMBA Data Stack

## Goal

Keep the Weekly Brief as a stable static archive while using Supabase as an
optional supporting layer for lightweight participation data.

The site remains a static GitHub Pages site. Supabase can store supporting data:

- issue views, likes, and checks for archive diagnostics
- AIMBA Pulse topic votes
- reader feedback, topic suggestions, tips, and project signals
- monthly Future Report rollups when the editorial team wants them

## Architecture

```text
GitHub Pages
  index.html
    - archive
    - archive homepage
    - optional AIMBA Pulse summary
  issues/vol_20260428.html
    - participation form
  issues/future-report.html
    - monthly rollup from Supabase

Supabase
  weekly_issue_stats
    - views
    - likes
    - checks
  pulse_votes
    - option_id
    - client_key
    - source_path
  pulse_vote_counts
    - public aggregate view for the website
  participation_submissions
    - issue_id
    - submission_type
    - member_name
    - sector
    - content
    - link_url
```

## Tables

`weekly_issue_stats`

Stores aggregate counters per issue. Existing reaction buttons use the RPC function
`increment_weekly_issue_stat`.

`pulse_votes`

Stores one row per Pulse vote. The browser also stores a local key in `localStorage`
to discourage repeated voting from the same device.

`pulse_vote_counts`

Public aggregate view used by the home Pulse panel and Future Report. Raw vote rows
are not publicly selected by the site.

`participation_submissions`

Stores raw reader submissions. Raw submissions are insert-only for public users and
should be reviewed in Supabase before being curated into a brief or report.

## Setup

1. Open Supabase SQL Editor.
2. Run [SUPABASE_SETUP.sql](SUPABASE_SETUP.sql).
3. Deploy the site to GitHub Pages.
4. Test:
   - confirm the home Pulse panel renders at `index.html#aimbaPulse`
   - submit feedback from the latest issue's `#participateSection`
   - if the legacy Supabase form remains enabled, submit once from
     `issues/vol_20260428.html#participateSection`
   - open `issues/future-report.html` and confirm the data status message

## Operating Loop

1. Publish Weekly Brief.
2. Preserve the issue as a static archive page.
3. Optionally collect votes, reactions, or submissions.
4. Review Supabase data before it becomes public content.
5. Use Future Report only when the data is editorially useful.
