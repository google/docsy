---
title: 0.13 release-wrapup report
date: 2025-11-12
cSpell:ignore: docsy
---

> Report refreshed for commits through `52aa677` on `main`.

## Highlights since v0.12.0

- Sidebar navigation now supports `sidebar_root_for` with `children` and `self`
  modes.
- ScrollSpy overhaul delivers active TOC indication and UX polish (addresses
  #349/#2289), including fixes for heading ID issues and TOC targeting.
- Language selector redesign keeps the dropdown visible on all screen sizes.
- Alert shortcode rewritten for Markdown content and nested shortcodes (#941).
- Accessibility color and typography defaults improved for better contrast
  (#2285).
- Dark mode enhancements:
  - Experimental color adjustment system for better contrast with custom theme
    colors
  - Dark mode support for Google search integration
  - TOC entry color contrast improvements
  - Page meta spacing fixes
- New `_param` shortcode for parameter substitution in templates.
- **Build-time rendering of mathematical formulae**: KaTeX now uses Hugo's
  embedded engine for build-time rendering, eliminating client-side JavaScript
  ([#2276]).
- Dependency stack refreshed:
  - Bootstrap 5.3.8 (from 5.3.6)
  - Hugo 0.152.2 (from 0.147.5)
  - Node LTS ≥24 (from ≥22)
- NPM workflow cleanups, including a pre-commit-ready `fix:version` helper
- Published 0.12.0 upgrade guidance blog and aligned upgrade post slugs (#2349,
  #2356)

## References

- [Release 0.13.0 preparation #2345][#2266]
- [v0.12.0...main][]
- Commit inventory: [commit-inventory.md](commit-inventory.md)
- Issue mapping: [issue-mapping.md](issue-mapping.md)
- Issue resolution audit: [issue-audit.md](issue-audit.md)
- 0.12 upgrade article:
  [../docsy.dev/content/en/blog/2025/0.12.0.md](../docsy.dev/content/en/blog/2025/0.12.0.md)

[#2266]: https://github.com/google/docsy/issues/2266
[#2276]: https://github.com/google/docsy/pull/2276
[v0.12.0...main]: https://github.com/google/docsy/compare/v0.12.0...main

## Action items

Expand user guide coverage for the following features:

- [x] Document `sidebar_root_for` usage with examples — completed in `#2364`
- [x] Elaborate on ScrollSpy behavior and tuning options post-update — completed
      in `#2366`

Add changelog entries for the following issues. Remember that the changelog is
meant to be very terse, and refer the interested reader to further info.

- [x] Accessibility color/typography fixes (#2285)
- [x] ScrollSpy & TOC UX improvements (#349/#2289)
- [x] Sidebar-root feature (#2328)
- [x] Dark-mode flash fix (#2185)
- [x] Translation refreshes (#2173, #2313, #2331)

Contributing documentation:

- [x] Update release process checklist with new build ID helper references

Blog posts:

- [x] Write 0.13.0 release report blog post (structured as a release report
      similar to 0.9.0 and 0.10.0, with a brief upgrade section referencing
      0.12.0 for command examples) — completed in
      `docsy.dev/content/en/blog/2025/0.13.0.md`
- [x] Blog: cross-link 0.12.0 upgrade guide and 0.13.0 release report —
      completed
- [x] Once the blog post is complete, review the changelog 0.13.0 section and
      ensure that it is minimal and that it links to the appropriate section of
      the blog post.

Example site:

- [x] Update to adopt new alert shortcode - done via OTel website and Docsy
      example site
- [x] Update to adopt new sidebar-root feature - done via OTel website and Docsy
      example site

Verification, testing, and QA:

- [x] Sanity:
  - [x] Verify that the `docsy-example` site builds cleanly with the new
        dependencies
  - [x] Ensure other reference projects build cleanly with dependency
        reorganizations

- [x] Testing & QA:
  - [x] Run visual regression/snapshot checks for navigation, ScrollSpy, and
        dark-mode fixes
  - [x] Review narrow-screen language menu screenshots and guidance
        (#2035/#2001)

## Release Report Blog

- Release report blog post completed:
  [0.13.0 release report](../../docsy.dev/content/en/blog/2025/0.13.0.md)
- Structured as a release report focusing on new features and improvements, with
  a brief upgrade section that references the 0.12.0 upgrade guide for command
  examples.
