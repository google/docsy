---
title: How to be a Support Manager On-call
category: On-call
description: "Describes the role and responsibilities for the Support Managers rotation in Support Engineering"
---

## Introduction

The Support Manager On-call helps coordinate responses to urgent and important situations that arise within the scope of delivering a quality
experience to GitLab customers.

The Support Manager On-call is one of the rotations that make up [GitLab Support On-call](/handbook/support/on-call/).

## Expectations for Support Manager On-call

As part of [GitLab Support on-call](/handbook/support/on-call/), Support Managers serve in a rotation. The support manager on-call is responsible generally for:

1. Ensuring customer emergencies are [handled promptly and accurately](#handling-customer-emergencies-and-incidents), [according to SLAs](https://about.gitlab.com/support/)
1. [Handling Support Ticket Attention Requests](/handbook/support/internal-support/support-ticket-attention-requests) during [Global Support Hours](https://about.gitlab.com/support/#hours-of-operation)
1. Acting as a [notification point for security incidents](#act-as-a-notification-point-for-security-incidents)
1. Help avoid SLA breaches. See [Working on Tickets](/handbook/support/workflows/working-on-tickets) for details.

**Note:** You (or the CMOC/CEOC) may sometimes be required to contact GitLab users on behalf of another GitLab team (such as the SIRT team). Please follow the [Sending Notices workflow](/handbook/support/workflows/sending_notices) to action these requests.

## Handling customer emergencies and incidents

The [Support Engineer on-call](/handbook/support/on-call/) is the first responder for customer emergencies. Managers support this work as follows:

- Act as the next-tier escalation point for emergency pages that get missed (you will be notified automatically by PagerDuty).
- Respond to new emergency requests by helping the on-call engineer [determine if the situation qualifies as an emergency](/handbook/support/workflows/customer_emergencies_workflows#determine-if-the-situation-qualifies-as-an-emergency) or should be [granted an exception](/handbook/support/workflows/emergency_exception_workflow#exception-criteria)
- Assist the on-call engineer in difficult communications with the customer,
  such as [telling them that their request does not qualify as an emergency]({{< ref "customer_emergencies_workflows#communicate-the-priority-downgrade" >}})
- Be aware of ongoing emergencies and assist or lead in our initial response as appropriate
- During an emergency: find additional staff for subject-matter expertise; replace the on-call engineer if needed; lead any Zoom call(s) as needed; hand off the emergency to the next on-call manager.
- Find additional staff when there are [multiple emergencies](/handbook/support/on-call/#handling-multiple-simultaneous-emergencies).
- Convert [customer emergencies into Account Escalations](/handbook/support/workflows/emergency-to-escalation-process) as needed.

### Situations that Might or Might not Be Emergencies

At times, an emergency page may come in for a situation that is not quite yet an emergency, but may quickly become one. In this situation, we want to assist the customer in preventing the situation from becoming an emergency. If this situation arises during working hours, the Support Engineer on-call may reach out for assistance. The on-call manager should respond by finding additional staff to handle the request as a `high` priority ticket that requires an immediate response. If this situation arises on a weekend, the Support Engineer on-call will reach out to the manager on-call if they are handling another emergency. In that case, the manager on-call should assist or attempt to find additional staff to assist.

See more examples of [situations that might be emergencies](/handbook/support/workflows/emergency_exception_workflow#examples-of-situations-that-might-or-might-not-qualify-for-an-exception) and [situations that are not emergencies](/handbook/support/workflows/emergency_exception_workflow#situations-that-are-not-emergencies).

### Paging backup engineers on weekends in APAC

The APAC region has a pool of [**backup engineers**](/handbook/support/workflows/customer_emergencies_workflows) that are available to reach out to during the weekend on-call hours, in the event that a concurrent emergency occurs.

If you are the Support Manager on-call and a concurrent emergency occurs, you will be paged by the Support Engineer On-call escalated via Pagerduty. You will then be responsible for checking the current situation and determining if the **backup engineers** need to be paged. If so, the Support Manager will then **manually page** the **backup engineers**. At this point, the backup engineers are all pinged. Only one backup engineer needs to acknowledge the page and lend assistance, and there is no expectation that **backup engineers** will be available to respond to a page.

To page the backup pool, you can:

1. Use the `/pd trigger` command in any Slack channel to create a new incident to notify the current list of support engineers; or
1. Create a `+ New Incident` directly in PagerDuty.

When prompted, update:

- **Impacted Service:** Customer Emergencies - APAC Backup Pool
- **Title:** Duplicate emergency - ZD#123456
- **Description:** Provide a brief summary of the emergency.
- *Leave Assign To: and Priority: blank.*

*For further details, please refer to [STM#4583](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4583).*

## Handling Support Ticket Attention Requests during business hours

STARs ([Support Ticket Attention Requests](/handbook/support/internal-support/support-ticket-attention-requests)) are handled by the Support Manager on-call.

Your responsibilities are as follows:

1. Triage and investigate customer tickets and Internal Requests that are announced in the `#support_ticket-attention-requests` Slack channel.
1. Establish ownership and assignment for starred tickets.

You can use [Support Team Skills by Subject](https://gitlab-com.gitlab.io/support/team/skills-by-subject) to find appropriate engineers to assign.

A very high percentage of starred tickets involve licenses and renewals. For guidance in handling these, please see the [Workflow for handling Plan/License Ticket Attention Requests](/handbook/support/license-and-renewals/workflows/managers_working_with_extensions).

**NOTE:** GitLab team members may attempt to draw attention to tickets in regular support Slack channels (`#support_self-managed`, `#support_gitlab-com`, `#support_leadership`). Redirect the team member by responding to their post with **only the `:escalate:` emoji**, which will send an automated and anonymous reply describing the correct process.

**NOTE:** There are two other distinct situations, not discussed on this page:

1. [Account Escalations / Escalated Customers](/handbook/customer-success/csm/escalations/)
1. [Emergencies that become Account Escalations](/handbook/support/workflows/emergency-to-escalation-process)

### Mechanics of handling starred tickets

Some steps of STAR treatment are handled by bots and auto-responders. The text `**BOT**` is used below to show these steps.

1. When someone initiates a STAR using the [STAR Form](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/support_escalation):
   1. **BOT**: Creates a new Issue in the [STAR issue tracker](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues).
   1. **BOT**: Slack announcement is posted to `#support_ticket-attention-requests`, with an `@mention` of the current on-call Support Manager's name.
   1. In many cases **BOT** adds an internal note to the Zendesk ticket and STAR Issue.
1. Add the `:eyes:` emoji to the Slack thread to acknowledge you are looking at the STAR.
1. In the Zendesk ticket, use the `Support::Managers::Escalated Ticket` macro to crosslink the STAR Issue and discussion thread, and tag the ticket.
1. Assess the ticket, and the business case justifying the request (triage).
   - Questions to the initiator can be put in Slack (synchronous) or in the STAR Issue (asynchronous).
   - Final dispensation should be documented in the STAR Issue, because Slack history disappears.
1. If you need input or help from engineers, initiate a new thread in either the [Slack channel of the SGG](/handbook/support/support-global-groups/#slack) the ticket belongs to, `#support_gitlab-com`, `#support_self-managed` or `#support_licensing-subscription`.
   - @ mention the assigned engineer and any engineer who previously replied in the ticket, if they are working this day
   - Then return to the thread in `#support_ticket-attention-requests` and comment that all **technical** discussion is happening in the ticket (or in the new thread). This helps ensure all technical discussion stays in one channel/thread.
   - When seeking an engineer to act as the DRI or otherwise move the ticket forward, it is best to identify a Support Engineer who is not on-call or already working on a starred ticket. This helps to ensure that the engineer who assists with the new starred ticket has enough bandwidth to prioritize it.
1. [Resolve the STAR thread](#resolving-a-star).

### Unstarring a ticket - rejecting the request for additional attention

There are times when a STAR does not meet the threshold for additional attention. See the [main STAR page](/handbook/support/internal-support/support-ticket-attention-requests) for details. In such situations, return to the thread in `#support_ticket-attention-requests` and notify the initiator.

### Resolving a STAR

A STAR is considered resolved when the correct next-step is identified and underway; it does not require the Zendesk ticket to be Solved or Closed.

When a STAR is resolved:

1. Apply a `:green-check-mark:` emoji to the notification in `#support_ticket-attention-requests`.
1. Update the associated STAR Issue with an appropriate comment, and Close it.
1. Consider applying an appropriate label, such as one of the scoped label examples below, to help categorize and track trends.
    - `~Escalation::License-Issue` : Identifies the core issue at hand resolves around licensing / subscriptions
    - `~Escalation::Response-Time` : Useful when the purpose of the request is to expedite a response to an issue or case

## Handling mid ticket feedback requesting manager contact during business hours

Mid-ticket feedback link -- each Public Comment from a GitLab Support Engineer or Manager has a link to a form where a customer can provide feedback or request contact from a manager while the ticket is open (introduced in issue [2913](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2913)).
This feedback form creates issues in the customer feedback project, with a subject format of **Positive/Negative/Neutral feedback for ticket nnnnnn**, and is automatically assigned to the **SSAT reviewing manager**.
If the feedback is negative, there is an option to request manager contact (within 48hrs Mon-Fri). If this option is chosen, a Slack notification is sent to the #support_ticket-attention-requests channel.
The following action should be taken promptly:

1. Review feedback and ticket information and consider how urgent a reply is required. The reply should occur within 48hrs Mon-Fri. Replying sooner could prevent further customer frustration and a STAR or emergency situation.
1. Reply via the ticket or email, as appropriate, sharing next steps and offer your Calendly link to schedule a video call.
1. Remain as DRI until the ticket is back on track.
1. Update the Feedback Issue as follows:
   1. Add the text of any communication as a comment in the Feedback Issue.
   1. Apply the label ~ssat-manager-contacted-customer.
   1. /close the Feedback Issue; followup continues via previously chosen communication method.
   1. After closing the Issue, if there are any additional actions that arise from your interaction with the customer, go back and note them in the Feedback Issue.

## Act as a notification point for security incidents

When GitLab experiences a [security incident](/handbook/security/security-operations/sirt/security-incident-communication-plan#extended-team-roles-responsibilities-and-points-of-contact), the Support Manager on-call is responsible for triaging and responding to customer communications stemming from the security incident. This may include involving the [CMOC](/handbook/support/workflows/cmoc_workflows).

## Provide assistance with Upgrade Assistance Requests

[Upgrade assistance requests](https://about.gitlab.com/support/scheduling-upgrade-assistance/) are currently triaged by engineers as part of the [Working on Tickets](/handbook/support/workflows/working-on-tickets) but in some cases the triaging agent(s) may need assistance from Support management.

### Example situations and potential solutions

- User requesting Upgrade Assistance outside of [GitLab Support Hours](https://about.gitlab.com/support/#definitions-of-gitlab-global-support-hours)
  - Reach out to your reports to determine whether any individuals would be open to shifting their working hours to accommodate the day/time being requested
  - Work with the end user to reschedule for another date/time that is more amenable to support staffing
- Last minute change in assignee availability
  - Work with available team members to determine if the upgrade assistance can be transferred to a new engineer and communicate the change(s) to the end user for awareness

## Reassigning or swapping your on-call shift

If you will be unable to handle on-call for a few hours on a weekday due to being engaged in a customer call or otherwise, arrange for another manager to handle on-call responsibilities temporarily:

1. Ask a specific manager to cover; if that doesn't work,
1. Post a request in `#support_leadership` for any manager to volunteer to cover.

To swap your on-call duty with someone, follow the steps listed under [Swapping on-call duty](/handbook/support/on-call/#swapping-on-call-duty).

## Manually triggering a PagerDuty notification

At times, you may receive an escalation where the customer is reporting a situation that qualifies for emergency support under our [definitions of support impact](https://about.gitlab.com/support/definitions/). In such cases you may elect to trigger an emergency directly, rather than asking the customer to open a new emergency ticket.

You can trigger a PagerDuty notification by using the [`Support::Managers::Trigger manual emergency`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360074073259) macro in Zendesk.

Alternatively, you can manually trigger a PagerDuty notification through PagerDuty itself.

Login to [gitlab.pagerduty.com](https://gitlab.pagerduty.com) and select **+ New Incident** from the upper right corner. Then fill out the form as follows:

- **Impacted Service**: Customer Support
- **Assign to**: Customer Emergency Rotation
- **Title**: Add the Zendesk ticket number here

No other fields need to be filled out, therefore you may then click **Create Incident**

![Manually triggering an emergency](/images/support/manually-trigger-emergency.png)

## Special Handling Notes

[Special handling notes](/handbook/support/workflows/customer_emergencies_workflows#special-handling-notes) are documented on the [customer emergencies on-call workflow](/handbook/support/workflows/customer_emergencies_workflows). As a Support Manager, you are empowered to handle these (and other) unique situations
according to your judgment. If you need help or advice, don't hesitate to [escalate to unblock](/handbook/values/#escalate-to-unblock).

### Compromised instances

We advise Support Engineers to contact a Support Manager before offering a call in the case of a [compromised instance](/handbook/support/workflows/customer_emergencies_workflows#compromised-instances).

Support's role in these cases is to help the customer get to a good, known working state as quickly as possible. The fastest route will be to restore to a previously known good state (most often by restoring from a backup). Customers with an instance in this state will have other concerns though, and likely be in a heightened emotional state:

- How did this happen? (Which we may or may not easily be able to answer, and they should do this forensic analysis *after* they have restored.)
- How can we recover from this without restoring? (They can't "safely". We advise a restore to have 100% confidence in their environment.)
- What data was accessed? (This is always a challenging question, and if the compromise was led by a human, they may have covered their tracks. We may never have full knowledge. They should start restoring ASAP, and do forensics after.)

If moving towards a call is the right thing to do, consider joining the call *before* (or instead of) the engineer to communicate the scope of what can be accomplished.

Example framework for a call we establish (or a bridge call the customer is leading):

> Hi `customer`. Based on the ticket it sounds likely that your instance is compromised. In cases like these we've prepared a set of best practices ([GitLab internal link](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Incident/Compromised%20Instance.yaml)) to help you get back up and running as quickly as possible. We're here to support and advise where GitLab is concerned. Unfortunately, GitLab cannot provide a one-size-fits-all solution or comprehensive checklist to completely secure a server that has been compromised. GitLab recommends following your organization's established incident response plan whenever possible.
> The first step is to shut down the instance, create a new one at the same version, and restore your most recent backup. This ensures you are operating on a "clean" environment, where you have confidence that all the software installed is unmodified. Please get that process started;  we are monitoring this ticket with HIGH priority. If you have any problems getting set up or restoring, please let us know in the ticket immediately.
> After your new instance is set up, you need to upgrade to a more recent version of GitLab before you expose this server to the public Internet. If you have any trouble with the upgrade process, let us know in the ticket immediately.
> Finally, as described in the recovery guide previously sent (should have been shared in the ticket via the [Compromised Instance Zendesk macro](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Incident/Compromised%20Instance.yaml), you should do an audit of the integrity of GitLab itself: checking for any users, code, webhooks, runners or other settings that you did not enable yourselves. If you have any questions, please let us know in the ticket.
> I'm going to leave the call now, but rest assured that we're on standby and ready to help as you work through this.
