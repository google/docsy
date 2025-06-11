---
title: GitLab Support On-Call Guide
description: >-
  For customers that have Priority Support, the Support Engineering Team is
  on-call and available to assist with emergencies
---

## On-call in GitLab Support

There are five on-call rotations in Support:

- [Communications Manager on-call (CMOC)](/handbook/support/workflows/cmoc_workflows) - in which Support Engineers drive public communication in the incident management process during GitLab.com operational emergencies.
- [Customer Emergencies on-call (CEOC)](/handbook/support/workflows/customer_emergencies_workflows)- in which Support Engineers respond to and coordinate the resolution of emergency reports from Self-managed and GitLab.com customers
- [US Government Emergencies](/handbook/support/workflows/customer_emergencies_workflows#us-federal-on-call) - which is similar to Customer Emergencies, but has different hours and a US Citizen requirement to participate in
- [Support Manager On-call (SMOC)](/handbook/support/workflows/support_manager-on-call) - in which Support Managers are an escalation point for issues raised by Support Engineers and GitLab team members and missed PagerDuty notifications
- [Support Operations On-call](/handbook/support/workflows/support_operations-on-call) - in which Support Readiness team members who focus on our Operations are available to be paged if there's an operational emergency

For customers that have [Priority Support](https://about.gitlab.com/support/#priority-support), the Support Engineering Team is on-call in these capacities and available to assist with emergencies. What constitutes an emergency is defined in our [definitions of support impact](https://about.gitlab.com/support/definitions/#definitions-of-support-impact).

We take on-call seriously. There are [escalation policies](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH) in place so that if a first responder does not respond fast enough another team member or members is/are alerted. Such policies aren't expected to ever be triggered, but they cover extreme and unforeseeable circumstances.

## Expectations for Support on-call

### Be alert and available

When you are on call you are expected to be available and ready to respond to PagerDuty pings as soon as possible, and certainly within the emergency response time set by our [Service Level Agreements (SLAs)](https://about.gitlab.com/support/#priority-support).

If you have plans outside of your work space while being on call, then being available may require bringing a laptop and reliable internet connection with you.

You should not be chained to your desk, but you should be equipped to acknowledge and act on PagerDuty alerts in a timely manner.

Be proactive in communicating your availability. Sometimes you can't be *immediately* available for every minute of your on-call shift. If you expect to be unavailable for a short period of time, send an FYI in Slack.

### Prepare ahead of your shift

Before your scheduled on-call shift begins, check [the Customer Events calendar](https://calendar.google.com/calendar/u/0/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b@group.calendar.google.com) for any customer activities to be aware of that may coincide with your shift. Familiarize yourself with the details of those events in case the customer ends up paging out for help.

**Note:** the Customer Events calendar is also linked at the top of the [#support_self-managed](https://gitlab.enterprise.slack.com/archives/C4Y5DRKLK) Slack channel for quick reference.

### Communicate

**Involve relevant stakeholders**: whether it's the e-group, a CSM, an [ASE (Assigned Support Engineer)](enhanced-support-offerings/offering-assigned-support-engineer/emergencies.md), subject matter experts or Support leadership, customer and operational emergencies should be known. See your rotation specific workflow for more detailed notes.

**Note:** You may sometimes be required to contact GitLab users on behalf of another GitLab team (such as the SIRT team). Please follow the [Sending Notices workflow](/handbook/support/workflows/sending_notices) to action these requests.

### Ask for help when needed

Rest assured: escalation is okay -- other GitLab team members are happy to help. Caring for our customers is a shared responsibility. Tag a Slack support-team Group if you haven't gotten help in your Slack thread. Tag the support managers if you need to escalate further.

If another support engineer joins your emergency call, feel free to assign them a role to divide up the labor.

> So and so would you please (take notes, reach out to this product team and ask for help, look up the code for this and see what you can find)?

### Take care of yourself

Make a real effort to de-stress during your on-call shift. After being on-call, consider taking time off, as noted in the [main GitLab Handbook](/handbook/people-group/paid-time-off/). Just being available for emergencies and outages causes stress, even if there are no pages. Resting is critical for proper functioning. Just let your team know.

When you get a notification from PagerDuty give yourself a few minutes to prepare.

- Get to someplace comfortable and quiet where you can devote your attention to the emergency.
- Take care of any biological needs.
- Grab a snack and some water.
- Breathe: you've got this.

When you're in a call, you do **not** need to provide *immediate* answers. You're allowed to pause for a few minutes for researching, asking for help, etc. Make sure to communicate -- let the other folks on the call know what you're doing. Example: "I need a few minutes to work through the code here and make sense of it".

#### Take a break

Consider taking breaks during emergency calls. Taking a break can help you to feel more refreshed while ensuring our customers get the best help we can provide.

At the beginning of the call, set expectations with the customer by letting them know you plan to take a break each 90 minutes (or so), if the call goes that long.

When the call begins, set a timer to count down and notify you that it's time for a break. (If you forget, observe the call duration in Zoom.)

When the timer goes off, summarize the current state, make sure everyone knows when the call will resume and how to join. If your timer expires but you're not at a reasonable stopping point, extend the timer by a small amount.

During the break:

- Stop actively working on the emergency
- [Take care of yourself](#take-care-of-yourself)
- Step away from your working area
- Reflect on the current troubleshooting strategy, the goal, and other options or possible causes

A 15 minute break during active troubleshooting can be a good way to reset, and help your brain come up with new, creative ideas to solve the problem at hand.

While the break should be restorative, in some cases it can be helpful to use some of the break time to form a plan for what you plan to try next when the call resumes.
If you've had a long week with multiple pages from PagerDuty or particularly long calls, consider asking someone to cover a day or some portion of a day so you can get some rest.

## How Support On-call works

### Schedule and escalation policy

By using a regional, follow-the-sun style of on-call Support we try to keep rotations within waking hours.
As a result, each region may organize their on-call rotations in a slightly different way, or have different requirements for hours of coverage.

PagerDuty is the single source of truth for on-call hours, rotation order and escalation policies.

**NOTE:** If a new alert has not been acknowledged after 10 minutes, the Support Manager on-call is alerted. After a further 5 minutes, if there is no acknowledgement, Senior Support Managers are alerted.

There are several ways to view current and future schedules:

1. In PagerDuty: View the [Customer Emergencies schedule (CEOC)](https://gitlab.pagerduty.com/schedules) and the [escalation policy](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH)
1. In Google Calendar, [subscribe to your on-call schedule](https://support.pagerduty.com/main/docs/schedules-in-apps#export-only-your-on-call-shifts)
1. In the [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack channel, you can see who is on-call for the different schedules today
1. In the [Support Pagerduty Worksheet](https://drive.google.com/drive/u/0/search?q=Support%20Pagerduty%20Worksheet), you may be able to see who will be on-call for future quarters.

#### Scheduling PagerDuty rotations

PagerDuty schedules for Support should be filled in by the Directly Responsible Individuals (DRIs) (such as readiness, support managers, etc.) directly on the [Support PagerDuty Worksheet](https://docs.google.com/spreadsheets/d/1FdUzVXCZleopfteC2QxW7LJwyylGWGl9hwXHMPkRHbQ/edit?usp=sharing).
The Readiness Team uses this sheet's contents to populate the following quarter's PagerDuty schedules during the first week of the final month of the quarter (Jan., Apr., Jul., Oct.). On the first Monday of the second month of a quarter the Readiness Team will post in the Slack [#support_leadership channel](https://gitlab.enterprise.slack.com/archives/C01F9S37AKT) a reminder  to the DRIs of the upcoming implementation due date.

Once the Readiness Team has implemented the next quarter's schedule they remove the scheduled rows from the sheet and PagerDuty becomes the SSOT for the next quarter. For dates that exceed the next quarter, the spreadsheet is the SSOT.

##### Availability

DRIs are free to use the spreadsheet to create the schedule in advance for up to one year from the current quarter. The schedule is **not** automatically populated and must be completely filled in for each quarter. If, at the time of Readiness implementation, there are blank spaces in one of the schedules, then the most relevant regional support director will be responsible for that shift until they find coverage and make an override in PagerDuty.

##### Schedule Changes

To make changes to the PagerDuty schedule, create a support team meta issue to discuss the changes with the affected participants. Once you decide on what changes to make, mention the support operations team in the issue to request that they implement those changes.

More details can be found in the Operations Team [Pagerduty change management documentation](/handbook/support/readiness/operations/docs/pagerduty/change_management/).

#### Your first on-call shift

For new team members approaching their first on-call shift, your [Support onboarding issue](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/New-Support-Team-Member-Start-Here.md) includes a section suggesting that you shadow a current on-call to gain familiarity with the process. After completing your shadow shift, work with your manager to get yourself added to the on-call rotation. For your first on-call week we recommend asking your Onboarding Buddy to be available as a secondary to help if an emergency comes in.

#### Make the schedule work for you

Your role is to make sure *someone* is available to respond to emergencies during the week you are scheduled. Flexibility is possible -- you can split work with others, or schedule overrides for a few hours or days. **You don't have to change vacation plans, or be at your desk all week!** It's OK to take a walk outside, if you have your phone and reception. This way you can acknowledge the page, and locate someone to help (using Slack).

If you prefer to work with a colleague as a secondary, discuss with team members or your manager and find partners who like sharing the role. You can work together during the week, and update PagerDuty as you wish (options include: split days into mornings and evenings, take alternate days, work as a primary and secondary). Your manager can play an active role in helping pair people who want to work like this.

#### Swapping on-call duty

To swap on-call duty with a colleague:

- Check with your team, see who has availability, and get confirmation from the person willing to cover you. Generally, it's best to ask for help as far in advance as possible.
- If you're unable to find coverage, alert your manager.
- To swap an on-call shift, or temporarily replace someone, create an override on the main schedule in PagerDuty.
    1. Open the [correct schedule](https://gitlab.pagerduty.com/schedules) in PagerDuty.
    1. Click on the relevant block of time in PagerDuty.
    1. Select "override" and fill in the name of the person you are swapping with.

See [the PagerDuty documentation](https://support.pagerduty.com/main/docs/edit-schedules#create-overrides) for complete steps.

#### Considerations in APAC

##### Shifts start on Tuesday and end on Monday

Due to the global on-call week starting on Monday, 09:00 Amsterdam time,
on-call shifts for APAC begin on Tuesday and end on Monday. The APAC team has
decided to retain this shift configuration as it allows for easier planning to
take a long weekend with Monday off and as a buffer to ease into the next
on-call. See the latest discussion in this [Support Team Meta issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3204).

##### Support Engineer shifts are 4-hour long shifts

APAC spans many timezones. Using an 8-hour shift to cover APAC business hours
results in an on-call shift that can finish as late 9pm local time for APAC east
based team members, and that starts as early as 04:30 local time for APAC west
team members.  Consequently the support engineer shifts are split into 2 groups,
APAC 1 and APAC 2, allowing each team member to cover hours within their normal
working hours.

Note that support manager on call shifts remain the full 8 hours.

##### Australia (Employees of GitLab PTY Ltd)

Team members employed by GitLab PTY Ltd *must* take time off in lieu within two
weeks of completing their on-call shift. Time in lieu should be requested via
Time Off by Deel, selecting the `On-Call Time in Lieu` option.

For more details, see the [GitLab PTY Australia Specific Benefits](/handbook/total-rewards/benefits/general-and-entity-benefits/pty-benefits-australia/#on-call-engineering-only)
page.

##### New Zealand (Employees of GitLab PTY Ltd NZ)

Team members employed by GitLab PTY Ltd NZ must avoid taking an on-call shift
which falls on a New Zealand public holiday. If this cannot be avoided, your
manager must be informed.

For more details, see the [GitLab PTY Ltd NZ Specific Benefits](/handbook/total-rewards/benefits/general-and-entity-benefits/pty-benefits-australia/#on-call-engineering-only-1) page.

### Starting on-call

Before your shift starts, *always* double-check that your alerts are working and your PagerDuty contact is up to date. Send a test page to make sure that you are receiving alerts correctly.

When your on-call shift starts, you should get notification(s) that your shift is starting (email or text, depending on your PagerDuty preferences).

### Ending your on-call shift

Before your shift ends, consider what tasks need to be handed over and make sure to proactively communicate them to the next engineer in the rotation.
This may mean [engaging the next On-call Support Engineer](#engaging-the-next-on-call-support-engineer) and bringing them into an active troubleshooting call, or it may mean providing instructions or context for situations
you have handled that have some follow-up action. For example:

- If you're in an active call with a customer and it's time to end your day, page the incoming on-call and make sure they're prepared to provide continuity by giving them an overview of what's been done before and what's next
  - Once you anticipate an active call to spill over into the next shift, you can try reaching out to the incoming on-call on Slack to make them aware of the upcoming need for a handover. As their shift has not yet started, they might not yet be available.
  During an emergency [taking a break](#take-a-break), can be very beneficial for results for our customers as it permits the incoming CEOC to get up to speed. The outgoing and incoming CEOC benefit from discussing ideas in a low pressure environment.
  - Advise the customer that the call will be paused, and agree on a time to reconvene.
  - During the 30 minute break, discuss with the incoming CEOC:
    - What is the problem the customer is facing?
    - What activities have been performed?
    - What issues or theories have been ruled out?
    - What is the current theory of the source of the issue?
    - What alternative options have not been considered?
    - Does this emergency require an escalation?
    - What are the next steps?
    - What assumptions have been made, and what has not been considered?

- if a SaaS customer paged in looking for log analysis and we're waiting on the SIRT team, let the incoming on-call know and consider having them send a message in the ticket informing the customer of the handover
- if a customer is still in a heightened state and is monitoring after an outage and *may* page the on-call engineer, let the incoming on-call know
- if a SaaS incident ended and we're monitoring the queues for new customer reports, provide the incoming on-call engineer with a list of actions they should take

Generally: if there's a situation that occurred (or is actively happening) during your shift it's your responsibility to prepare the next on-call engineers.

Some rotations have specific handover procedures:

- [CMOC - End of Shift Handover Procedure](/handbook/support/workflows/cmoc_workflows#end-of-shift-handover-procedure)
- [CEOC - Post-call](/handbook/support/workflows/customer_emergencies_workflows#post-call)

### Viewing all on-call pages in one place

You may want to monitor all on-call pages received by the Support team. You can
do this by joining the [`#spt_on-call`](https://gitlab.slack.com/archives/C02TSECGGV8)
Slack channel.

### Determining the On-call Support Engineer (CEOC)

To see who the *current* Support Engineer on-call is, you can:

- [Look up](https://slack.com/help/articles/360003534892-Browse-people-and-user-groups-in-Slack#browse-user-groups) who currently is a member of the `@ceoc` group/handle in Slack
- Log in to PagerDuty to view the [Customer Support](https://gitlab.pagerduty.com/service-directory/PL3TX00) service
- View the [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack channel, the Support Team Bot messages list who is on-call for the different schedules today

To see who the *upcoming* Support Engineer on-call is, you can view the individual on-call schedules for:

- [Customer Emergencies - APAC Group 1](https://gitlab.pagerduty.com/schedules/PQB9Q6K)
- [Customer Emergencies - APAC Group 2](https://gitlab.pagerduty.com/schedules/PKPXM8K)
- [Customer Emergencies - EMEA](https://gitlab.pagerduty.com/schedules/P9SV029)
- [Customer Emergencies - AMER Group 1](https://gitlab.pagerduty.com/schedules/PBLAHV7)
- [Customer Emergencies - AMER Group 2](https://gitlab.pagerduty.com/schedules/P9FKYZC)
- [Customer Emergencies - AMER Group 3](https://gitlab.pagerduty.com/schedules/PP28N7L)

When in doubt, you can always ask in `#support_leadership`.

### Determining the On-call Manager

To see who the *current* manager on-call is, you can:

- [Look up](https://slack.com/help/articles/360003534892-Browse-people-and-user-groups-in-Slack#browse-user-groups) who currently is a member of the `@support-manager-oncall` group/handle in Slack
- Log in to PagerDuty to view the [Support Managers](https://gitlab.pagerduty.com/services/PTFI8XR) service
- View the [`#spt_leaders-daily`](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) Slack channel, the Support Team Bot messages list who is on-call for the different schedules today

To see who the *upcoming* manager on-call is, you can view the individual on-call schedules for:

- [Support Manager - APAC](https://gitlab.pagerduty.com/schedules/PWBXTYX)
- [Support Manager - EMEA](https://gitlab.pagerduty.com/schedules/PXQ2ZAZ)
- [Support Manager - AMER](https://gitlab.pagerduty.com/schedules/PTI56V1)

When in doubt, you can always ask in `#support_leadership`.

### Engaging the next On-call Support Engineer

In this context it is assumed that your shift has ended and the "next" Support Engineer on-call is the *current* one as far as PagerDuty is concerned. In that case:

You can ping the current Support Engineer On-call in Slack by tagging `@ceoc`.

You should page the Support Engineer On-call via PagerDuty

- immediately on a weekend or a holiday.
- if you don't get a reply to your Slack ping after ten minutes.

To page the current Support Engineer On-call, you can:

- Use the `/pd trigger` command in Slack to create a new incident (for the `Customer Support` service)
- Manually create a new incident from the [Customer Support](https://gitlab.pagerduty.com/service-directory/PL3TX00) service

If your shift has **not** ended yet and you want to coordinate with the *upcoming* Support Engineer on-call, see [determining the On-call Support Engineer](#determining-the-on-call-support-engineer-ceoc).

### Engaging the On-call Manager

In some situations, you may need to engage the [Support Manager On-call](/handbook/support/workflows/support_manager-on-call) for assistance.

You can ping the current Support Manager On-call in Slack by tagging `@support-manager-oncall`.

You should page the Support Manager On-call via PagerDuty

- immediately on a weekend or a holiday.
- if you don't get a reply to your Slack ping after ten minutes.

To page the current Support Manager On-call, you can:

- Use the `/pd trigger` command in Slack to create a new incident (for the `Support Managers` service)
- Manually create a new incident from the [Support Managers](https://gitlab.pagerduty.com/services/PTFI8XR) service

This is for engaging the *current* on-call manager. If you need to coordinate with the upcoming on-call manager, see [determining the On-call Manager](#determining-the-on-call-manager).

## Mobile phone service and data reimbursement

We want to minimize the affect of on-call duty on your life. One way we do that is by offsetting any impact on your personal expenses.

You may expense the cost of your mobile phone service for any month that you are performing on-call duties. This is limited to **your** service cost itself, not any costs relating to the phone device, to a personal hotspot device or to services for other people on your phone plan.

We understand you may have plans outside of your normal workspace while you're on-call. If as a result you **need** to use your phone to provide internet service to your computer, then you may include additional data charges in your expense report.

## Keeping the PagerDuty contact up to date

PagerDuty phone and SMS notifications can come from a variety of different phone numbers and as such, it is important to stay up to date with this to avoid missed pages. You should use [this PagerDuty documentation page](https://support.pagerduty.com/main/docs/notification-phone-numbers) to download the most recent vCard or setup an automatically updated PagerDuty contact on your device.

If you use a "do not disturb" mode on your device, you should also allow the PagerDuty contact to bypass this.
