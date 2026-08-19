---
title: Semantic classes
description:
  Naming and framework-binding conventions for the theme's td- CSS classes
---

<span class="badge bg-info text-bg-info">As of Docsy 0.17.0</span>

Docsy is migrating its chrome markup (navbar, sidebars, breadcrumb, content
frame, footer) from Bootstrap-specific classes to theme-owned semantic classes,
one component at a time. This page holds the theme-internal conventions; for the
consumer contract (what sites may rely on and what to update per release), see
[Semantic classes][user-guide] in the user guide.

## Naming

Semantic classes use `td-`-prefixed light BEM (`td-block__element`), with
modifier suffixes reserved for **variants**, for example
`td-sidebar-nav--search-disabled`.

## State styling

Component states are styled through semantic attributes, never state classes:
`aria-current`, `aria-expanded`, `aria-disabled`, and the `data-td-*` lane for
states with no ARIA home. ARIA mandates these attributes regardless of styling,
so a parallel state class such as `active` would be pure redundancy. Keying
styling on the attribute keeps visual state and accessibility state inseparable
by construction.

## Skins

A **skin** binds the semantic classes to a styling source: in CSS only, never in
markup. The current skin binds to Bootstrap:

- **Component styling binds by reference**: `@extend .breadcrumb`-style rules,
  so styling tracks the installed Bootstrap version instead of drifting as a
  vendored copy.
- **State rules are written out** against Bootstrap's `--bs-*` component
  variables, since Bootstrap defines state styling only in compound selectors
  (like `.breadcrumb-item.active`), which `@extend` can't reference. Each
  written-out rule carries a `BS mirror: FILE SELECTOR` comment;
  `grep -rn 'BS mirror:' theme/assets/scss/td/` inventories the mirrored rule
  bodies to re-check on a Bootstrap upgrade.

[user-guide]: /docs/content/lookandfeel/#semantic-classes
