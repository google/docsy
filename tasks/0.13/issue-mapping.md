---
title: 0.13 issue mapping
date: 2025-11-12
cSpell:ignore: docsy sidemenu FOUC
---

> Report refreshed for commits through `595b25e` on `main`.

Mapping [commits since v0.12.0][] to their originating issues (when known).

## Dependency bundles (no linked issues)

| Commits                                                                                                                 | PRs                                                                                               | Summary                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `0f05574`, `db526c5`, `614e7ec`, `f8f02e7`, `4296f5c`, `a301026`, `8103455`, `29bd311`, `d57e6a8`, `09ed8ba`, `53cfee7` | `#2269`, `#2274`, `#2275`, `#2286`, `#2304`, `#2316`, `#2315`, `#2320`, `#2335`, `#2348`, `#2350` | Dependency / tooling updates (no originating issues called out) |

## Feature & bug-fix commits

| Commit    | PR      | Summary                                                         | Originating Issue(s) | Notes                                                                |
| --------- | ------- | --------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------- |
| `627a0df` | `#2173` | Add Occitan locale                                              | `#2173`              | Locale request                                                       |
| `a824b2a` | `#2278` | Trim whitespace emitted by `card` shortcode                     | —                    | Bug fix with no linked issue mentioned                               |
| `433ddb6` | `#2282` | User guide cleanup for alert shortcode usage                    | `#941`               | Docs follow-up to new alert shortcode                                |
| `b3e4ccf` | `#941`  | Markdown-friendly alert shortcode                               | `#941`               | Addresses the long-standing alert shortcode request                  |
| `aa0f617` | `#2285` | Accessibility color fixes, typography defaults                  | `#2285`              | Improves contrast per accessibility discussions                      |
| `4323d09` | `#2287` | Bootstrap ScrollSpy support for TOC                             | `#349`, `#2289`      | Implements navigation indication & scroll tuning per release tracker |
| `3a5cfea` | `#2290` | ScrollSpy style refinements                                     | `#349`, `#2289`      | Visual polish for ScrollSpy rollout                                  |
| `55db259` | `#2291` | Drop smooth scrolling in ScrollSpy                              | `#349`, `#2289`      | Fixes ScrollSpy focus/scroll issues                                  |
| `2cb3725` | `#2292` | TOC title styling and top-of-page link                          | `#349`, `#2289`      | Completes ScrollSpy UX fixes                                         |
| `10f7dbe` | `#2301` | Show close icon for open hamburger menu                         | —                    | Navigation polish, no issue noted                                    |
| `16335ca` | `#2302` | Hamburger focus state tweaks                                    | —                    | Accessibility polish                                                 |
| `aa8a701` | `#2303` | Always display language menu in navbar                          | `#2035`, `#2001`     | Resolves narrow-display language menu issues listed in tracker       |
| `1502423` | `#2318` | User guide: disable sidebar caching                             | —                    | Documentation correctness                                            |
| `26120fc` | `#2313` | Update Simplified Chinese translations                          | `#2313`              | Translation update request                                           |
| `7fbdc2f` | `#2322` | Include print pages in link checks                              | —                    | CI/docs maintenance                                                  |
| `4c5c15b` | `#2324` | Fix flag image link in user guide                               | —                    | Broken asset fix                                                     |
| `82d492b` | `#2325` | User guide dropdown link/style fixes                            | `#941`               | Aligns docs with new alert shortcode guidance                        |
| `b2e919e` | `#2331` | Update Ukrainian translations                                   | `#2331`              | Translation update                                                   |
| `2139e32` | `#2337` | Reorganize NPM dependencies; rename site folder to `docsy.dev`  | `#2115`              | Resolves npm optional/peer dependency errors                         |
| `b23e453` | `#2334` | Enable non top-level section sidebar roots                      | `#2328`              | Implements `sidebar_root_for` feature                                |
| `1b961c9` | `#2338` | Changelog update noting NPM-support fix                         | `#2115`              | Release notes maintenance                                            |
| `d8f54d5` | `#2339` | Fix language menu padding in foldable sidebar                   | `#2001`              | Resolves sidemenu spacing bug                                        |
| `2e5ebc4` | `#2340` | Rewrite `sidebar_root:true` configuration                       | `#2328`              | Migration step for sidebar-root feature                              |
| `cf3a3d7` | `#2341` | Support `self` sidebar roots                                    | `#2328`              | Completes sidebar-root capabilities                                  |
| `f0c0575` | `#2342` | Sidebar entry attribute spacing fix                             | `#2328`              | Cleanup from sidebar-root implementation                             |
| `84526b3` | `#2361` | Skip warning when root section uses `sidebar_root_for:children` | `#2328`              | Refines sidebar-root UX for top-level docs sites                     |
| `e1bdb4e` | `#2343` | Prevent dark-mode flash (initial fix)                           | —                    | Dark-mode FOUC fix (issue number not referenced)                     |
| `1b8ccc3` | `#2355` | Dark-mode flash follow-up                                       | —                    | Completes dark-mode FOUC fix (issue number not referenced)           |
| `3722bf7` | `#2349` | Blog: Upgrading to Docsy 0.12.0 from 0.11.0                     | `#2349`              | Adds detailed upgrade guidance for prior release                     |
| `95de91f` | `#2356` | Normalize upgrade blog titles/slugs                             | `#2356`              | Keeps blog naming consistent across releases                         |

## CI / tooling commits

| Commit    | PR      | Summary                             | Originating Issue(s) | Notes                                      |
| --------- | ------- | ----------------------------------- | -------------------- | ------------------------------------------ |
| `818f62f` | `#2344` | Script to embed build ID in version | —                    | Helper tooling                             |
| `0e2ad18` | `#2351` | Release process instruction updates | `#2266`              | Prep work for 0.13 release tracker         |
| `595b25e` | `#2362` | Rework `fix:version` for pre-commit | `#2266`              | Makes build-version helper usable in hooks |

[commits since v0.12.0]: https://github.com/google/docsy/compare/v0.12.0...main
