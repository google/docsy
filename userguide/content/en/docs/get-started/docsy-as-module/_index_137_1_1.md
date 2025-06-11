---
title: Application Security Testing, Composition Analysis
description: "The Composition Analysis group at GitLab is charged with developing solutions which perform Container and Dependency Scanning and License Compliance."
---

## Composition Analysis

The Composition Analysis group at GitLab is charged with developing solutions which perform [Container Scanning](https://about.gitlab.com/direction/application_security_testing/composition-analysis/container-scanning/),
and [Software Composition Analysis](https://about.gitlab.com/direction/application_security_testing/composition-analysis/software-composition-analysis/).
See [the exhaustive list of projects](#projects) the group maintains.

## Common Links

- Slack channel: [#g_ast-composition-analysis](https://gitlab.slack.com/archives/CKWHYU7U2)
- Slack alias: @secure_composition_analysis_dev
- Google groups: composition-analysis-dev@gitlab.com

## How we work

### Workflow

The Composition Analysis group largely follows GitLab's [Engineering Workflow](/handbook/engineering/workflow/) and [Product Development Flow](/handbook/product-development/product-development-flow/).

This includes:

- [Issue triage](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/)
- [Infradev triage](#triaging-vulnerabilities)
- [Wider Community Merge Request Triage](/handbook/engineering/infrastructure/engineering-productivity/merge-request-triage/)
- [Retrospectives](/handbook/engineering/management/group-retrospectives/)

#### Indicating Status and Raising Risk

We leverage [the issue's health status feature](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status) to communicate the progress of the issue.

All issues should be marked `On Track` at the beginning of a milestone. This is done by the Epic DRI, or the Engineering Manager for unassigned, standalone issues.

Raising risk early is important. The more time we have, the more options we have. As such, the team reviews issues every week and discusses items that `Need Attention` or are `At Risk` to possibly course correct and re-assign resources based on the team's priorities.

Follow these steps when raising or downgrading risk:

1. Update the Health Status in the issue:
    1. `On Track` - the work will be completed within the planned milestone.
    1. `Needs Attention` - the issue is blocked or has other factors that need to be discussed.
    1. `At Risk` - the issue is in jeopardy of missing the cutoff to ship within the planned milestone.
1. Add a comment about why the risk has increased or decreased.
1. Copy the Engineering Manager and Product Manager in a comment.

### Time-off Calendar

We use a shared calendar to see when team members are off work: `c_629844cc273be17e067767febe12547bc40e129f26f0f17339030bff708cd0d5@group.calendar.google.com`.

Access to this calendar is granted via this google group: `sec-secure-composition-analysis@gitlab.com`.

To share your time-off:

1. In Slack, find the `Time Off by Deel` application under the `Apps` menu.
1. Under `Home`, click on `Your Events` to show a dropdown.
1. Click on 'Calendar Sync' under the Settings break.
1. Click `Add calendar` under `Additional calendars to include?`. Use the calendar ID above.

To visualize the calendar:

1. In  Google Calendar, find the `Other calendars` section in the left sidebar.
2. Click on the :heavy_plus_sign: icon and then select `Subscribe to calendar`. Use the calendar ID above.

### Reaction rotation

On top of our development roadmap, engineering teams need to perform tasks related to security vulnerabilities, support, maintenance, community contributions.

To avoid excessive context-switching, and better distribute the workload, our team reserves capacity for these tasks as part of milestone planning:

- **Primary engineer**. Fully allocated to the tasks below. They must prioritize these tasks above all other work, in the following order: Security, Support, Maintenance.
- **Secondary engineer**. Acts as a backup in case the primary engineer has an unplanned absence or exceeds their capacity. They must prioritize requests from the primary engineer, but otherwise focus on `type::maintenance` issues.

Neither engineer should be allocated to work on Features or critical deliverables. In the context of [Cross-functional milestone planning](/handbook/product/product-processes/cross-functional-prioritization/#cross-functional-milestone-planning), their allocation counts towards the bugs and maintenance ratio.

The [rotation schedule](https://gitlab.com/groups/gitlab-org/secure/-/epics/2#schedule) follows the development cycle, which means using the start/end dates from the GitLab [product milestones](/handbook/product/milestones/). When creating the schedule, the Engineering Manager should aim to minimize the number of back-to-back rotations that engineers do.

Please keep track of the actions you're doing during your rotation and add notes in the corresponding issue (e.g. copying tools command executed locally, sharing relevant changes to projects and processes, etc.),
You can use the [Reaction Rotation issue template](https://gitlab.com/gitlab-org/secure/general/-/blob/master/.gitlab/issue_templates/Reaction%20Rotation%20SCA.md?ref_type=heads) for this purpose.

At the end of the rotation, add the next engineers as Owners of [`@gitlab-org/secure/composition-analysis-dev/reaction-rotation`](https://gitlab.com/groups/gitlab-org/secure/composition-analysis-dev/reaction-rotation/-/group_members?with_inherited_permissions=exclude), and remove the current engineers. This group is used to tag the engineers on rotation without having to look-up the schedule.

#### Responsibilities - Security

1. Triage vulnerabilities reported on the projects we maintain and help resolving them depending on their priority. (See [Security vulnerabilities triaging process](#security-vulnerabilities-triaging-process))
1. Check for `SLA::Breached` issues.
1. Check for security [automation failures](/handbook/engineering/development/sec/secure/#automation-failures)
1. Check for new security releases of our dependencies and ensure we use them:
   1. Upstream scanners (see [Updating an upstream scanner](#updating-an-upstream-scanner))
   1. Container base images
   1. Application dependencies
   1. Programming language
1. Refine scheduled security issues.
1. Consider creating or updating any automation or tooling (related to security, maintainership or support!)

#### Responsibilities - Support

1. Monitor slack channels for questions, support requests, and alerts. While other team members may respond to these requests, the engineer assigned to the reaction rotation is expected to handle them primarily.
If a support engineer requests assistance via Slack and it requires investigation or debugging, they should be directed to raise an issue in [the Request for Help project](https://gitlab.com/gitlab-com/request-for-help#sec-section).
    - [#g_ast-composition-analysis](https://gitlab.slack.com/archives/CKWHYU7U2)
    - [#s_application-security-testing](https://gitlab.slack.com/archives/C8S0HHM44)
    - [#sec-section](https://gitlab.slack.com/archives/C02087FTL5V)
    - [#s_ast-alerts](https://gitlab.slack.com/archives/CAU9SFKNU)
    - [#f_container_scanning](https://gitlab.slack.com/archives/C041F2XJACB)
    - [#g_ast-composition-analysis-alerts](https://gitlab.slack.com/archives/C04UX9MQNSJ)
    - [#f_operational_container_scanning](https://gitlab.slack.com/archives/C06KGEYGFDZ)
    - [#sec-eng-requests-for-help](https://gitlab.enterprise.slack.com/archives/C071W3BA87J)
1. Monitor [Section Sec Request For Help](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help/-/issues/?label_name=Help%20group%3A%3Acomposition%20analysis) project for support requests.
1. Refine scheduled bugs and maintenance issues.

These items must be triaged continuously throughout the milestone which means they must be checked multiple times a week.

#### Responsibilities - Maintainership

1. Work with community contributors to help drive [their merge requests](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=opened&label_name[]=group%3A%3Acomposition%20analysis&label_name[]=Community%20contribution) to completion (more information on [community contributions triaging process](/handbook/engineering/infrastructure/engineering-productivity/merge-request-triage/)).
1. Run the [License Alias Generator](https://gitlab.com/gitlab-org/security-products/license-db/license-alias-generator/-/tree/main?ref_type=heads) tool to update the list of [known alias](https://gitlab.com/gitlab-org/security-products/license-db/license-processor/-/blob/main/data/aliases.go?ref_type=heads). You can find instructions [here](https://gitlab.com/gitlab-org/security-products/license-db/license-alias-generator/-/tree/main?ref_type=heads#workflow). This action should be performed once during a milestone.
1. Check for new versions of languages or package managers that we support, or deprecation / removal of support for the same and notify Engineering Manager and Product Manager via issue.
1. Check for new versions of our dependencies (not related to security):
    1. Upstream scanners (see [Updating an upstream scanner](#updating-an-upstream-scanner)).
    1. Container base images.
    1. Application dependencies.
    1. Programming language.
1. Check in on test failures. Check relevant slack channels ([#g_ast-composition-analysis-alerts](https://gitlab.slack.com/archives/C04UX9MQNSJ), [#s_ast-alerts](https://gitlab.slack.com/archives/CAU9SFKNU)).
1. Check latest pipelines for any release failures. If any issue is preventing the automated release process from running, begin the [release failure escalation process](#release-failure-process).
1. Consider creating or updating any automation or tooling (related to security, maintainership or support!).
1. Monitor failures and errors on license-db project, use the `#f_licese_database` Slack channel for communication about these items, so other team members can provide the support.
1. Monitor the Slack channel `#g_ast-composition-analysis-alerts` for any incidents on the license-db infrastructure.
        - In case of an incident react with :eye: to indicate that you are looking into it.
        - If the incident isn't resolved in 30 minutes or more, investigate on it.
        - Write down in the insident Slack thread all the steps that were done to resolve it.
1. Monitor the Slack channels `#f_operational_container_scanning` and `#f_container_scanning` for alerts related to Operational Container Scanning (OCS) and Container Scanning.

#### Handover

1. As Reaction Rotation is continous process, post the handover status to the reaction rotation issue using the following template:

<details>
<summary>Reaction Rotation Handover Template</summary>

### Reaction Rotation Handover Template

```markdown

---

**Outgoing Engineers:** [1st reaction rotation eng., 2nd reaction rotation eng.]

**Incoming Engineers:** [1st reaction rotation eng., 2nd reaction rotation eng.]

---

#### **Ongoing Tasks and Issues**

1. **Security Tasks:**
   - **Vulnerabilities:**
     - [Issue #1234](link to issue): Description of the vulnerability, current status, and next steps.
   - **Security Automation Failures:**
     - [Automation Job #9012](link to job): Description of the failure, any initial troubleshooting steps taken, and next steps.
   - **Dependency Updates:**
     - [Dependency Update #3456](link to update): Description, current status, and next steps for updating the dependency.

2. **Support Tasks:**
   - **Support Requests:**
     - [Request #7890](link to request): Description of the support request in progress, current status, and any communication with the requester.
   - **Slack Channels Monitoring:**
     - #g_ast-composition-analysis: Summary of recent discussions, any unresolved questions, and pending actions.
     - #s_ast-alerts: Summary of recent alerts, any unresolved issues, and pending actions.

3. **Maintenance Tasks:**
   - **Community Contributions:**
     - [Merge Request #6789](link to MR): Description of the contribution, current status, and next steps.
   - **Scheduled Bugs and Maintenance Issues:**
     - [Issue #3456](link to issue): Description of the issue, current status, and next steps.

#### **Additional Notes**

1. **Any additional context or notes relevant to the next engineer:**
   - Additional Note.

```

This handover template ensures that the incoming engineer is fully informed of the current status of tasks, issues, and any important context. It facilitates a smooth transition and minimizes the risk of overlooking critical responsibilities.

</details>

1. Assign ownership of the [Reaction Rotation group](https://gitlab.com/groups/gitlab-org/secure/composition-analysis-dev/reaction-rotation/-/group_members?with_inherited_permissions=exclude) to the new engineers.

### Security vulnerabilities triaging process

We are responsible for triaging vulnerabilities reported on 2 sets of projects: the projects maintained by GitLab and the upstream scanner software we might depend on. Though, we have different processes that apply depending on the situation.

See the [Application Security Testing sub-department vulnerability management process](/handbook/engineering/development/sec/secure/#vulnerability-management-process).

#### Security Policy

We prioritize findings by their CVSS severities and [SLAs](/handbook/security/product-security/vulnerability-management/sla/). Start with `Critical` and `High` but also look for issues that are connected to [vulnerabilities](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=SLA%3A%3ANear%20Breach&first_page_size=100) and have an `SLA::Near Breach` label. These vulnerabilities might have a lower CVSS score but letting them reach SLA breach will count as 'past due' security issues and affect FedRAMP compliance.

Please utilize all the time you have set aside. If you complete all the ones at Critical and High, please continue to triage - we want to address all findings but we are working in a risk based order.

#### SLA::Breached issues

Sometimes we might have `SLA::Breached` issues that need to be handled ASAP. You can view the number of those issues in the Tableau dashboard. `SLA::Breached` issue may appear for many reasons including:

- A medium or low vulnerability that is not handled because it never got priority. Please notice that a low vulnerability might lead to a `severity::1` issue since it might get its score from different sources.
- Issues that are never closed even if the relevant vulnerability is resolved or dismissed.

You can search for `SLA::Breached` issues in the issue tracker using the following label filters:

- [Severity 1](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A1&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 2](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A2&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 3](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A3&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)
- [Severity 4](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Abug&label_name%5B%5D=bug%3A%3Avulnerability&label_name%5B%5D=SLA%3A%3ABreached&label_name%5B%5D=group%3A%3Acomposition%20analysis&label_name%5B%5D=severity%3A%3A4&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AWill%20Not%20Be%20Fixed&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Base%20Container%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=Vulnerability%3A%3AVendor%20Package%3A%3AFix%20Unavailable&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AVuln%20Remediated&first_page_size=100)

#### Triaging vulnerabilities

We use the Vulnerability Report with filters to focus on items matching [our policy](#security-policy) and reported on the relevant projects.

1. [Analyzers Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/analyzers/-/security/vulnerabilities/?state=DETECTED&severity=CRITICAL,HIGH&projectId=13150952,15369510,24673064,52241202,6126012,9450192&activity=STILL_DETECTED)
    - To configure the report manually, select all [shared](#shared), [container scanning](#container-scanning), and [dependency scanning](#dependency-scanning) projects and apply the `Still detected` activity filter and apply the `Needs Triage` status.
1. [License-db Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/license-db/-/security/vulnerabilities/?state=DETECTED&severity=CRITICAL,HIGH&projectId=39193358,39229232,39233486,39298809,39622674,40857363,45266022&activity=STILL_DETECTED)
    - To configure the report manually, select all [license-db](#license-db) projects and apply the `Still detected` activity filter and apply the `Needs Triage` status.

For each item, investigate and either [dismiss](#dismissing-a-vulnerability) or [confirm](#confirming-a-vulnerability) it. If it's not clear whether there's indeed a threat, [escalate](#creating-security-issues) to our [Application Security team](/handbook/security/product-security/application-security/).

> Refer to [Vulnerability status definitions](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-status-values) in case you are unsure of what each of them mean.

#### Upstream scanners vulnerabilities

**This only applies to projects NOT maintained by GitLab.**

We review vulnerabilities detected on upstream scanners when upgrading to a newer version. See the [Security checks when updating an upstream scanner section](#security-checks-when-updating-an-upstream-scanner).

We currently have a limited capacity to triage vulnerabilities reported on our upstream scanners. Continuously triaging vulnerabilities reported for these projects is done on a best effort basis.

##### Triaging vulnerabilities

We use the Vulnerability Report with filters to focus on items matching [our policy](#security-policy) and reported on the relevant projects.

1. [Upstream Scanners Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/dependencies/-/security/vulnerabilities/?state=DETECTED&projectId=30616761,30684590,35335143,39545454,39545481,51420921&severity=CRITICAL,HIGH&activity=STILL_DETECTED)
    - To configure the report manually, select all [upstream scanner](#upstream-scanner-mirrors) projects.

For vulnerabilities discovered in upstream scanners, an issue must be created in GitLab's issue tracker, and we should work with the relevant Open Source community to help provide a resolution. As a last resort, we can patch locally or fork the upstream project temporarily to fix the vulnerability sooner.

#### Dismissing a vulnerability

When there is no doubt a vulnerability is a false-positive, it can be "Dismissed" unless it related to a FedRAMP image (fips).
Select the "Dismiss" option from the vulnerability status options.
Finally, make sure to comment on the vulnerability status change notification to explain why.

##### Low risk findings that can be dismissed

Because of both the way severity is generically set in CVSS and automated scanners do not have all context for an application, many findings which may be high risk in other environments or scenarios are low risk for our users. The containers ingest code from a user project and that user has developer access, and the containers are ephemeral and related to a specific pipeline.

In some other cases, a finding is related to an upstream dependency or Operating System and there is no fix available and no fix planned. Please be sure to mark this issues using the labels; blocked or blocked upstream.

When an issue is both blocked for a few releases and low risk you may dismiss the finding with a note as to the reasoning. If there is an open issue notify the Application Security team with your specific reasoning and close the issue (if applicable). In the future we will specifically want to tag everything related to these findings as won't fix or blocked when they are being closed, for now that is only available on issues and not findings.

The following class of container scan vulnerabilities can be considered low risk:

- Many kernel-related findings will be at a decrease of risk and hence severity because of the way our process works with temporary containers with limited inputs which are developer-controlled.
- Issues related to a software stack that will not apply to the analyzer e.g GUI related issues, issues in Bluetooth drivers, browser-related issues which require browser running in non-headless mode, etc.
- S3 or S4 findings with complex exploit method or limited risk which have no fix available, or the upstream has stated there are no plans to release a patch.
- Denial of Service (of the container/analyzer) as these containers run in ephemeral pipelines, are automatically stopped once a timeout is reached, and are accepting in code from users who already have developer access. This as a result is not an expansion of the risk profile.
- Random number generator issues (where the numbers are not random) as we don't use random numbers for security purposes from the containers. (At the time this was last updated these were true, please use your knowledge of our analyzers or ask if unsure)"

  **To add items to the list above discuss repeatable finding patterns with Application Security, get approval from a leader in the security section, and add to this list.**

#### Confirming a vulnerability

If the vulnerability impacts a dependency:

1. Evaluate if the dependency (software library, system library, base image, etc.) can be upgraded *or* removed.
1. Set the vulnerability status to "Confirmed".
1. Release a new version of the analyzer with the dependency upgrade/removal and follow the process on [resolving a vulnerability](#resolving-a-vulnerability).

For all other confirmed vulnerabilities, [create a security issue](#creating-security-issues) to discuss and track the remediation.

#### Resolving a vulnerability

When a vulnerability has been remediated, it can be "Resolved". When doing so, comment how it was
remediated, then select the "Resolve" option from the vulnerability status options, and close the
related vulnerability issue.

#### Creating security issues

Unfortunately, creating a security issue can't be done yet via the "create issue" button from the vulnerability page or security dashboard as this only works when creating an issue in the same project where the error was reported and we've disabled the embedded issue tracker in our projects.

Instead, in our workflow we open all our issues in [the main GitLab project](https://gitlab.com/gitlab-org/gitlab/issues).

As a workaround, you can copy and paste the content of the vulnerability page (this keeps markdown formatting!). Please also follow our Security guidelines about [creating new security issues](/handbook/security/engaging-with-security/#creating-new-security-issues).

You can leverage quick actions to add the necessary labels.

```text
/confidential

/label ~security ~"type::bug" ~"bug::vulnerability"
/label ~"section::sec" ~"devops::application security testing" ~"group::composition analysis"

<!-- depending on the affected project: -->
/label ~"Category:Software Composition Analysis"
/label ~"Category:Container Scanning"
```

It's important to add the `~security` and `~"bug::vulnerability"` labels as described above, because the [`AppSec Escalation Engine`](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator/-/blob/3a7e8a4baed7b7e54039558f4f76328046543a0c/README.md#L3) will automatically pick up any issues with these labels and add additional labels `~security-sp-label-missing` and `~security-triage-appsec` as well as mention the issue in the `#sec-appsec` Slack channel. At this point, the [Stable Counterpart](/handbook/engineering/development/sec/secure/#stable-counterparts) or [Application Security team](/handbook/security/product-security/application-security/) triage person will pick up the issue and assign a severity as part of the appsec triage rotation.

Once the issue is created, please add it to [the vulnerability's linked items](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#link-a-vulnerability-to-existing-issues) for ease of tracking.

Developers reporting the security issue should help the [Application Security team](/handbook/security/product-security/application-security/) assess the impact of the vulnerability, and update the issue description with an `Impact` section.

If immediate feedback is required, then add a comment to the vulnerability issue with an `@`-mention directed at one of the Security Engineers listed in the [Stable Counterpart](/handbook/engineering/development/sec/secure/#stable-counterparts) section, or ping them on slack.

### Release failure process

If the image release process is failing, an incident should be created to track how
it was detected, escalated, and resolved. Documenting our incidents makes it possible
to search for previous incidents by keyword, labels, and other issue filters. We open
all of our incidents in the [main GitLab project](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=created_date&state=opened&type%5B%5D=incident&label_name%5B%5D=group%3A%3Acomposition%20analysis&first_page_size=20).

1. [Open a new incident](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=incident&issue%5Bissue_type%5D=incident)
and add a description of the problem along with any reproduction steps. Add the following labels so that we can track the incidents
that have impacted composition analysis in the future.

    ```text
    <!--
    Select one of the following severities
    Ref: https://handbook.gitlab.com/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity
    -->
    /label ~"severity::1"
    /severity S1

    /label ~"severity::2"
    /severity S2

    /label ~"severity::3"
    /severity S3

    /label ~"severity::4"
    /severity S4

    <!--
    Select one of the following priorities
    Ref: https://handbook.gitlab.com/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority
    -->
    /label ~"priority::1"
    /label ~"priority::2"
    /label ~"priority::3"
    /label ~"priority::4"

    /label ~"section::sec" ~"devops::application security testing" ~"group::composition analysis" ~"type::bug" ~"bug::availability"

    <!--
    Select one of the following categories
    -->
    /label ~"Category:Dependency Scanning"
    /label ~"Category:Container Scanning"
    /label ~"Category:License Compliance"
    ```

1. Assign the incident to the engineer currently on the maintainership reaction rotation.
1. Link any related issues or zoom meetings with the [quick actions](https://docs.gitlab.com/ee/operations/incident_management/linked_resources.html#using-a-quick-action) to record incident timeline events. Ensure that an event exists for the incident start,
detection, resolution, and any other events that you feel are worth highlighting as part of the incident response.
1. Upon fixing the issue, include a detailed summary of the resolution and any initial follow up actions that should be completed. Lastly, an entry for incident should be added to the weekly composition analysis group meeting so that it may be reviewed with the entire group.

#### Example Incident(s)

- [PHP Composer segfaults in gemnasium analyzer](https://gitlab.com/gitlab-org/gitlab/-/issues/383299)

### Maintenance triaging process

To help our Engineering Manager prioritize maintenance issues, the engineering team assigns them a [priority label](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority).

1. Leverage the [Maintenance issues board](https://gitlab.com/groups/gitlab-org/-/boards/7658725?label_name[]=group%3A%3Acomposition%20analysis&label_name[]=type%3A%3Amaintenance).
1. For each open issue that has no Priority label ("Open" column), shortly investigate the issue (< 1h) and comment with your findings. Make sure the correct sub-category label is applied per our [Work type clasification](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) (e.g. `~maintenance::refactor`).

### Code review

Upon joining Composition Analysis group, team members are suppose to become either reviewers or maintainers for all [projects](#projects) maintained by the group. The process how to become maintainer is described in the general [Code review guidelines](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer).

## Projects

The Composition Analysis group maintains several projects to provide our scanning capabilities.

### Shared

- [common library](https://gitlab.com/gitlab-org/security-products/analyzers/common)

### Dependency Scanning

- [gemnasium analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium)
- [gemnasium-maven-plugin](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-maven-plugin)
- [gemnasium-gradle-plugin](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-gradle-plugin)
- [dependency-scanning analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/dependency-scanning)
- **Internal only** [gitlab-depscan](https://gitlab.com/gitlab-org/security-products/gitlab-depscan)

Additional notes:

- [gemnasium-db](https://gitlab.com/gitlab-org/security-products/gemnasium-db) is maintained by [the Vulnerability Research group](/handbook/engineering/development/sec/secure/vulnerability-research/).

### Container Scanning

- [container-scanning analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning/)

### License-db

- [advisory-processor](https://gitlab.com/gitlab-org/security-products/license-db/advisory-processor)
- [deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)
- [license-exporter](https://gitlab.com/gitlab-org/security-products/license-db/license-exporter)
- [license-feeder](https://gitlab.com/gitlab-org/security-products/license-db/license-feeder)
- [license-interfacer](https://gitlab.com/gitlab-org/security-products/license-db/license-interfacer)
- [license-processor](https://gitlab.com/gitlab-org/security-products/license-db/license-processor)
- [schema](https://gitlab.com/gitlab-org/security-products/license-db/schema)
- [PMDB tools](https://gitlab.com/gitlab-org/security-products/license-db/pmdb-tools)
- [Static Reachability Modules Scraper](https://gitlab.com/gitlab-org/security-products/license-db/static-reachability-modules-scraper)

### Operational Container Scanning

- [trivy-k8s-wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper)
- [OCS module](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/tree/master/internal/module/starboard_vulnerability)
- [Cluster Image Scanning related code](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/blob/master/internal/module/starboard_vulnerability/agent/scanner.go)
  - Needed for [Operational Container Scanning](https://docs.gitlab.com/ee/user/clusters/agent/vulnerabilities.html) feature.

The OCS module is part of the [`gitlab-agent`](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent) project which is maintained by the `Environments` group. The `Composition Analysis` group is responsible for maintaining only the OCS module.

### Semver dialects gem

- [semver_dialects](https://gitlab.com/gitlab-org/ruby/gems/semver_dialects)

### CI/CD components

- [Dependency Scanning](https://gitlab.com/components/dependency-scanning)
- [Container Scanning](https://gitlab.com/components/container-scanning)

### Upstream scanner mirrors

As some of our analyzers rely on open source software, we include them in our security testing to increase coverage and reduce risk.

To do so, we mirror their repository and execute our security scans on them (when relevant):

- [trivy](https://gitlab.com/gitlab-org/security-products/dependencies/trivy)
- [trivy-db](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db)
- [trivy-java-db](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db)
  - The [`oras-mirror-config`](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db/-/tree/oras-mirror-config?ref_type=heads)
    branch contains a scheduled pipeline that keeps the `registry.gitlab.com/gitlab-org/security-products/dependencies/trivy-java-db:1` image up to date.
- [trivy-db-data](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-data)
- [trivy-db-glad](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-glad)
- [vuln-list-update](https://gitlab.com/gitlab-org/security-products/dependencies/vuln-list-update)

The vulnerabilities reported on the currently used version of the scanner are automatically reported in [the group level Vulnerability Report](https://gitlab.com/groups/gitlab-org/security-products/dependencies/-/security/vulnerabilities/?state=DETECTED&projectId=30616761,30684590,35335143,39545454,39545481,51420921&severity=CRITICAL,HIGH&activity=STILL_DETECTED) and triaged as part of our [security vulnerabilities triaging process](#security-vulnerabilities-triaging-process).

#### Setting up a mirror

1. create a new project in https://gitlab.com/gitlab-org/security-products/dependencies (blank project).
2. set up the project repository as [a pull mirror](https://docs.gitlab.com/ee/user/project/repository/mirror/#pulling-from-a-remote-repository) of the upstream repository.
3. find the git tag that matches the version currently used by our analyzer (usually represented by the `SCANNER_VERSION` variable in the analyzer's `Dockerfile`). Use exact commit if there is no git tag for the corresponding release we use.
4. create a branch from that ref following naming convention `VERSION-security-checks` where `VERSION` is the version of the upstream scanner we currently use (e.g. `v6.12.0`).
5. add a `.gitlab-ci.yml` configuration file to configure all compatible security scans.
6. make `VERSION-security-checks` the default branch, so that reported vulnerabilities are showing up on the dashboards and vulnerability reports.

#### Updating an upstream scanner

We check for new releases of the upstream scanners on a monthly basis, as part of our [release issue](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb). When an update is available, a new issue is created using the [update scanner issue template](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/update_scanner_issue.md.erb) and added to the next milestone.

##### Upstream Tools and Analyzers list

1. [Trivy](https://gitlab.com/gitlab-org/security-products/dependencies/trivy).
   1. [Container Scanning](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning/-/blob/master/doc/howto/update-scanners.md)
   1. [Trivy K8S wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper/-/blob/main/docs/update_scanner.md)
1. [OpenTofu](https://opentofu.org/)
   1. [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)
1. [OpenTofu component](https://gitlab.com/components/opentofu)
   1. [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/blob/main/.gitlab-ci.yml#L5)
Every analyzer relying on an upstream scanner has a "*How to update the upstream Scanner*" section in their readme detailing the process. This includes a verification for possible new security vulnerabilities and a license check which are detailed below.

##### Security checks when updating an upstream scanner

Before releasing an analyzer with a newer version of its upstream scanner, we must ensure it is exempt of security vulnerabilities matching our current policy.

1. checkout the new tag (or commit) and create a new branch from it following naming convention `NEW_VERSION-security-checks`.
1. copy/paste the existing `.gitlab-ci.yml` configuration file from the current `VERSION-security-check` branch.
1. if there are new findings matching [our policy](#security-policy), address them according to our [triage process](#triaging-vulnerabilities).
1. only when above mentionned findings are **fixed**, update the default_branch to be `NEW_VERSION-security-checks` and proceed with the update of the analyzer to use this newer version.

##### License check when updating an upstream scanner

Before releasing an analyzer with a newer version of its upstream scanner, we must ensure its license has not changed or is still compatible with [our policy](/handbook/engineering/open-source/#acceptable-licenses).

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="composition analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="composition analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="composition analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="composition analysis" >}}
{{< /tableau >}}

## Monitoring

- [Stage Group dashboad on Grafana](https://dashboards.gitlab.net/d/stage-groups-composition_analysis/stage-groups-group-dashboard-secure-composition-analysis?orgId=1)
- [Continuous Vulnerability Scanning (background processing on the gitlab.com rails platform)](https://log.gprd.gitlab.net/app/r/s/OBQOB)

## Runbooks

See our [Composition Analysis Runbooks](runbooks/) page.

## Slack alerts

The following table presents the various Gitlab projects that can generate slack alerts. Please notice that this doesn't include alerts generated by Sentry.

| Project            | Target slack channel                                                                         | Additional Info                                                                                                          |
|--------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [Gemnasium](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium)          | `#g_ast-composition-analysis-alerts`   |                                                                                                                          |
| [Deployment](https://gitlab.com/gitlab-org/security-products/license-db/deployment)         | `#g_ast-composition-analysis-alerts`  | Multiple alerts can be generated mainly from scheduled pipelines for exporting or feeding license/advisory/epss/kev data |
| [Container Scanning](https://gitlab.com/gitlab-org/security-products/analyzers/container-scanning) | `#f_container_scanning` | Failures on default branch                                                                                               |
| [trivy-k8s-wrapper](https://gitlab.com/gitlab-org/security-products/analyzers/trivy-k8s-wrapper)  | `#f_operational_container_scanning` | Failures on default branch   |
| [trivy-db-glad](https://gitlab.com/gitlab-org/security-products/dependencies/trivy-db-glad)      | `#g_ast-composition-analysis-alerts`  | Failures on default branch |
| [Dependency Scanning Analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/dependency-scanning)  | `#g_ast-composition-analysis-alerts`  | Failures on default branch |
| [Dependency Scanning Component](https://gitlab.com/components/dependency-scanning/)  | `#g_ast-composition-analysis-alerts`  | Failures on default branch  |
