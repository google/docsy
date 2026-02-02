---
title: 0.14 issue mapping
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `3753ff78` on `main`.

Mapping [commits since v0.13.0][] to their originating issues (when known).

## Dependency bundles (no linked issues)

| Commits                                     | PRs                                | Summary                                      |
| ------------------------------------------- | ---------------------------------- | -------------------------------------------- |
| `b7f7335`, `9334955`, `b52c265`, `6399194a` | `#2428`, `#2430`, `#2432`, `#2486` | Dependency updates (Hugo and other packages) |

## Feature & bug-fix commits

| Commit     | PR      | Summary                                                                                               | Originating Issue(s) | Notes                                                |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| `69d4d6c`  | `#2415` | Update changelog anchors, release process docs, and vers to 0.13.1-dev                                | —                    | Release process documentation                        |
| `5fd8175`  | `#2427` | docsy.dev: set to_year to "present", and shortcode cleanup                                            | —                    | Documentation maintenance                            |
| `53d4393`  | `#2434` | Update alias format in get started page so it works as a fallback too                                 | —                    | Documentation fix                                    |
| `bf9f559`  | `#2435` | chore: complete German localization                                                                   | —                    | Translation update                                   |
| `8607ceb`  | —       | i18n: zh_cn and zh_tw                                                                                 | —                    | Translation updates for Chinese locales              |
| `48f9c75`  | —       | Update Serbian (cyrillic & latin)                                                                     | —                    | Translation updates                                  |
| `13ba7b2`  | —       | Add author for Serbian translations                                                                   | —                    | Translation metadata                                 |
| `02479b2`  | —       | Add feedback section and table of contents to Bengali localization                                    | —                    | Translation additions                                |
| `9cca91a`  | —       | Update feedback section translations in Bengali localization                                          | —                    | Translation updates                                  |
| `1465641`  | —       | Fix newline issue in Bengali localization for table of contents                                       | —                    | Translation bug fix                                  |
| `73a7b3f`  | —       | Add Hugo Markdown-style alert support and docs                                                        | —                    | Documentation feature                                |
| `68cb0e7`  | —       | Add docs version as a badge                                                                           | —                    | Documentation enhancement                            |
| `884d714`  | —       | Add version to docs landing page, bump version to 0.14.0-dev                                          | —                    | Version tracking                                     |
| `62d4aac`  | —       | Add site build info and build documentation                                                           | —                    | Documentation addition                               |
| `4a11ed0`  | —       | Add AGENTS.md                                                                                         | —                    | Documentation for AI agents                          |
| `e1bb622`  | —       | chore: Rename 'site' docs section to 'project' and update links                                       | —                    | Documentation reorganization                         |
| `113cc39`  | —       | Move pages to About section                                                                           | —                    | Documentation reorganization                         |
| `8a2528f`  | —       | Update links                                                                                          | —                    | Documentation maintenance                            |
| `a1075cf`  | —       | Migrate i18n files from TOML to YAML and add conversion scripts                                       | —                    | i18n format migration                                |
| `a989a32`  | —       | Fix left sidebar height                                                                               | —                    | UI fix                                               |
| `29bc71f`  | —       | Add support for custom attributes in blockquote alerts                                                | —                    | Alert feature enhancement                            |
| `c9f4299`  | —       | Add alert label translations to i18n files                                                            | —                    | i18n translation additions                           |
| `3396c03`  | —       | Convert i18n/uk.toml to .yaml                                                                         | —                    | i18n format migration                                |
| `ec122d8`  | —       | Delete i18n/uk.toml since we have a .yaml format now                                                  | —                    | i18n format migration cleanup                        |
| `f81406a`  | —       | Convert most shortcode alerts to markdown, and more                                                   | —                    | Alert conversion to Markdown                         |
| `a600e53`  | —       | Convert Bengali translations from TOML to YAML                                                        | —                    | i18n format migration                                |
| `95c6a2d`  | —       | Add Bengali translations for alert labels                                                             | —                    | i18n translation additions                           |
| `d2a63db`  | —       | Address Hugo deprecation msg related to mounts                                                        | —                    | Hugo deprecation fix                                 |
| `93fe8ba`  | —       | Convert Chinese i18n files from TOML to YAML                                                          | —                    | i18n format migration                                |
| `81613ae`  | —       | Convert Japanese translations from TOML to YAML                                                       | —                    | i18n format migration                                |
| `23fea73`  | —       | Add alert labels and all-rights-reserved in Japanese                                                  | —                    | i18n translation additions                           |
| `1a25ddf`  | —       | Update i18n/ja.yaml                                                                                   | —                    | i18n translation updates                             |
| `6cbe364`  | —       | Add alert label translations for zh-cn and zh-tw                                                      | —                    | i18n translation additions                           |
| `9dab6fe`  | —       | zh-cn, use `note: 说明`                                                                               | —                    | i18n translation updates                             |
| `e79719f`  | —       | Create he.toml                                                                                        | —                    | New locale addition                                  |
| `731531a`  | —       | Update i18n/he.toml                                                                                   | —                    | i18n translation updates                             |
| `f4526dc`  | —       | Update i18n/he.toml                                                                                   | —                    | i18n translation updates                             |
| `0d7d78d`  | —       | Convert Hebrew translation file to YAML                                                               | —                    | i18n format migration                                |
| `ebc264e`  | —       | Add alert and table of contents labels to Hebrew i18n                                                 | —                    | i18n translation additions                           |
| `791a707`  | —       | Convert all remaining i18n files to YAML, add helper scripts                                          | —                    | i18n format migration                                |
| `93322ff`  | —       | Fix comment across locales                                                                            | —                    | i18n translation fixes                               |
| `1e093f3`  | —       | Namespace SCSS files, and make adjustments                                                            | —                    | SCSS refactoring                                     |
| `396ad66`  | —       | Fix broken link Bump versions of mentioned prerequisites                                              | —                    | Documentation fix                                    |
| `b3cb2a7`  | —       | Update Swagger UI customization instructions                                                          | —                    | Documentation fix                                    |
| `6f8f85a`  | —       | Add nested `sidebar_root_for` to docs                                                                 | —                    | Documentation addition                               |
| `11bc51a`  | `#2470` | bugfix: nested sidebar_root_for                                                                       | —                    | Bug fix                                              |
| `bf7c497f` | —       | Update 0.14.0 release notes and changelog details                                                     | —                    | Release documentation                                |
| `4f855a02` | `#2480` | Refactor blocks/cover and pageinfo shortcodes                                                         | `#939`               | **Breaking**: shortcode content processing           |
| `61282a64` | `#2465` | KaTeX use: move media type declaration to theme's config file                                         | —                    | KaTeX configuration improvement                      |
| `e7b91366` | `#2481` | docsy.dev: minor reorg and refactor SCSS                                                              | —                    | SCSS refactoring (docsy.dev)                         |
| `b1b03b95` | `#2487` | docsy.dev config: switch to using sites.matrix                                                        | —                    | Configuration update                                 |
| `c3035f02` | `#2488` | Reformat and clarify Docsy 'Get Started' pages                                                        | —                    | Documentation clarification                          |
| `7cc86a3e` | `#2489` | Refactor navbar and layout SCSS, update examples                                                      | —                    | SCSS refactoring (navbar)                            |
| `ca4a67eb` | `#2490` | Add new Norwegian translations for UI and alerts                                                      | —                    | Translation addition (Norwegian)                     |
| `5ac2b165` | `#2491` | Refactor extra and footer SCSS, add footer border                                                     | —                    | SCSS refactoring (footer)                            |
| `5365d35d` | `#2494` | chore(hugo.yaml): cleanup config and add some explanation                                             | —                    | Configuration cleanup                                |
| `34ab5de0` | `#2498` | Fix grammatical error in Norwegian translation                                                        | —                    | Translation fix                                      |
| `061b3762` | `#2483` | Use "front matter" rather than "frontmatter"                                                          | —                    | Documentation wording                                |
| `2aef9560` | `#2502` | Update 0.14 release notes, Hugo upgrade guide, style adjustments, and more                            | —                    | Release documentation                                |
| `09b9a9f1` | `#2495` | Only set td-sidebar-root-up-icon for links that are the tree root                                     | —                    | Sidebar UX fix                                       |
| `3753ff78` | `#2505` | Reorganize SCSS, fix scroll padding, normalize blocks-shortcode heading IDs and keep old IDs as alias | —                    | SCSS partial, fragment scroll, shortcode doc aliases |

