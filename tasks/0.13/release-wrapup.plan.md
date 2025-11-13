---
title: 0.13 Release wrapup plan
date: 2025-11-12
last-main-commit: 0571623
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

## Prepare upgrade blog post

- Outline key upgrade steps and highlights since 0.12
- Draft `docsy.dev` blog post guiding users through upgrade to 0.13
- Keep the draft updated in [0.13.0 upgrade post][]

### Refresh actions

Repeat when new commits land on `main`:

- Revisit the plan and update the reports with new commits to `main` integrated
  into existing summaries.
- Update the upgrade blog draft with the latest context (track outstanding
  content work in the wrapup report).

Report refreshed for commits through [0571623] (includes #2363, #2364, and
\#2366).

[0.13.0 upgrade post]: upgrade-blog.md
[0571623]:
  https://github.com/google/docsy/commit/05716234f49308dc9e39e97de2c858b1759803a5
[v0.12.0...main]: https://github.com/google/docsy/compare/v0.12.0...main
