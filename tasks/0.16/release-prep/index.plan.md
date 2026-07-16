---
title: 0.16 release-prep plan
date: 2026-06-15
lastmod: 2026-07-16
# Release coordinates — the per-release facts the process keys off.
prev-version: 0.15.0 # baseline tag: v0.15.0 (2026-05-01)
version: 0.16.0
milestone: 24
tracker-issue: 2615
compare-range: v0.15.0..main
version-stamp-from: 0.15.1-dev
last-main-commit: a7c58f5d
hugo-post: hugo-0.158.0+ # companion Hugo upgrade post; omit if no Hugo bump
---

This folder is the **living state** of 0.16 release prep, so we can see where we
stand without re-deriving it each time new commits land. Run the prep once key
features have landed, then refresh as more land — that way essential info is
captured in the right artifact before it's lost.

The "how" lives in the `docsy-release-artifacts` skill (phases, routing rules,
artifact requirements, tag-time steps). This file holds only the per-release
coordinates (front matter above) and the checklist below.

## Workspace

- [coverage.md](coverage.md) — the **coverage ledger**: one row per landed
  change, mapped to where it is covered (docs, changelog, release report, Hugo
  post). The objective "is everything covered?" snapshot.
- [wrapup.md](wrapup.md) — the **judgment layer**: themes, breaking changes and
  required actions, decisions, milestone hygiene, and the tag-time checklist.

Published artifacts (edited in place, not drafted here):

- Release report: `docsy.dev/content/en/blog/2026/0.16.0.md`
- Hugo upgrade post: `docsy.dev/content/en/blog/2026/hugo-0.158.0+.md`
- Changelog: `docsy.dev/content/en/project/about/changelog.md` (`#next` section)

## Checklist

See the skill for how to do each phase.

- [x] Inventory commits in [`v0.15.0..main`][range] through `last-main-commit`.
- [x] Map each change to its issue/tracker.
- [x] Route each change to its artifact(s) and record it in the ledger.
- [x] Reconcile changelog, release report, and Hugo post against the ledger.
- [x] Milestone hygiene (see [wrapup.md](wrapup.md)).
- [ ] Tag-time finalization (see [wrapup.md](wrapup.md)).

## Refresh loop

When new commits land on `main`:

1. Bump `last-main-commit` in the front matter above.
2. Add a ledger row per new change in [coverage.md](coverage.md) and route it.
3. Update affected artifacts and the [wrapup.md](wrapup.md) decisions.

[range]: https://github.com/google/docsy/compare/v0.15.0...main
