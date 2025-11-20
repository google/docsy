---
title: Implementation
linkTitle: Implementation
description:
  Code-level structure and conventions, Hugo/Docsy templates, SCSS/JS
  customizations, patches, and internal shims.
no_list: true
---

This section documents code-level implementation details for the Docsy website,
including patches, internal shims, and customizations.

## Patches and workarounds

- [ScrollSpy patch for Bootstrap]({{< relref "scrollspy-patch" >}}) — Runtime
  patch to fix Bootstrap ScrollSpy handling of invalid CSS selector IDs.
