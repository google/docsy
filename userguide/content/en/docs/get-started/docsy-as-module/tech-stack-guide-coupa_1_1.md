---
title: "Coupa Tech Stack Guide"
description: "Reference for how Coupa is implemented."
---

> **Note:** Refer to the **[Tech Stack Index](/handbook/business-technology/tech-stack/)** to browse Apps and **[Tech Stack Applications](/handbook/business-technology/tech-stack-applications/)** to manage Apps.

{{% tech-stack "Coupa" %}}

### Implementation

Coupa is a cloud-based purchasing and payment platform. It has an easy-to-use interface that improved the way suppliers connect with GitLab. All new purchase orders, invoices and communications are managed through the Coupa Supplier Portal.

Coupa was implemented in 2 phases. In scope for phase 1 was the implementation of a Supplier Information Management (SIM) system and Coupa Pay (Digital Invoices) for all US and Netherlands payments. Phase 2 consisted on the implementation of Coupa Pay Virtual Card (for ten GitLab entities) and the Supplier Information Management (SIM) system and Coupa Pay for the remaining entities (GmbH, PTY LTD, LTD, Canada, Japan, Ireland, Korea, France and Singapore) which fully replaced Tipalti.

#### Relevant Links

- [Coupa End Users Guide](/handbook/business-technology/enterprise-applications/guides/coupa-guide)
- [Coupa Virtual Card Guide](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/)
- [Coupa FAQ]({{< ref "coupa-faq" >}})

### System Diagrams

### Integrations

#### Coupa to NetSuite

Two-way sync from NetSuite to Coupa.
