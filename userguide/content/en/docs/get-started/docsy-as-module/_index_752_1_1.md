---
title: "Reverse gRPC tunnel for GitLab VS Code fork in Workspaces and CI"
status: ongoing
creation-date: "2024-12-24"
authors: [ "@DylanGriffith" ]
coaches: [ ]
dris: []
owning-stage: "devops::create"
participating-stages: []
toc_hide: true
---

<!-- Design Documents often contain forward-looking statements -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< design-document-header >}}

## Summary

Configuring and deploying the Workspace proxy with a valid SSL certificate and
domain name record is a very complicated process and is a requirement for using
Workspaces today.

This design document explains how we can re-use our
[GitLab Agent (KAS)](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent)
architecture to avoid all of this setup and tunnel in via KAS.

This document also describes how this could be used to get a GitLab VS Code fork connected
to a running CI Job as an additional benefit.

While this document is related to
https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10811

## Proposal

In short, we propose that we tunnel HTTP and SSH traffic over gRPC (using KAS)
to access our deployed workspaces. This would be an alternative option to our
workspace proxy and it has the following benefits over the workspace proxy:

1. It doesn't require the user to deploy any ingress/certmanager/proxy to K8s
1. It doesn't require the user to register a domain name
1. It doesn't require the user to deal with SSL certificates

Initially we would provide this as an optional alternative to the workspace
proxy but still maintain support for the workspace proxy. This would unblock
other ways of deploying workspaces (see [below](#related-work-for-deploying-workspaces-to-vms)).
Longer term we can determine whether or not we want to maintain both options
depending on user feedback.

In addition we found that it was easy to extend this tunnel to be useful for
debugging CI jobs using the GitLab VS Code fork so that is also included in this proposal.
This idea of tunneling may provide an alternative network transport
to support
[Interactive Web Terminals](https://docs.gitlab.com/ee/ci/interactive_web_terminal/)
which currently relies on direct network access to the Runner Manager and is likely a
considerable barrier for adoption.

## Technical details

The main idea of this proposal is to make use of the
[`agentk` -> `KAS`](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/doc/kas_to_agentk_connectivity.md#agentk---kas-connectivity)
`gRPC` connection to tunnel HTTP requests to a GitLab VS Code fork running on the same
container as the agent. Since `agentk` was built with a different purpose in
mind (communicating with the K8s API) we are likely to build a different agent
binary while trying to re-use as much of the server-side components as
possible.

The HTTP tunnel has already been demonstrated in
https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
and was a simple extension of existing HTTP tunnel behaviour in KAS. We still
need to build a new SSH tunnel in KAS to allow for SSH connectivity to the
Workspace, but we do not anticipate there should be any technical limits
preventing us from doing this. The largest architectural part of this work would
be building an SSH server into KAS which authenticates users based on our
preferred SSH authentication mechanisms. This work is not mutually
exclusive with
[ongoing work to change the way our SSH proxy works](https://gitlab.com/groups/gitlab-org/-/epics/13984)
as this network tunnel could be used for websocket-based SSH tunneling.

![reverse gRPC tunnel into Workspaces](/images/handbook/engineering/architecture/design-documents/reverse-grpc-tunnel-workspaces-and-ci/workspace-grpc-tunnel.png)

This idea was demonstrated in this
[video demo](https://youtu.be/hw5gExP_gvA) which is composed of
POC changes in the following merge requests:

1. https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176478
1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

![reverse gRPC tunnel into CI](/images/handbook/engineering/architecture/design-documents/reverse-grpc-tunnel-workspaces-and-ci/workspace-tunnel-and-ci.png)

This idea was demonstrated in this
[video demo](https://www.youtube.com/watch?v=m4VaLLg_Ipk) which is composed of
POC changes in the following merge requests:

1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

### Agent lifecycle

In this proposal we will be introducing a new type of agent. We'll call it a
"tunneling agent" for now but we may come up with a different name once we start
developing it.

These tunneling agents will be short lived ephemeral agents that only exist for
the lifecycle of a single workload that needs to be tunnelled into. In the case
of Workspaces we will create these agents when we create a workspace and we will
expire/destroy them after the workspace is terminated. They will have a short
lived agent token that is injected into the workspace via environment variables.

These agents will not be shown in other parts of the GitLab application and do
not require agent config files like normal agentk agents.

## Background

This proposal is based on experimental proof of concept work done as part of
https://gitlab.com/gitlab-org/gitlab/-/issues/505764 to explore ways to minimise
the amount of effort to get started with Workspaces.

During the investigation we found that
[KAS](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent) already
has most of the building blocks for this network tunnel and as such would be the
most efficient option for getting this to production. KAS was originally built
as a way to tunnel into customer's K8s clusters, and this is reflected in the
name, but the same techniques can easily be applied to tunneling into any
customer workloads so it seems like a natural extension of this service.

## Related work for deploying workspaces to VMs

The work complements
[another proposal](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10811)
for how we might also run workspaces without Kubernetes at all, but this
proposal focuses solely on the network tunneling behaviour that will be used for
both of these. It will be possible to ship either of these without the other and
provide incremental user value, and as such we created separate proposals.

In practice this proposal for network tunneling may be easiest to implement
first as a smaller iteration to unblock deploying workspaces via CI.

## Iteration plan

1. New KAS tunnel
   1. GitLab tunnel agents model
   2. New endpoint in KAS server
   3. New agent binary
1. Workspace integration
   1. Workspace creation optionally creates the tunnel agent
   1. Workspace creation optionally installs the tunnel agent
   1. Workspace init optionally starts the tunnel agent (using injected env var
      for short lived token)

## Alternatives considered

### Build a whole new service instead of KAS

Since KAS was not built specifically for this purpose, it is tempting to build a
new service with this single responsibility. We may still decide to do that if
we find that we just can't make that fit. But it is not our first choice as
there are many technical complexities in building a service that meets these
requirements. Here are some of the not-so-obvious tricky details that KAS has
already solved:

1. Clustering: Many to many relationships between agents and servers means that
   the user's HTTP request may not reach the same server which has a connection
   to the agent they are trying to reach. KAS solves this by clustering (via
   Redis) to locate the correct server with the client connection and forwarding
   the request to that server.
2. Connection pooling: Since the gRPC streams can only be opened by the client
   (in this case the agent) it is not possible to just open a new stream (or
   send a new gRPC message) for every HTTP request which comes into the server.
   KAS solves this by keeping open a buffer of idle gRPC streams to the agent
   and it opens additional streams when all streams are in use for HTTP
   requests.
3. Authorization: KAS already integrates with GitLab to authenticate and
   authorize access to specific resources and agents.

### Deploying load balancers/Ingress for the customer

Since the original motivation for this work was to find alternatives to
Kubernetes which are simpler for customers to set up it was also considered that
we might build tooling to provision the load balancers and Ingress for the
customer. This would simplify the setup but it does come with tradeoffs. It
still requires the customer to register a domain name and there are still
complexities with generating SSL certificates. One of the biggest challenges
with using Let's Encrypt to generate SSL certificates is that there are limits
on the number of certificates you can generate within a period of time. Using
our KAS ingress avoids any such limits as we can use a single wildcard
certificate for all workspaces. Each workspace would have unique domain, which
is some subdomain of `worskspacerootdomain.example.com` (for example).
