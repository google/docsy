---
title: "Kubernetes Migration Working Group"
description: "The charter of this working group is to, except for postgres, migrate all of GitLab.com to Kubernetes."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | June 22, 2020 |
| End Date        | December 12, 2022 |
| Slack           | [#wg_k8s-migration](https://gitlab.slack.com/archives/C016JU3CZKJ) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit#) (only accessible from within the company) |
| Overview & Status | [GitLab.com on Kubernetes Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/112) |

### Charter

The charter of this working group is to synchronize cross department efforts, as a means to support GitLab.com migration to the Kubernetes platform. This migration is essential as it is a base for other initiatives which require running multiple, large independent GitLab sites without significant staffing demand.

### Scope and Definitions

In this context, the scope of this working group is defined by the following list outlines the order of deliverables per Working Group Agenda on [2020-07-13](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit#bookmark=id.dej0jql4zr9f), and then further refined on [2021-02-01](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit?ts=60183e13#bookmark=id.ncj5do925oqy). The goal of this list is to define deliverables for the Working Group such that its charter can be finite.

#### Deprecate NFS

1. Make Web/API work without NFS ([issue tracker](https://gitlab.com/groups/gitlab-org/-/epics/1316#note_377457528))
1. Make CI/CD live traces work without NFS ([issue tracker](https://gitlab.com/groups/gitlab-org/-/epics/3791))
1. Make Pages work without NFS (Scalability: [https://gitlab.com/groups/gitlab-org/-/epics/3980](https://gitlab.com/groups/gitlab-org/-/epics/3980))

#### Helm Charts

1. Move Web/API nodes of .com to Helm charts ([issue tracker](https://gitlab.com/groups/gitlab-org/-/epics/5327))
1. Move Pages nodes of .com to Helm Charts ([issue tracker](https://gitlab.com/groups/gitlab-org/-/epics/5326))

#### Stateful Nodes

1. Gitaly to K8s
1. Redis to K8s

Note that not all stateful nodes are scoped here, notably PostgreSQL, and this is intentional.

## Roles and Responsibilities

| Working Group Role                       | Person                          | Title                                    |
|------------------------------------------|---------------------------------|------------------------------------------|
| Executive Stakeholder                    | Steve Loyd  | VP of Infrastructure |
| Facilitators                              | Chun Du, Michele Bursi  | Director of Engineering, Enablement and Engineering Manager, Delivery             |
| Functional Lead                          | Nailia Iskhakova                | Software Engineer in Test, Database      |
| Functional Lead                          | Andrew Thomas                    | Principal Product Manager, Enablement  |
| Functional Lead                          | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure       |
| Member                                   | Jason Plum                      | Staff Engineer, Distribution             |
| Member                                   | Tanya Pazitny                   | Quality Engineering Manager, Enablement  |
| Member                                   | Mek Stittri                     | Director of Quality Engineering          |
| Member | Marin Jankovski | Sr Engineering Manager, Infrastructure, Delivery & Scalability |
| Member | Dilan Orrino | Senior Prouct Manager, Distribution |
| Member | Mark Wood | Senior Prouct Manager, Create:Gitaly |
| Member | Andras Horvath | Engineering Manager, Gitaly |

## Outcome

The Kubernetes Migration Working Group was established to reduce operational costs and increase the efficiency of day-to-day operations.

The working group defined the migration path of each service together with the responsible teams. This collaboration included analysis of a target workload in order to ensure the successful migration of the service into a Cloud Native architecture. Part of the effort was also the work on all related services of the supporting infrastructure needed to make migrations successful, like new Observability solutions and new release and deployment capabilities.

The migration took care of all the stateless services and some selected stateful ones. It was deliberately decided to not attempt the migration of Gitaly in light of a new architecture that will take place in future to avoid to spending effort in migrating components that will be soon replaced. The work done in identifying a possible migration path still stands and it will be re-evaluated when the new architecture will be partially in place. The goal to revisit this is set for the end of FY24Q2.

The migration of services to Kubernetes allowed GitLab to optimize the infrastructure size and cost while providing a more flexible and efficient way of scaling services. In the same way, we have been able to [maintain comparable or, in some cases, better performance](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/920?_gl=1*1u90s8c*_ga*MTM3MjI4MTA0NC4xNjY4MTU3MTUw*_ga_ENFH3X7M5Y*MTY3MTc4MzE0OS4xMTAuMS4xNjcxNzgzMTY0LjAuMC4w#shard-performance). In addition to better performance, another success factor is deployment speed, where we observed approximately 1.5x improvement.

Migrating GitLab.com to run on Kubernetes also meant creating new installation methods available to our customers. We are dogfooding and continuously improving these new installation methods so also self-managed customers can benefit from it.

## Timeline of Migrated Services

| Date       | Service                                           |
|------------|---------------------------------------------------|
| 2019-08-30 | Container Registry                                |
| 2019-09-27 | PlantUML                                          |
| 2019-11-21 | Mailroom                                          |
| 2020-05-30 | Sidekiq Memory-bound Shard                        |
| 2020-05-15 | Sidekiq Elasticsearch Shard                       |
| 2020-06-09 | Sidekiq Low-urgency-cpu-bound Shard               |
| 2020-06-16 | Sidekiq Urgent-other Shard                        |
| 2020-07-07 | Sidekiq Database-throttled Shard                  |
| 2020-07-07 | Sidekiq Gitaly-throttled Shard                    |
| 2020-07-14 | Sidekiq Urgent-cpu-bound Shard                    |
| 2020-08-15 | Websockets                                        |
| 2020-10-26 | Git HTTPS                                         |
| 2020-12-01 | Git SSH                                           |
| 2021-06-28 | API Service                                       |
| 2021-07-13 | Remaining Sidekiq Queues                          |
| 2021-07-22 | Enhanced Services Observability                   |
| 2021-09-23 | Web traffic on Kubernetes                         |
| 2021-12-01 | Pages                                             |
| 2022-08-05 | Camoproxy                                         |

The full list of the work accomplished to support the migration can be found on the [GitLab.com on Kubernetes](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/112) tracking epic.

## Related Links

- [Working group kick off meeting](https://www.youtube.com/watch?v=TguakWdOPlw&feature=youtu.be)
- [Defining Day-2 Operations - DZone Agile](https://dzone.com/articles/defining-day-2-operations)
- [Scalability Team - GitLab](/handbook/engineering/infrastructure/team/scalability/)
