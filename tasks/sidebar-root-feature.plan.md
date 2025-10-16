---
title: Sidebar-root feature development notes
date: 2025-10-13
---

# Sidebar-root feature development notes

<!-- cSpell:ignore sidenav -->

This is a feature description for issue [Sidenav support for section-as-root
#2328][#2328], and some development notes. Being development notes, they might
not fully capture the final implementation.

Add a `sidebar_root_for` front matter parameter that can be set in a section's
`_index.md` to make that section the root of sidebar navigation, useful for
deeply nested documentation sections.

## Feature characteristics

- New `sidebar_root_for` parameter set in section `_index.md` with two values:
  - `children`: Rooted sidebar shown only for descendant pages
  - `self`: Rooted sidebar shown for the section itself and all descendants
- Nested sidebar_root_for sections are supported: descendant pages use the
  closest ancestor with `sidebar_root_for` set
- Include navigation out of a sidebar-root section.
- Work alongside existing `toc_root` feature (not replace it)
- Warn if `sidebar_root_for` is set on a top-level section (including site home
  in docs-only sites)

## Feature interaction: `toc_root`

Since `sidebar_root_for` sections are always contained within a top-level
section (whether `toc_root` or default), pages only need to determine their
sidebar root within their already-established top-level boundary. No special
interaction handling is required.

> NOTE: it might be possible to merge the two features, but that's a future
> improvement.

## Implementation Changes

### 1. Update `layouts/_partials/sidebar.html` - Find sidebar root and update cache key

**Support both `children` and `self` values:**

- If current page is a section with `sidebar_root_for: "self"`, use it as sidebar root
- Otherwise, walk up ancestors to find any section with `sidebar_root_for`
  (either `"self"` or `"children"`)
- Use the closest match as sidebar root
- Use sidebar_root section's permalink as cache key
- Warn if `sidebar_root_for` is set on a top-level section
- Pass `sidebarRoot` to `sidebar-tree.html` as parameter

**Logic:**
1. Check if current page has `sidebar_root_for: "self"` → use it
2. Else check ancestors for `sidebar_root_for` (any value) → use first match
3. Result: `self` applies to section itself, `children` only to descendants

### 2. Add link back to sidebar-root section index page

The current implementation of the sidebar tree, already has the sidebar tree
"heading" as a link. This can naturally be used to link back to the sidebar-root
section index page.

**In `layouts/_partials/sidebar-tree.html`:**

- When `sidebar_root_for` is active, add a link at the top of the sidebar
  navigation
- Link should point to the parent section of the sidebar_root
- Use the `td-sidebar-root-up-icon` CSS class for the up-arrow icon
- Style the link to be visually distinct from regular navigation items

### 3. Modify `layouts/_partials/sidebar-tree.html` - Add breadcrumb navigation (OPTIONAL)

- When a `sidebar_root_for` is active (not the top-level section), add a
  breadcrumb section
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
- [ ] Verify caching works correctly with sidebar_root_for active
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
sidebar_root_for: children
---
```

**With `sidebar_root_for: children`:**
- Viewing `/docs/adding-content/` index → shows **full** docs navigation
- Viewing `/docs/adding-content/content/` → shows **rooted** sidebar (only
  "Content and Customization" and its children)

**With `sidebar_root_for: self`:**
- Viewing `/docs/adding-content/` index → shows **rooted** sidebar
- Viewing `/docs/adding-content/content/` → shows **rooted** sidebar
- Both the section itself and descendants get the focused navigation

### To-dos

- [ ] Step 1: Update sidebar_root_for lookup to support both "self" and "children" values
- [ ] Step 2: Add link back to site root section index page
- [ ] Step 3: Add breadcrumb navigation UI (OPTIONAL/FUTURE)
- [x] Step 4: Use sidebar_root_for for $navRoot calculation in sidebar-tree.html
- [x] Step 5: Add CSS styling for up-arrow icon
- [ ] Testing: Verify all navigation scenarios work correctly

[#2328]: https://github.com/google/docsy/issues/2328
