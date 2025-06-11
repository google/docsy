---
title: "CSS Utilities Task Group"
description: "Learn more about the CSS Utilities Task Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created    | 2024-02-20                                                                                                                              |
| Target End Date | 2025-01-31                                                                                                                              |
| End Date        | 2024-09-24                                                                                                                              |
| Slack           | [#tg_css_utils](https://gitlab.enterprise.slack.com/archives/C05CPKD5GTD) (only accessible from within the company)                     |
| Google Doc      | [Agenda doc](https://docs.google.com/document/d/1BorO_g9WWrNiVpE0yugbPhf0gkHEWXQPp9bknDDWXtU) (only accessible from within the company) |

### Context

The frontend department faces recurring challenges around writing CSS utilities, using them in the
product, controlling CSS bundles' size and ensuring pages only import the style definitions they
actually need. This task group aims at alleviating those pain points through the following driving
factors:

- Reduce CSS bundle sizes.
- Compartmentalize style definitions.
- Keep enforcing Pajamas-compliance through consistent and design token ready CSS utilities.
- Increase our dark theme readiness.
- Improve developer experience (DX).

### Exit Criteria

#### September 2024 exit criteria update

In September 2024, we have reassessed the task group's exit criteria. At this point, we had mostly
completed the migration to Tailwind CSS and were only left with a few cleanup tasks. When reviewing
our goals, we noticed that the remaining scope might be too large for a structure such as a task
group. Task groups are meant to be short-lived, and to focus on completing well-defined tasks in a
timely fashion. For posterity, here are our original exit criteria:

> 1. CSS utilities are generated with Tailwind: <https://docs.gitlab.com/ee/architecture/blueprints/tailwindcss/>.
>     1. They strictly enforce Pajamas specifications through the use of design tokens.
>     1. Color utilities support dark theme overrides.
>     1. Any necessary migrations have been completed: https://gitlab.com/groups/gitlab-org/-/epics/12108.
>     1. Development guidelines have been updated to reflect any direction change in how we write CSS.
> 1. Page-specific style definitions have been moved to individual bundles: https://gitlab.com/groups/gitlab-org/-/epics/3694.
> 1. CSS rules have been migrated to CSS utilities: https://gitlab.com/groups/gitlab-org/-/epics/8326.
> 1. Color declarations have been consolidated to only use Pajamas-compliant ones: https://gitlab.com/groups/gitlab-org/-/epics/8599.

As a result of the re-assessment, we are acknowledging that:

- The CSS utilities to Tailwind CSS migration is done.
- The "page-specific CSS bundles" and "CSS rules to CSS utilities" initiatives are conflicting with
  each other. One of these should be abandoned in favor of the other.
- We, as a task group, don't have the means to tackle the aforementioned initiatives. These should
  be owned by the frontend department, or we should spawn a new task group dedicated to these.
- What we _can_ do however is provide guidance on what we think would be the best approach going
  forward. This has been done through documentation updates.
- Regarding the color declarations consolidation, the fact that Tailwind CSS is now available in our
  main projects puts us in a better spot to achieve this goal. However, this is again outside of the
  scope of this task group. As we are still in the process of migrating our styles to design tokens,
  this initiative can be owned by the Design System group going forward.

Given all of the above, here are our updated exit criteria:

1. CSS utilities are generated with Tailwind in all active GitLab projects using GitLab UI.
1. Guidance as to how styles should be written going forward has been documented.

As of September 24, 2024, these goals have been attained and we are therefore disbanding the task group.

### Roles and Responsibilities

| Task Group Role | Person                   | Title                                                        |
| --------------- | ------------------------ | ------------------------------------------------------------ |
| DRI             | Paul Gascou-Vaillancourt | Senior Frontend Engineer, Foundations::Personal Productivity |
| Member          | Florie Guibert           | Senior Frontend Engineer, Plan::Product Planning             |
| Member          | José Iván Vargas López   | Senior Frontend Engineer, Verify::Pipeline Execution         |
| Member          | Peter Hegman             | Senior Frontend Engineer, Data Stores::Tenant Scale          |
| Member          | Savas Vedova             | Staff Frontend Engineer, Govern::Threat Insights             |
| Member          | Vanessa Otto             | Senior Frontend Engineer, Foundations::Design System         |
| Member          | Lukas Eipert             | Staff Frontend Engineer, Foundations::Personal Productivity  |
