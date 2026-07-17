---
title: 0.16 release-prep wrapup
date: 2026-06-15
lastmod: 2026-07-17
range: v0.15.0..main
last-main-commit: a7c58f5d
cSpell:ignore: favicons thoughtry
---

Synthesized state for 0.16 release prep: themes, breaking changes, decisions,
milestone hygiene, and the tag-time checklist. The objective per-change matrix
lives in [coverage.md](coverage.md); this file holds the judgment layer.

> Prepared for commits in [v0.15.0...main][] through [a7c58f5d][].

## Themes (with evidence and client impact)

- **Theme folder move (monorepo)** — [#2641][], [#2645][]; tracker [#2617][]
  (open). The canonical theme now lives in `theme/`, with `theme/package.json`
  owning Bootstrap and Font Awesome and the repo root orchestrating the
  `docsy.dev` and `theme` npm workspaces. **Breaking**: every install mode needs
  a one-line path update (Hugo module `…/docsy/theme`; npm/clone
  `theme: docsy/theme`), and the release must publish the nested `theme/vX.Y.Z`
  module tag.
- **Hugo 0.158+ support** — [#2647][], [#2648][], [#2649][], [#2658][],
  [#2664][]; trackers [#2581][], [#2593][] (closed); goldens [#726][]. Theme
  minimum raised to 0.160.1 (language APIs 0.158.0; npm-dep install 0.159.0;
  0.159.2–0.160.0 regressions excluded); project build validated on 0.163.3;
  templates/docs moved off deprecated language APIs (zero deprecation notices).
  **Breaking** minimum-Hugo bump. Old keys (`languageName`/`languageDirection`)
  still work but should become `label`/`direction`. Node 22+ required for
  Hugo-managed Node tools from 0.161.x (Docsy recommends Node LTS 24).
  Per-version mechanics live in the [Hugo upgrade guide][].
- **Favicons** — [#2653][], [#2654][], [#2656][]; [#2595][] closed, [#2357][]
  continues (26Q3). Default favicon artwork removed; the default partial
  discovers and links conventional `static/` files (`favicon.ico`,
  `favicon.svg`, `apple-touch-icon.png`, and square `favicon-NxN.png` /
  `apple-touch-icon-NxN.png` variants); a `gen-favicons` CLI generates raster
  icons from a source SVG. **Breaking** (defaults removed) and **new**
  (zero-config discovery). User guide: [Add your favicons][].
- **npm-dep modernization** — [#2670][]; docs [#2672][], [#2675][]; tracker
  [#2668][] (closed). Bootstrap and Font Awesome now come from npm via Hugo's
  first-class npm-module support (`hugo mod npm pack`), with
  `theme/package.json` as the single source of truth — retiring the Hugo-module
  imports of both GitHub repos, the generated `go.mod` requires, the module-sync
  script, and the Bootstrap `rfs` vendor hack. **Breaking** for Hugo-module
  installs (run `hugo mod npm pack` + `npm install`); npm-package and
  clone/submodule installs unaffected (`postinstall`). The same arc made
  **PostCSS opt-in** for non-RTL sites. [#2672][] + [#2675][] reconcile the
  get-started, updating, deployment, and RTL docs.
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
  and test guards (Hugo deprecation probe, fixture-site tests). docsy.dev link
  checking moved from the unmaintained htmltest to Lychee ([#2665][]), with the
  cache CLIs extracted to the external [link-cache][] package ([#2671][],
  [#2674][]) so the published `docsy` package ships only the `gen-favicons` bin.
  Mostly internal/maintainer-facing.

## Breaking changes and required actions

1. **Theme folder move** — update the install path for your mode (Hugo module
   `…/docsy/theme`; npm/clone `theme: docsy/theme`). See [release report][]
   (Theme folder move).
2. **Minimum Hugo 0.160.1** — upgrade Hugo (prefer 0.163.3); optionally rename
   `languageName`/`languageDirection` to `label`/`direction`; use Node LTS 24.
   See [Hugo upgrade guide][].
3. **Default favicons removed** — supply your own files under `static/`; the
   default partial links conventional filenames. See [release report][]
   (Favicons).
4. **Bootstrap and Font Awesome via npm** — Hugo-module installs run
   `hugo mod npm pack` + `npm install` after updating Docsy; npm-package and
   clone/submodule installs are unaffected. See [release report][] (Bootstrap
   and Font Awesome via npm).

## Release content status

- [release report][] (`blog/2026/0.16.0.md`): complete draft (`draft: true`).
  Covers the four breaking changes plus the experimental shared chrome build
  mode, each with Actions, an upgrade section, and sanity checks. Highlights
  refreshed in the 2026-07-16 pass (value-first phrasing; npm-dep item added).
- [Hugo upgrade guide][] (`blog/2026/hugo-0.158.0+.md`): complete draft
  (`draft: true`). Carries per-version Hugo mechanics for 0.158.0–0.163.3 (DRY).
- Changelog `v0.16.0 - UNRELEASED` section: complete; reconciled with the
  ledger.

## Decisions

- Applied the enumeration-home rule (2026-07-16, now canonical in maintainer
  notes → Content placement): the GitHub release notes + milestone own the
  exhaustive PR/issue record; the blog post carries no PR/issue enumeration
  (open trackers only where they add follow-up context: [#2617][], [#2659][],
  [#2357][] in What's next); the changelog cites key issues, keeping PR links
  only for contributor credit ([#2594][], [#2578][]). The ledger remains the
  internal full-coverage record.
- The highlights card is capped at **three items** (2026-07-16): a merged
  **Packaging modernization** entry (theme folder move + npm-sourced deps, title
  linking `#theme-folder` with an inline link to `#npm-deps`), favicons, and
  shared chrome. The minimum-Hugo bump is deliberately not in the card: it is
  routine (0.15 did the same), has its own section plus the companion Hugo
  guide, and Ready-to-Upgrade lists every breaking change anyway.
- The four breaking changes for 0.16 are the theme folder move, the minimum-Hugo
  bump, default-favicon removal, and npm-sourced Bootstrap/Font Awesome
  ([#2670][], added in the 2026-07-16 refresh). The headline **new** feature is
  the experimental `shared` chrome build mode; everything else is cleanup or
  internal.
- Ship the `shared` chrome build mode as **experimental and opt-in** (off by
  default, `td.chrome = full`); it is a contributor/CI feature that doesn't
  change production output, so it is **not** a breaking change. Route it as one
  blog NEW section spanning [#2660][] and [#2662][]; [#2661][] (the
  full-vs-shared link-check matrix) is internal tooling (`N/A`).
- Keep Hugo mechanics in the [Hugo upgrade guide][] and link to it from the
  report and changelog (DRY).
- Moved the project Hugo build to 0.163.2 ([#2658][]) for the PostCSS/Netlify
  `ERR_ACCESS_DENIED` fix, then to 0.163.3 ([#2664][]) — a build-only patch bump
  (code-block escaping, PostCSS/Babel config variants, `uglyURLs` fix); the
  theme minimum stayed 0.158.0 at that point. Both blog posts recommend 0.163.3.
- **Raised the theme's Hugo floor to 0.160.1** (2026-07-17): a fixture-matrix
  test showed the npm-dep install flow (`hugo mod npm pack` → `npm install` →
  `hugo`) silently fails on 0.158.x — pack exits 0 but writes empty dependency
  lists, surfacing only later as an SCSS import error — and works from 0.159.0.
  With a silent sub-0.159 failure mode, Hugo's minimum-version warning is the
  only consumer guardrail, so the floor must be accurate. 0.160.1 (not bare
  0.159.0) also excludes the 0.159.2–0.160.0 regression window. Security
  currency stays the recommendation's job (0.163.3). Analysis and methodology:
  thoughtry `projects/docsy/tasks/v0.16.0/index.md` (2026-07-17).
- Routed the link-check tooling arc ([#2665][]–[#2674][]) as
  internal/maintainer-facing: no changelog entry; a one-line mention under the
  report's build-and-test-guards section. The cache CLIs live in the external
  [link-cache][] package, keeping `gen-favicons` the only shipped bin.
- Referenced [#2656][] from the favicon report/changelog entries (was
  implemented but unreferenced).
- Omitted [#2650][] (double-`v` docs fix) from the changelog — too minor; the
  changelog tracks breaking changes and highlights only.
- Defer remaining monorepo ([#2617][]) and favicon ([#2357][]) work to post-0.16
  trackers; neither blocks the tag.

## Milestone 24 hygiene

Hygiene review of [milestone #24][milestone] ahead of tagging (issues only). As
of this pass (2026-07-16): **7 open**, **7 closed**.

Closed (shipped in 0.16): [#2595][] (favicons), [#2593][] (Hugo deprecations),
[#2581][] (Hugo upgrade), [#2598][] (Netlify badge), [#2431][] (predecessor of
[#2581][]), [#2668][] (npm-dep modernization). Closed as not planned: [#2657][]
(page-meta URL marker; Lychee's URL-pattern excludes cover those links without a
marker).

Open — disposition before/at release:

| Issue                                                 | Type        | In 0.16?      | Action                                  |
| ----------------------------------------------------- | ----------- | ------------- | --------------------------------------- |
| [#2615][]: Release 0.16.0 preparation                 | tracker     | n/a           | Keep; close when 0.16.0 is tagged.      |
| [#2617][]: Finalize monorepo setup — 26Q2             | tracker     | partial (TOF) | Keep open; remaining cleanup post-0.16. |
| [#2659][]: Experimental `shared` chrome build mode    | tracker     | yes (exp.)    | Keep open; feature continues post-0.16. |
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
- [x] Validate the theme floor per maintainer notes (Hugo version pins): done
      2026-07-17 via a fixture-matrix build on 0.158.0/0.159.0; floor raised to
      0.160.1 — see Decisions.
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
[#2578]: https://github.com/google/docsy/pull/2578
[#2581]: https://github.com/google/docsy/issues/2581
[#2593]: https://github.com/google/docsy/issues/2593
[#2594]: https://github.com/google/docsy/pull/2594
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
[#2657]: https://github.com/google/docsy/issues/2657
[#2658]: https://github.com/google/docsy/pull/2658
[#2659]: https://github.com/google/docsy/issues/2659
[#2660]: https://github.com/google/docsy/pull/2660
[#2661]: https://github.com/google/docsy/pull/2661
[#2662]: https://github.com/google/docsy/pull/2662
[#2664]: https://github.com/google/docsy/pull/2664
[#2665]: https://github.com/google/docsy/pull/2665
[#2668]: https://github.com/google/docsy/issues/2668
[#2670]: https://github.com/google/docsy/pull/2670
[#2671]: https://github.com/google/docsy/pull/2671
[#2672]: https://github.com/google/docsy/pull/2672
[#2674]: https://github.com/google/docsy/pull/2674
[#2675]: https://github.com/google/docsy/pull/2675
[a7c58f5d]: https://github.com/google/docsy/commit/a7c58f5d
[link-cache]: https://github.com/chalin/link-cache
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
