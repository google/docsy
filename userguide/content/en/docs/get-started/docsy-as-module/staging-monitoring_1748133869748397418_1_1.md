---
title: "Staging Monitoring"
description: "How Staging is monitored and how traffic is generated"
---

[Staging environment](../../../engineering/infrastructure/environments/#staging) has the same [service-level monitoring rules as Production](../):

> A service is considered available when:
>
> 1. The [Apdex score](https://en.wikipedia.org/wiki/Apdex) of the service is _above_ its Service Level Objective ([SLO](https://en.wikipedia.org/wiki/Service-level_objective)),
> 1. _AND_ The [Error rate](https://en.wikipedia.org/wiki/Bit_error_rate) is _below_ its Service Level Objective ([SLO](https://en.wikipedia.org/wiki/Service-level_objective)).

The goal of Staging Monitoring is to have SLO alerts that can be used to halt an ongoing deployment. This would allow failing fast and catching bad deployments before they reach Production. To enable this we need to ensure that the environment has enough base-load traffic and the signal of an SLO failure is strong.

Staging environment doesn't have as much user activity as Production since it doesn't have the same amount of real users. The environment is mostly used by test automation like [GitLab QA pipelines](/handbook/engineering/testing/end-to-end-pipeline-monitoring/) and engineers who may test their code manually. These activities don't generate enough traffic so a custom load [emulation tool](#load-emulation) was designed to create artificial traffic to compensate for the lack of signal from real users.

## Load emulation

[CMBR](https://gitlab.com/gitlab-com/gl-infra/cmbr/) is a web-crawler that generates traffic on a target GitLab instance. It can generate traffic for these services: Web, API, Git, Registry and Pages.

Known limitations:

- Crawler only runs `GET` requests and doesn't create data. However, this problem is not as critical as existing E2E tests that are being run against Staging cover GitLab basic functionality.
- The load is synthetic and doesn't cover all use cases, especially the edge cases that rely on specific data.
- Existing Staging test data is different from Production.
- Rate limits such as IP or user rate limits may affect traffic generation.
- Staging environment has low specs in comparison to Production. Load needs to be tuned so that it doesn't break the environment.
- Git traffic is HTTP-only [at the moment](#ongoing-work).

### Crawler configuration on Staging

CMBR generates traffic for Staging using [scheduled pipelines](https://staging.gitlab.com/gitlab-com/gl-infra/cmbr-staging-load-generator/-/pipeline_schedules) for `gstg` and `cny-gstg`. The tool uses a dedicated user with auditor role to generate load and bypass rate limits (`Credentials for Staging Crawler` stored in 1Password `Engineering` vault).

Throughput is controlled by environment variables and tuned differently for each service. It's worth noting that if load needs to be increased, Staging environment's performance should be considered and verified that it doesn't affect existing [GitLab QA pipelines](/handbook/engineering/testing/end-to-end-pipeline-monitoring/). Otherwise, it may bring intermittent errors in the test runs and affect the deployment.

## Staging Service Monitoring

[Alertmanager](https://gitlab.com/gitlab-com/runbooks/-/tree/master/alertmanager) sends SLO alerts to [`#feed_alerts_staging`](https://gitlab.slack.com/archives/C029L5NMHH8) Slack channel if the Apdex score or Error rate is violated for specific service. Then Infrastructure team investigates the alert further.

To view specific service health the below dashboards can be used:

- [GitLab Web overview](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab API overview](https://dashboards.gitlab.net/d/api-main/api-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Git overview](https://dashboards.gitlab.net/d/git-main/git-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Registry overview](https://dashboards.gitlab.net/d/registry-main/registry-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)
- [GitLab Pages overview](https://dashboards.gitlab.net/d/web-pages-main/web-pages-overview?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gstg&var-stage=main)

More detailed information about service monitoring can be found on [Monitoring of GitLab.com](../) page.

If you have any questions about the current setup, please reach out to [`#f_staging_service_level_monitoring`](https://gitlab.slack.com/archives/C02TWDXDPPT) Slack channel.

## Ongoing Work

- Improving the quality of Staging SLO alerts - [epic#668](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/668)
- Halt deployment to Production if Staging SLI degrades - [epic#771](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/771)
- Generate SSH traffic using CMBR - [issue#5](https://gitlab.com/gitlab-com/gl-infra/cmbr/-/issues/5)
