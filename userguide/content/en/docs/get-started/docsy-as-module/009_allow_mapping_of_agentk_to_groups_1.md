---
title: "Workspaces ADR 009: Allow mapping of GitLab Agent for Kubernetes(agentk) to groups"
---

### Context

We have decided in [003: Authorizing user to create and access a workspace](./003_authorizing_user_to_create_and_access_workspace.md)
to only allow a user to create a workspace using any GitLab Agent for Kubernetes where
they have at least Developer access in any of group/subgroup of the common ancestor
of the project from which the workspace is being created and the project which has the
GitLab Agent for Kubernetes registered.

This is limiting in nature because there are many scenarios where users have Developer access
only to the project from which they want to create the workspace from and not to any of its
parent group.
Furthermore, this approach can be a potential security risk because it allows any user with
Developer role within a limited scope to register a GitLab Agent for Kubernetes and have it be
potentially used for creating workspaces by users with relevant access to some other projects
sharing the hierarchy. Since workspaces contain privileged information such as secrets,
more control should be enforced on what GitLab Agent for Kubernetes are available to the user
to create a workspaces from.

### Decision

We decided to replace the authorization rules introduced in
[003: Authorizing user to create and access a workspace](./003_authorizing_user_to_create_and_access_workspace.md)
to create a workspace with the following rules with some inspiration from the authorization model
that is offered by CI/CD runners at GitLab.

- A user can only create workspaces using a GitLab Agent for Kubernetes that is "available", and which has been configured for `remote_development`.
- A user must have Developer role to both the agent project and the workspace project.
- An agent is considered "available" for use with a workspace if a group owner or administrator has mapped the GitLab Agent for Kubernetes to any parent group of the workspace project. Another way of looking at it is; a mapping between a GitLab Agent for Kubernetes and a group is inherited by its subgroups.
- A GitLab Agent may only be mapped to a parent group.
  The group in question may or may not be a direct parent.
  For example, if an agent belongs to a project with path `root-group/nested-group/agent-project`,
  then the agent may be mapped to either `root-group` and/or `nested-group`.

By default, no GitLab Agent for Kubernetes is mapped to a group.
Additionally, if a project resides within a group, it does NOT imply that
the GitLab Agent for Kubernetess of this project are mapped to the parent group(s).

A GitLab Agent may only be mapped to a group.
In the future, mapping GitLab Agent for Kubernetess to the instance, personal namespaces etc. can/should be explored.

More details can be found [here](https://gitlab.com/gitlab-org/remote-development/gitlab-remote-development-docs/-/blob/9adfc89e9be5b1e419d47d695d39ad04e778033e/doc/tech-designs/2024-01-23-support-group-agent-authorization.md).

### Consequences

Since the new rules are incompatible with the existing rules, this feature will be put behind a feature flag and rolled out gradually. Additionally, in order to provide a smooth user experience during feature rollout, a one-time data migration will take place to create mappings between root groups and workspace GitLab Agent for Kubernetess within these groups. After this migration, for any changes desired to the list of GitLab Agent for Kubernetess available during workspace creation, users will be required to explicitly create/delete mappings.

### Alternatives

We considered specifying which [groups and projects can use the agent to create a new workspace by defining it in the GitLab Agent for Kubernetes configuration](https://gitlab.com/gitlab-org/remote-development/gitlab-remote-development-docs/-/blob/9adfc89e9be5b1e419d47d695d39ad04e778033e/doc/tech-designs/2024-01-23-support-group-agent-authorization.md#past-proposal).
But this did not address the existing security concerns highlighted above in that it allows a user
with limited privileges to expose infrastructure capabilities for groups/projects that are higher in the hierarchy.
