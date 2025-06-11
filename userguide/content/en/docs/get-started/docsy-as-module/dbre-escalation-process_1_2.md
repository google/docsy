---
aliases: /handbook/engineering/infrastructure/core-platform/data_stores/database-reliability/dbre-escalation/process.html
title: DBRE Escalation Process
summary: This page outlines the DBRE team escalation process and guidelines for developing the rotation schedule for handling infrastructure incident escalations.
---

{{% alert title="Note" color="danger" %}}
We are using Slack, <i class="fa-brands fa-slack"></i> @dbre, for escalations.
{{% /alert %}}

## About This Page

This page outlines the DBRE team escalation process and guidelines for developing the rotation schedule for handling infrastructure incident escalations.

## Expectation

The expectation for the DBRE engineers is to be a database consultant and collaborate with the EOC who requested on-call escalation to troubleshoot together. There is no expectation that the DBRE engineer is solely responsible for a resolution of the escalation.

## Escalation Process

### Scope of Process

1. This process is designed for the following issues:
   1. **GitLab.com** S1 and S2 production incidents raised by the **Engineer On Call** , **Development**, and **Security** teams.
1. This process is **NOT** a path to reach the DBRE team for non-urgent issues that the Development, Security, and Support teams run into. Such issues can be moved forward by:
   1. Labelling with `team::Database Reliability` and following the [Reliability General Workflow](/handbook/engineering/infrastructure/team/reliability/#how-we-work--general-workflow)
   1. Raising to the `#g_infra_database_reliability` Slack channel, or
   1. Asking the infrastructure-lounge Slack channel assigning the `@dbre` user group
1. This process provides for Weekdays coverage only.

#### Example of qualified issue

1. Production issue examples:
   1. GitLab.com: [S1/S2 or DB failover and degraded GitLab.com performance](https://gitlab.com/gitlab-com/gl-infra/production/issues/1054)
   1. GitLab.com: [Severity 1](/handbook/security/#severity-and-priority-labels-on-security-issues) vulnerability being actively exploited or high likelihood of being exploited and puts the confidentiality, availability, and/or integrity of customer data in jeopardy.

### Process Outline

**NOTE:** The DBRE support does not need to announce beginning/end of their shift in [#db_squad](https://gitlab.slack.com/messages/C02K0JTKAHJ) unless there is an active incident happening (check the chat history of the channel to know if there is an active incident). This is because many engineers have very noisy notifications enabled for that channel, and such announcements are essentially false positives which make them check the channel unnecessarily.

#### Weekdays (UTC)

1. Incidents will be escalated by the EOC or Incident Manager by notifying the DBRE through @dbre slack handle with an eligible DBRE according to their working hours.
1. During incidents the available DBRE can pass the incident to another DBRE/Reliability EM, if they are urgently needed somewhere else.
1. In timezones where we have only one DBRE, the DBRE can pass the incident to the available Reliability Engineering manager who will work to find someone(not necessarily a DBRE) who can help

##### Escalation

1. EOC/IM, notify the DBRE on-call via slack handle @dbre requesting for the DBRE to join the incident zoom/channel
1. DBRE responds to the ping by acknowledging the ping and joining the incident channel and zoom
1. If DBRE support does not respond, the EOC/IM, notify the available Reliability EM
1. DBRE triages the issue and works towards a solution.
1. If necessary, DBRE reach out for further help or domain expert as needed.

In the event that no DBRE engineers respond to the ping, the EOC will then notify the Reliability, Engineering Managers. They will need to find someone available and notify this in the escalation thread. As an EM:

1. Try to find someone available from the DBRE group
1. If the search is positive, leave a message in the thread as an acknowledgement that the engineer will be looking into the issue

#### Weekends and Holidays (UTC)

The first iteration will only focus on weekdays.

### First response time SLOs

**OPERATIONAL EMERGENCY ISSUES ONLY**

   1. **GitLab.com**: DBRE engineers provide initial response (not solution) in both incident channel and the tracking issue within **15 minutes**.

#### Relay Handover

* Since the dbre who are on call may change frequently, responsibility
     for being available rests with them.
* In the instance of an ongoing escalation no DBRE should finish
     their on-call duties until they have arranged for and confirmed the DBRE
     taking over from them is present, or they have notified someone who
     is able to arrange a replacement. They do not have to find a
     replacement themselves, but they need confirmation from someone that
     a replacement will be found.
* In the instance of an ongoing escalation being handed over to
     another incoming on-call DBRE the current on-call DBRE
     summarize full context of on-going issues, such as but not limited to
  * Current status
  * What was attempted
  * What to explore next if any clue
  * Anything that helps bring the next on-call dbre up to speed quickly

     These summary items should be in written format in the following locations:
  * _Existing_ threads in respective Incident channel
  * Incident tracking issues

     This shall be completed at the end of shifts to hand over smoothly.
* For current Production incident issues and status, refer to [Production Incidents](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name[]=incident) board.
* If an incident is ongoing at the time of handover, outgoing DBRE may
     prefer to remain on-call for another shift. This is acceptable as long as
     the incoming DBRE agrees
* If you were involved in an incident which has been mitigated during your shift, leave a note about your involvement in the incident issue and link to it in the respective incident Slack channel indicating you participated in the issue as an informational hand-off to future on-call DBRE.

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

To get an idea of what's expected of an on-call DBRE and how often incidents occur it can be helpful to shadow another shift. To do this simply identify and contact the DBRE on-call to let them know you'll be shadowing. During the shift keep an eye on [#incident-management](https://gitlab.slack.com/archives/CB7P5CJS1) for incidents and observe how the DBRE on-call [follows the process](#process-outline) if any arise.

### Tips & Tricks of Troubleshooting

1. [How to Investigate a 500 error using Sentry and Kibana](https://www.youtube.com/watch?v=o02t3V3vHMs&feature=youtu.be).
1. [Walkthrough of GitLab.com's SLO Framework](https://www.youtube.com/watch?v=QULzN7QrAjY).
1. [Scalability documentation](https://gitlab.com/gitlab-org/gitlab/merge_requests/18976).
1. [Use Grafana and Kibana to look at PostgreSQL data to find the root cause](https://youtu.be/XxXhCsuXWFQ).
   * Related incident: [Postgres transactions timing out; sidekiq queues below apdex score; and overdue pull mirror jobs](https://gitlab.com/gitlab-com/gl-infra/production/issues/1433).
1. [Ues Grafana, Thanos, and Prometheus to troubleshoot API slowdown](https://www.youtube.com/watch?v=DtP4ZcuXT_8).
   * Related incident: [2019-11-27 Increased latency on API fleet](https://gitlab.com/gitlab-com/gl-infra/production/issues/1419).
1. [Let's make 500s  more fun](https://youtu.be/6ERO4XsYDn0?list=PL05JrBw4t0KodGBz0XUYdYaAYyYs-6ZK7)

### Tools for Engineers

1. Training videos of available tools
   1. [Visualization Tools Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrDIsPQ68htUUbvCgt9JeQj).
   1. [Monitoring Tools Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KpQMEbnXjeQUA22SZtz7J0e).
   1. [How to create Kibana visualizations for checking performance](https://www.youtube.com/watch?v=5oF2rJPAZ-M&feature=youtu.be).
1. Dashboards examples, more are available via the dropdown at upper-left corner of any dashboard below
   1. [Saturation Component Alert](https://dashboards.gitlab.net/d/alerts-saturation_component/alerts-saturation-component-alert?orgId=1).
   1. [Service Platform Metrics](https://dashboards.gitlab.net/d/general-service/general-service-platform-metrics?orgId=1&var-type=ci-runners&from=now-6h&to=now).
   1. [SLAs](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1).
   1. [Web Overview](https://dashboards.gitlab.net/d/web-main/web-overview?orgId=1).
