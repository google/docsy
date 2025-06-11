---
title: "CI Primary Key Conversions - Weekly Project Plan"
description: "Weekly Project Plan for converting the primary keys to bigint - Pipeline Execution Group."
---

## CI Data Partitioning - Weekly Project Plan

### Milestones Goals

- 16.9: backfill of ci_builds fk completed
- 17.0: primary key conversion to bigint for ci_pipelines completed

<details markdown="1">
    <summary markdown="span">Archive</summary>

### Week of August 7, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [x] Verify foreign key backfill progress for `ci_pipelines.auto_canceled_by_id`
- [x] Merge MR to init conversion for `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id`
- [~] Sync create index for `ci_pipeline_messages.pipeline_id` (moved to 16.4 and it's under ~"workflow::in review")

### Week of August 14, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [x] Verify foreign key backfill progress for `ci_pipelines.auto_canceled_by_id`, `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id`
- [~] Create foreign key constraint for `ci_pipeline_messages.pipeline_id` and swap the columns (moved to 16.4)

### Week of August 21, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [x] Verify foreign key backfill progress for `ci_pipelines.auto_canceled_by_id`, `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id`
- [~] Async create index for `ci_pipeline_chat_data.pipeline_id` and `ci_stages.pipeline_id` (under ~"workflow::in review")

### Week of  August 28, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [x] Verify foreign key backfill progress for `ci_pipelines.auto_canceled_by_id`
- [x] Async create index for `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id` (max 2 index creation per week)

### Week of September 4, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [~] Async create index for `ci_pipelines.auto_canceled_by_id` (MR deployed, need to verify)
- [x] Sync create index for `ci_pipeline_chat_data.pipeline_id`
- [x] Foreign key for `ci_pipeline_chat_data.pipeline_id`
- [x] Sync create index for `ci_pipeline_messages.pipeline_id`
- [x] Create foreign key constraint for `ci_pipeline_messages.pipeline_id` and swap the columns
- [x] Async create index for `ci_pipeline_chat_data.pipeline_id` and `ci_stages.pipeline_id`
- [~] Sync create index for `ci_stages.pipeline_id` (need to wait for the async index creation)
- [~] Create foreign key constraint for `ci_stages.pipeline_id`
- When postgres has upgraded to 14, init conversion for: (PG for main is still at 12.9, need to wait for the upgrade)
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

### Week of September 11, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [~] Sync create index and foreign key constraint, and swap for `ci_pipelines.auto_canceled_by_id` (index)
- [~] Sync create index and foreign key constraint, and swap for `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id`
- [x] Async create index for `ci_pipelines.auto_canceled_by_id` (MR deployed, need to verify)
- [x] Sync create index for `ci_stages.pipeline_id` (need to wait for the async index creation)
- When postgres has upgraded to 14 (this happened on Sep 12), init conversion for:
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

## Milestone 16.5 (September 18, 2023 - October 16, 2023)

### Week of September 18, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

---

### Week of September 25, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- [ ] Run analyze on partitioned tables
- [ ] Helper and documentation for swapping columns

### Week of October 2, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

### Week of October 9, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

### Week of October 16, 2023

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- For `ci_pipelines.auto_canceled_by_id`
  - [x] Sync create index (done in week 9.18)
  - [x] Async create foreign key constraint (done in week 9.25)
  - [x] Sync validate foreign key constraint
  - [~] Swap columns
- For `ci_sources_pipelines.pipeline_id` and `ci_sources_pipelines.source_pipeline_id`
  - [x] Sync create index (done in week 9.25)
  - [x] Async create foreign key constraint (done in week 9.25)
  - [x] Sync validate foreign key constraint
  - [x] Swap columns
- For `ci_pipeline_chat_data.pipeline_id`
  - [x] Swap columns
- For `ci_pipeline_variables.pipeline_id`
  - [~] Swap columns
- For `ci_stages.pipeline_id`
  - [x] Async create foreign key constraint (done in week 9.25)
  - [x] Sync validate foreign key constraint
  - [~] Swap columns
- For `ci_pipeline_messages.pipeline_id`
  - [x] Sync validate foreign key constraint (done in week 9.18)
  - [x] Swap columns
- Init conversion for:
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

### Milestone 16.6 (October 17, 2023 - November 10, 2023)

#### Team Capacity

- 1 BE

#### Goals

##### Bigint conversion

- For `ci_pipelines.auto_canceled_by_id`
  - [x] Swap columns
- For `ci_pipeline_variables.pipeline_id`
  - [x] Swap columns
- For `ci_stages.pipeline_id`
  - [x] Swap columns
- Init conversion for:
  - [x] p_ci_builds.auto_canceled_by_id
  - [x] p_ci_builds.upstream_pipeline_id
  - [x] p_ci_builds.commit_id
- **Stretch:** Remove the triggers and integer columns for:
  - [x] ci_sources_pipelines.pipeline_id
  - [x] ci_sources_pipelines.source_pipeline_id
  - [x] ci_pipeline_chat_data.pipeline_id
  - [x] ci_pipeline_messages.pipeline_id
  - [~] ci_stages.pipeline_id
  - [x] ci_pipeline_variables.pipeline_id
  - [~] ci_pipelines.auto_canceled_by_id

### Milestone 16.7 (November 13, 2023 - December 8, 2023)

#### Team Capacity

- 1 BE

#### Goals

We'll monitor progress of the foreign key backfill on ci_builds this milestone.
We will continue to create the necessary MRs for updating the indexes

##### Bigint conversion

- Remove the triggers and integer columns for:
  - [ ] ci_stages.pipeline_id
  - [ ] ci_pipelines.auto_canceled_by_id
- Remove the ignore rules for:
  - [x] ci_pipeline_chat_data.pipeline_id
  - [ ] ci_pipeline_messages.pipeline_id
  - [x] ci_sources_pipelines.pipeline_id
  - [x] ci_sources_pipelines.source_pipeline_id

</details>

### Milestone 16.8 (December 11, 2023 - January 12, 2024)

#### Team Capacity

- 1 BE

#### Goals

We are continuing to monitor the progress of the foreign key backfill on ci_builds this milestone.
Improvements to backfill progress were made for a significant impact following the partitioning of ci_builds last milestone.
It now looks like the backfill should complete within 6 weeks rather than 6 months. As such we are pulling the planned work up.
After discussion with the database team, it seems like we are good to go ahead and swap the primary key column on ci_pipelines
before the backfill on ci_builds completes. As such we intend to complete that in 16.8. This will allow us to move forward with
partitioning of ci_pipelines while the backfile contines.

##### Bigint conversion

- Remove the ignore rules for:
  - [ ] ci_stages.pipeline_id
  - [ ] ci_pipelines.auto_canceled_by_id
  - [ ] ci_pipeline_variables.pipeline_id
- [ ] Swap columns for ci_pipelines.id

### Milestone 16.9 (January 15, 2024 - February 9, 2024)

#### Team Capacity

- 1 BE

#### Goals

Backfill of bigint Pipeline FKs is projected to finish near the end of January 2024.
As such we should be able to create the indexes and foreign key constraints for p_ci_builds.

##### Bigint conversion

- Create indexes and/or foreign key constraint and swap columns for:
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id

### Milestone 16.10 (February 12, 2024 - March 8, 2024)

#### Team Capacity

- 1 BE

#### Goals

Backfill of bigint Pipeline FKs is projected to finish near the end of January 2024.
We should be able to remove the triggers and the integer column on ci_pipelines once the backfill is complete and the foreign key has been updated on p_ci_builds.

##### Bigint conversion

- [ ] Remove the ignore rules for ci_pipelines.id
- [ ] Remove the triggers and integer columns for ci_pipelines.id

### Milestone 16.11 (March 11, 2024 - April 12, 2024)

#### Team Capacity

- 1 BE

#### Goals

We will plan to have the MRs for next milestone ready to go in this milestone as well given Tian's limited availability in 17.0.

##### Bigint conversion

- Remove the triggers and integer columns for:
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id

### Milestone 17.0 (April 15, 2024 - May 10, 2024)

#### Team Capacity

- 0 BE (Note: Tian will be frontline responder this milestone)

#### Goals

Merging of the final MRs to remove the ignore rules. This should wrap up the conversion of the ci_pipelines PK.
There are other tables requiring PK conversion, but they are smaller and less connected. Their completion will
be planned into other team work.

##### Bigint conversion

- Remove the ignore rules for:
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id
