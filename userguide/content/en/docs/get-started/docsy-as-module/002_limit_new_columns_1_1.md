---
owning-stage: "~devops::data stores"
title: 'Database Size Limit ADR 002: Limit new columns for tables larger than 100 GB'
toc_hide: true
---

## Context

GitLab aims to maintain table sizes under 100 GB for optimal performance and manageability. Table size growth occurs through:

- Adding new columns
- Increasing row counts
- Creating new indexes

While this decision focuses on preventing new column additions, other size control methods like partitioning and data retention policies are handled separately.

## Decision

We prevent new column additions to tables larger than 100 GB through:

1. RuboCop enforcement ([!173248](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/173248))
1. Documentation of allowed exceptions ([!169164](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/169164/diffs))

Exceptions to this rule are documented in our
[development guidelines](https://docs.gitlab.com/ee/development/database/large_tables_limitations.html#requesting-an-exception)
and require explicit approval.

## Consequences

- New features may require additional engineering effort.
- Some features may require architectural changes.
- Large tables may require partitioning strategies.
- Data retention policies become more critical.
- Developers may need to create separate tables for related data (for example, `namespace_settings` for namespaces).
  This may add some complexity to the database schema.
