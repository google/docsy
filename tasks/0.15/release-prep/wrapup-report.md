---
title: 0.15 release-prep wrapup report
date: 2026-04-25
lastmod: 2026-05-01
range: v0.14.3..main
last-main-commit: 0a4cdfa8
cSpell:ignore: afdocs
---

> Report prepared for commits in [v0.14.3...main][] through [0a4cdfa8][].

## Release Themes

- **Experimental agent support**: Markdown alternate outputs, a visible "View
  Markdown" page-meta link, `llms.txt`, and golden tests are implemented for the
  first 0.15 pass. The user guide and AFDocs scorecard are also on `main`. Treat
  this as experimental in release content.
- **Doc-rooted sites**: Docsy now has a documented doc-rooted site pattern and a
  `doc-rooted` example variant. The [#2504][] tracker is closed for 0.15.
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
  publishing 0.15. The refreshed blog currently says Hugo 0.157.0 and Node
  LTS 24.

## Release Content Status

- Created draft release report:
  [0.15.0 release report](../../../docsy.dev/content/en/blog/2026/0.15.0.md)
  ([#2610][]).
- Added the Agent support user-guide page and refreshed the release prep reports
  ([#2611][]).
- Updated changelog "Next release" section with 0.15 highlights and links; the
  primary release-content pass is [#2616][], followed by prep/tooling PRs
  ([#2618][], [#2619][], [#2620][], [#2621][], [#2624][], [#2625][], [#2626][]).
- Omit 0.14.3-only fixes from 0.15 highlights. The 0.14 release resources
  already cover the v0.14.3 layout fix.
- The earlier Agent support blog-link blocker is resolved: [Agent support][] is
  present on `main`.

## Follow-Up Checklist

- [x] Merge Agent support user-guide page (`docs/content/agent-support/`) before
      publishing the 0.15.0 post.
- [x] Check [#2504][] and close it, or move any remaining doc-rooted work to
      follow-up issues, before finalizing 0.15.
- [x] Decide whether additional [#2596][] work lands before 0.15; remaining
      agent support work now tracks under [#2614][].
- [x] Confirm final supported Hugo and Node versions and update the blog,
      changelog, and release checklist if needed.
- [x] Review the 0.15 release report for user-guide links and action guidance.
- [x] Review the changelog entry after the blog draft is final so it stays terse
      and points to the release report for detail.

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
[#2610]: https://github.com/google/docsy/pull/2610
[#2611]: https://github.com/google/docsy/pull/2611
[#2614]: https://github.com/google/docsy/issues/2614
[#2616]: https://github.com/google/docsy/pull/2616
[#2618]: https://github.com/google/docsy/pull/2618
[#2619]: https://github.com/google/docsy/pull/2619
[#2620]: https://github.com/google/docsy/pull/2620
[#2621]: https://github.com/google/docsy/pull/2621
[#2624]: https://github.com/google/docsy/pull/2624
[#2625]: https://github.com/google/docsy/pull/2625
[#2626]: https://github.com/google/docsy/pull/2626
[0a4cdfa8]: https://github.com/google/docsy/commit/0a4cdfa8
[Agent support]: ../../../docsy.dev/content/en/docs/content/agent-support/
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
