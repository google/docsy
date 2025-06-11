---
title: "Monitoring of GitLab.com"
description: "This policy specifies requirements for monitoring of GitLab.com"
controlled_document: true
---

## Purpose

This policy specifies how GitLab ensures continuous monitoring of GitLab.com services, how are SLAs, logging and capacity planning defined.

GitLab implements these measures to ensure compliance with various policies and agreements within the cloud environment, and to ensure that any potential security issues are quickly identified.

## Scope

This policy applies to all GitLab.com monitoring services in support of the statutory, regulatory and contractual requirements of GitLab.

## Roles & Responsibilities

| Role                      | Responsibility                                                                 |
|---------------------------|--------------------------------------------------------------------------------|
| GitLab Team Members       | Responsible for following the requirements in this procedure                   |
| Engineering, Security     | Responsible for implementing and executing this procedure                      |
| Engineering (Code Owners) | Responsible for approving significant changes and exceptions to this procedure |

## Procedure

- GitLab defines how service availability is calculated
- GitLab defines how logs are collected, and analyzed
- GitLab defines capacity management procedures

### Service Availability Definition

Service Availability is the percentage of time during which the platform is in an available state. Other states are _degraded_ and _outage_.

Each of the _user facing_ services have two Service Level Indicators (SLI): the [Apdex](https://en.wikipedia.org/wiki/Apdex) score, and the [Error rate](https://en.wikipedia.org/wiki/Bit_error_rate).
The Apdex score is generally a measure of the service performance (latency).
The Error rate measures the percentage of requests that fail due to an error (usually, a `5XX` status code).

A service is considered available when:

1. The Apdex score of the service is _above_ its Service Level Objective ([SLO](https://en.wikipedia.org/wiki/Service-level_objective)),
1. _AND_ The error rate is _below_ its Service Level Objective ([SLO](https://en.wikipedia.org/wiki/Service-level_objective)).

An example of available `web` service; within a 5 minute period:

- At least 90% of requests have a latency within their "satisfactory" threshold
- AND, less than 0.5% of requests return a 5XX error status response.

A service is unavailable, if, for 5 minutes:

- Less than 90% of requests have a latency within their "satisfactory" threshold
- **OR**, more than 0.5% of requests return a 5XX error status response.

In other words, a service needs to simultaneously meet both of its Service Level Objectives (SLO) targets in order to be considered available. If either target is not met, the service is considered unavailable.

The availability score for a service is then calculated as the percentage of time that it is available. The Availability score for _each_ service combined define the platform Service Availability. This number indicates the availability of GitLab.com for a select period of time.

For example, if service becomes unavailable for a 10 minute period, the availability score will be:

- 99.90% for the week (10 070 minutes of availability out of 10 080 minutes in a week)
- 99.97% for the month (43 190 minutes of availability out of 43 200 minutes in the month)

Finally, the availability metric for GitLab.com is calculated as a weighted average availability over the following services ([weights](https://gitlab.com/gitlab-com/runbooks/blob/master/services/service-catalog.yml) in brackets):

1. `web` (5)
1. `api` (5)
1. `git` (5)
1. `registry` (1)
1. `ci runners` (0)
1. `pages` (0)
1. `sidekiq` (0)

The availability score can be seen on the [SLA dashboard](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=now%2FM&to=now), and the Service Availability target is set as an [Infrastructure key performance indicator](/handbook/engineering/infrastructure/performance-indicators/#gitlabcom-availability).

### Log management

GitLab.com services emit network, system, and application logs, which are then stored, processed, and searched to provide a basis for incident and security incident investigations.

Logs are stored in a short-term and long-term storage, with their own respective retention policies:

- short-term storage: 7 days
- long-term storage: 365 days

Logs in short-term storage are used to actively monitor application activity, spam events, transient errors, system and network authentication
events, security events, and similar.

Logs in long-term storage are used to comply to the [Records Retention & Disposal](/handbook/security/standards/records-retention-deletion/) policy. Logs in long-term storage are less granular and have less detail than those in short-term storage.

Detailed overview of architecture, tooling and workflows are listed on the [Logging](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/README.md) page.

### Capacity Planning

In order to scale GitLab.com infrastructure at the right time and to prevent incidents, GitLab employs a capacity planning process.

The focus of the capacity planning process is to perform historical data analysis to predict future growth.
From this analysis, GitLab leverages a process that provides information around saturation points, which are then delivered to service owners.
Service owners then use this process to act on this information.

The data sources used to feed the forecasting tool are historical saturation and utilization data used as part of standard monitoring of GitLab.com.

The output of our capacity planning process is considered ORANGE, and must be treated per [The Data Classification Standard](/handbook/security/standards/data-classification-standard/#orange).

Detailed overview of architecture, tooling and workflows are listed on the [Capacity Planning](/handbook/engineering/infrastructure/capacity-planning/) page.

## Exceptions

Changes and exceptions to this policy must be approved by the appropriate Infrastructure team responsible for monitoring GitLab.com.

## References

- [Records Retention & Disposal](/handbook/security/standards/records-retention-deletion/)
