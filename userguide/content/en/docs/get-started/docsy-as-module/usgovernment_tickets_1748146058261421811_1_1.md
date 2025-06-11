---
title: Working with US Government Support tickets
category: Handling tickets
description: "Support Engineering workflow detailing how to work on US Government Tickets"
---

US Government Support generally follows the [working on tickets](/handbook/support/workflows/working-on-tickets#what-is-the-working-on-tickets-workflow) flow for global with a few exceptions.

US Government Support has a number of engineers with [verified US Citizenship](#access-limited-to-us-citizens) that have a 100% focus on addressing new and existing cases in the US Government Support Portal. The agents focused on this instance should distribute effort and work new cases from the [Support view](https://gitlab-federal-support.zendesk.com/agent/filters/360196736831). When replying to a new case the agent making the public comment should also assign the case to themselves. Those without a 50% or higher focus on US Government but do have access to the instance are still encouraged to participate through pairing sessions, joining customer calls, and assisting with gaps in knowledge where possible. Non-fully focused global engineers are not encouraged to assign new cases to themselves.

After 7 days of a case being in the `pending` state an automation will run that puts the case back into an `open` state. This allows for the agent to either [follow up with the user](#following-up) on the requested actions or move the case to a `solved` state if they believe the issue in the case is resolved.

There are events where customers will request to re-assign a Zendesk case to a co-worker. We handle this using the `Change` option at the top of the ticket by the respondents email.
The context for this flow is because [CCs are disabled](https://about.gitlab.com/support/us-government-support/#ccs-are-disabled).

## Access limited to US Citizens

Only our US Citizen Support Engineers have access to the [US Government Zendesk Instance](/handbook/security/customer-support-operations/docs/zendesk#zendesk-us-government). If you are a US Citizen and would like to get access and contribute you can open an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) for either a [light agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) or [full agent](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)(limited to Support/Security Team members).

## Communication Guidelines

Issues relating to tickets received in the US Government Zendesk Instance may be discussed outside of the US Government instance with a few key caveats.  Identifying information that includes system names, organization names, customer names, specific infrastructure details (IP address, Hostnames, etc) and logfiles should be limited to internal tickets. Specifics about the technical problem's nature are fine to discuss in chat, issues, and elsewhere publicly but discretion should be used when communicating log snippets, screenshots, and other data to ensure no identifying information is disclosed. When in doubt, ask a manager or the customer's CSM if the information is acceptable to be communicated to non-US citizens.

For any assistance with log review or confidential information within a ticket it is recommended to directly reach out to other engineers with access to the US Government instance within Zendesk using an internal comment to avoid accidental disclosure.

Government tickets can be linked publicly, such as in an issue or merge request as the link itself does not reveal any information, just avoid naming the link with any identifiable information. For
    example: `[US Government Internal Ticket](<ticket_link>)`.

When pairing over video chat, be sure you only pair with engineers that have access to the US Government instance and avoid screen sharing content from the US Government Support Instance, logs, or other information that is required to be kept confidential.

When providing links to documentation, it's possible an organization's mail server may strip embedded links prior to delivering the ticket update to the receiver. In order to continue to provide our documentation to customers, consider using an identifier in the reply body, then "footnotes" towards the end of the ticket. For example:

```text
This is the ticket reply body where we are talking docs Title of documentation Page(1). Here's some more documentation that's relevant, Title of documentation page (2).

---

1. Documentation Link
2. Documentation Link
---
```

### Following up

The US Government team has implemented an automated follow up system that checks in with the submitter of a case when the case has been in a `pending` state for 7 days. After 14 consecutive days in a pending state with no replies from the submitter the case will automatically move to a `solved` state.

#### Extending the follow up time

There can be certain situations in which a task may take longer than 7 days for the customer to make changes and provide feedback. If there has been an agreed upon day in the future where the customer has agreed they will update us then an agent may opt to use the `Support::Block Automatic Reopen` macro. This macro will add the `blocked_by` tag and create an internal comment where the agent must fill in the details indicating why the case should remain in pending. The `blocked_by` tag must be manually removed by an agent when the agreed upon date has been reached to resume the standard pending to follow-up workflow. Some best practice suggestions for using the macro are below:

- Set a [task reminder](/handbook/security/customer-support-operations/docs/zendesk/apps/#zendesk-super-app-1) for the date that we should hear back from the user.
- Regularly review pending cases to ensure we are receiving follow-up by the date promised
- Put the relevant issue or case number in the blocked-by reason so that others may be aware and follow-up on your behalf

### How to reference customer information securely in chat?

You may leverage links to records in controlled access systems such as Salesforce or Zendesk in order to securely provide information. Note that if you have Slack link expansion enabled for SFDC records you should immediately remove the expansion after making your comment.

Examples:

- "This user <https://gitlab-federal-support.zendesk.com/users/398443026291/> is struggling with Geo setup..."
- "The person who submitted the case that got bounced back is a member of this organization: <https://gitlab.my.salesforce.com/0014M00001hHHKF>"

The use of an acronym to discuss an organization is **not permitted** in the `#spt_us-government` channel to prevent disclosure of sensitive information.

## Ticket assignment via round-robin

During core business hours tickets are assigned as they are created based on a round-robin tool built by Support Ops. This tool creates a list of available support engineers on shift, omitting those who are on PTO per the time off calendar. It then checks each engineer's overall case weighting and assigns the new case to the engineer with the lowest overall weighting.

### Consolidating assignment for org tickets at the same time

In some cases, a single requester or org may create multiple tickets within a short period (a day or two) that will get round-robin assigned to multiple support engineers. Splitting the work in this way can lead to duplicated work as multiple engineers ask for similar files and try to build the same context around the environment and any recent changes. To avoid this, a method for grouping these tickets under a single assignee goes as following:

1. A customer creates more than one ticket in a day or two, those tickets are round-robin assigned.
1. Those support engineers who were assigned tickets from this customer discuss in Slack or in a crush session the tickets to determine if they are *probably* about the same environment.
1. One of the support engineers agrees to take assignment of all this customer's tickets created during this period (may take on new tickets if created shortly after).
1. That engineer marks themselves as overburdened to be taken out of the round-robin until the engineer decides they are ready to take on new tickets.
1. If new tickets come in from the same customer shortly after an engineer has taken ownership of other tickets, the new tickets should be reviewed to determine if they fit in the same environment. If they do, the engineer should take ownership of them as well. This will probably extend the time that engineer is out of the round-robin.

**What happens if no one wants to take the tickets?** Just keep tickets assigned to the people to whom the round-robin first assigned them.

## Getting help with a ticket

Getting help with a US Government ticket can be tricky since some information must be kept confidential. However, there are many times when a non-US Government engineer may be the subject matter expert needed to help efficiently resolve a US Government Support case. It is encouraged to ask questions in `#support_self-managed` and other Slack channels provided the [Communication Guidelines](#communication-guidelines) are followed.

If you need a manager's help with a ticket, please keep in mind that only US Citizens have access to our US Government Instance, which means that some of our managers cannot help you with tickets. If you are a US Citizen working in US Government and your manager isn't, please feel free to reach out to a different manager if you are unable to address an issue without sharing confidential information.

### Discussion issues from tickets

In order to better facilitate asynchronous collaboration on tickets within the US Government ticket system, we have a macro which allows US Government support engineers to trigger the creation of a confidential GitLab issue connected with the ticket. This issue will be open for the duration of the ticket and can provide a way for US Government support engineers to relay information to collaborators.

**NOTE:
It is important to never included any customer specific information inside of these issues, because even though they are confidential, they are still visible to people who do not have access to the US Government ticket system.**

To trigger the creation of one of these issues, select the `General::Create discussion issue` macro from the macros menu then submit the ticket. The support ops bot will then create an issue and link to it in an internal note. At first, this issue will contain very little information. The title will include the ticket number and the body will contain a link to the ticket plus empty sections, marked with headers, where you can provide information as you have it. All of these sections are optional.

Edit the issue to include as much information about the ticket as possible without breaching our confidentiality requirements, then share the link to the issue with collaborators and/or mention others to engage them through GitLab's To-Do system. Finally, set yourself as the assignee.

Once the ticket has been marked as solved, the support ops bot will automatically close the issue.

## Checking for access

When discussing cases or issues with others in GitLab it may be difficult to ensure they meet the [access requirements](#access-limited-to-us-citizens) to be allowed to receive confidential or sensitive information via chat, screen share, or call. The single source of truth is whether or not that person has a US Government Zendesk account, this can be either full or light agent access. The individuals with access have been confirmed by people-ops to be allowed access to this information. The support-ops team has built a handy tool for team members to check whether a person has access to US Government Zendesk. The tool can be accessed by GitLab team members via [this link](https://gitlab-com.gitlab.io/support/support-ops/zendesk-us-federal-project/) please note that it updates weekly on Sundays at 00:00 UTC. If you need verification for someone who was added more recently you can always ask a US Government Support Manager or Support-Ops Manager to validate. If you are not able to find a person's name in this tool the user should be considered ineligible to access the instance and you should refer to the [Communication Guidelines](#communication-guidelines) for steps on how to proceed.

## US Government Support Discovery Calls

Sometimes it can be difficult for customers to capture and convey all of the necessary information for troubleshooting the GitLab stack on their own. When filing a technical support case in the US Government portal a customer may indicate they would like to hold a discovery session with the case assignee to demonstrate their issue, collect necessary logs/screenshots/etc, and return to working asynchronously in the support case.

When a customer selects the checkbox to indicate they would like a session there will be an internal note at the beginning of the case history indicating they have made the request. The assignee should review all the provided information and select the `General::Discovery call response` macro to begin scheduling the session. The assignee will need to fill in the single use calendly link and request any additional information from the user that may be relevant.

There is a Calendly managed event template called **GitLab US Federal Customer Discovery Call** and it can be assigned to an agent by asking a Calendly admin. This event type is a 30 minute session with 1 day lead time.

It is recommended to continue working the case async while awaiting the discovery call session.

When the scheduled session occurs the agent should set the expectations that we will be asking the customer to demonstrate the issue and then work with them to create a collection of artifacts that will be uploaded to the case at a later time.

A short post call synopsis reminding the customer of what artifacts were collected and providing a technical description of what was observed is recommended to ensure both parties have the same understanding of next steps.

## US Government Shift Engineer Workflow

The US Government shift engineers are a hybrid role between US Government support and global support, they work in both support portals. This workflow outlines the hierarchy of priorities for shift engineers to follow:

1. US Government Emergencies (while on-call)
1. US Government High priority cases for 24x7 Eligible customers ([24x7 Entitled Customers view](https://gitlab-federal-support.zendesk.com/agent/filters/20166453511316))
1. Global Support cases in Custom Personal view ([Create the view](#create-the-personal-view-in-global-support))
1. US Government cases that are breached or soon to breach

### Create the personal view in Global Support

The following will describe how to create the personal view to list cases in Global where US Gov shift engineers can contribute.

1. Navigate to the [create new view](https://gitlab.zendesk.com/admin/workspaces/agent-workspace/views/new) section of GitLab's Global Support Portal.
1. Set the name to `US Government Shift View`
1. Use the following conditions for **Tickets must meet all of these conditions to appear in the view**:
    - `Status` - `Less than` - `Solved`
    - `Assignee` - `is` `-`
    - `Preferred Region for Support` - `is` - `Americas, USA`
1. Use the following conditions for **Tickets can meet any of these conditions to appear in the view**
    - `Form` - `is` - `Self-Managed`
    - `Form` - `is` - `SaaS`
    - `Form` - `is` - `SaaS Account`
    - `Form` - `is` - `GitLab Dedicated`
1. For **Formatting Options** please use the following columns:
    - `ID`
    - `SLA`
    - `Subject`
    - `Requester`
    - `Assignee`
    - `Organization`
    - `Priority`
    - `Request date`
1. Group by: `Priority` - Descending
1. Order by: `SLA` - Ascending

## GitLab Dedicated for Government

### High-Level Notes

1. Don't panic.
1. **Application or infrastructure**? In any GitLab Dedicated ticket, an important thing to try to determine is whether it's a GitLab application problem or an infrastructure issue. Use the [logs](/handbook/support/workflows/dedicated_logs/) and [observability metrics](/handbook/support/workflows/dedicated_instance_health) to guide you.
1. Logs and Metrics are "in-boundary" and require VPN access. If you have questions or problems, ask in `#g_dedicated-us-pubsec`. Instructions for set up are [here](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/remote-access-vpn.md?ref_type=heads)

#### Getting Help

| What | Useful for |
| ------ | ------ |
| [GitLab Dedicated Overview](/handbook/support/workflows/dedicated/) | A good place to start for basic questions |
| [Troubleshooting Tables](/handbook/support/workflows/saas_sm_cheatsheet/) | Understanding "what's different?" about GitLab Dedicated |
| Open an [RFH](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team) on `CompSecGov` | Requesting [configuration changes](/handbook/support/workflows/dedicated/#configuration-changes) on behalf of customers, getting help from SREs on things that are not incidents |
| [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) on Slack | General questions for Support folks focused on GitLab Dedicated (Commercial or Government) |

### Requests for Help

Requests for Help live "In-Boundary" on [CompSecGov](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/incident-management). Access to CompSecGov comes through [FedRAMP Okta](https://gitlabus.okta.com). If you need, but don't have, access contact Wade or Ian to get the process started.  

In any GitLab Dedicated ticket, an important thing to try to determine is whether it's a GitLab application problem or an infrastructure issue. Infrastructure-issue RFHs follow the CompSecGov procedure and Application-issue RFHs will follow the [typical procedure](/handbook/support/workflows/how-to-get-help/#how-to-formally-request-help-from-the-gitlab-development-team)

To open an RFH on CompSecGov, go to the `Incident Management` group, and open a new issue using the RFH issue template. 

#### Handling Emergencies

Emergencies from [GitLab Dedicated for Government](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated_for_government/) customers come through the [US Government Emergency support](https://about.gitlab.com/support/us-government-support/#us-government-emergency-support) rotation.

The Global workflow for [Handling GitLab Dedicated emergencies](/handbook/support/workflows/dedicated/#handling-gitlab-dedicated-emergencies) is your guide.

Consider using the `@spt_focus-dedicated` Slack handle to ping members of the GitLab Support team who focus on GitLab Dedicated for additional assistance.

The [GitLab Dedicated US PubSec On-call runbook](https://gitlab.com/gitlab-com/gl-infra/us-public-sector/documentation/-/blob/main/runbooks/on-call.md) is the SSOT and the US Government Support team should bookmark and reference it.
