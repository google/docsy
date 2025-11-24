---
title: 0.13 commit inventory
date: 2025-11-12
cSpell:ignore: docsy
---

> Report refreshed for commits through `52aa677` on `main`.

Chronological list of [commits since v0.12.0][], broadly grouped into a few
categories. We'll do a more detailed analysis and groupings when we create the
release-wrapup report, in particular identifying commits that impact theme
client projects.

## Features & fixes

- `627a0df` (`#2173`) Add Occitan locale
- `a824b2a` (`#2278`) Trim whitespace for `card` shortcode
- `433ddb6` (`#2282`) User guide cleanup of alert calls when color is default
- `b3e4ccf` (`#941`) More Markdown-friendly alert shortcode
- `aa0f617` (`#2285`) Accessibility color fixes; fall back to Bootstrap defaults
- `4323d09` (`#2287`) Add Bootstrap ScrollSpy support for active TOC entry
- `3a5cfea` (`#2290`) Refine ScrollSpy style and behavior
- `55db259` (`#2291`) Drop smooth scrolling from ScrollSpy
- `2cb3725` (`#2292`) Refine TOC title styles and add top-of-page link
- `10f7dbe` (`#2301`) Show close icon while hamburger menu is open
- `16335ca` (`#2302`) Hamburger style tweaks for focused state
- `aa8a701` (`#2303`) Always display language menu in navbar
- `1502423` (`#2318`) User guide: prevent caching of sidebar include
- `26120fc` (`#2313`) Update Simplified Chinese translations
- `7fbdc2f` (`#2322`) Include print pages in link checking
- `4c5c15b` (`#2324`) Fix flag image link in user guide shortcode section
- `82d492b` (`#2325`) User guide fixes to dropdown references
- `b2e919e` (`#2331`) Update Ukrainian translations
- `b23e453` (`#2334`) Support non top-level section pages as sidebar roots
- `1b961c9` (`#2338`) Update changelog to mention NPM support fix
- `d8f54d5` (`#2339`) Fix language menu left padding in foldable sidebar
- `2e5ebc4` (`#2340`) Rewrite `sidebar_root:true` as `sidebar_root_for:children`
- `cf3a3d7` (`#2341`) Add support for `self` sidebar roots
- `f0c0575` (`#2342`) Fix sidebar entry HTML attribute spacing
- `84526b3` (`#2361`) Avoid redundant sidebar-root warning for top-level
  sections using `children`
- `e1bdb4e` (`#2343`) Prevent flash when entering dark mode (initial)
- `1b8ccc3` (`#2355`) Prevent flash when entering dark mode (follow-up)
- `3722bf7` (`#2349`) Publish upgrade guide blog for Docsy 0.12.0 → 0.11.0
- `95de91f` (`#2356`) Align upgrade blog slugs/titles for consistency
- `ada99ce` (`#2369`) UG adjustments to existing content, and task-file updates
  pre-0.13.0
- `c2a8453` (`#2372`) Navigation page: switch to navbar & sidenav terminology,
  cleanup markdown
- `217fde4` (`#2374`) Chore: refcache refresh and 404 fixes
- `9da0354` (`#2375`) Chore: refcache refresh and more
- `2523a8b` (`#2363`) Sidebar-root feature & 0.13-wrapup planning and tasks
- `468c081` (`#2364`) Sidebar-root user guide and CHANGELOG additions
- `0571623` (`#2366`) Adjust ScrollSpy TOC tracking and add documentation
- `f23f1ab` (`#2370`) Implement a workaround to ScrollSpy's heading-ID problem
- `7727c79` (`#2371`) Add \_param.html shortcode
- `0d54010` (`#2373`) Fix: ensure ScrollSpy can always find the TOC
- `2c84dd3` (`#2376`) Fix: TOC entry colors in dark mode
- `40e1ad0` (`#2379`) Fix: TOC entry color contrast, even better
- `4990bc1` (`#2380`) Add color adjustments for dark mode - EXPERIMENTAL
- `8979f79` (`#2381`) Apply dark-mode color adjustments to the UG
- `2570ad5` (`#2382`) Add ScrollSpy patch workflow and runtime patch
- `ef50fd1` (`#2383`) Remove ScrollSpy safeIds workaround and related docs
- `5891c6c` (`#2384`) Refactor dark mode config, add experimental style-only
  option
