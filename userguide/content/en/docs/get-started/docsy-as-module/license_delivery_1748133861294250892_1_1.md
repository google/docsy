---
title: Delivery of license files
description: "License generation and delivery"
category: GitLab Self-Managed licenses
---

## Overview

The support team is responsible for generating licenses when the automated systems are unable to do so or an error is made. This is done via [CustomerDot](https://customers.gitlab.com/admin) and the `Licenses` section.

Generating a license may originate from an [internal request](/handbook/support/license-and-renewals/workflows/working_internal_requests) or may be a required action to help move a support ticket forward.

In both cases, CustomersDot will automatically email the license to the customer directly after creation. Unless the circumstances require, we should not send the licenses to any GitLab employee. Exceptions may include air-gapped installs or other situations where the customer cannot receive the license via the email.

Note that a license should always be generated with the sold-to contact's name and email address. A license should not be generated with reseller or GitLab team member details if the license is for a customer.

### Where does a license get sent to?

There is often confusion about the email address that the license will be delivered to and how to ensure the correct email address receives the license. With the work around [aligning CustomersDot BillingAccounts and Users to Zuora objects](https://gitlab.com/groups/gitlab-org/-/epics/8950), this became much simpler:

The license will be sent to the sold-to contact in Zuora with all sales ([code reference](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/models/license.rb#L98)). The email for the sold-to contact can be changed via a [Zuora Sold to contact change](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#zuora-contact-change).

#### Caveats

1. Resending an activation code via the CustomersDot Admin uses the email address of the sold-to contact in Zuora.
1. Resending a legacy license or offline cloud license via the CustomersDot Admin uses the email set in the license **regardless of the sold-to contact in Zuora**.
1. Forwarding an activation code, a legacy license or offline cloud license via the CustomersDot Admin uses the email entered in the `Destination email address` field.

### Check whether the license has been delivered

Email delivery is logged for 30 days in MailGun. If the license was generated more than 30 days ago, we will not know whether the license was delivered or not. To see email license delivery log:

1. Follow the instruction in [checking mailgun](/handbook/support/workflows/confirmation_emails#checking-mailgun)
1. Use `customers.gitlab.com` as `Domain` in **Step 4** in the check mailgun instruction
1. Update the date range to cover the license generation date
