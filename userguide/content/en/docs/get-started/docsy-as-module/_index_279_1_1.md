---
title: "Cloud Connector architecture evolution"
status: implemented
creation-date: "2023-09-28"
authors: [ "@mkaeppler" ]
coach: "@ayufan"
approvers: [ "@rogerwoo", "@pjphillips" ]
owning-stage: "~devops::data stores"
participating-stages: ["~devops::fulfillment", "~devops::ai-powered"]
toc_hide: true
---

{{< engineering/design-document-header >}}

## Summary

This design doc covers architectural decisions and proposed changes aligned with the team's
[technical vision](/handbook/engineering/infrastructure/team/cloud-connector/technical_vision/).
Refer to the [official architecture documentation](https://docs.gitlab.com/ee/development/cloud_connector/architecture.html)
for an accurate description of the current status.

## Motivation

Our "big problem to solve" is to bring feature parity to our SaaS and self-managed offerings.
Until now, SaaS and self-managed (SM) GitLab instances consume features only from the
[AI gateway](https://docs.gitlab.com/ee/architecture/blueprints/ai_gateway/index.html),
which also implements an `Access Layer` to verify that a given request is allowed
to access the respective AI feature endpoint.
<!-- TODO: change to new design doc URL -->

This approach has served us well because it:

- Required minimal changes from an architectural standpoint to allow SM users to consume AI features hosted by us.
- Caused minimal friction with ongoing development on GitLab.com.
- Reduced time to market.

However, the AI gateway alone does not sufficiently abstract over a wider variety of features,
as by definition it is designed to serve AI features only.

### Goals

We will use this blueprint to make incremental changes to Cloud Connector's technical framework
to enable other backend services to service self-managed/GitLab Dedicated customers in the same way
the AI gateway does today. This will directly support our mission of bringing feature parity
to all GitLab customers.

The major areas we are focused on are:

- [**Provide single access point for customers.**](https://gitlab.com/groups/gitlab-org/-/epics/12405)
  We found that customers are not keen on configuring their web proxies and firewalls
  to allow outbound traffic to an ever growing list of GitLab-hosted services. We therefore decided to
  install a global, load-balanced entry point at `cloud.gitlab.com`. This entry point can make simple
  routing decisions based on the requested path, which allows us to target different backend services
  as we broaden the feature scope covered by Cloud Connector.
  - **Status:** done. The decision was documented as [ADR-001](decisions/001_lb_entry_point.md).
- [**Remove OIDC key discovery.**](https://gitlab.com/groups/gitlab-org/-/epics/15142)
  The original architecture for Cloud Connector relied heavily on OIDC discovery to fetch JWT validation keys.
  OIDC discovery is prone to networking and caching problems and adds complexity to solve a problem we don't have.
  Our proposed alternative to OIDC discovery is to package the public keys used for token validation from our well-known token issuers with Cloud Connector backends directly instead of fetching them over the network.
  - **Status:** parked. We may publish a follow up ADR for an [alternative approach](https://gitlab.com/groups/gitlab-org/-/epics/14401). The decision was documented as [ADR-002](decisions/002_remove_oidc_key_discovery.md)
- [**Rate-limiting features.**](https://gitlab.com/groups/gitlab-org/-/epics/12032)
  During periods of elevated traffic, backends integrated with Cloud Connector such as
  AI gateway or TanuKey may experience resource constraints. GitLab should apply a consistent strategy when deciding which instance
  should be prioritized over others. This strategy should be uniform across all Cloud Connector services.
  - **Status:** In Progress.
- [**Extract CloudConnector unit_primitive configuration and logic**](https://gitlab.com/groups/gitlab-org/-/epics/14310)
  We will implement a new unit primitive-based configuration system by extracting it to an external library ([gitlab-cloud-connector](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector)) that will serve as the Single Source of Truth (SSoT).
  This library will be available as both a Ruby gem and a Python package. The decision was documented as [ADR-003](decisions/003_unit_primitives.md)
  - **Status:** In Progress.

## Decisions

- [ADR-001: Use load balancer as single entry point](decisions/001_lb_entry_point.md)
- [ADR-002: Remove OIDC key discovery](decisions/002_remove_oidc_key_discovery.md)
- [ADR-003: Centralize Unit Primitives configuration](decisions/003_unit_primitives.md)
