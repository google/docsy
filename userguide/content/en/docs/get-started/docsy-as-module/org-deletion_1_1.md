---
title: Organization Deletion
description: Operations documentation page for Zendesk organization deletion
canonical_path: "/handbook/security/customer-support-operations/docs/org-deletion"
---

{{% alert title="Note" color="danger" %}}

This is an informational page for Zendesk organization deletion. This should never be done manually and only as part of automations, unless specifically stated by another process.

{{% /alert %}}

This process relies heavily on the [ZD-SFDC sync](./zd-sfdc-sync) and custom deletion scripts to work. Please review the following projects so you can better understand the automation/scripting aspect of all this:

- [ZD-SFDC sync for Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/zendesk-salesforce-sync)
- [ZD-SFDC sync for Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/zendesk-salesforce-sync)
- [Organization Deletion for Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/deletion)
- [Organization Deletion for Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/deletion)

## Criteria for standard deletion

As per our [Data Retention policy](https://about.gitlab.com/privacy/#data-retention) and in accordance with various governing laws/regulations, we delete an organization 3 years after their last valid subscription has expired. So if an organization's last valid subscription expired 2021-12-18, then the date it would be eligible for deletion would be 2024-12-18. For organizations within Zendesk (both instances) that are found to meet this criteria, an organization field named Greatly Expired is marked as true. This results in the tag `greatly_expired` being added onto the organization. Through this, organizations that have met the criteria for deletion are marked in a way that is readily findable within Zendesk.

## Organizaton deletions

Once a week, on Friday, the Organization Deletion project for the corresponding Zendesk instance will take the list of organizations using the organization tag `to_be_deleted` (excluding those with the tag `do_not_delete`). With this list, the project will then completely delete the organization, which involves the following:

- Deleting all tickets under the organization
- Deleting all users under the organization
- Deleting the organization itself
- Updating any Redis objects that involve Zendesk organizations, users, and tickets
