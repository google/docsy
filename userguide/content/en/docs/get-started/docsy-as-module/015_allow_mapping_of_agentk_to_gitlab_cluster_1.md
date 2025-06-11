---
title: "Workspaces ADR 015: Allow mapping of GitLab Agent for Kubernetes(agentk) to GitLab Cluster"
---

## Context

We have decided in [009: Allow mapping of GitLab Agent for Kubernetes(agentk) to groups](./009_allow_mapping_of_agentk_to_groups.md)
to allow users to map a GitLab Agent for Kubernetes(agentk) to a group.
This requires customers to map the agentk to all groups they want to use Workspaces for.
Self-managed customers want an easier way to map an agentk to all the groups in their GitLab cluster.

## Decision

We decided to allow users to map a GitLab Agent for Kubernetes(agentk) to a GitLab cluster.
This would make it easier for self-managed customers to map one agentk for all projects in their GitLab cluster.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/16485).

## Consequences

Not providing an easier way to map an agentk to all projects would create hurdles for customers,
thus affecting adoption and usage.

## Alternatives

We considered [allowing agentk' to be mapped to a namespace under a different top-level group within a GitLab cluster](https://gitlab.com/gitlab-org/gitlab/-/issues/463455).
This would still leave the need for introdcing a higher level of mapping(i.e. GitLab cluster).
