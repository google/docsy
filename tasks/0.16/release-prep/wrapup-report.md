---
title: 0.16 release-prep wrapup report
date: 2026-06-15
lastmod: 2026-06-15
range: v0.15.0..main
last-main-commit: f3128285
cSpell:ignore: favicons
---

> Report prepared for commits in [v0.15.0...main][] through [f3128285][].

## Release Themes

- **Theme folder move (monorepo)**: the canonical theme now lives in `theme/`,
  with `theme/package.json` owning Bootstrap and Font Awesome and the repository
  root orchestrating the `docsy.dev` and `theme` npm workspaces ([#2641][],
  [#2645][]). Tracker [#2617][] remains open for post-0.16 cleanup.
- **Hugo 0.158+ support**: the theme minimum moved to 0.158.0, the project build
  is validated on 0.163.1, and theme templates/docs moved off deprecated Hugo
  language APIs ([#2647][], [#2648][], [#2649][]; tracker [#2581][] closed).
- **Favicons**: default favicon artwork was removed; the default partial now
  discovers and links conventional `static/` files (including square variants),
  and a `gen-favicons` CLI generates raster icons from a source SVG ([#2653][],
  [#2654][], [#2656][]; [#2595][] closed, [#2357][] continues for 26Q3).
- **Packaging, docs, and tooling cleanup**: npm workspaces, maintainer-notes and
  examples-page refreshes, a Netlify-badge URL fix, a version-doc `vv` fix, and
  test guards (Hugo deprecation probe, mono-site fixtures).

## Required or Notable Action (breaking)

- **Theme folder move**: update the Docsy install path for your install mode
  (Hugo module `…/docsy/theme`; npm/clone `theme: docsy/theme`). See the [0.16.0
  release report][] (Theme folder move).
- **Minimum Hugo 0.158.0**: upgrade Hugo (prefer 0.163.1); optionally rename
  `languageName`/`languageDirection` to `label`/`direction`. Node 22+ is
  required for Hugo-managed Node tools (use Node LTS 24). See the [Hugo 0.158+
  upgrade guide][].
- **Default favicons removed**: supply your own favicon files under `static/`;
  the default partial links conventional filenames. See the [0.16.0 release
  report][] (Favicons).

## Release Content Status

- [0.16.0 release report][] (`blog/2026/0.16.0.md`): complete draft
  (`draft: true`). Covers all three breaking changes with Actions, an upgrade
  section, and sanity checks.
- [Hugo 0.158+ upgrade guide][] (`blog/2026/hugo-0.158.0+.md`): complete draft
  (`draft: true`). Carries the per-version Hugo mechanics (DRY); the release
  report links to it.
- Changelog `v0.16.0 - UNRELEASED` section: complete; reconciled with the audit.
- Reconciliation performed this pass: added [#2656][] references to the blog
  favicon summary and the changelog **New** favicon entry (it was implemented
  but unreferenced).

## Follow-Up Checklist

- [ ] At tag time, flip `draft: true` → `false` on both blog posts and set their
      final dates.
- [ ] Replace placeholders that resolve only after tagging: the
      `releases/tag/v0.16.0` links and the changelog `UNRELEASED`
      heading/banner.
- [ ] Bump the version stamp from `0.15.1-dev` to the release version in
      `package.json` and `docsy.dev` configs (`tdVersion`/`params`).
- [ ] Publish the nested Hugo module tag `theme/v0.16.0` at the release commit
      (required by the theme folder move).
- [ ] Milestone hygiene per [milestone-24-review.md][]: close or move all
      milestone-24 issues except the release tracker [#2615][].
- [ ] Post-release: refresh `docsy-example` and the examples page for 0.16.0.
- [x] Reference [#2656][] from the favicon report/changelog entries.
- [x] Decide [#2650][] (double-`v` docs fix): keep out of the changelog as a
      minor docs fix.

## Post-Release / Deferred

- Remaining monorepo cleanup: [#2617][].
- Favicon light/dark and further polish: [#2357][] (26Q3).
- AI-agent doc consumption phase 2+: [#2614][].

## References

- [Release 0.16.0 preparation #2615][#2615]
- [v0.15.0...main][]
- Commit inventory: [commit-inventory.md](commit-inventory.md)
- Issue mapping: [issue-mapping.md](issue-mapping.md)
- Issue audit: [issue-audit.md](issue-audit.md)
- Milestone 24 review: [milestone-24-review.md][]
- [0.16.0 release report][] · [Hugo 0.158+ upgrade guide][]

[#2357]: https://github.com/google/docsy/issues/2357
[#2581]: https://github.com/google/docsy/issues/2581
[#2595]: https://github.com/google/docsy/issues/2595
[#2615]: https://github.com/google/docsy/issues/2615
[#2617]: https://github.com/google/docsy/issues/2617
[#2614]: https://github.com/google/docsy/issues/2614
[#2641]: https://github.com/google/docsy/pull/2641
[#2645]: https://github.com/google/docsy/pull/2645
[#2647]: https://github.com/google/docsy/pull/2647
[#2648]: https://github.com/google/docsy/pull/2648
[#2649]: https://github.com/google/docsy/pull/2649
[#2650]: https://github.com/google/docsy/pull/2650
[#2653]: https://github.com/google/docsy/pull/2653
[#2654]: https://github.com/google/docsy/pull/2654
[#2656]: https://github.com/google/docsy/pull/2656
[f3128285]: https://github.com/google/docsy/commit/f3128285
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
[milestone-24-review.md]: milestone-24-review.md
[0.16.0 release report]: ../../../docsy.dev/content/en/blog/2026/0.16.0.md
[Hugo 0.158+ upgrade guide]:
  ../../../docsy.dev/content/en/blog/2026/hugo-0.158.0+.md
