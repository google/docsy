---
title: "Technical Security Validation"
description: "Technical Security Validation"
---

## Technical Security Validation (TSV)

The Technical Security Validation (TSV) process is a partnership between GitLab's Security Risk and Security Research teams, designed to supplement [TPRM procedures](/handbook/security/security-assurance/security-risk/third-party-risk-management/) performed during software procurement. While the TPRM process serves to validate the design and operating effectiveness of a company's internal controls, the TSV is leveraged to perform additional due diligence around high risk systems such as those associated to a [Security Notice](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-security-notice-process). These procedures align with Security's Post Implementation Checklist, which serves as an attestation from the Business Owner that appropriate controls have been established by GitLab to secure third party systems.

The output of the TSV, such as conclusions on control deficiencies or opportunities for mitigation, are presented to the system's Business Owner to support informed purchasing decisions and completion of remedation steps where necessary.

## TSV Workflow

A TSV is opened upon identification of control gaps or failures identified during a TPRM review in order to better understand their severity and to identify compensating controls where possible. Necessity of a TSV is determined based on the nature of deficiencies identified, data transmitted, and criticality of the system.

Upon creation of the TSV, the Business Owner is required to provide necessary documentation, systems access, and support as requested within [the TSV issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/technical-security-validation/-/blob/master/.gitlab/issue_templates/TSV%20Intake%20Template.md?ref_type=heads). Once these items are reviewed by the TSV engineer, additional evidence or system access may be required to support these procedures. Provision of these items within a timely manner is critical to support this effort, and failure to provide them in a timely manner may result in escalations as defined below.

Once the TSV has been completed, the conclusion of the evaluation will be documented within the comments section of the TSV issue, with the Business Owner tagged. If adverse findings are identified, the Business Owner is responsible for acknowledging these findings and actioning them where possible. If no findings are identified, the issue will be closed and the Business Owner will be tagged for visibility.

## Evidence Requests and Escalations

> *Continued, timely collaboration between TPRM, the TSV engineer, and the Business Owner is required to support these procedures and allow for efficient completion of the TSV. The timelines below are defined with consideration to the priorities of all involved parties.*

### Initial Evidence Request

Steps necessary to begin the TSV are listed within the TSV Issue Template and include requests for items such as relevant product documentation, links to related issues, and provisioning of system access.

**Items requested within the template must be provided within five business days of request submission.** Failure to provide these items may result in management escalation by the Security Risk Engineer.

### Supplemental Requests

Depending on the complexity of the system, additional items may be required by the TSV engineer to support these procedures, and may be requested via the issue comments.

**Business Owners are asked to provide supplemental evidence, if needed, within five business days of the request.** Failure to meet this timeline may result in management escalation by the TSV engineer.

## Service Level Agreements (SLAs) & Responsibilities

The below-defined Service-Level Agreements and Responsibilities are in place to ensure timely completion of all necessary items within the TSV process.

The Security Risk Engineer opening the TSV is responsible for ensuring initial evidence requests are fulfilled in a timely manner, adhering to the escalation procedures defined above. Escalations will be performed after ten business days of inaction by the Business Owner, with follow-ups performed weekly thereafter until all items are provided. The TSV engineer will follow the above-defined escalation process for supplemental evidence requests. Following submission of all requested evidence, the Technical Security Validation will be completed within ten business days.

| DRI    | Action | Time to Complete |
| ------ | ------ | ---------------- |
| Business Owner     | Provide supporting evidence  | 5 business days from each request |
| TSV Engineer       | Complete TSV  | 10 business days from all evidence provided |

## Resources

- [GitLab's Integrated Third Party Risk Management (TPRM) Program](/handbook/security/security-assurance/security-risk/third-party-risk-management/) <br>
- [Third Party Minimum Security Standards](/handbook/security/security-assurance/security-risk/third-party-risk-management/#third-party-minimum-security-standards) <br>
- [GitLab's Security Research Team](/handbook/security/product-security/security-platforms-architecture/security-research/) <br>
- [TSV Project Workspace](https://gitlab.com/gitlab-com/gl-security/security-assurance/technical-security-validation)
