---
title: Implementation
description:
  Code-level structure and conventions, Hugo/Docsy templates, SCSS/JS
  customizations, patches, and internal shims
weight: 100
no_list: true
---

This section documents code-level implementation details for the Docsy theme and
website, including conventions, patches, and internal shims.

## Conventions

- [Semantic classes](/project/implementation/semantic-classes/): naming and
  framework-binding conventions for the theme's `td-` CSS classes

## Patches and workarounds

- [ScrollSpy patch for Bootstrap](/project/implementation/scrollspy-patch/):
  runtime patch to fix Bootstrap ScrollSpy handling of invalid CSS selector IDs
