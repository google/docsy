---
title: 0.14 commit inventory
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `5365d35` on `main`.

Chronological list of [commits since v0.13.0][], broadly grouped into a few
categories. We'll do a more detailed analysis and groupings when we create the
release-wrapup report, in particular identifying commits that impact theme
client projects.

## Features & fixes

- `69d4d6c` (`#2415`) Update changelog anchors, release process docs, and vers
  to 0.13.1-dev
- `5fd8175` (`#2427`) docsy.dev: set to_year to "present", and shortcode cleanup
- `b7f7335` (`#2428`) Update all packages other than Hugo
- `9334955` (`#2430`) Upgrade Hugo to 0.154.3
- `b52c265` (`#2432`) Update Hugo to 0.154.5
- `53d4393` (`#2434`) Update alias format in get started page so it works as a
  fallback too
- `bf9f559` (`#2435`) chore: complete German localization
- `8607ceb` i18n: zh_cn and zh_tw
- `48f9c75` Update Serbian (Cyrillic & Latin)
- `13ba7b2` Add author for Serbian translations
- `02479b2` Add feedback section and table of contents to Bengali localization
- `9cca91a` Update feedback section translations in Bengali localization
- `1465641` Fix newline issue in Bengali localization for table of contents
- `73a7b3f` Add Hugo Markdown-style alert support and docs
- `68cb0e7` Add docs version as a badge
- `884d714` Add version to docs landing page, bump version to 0.14.0-dev
- `62d4aac` Add site build info and build documentation
- `4a11ed0` Add AGENTS.md
- `e1bb622` chore: Rename 'site' docs section to 'project' and update links
- `113cc39` Move pages to About section
- `8a2528f` Update links
- `a1075cf` Migrate i18n files from TOML to YAML and add conversion scripts
- `a989a32` Fix left sidebar height
- `29bc71f` Add support for custom attributes in blockquote alerts
- `c9f4299` Add alert label translations to i18n files
- `3396c03` Convert i18n/uk.toml to .yaml
- `ec122d8` Delete i18n/uk.toml since we have a .yaml format now
- `f81406a` Convert most shortcode alerts to markdown, and more
- `a600e53` Convert Bengali translations from TOML to YAML
- `95c6a2d` Add Bengali translations for alert labels
- `d2a63db` Address Hugo deprecation msg related to mounts
- `93fe8ba` Convert Chinese i18n files from TOML to YAML
- `81613ae` Convert Japanese translations from TOML to YAML
- `23fea73` Add alert labels and all-rights-reserved in Japanese
- `1a25ddf` Update i18n/ja.yaml
- `6cbe364` Add alert label translations for zh-cn and zh-tw
- `9dab6fe` zh-cn, use `note: 说明`
- `e79719f` Create he.toml
- `731531a` Update i18n/he.toml
- `f4526dc` Update i18n/he.toml
- `0d7d78d` Convert Hebrew translation file to YAML
- `ebc264e` Add alert and table of contents labels to Hebrew i18n
- `791a707` Convert all remaining i18n files to YAML, add helper scripts
- `1dfd1a0` Format
- `08a9569` Upgrade Prettier
- `83db5b9` Format
- `08fe966` Add CI/CD info about Prettier and i18n directory
- `ef0e8b8` Update compare-i18n-toml-yaml.pl
- `93322ff` Fix comment across locales
- `199468a` Create scss-namespace.plan.md
- `1e093f3` Namespace SCSS files, and make adjustments
- `1560cec` Update refresh-sass-variables.pl
- `7bcae61` Don't format \_variables_forward.scss
- `b3cb2a7` Update Swagger UI customization instructions
- `6f8f85a` Add nested `sidebar_root_for` to docs
- `11bc51a` bugfix: nested sidebar_root_for
- `bf7c497f` Update 0.14.0 release notes and changelog details
- `4f855a02` Refactor blocks/cover and pageinfo shortcodes
- `61282a64` (`#2465`) KaTeX use: move media type declaration to theme's config
  file
- `e7b91366` (`#2481`) docsy.dev: minor reorg and refactor SCSS
- `6399194a` (`#2486`) Update devDeps, incl. Hugo to 0.155.0
- `b1b03b95` (`#2487`) docsy.dev config: switch to using sites.matrix
- `c3035f02` (`#2488`) Reformat and clarify Docsy 'Get Started' pages
- `7cc86a3e` (`#2489`) Refactor navbar and layout SCSS, update examples
- `ca4a67eb` (`#2490`) Add new Norwegian translations for UI and alerts
- `5ac2b165` (`#2491`) Refactor extra and footer SCSS, add footer border
- `5365d35d` (`#2494`) chore(hugo.yaml): cleanup config and add some explanation

## CI / tooling only

- `66a0c7d` Update README, contrib docs for deployment and release process
- `6c1e391` [CI] Drop temp site-copy code and more
- `4137043` Temporary: copy public to root while build config is in transition
- `cb75133` [CI] Move Netlify config to docsy.dev subrepo
- `ba7d0ec` Tasks, plan, and draft blog post for 0.14.0
- `08fe966` Add CI/CD info about Prettier and i18n directory
- `08a9569` Upgrade Prettier
- `1dfd1a0` Format
- `83db5b9` Format
- `ef0e8b8` Update compare-i18n-toml-yaml.pl
- `1560cec` Update refresh-sass-variables.pl
- `7bcae61` Don't format \_variables_forward.scss
- `24c01d23` Add read-only contents permission to workflows

## Dependency / package configuration updates

- `b7f7335` (`#2428`) Update all packages other than Hugo
- `9334955` (`#2430`) Upgrade Hugo to 0.154.3
- `b52c265` (`#2432`) Update Hugo to 0.154.5
- `6399194a` (`#2486`) Update devDeps, incl. Hugo to 0.155.0

[commits since v0.13.0]: https://github.com/google/docsy/compare/v0.13.0...main
