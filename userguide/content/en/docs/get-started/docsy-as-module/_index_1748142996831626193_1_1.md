---
title: Monitoring of GitLab.com
---

## GitLab.com Service Availability

The calculation methodology for GitLab.com Service Availability definition is in [the monitoring policy](/handbook/engineering/gitlab-com/policies/monitoring/).

More details on definitions of outage, and degradation are on the [incident-management page](/handbook/engineering/infrastructure/incident-management/#definition-of-outage-vs-degraded-vs-disruption)

## Historical Service Availability

| **Year Month** | **Availability** | **Comments** |
| ---- | ----------- | ---- |
| 2025 April | 99.97% |  |
| 2025 March | 100.00% |  |
| 2025 February | 99.99% |  |
| 2025 January | 99.98% |  |
| 2024 December | 99.95% |  |
| 2024 November | 100.00% |  |
| 2024 October | 99.66% |  |
| 2024 September | 99.85% |  |
| 2024 August | 100.00% |  |
| 2024 July | 99.99% |  |
| 2024 June | 99.99% |  |
| 2024 May | 100.00% |  |
| 2024 April | 99.96% | |
| 2024 March | 100% | |
| 2024 February | 99.86% | |
| 2024 January | 100% | |
| 2023 December | 99.99% |  |
| 2023 November | 99.99% |  |
| 2023 October | 99.89 | Oct 30 [Sev 1](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054) |
| 2023 September | 99.98% |  |
| 2023 August | 100% |  |
| 2023 July | 99.78% | Two severity 1 incidents contributed to ~94% of service disruption.  [2023-07-07](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/15997), [2023-07-14](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16042) |
| 2023 June | 100% |  |
| 2023 May | 99.92% |  |
| 2023 April | 99.98% |  |
| 2023 March | 99.99% |  |
| 2023 February | 99.98% |  |
| 2023 January | 99.80% |  |
| 2022 December | 100% |  |
| 2022 November | 99.86% |  |
| 2022 October | 100% |  |
| 2022 September | 99.98% |  |
| 2022 August | 99.92% |  |
| 2022 July | 99.95% |  |
| 2022 June | 99.96% |  |
| 2022 May | 99.99% |  |
| 2022 April | 99.98% |  |
| 2022 March | 99.91% |  |
| 2022 February | 99.87% |  |
| 2022 January | 99.95% |  |
| 2021 December | 99.96% |  |
| 2021 November | 99.71% |  |
| 2021 October | 99.98% |  |
| 2021 September | 99.85% |  |
| 2021 August | 99.86% |  |
| 2021 July | 99.78% |  |
| 2021 June | 99.84% |  |
| 2021 May | 99.85% | does not include manual adjustment for [PostgreSQL 12 Upgrade](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/4037) |
| 2021 April | 99.98% | |
| 2021 March | 99.34% | |
| 2021 February | 99.87% | |
| 2021 January | 99.88% | |
| 2020 December | 99.96% | |
| 2020 November | 99.90% | |
| 2020 October | 99.74% | |
| 2020 September | 99.95% | |
| 2020 August | 99.87% | |
| 2020 July | 99.81% | |
| 2020 June | 99.56% | |
| 2020 May | 99.58% | |

## Related Pages

* [Production Architecture](/handbook/engineering/infrastructure/production/architecture/)
* [GitLab.com Settings](https://docs.gitlab.com/ee/user/gitlab_com/)
* [GitLab Performance Monitoring Documentation](https://docs.gitlab.com/ee/administration/monitoring/performance/#gitlab-performance-monitoring)
* [Performance of the Application](/handbook/engineering/performance/)

## Related Videos

These videos provide examples of how to quickly identify failures, defects, and problems related to servers, networks, databases, security, and performance.

* [Monitoring Tools playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e) _(requires GitLab Unfiltered YouTube account access)_
* [Visualization Tools playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj) _(requires GitLab Unfiltered YouTube account access)_

## Monitoring

### Pingdom Statistics

We use our apdex based measurements to report official availability (see above). However, we also have some public pingdom tests for a representative view of overall performance of GitLab.com. These are available at [https://stats.pingdom.com](https://stats.pingdom.com/81vpf8jyr1h9). Specifically, this has the availability and latency of reaching

* a GitLab.com issue. For reference, it is the [first gitlab-ce issue](https://gitlab.com/gitlab-org/gitlab-ce/issues/1).
* [GitLab.com](https://gitlab.com/) "plain and simple" called the [GitLab public check](https://stats.pingdom.com/81vpf8jyr1h9/4932705/history).

#### Monitoring Infrastructure

We use Grafana [Mimir](https://grafana.com/oss/mimir/) to ingest and query metrics. Mimir is an open-source, distributed time series database that extends Prometheus. You can read more about its implementation in our [Runbook Docs](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/mimir?ref_type=heads#architecture).

### Monitoring Dashboards

Metrics can be viewed in [Grafana](https://dashboards.gitlab.net/). The Grafana [Explore](https://dashboards.gitlab.net/explore) dashboard allows querying of all data in Mimir using PromQL.

* Access requires a `@gitlab.com` email address through Google SSO
* Highly Available setup
* Alerting feeds from this setup
* Separated from the public for compliance, security and availability reasons

#### Adding Dashboards

To learn how to set up a new graph or dashboard using Grafana, take a look at the following resources:

* [Guide to setting up Grafana dashboards by Grafana](https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/)
* [YouTube video showing how to set up a dashboard](https://www.youtube.com/watch?v=sKNZMtoSHN4&index=7&list=PLDGkOdUX1Ujo3wHw9-z5Vo12YLqXRjzg2)
* The [Grafana repo](https://gitlab.com/gitlab-org/grafana-dashboards) where we keep an archive of InfluxDB dashboards created in Grafana. Use these to see details in the file structure, but note that the repo is truly an archive (nothing populates _from_ it) and can be out of date.

Need access to add a dashboard? Ask any team lead within the [infrastructure team](/handbook/company/team/?department=infrastructure-department).

#### Dashboards for stage groups

We have a set of monitoring dashboards designed for [each stage group](/handbook/product/categories/#devops-stages). These dashboards are designed to give an insight, to everyone working in a feature category, into how their code operates at GitLab.com scale. They are grouped per stage group to show the impact of feature/code changes, deployments, and feature-flag toggles.

1. [List of dashboards for each stage group (GitLab team members only)](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups).
1. [Guide to getting started with dashboards for stage groups](https://docs.gitlab.com/ee/development/stage_group_observability/dashboards/)
1. [YouTube video introducing the stage group dashboards](https://youtu.be/xB3gHlKCZpQ)

The dashboards for stage groups are at a very early stage. All contributions are welcome. If you have any questions or suggestions, please submit an issue in the [Scalability Team issues tracker](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/new).

### Selection of Useful Dashboards from the Monitoring

#### Blackbox Monitoring

* [GitLab Web Status](https://dashboards.gitlab.net/d/pb3fvC7mk/gitlab-web-status): front end perspective of GitLab. Useful to understand how GitLab.com looks from the user perspective. Use this graph to quickly troubleshoot what part of GitLab is slow.
* [GitLab Git Status](https://dashboards.gitlab.net/dashboard/db/gitlab-git-status): front end perspective of GitLab ssh access.

#### Private Whitebox Monitor

* [Host Stats](https://dashboards.gitlab.net/dashboard/db/host-stats): useful to dive deep into a specific host to understand what is going on with it. Select a host from the dropdown on the top.
* [Business Stats](https://dashboards.gitlab.net/dashboard/db/business-stats): shows many pushes, new repos and CI builds.
* [Daily overview](https://dashboards.gitlab.net/dashboard/db/daily-overview): shows endpoints with amount of calls and performance metrics. Useful to understand what is slow generally.

## Logs

Network, System, and Application logs are processed, stored, and searched using
the [ELK stack](https://www.elastic.co/platform). We use a [managed Elasticsearch cluster on GCP](https://www.elastic.co/partners/google-cloud) and as such our only
interface to this is through APIs, Kibana and the elastic.co web UI.  For
monitoring system performance and metrics, Elastic's x-pack monitoring metrics are used. They are sent to a dedicated monitoring cluster. Long-term we intend to switch to Prometheus and Grafana as the preferred
interface. As it is managed by Elastic they run the VMs and we do not have
access to them. However, for investigating errors and incidents, raw logs are
available via [Kibana](https://log.gprd.gitlab.net).
Staging logs are available via a separate [Kibana](https://nonprod-log.gitlab.net/) instance.

Kibana dashboards are used to monitor application activity, spam events, transient errors, system and network authentication
events, security events, etc. Commonly used dashboards are the Abuse, SSH, and Rack Attack dashboards.

One can view how we log our infrastructure as outlined by our
[runbook](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/logging.md).

The policy related to log management can be found in [the monitoring policy].

### Adding dashboards

To learn how to create Kibana dashboards use the following resources:

* [Kibana Dashboard tutorial from Elastic.com](https://www.elastic.co/guide/en/kibana/current/index.html)
* [Building a dashboard](https://www.elastic.co/guide/en/kibana/current/dashboard.html)
* [Using TimeLion for time series visualization](https://www.elastic.co/guide/en/kibana/current/legacy-editors.html#timelion)

## GitLab Profiling

### Go services

[Stackdriver Continuous Go Profiling](https://cloud.google.com/profiler) can be used to have a better
understanding of how our Go services perform and consume resources. _(requires membership of the Google Workspace `stackdriver-profiler-sg` group)_

It provides a simple UI on GCP with CPU and Memory usage data for:

* [Gitaly (and Praefect)](https://gitlab.com/gitlab-org/gitaly)
* [Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse)
* [GitLab Pages](https://gitlab.com/gitlab-org/gitlab-pages)
* [GitLab Container Registry](https://gitlab.com/gitlab-org/container-registry)

For more information, there's a [quick video tutorial](https://www.youtube.com/watch?v=q3uudK1lU8g) available.

We also did a series of deep dives by pairing with the development teams for each project in [this issue](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/479), this resulted in the following videos:

* [Gitaly](https://youtu.be/3TSO_evSi5Q)
* [GitLab Pages](https://youtu.be/K7dYSnO0gns)
* [GitLab Registry](https://youtu.be/pZZEvysCyrg)

## Instrumenting Ruby to Monitor Performance

Blocks of Ruby code can be "instrumented" to measure performance.

* [Documentation of instrumentation](https://docs.gitlab.com/ee/api/usage_data.html) with more detail on [how to implement this](https://docs.gitlab.com/ee/operations/product_analytics/instrumentation/)
* An example of how this is used for GitLab itself, can be found in this [initializer](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/initializers/zz_metrics.rb).

## Other Tools

### Sentry

Error tracking service.

* [Documentation](https://docs.gitlab.com/ee/operations/error_tracking.html)
* [How to investigate a 500 error - Sentry / Kibana Demo](https://youtu.be/o02t3V3vHMs)
* [Diagnose Errors on GitLab.com - Searching Sentry](/handbook/support/workflows/500_errors/#searching-sentry)

#### Setting sentry alerts for your group

Creating alert rules allows groups to monitor their features and help catch issues proactively. This helps in getting the issues fixed before they breach the error budget SLO which in turn helps in keeping the GitLab.com Service Availability high.

Steps for creating the alerts:

1. Visit Sentry's [alert rules dashboard](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules).
1. Click on "Create Alert" button at the top right.
1. Set the required conditions as per your group's feature categories.
1. Create a new public slack channel with the following naming convention "g_group_name_alerts". Eg: [#g_govern_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
1. Select this channel for sending the alert notifications.
1. Monitor the group for any new alerts and work towards resolving those.

### Sitespeed.io

Tool that helps you monitor, analyze and optimize your website speed and performance.

* [Documentation](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html#overview)
* [GitLab.com Sitespeed Measurement Repository](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/)
* [How we used sitespeed.io to measure Frontend performance](https://www.youtube.com/watch?v=6xo01hzW-f4)
