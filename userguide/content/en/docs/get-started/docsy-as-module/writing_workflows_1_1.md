---
title: How to write workflows
category: References
description: Guidelines, rationale, and resources on writing good workflow pages.
---

## Overview

This page is meant to provide some guidance on writing workflow pages including creating new or updating existing workflows.

It is meant to be easy to read and quick to scan in the spirit of the guidance provided on this page.

## Why this is important

While having information written down has many benefits, for people to find what they need, it needs to be well organized too.

Organization is particularly important in the workflows because often steps for a process only apply in some cases.
Making it easier for a team member to follow a process while also allowing them to only read the necessary parts to complete a task is needed for efficiency.

Creating, updating, and improving workflows fits with [GitLab values]/handbook/values/) and emphasizes many of our operating principles and approaches including:

- [Handbook first](/handbook/about/handbook-usage/#why-handbook-first)
- [See something, say something](/handbook/values/#see-something-say-something)
- [Everyone can contribute](/handbook/values/#mission)

This very page came [out of a discussion on increasing support efficiency](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2927).

## Basic guidelines

Good workflows have:

1. the information related to the title.
    - If you're including new information, which workflow does it fit best in? If it doesn't fit anywhere, consider a new workflow.
1. information broken up in small sections.
    - Is what you're adding a discrete step for a process? Make sure it's part of a list. Specific use case? Use a heading to separate it.
1. well organized and descriptive headings to make looking for information easier.
    - What level heading is appropriate? Are there many others (example h3) already? If so, consider adding a new higher level heading (example h2).
1. links to other relevant workflows or documentation.
    - A lot of our workflows are related, but we should avoid duplicating information. Link to it instead.
1. a reasonable length.
    - If you think a workflow page is too long, then it might be. Consider if it can be broken up, or if it needs to be reorganized.
1. visual aids, such as flowcharts, whenever helpful.
    - Consider adding a [mermaid chart](https://docs.gitlab.com/ee/user/markdown.html#mermaid) or image to help visual learners.

For general writing practices including inclusive language and use of markdown, consider following the [GitLab documentation guidelines](https://docs.gitlab.com/ee/development/documentation/styleguide/).

### Example from okay to better

Let's take the [Support Time Off page](/handbook/support/support-time-off) as an example (even though it's not a workflow page, it's process related).

The [original version](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/7d9466ea0400d3e7739f280c7568b3f030fa2562/sites/handbook/source/handbook/support/support-time-off.html.md#taking-off-less-than-half-a-day) organized the information by using number of days off as the "divider".

1. Less than half a day
1. Half day or more
    1. Use Time Off by Deel
    1. PagerDuty shifts
    1. Meetings
1. 1-2 days
    1. Check with customers
    1. Groom queue
1. 3+ days
    1. Notify team
    1. Change ticket workflow
    1. Find new assignees for your tickets

That's understandable, but difficult to scan which parts are relevant to an individual,
because not all Support team members have PagerDuty shifts, or assigned tickets (think Support Ops).
Additionally, some pieces duplicated company handbook information.

In [a revision](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/7d9466ea0400d3e7739f280c7568b3f030fa2562/sites/handbook/source/handbook/support/support-time-off.html.md#taking-off-less-than-half-a-day), the page was reorganized to focus on responsibilities so that team members could skip sections that are not relevant to them.

1. Marking time off
    - with link to relevant company handbook section
1. Coverage for PagerDuty
1. Coverage for tickets
    1. Refine queue
    1. Check with customers
    1. Additional actions for 3+ days
        1. Notify team and find new assignees
        1. Change ticket workflow

This is a small, but hopefully good example of how a difference in organizing the content can make it easier and more efficient for the reader.

## Creating a new workflow

When creating a new workflow, please keep the [above guidelines](#basic-guidelines) in mind, and consider this process:

1. Ordering and organizing with an outline.
1. Get someone to review the outline.
1. Writing the full content.
1. Get one or more reviewers focusing on one of the following for their review:
    1. Organization and structure.
    1. Clarity and conciseness.

### Template

There is no specific template for a workflow (except the metadata noted below). Some possible places to start:

1. Use another workflow as a template.
1. Use the [GitLab documentation structure and template](https://docs.gitlab.com/ee/development/documentation/structure.html).

#### Metadata

The following metadata and table of contents pieces should be at the top of every workflow page.

Notes:

1. The only optional (can be removed) metadata line is `subcategory`. All others must be filled in.
1. See the existing workflows for existing categories.

```text
---
title:
description:
category:
subcategory:
last-reviewed: YYYY-MM-DD
---

## First heading
```
