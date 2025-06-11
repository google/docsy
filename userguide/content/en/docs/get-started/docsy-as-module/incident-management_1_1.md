---

title: "Incident"
---

## Definition of an Incident

The definition of "incident" can vary widely among companies and industries. Here at GitLab, incidents are **anomalous conditions** that result in — or may lead to — service degradation, outages, or other disruptions. These events require human intervention to avert disruptions, communicate status, restore normal service, and identify future improvements.
Incidents are _always_ given immediate attention.

## Incident Management

Incident Management is the process of responding to, mitigating, and documenting an incident. At GitLab, we approach Incident Management as a feedback loop with the following steps, with different teams adjusting them as needed:

### 1. Preparation

The first step in an effective Incident Management program is preparation. This includes documentation of process and relevant training for everyone who could be involved in an incident. This step also includes ensuring the appropriate monitoring and alerting is in place, and the right people are part of the on-call rotation. The people involved in the preparation phase do not necessarily align with the roles for steps 2 - 7 defined below.

### 2. Identification

The various paths of identifying a problem include:

- Instrumentation/alerting/monitoring
- Customer reports
- Team member reports
- Security reports or other threat intelligence

Once a problem has been identified by one or more of the above paths, an incident is declared.

### 3. Investigation

Investigation includes looking for the cause of an outage/service disruption and an initial determination of the impact of the incident, which informs the severity level the incident is declared at. Severity levels may be changed as impact is further revealed in later stages.

### 4. Containment

Containing the impact and stabilizing the service as quickly as possible. Once containment is achieved and the impact of the disruption is alleviated, the incident is considered "mitigated".

### 5. Remediation

A more robust response to stabilizing the service. An incident is considered remediated, or "resolved", when all anomalous conditions are resolved.

### 6. Recovery

Improvements are made across testing and documentation, based on the specific containment and remediation actions taken for the incident. Corrective Actions, that have been identified to either prevent the incident from re-occurring or significantly improve future Time to Detection, Time to Mitigation or Time to Resolution of the Incident, may be started in this phase.

### 7. Learnings

This includes doing Root Cause Analysis, Incident Reviews/retrospectives, and identifying and implementing further Corrective Actions.
All of these should feed into updating documentation and training in step 1 and close the feedback loop.

Learning from incidents individually is important. Incidents should also be reviewed holistically to identify trends and learnings in order to improve the organization's posture, processes, and product.

## Incident roles

|  Role  |  Responsibilities |
| ------ | ----------------- |
| Incident Manager (IM) | Coordination of efforts across roles and teams. |
| Engineer On Call (EOC) | Responding to pages and conducting initial triage and investigation. |
| Communications Manager On Call (CMOC) | External communications through various channels. |

## On-call Schedule Management

For most on-call schedule management, GitLab uses [PagerDuty](gitlab.pagerduty.com) to create schedules and set escalation policies.

We also employ a [Development Escalation Process](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html) to get expertise from development teams as needed.

## How we monitor and alert GitLab

[Here](/handbook/engineering/monitoring/) is an overview on our monitoring. We use an in house tool to alert when a service is in breach of its SLI or SLO, which will also connect to PagerDuty.
