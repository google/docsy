---
title: 0.14 release-wrapup report
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `4149391` on `main`.

## Highlights since v0.13.0

- **Documentation reorganization**: Site documentation section renamed to
  "project" section, with pages moved to About section for better organization.
- **Internationalization improvements**:
  - Bengali localization: Added feedback section and table of contents
    translations, fixed newline issues
  - Serbian translations updated (both Cyrillic and Latin variants)
  - Chinese translations updated (Simplified and Traditional)
  - German localization completed
- **Hugo Markdown-style alert support**: Added support and documentation for
  Hugo's native Markdown-style alert syntax.
- **Documentation enhancements**:
  - Added AGENTS.md guide for AI agents
  - Added site build info and build documentation
  - Added version badge to documentation
  - Version tracking added to docs landing page
- **Dependency updates**:
  - Hugo upgraded to 0.154.5 (from 0.152.2 in 0.13.0)
  - Other packages updated
- **CI/CD improvements**: Netlify configuration moved to docsy.dev subrepo, CI
  cleanup and reorganization.

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
