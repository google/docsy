---
title: "Improve Ops Quality"
description: "Work on critical test gaps to mitigate future incidents and empower developers to efficiently work on test coverage"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | March 3rd, 2021 |
| Target End Date | July 7th, 2021  |
| Slack           | [#wg_improve-ops-quality](https://join.slack.com/share/zt-mvpz7iqd-JHTWucxR3YiCayWM~A25Vg) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/11iNJ9-KslGfDr6NtVeimLNSa1kWK_2k4uc2wxS4Baw4/edit) (only accessible from within the company) |
| Task Board      | [Issue board](https://gitlab.com/groups/gitlab-org/-/boards/2448760) |

## Business Goal

Mitigate future incidents by empowering developers to efficiently work on test coverage; identifying and addressing missing test infrastructure and testing categories; and filling test gaps in high-risk product categories.

### Entry Criteria

1. Identify [high-risk product groups](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/76328).

### Exit Criteria (100% completed)

1. Analyze all high-severity incidents in the past 3 months and list improvement themes needed (e.g. mixed deployments, new staging, load testing, better tests outside unit tests). `=> 100%`

   - [Review package incidents review](https://gitlab.com/gitlab-org/gitlab/-/issues/323340)
   - [Pipeline Execution/Runner incidents review](https://gitlab.com/gitlab-org/gitlab/-/issues/324364)
   - [Runner executable E2E environment](https://gitlab.com/gitlab-org/ci-cd/tests/runner-incept)

1. Add runner executable E2E test environment `=> 100%`
1. Add test coverage for high risk runner functionality `=> 100%`
1. [Set up load testing environment for PE](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/832) `=> 100%`
1. Address critical test gaps with new smoke tests for Package group `=> 100%`
1. Update our process, documentation, on-boarding, and culture going forward. `=> 100%`

   - Create risk map for [PE](/handbook/engineering/development/ops/verify/pipeline-execution/risk-map/), [Runner](/handbook/engineering/development/ops/verify/runner/risk-map/), and [Package](https://gitlab-org.gitlab.io/ci-cd/package-stage/risk-mapping/) `=> 100%`
   - [Create generalized risk mapping framework](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/83300) `=> 100%`
   - Create 3 end-to-end overview videos for training `=> 100%`
   - Train 1 maintainer each for Package, Runner, PE on end-to-end testing `=> 100%`

### Post working group planned improvements

Items identified to continue work on past the scope of the Working Group but necessary for ongoing improvement of Ops quality.

1. [Runner staging environment](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/27684)
1. [Mixed deployment test environment](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/888)
1. [Package and Container Registry performance test environments](https://gitlab.com/gitlab-org/gitlab/-/issues/328209)
1. Add a performance test for Pipeline Execution
1. Add `e2e test contributor` role to `team.yml` for non-SET/EPE Engineers who have been trained to or have worked with the e2e test framework

### Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Executive Sponsor     | Mek Stittri           | VP of Quality            |
| Facilitator           | Joanna Shih           | Quality Engineering Manager, Ops |
| Functional Lead       | Sofia Vistas          | Sr. Software Engineer in Test, Package:Package |
| Functional Lead       | Tiffany Rea           | Software Engineer in Test, Verify:Pipeline Authoring |
| Functional Lead       | Zeff Morgan           | Sr. Software Engineer in Test, Verify:Runner |
| Stakeholder           | Christopher Lefelhocz | VP of Development              |
| Stakeholder           | Brent Newton          | Director of Infrastructure, Reliability |
| Member                | Kenny Johnston        | Sr. Director of Product Management, Ops |
| Member                | Sam Goldstein         | Director of Engineering, Ops   |
| Member                | Jackie Porter         | Group Manager, Product, Verify   |
| Member                | Dan Croft             | Sr. Manager, Engineering, Continuous Delivery |
| Member                | Darby Frey            | Sr. Manager, Engineering, Verify |
| Member                | Cheryl Li             | Backend Engineering Manager, Verify:Pipeline Execution |
| Member                | Elliot Rushton        | Backend Engineering Manager, Verify:Runner |
| Member                | Tanya Pazitny         | Interim Director of Quality Engineering |
| Member                | Nailia Iskhakova      | Sr. Software Engineer in Test, Enablement:Distribution |
