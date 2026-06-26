---
title: 0.16 coverage ledger
date: 2026-06-15
lastmod: 2026-06-25
range: v0.15.0..main
last-main-commit: b3ce9274
cSpell:ignore: favicons gohugoio
---

The coverage ledger: one row per landed change in [v0.15.0...main][] through
[b3ce9274][], mapped to where each is covered. This is the objective "is
everything covered, in the right place?" snapshot and the entry point for each
refresh — add a row per new commit and route it.

All 23 commits in range are squash-merged PRs (one commit per PR), so the
first-parent spine and the raw range are identical; every subject carries its
`(#NNNN)` PR number.

## Legend

- **Class**: `break` breaking change · `feat` new feature · `maint` maintenance
  · `docs` docs/site · `tool` tooling/release.
- **Coverage** (Docs / CL / Blog / Hugo): `done` covered, no further work ·
  `rel` covered, follow-up expected · `todo` needed, not yet done · `WIP` in
  progress · `N/A` not applicable.
- **Docs** = user guide · **CL** = [changelog][0.16.0-changelog] · **Blog** =
  [release report][] · **Hugo** = [Hugo upgrade post][hugo upgrade guide].

## Ledger

| Change               | Issue     | Summary                                         | Class | Docs | CL   | Blog | Hugo | Notes                                     |
| -------------------- | --------- | ----------------------------------------------- | ----- | ---- | ---- | ---- | ---- | ----------------------------------------- |
| `843c5345` [#2641][] | [#2617][] | Move theme into `theme/` (TOF phases 0–4b)      | break | done | done | done | N/A  | Install-path change; pairs w/ [#2645][]   |
| `94f94145` [#2645][] | [#2617][] | npm workspaces; simplify theme-deps install     | maint | done | done | done | N/A  | Packaging cleanup; pairs w/ [#2641][]     |
| `5c5733de` [#2647][] | [#2593][] | Hugo 0.158.0; raise theme min; language APIs    | break | done | done | done | done | Min-Hugo bump 0.146→0.158                 |
| `3e76f1f2` [#2648][] | [#2581][] | Upgrade to Hugo 0.160.1                         | maint | done | done | done | done | Combined 0.159.x + 0.160.x                |
| `f22a352d` [#2649][] | [#2581][] | Project Hugo build 0.163.1; imaging migration   | maint | done | done | done | done | `imaging.quality` config migration        |
| `acf3453b` [#2653][] | [#2595][] | Remove default favicons; modernize docsy.dev    | break | done | done | done | N/A  | ~18 bundled icons removed                 |
| `c0f2ddc8` [#2654][] | [#2357][] | Discover/link `static/` favicons; icon helper   | feat  | done | done | done | N/A  | Zero-config discovery                     |
| `f3128285` [#2656][] | [#2357][] | Square favicon variants; `gen-favicons` CLI     | feat  | done | done | done | N/A  | Refs added this pass                      |
| `4f544377` [#2650][] | —         | Fix double `v` (`@vv0.15.0`) in version docs    | docs  | done | N/A  | N/A  | N/A  | Minor; CL omission by decision            |
| `c2b2c7ad` [#2635][] | —         | Update `start-from-scratch.md`                  | docs  | done | N/A  | N/A  | N/A  | Superseded by [#2650][]                   |
| `de60b6db` [#2632][] | [#2631][] | Examples page to 0.15.0; maintainer notes       | docs  | done | N/A  | N/A  | N/A  | Internal/site                             |
| `33ce90f0` [#2637][] | —         | Update maintainer notes                         | docs  | done | N/A  | N/A  | N/A  | Release-process docs                      |
| `9eedc5a7` [#2651][] | [#2598][] | Netlify badge → canonical URL                   | docs  | done | N/A  | N/A  | N/A  | Site cleanup                              |
| `cfc90204` [#2646][] | [#2617][] | Repo-reorg task docs after monorepo cleanup     | docs  | N/A  | N/A  | N/A  | N/A  | Task docs                                 |
| `d8bd0760` [#2644][] | [#2617][] | TOF plan docs & status — phase 4                | docs  | N/A  | N/A  | N/A  | N/A  | Plan/status docs                          |
| `e20fbd8f` [#2643][] | [#2617][] | TOF tweaks & status — phase 4b                  | docs  | N/A  | N/A  | N/A  | N/A  | Plan/status docs                          |
| `ce9942b8` [#2630][] | [#2501][] | Set version to v0.15.1-dev                      | tool  | N/A  | N/A  | N/A  | N/A  | Release-prep maintenance                  |
| `f5167068` [#2655][] | —         | Isolate deprecation-probe test from output      | tool  | N/A  | N/A  | N/A  | N/A  | Test-only                                 |
| `48e05f5d` [#2658][] | [#2581][] | Project Hugo build 0.163.2 (patch over 0.163.1) | maint | N/A  | done | done | done | PostCSS/Netlify `ERR_ACCESS_DENIED` fix   |
| `6fdfd21b` [#2590][] | —         | Fix and sync the Russian locale                 | maint | N/A  | N/A  | N/A  | N/A  | Community theme i18n (`ru.yaml`)          |
| `487050c2` [#2660][] | [#2659][] | Lean-render mode: drop repeated chrome          | feat  | done | done | done | N/A  | Chrome v1; folded into `shared` [#2662][] |
| `3bcd6e7d` [#2661][] | [#2659][] | full-vs-shared link-check matrix (docsy.dev)    | tool  | N/A  | N/A  | N/A  | N/A  | Internal CI tooling for chrome            |
| `b3ce9274` [#2662][] | [#2659][] | Experimental `shared` chrome build mode         | feat  | done | done | done | N/A  | One feature w/ [#2660][]; off by default  |

## Notes on bundled changes

- **Theme folder move** ([#2641][] + [#2645][]): an install-path **breaking
  change** for all consuming sites, bundled with workspace/tooling reorg and
  `theme/package.json` ownership of Bootstrap and Font Awesome. The install-path
  change is user-facing; workspace mechanics are maintainer-facing.
- **Hugo bumps** ([#2647][], [#2648][], [#2649][], [#2658][]): [#2647][] also
  carries the **breaking** minimum-Hugo bump (0.146.0 → 0.158.0), language-API
  deprecation cleanup, and a deprecation-notice build guard; [#2649][] migrates
  docsy.dev off the deprecated global `imaging.quality` and regenerates
  md-output goldens; [#2658][] moves the project build to 0.163.2 for the
  PostCSS/Netlify `ERR_ACCESS_DENIED` fix.
- **Favicons** ([#2653][], [#2654][], [#2656][]): [#2653][] is **breaking**
  (removes bundled icons) and modernizes docsy.dev's own icons; [#2654][] +
  [#2656][] add the **new** discovery behavior plus the `gen-favicons` CLI.
- **Shared chrome build mode** ([#2660][] + [#2662][]; tooling [#2661][]): one
  experimental user-facing feature (`td.chrome = shared`) delivered across two
  PRs — [#2660][] added the build-time lean-render half and [#2662][] finalized
  it as client-restored `shared` chrome; [#2661][] is the internal
  full-vs-shared link-check matrix. Tracker [#2659][]; the default `full` mode
  is unchanged.

## Linked issues

- [#2615][]: Release 0.16.0 preparation — open (release tracker).
- [#2617][]: Finalize monorepo setup — 26Q2 — open (theme-folder tracker).
- [#2659][]: Lean/shared chrome build mode — open (chrome tracker;
  experimental).
- [#2581][]: Upgrade Hugo from 0.157.0 to latest — closed.
- [#2593][]: Deprecation warnings with Hugo 0.158.0 — closed.
- [#2578][], [#2594][]: contributor language-API PRs ([@deining][]), superseded
  by [#2647][].
- [#2590][]: community Russian-locale sync — PR only (no separate issue).
- [#2595][]: Theme should not have default favicons — closed.
- [#2357][]: Improve favicon support (light/dark mode) — open (26Q3).
- [#2652][]: Stop shipping default favicons — PR closed (superseded by
  [#2654][]).
- [#2598][]: Netlify badge icon returning 404 — closed.
- [#2631][]: Update examples page for 0.15.0 — closed.
- [#2501][]: Release 0.15.0 preparation — closed (milestone 23).
- [#726][]: Add golden tests — open.
- [#2614][]: Improve support for AI-agent doc consumption — open follow-up
  tracker (no commits in this range; phase 2+).

[@deining]: https://github.com/deining
[release report]: ../../../docsy.dev/content/en/blog/2026/0.16.0.md
[hugo upgrade guide]: ../../../docsy.dev/content/en/blog/2026/hugo-0.158.0+.md
[0.16.0-changelog]: ../../../docsy.dev/content/en/project/about/changelog/#next
[#726]: https://github.com/google/docsy/issues/726
[#2357]: https://github.com/google/docsy/issues/2357
[#2501]: https://github.com/google/docsy/issues/2501
[#2578]: https://github.com/google/docsy/pull/2578
[#2581]: https://github.com/google/docsy/issues/2581
[#2590]: https://github.com/google/docsy/pull/2590
[#2593]: https://github.com/google/docsy/issues/2593
[#2594]: https://github.com/google/docsy/pull/2594
[#2595]: https://github.com/google/docsy/issues/2595
[#2598]: https://github.com/google/docsy/issues/2598
[#2614]: https://github.com/google/docsy/issues/2614
[#2615]: https://github.com/google/docsy/issues/2615
[#2617]: https://github.com/google/docsy/issues/2617
[#2631]: https://github.com/google/docsy/issues/2631
[#2652]: https://github.com/google/docsy/pull/2652
[#2630]: https://github.com/google/docsy/pull/2630
[#2632]: https://github.com/google/docsy/pull/2632
[#2635]: https://github.com/google/docsy/pull/2635
[#2637]: https://github.com/google/docsy/pull/2637
[#2641]: https://github.com/google/docsy/pull/2641
[#2643]: https://github.com/google/docsy/pull/2643
[#2644]: https://github.com/google/docsy/pull/2644
[#2645]: https://github.com/google/docsy/pull/2645
[#2646]: https://github.com/google/docsy/pull/2646
[#2647]: https://github.com/google/docsy/pull/2647
[#2648]: https://github.com/google/docsy/pull/2648
[#2649]: https://github.com/google/docsy/pull/2649
[#2650]: https://github.com/google/docsy/pull/2650
[#2651]: https://github.com/google/docsy/pull/2651
[#2653]: https://github.com/google/docsy/pull/2653
[#2654]: https://github.com/google/docsy/pull/2654
[#2655]: https://github.com/google/docsy/pull/2655
[#2656]: https://github.com/google/docsy/pull/2656
[#2658]: https://github.com/google/docsy/pull/2658
[#2659]: https://github.com/google/docsy/issues/2659
[#2660]: https://github.com/google/docsy/pull/2660
[#2661]: https://github.com/google/docsy/pull/2661
[#2662]: https://github.com/google/docsy/pull/2662
[b3ce9274]: https://github.com/google/docsy/commit/b3ce9274
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
