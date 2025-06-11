---
title: "Logging Blueprint for GitLab"
status: ongoing
creation-date: "2024-07-22"
authors: [ "@stejacks-gitlab" ]
approvers: [ "@lmcandrew" ]
owning-stage: "~team::Observablity"
toc_hide: false
---

{{< engineering/design-document-header >}}

This document describes the current state of Logging for GitLab SaaS Platforms, the challenges that we face as we continue to scale and grow, and a recommendation on the next steps.

## Scalability Themes

- [Observability across the Production Fleet is accessible for all](https://about.gitlab.com/direction/production_engineering/#observability-across-the-production-fleet-is-accessible-for-all)
- [Paved roads are the default for all team members](https://about.gitlab.com/direction/production_engineering/#paved-roads-are-the-default-for-all-team-members)
- [Solutions at GitLab follow the Well Architected Services Framework](https://about.gitlab.com/direction/production_engineering/#solutions-at-gitlab-follow-the-well-architected-services-framework)

## Overview

[Observability](https://opentelemetry.io/docs/concepts/observability-primer/) is the ability to measure the state of a system by its outputs.  Most Observability systems involve multiple different tools to attain that goal, with two of the most common systems being metrics and logs.

[Metrics](https://opentelemetry.io/docs/concepts/signals/metrics/) are a measurement of a service captured at runtime, usually aggregated to provide an overview of a system.
[Logs](https://opentelemetry.io/docs/concepts/signals/logs/) are a recorded message of an event.

Each of these tools has benefits and downsides, and using them appropriately makes maintaining an Observability stack easier.  As an example, logs can have infinite cardinality with almost no overhead in the system, whereas metrics systems are significantly impacted by high cardinality.  Due to the fragility of our logging structure, short retention, and inadequate [tooling standards](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793), GitLab has frequently used metrics when [logs would be a better solution](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3520).  Extremely high cardinality metrics have and continue to be a significant problem for our metrics stack, and transitioning those to logs would improve the performance and usability of both systems.

We also store different data in different locations, and there's [a great deal of confusion](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2924) when metrics (which are almost always approximations) don't match up with logs (which are exact details of the requests).  Having a standard of what goes where and keeping data in the system that is most appropriate would lower confusion and lower cost as we wouldn't be duplicating data in multiple places.

Every log and metric that we write adds to the complexity and cost of our observability systems.  Using the right tool for the right job lessens the overall cost to GitLab and the complexity of management.

## Current State of Logging

GitLab presently uses different logging solutions across its various platforms, both SaaS and [Self-Managed](../observability_logging/) as described below.  The lack of standardization here makes it challenging to use and maintain.  Without an opinionated recommendation on which logging tool to use, every team picks the one they are most familiar with or that is easiest for them to spin up.

- Security: Devo
- GitLab.com: [Elastic Cloud](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/elastic?ref_type=heads), BigQuery, Google Cloud Logs, GCS, Cloudflare, Sentry, [Loki POC](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1363)
- GitLab Observability: [ClickHouse](../observability_logging/))
- [GitLab Dedicated](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/engineering/feats-available.md): CloudWatch, BigQuery, OpenSearch, Cloud Logging.

### Security

[We are researching](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3650) how security ingest and consume the logs that the production platforms produce.

### GitLab.com

[Logs: User Segment and Size Analysis](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3575) has a great deal of research into the current use cases for logging.

#### No standardization

We presently have different logging schemas depending on who is outputting the logs, which makes using the logs for debugging difficult.  As an example, there is no standard for which field holds the status code of a request, and no standards on what each logging severity should mean.  This encourages a significant expansion [in the number of fields that we index](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3457#reduce-fields), which increases the cost of the logging cluster.

Different types of logs go into different systems.  We presently use Elastic Cloud mostly for low to medium volume logs that need to be analyzed, however, [HAProxy access logs go into BigQuery](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/logging_bigquery_schemas/haproxy_schema.json) and [Cloudflare logs are only available using their APIs](https://gitlab.com/gitlab-org/cells/http-router/-/issues/36).  Each system we use also complicates the story on granular access.

We also have additional requests for new systems to bring online, such as [Runway](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1369).

#### Limited features

Our logging environment only keeps data for 7 days, which is not enough for many debugging and analysis needs.

We do not presently have a good story for [managing granular access](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1360), which means that bringing on additional types of logs can be impossible.

#### Limited observability

We do not have an easy way to track who is writing logs to the system and at what volume.  We can get [this data](https://gitlab.com/gitlab-org/quality/engineering-analytics/finops-analysis/-/issues/143#note_1857740713) if we need to but it takes a great deal of time and effort.
We do not know who is using the system regularly and for what purposes.  Being able to tell who is using the data allows us to make better decisions on how to manage the cluster.
Unfortunately for our team's name, we lack measurements of the system's availability.

#### Challenging management and growth

Management of only the Elastic Cloud logging system uses multiple different tools ([terraform](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/elastic-cloud?ref_type=heads), [Jsonnet + CI](https://gitlab.com/gitlab-com/runbooks/-/tree/master/elastic/managed-objects?ref_type=heads), [shell scripts](https://gitlab.com/gitlab-com/runbooks/-/tree/master/elastic/api_calls/single?ref_type=heads), Elastic Cloud UI).

[Cells](../cells/infrastructure/observability/) needs its own story that should be somewhat similar to Dedicated.

### GitLab Dedicated

The Dedicated team would like to pass off some of the management of their logging clusters.  This is complicated by their strict rules for granular access and some indices with RED data.

### GitLab Observability

The Monitor:Observability team has a [logging](../observability_logging/) blueprint of their own.

## Requirements for future

### General requirements

One of our strongest requests has been for more retention.  We believe 28 days would be ideal, however, some use cases such as error budget debugging may be improved by a retention rate of 30 - 45 days.

The system needs to be easy to manage and use Infrastructure as Code as a source of truth.

We should balance costs with the importance of making debugging problems easier.

The system should be flexible enough to adapt to compliance or regulatory requirements around log storage.

### Paved Roads

We need to improve our tooling to make outputting the right logs easier.

- [Standardized logging schema for GitLab logs](https://gitlab.com/groups/gitlab-org/-/epics/5059)
- [Standardized system for outputting logs and metrics](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793)

We also need to make sure that there is an easy way to onboard new logging systems and a standardized set of tools to use.  A well known single pane of glass to access logging will assist with this effort.

### Granular Access

One of the significant issues with multiple different tools is that there isn't a single source of truth system for Granular Access.  Using OKTA as our single source of truth matches with what GitLab already uses for internal tooling.  This allows us to use systems that are already in place for access requests, and limits the number of accounts we need to manage.

### Auditing

One of the most significant gaps in our current logging implementations is auditing.  We have the ability to know who is accessing the system over a span of time, but we do not know what they are using the system for.  We also lack the ability to closely monitor log output volume and how often the logs are being used.

If we create an audit trail of user behavior and logging behavior, we create the possibility of chargebacks for the future.

We could also monitor for a significant change to log volume that would allow us to catch problems in logs before they become very expensive.

### Observability

- Highly available and measured:  Our team needs to set SLOs for all of our pieces
- System should work with our capacity planning and error budget tools to indicate when the system needs attention

## Decisions we need to make

- Can we utilize and/or build similarly to the Monitor:Observability team?
- Centralized vs separated?
- Buy vs build?
- Which tools should we use?
- Can we design something that works for both GitLab.com and self-managed installations?

## Next Steps

### Create a unified Observability plan with Monitor:Observability team

The Monitor:Observability team has several Observability related blueprints: [Observability overview](../observability_for_self_managed/), [Logging](../observability_logging/), [Metrics](../observability_metrics/), and [Tracing](../observability_tracing/).

The use cases for their tooling and our tooling are different, and we recognize that GitLab.com is a more complex system and requires more robust tooling than the average self-managed customer.  With that in mind, we should work closely with them to make certain we are Dogfooding anything possible.

Some efforts listed here (such as improving the structure of our logs) would likely benefit all customers and are something we should work on together.

### Determine the correct tools to use

We should thoroughly investigate the tools that we are using today and the tools available on the market and narrow them down to a smaller number and standardize on only a few options.  After that, we should create proofs of concept for each suggested tool and test them thoroughly.

#### Build vs buy?

This will be a question that we'll answer once we figure out the right tools.

#### Centralized vs decentralized?

A centralized access point is likely the correct solution, as it will allow us to have a single pane of glass to access all logging platforms.  This will also allow us to have a single place to create audit logs of who is using the system and for what.  It may make sense for Grafana to be that SPOG, but the tool we decide to use will influence that decision.

### Create standards for logging and make it easy for applications to do the right thing

We need to design a structured logging system schema to make using our logs easier and create the [appropriate tooling for applications within GitLab](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2793) to output in the right format and to the right systems with as little effort as possible.  If it's easy to do the right thing, people will do it by default.  This will require organizational buy-in and training for the stage teams creating and maintaining features.

### Simple Integration

It should be straightforward for service owners to use our logging solutions as a Managed Service.
