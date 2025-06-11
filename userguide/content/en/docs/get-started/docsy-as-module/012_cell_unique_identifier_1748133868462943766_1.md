---
owning-stage: "~devops::data stores"
title: "Cells ADR 012: Cell Unique Identifier"
toc_hide: true
---

## Context

We will have multiple Cells, each of which has a subset of customer data in them.
This means we need a unique identifier for each Cell to [Route](../http_routing_service.md), [Claim](../topology_service.md#claim-service), and [create sequences](../topology_service.md#sequence-service).

Cell provisioning tooling already has [Tenant ID](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/tenant-model-schema/-/blob/6051d7bdc6d540b45f75c52d8cb9962c426dadcb/json-schemas/tenant-model.json#L525-530)
which is used as a unique identifier for all the infrastructure that is
provisioned.

## Decision

Introduce the concept of Cell ID, where it will be an incrementing ID starting
from 1. This Cell ID will be used across multiple parts of the system:

- [Topology Service](../topology_service.md#claim-service): Used to classify resources, claim resources by a specific
  Cell ID, and create Database Sequence.
- [Tenant Model](011_cell_specific_configuration.md): Used to configure the
  Rails Monolith with the correct Cell ID and enable Cell-specific configuration
  inside of Instrumentor.
- [HTTP Router](../http_routing_service.md): Used as identifiable information to
  route the request to the correct Cell.
- Rails Monolith: When configured it will start claiming globally unique resources to Topology Service and create routable information like [tokens](../routable_tokens.md)

The Cell ID will have the following rules:

- Cell ID `1` will be reserved for the existing [legacy Cell](../goals.md#legacy-cell), and any new Cell provisioned will increment by 1, meaning the first we will provision will have a Cell ID of `2`.
- Cell ID can only be used once, and new provisioned Cell should have a new ID.

## Consequences

The Cell ID will need to be propagated through all the services that care about
Cells. For this to scale we need a single service that will be the single source
of truth for the Cell ID and where it points to.

Topology Service will be the owner and single source of truth of Cell ID, every
other system will use Topology Service to see how many Cells we have and the IDs
of those Cells.

## Alternatives

1. Use Tenant ID as an identifier: This would couple the Rails Monolith,
   Topology Service, and HTTP Router with the provisioned infrastructure. Making
   it hard to move the immutable infrastructure to a new tenant model, in case we
   want to provision a brand new tenant with the same Cell ID.
1. Cell Name: Give a Cell a specific name, this name still needs to be unique
   and probably derived from an ID anyway. If we were to use a cell name, that
   would be purely to make it human-readable, but no system would use it as an
   identifier, since it would be hard to keep the ID and Name in sync.
   The name of the Cell should follow [convention over configuration](../../../../../product/product-principles.md#convention-over-configuration)
   and follow the format of `cell-#{ID}`.
