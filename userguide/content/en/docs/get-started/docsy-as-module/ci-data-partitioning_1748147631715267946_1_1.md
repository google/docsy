---
title: "CI Data Partitioning - Weekly Project Plan"
description: "The CI Data Partitioning Weekly Project Plan - Pipeline Execution Group."
---

## CI Data Partitioning - Weekly Project Plan

### Milestones Goals

- 16.6: ci_builds and ci_builds_metadata tables partitioned
- 16.7: ci_builds and ci_builds_metadata second partitions in use
- 16.9: ci_pipeline_variables table partitioned
- 17.0: ci_job_artifacts, ci_stages tables partitioned
- 17.2: ci_pipelines table partitioned
- 17.3: ci_pipelines, ci_job_artifacts, ci_stages, and ci_pipeline_variables second partitions in use
- 17.6: (very rough estimate) start rebalancing for partitioned tables
- 17.9: (very rough estimate) complete rebalancing for partitioned tables
-

[Related Epic](https://gitlab.com/groups/gitlab-org/-/epics/5417)

<details markdown="1">
    <summary markdown="span">Archive</summary>

### Week of August 14, 2023

#### Team Capacity

- 1 BE

#### Goals

##### ci_builds

- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/122919) to use routing table
- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125002) fo ensure id uniqueness across partitions
- [x] Confirm execution of [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125002) on .com or retry in case of failure(autovacuum conflict is still an option)

### Week of August 21, 2023

#### Team Capacity

- 1 BE

#### Goals

##### ci_builds

- [~] Fix caching issue blocking enabling use of routing table
- [~] Reintroduce migration for self-managed for ensuring uniqueness of ids across partitions

### Week of  August 28, 2023

#### Team Capacity

- 0 BE (Note: Marius focused on customer escalation)

#### Goals

### Week of September 4, 2023

#### Team Capacity

- 0 BE (Note: Marius focused on customer escalation)

#### Goals

##### ci_builds

- [~] [Analyze partitioned parent tables on a schedule](https://gitlab.com/gitlab-org/gitlab/-/issues/423135)
- [~] [Manually analyze `p_ci_builds` and `p_ci_builds_metadata`](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129812#note_1527675793)
- [~] Deploy the [table name switch to canary](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129812) and confirm there are no more timeouts

### Week of September 11, 2023

#### Team Capacity

- 1 BE

#### Goals

##### ci_builds

- [~] Fix caching issue blocking enabling use of routing table
- [~] Enable query analyzers: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/398134)

## Milestone 16.5 (September 18, 2023 - October 16, 2023)

### Week of September 18, 2023

#### Team Capacity

- 1 BE

#### Goals

##### ci_builds

- [x] [Manually analyze `p_ci_builds` and `p_ci_builds_metadata`](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129812#note_1527675793)
- [x] Deploy the [table name switch to canary](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129812) and confirm there are no more timeouts

### Week of September 25, 2023

#### Team Capacity

- 1 BE

#### Goals

##### ci_builds

- [~] [Analyze partitioned parent tables on a schedule](https://gitlab.com/gitlab-org/gitlab/-/issues/423135)
- [~] Enable query analyzers: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/398134)

### Week of October 2, 2023

#### Team Capacity

- 1 BE

#### Goals

This week we aim to complete the tooling adaptations to allow query analyzers for partitioned parent tables to run on a
schedule. This will allow us to ensure the autovacuum process runs on partitioned tables.

##### ci_builds

- [~] [Analyze partitioned parent tables on a schedule](https://gitlab.com/gitlab-org/gitlab/-/issues/423135)

### Week of October 9, 2023

#### Team Capacity

- 1 BE

#### Goals

This week we aim to switch ci_builds to use the routing table rather than directly using the partition. We will also
enable the query analyzers for the ci_builds and ci_builds_metadata table to ensure their performance is not being
significantly negatively impacted. We will continue to work on MRs to update filters in queries to use the partition_id.

#### Status Update

We are still coordinating with infrastructure to switch the table name. Hopefully next week this can be completed.

#### Task List

##### ci_builds

- [~] Switch the table name on the entire fleet
- [~] Enable query analyzers for ci_builds: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/398134) (blocked by table name change)
- [x] Enable query analyzers for ci_builds_metadata.
- [x] Start adding partition_id filters to necessary related queries

### Week of October 16, 2023

#### Team Capacity

- 1 BE

#### Goals

This week we will work on the items that were pushed forward from last week.
We aim to switch ci_builds to use the routing table rather than directly using the partition. We will also
enable the query analyzers for the ci_builds and ci_builds_metadata table to ensure their performance is not being
significantly negatively impacted. We will continue to work on MRs to update filters in queries to use the partition_id.

#### Task List

##### ci_builds

- [x] Switch the table name on the entire fleet
- [x] [Analyze partitioned parent tables on a schedule](https://gitlab.com/gitlab-org/gitlab/-/issues/423135)
- [~] Enable query analyzers for ci_builds: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/398134) (blocked by table name change)

#### Status Update

The table name got switched on production, so we are able to move forward with the remainder of the partitioning tasks for ci_builds now.

### Milestone 16.6 (October 17, 2023 - November 10, 2023)

#### Team Capacity

- 1 BE

#### Milestone Goals

This milestone we plan to finish updating the queries to filter on partition_id for ci_builds and ci_builds_metadata.
We will add the migration for self-managed that ensures the uniqueness of ids across partitions.
Then we plan to start writing to the second partitions of ci_builds and ci_builds_metadata.
We will also split the existing original partition into multiple smaller partitions.
This will get us to the state where we should start to see some performance improvements. There may be some
performance decreases as we continue to read from all partitions.
We will enable the use of the partitions in self-managed for ci_builds.

### Week of October 23, 2023

#### Team Capacity

- 1 BE

#### Goals

Now that we have the table name switched over in production we are moving forward with enabling the query analyzers.
We will continue working on query updates.

#### Task List

##### ci_builds

- [x] Enable query analyzers for ci_builds: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/398134)

### Week of October 30, 2023

#### Team Capacity

- 1 BE

#### Goals

We plan to start updating the queries to include the partition_id in filtering for ci_builds and ci_builds_metadata.

#### Task List

##### ci_builds

- [x] start adding partition_id filters to related queries [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/423054)
- [~] Switch writes to second partition: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/387810)
- [~] Reintroduce migration for self-managed for ensuring uniqueness of ids across partitions

