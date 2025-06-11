---
title: 'Cells 1.0 Disaster Recovery'
stage: core platform
group: Tenant Scale
status: proposed
toc_hide: true
---

{{< design-document-header >}}

## Terms used

1. Legacy Cell: GitLab.com SaaS (the current GitLab.com deployment). It is called legacy because different tooling is used to operate it.
1. Cells:  A set of infrastructure components that run independently and isolated from each other.
1. Global Service: A service to keep global uniqueness, manage database sequences across the cluster, and help classify which resources belong to which Cell.
1. Routing Service: The Routing Service depends on the Global Service and is for managing routing rules to different cells.
1. RTO: [Recovery Time Objective]
1. RPO: [Recovery Point Objective]
1. WAL: [Write-ahead logging]

## Goals

Cells 1.0 is the first iteration of cells where Cells be operated independently of the Legacy Cell.
The Cells 1.0 target is to use Geo for Disaster Recovery which is the current DR strategy for GitLab Dedicated.
After Cells 1.0, we intend to leverage [Next Gen Scalable Backup and Restore] for restoring data from backups.

This document focuses only on defining the strategy for recovering Cells.
It does not cover recovering the Global Service, Routing Service, Legacy Cell, or any other external service.

Disaster Recovery for Cells creates a fork in our existing recovery process for the GitLab.com SaaS because cells are provisioned with different tooling.
It's possible we will have different RTO/RPO targets for Cells compared to the Legacy Cell, however the goal is to meet or exceed our Legacy Cell RTO/RPO targets listed below.

### RTO/RPO Targets

NOTE:
FY25 targets have not yet been validated on the Legacy Cell.

**Zonal Outages**:

|                                      | RTO       | RPO |
|--------------------------------------|-----------|-----|
| Primary Cell (current)               | 2 hours   | 1 hour |
| Primary Cell (FY25 Target)           | <1 minute | <1 minute |
| Cells 1.0 (without the primary cell) | _unknown_ | _unknown_ |

**Regional Outages**:

|                                      | RTO       | RPO |
|--------------------------------------|-----------|-----|
| Primary Cell (current)               | 96 hours  | 2 hours |
| Primary Cell (FY25 Target)           | 48 hours  | <1 minute [^object-storage] |
| Cells 1.0 (without the primary cell) | _unknown_ | _unknown_ |

## Disaster Recovery Overview

NOTE:
The services below are taken from the [Cells 1.0 Architecture Overview].

### Zonal

Zonal recovery refers to a disaster, outage, or deletion that is limited in scope to a single availability zone.
The outage might affect the entire zone, or a subset of infrastructure in a zone.

| Service | Zonal Disaster Recovery | Estimated RTO | Estimated RPO |
| --- | --- | --- | --- |
| GitLab Rails            | All services running in a cell are redundant across zones. There is no data stored for this service. | <=1 minute | not applicable |
| Gitaly Cluster          | Gitaly Cluster consists of a single SPOF (single point of failure) node and remains so for Cells 1.0. It requires a restore from backup in the case of a zonal failure. | <=30 min | <=1 hr for snapshot restore until WAL is available for restore. [^blueprint-dr] |
| Redis Cluster           | Redis is deployed in multiple availability zones and be capable of recovering automatically from a service interruption in a single zone. | <=1 minute | <=1 minute |
| PostgreSQL Cluster      | PostgreSQL cluster is deployed in multiple availability zones and be capable of recovering automatically from a service interruption in a single zone. A small amount of data-loss might occur on failover. | <=1 minute | <=1 minute |

### Regional

Regional recovery refers to a disaster, outage, or deletion that is limited in scope to an entire region.
The outage might affect the entire region, or a subset of infrastructure that affects more than one zone.

