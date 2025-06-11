---
title: "Deployments and Releases"
---

## Overview and terminology

This page describes the deployment and release approach used to deliver changes to users. The overall process consists of two significant parts:

1. **Monthly self-managed release**: GitLab version (XX.YY.0) [published every month](https://gitlab.com/gitlab-org/release/docs/blob/master/general/monthly/process.md). From this monthly release, [planned patches](/handbook/engineering/releases/patch-releases/) are scheduled twice a month and [unplanned critical patches](/handbook/engineering/releases/patch-releases/#unplanned-critical-patch-release-process) are created as needed.
2. **GitLab.com deployment**: A Continous Delivery process to deploy [branches created from master branch](https://www.youtube.com/watch?v=_G-EWRpCAz4), on regular intervals.

For more details on the individual processes and how to use them please see the [Deployments page](/handbook/engineering/deployments-and-releases/deployments) for GitLab.com changes and the [Releases page](/handbook/engineering/releases/) for changes for self-managed users.

**The main priority** of both deployments and releases **[is GitLab availability & security](/handbook/engineering/development/principles/#prioritizing-technical-decisions)**
as an application running on both GitLab.com and for users running GitLab
in their own infrastructure.

### Deployment and Release Process overview

{{< youtube "aAQuhUnpbQE" >}}

For testing purposes, all changes are deployed to GitLab.com before being considered for a self-managed release. Deployment and release cadences operate on different timelines with changes deploying to GitLab.com multiple times per day, and packages being released for self-managed users several times a month.

This overview shows how the two processes are connected:

![Deployment and Release process overview](/images/engineering/deployments-and-releases/deployment-and-release-process-overview.png)

- [Diagram source](https://docs.google.com/presentation/d/1YRjA1dYCXNXp06VltDYlik1MdFyzUvaeXKk69mMPcA4/edit?usp=sharing)

1. Engineer creates features or bug fixes. Changes reviewed by Maintainers
1. Validated changes merged into the default branch
1. A scheduled pipeline packages all new changes into an "auto-deploy package" for deployment to GitLab.com. Multiple packages are created each day at the [listed times](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)
1. If deployments are allowed the auto-deploy pipeline starts. Production Change Locks, unhealthy environments, or other ongoing deployments are examples of events that would prevent a deployment
1. The auto-deploy package is deployed to GitLab.com. For more details [see the deployment process](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process)
1. Changes that have been successfully deployed to GitLab.com can be considered for packaged release for self-managed users. A new release candidate package is created for these changes
1. The release candidate is deployed to a test environment and automated QA tests execute
1. Release Candidate is officially tagged and published for release

For a more detailed explaination of the processes see the [deployments page](/handbook/engineering/deployments-and-releases/deployments/) and the [releases page](/handbook/engineering/releases/)

## Release Managers

The overall coordination and operation of the deployment and release process is the responsibility of the release managers.

See the GitLab [Release Managers schedule](https://about.gitlab.com/community/release-managers/) to find out who the current release managers are.

### How to contact a Release Manager

You can contact the current Release Managers:

1. On GitLab issues and epics by using `@gitlab-org/release/managers` handle
1. On Slack by using the `@release-managers` handle

We use the `#releases` and `#f_upcoming_releases` channels to discuss and coordinate deployments and releases. Automated deployment status announcements are made to the `#announcements` channel.

If you need to escalate a request, please use the [release management escalation process](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#release-management-escalation)

### Weekly Delivery Metrics Review

Each week, the current Release Managers walk through the key Delivery Group metrics in the EMEA/AMER Delivery Weekly sync ([YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KoPzC03-4yXuJEWdUo7VZfX)). The goal is to share experiences about recent deployments and releases, and for the Group to identify ways we can improve our tools and processes.

[MTTP Monthly](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-production-mttp) - [Deployment blockers](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1496) - [Deployment SLO](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery-deployment-slo?orgId=1) - [GitLab: deployment frequency](https://gitlab.com/gitlab-org/gitlab/-/pipelines/charts?chart=deployment-frequency) - [GitLab: lead time](https://gitlab.com/gitlab-org/gitlab/-/pipelines/charts?chart=deployment-frequency)

1. Walkthrough [Auto-Deploy packages dashboard](https://dashboards.gitlab.net/d/delivery-auto_deploy_packages/delivery-auto-deploy-packages-information?orgId=1)
1. Walkthrough the monthly view of [GitLab: deployment frequency](https://gitlab.com/gitlab-org/gitlab/-/pipelines/charts?chart=deployment-frequency) and [GitLab: lead time](https://gitlab.com/gitlab-org/gitlab/-/pipelines/charts?chart=lead-time) - note any patterns
1. Walkthrough the [Deployment SLO dashboard](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery3a-deployment-slo) - Deployment SLO and packager pipeline duration
1. Walkthrough of [Deployment Blockers Dashboard](https://dashboards.gitlab.net/d/delivery-deployment_blockers/delivery3a-deployment-blockers?orgId=1&from=now-6d&to=now&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-ops&var-root_cause=$__all) and last week's [Deployment Blockers](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1496)
1. Do we need to take action based on the previous week's MTTP?

### Deployment Targets

This section defines the hierarchy of supported deployment types for GitLab.
Note: other deployment types are possible, for instance FreeBSD Ports and
Source Installs, but these are out-of-scope as they're not officially supported.
Since this is a hierarchical taxonomy, items can be represented with classifications
at multiple levels in the tree.

In some cases, limitations in usage ping data may require broader (non-leaf node)
classifications to be used, but in general, deployments should be categorized by the
most specific classification available.

#### Taxonomy

This section describes the taxonomy of deployment types that distribute GitLab across.
Where possible, we include the Service Ping attributes that can be used to match these deployment
types.

1. **SAAS** `~deployment-type:saas`

   SaaS represents all customer-facing GitLab-managed instances.

    1. **GitLab.com** `~deployment-type:saas-gitlab`

        GitLab.com represents our two _multi-tenant_ deployment types.

        1. **Original GitLab.com** `~deployment-type:saas-config-mgmt`

           GitLab.com is our original monolithic deployment, configured
           via the [config-mgmt](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/)
           project.
           Primarily uses CNG charts, and uses Omnibus for deploying
           Gitaly, Patroni and Postgres. No service ping data is sent.

        1. **Cells** `~deployment-type:saas-gitlab-cells`

           Cells is the nascent organizational-sharded deployment, which will be
           progressively adopted. Cells uses the Dedicated tenant deployment tooling
           (Instrumentor), so in many ways is provisioned in a similar means to Dedicated.

          | Service Ping Attribute       | Value                       |
          |------------------------------|-----------------------------|
          | `installation_type`          | `gitlab-cloud-native-image` |
          | `gitlab_dedicated`           | `true`                      |
          | `gitlab_environment_toolkit` | `true`                      |
          | Autonomous System (ASN)      | Google                      |

    1. **Dedicated** `~deployment-type:saas-dedicated`

       Dedicated is our _single-tenant_ SaaS offering.
       Dedicated primarily uses GitLab Environment Toolkit (GET) Hybrid.
       In turn, GET relies on Omnibus (for Gitaly) and Cloud Native Charts (CNG)
       for application services. Where possible Cloud-Managed services are favoured,
       including Postgres (RDS, CloudSQL), Redis (ElastiCache, MemoryStore) and
       Kubernetes (EKS, GKE).

       Unlike GitLab.com, Dedicated operators do not have
       access to the GitLab Admin console, or any other direct access to the
       GitLab applications.
       These tenants are intended to be run at scale, so
       per-tenant configuration options are kept at a minimum, including feature
       flags and configuration options.

        1. **Commercial** `~deployment-type:saas-dedicated-comm`

           Commercial Dedicated is deployed exclusively on AWS, although
           Google Cloud is available but unsupported commercially.
           Currently Commercial Dedicated is the only SaaS platform that
           is replicated using GitLab Geo.

          | Service Ping Attribute       | Value                       |
          |------------------------------|-----------------------------|
          | `installation_type`          | `gitlab-cloud-native-image` |
          | `gitlab_dedicated`           | `true`                      |
          | `gitlab_environment_toolkit` | `true`                      |
          | Autonomous System (ASN)      | Amazon                      |

        1. **US Public Sector** `~deployment-type:saas-dedicated-uspubsec`

           Deployed on AWS GovCloud.

           | Service Ping Attribute       | Value                       |
           |------------------------------|-----------------------------|
           | `installation_type`          | `gitlab-cloud-native-image` |
           | `gitlab_dedicated`           | `true`                      |
           | `gitlab_environment_toolkit` | `true`                      |
           | Autonomous System (ASN)      | AWS GovCloud                |

1. **Self-Managed** `~deployment-type:sm`

   The Self-Managed classification covers all GitLab instances deployed and operator by our customers.

    1. **Cloud-Provider Deployed** `~deployment-type:sm-cloud`

       By "cloud-provider", we’re specifically referring to the three cloud
       providers supported in GET: AWS, Azure and Google Cloud.
       Other cloud-providers are classified as on-premise.
       It’s important to distinguish cloud-provider-hosted environments
       from other self-managed/on-premise environments
       because these environments provide a relatively homogeneous environment,
       support managed services for PostgresSQL (RDS, CloudSQL etc),
       Redis (ElastiCache, MemoryStore, etc), Kubernetes (EKS, GKE, etc)
       and other resources such as Key Management Services (important for
       deploying secrets management tooling).

        1. **GitLab Environment Toolkit (GET) Provisioned**  `~deployment-type:sm-get`

           GitLab Environment Toolkit targets cloud environments in AWS, Google Cloud
           and Microsoft Azure. All GET deployment targets are
           included in the  [reference architectures](https://docs.gitlab.com/administration/reference_architectures/),
           providing guidelines for number of nodes, and appropriate sizing of nodes.

            1. **GET Omnibus VM-based** `~deployment-type:sm-get-omnibus`

               All services are deployed onto VM instances using Omnibus.
               Customers can choose between Omnibus-managed VMs or use
               Cloud-Managed alternatives.

               | Service Ping Attribute       | Value            |
               |------------------------------|------------------|
               | `installation_type`          | `omnibus-gitlab` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `true`           |

            1. **GET Cloud-Native** `~deployment-type:sm-get-cng`

               Any GET environment which is deployed partially (Hybrid) or fully
               using Kubernetes. At present, we're unable to distinguish
               Hybrid from Full Cloud Native using Service Ping data.

               | Service Ping Attribute       | Value            |
               |------------------------------|------------------|
               | `installation_type`          | `gitlab-cloud-native-image` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `true`           |

               1. **Hybrid** `~deployment-type:sm-get-hybrid`

                  GET will only deploy stateless services (Sidekiq, Webservice,
                  etc) in Kubernetes. Gitaly is deployed to VMs through Omnibus and
                  customers can choose between Omnibus-managed VMs for Postgres and
                  Redis, or use Cloud-Managed alternatives.

                  This deployment is dogfooded by the GitLab Tenant Deployment
                  tooling (Instrumentor).

               1. **Full Cloud-Native** `~deployment-type:sm-get-cng-full`

                  GET will deploy only stateless services (Sidekiq, Webservice,
                  etc) in Kubernetes, and Gitaly in Kubernetes. Stateful services
                  (Redis, Postgres) must be provisioned with cloud managed services.
                  `ops.gitlab.net`  dogfoods this deployment type.

        1. **Self Provisioned** `~deployment-type:sm-cloud-sp`

           These are cloud-deployed GitLab instances that do not use GET for
           provisioning cloud resources.
           Ideally, we should be encouraging these customers to migrate to GET
           for a more consistent experience, but for a variety of reasons, they
           have not.
           The primary difference between these customers and on-premise is that
           these customers
           have the option of using managed services for Postgres, Redis,
           Kubernetes, KMS etc.
           whereas on-premise customers do not.

            1. **Cloud Omnibus** `~deployment-type:sm-cloud-omnibus`

               Customer is deployed in the Cloud, using Omnibus, but not using GET.

               | Service Ping Attribute       | Value            |
               |------------------------------|------------------|
               | `installation_type`          | `omnibus-gitlab` |
               | `gitlab_dedicated`           | `false`          |
               | `gitlab_environment_toolkit` | `false`          |
               | Autonomous System (ASN)      | Recognized Cloud |

               1. **Omnibus Single-Node** `~deployment-type:sm-cloud-omnibus-single`

                  GitLab is deployed to a single node/VM-instance using Omnibus.
                  All application services are deployed via Omnibus.
                  Customer may be using some managed services, such as RDS.
                  `dev.gitlab.org` is deployed using this approach.

               1. **Omnibus Multi-Node** `~deployment-type:sm-cloud-omnibus-multi`

                  GitLab is deployed to multiple VMs using Omnibus. No mechanism is
                  provided for coordination and configuration across each node in
                  the multi-node cluster: this is left up to the customer, and could be done
                  manually, or with Chef, Ansible or SaltStack.

            1. **Kubernetes CNG Helm Charts** `~deployment-type:sm-cloud-sp-cng`

               GitLab is deployed to a customer-provisioned and managed Kubernetes
               cluster. Like  `~deployment-type:sm-get-cng`, Postgres and Redis
               are not provided and must be provisioned separately by the customer.
               Customers may or may not be using the GitLab Operator.

               | Service Ping Attribute       | Value                       |
               |------------------------------|-----------------------------|
               | `installation_type`          | `gitlab-cloud-native-image`  or `gitlab-operator-2`|
               | `gitlab_dedicated`           | `false`                     |
               | `gitlab_environment_toolkit` | `false`                     |
               | Autonomous System (ASN)      | Recognized Cloud            |

    1. **On-Premise** `~deployment-type:onprem`

       On-Premise ("on-prem") in this document refers to non-cloud-based
       deployments, _or_ deployments to clouds other than AWS, Google Cloud or Azure.
       Generally, on-premise deployments are unable to use any managed services for Postgres,
       Redis, Kubernetes, etc.
       Historically, Omnibus has provided a means of configuring these services,
       or users can bring their own.
       For some proposed new services, such as Secrets Management,
       on-premise brings unique challenges in that PKCS11-compatible hardware
       may need to be integrated due to the lack of cloud KMS.

       1. **On-Premise Omnibus** `~deployment-type:onprem-omnibus`

          Customer is not deployed in a recognized ASN Cloud, using Omnibus.

          | Service Ping Attribute       | Value        |
          |------------------------------|--------------|
          | `installation_type`          | `omnibus-gitlab` |
          | `gitlab_dedicated`           | `false`      |
          | `gitlab_environment_toolkit` | `false`      |
          | Autonomous System (ASN)      | Unrecognized |

          1. **Omnibus VM-based single-node** `~deployment-type:onprem-omnibus-single`

             Customer can bring their own Postgres, Redis, but in many cases,
             these nodes operate with local Omnibus-managed copies of these services.

          1. **Omnibus VM-based multi-node** `~deployment-type:onprem-omnibus-multi`

             Customer must build their own configuration tooling to deploy GitLab (e.g.
             Ansible, Chef, Saltstack, etc). We encourage customers to follow
             the [reference architectures](https://docs.gitlab.com/administration/reference_architectures/)
             to choose the number of nodes and sizes of nodes.

       1. **Kubernetes CNG Helm Charts** `~deployment-type:onprem-cng`

          Customer provides their own Kubernetes cluster, own Redis, and own Postgres.
          Gitaly-on-Kubernetes support is immature, but available.

          | Service Ping Attribute       | Value                           |
          |------------------------------|---------------------------------|
          | `installation_type`          | `gitlab-cloud-native-image` or `gitlab-operator-2` |
          | `gitlab_dedicated`           | `false`                         |
          | `gitlab_environment_toolkit` | `false`                         |
          | Autonomous System (ASN)      | Unrecognized                    |

## Resources

| Description        | Location            |
|--------------------|---------------------|
| Release documentation | [Link](https://gitlab.com/gitlab-org/release/docs) |
| Release related tasks issue tracker | [Link](https://gitlab.com/gitlab-org/release/tasks/) |
| Delivery team issue tracker | [Link](https://gitlab.com/gitlab-com/gl-infra/delivery/issues) |
| Release manager schedule | [Link](https://about.gitlab.com/community/release-managers/) |
| Deployment process | [Link](/handbook/engineering/deployments-and-releases/deployments/) |
| Release process | [Link](/handbook/engineering/releases/) |
| Maintenance Policy | [Link](https://docs.gitlab.com/ee/policy/maintenance.html) |
