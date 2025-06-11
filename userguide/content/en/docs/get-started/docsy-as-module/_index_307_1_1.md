---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: Reftable rollout in Gitaly
status: ongoing
creation-date: "2024-09-19"
authors: [ "@knayakgl" ]
owning-stage: "~devops::systems"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

<!-- Design Doucments often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## Summary

Git repositories in Gitaly use the 'files' backend for storing references. This blueprint covers the migration of all existing and new repositories to the new reftable backend. The reftable backend stores references in a binary format, which overcomes some shortcomings of the 'files' backend. More details about the reftable backend can be found in [our blog post](https://about.gitlab.com/blog/2024/05/30/a-beginners-guide-to-the-git-reftable-format/) on the topic.

The reftable backend is generally more performant (with the exception of successive writes when each write uses a separate transaction), supports transactions and atomic writes, and has more efficient storage. While the end result is highly beneficial, we need to ensure a safe migration path to avoid corrupting any data.

This blueprint specifically targets the rollout for GitLab SaaS. Once transactions in Gitaly is fully rolled out, we can follow suit.

Since we won't be exposing the reference backend to clients, there is no involvement expected from admins.

Note: Converting repositories from the 'files' backend to the 'reftable' backend does not affect clients in any way. Clients can continue using the 'files' backend on their systems. The only changes are server-side, and clients should not notice any difference.

## Issue Tracking

The rollout will be tracked in its [own epic](https://gitlab.com/groups/gitlab-org/-/epics/14946). Which is further split into [staging](https://gitlab.com/groups/gitlab-org/-/epics/12503) and [production](https://gitlab.com/groups/gitlab-org/-/epics/14942) rollouts to facilitate easier tracking and linking to individual OKRs.

This is part of a bigger epic to [enable reftables in GitLab](https://gitlab.com/groups/gitlab-org/-/epics/4220), which also contains some non-blocking improvements.

## Motivation

Traditionally, Git shipped with only a single reference backend called the 'files' backend. The 'files' backend stores references in loose files, where the reference name is the path of the file and its content is the reference value. During housekeeping, several of the loose references are combined into a single 'packed-refs' file.

The 'files' backend has several shortcomings:

- Lookups require checking for loose reference files in addition to reading the references from the packed-refs file. A repository usually contains a mix of both.
- Reference transactions are not committed atomically.
- Since it is stored in a human-readable text format, storage is not efficiently utilized.
- Deleting references from 'packed-refs' requires rewriting the entire file. For repositories with many references, this can be a significantly slow operation.
- Compaction of loose refs into packed-refs is an expensive operation.

[Since Git v2.45.0](https://about.gitlab.com/blog/2024/04/30/whats-new-in-git-2-45-0/#reftables-a-new-backend-for-storing-references), we now have a new reference backend called 'reftable'. The reftable backend addresses all the shortcomings of the 'files' backend, namely:

- It uses a binary format with prefix skips to ensure that we optimize for storage.
- Faster access times with fewer files to read.
- Supports atomic changes using a global reference store lock.
- Deleting references is a O(1) operation.
- Performs compaction on the go.

One of the pain points for repositories hosted in Gitaly has always been the growing number of references in large repositories and the accompanying scalability issues.

For e.g. we can see the how deleting refs in Gitaly is a very slow operation since it require re-packing compared to writing refs, which only requires creation of a new loose ref file.

__DeleteRefs Latency ([Ref](https://dashboards.gitlab.net/d/gitaly-feature-status/gitaly3a-gitaly-feature-status?from=1726030947986&to=1726052547986&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main&orgId=1&var-method=DeleteRefs&viewPanel=8))__

![DeleteRefs Latency](/images/handbook/engineering/architecture/design-documents/gitaly_reftable_rollout/gitaly_reftable_rollout_deleterefs.png)

<br/>

__WriteRef Latency ([Ref](https://dashboards.gitlab.net/d/gitaly-feature-status/gitaly3a-gitaly-feature-status?from=1726030800000&to=1726052459999&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-stage=main&orgId=1&var-method=WriteRef&viewPanel=8))__

![WriteRef Latency](/images/handbook/engineering/architecture/design-documents/gitaly_reftable_rollout/gitaly_reftable_rollout_writerefs.png)

<br/>

You can see how deleting refs has such a high average latency, ~20x of WriteRefs. This difference is much higher for larger repositories with bigger pack-files. To solve for such problems and the ones stated above, it makes sense to migrate existing repositories from the 'files' backend to the newer reftable backend. This migration would include making the reftable backend the default for new repositories and eventually deprecating the 'files' backend in Gitaly.

### Goals

- Existing repositories will be migrated to the reftable backend from the files backend.
- New repositories will use the reftable backend by default.
- If unexpected issues arise during or after migration, the recovery strategy will be to address and resolve them.
- Metrics will track changes in performance and storage related to reading and writing references before and after migration.
- A plan will be developed for self-hosted customers to migrate to using reftable. The rest of the document unless specified applies to GitLab SaaS.

### Non Goals

- Reftables will only be supported with transactions in Gitaly. This means Praefect without transactions will not be supported. This is due to reftables obtaining a global lock over the ref database. This can cause a deadlock when used with Praefect, if two or more concurrent requests try to do updates at the same time. However, with transactions this is no longer an issue since each write operation will operate on a snapshot.

## Proposal

The rollout can be broken down into a number of steps:

1. We dry-run the migration using the Gitaly's transaction manager (dry-run's don't affect the regular flow and will run in the background). This provides some information on:
  a. Latency of the migration
  b. Any errors that we didn't consider
2. Evaluate the metrics and perform any fixes as needed.
3. For each in _staging, production-canary, production_
  a. Select a few repositories for dogfooding (possibly gitlab-org/gitaly or gitlab-org/git), backup said repositories using the `gitaly-backup` subcommand.
  b. Run the migration on the selected repository. On staging, run some stress tests to write refs.
    1. Compare efficacy of the migrated repositories.
    2. Check correctness of migrated repositories.
  c. Slowly toggle the flag to enable reftables for new repositories
  d. Migrate remaining repositories to reftables

While this lays out the overall plan, in the following sections, we will dive more into the details of each of the steps mentioned here.

## Design and implementation details

We need to split the rollout into two streams:

1. New repositories
2. Existing repositories

If we implement the rollout only for existing repositories, we'll always be catching up to new repositories. Conversely, if we only implement the rollout for new repositories, we'll never migrate the existing ones.

Therefore, it's essential to plan for both. The easiest to target among the two would be the new repositories. New repositories generally tend to be smaller and this allows us to test out the reftable library in a smaller scale. This also ensures we draw a line where only the existing repositories would need to be migrated. The exception to this would be when repositories are imported from URLs. This value is much smaller (around 2% of all new repositories) and since we rollout incrementally and the repository itself is being created from scratch and doesn't involve an in-place migration, we shouldn't face any issues.

Another option would be to migrate a few existing repositories using feature-flags. Validating the correctness and efficacy of the migration and the reftable library . Then enabling reftables for new repositories and then migrating the remaining repositories. This approach gives us a safety latch to migrate new repositories back to the files backend. This is because we'd have already tested the migration tooling. But then again, we wouldn't really test migration from reftables to files backend, since for existing repositories the best way to revert would be to restore from a backup.

In conclusion, we will first dogfood by migrating few GitLab repositories. Then we will slowly enable reftables for all new repositories. Finally, we'll migrate the remaining existing repositories.

### New repositories

When creating new repositories in Git, we can specify the reference backend by using the `--ref-format` flag with either `git-init(1)` or `git-clone(1)`. In Gitaly, we do not currently use the `--ref-format` flag, so these commands default to using the `files` backend.

The first [step](https://gitlab.com/gitlab-org/gitaly/-/issues/6309) in enabling the 'reftable' backend for new repositories is to make this explicit. Then, [we use a feature flag](https://gitlab.com/gitlab-org/gitaly/-/issues/6312) to gradually switch the `--ref-format` to use the `reftable` backend.

### Existing repositories

Git provides the necessary tooling for migration via the migrate subcommand of git-refs(1). While this command provides the means for migrating to the reftable backend, it doesn't lock the entire repository during the migration, which can result in an inconsistent state if concurrent writes occur.

Gitaly is also transitioning to using transactions for its operations. The reftable migration can be performed in a transaction to ensure it either fully succeeds or the repository remains unchanged.

Gitaly is also gaining first-class support for migrations built on transactions, providing the necessary infrastructure to perform the rollout.

For existing repositories, write a migration function that integrates with migration tooling. This function will call `git refs migrate` on the repository to migrate it to the 'reftable' backend. Although the details of the migration tooling are still being developed, we will need support for the following:

- __Support for migration with a feature flag__: This is complex because the current plan is to apply all migrations during repository access, with a background job eventually targeting repositories that users haven't accessed yet. This approach decouples migrations running via the background job from the `request <> response` cycle. To workaround this, we need to ensure that the background job doesn't apply any migration and onward which are linked to a feature flag and that once the feature flag is removed, the background job continues the rollout for remaining repositories.

Eventually, we will reach a point where new repositories use the 'reftable' format by default, and all existing repositories are migrated to use the 'reftable' format. This will complete the rollout, allowing us to remove old code related to the 'files' backend, as Gitaly will then use only the 'reftable' backend going forward.

#### Checking for correctness

When we migrate existing repositories from the files backend to the reftable backend, we must ensure that the migration upholds the integrity of the repository. While the filesystem state will change, the logical state must remain the same. We can verify this by comparing the hash of running `git for-each-ref --include-root-refs` before and after the migration.

Since the migration is performed in transaction, we only commit the changes if the verification is successful. Any failure, would simply abort the transaction and keep the repository as is before migration.

### Evaluating the efficacy

The expectation of using the 'reftables' backend, is that it would eventually outperform the 'files' backend. This means we need to we capture sufficient metrics to showcase the differences. These metrics also should provide information for improvements to make to the 'reftable' backend.

Currently we [capture metrics](https://gitlab.com/gitlab-org/gitaly/-/blob/master/internal/command/command.go#L29) for all the Git commands which run in Gitaly. The simplest way would be to add a 'ref-backend' label to these metrics so we can then build higher level graphs from these commands.

Some of the details we would really like to check are:

- CRUD latency for single reference
- CRUD latency for multiple references in a single transaction
- Time taken for compaction
- Average latency for RPCs which deals with refs. Namely the RPCs in [ref service](https://gitlab.com/gitlab-org/gitaly/-/blob/master/proto/ref.proto).

We will track this information in this [epic](https://gitlab.com/groups/gitlab-org/-/epics/15072).

We also will have E2E running atop reftables possibly also with [GPT](/handbook/support/workflows/gpt_quick_start/), [tracked here](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/2432).

### Restore/Rollback

Since we take a multi-step approach of dry-running the migration before rolling out, the chance for errors is highly reduced. Nonetheless there are still unknown unknown's which could occur, which we potentially have to deal with.

There are two broad scenarios which we can categorize the issues into:

#### Unsuccessful migration

A migration is unsuccessful when there is an error during the migration process. This could occur due to number of issues. But since we use Gitaly's transaction manager, any unsuccessful migration is simply rolled back. Since the migration also includes validating before committing, the system rolls back any unsuccessful attempt. There is no intervention required apart from assessing why it was unsuccessful.

#### Successful migration

A successful migration is one where the repository is finally using reftables and the validation step of the migration was successful. The migration is then committed. In such scenarios ideally, there shouldn't be a need for rollback, however we should consider the following scenarios:

1. The repository's performance with reftables is not satisfactory. We can solve this by adding a new migration to migrate back to files backend.
2. The reftable backend contains bugs, but repository state is okay. Since the repository state is okay, we consider such bugs as Git bugs, and the Git team will address them. They will either patch the bug in the Git version used by Gitaly or apply the fix directly upstream.
3. The repository has become corrupted over time. If the reftable backend corrupts the repository over time, the only solution is to restore a disk backup. There is some discussions on how effective this would be [here](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/team/-/issues/16#note_2230262996) and the what the future for backups restoration in Gitaly would look like.

### Blockers

There are currently some blockers which need to be resolved, before we actually start the rollout:

- [Rollout Git 2.46](https://gitlab.com/gitlab-org/gitaly/-/issues/6300), since it contains the symref-update support. This is required to remove all code from the Gitaly codebase which directly accesses the `HEAD` ref via the filesystem.
- Rollout the [symref-update feature flag](https://gitlab.com/gitlab-org/gitaly/-/issues/6153). The featureflag will be used to make the switch mentioned above
- Git patches we need to backport if we rely on Git 2.46. Git 2.47 will be release on October 7th. It makes sense to target Git 2.47 and avoid the mess with backporting patches.
  - [Allow auto-compaction to take place even if some reftables are locked](https://gitlab.com/gitlab-org/git/-/issues/333). This allows us to compact tables within a single transaction. This ensures that if a transaction has thousands of ref writes, we don't end up with thousands of new reftables.
- Rollout transaction manager to production. We rely on the transaction manager to run the migration. We'd require it to be on production, before we can also migrate to reftables to production.
- [Migration tooling support in the transaction manager](https://gitlab.com/gitlab-org/gitaly/-/issues/5758). We require the tooling to migrate existing repositories to the 'reftable' backend.
