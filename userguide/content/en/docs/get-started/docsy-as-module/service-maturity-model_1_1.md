---
title: Service Maturity Model
---

## Introduction

This page shows the output of our service maturity model for each
service in our [metrics catalog](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/README.md). The [model itself](https://gitlab.com/gitlab-com/runbooks/-/blob/master/service-maturity/maturity.jsonnet) is part of the
metrics catalog, and uses information from the metrics catalog and the
[service catalog](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml) to score each service.

To achieve a particular level in the maturity model, a service must meet
all the criteria for that level and all previous levels. Some criteria
do not apply to all services (for instance, services like PgBouncer do
not need development documentation).

## Maturity score by service

❌ indicates the service does meet even the Level 1 criteria

{{% service-maturity-scores %}}

### Maturity detail by service

Key:

* ✅ Service meets the criteria
* ❌ Service does not meet the criteria
* ➖ The criteria is skipped. Some maturity criteria make less sense for some services. For example, an infrastructure-facing service like Patroni is crucial to ops, but not related to our Development department, hence it does not require development guidelines.
* ⚪ We don't measure the criteria yet.  See [https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/560](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/560) for progress

{{% service-maturity-details %}}
