---
title: "Security Platforms & Architecture"
description: "Security Platforms & Architecture Team Charter"
---

Last Updated: April 1, 2025

## Mission Statement

The Security Platforms and Architecture (SPA) team addresses complex security challenges facing GitLab and its customers to enable GitLab to be the most secure software factory platform on the market. Composed of [Security Architecture](/handbook/security/product-security/security-platforms-architecture/security-architecture/), [Security Research](/handbook/security/product-security/security-platforms-architecture/security-research/), and [Product Security Engineering](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/), we focus on systemic product security risks and work cross-functionally to mitigate them while maintaining Engineering's development velocity.

## Value Proposition

We provide proactive risk assessments, architectural security solutions and standards, product security expertise and guidance, and direct product enhancements so that GitLab and our customers can create quality, secure software with high velocity. Our team translates security expertise into public and internal thought leadership contributions that establish GitLab as a leader and trusted enabler for secure software development.

## Scope and Responsibilities

### Primary Areas of Ownership

- **Product Security Risk Register**: SPA is the DRI for organizing and presenting risks in the [PSRR](/handbook/security/product-security/security-platforms-architecture/risk-register/) and facilitating its operational cadences. We also lead comprehensive risk identification, assessment, and prioritization efforts and work cross-organizationally to create the strategies, roadmaps, and standards required to enhance GitLab's security posture, protect our customers, and address complex security challenges at scale.
- **Security Research**: We assess the GitLab ecosystem to identify previously unknown security risks and vulnerabilities.
- **Direct Product Contributions**: We contribute directly to the product's evolution by:
  - Building product-first capabilities, paved paths, and secure guardrails to mitigate risk, facilitate secure software delivery, and meet the needs of both GitLab team members and customers.
  - Designing secure architecture solutions and executing proofs-of-concept that accelerate engineering teams' delivery of security improvements.
- **[Security Interlock](/handbook/security/product-security/security-platforms-architecture/security-interlock/)**: SPA is the DRI for coordinating cross-divisional Customer 0 efforts of new features, internal dogfooding of existing features, and product co-creation, ensuring the platform's security capabilities meet real-world security use cases.
- **Architecture Consultations and Review**: Proactively consult on and conduct security architecture reviews for large, complex, strategic, and high-impact projects.
- **Security Standards**: We develop and communicate security standards to proactively enable teams to make sound security decisions and establish clear expectations for secure software delivery.
- **Product Security Metrics**: We design, implement metrics collection systems, and regularly present metrics that accurately measure both strategic and operational effectiveness across ProdSec teams.
- **Thought Leadership**: SPA translates our security expertise into public and internal thought leadership contributions that establish GitLab as a leader and trusted enabler for secure software development.
- **Peer Team Support**: SPA supports our peer teams across the organization and enables them to accomplish their security goals by providing automation, informal training, documentation, and mentorship.

### Interface Points

- **Product Security Risk Register:**
  - All Product Security teams contribute to the creation, updating, and treatment of risks in the PSRR.
  - We collaborate with the [Security Risk Team](/handbook/security/security-assurance/security-risk/), who owns and operates the broader [Risk Register](/handbook/security/security-assurance/security-risk/storm-program/).
- **Security Interlock**:
  - All Product Security teams contribute real-world testing of GitLab features and provide feedback to improve product usability, functionality, and effectiveness.
  - SPA consolidates and delivers structured feedback to Security Product Managers and Engineering teams to drive feature enhancements that address actual security team workflows and requirements.
- **Security Team Escalations:** We respond to requests for support in areas including -
  - Vulnerability impact analysis and POC development [Requestor: AppSec]
  - Security reviews requiring additional expertise [Requestor: AppSec or InfraSec]
  - Common themes and pain points requiring product capability development, automation work, custom tooling, or standards [Requestor: AppSec or InfraSec]
  - [Technical Security Validation](/handbook/security/security-assurance/technical-security-validation/) of high-risk systems used by GitLab [Requestor: Security Risk]
- **Product/Engineering Collaboration:**
  - SPA influences GitLab's security and compliance roadmap, recognizing we are a canary for external enterprise-grade customer needs.
  - SPA develops product-first capabilities with the collaboration and alignment of Product and Engineering.
  - Compliance Framework Implementation and Operations: SPA partners with Security Compliance and Engineering Teams on the roadmap to obtain and maintain certifications to customer-required security frameworks.
  - Field Security: SPA supports and leverages Field Security to communicate security guidance and build customer trust.

### Out of Scope

- Non-escalated security design reviews of moderate or low-impact features [DRI: AppSec]
- Routine vendor third-party risk assessments [DRI: Security Risk]
- External Penetration Testing Coordination [DRI: AppSec]
- Vulnerability Management Operations [DRI: Vulnerability Management, AppSec, and Security Compliance]
- Security Feature development unrelated to:
  - PSRR Risks
  - Homegrown tooling integrations
  - ProdSec scaling/capability needs

## Communication Channels

Routine communications with the SPA team happen through the following:

- Primary SPA Slack channel for team-wide discussion: #security-spa
- Team-specific channels for discussion targeting one sub-team: #security-architecture, #security-research, #sec-product-security-engineering
- GitLab Tags for Issue/MR discussion: `@gitlab-com/gl-security/security-research`, `@gitlab-com/gl-security/product-security/security-architecture`,`@gitlab-com/gl-security/product-security/product-security-engineering`

In the event of an emergency, GitLab Team Members should page the Security Incident Response Team in any channel using the command `/security`.

## FY26 Primary Focus Areas

In FY26, our key focus areas are:

- Software Supply Chain and Ecosystem Security
- Authorization and Authentication
- AI Security

In the near future, we will expand upon these priorities and produce a high-level team-wide roadmap.

