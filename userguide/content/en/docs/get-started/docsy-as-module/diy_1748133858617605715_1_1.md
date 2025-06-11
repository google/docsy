---
title: Trust & Safety, Do It Yourself
description: "Preventing, detecting and mitigating ABUSE for self managed customers"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

If you are running your own GitLab CE or EE instance with public registration on you've most likely encountered some form of abuse of your own. This could range from bots or people spamming your Issue trackers, creating spam profiles, distributing malware or obscene content.

Lucky for you, you're not the first and we have some knowledge to share.

Not all of this might be a applicable to your situation, so use what works for you leave the rest.

If you know something we don't or just want to share your solution to abuse prevention solution, feel free to open an MR to add to this page!

## Self-managed customers: preventing, detecting and mitigating spam

GitLab uses [Spamcheck](https://docs.gitlab.com/ee/administration/reporting/spamcheck.html) to check for spam when users create issues and reCaptcha as an added level of spam and abuse prevention.

This tooling helps respond to the symptoms of abuse, but the root of the problem remains: malicious actors register new accounts, or take over existing accounts and then use the accounts to spam and abuse instances and projects.

***So, what more can you self-managed Admins do to prevent and mitigate spam?***

### 2FA

Hosted instances of GitLab can reduce spam by making it more difficult for bots to automate account creation or takeover. Requiring [2FA](https://docs.gitlab.com/ee/user/profile/account/two_factor_authentication.html) for all users is one way to prevent legitimate users from having their accounts taken over and used to create spam.

### Authentication restrictions

[Sign-up restrictions](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html) will allow self-managed Admins to:

- Disable new sign-ups.
- Require Admin approval for new sign-ups.
- Require user email confirmation.
- Denylist or allowlist email addresses belonging to specific domains.

In fact, for customers running public-facing GitLab instances, we highly recommend that you consider disabling new sign-ups if you do not expect public users to sign up for an account.
[Sign in restrictions](https://docs.gitlab.com/ee/administration/settings/sign_in_restrictions.html) allow self-managed Admins to customize authentication restrictions for web interfaces as well as Git over HTTP(S). These settings will allow you to enforce:
Mandatory 2FA for new users; this makes it more difficult for bots to surpass and prevents legitimate users from getting pwned via single factor auth + weak password combinations.
Email confirmation on sign-up; making it more difficult for bots to register new spam accounts.

### Harden your instance

Customizing your instance configuration can go a long way to discouraging and reducing spam and abuse. This includes [defining how users access your instance and who can have access](https://about.gitlab.com/blog/2020/05/20/gitlab-instance-security-best-practices/#restricting-how-and-who).

### Understand how abuse is reported and managed by self-managed Admins

It's also key to understand how users can [report abuse from other GitLab users to GitLab self-managed Administrators](https://docs.gitlab.com/ee/user/report_abuse.html), the [actions that self-managed Admins can take against abusers](https://docs.gitlab.com/ee/administration/moderate_users.html) and how [abuse reports are managed and resolved by Admins](https://docs.gitlab.com/ee/administration/review_abuse_reports.html#resolving-abuse-reports).

### Rate limits

Finally, if you're in the midst of spam abuse you can impose [rate limits](https://docs.gitlab.com/ee/security/rate_limits.html) to help respond to the increased loads. You can also [limit rates on issue creation](https://docs.gitlab.com/ee/administration/settings/rate_limit_on_issues_creation.html) and impose [rate limits on User and IPs](https://docs.gitlab.com/ee/administration/settings/user_and_ip_rate_limits.html).

### Suggest an Abuse Prevention Feature

For any abuse prevention feature requests and suggestions for CE and EE, please create a **Feature proposal** Issue from the provided templates in the [GitLab Project](https://gitlab.com/gitlab-org/gitlab/-/issues) and add the ~"Abuse Prevention" label. Feel free to us for additional input `@gitlab-com/gl-security/security-operations/trust-and-safety` or if you have any questions.

### Open Source Program Partners, Premium and Ultimate Customers

Please see the [Contact Us](/handbook/security/security-operations/trustandsafety/#reporting-abuse) section on out Team page for details on reaching us.
