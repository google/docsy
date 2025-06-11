---
title: "Transient bugs"
description: "Build tooling for transient issues and outline process for sustainable early mitigations"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | November 16, 2020 |
| Date Ended      | February 23, 2021 |
| Slack           | [#wg_transient-bugs](https://gitlab.slack.com/archives/C01EUKUM5DK) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/14rB6o7udwgWitV9lB7S3fzjHBaaqrG_23WVz89mHqGo/edit#heading=h.gp5w1bjoz2ug) (only accessible from within the company) |
| Task Board      | [Issue board](https://gitlab.com/groups/gitlab-org/-/boards/2190215) |
| Bug Board       | [`bug::transient` board](https://gitlab.com/groups/gitlab-org/-/boards/2206756) |

## Business Goal

Build tooling for transient issues and outline process to sustainable prevent transient issues early on.

[Transient bugs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/index.html#transient-bugs) have become our focus in FY21Q4 OKRs. We have multiple cross-functional efforts and KRs in both Development and Quality and want to shore-up the momentum on addressing these issues earlier with the appropriate tooling and process in place.

### Exit Criteria (100% progress)

1. Reword Engineering FY21Q4 OKRs to reflect proactive mitigation of transient issues. `=> 100%`
1. [Build transient developer tooling to help reproduce transient bugs locally.](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/759) `=> 100%`
1. Build transient test pipeline to help detect transient bugs (GDK,CI,Test flaky reports). `=> 100%, completed`
1. [Identify top 3 product groups where fixing transient bugs can help increase GMAU.](https://gitlab.com/gitlab-org/frontend/general/-/issues/40) `=> 100%, analysis done, need to add to handbook`
1. [Update our documentation on architectural patterns that can prevent transient bugs.](https://gitlab.com/gitlab-org/gitlab/-/issues/293858) `=> 100%`
   - [https://docs.gitlab.com/ee/development/transient/prevention-patterns.html](https://docs.gitlab.com/ee/development/transient/prevention-patterns.html)
1. [Incorporate transient bugs into existing triage process and prioritization.](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/760) `=> 100%, have minimal prioritization, working on triage automation`
   - [https://about.gitlab.com/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#merge-requests-experience](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#merge-requests-experience)
1. Build a measurement to increase visibility of transient bugs. `=> 100%, there is now a transient bug dashboard in Sisense`

### Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Executive Sponsor     | Christopher Lefelhocz | VP of Development              |
| Facilitator           | Mek Stittri           | Director of Quality            |
| Functional Lead       | Tim Zallmann          | Director of Development, Dev     |
| Functional Lead       | Ramya Authappan       | Quality Engineering Manager, Dev |
| Functional Lead       | Valerie Karnes        | Director of Product Design |
| Member                | Tanya Pazitny         | Quality Engineering Manager, Enablement |
| Member                | Darva Satcher         | Senior Engineering Manager, Create |
| Member                | Michelle Gill         | Engineering Manager, Create:Source Code |
| Member                | André Luís            | Engineering Manager, Create:Source Code,  Create:Code Review |
| Member                | Phil Hughes           | Staff Frontend Engineer, Create:Code Review |
| Member                | Mark Lapierre         | Senior Software Engineer in Test, Create:Source Code |
| Member                | Sofia Vistas          | Software Engineer in Test, Package:Package  |
| Member                | Erick Banks           | Senior Software Engineer in Test, Enablement:Search |
| Member                | Tiffany Rea           | Software Engineer in Test, Verify:Continuous Integration       |
