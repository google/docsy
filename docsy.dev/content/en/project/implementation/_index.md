---
title: Implementation
description:
  Code-level structure, Hugo/Docsy templates, SCSS/JS customizations, patches,
  and internal shims
weight: 100
no_list: true
---

## Subsystems

- [Script loading](/project/implementation/script-loading/): the plugin loop's
  shim contract, warning id, build pipeline, and the security rules Docsy's own
  plugins follow

## Patches and workarounds

- [ScrollSpy patch for Bootstrap](/project/implementation/scrollspy-patch/):
  runtime patch to fix Bootstrap ScrollSpy handling of invalid CSS selector IDs
