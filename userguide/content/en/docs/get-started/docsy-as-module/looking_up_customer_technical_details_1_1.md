---
title: Looking up customer technical details
description: "How to look up customer technical details within Zendesk and the Architecture integration, or the Account Management Group"
category: Handling tickets
subcategory: Customer Info
---

While troubleshooting customer issues in tickets, you may find yourself needing
additional context -- a `gitlab.rb` file, an architectural diagram, or anything
which will help you move forward with your investigation.

There are a few places where you can find this information.

### Within Zendesk

#### Internal comment with Organization Notes

When a new ticket comes in and there is an organization attach to this ticket,
there will be a Zendesk automation trigger
([Ticket::Internal Comment::Organization Info](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/blob/master/triggers/active/Automation%20Stage/Post%20internal%20note%20about%20Organization%20info.yaml))
that puts an internal comment to the ticket. This internal comment will include
[organization notes]({{ ref "/handbook/support/readiness/operations/docs/zendesk/organizations" >}})
if it exists. These organization notes are saved within Zendesk, visible to
agents only, not to end-users.

During your work on the ticket, if you have additional information worth noting
about the organization, you can add them by following the
[editing organizations](/handbook/support/readiness/operations/docs/zendesk/organizations#editing-organization-fields-in-zendesk)
procedure.

You may also consider updating the [Customer Collaboration Projects](/handbook/customer-success/csm/customer-collaboration-project/)
[within GitLab.com](#within-gitlabcom) describe below.

#### Browse previous tickets

You can browse other tickets submitted by people from the customer's organization
for relevant context! Often forgotten in the heat of the moment.

Just click on the organization name at the top of the ticket to view all other
tickets associated with that organization.

Alternatively, you can do a search for `organization:<$ORG_NAME> search query`,
which may get you the information you want. Try `"gitlab.rb"` or `gitlabsos`
for your search!

In both cases, you can click on `Requested` or `Updated` to sort by most recent
so that you'll be sure to have fresher information.

#### Architecture diagram and [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/)

The Architecture Diagrams app automatically checks for the presence of the
relevant diagram if the customer has a [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/) URL entered in
Salesforce.

To access the app:

1. Click on "Apps" in the top right of the Zendesk UI

   ![Zendesk Apps button](/handbook/support/workflows/assets/zendesk-apps-button.png)

1. Look for the Architecture Diagrams app and expand it if closed

   ![Zendesk Apps button](/handbook/support/workflows/assets/zendesk-apps-arch-diagram.png)

### Within GitLab.com

One other place to check for customer technical details is the
[Account Management group](https://gitlab.com/gitlab-com/account-management) on
GitLab.com. Just search by customer name and in the parent group and you should
find the [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/). Most, but not all, premium and ultimate customers
should have one present.

Please note that these projects are most likely shared with the end customers as
well so updates on these projects are visible to the end-users, unlike the
[organization notes](#internal-comment-with-organization-notes) within Zendesk
mentioned above.
