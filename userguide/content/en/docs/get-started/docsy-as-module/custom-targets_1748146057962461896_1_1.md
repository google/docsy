---
title: "Engineering Error Budget Custom Targets"
description: "Custom Targets introduce the ability to set tailored Error Budget durations on individual endpoints and jobs, allowing for the accepted performance of different workloads to be defined as appropriate."
---

## What are Custom Targets for Error Budgets?

Custom Targets introduce the ability to set tailored Error Budget durations on individual endpoints and jobs, allowing for the accepted performance of different workloads to be defined as appropriate.

There is a legacy apdex threshold used for every endpoint which is currently set to 5 seconds. When a request duration exceeds 5 seconds, that request is considered in violation of this threshold and counts against the apdex portion of the Error Budget. Because this does not cater for the different performance characteristics this component is being replaced with a [customizable apdex threshold](https://docs.gitlab.com/ee/development/application_slis/rails_request.html).

## Why do we use Custom Targets for Error Budgets?

Performance expectations vary for different workloads and can form a vital part of a good user experience. It is therefore important to let the teams who work closest with customers define what durations are acceptable for the various endpoints and jobs they own. Performance of specific workloads can also contribute towards a larger, system-wide impact - in this case, the Infrastructure Department may request that target durations are adjusted appropriately.

## How to set target durations

Stage groups can follow the [developer documentation](https://docs.gitlab.com/ee/development/application_slis/rails_request.html) to set target durations and should ask for a review from a Scalability Team Member on the MR.

The developer documentation includes instructions for how to choose a target duration, how to set the duration, and what considerations should be made.

## How are target durations used?

When target durations are set, the system will start recording data for those targets as soon as the MR is deployed to production. This means that any violations or successes that have occurred before the deploy would still be counted towards the error budget for stage groups.

For now, Error budgets will continue to use the legacy SLI using a 5 second target duration until the stage group chooses to [opt-in](https://docs.gitlab.com/ee/development/application_slis/rails_request.html#error-budget-attribution-and-ownership) to using the customizable durations. For customizable durations the default threshold (for endpoints _without_ a specific target) is set to 1 second.

There is a [dashboard](https://dashboards.gitlab.net/d/general-request-apdex-sli-adoption/general-request-apdex-participation?orgId=1) (internal only) available to view which stage groups have opted-in to this method, in addition to showing a comparison of the new apdex ratio (adjusted for custom targets) against the old apdex ratio (based on the 5 second default).
