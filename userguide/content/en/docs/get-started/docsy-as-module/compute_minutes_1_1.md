---

title: Handling compute minutes
description: Adjusting compute minutes
category: GitLab.com subscriptions & purchases
---

## Adding additional compute minutes

From time to time, you may need to grant additional compute minutes to a namespace
*without* affecting the namespace's usual monthly quota.

<details>
<summary>Mechanizer</summary>

Use the <a href="/handbook/support/license-and-renewals/workflows/customersdot/mechanizer/#set-compute-minutes-to-namespace">Set compute minutes to namespace</a> workflow, which uses the Zendesk Mechanizer app.
</details>

<details>
<summary>Using GitLab.com ChatOps</summary>

View the <a href="/handbook/support/workflows/chatops/#setting-additional-minutes-quota-for-a-namespace">
Support ChatOps documentation</a> for more information.
</details>

### Process for authorising additional compute minutes for customers as an act of goodwill

- For an existing customer, Support is able to issue compute minutes as an act of goodwill in the following scenarios:
  - requests from Sales AE during procurement delays as [per the Channel Ops handbook](/handbook/sales/field-operations/channel-operations/partner-faq/#post-sale).
  - customer has encountered a product bug related to compute minutes
  - customer experienced an unplanned GitLab.com downtime.

- If the request falls outside of the examples above, any additional compute minutes should be paid for. If you are unsure, verify in
the [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) channel in Slack.

#### Requests from sales during procurement delays

- In the event that a customer is in the procurement process to purchase additional minutes, but are currently out of usable quota and blocked from working, their sales account manager may file an internal request for support team to add minutes
- the request should be for a reasonable amount to unblock the customer
- there must be an in-progress opportunity in SFDC

#### Customer impacted by product bug or unplanned downtime

- Confirm the bug or recent downtime event, referring to the [GitLab Status page](https://status.gitlab.com/) as necessary
- Document the issue or incident ID in the ticket
- Request from the customer a list of impacted projects, and:
  1. Post an internal note on the ticket denoting the number of compute minutes to be applied, using the following formula:
  - `Total compute minutes = Their current compute minutes + (2 x sum of compute minutes for all failed jobs)`
  1. Request Manager Approval to `Restore Compute Minutes as an act of goodwill` to the [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) channel in Slack
  1. MANAGERS: Acknowledge in Slack and post approval via internal note in the ticket.
  1. After Approval is provided in ticket, restore the compute minutes using the [Zendesk Mechanizer app: Set compute minutes to namespace workflow](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer#set-compute-minutes-to-namespace)
- This will provide recovery of the compute minutes lost, with an additional amount in recognition of the inconvenience caused to the customer.

- ([Example Ticket 1](https://gitlab.zendesk.com/agent/tickets/294974)
| [Example Ticket 2](https://gitlab.zendesk.com/agent/tickets/391109))

### Process for authorizing additional compute minutes for GitLab Trial customers

- All GitLab trial plans default to 400 minutes.  If a trial user reaches out to the support team requesting additional minutes, please refer them to their sales representative for further discussion.

- GitLab Sales team members may open an internal request for `Change Existing Trial Plan` to request quota increases. These requests are limited to the standard allotments of compute minutes for paid plans: 10,000 minutes for a Premium trial, and 50,000 minutes for an Ultimate trial.
  - Note: extra minutes are not automatically removed when the trial ends. The customer can use them until they are all used up.

- In any other cases, additional compute minutes or storage should be paid for. If you have any questions, ask in the `#support_leadership` Slack channel.

### Purchased compute minutes are not associated with customer's group

To transfer compute minutes from a user's personal namespace to a group namespace, use the [Force Association option in the ZD Mechanizer App]({{< ref "mechanizer#force-associate" >}}).

**If the Mechanizer does not work**, you will need to request a refund for the customer.  In this case:

- Confirm that the compute minutes *are* associated with the user's personal namespace.
- Verify that the compute minutes associated with the personal namespace have not been consumed. You can check this under Usage Quotas in the users personal profile.  Note: If compute minutes are assigned to a personal namespace with no project or pipeline, this page will show `0/Not supported minutes has been consumed.`
  - **If they have not been consumed**, inform the customer that they've selected their personal namespace instead of their group when they purchased the compute minutes and pass the ticket to the [billing team](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#refunds) to process the refund. The customer can then repurchase the compute minutes for their group.
  - **If they have been consumed**, the customer is not eligible for a refund - inform the customer that they are already using the purchased compute minutes, and redirect the customer to purchase a new compute minutes pack corresponding to their group.

### GitLab.com group is not visible during the purchase

- While purchasing the compute minutes, the billing page shows a drop-down menu to choose the namespace to be associated with the compute minutes. If the user is unable to view or choose the required group during the purchase, it is probable that the GitLab user is not an owner of that group.  Reply to the user stating that they need to either get their permissions updated to owner to be able to choose the group on the billing page, or request an existing owner of the group to purchase the compute minutes using their own customer portal account.

## Enable compute minutes

### Manual credit card validation for community contributors

Qualifying requirements:

1. Requester has [filed an internal request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) or ZenDesk ticket to track request.
1. Request is approved or created by a [Community Relations](/handbook/marketing/developer-relations/#-meet-the-team) or [Contributor Success](/handbook/marketing/developer-relations/contributor-success/#team-members) team member.
1. GitLab.com admin account

Once verified, use the following steps:

1. Edit the user account `https://gitlab.com/admin/users/USERNAME/edit`.
1. Select the `Validate user account` checkbox.
1. Add an [Admin note]({{< ref "admin_note" >}}).
1. `Save changes`.

### Enabling compute minutes for sales assisted trials

The following process will remove the restrictions for using compute minutes for groups who are part of a sales assisted trial.

### Steps

#### Using Mechanizer ZD App

Use the [Enable compute minutes via ZD Mechanizer app]({{< ref "mechanizer#enable-units-of-compute" >}}).

#### Using customerDot Console

From the customerDot Console run the following function:

##### For sales assisted Trials

```ruby
irb(main) enable_ci_minutes_trial('namespace')

=> "{\"status\":\"success\",\"message\":\"namespace members are now enabled to run compute minutes\"}"
```