| Service | Regional Disaster Recovery | Estimated RTO | Estimated RPO |
| --- | --- | --- | --- |
| GitLab Rails            | All services running in a cell are local to a region and require a rebuild on a regional failure. There is no data stored for this service. | <=12 hours | not applicable |
| Gitaly Cluster          | Initially, Gitaly Cluster consists of a single SPOF node and remains so for Cells 1.0. It requires a rebuild in the case of a regional failure. | _Unknown_ | <=1 hr for snapshot restore until WAL is available for restore. [^blueprint-dr] |
| Redis Cluster           | Redis is deployed in a single region and requires a rebuild in the case of a regional failure. In flight jobs, session data and cache can not be recovered. | _Unknown_ | not applicable |
| PostgreSQL Cluster      | The PostgreSQL cluster is deployed in a single region and requires a rebuild in the case of a regional failure. Recovery is from backups and WAL files. A small amount of data-loss might occur on failover. | _Unknown_ | <=5 minutes |

NOTE:
For data stored in Object storage in Cells multi-region buckets are used. For restoring data due to accidental deletion we rely on object versioning or backups for recovery.

## Disaster Recovery Validation

Disaster Recovery for Cells needs to be validated through periodic restore testing.
This recovery should be done on a Cell in the Production environment.
This testing is done once a quarter and is completed by running game-days using the disaster recovery runbook.

## Disaster Recovery Requirements

We intend to meet the following requirements for DR.
Backup/Restore will need to meet all requirements while Geo will not protect against application bugs, accidental deletion, or ransomware.

| Requirement | Geo | Backup and Restore |
| --- | --- | --- |
| Data must be stored in different regions than the operating regions of the Cells (`us-east1`, `us-central1`). | ✅ | ✅ |
| Employees who support the day-to-day operation of a cell cannot have permission to delete backups or replicated data. | ⚠️ | ✅ |
| The principal or identity used to run the GitLab application cannot delete backups or replicated data. | ⚠️ | ✅ |
| The principal or identity used to support Disaster Recovery cannot delete backups or replicated data. | ⚠️ | ✅ |
| If backups or replicated data can be modified or deleted, the permissions to do so must be restricted to a limited number of operators who can only access backups using an offline credential such as a securely stored MFA token. | ⚠️ | ✅ |
| Replication/backups must be able to run unattended. | ✅ |  ✅ |
| Replication/backups must be monitored and adhere to a specific SLO. | ✅ | ✅ |
| We must be able to configure a retention policy. | N/A | ✅ |

### Disaster Recovery Risks

1. The Legacy Cell is not using the same tooling for deployment and operation where the other Cells are. This might split our processes and runbooks and add to our RTO if restoring the Legacy Cell is needed along with other Cells.

## Geo

Supporting infrastructure for Geo will be provisioned using the [GitLab Environment Toolkit] and [GitLab Dedicated Instrumentor].
This will allow operators to configure a Cell to fail over the GitLab application to an alternate region.

### Geo Risks

1. The infrastructure provisioning for Geo on GCP is not yet available and is still under development.

## Backup and Restore

[Unified Backup] is a single command-line tool that will handle the application backup and recovery needs of GitLab installations across supported reference architectures.
The tool will allow for the backup of application data and its recovery, and is what Cells will use to ensure we meet the full list of Disaster Recovery requirements.

The Unified Backup tooling will allow for backup and restore of the following data:

1. Git repositories
1. Application data
1. Object storage

### Git Repositories

