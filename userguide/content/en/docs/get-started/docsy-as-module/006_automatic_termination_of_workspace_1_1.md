---
title: "Workspaces ADR 006: Automatic termination of a workspace"
---

> [!WARNING]  
> The decision was overriden by [012: Automatic suspension of a workspace](./012_automatic_suspension_of_workspace.md).

## Context

Once workspaces are created, they incur costs for compute and storage until they are terminated.
We allow users to stop their workspaces which will allow them to save the compute costs at least.
However, users do not stop their workspaces when they are done working for the day.
Thus, we need to provide a way for organizations to save money without relying on user expectations.

## Decision

In order to avoid unnecessary resource usage and costs, workspaces should be terminated automatically after a given period of time.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/10595).

## Consequences

Users can loose their work if they do not save it and the workspace is auto terminated after a given period of time.

## Alternatives

No other alternatives were considered.
