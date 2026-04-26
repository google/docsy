---
title: 0.15 issue mapping
date: 2026-04-25
lastmod: 2026-04-26
range: v0.14.3..main
last-main-commit: 343d6154
cSpell:ignore: opentelemetry
---

## Scope

Mapping covers first-parent commits in [v0.14.3...main][] through [343d6154][].

## Mapping

| PR and title                                                           | Linked issue (link source)                         | Notes                                                |
| ---------------------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| [#2082][]: Add Azerbaijan language                                     | None found (N/A)                                   | Locale contribution                                  |
| [#2555][]: Set version to 0.14.3-dev                                   | [#2501][] (Release prep scope)                     | Maintenance after 0.14.3                             |
| [#2556][]: Reorg deployment docs, normalize links                      | None found (N/A)                                   | Docs-only cleanup                                    |
| [#2557][]: Add version menu to site, improve version partial           | None found (N/A)                                   | User-facing site/version menu work                   |
| [#2558][]: Replace bogus placeholder locale by fr                      | None found (N/A)                                   | Site i18n setup                                      |
| [#2559][]: Document new `deploy/prod` branch                           | None found (N/A)                                   | Release-process docs                                 |
| [#2560][]: Update bug report template                                  | None found (N/A)                                   | Admin                                                |
| [#2562][]: Ensure `.td-main > .row` grows vertically                   | [#2561][] (PR body, closing issue)                 | Fixed in 0.14.3 release path; still in current range |
| [#2563][]: Add doc-rooted site example version, update guidance        | #2504, #2499, [#2492][] (PR body, closing issues)  | Part of doc-rooted tracker                           |
| [#2564][]: Use `TD_BUILD_CTX` for doc-rooted builds                    | [#2504][] (Inferred from neighboring tracker work) | Build-support follow-up                              |
| [#2565][]: Update doc-rooted configs to avoid root index render clash  | [#2504][] (PR body)                                | `card` now uses `$.Page.RenderString`                |
| [#2567][]: Remove `sidebar_root_for` user-guide docs                   | None found (N/A)                                   | Follow-up docs cleanup                               |
| [#2568][]: Dedup site homepages for doc-rooted sites                   | [#2504][] (PR body)                                | Doc-rooted support                                   |
| [#2571][]: Update `deploy/prod` to 0.14.3                              | [#2501][] (Release prep scope)                     | Branch maintenance                                   |
| [#2572][]: Clarify release process and branch model                    | None found (N/A)                                   | Release-process docs                                 |
| [#2573][]: Sync `release` and `deploy/prod` branches                   | [#2501][] (Release prep scope)                     | Branch maintenance                                   |
| [#2574][]: Link `release` and `deploy/prod` back into main ancestry    | [#2501][] (Release prep scope)                     | Branch maintenance                                   |
| [#2575][]: Format project about docs and add project link              | None found (N/A)                                   | Docs cleanup                                         |
| [#2576][]: Footer/community links: target and `rel` fixes              | #1380, [#2133][] (PR body, closing issues)         | User-facing link behavior                            |
| [#2577][]: Record ancestry with `release` and `deploy/prod`            | [#2501][] (Release prep scope)                     | Branch ancestry                                      |
| [#2579][]: Use canonical URL to contributing page and simplify aliases | [#2504][] (PR body)                                | Cleanup in support of doc-rooted work                |
| [#2580][]: Resolve community/footer links under permalinks             | [#2504][] (PR body)                                | Potentially breaking multilingual path behavior      |
| [#2583][]: Add Romanian locale                                         | External: opentelemetry.io#4593 (PR body)          | Locale contribution                                  |
| [#2584][]: Add markdownlint rule for no site-local external URLs       | None found (N/A)                                   | Link hygiene                                         |
| [#2585][]: Update NPM packages, Hugo to 0.157.0, drop `cpy-cli`        | None found (N/A)                                   | Dependency/tooling bundle                            |
| [#2586][]: Update version+variant menu, add `siteGetPage`, `tdVersion` | [#2504][] (PR body)                                | Not client-facing for release notes                  |
| [#2587][]: Finalize doc-rooted configuration explanation               | [#2504][] (PR body)                                | Documentation follow-up                              |
| [#2591][]: Add missing German alert label translations                 | None found (N/A)                                   | i18n fix                                             |
| [#2597][]: Agent-friendly support plan and Markdown output phase 1     | #2596, #726 (PR body)                              | Experimental Markdown outputs and tests              |
| [#2599][]: Drop `Markdown` output format since Hugo defines it         | [#2596][] (PR body)                                | Cleanup after [#2597][]                              |
| [#2600][]: Trim titles/descriptions in `layouts/all.md`                | [#2596][] (PR body)                                | Markdown output quality                              |
| [#2601][]: Add View Markdown page-meta link                            | [#2596][] (PR body)                                | User-facing discovery link                           |
| [#2602][]: Add `post_view_markdown` to all i18n files                  | [#2596][] (PR body)                                | Translation baseline                                 |
| [#2603][]: Add Romanian translation for "View Markdown"                | [#2583][] (PR body)                                | Follow-up to Romanian locale                         |
| [#2604][]: Create `az.yaml` from TOML                                  | [#2082][] (PR body)                                | Format-only follow-up                                |
| [#2605][]: Add LLMS output and `llms.txt` support                      | [#2596][] (PR body)                                | Experimental agent support                           |
| [#2606][]: Project docs: allow default outputs, including Markdown     | [#2596][] (PR body)                                | Raises measured AFDocs score                         |
| [#2610][]: 0.15 release notes, audit, and wrapup content               | [#2501][] (Release prep scope)                     | Blog draft, changelog, refcache, link sweep, reports |

## Linked Issues

- [#2501][]: Release 0.15.0 preparation, open.
- [#2504][]: Reintroduce support for doc-rooted sites, open.
- [#2596][]: Add support for agent-friendly content generation, open.
- [#726][]: Add golden tests, open.
- [#2492][]: Top-level section landing pages are always rooted in a docs-only
  site, closed.
- [#2499][]: Pages missing in the section index of docs-only sites, closed.
- [#2561][]: Layout still not right for some docs pages around md breakpoint,
  closed.
- [#1380][]: Support `rel` attributes in footer links, closed.
- [#2133][]: Community/footer links should not assume all links are external,
  closed.

[#1380]: https://github.com/google/docsy/issues/1380
[#2082]: https://github.com/google/docsy/pull/2082
[#2133]: https://github.com/google/docsy/issues/2133
[#2492]: https://github.com/google/docsy/issues/2492
[#2499]: https://github.com/google/docsy/issues/2499
[#2501]: https://github.com/google/docsy/issues/2501
[#2504]: https://github.com/google/docsy/issues/2504
[#2555]: https://github.com/google/docsy/pull/2555
[#2556]: https://github.com/google/docsy/pull/2556
[#2557]: https://github.com/google/docsy/pull/2557
[#2558]: https://github.com/google/docsy/pull/2558
[#2559]: https://github.com/google/docsy/pull/2559
[#2560]: https://github.com/google/docsy/pull/2560
[#2561]: https://github.com/google/docsy/issues/2561
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
[#2596]: https://github.com/google/docsy/issues/2596
[#2597]: https://github.com/google/docsy/pull/2597
[#2599]: https://github.com/google/docsy/pull/2599
[#2600]: https://github.com/google/docsy/pull/2600
[#2601]: https://github.com/google/docsy/pull/2601
[#2602]: https://github.com/google/docsy/pull/2602
[#2603]: https://github.com/google/docsy/pull/2603
[#2604]: https://github.com/google/docsy/pull/2604
[#2605]: https://github.com/google/docsy/pull/2605
[#2606]: https://github.com/google/docsy/pull/2606
[#2610]: https://github.com/google/docsy/pull/2610
[#726]: https://github.com/google/docsy/issues/726
[343d6154]: https://github.com/google/docsy/commit/343d6154
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
