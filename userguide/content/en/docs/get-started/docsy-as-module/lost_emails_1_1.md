---
title: Lost Email Account
category: GitLab.com
subcategory: Accounts
description: "Workflow for cases when users are no longer able to receive security emails for account verification"
---

## Overview

This workflow covers cases when a user requests that their email address be changed, for example due to having lost access to all email addresses on their account and being asked to perform [Account email verification](https://docs.gitlab.com/security/email_verification/#accounts-without-two-factor-authentication-2fa) in order to access their account.

## **Stage 0:** Ticket Triage

Ensure the ticket has the correct:

- Form `SaaS Account`
- Category, such as `Cannot access account`
- Subcategory, such as `Need to change my username/email`
- Impacted email address

## **Stage 1:** Process

As the user has reportedly lost access to the email address associated with their GitLab.com account, they have likely raised the ticket using an alternate email address. As with all account activities, you should be particularly mindful of this and take care to not share any information related to the account which is not publicly available, or where applicable, account verification has not been successfully completed.

The actions support can take on accounts are different for free users and paid users.

### Paid user

Refer to [Making Changes and Taking Actions on a user's behalf](/handbook/support/workflows/account_changes) for the options available to paid users.

### Free user

We are unable to take any action for free users who have lost access to all email addresses on their GitLab.com account. Apply the Zendesk macro [`Support::SaaS::GitLab.com::Email::Free user verification code`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Email/Free%20user%20verification%20code.md) and submit the ticket as `Solved`.
