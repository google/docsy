---
title: "Incident Manager On Call onboarding"
---

## Introduction

This page is meant to be the starting point for onboarding as an Incident Managers.

As a means to ensure a healthy [Incident Manager](/handbook/engineering/infrastructure/incident-management/#incident-manager-responsibilities) rotation with sufficient staffing and no significant burden on any single individual we staff this role with Team Members from across Engineering.

An Incident Manager On Call (IMOC) has the following goals during a call:

- Identify/quantify impact to GitLab customers (metrics, customer support requests)
- Gather necessary folks to support area(s) of investigation/resolution
- Suggest *politely* that people not contributing leave the call, request that folks do so when the number of people in the call is a distraction (30 people as an somewhat arbitrary guideline).
- Validate recent releases and feature flags (can we roll back or change the flag?)
- Restate status for folks joining with a low level of shame (your possible misunderstanding is a chance for group clarity and learning)
- Drive to identify the fastest path to mitigation and interrupt as necessary
- Check in on the above on a regular candence (S1 every 5 to 10 minutes)
- Communicate status to the right audience

Some of this may feel counter to GitLab Values; this is not designed or intended to diminish our values but to acknowledge and reinforce our need to mitigate customer impact as quickly as possible.

### Incident Manager participants

The Incident Manager role will be staffed by all team members within this scope:

- [Job Grades 8 and 9](/handbook/total-rewards/compensation/compensation-calculator/#job-grades)
- Development and Infrastructure departments
- All Staff Engineer, SRE, and Engineering Manager Job Families
- All specialties within the above Job Families (for example: Staff Backend Engineer, Staff Frontend Engineer, Frontend Engineering Manager, etc..)
- Not already engaged in another oncall assignment.
- Employed at the company for at least 3 months (same criteria for [eligibility to join the Dev Escalation rotation](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html#eligibility))

As an Incident Manager, Team Members learn how we run GitLab.com and other GitLab SaaS environments. They help ensure the availability goals for GitLab.com by working with reliability engineers on call and development team members. The experience and awareness gained in this role leads to better understanding of building GitLab at scale and ultimately, a more reliable and scalable GitLab SaaS service and product.

### Incident Manager Shifts

Shifts are 4 or 6 hours each at these times each day:

- 23:00 to 05:00 UTC
- 05:00 to 11:00 UTC
- 11:00 to 15:00 UTC
- 15:00 to 19:00 UTC
- 19:00 to 23:00 UTC

Each Incident Manager On Call assignment is for 4 consecutive days. The Incident Manager On Call shifts are based on individual preferences specified in the [Incident Manager Onboarding issue](/handbook/engineering/infrastructure/incident-management/incident-manager-onboarding/#onboard-as-an-incident-manager). Shifts may include weekends based on this rotating assignment.

We have two scheduling layers implemented in PagerDuty, as a way to make weekend coverage more equitable and with the updated guidance for public holidays and weekend coverage.

1. Weekdays and Weekends - an Incident Manager's maximum 4-day shift can scheduled any day of the week. This is how the rotating assignments have been scheduled to date.
1. Weekdays-only - an Incident Manager's maximum 4-day shift will only be scheduled on weekdays, which applies to team members who cannot cover weekend shifts. This layer has precedence over the "Weekdays and Weekends" layer, so that Incident Managers scheduled *any day of the week* will have their shifts scheduled less often.
   1. Eligibility for weekday only shifts
   1. Team members with United Kingdom, Germany and Ireland employment contracts dated before 2023-12-07, 2023-12-20 and 2023-06-06, respectively that do not wish to volunteer for weekend shifts and have not signed an amendment.
   1. Team members with Austria, France or Italy employment contracts. Weekend shifts should not be taken due to local limitations.
1. Public Holidays should not be covered by team members with Switzerland or New Zealand employment contracts due to local limitations. If you are inadvertently scheduled for a public holiday please [swap shifts](#can-i-shift-my-incident-manager-on-call-days-around)

### Special Coverage Days

It is more efficient to staff Incident Manager roles with fewer, but frequently longer, shifts during days where overall Team Member availability is lower due to Holidays or other global company events. These days will be designated as "Special Coverage Days" and volunteers will be sought to cover the relevant shifts. Examples of these days include New Years as well as the monthly Family & Friends days. Not all holidays will be covered in this manner as many holidays are local in nature and easier to cover simply by normal shift switches.

Special Coverage Days will be designated by creation of an Issue. The Issue will indicate the approach to scheduling for the specific event and will provide a table for volunteers to add their name. A DRI will be clearly noted and will be responsible for transferring the resulting coverage to PagerDuty.

During period with Special Coverage, indicated in the issue, Pager Duty schedule is void - incident managers are not expected to follow the PD schedule, however they are expected to collaborate DRI to provide full coverage for the given period.

### Onboard as an Incident Manager

To onboard, [create an Incident Manager onboarding issue](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/new?issuable_template=onboarding-im).

### Offboard as an Incident Manager

If your eligibility status changes or you have been exempted from Incident Manager On Call assignment, [create an Incident Manager offboarding issue](https://gitlab.com/gitlab-com/gl-infra/reliability/-/blob/master/.gitlab/issue_templates/offboarding-im.md).

## What to expect during your shift

### Starting your on-call shift

Before your shift starts, verify your Slack alerts are working and your PagerDuty contact is up to date. Send a test page to make sure that you are receiving alerts correctly. You may get assigned to an [on-call handover issue](/handbook/engineering/on-call/#customer-emergency-on-call-rotation) if your shift start time
lines up with the start of the 8 hour SRE on-call shifts.

When your on-call shift starts, you will get notification(s) that your shift is starting (email or text, depending on your PagerDuty preferences). You will also get a Slack notification about being added to the `@incident-managers` user group.

### When an incident happens

You are expected to respond to announcements in the [`#incident-management` Slack channel](https://gitlab.slack.com/archives/CB7P5CJS1). Review the [`General guildeines for production incidents`](https://gitlab.com/gitlab-com/runbooks#general-guidelines-for-production-incidents), verify the severity label on the issue, and update it if
neccesary.

When an S1 or S2 happens during a current incident, decide which incident has the highest customer impact and work on that issue. Reach out to infrastructure leadership escalation](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#infrastructure-leadership-escalation)
to get help with the lesser customer impact issue.

### Ending your on-call shift

Before your shift ends, consider what tasks need to be handed over and make sure to proactively communicate them to the next on-call incident manager. This may mean paging the next on-call incident manager (through PagerDuty or the `@incident-managers` Slack handle) and bringing them into an active troubleshooting call, or it may mean providing instructions or context for situations you have handled that have some follow-up action. If there’s a situation that occurred (or is actively happening) during your shift, it’s your responsibility to prepare the next on-call incident manager.

### Additional resources

- [Reporting an incident](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#reporting-an-incident)
- [IMOC Checklist](https://gitlab.com/gitlab-com/runbooks/-/blob/master/incidents/general_incidents.md#imoc-checklist)
- [IMOC Responsibilities](https://about.gitlab.com/handbook/engineering/infrastructure/incident-management/#responsibilities)
- [Runbook IMOC](https://gitlab.com/gitlab-com/runbooks/-/blob/master/on-call/checklists/imoc.md)
- [Monitoring](https://about.gitlab.com/handbook/engineering/monitoring/)

## Frequently Asked Questions

### Who are the Incident Managers?

Incident Manager responsibilities are expected of Engineering Management and Staff+ Engineer job families in the Development and Infrastructure departments. Previously, Incident Manager responsibilities were fulfilled by a small group of managers in the Infrastructure department.  All team members in these eligible roles are expected to participate in the Incident Manager rotation.

In some cases, Senior Engineers may also participate as Incident Managers. This is particularly useful as Senior Engineers look for additional opportunities for growth in their role and as they prepare for future promotion opportunities. Senior Engineers may join the Incident Manager pool by opening an Incident Manager onboarding Issue and having their manager indicate approval in the Issue. As noted elsewhere, Team Members should only participate in one duty similar to this role, so should not also participate in Dev On-call at the same time (for example). When approving the request, managers shall be mindful of certain regions where a balance between Incident Manager and Dev Oncall needs to be maintained because the eligible people overlap and both programs must be fully staffed.

### Is this a volunteer effort?

No.  All team members in eligible roles are expected to participate in the Incident Manager rotation.  All team members who are eligible are to be scheduled into PagerDuty. Those who have upcoming shifts will need to prioritize completing their Incident Manager On-Call onboarding issues.
If anyone does not feel ready to become an Incident Manager, [follow our process to swap shifts with someone else](#can-i-shift-my-incident-manager-on-call-days-around) and work with your manager or the Incident Management Coordinator to resolve any challenges you are facing.

Note that we will consider exceptions on a case by case basis.  Please talk to your manager if you do not think you can participate or would need an alternative schedule.  Assignment and exemptions to participation will be coordinated by the VP of Infrastructure and the VP of Development
or their designees, and the requests require approval from the participants' reporting managers. [This internal spreadsheet is being used to track exemptions from participating](https://docs.google.com/spreadsheets/d/1I_e3f4Xb3Z4RwEpmQGcIKA-59fjqJP9RS1sVGgS5VdM/edit#gid=0).

### I am an engineer in Development. Am I exempt from the Dev On-call when I am on an Incident Manager rotation?

Yes. If you are an engineer and you are in the Incident Manager rotation, you are exempt from the [Dev On-call](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html#eligibility). You will not be expected to sign up for shifts in the monthly Dev On-call scheduling sheet. Please confirm that your email address is listed on the [Development-Team-BE Google Spreadsheet](https://docs.google.com/spreadsheets/d/1rCamrCMZPreBpYwbzFG9zpghtiH3KPiFYu46RbqWjXU/edit#gid=508978589), so that you are not auto-assigned a shift.

### How do I prioritize Incident Manager duties with my other role expectations?

When you are scheduled to be Incident Manager On Call, this must by your #1 work priority. However, while it is the priority, there may not be any incidents. When there is not an active incident requiring Incident Manager leadership you maintain your normal work duties.

Currently, pages to Incident Manager On Calls happen roughly 0 to 4 times a week. During the time an Incident Manager is on call, there is a 15 minute SLA to respond to escalations. This can mean dropping out of meetings, 1:1s, etc. to join incident calls. This demand can make balancing hard, and you may have to reschedule meetings on short notice. Because of the interrupt-driven nature of incident management, it is advised that you shift sync meetings which would be difficult for you to leave to a later date.

In particular, please make sure to block out the time while you are on call in your calendar so no interviews get scheduled during your shift. We need to be respectful of the candidate's time that they set apart to interview with us, an interview should not be interrupted by pages. If an interview does get scheduled during your shift, reach out to the recruitment team to reschedule.

### What if I have family or other personal commitments during my shift?

The Incident Manager role requires a 15-minute response. However, there is no expectation that an Incident Manager is at their desk waiting for an incident during their entire shift.

You may have family or other short personal commitments which might complicate your response. In most cases, you should feel comfortable with any commitment that isn't longer than 45 minutes, as long as if during that commitment you can take a few minutes to engage in the incident slack channel to inform the rest of the team of your situation and timing.

If you have a standing commitment which is longer or does not allow for the informative response in slack it is suggested that you choose another shift. If you have an occasional commitment like this you shouldn't let that block you from a shift. One of the benefits of a larger team of Incident Managers is the ability to provide coverage for each other for unexpected or shorter duration commitments.

### How often will I have an Incident Manager shift?

Four day shifts mean that, at the most, a Team Member participating in an Incident Manager shift with seven other IMs will have shifts approximately once every month. Each additional Team Members added to the pool in your region extends this timing by 4 days. The more Team Members involved, the less often any individual will have shifts.

### How are Incident Managers scheduled?

Because new incident managers are being added to the rotation on an ongoing basis, schedules for upcoming months are not final and will shift as folks are added or removed from the rotation.
See [the Incident Manager Coordinator responsibilities](/handbook/engineering/infrastructure/incident-management/#incident-manager-coordinator) for details.

### Can I shift my Incident Manager On Call days around?

Yes, this is one of the other benefits of having a well staffed pool of Team Members engaged as Incident Managers. Shift "trades" are easy to arrange in Pagerduty. It is your responsibility to ensure that your assigned shift is covered, but in extraordinary circumstances please reach out to the VP of Infrastructure for assistance.  Swapping shifts is totally fine.  Getting someone to cover for you for either planned vacation or a sudden/urgent family matter is something we should all do for each other.

What to do for covering a shift or asking for coverage:

1. Post to the `#imoc_general` channel asking for help.  Make sure to @mention people or @here if you are in an urgent situation.  Let people know the days and times you will need help covering things.
2. Get the override scheduled in PagerDuty.  Either person, the person asking or taking, can put in the override.

Example 1, Scheduling yourself: Go to https://gitlab.pagerduty.com/my-on-call/week and click the shift for which you need an override.  You should get a pop up which will let you pick the person covering you and the hours, which usually default to your whole shift.
Example 2, Covering for someone.  Go to the [schedule in PagerDuty](https://gitlab.pagerduty.com/schedules#PK4YI6X) and pick the shift and person you will override.  You should get a pop up where you can pick yourself and the times for the override.

### What role of Pagerduty shall I request?

A **Professional Plus - Responder Role** is sufficient to be an Incident Manager.
[PagerDuty Roles reference](https://support.pagerduty.com/docs/advanced-permissions#base-roles)

### What if I am not available for my assigned shift?

Shifts are assigned based on the working hours that you selected during onboarding. Our current process is to [swap shifts](/handbook/engineering/on-call/#swapping-on-call-duty) by asking for someone to take this shift in the `#imoc_general` Slack channel.

### What if I work a shift on a weekend or holiday?

When an Incident Manager shift includes a weekend the team member can shift their work-week to include that day (and exclude another day). As an example, if an Incident Manager shift includes Saturday, then the team member could plan their work-week for that week to be Tues-Sat.

While the example above is the intended idea, we will note that anything close to that which works for the team member will be fine as well.  For example, if you'd much rather take some other day in the adjoining weeks, or working [non-linear workdays](/handbook/company/culture/all-remote/non-linear-workday/) to accomodate the shift.

Example scenarios:

1. Tanuki is scheduled for the Thursday-Sunday IM shift.
   - They do what they usually do on Monday during Saturday shift and take Monday off.
   - During the Sunday shift they stay home to play with their daughters. They finished their days earlier this week to rest, but also considered taking half of Friday off that week.
1. Tanuki is scheduled for the Friday-Monday Incident Manager shift. Knowing that the week after the shift will be very busy, they take Thursday before the shift off. They spend the weekend decluttering the basement where their phone is in ears reach.

Two things that won't work:

1. "carrying" the day for some longer time in the future as if it is an accrued vacation time (because it isn't).
2. Allowing your typical worked time to become longer. Fulfilling an Incident Manager shift should not result in adding total hours to your work week, but in some cases (weekends & holidays) it may ask that you shift those hours.

### Can I expense my cell phone service used for on-call?

Yes, being on-call for incident management is considered `vital to position` for [expenses](/handbook/finance/expenses/) purposes.

### My direct report is serving as Incident Manager. What are my responsibilites as their manager?

Adding Incident Manager responsibilities to a direct report's role requires cooperation with their manager. The manager should support them when they are assigned Incident Manager duties, particularly
when shifts overlap with weekends. Please make sure Incident Managers are empowered to delegate, postpone or drop some responsibilities given these additional responsibilities.

If the manager serves as an Incident Manager themselves as well, modelling similar behaviour is as vital as supporting their direct reports.

### How do I see PagerDuty schedules from Google Calendar?

1. Locate the *webcal feed* for the [Incident Manager - GitLab.com SaaS](https://gitlab.pagerduty.com/schedules#PK4YI6X) schedule in PagerDuty, which can be found in "Schedule Info". You can also link to your own Pagerduty shifts from [My On-Call Shifts](https://gitlab.pagerduty.com/my-on-call/month) found in "Export Calendar".
1. Copy the `webcal://...` URL into Google Calendar by adding a calendar under the **Other Calendars** dropdown and select `from url`. Paste the webcal link.
1. Each Incident Manager On-Call shift should now show up as an event in this read-only Calendar view. Feel free to rename the Calendar to something legible (and not `webcal://...`), e.g. IMOC Shifts, My On-Call Shifts, etc.

Benefits of adding the PagerDuty IMOC schedule into Google Calendar:

- Search for yours or others' shifts, directly in Google Calendar.
- Block off your time by duplicating events from this calendar into your own, then set reminders for yourself accordingly.

### How do I get notified when I am scheduled for on-call?

New schedules are [announced](#how-are-incident-managers-scheduled) in the [#imoc_general](https://gitlab.slack.com/archives/C01NY82EJF6) channel every month.

If you want to get notified when you are added to or removed from a schedule, or changes are made to your shifts, make sure to turn on the [On-Call Boosters](https://support.pagerduty.com/docs/mobile-app-settings#on-call-boosters) setting in the [PagerDuty App on your phone](https://support.pagerduty.com/docs/mobile-app).

## Learning about Incident Management

We have a detailed handbook page that covers how we do [Incident Management](/handbook/engineering/infrastructure/incident-management/) at GitLab.
