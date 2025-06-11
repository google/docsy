---
title: "Dogfood Plan Working Group"
description: "This working group will integrate new Plan stage features in GitLab's own agile planning process."
---

## Attributes

| Property     | Value            |
|--------------|------------------|
| Date Created | August 1, 2020   |
| Date Ended   | December 15, 2020|
| Slack        | [#wg_dogfood_plan](https://gitlab.slack.com/archives/C0188LMC2LQ) (internal only) |
| Google Doc   | [Dogfood Plan Working Group Agenda](https://docs.google.com/document/d/1x7WZd_ilH9N4TvbUwdFKw2hcdlQ80SaN2CmHdNwnEzI/edit) (internal only) |

## Business Goal

This working group will integrate new Plan stage features in GitLab's own agile planning process. Additionally, there may be some existing features we can consume. We would start with the Plan stage group itself, asking the people who are responsible for the features to implement their usage locally. Assuming success we might roll this out further across R&D (other stages) in a future iteration. The benefits we hope to achieve are:

- Our current process is not standardized and some teams are probably planning releases in a sub-optimal (not efficiently, transparently, async, etc) because they are not benefitting from what other teams have figured out works well
- Dogfooding
  - If we're going to standardize on a tool it should be our own product
  - It'll make the product better for users/customers
- This will reiterate to the team, users, and customers how invested we are in our own planning feature set while GitLab also integrate with other planning tools because they are entrenched in customer organizations

## Exit Criteria

- [x] Determine feature within plan that will be used for dogfooding
  - [Iterations](https://docs.gitlab.com/ee/user/group/iterations/) => **Done** We selected Iterations in Q and drove it internally in Plan to be used across the quarter
- [x] Finalized Q3 OKR's => **Done**
  - [FY21-Q3 Engineering Division OKRs](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8303)
  - Development: [KR: Project planning & Portfolio management](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8429)
    - [KR: 50% of ~devops::plan ~"type::feature" issues moved to ~"workflow::In Dev" should have an iteration assigned](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9058) => 86%
    - [KR: 50% of the ~devops::plan issues in a single iteration is burned down](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9059) => 100%
  - UX: [KR: Dogfood the Iterations feature in Plan to decrease the time issues spend in workflow::design](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8436)
  - Quality: [KR: Dogfood project planning and project management feature for proactive quality test-planning processes](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8369)
  - PM: [KR: Dogfood iterations](https://gitlab.com/gitlab-com/Product/-/issues/1406)
- [x] An epic with issues that are needed to effectively use iterations within the greater GitLab organization => **Done**
  - [Iterations in GitLab](https://gitlab.com/groups/gitlab-org/-/epics/2422)
- [x] Define a future target plan feature for dogfooding to introduce to all stages => **Done**
  - In Q4 we are introducing Epic Swimlanes to all stages and want to see usage in 13 stages until the end of the quarter
- [x] A recorded YouTube demo video suitable for teaching other stages how to modify their processes to use iterations => **Will happen as more vital features are added**

## Roles and Responsibilities

| Working Group Role          | Person            | Title                        |
|-----------------------------|-------------------|------------------------------|
| Facilitator                 | Tim Zallmann      | Director of Engineering      |
| Development Department Lead | Donald Cook       | Frontend Engineering Manager |
| UX Department Lead          | Mike Long         | Product Design Manager       |
| Quality Department Lead     | Ramya Authappan   | Quality Engineering Manager  |
| PM Division Lead            | Jeremy Watson     | Group Manager, PM            |
| Member                      | Gabe Weaver       | Senior Product Manager       |
| Member                      | Keanon O'Keefe    | Senior Product Manager       |
| Member                      | Mark Wood         | Senior Product Manager       |
| Member                      | John Hope         | Backend Engineering Manager  |
| Member                      | Jake Lear         | Backend Engineering Manager  |
| Executive Sponsor           | Christopher Lefelhocz | VP of Development        |

## Artifacts

- The plan team and a couple more are actively using Iterations at the moment
- A clear understanding of what works and what doesn't was generated around the feature
- Keeping the dogfooding activity rolling we have agreed to keep a biweekly work meeting while we introduce Epic swimlanes through tutorial videos, office hours and announcements
