---
title: "Next Architecture Workflow"
description: "The charter of this working group is to define and implement the next iteration of the Architecture Evolution Workflow."
status: active
---

## Attributes

| Property        | Value                                         |
|-----------------|-----------------------------------------------|
| Date Created    | July 1, 2022                                  |
| End Date        | December 31, 2022                             |
| Slack           | [#architecture](https://gitlab.slack.com/archives/CJ4DB7517) (internal)     |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1n1pslXw6yeoqRmsWGi4VYu9bPg8k46IIXqdUTJR8HSU) (internal) |

### Problem Statements

1. [Cross-functional prioritization](/handbook/product/product-processes/cross-functional-prioritization/) framework allocates
   some amount of time towards maintenance activities. It is not prescriptive
   regarding how Engineering Managers and Engineers might coordinate across
   multiple teams to execute on large-scale cross-functional projects like those
   defined by [architecture evolution blueprints](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints).
1. [Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/) is complex, and has
   many steps that make it difficult to adopt the workflow and to succeed with
   with using it to deliver larger, long-term initiatives.
1. In its current form, the [Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/)
   is not leveraged for many initiatives within departments of Engineering. Without
   a unified roadmap of our own, it is difficult to weigh priorities against
   Product's own roadmap.

### Exit Criteria

The charter of this working group is to define and implement the next iteration of the
[Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/).

We want to make it easier and more intuitive to use the Workflow, but also to
improve the process itself, to position team members better for delivering
great results by using it.

- Firm up the definition of "Architecture" and "Blueprint" in this context.
- Take inventory of current and historical [Engineering Allocation](/handbook/engineering/#engineering-allocation)
  initiatives and evaluate the extent to which such initiatives could be defined as
  [blueprints](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints), following the [Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/).
- Lower the entry barrier for creating a proposal in a blueprint.
- Establish criteria for when a blueprint should be used.
- Identify cross-functional touchpoints and consolidate upstream processes like
  [production readiness](/handbook/engineering/infrastructure/production/readiness/),
  [AppSec reviews](/handbook/security/product-security/application-security/runbooks/review-process),
  and [creation of release posts](/handbook/marketing/blog/release-posts/).
- Develop strategy for incorporating this process and the Engineering roadmap into Product planning
  and prioritization via the [Cross-functional Prioritization](/handbook/product/product-processes/cross-functional-prioritization/) framework.

### Context

- The [Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/) is complex, spans
  multiple tools and projects, and is not something external contributors can
  participate in.
- [Architecture Blueprints](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints) provide great context and detail, but
  they are completely disconnected from Product prioritization and thus rarely
  picked up into the workstream.
- [Working Groups](/handbook/company/working-groups/) involving technical
  initiatives have a low rate of success. Many *choose* to produce blueprints
  as part of their exit criteria, but blueprints are not standard and do very
  little to ensure the work gets done.
- [Cross-functional Prioritization](/handbook/product/product-processes/cross-functional-prioritization/) aims to replace
  [Engineering Allocations](/handbook/engineering/#engineering-allocation) but is not prescriptive
  regarding how efforts involving engineers across multiple Product stages will
  be coordinated.

The following recording from the
[Rate Limit Architecture](/handbook/company/working-groups/rate-limit-architecture/)
Working Group included some organic discussion around this topic as we attempt
to redefine exit criteria that will result in a successful implementation after
the working group concludes:

{{< youtube "um9deEVp618?start=1961" >}}

> *Note:* the video is private. Try [this link](https://www.youtube.com/watch?v=um9deEVp618&t=1961s)
> if the embedded video is not playable.

### Prior Efforts

#### Architecture Kickoff Working Group

The [Architecture Kickoff](/handbook/company/working-groups/architecture-kickoff/) working group
was primarily concerned with [defining a 3/6/12-month technical roadmap](/handbook/engineering/architecture/roadmap/).
This working group picks up by further iterating on the process for maintaining this roadmap over time
and better facilitating its implementation.

#### Special Interest Groups

We have previously attempted to introduce a new organizational structure for facilitating cross-functional
work in the form of Special Interest Groups (SIGs)
(see [`gitlab-com/www-gitlab-com!104378`](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/104378)),
but it was difficult to demonstrate incremental value with this approach.

We hope to see more success by focusing on the consolidation and streamlining of existing process
and improving the success rate of working groups in their current form first.

## Roles and Responsibilities

| Working Group Role       | Person                          | Title                                          |
|--------------------------|---------------------------------|------------------------------------------------|
| DRI                      | Marshall Cottrell               | Principal, Strategy and Operations (Technical) |
| Executive Stakeholder    | Christopher Lefelhocz           | VP of Development                              |
| Member                   | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure             |
| Member                   | Joshua Lambert                  | Director of Product, Enablement                |
| Member                   | Sam Goldstein                   | Director of Engineering, Ops                   |
| Member                   | Andrew Newdigate                | Distinguished Engineer, Infrastructure         |
| Member                   | Kamil Trzciński                 | Distinguished Engineer, Ops and Enablement     |
| Member                   | Philippe Lafoucrière            | Security Architect, Security                   |
| Member                   | Grzegorz Bizon                  | Principal Backend Engineer, Ops                |
| Member                   | Lucas Charles                   | Staff Backend Engineer, Sec::Static Analysis   |
| Member                   | João Pereira                    | Staff Backend Engineer, Package                |
| Member                   | Natalia Tepluhina               | Staff Frontend Engineer, Plan                  |
| Member                   | Tyler Amos                      | Staff Backend Engineer, Fulfillment Platform  |
