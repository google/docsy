---
title: "CSS Utilities Task Group"
description: "Learn more about the CSS Utilities Task Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created    | 2024-02-20                                                                                                                              |
| Target End Date | 2025-01-31                                                                                                                              |
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

1. CSS utilities are generated with Tailwind: https://docs.gitlab.com/ee/architecture/blueprints/tailwindcss/.
    1. They strictly enforce Pajamas specifications through the use of design tokens.
    1. Color utilities support dark theme overrides.
    1. Any necessary migrations have been completed: https://gitlab.com/groups/gitlab-org/-/epics/12108.
    1. Development guidelines have been updated to reflect any direction change in how we write CSS.
1. Page-specific style definitions have been moved to individual bundles: https://gitlab.com/groups/gitlab-org/-/epics/3694.
1. CSS rules have been migrated to CSS utilities: https://gitlab.com/groups/gitlab-org/-/epics/8326.
1. Color declarations have been consolidated to only use Pajamas-compliant ones: https://gitlab.com/groups/gitlab-org/-/epics/8599.

### Roles and Responsibilities

| Task Group Role | Person                   | Title                                                |
| --------------- | ------------------------ | ---------------------------------------------------- |
| DRI             | Paul Gascou-Vaillancourt | Senior Frontend Engineer, Manage::Foundations        |
| Member          | Florie Guibert           | Senior Frontend Engineer, Plan::Product Planning     |
| Member          | José Iván Vargas López   | Senior Frontend Engineer, Verify::Pipeline Execution |
| Member          | Peter Hegman             | Senior Frontend Engineer, Data Stores::Tenant Scale  |
| Member          | Savas Vedova             | Senior Frontend Engineer, Govern::Threat Insights    |
