---
title: "Getting Assistance on Infrastructure Platforms"
description: "How to get assistance for problems on Production Platforms"
---

## GitLab.com

If you need to report an incident - follow the instructions on the [Report An Incident page](./incident-management/#reporting-an-incident).

If you are looking for help, and you know what service you need help with - find the owner in the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). If they are listed below, then please create a Request For Help issue. If they aren't listed, please contact the owners through the Slack channel listed in the tech stack file.

If you need help, but you aren't sure who to ask, look through the teams below to see which team is the best fit for your question.

If you have read this whole page and are unsure how to proceed, please ask in the [#saas-platforms-help](https://gitlab.enterprise.slack.com/archives/C07DU5Z7V6V) channel. You will be redirected to the appropriate team for help.

We aim to respond to your request within 24 hours. If you raise your request on a Friday, it may only be responded to on Monday.

### Production Engineering

#### Teleport Requests

Requests for access via teleport should go exclusively in the #teleport-requests channel. This type of request is responded to with best effort, but without a formal SLA. Please avoid using any other channel to escalate these requests, and do not directly ping the sre-oncall as they will not respond to these requests.

#### Observability

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Observability.md)

We can help with:

1. Observability
1. Logging
1. Metrics
1. Grafana / Kibana / Mimir / Prometheus
1. Error Budgets
1. Capacity Planning

Our Slack channel is: [#g_observability](https://gitlab.enterprise.slack.com/archives/C065RLJB8HK)

#### Ops

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Ops.md)

We can help with:

1. Disaster Recovery
2. Incident Management
3. System and OS level patching

Our Slack channel is: [#g_infra_ops](https://gitlab.enterprise.slack.com/archives/C04MH2L07JS)

#### Runway

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Runway.md)

We can help with:

1. Runway

Our Slack channel is: [fg_runway](https://gitlab.enterprise.slack.com/archives/C05G970PHSA)

#### Foundations

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Foundations.md)

We can help with:

1. Networking and traffic management (CDN / VPCs / DNS / Load Balancing / Service Discovery)
1. Rate Limiting: create an issue with the [rate limiting request template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-rate-limiting)
1. Cloudflare: create an issue with the [Cloudflare Troubleshooting template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=Cloudflare%20Troubleshooting)
1. Kubernetes (K8s)
1. Config
1. Secrets Management with Vault
1. ops.gitlab.net and ops runners

Our Slack channel is: [#g_foundations](https://gitlab.enterprise.slack.com/archives/C0313V3L5T6)

#### Cloud Connector

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-CloudConnector.md)

We can help with:

1. Cloud Connector
1. GitLab Duo Healthcheck problems

Our Slack channel is: [#g_cloud_connector](https://gitlab.enterprise.slack.com/archives/CGN8BUCKC)

### Software Delivery

#### Delivery

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Delivery.md))

-We can help with:

1. Deployments to GitLab.com
1. Post Deployment Migrations (in relation to deployments)
1. Auto-Deploy
1. Hot Patching Process
1. Mean Time To Production
1. Release Management
1. Release Processes
1. Maintenance Policy
1. Patch Releases
1. Deployments
1. Monthly and Patch Releases
1. Backports

Our Slack channel is: [#g_delivery](https://gitlab.enterprise.slack.com/archives/CCFV016SV)

### Data Access

#### Durability

Open a request for help in the [Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Durability.md))

We can help with:

1. Sidekiq
1. Redis
1. Gitaly Infrastructure
1. Backup / Restore
1. Disaster Recovery

Our Slack channel is: [#g_durability](https://gitlab.enterprise.slack.com/archives/C07U8G0LHEH)

## Dedicated

In order to deal with RFHs as efficiently as possible we have a number of issue templates. Please use the appropriate issue template for your request.

1. For a Private Link Config Request raise an issue in the Request For Help Tracker using the [Private Link Request template](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedPrivateLinkRequest)
1. For a SAML Config Request raise an issue in the Request For Help Tracker using the [SAML Config Request template](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedSAMLConfigRequest)
1. For a Switchboard Request for Help raise an issue in the Request For Help Tracker using the standard [Dedicated Request template](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedRequest)
1. For a standard request for help raise an issue in the Request For Help Tracker using the [Switchboard Request template](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard)

We can help with:

1. Questions and support for GitLab Dedicated

Our Slack channel is: [#f_gitlab_dedicated](https://gitlab.enterprise.slack.com/archives/C01S0QNSYJ2)
