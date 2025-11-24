---
title: 0.13 issue mapping
date: 2025-11-12
cSpell:ignore: docsy sidemenu FOUC katex mhchem sidenav
---

> Report refreshed for commits through `52aa677` on `main`.

Mapping [commits since v0.12.0][] to their originating issues (when known).

## Dependency bundles (no linked issues)

| Commits                                                                                                                 | PRs                                                                                               | Summary                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `0f05574`, `db526c5`, `614e7ec`, `f8f02e7`, `4296f5c`, `a301026`, `8103455`, `29bd311`, `d57e6a8`, `09ed8ba`, `53cfee7` | `#2269`, `#2274`, `#2275`, `#2286`, `#2304`, `#2316`, `#2315`, `#2320`, `#2335`, `#2348`, `#2350` | Dependency / tooling updates (no originating issues called out) |

## Feature & bug-fix commits

| Commit    | PR      | Summary                                                                               | Originating Issue(s) | Notes                                                                    |
| --------- | ------- | ------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------ |
| `627a0df` | `#2173` | Add Occitan locale                                                                    | `#2173`              | Locale request                                                           |
| `a824b2a` | `#2278` | Trim whitespace emitted by `card` shortcode                                           | —                    | Bug fix with no linked issue mentioned                                   |
| `433ddb6` | `#2282` | User guide cleanup for alert shortcode usage                                          | `#941`               | Docs follow-up to new alert shortcode                                    |
| `b3e4ccf` | `#941`  | Markdown-friendly alert shortcode                                                     | `#941`               | Addresses the long-standing alert shortcode request                      |
| `aa0f617` | `#2285` | Accessibility color fixes, typography defaults                                        | `#2285`              | Improves contrast per accessibility discussions                          |
| `4323d09` | `#2287` | Bootstrap ScrollSpy support for TOC                                                   | `#349`, `#2289`      | Implements navigation indication & scroll tuning per release tracker     |
| `3a5cfea` | `#2290` | ScrollSpy style refinements                                                           | `#349`, `#2289`      | Visual polish for ScrollSpy rollout                                      |
| `55db259` | `#2291` | Drop smooth scrolling in ScrollSpy                                                    | `#349`, `#2289`      | Fixes ScrollSpy focus/scroll issues                                      |
| `2cb3725` | `#2292` | TOC title styling and top-of-page link                                                | `#349`, `#2289`      | Completes ScrollSpy UX fixes                                             |
| `10f7dbe` | `#2301` | Show close icon for open hamburger menu                                               | —                    | Navigation polish, no issue noted                                        |
| `16335ca` | `#2302` | Hamburger focus state tweaks                                                          | —                    | Accessibility polish                                                     |
| `aa8a701` | `#2303` | Always display language menu in navbar                                                | `#2035`, `#2001`     | Resolves narrow-display language menu issues listed in tracker           |
| `1502423` | `#2318` | User guide: disable sidebar caching                                                   | —                    | Documentation correctness                                                |
| `26120fc` | `#2313` | Update Simplified Chinese translations                                                | `#2313`              | Translation update request                                               |
| `7fbdc2f` | `#2322` | Include print pages in link checks                                                    | —                    | CI/docs maintenance                                                      |
| `4c5c15b` | `#2324` | Fix flag image link in user guide                                                     | —                    | Broken asset fix                                                         |
| `82d492b` | `#2325` | User guide dropdown link/style fixes                                                  | `#941`               | Aligns docs with new alert shortcode guidance                            |
| `b2e919e` | `#2331` | Update Ukrainian translations                                                         | `#2331`              | Translation update                                                       |
| `2139e32` | `#2337` | Reorganize NPM dependencies; rename site folder to `docsy.dev`                        | `#2115`              | Resolves npm optional/peer dependency errors                             |
| `b23e453` | `#2334` | Enable non top-level section sidebar roots                                            | `#2328`              | Implements `sidebar_root_for` feature                                    |
| `1b961c9` | `#2338` | Changelog update noting NPM-support fix                                               | `#2115`              | Release notes maintenance                                                |
| `d8f54d5` | `#2339` | Fix language menu padding in foldable sidebar                                         | `#2001`              | Resolves sidemenu spacing bug                                            |
| `2e5ebc4` | `#2340` | Rewrite `sidebar_root:true` configuration                                             | `#2328`              | Migration step for sidebar-root feature                                  |
| `cf3a3d7` | `#2341` | Support `self` sidebar roots                                                          | `#2328`              | Completes sidebar-root capabilities                                      |
| `f0c0575` | `#2342` | Sidebar entry attribute spacing fix                                                   | `#2328`              | Cleanup from sidebar-root implementation                                 |
| `84526b3` | `#2361` | Skip warning when root section uses `sidebar_root_for:children`                       | `#2328`              | Refines sidebar-root UX for top-level docs sites                         |
| `e1bdb4e` | `#2343` | Prevent dark-mode flash (initial fix)                                                 | —                    | Dark-mode FOUC fix (issue number not referenced)                         |
| `1b8ccc3` | `#2355` | Dark-mode flash follow-up                                                             | —                    | Completes dark-mode FOUC fix (issue number not referenced)               |
| `3722bf7` | `#2349` | Blog: Upgrading to Docsy 0.12.0 from 0.11.0                                           | `#2349`              | Adds detailed upgrade guidance for prior release                         |
| `95de91f` | `#2356` | Normalize upgrade blog titles/slugs                                                   | `#2356`              | Keeps blog naming consistent across releases                             |
| `2523a8b` | `#2363` | Sidebar-root feature & 0.13-wrapup planning and tasks                                 | `#2328`, `#2266`     | Creates wrapup reports and updates sidebar-root feature plan             |
| `468c081` | `#2364` | Sidebar-root user guide and CHANGELOG additions                                       | `#2328`              | Adds user guide documentation and changelog entry for sidebar-root       |
| `0571623` | `#2366` | Adjust ScrollSpy TOC tracking and add documentation                                   | `#349`, `#2289`      | ScrollSpy tuning improvements and comprehensive documentation            |
| `4d72b4b` | `#2367` | Update build & release related scripts and contrib docs                               | `#2266`              | CI/tooling maintenance for release process                               |
| `ada99ce` | `#2369` | UG adjustments to existing content, and task-file updates                             | —                    | Documentation maintenance and task file updates                          |
| `f23f1ab` | `#2370` | Implement a workaround to ScrollSpy's heading-ID problem                              | `#349`, `#2289`      | ScrollSpy workaround for invalid CSS selector IDs                        |
| `7727c79` | `#2371` | Add \_param.html shortcode                                                            | —                    | New shortcode for parameter substitution                                 |
| `c2a8453` | `#2372` | Navigation page: switch to navbar & sidenav terminology                               | —                    | Documentation terminology cleanup                                        |
| `0d54010` | `#2373` | Fix: ensure ScrollSpy can always find the TOC                                         | `#349`, `#2289`      | ScrollSpy robustness fix for missing TOC elements                        |
| `217fde4` | `#2374` | Chore: refcache refresh and 404 fixes                                                 | —                    | Maintenance: link checking and refcache updates                          |
| `9da0354` | `#2375` | Chore: refcache refresh and more                                                      | —                    | Maintenance: refcache and documentation updates                          |
| `2c84dd3` | `#2376` | Fix: TOC entry colors in dark mode                                                    | —                    | Dark mode color contrast improvements                                    |
| `40e1ad0` | `#2379` | Fix: TOC entry color contrast, even better                                            | —                    | Further dark mode color contrast refinements                             |
| `4990bc1` | `#2380` | Add color adjustments for dark mode - EXPERIMENTAL                                    | —                    | Experimental dark mode color adjustment system                           |
| `8979f79` | `#2381` | Apply dark-mode color adjustments to the UG                                           | —                    | Apply experimental dark mode adjustments to user guide                   |
| `2570ad5` | `#2382` | Add ScrollSpy patch workflow and runtime patch                                        | `#349`, `#2289`      | ScrollSpy patch for heading ID issues                                    |
| `ef50fd1` | `#2383` | Remove ScrollSpy safeIds workaround and related docs                                  | `#349`, `#2289`      | Cleanup: remove workaround after patch implementation                    |
| `5891c6c` | `#2384` | Refactor dark mode config, add experimental style-only option                         | —                    | Dark mode configuration improvements                                     |
| `3abe89f` | `#2385` | Fix spacing of page meta re. dark-mode                                                | —                    | Dark mode spacing fix                                                    |
| `c37aad0` | `#2387` | Add dark mode support for Google search                                               | —                    | Dark mode support for search functionality                               |
| `5333387` | `#2276` | KaTeX: drop js script files, use build-time rendering instead                         | `#2276`              | Major change: build-time rendering of mathematical and chemical formulae |
| `3ac1dd1` | `#2394` | Scripts partial adj. for Katex, drop mhchem                                           | `#2276`              | Follow-up to KaTeX build-time rendering                                  |
| `0002c6a` | `#2395` | Add note about section-specific passthrough hook usage, fix KaTeX display elt width   | `#2276`              | KaTeX documentation and fixes                                            |
| `ee89baf` | `#2393` | Add missing link def to navigation.md, fix linter config, and more                    | —                    | Documentation maintenance                                                |
| `26a0c57` | `#2392` | docs: swap slugs for 'adding-content' and 'content'                                   | —                    | Documentation reorganization                                             |
| `ef1109c` | `#2391` | Add implementation docs and update changelog for 0.13.0                               | `#2266`              | Release documentation                                                    |
| `ee765f4` | `#2386` | Improved light/dark-mode docs                                                         | —                    | Documentation improvements                                               |
| `4145478` | `#2388` | Site docs reorg in prep for more design and ops docs, also updated tasks/0.13.0 pages | —                    | Documentation reorganization                                             |
| `a2cd44e` | `#2398` | Update changelogs and reports for KaTeX build-time rendering                          | `#2266`              | Release documentation maintenance                                        |
| `f2b0c56` | `#2399` | Add TOC style customization section to navigation docs                                | `#2289`              | Documentation for TOC customization (ScrollSpy follow-up)                |
| `14c2061` | `#2400` | Add i18n support for table of contents labels                                         | `#2289`              | Localization support for TOC "On this page" and "Top of page"            |
| `bd7f023` | `#2402` | Document i18n support for TOC labels, update task docs                                | `#2289`              | Documentation follow-up for TOC i18n                                     |
| `d3b5749` | `#2405` | Document `notoc`, and update TOC CSS class names                                      | `#2289`              | Documentation for `notoc` parameter and TOC CSS class updates            |
| `f59cbb8` | `#2406` | [UX] Show left/right scroll indicators for the navbar on mobile                       | —                    | UX improvement for mobile navbar scrolling                               |
| `39ee7ca` | `#2407` | Update changelog for navbar scroll indicators and notoc docs                          | `#2406`, `#2405`     | Release documentation maintenance                                        |
| `15a3823` | `#2408` | Change link title from 'Documentation' to 'Docs'                                      | —                    | Documentation terminology update                                         |
| `ec833d2` | `#2368` | [Blog] Release 0.13.0 report and upgrade guide                                        | `#2266`              | Release blog post for 0.13.0                                             |
| `52aa677` | `#2411` | Pre-0.13.0 release adjustments                                                        | `#2266`              | Final release preparation adjustments                                    |

## CI / tooling commits

| Commit    | PR      | Summary                                                 | Originating Issue(s) | Notes                                      |
| --------- | ------- | ------------------------------------------------------- | -------------------- | ------------------------------------------ |
| `818f62f` | `#2344` | Script to embed build ID in version                     | —                    | Helper tooling                             |
| `0e2ad18` | `#2351` | Release process instruction updates                     | `#2266`              | Prep work for 0.13 release tracker         |
| `595b25e` | `#2362` | Rework `fix:version` for pre-commit                     | `#2266`              | Makes build-version helper usable in hooks |
| `4d72b4b` | `#2367` | Update build & release related scripts and contrib docs | `#2266`              | CI/tooling maintenance for release process |
| `f016114` | `#2397` | Skip version check on main branch in pre-push hook      | —                    | CI/tooling: pre-push hook improvement      |

[commits since v0.12.0]: https://github.com/google/docsy/compare/v0.12.0...main
