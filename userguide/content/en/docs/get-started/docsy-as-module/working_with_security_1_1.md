---

title: Working with Security
category: GitLab.com
subcategory: Security
description: Documenting the various types of Security related tickets and the escalation process to notify Security.
---



## Overview

Previously, GitLab utilized the email address <security@gitlab.com> to report and inquire about security concerns. However, as GitLab and our Security Department has grown and expanded, we were unable to provide the high level of service our customers deserve utilizing that singular queue. Users who reach out to `security@gitlab.com` will now receive an auto-reply providing them with specific instructions for reporting the various types of security concerns. If the auto-responder does not answer their questions or a security-related ticket is submitted to Support you can utilize the macro [`Security::All Security Questions`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Security/All%20Security%20Questions.yaml) to provide the user with detailed instructions.

## Workflows

Please *do not* transfer to security and refer to the relevant workflow for the following:

- [Reinstate Blocked Accounts](/handbook/support/workflows/reinstating-blocked-accounts)
- [Abuse Report Review Request](/handbook/support/workflows/Abuse_Report_Review_Request)
- [Log Requests](/handbook/support/workflows/log_requests)
- [Reporting a New Security Incident](/handbook/security/security-operations/sirt/engaging-security-on-call)

You can also utilize the [`Security::All Security Questions`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Security/All%20Security%20Questions.yaml) macro for more details on the language. If the workflows above and the Macro do not resolve the customer's concern, please post a link to the ticket in the [#sec-fieldsecurity](https://gitlab.slack.com/archives/CV5A53V70) Slack Channel.

### Triage Workflow

Vulnerability disclosures are no longer triaged via ZenDesk. When in doubt, please involve the Application Security team.

- If the report would be Informative or would be an ~"type::feature", you may ask the requester to
  file an issue themselves. You can start with the "General -> Ask to create an issue"
  macro.
- If the report appears to be a valid security issue, or if in doubt:
  - If the severity may be an ~severity::1 or otherwise needs immediate investigation:
    - [Engage the Security Engineer on-call](/handbook/security/security-operations/sirt/engaging-security-on-call)
    - Manually create an issue for report following the [creating a security issue instructions]({{ ref "engaging-with-security#creating-new-security-issues" }})
  - Otherwise, reply to the reporter to see if they wish to either:
    - Report via HackerOne
    - Create a confidential issue themselves following the [creating a security issue instructions]({{ ref "engaging-with-security#creating-new-security-issues" }})
    - Have a team member create the issue and reply with their preference for acknowledgement.
    - To ensure timely handling of the report, let the reporter know that if no response
      within 3 business days, a GitLab team member will create the issue.

### Request for Information on Security Update or Patch

Sometimes, a customer will request details on a security update that was released. e.g. "Should I worry about this? What's this patch about?".

A summary of GitLab CVEs for specific versions is available in [Customer Success' "What's New Since" tool](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=cves).

If the customer is asking about a security vulnerability published as part of a release,
the only information we can provide is what is in the security blog post.
For more information on security communication, please see the [security incident communication page](/handbook/security/security-operations/sirt/security-incident-communication-plan).

Security will [make the issue public if possible](/handbook/security/#process-for-disclosing-security-issues) after a set number of days.

If you believe more information should be made available in the blog post, or to a specific customer,
please [open a confidential issue in the security communication tracker](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues).

Note: Confirmed mitigation strategies are typically added to the security blog post.
If none are listed, the only recommendation is to upgrade to a version where the issue is fixed.
While some suggestions (such as disabling a feature) may seem like they would mitigate an issue,
without validation from the security team, we cannot be fully certain.

Following the [Responsible Disclosure Policy](https://about.gitlab.com/security/disclosure/), see below on reporting a security issue.

## General Guidelines for Security Staff

1. All members of the Security Team should have followed [the Light Agent request process](/handbook/support/internal-support/#viewing-support-tickets)
  as part of their onboarding and should use these accounts to make internal comments. When it's necessary to reply or change the
  status of the ticket use the shared account in 1Password.
1. Always cross-link any relevant ZenDesk, HackerOne, and GitLab issues, in
  internal comments where appropriate and available. ZenDesk links in GitLab issues
  should be noted as "GitLab internal only": `Reported via ZenDesk (GitLab internal only): https://gitlab.zendesk.com/.../xxxxx`
1. When responding directly via email, you must include the requester's email
  address as a recipient, since emails replies to ZenDesk from Light Agent
  accounts will only be processed as internal notes and not sent to the requester.
1. If you email directly, you are responsible for setting the ticket to
    "Solved" or "Pending", or finding someone with permission to do so.

### If the customer has already created an issue

In the case that the customer has already filed an issue for the vulnerability:

1. Mark the issue is `confidential`

1. Add `security`, `customer`, and `bug` or `feature proposal` labels

1. Assign [Severity and Priority Labels](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)

### If the customer has not yet created an issue

See [Creating New Security Issues]({{ ref "engaging-with-security#creating-new-security-issues" }})
