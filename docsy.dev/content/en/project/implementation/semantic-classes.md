---
title: Semantic classes
description:
  Naming, state-styling, and framework-binding conventions for the theme's td-
  CSS classes
---

<span class="badge bg-info text-bg-info">As of Docsy 0.17.0</span>

Docsy is migrating its chrome markup — navbar, sidebars, breadcrumb, content
frame, footer — from Bootstrap-specific classes to theme-owned **semantic
classes**, one component at a time. The `td-` classes are the durable vocabulary
of Docsy's markup and part of its [public customization surface][public]; how
they are styled is a [private implementation detail][private] that can change
per release. Each release that migrates a component lists its selector changes
in an [upgrade post][].

## Naming

Semantic classes use `td-`-prefixed light BEM — `td-block__element` — with
modifier suffixes reserved for **variants**, for example
`td-sidebar-nav--search-disabled`. States are not modifiers; they are keyed on
attributes, as follows.

## State styling

Component states are styled through semantic attributes, not classes:

- `aria-current="page"` for the current item in a navigation set, such as
  breadcrumbs
- `aria-expanded` for the disclosure state of a toggle
- `aria-disabled` for disabled interactive elements
- `data-td-*`, the reserved lane for states that have no ARIA home

ARIA mandates these attributes regardless of styling, so a parallel state class
such as `active` would be pure redundancy. Keying styling on the attribute keeps
visual state and accessibility state inseparable by construction.

## Skins

A **skin** binds the semantic classes to a styling source — in CSS only, never
in markup. The current skin binds to Bootstrap:

- **Component styling binds by reference**: `@extend .breadcrumb`-style rules,
  so styling tracks the installed Bootstrap version instead of drifting as a
  vendored copy.
- **State rules are written out** against Bootstrap's `--bs-*` component
  variables, since Bootstrap defines state styling only in compound selectors
  (like `.breadcrumb-item.active`), which `@extend` can't reference. Each
  written-out rule carries a `BS mirror: FILE SELECTOR` comment;
  `grep -rn 'BS mirror:' theme/assets/scss/td/` inventories the mirrored rule
  bodies to re-check on a Bootstrap upgrade.

## What this means for your site

- To style Docsy chrome, target the `td-` classes and the state attributes
  above. Don't rely on framework classes in Docsy-emitted markup — they are
  removed as each component migrates.
- During the transition, project **SCSS** rules that match old Bootstrap class
  names keep applying to migrated components, as a side effect of the `@extend`
  binding. This keep-alive is incidental and temporary: migrate your selectors
  when an upgrade post lists them.
- CSS or JS outside the theme's Sass pipeline — plain CSS files, `querySelector`
  calls, tests — breaks at each component's migration; consult the old → new
  selector table in the release's upgrade post.

[private]: /project/about/changelog/#private
[public]: /project/about/changelog/#public
[upgrade post]: /tags/upgrade/
