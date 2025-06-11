---
title: Organization Deletion
description: Support Operations policies page for Zendesk organization deletion
canonical_path: "/handbook/support/readiness/operations/docs/policies/org_deletion"
---

This process relies heavily on the
[ZD-SFDC sync](/handbook/support/readiness/operations/docs/zendesk/zendesk_salesforce_sync)
and custom deletion scripts to work. Please review the following projects so you
can better understand the automation/scripting aspect of all this:

- [ZD-SFDC sync for Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/zendesk-salesforce-sync)
- [ZD-SFDC sync for Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/zendesk-salesforce-sync)
- [Organization Deletion for Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/deletion)
- [Organization Deletion for Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/deletion)

## Criteria for deletion

As per our
[Data Retention policy](https://about.gitlab.com/privacy/#data-retention) and
in accordance with various governing laws/regulations, we delete an organization
3 years after their last valid subscription has expired. So if an organization's
last valid subscription expired 2021-12-18, then the date it would be eligible
for deletion would be 2024-12-18. For organizations within Zendesk (both
instances) that are found to meet this criteria, an organization field named
Greatly Expired is marked as true. This results in the tag `greatly_expired`
being added onto the organization. Through this, organizations that have met the
criteria for deletion are marked in a way that is readily findable within
Zendesk.

## Reporting on impending deletions

Once a week, on Monday, the Organization Deletion project for the corresponding
Zendesk instance will make a Slack post within the channel
[#support_ops-audit-events](https://gitlab.enterprise.slack.com/archives/C04A6E1KB89)
(private channel) with information about organizations slated for deletion in
that week's upcoming Friday (if there are any to report on). The script
reporting on this will omit reporting organizations have tickets within the last
120 days or have an open SFDC opportunities.

To prevent any organizations from being added to the search criteria in the time
when this report is run and when the deletions occur, an organization tag of
`to_be_deleted` is added.

## Reviewing impending deletions

Once a report has been made of impending deletions, it is our job to reivew the
list of organizations slated for deletion. It is here we can ensure we are only
deleting organizations actually valid for it (and ensure no tooling mistakes).

When reviewing the list, be sure to check all the below areas. If everything
looks to be accurate and correct, no action is needed. If you see **anything**
that seems amiss, add the tag `do_not_delete` to the organization to ensure said
organization is not deleted. You should also remove the tag `to_be_deleted` to
clean up the organization.

- [ ] [No tickets created within 120 days](#no-tickets-created-within-120-days)
- [ ] [No open opportunities in SFDC](#no-open-opportunities-in-sfdc)
- [ ] [No recent chatter indicating renewal](#no-recent-chatter-indicating-renewal)

As you review a list item, add the :eyes: Slack emoji on the list item. This
indicates you are reviewing the item. Once you are done reviewing the item, add
the :white_check_mark: Slack emoji (and remove the :eyes: Slack emoji) on the
item.

If for any reason you cannot perform the review (such as not having access to
the organization in Salesforce), do the following:

1. Remove the :eyes: emoji from the list item
1. Make a thread on the list item that:
   - Ping @jcolyer and @lyle
   - Explains why you could not perform the review

One of the people pinged will manually review the item you made the thread on.

### No tickets created within 120 days

Check the organization in question for any tickets that have been created within
the last 120 days. If there are any, this organization should not be deleted.

### No open opportunities in SFDC

Check the SFDC account tied to the organization for any open opportunities. If
you see any, this organization should not be deleted.

### No recent chatter indicating renewal

Check the chatter log on the SFDC account tied to the organization for any
indicators that a renewal is upcoming. If you see any, this organization should
not be deleted.

## Organizaton deletions

Once a week, on Friday, the Organization Deletion project for the corresponding
Zendesk instance will take the list of organizations using the organization tag
`to_be_deleted` (excluding those with the tag `do_not_delete`). With this list,
the project will then completely delete the organization, which involves the
following:

- Deleting all tickets under the organization
- Deleting all users under the organization
- Deleting the organization itself
- Updating any Redis objects that involve Zendesk organizations, users, and
  tickets
