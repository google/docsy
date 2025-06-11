---
title: "Engaging with Security"
---

## Vulnerability Reports and HackerOne

GitLab receives vulnerability reports by various pathways, including:

- HackerOne bug bounty program
- Reports or questions that come in from customers through Zendesk.
- Issues opened on the public issue trackers. The security team can not review
all new issues and relies on everyone in the company to identify and label
issues as `~bug::vulnerability` and @-mention `@gitlab-com/gl-security/product-security/appsec` on issues.
- Issues reported by automated security scanning tools

For **any** reported vulnerability:

- Open a confidential issue in the appropriate issue tracker as soon as a report
is verified. If the vulnerability was reported via a public issue, make the issue confidential.
If triage is delayed due to team availability, the delay should be communicated.
- Add `~security` and `~bug::vulnerability` labels to the issue.  Add the appropriate group label if known.
- Add the `~Weakness::CWE-XXX` label, where the `XXX` is the weakness related [CWE](https://cwe.mitre.org/data/index.html) ID.
- An initial determination should be made as to severity and impact. Never **dismiss** a security report outright. Instead, follow up with the reporter, asking clarifying questions.
- For next steps, see the process as it is detailed below for HackerOne reports, and adhere to the guidelines there for vulnerabilities reported in other ways as well in terms of frequency of communication and so forth.
- Remember to prepare patches, blog posts, email templates, etc. [following the security engineer process](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md) or in other non-public ways even if there is a reason to believe that the vulnerability is already out in the public domain (e.g. the original report was made in a public issue that was later made confidential).

### Triage Rotation

See the [dedicated page](/handbook/security/product-security/application-security/runbooks/triage-rotation/) to read about our Triage Rotation process.

### HackerOne Process

See the [dedicated page](/handbook/security/product-security/application-security/runbooks/hackerone-process/) to read about our HackerOne process.

### Security Dashboard Review

See the [dedicated page](/handbook/security/product-security/application-security/runbooks/security-dashboard-review/) to read about our dashboard review process.

### CVE IDs

We use CVE IDs to uniquely identify and publicly define vulnerabilities in our products. Since we publicly disclose all security vulnerabilities 30 days after a patch is released, CVE IDs must be obtained for each vulnerability impacting self-managed to be fixed. The earlier obtained the better, and it should be requested either during or immediately after a fix is prepared.

We currently request CVEs [through our CVE project](https://about.gitlab.com/security/cve/). Keep in mind that some of our security releases contain *security related* enhancements which may not have an associated [CWE](https://cwe.mitre.org/) or vulnerability. These particular issues are not required to obtain a CVE since there's no associated vulnerability.

### On Release Day

On the day of the security release several things happen in order:

- The new GitLab packages are published.
- All security patches are pushed to the public repository.
- The public is notified via the GitLab blog release post, security alerts email, and Twitter.

The GitLab issue should then be closed and - after 30 days - sanitized and made public. If the report was received via HackerOne, follow the [HackerOne process](/handbook/security/product-security/application-security/runbooks/hackerone-process/#closing-out--disclosing-issues).

### Process for disclosing security issues

At GitLab we value [being as transparent as possible](/handbook/values/#transparency), even [when it costs](/handbook/values/#transparency-is-most-valuable-if-you-continue-to-do-it-when-there-are-costs). Part of this is making confidential GitLab issues about security vulnerabilities public 30 days after a patch. The process is as follows:

1. Check for a `~keep confidential` tag. If one exists
   1. Decide whether this tag is still appropriate and in line with our [Transparency value](/handbook/values/#transparency)
   1. Start a discussion with issue participants, if needed
1. If an issue does not have `~keep confidential`, remove sensitive information from the description and comments, e.g.
   1. Proof-of-concept videos & screenshots showing researcher account information
   1. Tokens, Access Keys, and other secrets
   1. Information which our [Data Classification Standard](/handbook/security/standards/data-classification-standard/) and [SAFE framework](/handbook/legal/safe-framework/) say to not disclose
1. Issues related to personal data leaks are not disclosed since they are not security issues related to the product. If for some reason it needs to be disclosed then consult with Legal and the Corporate Comms team before disclosing.
1. Identify all issue description changes, click to expand "Compare with previous version" and click the trash icon to "Remove description history"
1. Optionally mention issue participants to notify them you intend to make the issue public
1. Optionally add a comment that explains the CVSS.
1. Edit the Confidentiality of the issue and set it to Public

To facilitate this process the [GitLab Security Bot](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator) comments on confidential issues 30 days after issue closure when they are not labeled `~keep confidential`.

### Handling Disruptive Researcher Activity

Even though many of our 3rd-party dependencies, hosted services, and the static
`about.gitlab.com` site are listed explicitly as out of scope, they are sometimes
targeted by researchers. This results in disruption to normal GitLab operations.
In these cases, if a valid email can be associated with the activity, a warning
such as the following should be sent to the researcher using an official channel
of communication such as ZenDesk.

```text
Dear Security Researcher,

The system that you are accessing is currently out-of-scope for our bounty
program or has resulted in activity that is disruptive to normal GitLab
operations. Reports resulting from this activity may be disqualified from
receiving a paid bounty. Continued access to this system causing disruption to
GitLab operations, as described in policy under "Rules of Engagement,
Testing, and Proof-of-concepts", may result in additional restrictions on
participation in our program:

  Activity that is disruptive to GitLab operations will result in account bans and disqualification of the report.

Further details and some examples are available in the full policy available at:

https://hackerone.com/gitlab


Best Regards,

Security Department | GitLab
https://handbook.gitlab.com/handbook/security/
```

## Creating New Security Issues

Use [the Vulnerability Disclosure issue template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure) to report a new security vulnerability, or use our [HackerOne bug bounty program](https://hackerone.com/gitlab). Please note that we are only able to pay out bounties for eligible vulnerabilities through the HackerOne platform.

New security issue should follow these guidelines when being created on `GitLab.com`:

- Create new issues as `confidential` if unsure whether issue a potential
vulnerability or not. It is easier to make an issue that should have been
public open than to remediate an issue that should have been confidential.
Consider adding the `/confidential` quick action to a project issue template.
- Always label as ``~security`` at a minimum. If you're reporting a vulnerability (or something you suspect may possibly be one) please use the [Vulnerability Disclosure](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Vulnerability%20Disclosure) template while creating the issue. Otherwise, follow the steps here (with a security label).
- Add any additional labels you know apply. Additional labels will be applied
by the security team and other engineering personnel, but it will help with
the triage process:
  - [`~"type::bug"`, `~"type::maintenance"`, or `~"type::feature"` if appropriate](product-security/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug)
  - Team or DevOps lifecycle labels
  - `~customer` if issue is a result of a customer report
  - `~internal customer` should be added by team members when the issue
    impacts GitLab operations.
  - `~dependency update` if issue is related to updating to newer versions of the dependencies GitLab requires.
  - `~featureflag::` scoped labels if issue is for a functionality behind a feature flag
- Issues that contain customer specific data, such as private repository contents,
should be assigned `~keep confidential`. If possible avoid this by linking
resources only available to GitLab team member, for example, the originating
ZenDesk ticket. Label the link with `(GitLab internal)` for clarity.

Occasionally, data that should remain confidential, such as the private
project contents of a user that reported an issue, may get included in an
issue. If necessary, a sanitized issue may need to be created with more
general discussion and examples appropriate for public disclosure prior to
release.

For review by the Application Security team, @ mention `@gitlab-com/gl-security/product-security/appsec`.

For more *immediate* attention, refer to [Engaging security on-call](/handbook/security/security-operations/sirt/engaging-security-on-call/).

### Severity and Priority Labels on `~security` Issues

Severity and priority labels are set by an application security engineer at the time of triage
if and only if the issue is [determined to be a vulnerability](product-security/application-security/vulnerability-management/#vulnerability-vs-feature-vs-bug).
To identify such issues, the engineer will add the `~bug::vulnerability` label.
Severity label is determined by CVSS score, using the [GitLab CVSS calculator](https://gitlab-com.gitlab.io/gl-security/product-security/appsec/cvss-calculator/).
If another team member feels that the chosen `~severity` / `~priority` labels
need to be reconsidered, they are encouraged to begin a discussion on the relevant issue.

The presence of the `~bug::vulnerability` label modifies the standard [severity labels](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity)(`~severity::1`, `~severity::2`, `~severity::3`, `~severity::4`)
by additionally taking into account
likelihood as described below, as well as any
other mitigating or exacerbating factors. The priority of addressing
`~security` issues is also driven by impact, so in most cases, the priority label
assigned by the security team will match the severity label.
Exceptions must be noted in issue description or comments.

The intent of tying `~severity/~priority` labels to remediation times is to measure and improve GitLab's
response time to security issues to consistently meet or exceed industry
standard timelines for responsible disclosure. Mean time to remediation (MTTR) is
a external
metric that may be evaluated by users as an indication of GitLab's commitment
to protecting our users and customers. It is also an important measurement that
security researchers use when choosing to engage with the security team, either
directly or through our [HackerOne Bug Bounty Program](product-security/application-security/runbooks/hackerone-process.md").

Vulnerabilities must be mitigated and remediated according to specific timelines.
The timelines are specified in the [Vulnerability Management handbook](/handbook/security/product-security/vulnerability-management/sla/) (a [controlled document](controlled-document-procedure/)).

If a better understanding of an issue leads us to discover the severity has changed, recalculate the time to remediate from the date the issue was opened. If that date is in the past, the issue must be remediated on or before the next security release.

### Due date on `~security` Issues

For `~security` issues with the `~bug::vulnerability` label and a severity of `~severity::3` or higher, the security engineer assigns the `Due date`,
which is the target date of when fixes should be ready for release.
This due date should account for the `Time to remediate` times above, as well as
monthly security releases on the 28th of each month. For example, suppose today is October 1st, and
a new `severity::2` `~security` issue is opened. It must be addressed in a security release [within 30 days](/handbook/security/product-security/vulnerability-management/sla/),
which is October 31st. So therefore, it must catch the October 28th security release.
Furthermore, the [Security Release Process deadlines](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#release-deadlines)
say that all merge requests associated with the fix must be ready 48 hours before the due date of the security release, which would be October 26th. So the due date in this example must be October 26th.

Note that some `~security` issues may not need to be part of a product release, such as
an infrastructure change. In that case, the due date will not need to account for
monthly security release dates.

On occasion, the due date of such an issue may need to be changed if the security team
needs to move up or delay a monthly security release date to accommodate for urgent
problems that arise.

## Scheduling `~security` Issues

**Product Managers** and **Engineering Managers** should follow the recommended guidance when scheduling`~security` Issues :

| When a team is assigned an ___ | This is the expected response |
| ------ | ------ |
|     S1   |   Disrupt your milestone and work on the ~"bug::vulnerability" and ~"FedRAMP::Vulnerability" security issue **right away**     |
|    S2    |  Disrupt your milestone and work on the ~"bug::vulnerability" and ~"FedRAMP::Vulnerability" security issue **right away**     |
|      S3  |   Begin working on the ~"bug::vulnerability" and ~"FedRAMP::Vulnerability" security issue at the beginning of the next Milestone       |
|       S4 |    Begin working on the ~"bug::vulnerability" and ~"FedRAMP::Vulnerability" security issue at least 2 Milestones prior to the due date    |
| S1,S2 or S3 that is blocked | The team that owns the blocking issue, should disrupt their current milestone and work on the blocking issue **right away** |

### Reproducibility on `~security` Issues

The issue description should have a `How to reproduce` section to ensure clear replication details are in description. Add additional details, as needed:

- Environment used:
  - Docker Omnibus version x.y.z
  - gitlab.com
  - staging.gitlab.com
- Conditions used such as projects, users, enabled features or files used
- A step by step plan to reproduce the issue
- The url or even better the `curl` command that triggers the issue

### Non-vulnerability `~security` issues

Issues labeled with the `security` but without `~type::bug + ~bug::vulnerability` labels are **not** considered vulnerabilities, but rather security enhancements, defense-in-depth mechanisms, or other security-adjacent bugs. For example, issues labeled `~"type::feature"` or `~"type::maintenance"`. This means the security team does not set the `~severity` and `~priority` labels or follow the vulnerability triage process as these issues will be triaged by [product](/handbook/product/) or other appropriate team owning the component.

Implementation of security feature issues should be done publicly in line with our [Transparency](/handbook/values/#transparency) value, i.e. not following the [security developer workflow](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md).

On the contrary, note that issues with the `security`, `~type::bug`, and `severity::4` labels are considered `Low` severity vulnerabilities and will be handled according to the standard vulnerability triage process.

### ~"security request"

The security team may also apply `~internal customer` and [~`security request`](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=security%20request) to issue as an
indication that the feature is being requested by the security team to meet
additional customer requirements, compliance or operational needs in
support of GitLab.com.

### ~"securitybot::ignore"

Some `~security` issues are neither vulnerabilities nor security enhancements and yet are labeled `~security`. An example of this would be a non-security `~"type::bug"` in the login mechanism. Such an issue will be labeled `~security` because it is security-sensitive but it isn't a vulnerability and it isn't a `~"type::feature"` either. In those cases the `~"securitybot::ignore"` label is applied so that the bot doesn't trigger the normal vulnerability workflow and notifications as those issues aren't subject to the "time to remediation" requirements mentioned above.

### Transferring from Security to Engineering

The security engineer must:

- Add [group label](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#group-labels) (`~group::editor`, `~group::package`, etc.)
- Add [stage label](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/issue_workflow.md#stage-labels)
- Any additional labels, such as `~merge request`.
- Mention the product manager for scheduling, such as `@pm for scheduling`.
- The engineering team lead should be @ mentioned and followed up with when necessary as
noted below for different severity levels.

The product manager will assign a `Milestone` that has been assigned a due
date to communicate when work will be assigned to engineers. The `Due date`
field, severity label, and priority label on the issue should not be changed
by PMs, as these labels are intended to provide accurate metrics on
`~security` issues, and are assigned by the security team. Any blockers,
technical or organizational, that prevents `~security` issues from being
addressed as [our top priority](/handbook/engineering/workflow/#security-is-everyones-responsibility)
should be escalated up the appropriate management chains.

**Note that issues are not scheduled for a particular release unless the team leads add them to a release milestone *and* they are assigned to a developer.**

Issues with an `severity::1` or `severity::2` rating should be immediately brought to the
attention of the relevant engineering team leads and product managers by
tagging them in the issue and/or escalating via chat and email if they are
unresponsive.

Issues with an `severity::1` rating have priority over all other issues and should be
considered for a critical security release.

Issues with an `severity::2` rating should be scheduled for the next scheduled
security release, which may be days or weeks ahead depending on severity and
other issues that are waiting for patches. An `severity::2` rating is not a guarantee
that a patch will be ready prior to the next security release, but that
should be the goal.

Issues with an `severity::3` rating have a lower sense of urgency and are assigned a
target of the next minor version.  If a low-risk or low-impact vulnerability
is reported that would normally be rated `severity::3` but the reporter has
provided a 30 day time window (or less) for disclosure the issue may be
escalated to ensure that it is patched before disclosure.

### Security issue becoming irrelevant due to unrelated code changes

It is possible that a ~security issue becomes irrelevant after it was initially triaged,
but before a patch was implemented. For example, the vulnerable functionality was removed
or significantly changed resulting in the vulnerability not being present anymore.

If an engineer notices that an issue has become irrelevant, they should @-mention the person
that triaged the issue to confirm that the vulnerability is not present anymore. <b>Note that it might still be necessary to backport a patch to previous releases according to our [maintenance policy](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases)</b>.
In case no backports are necessary, the issue can be closed.

### Reducing the number of backports

With the approval of an Application Security Engineer a security issue may be fixed on the current stable release only, with no backports. Follow the [GitLab Maintenance Policy](https://docs.gitlab.com/ee/policy/maintenance.html#security-releases) and apply the `~reduced backports` label to the issue.
