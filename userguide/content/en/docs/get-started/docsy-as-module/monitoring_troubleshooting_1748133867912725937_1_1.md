---
title: Analytics Instrumentation - Monitoring and troubleshooting
description: "The Analytics Instrumentation group work on feature enhancements and implementing privacy focused product analytics across GitLab projects"
---

This page aims to contain information and links helpful in monitoring and troubleshooting the internal analytics infrastructure provided by the [Analytics Instrumentation group](/handbook/engineering//development/analytics/monitor/analytics-instrumentation).

## Snowplow

### Monitoring

For a brief video overview of the tools used to monitor Snowplow usage, please check out [this internal video](https://www.youtube.com/watch?v=NxPS0aKa_oU) (you must be logged into GitLab Unfiltered to view).

- [Tableau dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2358326/views) provides information about the number of good and bad events imported into the Data Warehouse, as well as the most common types of error messages for bad events.
- [Analytics Instrumentation Grafana dashboard](https://dashboards.gitlab.net/d/product-intelligence-main/product-intelligence-product-intelligence?orgId=1) monitors backend events sent from a GitLab.com instance to a collectors fleet. This dashboard provides information about:
  - The number of events that successfully reach Snowplow collectors.
  - The number of events that failed to reach Snowplow collectors.
  - The number of backend events that were sent.
- [AWS CloudWatch dashboard](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=SnowPlow;start=P3D). You need to log into AWS through Okta before opening the dashboard. It monitors the state of the events in a processing pipeline. The pipeline starts from Snowplow collectors, goes through to enrichers and pseudonymization, and then up to persistence in an S3 bucket. From S3, the events are imported into the Snowflake Data Warehouse.
- [Snowflake](https://app.snowflake.com/) is where analytics data ends up and can be queried. Basic intro on how to access data in Snowflake in [this video](https://www.youtube.com/watch?v=0RGnh7eErDs)

### Alerts

Our alerts can either be found in [Monte Carlo](https://getmontecarlo.com/settings/notifications2/audiences/f61407c9-6b9f-4cef-8fb8-fbd8a6051919) if they are based on data from Snowflake,
or in [AWS Cloud Watch](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:) if they are related to Snowplow AWS infrastructure.

Enable notifications for the `#g_analytics_instrumentation_alerts` Slack channel to be immediately informed about incoming alerts.

#### Amount of Bad Events Violation

##### Symptoms

You will be alarmed via a [Monte Carlo alert](https://getmontecarlo.com/monitors/c8e6772d-39dd-4dd7-946d-7daeec72dbe4) that is sent to `#g_analytics_instrumentation_alerts` Slack channel that the amount of bad events as compared to good events is higher than usual for the last day.

##### Locating the problem

Start with the [Tableau dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2358326/views) which is based on the raw data ingested from our Snowplow S3 Bucket. Try to answer the following questions:

1. Is the number of bad events unusually high, or is the number of good events lower than usual? If the latter is true, it indicates an unalerted drop in good events, and you should continue with the [good events drop alert](#good-events-volume-drop).
1. Locate the abbreviated messages which have the most increase in the affected time frame (see [chart](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventVolumeDebugging/BadEventmessages?:iid=1)), and are therefore likely to have caused the error.
1. If the messages start with "Payload with vendor", it's likely triggered by a directory scan by some kind of bot, since Snowplow interprets the first folder in the path as the
     vendor, e.g. for `https://snowplow-collector.com/snowplow` the vendor would be `snowplow`. These errors can be ignored if they don't persist beyond a few days.
1. See if the abbreviated error message already tells you what's wrong.

##### Debugging the offending events

If the shortened message looks like an error caused by a valid attempt at sending an event, we likely need to dig into the actual requests / events being sent. You can get a sample of events for a specific error message with an sql query in Snowflake similar to:

```sql
SELECT
    JSONTEXT:errors[0]:message as message,
    JSONTEXT:line::text as base_64_request
FROM RAW.SNOWPLOW.GITLAB_BAD_EVENTS
WHERE uploaded_at > DATEADD(Day ,-1, current_date)
AND STARTSWITH(JSONTEXT:errors[0]:message::text, '[shortened message]')
LIMIT 10
```

Where you replace the `shortened_message` with the message that causes most errors.
You can use `echo '<base_64_request>' | base64 -D` to decode the request and look for patterns.

[This video](https://youtu.be/1GyUera6uH4) shows a debugging session of bad events in Snowplow.

#### Good events volume drop

##### Symptoms

You will be alarmed via a [Monte Carlo alert](https://getmontecarlo.com/monitors/c16474d8-4660-4be2-9be6-5af3be25bd48) or [Cloud Watch alarm](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#alarmsV2:alarm/Low+good+events+record+volume)  that is sent to `#g_analytics_instrumentation_alerts` Slack channel that the amount of newly received Snowplow events is below a feasible threshhold.

##### Locating the problem

First you need to identify at which stage in Snowplow the data pipeline the drop is occurring.
Start at [Snowplow dashboard](https://console.aws.amazon.com/systems-manager/resource-groups/cloudwatch?dashboard=SnowPlow&region=us-east-1#) on CloudWatch.
If you do not have access to CloudWatch, GitLab team members can create an access request issue, similar to this one: `https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/9730`.
While on CloudWatch dashboard set time range to last 4 weeks, to get better picture of system characteristics over time. Than visit following charts:

1. `ELB New Flow Count` and `Collector Auto Scaling Group Network In/Out` - they show in order: number of connections to collectors via load balancers and data volume (in bytes) processed by collectors. If there is drop visible there, it means less events were fired from the GitLab application. Proceed to [application layer guide](#troubleshooting-gitlab-application-layer) for more details
1. `Firehose Records to S3` - it shows how many event records were saved to S3 bucket, if there was drop on this chart but not on the charts from 1. it means that problem is located at AWS infrastructure layer, please refer to [AWS layer guide](#troubleshooting-aws-layer)
1. If drop wasn't visible on any of previous charts it means that problem is at data warehouse layer, please refer to [data warehouse layer guide](#troubleshooting-data-warehouse-layer)

##### Troubleshooting GitLab application layer

Drop occurring at application layer can be symptom of some issue, but it might be also a result of typical application lifecycle, intended changes done to analytics instrumentation or experiments tracking
or even a result of a public holiday in some regions of the world with a larger user-base. To verify if there is an underlying problem to solve, you can check following things:

1. Check the [Analytics Instrumentation Grafana dashboard](https://dashboards.gitlab.net/d/product-intelligence-main/product-intelligence-product-intelligence?orgId=1) to see whether there's a drop in successfully sent events.
1. Check if frontend events are firing correctly and the collectors are reachable by browsing GitLab.com and using the network tab and searching for `snowplow`.
1. Check requests per second on the [Web Apdex dashboard](https://dashboards.gitlab.net/d/general-service/general3a-service-platform-metrics?orgId=1&from=now-2d&to=now), to see if traffic should be generally considered to behave as normal.
1. Check if there was any MR merged that might cause reduction in reported events, pay an attention to [~"analytics instrumentation"](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&label_name[]=analytics%20instrumentation) and [~"growth experiment"](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&label_name[]=growth%20experiment) labeled MRs
1. Check [logs in Kibana](https://log.gprd.gitlab.net/app/discover#) and filter with `{ "query": { "match_phrase": { "json.message": "failed to be reported to collector at" } } }` if there are some failed events logged

We conducted an investigation into an unexpected drop in snowplow events volume.

GitLab team members can view more information in this confidential issue: `https://gitlab.com/gitlab-org/gitlab/-/issues/335206`

##### Troubleshooting AWS layer

The AWS layer is maintained by our infrastructure team and configured through a
[terraform repository](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/main/environments/aws-snowplow).

If it is likely that the AWS layer is responsible for the drop in events then we need help from the SRE on-call.
[Declare an official incident](https://docs.gitlab.com/ee/operations/incident_management/slack.html#declare-an-incident) with severity S4 and `gitlab` as the project to get their attention.

#### Delay in Snowplow Enrichers

If there is an alert for **Snowplow Raw Good Stream Backing Up**, we receive an email notification. This sometimes happens because Snowplow Enrichers don't scale well enough for the amount of Snowplow events.

If the delay goes over 48 hours, we lose data.

To alert the SRE on-call [declare an official incident](https://docs.gitlab.com/ee/operations/incident_management/slack.html#declare-an-incident) with severity S4 and `gitlab` as the project.

Already conducted investigations:

- [Steep decrease of Snowplow page views](https://gitlab.com/gitlab-org/gitlab/-/issues/268009)
- [`snowplow.trx.gitlab.net` unreachable](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/5073)

##### Troubleshooting data warehouse layer

Reach out to [Data team](/handbook/enterprise-data/) to ask about current state of data warehouse. On their handbook page there is a [section with contact details](/handbook/enterprise-data/#how-to-connect-with-us)

##### Recovering events incorrectly marked as "bad"

Events can be incorrectly marked as "bad" because of accidentally incorrect events being emitted. This is most likely to happen after an event schema update
like in this [example issue](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17782) where new properties were added to contexts.
Such events can be recovered by reprocessing them.

1. Choose the way to emit events:
   1. If the amount of data is a few gigabytes, it's possible to use local machine.
   2. Another option is to use an EC2 instance in the same region as the Snowplow collector to speed up the process as the amount of http requests will be significant.
      Consider at least  an `x2.large` instance as concurrent events processing is relatively CPU heavy.
      Uncompressed events take about 70% more space than downloaded zipped files, consider at least 300Gb HDD volume.
      In order to install gem dependencies on Linux, extra packages might be required. For example, Ubuntu will need `build-essential` for gcc and make.
2. Download events from `enriched-bad` S3 folder using `aws` CLI `aws s3 cp s3://gitlab-com-snowplow-events/enriched-bad/{year}/{day}/{day} {local_folder} --recursive` and un-archive them `gunzip -r .`.
3. Checkout [snowplow anonymizer repository](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/snowplow-pseudonymization). It contains classes necessary to de-serialize binary base64 encoded payload.
4. Create a processing script to fix the payloads and re-submit data. An important point to consider:
`collector_tstamp` will be different after re-submitting the events. This field likely will have to be set `dvce_sent_tstamp` in the DW
   to avoid data corruption. [Example script](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/blob/master/scripts/bad_events_reprocessing.rb).

### PII or sensitive data in Snowplow events

If personal or red data is suspected to be present in Snowplow events:

1. Create an incident issue using the [Analytics Instrumentation template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Analytics%2520Instrumentation%2520Incident&issue%5Bissue_type%5D=incident)
2. Assign the incident issue to yourself, Engineering Manager and Product Manager
3. Add the [severity::1](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) and [Analytics Instrumentation::Incident-High Severity](/handbook/engineering/development/analytics/monitor/analytics-instrumentation/#incident-creation) labels
4. Post a message in [#g_analyze_analytics_instrumentation](https://gitlab.slack.com/archives/CL3A7GFPF), [#data](https://gitlab.slack.com/archives/C8D1LGC23) and [#data-rd-analytics](https://gitlab.slack.com/archives/C02C82WDP0U) Slack channels
5. For incident resolution process and SLO, follow the Analytics Instrumentation [incident management process](/handbook/engineering/development/analytics/monitor/analytics-instrumentation/#incident-resolution)

## Service Ping

### Monitoring

Currently we have a few dashboard to monitor and investigate malfunctions:

[Service Ping Health](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics). The most important charts:

1. Recorded Service Pings Created Per Week - allows to quickly identify abnormal amount of event received in the recent weeks
2. Service Ping payloads by major version - allows to quickly identify missing service pings for specific versions
3. Service Ping fail reasons - list of error messages captured during Service Ping generation.

### Alerts

You will be alerted by the [Data](/handbook/enterprise-data/) team and their
[Monte Carlo alerting](/handbook/enterprise-data/platform/monte-carlo/).

### Locating the problem

First you need to identify at which stage in Service Ping data pipeline the drop is occurring.

Start at [Service Ping Health Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics) on Tableau.

You can use [this query](https://gitlab.com/gitlab-org/gitlab/-/issues/347298#note_836685350) as an example, to start detecting when the drop started.

### Troubleshoot the GitLab application layer

In the past we conducted an investigation into an unexpected drop in Service ping Payload events volume.
GitLab team members can view more information in [this confidential issue](https://gitlab.com/gitlab-data/analytics/-/issues/11071)

### Troubleshoot VersionApp layer

Check if the [export jobs](https://gitlab.com/gitlab-org/gitlab-services/version.gitlab.com/-/tree/main/#data-export-using-pipeline-schedules) are successful.

Check Service Ping errors in the [Service Ping Health Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/AnalyticsInstrumentation-ServicePingHealth/ServicePingMetrics)

### Troubleshoot Google Storage layer

Check if the files are present in [Google Storage](https://console.cloud.google.com/storage/browser/cloudsql-gs-production-efd5e8-cloudsql-exports;tab=objects?project=gs-production-efd5e8&prefix=&forceOnObjectsSortingFiltering=false).

### Troubleshoot the data warehouse layer

Reach out to the [Data team](/handbook/enterprise-data/) to ask about current state of data warehouse. On their handbook page there is a [section with contact details](/handbook/enterprise-data/#how-to-connect-with-us).

### Troubleshoot integration with Salesforce

Verify Version app [Sidekiq jobs](https://version.gitlab.com/sidekiq/) are not failing and queues are healthy.
