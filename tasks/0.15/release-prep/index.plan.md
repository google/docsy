---
title: 0.15 Release wrapup plan
date: 2026-04-25
lastmod: 2026-05-01
last-main-commit: 0a4cdfa8
---

## Agent guidance

- All generated content should be lean and DRY.
- Do not duplicate detailed findings across reports. Keep the commit inventory
  concise, use the issue audit for evidence, and use the wrapup report for
  decisions and action items.
- Treat the [0.15 release tracker][] as the release coordination issue.
- When updating release content, follow the [Docsy style guide][] and the
  [changelog style guide][].
- First determine the last release of the previous version (0.14.3) and use that
  as the baseline for the commit inventory, not the previous minor release tag
  (0.14.0). This ensures we capture all commits since the last official release.
- When refreshing reports, use the latest commit on `main` as the new refresh
  point.
- For the release report blog post, focus on explaining user-facing changes and
  required actions for breaking changes, not just listing commits. Link to
  relevant issues, PRs, and user guide sections for each change. Keep upgrade
  mechanics brief and reference the upgrade guide for command examples when
  applicable.

## Deliverables

Create and maintain:

- [commit inventory](commit-inventory.md) with these sections:
  - scope and refresh point
  - headline groups for user-facing changes, maintenance changes, dependency
    updates, tests/tooling, docs/site work, and mixed-change commits needing
    review
  - per-entry commit short SHA, PR number, title, and brief classification
- [issue mapping](issue-mapping.md) as a table with commit, PR, title, linked
  issue or tracker, source of the link, and notes.
- [issue audit](issue-audit.md) as the evidence log. For each material change,
  record issue/PR, status, docs impact, changelog impact, downstream/client
  impact, blog inclusion, and follow-up needed.
- [wrapup report](wrapup-report.md) as the decision and action summary,
  including resolved themes, outstanding release blockers, dependency bundles,
  required docs/changelog/blog work, post-release actions, and tracker
  alignment.
- [milestone 23 review](milestone-23-review.md): open issues slated for 0.15 vs
  0.16+ and milestone hygiene.
- The 0.15 blog post under `docsy.dev/content/en/blog/2026/0.15.0.md`, not as a
  task-local draft.

## Inventory commits

- Pull git log from the last release of the previous version and main (that is
  [v0.14.3...main][]) and export commit list with PR numbers. Use the latest
  official release tag as the baseline, not the previous minor release tag.
- Group dependency-only commits together and flag mixed-change commits for
  review.
- Keep groupings broad so the list stays manageable; note detailed client-impact
  findings during the audit phase instead of here.
- Maintain the generated summary in [commit inventory](commit-inventory.md)

## Map commits to issues

- For each commit/PR identify referenced issue IDs (from titles, PR bodies,
  linked issues)
- Capture commits with no linked issue and decide whether to log new follow-up
  issues
- Maintain the mapping table in [issue mapping](issue-mapping.md)

## Issue resolution audit

- For each linked issue verify status: completely resolved, partial, or needs
  follow-up
- Check `docsy.dev/content` and other user-guide paths for corresponding
  documentation updates
- Confirm the published changelog entries in
  `docsy.dev/content/en/project/about/changelog.md` are complete where needed.
  The root `CHANGELOG.md` is only a pointer to that page.
- Confirm the current "Next release" changelog heading is ready to become
  v0.15.0 before final release prep.
- Identify whether each change affects downstream theme client projects and note
  the impact in the audit summary
- Maintain the findings in [issue audit](issue-audit.md)

## Follow-up task identification

- For issues lacking docs/changelog updates, list concrete tasks (file + change
  notes)
- Note any post-release actions (e.g., update docsy-example, tracking issue
  updates)
- Capture any client-facing follow-ups (docs, release notes, example site) in
  the [wrapup report](wrapup-report.md)
- Log additional tasks in the [wrapup report](wrapup-report.md) if needed

## Assemble wrapup report

- Draft a summary document outlining resolved issues, outstanding work,
  dependency bundles, and action items
- Cross-reference the [0.15 release tracker][] and update/checklist alignment
- Publish outcomes to the [wrapup report](wrapup-report.md)

## Prepare release report blog post

- Draft `docsy.dev` blog post highlighting new features, improvements, and
  breaking changes in 0.15.0
- Model the post on the 0.14.0 release report: highlight and explain user-facing
  changes in 0.15.0, and give required-action guidance for breaking changes.
- Include sections for release summary, readiness/action overview, major
  user-facing changes, breaking changes and required actions, other notable
  changes, upgrade steps, sanity checks, what's next, and references. Omit empty
  sections if they do not apply.
- Keep upgrade mechanics brief and reference the 0.14.0 upgrade guide for
  command examples when the same commands apply.
- Keep the draft updated in [0.15.0 release report][]

---

## Refresh actions

When new commits land on `main`, repeat the following:

- [Update the plan and reports](#update-the-plan-and-reports)
- [0.15.0 blog post](#0150-blog-post)
- [Changelog](#changelog)

### Update the plan and reports

- Revisit the plan and update the reports with new commits to `main` integrated
  into existing reports in this folder.
- Update the release report blog draft with the latest context (track
  outstanding content work in the wrapup report).
- Take note of fixes and features that are not yet documented in the blog post
  or changelog.

Refresh reports for commits in [v0.14.3...main][] through the commit named as
`last-main-commit` in this file’s front matter (currently [0a4cdfa8][]).

### 0.15.0 blog post

- Reread the [0.15.0 blog post][].
- Compare it to the information you recently added to the 0.15.0 release report
  pages in this folder.
- Is the post complete? If not identify what is missing.
- Take note of fixes and features that are not yet documented.
- Document breaking changes, new features, and other changes, as well as
  deprecation notices and alerts of upcoming breaking changes.
- Ensure the post is useful to Docsy users by explaining user-facing changes and
  required action for breaking changes, not just listing commits.
- For each change or feature:
  - Link to: the corresponding issue, if it exists, otherwise link to the main
    PR; link to the relevant section of the user guide.
  - Mention any cleanup actions that the project needs to take, for example
    removing obsolete configuration.

### Changelog

- Reread the [changelog entry for 0.15.0][0.15.0-changelog].
- Compare it to the information you recently added to the 0.15.0 release report
  pages in this folder.
- Is the changelog complete? If not, add the missing information.
- Remember that the changelog is meant to:
  - Only (very briefly) highlight significant changes.
  - Link to the relevant section of the blog post for more details.

[0.15 release tracker]: https://github.com/google/docsy/issues/2501
[0.15.0 release report]: ../../../docsy.dev/content/en/blog/2026/0.15.0.md
[0.15.0-changelog]:
  ../../../docsy.dev/content/en/project/about/changelog/#v0.15.0
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
[0.15.0 blog post]: ../../../docsy.dev/content/en/blog/2026/0.15.0.md
[0a4cdfa8]: https://github.com/google/docsy/commit/0a4cdfa8
[changelog style guide]:
  ../../../docsy.dev/content/en/project/about/changelog/#style-guide
[Docsy style guide]: ../../../docsy.dev/content/en/project/style-guide/
