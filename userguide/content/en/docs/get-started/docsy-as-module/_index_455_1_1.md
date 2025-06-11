---
title: "Security Platforms & Architecture"
description: "The Security Platforms and Architecture (SPA) team's mission is to address complex security challenges facing GitLab and its customers, enabling GitLab to be the most secure software factory platform on the market."
---

## What We Do

Composed of [Security Architecture](/handbook/security/product-security/security-platforms-architecture/security-architecture/), [Security Research](/handbook/security/product-security/security-platforms-architecture/security-research/), and [Product Security Engineering](/handbook/security/product-security/security-platforms-architecture/product-security-engineering/), we focus on addressing systemic product security risks.

- We own and operate the [Product Security Risk Register](/handbook/security/product-security/security-platforms-architecture/risk-register/) to continuously identify, assess, and prioritize risks, enabling us to drive cross-organizational risk reduction efforts that enhance GitLab's platform security posture and protect our customers.
- We assess the GitLab ecosystem to identify previously unknown security risks and vulnerabilities.
- We develop the security strategy, roadmap, and standards required to address complex security challenges at scale.
- We contribute directly to the product's evolution by:
  - Building product-first capabilities, paved paths, and secure guardrails to mitigate risk, facilitate secure software delivery, and meet the needs of both GitLab team members and customers.
  - Designing secure architecture solutions and executing proofs-of-concept that accelerate engineering teams' delivery of security improvements.
  - Influencing GitLab's security and compliance roadmap, recognizing we are a canary for external enterprise-grade customer needs.
  - Coordinating cross-divisional Customer 0 efforts to validate new and existing security features for their functionality and utility. Where there are gaps, we provide clear and documented feedback to reduce friction and unlock customer value.
- We translate our security expertise into public and internal thought leadership contributions that establish GitLab as a leader and trusted enabler for secure software development.
- Finally, we support our peer teams across the organization and enable them to accomplish their security goals by providing automation, informal training, documentation, and mentorship.

## FY26 Key Focus Areas

In FY26, our key focus areas are:

- Software Supply Chain and Ecosystem Security
- Authorization and Authentication
- AI Security

In the near future, we will expand upon these priorities and produce a high-level team-wide roadmap.

## FY26 Key "Good Job" Metrics

The following are key metrics we will start tracking in FY26 to measure the SPA team's success delivering upon our charter, with e-Group as our intended audience. These reflect the reality that our ultimate success lies not in our individual activity, but requires working across teams and driving results that directly benefit our customers.

Additional Notes:

- The SPA team launched in FY26Q1. As the team matures, these metrics will evolve.
- These metrics are _in addition_ to team-level, project, and operational metrics.
- For many of these, metrics instrumentation and reporting mechanisms are still forthcoming.

| **FY26 Key Metric** | **Why It Matters** | **How it's Calculated** | **Target Thresholds** | **Measurement Frequency** | **Reporting Mechanism** | **Additional Notes** |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Architectural Documentation Coverage** | This metric tracks Product Security's architectural knowledge of GitLab to enable comprehensive risk assessment, accelerate security review, and strengthen incident response capabilities | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/140) (Internal) | Baseline Required, but this percentage should steadily increase through FY26 | Monthly | TBD | As this coverage increases, we will shift to measuring risk assessment coverage across our architecture instead. |
| **Product Security Risk Mitigations Completed** | This metric demonstrates our effectiveness at driving cross-organizational solutions to systemic security risks that could impact GitLab's platform and customers | The count of merged MRs linked to risks in the [Product Security Risk Register](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Department%3A%3AProduct%20Security&first_page_size=20) (Internal) | Baseline Required | Monthly | Monthly Product Security Risk Register Report (to be established) | This Monthly Product Security Risk Register Report will also detail other PSRR operational metrics like number of new risks documented, reviewed, assigned, prioritized, remediated, mitigated to an acceptable level, and closed. However, for purposes of executive-level metrics, we will focus on mitigations. After we have initial data, we will consider weighting these MRs, perhaps along risk severity levels. |
| **Direct Security Feature Contributions** | This metric tracks our team's delivery of security features and improvements that enhance our security posture, reduce platform risk, and enable GitLab and its customers to create secure software | [The count of merged MRs by SPA with the label "ProdSec-SPA-Contribution" applied](https://gitlab.com/groups/gitlab-org/-/merge_requests/?sort=created_date&state=merged&label_name%5B%5D=ProdSec-SPA-Contribution) | Baseline Required | Monthly | TBD | This likely needs to mature and take into account MR weight/complexity. We will iterate over time after we start tracking. |
| **Percentage of new features dogfooded and validated by Product Security before launch** | This metric tracks our effectiveness at partnering with product teams to validate that new security features meet real-world requirements and deliver value before they reach our customers | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/143) (Internal) | Baseline Required | Monthly | TBD | The North Star target will be 90+%. We will likely start lower, perhaps starting with a 25% target, then 50%, then 75%, then 90%. |
| **Percentage of product-applicable security processes effectively supported by GitLab features** | This metric measures our success in enabling Product Security teams to effectively secure GitLab using our own product features, demonstrating their real-world value for enterprise security teams and validating GitLab's All-in-One DevSecOps narrative | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/142) (Internal) | Baseline Required | TBD | TBD | The designation of 'product-applicable' accounts for the possible existence of GitLab-specific security processes that lack utility for GitLab customers. We will evaluate these as they are identified. |
| **Thought Leadership Contributions** | This metric tracks our active efforts to position GitLab as a security thought leader, influencing both internal practices and the industry | [TBD](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/145) (Internal) | Baseline Required | Quarterly | TBD | TBD |
