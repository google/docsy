---
title: 0.13 commit inventory
date: 2025-11-12
cSpell:ignore: docsy
---

> Report refreshed for commits through `595b25e` on `main`.

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

## CI / tooling only

- `818f62f` (`#2344`) CI script to add build ID to version string
- `0e2ad18` (`#2351`) Release process documentation and helper scripts
- `595b25e` (`#2362`) Rework `fix:version` script for pre-commit use

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
