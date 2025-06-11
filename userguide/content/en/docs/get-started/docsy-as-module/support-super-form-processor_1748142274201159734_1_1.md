---
title: Support Super Form Processor
description: Operations documentation page for the Support Super Form Processor
canonical_path: "/handbook/security/customer-support-operations/docs/gitlab/support-super-form-processor"
---

<sup>*Introduced via [support-team-meta#5654](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5654)*</sup>

{{< pageinfo color=warning >}}

This is an information page for the Support Super form.

If you are looking for information about managing it, please see [workflows](/handbook/security/customer-support-operations/workflows).

{{< /pageinfo >}}

While there are many functions here, most are involving creating artifacts for other teams to work (such as issues or tickets). This page will focus on the ones that directly (or indirectly) involve Customer Support Operations.

### Set the collaboration project ID for an organization

This automatically will set the values on the corresponding organization to specify a collaboration project ID.

### Set an Assigned Support Engineer for an organization

This automatically will set the values on the corresponding organization to ensure auto assingment is done for tickets filed by said organization (if they have entitled to an ASE).

### Enable US Government Support exception for an Account

This is for enabling US Government Support on a SFDC account that would not normally be entitled to it. Please note the account must have already purchased the required US Government SKU.

It will create a request issue.

### Disable US Government Support exception for an Account

This is for disabling US Government Support on a SFDC account that currently has an exception on it.

It will create a request issue.

### Create a Zendesk macro

This will handle macro creation, either via automation or via a request issue. For "simple" macros, it fully creates the macro automatically. For "complex" ones, it will create a request issue.

### Edit a Zendesk macro

This will handle macro edit requests by creating a request issue.

### Create a Zendesk article

This will automatically handle the creation of Zendesk articles (for the corresponding instances it needed for).

### Check namespace availability

This is for checking the availability of a namespace. In the event the namespace is in use, this request will also check into the *potential* of the namespace being releasable. Please note this is fully automated. The request will create an issue that has the results of the check posted.
