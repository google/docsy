---

title: How to Handle Product Offering Migration Tickets
description: "How to handle product offering migration tickets"
category: Handling tickets
---



## Overview

You may encounter a support ticket from a paid customer who is migrating
between offerings (SM and SaaS), and who at the time of the ticket has a paid
license to only one of them. For example, they're using a Self-managed instance
and want to migrate to GitLab.com, and they only have an active Self-managed
license (*i.e.* they have no paid SaaS subscription).

If the problem statement of the ticket involves the unpaid offering, that
raises some issues:

- Do we support them, or is this out of scope?
- If we support them, then:
  - How do we configure the ticket so that it will be visible to SEs with the
    right focus area?
  - What level of support should they get?
  - How do we configure the ticket to have the right SLA?
  - How do we inform SEs that a decision has been made to support the customer?

**In this type of situation, we do want to support the customer** even though
their contract does not require us to do so. Think of it this way: they are a
paid customer and they're going to continue to be a paid customer, so let's
give them a great customer experience rather than let technicalities get in the
way.

## How to make this work

1. Contact the customer to gather information
   1. First, explain that although they are only entitled to support on their
      current offering, we intend to support them anyway.
   1. Ask them to confirm what support level they intend to purchase on the new
      offering.
   1. Ask them the target date for completing the migration.
1. Open a Support Ops issue in
   [this project](https://gitlab.com/gitlab-com/support/support-ops/zendesk-organizations):
   1. Specify that the request is to support a product offering migration.
   1. Specify the new support level to be applied to the organization.
   1. Specify the migration target date.
1. From here, Support Ops will:
   1. Add the support level tag to the org. There will then be two, so that the
      customer can get help on both their current and future offerings.
   1. Add text to the org notes explaining that the customer is migrating
      between offerings and that we have approved `offering` level support until
      `target date`.
1. Once Support Ops has completed their work, remove from the ticket the support
   level tag that does **not** belong. If you're not sure which one(s) to
   remove, ping in `#support_operations` for help.

**NOTE:** If you assign yourself to a new ticket and find an internal note
indicating that it involves a product offering migration, please take
the final step described above: remove the support level tag that doesn't
align with the ticket's problem statement.

For details on the Support Ops side of the process, please see
[Setting Up an Organization for an Offering Migration](/handbook/support/gratis-support/#a-current-customer-migrating-from-one-product-to-another).
