---
title: "Product Security Risk Register"
aliases:
  - "/handbook/security/product-security/risk-register/"
description: "The Product Security Risk Register (PSRR) is driven by and follows the StORM process from our Security Risk Team."
---

The Product Security Risk Register (PSRR) is driven by and follows the [StORM process](/handbook/security/security-assurance/security-risk/storm-program/) from our [Security Risk Team](/handbook/security/security-assurance/security-risk/).

#### Criteria

The PSRR will only record weaknesses, inadequate design choices, or functional logic that exposes GitLab, the product, to compromises and leaks. The goal is to track risks that have important and cascading consequences for GitLab, the product, as a whole.

Specific vulnerabilities or components based vulnerabilities (equivalent to what would be tracked as a single CVE) should not be part of the PSRR.

#### Objectives

- Serves as a centralized tool for identifying, evaluating, mitigating, and monitoring systemic risks that can impact GitLab's operations and reputation, but that doesn't meet the criteria to be tracked by the Security Risk team. Specific vulnerabilities or components based vulnerabilities **should not** be part of the PSRR.
- Identify clear DRIs to help in reducing and mitigating the risk. They will ensure that all stakeholders are aware of potential risks and are working collaboratively to manage them. The DRI is responsible for updating the risk register issues to reflect the progress made in reducing the risks.

Product Security teams are responsible for communicating the risk and coordinating mitigation with the risk's stakeholders, such as Engineering and Product. Due to their systemic impact, risks tracked in the PSRR are cross-functional and thus risk reduction will require cross-functional collaboration.

You can find this list in the [StORM repository](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Department%3A%3AProduct%20Security&first_page_size=20) (internal), or [consult the dashboard here](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/boards/7816349?label_name[]=Department%3A%3AProduct%20Security) (internal).

To create a new issue follow this [link](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/new?issuable_template=ProdSec%20StORM%20Risk%20Template) (internal). Make sure to reference the [guide to defining well-articulated risks](/handbook/security/product-security/security-platforms-architecture/risk-register/well-articulated-prodsec-risks).

#### What risks should be in the PSRR?

- Only weaknesses, inadequate design choices, or functional logic that exposes GitLab-produced technologies to cyber risks.

#### Review

Risks tracked in our risk register are reviewed on a monthly basis by Product Security leadership.
