---
title: "Purchasing Reliability Working Group"
description: "Learn more about Purchasing Reliability Working Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2021-12-01 |
| Target End Date | 2022-07-29 |
| Slack           | [#wg_purchasing_reliability](https://gitlab.slack.com/app_redirect?channel=C02PQ4U0E7K) (only accessible from within the company) |
| Google Doc      | [Purchasing Reliability Working Group Agenda](https://docs.google.com/document/d/1m6sozlyvEIEKcEIPF2_nujrYTOV3IPpx_jaPXD1hPpU/edit) (only accessible from within the company) |
| Issue Label | ~WorkingGroup::Purchasing  |

## Business Goals

A purchase and ordering system that is well-documented and easily understood by all stakeholders.
The system will be resilient, reliable, and observable from the ground up.
In addition to addressing our current use-cases, the system will easily accommodate the addition
of new purchasing workflows (like channel partners), metered billing, and project Horse.
Finally, this should all be achieved without sacrifices to the buyer experience. Touchpoints with
the product(s) should be even more seamless than they are today, especially if/as we begin surfacing
up-sell opportunities directly in the product.

## Definitions

### What is Purchasing?

At GitLab, "fulfillment" generally refers to the [Fulfillment Sub-department](/handbook/engineering/development/fulfillment/) of Engineering.

To avoid confusion, this Working Group uses "purchasing" as an all-encompassing term to describe
the end-to-end purchasing experience including (but not necessarily limited to) ordering, billing,
licensing, fulfillment, and all of our internal workflows
(like lead generation for Sales, and reporting for Finance).

Be aware if you see the term "fulfillment" used casually in the context of this Working Group,
it is likely referring to the entire "purchasing system", not the
[Fulfillment Sub-department](/handbook/engineering/development/fulfillment/) specifically.

## Related Projects & Documentation

### Slack channels

- [#s_fulfillment](https://gitlab.slack.com/app_redirect?channel=CMJ8JR0RH)
- [#s_fulfillment_engineering](https://gitlab.slack.com/app_redirect?channel=C029YFPUA6M)
- [#enterprise-apps](https://gitlab.slack.com/app_redirect?channel=CCPG8P3K4)
- [#bt-integrations](https://gitlab.slack.com/app_redirect?channel=C015U7R5XJ8)

### Prior Art

- Commercial & Licensing Working Group
  - [Handbook Page](/handbook/company/working-groups/commercial-licensing/)
  - [Agenda Doc](https://docs.google.com/document/d/1ayKH7rSKTCzjZojd15YFRk-T18xt-aznSNR-R4pFXnM/edit#heading=h.7liqin7jry4)
  - **Purpose:** Define business & customer experience requirements for a system to handle commercial and licensing transactions into the future.
  - **Outcomes:**
    - [Zuora Single Source of Truth Discusssion Paper](https://docs.google.com/document/d/1ayKH7rSKTCzjZojd15YFRk-T18xt-aznSNR-R4pFXnM/edit)
    - ???

### Infrastructure

Infrastructure team is committed to supporting Fulfillment in the migration of CustomersDot
from the legacy Azure VM to GCP by the end of 2022-01. See the discussion in [2021-11-30 Engineering Allocation Review](https://docs.google.com/document/d/1j_9P8QlvaFO-XFoZTKZQsLUpm1wA2Vyf_Y83-9lX9tg/edit)) for details.

This will help bring CustomersDot in line with the rest of our application stack in terms of how it is operated,
but the application will still need to be instrumented and alerting configured to address our current
lack of observability and insight into this app.

### Engineering (Fulfillment)

- [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com)
- [gitlab-org&3602](https://gitlab.com/groups/gitlab-org/-/epics/3602): GitLab <> Customers, License, Zuora Integration

### Enterprise Apps

- [Quote to Cash](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/)
- [Platypus](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/platypus)
- [gitlab-com/business-technology/enterprise-apps&293](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/-/epics/293): Distributor e-Marketplace

### Sales

- [Sales Systems](/handbook/sales/field-operations/sales-systems/) (i.e. Salesforce)
- [Internal Sales Handbook Definitions](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#bookmark=id.4z6lmbtfepzq)
- [Booking Metric Technical Docs](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/sfdc-booking-metric-fields/)

## Exit Criteria

The charter of this working group is to obtain alignment between stakeholders (i.e. Engineering (Development),
Enterprise Apps, Sales, and Finance). This includes addressing some immediate-term technical debt as well as
defining a clear vision and team/service boundaries going forward.

1. Infrastructure roadmap for each system defined
1. Data models for each system including sources of truth defined
1. System integrations of Order to Cash systems defined
1. Change management mechanisms across teams defined
1. FY23 team structure and staffing plans for each team defined, with a view into committed roadmap items ~2 quarters out for cross-team coordination.

## Roles and Responsibilities

| Working Group Role    | Person                | Title                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| Executive Sponsor     | Justin Farris        | Sr Director, Product Monetization                                             |
| Facilitator           | Omar Fernandez           | Acting Director of Product, Fulfillment         |
| Facilitator           | Jerome Z Ng           | Senior Engineering Manager, Fulfillment |
| Member                | Steve Loyd            | VP Infrastructure                               |
| Member                | Bryan Wise            | VP of IT                                        |
| Member                | Robert Rea            | Senior Director, IT Ops                         |
| Member                | Chase Southard        | Engineering Manager, Fulfillment:Utilization    |
| Member                | James Lopez           | Engineering Manager, Fulfillment:License        |
| Member                | Ragnar Hardarson      | Engineering Manager, Fulfillment:Purchase       |
| Member                | Etienne Baqué         | Senior Backend Engineer, Fulfillment:Utilization    |
| Member                | Tyler Amos            | Staff Backend Engineer, Fulfillment:License        |
| Member                | Qingyu Zhao           | Senior Backend Engineer, Fulfillment:Purchase       |
| Member                | Tatyana Golubeva      | Principal Product Manager, Fulfillment:Purchase        |
| Member                | Daniel Parker         | Senior Integrations Engineer, Business Technology |
| Member                | Mark Quitevis         | Senior Business Systems Analyst, Business Technology |
| Member                | Courtney Meddaugh     | Senior Business Systems Analyst, Business Technology |
| Member                | Jack Brennan          | Senior Director, Sales Systems                  |
| Member                | Vincy Wilson          | Manager, Quality                                |
| Member                | Chloe Liu             | Senior Software Engineer in Test, Quality       |
| Member                | Christopher Nelson    | Sr Director, Enterprise Applications              |
