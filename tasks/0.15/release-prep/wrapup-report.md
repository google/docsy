---
title: 0.15 release-prep wrapup report
date: 2026-04-25
lastmod: 2026-04-25
range: v0.14.3..main
last-main-commit: ee79b52c
cSpell:ignore: afdocs
---

> Report prepared for commits in [v0.14.3...main][] through [ee79b52c][].

## Release Themes

- **Experimental agent support**: Markdown alternate outputs, a visible "View
  Markdown" page-meta link, `llms.txt`, and golden tests are implemented for the
  first 0.15 pass. Treat this as experimental in release content.
- **Doc-rooted sites**: Docsy now has a documented doc-rooted site pattern and a
  `doc-rooted` example variant. The [#2504][] tracker is expected to close, but
  check before final publication.
- **Community and footer links**: Link handling is more accurate under custom
  permalinks, footer links support `rel`, and external-link target behavior is
  fixed.
- **Shortcode rendering**: The `card` shortcode now renders selected fields with
  `$.Page.RenderString` instead of `markdownify`.
- **Internationalization**: Romanian and Azerbaijan language support landed,
  German alert labels were completed, and the new "View Markdown" label was
  added across locales.
- **Docs and process cleanup**: Deployment docs were split into focused pages,
  branch-model docs were clarified, and link-style linting was tightened.

## Required or Notable Action

- **Potentially breaking**: Multilingual sites should review community and
  footer link paths. Paths are now interpreted as site-relative; prefix a path
  with the default language code to force a default-language target.
- **Potentially client-impacting**: Projects that override or depend heavily on
  `card` shortcode rendering should review header, title, subtitle, and footer
  output because those fields now use `$.Page.RenderString`.
- **Runtime check**: Confirm final Hugo and Node support values before
  publishing 0.15. The repo currently uses `hugo-extended` 0.157.0 in
  `docsy.dev`.

## Release Content Status

- Created draft release report:
  [0.15.0 release report](../../../docsy.dev/content/en/blog/2026/0.15.0.md).
- Updated changelog "Next release" section with 0.15 highlights and links.
- Omit 0.14.3-only fixes from 0.15 highlights. The 0.14 release resources
  already cover the v0.14.3 layout fix.

## Follow-Up Checklist

- [ ] Check [#2504][] and close it, or move any remaining doc-rooted work to
      follow-up issues, before finalizing 0.15.
- [ ] Decide whether additional [#2596][] work lands before 0.15; otherwise keep
      remaining agent support work as post-release follow-up.
- [ ] Confirm final supported Hugo and Node versions and update the blog,
      changelog, and release checklist if needed.
- [ ] Review the 0.15 release report for user-guide links and action guidance.
- [ ] Review the changelog entry after the blog draft is final so it stays terse
      and points to the release report for detail.
- [ ] Decide whether a docsy-example follow-up PR is needed.

## References

- [Release 0.15.0 preparation #2501][#2501]
- [v0.14.3...main][]
- Commit inventory: [commit-inventory.md](commit-inventory.md)
- Issue mapping: [issue-mapping.md](issue-mapping.md)
- Issue audit: [issue-audit.md](issue-audit.md)
- 0.15 release report:
  [../../../docsy.dev/content/en/blog/2026/0.15.0.md](../../../docsy.dev/content/en/blog/2026/0.15.0.md)

[#2501]: https://github.com/google/docsy/issues/2501
[#2504]: https://github.com/google/docsy/issues/2504
[#2596]: https://github.com/google/docsy/issues/2596
[ee79b52c]: https://github.com/google/docsy/commit/ee79b52c
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
