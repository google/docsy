---
title: "Risk-based Control Testing"
---

## What is Risk-based control testing?

Risk-based control testing refers to control testing and monitoring that aims to ensure controls are operating effectively beyond the scope of GitLab's SOC 2 reports and information security management system for our SaaS platforms, which have [foundational controls](./sec-controls.md) in place where customers need the most assurance.

Risk-based control testing is proactive and focuses on mitigating the most significant risks to the organization, providing a more effective and resource-efficient means of maintaining security. It is adaptive, driven by indicators such as GitLab's quarterly risk assessments, and aims to continually improve security posture.

In contrast, control monitoring of SaaS platforms is aligned with what external auditors test and is more standardized, compliance-driven, and typically occurs at fixed intervals to verify that controls meet the requirements of a specific standard (SOC 2, ISO 27001, PCI DSS, etc.).

Reporting on control and system health beyond [external certification maintenance](./certifications.md) provides a clearer picture of overall control health across the organization.

## Why test controls that are not included in external certifications?

As a security compliance team and key part of the 2nd line of defense, we are responsible for ensuring security controls are operating effectively across the entire company, and compliance posture communicated to leadership to ensure proper attention and allocation of resources can be considered. We need to provide risk mitigation value beyond just certification maintenance.

By focusing on high-risk controls, the compliance team can optimize its resources, ensuring the most critical risks are managed effectively without unnecessarily allocating resources to low-risk areas.

External certifications (for example SOC2, SOX, FedRamp, etc) target specific elements/sections of the environment relevant to the framework.

In the example of SOX, this means just systems that support financial/accounting processes. For SOC2, this could mean anywhere customer data is stored or parts of the environment directly involved in the product customers use. The environment at GitLab is more expansive than just these segments of the environment, meaning risk-based control testing allows us to measure and assess controls for other higher risk systems or processes that are not tested or monitored already, giving us a more in-depth view of control health.

## How are the controls selected for testing?

Controls are prioritized based on various risk assessments and impact assessments that we already do as a company.

To select controls for risk-based control testing, we consider the following attributes:

- Critical Systems Tier per the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [Crown Jewels](https://internal.gitlab.com/handbook/security/security_operations/threat_intelligence/crown-jewels/) per Threat Intelligence in the Internal Handbook
- Data Classification per the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- Risk associated with SaaS/Vendors (for example, a recent breach)
- Coverage of identified risks (such as risks identified by the [Security Risk Team](../security-risk/_index.md), [CIS Top 18 Critical Security Controls](https://www.cisecurity.org/controls/cis-controls-list), known gaps)
- Baseline Level of control per NIST 800-53B
- Time since control was last tested
- Historical Observations
- Nature of the control (e.g. manual, semi-automated, automated)
- Regulatory guidance
- Changes in people, process or technology

Because some controls are already being tested through the Control Monitoring process, these controls will not be prioritized for testing. Testing strategies adapt over time as new risks emerge or controls are deemed to be functioning effectively. It’s dynamic, taking into account risk changes based on internal changes (for example, system updates) or external factors (for example, new regulatory requirements).

The team will coordinate quarterly to identify the controls to be tested for the next quarter based on the above criteria.

## How often are controls tested for risk-based control testing?

While the Security-Compliance will perform risk-based control testing on a quarterly basis, the frequency of a particular control's testing will also be based on risk. Ideally, testing will be balanced between the results of previous testing and expanding our insight into the control environment as a whole. If we determine a control is designed and operating effectively, and the process is subject to few errors, we may elect to test a different control/system rather than covering the same control each quarter.

## How do we report on results of risk-based control testing?

(to be updated - https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/issues/275)

## Risk-based Control Testing Requests

If you have a process or control that you think should be tested based on the criteria above that we might not be covering already, please follow these steps. Note: to have an entire system (new or changing) assessed, please see the [Security System Intake](./sec-controls.md) process.

### 1. Confirm that the controls are not already tested

(to be updated - https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/issues/267)

### 2. Create a Security Compliance Intake Issue

(to be updated - https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/issues/267)

### 3. Security Compliance workflow

(to be updated - https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/issues/267)
