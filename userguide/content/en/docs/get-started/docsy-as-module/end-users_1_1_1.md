---
title: End-users
description: Operations documentation page for Zendesk end-users
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/end-users"
---

{{% alert title="Note" color="primary" %}}

This is an informational page for the Zendesk end-users. It may not reflect the way we actually manage Zendesk end-users.

If you are looking for information about maintaining end-users (creating, editing, etc.), please see [End-users workflow](../../workflows/zendesk/end-users)

{{% /alert %}}

## Creating an end-user

For information on creating an end-user in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408893585178-Adding-end-users#topic_tkx_mdu_kf).

## Editing an end-user

For information on editing an end-user in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408822763546-Managing-end-users#topic_ifn_tvn_x1b).

## Assuming the identify of an end-user

For information on assuming the identity of an end-user in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408894200474-Assuming-end-users).

## Suspending an end-user

For information on suspending an end-user in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408889293978-Suspending-a-user#topic_h4v_hsh_15b).

## Deleting an end-user

{{% alert title="Note" color="warning" %}}

US Government has a Redis sync for its end-users. If you must delete a user from the US Government Zendesk instance, the entry for them must also be removed from the Redis cache.

{{% /alert %}}

For information on deleting an end-user in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408821737498-Deleting-end-users#topic_dr4_r14_x1b).

## End-user settings

{{% alert title="Note" color="danger" %}}

This should be the single source of truth for the settings used. Never make changes outside of approved workflows.

Always be cautious of changes. Many of these can have significant downstream impacts.

{{% /alert %}}

### Zendesk Global

- Settings
  - Anyobdy can submit tickets
    - [x] Enabled
      - [x] Require authentication for request and uploads APIs.
      - [ ] Ask users to register
      - User registration message
        > Please fill out this form, and we'll send you a welcome email to verify your email address and log you in.
      - Allowlist
        - Will vary from instance to instance
      - Blocklist
        - Will vary from instance to instance
  - Account emails
    - User welcome email text
      > Welcome to GitLab Support. Please click the link below to create a password and login.
    - [ ] Alow send a welcome email when a new user is created by an agent or administrator
    - Email verification user text
      > We need to verify that you are the owner of this email address. Please follow the link below to verify.
  - Allow users to view and edit their profile data
    - [x] Enabled
  - Allow users to change their password
    - [x] Enabled
  - Validate user phone numbers
    - [ ] Enabled
  - Tags on users and organizations
    - [x] Enabled
  - Allow users to belong to multiple organizations
    - [ ] Enabled
- Satisfaction
  - Satisfaction ratings
    - [x] Allow customers to rate tickets
  - Configuration Options
    - [x] Ask a follow-up question after a bad rating
      - Reasons in use
        - The issue was not resolved
        - GitLab doesn't meet my needs
        - The answer wasn't delivered in a timely manner
        - The answer wasn't helpful
  - Embedded satisfaction score widget
    - [ ] Allow me to display public satisfaction statistics

### Zendesk US Government

- Settings
  - Anyobdy can submit tickets
    - [x] Enabled
      - [x] Require authentication for request and uploads APIs.
      - [ ] Ask users to register
      - User registration message
        > Please fill out this form, and we'll send you a welcome email to verify your email address and log you in.
      - Allowlist
        - Will vary from instance to instance
      - Blocklist
        - Will vary from instance to instance
  - Account emails
    - User welcome email text
      > Welcome to GitLab Federal Support. Please click the link below to create a password and sign-in.
    - [ ] Alow send a welcome email when a new user is created by an agent or administrator
    - Email verification user text
      > We need to verify that you are the owner of this email address. Please follow the link below to verify.
  - Allow users to view and edit their profile data
    - [x] Enabled
  - Allow users to change their password
    - [x] Enabled
  - Validate user phone numbers
    - [ ] Enabled
  - Tags on users and organizations
    - [x] Enabled
  - Allow users to belong to multiple organizations
    - [ ] Enabled
- Satisfaction
  - Satisfaction ratings
    - [x] Allow customers to rate tickets
  - Configuration Options
    - [x] Ask a follow-up question after a bad rating
      - Reasons in use
        - The issue was not resolved
        - GitLab doesn't meet my needs
        - The answer wasn't delivered in a timely manner
        - The answer wasn't helpful
  - Embedded satisfaction score widget
    - [ ] Allow me to display public satisfaction statistics

## End-user authentication

{{% alert title="Note" color="danger" %}}

This should be the single source of truth for the settings used (for both instances). Never make changes outside of approved workflows.

Always be cautious of changes. Many of these can have significant downstream impacts.

{{% /alert %}}

- Tickets, help center, and community
  - [x] Zendesk authentication
    - Password level: `Medium`
  - [x] External authentication
    - [x] Google
    - [x] Microsoft
    - [x] Facebook
    - [ ] SAML
    - [ ] JSON Web Token
  - How end users sign in
    - Redirect to SSO
- Messaging
  - Unused
