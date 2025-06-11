---

title: Creating a license key
description: "How to create a GitLab license key"
category: GitLab Self-Managed licenses
---


## Overview

You will frequently need to generate a new license key due to either user error or system error.

Self-managed licenses are managed in [CustomersDot](https://customers.gitlab.com/admin/license).
Access to the application is managed through Okta, in order to request access please open an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)
and refer that your role entitles you to access with
[this link](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_customer_support/role_support_engineer.md).

### License types

An overview of the different licenses types can be seen in this [handbook page](https://internal.gitlab.com/handbook/product/fulfillment/definitions/#licensing-terms) (internal only).

The type of the License object associated to a subscription version can be identified by using the info below:

| License type | Turn On Cloud Licensing |
| ------ | ------ |
| Cloud License | 'Yes' |
| Offline License | 'Offline' |
| Legacy License | 'No' or null |

### Duplicate a license

To re-issue a license:

1. Log in to the [CustomerDot](https://customers.gitlab.com/admin/license).
1. Identify the license by searching by customer email or company name.
1. Click `Duplicate license` button on the right (looks like the copy symbol).
   **Note:** Only Legacy Licenses can be duplicated as of today.
1. Select the correct license type (see [License Type Overview](#license-types) for more info).
1. Modify the values you need. Be careful not to change the `Customer` field.
   **Note:** Changing the `Customer` causes the inputs for name, email and company to be overriden on creation with the selected customer's information. This is a bug that will be addressed in <https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3566>.
1. In the `Notes` field, describe why you're issuing this license and add a link
   to the Zendesk ticket or GitLab issue for the request if applicable.
      - If working on a GitLab issue, add the label `Manually Generate Trial License` (for trials) or `Manually Generate License`.
1. Click `Save`.

The license should be emailed out immediately. Please note that a license should always be sent to the end user.
Do not email the license to a GitLab team member or a reseller.
**Note:** If you want to send the license to a different email address use [this handbook page](/handbook/support/license-and-renewals/workflows/self-managed/sending_license_to_different_email) instead.

When an existing license isn't available to duplicate, use the [create new license section](#create-a-new-license).

### Create a new license

To create a new license, click `Add new License` then follow the process listed below for creating a [Legacy License](#create-a-legacy-license) or [Offline Cloud License](#create-an-offline-cloud-license).

**Note:**

- Depending on the selected license type, different fields are required. Please see the required fields section
  for each license type for more information.
- When filling in the Zuora subscription ID (depending on the type's requirement), the subscription's existence is checked against Zuora and will fail if it's not found.
- When the Zuora subscription ID is filled, the subscription name will be automatically set on license creation.

#### Create a Legacy License

1. Select `Legacy License` in the `License type` drop down.
1. Fill in the Zuora subscription ID.
   **Note:** These fields are not required for Legacy Licenses but should be filled out by Support.
1. Fill in other fields.
1. In the `Notes` field, describe why you're issuing this license and add a link
   to the Zendesk ticket or GitLab issue for the request if applicable.
      - If working on a GitLab issue, add the label `Manually Generate Trial License` (for trials) or `Manually Generate License`.
1. Click `Save`.

##### Required fields

Currently the following fields are required for a Legacy License:

- `License type`
- `Name`
- `Company`
- `Email`
- `Users count`
- `Plan code`
- `Starts at`
- `Expires at`

Required to be filled by Support:

- `Customer`
- `Zuora subscription ID`
- `Notes`

#### Create an Offline Cloud License

When creating an Offline License, the following has to be present beforehand:

- The filled in Zuora subscription has to be cloud license compatible (the `Turn on seat reconciliation` field is present).
- The filled in Zuora subscription has to be an Offline Cloud License or a disabled Cloud License (`Turn On Cloud Licensing` set to `Offline` or `No`).
- An activation code has to exist for the subscription (usually created via a callback to CustomersDot when the Zuora subscription is created).

1. Select `Offline Cloud` in the `License type` drop down.
1. Select the customer in the `Customer` field.
   **Note:** This field is required for Offline Cloud Licenses.
1. Fill in the Zuora subscription ID.
   **Note:** These fields are required for Offline Cloud Licenses.
1. Fill in other fields.
1. In the `Notes` field, describe why you're issuing this license and add a link
   to the Zendesk ticket or GitLab issue for the request if applicable.
      - If working on a GitLab issue, add the label `Manually Generate Trial License` (for trials) or `Manually Generate License`.
1. Click `Save`.

##### Required fields

Currently the following fields are required for an Offline Cloud License:

- `License type`
- `Customer`
- `Name`
- `Company`
- `Email`
- `Zuora subscription ID`
- `Users count`
- `Plan code`
- `Starts at`
- `Expires at`

Required to be filled by Support:

- `Notes`

#### Create an Online Cloud License

With [Strict Cloud Licensing](https://gitlab.com/groups/gitlab-org/-/epics/7088), Online Cloud Subscriptions only
send out an activation code. A license will no longer be supplied. Hence, license creation for this type is
not supported.
