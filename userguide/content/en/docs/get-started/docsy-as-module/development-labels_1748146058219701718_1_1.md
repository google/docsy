---
title: "Development Labels"
description: "Labels used in Vulnerability Management Engineering for scoring and sizing automation development bugs and feature issues"
---

Vulnerability Management Engineering uses several sizing labels to indicate how much effort is estimated to be involved in adding a feature or addressing a bug described by an issue.
In addition to this, we use weights and milestones. The weights correlate to the labels and this all is designed to make planning out our milestones easy and predictable from a capacity management perspective.

## Priority

We use the standard [GitLab Engineering Priority Labels](../../../engineering/infrastructure/engineering-productivity/issue-triage/#priority) to reflect the priority of individual issues. Priority is decided during milestone planning and is informed by company-wide critical projects, customer commitments and Vulnerability Management team priorities. Vulnerability Management team members are expected to follow the priority of issues assigned to them during a milestone and ensure they are working on the highest priority issues first.

## Sizing and estimation (Size labels & issue weight)

A single point of weight on an issue roughly represents a single day of engineering work for a single engineer.

For convenience, we also currently apply labels based on weight to give issues a rough size.

| Estimated Effort    | Label          | Weight         |
|---------------------|----------------|----------------|
| Less than a day | ~vuln-mgmt::Trivial | 1 |
| 1-2 days | ~vuln-mgmt::Small | 2 |
| 2-5 days (1 week) | ~vuln-mgmt::Medium | 5|
| 5-10 days (2 weeks) | ~vuln-mgmt::Large |10 |
| 15-25 days (Most of a milestone) | ~vuln-mgmt::X-Large | 15 |
| 25 days+ (Too large for a milestone) | ~"vuln-mgmt::Too Large" | 25 |

## Workflow labels

With consideration of not re-inventing the wheel, the Vulnerability Management team is using workflow labels [workflow labels](https://docs.gitlab.com/development/labels/#workflow-labels) used by Engineering.

These are the subset of label's we use.

| Label | How I understand the label |
|-------|----------------------------|
| ~"workflow::blocked" | Work was started or planned, but is blocked by external factors or another issue |
| ~"workflow::complete" | Work is complete and shipped, issue should be closed |
| ~"workflow::in dev" | Planning done, in current milestone, no blockers, work is in progress |
| ~"workflow::in review" | Planning and dev work complete, blocked on MR review |
| ~"workflow::planning breakdown" | Issue needs to be sized, scoped and documented for potential milestone inclusion |
| ~"workflow::scheduling" | Planning, sizing, etc is done, issue has not been started, but is ready for discussion at the next milestone planning meeting |
