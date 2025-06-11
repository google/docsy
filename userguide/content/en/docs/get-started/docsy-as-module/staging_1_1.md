---
aliases: /handbook/engineering/infrastructure/core-platform/systems/geo/staging.html

title: "Geo on staging.gitlab.com"
description: "Document Geo installation on staging.gitlab.com"
---







#### Summary

Geo is fully operational on the staging environment of GitLab.com. This is a major dogfooding effort that allows the team to test and validate new features at scale, catch bugs, and identify performance issues. This is important for our customers because it increases our confidence in any Geo improvements we make.

The following items describe some specific settings or how we addressed some of these issues while enabling Geo on the staging environment:

##### Architecture

We have one [Geo secondary node](https://geo.staging.gitlab.com) up and running for [staging.gitlab.com](https://staging.gitlab.com) configured as an [all-in-one box](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/gstg-infra-geo-secondary.json) with all components colocated on one single node. We are currently *not* running [a Geo HA deployment](https://docs.gitlab.com/ee/administration/geo/replication/multiple_servers.html).

![Geo Staging Diagram](geo_staging_diagram.png)

##### PostgreSQL replication

We decided to use archive recovery to replicate the data from the Geo primary database in the staging environment. The full description of how we have set up it can be found in [this runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/geo-patroni-cluster.md#setup-replication-for-a-single-node) at the top section, which refers to single-node installations.

##### PostgreSQL Foreign Data Wrappers (FDW) - Queries timing-out

GitLab Geo uses [PostgreSQL Foreign Data Wrappers (FDW)](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) to perform some cross-database queries between the secondary replica and the tracking database. Despite the technical elegance of this approach, these queries have lead to some problems for Geo.

Originally, the staging environment was still running PostgreSQL 9.6, and Geo benefits from some FDW improvements available only in PostgreSQL 10 and later, such as join push-down and aggregate push-down. This led to some FDW queries timing out during the backfill phase. Since we know this issue is no longer a problem for Geo from PostgreSQL 10 upwards, increasing the statement timeout to 20 minutes on staging was sufficient to allow us to proceed with the backfill.

Since the 13.2 release, we have [improved Geo scalability by simplifying backfill operations](https://gitlab.com/groups/gitlab-org/-/epics/2851), eliminating these cross-database queries and removing the FDW requirement.

##### PostgreSQL version

Staging currently uses PostgreSQL version 11.7. In May 2020, we [collaborated with the SRE Datastores team to update the Geo node to use Postgres 11](https://gitlab.com/gitlab-org/gitlab/-/issues/217629).

##### Gitaly shards

It is a prerequisite for Geo secondary nodes that they are configured with the same set of logical Gitaly shards. This means that the names in the `git_data_dirs` config must match those in the Geo primary node.

In staging, most primary Git storage shards are almost empty, and some are experimental artifacts for unfinished features like ZFS storage and Praefect. For this reason, we use only one physical shard and store all logical shards on it for now. To achieve this, each logical Gitaly shard defined in `git_data_dirs` in the Geo secondary node shares the same path and `gitaly_address`.

##### Secrets

We had some issues with the Geo secondary node in staging while we were using the staging secrets. The Geo secondary node needs to use its own GKMS secrets store, which allowed us to remove conflicting configuration and set secrets for this node, which are different from production.

##### Deployment

The deploy to the Geo secondary node happens indirectly. One of the final steps while deploying to staging.gitlab.com is to update an attribute in Chef with the version of GitLab that should be running and to set a flag to enable the installation of that specific package. Chef runs roughly every half hour on the Geo secondary node. The next time Chef runs on this node after a successful deployment to staging.gitlab.com, the Geo node will begin upgrading itself. In the worst scenario, the Geo secondary node will take 30 minutes to start the upgrade process.

##### Known issues

The staging environment does not have the data (repositories, LFS Objects, uploads, etc.) on the file system for every project in the database. To avoid a lot of false-positive errors and a waste of resources trying to resync failed registries over and over again, we decided to enable [selective sync](https://docs.gitlab.com/ee/administration/geo/replication/configuration.html#selective-synchronization) at the group level. We currently replicate the `gitlab-org` group.

There may be some existing replication/verification problems on staging, we aim to track all of them in the [Geo Staging Maintenance epic](https://gitlab.com/groups/gitlab-org/-/epics/5094).

#### Monitoring

- [Grafana - Geo Primary insights](https://dashboards.gitlab.net/d/WO9bDCnmz/geo-primary-insights?orgId=1&refresh=10s&var-environment=gstg&var-prometheus=prometheus-01-inf-gstg&var-app_prometheus=prometheus-app-01-inf-gstg&var-interval=1h)
- [Grafana - Geo Secondary status](https://dashboards.gitlab.net/d/l8ifheiik/geo-status?orgId=1&refresh=5m&var-environment=gstg&var-prometheus=prometheus-01-inf-gstg&var-app_prometheus=prometheus-app-01-inf-gstg&var-events_interval=1h)
- [Sentry](https://sentry.gitlab.net/gitlab/geo-staging-gitlabcom/issues/1387504)

#### Geo Engineer Responsibilities and Support Rotation

**Everyone** is responsible for QA testing their own MRs on it (whenever applicable). Make sure anything important gets addressed, and anything less is tracked. If you notice a problem with Geo on staging, then feel free to ping/assign the rotation engineer as DRI.

Every month, a Geo backend engineer will be the DRI for monitoring Geo on staging and creating/escalating any issues. This is not an on-call shift and the DRI is not required to fix any issues themselves.

In the last week of their rotation, the outgoing person should set up a meeting with the incoming person to make sure they:

- have SSH access to the staging environment
- can view the Geo admin UI on staging
- have enabled notifications for the [geo-staging-gitlabcom project on Sentry](https://sentry.gitlab.net/gitlab/geo-staging-gitlabcom/)
- are familiar with any current ongoing issues with staging geo

The main goals for this rotation:

- Ensure Geo on staging works.
- Distribute responsibility for keeping Geo on staging working.
- Better understand the experience of a customer sysadmin

##### DRI Daily Tasks

- Check https://staging.gitlab.com/admin/geo/nodes. If anything seems weird, ask about it in `#geo-for-gitlab-dot-com`. Cross-post in `#g_geo` if needed. Make sure anything important is addressed.
- Check Sentry. Right now there is a lot of noise, but it can help us identify some edge cases or if something is wrong under the hood.
- Check for [triggered alerts](https://gitlab.com/gitlab-org/geo-team/geo-ci/-/alert_management). If any are found, follow the [documentation](scheduled_pipelines.html) for handling them

##### When Geo on Staging is not Working

- Drive toward a diagnosis by:
  - Investigating with Sentry, Kibana, Grafana, etc, and via SSH into the server.
  - Opening issues
  - Asking others for help
- Help prioritize issues with Engineering Manager, Product Manager, and Infrastructure counterparts.

##### Rotation Schedule

| Month     | Name             |
| -----     | ------           |
| **2023**  | |
| December  | [`@jtapiab`](https://gitlab.com/jtapiab) |
| November  | [`@aakriti.gupta`](https://gitlab.com/aakriti.gupta) |
| October   | [`@brodock`](https://gitlab.com/brodock) |
| September | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| August    | [`@vsizov`](https://gitlab.com/vsizov) |
| July      | [`@mkozono`](https://gitlab.com/mkozono) |
| June      | [`@ibaum`](https://gitlab.com/ibaum) |
| **2022**  | |
| July      | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| June      | [`@mkozono`](https://gitlab.com/mkozono) |
| May       | [`@cat`](https://gitlab.com/cat) |
| April     | [`@mkozono`](https://gitlab.com/mkozono) |
| March     | [`@dbalexandre`](https://gitlab.com/dbalexandre) |
| February  | [`@cat`](https://gitlab.com/cat) |
| January   | [`@vsizov`](https://gitlab.com/vsizov) |
