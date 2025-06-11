---
owning-stage: "~devops::data stores"
title: 'Database Size Limit ADR 001: Table classification'
toc_hide: true
---

## Context

Database table sizes significantly impact feature development and maintenance. Currently:

- Developers may not be aware of table sizes when developing features
- Large tables (>100 GB) require additional maintenance effort
- Teams need visibility into tables approaching size limits

## Decision

We classify tables into size categories to help track and manage growth:

| Classification | Size Range |
| ------------- | ---------- |
| Small         | Less than 10 GB |
| Medium        | 10 GB to 50 GB |
| Large         | 50 GB to 100 GB |
| Over limit    | Greater than 100 GB |

These classifications are stored in the database table data dictionary as `table_size`.

## Consequences

- We create a monthly chore to keep the `table_size` in the data dictionary up
  to date, which can be automated.
- Size classifications help inform development decisions
