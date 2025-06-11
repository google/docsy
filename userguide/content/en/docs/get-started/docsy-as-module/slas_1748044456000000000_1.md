---
title: "GitLab Dedicated SLAs"
---

## GitLab Dedicated: Service Level Availability and Disaster Recovery Plan

## Service Level Availability

Service Level Availability is the percentage of time that GitLab Dedicated ("Dedicated") is in an available state for use by a customer over a given calendar month. This document defines how Service Level Availability is calculated for Dedicated.

## Scope

GitLab calculates Service Level Availability based on the available state of certain services and features provided with Dedicated. The services and features that are considered when calculating Service Level Availability include:

| Service | Features |
| ------ | ------ |
| webservice | GitLab Issues, Merge Requests, CI Job Logs Page; GitLab API; Git Push, Pull, Clone Operations over HTTPS |
| registry | Container Registry HTTPS requests |
| gitlab-shell | Git Push, Git Pull, Clone Operations over SSH|

## Service Level Availability Calculation

For each service and feature described above, GitLab measures two service level indicators ("SLIs"), as further described in https://gitlab.com/gitlab-com/runbooks/-/tree/master/reference-architectures/get-hybrid#service-level-indicators:

1. The **Error SLI** is an indication of requests that are successful, (i.e. not returning a 5xx error).
1. The **Apdex SLI** is an indicator of requests that complete with a satisfactory latency. Apdex is defined using the [industry definition](https://en.wikipedia.org/wiki/Apdex) with two latency thresholds: _satisfactory_ and _tolerable_. For Dedicated, satisfactory requests take less than 1s to complete, tolerable requests take less than 10s to complete.

Combining these two SLIs, GitLab scores each request as follows:

| Server Error? | Latency <= 1s | Latency <= 10s | Latency > 10s |
| --- | --- | ------ | ------ |
| No | 1 | 0.5 | 0 |
| Yes | 0 | 0 | 0 |

Service Level Availability is then calculated using the following measurement:

For each calendar month, we calculate the sum of the combined SLI scores for all requests in that month, excluding any requests made during maintenance windows, and divide this by the total number of requests during that period (again, excluding maintenance windows).

Service Level Availability = the sum of qualifying SLIs for the entire month divided by the total qualifying requests for the entire month. The Service Level Availability of GitLab Dedicated should meet or exceed the current Service Level Objective (defined below).

## Current Service Level Objective

GitLab's current monthly service level objective for GitLab Dedicated is 99.5% (the "Service Level Objective").

## Exclusions

Calculation of Service Level Availability does not include failures resulting from (1) misuses or misconfiguration of the applicable service or feature provided with Dedicated, (2) customer activity outside GitLab's terms of service, (3) components or services not defined in the Scope section (above), (4) factors outside of GitLab's reasonable control, such as force majeure events, or (5) Customer's or selected cloud hosting providers services, equipment or other technologies. Scheduled maintenance or urgent unscheduled system maintenance necessary to address critical issues (e.g. security vulnerabilities, data consistency issues, etc) are also not included in the calculation of Service Level Availability.

## Disaster Recovery Plan

GitLab has developed a disaster recovery plan (the "Plan") to minimize the impact of a disaster or other emergency impacting a customer's access to and use of Dedicated

## DR Scope

The Plan is scoped to disasters or other emergency events impacting the following:

1. Partial region outage (e.g. AZ failure)
2. Complete outage to primary region

The recovery time objective ("Recovery Time Objective" or "RTO") for the Plan is based on how long it takes to re-provision the required infrastructure and restore data from the most recently available backup.

The recovery point objective ("Recovery Point Objective" or "RPO") for the Plan is based on the frequency of snapshots across the data sources.

In order to receive RPO and RTO targets, customers must specify a primary and secondary region upon onboarding and these regions must be supported by GitLab Dedicated. The list of regions that are supported by GitLab Dedicated [can be found here](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#available-aws-regions).

If a customer uses the [Bring your own domain feature](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#bring-your-own-domain), the customer must update its Domain Name System ("DNS") configuration to fully restore the Dedicated service ("DNS Update"). The time required to trigger and complete a DNS Update will not count towards the calculation of RTO under the Plan.

The RTO and RPO outlined in the Plan do not apply in the following circumstances:

1. If only a primary region was specified by a customer
2. If a secondary region is not supported by GitLab Dedicated
3. If the secondary region selected by a customer only provides for [limited support](https://docs.gitlab.com/subscriptions/gitlab_dedicated/data_residency_and_high_availability/#secondary-regions-with-limited-support)

In all three circumstances above, GitLab will still make a good faith effort to recover pursuant to the Plan, but the stated RTO and RPO objectives will not apply.

GitLab regularly tests the Plan and will take all commercially reasonable efforts to ensure its success within the below RTO/RPO goals.

## DR Exclusions

Events that have a more severe impact in a customer's access to and use of Dedicated, such as loss to both primary and secondary regions, global internet outages, or data corruption issues, are out of scope from the Plan. GitLab will still make a good faith effort to recover pursuant to the Plan, but the RTO and RPO goals of the Plan will not be considered.

## Current RTO Target

8 hours

## Current RPO Target

4 hours
