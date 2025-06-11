---
title: "Security Assurance - ZenGRC Activities"
---

## Purpose

This page provides an overview of the various ZenGRC Activities that are carried out by the [Security Assurance]({{< ref "security-assurance" >}}) sub department. Additionally, this page will also provide information on when stakeholders outside of the Security Assurance sub department may engage with ZenGRC.

## Field Security Activities

{{% details summary="Customer Assurance Activities" %}}

The Field Security team utilizes the following ZenGRC objects:

- Requests are used for each Customer Assurance Request
- Issues are used when an observation is noted during the assessment
- Metrics and Reporting are used to track status, types of requests, and data related to each customer for trend analysis
{{% /details %}}

## Risk Activities

{{% details summary="Security Operational Risk Management(StORM)" %}}

All activities related to the StORM program are executed exclusively within ZenGRC. There may be instances where the identification of a risk occurs on GitLab.com (e.g. incident issues, internal issues where security concerns are raised which may be an indicator of risk, etc.) and in these cases, the Risk & Field Security team will review the related details within GitLab and subsequently create a new risk record within ZenGRC for assessment. The wide variety of activities related to StORM that are carried out in ZenGRC include but are not limited to:

- Documenting the identification of a risk
- Documenting the results of risk assessments
- [Scoring]({{< ref "storm-program#risk-factors-and-risk-scoring" >}}) of security operational risks
- Documenting [risk response]({{< ref "storm-program#risk-response" >}})
- Maintaining the [Risk Register]({{< ref "storm-program#risk-tracking-and-reporting" >}})
- Task tracking for activities such as execution of the [StORM Annual Risk Assessment]({{< ref "storm-program#risks-identified-during-risk-assessments" >}})
{{% /details %}}

{{% details summary="Third Party Risk Management" %}}

All activities related to TPRM begin in either a GitLab TPRM Issue or Coupa. Management of all phases of the [third party risk management program) is done via ZenGRC using the following objects:

- Audits and Asessment are used in the Testing phase
- Issues are used when observations are identified
- Metrics and Reporting are used in the Operating phase
{{% /details %}}

## Security Compliance Activities

{{% details summary="Continuous Control Monitoring" %}}

The GitLab Security Compliance team manages all phases of the [security control lifecycle]({{< ref "security-control-lifecycle" >}}) via ZenGRC using the following objects:

- Programs, Standards, Section, Objectives, and Controls are all used in the Preparation phase
- Assessments and Requests are used in the Testing phase
- Issues are used in the Remediation phase
- Metrics and Reporting are used in the Operating phase
{{% /details %}}

{{% details summary="Observation Management" %}}
Observations (aka: findings, exceptions, issues, deficiencies, Tier 3 operational risks) are recorded and managed within ZenGRC. This allows the Security Compliance team to map those observations out to any and all related systems, control assessments, vendors, etc. as well as capture meaningful data about the current state of our [observation management program]({{< ref "observation-management-procedure" >}}) and program operating metrics.
{{% /details %}}

Project-based work, Quarterly OKR work, and Ad-Hoc workstreams are all captured within ZenGRC tasks assigned to individual members of the Security Compliance team.

## Security Governance Activities

{{% details summary="ZenGRC Admin Activities" %}}

The Security Governance team manages the [overall administrative activities on ZenGRC objects]({{< ref "security-assurance#core-tools-and-systems-1" >}}):

- Configuration changes
- Onboarding/offboarding/transfers
- Upgrades/patching/incidents/Restores
- Quality oversight

{{% /details %}}

{{% details summary="Controlled Documents Review" %}}

The Security Governance Team manages the review of all [controlled documents]({{< ref "controlled-document-procedure" >}}) confirming all controlled documents are unified and reviewed annually.

Controlled Documents identified as policies/procedures/standards reside within the ZenGRC Policies object and will be mapped to control assessments to identify which assessments rely on which policies/procedures/standards.
{{% /details %}}

## Stakeholder Engagement with ZenGRC

The Security Assurance Team may periodically engage stakeholders that are outside of the sub department using ZenGRC. The various activities that the sub deparment may engage stakeholders on can be found below. SlackBot will alert users when they are assigned a task or tagged in a comment within ZenGRC. Additionally, daily to-do emails are sent to users with a list of tasks assigned in ZenGRC.

{{% details summary="ZenGRC Questionnaires" %}}

### Completing ZenGRC Questionnaires

Stakeholders may be occasionally engaged to complete a ZenGRC questionnaire. Questionnaires are utilized for various reasons, such as helping to gather and collect data to establish [GitLab's Risk Appetite and Tolerance]({{< ref "storm-program#establishing-risk-appetite-and-tolerance" >}}) year over year. The Security Assurance Team utilizes the native questionnaire functionality within ZenGRC because it provides some mechanisms to automatically calculate risk scores and thresholds based off of responses.

Should any team member be engaged to complete a questionnaire from ZenGRC, an example of the email that the team member will receive can be found below.

![Example ZenGRC Questionnaire Email](/handbook/security/security-assurance/images/zg-questionnaire-example.png)

In order to complete the questionnaire, team members should perform the following steps:

1. Click on the **Open Questionnaire** link to open a web browser window with the questionnaire.
1. Team members will be presented with the questionnaire. Provide responses to each question until the final question is completed.

   ![Initial ZenGRC Questionnaire Screen](/handbook/security/security-assurance/images/example-questionnaire-1.png)

1. Instead of seeing a "submit" button once the final question is answered, team members will need to click on the "summary" button. This screen provides a summary of all of the responses that were provided for the team member to review. The final "submit" button can be found on the summary screen.

   ![ZenGRC Questionnaire Summary Screen](/handbook/security/security-assurance/images/example-questionnaire-2.png)

1. Submit the questionnaire. A confirmation screen will be presented.

   ![ZenGRC Submitted Questionnaire Confirmation Screen](/handbook/security/security-assurance/images/example-questionnaire-3.png)
{{% /details %}}
