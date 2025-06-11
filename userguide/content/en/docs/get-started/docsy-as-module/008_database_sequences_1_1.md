---
stage: core platform
group: Database
title: "Cells ADR 008: Cluster wide unique database sequences"
toc_hide: true
---

## Context

Having non-overlapping unique sequences across the cluster is necessary for moving organizations between cells,
this was highlighted in [core-platform-section/-/epics/3](https://gitlab.com/groups/gitlab-org/core-platform-section/-/epics/3)
and different solutions were discussed in <https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102>.

## Decision

All cells will have bigint IDs on creation. While provisioning, each of them will get a
range of sequences to use from the [Topology Service](../topology_service.md).

Topology service uses the logic explained in [here](../topology_service.md#logic-to-compute-the-range) to compute the sequence range, which is used to set
`minval`, `maxval` for all existing and newly created sequence IDs.

- Once the database(s) are loaded, `gitlab:db:alter_cell_sequences_range` is called to alter sequences range.
- The above rake internally registers a EVENT TRIGGER [alter_new_sequences_range](https://gitlab.com/gitlab-org/gitlab/blob/e51a48ba87ecbc70d2c65976e320773f78445045/lib/gitlab/database/alter_cell_sequences_range.rb#L36) to set the correct sequence range for new IDs.

## Alternatives

Below are the different solutions considered for this problem.

- [Solution 1: Global Service to claim sequences](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853252715)
- [Solution 2: Converting all int IDs to bigint to generate uniq IDs](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853260434)
- [Solution 3: Using composite primary key [(existing PKs), original cell ID]](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853265147)
- [Solution 4: Use bigint IDs only for Cell](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1853328985)
- [Solution 5: Using Logical replication](https://gitlab.com/gitlab-org/core-platform-section/data-stores/-/issues/102#note_1857486154)
