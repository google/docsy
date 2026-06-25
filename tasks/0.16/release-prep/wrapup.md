---
title: 0.16 release-prep wrapup
date: 2026-06-15
lastmod: 2026-06-25
range: v0.15.0..main
last-main-commit: b3ce9274
cSpell:ignore: favicons
---

Synthesized state for 0.16 release prep: themes, breaking changes, decisions,
milestone hygiene, and the tag-time checklist. The objective per-change matrix
lives in [coverage.md](coverage.md); this file holds the judgment layer.

> Prepared for commits in [v0.15.0...main][] through [b3ce9274][].

## Themes (with evidence and client impact)

- **Theme folder move (monorepo)** — [#2641][], [#2645][]; tracker [#2617][]
  (open). The canonical theme now lives in `theme/`, with `theme/package.json`
  owning Bootstrap and Font Awesome and the repo root orchestrating the
  `docsy.dev` and `theme` npm workspaces. **Breaking**: every install mode needs
  a one-line path update (Hugo module `…/docsy/theme`; npm/clone
  `theme: docsy/theme`), and the release must publish the nested `theme/vX.Y.Z`
  module tag.
- **Hugo 0.158+ support** — [#2647][], [#2648][], [#2649][], [#2658][]; trackers
  [#2581][], [#2593][] (closed); goldens [#726][]. Theme minimum raised to
  0.158.0; project build validated on 0.163.2; templates/docs moved off
  deprecated language APIs (zero deprecation notices). **Breaking** minimum-Hugo
  bump. Old keys (`languageName`/`languageDirection`) still work but should
  become `label`/`direction`. Node 22+ required for Hugo-managed Node tools from
  0.161.x (Docsy recommends Node LTS 24). Per-version mechanics live in the
  [Hugo upgrade guide][].
- **Favicons** — [#2653][], [#2654][], [#2656][]; [#2595][] closed, [#2357][]
  continues (26Q3). Default favicon artwork removed; the default partial
  discovers and links conventional `static/` files (`favicon.ico`,
  `favicon.svg`, `apple-touch-icon.png`, and square `favicon-NxN.png` /
  `apple-touch-icon-NxN.png` variants); a `gen-favicons` CLI generates raster
  icons from a source SVG. **Breaking** (defaults removed) and **new**
  (zero-config discovery). User guide: [Add your favicons][].
- **Shared chrome build mode (experimental)** — [#2660][], [#2662][]; tooling
  [#2661][]; tracker [#2659][] (open). New opt-in `td.chrome = shared` build
  mode: Docsy emits the repeated chrome (navbar, footer, left-nav) on one donor
  page per language and restores it in the browser via the shipped
  `chrome-nav.js`, so one build serves both readers and link checkers. A
  contributor/CI-experience win; the default `full` mode and production output
  are unchanged. The large-site cached-sidebar optimization is preserved and
  generalized — its activation moved into `chrome-nav.js`, which now ships on
  every page. User guide: [Chrome build modes][chrome].
- **Packaging, docs, and tooling cleanup** — npm workspaces, maintainer-notes
  and examples-page refreshes, a Netlify-badge URL fix, a version-doc `vv` fix,
  and test guards (Hugo deprecation probe, mono-site fixtures). Mostly
  internal/maintainer-facing.

## Breaking changes and required actions

1. **Theme folder move** — update the install path for your mode (Hugo module
   `…/docsy/theme`; npm/clone `theme: docsy/theme`). See [release report][]
   (Theme folder move).
2. **Minimum Hugo 0.158.0** — upgrade Hugo (prefer 0.163.2); optionally rename
   `languageName`/`languageDirection` to `label`/`direction`; use Node LTS 24.
   See [Hugo upgrade guide][].
3. **Default favicons removed** — supply your own files under `static/`; the
   default partial links conventional filenames. See [release report][]
   (Favicons).

## Release content status

- [release report][] (`blog/2026/0.16.0.md`): complete draft (`draft: true`).
  Covers the three breaking changes plus the experimental shared chrome build
  mode, each with Actions, an upgrade section, and sanity checks.
- [Hugo upgrade guide][] (`blog/2026/hugo-0.158.0+.md`): complete draft
  (`draft: true`). Carries per-version Hugo mechanics for 0.158.0–0.163.2 (DRY).
- Changelog `v0.16.0 - UNRELEASED` section: complete; reconciled with the
  ledger.

## Decisions

- The three breaking changes for 0.16 are the theme folder move, the
  minimum-Hugo bump, and default-favicon removal. The headline **new** feature
  is the experimental `shared` chrome build mode; everything else is cleanup or
  internal.
- Ship the `shared` chrome build mode as **experimental and opt-in** (off by
  default, `td.chrome = full`); it is a contributor/CI feature that doesn't
  change production output, so it is **not** a breaking change. Route it as one
  blog NEW section spanning [#2660][] and [#2662][]; [#2661][] (the
  full-vs-shared link-check matrix) is internal tooling (`N/A`).
- Keep Hugo mechanics in the [Hugo upgrade guide][] and link to it from the
  report and changelog (DRY).
- Moved the project Hugo build to 0.163.2 ([#2658][]) for the PostCSS/Netlify
  `ERR_ACCESS_DENIED` fix; the theme minimum stays 0.158.0.
- Referenced [#2656][] from the favicon report/changelog entries (was
  implemented but unreferenced).
- Omitted [#2650][] (double-`v` docs fix) from the changelog — too minor; the
  changelog tracks breaking changes and highlights only.
- Defer remaining monorepo ([#2617][]) and favicon ([#2357][]) work to post-0.16
  trackers; neither blocks the tag.

## Milestone 24 hygiene

Hygiene review of [milestone #24][milestone] ahead of tagging (issues only). As
of this pass: **6 open**, **5 closed**.

Closed (shipped in 0.16): [#2595][] (favicons), [#2593][] (Hugo deprecations),
[#2581][] (Hugo upgrade), [#2598][] (Netlify badge), [#2431][] (predecessor of
[#2581][]).

Open — disposition before/at release:

| Issue                                                 | Type        | In 0.16?      | Action                                  |
| ----------------------------------------------------- | ----------- | ------------- | --------------------------------------- |
| [#2615][]: Release 0.16.0 preparation                 | tracker     | n/a           | Keep; close when 0.16.0 is tagged.      |
| [#2617][]: Finalize monorepo setup — 26Q2             | tracker     | partial (TOF) | Keep open; remaining cleanup post-0.16. |
| [#2614][]: AI-agent doc consumption                   | tracker     | no (phase 2+) | Move off the 0.16 milestone.            |
| [#2554][]: Use 'note' role instead of 'alert'         | enhancement | no            | Reassign to a later milestone.          |
| [#2403][]: View-page URL should use `blob` not `tree` | bug         | no            | Reassign to a later milestone.          |
| [#1987][]: i18n for dark-mode menu button             | enhancement | no            | Reassign to a later milestone.          |

Before tagging, every milestone-24 issue except the release tracker [#2615][]
should be **closed** (shipped) or **moved** to a later milestone. Confirm the
milestone's closed list matches the [coverage ledger](coverage.md).

## Tag-time checklist

The canonical procedure is maintainer notes, [Publishing a release][pub-rel];
this tracks 0.16-specific status and deltas, not the full mechanics.

- [ ] Flip `draft: true` → `false` on both blog posts and set their final dates.
- [ ] Replace placeholders that resolve only after tagging: the
      `releases/tag/v0.16.0` links and the changelog `UNRELEASED`
      heading/banner.
- [ ] Bump the version stamp from `0.15.1-dev` to the release version in
      `package.json` and `docsy.dev` configs (`tdVersion`/`params`).
- [ ] Publish the nested Hugo module tag `theme/v0.16.0` at the release commit
      (required by the theme folder move; **not yet in the maintainer notes
      procedure** — new this release).
- [ ] Milestone hygiene: close or move all milestone-24 issues except [#2615][].
- [ ] Post-release: refresh `docsy-example` and the examples page for 0.16.0.

## Post-release / deferred

- Remaining monorepo cleanup: [#2617][].
- Favicon light/dark and further polish: [#2357][] (26Q3).
- AI-agent doc consumption phase 2+: [#2614][].

## References

- [Release 0.16.0 preparation #2615][#2615] · [milestone #24][milestone]
- [v0.15.0...main][]
- [coverage.md](coverage.md) · [release report][] · [Hugo upgrade guide][]
- Process: [maintainer notes][maint-notes] ([Publishing a release][pub-rel])

[milestone]: https://github.com/google/docsy/milestone/24
[release report]: ../../../docsy.dev/content/en/blog/2026/0.16.0.md
[hugo upgrade guide]: ../../../docsy.dev/content/en/blog/2026/hugo-0.158.0+.md
[Add your favicons]: ../../../docsy.dev/content/en/docs/content/iconsimages.md
[chrome]: ../../../docsy.dev/content/en/docs/deployment/chrome.md
[maint-notes]: ../../../docsy.dev/content/en/project/about/maintainer-notes.md
[pub-rel]:
  ../../../docsy.dev/content/en/project/about/maintainer-notes.md#publishing-a-release
[#726]: https://github.com/google/docsy/issues/726
[#1987]: https://github.com/google/docsy/issues/1987
[#2357]: https://github.com/google/docsy/issues/2357
[#2403]: https://github.com/google/docsy/issues/2403
[#2431]: https://github.com/google/docsy/issues/2431
[#2554]: https://github.com/google/docsy/issues/2554
[#2581]: https://github.com/google/docsy/issues/2581
[#2593]: https://github.com/google/docsy/issues/2593
[#2595]: https://github.com/google/docsy/issues/2595
[#2598]: https://github.com/google/docsy/issues/2598
[#2614]: https://github.com/google/docsy/issues/2614
[#2615]: https://github.com/google/docsy/issues/2615
[#2617]: https://github.com/google/docsy/issues/2617
[#2641]: https://github.com/google/docsy/pull/2641
[#2645]: https://github.com/google/docsy/pull/2645
[#2647]: https://github.com/google/docsy/pull/2647
[#2648]: https://github.com/google/docsy/pull/2648
[#2649]: https://github.com/google/docsy/pull/2649
[#2650]: https://github.com/google/docsy/pull/2650
[#2653]: https://github.com/google/docsy/pull/2653
[#2654]: https://github.com/google/docsy/pull/2654
[#2656]: https://github.com/google/docsy/pull/2656
[#2658]: https://github.com/google/docsy/pull/2658
[#2659]: https://github.com/google/docsy/issues/2659
[#2660]: https://github.com/google/docsy/pull/2660
[#2661]: https://github.com/google/docsy/pull/2661
[#2662]: https://github.com/google/docsy/pull/2662
[b3ce9274]: https://github.com/google/docsy/commit/b3ce9274
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
