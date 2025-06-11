---
title: "Setting feature flags in Cells"
status: proposed
creation-date: "2024-10-14"
authors: [ "@rpereira2" ]
coaches: [ "@nolith", "@skarbek" ]
owning-stage: "~devops::platforms"
group: Software Delivery::Deploy
toc_hide: true
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< design-document-header >}}

## Summary

Feature flags are a powerful tool that provide SREs and developers a way to
control behavior of the application in a rapid manner.
They are also commonly being used in the industry to increase personalisation and as go to market tools e.g. [LaunchDarkly](https://launchdarkly.com/).

Currently, with a single production instance, setting of feature flags is an
operation that is performed with a single ChatOps command, and immediately
rolled out to production with an API call.

With the introduction of multiple cells, engineers setting feature flags in
each cell will be unmanageable.

Reference the previous iteration of this ADR:
[Cells: Feature Flags](../feature_flags.md/)

## Motivation

With the change of Cells milestones and their iterations, the premise that we
will manage feature flags only on the legacy cell and not on any of the cells
is no longer true.

Feature flags are commonly used to introduce features that
are considered risky, or features that are not considered production ready.
In addition, feature flags are regularly used to mitigate incidents.

Feature flags will need
to be available for use on Cells before the first cell has a customer.

### Goals

This document describes at a high-level how feature flags will be set and rolled
out to Cells.

Implementation details are left out of this document. In some cases, options for
implementing the design are mentioned.

- Describe the interface for engineers and SREs to set feature flags in Cells.
- Define rollout strategies for feature flags in Cells.

### Non-Goals

Other aspects of feature flags, though they might need to be revisited in preparation
for Cells, will not be discussed here.

- Visualizing current feature flag state.
- Feature flag lifecycle changes; Limiting number of feature flags, reducing long lived feature flags.

## Proposal

### Key terms

- ChatOps - [ChatOps commands](https://docs.gitlab.com/ee/development/feature_flags/controls.html)
  are used to control feature flags on environments.
- Tissue - The [Tissue](https://ops.gitlab.net/gitlab-com/gl-infra/cells/tissue/) project
  is used for [coordinating changes in Cells](managing_changes.md).

### Overview

#### Current usage

ChatOps is currently used to set feature flags. A ChatOps command triggers
a pipeline in the ChatOps project which sets the feature flag on production
using the feature flag API. Feature flags on the legacy cell can continue
to be set by this mechanism.

The set of feature flags enabled on the legacy cell and on other cells is expected
to be different.

#### Rollout of feature flags to Cells

One of the main uses of feature flags is to de-risk the release of a new feature.
A feature flag is usually enabled for a small group of customers (including internal
customers) who are willing to test out the feature. Any bugs reported are fixed,
and then the feature flag is enabled for a larger group of customers. This process
repeats until the feature flag is enabled for all customers, the feature is considered
stable and the feature flag can be removed.

While feature flags are useful for rapidly changing behavior of the application,
having too many different combinations of feature flags can cause interactions that
produce unforeseen behavior. It can also make
it difficult to predict how a new change will behave and can make
incident management more challenging.

We need to allow feature flags to be enabled for small groups of customers, and
at the same time maintain the number of different feature flag configurations
in production at a manageable level. We can leverage the ring architecture (introduced in
[Application Deployment with a Cellular Architecture](deployments.md)) to do
this.

Each ring represents a different groups of customers. As we move from inner to outer
rings, each consecutive ring is supposed to be less risky for the customer. Customers
who are accepting of higher risk, and desiring the latest product updates will be
on inner rings, while customers desiring stability will be on outer rings. Each ring
can be viewed as a "layer of risk". To reduce the number of different feature flag
configurations that need to be supported in production, while still allowing
feature flags to be rolled out to small groups of customers at a time, feature flags
can be rolled out to a ring at a time, starting with the innermost ring.

Rollout of feature flag changes to a ring should not be allowed if there is an
active incident affecting that ring or if metrics indicate that the ring is unhealthy.

#### Interface for controlling feature flags in Cells

ChatOps can be used to rollout feature flags to Cells in the short term.

ChatOps can communicate with Tissue to set feature flags on Cells. ringctl can
be used to create a patch for modifying feature flag gate values. Tissue's change
management system will then rollout the feature flag change to the rings.

#### Support for feature flag actors

Feature flags on Cells will support the same actors (project, group, user, current_request,
:instance) that are supported on production today.
If a feature flag needs to be set for a particular actor, it
should be set for that actor on every ring. This ensures that no matter which cell
the actor is present on, the feature flag will behave as expected.

In addition, the organization model will also be enabled for use as a feature flag
actor (https://gitlab.com/gitlab-org/gitlab/-/issues/498238).

### Short term

#### Iteration 1

ChatOps will provide an interface for engineers to change a feature flag on Cells.

ChatOps communicates with Tissue, and Tissue sets the feature flag on every cell.

Success or failure of the operation will be communicated via comments on the rollout
issue as well as issues in the feature flag log project.

If a feature flag needs to be turned off due to an incident, it will have to be
turned off for all cells.

As a feature flag change is rolled out, create issues on the
[feature flag log project](https://gitlab.com/gitlab-com/gl-infra/feature-flag-log).
Also add a comment to the feature flag rollout issue.

When the current state of a feature flag is queried, Tissue will query each cell.

Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1423

#### Iteration 2

ChatOps commands will provide an interface for targeting individual cells. Targeting
a cell will only be allowed if the cell is in the quarantine ring. In all other
cases, the feature flag change should be propagated to all cells.

The current state of feature flags in each cell should be cached. When queried
for the current state of a feature flag, the cache can be used instead of
reaching out to every cell.

The cache can be refreshed when feature flag changes are rolled out. It should also
be refreshed periodically, to keep the cache updated in case manual changes are made
to feature flags in a cell.

Epic: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1448

### Long term

Rollout of feature flag changes should be automated as much as possible. Metrics
and logs should be defined for each feature flag, to allow Tissue to automate the rollout.
The initiator indicates upto which ring the change should be rolled out. Rollout
will start with ring 0. It will skip ring 1 (legacy cell), and continue with ring 2.

A feature flag service can be considered as we start to add more functionality
for feature flags. The cost of building and running a service will have to be
weighed against the benefits and risk of overloading Tissue with feature flag
functionality.

The rollout methods described here are for the "derisking" type of feature flags.
We can provide different rollout capabilities for other types of feature flags,
such as experiment feature flags, feature flags for A/B testing, etc. For
example, feature flags for A/B testing could be allowed only on certain rings.
But this restriction would not apply to the derisking type of FFs.

#### Gradual Rollout

Gradual rollout will require engineers to define metric and log queries, and
thresholds that can be used to determine if the feature being gated is behaving
in a healthy manner.

- The initiator indicates upto which ring the rollout should occur.
- After rollout to a ring is complete, rollout will pause. After a period of time,
  if the metrics (FF metrics as well as general metrics) or logs indicate that
  the ring that the FF was rolled out to continues to be healthy, rollout will
  continue to the next ring.
- If setting the flag fails on a cell in a ring, rollout will stop at that ring, and
  the engineer who initiated the rollout will be notified.
- If the metrics or logs indicate that a ring that the FF has been rolled out to is unhealthy,
  rollout will be stopped.
- A feature flag can also be rolled back if metrics or logs indicate it is unhealthy.
  A separate threshold can be defined for rolling back.

#### Immediate rollout

Immediate rollout should only be used by SREs for mitigating incidents.

- The initiator indicates upto which ring the rollout should occur.
- There will be no pause between rings. Rollout will continue regardless of what metrics indicate.
- If the feature flag fails to be set on any cell, the initiator will be notified.

## Design and implementation details

### Setting feature flags in each cell

Feature flags can be set on a GitLab instance through the [feature flag API](https://docs.gitlab.com/ee/api/features.html),
or through the Rails console.

| API                                                                                            | Instrumentor                                                                                          |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Tissue can trigger API calls to each cell itself.                                              | Tissue can trigger an Instrumentor pipeline to set feature flags.                                     |
| Tissue will need access to admin tokens for every cell.                                        | Instrumentor has access to the toolbox pod for each cell, and the feature flag can be set using that. |
| An admin token can be added to Vault on cell creation, as part of the bootstrapping procedure. | It will involve booting a rails console, which will slow down the process.                            |

### Storing feature flag configuration

Feature flag configuration currently lives in the database of each GitLab instance.
We should treat feature flag configuration as infrastructure-as-code, so that changes
can be easily tracked and managed. With Cells, we will need feature flag configuration
to live in a file somewhere.

- Feature flag configuration can be stored in tenant models, or in a separate file
  per ring or per cell.
- Changes to the tenant model are usually applied by instrumentor.
- Keeping this information outside the tenant model could result in information
  about the cell being stored in two locations. However, we could link the other
  file to the tenant model.
- One of the factors in consideration should be what happens when a cell is moved?
  Information in the tenant model will move along with the cell, but if feature
  flag configuration is stored outside the cell, it will also need to be moved.

### Caching current feature flag state

One of the most common operations performed with feature flags is to query the
gate values of a feature flag. Querying every cell to get this information
every time an engineer requests the current state of a feature flag will be slow
and resource intensive.

Tissue can cache persisted feature flags and their gate values per cell.
At regular intervals, Tissue can pull all feature flags and their gate values from each
cell. This can also be done after a deployment to a ring.

## Alternative Solutions

### Third party feature flag service

A feature flag service will need to be able to mimic our ring
architecture, ideally without needing the application to be aware of its
cell ID.

We will need to self-host a third party service, or if using a SaaS service,
it will need strong guarantees on availability since we will be using the
service for incident mitigation.

Switching to a third party service is potentially a large undertaking and not something
that can be achieved in the short or medium term. Adding in another unknown in the
form of a third party service for feature flags during the Cells migration that already contains a
lot of unknowns doesn't seem to be the best path forward. We could revisit this
conversation at a later stage.

We can also consider using GitLab's own Feature Flag product, which is based on Unleash.
However, this will require extensive development to make the feature set useful
for us. This might make the product too specific to Cells and gitlab.com.

### Pull model instead of push model

We can have cells poll the feature flag service (Tissue) at regular intervals to pull any
feature flag changes. This might require the application to know its cell ID, which can be
included in the request so that the feature flag service can identify the requester
and respond appropriately.

This can be more resource intensive for the feature flag service. Depending on the frequency
of polling it can also add time and unpredictability to the propagation of feature flag
changes to cells. Increasing the frequency also increases the resource usage for
the FF service.

### Replicated feature flag database tables

This alternative solution is based on two assumptions regarding the Cells architecture:

- [We'll use a replication mechanism at the database-level for all Cells to have access to the same data](https://gitlab.com/gitlab-org/gitlab/-/issues/477608) (e.g. all Cells should have the same `plans` and `plan_limits` data etc.)
- All feature flag actors (user, project, group, organization) will be unique across the cluster, it's not a problem for all Cells to share feature flags data

Overview of the solution:

1. Mark `feature_gates` and `features` tables as `gitlab_main_clusterwide` instead of `gitlab_main_cell`, so that all cells have all the feature flags data at all time.
1. Introduce a new `Gitlab::Cell` actor.
1. In `Feature.enabled?`, check if the feature flag is enabled for the current cell as a fallback (that will allow the enablement of a feature flag for a whole cell).
1. In ChatOps, introduce a new `--cell <cell-id>` or `--cell <cell-name>` option.

**Pros:**

- For the ChatOps `--production flag`, feature flags continue to be set on the "legacy cell" and the feature flags data is replicated to all cells at the database-level (no need for chatops to have "the ability to talk to some service to gather requisite information").
- No specific setup when a new cell is introduced in the cluster since the feature flags data is replicated to all cells at the database-level.

**Cons:**

- Supporting "percentage of time/actors" per cell would require a bit more changes, but wouldn't be impossible.
- No support for enabling feature flags per deployment ring, but this could be supported in ChatOps with `--ring <ring-id>` and a mapping of `ring => [list of cells]`, so that the `--ring <ring-id>` option would be transformed in several `--cell <cell-id>` calls.
