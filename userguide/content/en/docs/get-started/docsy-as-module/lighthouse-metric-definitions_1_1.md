---
title: "Lighthouse Metric Definitions"
description: "Drive cross-functional alignment around Lighthouse Metric Definitions for Customer Use Case Adoption."
status: active
---

## Purpose

This working group is charged with driving the necessary cross-functional alignment, prioritization, and execution required to define the [Lighthouse Metric and Leading Indicators](https://internal.gitlab.com/handbook/enterprise-data/data-catalog/product-adoption-lighthouse-metrics/ ) for each Customer Product Adoption Use Case. This #lighthouse-metric-defintions working group ladders up and is an input to the #customer-use-case-adoption working group. The #lighthouse-metric-defintions working group has a narrower scope than the #customer-use-case-adoption working group and is focused on defining the Lighthouse Metrics and Leading Indicators. The #customer-use-case-adoption working group defined the CI Adoption Lighthouse Metric and Leading Indicators. The #lighthouse-metric-definitions working group will create a Single Playbook for determining which metric(s) best measure customer adoption of a use case. The playbook will be used to define the Security and Compliance Lighthouse Metrics and Leading indicators in FY24-Q4. The formation of this working group will accelerate efforts to win against GitHub and reduce Churn & Contraction.

**Desired Outcomes**

1. Develop a single, cross-functional playbook to define the Lighthouse Metrics and Leading Indicators for each Customer Product Adoption Use Case
1. Drive **cross-functional alignment** around the Lighthouse Metrics and Leading Indicators definition process across sales, customer success, product, data, finance, etc.
1. Publish a certified Tableau dashboard that shows the performance of the Lighthouse Metrics versus target for CI, Security, and Compliance

### FY24-Q4 Customer Use Cases in Scope

1. CI
1. Security
1. Compliance

## Attributes

| Property                       | Value      |
|--------------------------------|------------|
| Date Created                   | 2023-11-01 |
| Target End Date                | 2024-01-31 |
| Slack                          | #wg_lighthouse-metric-definitions |
| Google Doc                     | [Lighthouse Metric Definitions Agenda](https://docs.google.com/document/d/1MFpr7p8nu5qTwo8xaIyX1aPyYT2ulk2yqXKUJYx676M/edit#heading=h.5pzaui1699w8) |
| Epic - Primary                 | [Primary](https://gitlab.com/groups/gitlab-data/-/epics/1083)|
| Epic - Security                | [Security](https://gitlab.com/gitlab-data/analytics/-/issues/18848) |
| Epic - Compliance              | [Compliance](https://gitlab.com/gitlab-data/analytics/-/issues/18849) |
| Board                          | [Lighthouse Metric Definitions Board](https://gitlab.com/gitlab-data/analytics/-/boards/7148077?label_name%5B%5D=WorkingGroup%3A%3ALighthouseMetric) |
| Overview & Status              | See [Exit criteria](#exit-criteria) below |

## Exit criteria

Note that these goals are aspirational so we set a high bar (and potentially achieving something that is good enough vs. setting a low bar and not achieving something that is good enough).

- [ ] Lighthouse Metrics for Security and Compliance have been defined in the handbook
- [ ] Publish a Certified Tableau Dashboard that shows the performance of the Lighthouse Metric versus target for CI, Security, and Compliance
- [ ] Publish a single, cross-functional playbook to define the Lighthouse Metrics and Leading Indicators in the handbook

## Roles and Responsibilities

| Working Group Role                           | Person                        | Title                                                      |
|----------------------------------------------|-------------------------------|------------------------------------------------------------|
| Executive Sponsor                            | David Sakamoto                | VP, Customer Success                                       |
| DRI/Facilitator                              | Israel Weeks                  | Director, Data and Analytics                               |
| Functional Lead - CSM                        | Sherrod Patching              | VP, Customer Success Management                            |
| Functional Lead - CS Strategy & Ops          | Brittney Sinq                 | Senior Director, CS Strategy and Operations                |
| Functional Lead - Product                    | Jackie Porter                 | Director, Product Management                               |
| Functional Lead - Product                    | Sam White                     | Group Manager, Product Management                          |
| Functional Lead - Product                    | Sarah Waldner                 | Group Manager, Product Management                          |
| Functional Lead - Product                    | Justin Farris                 | Senior Director, Product Management                        |
| Functional Lead - Product                    | Sam Kerr                      | Group Manager, Product Management                          |
| Member - Customer Success Operations         | Michael Arntz                 | Sales Strategy Manager                                     |
| Member - Customer Success Operations         | Nishant Khanna                | Senior Customer Success Operations Analyst                 |
| Member - Customer Success Operations         | Brandon Butterfield           | Senior Sales Analytics Analyst                             |
| Member - Product                             | Mike Flouton                  | VP of Product Management                                   |
| Member - Product                             | Hillary Benson                | Senior Director, Product Management                        |
| Member - Product                             | Tanuja Jayarama Raju          | Product Manager, Product Management                        |
| Member - Product                             | Carolyn Braza                 | Senior Manager, Product Data Insights                      |
| Member - Enterprise Data                     | Michelle Cooper               | Senior Analytics Engineer                                  |
| Member - Enterprise Data                     | Miles Russell                 | Senior Analytics Engineer                                  |
| Member - Enterprise Data                     | Amie Bright                   | VP of Enterprise Data and Analytics                        |
| Member - Enterprise Data                     | Jong Lee                      | Data Analyst                                               |
| Member - Enterprise Data                     | Naheil McAvinue               | Senior Manager, Data                                       |
| Member - Office of the CEO                   | David Tuan                    | Director, Strategy and Operations                          |

## Jobs to be done by the Working Group

| Job to be Done                                | DRI(s)                             | Department                                                               |
|-----------------------------------------------|------------------------------------|--------------------------------------------------------------------------|
| Opportunity canvas and defining outcomes      | Brittney Sinq, Sherrod Patching    | Customer Success                                                         |
| Opportunity canvas and defining outcomes      | Jackie Porter, Mike Flouton        | Product Management - CI                                                  |
| Opportunity canvas and defining outcomes      | Hillary Benson, Sam White, Sarah Waldner | Product Management - Compliance                                   |
| Opportunity canvas and defining outcomes      | Hillary Benson, Sarah Waldner, Sam White | Product Management - Security                                     |
| Instrument New Metrics                        | Jackie Porter, Sam White, Sam Kerr, Sarah Waldner | Product Management - CI, Security, Compliance, Analytics Instrumentation |
| Defining Lighthouse Metrics in the Hanbook    | Israel Weeks                       | Enterprise Data                                                          |
| Build and publish certified Tableau dashboard | Naheil McAvinue                    | Enterprise Data                                                          |
| Build dbt data models                         | Israel Weeks                       | Enterprise Data                                                          |

## Multimodal Communication

- Apply the following labels to issues and epics to enable tracking and team wide visibility
  - `WorkingGroup::LighthouseMetric`
  - `UseCase::CI`
  - `UseCase::Security`
  - `UseCase::Compliance`
- Apply the appropriate [Working Group status labels](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=wg-status) for issues or epics
  - `wg-status::Not Started`
  - `wg-status::Ready`
  - `wg-status::In Progress`
  - `wg-status::Blocked`
  - `wg-status::Complete`
  - `wg-status::Cancelled`
- Formalize "asks" of the Working Group by filing an issue against the [EPIC](https://gitlab.com/groups/gitlab-data/-/epics/1083) to enable cross-functional visibility, collaboration, and prioritization
