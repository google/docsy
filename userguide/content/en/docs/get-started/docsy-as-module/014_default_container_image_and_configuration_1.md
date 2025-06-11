---
title: "Workspaces ADR 014: Default container image and configuration for Workspaces"
---

## Context

Users are required to create a devfile in their project to use Workspaces.
This hinder adoption, usage and time-to-first-workspace by making a high barrier to entry.
We need to provide a way for users to create a workspace from a project without any devfile.

## Decision

We decided to allow user to create a workspace from a default devfile.
This default devfile will have a container image which will allow users to try out workspaces
without having a high barrier to entry.

## Consequences

Not providing a default devfile would mean we continue with a high barrier to entry to try out workspaces.
This affects adoption and usage.

## Alternatives

We considered providing a [list of default devfiles and/or a registry of devfiles](https://gitlab.com/groups/gitlab-org/-/epics/14113#note_2013471216)
for a user to choose from when creating a workspace.
While this might be desired in the long term, this required more investment than what we wanted to invest at this point.
