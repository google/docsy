---
title: "Workspaces ADR 003: Authorizing user to create and access a workspace"
---

> [!WARNING]  
> The decision about which users can create a workspace using which agentk was overriden by [009: Allow mapping of GitLab Agent for Kubernetes(agentk) to groups](./009_allow_mapping_of_agentk_to_groups.md).

## Context

We have decided to use GitLab Agent for Kubernetes in [002: Provision compute and storage for a workspace](./002_provision_compute_and_storage.md).
GitLab Agent for Kubernetes(agentk) are tied to a particular project.
We want to provide an easy way to allow projects to use a particular agentk.

## Decision

A user can create a workspace from a particular project using all the agentk which are under the group/subgroup as the project. The user should also have Developer access in these groups.

The workspace can only be accessed by the user who has created it.

## Consequences

Requiring users to have Developer access in these groups/subgroups can be limiting to many organization.

This is acceptable for now since this gives us the fastest way to validate this feature category with customers and iterate on feedback.

## Alternatives

No alternatives were seriously considered at this point because we are at a very early stage and want to get something out for users to try and provide us with feedback.
