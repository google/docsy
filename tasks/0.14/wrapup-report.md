---
title: 0.14 release-wrapup report
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `5365d35` on `main`.

## Highlights since v0.13.0

- **Documentation reorganization**: Site documentation section renamed to
  "project" section, with pages moved to About section for better organization.
- **Internationalization improvements**:
  - **i18n file format migration**: All translation files converted from TOML to
    YAML format
  - Bengali localization: Added feedback section and table of contents
    translations, fixed newline issues, added alert labels
  - Serbian translations updated (both Cyrillic and Latin variants)
  - Chinese translations updated (Simplified and Traditional), added alert
    labels
  - German localization completed
  - Japanese translations: Converted to YAML, added alert labels and
    all-rights-reserved
  - Hebrew translations: New locale added with alert and table of contents
    labels
  - Ukrainian translations: Converted to YAML format
  - Norwegian translations: New locale added with UI and alert translations
  - Alert label translations added across multiple locales
- **Hugo Markdown-style alert support**: Added support and documentation for
  Hugo's native Markdown-style alert syntax.
- **Documentation enhancements**:
  - Added AGENTS.md guide for AI agents
  - Added site build info and build documentation
  - Added version badge to documentation
  - Version tracking added to docs landing page
- **Dependency updates**:
  - Hugo upgraded to 0.155.0 (from 0.152.2 in 0.13.0)
  - Other packages updated
- **CI/CD improvements**: Netlify configuration moved to docsy.dev subrepo, CI
  cleanup and reorganization.
- **SCSS namespace work**: SCSS files namespaced and adjustments made for better
  organization.
- **Alert improvements**: Support for custom attributes in blockquote alerts,
  conversion of shortcode alerts to Markdown.
- **Hugo deprecation fixes**: Addressed Hugo deprecation messages related to
  mounts.
- **Tooling updates**: Prettier upgraded, formatting improvements, helper
  scripts for i18n conversion.
- **Sidebar root improvements**: Added support for nested `sidebar_root_for`
  configuration and documentation updates.
- **Documentation fixes**: Updated Swagger UI customization instructions to
  reflect correct approach.
- **SCSS refactoring**: Major refactoring of navbar, footer, and layout SCSS for
  better maintainability and organization.
- **Documentation clarifications**: Reformatted and clarified "Get Started"
  pages for better user experience.
- **Configuration improvements**: Hugo config cleanup, sites.matrix support,
  KaTeX configuration enhancements.
- **blocks/cover shortcode refactoring**: Removed pre-Hugo-0.54.x compatibility
  code (breaking change - content processing now relies on Hugo's native
  shortcode delimiter behavior) ([#939], [#2480]).

## References

- [Release 0.14.0 preparation #2404][#2404]
- [v0.13.0...main][]
- Commit inventory: [commit-inventory.md](commit-inventory.md)
- Issue mapping: [issue-mapping.md](issue-mapping.md)
- Issue resolution audit: [issue-audit.md](issue-audit.md)
- 0.13 upgrade article:
  [../docsy.dev/content/en/blog/2025/0.13.0.md](../docsy.dev/content/en/blog/2025/0.13.0.md)

[#2404]: https://github.com/google/docsy/issues/2404
[v0.13.0...main]: https://github.com/google/docsy/compare/v0.13.0...main

## Action items

Expand user guide coverage for the following features:

- [ ] Document Hugo Markdown-style alert support usage
- [ ] Review and update any documentation affected by the "site" to "project"
      section rename

Add changelog entries for the following issues. Remember that the changelog is
meant to be very terse, and refer the interested reader to further info.

- [ ] Hugo upgrade (0.152.2 → 0.154.5)
- [ ] Internationalization improvements (Bengali, Serbian, Chinese, German)
- [ ] Documentation reorganization (site → project section)
- [ ] Hugo Markdown-style alert support

Contributing documentation:

- [ ] Review AGENTS.md for completeness and accuracy

Blog posts:

- [ ] Write 0.14.0 release report blog post (structured as a release report
      similar to 0.9.0 and 0.10.0, with a brief upgrade section referencing
      0.13.0 for command examples) — draft in progress at
      `docsy.dev/content/en/blog/2026/0.14.0.md`
- [ ] Blog: cross-link 0.13.0 upgrade guide and 0.14.0 release report
- [ ] Once the blog post is complete, review the changelog 0.14.0 section and
      ensure that it is minimal and that it links to the appropriate section of
      the blog post.

Example site:

- [ ] _To be populated as needed_

Verification, testing, and QA:

- [ ] Sanity:
  - [ ] Verify that the `docsy-example` site builds cleanly with Hugo 0.154.5
  - [ ] Ensure other reference projects build cleanly with dependency
        reorganizations
  - [ ] Test Hugo Markdown-style alert support in example site

- [ ] Testing & QA:
  - [ ] Verify internationalization updates display correctly
  - [ ] Test documentation reorganization and link updates
  - [ ] Review documentation for broken links after reorganization

## Release Report Blog

- Release report blog post draft in progress:
  [0.14.0 release report](../../docsy.dev/content/en/blog/2026/0.14.0.md)
- Structured as a release report focusing on new features and improvements, with
  a brief upgrade section that references the 0.13.0 upgrade guide for command
  examples.
