---
title: "Application Security - Capacity Indicators, Classifications, and Workflows"
---

## Overview

AppSec manages [a wide range of tasks with a high volume of work](https://gitlab.com/gitlab-com/gl-security/appsec/appsec-team#team-capacity-planning-and-operational-work). This page outlines how we measure the team's capacity to ensure we can effectively handle current workloads and plan for future needs.

### What decisions does this data help us make?

Collecting this data helps inform decisions involving the team's capacity and headcount needs. These metrics are only analyzed in aggregate and are __not__ utilized or referenced for evaluating individual team member performance. They are solely used to understand overall team dynamics and requirements.

### Where are the charts that are based on this data?

TBD
<!-- TODO: Add tableau link -->

### How often are these metrics reviewed?

At the beginning of each milestone (monthly), it's the responsibility of AppSec team management to lead the review of these metrics with both the AppSec team and ProdSec leadership.

## Type of Work Classification

Classifying each type of work helps to distinguish where exactly more capacity or other changes may be necessary.

### Table

| Label    | Description |
| -------- | ------- |
| AppSecWorkType::stable counterpart  | Indicates the work was associated to the AppSec stable counterpart duties |
| AppSecWorkType::ThreatModel | Indicates the work was associated to the AppSec threat model duties |
| AppSecWorkType::JihuMRreview | Indicates the work was associated to the AppSec JiHu merge request reviews duties |
| AppSecWorkType::AppSecReview | Indicates the work was associated to the AppSec reviews duties |
| AppSecWorkType::KR | Indicates the work was associated to the AppSec OKR/KR duties |
| AppSecWorkType::SecurityReleaseRotation | Indicates the work was associated to the AppSec Security release task issue duties |
| AppSecWorkType::VulnFixVerification | Indicates the work was associated to security fix validations during security releases (not the same as security release manager rotation AppSecWorkType::SecurityReleaseRotation label) |
| AppSecWorkType::HackerOneRotation | Indicates the work was associated to the AppSec HackerOne duties |
| AppSecWorkType::FieldSecurity | Indicates the work was associated to the request from Field Security (example: customer scan review requests) |
| AppSecWorkType::VATRotation | Indicates the work was associated to the AppSec Federal AppSec VAT duties |
| AppSecWorkType::FedAppSecRelCert | Indicates the work was associated to the AppSec Federal AppSec release certification and merge monitor review duties |
| AppSecWorkType::SecurityMRReview | Indicates the work was associated to the AppSec merge request security reviews (non stable counterpart MR reviews) duties |
| AppSecWorkType::TriageRotation | Indicates the work was associated to the AppSec Triage Rotation |
| AppSecWorkType::CustomerEscalation | Indicates the work was associated to a customer escalating a security issue |
| AppSecWorkType::SIRTandSecurityComms | Indicates the work was associated to a SIRT incidents and/or Security communications work |
| AppSecWorkType::ToolingsAndMaintenance | Indicates the work was associated to our tools and automation |
| AppSecWorkType::CrossTeamCollaboration | Indicates the work was associated to cross-team help/collaboration |
| AppSecWorkType::TeamProjects | Indicates the work was associated to team projects |
| AppSecWorkType::CriticalProjects | Indicates the work was associated to [critical projects](/handbook/security/critical-projects/) |
| AppSecWorkType::HackerAdmin | Indicates the work was associated to HackerOne administration |
| AppSecWorkType::Operational | Should be used for everything else that's not covered by a label above |

#### Who assigns this label and when?

The AppSec Engineer responsible for the task is expected to assign this label to any Issue or MR as soon as they begin interaction.

## Effort Classification

The effort classification is an estimate of the level of effort required to resolve a task, not the amount of actual time spent. The `Estimation Guide` serves as a reference point and is purely a guideline.

### Table

| Label    | Weight | Classification | Description | Estimation Guide | Example |
| -------- | ------ | ------- | ------- | ------- | ------- |
| AppSecWeight::trivial | 1 | Trivial | Very little effort required | Immediate or near immediate change to resolve the issue | Trivial documentation update |
| AppSecWeight::small  | 2 | Small | Straight forward change, minimal investigation | ~0.5 - 1 days  | |
| AppSecWeight::medium | 3 | Medium | Some investigation and/or collaboration needed  | ~1-3 days | |
| AppSecWeight::large | 5 | Large | Signficant investigation and collaboration needed | ~3-5 days | |
| AppSecWeight::XLarge | 8 | XLarge | Very complex and requires a major portion of the milestone to resolve | ~5-10 days | |
| AppSecWeight::Needs Refinement | 13 | Needs Refinement | The issue is overly complex and needs to be promoted to an Epic or broken down into smaller issues | N/A | |

#### Who assigns this label and when?

The AppSec Engineer responsible for the task is expected to assign this label to any Issue or MR after they complete it.
