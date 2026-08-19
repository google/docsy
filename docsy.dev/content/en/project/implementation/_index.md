---
title: Implementation
linkTitle: Implementation
description:
  Code-level structure and conventions, Hugo/Docsy templates, SCSS/JS
  customizations, patches, and internal shims.
weight: 100
no_list: true
---

This section documents code-level implementation details for the Docsy website,
including patches, internal shims, and customizations.

## Conventions

- [Semantic classes](/project/implementation/semantic-classes/) — Naming,
  state-styling, and framework-binding conventions for the theme's `td-` CSS
  classes

## Patches and workarounds

- [ScrollSpy patch for Bootstrap](/project/implementation/scrollspy-patch/) —
  Runtime patch to fix Bootstrap ScrollSpy handling of invalid CSS selector IDs
