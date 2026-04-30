# AIMBA Data Stack

## Goal

Turn the Weekly Brief from a static archive into a data-collecting participation system.

The site remains a static GitHub Pages site, while Supabase stores the interaction data:

- issue views, likes, and checks
- AIMBA Pulse topic votes
- reader feedback, topic suggestions, tips, and project signals
- monthly Future Report rollups

## Architecture

```text
GitHub Pages
  index.html
    - archive
    - AIMBA Pulse dashboard
    - topic voting
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
   - vote from the home Pulse panel
   - submit feedback from `issues/vol_20260428.html#participateSection`
   - open `issues/future-report.html`

## Operating Loop

1. Publish Weekly Brief.
2. Readers vote, react, and submit tips.
3. Future Report reads Supabase data and shows the monthly signal.
4. Curate the strongest submissions into the next issue.
5. Repeat, keeping Supabase as the long-term memory layer.