Git repositories are stored on disk using GCP's persistent disks.
We do not intend to support Praefect for Cells.
A solution to backup data must be present in addition to features like Gitaly RAFT that provide high availability.
At this time, Cells does not yet support configuring resource policies for disk snapshots.
The GitLab Unified Backup tool will initiate a snapshot of all Gitaly volumes, that is being explored in the [disk snapshot integration epic](https://gitlab.com/groups/gitlab-org/-/epics/14858).

- ✅ Region isolation: Snapshots are stored in GCP object storage that is multi-region.
- ⚠️ Deletion protection: There is no mechanism outside of `iam.Deny` policies to prevent the deletion of snapshots.

### Application Data

Application data is stored in PostgreSQL using CloudSQL in GCP.
Cells enables automated backups when provisioning CloudSQL with a configurable retention window.
The GitLab Unified Backup tool is [exploring using on-demand backups](https://gitlab.com/groups/gitlab-org/-/epics/14856), but it is unclear now how this will integrate with Cells.

- ✅ Region isolation: CloudSQL backups are stored in GCP object storage that is multi-region.
- ⚠️  Deletion protection: There is no mechanism outside of `iam.Deny` policies to prevent the deletion of a CloudSQL instance and its backups.

### Object Storage

Object storage in Google cloud can enable [soft-delete] to allow recovery of accidental or intentional deletions.
Additionally, for a separate backup a [bucket lock] can be added to ensure that objects are not deleted for a retention period.
The GitLab Unified Backup tool is [developing an on-demand object storage backup](https://gitlab.com/groups/gitlab-org/-/epics/14857) that initiates a copy of all object storage to a separate bucket using the [Google Transfer Service](https://cloud.google.com/storage-transfer-service/).

- ✅ Region isolation: Snapshots are stored in GCP object storage that will be multi-region.
- ✅ Deletion protection: There are multiple mechanisms to prevent deletion, one is soft-delete and the other is a retention lock on the backup bucket.

### Metadata/Secrets

There is nothing currently planned for backing up secrets in GitLab Unified Backup.

- ✅ Region isolation: Google secrets manager will store secrets in multiple regions.
- ✅ Deletion protection: Google secrets manager has a version-destroy-ttl option for secrets that is being investigated [in this issue](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25776)

### Backup and Restore Risks and Unknowns

1. It is intended that the unified backup tool will be launched inside the [toolbox pod](https://docs.gitlab.com/charts/charts/gitlab/toolbox/), to meet the requirement to run backups unattended there will need to be a way to run the CLI periodically. We are still unsure how the automatic runs will be configured and monitored.
1. It isn't clear yet how Unified Backup will enable unattended restores, for automated testing.
1. We don't yet know how we can monitor a successful backup.
1. The GitLab Unified Backup tool does not provision infrastructure, and we have not yet decided on what additional resources will need to be provisioned for backups.
1. It's unclear at this time what the boundaries are between Unified Backup and Cells backup configuration, like enabling backups for CloudSQL and setting up resource policies for scheduled snapshots.
1. We aren't yet sure how restore will work for Cells which is part of the [discovery for integrating Unified Backup with Cells].

---

  [Cells 1.0 Architecture Overview]: https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/architecture/blueprints/cells/iterations/cells-1.0.md#architecture-overview
  [Recovery Time Objective]: https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Time_Objective
  [Recovery Point Objective]: https://en.wikipedia.org/wiki/Disaster_recovery#Recovery_Point_Objective
  [Write-ahead logging]: https://en.wikipedia.org/wiki/Write-ahead_logging
  [Next Gen Scalable Backup and Restore]: https://gitlab.com/groups/gitlab-org/-/epics/11577
  [GitLab Environment Toolkit]: https://gitlab.com/gitlab-org/gitlab-environment-toolkit
  [GitLab Dedicated Instrumentor]: https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/architecture/blueprints/dedicated-gcp-introduction.html#instrumentor-the-dedicated-provisioner
  [discovery for integrating Unified Backup with Cells]: https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/25736
  [Unified Backup]: https://gitlab.com/groups/gitlab-org/-/epics/11577

  [^blueprint-dr]: See the [DR Blueprint](https://gitlab.com/gitlab-org/gitlab/-/tree/master/doc/architecture/blueprints/disaster_recovery?ref_type=heads#current-recovery-time-objective-rto-and-recovery-point-objective-rpo-for-zonal-recovery)
  [^object-storage]: Data are stored on Google Object Storage makes no RPO guarantees for regional failure. At this time, there are no plans to use dual-region buckets which have a 15 minute RPO guarantee.
