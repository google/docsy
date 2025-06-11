---

title: Package Stage - Container Registry
description: "The goal of this page is to document specific processes and tools for the GitLab Container Registry project."
---







## Overview

The goal of this page is to document specific processes and tools for the [GitLab Container Registry](https://gitlab.com/gitlab-org/container-registry) project.

## Historical Context

In milestone 8.8, GitLab launched the MVC of the Container Registry. This feature integrated the [Docker Distribution registry](https://docs.docker.com/registry/) into GitLab so that any GitLab user can have a space to publish and share container images.

But there was an inherent problem with Docker Distribution. When you delete a container image tag, it's not actually deleted from storage. Instead, it is marked for deletion, and it will only be removed from storage when garbage collection is run. The problem is that the registry must be set to read-only mode or downtime to run garbage collection. Given the scale and SLAs of GitLab.com, it has not been possible to schedule downtime.

Fast forward many milestones, and the problem has continued to grow linearly. The GitLab.com registry consumes petabytes of storage which costs tens of thousands of dollars every month.

### What's been done so far?

Two years ago, the Package group and GitLab Staff engineers had a lengthy [discussion](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/62885) about how to resolve this problem and to deliver a [lovable product](https://gitlab.com/groups/gitlab-org/-/epics/5136). We evaluated several options, including:

- Integrating with another service like Harbor or Docker Trusted registry
- Building our in-house registry
- Forking Docker Distribution and iterating on that code

In the end, the decision was made to fork Docker distribution and make the requisite updates to add support for online garage collection.

Along the way, we made several other changes and modifications, which were all targeted to help GitLab and its customers tackle this storage problem.

First, we optimized the existing garbage collection algorithms for [GCS](https://gitlab.com/groups/gitlab-org/-/epics/2552) and [S3](https://gitlab.com/groups/gitlab-org/-/epics/2553), so that large enterprises could be unblocked from running garbage collection, even if it required downtime. This helped improve the performance of the algorithm by 90+ percent.

We also added programmatic [cleanup policies](https://docs.gitlab.com/ee/user/packages/container_registry/#cleanup-policy) to help customers automatically remove (even if they were not deleted from storage) old unused images.

Fast forward a bit, and, as a team, we've evaluated and iterated on designs for the implementation of online garbage collection and several plans for the migration of one registry to the next. The [epic](https://gitlab.com/groups/gitlab-org/-/epics/6405) details the work required to deploy the new metadata database to production and migrate all new and existing repositories to use the feature.

### Why we are excited

The metadata database is not just about online garbage collection. It unblocks a whole new set of potential features and capabilities that will help our customers to manage and deploy their software reliably. For example, it unblocks some much-needed updates for the [API](https://gitlab.com/groups/gitlab-org/-/epics/5683) so that we can support a more [robust user interface](https://gitlab.com/groups/gitlab-org/-/epics/3211), add enterprise features like [image signing](https://gitlab.com/gitlab-org/container-registry/-/issues/83) and [protection](https://gitlab.com/gitlab-org/gitlab/-/issues/18984) and provide more stability and reliability.

By forking the project, we continued improving the application and implementing several bug fixes, performance improvements, and additional features that were not available or accepted upstream. Consequently, due to the rate of changes and how the codebases diverged, we decided to detach from upstream in [June 2020](https://gitlab.com/gitlab-org/container-registry/-/issues/139). Since then, we have been evolving the project in isolation. We continue to source changes from upstream whenever necessary (mostly security fixes), but these must be merged manually.

In [February 2021](https://www.docker.com/blog/donating-docker-distribution-to-the-cncf/), Docker decided to donate Docker Distribution to the Cloud Native Computing Foundation (CNCF) to revive the project. The project was then renamed to [Distribution](https://github.com/distribution/distribution). Some of the GitLab Container Registry maintainers are now maintainers of the CNCF project as well.

Although some of our engineers contribute to the upstream Distribution project, the codebases diverged beyond reconciliation. Therefore, there is no intention to reunite with upstream at any point in time. Some of the features we have been working on, such as the metadata database and online garbage collection (more on that later), required a significant platform re-architecture. Additionally, we will continue to tailor the GitLab Container Registry to suit the needs of GitLab the product.

## Documentation

The documentation is currently scattered across multiple places, namely this handbook page, [docs.gitlab.com](http://docs.gitlab.com/), the [project repository](https://gitlab.com/gitlab-org/container-registry), and the upstream [Docker documentation](https://docs.docker.com/registry/). This is a [known issue](https://gitlab.com/groups/gitlab-org/-/epics/5965) and something we intend to address.

### Standards

Being a fork of the original Docker Distribution registry, the GitLab Container Registry is based on the [V1](https://docs.docker.com/registry/spec/manifest-v2-1/) (deprecated in [13.4](https://about.gitlab.com/releases/2020/09/22/gitlab-13-4-released/#deprecate-pulls-that-use-v1-of-the-docker-registry-api) and no longer supported since [13.8](https://about.gitlab.com/releases/2021/01/22/gitlab-13-8-released/#deprecate-pulls-that-use-v1-of-the-docker-registry-api)) and the [V2](https://docs.docker.com/registry/spec/manifest-v2-2/) Docker Image Specification. These specifications define the format and content of [Manifests](https://docs.docker.com/registry/spec/manifest-v2-2/#image-manifest) and [Manifest Lists](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list), used to describe Docker container images.

The GitLab Container Registry is also based on the original [Docker Registry HTTP API V2](https://docs.docker.com/registry/spec/api/) specification, which defines the contract of the single entrypoint for the Container Registry - its HTTP API.

Due to the need to standardize the container distribution mechanism across vendors/providers, in 2018, [Docker donated](https://www.docker.com/blog/docker-registry-api-standardized-oci/) the HTTP API V2 specification to the [Open Container Initiative (OCI)](https://opencontainers.org/), which is a governance structure under the [Linux Foundation](https://www.linuxfoundation.org/) maintaining open industry standards around containerization technologies. This led to the creation of the [OCI Distribution Specification](https://github.com/opencontainers/distribution-spec/blob/main/spec.md), which is the current leading standard and therefore the one that the GitLab Container Registry HTTP API adheres.

Similarly, Docker also [contributed its image specification to OCI](https://www.docker.com/blog/oci-release-of-v1-0-runtime-and-image-format-specifications/), leading to the creation of a vendor agnostic [OCI Image Specification](https://github.com/opencontainers/image-spec/blob/main/spec.md). This is the standard that the GitLab Container Registry adheres to when it comes to the [Image Manifest](https://github.com/opencontainers/image-spec/blob/main/manifest.md) and [Image Index](https://github.com/opencontainers/image-spec/blob/main/image-index.md) (the equivalent to Docker's Image Manifest Lists) formats.

The OCI Image and Distribution specifications are backward compatible with the original Docker specifications and are actively being worked on and therefore subject to changes. The GitLab Container Registry should follow the progress of these specifications to maintain OCI compliance. We are free to extend the HTTP API with additional functionality if needed, as long as we can keep backward compatibility with the OCI Distribution specification.

### Development

The following documentation is especially relevant for engineers working with the Container Registry:

- [Differences from Upstream](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#differences-from-upstream) - This is where we keep track of differences between the GitLab Container Registry and the upstream CNCF Distribution. All user-facing changes must be documented.
- [Releases](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#releases) - How we manage and cut new releases.
- [Contributing](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#contributing) - We stay as close as possible to the general GitLab development guidelines but enforce stricter rules whenever appropriate. Here is where we document those specific contributing processes.
- [Development Guidelines](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#development) - Links for specific development documentation, ranging from setup instructions to general GitLab development guidelines extensions.
- [Technical Documentation](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#technical-documentation) - Documentation about specific components or features of the application. This includes components and features inherited from upstream (with no documentation available elsewhere) and new ones.
- [Configuration](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/configuration.md) - Documentation about the available application settings. The [upstream configuration documentation](https://docs.docker.com/registry/configuration/) from Docker was the base for this, but since then, we have added, deprecated, and changed multiple configurations.
- [Storage Drivers](https://docs.docker.com/registry/storage-drivers/) - The documentation for the storage drivers. This is only available upstream. Whenever we add or change a storage driver settings, we document it [here](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs-gitlab/README.md#configuration).
- [Notifications](https://docs.docker.com/registry/notifications/) - Documentation about the asynchronous webhook notifications feature.
- [Authentication](https://docs.docker.com/registry/spec/auth/) - All about the authentication specification implemented by the Container Registry and supported by GitLab Rails (the authentication provider).
- [HTTP API Specification](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/spec/api.md) - This is based on the OCI Distribution Specification (see [Standards](#standards) for more details) but we have extended it with additional functionality. A log of changes is kept in the [project documentation](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs-gitlab/README.md#api).
- [Online Garbage Collection](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs-gitlab/db/online-garbage-collection.md) - Documentation about the implementation of online garbage collection.
- [Request Flow](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs-gitlab/auth-request-flow.md) - Sequence diagrams explaining the request flow for authentication, pull and push requests.

### Administration

The following links are related to administrative tasks, mainly for self-managed instances:

- [Omnibus and Source Installs](https://docs.gitlab.com/ee/administration/packages/container_registry.html)
- [Helm Chart Installs](https://docs.gitlab.com/charts/)

### Architecture

Documentation about the current architecture or any significant changes to it. The latter usually come in the form of an [Architecture Blueprint](/handbook/engineering/architecture/workflow/):

- [Container Registry Metadata Database](https://docs.gitlab.com/ee/architecture/blueprints/container_registry_metadata_database/) - Blueprint for the architecture change to move metadata from the storage backend into a database.

## Observability

### Metrics and Dashboards

The registry exports metrics about all its components (HTTP API, storage, database and online GC) to Prometheus. These metrics are geared towards operational metrics only. Due to cardinality limitations in Prometheus, metrics that require variable labels such as repository and image identifiers are exposed through the application logs.

For GitLab.com, the container registry has multiple dashboards in Grafana and Kibana, listed below. Like for any other GitLab application, observability is critical. If you are working on this project, please take your time to go through all dashboards and becoming familiar with the metrics displayed in them.

All the underlying metrics for the Grafana and Kibana dashboards are also available on self-managed installs.

#### Grafana

- [Overview](https://dashboards.gitlab.net/d/registry-main/registry-overview?orgId=1) - Main service dashboard. Provides an overview of the Service Level Indicators (SLI). The information is available for all the service components.
- [Application Detail](https://dashboards.gitlab.net/d/registry-app/registry-application-detail?orgId=1) - Detailed information about the application metrics. Provides insight about the HTTP API and the hosts resources usage.
- [Storage Detail](https://dashboards.gitlab.net/d/registry-storage/registry-storage-detail?orgId=1) - Consolidated information about the registry storage backend - Google Cloud Storage (GCS).
- [Database Detail](https://dashboards.gitlab.net/d/registry-database/registry-database-detail?orgId=1) - Fine grain metrics about the metadata database.
- [Garbage Collection Detail](https://dashboards.gitlab.net/d/registry-gc/registry-garbage-collection-detail?orgId=1) - Extensive metrics related to the online GC feature.
- [Redis Detail](https://dashboards.gitlab.net/d/registry-redis/registry-redis-detail?orgId=1) - Detailed metrics about Redis usage.
- [Migration Detail](https://dashboards.gitlab.net/d/registry-migration/registry-registry-migration-detail?orgId=1) - Temporary dashboard to support the ongoing GitLab.com deployment and migration ([gitlab-org&5523](https://gitlab.com/groups/gitlab-org/-/epics/5523)).
- [PgBouncer](https://dashboards.gitlab.net/d/pgbouncer-registry-main/pgbouncer-registry-overview) - Metrics for the PgBouncer nodes in front of the registry PostgreSQL database cluster.

The source PromQL query for any graph in Grafana can be identified by looking at the corresponding dashboard source code in the [runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/dashboards/registry) project. You can also do so in the Grafana UI by clicking on the dropdown alongside a graph's name and click `Explore`. That will take you to a WYSIWYG editor for that particular query, showing both the PromQL source and the rendered graph. For a more advanced overview, you can watch a recording that walked through the process of creating and querying Prometheus metrics and Grafana dashboards for the [GitLab.com upgrade/migration](https://gitlab.com/groups/gitlab-org/-/epics/5523) project [here](https://drive.google.com/file/d/1WzAAiPYTK7YpKJTrBAFFYNhDksLV4x8c/view?usp=share_link).

#### Thanos

Behind the scenes, Grafana dashboards source Prometheus metrics from [Thanos](https://thanos-query.ops.gitlab.net/). If wanting to, you can reproduce any of the Grafana graphs in Thanos by inspecting their source query on the former and execute it in the latter. This might be useful when querying on long timespans, as Thanos is usually faster. You can also write custom queries for one time specific analysis and share the results with others by sharing screenshots and the Thanos page link.

Thanos has an autocompletion feature which is useful to find available Prometheus metrics. For example, going to Thanos and typing `registry_` in the search box should show a dropdown of all available application metrics for the Container Registry. You can then use [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) to query and visualize these metrics.

#### Kibana

- [Main](https://log.gprd.gitlab.net/goto/7ac27e1df0f8fca57ad8ceb383696821) - Overview of several registry metrics.
- [Blob Downloads](https://log.gprd.gitlab.net/goto/05f1f0f38ca1af421d70691d6e80c069) - Provides additional insight about downloads at the top-level namespace and repository levels.

### Logs

The container registry exposes structured access and application logs. For GitLab.com, these logs can be found in Kibana:

- [Non-production](https://nonprod-log.gitlab.net/goto/f3fbccdb9dea6805ff5bbf1e0144a04e): Logs for the development, staging, and pre-production environments.
- [Production](https://log.gprd.gitlab.net/goto/7dc6f73d5dd4cc4bebcd4af3b767cae4): Logs for the production environment.

## Releases

The Container Registry adheres to the same development and release timeline as all other GitLab projects. However, because the release process is manual, ensuring all changes are merged on the project repository by the code cutoff (the Friday before the Thursday [release day](https://about.gitlab.com/releases/#upcoming-releases)) is not enough. We still have to deal with the manual release process, which can take a couple of days to complete, especially for self-managed installs.

Considering this, we strive to have deliverables merged in the project repository 10 days before the targeted release date. At this point, a maintainer should cut a new release following the [documented process](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#releases). This gives us a 5-day window to deal with the release process and merge all version bumps by the code cutoff. It is the responsibility of the maintainer creating the last release to ensure that all deliverables have been merged or that the assigned engineer(s) acknowledge that changes will not be ready on time. Engineers are encouraged to set a due date on deliverable issues to reduce the chances of missing the merge and release window.

### GitLab.com

Unlike the main Rails application, the Container Registry does not currently benefit from continuous delivery. Releases and deployments are, therefore, a manual process ([for now](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/316)). You can learn more about the process in the [project documentation](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#releases).

You can identify the current version of the registry running in each environment by looking at the [k8s-workloads](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com) project, and more precisely [here](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/blob/master/bases/environments.yaml), looking for the `registry_version` key. This is also the right project to look at to identify if any change occurred around a given time, not only for regular upgrades but also for any application configuration changes. This can be done by searching for [merged MRs with the label `Service::Container Registry`](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/merge_requests?scope=all&state=merged&label_name[]=Service%3A%3AContainer%20Registry).

### Self-Managed

Releases for self-managed are also manual and adhere to the normal GitLab [monthly release cadence](https://about.gitlab.com/releases/). Because the release process requires several manual steps, special attention must be paid to ensure that changes are merged on time before the release date. Please refer to the [project documentation](https://gitlab.com/gitlab-org/container-registry/-/tree/master/docs-gitlab#releases) for more details.
