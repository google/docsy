---
title: "Change Management"
---

## Purpose

**Change Management** has *traditionally* referred to the processes, procedures, tools and techniques applied in IT environments to carefully manage changes in an operational environment: change tickets and plans, approvals, change review meetings, scheduling, and other *red tape*.

In our context, **Change Management** refers to the guidelines we apply to manage changes in the operational environment with the aim of doing so (in order of highest to lowest priority) **safely**, **effectively** and **efficiently**. In some cases, this will require the use of elements from traditional change management; in most cases, we aim to build automation that removes those traditional aspects of change management to increase our speed in a safe manner.

Our overriding objective is maximize changes that avoid traditional aspects of change management, which is an **iterative process** that will evolve over time. Success is measured by our ability to safely execute changes at the speed required by our business needs.

## Scope

**Changes** are defined as modifications to the operational environment, including configuration changes, adding or removing components or services to the environment and cloud infrastructure changes. Our [Staging environment](/handbook/engineering/infrastructure/environments/#staging) is crucial to our GitLab.com release process.  Therefore, Staging should be considered within scope for Change Management, as part of GitLab's operational environment. Application deployments, while technically being changes, are excluded from the change management process, as are most, but not all, [feature flag toggles](https://docs.gitlab.com/ee/development/feature_flags/controls.html#process).

Changes that need to be performed during the resolution of an Incident fall under [Incident Management](/handbook/engineering/infrastructure/incident-management/).

## Roles and Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| GitLab Team Members | Responsible for following the requirements in this procedure |
| Infrastructure Team | Responsible for implementing and executing this procedures |
| Infrastructure Management (Code Owners) | Responsible for approving significant changes and exceptions to this procedure |

## Does my change need a change request?

Does your change:

- Carry some risk?
  > To help answer this question: has this change been attempted before? how extensively has this change been tested in non-prod environments? how confident are you in the evidence that this will not cause an issue in production?
- Require deployments and/or feature flags to be paused?
- Require manual steps?
- Affect multiple departments and need increased visibility?

If you answered **YES** (or even "maybe") to any of the questions above, then you should follow the change request workflow. The intent of the workflow is to reduce the likelihood of a change making it to production that has a negative impact by increasing visibility, and in cases where a change of this nature does make it to production, having a reviewed rollback plan ready to be executed means we can get back to a good state as quickly as possible.

Examples of changes that should follow the change request workflow:

- [Implement site wide rate limit in Cloudflare](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/merge_requests/4000).
- [CSP changes in production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/6192).
- [Drop an index from a table in staging](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/7476)

## When you don't need a change request

Non-exhaustive list of the types of changes that do not need a change request:

- Merging a merge request that will automatically be deployed and the rollback is reverting the merge request.
- A merge request that is considered low risk.
- Minor dependency updates that aren't critical to our environment.
- Feature toggles that are done via configuration and are not considered risky.

Examples:

- [Add service dependency on alerting](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/4813)
- [Small cookbook bumps](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/merge_requests/2114)
  - **Use your judgement**: it really depends on the change made to the cookbook to determine if the cookbook version bump should follow our change management workflow or not.

## When you are not sure

- Ask for opinions in [#infrastructure-lounge](https://gitlab.slack.com/archives/CB3LSMEJV) or [#s_production_engineering](https://gitlab.enterprise.slack.com/archives/C07U6SAKS4D)
- Open a change management issue, err on the side of caution.

## Change Request Workflows

Plan issues are opened in the [production](https://gitlab.com/gitlab-com/gl-infra/production/issues) project tracker via the [change management issue template](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=change_management). Each issue should be opened using an issue template for the corresponding level of criticality: `C1`, `C2`, `C3`, or `C4`. It must provide a detailed description of the proposed change and include all the relevant information in the template. Every plan issue is initially labeled `~"change::unscheduled"` until it can be reviewed and scheduled with a Due Date. After the plan is approved and scheduled it should be labeled `~"change::scheduled"` for visibility.

To open the change management issue from Slack issue the following slash command:

```text
/change declare
```

Creating the Change issue from Slack will automatically fill in some fields in the description.

## Aborting a Change

In the case a change is rolled back or if it will not be completed apply the `change::aborted` label and close the issue.
A new change should be declared if the change is retried on a later date.

## Change Criticalities

`C1` and `C2` change requests will automatically have the labels, `~blocks deploys` and `~blocks feature-flags` applied.  When these critical change requests are labeled `change::in-progress`, they will block deploys, feature flag changes, and potentially other operations.  Take particular care to have good time estimates for such operations, and ideally have points/controls where they can be safely stopped if they unexpectedly run unacceptably long.  Remove the `~blocks deploys` and/or `~blocks feature-flags` if the proposed change will not be negatively impacted by said operations.

In particular for long running Rails console tasks, it *may* be acceptable to initiate them as a `C2` for approvals/awareness and then downgrade to a C3 while running.  However consider carefully the implications of long running code over multiple deployments and the risks of mismatched code/data storage over time; such a label downgrade should ideally have at least 2 sets of eyes (SREs/devs) assess the code being exercised for safety, and management approval is recommended for visibility.

### Criticality 1

These are changes with high impact or high risk. If a change is going to cause downtime to the Production environment, it is always categorized a `C1`.

**Examples of Criticality 1:**

1. Any changes to Postgres hosts that affect DB functionality (e.g. quantity of nodes, changes to backup strategy, changes to replication strategy, configuration changes, etc.).
1. Major architectural changes to Infra as code (IaC).
1. Major IaC changes to pets - Postgres, Redis, and other Single Points of Failure.
1. Changes of major vendor or service provider (e.g. CDN, transactional mail provider, DNS, etc.).
1. Major version upgrades (**major** definition following www.semver.org) of tooling (e.g HAProxy, AlertManager, Chef, etc.).
1. Creating and deploying a custom build generated by ourselves is generally not recommended. There are use cases where it could be necessary due to a security or stability patch, to apply before it is part of the official upstream release. It is only allowed through Criticality 1 guidelines.
1. Major architectural or tooling changes to alerting infrastructure.
1. Any procedure involving changes of certificate authorities/uploading new SSL certificates.

#### Approval

1. Ensure there is Due Date set on the issue and to the [GitLab Production](https://calendar.google.com/calendar/embed?src=gitlab.com_si2ach70eb1j65cnu040m3alq0%40group.calendar.google.com) calendar.
1. Changes which include downtime must be pre-communicated to users. Follow the guidance for [Communicating a change that requires downtime](/handbook/engineering/infrastructure/change-management/#communicating-a-change-that-requires-downtime-maintenance-window)
1. All the database changes related should have a review by a DBRE.
1. Have the change approved by Infrastructure management at the Sr. Manager level or above by obtaining the `manager_approved` label on the Change Request issue. Mention `@gitlab-org/saas-platforms/inframanagers` to request approval and provide visbility to all SaaS Platforms infrastructure managers.
1. Identify the Engineer On-Call (EOC) scheduled for the time of the change and make them aware the change plan.
(The source is pagerduty, if you don't have access try [getting assistance](/handbook/engineering/infrastructure/team/))
1. Announce the start of the plan execution in the `#production` Slack channel directly notifying the EOC using the `@sre-oncall` alias to ensure there are no ongoing incidents that could impact the timing of the change.  Once confirmed the EOC will apply the `eoc_approved` label and the change can proceed.
1. Join The "Situation Room" zoom channel with the EOC and obtain verbal approval to start the plan execution.

The EOC must be engaged for the entire execution of the change.

### Criticality 2

These are changes with high impact or high risk. If a change is going to cause downtime to the Staging environment, it is always categorized a `C2`.

These are changes that are not expected to cause downtime in Production, but which still carry some risk of impact if something unexpected happens. For example, reducing the size of a fleet of cattle is usually ok because we've identified over-provisioning, but we need to take care and monitor carefully before and after.

**Examples of Criticality 2:**

1. Any changes to database configuration which do not meet the requirements of being Criticality 1 should be considered as Criticality 2 change.
1. Most architectural changes to Infra as code (IaC).
1. Most IaC changes to pets - Postgres, Redis, and other Single Points of Failure.
1. Load Balancer Configuration - major changes to backends or front ends, fundamental to traffic flow.
1. IaC changes to production Virtual Machines outside of Kubernetes when there is a decrease.
1. Major changes to Teleport, which is essential for troubleshooting production issues.
1. Major changes to alerting routing or integrations.
1. Any procedural invocation such as a SQL script, a ruby script module, a rake task which is performed on a production console server, either using `gitlab-rails` or `gitlab-rake` should be considered as a Criticality 2 change.

#### Approval

1. Ensure there is a Due Date to the issue and an event to the [GitLab Production](https://calendar.google.com/calendar/embed?src=gitlab.com_si2ach70eb1j65cnu040m3alq0%40group.calendar.google.com) calendar.
1. Changes which include downtime must be pre-communicated to users. Follow the guidance for [Communicating a change that requires downtime](/handbook/engineering/infrastructure/change-management/#communicating-a-change-that-requires-downtime-maintenance-window)
1. All the database changes related should have a review by a DBRE.
1. Have the change approved by Infrastructure management at the manager level or above by obtaining the `manager_approved` label on the Change Request issue. Mention `@gitlab-org/saas-platforms/inframanagers` to request approval and provide visbility to all SaaS Platforms infrastructure managers.
1. Identify the Engineer On-Call (EOC) scheduled for the time of the change and review the plan with them.
(The source is pagerduty, if you don't have access try [getting assistance](/handbook/engineering/infrastructure/team/))
   - [APAC EOC Schedule](https://gitlab.pagerduty.com/schedules/PF02RF0)
   - [EMEA EOC Schedule](https://gitlab.pagerduty.com/schedules/P40KYLY)
   - [Americas EOC Schedule](https://gitlab.pagerduty.com/schedules/POL1GSQ)
1. Announce the start of the plan execution in the `#production` Slack channel directly notifying the EOC using the `@sre-oncall` alias and have the change approved by the EOC by obtaining the `eoc_approved` label on the Change Request issue.

### Criticality 3

These are changes with either no or very-low risk of negative impact, but where there is still some inherent complexity, or it is not fully automated and hands-off.

**Examples of Criticality 3:**

1. IaC changes that require manual intervention (e.g. Terraform state manipulation).
1. Changes that are manual (e.g. Adding a plugin to Grafana).
1. Changes in configuration for service provider (e.g. CDN, transactional mail provider, DNS, etc.).
1. Minor version upgrades (**minor** definition following semver.org) of tools or components (e.g HAProxy, AlertManager, Chef, etc.).
1. Removing old hosts from IaC (e.g. removals of legacy infrastructure).

#### Approval

1. Add a Due Date to the issue.
1. Ensure that the plan is reviewed by someone else in Reliability.

### Criticality 4

These are changes that are exceedingly low risk and commonly executed, or which are fully automated.  Often these will be changes that are mainly being recorded for visibility rather than as a substantial control measure.

**Examples of Criticality 4:**

1. Any invocation of an existing code pathway which ultimately will perform any mutate operation on live data.  This is distinguished from diagnostic investigation operations which should typically be limited to read-only operations.  It is ostensibly left to the discretion of the engineer whether or not a peer should be included to co-observe the invocation of such diagnostics.

#### Approval

No approval required.

### Change Procedures

Change plans often involve manual tasks

- Avoid using UIs instead of command-line tools. For example use the `gcloud` command line utility instead of the GCP console.
- Consider using a script over many individual shell commands
- If a script is necessary, consider adding dry-run capability and follow GitLab's [scripting guidelines](https://docs.gitlab.com/ee/development/shell_scripting_guide/)

## Scheduling the Change

UTC is the standard time zone used in talking about the scheduled time for all the changes.

When scheduling your change, keep the impact of the change in mind and consider the following questions:

1. Are there other C1/C2 changes occurring around the same time?
1. Does the change being conducted contain a planned failover or other high-risk component, where the risk to customers can be reduced by executing the change in a low-traffic period?
1. As the DRI for the change, are you able to supervise the change, and communicate its status to the EOC, for an agreed upon period of time after the change?
1. Is the change being conducted at a time conducive to recovering (i.e. rollback of the change) from any issues arising from the change? It is a general best practice to schedule the change early enough in the change technicians' workday to allow for several hours afterwards for any unforeseen impacts to become visible. That way the change technician is still around to mitigate and address those impacts.
1. Are there Engineer on Call or Release Manager shift changes at or during the proposed time?

## Change Execution

If the change is executed by a script, it should be run from the bastion host of the target environment in a terminal multiplexer (e.g. screen or tmux) session.
Using a bastion host has the benefit of preventing any unintended actions (e.g. caused by a script bug) from spreading to other environments.
A terminal multiplexer guards against the possibility of losing connection to the bastion mid-change and the unpredictable consequences of it.

`sudo` is disabled on the bastion hosts, so you can copy your Chef PEM file to one of them, if your script requires it, without fearing it being snooped on.

A sequence of actions to run a script could look like this:

```text
your-workstation $ ssh -A bastion-01-inf-gstg
bastion-01-gstg  $ tmux
bastion-01-gstg  $ git clone git@gitlab.com:my-migration/script.git
bastion-01-gstg  $ ./script/migrate
```

## Change Reviews

Maintenance changes require change reviews. The reviews are intended to bring to bear the **collective** experience of the team while providing a forum for pointing out potential risks for any given change. Consider using multiple reviewers for ~C1 or ~C2 Change requests.

If you are not sure who to request a review from, ask for an SRE to review the change request in [#s_production_engineering](https://gitlab.enterprise.slack.com/archives/C07U6SAKS4D).

Fill each of the items under the `Change Reviewer checklist` based on the change criticality label assigned to the issue.

## Communication Channels

Information is a key asset during any change.  Properly managing the flow of information to its intended destination is critical in keeping interested stakeholders apprised of developments in a timely fashion. The awareness that a change is happening is critical in helping stakeholders plan for said changes.

This flow is determined by:

- the type of information,
- its intended audience,
- and timing sensitivity.

For instance, a large end-user may choose to avoid doing a software release during a maintenance window to avoid any chance that issues may affect their release.

Furthermore, avoiding information overload is necessary to keep every stakeholder's focus.

To improve communication the following are recommendations for high criticality Changes:

- Use the incident zoom channel during the change
- Periodic updates intended to the various audiences at place (CMOC handles this):
  - End-users (Twitter)
  - eStaff
  - Support staff
  - Employees at large
- After the maintenance is complete leave handoff notes to the next oncall team members.  Including items like:
  - state / success of the maintenance
  - any alerts that can have been silenced and may go handoff
  - links to specific graphs to watch for areas of concern

## Communicating a change that requires Downtime ("maintenance window")

From time to time we will need to run a production change that requires downtime, affecting customers and our SLO. This section covers how to successfully manage communications in these type of situations.

As a reference, we should communicate 5-6 weeks before the change, for a `C1` that does not carry a significant architecture change. Longer preparation time is advised if the change involves a large migration or a significant architecture change.

Steps:

- Add a step in the Change issue to communicate externally with a draft of the wording.
- Add the `~Scheduled Maintenance` label to the Change issue or create a new issue using the template `external_communication` if a confidential issue is necessary.
- Obtain approval for the overall plan and expected impact from:
  - Director of SRE, Infrastructure
  - VP of Infrastructure & Quality
  - Director of Support, Global Readiness
  - [Release Managers](/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/#reaching-our-team)
- 1 month before the change at least (if possible):
  - Ask our CSMs in our `#customer-success` Slack channel about their preferences on how to communicate this change to our main customers:
    - Ping CSM managers using the `@cs-tam-mgrs` alias to request that they notify the CSMs for our top SaaS customers.
    - They might propose that we communicate in the customer's channel about the specifics of the change. If that is the case draft a msg, agree on its content with the CSM and share it in the relevant customer Slack channels (in sync with the CSM).
  - Share information and a link to the Issue in `#whats-happening-at-gitlab` Slack channel, mentioning `@release-managers`, `@db-team` and `@dbre` for visibility and engagement.
- Shortly after that, the communication or change issue should be linked to a simple post in status.io (by clicking in "new maintenance"). We should engage with the CMOC to Share that maintenance in status.io, via all the possible channels (mail, tweet, slack, etc). From there customers will be able to ask questions and comment on it.
[The company official way to communicate downtime to customers is via status.io].
- From this point, when the upcoming change is already public, we should:
  - Check the Communication Issue periodically, to see if we have question/comments from our customers, to address them timely.
  - Remind customers about the upcoming change 2 weeks, 1 week, 3 days and 1 day before the change time, via status.io.

## Production Change Lock (PCL)

While changes we make are rigorously tested and carefully deployed, it is a good practice to temporarily halt production changes during certain events such as GitLab Summit, major global holidays, and other times where GitLab Team Member availability is substantially reduced.

Risks of making a production environment change during these periods includes immediate customer impact and/or reduced engineering team availability in case an incident occurs. Therefore, we have introduced a mechanism called **Production Change Lock (PCL)**. During a PCL, automated deployments are paused. A deployment may be manually executed at the discretion of the EOC. For example, the EOC may choose to deploy changes because they are necessary to ensure the stability of GitLab.com, or in order to ensure that deployments continue running smoothly when the PCL is lifted.

There are 2 types of PCLs: soft and hard.

### Soft PCL

Soft PCLs aim to mitigate risk without halting all changes to production.
Soft PCLs prohibit infrastructure changes with a criticality level of 2 or higher. In case of an emergency, the EOC should interact with the Incident Manager On Call for C1 and C2 changes.

During the soft PCL, code deployments to canary are allowed since we have tools to control canary impact. Production deployments, without the explicit execution of post-deployment migrations, are allowed in coordination with the EOC. High criticality code deployments that include the need to execute post-deployment migrations are allowed in case of emergency and with EOC approval.

During the soft PCL, feature flags can be conditionally toggled, depending on their criticality, as described in the [guidelines about feature flags and the Change Management Process](/handbook/engineering/infrastructure/change-management#feature-flags-and-the-change-management-process). Feature flags that do not require a change management issue can be toggled by engineers. In case of a change management issue being required, follow guidelines for change management process described on this page.

### Hard PCL

In addition to all of the restrictions in the Soft PCL, Hard PCLs include code deploys and infrastructure changes for every criticality level (see [change severities](/handbook/engineering/infrastructure/change-management/#change-severities)).

In case of an active S1/S2 incident, the EOC should interact with the Incident Manager On Call prior to making any decision. It is at EOC and Incident Manager On Call discretion to make a decision on whether a change should be approved and executed. If the change is approved, Incident Manager On Call should inform the [Infrastructure Leadership Escalation](/handbook/engineering/infrastructure/incident-management/#infrastructure-leadership-escalation) of this decision (who will inform the executive team as necessary).

During some multi-day PCL periods it will be preferred to exempt specific changes from the PCL.  Each of these must have an associated issue providing clear justification for the exemption and have the approval of the Sr. Director of Infrastructure Platforms or their designee.

### Declaring a PCL

Roles in declaring a Production Change Lock:

- Production Engineering:
  - Responsible: Creates the change locks.
  - Accountable: Ensures adherence to the change locks.
- Software Delivery:
  - Consulted: Provides input on dates and feasibility based on release activities
  - Accountable: Ensures adherence to change locks and enforces them in auto-deploy processes
- Engineering:
  - Informed: Keeps track of change locks for development and planning purposes
- Product:
  - Informed: Keeps track of change locks for planning purposes
- Security:
  - Informed: Keeps track of change locks for security purposes

Steps to declare a new Production Change Lock (PCL):

1. Create a Change Issue and Change Lock entry
   - Production Engineering creates a [C1 Change issues](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=change_pcl&issue[title]=Production+Change+Lock) that will block deployments and feature flags. Remember to mark this as `~change::in-progress` at the start of the PCL.
   - Production Engineering creates a corresponding entry in [gl-infra/change-lock](https://gitlab.com/gitlab-com/gl-infra/change-lock)
2. Review and Approval
   - Software Delivery Engineering Managers (EMs) are added as reviewers
   - Software Delivery EMs approves the changes
3. Inform the Engineering Organization
   - Software Delivery notifies the Engineering Organization through the #engineering-fyi Slack channel and updates the [internal document](https://docs.google.com/document/d/1JBdCl3MAOSdlgq3kzzRmtzTsFWsTIQ9iQg0RHhMht6E/edit#heading=h.wl5oryd6kv3u)
   - Software Delivery communicates (via [ChatOps Notify](https://gitlab.com/gitlab-org/release/docs/-/tree/master/release_manager?ref_type=heads#utilities)) the new PCL to relevant Slack channels, providing details on any changes required for deployment and release processes

#### If this is an emergency PCL

1. Check with the `@release-managers` in the `#releases` Slack channel to confirm the state of the monthly release or any patch releases.
2. Check with security in the `#security` Slack channel if there are any imminent security patches that release managers may not be notified of yet.
3. Check with `@incident-managers` and `@sre-oncall` in the Slack `#production` channel to see if there are any concerns.

### Recent PCLs

The following dates are currently scheduled PCLs. Times for the dates below begin at 09:00 UTC and end the next day at 09:00 UTC, unless specified otherwise.

| Dates                       | Type       | Reason                        |
|-----------------------------|------------|-------------------------------|
| 2024-12-20 23:00 UTC -> 2025-01-06 02:00 UTC | Hard | End of Year PCL |
| 2024-11-27 22:00 UTC -> 2024-12-02 02:00 UTC | Hard | Thanksgiving PCL |
| 2024-10-25 23:00 UTC -> 2024-10-29 11:00 UTC | Hard | Upgrade CI database cluster to PostgreSQL v16 |
| 2024-11-01 23:00 UTC -> 2024-11-05 11:00 UTC | Hard | Upgrade MAIN database cluster to PostgreSQL v16 |
| Recurring: [Monthly release date](https://about.gitlab.com/releases/)      | Soft       | Release day                   |
| Recurring: [Scheduled Family and Friends Days](/handbook/company/family-and-friends-day/#upcoming-family-and-friends-days)         | Soft       | Family and Friends Days                   |
| Recurring: Saturday 01:00 UTC -> Sunday 21:00 UTC | Soft       | Weekend                   |

## Feature Flags and the Change Management Process

Feature flags reduce risk by allowing application changes to be easily tested in production. Since they can be gradually or selectively enabled, and
quickly turned off, their use is encouraged whenever appropriate.

However, as the company and the number of developers working with feature flags continues to grow, it becomes important to manage risk associated with
these changes too. Developers follow the process defined in the [developers documentation for feature flags](https://docs.gitlab.com/ee/development/feature_flags/controls.html#rolling-out-changes).

On any given day, dozens of feature flag changes may occur. Many of these are trivial, allowing low risk changes -- sometimes just changes to UI appearance -- to be tested. However, some feature flag changes can have a major impact on the operation of GitLab.com, negatively affecting our **service level agreements**. This in turn can have a negative impact to the reputation and financial well being for the company. Without clear communication between the application developers toggling features and the engineer-on-call (EOC), it can be difficult for the EOC to assess which feature flag toggles are high risk and which are not.

Additionally, during an incident investigation, knowing which high-risk features have recently been enabled, and documentation on how to assess their operation, is important.

**For this reason, feature flag toggles which meet any of the below criteria, should be accompanied by a change management issue.**:

- **Features that enable new services**: For example, if a feature toggle will drive traffic to a newly provisioned database or through a new application service.
- **Features that may have an impact on the service levels availability of GitLab.com**: any feature which could, under reasonable circumstances, lead to an incident.
- When feature toggles, or associated features, have **previously had to be rolled back due to user-impacting service degradation**, or as a result of the previous toggle leading to a production incident.
- When the application development team assess the risk of the change to warrant the overhead of change management, or the infrastructure team specifically request it.

## Questions

- **Does *production* above include *canary*?**

    Yes.

- **Does this apply only to production environment?**

    Yes. Only production environment. This means you can still make changes and deployments to environments other than production.

- **What is the exact scope of the changes that are enforced under PCL? (infrastructure, software, handbook...etc)**

    Any production change to and/or supporting gitlab.com SaaS Product. For example, configuration changes, setup of new libraries, introducing new code, toggling feature flags.

- **What if I still want to make a change during the PCL period?**

    Product Group Development code changes will require Development VP approval
    All other changes, including all underlying cloud and infrastructure changes will require Infrastructure & Quality VP approval.

- **Does this apply to our monthly release?**

    No. If the [monthly release](/handbook/engineering/releases/) falls under PCL period, additional coordination is necessary to ensure uninterrupted monthly release.

- **We have a question that is not answered here?**

    Please raise an issue to [Infrastructure team's queue](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues) and we will be happy to get back to you as soon as we can.

## Exceptions

Exceptions to this process must be [tracked](https://gitlab.com/gitlab-com/gl-infra/production/-/issues) and approved by Infrastructure.

## References

- [Change Management Policy](/handbook/security/security-and-technology-policies/change-management-policy/)
