---
title: 0.13 release-wrapup report
date: 2025-11-12
cSpell:ignore: docsy
---

> Report refreshed for commits through `595b25e` on `main`.

## Highlights since v0.12.0

- Sidebar navigation now supports `sidebar_root_for` with `children` and `self`
  modes.
- ScrollSpy overhaul delivers active TOC indication and UX polish (addresses
  #349/#2289).
- Language selector redesign keeps the dropdown visible on all screen sizes.
- Alert shortcode rewritten for Markdown content and nested shortcodes (#941).
- Accessibility color and typography defaults improved for better contrast
  (#2285).
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
[v0.12.0...main]: https://github.com/google/docsy/compare/v0.12.0...main

## Action items

Expand user guide coverage for the following features:

- [x] Document `sidebar_root_for` usage with examples
  - For details, see
    [sidebar-root-feature.plan.md](../sidebar-root-feature.plan.md)
- [x] Elaborate on ScrollSpy behavior and tuning options post-update
- [ ] Update release process checklist with new build ID helper references
      (confirm #2266 alignment)

Add changelog entries for the following issues:

- [ ] Accessibility color/typography fixes (#2285)
- [x] ScrollSpy & TOC UX improvements (#349/#2289) — covered in `CHANGELOG.md`
      (0.12.1/0.13.0 "Other changes" section).
- [x] Sidebar-root feature (#2328) — covered in `CHANGELOG.md` (0.12.1/0.13.0
      "New" section, `sidebar_root_for` bullet).
- [x] Dark-mode flash fix (#2185) — documented in `CHANGELOG.md` (0.12.1/0.13.0
      “Other changes” entry).
- [ ] Translation refreshes (#2173, #2313, #2331) – optional but helpful

Client-upgrade support:

- [ ] Blog: cross-link 0.12.0 and 0.13.0 upgrade blogs once 0.13 content is
      finalized
- [ ] `docsy-example` example site:
  - [ ] Update to adopt new alert shortcode and language menu defaults
  - [ ] Update to adopt new sidebar-root feature

Verification, testing, and QA:

- [ ] Sanity:
  - [ ] Verify that the `docsy-example` site builds cleanly with the new
        dependencies
  - [ ] Ensure other reference projects build cleanly with dependency
        reorganizations

- [ ] Testing & QA:
  - [ ] Run visual regression/snapshot checks for navigation, ScrollSpy, and
        dark-mode fixes
  - [ ] Validate new locales/translations render correctly
  - [ ] Review narrow-screen language menu screenshots and guidance
        (#2035/#2001)

## Upgrade Blog

- Draft outline: [0.13.0 upgrade article](upgrade-blog.md)
- Flesh out full post with screenshots and code samples once follow-up actions
  completed.
