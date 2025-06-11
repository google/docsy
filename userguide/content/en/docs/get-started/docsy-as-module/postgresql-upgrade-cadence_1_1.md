---
aliases: /handbook/engineering/infrastructure/core-platform/data_stores/database/postgresql-upgrade-cadence.html
title: PostgreSQL Upgrade Cadence
---

## PostgreSQL yearly upgrade cadence

Starting with GitLab 16.0, we follow a yearly upgrade cadence for PostgreSQL:

1. With every major GitLab version, we are increasing the minimum required PostgreSQL version to the next major version. Some examples:
   - In GitLab 17.0, PostgreSQL 14 will become the minimum supported PostgreSQL version.
   - In GitLab 18.0, PostgreSQL 16 will become the minimum supported PostgreSQL version.

1. We will be announcing the deprecation of the current minimum PostgreSQL version one year in advance, with the release of each major version of GitLab:

   - In GitLab 15.0 [we have announced the deprecation of PostgreSQL 12](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/87016) (to be removed in GitLab 16.0).
   - In GitLab 16.0, we will announce the deprecation of PostgreSQL 13 (to be removed in GitLab 17.0).

1. GitLab.com will be upgrading to the next major version every year during Q2. Our infrastructure will be preparing the upgrade in Q1 of every year, and execute the upgrade during Q2.

1. Optional support for the next major PG version in Omnibus and charts will be tested and validated with the release of each major version of GitLab. The next major PostgreSQL version will become available between `.0` major version and `.4` minor version, and then will become the default for fresh installations in the middle of the release cycle (\~ minor version `.6`). For example:

   - In GitLab `16.0`, we will test and validate PostgreSQL 14 support in Omnibus and charts.
   - Between GitLab `16.0` and `16.4`, we will add PostgreSQL 14 to Omnibus and charts as an optional supported version.
   - Around `16.6`, PostgreSQL 14 will become the default for Omnibus fresh installations.
   - This change is not required for GitLab `15.x`, as we are keeping PostgreSQL 12 as the minimum, and support for PostgreSQL 13 has been already added in GitLab `15.0`.

At a glance:

| GitLab Version | Minimum Supported Version | Optionally Supported Version | Omnibus Default (Fresh installs) | Release notes | GitLab.com |
|----------------|---------------------------|------------------------------|----------------------------------|---------------|------------|
|     16.6       |         PG13              |           PG14               |    **PG14**                      |  | Gitlab.com will upgrade to PG16 in FY25-Q2 |
|   **17.0**     |       **PG14**            |         **PG16**             |      PG14                        | Support for PG16 will be added to omnibus and charts between 17.0 and 17.4<br />Support for PG14 will be removed in 18.0 | |
|     17.6       |         PG14              |           PG16               |    **PG16**                      |  | |
|   **18.0**     |       **PG16**            |         **PG17**             |      PG16                        |  | Gitlab.com will upgrade to PG17 in FY26-Q2 |
