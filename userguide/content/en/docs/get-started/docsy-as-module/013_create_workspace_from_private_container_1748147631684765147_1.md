---
title: "Workspaces ADR 013: Create workspaces from private container images"
---

## Context

Creating workspace from a container image from private container registry requires users to setup
the image pull secrets in Kubernetes which need to be cloned to the namespace of the workspace.
This requires additional steps which can be cumbersome.

We need to provide users a way to use container images from private container registries in a secure way.

## Decision

We decided to allow users to specify the reference to existing Kubernetes Secrets containing the image pull secret.
When a new workspace is created, these secrets are replicated and auto configured.
Any changes to upstream secrets are replicated to all downstream secrets.

There are different container registries each with their own authentication mechanism where the tokens might be ephemeral.
These registries already have tools/documentation to integrate natively with Kubernetes which we will leverage.

More details can be found [here](https://gitlab.com/groups/gitlab-org/-/epics/14664).

## Consequences

Users will only specify the reference to existing Kubernetes secret and not the secret value itself.
We will leverage the existing tooling the container registries have with Kubernetes.

## Alternatives

No other alternative was considered.
