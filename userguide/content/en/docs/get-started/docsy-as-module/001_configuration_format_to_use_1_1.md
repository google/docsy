---
title: "Workspaces ADR 001: Configuration format to use"
---

## Context

To provide a development environment which is reproducible and ephemeral, users need to be able to define their environment in a configuration format. We can choose between adopting an existing development environment configuration format or defining our own.

## Decision

We decided to use [devfile](https://devfile.io/) configuration format because it is highly configurable and it has tools built around it which makes integration easier for us e.g. devfile-library convert devfile to Kubernetes resources.

We will start with devfiles and eventually add support for other configuration formats(e.g. [devcontainer](https://containers.dev/)) as we receive feedback.

## Consequences

Using devfiles means a focus on Kubernetes.
This is acceptable for now since the architecture utilizes it.

## Alternatives

For a detailed comparison, see [Comparison of devfiles and devcontainers](https://gitlab.com/gitlab-org/gitlab/-/issues/366935).

We did not consider adding a new configuration format because we are too early in the development stage to know what the requirements would look like and defining a standard at this point would be premature.
