---
title: CustomerDot Account Related Problems
category: CustomersDot
description: Using the customer console for internal requests is only for special cases where the existing tools won't allow us to complete the task at hand.
---

## Overview

Sometimes customers have trouble accessing their account.
CustomersDot email and password log in has been deprecated.
Customers can instead [follow these steps](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#sign-in-to-customers-portal) to log in using a one-time sign-in link.

### 1. Customer cannot sign in even after password reset

This could be because the password reset email was requested from [https://**gitlab.com**/users/password/new](https://gitlab.com/users/password/new).
We can confirm this by searching through the mailgun log. To locate the password reset email:

1. Log in to Mailgun using your account
1. On the left panel, expand `Sending` and go to `Logs`
1. On the top left, click the `Domain` dropdown and choose `mg.gitlab.com` domain to confirm that the password reset email was requested on GitLab.com.
1. If the customer is unable to log in using their GitLab.com account, request them to log in using a **one-time sign-in link**.

### 2. The CustomersDot account has not been confirmed

When the account is not confirmed, the customer cannot log in. To view whether an account is confirmed:

1. Sign into CustomerDot with your admin account
1. Find the customer account
1. Click on the `i` icon on the customer account or `Show` if you're already viewing the account
1. The confirmation is shown in `Confirmed at` field
1. If the customer has not confirmed their email/account, we can resend the confirmation email using [this form](https://customers.gitlab.com/customers/confirmation/new) and get back to the customer.

### 3. The customer is trying to sign in using another email address

Situations may arise where a customer has used a different email address for their [customers portal](https://customers.gitlab.com/customers/sign_in) account and their GitLab.com account. It may also be possible that a customer has signed up more than once using different email addresses (e.g. `firstname_lastname@organization.com` and `firstname.lastname@organization.com`). In scenarios such as these, please explain the differences to the customer, and clarify which email address they used for their GitLab subscription.
