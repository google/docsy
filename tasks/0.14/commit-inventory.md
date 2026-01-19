---
title: 0.14 commit inventory
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `4149391` on `main`.

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
- `48f9c75` Update Serbian (cyrillic & latin)
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

## CI / tooling only

- `66a0c7d` Update README, contrib docs for deployment and release process
- `6c1e391` [CI] Drop temp site-copy code and more
- `4137043` Temporary: copy public to root while build config is in transition
- `cb75133` [CI] Move Netlify config to docsy.dev subrepo

## Dependency / package configuration updates

- `b7f7335` (`#2428`) Update all packages other than Hugo
- `9334955` (`#2430`) Upgrade Hugo to 0.154.3
- `b52c265` (`#2432`) Update Hugo to 0.154.5

[commits since v0.13.0]: https://github.com/google/docsy/compare/v0.13.0...main
