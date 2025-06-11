---
title: "Product Accessibility Group"
description: "Ensure GitLab product compliance with accessibility guidelines"
status: active
---

## Attributes

| Property          | Value                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created      | 2023-07-19                                                                                                                                |
| Target End Date   | TBD                                                                                                                                       |
| Slack             | #wg_product_accessibility (only accessible from within the company)                                                                             |
| Google Doc        | [Agenda](https://docs.google.com/document/d/1Ss3vVvLS_sxwkuXT6zm2Unz69KRH2S_FWG_G3xUesRE/edit?usp=sharing) (only accessible from within the company) |
| Epic              | [HQ epic](https://gitlab.com/groups/gitlab-org/-/epics/11090)                                                       |
| Overview & Status | See [Exit Criteria Progress](#exit-criteria-progress)                                                                                     |

### Context

Since we were able to create a proof of concept with [axe-core](https://github.com/dequelabs/axe-core#the-accessibility-rules) to [automate accessibility checks](https://gitlab.com/gitlab-org/gitlab/-/issues/382848) in feature specs, we would like to include these assertions in the most of the GitLab feature specs, as well as in GitLab UI components codebase. This will allow us to ensure that GitLab accessibility compliance covers at least 57% of the WCAG guidelines (percent of accessibility issues that can be automated). It will also let us shift left our efforts to provide an accessible platform, by giving developers an easy way to monitor how introduced changes influence compliance. This initiative will entail writing tests, understanding existing violations, and finding ways to fix or document them.

Stakeholders for this project include frontend engineers, backend engineers and product designers.

### Exit Criteria

This Working Group has the following goals:

1. Include axe automated accessibility checks in automated feature tests.
1. Include axe automated accessibility checks in GitLab UI and write tests for components.
1. Compile a comprehensive list of known accessibility violations.
1. Develop and implement a plan for addressing accessibility violations, including evaluation plan/process and tooling.
1. Identify and bridge the gaps in accessibility frontend guide.
1. Plan for internal training.

#### Exit Criteria Progress

| Criteria                                                                                                                      | Start Date | Completed Date | Progress | DRI             |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | -------- | --------------- |
| [Add axe-core checks to feature specs](https://gitlab.com/groups/gitlab-org/-/epics/11126)                                    | 15-08-2023 |                | 20%      | `@psjakubowska` |
| [Add axe-core checks to components specs](https://gitlab.com/groups/gitlab-org/-/epics/11127)                                 | 16-04-2024 |                | 93%      | `@rchanila`     |
| [Compile a comprehensive list of known accessibility violations](https://gitlab.com/groups/gitlab-org/-/epics/16378)          | 19-10-2024 | 03-01-2025     | 100%     | `@tauriedavis`  |
| [Develop and implement a plan for addressing accessibility violations, including evaluation plan/process and tooling](https://gitlab.com/gitlab-org/gitlab/-/issues/497785) | 04-10-2024 |                | 0%       | `@you?`         |
| [Identify and bridge the gaps in accessibility frontend guide.](https://gitlab.com/gitlab-org/gitlab/-/issues/419777)         | 12-10-2023 | 27-02-2025     | 100%     | `@psjakubowska` |
| [Plan for internal training](https://gitlab.com/gitlab-com/people-group/learning-development/training-curriculum/-/issues/68) | 29-02-2024 |                | 100%     | `@jeldergl`     |

### Roles and Responsibilities

| Working Group Role | Person                     | Title                                        |
| ------------------ | -------------------------- | ---------------------------------------------|
| Executive Sponsor  | Tim Zallmann               | VP of Engineering, Core Development          |
| Facilitator        |                            |                                              |
| Functional Lead    | Paulina Sędłak-Jakubowska  | Frontend Engineer, Monitor:Respond           |
| Functional Lead    | Rahul Chanila              | Senior Frontend Engineer, Package            |
| Functional Lead    | Jeremy Elder               | Staff Product Designer, Manage:Foundations   |
| Member             | Enrique Alcántara          | Senior Frontend Engineer, Create:Editor      |
| Member             | Lisa Falcone               | Senior Paralegal, Legal & Corporate Affairs  |
| Member             | Scott de Jonge             | Senior Frontend Engineer, Manage:Foundations |
| Member             | Rajan Mistry               | Frontend Engineer, Plan:Product Planning     |
| Member             | Deepika Guliani            | Senior Frontend Engineer, Plan:Project Management   |
| Member             | Mohamed Moustafa           | Fullstack Engineer, Fulfillment:Provision    |
