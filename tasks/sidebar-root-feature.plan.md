# Sidebar Root Feature Implementation

## Overview

Add a `sidebar_root` front matter parameter that can be set in a section's
`_index.md` to make that section the root of sidebar navigation, useful for
deeply nested documentation sections.

## Key Requirements

- New `sidebar_root: true` parameter set in section `_index.md`
- When viewing pages under a sidebar_root section, show only that section and
  descendants
- Include breadcrumb-style "back to parent" navigation at the top of the sidebar
- Work alongside existing `toc_root` feature (not replace it)
- Warn if `sidebar_root` is set on a top-level section (including site home in
  docs-only sites)

## Feature interaction: toc_root

Since `sidebar_root` sections are always contained within a top-level section
(whether `toc_root` or default), pages only need to determine their sidebar root
within their already-established top-level boundary. No special interaction
handling is required.

## Implementation Changes

### 1. Modify `layouts/_partials/sidebar-tree.html` - Update `$navRoot` calculation

**Line 42:**

- Currently determines nav root based on `toc_root` and site home
- Add logic to walk up the page's ancestor sections to find any with
  `sidebar_root: true`
- If found, use that section as `$navRoot` instead
- Warn if `sidebar_root` is set on a top-level section

### 2. Modify `layouts/_partials/sidebar-tree.html` - Add breadcrumb navigation

**After line 41:**

- When a `sidebar_root` is active (not the top-level section), add a breadcrumb
  section
- Show "← Back to [Parent Section]" link(s) above the main navigation tree
- Use appropriate styling to distinguish from regular navigation items

### 3. Update `layouts/_partials/sidebar.html`

**Line 20 - Update caching key:**

- Current cache key uses `.FirstSection.RelPermalink`
- Needs to also consider the active sidebar_root to cache correctly
- If sidebar_root is detected, incorporate its permalink into the cache key

### 3. Add CSS styling (if needed)

**Create styles for breadcrumb navigation:**

- Style the "back to parent" links distinctively
- Ensure proper spacing and visual separation from main sidebar tree
- Make it responsive and consistent with existing sidebar design

## Testing Considerations

- Test with deeply nested sections (3+ levels)
- Verify caching works correctly with sidebar_root active
- Ensure foldable menu behavior still works
- Test with both `sidebar_menu_compact` enabled and disabled
- Verify it doesn't conflict with existing `toc_root` functionality

## Example Usage

In `/docs/guide/advanced/_index.md`:

```yaml
---
title: 'Advanced Guide'
sidebar_root: true
---
```

When viewing any page under `/docs/guide/advanced/`, the sidebar will show only
the "Advanced Guide" section and its children, with a "← Back to Guide" link at
the top.

### To-dos

- [ ] Implement logic to walk page ancestors and find section with sidebar_root
      parameter
- [ ] Modify $navRoot calculation in sidebar-tree.html to use sidebar_root when
      found
- [ ] Add breadcrumb navigation UI for navigating back to parent sections
- [ ] Update sidebar.html cache key to account for sidebar_root sections
- [ ] Test with nested sections and verify all navigation scenarios work
      correctly
