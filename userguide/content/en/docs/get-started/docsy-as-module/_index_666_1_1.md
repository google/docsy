---
title: "Engineering Error Budgets"
description: "The error budget provides a clear, objective metric that determines how unreliable the service is allowed to be within a single quarter."
---

As part of [our strategy](https://about.gitlab.com/direction/#3-year-strategy) to [reinforce GitLab SaaS](https://about.gitlab.com/direction/core_platform/dotcom/) as an enterprise grade platform ready for business critical workloads, GitLab.com has specific [Availability](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) and [Performance](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-performance) targets.

These targets give our users indication of the platform reliability.

Additionally, [GitLab.com Service Level Availability](/handbook/engineering/monitoring/#gitlabcom-service-availability) is also a part of our contractual agreement with platform customers. The contract might define a specific target number, and not honouring that agreement may result in financial and reputational burdens.

## What are error budgets?

The Google SRE book is generally a recommended read and under the ["Motivation for Error Budgets"](https://landing.google.com/sre/sre-book/chapters/embracing-risk/#id-na2u1S2SKi1) section, it states:

> The error budget provides a clear, objective metric that determines how unreliable the service is allowed to be within a single quarter. This metric removes the politics from negotiations between the SREs and the product developers when deciding how much risk to allow.

This is the goal we are striving for too, while also acknowledging that in order to arrive at the same level of sophistication, we need to take into account our specific situation, maturity and additional requirements. Our **initial approach** will directly tie Error Budget SLO with our existing approach to availability.

Future iterations of our error budgets will seek to further develop the importance of the Product Manager in balancing risk tolerance with feature velocity. The above-mentioned clarity between developers and SRE is achieved by establishing the appropriate measures and targets for each service or area of product.  Ultimately this balances the importance of new feature work with the ongoing service expectations of users.

## What are the components of error budgets?

Error Budgets first depend on establishing an SLO (Service Level Objective). SLOs are made up of an objective, a SLI (Service Level Indicator), and a timeframe.

- **Objective**: The desired level of succcess, noted as a percentage
- **SLI**: an evaluation used to distinguish number of failed events
- **Timeframe**: enforcing a recency bias to the SLI

Here is an example of these elements:

- **Objective**: 99.95%
- **SLI**: 95th percentile latency of api requests over 5 mins is < 100ms
- **Timeframe**: previous 28 days

Taken all together, the above example SLO would be: ***99.95% of the 95th percentile latency of api requests over 5 mins is < 100ms over the previous 28 days***

The Error Budget is then 1 - Objective of the SLO, in this case (1 - .9995 = .0005).  Using our 28 day timeframe, **the "budget" for errors is 20.16 minutes** (.0005 *(28* 24 * 60))

While the above example shows the SLI as a latency measurement, it is important to note that other measurements (such as % errors) are also good elements to use for SLIs.

GitLab's current implementation of Error Budgets is only using some of the above sophistication of SLOs and Error Budgets, but we expect to increase the sophistication in the future. It is expected that the practices of SLOs and Error Budgets evolve to have ***both*** the objective and the SLI vary (appropriately) based on the criticality of the service as well as the resiliency of other services and components which depend on it.

## Which types of errors are included?

Web requests that result in a `500` status code error are counted. In Sidekiq, jobs that fail due to an unhandled exception are counted.

If a group has [custom SLIs](https://docs.gitlab.com/ee/development/application_slis/), or there's an SLI with a fixed feature category configured in our [metrics catalog](https://gitlab.com/gitlab-com/runbooks/-/tree/master/metrics-catalog), then those errors will also be counted.

Engineers can use `Gitlab::ErrorTracking.track_exception`, or other logging, freely without affecting the error budget.

## Why are we using error budgets?

GitLab is a complex system that needs to be delivered as a highly available SaaS platform. Over the years, several processes have been introduced to address some of the challenges of maintaining feature delivery velocity while ensuring that the SaaS reliability continues to increase.

The [Infradev Process](/handbook/engineering/workflow/#infradev) was created to prioritize resolving an issue after an incident or degradation has happened. While the process has proven to be successful, it is *event-focused* and *event-driven*.

The [Engineering Allocation Process](/handbook/engineering/#engineering-allocation) was created to address long term team efficiency, performance and security items.

The initial iteration of error budgets at GitLab aims to introduce objective data and establish a system that will create greater insight into how individual features are performing over an extended period of time. This can be used by the organization to correctly allocate focus, ensure that the risk is well balanced and that the system as a whole remains healthier for extended periods of time.

Assigning error budgets down to the feature category sets a baseline for specific features, which in turn should ensure alignment on prioritizing what's important for GitLab SaaS.

## How do we determine the highest priority improvements?

Each group has a `Budget spend attribution` section in their
[Budget detail dashboard](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/error_budget_detail.html) that allows them to [discover where their budget is being spent](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#check-where-budget-is-being-spent).

Both the `Budget failures` panel and each link in the `Failure log links` panel are ordered by the number of errors. Prioritising fixing the top offenders in these tables will have the biggest impact on the budget spent.

Let's take look at a simplified violation scenario with different traffic
patterns:

| Endpoint   | Total requests | Slow requests | Apdex ratio | Traffic share |
|------------|----------------|---------------|-------------|---------------|
| Endpoint A | 1 000          | 500           | 50%         | 1%            |
| Endpoint B | 99 000         | 9 000         | 90%         | 99%           |

Even though `Endpoint A` has a lower apdex ratio, fixing more violations from
`Endpoint B` will have a greater impact on the error budget overall, as they
account for the majority of violations impacting the error budget.

Now let's take a look at a more complex violation scenario:

| Endpoint   | Total requests | Slow requests | Apdex ratio | Traffic share |
|------------|----------------|---------------|-------------|---------------|
| Endpoint A | 100 000        | 30            | 99.97%      | 80%           |
| Endpoint B | 25 000         | 30            | 99.88%      | 20%           |

The 30 errors from `Endpoint A` and `Endpoint B` both have an identical impact
on the error budget.  However, it would be better to work on `Endpoint B`
because it has a higher ratio of slow requests / overall requests. Because
`Endpoint A` is already meeting the target of 99.95%, no additional work is required here.
99.97% is a good score and any deliberate improvements here could be considered a premature optimization.

The number of violations for `Endpoint B` puts it below the apdex
threshold, so if these two endpoints are the top violators we see, we
should look into improving `Endpoint B`.

## The Error Budget Policy for GitLab.com

The error budgets process has a few distinct items:

1. Budget stakeholders
1. Budget allocation
1. Budget spend and accounting
1. Communication between the stakeholders

## Budget stakeholders

The stakeholders in the Error Budget process are:

1. Stage teams (Product department and the supporting Engineering teams represented on the [product categories page](/handbook/product/categories/))
1. Infrastructure teams (Teams represented on the [infrastructure team page](/handbook/engineering/infrastructure/team/))
1. [VP of Infrastructure and Infrastructure Leadership](/handbook/engineering/infrastructure/#mstaff)
1. VP of Development and VP of Product

## Budget allocation

Error budget is calculated based on the [availability](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) targets.

With the current target of `99.95%` availability, allowed unavailability window is `20 minutes per 28 day period`.

We elected to use the 28 day period to match Product reporting methods.

The budget is set on the SaaS platform and is shared between stage and infrastructure teams. Service Availability calculation methodology is covered in details at [the GitLab.com Service Availability page](/handbook/engineering/monitoring/#gitlabcom-service-availability).

This includes all Rails Controllers, API Endpoints, Sidekiq workers, and other SLIs defined in the service catalog. This is attributed to groups by defining a feature category. Documentation about feature categorization is available in the [developer guide](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization).

The number or complexity of features owned by a team, existing product priorities, or the team size does not influence the budget.

## Budget Reporting

On the 4th of each month, the Error Budget Report is delivered for the Budget Spend by Stage Group.
The announcements appear in `#product`, `#eng-managers`, `#f_error_budgets` and `#development`.

There can be months where many stage groups are over budget because of an underlying infrastructure issue.
When the report is generated, if there are more than 5 groups over budget (where the group's traffic share is >0.1%), the Scalability Group will investigate the increased spend before issuing the report. We will announce in the Slack channels that we are investigating before issuing the report.
The intention is to prevent duplicate investigations by multiple teams.

Stage groups are expected to review the monthly Error Budget Report and comment on any overspend in their feature categories.

### Error Budgets in the Engineering Allocation Meeting

Stage groups are not expected to report weekly on their Error Budget spend.
Feature categories with monthly spend above the allocated budget for three consecutive months will be added to the agenda for discussion.

## Budget spend(by service)

The current budget spend can be found on the [general Service Availability dashboard](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=now-30d&to=now).

Spent budget is the time (in minutes) during which user facing services have experienced a percentage of errors below the specified threshold and latency is above the specified objectives for the service. The details on how Service  Availability is calculated can be  found at [the GitLab.com Service Availability page](/handbook/engineering/monitoring/#gitlabcom-service-availability).

The budget spend is currently aggregated at the primary service level.

![Complete budget](/images/engineering/error-budgets/complete-budget.png)

![Spent budget](/images/engineering/error-budgets/spent-budget.png)

Details on what contributed to the budget spend can be further found by examining the raised incidents, and exploring the specific service dashboard (and its resources).

## Budget spend (by stage group)

There is [an example available](error-budget-by-stage-group-example.md) with a more detailed look at how this is built.

The current [28 day](/handbook/enterprise-data/organization/programs/data-for-product-managers) budget spend can be found on each [stage group dashboard](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups). Feature categories for that stage group are rolled up to a single value.

Stage groups can use their dashboards to explore the cause of their budget spend. The process to investigate the budget spend is described in [the developer documentation](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/stage_group_dashboard.html)

The formula for calculating availability:

```text
the number of operations with a satisfactory apdex + the number of operations without errors
/
the total number of apdex measurements + the total number of operations
```

This gives us the percentage of operations that completed successfully and is converted to minutes:

```text
(1 - stage group availability) * (28 * 24 * 60)
```

Apdex and Error Rates are explained in more detail on [the handbook page](/handbook/engineering/monitoring/#gitlabcom-service-level-availability).

Error Budget Spend information is available on the [Error Budgets Overview Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard) in Tableau.

### System-wide incidents

System-wide incidents affecting shared services (such as the database or Redis) may have an impact on a team's
Error Budget spend. Since we look at spend over a 28-day period, the impact of these short lived events should be mostly
negligible.

If the impact is significant, we can discuss on the Monthly Report if this incident should warrant a manual adjustment to spend.

At this time we are not looking further into automatically discounting system-wide events from group-level error budgets. The team is focused on building a strong foundation for error budgets, with sufficient tuning capability to be relevant for each group.

### How to change error budget attribution

Error budget events are attributed to stage groups via feature categorization. To change the feature category for an endpoint, update the endpoint as described in the [feature categorization development documentation](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization).

Updates to feature categories only change how future events are mapped to stage groups. Previously reported events will not be retroactively updated.

The [Observability team](/handbook/engineering/infrastructure-platforms/production-engineering/observability/) owns keeping the mappings up to date when feature categories are changed in the website repository. When the categories are changed in `stages.yml`, a scheduled pipeline creates an issue ([example issue](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2084)) on the [build board](https://gitlab.com/gitlab-com/gl-infra/scalability/-/boards/1697160). The issue contains the pipeline link and instructions to follow in the description. The categories need to be synced to two places:

1. The [Rails application](https://docs.gitlab.com/ee/development/feature_categorization/#updating-configfeature_categoriesyml).
1. The [Runbooks repository](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/stage-group-mapping.jsonnet).

### Error budgets for new groups

When a group gets created, the group is added to the [`stages.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml). In that merge request, the new group will get assigned new or existing feature categories.

When this MR is merged, Scalability receives an automated issue to update the metrics catalog in our recording infrastructure. This occurs within one week of the new group being added to `stages.yml`.

When that metrics catalog is updated, the metrics for the relevant feature categories will get attributed to the new stage group. Similar to when the attribution is changed, the change is not retroactive. This means if an existing feature category moves from `source code` to `code review` on the 15th, that feature category will contribute to the error budget of `source code` for the metrics emitted from the 1st to the 15th. The metrics from the 15th onward will be counted towards the error budget for `code review`.

The same applies when a group is renamed or a stage moves: if a group rename was merged in the metrics catalog on the 15th, the 28 day report will include 15 days of data for the group's old name, while the most recent days will be attributed to the group with the new name.

### Contract

Stage groups who have a traffic share of >0.01% in a given month should abide by this contract to balance feature development with reliability development.
The traffic share for a stage group is visible on the monthly Error Budget Report.

Error Budgets should be reviewed monthly as part of the [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline).

The balance between feature development and reliability development for a feature category should be as follows:

|**Monthly Spend (28 days)**               |**Action**|
|------------------------------  |----------|
| <= 20 minutes                   | Understand your spend - no further action required. |
| > 20 minutes                   | Commitment to [reliability/availability improvements](/handbook/product/product-processes/#prioritization), feature development is secondary. |

Feature categories with monthly spend above the allocated budget for three consecutive months may have additional feature development restrictions put in place.

#### Stage Groups with different error budgets

Our current contract is 99.95% availability and a 20 minute monthly error budget. However, the following groups have a temporarily adjusted budget based on business needs:

|**Stage Group**   | **Monthly Spend (28 days)** | **Business Reason** | **Review Date**|
|------------------|---------------------|---------------------|---------------------|
| Enablement:Tenant Scale | 99.80% | To allow the group to focus on long-term scalability work (Cells) as well as coordinate changes requiring introduction in the next API version. Described in [this MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/108039) | 2025-01-31 (or if total traffic share exceeds 5%) |
| Deploy:Environments | 99.9% | [To safely account for a disproportion in traffic in the feature flag endpoint that skews the budget](https://gitlab.com/gitlab-org/gitlab/-/issues/415063#note_1457186576), by using an custom error budget we can keep the correct urgency while accurately represnt the situation for the other services. | 2025-03-01 |
| Plan:Product Planning | 99.89% | Due to an issue checking permissions for participants in a comment in an Epic, the check can be computationally heavy with some endpoints taking over 10 seconds to respond. [The team is currently working on optmizing it](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/10170). | 2025-08-29 |

**Exceptions**

Temporary exceptions are granted as a means to allow different stakeholders to fulfill higher priority business needs, if it is estimated that the granted exception is not creating additional risk to GitLab.com reliability. Note that *exceptions* are different from [Custom Targets](/handbook/engineering/error-budgets/custom-targets/), which set properties on endpoints defining acceptable performance.

Valid reasons for an exception are:

1. Work for improving the error budget is scoped out and fully planned, and funded. Completing the work will take more than a single release month, and while the work is being completed it is expected that the Error Budget will be regularly spent.
1. Work for improving the error budget is scoped out and fully planned, but the work is not currently funded. The stakeholders are in the process of securing the funding, and the Error Budget will be regularly spent until the additional funds are secured.
1. Temporarily, the highest priority is to achieve a significant business goal, and the reliability of GitLab.com is not directly affected. The group is likely to regularly spend the Error Budget while they are focused on this other priority.

**Instructions for Requesting an Exception**

To request an exception, open an MR and add the stage group to the table above. In the description, supply the following details:

1. Clear description of the problem that is the cause of the budget spend
1. Relevant resources showing that the work is scoped out
1. Target date when the exception must be revisited

**Additional Guidance**

1. Document the work to be done using Epics and Issues
1. Add detailed descriptions to the Epics and Issues to ensure the work is clearly scoped out.
1. Add a start date and due date to the Epic so that it is transparent how long it will take to complete the work.
1. Add milestones to the issues so it is transparent when the work will be planned.

Provide answers to the following questions:

1. What portion of your team's budget is due to this exception? If you were to remove the offending endpoints covered by this exception would your error budget become green?
1. What is the main contributor to your team's error budget spend? Is that the response time?
1. What does success look like at the closure of referenced epic?

Follow the guidance and instructions above to expedite the approval process.

**Assign the MR for approval to:**

1. Director of Product or above (of the affected stage group)
    - They are responsible for ensuring that the business need is met, and will need to communicate the change up and down the chain of reporting.
1. Senior Manager of Infrastructure or up
    - They are responsible for ensuring that GitLab.com will not be negatively impacted, and will need to communicate the exception up and down the chain of reporting.

### Error Budget Improvements

Work relating to error budget improvements should be detailed in an issue.
Please label these issues with `Error Budget
Improvement` and the `group::` label so they can be tracked in reports.

### Error Budget DRIs

| Role | K/PI | Target | Current Tracking Status |
| --- | --- | --- | --- |
| Product Management | [Maintaining the Spend of the Error Budget](https://10az.online.tableau.com/#/site/gitlab/views/Draft-ErrorBudgetDashboard/ErrorBudgetOverviewDashboard) | 20 minutes over 28 days (equivalent to 99.95% availability) | Complete - In Sisense |
| Infrastructure | [Setting the Error Budget Minutes and Availability Target](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability) | 99.95% (20 minutes over 28 days Error Budget) | Complete - In Grafana |

- For groups with [engineering allocations](/handbook/engineering/#engineering-allocation), the responsibility to maintain the spend of error budget is with the development team instead of the product management team.

## Current State and Future Intent

### Current State

1. Error budgets exist for each feature category and incorporate a standard apdex threshold and error rate.
1. Error budgets are published for stage groups and stages through Grafana and Sisense Dashboards.
1. Contributing factors are explorable through links available on the Grafana Dashboards.
1. Error budgets are included in the [Product Prioritization process](/handbook/engineering/workflow/#product-development-timeline).

### Roadmap

The changes below aim to increase the maturity of the Error Budgets.

#### 1. Increase precision of Error Budget calculations (apdex portion)

**Improvements**

- ***Cancelled*** The SLO targets originally used for Error Budgets are coupled with the alerting used for Infrastructure monitoring. We [proposed to use Sisense to be able to set targets by stage group](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1236), but this approach was not favoured. We found a method to use separate targets for the Infrastructure monitoring and the Error Budgets, but the decision was taken to keep the targets the same and adjust the default latency threshold for the apdex portion of the Error Budgets (see next item).
- ***Completed*** SLI calculations used request duration threshold which was not appropriate for all endpoints. [The threshold was increased to 5s](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1243) on the 21st of Sept and it will take 28 days for the full effect to be shown in the Error Budgets.
- **Completed** Stage groups will next be enabled to set their own SLI per endpoint by expanding on the configurability of SLI request duration threshold. [epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/525).
- Endpoints that are currently `not_owned` will be attributed to the correct feature category. This will be addressed by
  - **Completed** [using caller information for Sidekiq](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1200), and
  - having [graphQL query-to-feature correlation](https://gitlab.com/gitlab-org/gitlab/-/issues/328535).
- The [impact of system-wide outages on Error Budgets should be more clear](https://gitlab.com/gitlab-com/Product/-/issues/2884).
- Provide guidance for PM's who report on both Error Budgets and Service Availability. (Such as Runner and Pages).

**Product Development Activities**

Product Development teams are encouraged to:

- Continue working on [Rapid Action](/handbook/engineering/development/#rapid-action), [Infradev](/handbook/engineering/workflow/#availability-and-performance-refinement), [Corrective Actions](/handbook/engineering/infrastructure/incident-review/#incident-review-issue-creation-and-ownership), [Security](/handbook/security/product-security/vulnerability-management/#vulnerability-management-overview), and [Engineering Allocation](/handbook/engineering/#engineering-allocation) issues per our [Prioritization guidelines](/handbook/engineering/development/principles/#prioritizing-technical-decisions)
- Propose SLOs for their endpoints
- [Opt-in to using the new apdex calculation methods that use the custom target durations](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1451)
- Provide further feedback for future improvements to Error Budgets

#### 2. Increase visibility into Error Budgets (error portion)

- Stage groups are provided with error count information. This can be supplemented with further detail by [making error information explorable with Sentry](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/396).

#### 3. Tune the scope of Error Budgets

- Consider incorporating P1/S1 incidents into the Error Budget Calculation.

## More information

- [Error Budget AMA](https://docs.google.com/presentation/d/1yYnLlTN8KOYNHww91nJgnbFK7l2xf3Cy1mRvUAxHa08/edit)
- [Understanding Stage Level Error Budget Dashboards](https://docs.gitlab.com/ee/development/stage_group_observability/#error-budget)
- [Setting up recurring Slack updates](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/error-budget-weekly.md)
