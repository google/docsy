---
title: No left sidebar
type: docs
params:
  body_class: td-no-left-sidebar
---

This page uses the **no-left-sidebar** layout. The left (section) sidebar is hidden; only the right-hand table of contents is shown, and the main container is centered.

To use this layout on any docs page, add to your front matter:

```yaml
body_class: td-no-left-sidebar
```

## Why use this layout?

A common use case is to allow top-level pages to use the `docs` layout but for which it doesn't make sense to have a left sidebar since it usually will show all pages of type `docs` in the site. This is usually not the desired page design.

## Layout behavior

- **Left sidebar**: Hidden.
- **Main content**: Full width of the content area, centered on large screens.
- **Right ToC**: Visible as usual on medium-and-up viewports.

## Sample sections (for ToC)

Here are some headings so the right-hand ToC is populated and you can see how the layout behaves with scroll.

### Subsection one

Some body text. The no-left-sidebar layout is defined in the theme's extra SCSS (`assets/scss/td/extra/_main-container.scss`).

### Subsection two

More sample content. Resize the window to see how the layout responds at different breakpoints.

### Subsection three

On small screens the ToC is hidden by default; on `md` and up it appears on the right with the content centered beside it.
