---
title: 0.15 commit inventory
date: 2026-04-25
lastmod: 2026-04-25
range: v0.14.3..main
last-main-commit: ee79b52c
---

## Scope

Inventory covers commits in [v0.14.3...main][] through [ee79b52c][].

- First-parent commits: 37
- Raw commits in range: 45
- Baseline: latest official release tag, [v0.14.3][]

The extra raw commits are implementation commits that are also represented by
merge commits, plus two ancestry-recording commits. The grouped inventory below
uses first-parent commits as the release-audit spine.

## User-facing changes

### Agent-friendly and Markdown output

- `4db086c6` [#2597][] Add agent-friendly support plan and phase 1
  implementation of Markdown output
- `79ebf6b5` [#2599][] Drop `Markdown` output format since Hugo defines it
- `c0587d9b` [#2600][] Trim spaces from titles and descriptions in
  `layouts/all.md`
- `6b1698a3` [#2601][] Add View Markdown page-meta link
- `1b7b79a6` [#2602][] Add a first-cut for `post_view_markdown` to all i18n
  files
- `5593f3e0` [#2605][] Add LLMS output and `llms.txt` support, enables it over
  `docsy.dev`
- `c6834296` [#2606][] Project docs: allow default outputs, including Markdown

### Doc-rooted site support

- `601fd46d` [#2563][] Add doc-rooted site example version, update guidance
- `1aae2c92` [#2564][] Use `TD_BUILD_CTX` for doc-rooted builds
- `09a5d40d` [#2565][] Update doc-rooted configs to avoid root index render
  clash, and more
- `bb43d873` [#2567][] Remove `sidebar_root_for` from the user guide and add
  note about creating test pages instead
- `38978ffc` [#2568][] Dedup site homepages for doc-rooted sites
- `f49cf7f9` [#2587][] Finalize explanation of how to configure doc-rooted sites

### Version and variant menus

- `7a82d787` [#2557][] Add version menu to site, improve version partial, and
  more
- `500ee239` [#2586][] Update version and variant menus, add `siteGetPage`
  shortcode, add `tdVersion` struct, and more

### Footer and community links

- `adb0e595` [#2576][] Footer/community links: only open external links in a new
  target, support `rel` for footer
- `b219dab5` [#2580][] Resolve community and footer links paths under any
  permalinks scheme

### Layout and style fixes

- `8a63d915` [#2562][] Ensure `.td-main > .row` grows vertically

## Documentation and site content

- `cf4f514b` [#2556][] Reorganize deployment docs into topic pages and normalize
  links
- `d125b877` [#2559][] Document new `deploy/prod` branch, replacing `release`
- `9142e233` [#2572][] Clarify release process and branch model
- `b4d03ec0` [#2575][] Format project about docs and add link to project section
- `4a09247b` [#2579][] Use canonical URL to contributing page and simplify
  aliases
- `6884d94e` [#2584][] Add markdownlint rule for no `docsy.dev` external URLs
  and fix link

## Internationalization

- `a285c134` [#2558][] Replace bogus placeholder locale by French
- `ce53dcb7` [#2583][] Add Romanian locale
- `f7076ff2` [#2603][] Add Romanian translation for "View Markdown"
- `c3d4b3cc` [#2082][] Add Azerbaijan language
- `97014def` [#2604][] Create `az.yaml` from TOML
- `ee79b52c` [#2591][] Add missing German translations for alert labels

## Dependencies, tooling, and maintenance

- `4edd8f61` [#2555][] Set version to 0.14.3-dev
- `9a285b2d` [#2560][] Update bug report template
- `6ff036a9` [#2571][] Update `deploy/prod` to 0.14.3
- `e4c11620` [#2573][] Sync `release` and `deploy/prod` branches
- `85549b3d` [#2574][] Link `release` and `deploy/prod` back into main ancestry
- `c03fc161` [#2577][] Record ancestry with `release` and `deploy/prod`
- `3bcb7385` [#2585][] Update NPM packages, Hugo to 0.157.0, drop `cpy-cli`

## Mixed-change commits needing review

- [#2565][] includes doc-rooted config work and an internally meaningful `card`
  shortcode rendering change: the shortcode now uses `$.Page.RenderString`
  instead of `markdownify`, which may affect some client overrides or shortcode
  content rendering.
- [#2580][] includes a likely breaking behavior change for multilingual
  community/footer paths.
- [#2586][] combines version/variant menu UX, `tdVersion` config structure,
  `siteGetPage`, scripts, tests, and docs. Current review treats these changes
  as not client-facing for 0.15 release notes.
- [#2597][] combines the Markdown output feature, `docsy.dev` enablement, tests,
  and task plans.
- [#2605][] combines `llms.txt`, Markdown output refinements, tests,
  dependencies, and a temporary Hugo scrollspy escaping workaround.

[#2082]: https://github.com/google/docsy/pull/2082
[#2555]: https://github.com/google/docsy/pull/2555
[#2556]: https://github.com/google/docsy/pull/2556
[#2557]: https://github.com/google/docsy/pull/2557
[#2558]: https://github.com/google/docsy/pull/2558
[#2559]: https://github.com/google/docsy/pull/2559
[#2560]: https://github.com/google/docsy/pull/2560
[#2562]: https://github.com/google/docsy/pull/2562
[#2563]: https://github.com/google/docsy/pull/2563
[#2564]: https://github.com/google/docsy/pull/2564
[#2565]: https://github.com/google/docsy/pull/2565
[#2567]: https://github.com/google/docsy/pull/2567
[#2568]: https://github.com/google/docsy/pull/2568
[#2571]: https://github.com/google/docsy/pull/2571
[#2572]: https://github.com/google/docsy/pull/2572
[#2573]: https://github.com/google/docsy/pull/2573
[#2574]: https://github.com/google/docsy/pull/2574
[#2575]: https://github.com/google/docsy/pull/2575
[#2576]: https://github.com/google/docsy/pull/2576
[#2577]: https://github.com/google/docsy/pull/2577
[#2579]: https://github.com/google/docsy/pull/2579
[#2580]: https://github.com/google/docsy/pull/2580
[#2583]: https://github.com/google/docsy/pull/2583
[#2584]: https://github.com/google/docsy/pull/2584
[#2585]: https://github.com/google/docsy/pull/2585
[#2586]: https://github.com/google/docsy/pull/2586
[#2587]: https://github.com/google/docsy/pull/2587
[#2591]: https://github.com/google/docsy/pull/2591
[#2597]: https://github.com/google/docsy/pull/2597
[#2599]: https://github.com/google/docsy/pull/2599
[#2600]: https://github.com/google/docsy/pull/2600
[#2601]: https://github.com/google/docsy/pull/2601
[#2602]: https://github.com/google/docsy/pull/2602
[#2603]: https://github.com/google/docsy/pull/2603
[#2604]: https://github.com/google/docsy/pull/2604
[#2605]: https://github.com/google/docsy/pull/2605
[#2606]: https://github.com/google/docsy/pull/2606
[ee79b52c]: https://github.com/google/docsy/commit/ee79b52c
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
[v0.14.3]: https://github.com/google/docsy/releases/tag/v0.14.3
