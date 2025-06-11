---
title: "PCI Charter"
controlled_document: true
---

## Purpose

This charter establishes the governance framework and organizational structure for maintaining compliance with the Payment Card Industry Data Security Standard (PCI DSS) requirements. It defines roles, responsibilities, and accountability measures to ensure the security of GitLab's SaaS offerings as a Service Provider.

## Program Governance

The Chief Information Security Officer, supported by the Security Assurance team, maintains ultimate accountability for PCI DSS compliance and is responsible for:

- Reviewing and approving the PCI DSS charter annually
- Reviewing and approving PCI DSS scope every 6 months
- Ensuring adequate resource allocation
- Overseeing risk assessment and management
- Coordinating necessary remediation activities

## Communication and Reporting

Results and status are communicated to executive management.

## Scope

GitLab DOES NOT store, process, or transfer cardholder data (CHD) or sensitive authentication data (SAD), however is in scope for PCI DSS because our offering can impact the security of our customers' cardholder data environments (CDE) such as their code repositories and CI/CD workflows. GitLab is also in scope in a limited capacity due to our outsourcing of the Customer Portal payment form.

Therefore, GitLab is in scope for PCI DSS as both a service provider (SAQ D) covering GitLab.com and a Merchant (SAQ A) covering customers.GitLab.com. For more details, including an an inventory of system components that are in scope for PCI DSS and a description of their function/use, see the [external audit technical scope](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/blob/main/Certifications-Attestations/External_Audit_'Technical'_Scope.md?ref_type=heads#pci).

### Program Diagrams

[Network](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance/team/-/blob/main/Certifications-Attestations/PCI%20DSS/pci-networking-diagram.md) and [Data Flow](https://docs.gitlab.com/ee/development/architecture.html#component-diagram) Diagrams are maintained to illustrate the in-scope environment for PCI requirements. These diagrams are maintained and updated as needed upon significant changes to the environment.

### Scope Documentation and Ongoing Confirmation

GitLab must document and confirm PCI DSS scope at minimum every 6 months and after any significant changes to the in-scope environment. The scoping validation process must include:

- Identifying and documenting all data flows across payment stages (authorization, capture settlement, chargebacks, refunds) and acceptance channels (card-present, card-not-present, e-commerce), ensuring complete visibility of payment processing activities.
- Maintaining current data-flow diagrams in accordance with Requirement 1.2.4, reflecting any changes or updates to the payment infrastructure and data transmission paths.
- Conducting comprehensive identification of account data locations encompassing storage, processing, and transmission points, including: locations outside the defined CDE, applications processing CHD, system-to-system transmissions, and backup storage locations.
- Performing thorough inventory of all system components that are within the CDE, connected to the CDE, or capable of impacting CDE security to ensure complete coverage of the security perimeter.
- Documenting and validating all implemented segmentation controls and their effectiveness in isolating the CDE from other environments, including detailed justification for any out-of-scope designations.
- Maintaining an up-to-date inventory of all third-party connections that have access to the CDE, ensuring proper oversight of external access points.
- Verifying that the documented scope encompasses all identified elements: data flows, account data locations, system components, segmentation controls, and third-party connections with CDE access, ensuring no components are inadvertently excluded.

## Significant Changes

PCI requirements 6.5.2, 11.3.1.3, 11.4.2, 11.4.3, and 12.5.3 require GitLab to perform various tasks whenever significany change occur: 

- 6.5.2 and 12.5.3: Upon completion of a significant change, all applicable PCI DSS requirements are confirmed to be in place on all new or changed systems and networks, and documentation is updated as applicable.
- 11.3.1.3: Internal vulnerability scans are performed after any significant change as follows:
  - Vulnerabilities that are either high-risk or critical (according to the entity’s vulnerability risk rankings defined at Requirement 6.3.1) are resolved.
  - Rescans are conducted as needed. 
  - Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).
- 11.3.2.1: External vulnerability scans are performed after any significant change as follows:
  - Vulnerabilities that are scored 4.0 or higher by the CVSS are resolved.
  - Rescans are conducted as needed. 
  - Scans are performed by qualified personnel and organizational independence of the tester exists (not required to be a QSA or ASV).
- 11.4.2: Internal penetration testing is performed after any significant infrastructure or application upgrade or change.
- 11.4.3: External penetration testing is performed after any significant infrastructure or application upgrade or change.
- 12.5.2.1: PCI DSS scope is documented and confirmed by the entity at least once every 6 months and upon significant change to the in-scope environment. 

### Significant Change Definition and Procedures

 GitLab has analyzed the types of changes in its environment and has determined the following to be considered significant changes, specifically, changes that could effect the security of systems in-scope for PCI.
 
**Infrastructure Changes:**
 
- Changes to cloud provider services
- Changes to container orchestration platforms
- Implementation of new cloud services that interact with the CDE
- Rearchitecting application stack
 
**Access and Authentication Changes:** 
 
- Changes to cloud-based authentication services

**Data Flow Changes:**
 
- Changes in how cardholder data is processed or stored
- Modifications to data encryption methods
- New integrations that affect data flow
 
**Third-Party Services:**

- New IaaS providers
- Changes to existing cloud service provider agreements
- New third-party integrations that affect the CDE
 
#### Additional Procedures for Significant Changes

Significant Changes require additional procedures to ensure the continued security of the environment.

**For minor changes (like deploying additional instances):**

- Internal scans
- Configuration baseline checks
- No penetration test required

**For major changes (like changing cloud providers):**

- Full internal and external scans
- Complete penetration testing
- Configuration baseline verification
- Documentation of secure decommissioning
- Updated network diagrams and data flow documentation
- Review of PCI DSS Scope
