---

title: AWS Marketplace license
description: "How to handle license purchased via AWS Marketplace"
category: GitLab Self-Managed licenses
---

## AWS Marketplace License Overview

AWS Marketplace offers basic GitLab instance with [Premium](https://aws.amazon.com/marketplace/pp/prodview-amk6tacbois2k) or [Ultimate](https://aws.amazon.com/marketplace/pp/prodview-g6ktjmpuc33zk) license at hourly or annual rate. The subscription is bundled with AWS EC type and managed on AWS side. No [Customers Portal](https://customers.gitlab.com/customers/sign_in) account is created for the customer purchased through AWS Marketplace. The instances created from these purchases use the following default 5 seats licenses:

Old licenses (only works on GitLab version older than v15.2)

- [Premium license](https://customers.gitlab.com/admin/license/118882)
- [Ultimate license](https://customers.gitlab.com/admin/license/71075)

New licenses

- [Premium license](https://customers.gitlab.com/admin/license/1099015)
- [Ultimate license](https://customers.gitlab.com/admin/license/1099017)

If the customer needs to go above the 5 users license seats, they would need to reach out to <aws-sales@gitlab.com> to get a private offer. Once the customer get a private offer with us, a Customers Portal and Zuora account is created for the customer and a new license is generated for the private offer.

---

## Workflows

### Handling customer request

1. Confirm that the customer is using AWS instance and the [exported license](https://docs.gitlab.com/ee/subscriptions/self_managed/#export-your-license-usage) matches one of the license above.
1. Confirm whether the customer still have access to the paid features, if not we should unblock them with a 30 days temporary license.
1. Ask the customer to reach out to <aws-sales@gitlab.com>.

To escalate this request, follow the [ecalate to Sales workflow](/handbook/support/license-and-renewals/workflows/working_with_sales#general-workflow) if there is already an organization for the customer in SFDC. If the SFDC organization does not exist or you have any questions regarding this the purchase through AWS Marketplace, please reach out to the Alliances Partner team in `#cloud-aws` slack channel.

- [Example case 1](https://gitlab.zendesk.com/agent/tickets/199133)
- [Example case 2](https://gitlab.zendesk.com/agent/tickets/324283)
