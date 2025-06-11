---
title: "GitLab Security Resource Center"
description: "Provides an aggregated listing of popular and important links and information for GitLab's customers and prospects."
---

## Commonly requested resources

### Contacting GitLab for reporting security issues

- [Reporting Abuse]({{< ref "abuse-on-gitlab-com" >}})
- [Coordinated Disclosure Process](https://about.gitlab.com/security/disclosure/)
- [HackerOne Reporting Process]({{< ref "hackerone-process" >}})

### GitLab's Customer Assurance Package (CAP)

Our Customer Assurance Package contains documents such as our SOC2 report, ISO 27001 certificate, penetration test executive summary, and pre-filled CAIQ and SIG questionnaires, among many other documents. Please see our [CAP page](https://about.gitlab.com/security/cap/) to request the package.

### GitLab's Trust Center

Our [Trust Center](https://about.gitlab.com/security/) outlines the various compliance and assurance credentials that GitLab maintains. This page also contains links to important security, legal & privacy, and availability resources, such as an [overview of our security practices]({{< ref "_index.md#security-practices" >}}), our [Environmental, Social, and Governance strategy](/handbook/legal/esg/), and our [production architecture](/handbook/engineering/infrastructure/production/architecture/).

## Frequently asked questions

The following links contain frequently asked security, legal & privacy, and availability questions.

- [Security FAQs](https://about.gitlab.com/security/faq/)
- [Legal & Privacy FAQs](https://about.gitlab.com/privacy/)
- [Availability FAQs](/handbook/engineering/infrastructure/faq/)

## Control topics

### Table of contents

| [Acceptable use]({{< ref "gitlab_security_resource_center#acceptable-use" >}}) | [Access management]({{< ref "gitlab_security_resource_center#access-management" >}}) | [Business continuity]({{< ref "gitlab_security_resource_center#business-continuity" >}}) | [Cryptography]({{< ref "gitlab_security_resource_center#cryptography" >}}) | [Data classification]({{< ref "gitlab_security_resource_center#data-classification" >}})
| [Disaster recovery]({{< ref "gitlab_security_resource_center#disaster-recovery" >}}) | [Endpoint management]({{< ref "gitlab_security_resource_center#endpoint-management" >}}) | [Hardening]({{< ref "gitlab_security_resource_center#gitlabcom-hardening-techniques" >}}) | [Incident response and communication]({{< ref "gitlab_security_resource_center#incident-response-and-communication" >}}) | [Independent assurance]({{< ref "gitlab_security_resource_center#independent-assurance" >}})
| [Logging and monitoring]({{< ref "gitlab_security_resource_center#logging-and-monitoring" >}}) | [Network security]({{< ref "gitlab_security_resource_center#network-security" >}}) | [Privacy]({{< ref "gitlab_security_resource_center#privacy" >}}) | [Security awareness]({{< ref "gitlab_security_resource_center#security-awareness" >}}) | [Third party risk management]({{< ref "gitlab_security_resource_center#third-party-risk-management" >}})
| [Threat modeling]({{< ref "gitlab_security_resource_center#threat-modeling" >}}) | [Vulnerability management]({{< ref "gitlab_security_resource_center#vulnerability-management" >}}) |

### Acceptable use

- [Internal acceptable use policy](/handbook/people-group/acceptable-use-policy/)
- [GitLab's terms of use](https://about.gitlab.com/terms/)

### Access management

- [Access Management Policy]({{< ref "access-management-policy" >}})
- [Access Review Procedure]({{< ref "security-assurance/security-compliance/access-reviews" >}})
- [Access Request process](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/)

### Business continuity

- [Business Continuity Plan](/handbook/business-technology/gitlab-business-continuity-plan/)
- [Business Impact Analysis]({{< ref "business-impact-analysis" >}})
- [Information System Contingency Plan]({{< ref "Information-System-Contingency-Plan-ISCP" >}})

### Cryptography

- [GitLab cryptography standard]({{< ref "cryptographic-standard" >}})
- [Encryption policy]({{< ref "encryption-policy" >}})

### Data classification

- [Data classification standard]({{< ref "data-classification-standard" >}})
- [Record retention policy](/handbook/legal/record-retention-policy/)
- [Records retention and disposal standard]({{< ref "records-retention-deletion" >}})

### Disaster recovery

- [Disaster recovery plan](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
- [Database disaster recovery](/handbook/engineering/infrastructure/database/disaster-recovery/)
- [Database overview](/handbook/engineering/infrastructure/database/)

### Endpoint management

- [Endpoint management at GitLab](https://internal.gitlab.com/handbook/it/endpoint-tools/)
  - [Jamf](https://internal.gitlab.com/handbook/it/endpoint-tools/jamf/)
  - [EDR](/handbook/business-technology/end-user-services/onboarding-access-requests/endpoint-management/edr/)
- [Use Gitleaks as a pre-commit git hook on laptops]({{< ref "gitleaks" >}})

### GitLab.com hardening techniques

- [GitLab projects baseline requirements]({{< ref "gitlab_projects_baseline_requirements" >}})
- [GitLab security requirements for deployment and development]({{< ref "security-development-deployment-requirements" >}})
- [How to harden your self-managed GitLab instance](https://about.gitlab.com/blog/2023/05/23/how-to-harden-your-self-managed-gitlab-instance/)
- [The ultimate guide to securing your code on GitLab.com](https://about.gitlab.com/blog/2023/05/31/securing-your-code-on-gitlab/)

### Incident response and communication

- [Security incident communications plan procedure]({{< ref "security-incident-communication-plan" >}})
- [Security incident response guide]({{< ref "sec-incident-response" >}})

### Independent assurance

- [Independent Security Assurance]({{< ref "independent_security_assurance" >}})

### Logging and monitoring

- [Monitoring of gitlab.com](/handbook/engineering/monitoring/)
- [Log management for gitlab.com](/handbook/engineering/monitoring/#logs)
- [Logging and monitoring architecture](/handbook/engineering/infrastructure/production/architecture/#monitoring-and-logging)
- [GitLab audit logging policy]({{< ref "audit-logging-policy" >}})
- [Log and audit requests process]({{< ref "log_requests" >}})
- [Infrastructure department KPIs](/handbook/engineering/infrastructure/performance-indicators/)
- [Infrastructure production runbooks](https://gitlab.com/gitlab-com/runbooks/)

### Network security

- [Network security management procedure](/handbook/engineering/infrastructure/network-security/)
- [GitLab security requirements for deployment and development]({{< ref "security-development-deployment-requirements" >}})

### Privacy

- [GitLab Privacy Statement](/handbook/legal/privacy/)
- [Team Member Privacy Notice](/handbook/legal/privacy/employee-privacy-policy/)
- [U.S. State Privacy Rights and Disclosures](https://about.gitlab.com/privacy/us-state-privacy-rights-and-disclosures/)
- [Account deletion and data access requests workflow]({{< ref "account_deletion_access_request_workflows" >}})

### Security awareness

- [Security training]({{< ref "security-training" >}})
- [Security awareness training program]({{< ref "./security-assurance/governance/sec-awareness-training" >}})
- [Security awareness training procedure]({{< ref "./security-assurance/governance/sec-training" >}})
- [Phishing program]({{< ref "./security-assurance/governance/phishing" >}})

### Third party risk management

- [Security third party risk management]({{< ref "./security-assurance/security-risk/third-party-risk-management" >}})

### Threat modeling

- [Threat modeling at GitLab]({{< ref "./product-security/application-security/threat-modeling" >}})
- [Threat modeling How To Guide]({{< ref "./product-security/application-security/threat-modeling/howto" >}})
- [Application security threat modeling process]({{< ref "./product-security/application-security/runbooks/threat-modeling" >}})

### Vulnerability management

- [Vulnerability management standard]({{< ref "./product-security/vulnerability-management" >}})
- [Application vulnerability management procedure]({{< ref "./product-security/application-security/vulnerability-management" >}})
- [Infrastructure vulnerability management procedure]({{< ref "./product-security/vulnerability-management/Infrastructure-vulnerability-procedure" >}})
