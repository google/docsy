---
owning-stage: "~devops::secure"
title: 'KEV Support ADR 001: Unify KEV and EPSS as CVE Enrichments'
---

## Context

We are implementing support for KEV data in GitLab.
Initially, we considered storing KEV data separately from EPSS data.
However, after [discussion](https://gitlab.com/groups/gitlab-org/-/work_items/11912#note_2075459748),
we realized that unifying KEV and EPSS data as CVE
enrichments could provide benefits in terms of performance and simplicity.

The unified approach simplifies data management and querying. By consolidating
KEV and EPSS data into a single table, we create a more efficient structure for
these CVE-based enrichments. This design allows for more efficient DB queries by reducing the
number of joins.

It's important to note that while KEV data includes around 1,000 records, EPSS
data includes around 250,000 records (these numbers will increase over time).
KEV data is limited to a boolean value indicating whether a vulnerability is
known to be exploited.
The small size of this additional boolean field and the relatively small number
of KEV records compared to EPSS records support the decision to combine these
datasets, as it adds minimal overhead to the existing EPSS data structure.

The current EPSS implementation already has a design in place, which we can
leverage and extend for this unified approach. In addition, the API remains
unaffected by these backend changes, maintaining its current structure and
usability.

## Decision

We have decided to:

1. Maintain separate tables for KEV and EPSS data in PMDB.
2. Export both KEV and EPSS data into a single, shared GCP bucket.
3. Implement a single process for syncing and ingesting the unified data into a
   new `pm_cve_enrichments` table in GitLab DB.
4. Structure the `pm_cve_enrichments` table to include:
    - cve_id
    - epss_score (nullable)
    - has_known_exploit (nullable)
5. Use GraphQL queries to access enrichment data exclusively from
   the `pm_cve_enrichments` table.

## Consequences

### Positive

- Enhanced SQL query performance for CVE enrichment data retrieval by storing
  EPSS and KEV in a unified table, requiring only a single join instead of two.
- Reduces the complexity of the data model on the backend.
- Eliminates code duplication by using shared feature flags, sync, ingestion, and
  export processes for both KEV and EPSS data.
- Minimal impact on upsert queries and the [Write Ahead Log](https://www.postgresql.org/docs/current/wal-intro.html)
  since KEV data is restricted to a single boolean column.

### Negative

- Loss of cursor functionality for KEV, requiring full data export each time due
  to EPSS data always being fully exported.
- One-time performance cost during PMDB's export due to joining KEV and EPSS
  tables.

## Alternatives

1. Store KEV data separately:
    - Advantages:
        - Maintains separation of concerns.
        - Preserves cursor functionality for KEV.
        - Less frequent KEV data updates in GitLab DB (due to smaller dataset
          and less frequent changes compared to EPSS).
        - Reduces the [Write Ahead Log](https://www.postgresql.org/docs/current/wal-intro.html)
          during the ingestion of KEV data and EPSS data.
    - Disadvantages:
        - GraphQL queries trigger SQL queries that JOIN two tables.
        - Increased complexity in ingestion and synchronizing two separate
          datasets.

2. Denormalize KEV data into vulnerabilities tables:
    - Advantages:
        - Fast access to KEV data when querying vulnerabilities.
    - Disadvantages:
        - Data redundancy.
        - Different approach between EPSS and KEV, leading to inconsistent data
          management.
        - Duplicated ingestion and sync processes.

3. Store KEV data in `pm_advisories`:
    - Advantages:
        - Keeps advisory-related data together.
        - Leverages current exporting, ingestion, and sync processes for
          advisories, lessening the need for new implementations.
    - Disadvantages:
        - Requires joining with advisories for GraphQL querying, which may
          impact performance.
        - May introduce complexity if KEV data needs to be accessed
          independently of advisory data.
