---
title: "Delivery Team Metrics"
description: "The Delivery Team enables GitLab Engineering to deliver features in a safe, scalable and efficient fashion to both GitLab.com and self-managed customers."
---

## Metrics

[Delivery team](../_index.md) uses Mean Time To Production (MTTP) as an indicator of our speed capabilities
to deploy application changes into production.

- [Performance Indicator](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-production-mttp)
- **Target: 12 hours.**

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/InfrastructureKPIs/MTTP" >}}
{{< /tableau >}}

MTTP measures the elapsed time (in hours) from merging a change in gitlab-org/gitlab project master
branch, to deploying that change to GitLab.com.

## MTTP breakdown

MTTP is conformed by:

- Time to inclusion: The merge request is merged and waiting to be included in an auto-deploy branch.
- Time to package: The package to be deployed is being built.
- Time to staging: Time it takes for the package to be deployed to staging and tested.
- Time to canary: Time it takes for the package to be deployed to canary and tested.
- Time to production: Time it takes for the package to be deployed to production.

To measure the MTTP subcomponents, the following metrics are used:

- [Deployment SLO](#deployment-slo)

These allows to decide whether we need to focus on speed or safety would have the
biggest impact on further reducing MTTP.

### Deployment SLO

- **Target: 8 hours.**
- [Dashboard](https://dashboards.gitlab.net/d/delivery-deployment_slo/delivery-deployment-slo?orgId=1&refresh=5m)

Deployment SLO measures the deployment frequency and duration by tracking
the percentage of deployment pipelines that complete within the target duration.
Deployment duration is measured as the elapsed time between a starting on staging canary (`gstg-cny`)
through the completion of the deployment on Production (`gprd`).
Visit the [Releases page](/handbook/engineering/releases/) for an
end-to-end overview of the various environments and [deployment process](/handbook/engineering/releases/#self-managed-overview).

![Deployment SLO apdex](https://gitlab.com/api/v4/projects/430285/jobs/artifacts/master/raw/deployment-slo-apdex.png?job=refresh-delivery-slo-apdex-graph)

Next: Include [Deployment SLO metric as part of our release process](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/533)

### Release Manager workload metrics

The [Release Manager workload metrics - internal link](https://docs.google.com/spreadsheets/d/1xENgrQwAQkA3ImtxsnqgQYEGxxevbUeNhXLFRUUKayk/edit#gid=1820673269) track the time needed for Release Management tasks.

Each process is broken down into key parts to help identify where the majority of the effort is spent. Overall times are tracked and an average allows changes over time to been observed.

More details about what is being measured, and how, can be found in [the release docs](https://gitlab.com/gitlab-org/release/docs/-/blob/master/metrics/release_manager_workload.md).
