---
title: "Development Metrics Working Group"
description: "The GitLab Development Metrics Working Group aims to speed up the delivery of value to customers by creating & interpreting quality metrics"
---

## Attributes

| Property | Value |
|----------|-------|
| Date Created | February 26, 2019 |
| Date Ended   | August 22, 2019 |
| Slack        | [#wg_dev-metrics](https://gitlab.slack.com/messages/CGQ4R90F5) (only accessible from within the company) |
| Google Doc   | [Development Metrics Working Group Agenda](https://docs.google.com/document/d/1Y50uhpRW0zSGWI-TzPxHnwEHyOl7uWiyCzXtpRJd1_E/edit) (only accessible from within the company) |

## Business Goal

Speed up the time to deliver value to our customers by creating new development & quality metrics, interpreting them and implementing improvements.

Areas:

- Development velocity and throughputs.
- Time to triage and fix defects.
- Time to resolve customer defects.

## Exit Criteria (100%)

- 20% increase in development department throughput. => **Done** We touched on 9 MRs per author per month.
- Defined KPIs for the development organization in a dashboard. => **Done** KPIs for this working group is done.
- Ensure all customer facing bugs have a severity label. => **Done** severity/priority labels applied. [Triage existing customer bugs](https://gitlab.com/gitlab-org/gitlab-ce/issues/63136)
- Gather time to resolve severity::1/severity::2 issues in an automated fashion with ability to filter only customer affecting defects. => **Done** [Create Visualization for mean time to resolve severity::1-severity::2 functional defects](https://gitlab.com/gitlab-org/gitlab-insights/issues/109)
- Provide missed SLO visibility of priority::1/priority::2 bugs to Product and Engineering Managers to maintain SLO threshold of priority::1/priority::2 bugs. => **Done** [Remove SLO detection for priority::3](https://gitlab.com/gitlab-org/quality/triage-ops/issues/230) [Remove missed-slo from priority::3/priority::4 bugs](https://gitlab.com/gitlab-org/quality/triage-ops/issues/238)
- Provide visibility into completed deliverables vs non-deliverables. => **Done** [Show completed deliverables per milestone](https://gitlab.com/gitlab-org/gitlab-insights/issues/119)
- An effective iteration to the current [stage group triage package/report](/handbook/engineering/infrastructure/engineering-productivity/triage-operations/#devops-group-level-issues) to highlight customer affecting defects. => **Done** [Triage package v2.0](https://gitlab.com/gitlab-org/quality/triage-ops/issues/186)
- Training for Engineering Managers and Product Managers to use Priority and Severity label effectively. => **Done** [Triage training recording for EMs and PMs](https://gitlab.com/gitlab-org/quality/team-tasks/issues/148) now linked to the triage-operations landing page.
- Training for Engineering Managers on KPIs and interventions they can make. => **Done** Reviewed current iteration, material is adequate.

## Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Facilitator           | Mek Stittri           | Director of Quality            |
| Triage Lead           | Mark Fletcher         | Engineer, Engineering Productivity |
| Member                | Rémy Coutable         | Staff Engineer, Engineering Productivity |
| Member                | Kyle Wiebers          | Senior Engineer, Engineering Productivity |
| Member                | Joshua Lambert        | Senior Product Manager, Scaling |
| Member                | Dalia Havens          | Director of Engineering, Ops   |
| Member                | Craig Gomes           | Engineering Manager, Memory    |
| Member                | Lyle Kozloff          | Support Engineering Manager    |
| Member                | Dennis Tang           | Frontend Engineering Manager   |
| Member                | Virjinia Alexieva     | Senior Product Manager, Framework (Analytics) |
| Executive Stakeholder | Christopher Lefelhocz | Senior Director of Development |

## Artifacts

- We are working towards [a new accounting method of capturing work done towards the product delivered to customers](https://gitlab.com/gitlab-org/gitlab-insights/issues/134).
- We will [update training materials](https://gitlab.com/gitlab-com/www-gitlab-com/issues/5137) when the new dashboards are updated per the new accounting method.
- We are deprecating the Quality Dashboard with an [end-of-life plan](https://gitlab.com/gitlab-org/gitlab-insights/issues/116) that will transition the metrics into the product or Periscope.
- Engineering Productivity engineers are now [collaborating with the data team](https://gitlab.com/gitlab-data/analytics/issues/2105) and contributing to Periscope directly.
- Development will collaborate with Engineering Productivity via a [cross-functional board](https://gitlab.com/groups/gitlab-org/-/boards/1262515) identified with the label `~dev-quality`
- We will [revisit the time to resolve of severity::1 severity::2 bugs in 2 releases](https://gitlab.com/gitlab-org/quality/team-tasks/issues/203) and re-evaluate after all the above improvements have been made.
- An archive of all the meetings is available as a [GitLab Unfiltered Youtube playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KoXVkxaVXFoUjM0K1qLHAJ3)
