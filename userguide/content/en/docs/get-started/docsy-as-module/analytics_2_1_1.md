---
title: "Analytics Section"
---

## What we cover

## Who we are

### Product Groups

Here are the individuals who work as part of one of the Analytics Section groups.

<div class="container">
    <div class="row">
        <div class="col">{{% section-group-table "Analytics Instrumentation" %}}</div>
        <div class="col">{{% section-group-table "Product Analytics" %}}</div>
        <div class="col">{{% section-group-table "Observability" %}}</div>
    </div>
</div>

## Section structure

The section is covered by groups from teams across two primary departments, Engineering and Product. Teams and team members from those departments have their own handbook pages linked below.

- Engineering
  - [Development](/handbook/engineering/development/)
    - [Analytics Instrumentation](/handbook/engineering//development/analytics/monitor/analytics-instrumentation/)
    - Product Analytics
  - [UX](/handbook/product/ux/#team-structure)
  - [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)
- Product
  - TBD

## Investment Allocation

The [product groups](/handbook/company/structure/#product-groups) within the Analytics Section are outlined in the [product categories page](/handbook/product/categories/#analytics-section).

The product department determines our [investment](https://internal.gitlab.com/handbook/product/investment/) within the section by allocating headcount for development team members to product groups. While doing so we adhere to the following principles:

- All product groups will maintain at least a 1:1:1 ratio between three primary DRIs - Product Managers, Product Designers and Engineering Managers.
- We don't currently maintain 1:1:1:1 ratio for the additional Software Engineer in Test (SET) DRI but desire to have singular stable-counterparts between SETs and product groups.
- We will strive to maintain at least 6 developers (FE + BE) in each product group

### SaaS Performance Indicators

TBD

### Analytics Stack ownership

The [Analytics Stack](https://gitlab.com/groups/gitlab-org/-/epics/8562) drives the functionality required to operate Product Analytics features within GitLab.

The Analytics Stack is currently composed of the following functionality:

- Event ingestion: Jitsu, [to be replaced by Snowplow](https://gitlab.com/groups/gitlab-org/-/epics/9865)
- Data storage: Clickhouse
- Data querying: Cube

An ownership model is explicitly called out as different groups within the Analytics Section are responsible for different pieces of functionality in the Analytics Stack:

| Functionality | Owner | Key Stakeholder |
|---|---|---|
| Event ingestion | Analytics Instrumentation | Product Analytics |
| Data storage | Product Analytics | Analytics Instrumentation |
| Data querying | Product Analytics | Analytics Instrumentation |

With this model, Owners are required to notify Key Stakeholders of significant changes to any Functionality, given that there may be impact to other pieces of Functionality working upstream/downstream.

## Meetings

TBD

### Analytics Section Manager Meetings

TBD

#### Async Meeting

TBD

#### Function Based Performance Indicators (PI) Review

TBD

#### 5x5s

In order to satisfy intent `#1` - we'll start the meeting series by doing a weekly rotation of 5x5s - five minute presentations on five slides introducing yourself to the rest of the team.

### Analytics Section Retrospective

TBD

#### Intent

The intent of the Section Retrospective Summary meetings is to:

1. Share reflections, lessons learned and best practices across stages and groups
1. Serve as a communal forum to solve broad in scope problems or persistent blockers
1. Share and celebrate accomplishments to give visibility into what other stages and groups are working on

#### Expectations

It's expected that engineering managers, engineers, and product managers contribute to the document sharing their stage reflections, lessons learned, and best practices in how their teams operate and how they perform retrospectives. Sharing these reflections, lessons learned, and best practices in the form of group handbook page content is preferred.

#### Moderators

Each Section Retrospective is led by a team member from the group. Any Analytics team members can volunteer as moderator by adding their name to the table below:

| Milestone | Moderator | Issue link |
| --------- | --------- | ---------- |
| 15.2  |  |  |
| 15.3  |  |  |
| 15.4  |  |  |
| 15.5  |  |  |
| 15.6  |  |  |
| 15.7  |  |  |
| 15.8  |  |  |
| 15.9  |  |  |
| 15.10  |  |  |

### Analytics PM Meeting

TBD

## Analytics Section Recent News, Milestones, Accomplishments and Exciting Things

### Recent News

TBD

### Exciting Things

TBD

### Recent Accomplishments

TBD

## References

- [Product categories](/handbook/product/categories/#analytics-section)
- [Direction](https://about.gitlab.com/direction/monitor/)
