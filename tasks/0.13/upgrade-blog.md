---
title: Upgrade to Docsy 0.13
linkTitle: Upgrade to 0.13
date: 2025-11-11
description: Key changes and upgrade tips for moving from Docsy 0.12 to 0.13.
draft: true
---

> Draft refreshed against `main` up to commit `595b25e`.

> **Draft**: Populate with screenshots, code samples, and final copy once
> follow-up actions in [wrapup-report.md](wrapup-report.md) are complete.

## TL;DR

- Sidebar navigation gains `sidebar_root_for` for scoped trees and quieter
  warnings for docs roots.
- ScrollSpy and TOC receive usability fixes.
- Language selector is always visible; dark-mode flashing fixed.
- Alert shortcode now accepts Markdown content.
- Hugo, Bootstrap, and Node dependencies bumped—run through the checklist below.

## Navigation & UX Improvements

<!-- TODO: Summarize language menu changes (#2035/#2001), ScrollSpy updates (#349/#2289), hamburger icon tweak (#2301), and dark-mode fixes. Include before/after visuals. -->

## Content Authoring Updates

<!-- TODO: Detail new alert shortcode syntax (#941) and related documentation cleanups. Mention card shortcode whitespace adjustment (#2278). -->

## Dependency & Tooling Updates

<!-- TODO: Cover Hugo 0.152.2, Bootstrap 5.3.8, Node LTS alignment, npm dependency graph changes (#2115), and CI build ID tooling (#2344/#2351/#2362). -->

## Upgrade Checklist

1. Update Docsy module / npm dependency to v0.13.0.
2. Review `config` for language menu defaults (`ui.sidebar_lang_menu`).
3. Adjust alert shortcode usage to new Markdown-friendly form.
4. Validate custom ScrollSpy overrides and TOC styles.
5. Rebuild assets (Bootstrap, Sass) and re-run linters/tests.

<!-- TODO: Expand checklist with sidebar-root adoption steps and translation verification guidance. -->

## Looking Ahead

- Outstanding work items tracked in [wrapup-report.md](wrapup-report.md).
- Watch the 0.13 release tracker
  ([google/docsy#2266](https://github.com/google/docsy/issues/2266)) for status
  updates.
- Provide feedback via
  [GitHub Discussions](https://github.com/google/docsy/discussions).
- Plan a cross-link to the new
  [Upgrade to Docsy 0.12.0](../docsy.dev/content/en/blog/2025/0.12.0.md) article
  once both posts are live.
