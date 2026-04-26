---
title: 0.15 issue mapping
date: 2026-04-25
lastmod: 2026-04-25
range: v0.14.3..main
last-main-commit: ee79b52c
---

## Scope

Mapping covers first-parent commits in [v0.14.3...main][] through
[ee79b52c][].

## Mapping

| Commit | PR | Title | Linked issue or tracker | Source | Notes |
| --- | --- | --- | --- | --- | --- |
| `4edd8f61` | #2555 | Set version to 0.14.3-dev | #2501 | Release prep scope | Maintenance after 0.14.3 |
| `cf4f514b` | #2556 | Reorg deployment docs, normalize links | None found | PR body | Docs-only cleanup |
| `7a82d787` | #2557 | Add version menu to site, improve version partial | None found | PR body | User-facing site/version menu work |
| `a285c134` | #2558 | Replace bogus placeholder locale by fr | None found | PR body | Site i18n setup |
| `d125b877` | #2559 | Document new `deploy/prod` branch | None found | PR metadata | Release-process docs |
| `9a285b2d` | #2560 | Update bug report template | None found | PR metadata | Admin |
| `8a63d915` | #2562 | Ensure `.td-main > .row` grows vertically | #2561 | PR body, closing issue | Fixed in 0.14.3 release path; still in current range |
| `601fd46d` | #2563 | Add doc-rooted site example version, update guidance | #2504, #2499, #2492 | PR body, closing issues | Part of doc-rooted tracker |
| `1aae2c92` | #2564 | Use `TD_BUILD_CTX` for doc-rooted builds | #2504 | Inferred from neighboring tracker work | Build-support follow-up |
| `09a5d40d` | #2565 | Update doc-rooted configs to avoid root index render clash | #2504 | PR body | Also changes `card` shortcode rendering |
| `bb43d873` | #2567 | Remove `sidebar_root_for` user-guide docs | None found | PR body | Follow-up docs cleanup |
| `38978ffc` | #2568 | Dedup site homepages for doc-rooted sites | #2504 | PR body | Doc-rooted support |
| `6ff036a9` | #2571 | Update `deploy/prod` to 0.14.3 | #2501 | Release prep scope | Branch maintenance |
| `9142e233` | #2572 | Clarify release process and branch model | None found | PR metadata | Release-process docs |
| `e4c11620` | #2573 | Sync `release` and `deploy/prod` branches | #2501 | Release prep scope | Branch maintenance |
| `85549b3d` | #2574 | Link `release` and `deploy/prod` back into main ancestry | #2501 | Release prep scope | Branch maintenance |
| `b4d03ec0` | #2575 | Format project about docs and add project link | None found | PR metadata | Docs cleanup |
| `adb0e595` | #2576 | Footer/community links: target and `rel` fixes | #1380, #2133 | PR body, closing issues | User-facing link behavior |
| `c03fc161` | #2577 | Record ancestry with `release` and `deploy/prod` | #2501 | Release prep scope | Branch ancestry |
| `4a09247b` | #2579 | Use canonical URL to contributing page and simplify aliases | #2504 | PR body | Cleanup in support of doc-rooted work |
| `b219dab5` | #2580 | Resolve community/footer links under permalinks | #2504 | PR body | Potentially breaking multilingual path behavior |
| `6884d94e` | #2584 | Add markdownlint rule for no site-local external URLs | None found | PR body | Link hygiene |
| `3bcb7385` | #2585 | Update NPM packages, Hugo to 0.157.0, drop `cpy-cli` | None found | PR body, dependency label | Dependency/tooling bundle |
| `500ee239` | #2586 | Update version+variant menu, add `siteGetPage`, `tdVersion` | #2504 | PR body | Includes v-prefix behavior change |
| `f49cf7f9` | #2587 | Finalize doc-rooted configuration explanation | #2504 | PR body | Documentation follow-up |
| `4db086c6` | #2597 | Agent-friendly support plan and Markdown output phase 1 | #2596, #726 | PR body | Experimental Markdown outputs and tests |
| `79ebf6b5` | #2599 | Drop `Markdown` output format since Hugo defines it | #2596 | PR body | Cleanup after #2597 |
| `c0587d9b` | #2600 | Trim titles/descriptions in `layouts/all.md` | #2596 | PR body | Markdown output quality |
| `6b1698a3` | #2601 | Add View Markdown page-meta link | #2596 | PR body | User-facing discovery link |
| `1b7b79a6` | #2602 | Add `post_view_markdown` to all i18n files | #2596 | PR body | Translation baseline |
| `ce53dcb7` | #2583 | Add Romanian locale | External: opentelemetry.io#4593 | PR body | Locale contribution |
| `f7076ff2` | #2603 | Add Romanian translation for "View Markdown" | #2583 | PR body | Follow-up to Romanian locale |
| `c3d4b3cc` | #2082 | Add Azerbaijan language | None found | PR metadata | Locale contribution |
| `97014def` | #2604 | Create `az.yaml` from TOML | #2082 | PR body | Format-only follow-up |
| `5593f3e0` | #2605 | Add LLMS output and `llms.txt` support | #2596 | PR body | Experimental agent-friendly support |
| `c6834296` | #2606 | Project docs: allow default outputs, including Markdown | #2596 | PR body | Raises measured agent-friendly score |
| `ee79b52c` | #2591 | Add missing German alert label translations | None found | PR body | i18n fix |

## Linked Issues

- #2501: Release 0.15.0 preparation, open.
- #2504: Reintroduce support for doc-rooted sites, open.
- #2596: Add support for agent-friendly content generation, open.
- #726: Add golden tests, open.
- #2492: Top-level section landing pages are always rooted in a docs-only site,
  closed.
- #2499: Pages missing in the section index of docs-only sites, closed.
- #2561: Layout still not right for some docs pages around md breakpoint,
  closed.
- #1380: Support `rel` attributes in footer links, closed.
- #2133: Community/footer links should not assume all links are external,
  closed.

[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
[ee79b52c]: https://github.com/google/docsy/commit/ee79b52c
