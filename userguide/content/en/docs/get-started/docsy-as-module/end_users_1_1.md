---
title: End-users
description: Support Operations documentation page for Zendesk end-users
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/end_users"
---

## Zendesk Global customer settings

- Settings
  - Anybody can submit tickets
    - Enabled
    - Require CAPTCHA
    - Whitelist:
      - <gitlab@gitlab.com>
      - <no-reply@hackerone.com>
      - <noreply@quoramail.com>
      - <noreply@quora.com>
      - google.com
      - <portal@axur.com>
    - User registration message:
      > Please fill out this form, and we'll send you a welcome email to verify
      > your email address and log you in.

  - Account emails
    - User welcome email text
      > Welcome to GitLab Support. Please click the link below to create a
      > password and login.

    - Email verification email text
      > We need to verify that you are the owner of this email address. Please
      > follow the link below to verify.

  - Allow users to view and edit their profile data
    - Enabled
  - Allow users to change their password
    - Enabled
  - Tags on users and organizations
    - Enabled
- Satisfaction
  - Satisfaction ratings
    - Allow customers to rate tickets
  - Configuration Options
    - Ask a follow-up question after a bad rating
    - Reasons in use
      - The issue was not resolved
      - GitLab doesn't meet my needs
      - The answer wasn't delivered in a timely manner
      - The answer wasn't helpful
    - Reasons not in use
      - The issue took too long to resolve
      - The agent's knowledge was unsatisfactory
      - The agent's attitude is unsatisfactory

## Zendesk US Federal customer settings

- Settings
  - Anybody can submit tickets
    - Enabled
    - Require CAPTCHA
    - User registration message:
      > Please fill out this form, and we'll send you a welcome email to verify
      > your email address and log you in.

  - Account emails
    - User welcome email text
      > Welcome to GitLab Federal Support. Please click the link below to
      > create a password and sign-in.

    - Email verification email text
      > We need to verify that you are the owner of this email address. Please
      > follow the link below to verify.

  - Allow users to view and edit their profile data
    - Enabled
  - Allow users to change their password
    - Enabled
  - Tags on users and organizations
    - Enabled
- Satisfaction
  - Satisfaction ratings
    - Allow customers to rate tickets
  - Configuration Options
    - Ask a follow-up question after a bad rating
    - Reasons in use
      - The issue was not resolved
      - GitLab doesn't meet my needs
      - The answer wasn't delivered in a timely manner
      - The answer wasn't helpful
    - Reasons not in use
      - The issue took too long to resolve
      - The agent's knowledge was unsatisfactory
      - The agent's attitude is unsatisfactory

## Deleting end-users

This only occurs in cases where an end-user wants their support portal account
removed. It can stem either from a ticket or an account deletion request.

Before you can proceed, you need to  verify if the user is eligible for
deletion.

The user is **not** eligible for deletion if they are associated to an
organization. The data therein is owned by the organization and would not be
able to be purged until the organization itself, is. If this is the case, update
the ticket or issue letting the requester know their support portal data cannot
be removed at this time due to our data retention policy.

If they are eligible, proceed to the follow the below processes.

### Requested via ticket

If it is stemming from a ticket, ensure the user means for their Zendesk account
to be deleted by using the `Support::Support-ops::Confirm Deletion` macro.

After they have verified it, do the following:

- Reply to the ticket using macro `Support::Support-Ops::Deletion Forthcoming`
- Delete the support account of the end-user

If the user who is requesting to have their Zendesk account deleted has any
tickets that are not yet closed (for example, the ticket they've made the
deletion request in), you will need to close them via the API before you
will be able to delete their user profile. For further guidance on how
to do this, please see our API documentation on
[how to change the status of a ticket to closed](/handbook/support/readiness/operations/docs/zendesk/api/#change-status-to-closed).

### Requested via account deletion issue

If it is requested via an account deletion issue, locate the user in Zendesk
(check all instances), and then delete them from Zendesk.

## Merging end-users

From time to time, end-users will open multiple accounts for their various
email addresses. This can lead to a lot of confusion, so it is often best to
merge them into one another. To do this, open all the user pages in question.
Then locate the User ID of the primary one (it can be found in the URL). Using
this, go to the various user account pages and click the arrow next to the "New
Ticket" button. In the drop-down, select "Merge into another user". A modal will
then appear, asking for the User ID to merge the user into. Input the User ID
of the primary account, then click the "Merge" button. It will then show you
what it will do. Once you are sure this is correct, click the "Confirm and
merge" button.

![Merging End-Users](/handbook/support/readiness/operations/images/merging_end_users.gif)

## Allowlists and Blocklists

Zendesk has a built in allow/deny system via the
[allowlist and blocklist](https://support.zendesk.com/hc/en-us/articles/203663286-Using-the-whitelist-and-blacklist-to-control-access-to-your-Zendesk).
We often use this to help mitigate attacks on Zendesk (such as spam). This is
accessed via `Admin` > `Customers` > `Settings`. Quick links for these would
be:

- [Zendesk Global](https://gitlab.zendesk.com/agent/admin/customers)
- [Zendesk US Federal](https://gitlab-federal-support.zendesk.com/agent/admin/customers)

### Formatting conventions

There are two types of items you can put in an allowlist or blocklist:

- Specific user email addresses
- Domains

For users, simply put the full email address. For domains, simply put the
domain itself (do not put the `@` sign, as this will cause it to not work
properly).

### Allowlist

This is what determines who is automatically allowed to submit tickets. By
default, we tend to allow all users and domains to submit tickets. This is most
useful in cases where users/domains get marked as spam when submitting tickets.
In such cases, it helps to put the user/domain on the allowlist to prevent that
from occurring.

The separator for the allowlist is whitespace. To have it apply to multiple,
simple have whitespace between them:

`gitlab.com reports@example.com`

### Blocklist

When it comes to use the blocklist, there are 3 different actions you can take:

- Auto-suppression
- Auto-rejection
- Auto-suspension

The separator for the blocklist is whitespace. To have it apply to multiple,
simple have whitespace between them:

`example.com reject:bad_user@example.com suspend:i_am_spammer@example.com`

#### Auto-suppression

This ability automatically suppresses tickets from specific users or domains.
The caveat here being they have to be registered users, so often this only
works in cases of simple attacks. The format for doing this is simple:

- For domains:
  `example.com`
- For users:
  `im_not_real@example.com`

#### Auto-rejection

This ability automatically rejects tickets from specific users or domains. This
prevents their creation entirely. You can automatically reject a ticket using
the following format in the blocklist:

- For domains:
  `reject:example.com`
- For users:
  `reject:bad_user@example.com`

#### Auto-suspension

This ability automatically suspends users when they submit tickets. We rarely
use this function, as normally [auto-suppression](#auto-suppression) or
[auto-rejection](#auto-rejection) will accomplish our goals. But should the
case arise, you can automatically suspend a user using the following format in
the blocklist:

- For domains:
  `suspend:example.com`
- For users:
  `suspend:i_am_spammer@example.com`

#### List review

From time to time, we might need to review the list to make sure it is still
working for us. This is especially true in cases of the blocklist. We use this
often to help mitigate attacks. But legitimate users can get caught in this.
Because of this, we should review the list rules from time to time to make sure
they are still valid and required.
