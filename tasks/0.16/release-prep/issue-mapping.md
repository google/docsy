---
title: 0.16 issue mapping
date: 2026-06-15
lastmod: 2026-06-15
range: v0.15.0..main
last-main-commit: f3128285
---

## Scope

Mapping covers first-parent commits in [v0.15.0...main][] through [f3128285][].

## Mapping

| PR and title                                                            | Linked issue (link source)                                                            | Notes                                             |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [#2630][]: Set version to v0.15.1-dev                                   | [#2501][] (PR body, Fixes); closes milestone 23                                       | Release-prep maintenance after 0.15.0             |
| [#2632][]: Update examples page to 0.15.0, adjust maintainer notes      | [#2631][] (PR body, Fixes)                                                            | Docs/site, internal-only                          |
| [#2635][]: Update `start-from-scratch.md`                               | None found (N/A)                                                                      | Superseded by [#2650][]                           |
| [#2637][]: Update maintainer notes                                      | None found (N/A)                                                                      | Release-process docs                              |
| [#2641][]: TOF — move theme into `theme/`                               | [#2617][] (PR body, Contributes)                                                      | Breaking install-path change                      |
| [#2643][]: TOF tweaks and status — phase 4b                             | [#2617][] (PR body, Contributes)                                                      | TOF plan/status docs                              |
| [#2644][]: TOF plan docs and status — phase 4 done                      | [#2617][] (PR body, Contributes)                                                      | TOF plan/status docs                              |
| [#2645][]: Restore/add npm workspaces, simplify theme-deps install      | [#2617][] (PR body, Contributes)                                                      | Workspace/tooling reorg                           |
| [#2646][]: Update repo-reorg task docs after monorepo cleanup           | [#2617][] (PR body, Contributes)                                                      | Task docs                                         |
| [#2647][]: Hugo 0.158.0; raise theme min; fix language-API deprecations | [#2593][] (Fixes); [#2581][] (Contributes); [#2578][], [#2594][] (Closes, supersedes) | Breaking minimum-Hugo bump                        |
| [#2648][]: Upgrade to Hugo 0.160.1                                      | [#2581][] (Contributes); [#726][] (towards)                                           | Combined 0.159.x+0.160.x upgrade                  |
| [#2649][]: Upgrade project Hugo build to 0.163.1                        | [#2581][] (Contributes)                                                               | Hugo build + imaging-config migration             |
| [#2650][]: Fix double `v` on version documentation                      | Supersedes [#2635][] (PR body)                                                        | User-facing docs fix (`vv0.15.0`)                 |
| [#2651][]: Switch Netlify badge to canonical URL                        | [#2598][] (PR body, Fixes)                                                            | Site cleanup, internal-only                       |
| [#2653][]: Remove default theme favicons; modernize docsy.dev icons     | [#2595][] (Fixes); [#2357][] (Contributes)                                            | Breaking: default favicons removed                |
| [#2654][]: Discover/link site favicons; icon-generation helper          | [#2357][] (Contributes); [#2652][] (Closes, supersedes)                               | New favicon discovery behavior                    |
| [#2656][]: Favicon square variants and `gen-favicons` CLI               | [#2357][] (PR body, Contributes)                                                      | Extends favicon discovery; npm `gen-favicons` CLI |

## Linked Issues

- [#2615][]: Release 0.16.0 preparation, open (release tracker).
- [#2617][]: Finalize monorepo setup — 26Q2, open (theme-folder/monorepo
  tracker).
- [#2581][]: Upgrade to Hugo from v0.157.0 to latest, closed.
- [#2593][]: Deprecation warnings with Hugo 0.158.0, closed.
- [#2578][], [#2594][]: contributor language-API PRs (by [@deining][]),
  superseded by [#2647][].
- [#2595][]: Theme should not have default favicons, closed.
- [#2357][]: Improve favicon support (light/dark mode), open (milestone 26Q3).
- [#2652][]: Stop shipping default favicons / generate from a source image, PR
  closed (superseded by [#2654][]).
- [#2598][]: Netlify badge icon returning 404, closed.
- [#2631][]: Update examples page for 0.15.0, closed.
- [#2501][]: Release 0.15.0 preparation, closed (milestone 23).
- [#726][]: Add golden tests, open.
- [#2614][]: Improve support for AI-agent doc consumption, open as follow-up
  tracker (no commits in this range; phase 2+).

[@deining]: https://github.com/deining
[#726]: https://github.com/google/docsy/issues/726
[#2357]: https://github.com/google/docsy/issues/2357
[#2501]: https://github.com/google/docsy/issues/2501
[#2578]: https://github.com/google/docsy/pull/2578
[#2581]: https://github.com/google/docsy/issues/2581
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
[#2656]: https://github.com/google/docsy/pull/2656
[f3128285]: https://github.com/google/docsy/commit/f3128285
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
