---
title: Sticky navbar migration plan for 0.15
date: 2026-02-08
status: draft
---

## Context

Docsy base templates render:

- `<header>` with `navbar.html`
- followed by `.td-outer` (main + footer)

Current behavior:

- Navbar is `position: fixed` from `md` up in `assets/scss/td/_nav.scss`.
- `.td-outer` uses viewport-height math in
  `assets/scss/td/_main-container.scss`.
- Sidebars and ToC use navbar-height offsets for sticky positioning
  (`assets/scss/td/_sidebar-tree.scss`, `assets/scss/td/_sidebar-toc.scss`).

## Analysis Summary

Making `body` a flex column is generally safe for the template structure, but it
does **not** remove the need for navbar offsets while the navbar remains fixed.

Reason:

- A fixed navbar is out of normal flow.
- `header` and `.td-outer` do not truly adapt to each other's computed heights
  on desktop when navbar is fixed.

Result:

- Body flex can simplify page-height behavior.
- It cannot by itself replace the navbar offset rules used by sticky sidebars,
  anchor scroll padding, and top content spacing.

## Risk Areas

If `.td-outer` calc math is removed without completing navbar behavior changes:

- Content can slide under the fixed navbar on desktop.
- Sticky left/right sidebars can stick at wrong offsets.
- Anchor scrolling can land headings under the navbar.
- Cover block and docs-like layout spacing can drift.

Affected files include:

- `assets/scss/td/_main-container.scss`
- `assets/scss/td/_nav.scss`
- `assets/scss/td/_sidebar-tree.scss`
- `assets/scss/td/_sidebar-toc.scss`
- `assets/scss/td/_scroll.scss`
- `assets/scss/td/blocks/_cover.scss`
- `assets/scss/td/extra/_main-container.scss`

## Recommendation

Target `position: sticky` for the navbar (desktop) in 0.15. This keeps the
navbar in flow and is the best path to reduce offset/calc complexity.

### Proposed migration sequence

1. Introduce body-level flex layout:
   - `body` as column flex container
   - `.td-outer` as flex child that fills remaining height
2. Switch desktop navbar from `fixed` to `sticky` (`top: 0`, keep z-index and
   width behavior).
3. Revisit spacing/offset rules and remove only now-redundant calculations.
4. Keep explicit navbar-height variables where still needed for consistent
   sticky sidebars and anchor behavior.
5. Remove `td-navbar__main-min-height-mobile` only if no longer referenced after
   the migration.

### Reference snippet (pre-sticky step)

Use this as the initial flex-layout change before switching navbar positioning:

```scss
body {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

body > header {
  flex: 0 0 auto;
}

.td-outer {
  flex: 1 0 auto;
  min-height: 0;
}
```

Note: this snippet improves page-height layout behavior, but does not replace
desktop navbar offset rules while navbar remains `position: fixed`.

## Validation Checklist

- Validate on all base templates:
  - `layouts/baseof.html`
  - `layouts/docs/baseof.html`
  - `layouts/blog/baseof.html`
  - `layouts/swagger/baseof.html`
- Verify breakpoints:
  - mobile (`< md`)
  - tablet/desktop (`>= md`)
  - wide (`>= xl`)
- Verify behaviors:
  - page with left sidebar only
  - page with left + right ToC sidebar
  - no-left-sidebar mode
  - long pages with sticky sidebars
  - anchor-link jump alignment
  - transparent cover navbar mode
  - footer at bottom on short content pages
  - print templates still render correctly

## Non-goal

Do not change visual design language in this migration; focus on layout
mechanics and offset simplification.
