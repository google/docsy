---
title: "GitLab Secret Detection ADR 006: Unified SD Support for all GitLab Environments"
---

## Context

We need to take steps in making Secret Detection features scalable and consistently accessible across GitLab.com, Self-Managed (including air-gapped) and Dedicated environments.

There are two problems that we should address, preferably both at the same time to avoid the expensive redesigns.
      
1. The standalone Secret Detection Service (deployed via Runway) is currently not accessible by GitLab Dedicated and Self-Managed(SM) environments (because Runway [isn't supporting](https://docs.runway.gitlab.com/reference/blueprints/runway-satellite-services-vision/) in those environments yet). [GitLab Cloud Connector](https://docs.gitlab.com/development/cloud_connector/) was [considered](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472) for a brief moment but discarded due to [certain limitations](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472#note_2418504073).
     
2. The current design of Rails directly invoking the Secret Scan engine(Gem/Secret Detection Service(SDS)) supports only blocking scan requests. However, it is not scalable to do run blocking scans on large objects like Job Artifacts or Job Logs as it affects the throughput of the Scan engine. We need to adopt a non-blocking approach where the scans are run in the background and provide results eventually, similar to how we generate and [ingest](https://docs.gitlab.com/development/sec/security_report_ingestion_overview/#vulnerability-creation-from-security-reports) [Security Reports](https://docs.gitlab.com/development/integrations/secure/#report).

## Proposal

Multiple proposals were [discussed](https://gitlab.com/gitlab-org/gitlab/-/work_items/525472#note_2418504073) for the above problems, this ADR drafts a combined approach considering relevant proposals.

The proposal suggests addressing the first problem by running SD scans within an Embedded SD module (Gem/Binary) for Self-Managed (including offline) and Dedicated environments. This is a default setup that should be capable enough to handle the traffic for a single-tenant environment. As an alternative, we allow the customers to self-host Secret Detection Service in their infrastructure when the Embedded SD module's throughput isn't meeting their needs. When a self-hosted service URL is provided, we will prefer invoking such a service over the Embedded SD module.

The second problem is addressed by introducing an asynchronous way of invoking secret detection scans using the existing Sidekiq infrastructure.

### Support Matrix

We will continue using SDS for GitLab.com and the embedded approach (i.e Gem/Binary) for Self-Managed and Dedicated customers as a default setup, however, we will allow customers to self-host SDS in case the embedded approach is not scalable enough for their use case.

We will leverage the existing background processing tool (Sidekiq) to run non-blocking SD scans in the background. The scan engine remains the same as the one used for blocking approach.

| Environment | Blocking scan requests | Non-blocking scan requests |
|-------------|------------------------|----------------------------|
| GitLab.com | Runway-hosted SDS | Sidekiq + Runway-hosted |
| Self-Managed/Dedicated (default) | Embedded(Gem/Binary) | Sidekiq + Embedded |
| Self-Managed/Dedicated (custom) | Self-hosted SDS | Sidekiq + Self-hosted SDS |

### Provision for Self-Hosting Service

We could accomplish this in two ways:

1. Share the SDS Docker image with the customers. Let them self-deploy it in their own infrastructure and update the deployed SDS's host URL in GitLab Application Settings. If the URL is defined, we will attempt calling the host URL over embedded SD module. [Secret Revocation Service follows this approach](https://gitlab.com/gitlab-org/gitlab/-/blob/a19707e9f4e137ef897a8ddb4361fa2894917f80/doc/user/application_security/secret_detection/post_processing.md#configure-gitlab-to-interface-with-revocationapi).

2. Share the Helm Chart for deploying SDS. This will reduce operational burden of managing the service for the customer. However, this approach is suitable only for the customers running their infrastructure in Kubernetes.

First approach seems simple enough to get started with, and we could eventually provide such a Helm Chart if there is an ask from the customer side.

### Service Authentication and Authorization

To ensure the authenticity of requests to the service (primarily applicable to Self-hosted), we could adopt Auth framework from [Cloud Connector](https://docs.gitlab.com/development/cloud_connector/).

_NOTE: This decision still requires evaluation in terms of feasibility._
