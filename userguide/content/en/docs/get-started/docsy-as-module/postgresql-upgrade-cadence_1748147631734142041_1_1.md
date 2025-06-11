---
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
|     16.6       |         PG13              |           PG14               |    **PG14**                      |  | GitLab.com will upgrade to PG16 in FY25-Q2 |
|   **17.0**     |       **PG14**            |         **PG16**             |      PG14                        | Support for PG16 will be added to omnibus and charts between 17.0 and 17.4<br />Support for PG14 will be removed in 18.0 | |
|     17.6       |         PG14              |           PG16               |    **PG16**                      |  | |
|   **18.0**     |       **PG16**            |         **PG17**             |      PG16                        |  | GitLab.com will upgrade to PG17 in FY26-Q2 |

## PostgreSQL Minor Release Cadence

Each major Postgres version receives bug fixes and, if need be, security fixes that are released at least once every three months in what Postgres calls a "minor release." Many people will be more familiar with the term ‘patch’, which more or less refers to the same thing. 

Postgres usually releases minor releases every 3 months. The target date for these releases are, unless otherwise stated, the second Thursday of February, May, August, and November.
If the Postgres release team determines that a critical bug or security fix is too important to wait until the regularly scheduled minor release, they may make a release available outside of the minor release roadmap.

We can view the Postgres minor release roadmap here: https://www.postgresql.org/developer/roadmap/

The Database Operations Team (DBO Team) may or may not choose to apply each minor release after considering its release notes. When considering whether to install a minor release, we evaluate whether the bug fixes and security enhancements included are likely to be relevant in Gitlabs environment. We also take a look at community forums across the web to note if anyone reports issues with installing that minor release.

Individual minor releases should be evaluated by different people from the DBO team, round robin style. It should not be one team member's sole responsibility to be aware of upcoming postgres minor releases that we may want to install. The team member responsible for evaluating the next minor release is assigned when the current minor release issue is closed. 

New Minor releases should be evaluated by using the [postgresql minor release template](https://gitlab.com/gitlab-com/gl-infra/data-access/dbo/dbo-issue-tracker/-/blob/main/.gitlab/issue_templates/postgres_minor_release.md) to open an issue in the DBO Issue Tracker Repo.
New Minor releases should be installed after opening a change request in the production repo

The DBO team will usually default to waiting at least a week after a minor release is made available before beginning evaluation. 

It is very important that minor releases are first installed in the staging environment, and left to run there for at least 2 weeks before they are installed in the production environment.
