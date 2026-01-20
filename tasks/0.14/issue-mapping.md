---
title: 0.14 issue mapping
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `4149391` on `main`.

Mapping [commits since v0.13.0][] to their originating issues (when known).

## Dependency bundles (no linked issues)

| Commits                         | PRs                       | Summary                                      |
| ------------------------------- | ------------------------- | -------------------------------------------- |
| `b7f7335`, `9334955`, `b52c265` | `#2428`, `#2430`, `#2432` | Dependency updates (Hugo and other packages) |

## Feature & bug-fix commits

| Commit    | PR      | Summary                                                                | Originating Issue(s) | Notes                                   |
| --------- | ------- | ---------------------------------------------------------------------- | -------------------- | --------------------------------------- |
| `69d4d6c` | `#2415` | Update changelog anchors, release process docs, and vers to 0.13.1-dev | —                    | Release process documentation           |
| `5fd8175` | `#2427` | docsy.dev: set to_year to "present", and shortcode cleanup             | —                    | Documentation maintenance               |
| `53d4393` | `#2434` | Update alias format in get started page so it works as a fallback too  | —                    | Documentation fix                       |
| `bf9f559` | `#2435` | chore: complete German localization                                    | —                    | Translation update                      |
| `8607ceb` | —       | i18n: zh_cn and zh_tw                                                  | —                    | Translation updates for Chinese locales |
| `48f9c75` | —       | Update Serbian (cyrillic & latin)                                      | —                    | Translation updates                     |
| `13ba7b2` | —       | Add author for Serbian translations                                    | —                    | Translation metadata                    |
| `02479b2` | —       | Add feedback section and table of contents to Bengali localization     | —                    | Translation additions                   |
| `9cca91a` | —       | Update feedback section translations in Bengali localization           | —                    | Translation updates                     |
| `1465641` | —       | Fix newline issue in Bengali localization for table of contents        | —                    | Translation bug fix                     |
| `73a7b3f` | —       | Add Hugo Markdown-style alert support and docs                         | —                    | Documentation feature                   |
| `68cb0e7` | —       | Add docs version as a badge                                            | —                    | Documentation enhancement               |
| `884d714` | —       | Add version to docs landing page, bump version to 0.14.0-dev           | —                    | Version tracking                        |
| `62d4aac` | —       | Add site build info and build documentation                            | —                    | Documentation addition                  |
| `4a11ed0` | —       | Add AGENTS.md                                                          | —                    | Documentation for AI agents             |
| `e1bb622` | —       | chore: Rename 'site' docs section to 'project' and update links        | —                    | Documentation reorganization            |
| `113cc39` | —       | Move pages to About section                                            | —                    | Documentation reorganization            |
| `8a2528f` | —       | Update links                                                           | —                    | Documentation maintenance               |

## CI / tooling commits

| Commit    | PR  | Summary                                                            | Originating Issue(s) | Notes                           |
| --------- | --- | ------------------------------------------------------------------ | -------------------- | ------------------------------- |
| `66a0c7d` | —   | Update README, contrib docs for deployment and release process     | —                    | Contributing documentation      |
| `6c1e391` | —   | [CI] Drop temp site-copy code and more                             | —                    | CI cleanup                      |
| `4137043` | —   | Temporary: copy public to root while build config is in transition | —                    | CI temporary fix                |
| `cb75133` | —   | [CI] Move Netlify config to docsy.dev subrepo                      | —                    | CI configuration reorganization |

[commits since v0.13.0]: https://github.com/google/docsy/compare/v0.13.0...main
