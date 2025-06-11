---
owning-stage: "~devops::data stores"
title: 'Database Size Limit ADR 003: Limit new indexes for tables larger than 50 GB'
toc_hide: true
---

## Context

Database indexes significantly impact table sizes while playing a crucial role in query performance. As tables grow:

- Indexes are often added to maintain performance
- Each index increases the total table size
- Indexes introduce additional [maintenance overhead](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html#maintenance-overhead), including:
  - Write amplification
  - Increased backup size
  - Higher vacuum overhead

## Decision

We prevent new indexes to tables larger than 50 GB through:

Exceptions to this rule are documented in our
[development guidelines](https://docs.gitlab.com/ee/development/database/large_tables_limitations.html#requesting-an-exception)
and require explicit approval.

These restrictions affect:

- New standalone indexes
- Indexes required for foreign keys
- Composite indexes
- Partial indexes

## Consequences

- New foreign key columns are restricted due to required index creation
- Limited ability to optimize queries through indexing
- Reduced options for filtering and searching
- Potential performance degradation for complex queries
- Teams must consider alternative optimization strategies
- Some feature implementations may require redesign

### Mitigation strategies

- Consider table partitioning for tables approaching 50 GB
- Implement appropriate data retention policies
- Explore alternative query optimization techniques
- Use existing indexes where possible
