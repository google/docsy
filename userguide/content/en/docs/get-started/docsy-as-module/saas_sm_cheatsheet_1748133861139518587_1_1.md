---
title: SaaS, Self-Managed and Dedicated Troubleshooting tables
category: Support Team
description: "Troubleshooting tips for various problems on each GitLab platform type"
---

## Overview

The purpose of this page is to provide a single reference point that
Support Engineers can use when they need troubleshooting tips for various
problems on any GitLab platform. The goal is to make it easier for each
Support Engineer to resolve support tickets regardless of the GitLab
platform involved.

## How to use this page

Find the topic of interest to you, and follow the instructions there in
the table row that matches the appropriate GitLab platform: Self Managed,
SaaS, or Dedicated.

### Logs and Performance

|      |       |
|:----:| ----- |
|Self-managed| [GitlabSOS](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos) is a great way to gather all logs from a customer instance in order to investigate further on potential issues.<br/>Similar to GitLabSOS, use [KubeSOS](https://gitlab.com/gitlab-com/support/toolbox/kubesos) if your customer uses Kubernetes instead of source or omnibus installations.<br/>[Fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) is a great way to compare performance analytics from and between GitLab Logs.<br/>[Green-hat](https://gitlab.com/gitlab-com/support/toolbox/greenhat)  is an experimental SOS and log parser. [GitLab Log Analysis](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis): This experimental project sets up an environment for analyzing GitLab logs using Kibana, Filebeat, Elasticsearch, and Logstash. Upon startup, dashboards are automatically imported and ready for log analysis.|
|DotCom|[Kibana](https://log.gprd.gitlab.net/) provides visualization capabilities on top of the content indexed on an Elasticsearch cluster to find Web based queries. Check the [tips and tricks](/handbook/support/workflows/kibana/#tips-and-tricks) to understand what kind of information you can pull using this tool.<br/>[Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/) helps investigate errors across different applications or environments, for example Ruby code related errors. Search on Sentry usually is done using a Correlation ID.<br/>[Grafana](/handbook/engineering/monitoring/#main-monitoring-dashboards) is used for infrastructure metrics collection for GitLab.com |
|Dedicated|The [GitLab Dedicated Logs](/handbook/support/workflows/dedicated_logs/) workflow has information about using Opensearch to view logs. The [Observability and Monitoring](/handbook/support/workflows/dedicated_instance_health/) workflow has information about using Grafana to diagnose performance problems.|

### Configuration

|      |       |
|:----:| ----- |
|Self-managed| Customers manage the configuration for their self-managed instances. Depending on the deployment method, the configuration will be in `/etc/gitlab/gitlab.rb`, `docker-compose.yml`, `values.yaml` or similar.|
|DotCom| [The GitLab.com configurations](https://docs.gitlab.com/user/gitlab_com/) is managed by the infrastructure team and cannot be modified to meet individual customer's needs.|
|Dedicated|[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) customers can configure their tenants via [Switchboard](https://about.gitlab.com/direction/saas-platforms/switchboard/) and via the **Admin Area**. GitLab Support team members can get access [Switchboard](dedicated_switchboard.md) through Okta by [following these steps](/handbook/support/workflows/dedicated_switchboard/#accessing-switchboard). Some [configuration changes](/handbook/support/workflows/dedicated/#configuration-changes) must be done via a [Request for Help issue](/handbook/support/workflows/how-to-get-help/#how-to-use-gitlabcom-to-formally-request-help-from-the-gitlab-development-team). |

### Architecture

|      |       |
|:----:| ----- |
|Self-managed| Check out the [reference architectures](https://docs.gitlab.com/administration/reference_architectures/) we recommend to our customers and their different variations|
|DotCom| [The GitLab.com architecture](/handbook/engineering/infrastructure/production/architecture/#infra-current-archi-diagram) is managed by the infrastructure team and cannot be modified to meet individual customer's needs.|
|Dedicated|[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) is a fully isolated, single-tenant, SaaS service managed through AWS by the [GitLab Dedicated Group](/handbook/engineering/infrastructure/team/gitlab-dedicated). GitLab Dedicated tenants [use](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#availability-and-scalability) the GitLab [Cloud Native Hybrid reference architectures](https://docs.gitlab.com/administration/reference_architectures/#cloud-native-hybrid) with high availability enabled. See the list of [changes from the reference architectures](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/architecture/Architecture/#changes-from-reference-architectures).|

### Auth

|      |       |
|:----:| ----- |
|Self-managed| Self Managed Administrators will need to [configure the desired auth provider](https://docs.gitlab.com/administration/auth/) directly in their gitlab.rb. Any configuration change on this file will require that you run `gitlab-ctl reconfigure` to successfully apply changes.|
|DotCom| Customers will [Configure SAML SSO for Groups](https://docs.gitlab.com/user/group/saml_sso/) directly, by going to **Group > Settings > SAML SSO**.|
|Dedicated| SAML [is supported](https://docs.gitlab.com/administration/dedicated/configure_instance/saml/). Start the investigation by [searching the logs](/handbook/support/workflows/dedicated_logs). To escalate, [raise an issue with the GitLab Dedicated team](/handbook/support/workflows/dedicated/#filing-issues).|

### Geo

|      |       |
|:----:| ----- |
|Self-managed| Geo is [configured in the gitlab.rb](https://docs.gitlab.com/administration/geo/setup/) file. It requires a premium or higher subscription. **The steps must be followed in the order in which they appear.**|
|DotCom| *Geo is not available for customers to configure on `gitlab.com`.*|
|Dedicated| GitLab Geo is supported with [some limitations](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#operational-features). [Raise issue with Dedicated team](/handbook/support/workflows/dedicated/#filing-issues)|

### Admin Area

|      |       |
|:----:| ----- |
|Self-managed| Administrators of self-managed systems will have access to their instance admin.|
|DotCom| Only GitLab Team Members can make use of administrative tasks on GitLab.com, therefore access is not granted to customers.|
|Dedicated| Customers have instance admins that can access the Admin Area. There is no [GitLab Rails console](https://docs.gitlab.com/administration/operations/rails_console/) access for customers.|

Use the [Admin Area docs](https://docs.gitlab.com/administration/admin_area/#gitlab-admin-area) for reference.

### Gitaly

|      |       |
|:----:| ----- |
|Self-managed| [Gitaly](https://docs.gitlab.com/administration/gitaly/) configuration is managed through the **gitlab.rb** file. A customer can configure stand-alone [Gitaly](https://docs.gitlab.com/administration/gitaly/configure_gitaly/) or leverage [Gitaly Cluster](https://docs.gitlab.com/administration/gitaly/praefect/) to fulfill its git requirements. Be sure you know which of these types of Gitaly configuration a self-managed customer is using before you begin troubleshooting.|
|DotCom| Gitaly is managed by the infrastructure team of GitLab, so customers do not have access to it.|
|Dedicated| Gitaly is managed by the Environment Automation SREs. [Open an RFH](/handbook/support/workflows/dedicated/#filing-issues) if needed. |

### Subscription

|      |       |
|:----:| ----- |
|Dedicated|GitLab Dedicated customers [get **Ultimate**](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#application) but please note that [some features are not available in GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#unavailable-features).|
|DotCom| For folks who make use of GitLab.com, the [available plans](https://about.gitlab.com/pricing/) include **Free**, **Premium** and **Ultimate**.|
|Self-managed| For self-managed instances, folks can use either GitLab CE (Community Edition) or GitLab EE (Enterprise Edition) without a license. GitLab EE can be [activated](https://docs.gitlab.com/administration/license/) with a **Premium** or an **Ultimate** license.|

Note that [GitLab Duo add-ons](https://docs.gitlab.com/subscriptions/subscription-add-ons/) are handled separately from the subscription.

### Runners

|      |       |
|:----:| ----- |
|Self-managed| Self-managed runners are [deployed](https://docs.gitlab.com/runner/install/index.html) to customer-owned infrastructure and [registered](https://docs.gitlab.com/runner/register/index.html) to the self-managed GitLab instance.|
|DotCom| [GitLab-hosted runners](https://docs.gitlab.com/ci/runners/) are available to all projects stored on GitLab.com. Self-managed runners can also be registered to GitLab.com. |
|Dedicated| [GitLab-hosted runners (beta)](https://docs.gitlab.com/subscriptions/gitlab_dedicated/#hosted-by-gitlab) can be provisioned for Dedicated customers. Self-managed runners can also be registered to Dedicated environments. |

### Rails console

|      |       |
|:----:| ----- |
|Self-managed| Rails console commands can be run by [starting the rails console](https://docs.gitlab.com/administration/operations/rails_console/) on any of the rails nodes. |
|DotCom| On GitLab.com, rails console can be accessed by creating an [internal request](/handbook/support/workflows/internal_requests/#gitlabcom-console-escalation). |
|Dedicated| Rails console is not available for dedicated. In urgent matters please create a [request for help with dedicated team](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new). |

### Feature flags

|      |       |
|:----:| ----- |
|Self-managed| Instance adminsitrator can [enable feature flags through the rails console](https://docs.gitlab.com/administration/feature_flags/).|
|DotCom| On GitLab.com some features flags [can be enabled through chatops](/handbook/support/workflows/saas_feature_flags/). |
|Dedicated| Feature Flags are not available for GitLab Dedicated until the feature flag is enabled by default. Read more about how to [handle feature flag requests from GitLab Dedicated customers](/handbook/support/workflows/dedicated/#feature-flags-are-not-supported). |
