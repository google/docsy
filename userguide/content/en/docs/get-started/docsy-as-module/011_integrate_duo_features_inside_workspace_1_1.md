---
title: "Workspaces ADR 011: Integrate GitLab Duo features inside a workspace"
---

## Context

GitLab has launched AI capabilities which we should integrate and dogfood.
We need a way to integrate GitLab Duo and related capabilities in a workspace.

## Decision

We decided to sideload the GitLab Workflow extension along with the GitLab VS Code fork for Workspaces.
The extension already has integration with GitLab Duo and Duo Chat and other AI features.
The extension will utilize the user's Personal Access Token(PAT) injected inside the workspace for
authentication and authorization.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/12780).

## Consequences

GitLab Workflow extension would be available in all workspaces along with GitLab Duo and Duo Chat.
This is good because it allows dogfooding of other GitLab projects.

The scope of the PAT injected in the workspace will now include `api` access.

## Alternatives

No other alternatives were considered.
