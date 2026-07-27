---
title: 0.16 release-prep wrapup
date: 2026-06-15
lastmod: 2026-07-26
range: v0.15.0..main
last-main-commit: 9b1d9951
cSpell:ignore: favicons retokenization thoughtry
---

Synthesized state for 0.16 release prep: themes, breaking changes, decisions,
milestone hygiene, and the tag-time checklist. The objective per-change matrix
lives in [coverage.md](coverage.md); this file holds the judgment layer.

> Prepared for commits in [v0.15.0...main][] through [9b1d9951][].

## Themes (with evidence and client impact)

- **Theme folder move (monorepo)** — [#2641][], [#2645][]; tracker [#2617][]
  (closed 2026-07-26). The canonical theme now lives in `theme/`, with
  `theme/package.json` owning Bootstrap and Font Awesome and the repo root
  orchestrating the `docsy.dev` and `theme` npm workspaces. **Breaking**: every
  install mode needs a one-line path update (Hugo module `…/docsy/theme`;
  npm/clone `theme: docsy/theme`), and the release must publish the nested
  `theme/vX.Y.Z` module tag.
- **Hugo 0.158+ support** — [#2647][], [#2648][], [#2649][], [#2658][],
  [#2664][], [#2679][]; trackers [#2581][], [#2593][] (closed); goldens
  [#726][]. Theme minimum raised to 0.160.1 (language APIs 0.158.0; npm-dep
  install 0.159.0; 0.159.2–0.160.0 regressions excluded); project build
  validated on 0.164.0; templates/docs moved off deprecated language APIs (zero
  deprecation notices). **Breaking** minimum-Hugo bump. Old keys
  (`languageName`/`languageDirection`) still work but should become
  `label`/`direction`. Node 22+ required for Hugo-managed Node tools from
  0.161.x (Docsy recommends Node LTS 24). Per-version mechanics live in the
  [Hugo upgrade guide][]. The **minimum** vs **officially supported** version
  distinction is now named, documented, and sync-guarded ([#2680][]).
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
- **Docsy on the npm registry** — [#2684][], [#2688][]; tracker [#2683][] (open;
  completes at tag time). The `theme/` workspace is publishable as
  `@docsy/theme`: registry installs get the theme with Bootstrap and Font
  Awesome as ordinary npm dependencies (no `postinstall` hack), and the install
  docs lead Option 3 with the registry. **New** install channel, announced in
  the release post's npm-registry section. The official-support policy was
  recast in two-axis form (production use vs issue reports), under which an npm
  install from GitHub (`google/docsy`) is unsupported even for a stable release.
  `0.16.0-rc.1` rehearsed the publish under dist-tag `next`; the stable publish
  and `next` re-point are tag-time steps (mechanics: `docsy-npm-publish` skill).
- **Shared chrome build mode (experimental)** — [#2660][], [#2662][]; tooling
  [#2661][]; tracker [#2659][] (closed 2026-07-26; open follow-ups spun into
  [#2689][], 26Q3). New opt-in `td.chrome = shared` build mode: Docsy emits the
  repeated chrome (navbar, footer, left-nav) on one donor page per language and
  restores it in the browser via the shipped `chrome-nav.js`, so one build
  serves both readers and link checkers. A contributor/CI-experience win; the
  default `full` mode and production output are unchanged. The large-site
  cached-sidebar optimization is preserved and generalized — its activation
  moved into `chrome-nav.js`, which now ships on every page. User guide: [Chrome
  build modes][chrome].
- **Packaging, docs, and tooling cleanup** — npm workspaces, maintainer-notes
  and examples-page refreshes, a Netlify-badge URL fix, a version-doc `vv` fix,
  and test guards (Hugo deprecation probe, fixture-site tests), plus
  golden-refresh scripts ([#2678][]). docsy.dev link checking moved from the
  unmaintained htmltest to Lychee ([#2665][]), with the cache CLIs extracted to
  the external [link-cache][] package ([#2671][], [#2674][]) so the published
  `docsy` package ships only the `gen-favicons` bin. Mostly
  internal/maintainer-facing.

## Breaking changes and required actions

1. **Theme folder move** — update the install path for your mode (Hugo module
   `…/docsy/theme`; npm/clone `theme: docsy/theme`). See [release report][]
   (Theme folder move).
2. **Minimum Hugo 0.160.1** — upgrade Hugo (prefer 0.164.0); optionally rename
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
  Covers the four breaking changes, the npm-registry announcement, and the
  experimental shared chrome build mode, each with Actions, an upgrade section,
  and sanity checks. 2026-07-26 refresh: npm-registry section added; otel.io
  guide feedback applied (postinstall caution, favicons command qualified);
  PostCSS section gained Actions and its rationale.
- [Hugo upgrade guide][] (`blog/2026/hugo-0.158.0+.md`): complete draft
  (`draft: true`). Carries per-version Hugo mechanics for 0.158.0–0.164.0 (DRY).
  2026-07-26: Page-level `.Lang` unaffected note added to the language-API
  table.
- Changelog `v0.16.0 - UNRELEASED` section: complete; reconciled with the
  ledger. 2026-07-26: npm-registry **New** entry added.

## Decisions

- **Accepted the pre-tag window for the evergreen updating docs** (2026-07-27,
  owner call at the [#2692][] disposition): `/docs/updating/` and the 0.12.0
  forward note publish on merge, while `tdVersion.latest` renders `v0.15.0`
  until the tag-time bump — so the version-pinned commands are wrong for a few
  hours (mirroring the npm RC window). Draft-post links use the preview host in
  the interim (flip step above). The 0.16.0 post's `#theme-folder-actions` keeps
  its full per-mode command snapshot deliberately: upgrade posts are
  frozen-in-time and must serve a reader upgrading at exactly 0.16.0 later,
  whereas the evergreen pages track the latest release.
- Applied the enumeration-home rule (2026-07-16, now canonical in maintainer
  notes → Content placement): the GitHub release notes + milestone own the
  exhaustive PR/issue record; the blog post carries no PR/issue enumeration
  (open trackers only where they add follow-up context: [#2617][], [#2659][],
  [#2357][] in What's next); the changelog cites key issues, keeping PR links
  only for contributor credit ([#2594][], [#2578][]). The ledger remains the
  internal full-coverage record.
- The highlights card is capped at **three items** (2026-07-16): a packaging
  entry (**First-class npm support** since the 2026-07-26 rework -- see the
  routing decision below), favicons, and shared chrome. The minimum-Hugo bump is
  deliberately not in the card: it is routine (0.15 did the same), has its own
  section plus the companion Hugo guide, and Ready-to-Upgrade lists every
  breaking change anyway.
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
  report and changelog; conversely, the **floor rationale** lives in the release
  report's Hugo section, with the Hugo post and changelog linking to it rather
  than restating (DRY, one home per fact; 2026-07-17).
- Moved the project Hugo build to 0.163.2 ([#2658][]) for the PostCSS/Netlify
  `ERR_ACCESS_DENIED` fix, then to 0.163.3 ([#2664][]) — a build-only patch bump
  (code-block escaping, PostCSS/Babel config variants, `uglyURLs` fix); the
  theme minimum stayed 0.158.0 at that point. Both blog posts recommended
  0.163.3 until the 0.164.0 bump (below).
- **Raised the theme's Hugo floor to 0.160.1** (2026-07-17): a fixture-matrix
  test showed the npm-dep install flow (`hugo mod npm pack` → `npm install` →
  `hugo`) silently fails on 0.158.x — pack exits 0 but writes empty dependency
  lists, surfacing only later as an SCSS import error — and works from 0.159.0.
  With a silent sub-0.159 failure mode, Hugo's minimum-version warning is the
  only consumer guardrail, so the floor must be accurate. 0.160.1 (not bare
  0.159.0) also excludes the 0.159.2–0.160.0 regression window. Security
  currency stays the recommendation's job (now 0.164.0). Analysis and
  methodology: thoughtry `projects/docsy/tasks/v0.16.0/index.md` (2026-07-17).
- Moved the recommended Hugo to **0.164.0** (2026-07-17) after [#2679][] landed
  the project build bump and docsy-example followed: 0.164.0 fixes the 0.128.0+
  template-rendering slowdown (a reported ~8,500-page Docsy site went from 608
  to 117 seconds), with only benign output churn (Chroma retokenization, sitemap
  alternate order). The Hugo post gained a 0.164.0 section and now covers
  0.158.0–0.164.x; the theme floor stays 0.160.1.
- Routed the link-check tooling arc ([#2665][]–[#2674][]) as
  internal/maintainer-facing: no changelog entry; a one-line mention under the
  report's build-and-test-guards section. The cache CLIs live in the external
  [link-cache][] package, keeping `gen-favicons` the only shipped bin.
- Referenced [#2656][] from the favicon report/changelog entries (was
  implemented but unreferenced).
- Omitted [#2650][] (double-`v` docs fix) from the changelog — too minor; the
  changelog tracks breaking changes and highlights only.
- **Clarified Hugo-version semantics** ([#2680][], 2026-07-18): Docsy names and
  sync-guards its two Hugo versions — the theme **minimum** (requirement
  statements, `test:hugo-versions`, minimum-Hugo smoke lane) and the
  **officially supported** version (the docsy.dev pin). Policy home is the
  changelog §Official support; the release post's Hugo section and the install
  prerequisites link to it rather than restating (one home per fact).
- Defer remaining favicon work ([#2357][], 26Q3); it doesn't block the tag. (The
  monorepo tracker [#2617][], originally deferred alongside it, instead closed
  as delivered at the 2026-07-26 gate — its npm-publish capstone [#2683][] ships
  with this release.)
- **Routed the npm-registry announcement** (2026-07-26, npm-publish plan step
  4): a NEW release-post section completing the packaging cluster (theme folder
  → npm deps → registry), with a switch Action for GitHub-npm installs; the
  support-status delta links the [official support policy][] rather than
  restating it, and the policy rewrite itself shipped with [#2688][] (routed
  then). The changelog carries one **New** entry citing [#2683][]. Highlights
  card: the packaging entry now leads with the npm story — **First-class npm
  support**, title linking `#npm-registry`, with the theme-folder move swept
  into "and more" (owner call, 2026-07-26) — the three-item cap holds.
- **Applied the otel.io guide feedback** (2026-07-26; from exercising the posts
  over opentelemetry.io, [otel#10906][]): clone/submodule Actions warn that a
  plain `npm install` inside `themes/docsy/` pulls the maintainer workspaces
  where `npm run postinstall` installs only theme runtime deps (caution homed in
  the docs, [Other installation options][], order-of-magnitude phrasing); the
  favicons helper command is qualified as npm-package-install specific,
  deferring per-mode commands to [Add your favicons][]; the Hugo guide's
  language-API section notes Page-level `.Lang` is unaffected (a textual `.Lang`
  sweep hits such uses — the otel.io review did).
- **PostCSS section made self-explanatory** (2026-07-26): added Actions (drop
  the toolchain vs keep it for RTL/own-config) and the rationale (Autoprefixer
  verified a byte-identical no-op against the shipped CSS's browser targets).
  Decision record: thoughtry
  `projects/docsy/tasks/repo-reorg/postcss-policy.decision.md`; public trail
  [#2668][].

## Milestone 24 hygiene

The 0.16.0 gate closed at the **2026-07-26 milestone-gate triage**
(`docsy-milestone-triage` pass; record: thoughtry
`projects/docsy/tasks/v0.16.0/`). [Milestone #24][milestone] now holds **2
open**, 9 closed. Open by design:

- [#2615][]: release tracker — closes when 0.16.0 ships.
- [#2683][]: npm publish — the stable publish is a tag-time step.

Everything else is closed as shipped ([#2617][] monorepo and [#2659][] chrome
closed 2026-07-26 with the chrome follow-ups spun into [#2689][]) or moved:
[#2554][], [#2403][], [#1987][] → 0.17.0 (due 2026-08-31); [#2614][] → 0.18.0
(due 2026-09-30) — both milestones created at the triage.

Before tagging, confirm the milestone's closed list matches the
[coverage ledger](coverage.md).

## Tag-time checklist

The canonical procedure is maintainer notes, [Publishing a release][pub-rel];
this tracks 0.16-specific status and deltas, not the full mechanics.

- [ ] Flip `draft: true` → `false` on both blog posts and set their final dates.
- [x] Validate the theme's minimum Hugo version: done 2026-07-17 via a one-off
      fixture-matrix build on 0.158.0/0.159.0; minimum raised to 0.160.1 — see
      Decisions. Ongoing validation is now the minimum-Hugo lane of
      `test:smoke`, run at release step 8.
- [ ] Replace placeholders that resolve only after tagging: the
      `releases/tag/v0.16.0` links, the changelog `UNRELEASED` heading/banner,
      the release post's `[CL@0.16.0]` link (`/changelog/#next` →
      `/changelog/#v0.16.0`, since the heading anchor changes at release), and
      its `[compare-0.15.0]` link (`v0.15.0...main` → `v0.15.0...v0.16.0`).
- [ ] Re-point the interim preview-host (`main--docsydocs.netlify.app`) links at
      the production `/blog/2026/0.16.0/` URLs once the post publishes: the
      `[r16]` link def in `blog/2025/0.12.0.md`, and the `[0.16.0]` and `[tfa]`
      link defs in `docs/updating/_index.md` (each site carries a
      `TODO(tag-time)` comment; from [#2692][]).
- [ ] Bump the version stamp from `0.15.1-dev` to the release version in
      `package.json` and `docsy.dev` configs (`tdVersion`/`params`).
- [ ] Publish the nested Hugo module tag `theme/v0.16.0` at the release commit
      (required by the theme folder move; **not yet in the maintainer notes
      procedure** — new this release). Verify the tag exists **before** flipping
      the posts' `draft: true`: every install-mode Action in the release post
      depends on it, and 0.16.0 is the first release to exercise the nested-tag
      scheme.
- [ ] Publish `@docsy/theme@0.16.0` to the npm registry from the tagged commit
      and re-point dist-tag `next` at it, **before** the site deploy flips the
      posts live (the post's install commands must resolve). Verify with
      `npm run test:smoke`. Also new this release; mechanics:
      `docsy-npm-publish` skill, tracker [#2683][] (close it here).
- [ ] Milestone hygiene: close or move all milestone-24 issues except [#2615][].
      Trued up at the 2026-07-26 gate — only [#2683][] also remains, closing
      with the npm publish above; see Milestone 24 hygiene.
- [ ] Post-release: refresh `docsy-example` and the examples page for 0.16.0.
      (Its Hugo floor is handled early by [docsy-example#478][], since the site
      tracks Docsy main, where npm-dep installs already require 0.160.1.)

## Post-release / deferred

- Shared-chrome follow-ups (navbar pagelinks, non-docs sections, CCR-10):
  [#2689][] (26Q3).
- Favicon light/dark and further polish: [#2357][] (26Q3).
- AI-agent doc consumption phase 2+: [#2614][] (0.18.0).

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
[Other installation options]:
  ../../../docsy.dev/content/en/docs/get-started/other-options.md
[pub-rel]:
  ../../../docsy.dev/content/en/project/about/maintainer-notes.md#publishing-a-release
[#726]: https://github.com/google/docsy/issues/726
[#1987]: https://github.com/google/docsy/issues/1987
[#2357]: https://github.com/google/docsy/issues/2357
[#2403]: https://github.com/google/docsy/issues/2403
[#2554]: https://github.com/google/docsy/issues/2554
[#2578]: https://github.com/google/docsy/pull/2578
[#2581]: https://github.com/google/docsy/issues/2581
[#2593]: https://github.com/google/docsy/issues/2593
[#2594]: https://github.com/google/docsy/pull/2594
[#2595]: https://github.com/google/docsy/issues/2595
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
[#2664]: https://github.com/google/docsy/pull/2664
[#2665]: https://github.com/google/docsy/pull/2665
[#2668]: https://github.com/google/docsy/issues/2668
[#2670]: https://github.com/google/docsy/pull/2670
[#2671]: https://github.com/google/docsy/pull/2671
[#2672]: https://github.com/google/docsy/pull/2672
[#2674]: https://github.com/google/docsy/pull/2674
[#2675]: https://github.com/google/docsy/pull/2675
[#2678]: https://github.com/google/docsy/pull/2678
[#2679]: https://github.com/google/docsy/pull/2679
[#2680]: https://github.com/google/docsy/pull/2680
[#2683]: https://github.com/google/docsy/issues/2683
[#2684]: https://github.com/google/docsy/pull/2684
[#2688]: https://github.com/google/docsy/pull/2688
[#2689]: https://github.com/google/docsy/issues/2689
[#2692]: https://github.com/google/docsy/pull/2692
[9b1d9951]: https://github.com/google/docsy/commit/9b1d9951
[docsy-example#478]: https://github.com/google/docsy-example/pull/478
[link-cache]: https://github.com/chalin/link-cache
[official support policy]:
  ../../../docsy.dev/content/en/project/about/changelog.md
[otel#10906]: https://github.com/open-telemetry/opentelemetry.io/pull/10906
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
