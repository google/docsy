---

title: How to Perform CMOC Duties
category: On-call
description: "Describes the role and responsibilities for the Incident CMOC rotation in Support Engineering"
---

## Introduction

As the GitLab SaaS Incident [Communications Manager on Call (CMOC)](/handbook/engineering/infrastructure/incident-management/#roles-and-responsibilities) you are the voice of GitLab to our users and stakeholders during an incident. To do this effectively, you'll work primarily with the [Incident Manager (IM) and Engineer on Call (EOC)](/handbook/engineering/infrastructure/incident-management/#roles-and-responsibilities) and use a combination of [our status page](https://status.gitlab.com/) (powered by [Status.io](https://status.io)), Slack, Zendesk, and GitLab itself. The CMOC rotation is one of the rotations that make up [GitLab Support On-call](/handbook/support/on-call).

To disambiguate this term on other pages, you may see the acronym ICMOC or see the role referred to as "Incident CMOC". As this page is scoped to only this role it uses CMOC, Incident CMOC, and ICMOC interchangeably.

Our Slack bot [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse) provides a command (`/incident post-statuspage`) to quickly spin up an incident on [Status.io](https://status.io). From there, the basics of how to update and close incidents in Status.io are covered by their [Incident Overview](https://kb.status.io/incidents/incident-overview/) documentation. This document covers how GitLab specifically uses Status.io to perform those tasks.

### How to be added to the CMOC PagerDuty rotation

To be added to the CMOC Rotation:

1. First, complete the [GitLab-com CMOC training module](https://gitlab.com/gitlab-com/support/support-training/-/issues/new).
1. After discussion and agreement with your manager, create a new [PagerDuty Issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/pagerduty/-/issues) requesting that you are added to the appropriate regional CMOC rotation.

## Things to Know

Before getting started, take note of the following sections or to get straight into the workflow start at [Incident Management](#incident-management).

### About Incidents

This section contains information specific to how incidents are started, what various status messages in PagerDuty mean, and the difference between the EOC and the IM during an incident.

#### How Incidents Are Declared

Infrastructure uses [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse) to [declare incidents through Slack](/handbook/engineering/infrastructure/incident-management/#reporting-an-incident). Doing so will:

1. Automatically page the EOC, IM, and CMOC.
1. Create an issue for the incident in the [Production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/) issue tracker.
1. Provide a link to the Zoom call for the incident.
1. Create a dedicated Slack channel for the incident.

This information will all be posted to Slack in the `#incident-management` channel by Woodhouse and it'll look similar to the following example.

![Incident declared by Woodhouse](/images/support/cmoc_incident_declared.png)

GitLab team members are encouraged to use this method of reporting incidents if they suspect GitLab.com is about to face one.

#### PagerDuty Status Definitions

- **Triggered** - "An incident exists that requires the attention of a CMOC."
- **Acknowledged** - "I have seen the page and am in the process of joining the incident Slack channel and Zoom call."
- **Resolved** - "I have joined the dedicated Slack channel for the incident along with the Zoom call, created the incident in Status.io, notified internal stakeholders, and labeled the incident issue and am actively working the incident."

**NB:** "Resolved" in PagerDuty does not mean the underlying issue has been resolved.

#### Deciding Whether to Initiate Status Page Communications: EOC vs. IM

The IM is the DRI for the decision of whether to initiate public communications via the Status Page. When joining an incident as the CMOC you should inquire as to whether communications are currently required. On the rare occasion that an incident does not have an IM, the EOC assumes these responsibilities and you may ask them instead.

#### Reviewing Past Incidents

You can always [review past incidents](https://status.gitlab.com/pages/history/5b36dc6502d06804c08349f7) if you need examples or inspiration for how to fill in the details for a current incident.

### About Status.io

#### Updating Current Status & Current State

It is not possible to change the `Current Status` of the affected infrastructure of an incident or its `Current State` without making a formal update to the incident. It is acceptable to publish a new update to an incident in order to change either the `Current Status` of its affected infrastructure or its `Current State` regardless of how recently the last update on the incident was published.

#### Frequency of Updates

Status.io should be updated whenever we have new information about an active incident that our stakeholders should be aware of. Outside of that, it should be updated at a consistent rate depending on the severity of the incident as outlined in the table below.

Once you join the incident Zoom call, take note of any updates that have been made to Status.io and the time they were made at. Set a timer to remind yourself and stick to the time intervals below unless you make a note of how long it will be until the next status update. For example, if you're in "monitoring" it may be appropriate to specify an hour before the next update.

| Incident Status | Severity 1 Update Frequency | Severity 2 Update Frequency | Severity 3/4 Update Frequency |
|--|--|--|--|
|Investigating| 10m | 15m | 15m |
| Identified | 10m | 30m | 30m |
| Monitoring | 30m | 60m | 60m |
| Resolved | No further updates required | | |

#### What If I Don't Know What to Say?

- Provide a generic update based on the best information you have:

- *We're seeing elevated error rates on GitLab.com, investigation is underway in: link*
- *Some users are reporting connection issues to GitLab.com, we're working on it in: link*
- Craft a draft of what you think is correct. Whenever possible use ["I intend to..." language](https://www.youtube.com/watch?v=7KnPjakwqeI) when communicating with the IM and EOC:

  - *@IM - I'm going to post: "We've isolated the network problem to the APAC region and are working with Cloudflare support to get it resolved*.
  - *"In my next update I'm going to move the status to monitoring"*
- Bias to action - you can post another update if there was an error in your last update.

- If there are no material updates to report, say something so that people know we care and are working on it. Below are a few example messages:
   1. *"No material updates to report. We're discussing if we should restore from backup or let the replica catch up first but we have not made a decision."*
   1. *"No material updates to report. We tried starting the Gitaly servers but we're still missing connectivity."*
   1. *"No material updates to report. We are doing a handover to a new CMOC since the current CMOC has been at it for three hours straight."*
   1. *"No material updates to report. We would like to thank Google for the #hugops tweet we received. LINK"*

- If you really don't know, it really is okay to ask!

#### Administrative Tasks on Status.io

Any updates **outside documented incident updates** that require administrator access to the GitLab System Status page should be initiated with [this template](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Status%20page%20administrative%20task).

The template will ping CMOC DRIs in scenarios where we need to update or add components. Before adding or changing components, please ensure to get a review from infrastructure counterparts from the appropriate [Reliability Team](/handbook/engineering/infrastructure/team/reliability/#reliability-teams).

### About Contact Requests

Whether related to an ongoing incident or not, Infrastructure or Security may ask you to reach out to one or more users if they detect unusual usage. Please follow the [Sending Notices]({{< ref "sending_notices" >}}) workflow to action these requests. Additionally, refer to the [End of Shift Handover Procedure](#end-of-shift-handover-procedure) for details on handing off contact requests.

### How to Page the CMOC?

The CMOC can be paged during the [incident declaration process](/handbook/engineering/infrastructure/incident-management/#reporting-an-incident). If the CMOC needs to be paged after an incident was created or for any other reason, see the [How to engage the CMOC?](/handbook/engineering/infrastructure/incident-management/#how-to-engage-the-cmoc) section of the main incident management handbook.

### CMOC Performance Indicators

Success as a CMOC is determined by the following performance indicators:

- **Time to Acknowledge PagerDuty Pages**: Acknowledge all PagerDuty notifications within 15m and join the incident bridge. See [Acknowledge the PagerDuty Page](#acknowledge-the-pagerduty-page)
- **Frequency between status updates**: Post status page updates according to severity at documented intervals or other cadence if so communicated. See [Frequency of Updates](#frequency-of-updates).
- **Stakeholder communication threads created per incident**: Communicate incident existence to stakeholders according to the documented process. See: [Notify Stakeholders](#notify-stakeholders).
- **Handover issue created after a shift**: At the end of every shift, create a handover issue to prepare the incoming CMOC. See: [End of Shift Handover Procedure](#end-of-shift-handover-procedure)
- **Contact requests opened during shift per completed contact request issue**: Complete, handover or otherwise communicate plan to complete all incoming contact requests. See: [About Contact Requests](#about-contact-requests)
- **Participation in one training event per quarter**: Join at least one incident or participate in (or organize) a training activity. See: [CMOC Training Activities](#cmoc-training-activities)

## Incident Management

As the CMOC you'll guide the incident through the following stages.

1. **Stage 1: Engage** - Creating the incident in Status.io, joining the incident Zoom call, [notifying stakeholders](#notify-stakeholders), and labeling the incident issue.
1. **Stage 2: Manage** - Following along with the work being performed by the EOC and any assisting engineers to resolve the incident while making updates to Status.io along the way while adhering to the [Frequency of Updates](#frequency-of-updates) schedule in addition to creating a tag for the incident in Zendesk, and tagging and replying to tickets.
1. **Stage 3: Monitor (Situational)** - Setting the incident to **Monitoring** in Status.io for a period of time to ensure that the issue does not recur before we close it out. This stage may be skipped at the request of the IM.
1. **Stage 4: Resolve** -  Setting the incident to **Resolved**, adding a post-mortem link in Status.io, and ensuring that there are no remaining Zendesk tickets that need tagging and a response.

The following sections outline how to perform each of the steps within these stages and should be performed in sequential order.

### **Stage 1: Engage**

Perform all of the following steps in order immediately after receiving a PagerDuty page.

#### Acknowledge the PagerDuty Page

Mark the page as [acknowledged](#pagerduty-status-definitions). This can be done through the mobile app, web interface or PagerDuty App in the `#support_gitlab-com` Slack channel.

#### Join Incident Channel & Zoom

A link to the call is provided in the incident declaration post by Woodhouse in `#incident-management`.

Your role while on the call is to follow along while the incident is worked and make updates to Status.io either when asked to or when it's necessary. Oftentimes chatter in this room will be lively, especially in the early stages of an incident while the source of the issue is being discovered. Use your best judgment on when it's appropriate to speak up to avoid vocalizing at inopportune times. You can always ping anyone on the call through Slack if you need to ask a non-urgent question about the situation.

#### Upon First Joining

The first thing you should do is to verify that you can be heard by others in the room. To do this, say something like:

> "Hi, I'm the CMOC on duty. I intend to send an update, please review this in the Slack thread."
>
> "Hi, I'm the CMOC on duty, how can I help?"

Whatever you choose to say, make sure that you receive a verbal acknowledgement directed at you before you move on to focus on other aspects of the incident.

#### When CMOC Is Asked to Take Action

From time to time, you may be asked to perform some specific tasks in the room. Always verbally acknowledge any such asks by repeating your understanding of the ask back to the requestor. This helps everyone understand that the ask was heard, and also serves to verify that everyone has the same understanding of some action to be taken.

In some cases, the ask may be implicit, rather than explicit. If you're in doubt, always speak up and ask for confirmation. For example:

> **IM:** CMOC is here, we need to roll out a first update.

A good response would be to ask for confirmation that an action was requested:

> **CMOC:** IM, do you want me to send a first update on status.io?

A better response would be to assume that an action was requested, relay your intended course of action in response, and give the requestor the opportunity to provide input:

> **CMOC:** IM, acknowledged, I will draft an update for status.io and ping you in Slack for input.

#### Create Incident

You can create an incident directly through the `status.io` website **OR** through Slack (provided by Woodhouse). It is recommended to use the `status.io` website directly as it permits further customization of the incident beyond what the Slack form allows. It is also easier to confirm that the incident was created properly when using the `status.io` website.

#### Create Through Status.io

To create an incident through Status.io click the `New Incident` button from the main dashboard:

![New incident](/images/support/cmoc_new_incident.png)

Then, fill out all of the details of the incident. The following values should be changed:

`Title` - This should be brief and concise. The incident title should answer the question: **In simple terms, what is the issue?**

`Current State` - This should almost always be set to `Investigating`, as we normally don't know the cause of the incident at this early stage. If that is not the case and it has been communicated to you by the IM or EOC that we're aware of what the cause is, set this to `Identified` instead.

`Details` - In keeping with our value of [transparency](/handbook/values/#transparency), we should go above and beyond for our audience and give them as much information as possible about the incident. This field should **always** include a link to the incident issue from the [production issue tracker](https://gitlab.com/gitlab-com/gl-infra/production/issues) so that our audience can follow along.

`Incident Status` - This should be set to either `Degraded Performance`, `Partial Service Disruption`, or `Service Disruption` depending on the [severity](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#availability) of the incident. If you're unsure of which to pick, ask the IM for guidance.

`Broadcast` - Make sure all boxes are checked.

`Message Subject` - Leave this at its default value.

`Affected Infrastructure` - Leave this unchecked and then check the box next to each specific component below it that is affected by the incident. If this box is checked then the value that you set for `Incident Status` above will be applied to *all* infrastructure components.

The following is an example of an incident ready to be created regarding a delay in job processing on GitLab.com, and is generally what this page should look like before being submitted based on the guidelines above.

![Incident details](/images/support/cmoc_incident_details.png)

#### Create Through Slack

You simply need to issue `/incident post-statuspage` from anywhere on Slack. You will be presented with a pre-filled form that you can update to your liking. Once submitted, the incident will be broadcast to the following media:

- Email subscribers
- Webhook subscribers
- Slack subscribers
- IRC (#gitlab on [Libera Chat](https://libera.chat))
- MS Teams subscribers
- [Twitter](https://twitter.com/gitlabstatus)
- [RSS feed](https://status.gitlab.com/pages/5b36dc6502d06804c08349f7/rss)
- [iCalendar](webcal://status.gitlab.com/pages/5b36dc6502d06804c08349f7/calendar/all.ics)

#### Notify Stakeholders

The CMOC now needs to notify internal stakeholders of the incident using the Incident Notifier Slack workflow. This should be done after the severity of the incident has been confirmed by the IM.

This workflow, once used, will ask you to fill out a form with details of the incident and will then post those details to `#developer-relations` and `#customer-success`. This serves to notify those teams of the incident. To engage the workflow:

1. Within the `#support_gitlab-com` channel, type `/` in the message box to bring up the list of available workflows and select the `Incident Notifier` workflow.
1. Fill in the following details that are shared in the #incident-management channel
   - **Summary**: Brief summary, you can make it the same as the CMOC notice.
   - **Severity**: Select the same severity as the Incident.
   - **Production issue**: Link to the incident issue. eg: `https://gitlab.com/gitlab-com/gl-infra/production/-/issues/12345`
   - **Incident Slack Channel**: Link to the incident slack channel. eg: `#incident-12345`
   - **Status Page**: Click on the incident to expland the full status page url. eg: `https://status.gitlab.com/pages/incident/xxxxxxxx/xxxxxxxx`
1. Click `Submit`

This will sumbit to both `#developer-relations` and `#customer-success` channels.

#### Label Incident Issue

1. Add the `~Incident-Comms::Status-Page` scoped label to the incident issue.

It is important that we are able to differentiate incidents which included outbound status page and related notifications from those incidents which were deemed less impactful to our customers. This can be useful both in filtering for active incidents which include outbound notification as well as for after-incident reporting.

Whenever a GitLab service incident includes the use of the status page, this should be identified on the incident issue in GitLab. See this, and other uses of this scoped label in the [Incident Management section of the handbook](/handbook/engineering/infrastructure/incident-management/#labeling).

#### Resolve the PagerDuty Page

We mark the PagerDuty page as [resolved](#pagerduty-status-definitions) once every other task in this stage has been completed. Resolve the page through the mobile app, web interface or PagerDuty App in the `#support_gitlab-com` Slack channel.

### **Stage 2: Manage**

After all [Stage 1](#stage-1-engage) tasks have been complete we will manage the incident by making updates to it, creating a tag for it in Zendesk, and responding to any tickets in Zendesk that are related to it.

#### Update Incident

To publicly communicate attention and progress incidents should be updated according to the [frequency of incident updates table](/handbook/support/workflows/cmoc_workflows#frequency-of-updates) unless you communicate otherwise.

To update an active incident, click the incidents icon from the dashboard.

![Active incident dashboard icon](/images/support/cmoc_update_incident_dashboard.png)

Then click on the edit button next to the incident.

![Incident edit button](/images/support/cmoc_update_incident.png)

Change the following values:

`Current State` - Change this to `Identified` if the IM or EOC has informed you that we have identified the cause of the incident. If we have not, leave it at `Investigating`. If we have rolled out a fix for the incident and will be entering a monitoring period, set this to `Monitoring` and then move on to [Stage 3](#stage-3-monitor-situational).

`Details` - Describe what has changed regarding the incident since your last update, being as concise and to the point as possible. If you can fit it into the character limit, consider including a link to the incident issue again as well.

`Broadcast` - Make sure all boxes are checked.

`Message Subject` - Leave this at its default value.

`Current Status` - Leave this to what you previously set it to when creating the incident, unless the scope of the incident has widened or narrowed. If you're unsure, consult with the IM.

`Set Status Level` - Keep this checked. If the incident has increased in scope and now affects additional components in addition to the ones originally selected, proceed to [Update Affected Infrastructure](#affected-infrastructure) after publishing your update.

A ready to be published update should look similar to the following.

![Incident update](/images/support/cmoc_post_incident_update.png)

Twitter has a 280 character limit, but we noticed that some tweets get truncated to 230 characters, such as [this one](https://twitter.com/gitlabstatus/status/1641150257936601088). This can be due to twitter converting any URLs to a 23-character URL via their link shortener service.

Make sure to [verify](https://wordcounter.net/character-count) the update length before publishing it, and try to fit the main body of the message (before the final URL to the issue) in 220 characters. This leaves about 10 characters to display the final URL, if it gets truncated.

After the update has been published, visit the [live status page](https://status.gitlab.com/) to verify that it went through.

#### Update Affected Infrastructure or Title (Situational)

Proceed to either [Title](#title) or [Affected Infrastructure](#affected-infrastructure) to learn how to change either.

#### Title

To update the title of an incident, click `Incidents` in the navigation bar and then the `View Incident` button next to the incident in question:

![Update incident title - 1](/images/support/cmoc_update_title_or_infra.png)

Click the pencil icon next to the current incident title, change it, then click `Save`.

#### Affected Infrastructure

To update the affected infrastructure of an incident, click `Incidents` from the navigation bar and then the `View Incident` button next to the incident in question:

![Update affected infrastructure - 1](/images/support/cmoc_update_title_or_infra.png)

Click the pencil next to `Affected Infrastructure`, check the boxes next to the additional affected infrastructure, then click `Save`. Then, click `Dashboard` from the navigation menu, click the additional affected infrastructure from the `Current Status` menu, and change their status:

![Change affected infrastructure](/images/support/cmoc_update_infra.png)

#### Zendesk Tag

In order to track tickets submitted through Zendesk that relate to an incident, a zendesk tag is automatically added to all tickets that mention the incident issue.

The tag is available for use on other tickets. All tags that relate to incidents are in the format `gitlab-com_gl-infra_production_issues_#####` with `#####` being the incident number, which can be found in the incident issue.

For all other internal or confidential incidents (such as security related incidents), a manual tag can be created since we would not be sharing a public link in the public ticket response. To create a manual tag:

1. Create or edit a ticket.
1. Start typing the name of the new tag in the `Tags` field with a format of `com_incident_###`
1. Hit `Enter`.
1. Submit the ticket, either with a response included or not.

The tag will now be available to use on other tickets.

#### Monitor Zendesk

While in the `Manage Incident` stage, routinely monitor Zendesk for new and existing tickets related to the incident and proceed to tag and respond to them. Use [this Zendesk search](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=created%3E4hours%20order_by%3Acreated_at%20sort%3Adesc%20group%3Anone%20group%3A%22support%22%20-form%3Abilling%20-form%3Asecurity) to view all new tickets created in the last four hours. Alternatively, paste the following into the Zendesk search bar.

```plain
created>4hours order_by:created_at sort:desc group:none group:"support" -form:billing -form:security
```

Adjust the `4` if the incident began earlier than four hours ago.

### **Stage 3: Monitor (Situational)**

After the incident has been mitigated, we'll often begin a monitoring period to ensure that we do not see a recurrence of the issue. Monitoring typically lasts for 30 minutes, but it can vary and a specific amount of monitoring time may be requested by the IM. They **may also request that the monitoring stage be skipped entirely.** If this is the case, proceed directly to [Stage 4](#stage-4-resolve).

To begin monitoring, edit the incident and change the following fields.

`Current State` - Change to `Monitoring`.

`Details` - Along with any information specific to the incident be sure to mention that all systems have returned to normal operation, that we're monitoring in order to ensure the issue doesn't recur, and provide an estimate for how long we'll be monitoring before we resolve the incident. For example:

> *While all systems are online and fully operational, out of an abundance of caution we'll leave affected components marked as degraded as we monitor. If there are no recurrences in the next 30 minutes, we'll resolve this incident and mark all components as fully operational.*

`Broadcast` - Make sure all boxes are checked.

`Message Subject` - Leave this at its default value.

`Current Status` - Leave this at its previously set value. At this point, affected infrastructure should be back to operating normally, but to avoid confusion we **do not** set this back to `Operational` until we are ready to close the incident.

A ready to be published update that switches the incident over to the monitoring period should look similar to the following.

![Switch to monitoring](/images/support/cmoc_monitoring_stage.png)

If at any point during the monitoring period we see a recurrence of the issue, return to [Stage 2](#stage-2-manage). If the monitoring period completes with no recurrence of the issue, proceed to [Stage 4](#stage-4-resolve).

### **Stage 4: Resolve**

After we have completed the monitoring period, or if the monitoring period was skipped, we will now close the incident, add a link to the post-mortem section of the incident, and check Zendesk for any remaining tickets that need tagging and a response.

#### Resolve Incident

Once we've confirmed that the issue has been resolved and **the IM has given the all-clear**, we will close the Status.io incident. If these conditions are met, make an update to the incident and change the following fields.

`Current State` - Change to `Resolved`.

`Details` - State that the issue has been resolved and that systems have returned to operating normally. Be sure to also include a link to the incident issue even if you've already done so in previous updates so that any users who missed them know where to go for more info.

`Broadcast` - Make sure all boxes are checked.

`Message Subject` - Leave this at its default value.

`Current Status` - Change to `Operational`.

`Set Status Level` - Check this box.

A ready to be published update that closes the incident should look similar to the following.

![Resolve incident](/images/support/cmoc_resolve_incident.png)

After the incident has been closed double check that the status page looks right.

#### Add Post-Mortem

A review will be conducted by production engineering for every incident that matches a [certain criteria](/handbook/engineering/infrastructure/incident-management/#incident-review). Status.io allows us to add a link to a post-mortem after an incident has been resolved which will then be viewable on our status page for that specific incident.

Do the following to add a post-mortem to a resolved incident:

1. From the dashboard click the `Incidents` button.

   ![Active incident dashboard icon](/images/support/cmoc_update_incident_dashboard.png)

1. Scroll down and click on the title of the incident.

   ![Incident history list](/images/support/cmoc_post_mortem_incident_list.png)

1. Click `Add Post-Mortem` and supply the link to the issue being used for the incident review, this is usually the same issue that was opened for the incident.

   ![Add post-mortem link](/images/support/cmoc_add_post_mortem.png)

#### Check Zendesk

As a final step, perform one more check of Zendesk and ensure that there are no remaining tickets that need to be tagged and responded to. Refer back to the [Monitor Zendesk](#monitor-zendesk) section for how to do this.

## Maintenance Management

Infrastructure will at times plan scheduled maintenance events for GitLab.com, some of which will directly impact users. New maintenance events are announced as issues created in the [gl-infra/production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues) issue tracker using the [external_communication.md](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/external_communication.md) issue template accompanied by the [**Scheduled Maintenance**](https://gitlab.com/gitlab-com/gl-infra/production/-/labels?utf8=%E2%9C%93&subscribed=&search=scheduled+maintenance) label.

In the event that a maintenance will affect users, infrastructure can request that the maintenance be visible on our status page. Maintenance events have automation enabled, to ensure each event is started at the scheduled time.  The CMOC may be requested to actively provide  status updates throughout the maintenance event. When this is required, automation is disabled on the task and all future updates must be conducted manually, including the final completion of the maintenance window. ~~In these cases infrastructure will apply the [**CMOC Required**](https://gitlab.com/gitlab-com/gl-infra/production/-/labels?utf8=%E2%9C%93&subscribed=&search=cmoc+required) label to the issue, causing a notification to be sent to the `#support_gitlab-com` channel that mentions the on-call CMOC. Once this notification is received the CMOC uses the details within the issue to create the maintenance in Status.io.~~ **These notifications are currently inoperative.** Instead, the maintenance creator will post in `#support_gitlab-com` using the `@cmoc` mention to notify the CMOC that a new maintenance requires setting up.

To create a new maintenance event, click `New Maintenance` from the Status.io dashboard.

![New Maintenance](/images/support/cmoc_new_maintenance.png)

The contents of the maintenance should be filled out according to the details provided in the maintenance issue. Once complete, it might look something like the following.

![Maintenance Details](/images/support/cmoc_maintenance_details_automation.png)

### Timezones and Dates for Maintenance

The timezone of Status.io is set to UTC.

The date format is DD-MM-YYYY, because the ISO format is not an option as of 2022-08-12.

### Rescheduling a Maintenance Event

In case you are required to reschedule a maintenance window, Go to *status.io* > *Maintenances* tab
![Maintenance Tab](/images/support/cmoc_select_maintenance.png)

Select the maintenance you need to reschedule.
![Maintenance selected](/images/support/cmoc_get_in_maintenance.png)

Update the new schedule time by hitting on the *Reschedule Maintenance* button **Make sure you have the correct timezone details when updating** Then hit save.

### Sending Updates About Maintenance Events

> **Note About Automated Maintenance Events**: On the Maintenance Event page you may see `Automation: Running`  with red text in parenthesis next to it reading `(Disable)`.
Once `(Disable)` has been clicked and subsequently disabled it cannot be re-enabled.
In order to `Post Update` and `Finish Maintenance` the automated Maintenance Event must be `(Disable)`.
After being disabled all future updates to this Maintenance Event must be manual updates from that point forward.

To send an update about a maintenance event, such as a reminder, go to the *Maintenances* tab in Status.io and select the one that needs an update. On the maintenance's information page, make note of whether automatic email reminders are set to go out. If yes, make sure not to send email broadcasts for your update in order to avoid sending duplicate reminders to subscribers. Once ready to update, select the *Post Update Without Starting* button.

![Post Update Without Starting](/images/support/cmoc_post_without_rescheduling.png)

Enter the update details provided by the Infrastructure team and have them confirm the appropriate broadcast channels before proceeding to send the update. If "Send Reminders" was enabled in the maintenance information page, be sure not to check "Notify email subscribers" in the broadcast settings.

![Broadcast Maintenance Update](/images/support/cmoc_broadcast_maintenance_update.png)

Once the GitLab Status Twitter account has posted about the maintenance schedule, send a link of the tweet to the `#social_media_action` channel to let the social team know that you'd like amplification on our GitLab brand twitter account. This should only be used once during a selected scheduled maintenance timeline, preferably mid-week prior to the scheduled maintenance.

## End of Shift Handover Procedure

The CMOC rotation has some specific procedures for handover that substantiate what's in the general [On-call - Ending your on-call shift](/handbook/support/on-call/index.html#ending-your-on-call-shift)) section.

It's necessary to inform the ingress CMOC of any relevant activity that ocurred during your shift or if there are incidents that are still ongoing. To perform a handover create an issue in the [CMOC Handover](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/issues) issue tracker using the [Handover](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/issues/new?issuable_template=Handover) template. Do this even if nothing happened during your shift, signaling that everything is fine is also useful information.

If handover occurs during an active incident where the quick summary you'd provide in the issue is insufficient to properly prepare the ingress CMOC of the situation, you are encouraged to start a Zoom call in [#support_gitlab-com](https://gitlab.slack.com/archives/C4XFU81LG) and invite the ingress CMOC to it so that they can be caught up synchronously. You can use the following slash command to expedite setting the meeting up.

```plain
/zoom meeting CMOC Handover Briefing
```

While the CMOC Handover issue tracker is open to the public, the template [defaults to confidential](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3504) in an effort to prevent accidental leakage of confidential information.

Contact requests opened during a shift should by default be assigned to the Support Engineer that created the ticket. It can be useful to mention the request for awareness of the next shift. However, it's not necessary to re-assign the contact request or continue to include it in subsequent handoffs unless action needs to be taken. In many cases, users don't respond to the contact request. You may want to consider re-assigning contact requests and handing it off to another shift if you intend to be OOO, for example.

## CMOC Training Resources

### CMOC Shadow PagerDuty Schedule

**NOTE:** When adding yourself to this rotation, be aware that adjusting the `Time Zone` field at the top of the page will adjust it for all users, not just yourself. Before you navigate away, please reset the timezone to UTC.

The [CMOC Shadow Schedule](https://gitlab.pagerduty.com/schedules#PQBZCSY) can be used by anyone who wishes to shadow the CMOC to learn before officially acting as CMOC. A soon-to-be-CMOC can fill out the [Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) to get added to the rotation. Or, to shadow for a short span of days, they can click *Schedule an Override*, then click *Custom duration* and then select the time zone and the start and end dates and times before clicking the *Create Override* button to save the changes. To remove overrides, click the **x** on the override to be removed in the list of **Upcoming Overrides** on the right side of the screen.

> **Note About CMOC Shadowing**: When the CMOC shadow PagerDuty schedule is active the engineer will receive notifications and get paged the same way as when on the CMOC schedule. **Do not acknowledge or resolve any incidents when on the CMOC shadow schedule as this will stop any potential pages to the real CMOC!**

### CMOC Training Activities

A "training activity" for CMOCs is an activity under which CMOCs are exposed to items in the workflow with the expressed purpose of maintaining or increasing performance against [CMOC performance indicators](#cmoc-performance-indicators).

Some example training activities are:

- Tabletop exercises
- A "CMOC Squawk" in which CMOCs in a region synchronously or asynchronously discuss process improvements, tips and tricks
- Being the CMOC or shadowing an actual incident: real life training is training too!
- [Practice Events](/handbook/support/workflows/cmoc_workflows#cmoc-practice-events)

#### CMOC Practice events

Practice events are meant to provide more experience for the person wanting to CMOC a real incident. They include a practice scenario that requires them to update the status page, communicate with the incident manager as well as provide more confidence.

To start a CMOC Practice event ask your trainer or any support engineer to go to the [Support Team Meta issue tracker](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=CMOC%20Practice%20Event) and to create an issue with the [CMOC Practice Event](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/CMOC%20Practice%20Event.md) issue template.