## CI / tooling commits

| Commit     | PR  | Summary                                                            | Originating Issue(s) | Notes                           |
| ---------- | --- | ------------------------------------------------------------------ | -------------------- | ------------------------------- |
| `66a0c7d`  | —   | Update README, contrib docs for deployment and release process     | —                    | Contributing documentation      |
| `6c1e391`  | —   | [CI] Drop temp site-copy code and more                             | —                    | CI cleanup                      |
| `4137043`  | —   | Temporary: copy public to root while build config is in transition | —                    | CI temporary fix                |
| `cb75133`  | —   | [CI] Move Netlify config to docsy.dev subrepo                      | —                    | CI configuration reorganization |
| `ba7d0ec`  | —   | Tasks, plan, and draft blog post for 0.14.0                        | —                    | Release preparation             |
| `08fe966`  | —   | Add CI/CD info about Prettier and i18n directory                   | —                    | CI/CD documentation             |
| `08a9569`  | —   | Upgrade Prettier                                                   | —                    | Tooling update                  |
| `1dfd1a0`  | —   | Format                                                             | —                    | Code formatting                 |
| `83db5b9`  | —   | Format                                                             | —                    | Code formatting                 |
| `ef0e8b8`  | —   | Update compare-i18n-toml-yaml.pl                                   | —                    | Tooling update                  |
| `1560cec`  | —   | Update refresh-sass-variables.pl                                   | —                    | Tooling update                  |
| `7bcae61`  | —   | Don't format \_variables_forward.scss                              | —                    | Tooling configuration           |
| `199468a`  | —   | Create scss-namespace.plan.md                                      | —                    | Planning documentation          |
| `24c01d23` | —   | Add read-only contents permission to workflows                     | —                    | CI security configuration       |

[commits since v0.13.0]: https://github.com/google/docsy/compare/v0.13.0...main
