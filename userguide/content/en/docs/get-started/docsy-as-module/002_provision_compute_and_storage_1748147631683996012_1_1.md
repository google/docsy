---
title: "Workspaces ADR 002: Provision compute and storage for a workspace"
---

## Context

To provide a development environment, we need a compute and storage platform which can be used to dynamically spin up resources as and when required.

## Decision

We decided to use [Kubernetes](https://kubernetes.io/) because

- It is a [CNCF](https://www.cncf.io/) project.
- It is cloud agnostic and provides first class integration with all public clouds to provision compute/storage dynamically.
- It is self-managed first i.e. users can bring in their own infrastructure without us worrying about metering and billing.
- We already have an integration - [GitLab Agent for Kubernetes](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent) - which allows seamless integration of Kubernetes and GitLab.
- This provides the fastest way to deploy development environments in different private/public clouds without any custom integrations.

We will not provide a managed offering for this yet.
All infrastructure required will be provided by the users and it will by integrated with GitLab
by adding an agent module in GitLab Agent for Kubernetes.

## Consequences

From past experiences with products launched explicitly on Kubernetes, we have had hurdles with customers since not all customers uses Kubernetes or have the expertise to manage a Kubernetes system.

This is acceptable for now since this gives us the fastest way to validate this feature category with customers and iterate on feedback.

Not providing a managed offering might impact adoption/usage since there is some infrastructure expectations from users.
However, providing a managed offering would involve significant more investment to sort out metering and billing.

## Alternatives

We briefly considered using CI Runners but could not figure out the logistics of how things would work.

We considered using [DevWorkspace Operator](https://github.com/devfile/devworkspace-operator)
since it already support devfile but did not proceed with it because:

- It is a [Kubernetes Custom Resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) which means users will have to install a third-party dependency on their Kuberentes clusters.
- DevWorkspace Operator has an additional dependency on [cert-manager](https://cert-manager.io/) which is another Kubernetes Custom Resource for cloud native certificate management.
- Adding customizations would be challenging as it would require co-ordinating with upstream project and their releases.
- More details can be found [here](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/97449#note_1131215629).

We considered using [Eclipse Che](https://gitlab.com/gitlab-org/gitlab/-/issues/366052) but did not proceed with it because

- It relies on DevWorkspace Operator and thus has the same issues as listed above.
- It is opinionated about the ingress controller(traefik) to the Kubernetes cluster.

We initally started with using the DevWorkspace Operator along with GitLab Agent for Kubernetes and ended up removing DevWorkspace Operator depenceny for reasons mentioned above as part of [remove the dependency on DevWorkspace Operator](https://gitlab.com/groups/gitlab-org/-/epics/9895).
