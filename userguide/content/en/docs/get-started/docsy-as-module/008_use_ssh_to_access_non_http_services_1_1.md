---
title: "Workspaces ADR 008: Use SSH to access non-HTTP services running in a workspace"
---

## Context

We need to provide users a way to access any non-HTTP services running inside the workspace
e.g. TCP server the user is running from within the workspace.

## Decision

We will use SSH to allow users to access any HTTP/non-HTTP services running inside the workspace.
User can directly SSH into the workspace through the terminal or
use remote/local port-forwarding features of SSH to achieve their goals.
We expect users to have SSH daemon installed and configured in their container images
which we will start on workspace startup.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/10478).

## Consequences

Not using SSH would mean we need to provide a way to access all the different kinds of traffic -
TCP, SSH, IMAP, etc. - running in a workspace.

We expect users to have SSH daemon installed and configured in their container images.

## Alternatives

No other alternatives were considered.
