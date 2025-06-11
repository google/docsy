---
title: "Self-managed Scalability Working Group"
description: "This group within GitLab ensure all new customers are set up in a standardized environment that will scales with their needs. Learn more!"
---

## Attributes

| Property        | Value        |
|-----------------|--------------|
| Date Created    | May 21, 2019 |
| Target End Date | June 23, 2020 |
| Slack           | [#wg_sm-scalability](https://gitlab.slack.com/messages/CJBEAQ589) (only accessible from within the company) |
| Google Doc      | [Self-managed Scalability Working Group Agenda](https://docs.google.com/document/d/1H9ENjGO5vNI1e0j3lm2e6zeK8F8o8H-69M3V7m3uYt8/edit) (only accessible from within the company) |
| Issue Board     | [gitlab-org boards 1131633](https://gitlab.com/groups/gitlab-org/-/boards/1131633) |

## Business Goal

Ensure all new customers are set up in a standardized environment that will scales with their needs. Migrate existing customers to an appropriate reference environment.

## Exit Criteria (100%)

- [Complete GitLab self-managed performance metrics](https://gitlab.com/groups/gitlab-org/-/epics/1352) => `100%`
- [Monitoring enabled by default for all large customers (Prometheus, Grafana and all exporters)](https://gitlab.com/groups/gitlab-org/-/epics/1339) => `100%`
- [Inventory of self-managed customers with scores of their environment](https://gitlab.com/groups/gitlab-org/-/epics/1338) => `100%` Scoring system has been defined.
- [Migrate one customer to our reference architecture](https://gitlab.com/gitlab-org/quality/performance/-/issues/65) => `100%`
- [List of additional needed reference architectures](https://gitlab.com/gitlab-org/quality/performance/issues/15) => `100%` We have identified 10K, 25K and 50K and the next immediate need.
- [10,000 user reference architecture](https://gitlab.com/groups/gitlab-org/-/epics/1336) => `100%`
- [25,000 user reference architecture](https://gitlab.com/gitlab-org/quality/performance/issues/57) => `100%`
- [50,000 user reference architecture](https://gitlab.com/gitlab-org/quality/performance/issues/66) => `100%`
- [First iteration of a mixed Kubernetes Omnibus architecture](https://gitlab.com/gitlab-org/quality/performance/issues/145) => `100%`

## Business outcome

- Since we have completed the performance testing, Our reference architecture has been the default starting point for self-managed customers looking to set up HA.
This is a significant improvement in efficiency by reducing the time SAs spend helping customers determine the right sizing/setup.
- The performance testing kit has been utilized by prospects who need to prove performance at scale as part of their pre-purchase due diligence.
Previously, the customer had to do this on their own, which was time consuming, complicated, and risked the deal moving forward.

## Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Facilitator           | Mek Stittri           | Director of Quality            |
| Support Lead          | Aric Buerer           | Support Engineer               |
| CS Lead               | Brian Wald            | Solutions Architects Manager   |
| Quality Lead          | Grant Young           | Sr. Software Engineer in Test  |
| Development Lead      | Matt Nohr             | Engineering Manager, Monitor   |
| PM Lead               | Dov Hershkovitch      | Senior Product Manager, Monitor:APM |
| Tech Writing Lead     | Achilleas (Axil) Pipinellis | Technical Writer         |
| Member                | Tom Cooney            | Director of Support            |
| Member                | Francis Potter        | Solutions Architect            |
| Member                | John Woods            | CSM Manager                    |
| Member                | Tanya Pazitny         | Quality Engineering Manager    |
| Member                | Andrew Newdigate      | Distinguished SRE              |
| Member                | Nailia Iskhakova      | Software Engineer in Test      |
| Member                | John Skarbek          | Senior Site Reliability Engineer, Delivery |
| Member                | Jason Plum            | Senior Distribution Engineer   |
| Member                | Vincy Wilson          | Quality Engineering Manager    |
| Member                | Catalin Irimie        | Support Engineer               |
| Executive Sponsor     | Eric Johnson          | VP of Engineering              |
