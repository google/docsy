---
title: "Workspaces ADR 016: Allow users to run sudo commands inside a workspace"
---

## Context

Development environments often require sudo permissions to install, configure,
and use dependencies during runtime.
We do not allow users to run any commands with sudo permissions.

We need to allow users to use sudo securely without resulting in privilege escalation.

## Decision

Kubernetes does not provide any way to securely run containers inside a container in a Pod.
While there are features like [User Namespaces](https://kubernetes.io/docs/concepts/workloads/pods/user-namespaces/)
in Kubernetes, it is not generally available as of this writing.
Thus, customers using any managed Kubernetes offerings - which would presumably include a lot -
would not be able to use this as the feture is behind a feature flag in Kubernetes.

We decided to leverage existing tooling built on top of Kubernetes to allow users to run commands
with sudo permissions securely inside a container.
These existing tooling includes [Sysbox](https://github.com/nestybox/sysbox) and [Kata Containers](https://github.com/kata-containers/kata-containers). We also decided to add support for User Namespaces.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/13983).

## Consequences

Not providing a way for users to securely run commands with sudo permissions would hamper the value proposition
of workspaces which aims to replace local development environments.

Leveraging Sysbox and Kata Containers means we are dependent third-party tools for functionality.

This is acceptable because securely providing elevated permissions inside a container is a tricky and challenging problem
which would require temendous amount of investment. Even then it would be some custom tools on top of Kubernetes which the customers would have to configure. The cost of maintaining such a custom tool would be very high.

## Alternatives

We [considered using KubeVirt but decided against it](https://gitlab.com/gitlab-org/gitlab/-/issues/456947)
since it integrates with Kubernetes using Custom Resources which does not fit out model of integration with Kubernetes.
