---
title: "Workspaces ADR 005: Explicitly define the user/group ID of the containers at runtime"
---

## Context

We have decided to use Kubernetes in [002: Provision compute and storage for a workspace](./002_provision_compute_and_storage.md).

We need a way to run securely run multiple untrusted workspaces in Kubernetes.

## Decision

With an abundance of caution, we decided to explicitly set the [security context](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)
with which a Kubernetes Pod will run.
This will prevent privilege escalation.

More details can be found [here](https://gitlab.com/gitlab-org/gitlab/-/issues/391856#note_1284825444).

## Consequences

Since we clone the project as an init container, the files cloned have a specific user/group ID as the owner.
To allow users to be able to access the files in their workspace with the appropriate file permissions,
we need all the containers to be run as the same user/group ID as the init container cloning the project.

Since we will explicitly set the linux user/group ID of the user which will run the workspace,
the container images used to create the workspace should follow the practices around running a container
image with arbitrary user ID i.e. at the container build time, the user should not make any assumptions about
which user/group ID the container will run as and give file permissions accordingly at build time.

More details can be found [here](https://gitlab.com/gitlab-org/gitlab/-/issues/396300#note_1375061754).

## Alternatives

No other alternatives were considered.
