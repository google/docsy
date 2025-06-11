---
title: "Security Risk Team"
description: "Security Risk Team Charter"
---

## Mission Statement

To drive security risk treatment at GitLab by empowering teams to make informed and intelligent [decisions](/handbook/leadership/making-decisions/#making-decisions) through proactive identification, monitoring, prioritization, and reporting of security risks.

## Value Proposition

We perform thorough, collaborative, and efficient risk assessments as well as drive risk reduction so that GitLab can achieve it's goals while maintaining a high level of security.

## Core Competencies

### Security Operational Risk Management (StORM) Program{#storm}

The Security Risk team manages an integrated [Operational Risk Management](/handbook/security/security-assurance/security-risk/storm-program/) program focused on the identification, assessment, continuous monitoring, and reporting of Security Risks across the organization. Risk Reduction is 1 of 5 of the Security Department's operating principles ([Security Vision and Mission](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)). As such, the Security Risk Team takes a leading role in providing the information required by leadership to establish our Strategic Roadmap and our quarterly [Objectives and Key Results (OKRs)](/handbook/company/okrs/). Visit the [StORM Program & Procedures](/handbook/security/security-assurance/security-risk/storm-program/) handbook page for additional details, including a quick introduction to Risk Management at GitLab as well as information about the purpose, scope, and specific procedures executed as part of the program.

{{% panel header="**Need to communicate a potential risk to the team?**" header-bg="warning" %}}
Please refer to the [communication section of the StORM Program & Procedures](/handbook/security/security-assurance/security-risk/storm-program/#communication-of-risks-to-the-security-risk-team) page for information on the various ways that team members can use to escalate potential risks to the Security Risk Team.
{{% /panel %}}

### Security Third Party Risk Management (TPRM) Program{#tprm}

GitLab maintains an industry-leading [Third Party Risk Management (TPRM) Program](/handbook/security/security-assurance/security-risk/third-party-risk-management) through the use of automation, continuous monitoring, and deep integration across business functions to validate the security of GitLab data shared with external parties. The integration of GitLab's TPRM program within the vendor Procurement flow enables cross-functional [collaboration](/handbook/values/#collaboration) between Privacy, Legal, IT, and People Operations to facilitate [transparent](/handbook/values/#transparency), risk-based decision making, Business and Stakeholder-focused [Results](/handbook/values/#results), and adherence to GitLab's Regulatory and [Compliance Obligations](/handbook/security/security-assurance/security-compliance/certifications/). The vendor relationships maintained through this program are leveraged to create efficiencies across the organization.

### Business Impact Analysis (BIA) and Critical System Tiering (CST){#bia}

The [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) (BIA) helps determine the systems critical to serving GitLab's Customers. The output of the BIA is the designation of a [Critical System Tier](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) (CST) for a new system by the Security Risk Team.

### Asset Inventory Maintenance{#asset-inventory}

Establishing a complete and accurate inventory of assets is key to the success of GitLab's Risk Program. As such, the Security Risk Team collaborates closely with IT and Business Owners to ensure new systems are added to the [Tech Stack](/handbook/business-technology/tech-stack-applications/#roles-and-responsibilities).

## Operating Model

### Core Processes

|Function     |DRI|
|:----------:|:----------:|
|[Annual Risk Assessment](/handbook/security/security-assurance/security-risk/storm-program/#storm-procedures)     |Kyle Smith|
|[Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/)     |Nirmal Devarajan|
|[New System Additions to Tech Stack and Post-Implementation Checks](/handbook/business-technology/tech-stack-applications/)     |Nirmal Devarajan|
|[Critical System Tiering](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/#designating-critical-system-tiers)     |Kyle Smith|
|[Ongoing SecRisk-Related Observations Management](/handbook/security/security-assurance/observation-management-procedure/)     |Nirmal Devarajan|
|[Ongoing Risk Treatment](storm-program#storm-procedures)     |Kyle Smith|
|[Ongoing TPRM Assessments](/handbook/security/security-assurance/security-risk/third-party-risk-management/)     |Ryan Lawson|
|[Periodic SOX CUEC Facilitation](/handbook/security/security-assurance/security-risk/sox_cuec_mapping_procedure/)     |Eric Geving|
|[Periodic TPRM Assessments](/handbook/security/security-assurance/security-risk/third-party-risk-management/)     |Eric Geving|
|TPRM Data Quality and Emerging Requirements Management | Eric Geving |
|[StORM Metrics and Reporting](/handbook/security/security-assurance/security-risk/storm-program/#risk-tracking-and-reporting)     |Kyle Smith|
|TPRM Metrics and Reporting     |Ryan Lawson|
|TPRM Application Integrations  |Ryan Lawson|

### Engagement Models

1. [Request a TPRM Review](/handbook/security/security-assurance/security-risk/third-party-risk-management/#independent-assessments)
1. [Report Security Operational Risk](/handbook/security/security-assurance/security-risk/storm-program/#communication-of-risks-to-the-security-risk-team)
1. In GitLab, tag the team across GitLab using `@gitlab-com/gl-security/security-assurance/security-risk-team`

### Communication Channels{#contact}

1. <i class="fas fa-envelope fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> Email: `securityrisk@gitlab.com`
1. <i class="fab fa-slack fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> Slack: [#sec-assurance channel](https://gitlab.slack.com/archives/C0129P7DW75) (includes the broader Security Assurance Team) - Mention `@security-risk`
1. <i class="fab fa-gitlab fa-fw" style="color:rgb(219,59,33)" aria-hidden="true"></i> GitLab: Tag the team across GitLab using `@gitlab-com/gl-security/security-assurance/security-risk-team` - Mention `@security-risk`

#### Team Members{#team-members}

|Team Member|Role|
|:----------:|:----------:|
|[Ty Dilbeck](https://gitlab.com/tdilbeck)|[Senior Manager, Security Risk](/job-families/security/security-leadership/#senior-manager-security)|
|[Nirmal Devarajan](https://gitlab.com/ndevarajan)|[Senior Security Risk Engineer](/job-families/security/security-assurance-job-family/#security-risk-1)|
|[Eric Geving](https://gitlab.com/ericgeving)|[Senior Security Risk Engineer](/job-families/security/security-assurance-job-family/#security-risk-1)|
|[Ryan Lawson](https://gitlab.com/rlawson1)|[Senior Security Risk Engineer](/job-families/security/security-assurance-job-family/#security-risk-1)|
|[Kyle Smith](https://gitlab.com/kylesmith2)|[Staff Security Risk Engineer](/job-families/security/security-assurance-job-family/#security-risk-2)|

## Success Metrics

| **Key Metric** | **Why It Matters** | **How it's Calculated** | **Target Thresholds** | **Measurement Frequency** | **Reporting Mechanism** | **Additional Notes** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|Top 5 Risk Reduction over Time| The Top 5 risks represent the top 5 security risks to GitLab the company. These risks need to be reduced and managed effectively to reduce the likelihood of a significant security incident | Risk scores are calculated based on impact and likelihood. | Risks are considered in tolerance with a risk score of 10 or below. | Quarterly | [Tableau Dashboard (internal only)](https://10az.online.tableau.com/#/site/gitlab/views/Top5RiskReductionOverTime/Top5RiskReductionoverTimeDashboard)| n/a|
| Third Party Risk Management Capacity | An indicator of third party risk, third party risk assessments proactively identify potential vendor security risks as part of onboarding or contracting, enabling business owners to make risk based decisions throughout the vendor lifecycle. | Count of total number security assessments completed QoQ  | Less than 70 per quarter. | Quarterly | [TPRM Metrics Sheet (internal only)](https://docs.google.com/spreadsheets/d/1g0G3YrPQXs0H2dGRUrtSVh97bTqjkslzNIzHdq2B8_M/edit?gid=1591436469#gid=1591436469) | Will be added back into Tableau in FY26Q2 |

## FY26 Strategic Initiatives

| # | Objective | Key Deliverables | Timeline |
|:-:| :-------- | :--------------- | :------: |
| 1 | Enhance our Acceptable Use Policy Program | - Block unnecessary or insecure integrations <br> - Define processes for new integrations <br> - Restrict privileges to install integrations without security and privacy reviews | Ongoing, FY26-27 |
| 2 | Consolidate Security Division Issues/Recommendations | - Inventory of all sources of recommendations from the Security Division <br>- Centralized view of all issues/recs. across Security Division<br>- Standardization across issues/recs. with documentation standards<br>- Scalable management of issues/recs. to improve adoption | In progress<br>Target Comp.: Q3 |
| 3 | Corporate and Product Disaster Recovery Planning and Governance | - Collaborate with Business Teams to plan and govern the execution of BC/DR control activities to fulfill external certification requirements <br> - Perform RTO/RPO analysis for critical vendor systems, escalate gaps/discrepancies compared to RTO/RPO recommendations, and draft a resolution plan | In progress; Target completion: Q2-end |
| 4 | Update Security Assurance KPIs | Develop a comprehensive Security Assurance metrics dashboard to monitor, measure, and validate that all security process success criteria are being effectively tracked and achieved | In progress; Target completion: Q2 |

## Review and Updates

This charter will be reviewed and updated quarterly to ensure alignment with:

1. [GitLab Strategy](/handbook/company/strategy/)
1. [Security Division Mission and Vision](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission)
1. [Security's Multi-year Strategy](https://internal.gitlab.com/handbook/security/information_security_goals_and_priorities/) (internal only)
1. [Security Assurance Mission and Vision](/handbook/security/security-assurance/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-assurance-mission-and-vision)
1. Security Assruance Multi-year Strategy - In Development

Next scheduled review: 2025-06-16
