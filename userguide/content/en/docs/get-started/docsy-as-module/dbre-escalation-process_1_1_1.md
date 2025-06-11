---
title: DBO Escalation Process
summary: This page outlines the DBO team escalation process and guidelines for developing the rotation schedule for handling infrastructure incident escalations.
---

{{% alert title="Note" color="danger" %}}
We are using [PagerDuty](https://gitlab.pagerduty.com/schedules#P1JP4AL) for escalations.
{{% /alert %}}

## About This Page

This page outlines the DBO team's incident escalation policy.

## Shortcuts

* [DBO PagerDuty schedule](https://gitlab.pagerduty.com/schedules#P1JP4AL)
* Slack x PD integration: **/pd trigger `@dbo-oncall`** 
* Slack handles: `@dbre` or `@dbo-oncall`
* Slack channels: #g_database_operations
* `group::database operations`
* [Production Incidents](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name[]=incident)

## SLO and Expectations

* **_DBO RESPONSE IS ON A BEST-EFFORT BASIS_** 

* **_LOCAL TIMEZONE, WEEKDAY COVERAGE ONLY_**

* **_S1 / S2 INCIDENTS ONLY_** 

  * NB1: Due to limited staffing, i.e. having only one person in EMEA timezone, there will be times during the business day, within multible timezones, where there will not be anyone able to respond.  We understand the criticality of responding to S1/S2 incidents and we will make every effort to ensure there is adequete and timeliness in our responses, but given the current staffing levels, we are not at this point adhereing to a hard SLO. To do justice to this situation, it is also expected that schedules are changed on an ad-hoc bases. 

  * NB2: DBO will join incidents as a subject matter expert in a consultative capacity and there should be no expectation that the DBO engineer is solely responsible for a resolution of the escalation. There may be times where the DBO needs to escalate to other subject matter experts, such as the [Database Framework (DBF) team](../database-framework/), in order to make headway on the incident at hand.  

## Escalation Process

### Scope and Qualifiers

1. **GitLab.com** S1 and S2 production incidents raised by the **Incident Manager On Call**, **Engineer On Call** and **Security** teams.

   * NB1: **Gitlab Dedicated** support is consultative at this point.  DBO team currently not equipped, i.e. lacking access and and training on how to support Dedicated databases.  This may change in the future; check back here for updates on this topic.

   * NB2: **Self Managed** support is discrtionary and will be evaluated on a case-by-case basis.

   * NB3: This process is **NOT** a path to reach the DBO team for non-urgent issues.  For non-urgent issues, please create a [Request for Help](https://gitlab.com/gitlab-com/request-for-help#ops-section) (RFP) issue using this [Issue template](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-DatabaseOperations).

   * NB4: The DBO on-shift is responsbile for coordinating warm handoffs during shift changes, especially when there is an ongoing, active incident.
   
### Escalation

1. EOC/IM, Development or Security page the DBO on-call via [PagerDuty](https://gitlab.pagerduty.com/schedules#P1JP4AL)
1. DBO responds by acknowledging the page and joining the incident channel and zoom
1. DBO triages the issue and works towards a solution.
1. If necessary, DBO reach out for further help or domain expert as needed.

   * NB1: If DBO support does not respond, escalation path as defined within PagerDuty ensues.

## Resources

### Responding Guidelines

When responding to an Incident, utilize the below procedure as guidelines to follow to assist both yourself and the members requesting your assistance

1. Join the Incident Zoom - this can be found bookmarked in the `#incident-management` Slack Channel
1. Join the appropriate incident slack channel for all communications that are text based - Normally this is `#incident-<ISSUE NUMBER>`
1. Work with the EOC to determine if a known code path is problematic

* Should the knowledge of this be in your domain, continue working with the EOC to troubleshoot the problem
* Should this be something you may be unfamiliar with, attempt to determine code ownership by team - Knowing this will enable us to see if we can bring online an Engineer from that team into the Incident

1. Work with the Incident Manager to ensure that the Incident issue is assigned to the appropriate Engineering Manager - if applicable

### Shadowing An Incident Triage Session

Feel free to participate in any incident triaging call if you would like to have a few rehearsals of how it usually works. Simply watch out for active incidents in [#incident-management](https://gitlab.slack.com/archives/CB7P5CJS1) and join the Situation Room Zoom call (link can be found in the channel) for synchronous troubleshooting. There is a [nice blog post](https://about.gitlab.com/blog/2020/04/13/lm-sre-shadow/) about the shadowing experience.

### Replaying Previous Incidents

Situation Room recordings from previous incidents are available in this [Google Drive folder](https://drive.google.com/drive/u/1/folders/1wtGTU10-sybbCv1LiHIj2AFEbxizlcks) (internal).

### Shadowing A Whole Shift

To get an idea of what's expected of an on-call DBO and how often incidents occur it can be helpful to shadow another shift. To do this simply identify and contact the DBO on-call to let them know you'll be shadowing. During the shift keep an eye on [#incident-management](https://gitlab.slack.com/archives/CB7P5CJS1) for incidents.

### Tips & Tricks of Troubleshooting

1. [How to Investigate a 500 error using Sentry and Kibana](https://www.youtube.com/watch?v=o02t3V3vHMs&feature=youtu.be).
1. [Walkthrough of GitLab.com's SLO Framework](https://www.youtube.com/watch?v=QULzN7QrAjY).
1. [Scalability documentation](https://gitlab.com/gitlab-org/gitlab/merge_requests/18976).
1. [Use Grafana and Kibana to look at PostgreSQL data to find the root cause](https://youtu.be/XxXhCsuXWFQ).
   * Related incident: [Postgres transactions timing out; sidekiq queues below apdex score; and overdue pull mirror jobs](https://gitlab.com/gitlab-com/gl-infra/production/issues/1433).
1. [Use Grafana, Thanos, and Prometheus to troubleshoot API slowdown](https://www.youtube.com/watch?v=DtP4ZcuXT_8).
   * Related incident: [2019-11-27 Increased latency on API fleet](https://gitlab.com/gitlab-com/gl-infra/production/issues/1419).
1. [Let's make 500s  more fun](https://youtu.be/6ERO4XsYDn0?list=PL05JrBw4t0KodGBz0XUYdYaAYyYs-6ZK7)

### Tools for Engineers

1. Training videos of available tools
   1. [Visualization Tools Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj).
   1. [Monitoring Tools Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e).
   1. [How to create Kibana visualizations for checking performance](https://www.youtube.com/watch?v=5oF2rJPAZ-M&feature=youtu.be).
1. Dashboards examples, more are available with the dropdown list at upper-left corner of any dashboard below
   1. [Saturation Component Alert](https://dashboards.gitlab.net/d/alerts-saturation_component/alerts-saturation-component-alert?orgId=1).
   1. [Service Platform Metrics](https://dashboards.gitlab.net/d/general-service/general-service-platform-metrics?orgId=1&var-type=ci-runners&from=now-6h&to=now).
   1. [SLAs](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1).
   1. [Web Overview](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1).