##### ci_builds_metadata

- [~] Switch writes to second partition: [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/387810)

### Week of November 06, 2023

#### Team Capacity

- 1 BE

#### Goals

 This week we aim to have the partitioning enabled for self-manage.
 We also plan to have the required queries updated so that we can fully take advantage of partitioning for ci_builds and ci_builds_metadata.

#### Task List

##### ci_builds

- [ ] Complete adding partition_id filters to related queries
- [ ] Enable for self-managed

##### ci_builds_metadata

- [ ] Complete adding partition_id filters to related queries

</details>

### Milestone 16.7 (November 13, 2023 - December 15, 2023)

#### Team Capacity

- 4 BE

#### Goals

This milestone we will finish updating queries and start writing to the second partition of ci_builds and ci_builds_metadata.
With the expanded team, we will also start the partitioning effort for ci_job_artifacts, ci_stages, and ci_pipeline_variables.
We plan to start writing to the second partition of ci_builds and ci_builds_metadata.
We will reintroduce the migration to ensure uniqueness of ids across partitions of ci_builds and ci_builds_metadata for self-managed.

#### Update

We completed the critical query updates needed in order to start writing to the second partition of ci_builds and ci_builds_metadata.
We actually started writing to the second partition of ci_builds and ci_builds_metadata!
We have made significant progress on the partitioning for ci_pipeline_variables.
We have also started work on ci_job_artifacts and ci_stages.

### Milestone 16.8 (December 18, 2023 - January 12, 2024)

#### Team Capacity

- 4.5 BE

#### Goals

We plan to continue making incremental progress towards the partitioning of all 3 of ci_pipeline_variables, ci_job_artifacts, and ci_stages tables.
This is a light milestone due to year end PTO.

### Week of December 18, 2023

#### Team Capacity

- 4 BE

#### Update

We may be able to start work on ci_pipelines as soon as this milestone. We need to swap the primary key on the table before we can start the
partitioning effort. Originally we planned to wait until a backfill of foreign keys on ci_builds was complete to do the PK swap. After consulting
with the database team we plan to move ahead with the swap prior to completion.

### Week of December 25, 2023

#### Team Capacity

- 0 BE

#### Goals

Resting - Team members are on much deserved PTO.

### Week of January 1, 2024

#### Team Capacity

- 0 BE

