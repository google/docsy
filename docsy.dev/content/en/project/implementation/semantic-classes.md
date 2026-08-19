---
title: Semantic classes
description:
  Naming and framework-binding conventions for the theme's td- CSS classes
---

For what semantic classes are, the migration scope, and the consumer contract
(public `td-` classes, state attributes, what to update per release), see
[Semantic classes][user-guide] in the user guide.

## Naming

Semantic classes introduced by the migration use `td-`-prefixed light BEM
(`td-block__element`), with modifier suffixes reserved for **variants**, for
example `td-sidebar-nav--search-disabled`. Legacy `td-` names (like
`td-navbar-cover`) remain until their components migrate.

## State styling

When migrating a component, style each state through a semantic attribute, never
a state class. Reuse the ARIA state attribute the markup already exposes for
assistive technology when one applies: keying styling on it keeps visual and
accessibility state inseparable by construction. For a state with no ARIA home,
introduce a `data-td-*` attribute and announce it in the component's upgrade
post.

## Skins

A **skin** binds the semantic classes to a styling source: in CSS only, never in
markup. The current skin binds to Bootstrap:

- **Component styling binds by reference**: `@extend .breadcrumb`-style rules,
  so styling tracks the installed Bootstrap version instead of drifting as a
  vendored copy.
- **State rules are written out** against Bootstrap's component CSS variables
  (`--bs-*` by default), since Bootstrap defines state styling only in compound
  selectors (like `.breadcrumb-item.active`), which `@extend` can't reference.
  Each written-out rule carries a `BS mirror: FILE SELECTOR` comment;
  `grep -rn 'BS mirror:' theme/assets/scss/td/` inventories the mirrored rule
  bodies to re-check on a Bootstrap upgrade.

[user-guide]: /docs/content/lookandfeel/#semantic-classes
