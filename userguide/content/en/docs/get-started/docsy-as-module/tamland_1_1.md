---
aliases: /handbook/engineering/infrastructure/team/scalability/observability/tamland.html

title: "Tamland: Development"
---


## Tamland: Saturation forecasting

[Tamland](https://gitlab.com/gitlab-com/gl-infra/tamland) is a saturation forecasting tool we use for capacity planning purposes. The Scalability:Observability team develops and releases Tamland.

This page details how we organize development efforts around Tamland.

## GitLab Projects and Capacity Planning Trackers

The main development project for Tamland is [gitlab.com/gitlab-com/gl-infra/tamland](https://gitlab.com/gitlab-com/gl-infra/tamland).

Feature requests, improvements and bug reports can be filed in [Tamland's issue tracker](https://gitlab.com/gitlab-com/gl-infra/tamland/-/issues).

Aside from development, we operate Tamland forecasting and reporting components through a number of rather operational projects. Those are geared towards their respective environment's needs:

1. [`gitlab-com`](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com) - operates forecasting and reporting for GitLab.com capacity planning purposes
2. [`gitlab-dedicated`](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated) - orchestrates reporting needs for GitLab Dedicated tenant environments and their forecasting data

For each of those projects, we use an identical fork as a staging environment for said project.
This comes with an issue tracker and a Pages deployment, just as the regular project and can be used to test changes in advance.
This is particularly helpful when changing forecasting methodology, as it helps to understand the impact across the board without causing noise.

1. [`tamland-staging`](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/tamland-staging) - based on GitLab.com saturation data, this is a staging environment for GitLab.com capacity planning
1. [`gitlab-dedicated-staging`](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-dedicated-staging) - staging environment for GitLab Dedicated capacity planning

Refer to the linked projects' README information for more detail on the configuration details and how components interact.

## Using a SSH tunnel to get to Prometheus

For local development purposes, we need to establish a connection to prometheus in order to retrieve saturation data.
We can do this through setting up a temporary SSH tunnel as described below.

To set up a tunnel to a Thanos Query instance:

```bash
export user=$(whoami) # your ssh username
ssh -o 'StrictHostKeyChecking no' -o 'ProxyCommand ssh ${user}@lb-bastion.gstg.gitlab.com -W %h:%p' -L 10902:thanos-query-frontend-internal.ops.gke.gitlab.net:9090 ${user}@lb-bastion.gstg.gitlab.com -Nv
```

This provides a tunnel to allow access to Thanos at `http://localhost:10902`, which Tamland will use by default.
If you want to use a different URL, set `PROMETHEUS_QUERY_URL`.
Please request access to bastion host for the `gstg` environment if you don't have it yet (chef role: `gstg-bastion-only`).
You can use [this issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/23268) as a reference.
