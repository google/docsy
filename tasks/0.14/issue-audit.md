---
title: 0.14 issue resolution audit
date: 2026-01-16
cSpell:ignore: docsy
---

> Report refreshed for commits through `db32f5b` on `main`.

Assessment of issues addressed by [commits since
v0.13.0][commits since v0.13.0].

## Documentation reorganization (no issue ID)

- **Commits**: `e1bb622`, `113cc39`, `8a2528f`
- **Status**: Resolved; site documentation section renamed to "project" section,
  pages moved to About section.
- **User Guide**: Documentation reorganized; links updated throughout.
- **Changelog**: Not yet added; should be captured under "Other changes".
- **Client impact**: Low — primarily affects internal documentation structure.
- **Follow-up**: Verify all internal links work correctly after reorganization.

## Internationalization improvements (no issue IDs)

- **Commits**: `02479b2`, `9cca91a`, `1465641`, `48f9c75`, `13ba7b2`, `8607ceb`,
  `bf9f559`
- **Status**: Resolved; multiple translation updates and additions.
- **User Guide**: Not required (translation additions/updates only).
- **Changelog**: Not yet added; should be captured under "Other changes" or
  "Internationalization".
- **Client impact**: Low — only affects projects using these specific locales.
- **Follow-up**: Verify translations display correctly in example site.

## Hugo Markdown-style alert support (no issue ID)

- **Commits**: `73a7b3f`
- **Status**: Resolved; Hugo native Markdown-style alert support added with
  documentation.
- **User Guide**: Documentation added.
- **Changelog**: Not yet added; should be captured under "New" features.
- **Client impact**: Yes — new feature available for theme users.
- **Follow-up**: Add changelog entry; consider example site demonstration.

## Hugo upgrade (0.152.2 → 0.154.5)

- **Commits**: `9334955`, `b52c265`
- **Status**: Resolved; Hugo upgraded to 0.154.5.
- **User Guide**: May need update if Hugo-specific features are used.
- **Changelog**: Not yet added; should be captured under dependency updates.
- **Client impact**: Yes — projects need to upgrade Hugo to match.
- **Follow-up**: Review Hugo release notes for breaking changes; update
  documentation if needed.

## CI/CD improvements (no issue IDs)

- **Commits**: `cb75133`, `6c1e391`, `4137043`, `66a0c7d`
- **Status**: Resolved; CI configuration reorganized and cleaned up.
- **User Guide**: Not required (internal CI changes).
- **Changelog**: Not needed.
- **Client impact**: No direct impact; relevant mainly for maintainers.
- **Follow-up**: None required.

[commits since v0.13.0]: https://github.com/google/docsy/compare/v0.13.0...main
