---
title: "Engineering Error Budgets for Stage Groups"
description: "Engineering Error Budget by stage groups example."
---

## Error Budgets for Stage Groups (worked example)

Error Budgets consist of two components: Apdex and Error Rate.

**Apdex Success Rate**: The rate of operations that were successful and performed adequately.

The threshold for 'performed adequately' is different for each service.

This is currently a global threshold per service, but stage groups will soon have the [ability to customise this by endpoint](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/525).

**Error Rate**: The rate of operations that had errors.

[The developer documentation](https://docs.gitlab.com/ee/development/stage_group_observability/#check-where-budget-is-being-spent) contains detailed steps
for how to check where budget is being spent.

## SLI, SLO, SLA?

These are Service Level Indicators, Objectives and Agreements.

An SLA is an agreement that one group has set with another regarding the level of service that will be provided.
We have an SLA with our customers to achieve a certain level of availability each month. Currently this is 99.95%.

We use that agreement to set service-level objectives (SLOs). These are the standards we must meet each month in order to
fulfil our agreements.

Finally, the SLI is the indicator we use to determine if will meet our objective. It is the measure of how our systems are performing.

The SLA is the percentage of time that SLIs met their SLO.

## Storing the data to use in calculations

In this section, we talk about Apdex for Web and API endpoints.

Every endpoint is [associated with a feature category](https://docs.gitlab.com/ee/development/feature_categorization/index.html#feature-categorization).
We use this to help with incident response as well as to attribute error budget spend to the right stage group.

For every request, we store log information - including:

- the endpoint being requested
- the feature category that owned the endpoint at the time
- how long it took to generate and serve the response
- the time the request spent querying other resources
- the status code for the response
- (a variety of other things)

The highest granularity of data is stored in the logs, but we can't hold onto this data for long periods because we generate quite
a lot of it. We retain log information for 7 days.

We also store metrics for a longer period which are at a lower granularity. One of the items we store a metric for is the response duration.

Because of size constraints we can't store the exact duration for a request in the metrics. Instead we
use a histogram with buckets of `[-Inf, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0, +Inf]` which are [defined in the metrics catalog](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/metrics/web_transaction.rb#L9).
When a request takes 0.6s, it would increment the buckets for which it was faster. So `[+Inf, 5.0, 2.5, 1.0]` would be incremented.

We also store if the request was faster or slower than the request duration threshold for that endpoint. This is done using [Application SLIs](https://docs.gitlab.com/ee/development/application_slis/). This allows us to customize SLIs based on the importance to users. For example, the [urgency for the `rails_request`](https://docs.gitlab.com/ee/development/application_slis/rails_request.html#adjusting-request-urgency) SLI can be customized to reflect how a user experiences the endpoint.

## Metric information

We store metrics in Prometheus as counters.

**Apdex**

- operation-counter: This counter get incremented for every successful request (no error).
- success-counter: This counter gets incremented for every successful request that was faster than 5s.

**Error**

- operation-counter: This counter get incremented for every request
- error-counter: This counter gets incremented for every 5xx

Counters are separated using the following labels:

- component: the SLI this refers to (for example 'puma' would indicate a request handled by puma)
- environment: 'gstg', 'gprd', ... Only production environments are included in the error budget, but we have them for others.
- feature_category: The feature this request was for, this is used to later map this to a group based on the info in `stages.yml` (when imported).
- type: The service this request was for (for example 'api', 'web', or 'git', in case of the puma component).

## Performing the calculations

When a person visits the stage group dashboards to see their Error Budget, we perform a calculation using the metrics
we hold about how requests have been performing.

Using the formula on the previous page, we use the percentage of successful operations across all 28 days.

When changes are made to the thresholds used in this calculation, it takes 28 days for the effect to be seen because we are summing stored data for the whole period.
