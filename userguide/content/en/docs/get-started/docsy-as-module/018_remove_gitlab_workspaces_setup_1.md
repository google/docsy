---
title: "Workspaces ADR 018: Remove GitLab Workspaces Proxy to simplify setup"
---

## Context

In [004: Authentication of user traffic to access a workspace](./004_authentication_of_user_traffic_to_access_workspace.md)
it was decided to use GitLab Workspaces Proxy, a centralized proxy in the user's Kubernetes cluster,
to authenticate and authorize user traffic to access a workspace.

Setting up GitLab Workspaces Proxy involves quite a lot of steps - buying/managing a domain, provisioning TLS certificates and
setting them up for automatic renewal, creating an OAuth application, etc.
Each of these step can go wrong in multiple ways thus complicating the setup.

We need a way to simplify the setup without burdening the user with buying/mangaing a domain, managing TLS certificates and other unrelated tasks to unlock the value of Workspaces for themselves. We want to reduce the barrier to entry for setting up Workspaces.

## Decision

We will eliminate the need for GitLab Workspaces Proxy in the user's Kubernetes cluster by moving
the logic of proxying traffic into the appropriate workspace to a server hosted and managed by GitLab
as part of GitLab Agent Server(KAS).
GitLab Agent for Workspaces(agentw) would be injected inside each workspace which will initiate a bi-directional gRPC connection
with the above server. When user traffic arrives at the server, it will be authenticated, authorized
and proxied into the appropriate workspace using the bi-directional gRPC connection established earlier.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/16785).

## Consequences

Since the need for GitLab Workspaces Proxy in the user's Kubernetes cluster is eliminated,
users need not install any Ingress Controller.
This further reduces expectations from users and simplifies the overall architecture.
All traffic for the workspace will be through reverse gRPC tunnels established from within the workspace.

All workspaces will now be available on a GitLab managed domain.
Each workspace will continue to have a unique host.

## Alternatives

We considered [routing the user traffic for a workspace through Rails](https://gitlab.com/gitlab-org/gitlab/-/issues/519307#note_2350473507)
to keep all the domain logic in the monolith but decided against it becasue Puma servers are blocked on each request.
Workspaces traffic would be a long persistent connection and thus it would become a scaling problem.

We considered [routing the user traffic for a workspace through a new service - GitLab Workspaces Server](https://gitlab.com/gitlab-org/gitlab/-/issues/519307#note_2365114887)
to keep all the domain logic in a service owned by the team but decided against it because we did not see any value over
keeping the logic in GitLab Agent Server/GitLab Agent especially because that project is a modularized monolith for such architectures outside of our Rails monolith.
