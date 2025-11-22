---
title: Sidebar-root feature development notes
date: 2025-10-13
updated: 2025-11-12
---

## Feature description and plan

<details>
<summary>Original feature description and plan</summary>

> This is a feature description for issue [Side-nav support for section-as-root
> #2328][#2328], and some development notes. During development, this document
> will serve as development notes. During that time, this document might not
> fully capture the final implementation.
>
> Add a `sidebar_root_for` front matter parameter that can be set in a section's
> `_index.md` to make that section the root of sidebar navigation, useful for
> deeply nested documentation sections.

</details>
<br />

This page is a feature description and plan that also serves as a record of the
work for issue [Side-nav support for section-as-root][#2328].

Implementation has landed in the following PRs:

- [Support non top-level section pages as sidebar roots (#2334)][#2334]
- [Rewrite `sidebar_root:true` as `sidebar_root_for:children` (#2340)][#2340]
- [Add support for `self` sidebar roots (#2341)][#2341]
- [Fix sidebar entry HTML attribute spacing (#2342)][#2342]
- [Relax top-level warning for `children` mode (#2361)][#2361]

The notes below now serve as a record of what shipped and what follow-up
remains.

Summary of the shipped feature:

- Adds a `sidebar_root_for` front matter parameter that can be set in a
  section's `_index.md` to make that section the root of sidebar navigation,
  useful for deeply nested documentation sections.
- Supports two modes:
  - `self`: Rooted sidebar shown for the section itself and all descendants.
  - `children`: Rooted sidebar shown for descendant pages only, not the section
    index page itself.
- Works when `params.ui.sidebar_root_enabled` is set to `true`.
- Coexists with existing `toc_root` behavior; no special interaction required.
- Adds an “up” navigation link in rooted sections, reusing the section heading
  as the link target links to navigate back to the parent section.

Outstanding follow-up items are listed at the end of the document.

## Feature characteristics

- New `sidebar_root_for` parameter set in section `_index.md` with two values:
  - `self`: Rooted sidebar shown for the section itself and all descendants.
  - `children`: Rooted sidebar shown for descendant pages only, not the section
    index page itself.
- Nested `sidebar_root_for` sections are supported: descendant pages use the
  closest ancestor with `sidebar_root_for` set
- Include navigation out of a sidebar-root section.
- Work alongside existing `toc_root` feature (not replace it)
- Warn when `sidebar_root_for` is misconfigured (invalid value, or redundant
  `self` on a top-level section)

## Feature interaction: `toc_root`

Since `sidebar_root_for` sections are always contained within a top-level
section (whether `toc_root` or default), pages only need to determine their
sidebar root within their already-established top-level boundary. No special
interaction handling is required.

> NOTE: it might be possible to merge the two features, but that's a future
> improvement.

## Implementation Changes

### Implementation summary

1. (✅ #2334) Update `layouts/_partials/sidebar.html`
   - Supports both `children` and `self` values.
   - Traverses ancestors to locate the closest `sidebar_root_for`.
   - Passes the resolved root and cache key to `sidebar-tree.html`.
2. (✅ #2334) Enhance `layouts/_partials/sidebar-tree.html`
   - Reuses the section heading link as the “up” affordance back to the parent.
   - Adds `td-sidebar-root-up-icon` styling for rooted sections.
3. (🚧 Optional, not yet implemented) Breadcrumb navigation for rooted sections.
4. (✅ #2334) Use `sidebar_root_for` when computing `$navRoot` inside
   `sidebar-tree.html`.
5. (✅ #2334) Styling updates in `assets/scss/_sidebar-tree.scss`.
6. (✅ #2340, #2341, #2342, #2361) Follow-up refinements:
   - Rename `sidebar_root:true` to `sidebar_root_for: children`.
   - Add support for `sidebar_root_for: self`.
   - Fix attribute spacing issues in the rendered HTML.
   - Avoid redundant warnings when a root section declares
     `sidebar_root_for: children`.

## Testing considerations

- [ ] Test with deeply nested sections (3+ levels).
- [ ] Verify caching works correctly with `sidebar_root_for` active
      (`params.ui.sidebar_cache_limit` scenarios).
- [ ] Ensure foldable menu behavior still works (`sidebar_menu_foldable`).
- [ ] Test with both `sidebar_menu_compact` enabled and disabled.
- [ ] Confirm interactions with `toc_root` remain unchanged.
- [ ] Exercise dark-mode and language-menu combinations to catch regressions
      introduced in neighboring work (#2339, #2355).

## Docsy User Guide usage example

Assume the following front matter in the User Guide:
`/content/en/docs/content/_index.md`:

```yaml
---
title: Content and Customization
# ...
sidebar_root_for: children
---
```

**With `sidebar_root_for: children`:**

- Viewing `/docs/content/` index → shows **full** docs navigation
- Viewing `/docs/content/content/` → shows **rooted** sidebar (only "Content and
  Customization" and its children)

**With `sidebar_root_for: self`:**

- Viewing `/docs/content/` index → shows **rooted** sidebar
- Viewing `/docs/content/content/` → shows **rooted** sidebar
- Both the section itself and descendants get the focused navigation

### Follow-up tasks

- [x] Step 1: Support both `"self"` and `"children"` (done in #2334/#2341).
- [x] Step 2: Provide an “up” link using the rooted heading (done in #2334).
- [ ] Step 3: (Optional) Add breadcrumb navigation UI for rooted sections.
- [x] Step 4: Use `sidebar_root_for` when computing `$navRoot` (done in #2334).
- [x] Step 5: Add CSS styling for up-arrow icon (done in #2334).
- [ ] Documentation: add user-guide section covering configuration and examples.
- [ ] Example site: update `docsy-example` to showcase the feature.
- [ ] Testing: run the scenarios listed above and capture results in the wrapup
      report.
- [x] Adjust top-level warning: allow `sidebar_root_for: children` on root
      sections without emitting the current warning (done in #2361).

[#2328]: https://github.com/google/docsy/issues/2328
[#2334]: https://github.com/google/docsy/pull/2334
[#2340]: https://github.com/google/docsy/pull/2340
[#2341]: https://github.com/google/docsy/pull/2341
[#2342]: https://github.com/google/docsy/pull/2342
[#2361]: https://github.com/google/docsy/pull/2361
