---
title: "Deploy workspaces with CI Runner"
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
{{< engineering/design-document-header >}}

## Summary

Configuring and deploying Workspaces in GitLab today depends on the customer
having configured a Kubernetes cluster as well as a GitLab Kubernetes Agent and
several other components. There is quite a lot of friction in the setup and even
just running Kubernetes is likely a considerable burden for customers.

As well as the complexity of setting up Kubernetes to run Workspaces it may also
not be very cost effective for some customers as the baseline workload of a
Kubernetes cluster without any workspaces running is not insignificant.

This design document proposes that we allow customers to also deploy Workspaces
using the existing CI Runners they have configured for their projects.

## Proposal

This design document is related to
https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/10804 except this
document focuses on deploying workspaces as opposed to how to get network access
to the GitLab VS Code fork running inside the container.

The idea of this proposal is that we add an additional option to workspace
creation to create the workspace using CI Runners. Behind the scenes this will
skip all the Kubernetes agent related logic of Workspaces and create a CI
Pipeline. The CI pipeline will use the same docker image specified in their
Devfile and will inject the GitLab VS Code fork into that docker image in a similar way to
how it is injected into our Kubernetes Workspaces.

This idea was demonstrated in this
[video demo](https://youtu.be/TVGkBn726Bk) which is composed of
POC changes in the following merge requests:

1. https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176479
1. https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/2084
1. https://gitlab.com/gitlab-org/workspaces/gitlab-workspaces-tools/-/merge_requests/19

## Key benefits of CI Runners

It is clear that CI Runners and CI (in general) is quite different to the way
workspaces work. So it is reasonable to ask why we want to try to make these
things fit. Some of the main advantages I see in iterating along this path are:

1. CI Runners are a mature product that self-managed and GitLab.com customers
   are already using
1. CI Runners already know how to speak to multiple cloud providers (AWS, GCP,
   Azure) and even support creating K8s pods which could even replace our
   existing approach to provisioning workspaces in K8s. In addition CI Runners
   are based on a [plugin system](https://gitlab.com/gitlab-org/fleeting/fleeting)
   which allows users to implement their own cloud provider support
1. Expanding runners to support these more generic workloads will easily extend
   to Duo Workflow where we are struggling with this exact same problem of
   provisioning a workspace (see
   https://gitlab.com/groups/gitlab-org/-/epics/16050) and there are yet more
   proposals to better utilise Runners for more generic workloads (see
   https://gitlab.com/gitlab-org/gitlab/-/issues/328489)

## Technical details

There is a POC in https://gitlab.com/gitlab-org/gitlab/-/merge_requests/176479
which shows roughly how we might support runner type workspaces as well as agent
type workspaces.

### Injecting the GitLab VS Code fork

The GitLab VS Code fork can be injected into the CI Job in a similar way to what we do for
our existing Kubernetes functionality. Our `.gitlab-ci.yml` syntax already
supports additional containers (called `services`) which have a shared volume.
We could use this with our existing workspace tools images to inject the GitLab VS Code fork
in almost an identical way. Then we can add commands to the `script` of the CI
Job to run the GitLab VS Code fork.

### Keeping things running (and declarative programming)

Many of the discussions around alternatives to Kubernetes for running these
kinds of workloads focus on the benefits of the declarative API for Kubernetes.
Specifically people like the idea that they can just declare all the workloads
that they expect to be running and Kubernetes will take care of starting the new
ones, shutting down ones that are no longer needed and also restarting processes
as they crash.

When we use the CI Pipeline and Runner as the primary API for provisioning
compute we won't be getting any of that "for free". We can rely on the CI Runner
to shut down jobs after some time as well as a best effort to shut down jobs we
cancel from the Rails side. But we'll still want some more robust "restart"
mechanism for crashed workspaces. A simple option for this will be some kind of
periodic process on GitLab Rails which is looping over all the workspaces we
expect to be running and checking whether or not they are still running.

Due to network access this would likely require a kind of health check pushed by
the workspace or runner. This may be able to make use of the existing runner
[`heartbeat`](https://gitlab.com/gitlab-org/gitlab/-/blob/8e1b70181095ef8d93ddaa01388ac25a74aeac24/app/models/ci/runner.rb#L524).
Those implementation details will be left out of this document, but we should
assume that Rails can know whether or not the Workspace has reported it's status
with some frequency.

Once we know if a workspace is no longer running (or healthy) and we believe it
should be, then GitLab Rails will do 2 things:

1. Cancel the existing job for the workspace: notifying the runner to terminate
   it if it thinks it is still running
2. Create a new job for the workspace: and a runner will pick it up and create
   it again

All of this sounds much less elegant than the declarative APIs provided by
Kubernetes but ultimately this is the kind of thing that is abstracted away by
Kubernetes. Nothing prevents us from providing similarly "elegant" abstractions
in the GitLab Rails codebase for hiding all this complexity.

### Persistence

GitLab CI jobs already support persistence via a "cache". The cache storage
in a CI Job usually involves zipping up a directory, uploading to object storage
and then downloading an unzipping it the next time a CI job runs with the same
cache key. We can likely re-use this mechanism initially to reduce the scope of
our first iteration. Using the CI cache will need to ensure that users do not
accidentally get the same cached data as another user. This should be possible
by using a unique cache key for each workspace.

The CI cache, however, is not likely to be a good long term solution due to cost
of zip/unzip and durability. As such we will look to replace this quickly with a
better solution. The most promising option here will be to create a volume per
workspace and re-use that volume when a workspace is restarted. The volumes
should only be destroyed when the workspace is removed and not when the
workspace is stopped. Extending the CI Runner to create persistent volumes may
align with similar goals for faster cache retrieval in CI jobs.

A related note here is that one of the key benefits of cloud development
environments is that they are easy to recreate from scratch and this optimizes
onboarding for new developers as well as provides consistent development
environments across a team. While there may be a desire for developers to
completely make a workspace their own, after they boot it up, it may also be an
anti-pattern with regards to cloud development environments. Having long running
workspaces has tradeoffs for keeping up with changes to the base image,
contributing back workspace improvements to the team and accidentally creating a
snowflake VM that other team members cannot recreate. Instead it may be
preferable for GitLab to improve the tooling for developers to create persistent
customizations for their workspace (e.g. separate git-managed config files that
apply on startup). This is a side note due to the emphasis I've heard placed on
persistence in my discussions and is otherwise not explored in this document.

Primarily we should aim to at least provide similar persistence in our CI based
workspaces as compared to our existing Kubernetes based workspaces but we don't
need to aim to improve on this as part of this architecture.

### Devfile vs. Development Container vs. something else

Right now our workspace functionality uses the [devfile](https://devfile.io/)
format. Since this tool only really supports Kubernetes it may be a good time to
move away from Devfile and try a different configuration file. We could consider
moving to supporting [Development Containers](https://containers.dev/) but that
might lead to us needing to build a lot more functionality into GitLab.

For now we should attempt to start by just translating the minimum amount of
details we need from the Devfile syntax to create a comparable workspace inside
of CI. We should probably investigate the move to Development Containers or
another format independently of this work.

If we find that extensive effort is needed to translate the Devfile to something
that can run in a CI job then we might be forced to tackle this problem sooner.

## Iteration plan

1. Introduce `CI::Workload` concept which allows creating a workload without
   defining a `.gitlab-ci.yml`
1. Alpha support for creating a workspace using `Ci::Workload`. There is no
   guarantee it stays alive at this point but it will be created.
1. Implement persisting and restoring the workspace code directory
1. Implement robust restarts of workspace if it crashes (or the CI Job times
   out)

## Alternatives Considered

### Use new service to manage the VMs

We could still re-use parts of the Runner stack including the
[fleeting API](https://gitlab.com/gitlab-org/fleeting/fleeting). This would at
least reduce duplicated effort to integrate with these cloud providers and also
provide a plugin systems for customers to implement their own cloud provider
support. The downside might be similar to re-using all of CI Runners, because
there still may be differences in how we manage VMs that make the code more
difficult to work with.

### Use our existing Google Cloud IAM integration

We [have an integration with Google Cloud IAM](https://docs.gitlab.com/ee/integration/google_cloud_iam.html).
This integration provides a way for customers to connect their cloud accounts to
GitLab and a mechanism inside GitLab for provisioning short-lived credentials.
It could form the basis of an integration for provisioning VMs for workspaces
but today it only provides authentication which would leave us to build
everything else.
