---
title: "Workspaces ADR 010: Extensions marketplace for GitLab VS Code fork for Workspaces"
---

## Context

We inject GitLab VS Code fork for Workspaces in each workspace.
The VS Code ecosystem relies heavily on extensions to achieve functionalities.
We need to provide a way for users to connect to some VS Code extensions marketplace.

## Decision

We decided to connect the GitLab VS Code fork for Workspaces to [Open VSX Registry](https://open-vsx.org/)
as it is an Eclipse open-source project and alternative to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).

More details can be found [here](https://gitlab.com/gitlab-org/gitlab/-/issues/436398) and [here](https://gitlab.com/groups/gitlab-org/-/epics/12443).

## Consequences

When a workspace starts, GitLab VS Code fork for Workspace will connect to a third-party(Open VSX Registry)
to provide extensions functionality for the IDE. Some users might now want this
or might want control over which extensions marketplace they connect to for security or legal reasons.

This is acceptable for now as we can always add these controls based on user feedback.

## Alternatives

We briefly considered building our own custom extensions marketplace backed by a git repository
but did did not find any reason to prefer it over Open VSX Registry.
