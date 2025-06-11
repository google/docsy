---
title: "On-Call"
aliases:
- /handbook/on-call/
---

{{% alert color="warning" %}}
If you're a GitLab team member and are looking to alert Reliability Engineering about an availability issue with GitLab.com, please find quick instructions to report an incident here: [Reporting an Incident](/handbook/engineering/infrastructure/incident-management/#reporting-an-incident).
{{% /alert %}}

{{% alert color="warning" %}}
If you're a GitLab team member looking for who is currently the Engineer On Call (EOC), please see the [Who is the Current EOC?](/handbook/engineering/infrastructure/incident-management/#who-is-the-current-eoc) section.
{{% /alert %}}

{{% alert color="warning" %}}
If you're a GitLab team member looking for help with a security problem, please see the [Engaging the Security On-Call]({{< ref "engaging-security-on-call" >}}) section.
{{% /alert %}}

## Expectations for On-Call

- If you are on call, then you are expected to be available and ready to respond to PagerDuty pages as soon as possible, and within any response times set by our [Service Level Agreements](https://about.gitlab.com/support/#priority-support) in the case of Customer Emergencies. If you have plans outside of your workspace during your on-call shift, this may require that you bring a laptop and reliable internet connection with you.
- We take on-call seriously. There are escalation policies in place so that if a first responder does not respond in time, another team member is alerted. Such policies are not expected to be triggered under normal operations, and are intended to cover extreme and unforeseeable circumstances.
- Because GitLab is an asynchronous workflow company, @mentions of On-Call individuals in Slack will be treated like normal messages, and no SLA for response will be associated with them.
- Provide support to the release managers in the release process.
- As noted in the [main handbook]({{< ref "paid-time-off" >}}), after being on-call, make sure that you take time off. Being available for issues and outages can be taxing, even if you had no pages.  Resting after your on-call shift is critical for preventing burnout. Be sure to inform your team of the time you plan to take for time off.
  - Team members in Australia should review the [Australia time in lieu policy]({{< ref "pty-benefits-australia" >}}).
- During on-call duties, it is the team member's responsibility to act in compliance with local rules and regulations. If ever in doubt, please reach out to your manager and/or [aligned People Business Partner](/handbook/people-group#people-business-partner-alignment-to-division).

## Customer Emergency On-Call Rotation

- We do 7 days of 8-hour shifts in a follow-the-sun style, based on your location.
- After 10 minutes, if the alert has not been acknowledged, support management is alerted. After a further 5 minutes, *everyone* on the customer on-call rotation is alerted.
- All tickets that are raised as emergencies will receive [the emergency SLA](https://about.gitlab.com/support/#priority-support). The on-call engineer's first action will be to [determine if the situation qualifies as an emergency]({{< ref "customer_emergencies_workflows#determine-if-the-situation-qualifies-as-an-emergency" >}}) and work with the customer to find the best path forward.
- After 30 minutes, if the customer has not responded to our initial contact with them, let them know that the emergency ticket will be closed and that you are opening a normal priority ticket on their behalf. Also let them know that they are welcome to open a new emergency ticket if necessary.
- You can view the [schedule](https://gitlab.pagerduty.com/schedules#PIQ317K) and the [escalation policy](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH) on PagerDuty. You can also opt to [subscribe to your on-call schedule](https://support.pagerduty.com/docs/schedules-in-apps#section-export-only-your-on-call-shifts), which is updated daily.
- After each shift, *if* there was an alert / incident, the on call person will send a hand off email to the next on call explaining what happened and what's ongoing, pointing at the right issues with the progress.
- If you need to reach the current on-call engineer and they're not accessible on Slack (e.g. it's a weekend, or the end of a shift), you can [manually trigger a PagerDuty incident](https://support.pagerduty.com/docs/incidents#trigger-an-incident) to get their attention, selecting **Customer Support** as the Impacted Service and assigning it to the relevant Support Engineer.
- See the [GitLab Support On-Call Guide](/handbook/support/on-call) for a more
  comprehensive guide to handling customer emergencies.

## GitLab.com Reliability On-Call Rotation

### Infrastructure Engineer On-Call

The Infrastructure department's Reliability Engineering teams provide 24x7 on-call coverage for the production environment. For details, please see [incident-management](/handbook/engineering/infrastructure/incident-management/).

### Engineering Incident Manager

- Incident manager rotation is staffed by certain [team members in the Development and Infrastructure departments](/handbook/engineering/infrastructure/incident-management/incident-manager-onboarding/).
- More information regarding the Incident Manager role, including shift schedules, responsibilities can be found in the [Incident Manager on-boarding page](/handbook/engineering/infrastructure/incident-management/incident-manager-onboarding/).

### Development Team On-Call Rotation

- This on-call process is designed for GitLab.com operational issues that are escalated by the Infrastructure team.
- Development team currently does NOT use PagerDuty for scheduling and paging. On-call schedule is maintained in this [schedule sheet](https://docs.google.com/spreadsheets/d/10uI2GzqSvITdxC5djBo3RN34p8zFfxNASVnFlSh8faU/edit#gid=0).
- Issues are escalated in the Slack channel [#dev-escalation](https://gitlab.slack.com/messages/CLKLMSUR4) by the Infrastructure team.
- First response SLO is 15 minutes. If no response within the first 5 minutes, the infrastructure team will call the engineer's phone number on the schedule sheet.
- Development engineers do 4-hour shifts.
- Engineering managers do monthly shifts as scheduling coordinators.
- Check out [process description and on-call workflow](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html) when escalating GitLab.com operational issue(s).
- Check out more detail for [general information](/handbook/engineering/development/processes/Infra-Dev-Escalation/) of the escalation process.

## Security Team On-Call Rotation

### Security Operations (SecOps)

- SecOps on-call rotation is 7 days of 24-hour shifts.
- After 15 minutes, if the alert has not been acknowledged, the Security Manager on-call is alerted.
- You can view the [Security Operations schedule](https://gitlab.pagerduty.com/schedules#PYZC2CG) on PagerDuty.
- When on-call, prioritize work that will make the on-call better (that includes building projects, systems, adding metrics, removing noisy alerts). Much like the Production team, we strive to have nothing to do when being on-call, and to have meaningful alerts and pages. The only way of achieving this is by investing time in trying to automate ourselves out of a job.
- The main expectation when on-call is triaging the urgency of a page - if the security of GitLab is at risk, do your best to understand the issue and coordinate an adequate response. If you don't know what to do, engage the Security manager on-call to help you out.
- More information is available in the [Security Operations On-Call Guide]({{< ref "secops-oncall" >}}) and the [Security Incident Response Guide]({{< ref "sec-incident-response" >}}).

### Security Managers

- Security Manager on-call rotation is 7 days of 12-hour shifts.
- Alerts are sent to the Security Manager on-call if the SecOps on-call page isn't answered within 15 minutes.
- You can view the [Security Manager schedule](https://gitlab.pagerduty.com/schedules#PJL6CVA) on PagerDuty.
- The Security Manager on-call is responsible to engage alternative/backup SecOps Engineers in the event the primary is unavailable.
- In the event of a high-impact security incident to GitLab, the Security Manager on-call will be engaged to assist with cross-team/department coordination.

## Test Platform Team On-Call Rotation

- Test Platform sub-department's on-call do not include work outside GitLab's normal business hours. The process is defined on our [pipeline on-call rotation](https://about.gitlab.com/engineering/infrastructure/test-platform/oncall-rotation) page.
- The rotation is on a weekly basis across 3 timezones (APAC, EMEA, AMER) and triage activities happen during each team member's working hours.
- This on-call rotation is to ensure accurate and stable test pipeline results that directly affects our continuous release process.
- The list of pipelines which are monitored are defined on our [pipeline](https://about.gitlab.com/engineering/infrastructure/test-platform/debugging-qa-test-failures/#qa-test-pipelines) page.
- The schedule and roster is defined on our [schedule](https://about.gitlab.com/engineering/infrastructure/test-platform/oncall-rotation/#schedule) page.

## PagerDuty

We use [PagerDuty](http://gitlab.pagerduty.com/) to set the on-call
schedules, and to route notifications to the appropriate individual(s).

### Swapping On-Call Duty

Team members covering a shift for someone else are responsible for adding the override in PagerDuty. They can delegate this task back to the requestor, but only after explicitly confirming they will cover the requested shift(s). To set an override, click the "Schedule an Override" button from the side navigation on the Schedule page or after selecting the relevant block of time on the calendar or timeline view. This action defaults the person in the override to *you* &mdash; PagerDuty assumes that you're the person volunteering an override. If you're processing this for another team member, you'll need to select their name from the drop-down list. Also see [this article](https://support.pagerduty.com/hc/en-us/articles/202830170-Creating-and-Deleting-Overrides) for reference.

### Adding and removing people from the roster

When adding a new team member to the on-call roster, it's inevitable that the rotation schedule will shift. The manager adding a new team member will add the individual towards the end of the current rotation to avoid changing the current schedule, if possible. When adding a new team member to the rotation, the manager will raise the topic to their team(s) to make sure everyone has ample time to review the changes.
