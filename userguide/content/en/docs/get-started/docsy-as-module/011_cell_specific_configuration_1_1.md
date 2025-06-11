---
owning-stage: "~devops::data stores"
title: "Cells ADR 011: Cell Specific Configuration"
toc_hide: true
---

## Context

A Cell is provisioned using a Tenant Model that is consumed by [Instrumentor](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor).
Both Instrumentor and the Tenant Model are shared components between GitLab.com and GitLab Dedicated,
and we need a way to split the code path for provisioning/configuring a Tenant for configurations that will only ever be enabled for a Cell, for example:

- [`_gitlab_session` prefix](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25621)
- [Host configuration](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25622)
- [Disable GitLab Dedicated custom ApplicationSettings for Cells](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25661)

## Decision

We will add a single field inside of the tenant model which will be `cells`.
`cells` will be an object, which will have keys specific to cell configuration,
for example:

```json
{
  "tenant_id" : "c01j2gdw0zfdafxr6"
  ...
  "cells": {
    "cell_id": 1
  }
}
```

The `cells.cell_id` will be a mandatory field, which will indicate that this tenant is a Cell.
By default `cell` is optional so existing tenant models will continue to work,
and new GitLab Dedicated tenants can omit it.

When `cell.cell_id` is specified we'll follow convention over configuration,
and trigger all the extra configuration we need to do for a tenant to run as a
cell, for example:

- [`_gitlab_session` prefix](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25621)
- [Host configuration](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25622)
- [Disable GitLab Dedicated custom ApplicationSettings for Cells](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25661)
- [Entitlement for PAM during onboarding](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/instrumentor/-/blob/9addcba3e58e91f443af8e1e82ade4e607964767/gcp/jsonnet/onboard-terraform.jsonnet#L59-71),
    where we'll check if it's a Cell Tenant and add the correct groups.

The value of `cells.cell_id` will come from the [Topology Service](../topology_service.md) and they need to match,
since this will make sure the topology service is aware of that Cell so it can route traffic to it.

## Consequences

- We follow [convention over configuration](../../../workflow/index.md#convention-over-configuration) where a single config field enables all of Cells configuration,
    without adding multiple configuration fields to the tenant model.
- We need to know the `cells.cell_id` that will be used by the Topology Service
    before we can fully provision a Cell.
- We will only add new fields to `cells` object if that is our only option, and
    we can't create a convention with `cell_id`.

## Alternatives

- Create a new field `cells: true` that does the same thing, but we still need
    another configuration field for `cell_id`, since we shouldn't couple
    `cell_id` and `tenant_id`. Coupling the two will have a few cons.
  - Using `tenant_id` to session/PAT prefix will be too long.
  - Expose the `tenant_id` to the user which is not ideal.
  - Couple application logic with `tenant_id` which has different constrains and meanings.
- Create a field for each configuration field. This will end up exploding the
    tenant model configuration, and make it hard to know which fields are needed to
    make a tenant work for cells.
- Create new reference architecture for Cells. The reference architecture mainly
    specifies how big/small a GitLab Tenant is. It will overload the reference
    architecture meaning, and we still need specific values
    like `cell_id` configurable somewhere.
- Using [Reference Architecture Overlays](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/tenant-model.html#reference-architecture-overlays)
    has the same problem as the reference architecture point before this,
    it's about how big/small a GitLab a Tenant is going to be.
