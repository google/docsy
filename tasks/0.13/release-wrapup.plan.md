---
title: 0.13 Release wrapup plan
date: 2025-11-12
last-main-commit: 52aa677
cSpell:ignore: docsy
---

## Inventory commits

- Pull git log from [v0.12.0...main] and export commit list with PR numbers
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
- Confirm `CHANGELOG.md` entries exist and are complete where needed
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
- Cross-reference the `google/docsy#2266` tracker and update/checklist alignment
- Publish outcomes to the [wrapup report](wrapup-report.md)

## Prepare release report blog post

- Draft `docsy.dev` blog post highlighting new features, improvements, and
  breaking changes in 0.13.0
- Structure as a release report (similar to 0.9.0 and 0.10.0), focusing on
  what's new rather than detailed upgrade mechanics
- Include a brief upgrade section that references the 0.12.0 upgrade guide for
  command examples
- Keep the draft updated in [0.13.0 release report][]

---

## Refresh actions

Repeat when new commits land on `main` do the following:

- [Update the plan and reports](#update-the-plan-and-reports)
- [0.13.0 blog post](#0130-blog-post)
- [Changelog](#changelog)

### Update the plan and reports

- Revisit the plan and update the reports with new commits to `main` integrated
  into existing reports in this folder.
- Update the release report blog draft with the latest context (track
  outstanding content work in the wrapup report).
- Take note of fixes and features that are not yet documented in the blog post
  or changelog.

Report refreshed for commits through [52aa677] (includes release blog post,
changelog updates, final release adjustments, and documentation improvements).

### 0.13.0 blog post

- Reread the [0.13.0 blog post][].
- Compare it to the information you recently added to the 0.13.0 release report
  pages in this folder.
- Is the post complete? If not identify what is missing.
- Take note of fixes and features that are not yet documented.
- Document breaking changes, new features, and other changes, as well as
  deprecation notices and alerts of upcoming breaking changes.
- For each change or feature:
  - Link to: the corresponding issue, if it exists, otherwise link to the main
    PR; link to the relevant section of the user guide.
  - Mention any cleanup actions that the project needs to take, for example
    removing obsolete configuration.

### Changelog

- Reread the [changelog entry for 0.13.0][0.13.0-changelog].
- Compare it to the information you recently added to the 0.13.0 release report
  pages in this folder.
- Is the changelog complete? If not, add the missing information.
- Remember that the changelog is meant to only (very briefly) highlight
  significant changes.

[0.13.0 release report]: ../docsy.dev/content/en/blog/2025/0.13.0.md
[0.13.0-changelog]: ../../docsy.dev/content/en/site/changelog/#v0.13.0
[v0.12.0...main]: https://github.com/google/docsy/compare/v0.12.0...main
[0.13.0 blog post]: ../docsy.dev/content/en/blog/2025/0.13.0.md