- `3abe89f` (`#2385`) Fix spacing of page meta re. dark-mode
- `c37aad0` (`#2387`) Add dark mode support for Google search
- `5333387` (`#2276`) KaTeX: drop js script files, use build-time rendering
  instead
- `3ac1dd1` (`#2394`) Scripts partial adj. for Katex, drop mhchem
- `0002c6a` (`#2395`) Add note about section-specific passthrough hook usage,
  fix KaTeX display elt width
- `ee89baf` (`#2393`) Add missing link def to navigation.md, fix linter config,
  and more
- `26a0c57` (`#2392`) docs: swap slugs for 'adding-content' and 'content'
- `ef1109c` (`#2391`) Add implementation docs and update changelog for 0.13.0
- `ee765f4` (`#2386`) Improved light/dark-mode docs
- `4145478` (`#2388`) Site docs reorg in prep for more design and ops docs, also
  updated tasks/0.13.0 pages
- `a2cd44e` (`#2398`) Update changelogs and reports for KaTeX build-time
  rendering
- `f2b0c56` (`#2399`) Add TOC style customization section to navigation docs
- `14c2061` (`#2400`) Add i18n support for table of contents labels
- `bd7f023` (`#2402`) Document i18n support for TOC labels, update task docs
- `d3b5749` (`#2405`) Document `notoc`, and update TOC CSS class names
- `f59cbb8` (`#2406`) [UX] Show left/right scroll indicators for the navbar on
  mobile
- `39ee7ca` (`#2407`) Update changelog for navbar scroll indicators and notoc
  docs
- `15a3823` (`#2408`) Change link title from 'Documentation' to 'Docs'
- `ec833d2` (`#2368`) [Blog] Release 0.13.0 report and upgrade guide
- `52aa677` (`#2411`) Pre-0.13.0 release adjustments

## CI / tooling only

- `818f62f` (`#2344`) CI script to add build ID to version string
- `0e2ad18` (`#2351`) Release process documentation and helper scripts
- `595b25e` (`#2362`) Rework `fix:version` script for pre-commit use
- `4d72b4b` (`#2367`) Update build & release related scripts and contrib docs
- `f016114` (`#2397`) Skip version check on main branch in pre-push hook

> Note: `09ed8ba` includes formatting changes beyond dependency bumps; treat as
> mixed when evaluating documentation and changelog needs.

## Dependency / package configuration updates

- `0f05574` (`#2269`) Set NPM package version to next unreleased dev version
  0.12.1-dev
- `db526c5` (`#2274`) Hugo and Netlify NPM packages: update & change to peer;
  docs update included
- `614e7ec` (`#2275`) Update `package.json`: use NPM version of Node
- `f8f02e7` (`#2286`) Update `package.json`, Hugo to 0.147.8
- `4296f5c` (`#2304`) Update Bootstrap to 5.3.7
- `a301026` (`#2316`) Update Bootstrap to 5.3.8
- `8103455` (`#2315`) Update dev and peer dependencies
- `29bd311` (`#2320`) Upgrade dependencies including Hugo to 0.150.1
- `d57e6a8` (`#2335`) Update Hugo to 0.151.0
- `2139e32` (`#2337`) Reorganize NPM dependencies; rename site folder to
  `docsy.dev`
- `09ed8ba` (`#2348`) Upgrade Hugo to 0.151.2 and prettify blog posts (mixed:
  dependency + content formatting)
- `53cfee7` (`#2350`) Update Node LTS version, Hugo to 0.152.2

[commits since v0.12.0]: https://github.com/google/docsy/compare/v0.12.0...main
