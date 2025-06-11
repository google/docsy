---
title: Locked, Blocked and Banned Accounts
category: GitLab.com
subcategory: Security
description: How to determine if a blocked user can be re-instated
---

This workflow page will describe how to action on **Locked**,  **Blocked** and **Banned** accounts. Sometimes users believe they are blocked, but their accounts are locked. There are several ways to verify:

1. The best way to view this information is via the [Zendesk User Lookup app (part of the GitLab Super App)](/handbook/support/readiness/operations/docs/zendesk/apps/#gitlab-super-app), through the `Locked` and `State` fields.
1. The Admin User UI in `/admin/user/USERNAME` will say `(Locked)`, `(Blocked)` or `(Banned)` next to the name at the top.
1. The [Users API](https://docs.gitlab.com/ee/api/users.html#single-user) through the URL `https://gitlab.com/api/v4/users/<user_id>` in your browser while logged in as an Admin User, also indicates the `locked` and `state` status of the user.

Our implementation of [Arkose Protect](https://docs.gitlab.com/ee/integration/arkose.html#arkose-protect) does *not* affect account locking, but instead can prevent users from signing in without solving the challenge.

## Locked accounts

When a user has been identified as locked, you can use the [`Support::SaaS::Account Locked` macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20Locked.md?ref_type=heads) to help explain the situation to the user. A user can be locked if:

2FA is **not** enabled:

- They do not have 2FA enabled and there have been 3 or more failed login attempts within 24 hours.
- Accounts are **not** unlocked automatically. The user receives an email with a six-digit unlock code *after* a successful login. They are then redirected to a verification page where they can unlock their account by entering the code. The code is valid for 60 minutes only, but they can request a new code by clicking a link on the verification page.

2FA **is** enabled:

- There have been 5 or more failed login attempts within 10 minutes.
- Accounts are unlocked automatically after a 10 minute waiting period.

If the user does not receive a verification email with the 6-digit code, it's likely that the primary email address is inactive or inaccessible. If a user does not have access to their primary email address, they cannot unlock their account or reset their password. Consider other workflows such as [swapping email addresses](/handbook/support/workflows/account_changes#account-access-requests) if a user is not able to access their primary email.

All verification emails with unlock codes and password reset emails bypass Mailgun suppressions. Mail delivery of these emails can also be seen in Mailgun.

You can see `Account Locked` states in [Kibana]({{< ref "kibana" >}}) by searching for `json.message: Account Locked`. Here's an example of what it might look like it Kibana:

![locked_account](/images/support/locked_example.png)

### Manual unlock

A user should attempt all self-serve methods first.

If self-serve methods have been exhausted and a member of a group with a paid subscription still cannot access their account,
we can consider a manual unlock if necessary. For example, if a user cannot receive external email to receive codes, a manual unlock may be required. Note that only an admin user can modify a user account on SaaS.

Process:

1. Follow the locked accounts workflow above and ensure that the user has exhausted all self-serve methods first.
1. For other cases, [comment or create an issue]({{< ref "working-with-issues" >}}) as applicable.
1. Do an [account ownership verification]({{< ref "account_verification" >}}).
1. [Unlock the account from the admin area](https://docs.gitlab.com/ee/security/unlock_user.html#unlock-a-user-from-the-admin-area)
1. [Add an admin note]({{< ref "admin_note" >}}).

Feature request for group owners to self-serve is in [anti-abuse#339](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/339).

### Change risk assessment (Credit Card verification)

If a user has failed credit card verification or cannot use a credit card, follow the below process to verify the user in order to change their risk level. Please see [this issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5154#what-impact-will-this-have-on-users) and the [documentation](https://docs.gitlab.com/ee/security/identity_verification#stages) for more details.

**Note**: This process can only be done for free users if it's determined that they are impacted by a GitLab bug, such as [customers#3811](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3811).

Process:

1. Follow the steps above for [manual unlock](#manual-unlock).
1. While in the admin area for the user, scroll to the **Custom Attributes** section.
1. Change the field for `arkose_risk_band` from `high` to `medium`.
1. If necessary, [unlock the account](https://docs.gitlab.com/ee/security/unlock_user.html#unlock-a-user-from-the-admin-area).
1. [Add an admin note]({{< ref "admin_note" >}}).
1. Click `Save` when done.

## Blocked Accounts

This workflow is used to determine if a blocked or a banned user can be reinstated. All blocked accounts should have an admin note with a link to a relevant issue.

### Why is account blocked?

If the account is blocked, look for the admin note on the account to determine why it has been blocked.
    - The [GitLab user lookup app](/handbook/support/readiness/operations/docs/zendesk/apps/#gitlab-super-app) in Zendesk will show the admin notes for the user if they have contacted support using the email address associated with their account.  Alternatively -
    - If you have access to ChatOps you can use the below command in any chatops enabled Slack channel to read admin notes for the user
        > `/chatops run user find <username or email>`

### User initiated self-serve deletion

If the Admin Note is `User deleted own account on {timestamp}`, this means the user initiated the self-serve deletion. See [Cancelling delayed account deletion](#cancelling-delayed-account-deletion).

1. **Free user** accounts need to wait 7 days, starting the day of the deletion request, to create a new account with the same email address or username. Use the [`Support::SaaS::Gitlab.com::Blocked Accounts::Blocked due to account deletion`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Blocked%20due%20to%20account%20deletion.md?ref_type=heads) macro.
    1. If the user is not part of a paid namespace but needs to be added to a paid namespace (user or top-level group owner creates the ticket), then they can request immediate deletion.
        - Use the [`Support::SaaS::Gitlab.com::Blocked Accounts::Blocked due to account deletion`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Blocked%20due%20to%20account%20deletion.md?ref_type=heads) macro and ask for explicit permission from the user to bypass the 7d wait period and delete the account.
        - When confirmation is received, SE (with Admin access) deletes the account.
        - SE updates the ticket with the result of the deletion.
1. **Paid user** accounts who are part of a paid namespace, the user has no deletion delayed and the account is deleted immediately, see [this MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/121912). Note: At present, this applies to members of top-level paid namespace only, see [this issue](https://gitlab.com/gitlab-org/gitlab/-/issues/416651). Paid users added below the top-level group will still be subject to the 7-day delay period.

### Embargoed countries

If the block or complaint is related to access from an embargoed country, use the [`Support::SaaS::Gitlab.com::Abuse::TOS Section 10 (Embargoed Countries)`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Abuse/TOS%20Section%2010%20(Embargoed%20Countries).md?ref_type=heads) macro.
    - If the user provides the requested information, then complete the `Trust and Safety` [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) template in the Trust and Safety Operations tracker. Otherwise, reaffirm the block cannot be removed.
    - Proceed with this action for both **free** and **paid** users.

### Professional services migrations

Professional Services migrations can also block users as part of their process. Admin notes for migrations were added as of 2022-08-19 through [this issue](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/issues/818). Older migrated accounts may not have an admin note. Support can unblock the user in the following cases:
    - Blocked users can submit a support ticket to be unblocked. Once they are [verified](/handbook/support/workflows/account_verification), the user can be unblocked. Leave an [admin note](/handbook/support/workflows/admin_note) on the user stating they were unblocked, with the date and ticket number.
    - For [Enterprise users]({{< ref "gitlab-com_overview#enterprise-users" >}}), the `owner` of the top-level namespace the user belongs to can submit the ticket. Follow the [account verification]({{< ref "account_verification" >}}), and add an [admin note]({{< ref "admin_note" >}}) as usual, including if it was user or owner requested.
    - You can also ask for clarification or assistance in the [#professional_services](https://gitlab.slack.com/archives/CFRLYG77X) channel if needed.
    - Proceed with this action for both **free** and **paid** users.

### No admin note and none of the above

For all other cases, including no admin notes that are not a part of PS migrations, complete the [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) template in the Trust and Safety Operations tracker. A security member of the team will review the request within 24 hours. If the request is urgent, please reach out in the [#abuse](https://gitlab.enterprise.slack.com/archives/C0HPYBJ3D) Slack channel.

1. Send the [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) macro for the initial response to the user.
1. If established it is not a Trust and Safety block, or is blocked as a result of a SM-to-SaaS migration (conducted with or without Professional Services) AND they are [verified](/handbook/support/workflows/account_verification), then:
    - **Paid accounts** can be unblocked with authorization from a user with the Owner role in the top level namespace.
    - **Free accounts** can only be unblocked under exceptional circumstances and in combination with leadership approval.

### Account is successfully unblocked

If account is unblocked, use the [`Support::SaaS::Gitlab.com::Blocked Accounts::Account Reinstated- Success`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Account%20Reinstated-%20Success.md?ref_type=heads) macro to notify the user the account has been unblocked. Otherwise, provide the reasoning from the Unblock Request as to why their account will remain blocked.

## Banned accounts

1. Only proceed with the next steps if any of the following scenarios is true:
    1. The email address the user has used to raise their request matches an email address associated with the account the request is intended for.
    1. The user account is classified as an [Enterprise user]({{< ref "gitlab-com_overview.md#enterprise-users" >}}) and an owner of the top-level group raises the ticket.
1. Complete the `Trust and Safety` [Account Reinstatement Request](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements/-/issues/new?issuable_template=Account%20Reinstatement) template in the Trust and Safety Operations tracker. A security member of the team will review the request within 24 hours. If the request is urgent, please reach out in the #abuse Slack channel.
1. Send the [`Support::SaaS::Gitlab.com::Blocked Accounts::Escalated-TrustAndSafety`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Escalated-TrustAndSafety.md?ref_type=heads) macro for the initial response to the user.
1. If account is restored, use the [`Support::SaaS::Gitlab.com::Blocked Accounts::Account Reinstated- Success`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Blocked%20Accounts/Account%20Reinstated-%20Success.md?ref_type=heads) macro to notify the user the account has been restored. Otherwise, provide the reasoning from the Reinstatement Request as to why their account will remain banned.

## Cancelling delayed account deletion

It is possible for self-initiated account deletion to be cancelled within the 7-day delay period. See [Unblocking the account will cancel the account deletion](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/423).

A request to cancel the deletion of an account may be made by a member of a *paid* group or a top-level owner if the user is an [Enterprise user]({{< ref "gitlab-com_overview.md#enterprise-users" >}}). We do not cancel account deletion for free users.

Process:

1. The paid user or top-level owner must successfully pass [account verification](/handbook/support/workflows/account_verification).
1. Unblock the user and leave an [admin note](/handbook/support/workflows/admin_note) on the user stating they were unblocked, with the date and ticket number.

---

NOTE:
The rest of this page is for **reference** only and should be updated to point to Security's workflow.

### Policy Reference

1. All decisions about account reinstation are final and there is no process for appeals.
1. These criteria are to be taken as examples **only**, and **not** as binding principles.
1. If the account violates our ToS again within a 12 month period, it could result in being permanently banned.

#### An account can be reinstated when

1. The user agrees to remove the content in question within the requested timeframe.
1. The user has provided a sufficient use case for violating our Terms of Use.
1. The user agrees to remove or export the content away from GitLab.com within 24 hours.
1. The DMCA/Trademark complaint has been resolved.

#### An account **cannot** be reinstated when

1. The user refuses to take corrective measures on the account.
1. The user continues to violate our ToS.
1. The user intentionally violates our ToS.
1. Any abusive language or hostile activity towards the support engineer.
1. The account presents damage to the GitLab business and/or brand.
