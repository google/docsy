---
title: "Observation Remediation Procedure"
controlled_document: true
---

## Purpose

The Observation Management Program at GitLab is used to identify, track, remediate and provide a risk ratings of identified findings, exceptions or deficiencies for any Tier 3 information system risks that are identified as an output of compliance operations or other mechanisms by team members, such as self-identification of a system specific risk.

This procedure details the remediation process for observations.

## Scope

[Tier 3]({{< ref "storm-program#scope" >}}) risks identified at the information system or business process levels

## Roles and Responsibilities

| Role | Responsibility|
| ---- | ------ |
| Security Compliance Team (Commercial and Dedicated) | Responsible for executing [Security control tests]({{< ref "security-control-lifecycle" >}}) to determine the test of design and test of operating effectiveness of Security and IT general controls. |
| Security Risk Team | Responsible for executing [Third Party Risk Management]({{< ref "third-party-risk-management" >}}) (TPRM) risk and security assessments to determine risk associated with third party applications and services. |
| Field Security Team | Responsible for executing [Customer Assurance Activities]({{< ref "customer-security-assessment-process" >}})(CAA) responsible for providing customer assurance with GitLab's security practices and operating procedures. |
| Observation Manager | Responsible for being the observation DRI through the observation lifecycle including verifying and fine tuning recommended remediation plans in order to meet legal and regulatory requirements. |
| Remediation Owner | Validates observation, confirms assignee, stop date (due date), finalizes remediation plan and conducts remediation activity based on defined [remediation SLA's]({{< ref "observation-remediation-procedure#remediation-sla" >}}). |
| Observation Program DRI | Responsible for regular reviews of program health and stakeholder report delivery. |
| Managers to Executive Leadership | Responsible for escalation as necessary and resource allocation for remediation activity. |
| Security Assurance Management (Code Owners) | Responsible for approving significant changes and exceptions to this procedure. |

## Procedure

### Lifecycle Overview

```mermaid
graph TD;
  A[Identified] --> B[Assigned];
  B --> C[Remediation in progress];
  B --> D[Ignored or Invalid];
  C --> F[Resolved];
```

### Observation Remediation

Once all remediation activities have been completed, the Remediation Owner is responsible for tagging the Observation Manager in the observation issue. If there is no Observation Manager assigned, tag `@gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated` in the observation issue.

It is the responsibility of the Observation Manager to track the milestones, work progress and validation of the remediation activity. The Observation Manager will then validate the remediation activity for completeness, re-test the observation (as applicable) and close the observation issue. If re-testing does not result in a fully effective conclusion, the observation description and remediation recommendations may be updated to reflect the new findings and required remediation tasks.

For detailed requiremented the observation manager follows during the remediation process, refer to the [remediation and closeout runbook](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management/-/blob/master/runbooks/2_Remediation%20and%20Closeout.md)

### Resolved

The observation is moved to `Resolved` after the [observation remediation step]({{< ref "observation-remediation-procedure#observation-remediation" >}}) is completed.

### Ignored/Invalid

It is the responsibility of the Observation Manager to determine if an open observation is not valid or no longer applicable. This could be applicable for a variety of reasons including:

- stale observations
- legacy GCF controls
- process or application changes

If an observation is confirmed Ignored or Invalid, the associated risk rating of that observation can be changed. See the [Observation Risk Rating Adjustment](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management/-/blob/master/runbooks/2_Remediation%20and%20Closeout.md#moving-to-ignoreinvaild-in-zengrc) runbook for further details.

### Root Cause Observation Epics

If multiple observation issues relate to the same root cause or are blocked by the same component of work, these issues will be connected together into an Epic in order to more clearly see how multiple observations issues are connected.

 A list of observation Epics can be found [here](https://gitlab.com/groups/gitlab-com/gl-security/security-assurance/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=Observation+Epics).

### Non Remediation Owner Actions To Support Observation Closure

In cases where Internal Stakeholders (not the Remediation Owner) provide remediation documentation to support closure of the observation. Please tag the Observation Manager in the observation issue. This will trigger the validation of the remediation activity for completeness, re-test as appropriate and closure by the Observation Manager.

### Remediation SLA

Observation remediation SLA's are determined by the risk rating of the individual observation. The following table shows the SLA for each risk rating:

| Risk Rating | Remediation SLA | Remediation Goal |
| :---: | :---: | :---: |
| High | 6 months, or as otherwise defined by the agreed upon remediation plan | 4 weeks |
| Moderate | 6-12 months, or as otherwise defined by the agreed upon remediation plan | 6 weeks |
| Low | > 12 months, or as otherwise defined by the agreed upon remediation plan | 8 weeks |

### Opportunities for Improvement (OFI)

Throughout the course of testing or general monitoring of the GitLab ecosystem, Opportunities for Improvement (OFI) may be identified and documented so that the overall control environment and GitLab's processes can be improved.

To capture an OFI, create an issue in the [Observation Management](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management) project and add the RiskRating::OFI label.

OFI's do not have defined remediation SLA's as they are process improvements or suggestions only. The Remediation Goal to communicate the OFI to the appropriate stakeholder is 10 weeks.

#### What is the difference between an OFI and an Observation?

- Observations are tied to specific testing attributes, GCF controls and/or reflect areas where a third party compliance professional would be of the opinion that a relevant risk wouldn't be or hasn't been, mitigated.
- OFIs are not tied to specific testing attributes or GCF controls and are general areas of improvement that may streamline compliance or business activities.
- Observations will **always** impact control effectiveness ratings
- OFIs will **never** impact control effectiveness ratings

### Criteria for Upgrading Observations (i.e. tier 3 information system level risks) to Security Operational Risks (tier 2)

The observation program is a key input to the [StORM program]({{< ref "storm-program" >}}), which manages tier 2 security operational risks. When the following criteria is met, it is an indicator that a larger risk exists and is upgraded to a tier 2 operational risk and therefore included in the StORM program. This criteria is as follows:

- An observation in an entity level control
- When multiple observations share root cause and are grouped in an [observation epic]({{< ref "observation-remediation-procedure#root-cause-observation-epics" >}}). Observation epics are a group of observations spanning multiple systems that have shared root cause and remediation paths.

### Security Compliance Workflow

```mermaid
graph TD
    A[Observation Opened]
    A --> B{Observation meets<br>criteria for upgrading}
    B --> C{Yes}
    B --> |No| G(Follow Observation<br>Management Process)
    C --> |Observation Epic| E[Tag Risk, apply upgraded label]
    C --> |ELC| F[Tag Risk, apply upgraded label]
    F --> H[Risk is managed in <br> StORM program at tier 2 level]
    E --> I[Work with risk on collaborative remediation<br>for both Tier 2 and Tier 3 issues]
```

### Security Risk Workflow

```mermaid
flowchart TD
    A[Risk Team is tagged in a risk<br>meeting criteria for upgrading]
    A --> B{Type of<br>observation}
    B --> C[ELC]
    B --> D(Observation Epic)
    C --> E{Does a Risk<br>already exist?}
    E --> |Yes| F[Map related Risk in ZenGRC,<br>update into risk info if appropriate]
    E --> |No| H[Follow ZenGRC Risk<br>Runbook for new risks]
    H --> G(Risk is treated and<br>managed in StORM Program)
    F --> G
    D --> J{Does a Risk<br>already exist?}
    J --> |Yes| K[Map related Risk in ZenGRC,<br>update into risk info if appropriate]
    J --> |No| L[Follow ZenGRC Risk<br>Runbook for new risks]
    L --> M(Work with SecComp<br>on Remediation)
    K --> M
```

Detailed write up:

1. Open an observation following the [Observation Intake runbook](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/observation-management/-/blob/master/runbooks/1_Observation%20Intake%20and%20Management.md?ref_type=heads) (internal only).
1. If the observation meets the criteria for being upgraded, tag the [StORM DRI]({{< ref "security-risk#d-light-purple" >}}) and apply label ~upgraded::storm-managed if an ELC or ~upgraded:storm-shared if added to an observation epic.
    1. Definitions of labels:
        1. `Upgraded::StORM-Managed` : StORM risk managers are solely responsible for tracking remediation activities
        1. `Upgraded::StORM-Shared` : Remediation of the observation and risk is shared by the StORM risk managers and the observation manager. The StORM risk manager may track remediation activities spanning multiple systems via a common initiative, while the observation manager would be responsible for remediation of the specific system. See the [collaborative remediation](#collaborative-remediation) section for more details.
1. When the Security Risk team is tagged, someone on that team will determine if there is a risk represented for the observation meeting the criteria.
    1. If there is an existing risk, they will map the observation to the risk and leave a comment in the GitLab issues for transparency.
    1. If there is not an existing risk, they will open a new risk following the [StORM Risk Intake runbook](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm/-/blob/master/runbooks/storm-risk-intake-gl.md?ref_type=heads) (internal only).
1. An entity level control, the observation will be entirely managed by the StORM program at the tier 2 risk level, represented by the `Upgraded::StORM-Managed` label.
1. If the Observation is not an entity level control, Security Compliance will work with Security Risk for collaborative remediation with the remediation owner(s).

#### Collaborative Remediation

Security Compliance and Security Risk should look for opportunities to remediate via aggregated/common controls. In the event that observations can be remediated via a common control or implementation, activities can be tracked by the Security Risk team. For example, if we have systems that are not meeting password requirements and remediation across multiple systems involves integrating with Okta, this roll-out can be tracked by Security Risk. If remediation is system-specific, remediation activities can be tracked by Security Compliance. Remediation testing will be completed by which ever team is tracking remediation activities using the [Security Compliance remediation runbook](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/observation-management/-/blob/master/runbooks/2_Remediation%20and%20Closeout.md).

### Status Labels

Defined below are status labels that will aide in the process of managing remediation of observations.

| Label| Definition|
|--|--|
|`Blocked:: Awaiting Remediation Owner Input`| This flags indicates the observation manager is waiting for response from the remediation owner. |
|`Blocked:: Awaiting Observation Manager Input`| This flags the issue for the observation manager on the SecAssurance team|
|`Blocked:: New tool implementation in progress` |This flags the issue for pending completion of the new tool|
|`Upgraded::StORM-Managed` | This label will be leverage when the observation has been upgraded to a tier 2 risk and will be managed in the StORM program|
|`Upgraded::StORM-Shared` | This label will be leverage when the observation has been upgraded to a tier 2 risk and remediation is shared by the Security Risk and Security Compliance team|

## Exceptions

Exceptions will be created for observations that breach a mutually agreed upon remediation date, breach in SLA or if the Remediation Owner confirms the observation will not be remediated.

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- Parent Policy: [Information Security Policy]({{< ref "../_index.md" >}})
- [GCF Control Lifecycle]({{< ref "security-control-lifecycle" >}})
- [Sarbanes-Oxley (SOX) Compliance](/handbook/internal-audit/sarbanes-oxley/)
- [Observation Management Procedure]({{< ref "observation-management-procedure" >}})
- [Observation Management Project](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management)
- [Insight Charts](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management/insights/#/Observation_Issues_Chart)
- [Control Health and Effectiveness Rating Procedure]({{< ref "control-health-effectiveness-rating" >}})

## Contact & Feedback

If you have any questions or feedback about the observation management process please [contact the GitLab Security Assurance Team]({{< ref "security-assurance#contacting-the-team" >}}), or comment in this [feedback issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management/-/issues/943).
