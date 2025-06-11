---
title: "Workspaces ADR 017: Allow users to build and run containers inside a workspace"
---

## Context

We decided in [016: Allow users to run sudo commands inside a workspace](./016_allow_users_to_run_sudo_commands.md)
to allow users to securely use commands with sudo permissions inside a workspace.
While this allows for greater flexibility, development environments can require
building and running containers to manage and use dependencies during runtime.

We need a way to provide users to build and run containers inside a workspace securely.

## Decision

Securely running commands with sudo permissions is a pre-requisite to build and run containers inside a workspace
which was achieved in [016: Allow users to run sudo commands inside a workspace](./016_allow_users_to_run_sudo_commands.md).

We decided to futher leverage Sysbox to achieve building and running containers inside a workspace.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/11319).

## Consequences

Not providing a way for users to build and run containers inside a workspace would hamper the value proposition
of workspaces which aims to replace local development environments.

Leveraging Sysbox means we are dependent third-party tools for functionality.
This is acceptable for reasons mentioned in [016: Allow users to run sudo commands inside a workspace](./016_allow_users_to_run_sudo_commands.md).

## Alternatives

Since we are already using Sysbox to provide secure way to run commands with sudo permissions inside a workspace,
we decided to leverage it rather than find more alternatives to it.
