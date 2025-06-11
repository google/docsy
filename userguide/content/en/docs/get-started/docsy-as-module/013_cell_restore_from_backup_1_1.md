---
owning-stage: "~devops::tenant scale"
title: 'Cells ADR 013: Use the same Cell ID for restoring a Cell from backup'
toc_hide: true
---

## Context

We discussed in [this epic](https://gitlab.com/groups/gitlab-org/-/epics/16339#note_2305490260) whether restoring a Cell from backup should be done in-place, or into a new Cell with the same or a different Cell ID.

## Decision

It was decided that for Cells 1.0:

1. We will prioritize restoring into a new Cell rather than restoring in-place in an existing Cell.
1. When restoring a Cell, the recovered Cell will use the same Cell ID as the original Cell.
1. When restoring a Cell, the recovered Cell will have a different and unique Tenant ID.
1. If a recovered Cell will need to become permanent, an update will be made in the Topology service to update the address for the existing Cell ID, to point to the new Tenant.

There will be two modes of Cell restoration:

1. If the recovered cell will be permanent:
   1. Restrict writes or traffic to the Cell being recovered.
   1. Provision the recovered Cell with the same Cell ID, different Tenant ID.
   1. Register the recovered cell with the topology service with the new address.
1. If the recovered cell will be used for validating restore:
   1. Provision the recovered Cell with the same or unset Cell ID and a different Tenant ID.
   1. Don't add the recovered Cell to the topology service; it can't be assigned [sequence ID](../topology_service.md#sequence-service) or [Claims](../topology_service.md#claim-service).
   1. Validate the recovered Cell by connecting to it directly, bypassing the routing.
   1. Tear down the recovered Cell.

**Note**: During the recovery process we may need to utilize [silent mode](https://docs.gitlab.com/ee/administration/silent_mode/) on the recovered Cell, or [maintenance mode](https://docs.gitlab.com/ee/administration/maintenance_mode/) on the Cell being recovered.

## Consequences

1. By prioritizing recovery into a new Cell, we can automate and test the restore process in Production.
1. Using the same or unset Cell ID on the restored Cell, external traffic will not be routed to it. The recovered Cell will not by default register itself with the Topology Service.
1. By assigning a new Tenant ID to the recovered Cell, it will allow us to validate the Cell by connecting directly to it, but not route traffic to it.

## Alternatives

1. Restore affected components in place.
   We decided to de-prioritize this approach as it doesn't allow for easy validation in Production of restore procedures.
2. Assign a new Cell ID to the recovered Cell.
   Because the recovered Cell may be the replacement for an existing Cell. For routing purposes, we want to keep the Cell ID the same.
   If Cell ID changes, we would need to re-write multiple claims in Topology Service making the recovery process slower and more compute intensive.