#### Goals

Resting - Team members are on much deserved PTO.

### Week of January 8, 2024

#### Team Capacity

- 4 BE

#### Update

Given the backfill was so close to completing, we decided to wait for it to complete before moving forward with partitioning.

### Milestone 16.9 (January 15, 2024 - February 9, 2024)

#### Team Capacity

- 5 BE

#### Goals

This milestone we will complete the partitioning of ci_pipeline_variables. We will start the partitioning of ci_pipelines.
We will continue incremental work to partition ci_job_artifacts, and ci_stages tables.
We will continue identifying and updating necessary sql queries to include partition_id.
We will flesh out work necessary for the time-decay mechanism and partition manager to dynamically create partitions.

### Week of January 15, 2024

#### Team Capacity

- 4 BE

#### Update

We realized there are more indexes that need to be rebuilt for ci_pipelines on ci_builds before we are able to swap the primary keys.
As a result, we do not think we will be able to pull in the timeline for ci_pipelines partitioning any more than currently planned.
We also ran into a potential roadblock for re-distributing the existing large partitions into smaller ones. We may need to wait until the PG15 upgrade is complete.
Other planned work is continuing. Some team capacity is helping with regular Pipeline Execution tasks this milestone.

### Week of January 22, 2024

#### Team Capacity

- 4 BE

#### Update

### Week of January 29, 2024

#### Team Capacity

- 5 BE

#### Update

#### Task List

### Week of February 5, 2024

#### Team Capacity

- 5 BE

#### Update

### Milestone 16.10 (February 12, 2024 - March 8, 2024)

#### Team Capacity

- 6 BE

#### Goals

This milestone we will start work on the time decay mechanism and partition manager.
Incremental work will continue towards partitioning of ci_job_artifacts, ci_stages, and ci_pipelines.
We will continue identifying and updating necessary sql queries to include partition_id.

### Milestone 16.11 (March 11, 2024 - April 12, 2024)

#### Team Capacity

- 6 BE

#### Goals

Incremental work will continue towards partitioning of ci_job_artifacts, ci_stages, and ci_pipelines.
Work will continue on the tiem decay mechanism and partition manager.
We will continue identifying and updating necessary sql queries to include partition_id.

### Milestone 17.0 (April 15, 2024 - May 10, 2024)

#### Team Capacity

- 6 BE

#### Goals

This milestone we will complete the partitioning of ci_job_artifacts and ci_stages.
We will continue identifying and updating necessary sql queries to include partition_id.

### Milestone 17.1 (May 13, 2024 - June 14, 2024)

#### Team Capacity

- 6 BE

#### Goals

Incremental work will continue towards partitioning of ci_pipelines.
We will make efforts to clean up any remaining tech debt that we have created - we've been tracking it as we go.

### Milestone 17.2 (June 17, 2024 - July 12, 2024)

#### Team Capacity

- 3 BE

#### Goals

This milestone we will complete the partitioning of ci_pipelines.
We will continue identifying and updating necessary sql queries to include partition_id.
We will make efforts to clean up any remaining tech debt that we have created - we've been tracking it as we go.

### Milestone 17.3 (July 15, 2024 - Aug 9, 2024)

#### Team Capacity

- 3 BE

#### Goals

We will start using the second partition of ci_pipelines, ci_pipeline_variables, ci_job_artifacts, and ci_stages.
We will start rebalancing the existing partitions now that the 6 target tables have been partitioned.
At this point it is unclear how long the rebalancing will take, but as we get closer we will update the
plan with more information.
We will make efforts to clean up any remaining tech debt that we have created - we've been tracking it as we go.

### Milestone 17.4 (Aug 12, 2024 - Sep 13, 2024)

#### Team Capacity

- 1 BE

#### Goals

### Milestone 17.5 (Sep 16, 2024 - Oct 11, 2024)

#### Team Capacity

- 1 BE

#### Goals

### Milestone 17.6 (Oct 14, 2024 - Nov 15, 2024)

#### Team Capacity

- 1 BE

#### Goals

### Milestone 17.6 (Nov 18, 2024 - Dec 13, 2024)

#### Team Capacity

- 1 BE

#### Goals

We can start rebalancing old partitions using functionality in PG15 - [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/438394).
[GitLab Postgres Upgrade Cadence](/handbook/engineering/infrastructure-platforms/data-access/database-framework/postgresql-upgrade-cadence/)
