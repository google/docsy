---
title: "Workspaces ADR 012: Automatic suspension  of a workspace"
---

## Context

We decided to automatically terminate workspaces after a given internval of time
in [006: Automatic termination of a workspace](./006_automatic_termination_of_workspace.md).
This results in abrupt termination of a workspace which can result in a loss of work.

We need a way to continue saving costs for users when workspaces are not used actively but
not have such actions result in data loss.

## Decision

We decided to stop a workspace automatically after a given interval of time instead of terminating.
If the workspace is in a stopped state for a given interval of time, we will then terminate it.

Stopping a workspace results in releasing the compute resources but retaining the storage resources.
This give users an opportunity to restart the workspace if they need it.
At the same time, it will terminate workspace which the user has forgotten about, thus saving resources.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/14910).

## Consequences

If there is a long running process inside the workspace, it can be stopped when the workspace stops automatically.
This is acceptable for now because the workspace was being terminated prior to this.

## Alternatives

We considered to [automatically detect if any user processes are running in a workspace and then stop workspace](https://gitlab.com/groups/gitlab-org/-/epics/10710).
While this might be desired in the long term, this required more investment than what we wanted to invest at this point.
