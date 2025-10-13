---
title: Sidebar-root feature development notes
date: 2025-10-13
---

# Sidebar-root feature development notes

<!-- cSpell:ignore sidenav -->

This is a feature description for issue [Sidenav support for section-as-root
#2328][#2328], and some development notes. Being development notes, they might
not fully capture the final implementation.

Add a `sidebar_root` front matter parameter that can be set in a section's
`_index.md` to make that section the root of sidebar navigation, useful for
deeply nested documentation sections.

## Feature characteristics

- New `sidebar_root: true` parameter set in section `_index.md`. This marks the
  section as a sidebar root.
- When viewing pages **under** a sidebar root section (not the section index
  page), show only that section and descendants in the sidebar. That is, the
  sidebar becomes rooted in this designated sidebar root.
- When viewing a sidebar-root section index page, the parent's sidebar tree is
  shown.
- Include navigation out of a sidebar-root section.
- Work alongside existing `toc_root` feature (not replace it)
- Warn if `sidebar_root` is set on a top-level section (including site home in
  docs-only sites)

## Feature interaction: `toc_root`

Since `sidebar_root` sections are always contained within a top-level section
(whether `toc_root` or default), pages only need to determine their sidebar root
within their already-established top-level boundary. No special interaction
handling is required.

> NOTE: it might be possible to merge the two features, but that's a future
> improvement.

## Implementation Changes

### 1. Update `layouts/_partials/sidebar.html` - Find sidebar root and update cache key

- Walk up page ancestors to find section with `sidebar_root: true`
- Use sidebar_root section's permalink as cache key
- Warn if `sidebar_root` is set on a top-level section
- Pass `sidebarRoot` to `sidebar-tree.html` as parameter

### 2. Add link back to sidebar-root section index page

The current implementation of the sidebar tree, already has the sidebar tree
"heading" as a link. This can naturally be used to link back to the sidebar-root
section index page.

**In `layouts/_partials/sidebar-tree.html`:**

- When `sidebar_root` is active, add a link at the top of the sidebar navigation
- Link should point to the parent section of the sidebar_root
- Use the `td-sidebar-root-up-icon` CSS class for the up-arrow icon
- Style the link to be visually distinct from regular navigation items

### 3. Modify `layouts/_partials/sidebar-tree.html` - Add breadcrumb navigation (OPTIONAL)

- When a `sidebar_root` is active (not the top-level section), add a breadcrumb
  section
- Show "← Back to [Parent Section]" link(s) above the main navigation tree
- Use appropriate styling to distinguish from regular navigation items

### 4. Modify `layouts/_partials/sidebar-tree.html` - Use sidebar_root for $navRoot (COMPLETED)

- Receive `sidebarRoot` as parameter from sidebar.html
- Use `sidebarRoot` as `$navRoot` when provided
- No duplicate ancestor walk needed (already done in sidebar.html)

### 5. Add CSS styling (COMPLETED)

**In `assets/scss/_sidebar-tree.scss`:**

- Created `td-sidebar-root-up-icon` class with `::after` pseudo-element
- Uses Font Awesome caret-up icon
- Consistent spacing and alignment with other sidebar icons

## Testing Considerations

- [ ]Test with deeply nested sections (3+ levels)
- [ ] Verify caching works correctly with sidebar_root active
- [ ] Ensure foldable menu behavior still works
- [ ] Test with both `sidebar_menu_compact` enabled and disabled
- [ ] Verify it doesn't conflict with existing `toc_root` functionality

## Docsy User Guide usage example

Assume the following front matter in the User Guide:
`/content/en/docs/adding-content/_index.md`:

```yaml
---
title: Content and Customization
# ...
sidebar_root: true
---
```

When viewing any page under `/docs/adding-content/` (such as
`/docs/adding-content/content/`), the sidebar will show only the "Content and
Customization" section and its children, instead of the full docs navigation
tree. This makes the sidebar more focused for users working within this
subsection.

Note that viewing the index page of `/docs/adding-content/` will still show the
full docs navigation tree.

### To-dos

- [x] Step 1: Implement sidebar_root lookup and cache key logic in sidebar.html
- [ ] Step 2: Add link back to site root section index page
- [ ] Step 3: Add breadcrumb navigation UI (OPTIONAL/FUTURE)
- [x] Step 4: Use sidebar_root for $navRoot calculation in sidebar-tree.html
- [x] Step 5: Add CSS styling for up-arrow icon
- [ ] Testing: Verify all navigation scenarios work correctly

[#2328]: https://github.com/google/docsy/issues/2328