## FY26 Metrics

SPA maintains metrics at many levels. The following are SPA-level strategic and operational metrics. These metrics are _in addition_ to Key Risk Indicators, project-level metrics, or sub-team specific metrics. For many of these, metrics instrumentation and reporting mechanisms are still forthcoming. The SPA team launched in FY26Q1. As the team matures, these metrics will evolve.

Note: These tables require horizontal scrolling to see completely.

### Strategic Metrics

The following are key metrics we will start tracking in FY26 to measure the SPA team's success delivering upon our charter, with E-Group as our intended audience. These reflect the reality that our ultimate success lies not in our individual activity, but requires working across teams and driving results that directly benefit our customers.

| **FY26 Key Metric** | **Why It Matters** | **How it's Calculated** | **Target Thresholds** | **Measurement Frequency** | **Reporting Mechanism** | **Additional Notes** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Architectural Documentation Coverage** | This metric tracks Product Security's architectural knowledge of GitLab to enable comprehensive risk assessment, accelerate security review, and strengthen incident response capabilities | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/140) (Internal) | Baseline Required, but this percentage should steadily increase through FY26 | Monthly | TBD | As this coverage increases, we will shift to measuring risk assessment coverage across our architecture instead. |
| **Product Security Risk Mitigations Completed** | This metric demonstrates our effectiveness at driving cross-organizational solutions to systemic security risks that could impact GitLab's platform and customers | The count of merged MRs linked to risks in the [Product Security Risk Register](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Department%3A%3AProduct%20Security&first_page_size=20) (Internal) | Baseline Required | Monthly | Monthly Product Security Risk Register Report (to be established) | This Monthly Product Security Risk Register Report will also detail other PSRR operational metrics like number of new risks documented, reviewed, assigned, prioritized, remediated, mitigated to an acceptable level, and closed. However, for purposes of executive-level metrics, we will focus on mitigations. After we have initial data, we will consider weighting these MRs, perhaps along risk severity levels. |
| **Direct Security Feature Contributions** | This metric tracks our team's delivery of security features and improvements that enhance our security posture, reduce platform risk, and enable GitLab and its customers to create secure software | [The count of merged MRs by SPA with the label "ProdSec-SPA-Contribution" applied](https://gitlab.com/groups/gitlab-org/-/merge_requests/?sort=created_date&state=merged&label_name%5B%5D=ProdSec-SPA-Contribution) | Baseline Required | Monthly | TBD | This likely needs to mature and take into account MR weight/complexity. We will iterate over time after we start tracking. |
| **Percentage of new features dogfooded and validated by Product Security before launch** | This metric tracks our effectiveness at partnering with product teams to validate that new security features meet real-world requirements and deliver value before they reach our customers | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/143) (Internal) | Baseline Required | Monthly | TBD | The North Star target will be 90+%. We will likely start lower, perhaps starting with a 25% target, then 50%, then 75%, then 90%. |
| **Percentage of product-applicable security processes effectively supported by GitLab features** | This metric measures our success in enabling Product Security teams to effectively secure GitLab using our own product features, demonstrating their real-world value for enterprise security teams and validating GitLab's All-in-One DevSecOps narrative | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/142) (Internal) | Baseline Required | TBD | TBD | The designation of 'product-applicable' accounts for the possible existence of GitLab-specific security processes that lack utility for GitLab customers. We will evaluate these as they are identified. |
| **Thought Leadership Contributions** | This metric tracks our active efforts to position GitLab as a security thought leader, influencing both internal practices and the industry | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/145) (Internal) | Baseline Required | Quarterly | TBD | TBD |

### Operational Metrics

| **FY26 Key Metric** | **Why It Matters** | **How it's Calculated** | **Target Thresholds** | **Measurement Frequency** | **Reporting Mechanism** | **Additional Notes** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Security Research Identified Vulnerabilities** | This metric tracks our Security Research Team's effectiveness at proactively identifying vulnerabilities before they can impact GitLab or our customers | Count of bug::vulnerability identified by Security Research over time, weighted by severity ([sample GLQL](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/-/issues/250#note_2245509822)) | Baseline Required | Monthly | TBD | |
| **PSRR Operational Metrics: Number of new well-articulated risks documented, reviewed, assigned, prioritized, remediated, mitigated to an acceptable level, and closed** | These metrics provide comprehensive visibility into our Product Security Risk Register's effectiveness at identifying, processing, and resolving security risks throughout their lifecycle. | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/166) | Baseline Required (See Notes) | Monthly | Monthly Product Security Risk Register Report (to be established) | Early in FY26, we expect to see the number of newly documented risks rise and exceed the number of those prioritized, addressed, and closed. After this initial influx, we should see more balance among these metrics. |
| **On-time delivery of planned work** | This metric measures our team's ability to reliably deliver planned security work within committed timeframes, ensuring predictable security improvements for GitLab and our customers. | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/164) (internal) | 80%+ | Monthly | TBD | ------ |
| **Backlog Planning Horizon** | This metric tracks our team's ability to maintain a structured backlog with well-defined work items, enabling strategic prioritization and resource allocation. | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/165) (internal) | Iterative targets, starting with 1 quarter's worth of well-defined work in the backlog and progressing to a 12-18 month roadmap | Monthly | TBD | We should expect the team's roadmap to remain flexible and change to adjust for business needs. However, the need to increase our time horizon aligns with the new roadmap planning processes in Product and Engineering. This applies primarily to ProdSecEng, but we will also explore how to effectively apply something similar to Architecture and Research. |

## Review and Updates

This charter will be updated quarterly to ensure alignment with company and divisional priorities, the GitLab Security product roadmap, and critical risks in the StORM and Product Security Risk Registers.

Next scheduled review: June 30, 2025
