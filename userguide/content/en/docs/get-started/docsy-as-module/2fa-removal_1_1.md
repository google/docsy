---
title: 2FA Removal
category: GitLab.com
subcategory: Accounts
description: "Workflow detailing how we process 2FA removal requests"
---

## Overview

This workflow focuses on disabling [Two-factor Authentication](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) (2FA) on a GitLab.com account. The general principles for authenticating a request are covered in our [account verification workflow](account_verification.html).

2FA removal and other account actions can only be completed if the [workflow](#workflows) below is successful.

## Related topics

### GitLab Team Members

If the user is a GitLab team member, have them [contact IT Ops](/handbook/it/end-user-services/_index.md).

## 2FA removal within GitLab

### Self Service 2FA removal

In most cases, users can disable 2FA themselves and regain access to their accounts using [one of the documented methods](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html#recovery-options).

> As of August 2020, [Support will not intervene for free users](https://about.gitlab.com/blog/2020/08/04/gitlab-support-no-longer-processing-mfa-resets-for-free-users/) if self-service methods do not work for them.

### Enterprise Owner 2FA removal for Enterprise users

A top-level group owner can [disable 2FA for any enterprise user](https://docs.gitlab.com/ee/user/enterprise_user/#disable-two-factor-authentication) who is also a group member. With the [rollout of the `enterprise_users_automatic_claim` feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/421407), users are automatically marked as an enterprise user if [a group has a verified domain](https://docs.gitlab.com/ee/user/enterprise_user/#verified-domains-for-groups), and the user's *primary* email matches a verified domain.

## Definitions

- **Account holder**: The person who uses the account day-to-day. The individual themselves may or may not be the account owner.
- **Enterprise owner**: One or more people who represent the business entity who purchased a paid plan with GitLab, hold Owner permissions in that paid namespace, and have a [verified domain](https://docs.gitlab.com/ee/user/enterprise_user/#verified-domains-for-groups).

## Conditions for SaaS users

A SaaS user must meet **one of** the following conditions to be eligible for a 2FA reset.

1. The user occupies a seat in a paid group on GitLab.com, or a top-level group owner intends to add the user to the paid group.
1. The user is an [Enterprise User](../workflows/gitlab-com_overview/#enterprise-users).
1. The user is the primary billing contact on a current invoice for a SaaS purchase.
1. A GitLab team member (account managers, CSMs, or others) collaborates with the holder of this account in an account management project.
1. The user account is required for SSO access to Customers Portal to manage a paid subscription - see: [Conditions for 2FA Reset when account is used to access Customers Portal](#conditions-when-account-is-used-to-access-customers-portal).

More succinctly: they're paid, they use the account to pay, or we use the account to communicate with them.

In many cases, a top-level group owner may submit a ticket on behalf of the user. See the [Account verification matrix](../workflows/account_verification.md#account-verification-matrix) for more information.

### Account verification matrix

Find the Account verification matrix on the [Account Owner Verification handbook page](../workflows/account_verification.md#account-verification-matrix).

### Conditions when account is used to access Customers Portal

[Customers Portal](https://customers.gitlab.com) requires all customers to access through a [Linked GitLab Account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#link-a-gitlabcom-account).

The user is eligible and 2FA can be reset when **one** of following conditions are met:

1. The request is made by the primary billing contact on the latest invoice for a GitLab subscription.
1. The GitLab account is linked to the customers portal account for the primary billing contact on the latest invoice for a subscription purchase.

If an invoice can not be provided, suggest [sign in with legacy email/password](https://customers.gitlab.com/customers/sign_in?legacy=true), where an invoice can be downloaded.

## Keep the Ticket simple and accurate

Because 2FA removal tickets are a matter of record, the ticket must be simple, accurate, and tightly focused on the access issue.
Do not allow the customer to bring up unrelated topics.

## Disable 2FA with support intervention

Support intervention for 2FA removal after the above steps have been attempted is only possible for users with an *existing paid plan* when the ticket is created. For security purposes, Support will not process 2FA resets for users who are added to a paid subscription for the express purpose of having 2FA disabled on their account.

### Workflows

#### Request for 2FA removal initiated by the account holder

Requests initiated by the account holder will be prompted by an autoreply to provide information to satisfy the security challenges.

##### Step 0: Validation

Some initial validation steps will occur automatically:

- Email / Username match
- Group membership validation
- Group subscription validation

If any of these are inaccurate, the ticket will be closed.

If the user is not eligible for support, for example a free user requesting 2FA removal, use the [`General::Forms::Incorrect form used` macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/General/Forms/Incorrect%20form%20used.md) to have Support Operations take the appropriate action on the ticket.

##### Step 1: Checking challenge answers

> **Note**: In case the user sends back very minimal information and it's clear it's not sufficient or the answers are vague, reply asking for more information immediately after their response. You can provide some additional guidance, such as "please provide the exact date and time of the commit, not just an approximate one".

1. To verify the challenge answers use the Zendesk GitLab User Lookup App or, for those who have admin access, check at `https://gitlab.com/admin/users/USERNAME`.
1. Use the ZenDesk GitLab Super App's 2FA Helper to determine the [risk factor](https://internal.gitlab.com/handbook/support/#risk-factors-for-account-ownership-verification) (GitLab internal) based on the user's answers. Data classification criteria and any notes are in the [Internal Handbook - Data Classification table](https://internal.gitlab.com/handbook/support/#data-classification) (GitLab internal), which is considered the source of truth. If you need to leave a comment manually (instead of through the app), use the [`Support::SaaS::Gitlab.com::2FA::2FA Internal Note` macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Internal%20Note.md?ref_type=heads) to put an internal note on the ticket.
   - Challenge answers must be evaluated against a paid namespace if the user is a member of any paid namespace. If the user is not a member of a paid namespace, refer to [Conditions for 2FA Reset Consideration](#conditions-when-account-is-used-to-access-customers-portal) for further guidance.

1. **If verification passed:** Request that your decision be peer-reviewed by another member of the team via Slack `#support_gitlab-com`. They will perform the steps in 2a
1. **If the verification failed**: Move to step 2b

##### Step 2a: User successfully proves account ownership

This section is typically done by the peer reviewer. If needed, the peer reviewer (or approving manager) may leave an approval note, in which case the original reviewer will perform the actions.

1. If you agree with the decision, sign into your admin account and locate the username in the users table or by going to `https://gitlab.com/admin/users/usernamegoeshere`
      1. Under the account tab, click `Edit`, add an [Admin Note](../workflows/admin_note.md), and save.
      1. On the account tab, click on `Disable 2FA`.
      1. Use the `Support::SaaS::Gitlab.com::2FA::2FA Removal Verification - Successful` [macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20Successful.md?ref_type=heads).

##### Step 2b: User fails to prove account ownership

> **Note**: Do *not* provide hints to answers, or let the user know which challenges they got right or wrong. That is how social engineering works!

1. If the user is unable to pass the risk factor:
   1. Inform them that without verification we will not be able to remove 2FA, but they may request an Enterprise Owner create a request on their behalf (if they would qualify), use the `Support::SaaS::Gitlab.com::2FA::2FA Removal Verification - GitLab.com - Failed - Final Response` [macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20GitLab.com%20-%20Failed%20-%20Final%20Response.md?ref_type=heads).
   1. Mark the ticket as "Solved".

#### Request for 2FA removal initiated by an Enterprise owner

Requests initiated by an Enterprise owner should include a [Support PIN](https://docs.gitlab.com/user/profile/#generate-or-change-your-support-pin). If other challenges are sent, note that owners should answer the challenges in reference to their **own** account. Other answers are not acceptable.

##### Step 0: Validation

Some initial validation steps will occur automatically:

- Email / Username match
- Group membership validation
- Group subscription validation

If any of these are inaccurate, the ticket will be closed.

##### Step 1: Checking challenge answers

> **Note**: In case the user sends back very minimal information and it's clear it's not sufficient or the answers are vague, reply asking for more information immediately after their response. As an Enterprise owner, the ticket response generated by the form should also include a [Support PIN](https://docs.gitlab.com/user/profile/#generate-or-change-your-support-pin). If it does not, move to [step 2b](#step-2b-enterprise-owner-fails-to-prove-their-identity) below.

1. To verify the Support PIN use admin access and check at `https://gitlab.com/admin/users/USERNAME`.

1. **If verification passed:** Request that your decision be peer-reviewed by another member of the team via Slack `#support_gitlab-com`. They will perform the steps in 2a
1. **If the verification failed**: Move to step 2b

##### Step 2a: Enterprise Owner successfully proves their identity

This section is typically done by the peer reviewer. If needed, the peer reviewer (or approving manager) may leave an approval note, in which case the original reviewer will perform the actions.

1. If you agree with the decision, sign into your admin account and locate the username in the users table or by going to `https://gitlab.com/admin/users/usernamegoeshere`
      1. Under the account tab, click `Edit`, add an [Admin Note](../workflows/admin_note.md), and save.
      1. On the account tab, click on `Disable 2FA`.
      1. Use the `Support::SaaS::Gitlab.com::2FA::2FA Removal Verification - Successful` [macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20Successful.md?ref_type=heads).

##### Step 2b: Enterprise Owner fails to prove their identity

> **Note**: Do *not* provide hints to answers, or let the user know which challenges they got right or wrong. That is how social engineering works!

1. If the user is unable to pass the risk factor:
   1. Send the additional challenges with the `Support::SaaS::GitLab.com::2FA::Additional 2FA Challenges` [macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/Additional%202FA%20Challenges.md?ref_type=heads).
   1. You may also leverage [Backup methods for authenticating an owner](#backup-methods-for-authenticating-an-owner).
1. If the user is still unable to pass the risk factor:
   1. Inform them that without verification we will not be able to remove 2FA, use the `Support::SaaS::Gitlab.com::2FA::2FA Removal Verification - GitLab.com - Failed - Final Response` [macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/2FA/2FA%20Removal%20Verification%20-%20GitLab.com%20-%20Failed%20-%20Final%20Response.md?ref_type=heads).
   1. Mark the ticket as "Solved".

##### Backup methods for authenticating an owner

If a group owner does not include the owner vouch, you may use another method to verify their identity. It must be an action that has been specifically instructed by Support and identifiably unique to the situation. Some examples include having the owner:

- create an issue in a project they have access to with a specific piece of text that you provide.
- create a new project at a path that you provide.

## Large Customers

For customers who are large enough to have an account management project, a different workflow can be configured for them that will allow Support to more easily disable 2FA for any of their users that require it. Before this process can be used, a GitLab team member from either Customer Success or Sales must perform a few setup steps (described below). If a customer requests this workflow, please refer them to either of those individuals.

### Setup (for CS & Sales)

The steps to follow depend on whether or not the customer has a shared Slack channel with us. Either the customer's Customer Success Manager (CS) or Account Manager (Sales) is responsible for performing this setup. Please proceed to [Shared Slack Channel](#method-1-shared-slack-channel) if they do or [No Shared Slack Channel](#method-2-no-shared-slack-channel) if they don't.

#### Method 1: Shared Slack Channel

1. Find out which users within the customer's organization are the ones that will be authorizing GitLab Support to disable 2FA on their users accounts. Obtain **both** the Slack handle and GitLab username of these users.
1. Create a file called `2FA Verification.md` inside of the `.gitlab/issue_templates` directory of the customer's [Account Management](https://gitlab.com/gitlab-com/account-management) project. If that directory does not exist, create it as well.
1. Populate the `2FA Verification.md` file with the template below, taking care to replace the following variables from it with your specific customer's information:
   - `CUSTOMER_SLACK_CHANNEL` - The name of the shared Slack channel that the customer's organization has with us.
   - `SLACK_USERNAME` - The Slack handle of a user that is authorized to allow GitLab Support to disable 2FA for the customer's user accounts.
   - `GITLAB_USERNAME` - The GitLab username of a user that is authorized to allow GitLab Support to disable 2FA for the customer's user accounts.

     <details>
      <summary markdown="span">2FA Verification Template</summary>

       A user in your organization is requesting to have [GitLab two-factor authentication](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) removed from their account. Please review and complete the highlighted sections below.

      **Support Engineer Instructions**
       - Ping the customer's organization owners in CUSTOMER_SLACK_CHANNEL using the [Notify Customer - Slack](#2-contact-through-slack-skip-if-no-shared-slack-channel) template. For this organization the owners are SLACK_USERNAME, SLACK_USERNAME, and SLACK_USERNAME.
       - Fill out the `Request Details` section below.

      **Request Details**
       - User Requesting Reset: USERS_GITLAB_USERNAME
       - Support Ticket: TICKET_NUMBER

      **Customer Instructions**
       - Review the request and get in contact with the user requesting the reset to verify its authenticity.
       - Comment on this issue indicating your approval.
       - Unassign yourself and any others from this issue.
       - Assign to the Support Engineer who opened this issue.

       /assign GITLAB_USERNAME GITLAB_USERNAME GITLAB_USERNAME, /label ~"2FA Reset" ~"Awaiting confirmation"

1. Create a [Support Super form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) submission
   - For "What is this request concerning?", select `Modifications to a Zendesk Global Organization`
   - For "What kind of modification are you looking to make?", select `Add 2FA exemption for large customers`
   - Fill out the other fields with the correct and relevant information it asks for

#### Method 2: No Shared Slack Channel

1. Find out which users within the customer's organization are the ones that will be authorizing GitLab Support to disable 2FA on their users accounts. Obtain the GitLab username of these users.
1. Create a file called `2FA Verification.md` inside of the `.gitlab/issue_templates` directory of the customer's [Account Management](https://gitlab.com/gitlab-com/account-management) project. If that directory does not exist, create it as well.
1. Populate the `2FA Verification.md` file with the template below, taking care to replace the following variables from it with your specific customer's information:
   - `GITLAB_USERNAME` - The GitLab username of a user that is authorized to allow GitLab Support to disable 2FA for the customer's user accounts.

     <details>
      <summary markdown="span">2FA Verification Template</summary>

       A user in your organization is requesting to have [GitLab two-factor authentication](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) removed from their account. Please review and complete the highlighted sections below.

       **Support Engineer Instructions**
       - Fill out the `Request Details` section below.

       **Request Details**
       - User Requesting Reset: USERS_GITLAB_USERNAME
       -Support Ticket: TICKET_NUMBER

       **Customer Instructions***
       - Review the request and get in contact with the user requesting the reset to verify its authenticity.
       - Comment on this issue indicating your approval.
       - Unassign yourself and any others from this issue.
       - Assign to the Support Engineer who opened this issue.

       /assign GITLAB_USERNAME GITLAB_USERNAME GITLAB_USERNAME, /label ~"2FA Reset" ~"Awaiting confirmation"

1. Create a [Support Super form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) submission
   - For "What is this request concerning?", select `Modifications to a Zendesk Global Organization`
   - For "What kind of modification are you looking to make?", select `Add 2FA exemption for large customers`
   - Fill out the other fields with the correct and relevant information it asks for

### Usage (for GitLab Support)

If a 2FA ticket is opened by an organization that has had this workflow configured for them, perform the following steps to process the request depending on whether or not the customer has a shared Slack channel with us.

>**Note:** 2FA removal for the user is approved by the Customer via the 2FA Verification template. This means the Customer will confirm with the User having 2FA removed and not support.

#### 1. Create Issue

1. Open a new issue in the issue tracker of the customer's account verification project using the `2FA Verification` template and follow all instructions within it. A link to this template should be in the notes for the organization in Zendesk.

#### 2. Contact Through Slack (skip if no shared Slack channel)

1. Within the customer's shared Slack channel with us, use the template below to alert them to the fact that a new 2FA disable request exists in their account management issue tracker. Be sure to replace the following variables:
   - `SLACK_USERNAME` - The Slack handle of a user that is authorized to allow GitLab Support to disable 2FA for the customer's user accounts. If there are more than one, add them as well.
   - `ISSUE_LINK` - The URL of the 2FA reset issue created on the shared project

     <details>
       <summary markdown="span">Notify Customer - Slack</summary>

       <p>Hi `SLACK_USERNAME` - we've received a request from one of your users to disable 2FA on their account.

       <p>Could you vouch for them by following the steps in this issue: `ISSUE_LINK`?

       <p>Once you've done that, please let me know. If you don't get to this within 24 hours, we'll use our standard account verification procedures to determine if they're eligible for a 2FA reset.

>**Note:** If the customer has created an issue using the `2FA Verification` template themselves and sent us a Zendesk ticket with a link to it, skip this step.

#### 3. Wait For Authorization

Wait for the customer to comment on the issue and approve the request to disable 2FA.

As stressed in the Slack notification template, we will wait for the customer's answer for 24 hours. If no response is received by then, regular 2FA verification will take place via the [challenges workflow](/handbook/support/workflows/account_verification/#step-1-sending-challenges).

#### 4. Disable 2FA

Once the customer has approved the request, disable 2FA on the user's account, add an [Admin Note](/handbook/support/workflows/admin_note/) on the user's account, and then close both the support ticket and issue.

Peer review is **not** required. You may make the change yourself.
