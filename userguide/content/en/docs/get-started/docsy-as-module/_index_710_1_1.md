---
title: "Next Generation Service-Catalog"
status: proposed
creation-date: "2024-07-11"
authors: [ "@reprazent" ]
coach: "@andrewn"
approvers: [ "@tmillhouse", "@lmcandrew", "@rnienaber", "@swiskow" ]
owning-stage: "~devops::platforms"
participating-stages: ["~devops::platforms"]
toc_hide: true
---

{{< design-document-header >}}

## Summary

**Scalability themes:**

- [Observability across the Production Fleet is accessible for all](https://about.gitlab.com/direction/saas-platforms/production-engineering/#observability-across-the-production-fleet-is-accessible-for-all)
- [Paved roads are the default for all team members](https://about.gitlab.com/direction/saas-platforms/production-engineering/#paved-roads-are-the-default-for-all-team-members)

This document describes how we want to evolve our metrics- and
service-catalog into a single definition in YAML for each service. We
will have a single source of truth describing a service. The YAML is
inspired by a Kubernetes `kind` with an associated spec that can
easily be validated.

The service catalog entry should be the frontend for everyone
that wants to know or adjust something to a service's ownership,
deployment, monitoring & alerting and deployment properties.

The static YAML that is the services catalog becomes the frontend with
which service owners interact to configure multiple backends. These
backends consume the YAML to generate alerts, dashboards and recording
rules.

It is the foundation for
[&1355](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1355).

## Glossary

| Name                     | Description                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Service-Catalog Frontend | The static YAML containing service definitions that people interact with.                                    |
| Service-Catalog Backend  | A single responsibility consumer of the service catalog: generating dashboards, alerts, recording rules, ... |

## Motivation

We currently have 2 definitions for a service: one in the
metrics-catalog, and one in the service-catalog.

The metrics-catalog is defined in Jsonnet and contains everything
needed for monitoring the service and routing alerts to the relevant
groups. This includes labeling information, deployment type, and
ownership information.

The service-catalog is currently defined as a single YAML file that
lists all services with information about labeling, ownership, links
to documentation and monitoring resources.

This means a lot of information is duplicated. We need to define a
service in both places, and it is easy to forget one or the
other.

Furthermore, because the metrics-catalog is in Jsonnet, this makes it
hard for anyone to contribute to. They need to familiarize themselves
with the language and our DSL to be able to add or modify SLIs.

By unifying both definitions into a static YAML frontend, we make this more
accessible to everyone at GitLab first. GitLab.com, Cells for
GitLab.com, GitLab-Dedicated tenants and the many Self-Managed
deployments can have different service-catalogs that backends consume
to generate monitoring resources.

In the future we can add more purpose-built backends using the service
catalog.

We have made it much easier to deploy a new service to production
using Runway. But it is still a manual step to add it to the
service-catalog & metrics-catalog to actually have the new service
[observable](https://docs.runway.gitlab.com/reference/observability/). With
this, we'll cut that down to a single service entry, and it paves the
way to use the service catalog as the Single Source of Truth for
runway services in favour of the service-inventory that is now
required for Runway
([runway#122](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/122)).

This also opens up the path to productizing our monitoring of GitLab.
Because we ourselves will have used different service-catalog
definitions to monitor GitLab.com and GitLab Dedicated. We could look
into exposing a catalog as a default configuration for a monitoring-mixin
([scalability#2832](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2832)). Even
though this is listed as a Non-Goal below, we will pay attention that
when we do this project, don't introduce any changes that make this
more difficult in the future.

## Goals

1. Make it easier for everyone to contribute to metrics-catalog. So
   changing SLOs and SLIs is no longer daunting.

   **Expected impact:** Service owners can take ownership of the
   observability of their service with minimal involvement from
   Scalability-Observability.

1. Service onboarding is much easier for people that have
   deployed new services using Runway. Only a single entry is needed
   in a static file.

   **Expected impact:** All production runway services have entries in
   the new service catalog. As a result, they'll always at least have
   a default dashboard.

1. Make it easier for incident responders to see raw metrics
   associated with an alert.

   **Expected impact:** Faster incident mitigation and reduced stress
   for the folks on-call.

1. Decouple the generation and deployment of dashboards, recording- and alerting
   rules from the service definition.

   **Expected impact:** Changes to dashboards, recording rules and
   services become easier to review for the maintainers of Runbooks
   and spun off projects with clearer ownership.

1. Avoid having services that have no monitoring resources at all. Or
   alerts that have no entry in the service catalog.

   **Expected impact:** Less surprises with unmonitored services or
   problems discovering service owners.

1. Make our metrics stack easier to iterate on by decoupling the
   service definitions from rule- and dashboard generation.

   **Expected impact:** Make it easier to do projects like
   [User Journey SLIs](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2612)
   and [Upgrading our grafonnet dependency](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2573)
   easier to pick up and parallelize.

### Non Goals

1. Removing Jsonnet from the process that currently generates
   recording rules, alerts and dashboards.
1. Make it possible to reuse our monitoring resources for self-managed
   installations. Though this paves a way for doing something like
   exposing a monitoring mixin
   ([#2832](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/2832)),
   it is not an immediate goal of this effort.

## Implementation phases

To get to the desired goal of having a YAML file for the service
definition, we could iterate in the following phases:

1. Generate the static file per service based on the content that is
   currently in the existing service-catalog and metrics-catalog.

   In this stage, we'll add another step to the generation in the
   runbooks repository. It will generate the file that we want service
   owners to interact with in the future.

   We'll determine the spec that for the file, and add validation for
   that spec. The spec will be documented and kept up-to-date in this blueprint.

   **Result:** The people reviewing runbooks MRs could now use the
   diff in this static file to better understand what SLIs are
   introduced and what SLO applies to it.

1. Consume the generated service-definitions in new projects to
   generate rule files, alerts, and dashboards. This is where we start
   moving things out of the runbooks repository. The things required
   to generate those service definitions from Jsonnet + YAML are all
   that remain.

   At this moment, it's possible that we need to adjust our
   pre-defined schema because something no longer makes sense.

   **Result:** When we move things out of the runbooks, we can improve
   the Jsonnet code. We can extract shared responsibilities out into
   libraries that can be reused in multiple repositories used for
   generating dashboards or rule files.

   Dashboards and their customization now live in a different
   repository from the Runbooks repository.

   Changes to SLIs and SLOs remain in the runbooks' Jsonnet files in
   this step.

1. Remove the Jsonnet and old `service-catalog.yml` from the runbooks
   repository. We'll have to update any other consumers of the service
   catalog to use the new service definitions.

   **Result:** Service owners now have a single, static  service
   definition to maintain.

Each of these phases is one or more projects that can be worked on
with Scalability-Observability. Each delivering a small portion and
allowing us to reassess priority between each project.
