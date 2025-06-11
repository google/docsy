---
title: Issue Triage
description: "Guidelines for triaging new issues opened on GitLab.com projects"
---

GitLab believes in [Open Development](https://about.gitlab.com/blog/2015/12/16/improving-open-development-for-everyone/), and we encourage the community to file issues and open merge requests for our projects on [GitLab.com](https://gitlab.com/groups/gitlab-org). Their contributions are valuable, and we should handle them as effectively as possible. A central part of this is triage - the process of categorization according to type and severity.

Any GitLab team-member can triage issues. Keeping the number of un-triaged issues low is essential for maintainability, and is our collective responsibility. Consider triaging a few issues around your other responsibilities, or scheduling some time for it on a regular basis.

## Partial Triage

The [Engineering Productivity team](/handbook/engineering/infrastructure/engineering-productivity/) own the issue triage process, but there is no capacity to manually triage issues without a group label at present.
We rely on a combination of self and [AI triage](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/c003f65c94ff55a6b43c0b5c8c8ac0173618c0a5/policies/stages/report/untriaged-issues.yml).

### Partial Triage checklist

- Issue is spam:
  - [Report the issue](https://docs.gitlab.com/ee/user/report_abuse.html#report-abuse-from-an-issue).
  - Make the issue confidential.
  - Post a link to the issue in the `#abuse` slack channel.
- Issue is request for help:
  - Post the [support message](#support-issue-message) and close the issue.
  - Alternatively, ask for more information and apply the ~"awaiting feedback" label.
- Issue is [duplicate](#duplicates):
  - Post the [duplicate message](#duplicate-issue-message).
  - Call the `/duplicate` action to create the link to the original and close the issue.
- Assign a [type label](#type-labels).
  - If it is unclear whether the issue is a bug or a support request, tag the PM/EM for the [group](#group-labels) and ask for their opinion.
- `~"type::bug"`: assign a [severity label](#severity).
  - If ~"severity::1" or ~"severity::2": mention the PM/EM from the [group](#group-labels)
- Assign a [group label](#group-labels).
  - If there is no suitable group label: assign a [stage ("devops") label](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels).
- Optionally tag relevant [domain experts](/handbook/company/structure/#expert).

## Complete Triage

An issue is considered completely triaged when all of the following criteria are met:

- It is partially triaged.
- It has a milestone set.
- It has a [priority label](https://docs.gitlab.com/ee/development/labels/index.html#priority-labels) applied for `~"type::bug"` and `~"Deferred UX"`.

## Type Labels

Type labels are defined on the [Engineering Metrics page](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification).
If you are unsure about the type, you can tag the product or engineering manager for the [group](#group-labels) and ask their opinion.

## Group labels

Assigning a [group label](https://docs.gitlab.com/ee/development/labels/index.html#group-labels) allows `gitlab-bot` to automatically assign the right stage label.
The [Features by Group](/handbook/product/categories/features) listing can help find the right group.

## Priority

The priority label is used to indicate the importance and guide the scheduling of the issue. Priority labels are expected to be set based on the circumstances of the market, product direction, IACV impact, number of impacted users and capacity of the team. [DRIs](/handbook/people-group/directly-responsible-individuals/) for prioritization are based on work type:

- Feature - Product Manager (PM)
- Maintenance - Engineering Manager (EM)
- Bug - Quality Engineering Manager (QEM)

| Priority | Importance | Intention | DRI |
| -------- | ---------- | --------- | --- |
| `~"priority::1"` | Urgent | We will address this as soon as possible regardless of the limit on our team capacity. Our target resolution time is 30 days.                 | PM, EM, or QEM of that product group, based on work type |
| `~"priority::2"` | High   | We will address this soon and will provide capacity from our team for it in the next few releases. This will likely get resolved in 60-90 days. | PM, EM, or QEM of that product group, based on work type |
| `~"priority::3"` | Medium | We want to address this but may have other higher priority items. This will likely get resolved in 90-120 days.                               | PM, EM, or QEM of that product group, based on work type |
| `~"priority::4"` | Low    | We don't have visibility when this will be addressed. No timeline designated.                                          | PM, EM, or QEM of that product group, based on work type |

## Severity

If you need help estimating severity, reach out in the `#s_developer_experience` channel.

Note: These severity definitions apply to issues only. Please see [Severity Levels section](/handbook/engineering/infrastructure/incident-management/#severities) of the [Incident Management page](/handbook/engineering/infrastructure/incident-management/) for details on incident severity.

[Severity labels](https://docs.gitlab.com/ee/development/labels/index.html#severity-labels) help us determine urgency and clearly communicate the impact of a `~"type::bug"` on users. There can be multiple categories of a `~"type::bug"`.

The presence of bug category labels `~"bug::availability"`, `~"bug::performance"`, `~"bug::vulnerability"`, and `~UX` denotes to use the severity definition in that category. When a `~"type::bug"` correspond to multiple categories, the severity to apply should be the higher, for example, if an issue has a `~"severity::2"` for `~"bug::availability"` and a `~"severity::1"` for `~"bug::performance"` then the severity assigned to the issue should be `~"severity::1"`.

Once you've determined a severity for an issue add a note that explains in summary why you selected the severity you did. This will help future team members understand your rationale so they will know how to proceed with acting upon the issue.

| Type of `~"type::bug"`                                                                 | `~"severity::1"`: Blocker                                                                                                                              | `~"severity::2"`: Critical                                                                                                                             | `~"severity::3"`: Major                                                                                                                                                | `~"severity::4"`: Low                                                                                                                                  | Triage DRI                                                                                                                  |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| General bugs                                                                           | Broken feature with no workaround or any data-loss.                                                                                                    | Broken feature with an unacceptably complex workaround.                                                                                                | Broken feature with a workaround.                                                                                                                                      | Functionality is inconvenient.                                                                                                                         | SET or [EM](/handbook/engineering/management/) for that product group.                                                      |
| `~"bug::performance"` Response time <br> (API/Web/Git)[^1]                             | Above 9000ms to timing out                                                                                                                             | Between 2000ms and 9000ms                                                                                                                              | Between 1000ms and 2000ms                                                                                                                                              | Between 200ms and 1000ms                                                                                                                               | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` Browser Rendering <br> ([LCP](https://web.dev/articles/lcp))[^2] | Above 9000ms to timing out                                                                                                                             | Between 4000ms and 9000ms                                                                                                                              | Between 3000ms and 4000ms                                                                                                                                              | Between 3000ms and 2500ms                                                                                                                              | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~"bug::performance"` Browser Rendering <br> ([TBT](https://web.dev/articles/tbt))[^2] | Above 9000ms to timing out                                                                                                                             | Between 2000ms and 9000ms                                                                                                                              | Between 1000ms and 2000ms                                                                                                                                              | Between 300ms and 1000ms                                                                                                                               | [Performance Enablement group](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) |
| `~bug::ux` User experience problem [&sup3;](#ux)                                       | "I can't figure this out." Users are blocked and/or likely to make risky errors due to poor usability, and are likely to ask for support.              | "I can figure out why this is happening, but it's really painful to solve." Users are significantly delayed by the available workaround.               | "This still works, but I have to make small changes to my process." Users are self sufficient in completing the task with the workaround, but may be somewhat delayed. | "There is a small inconvenience or inconsistency." Usability isn't ideal or there is a small cosmetic issue.                                           | [Product Designers](/handbook/product/ux/product-design/) of that Product group                                             |
| `~"bug::availability"` of GitLab SaaS                                                  | See [Availability section](#availability)                                                                                                              | See [Availability section](#availability)                                                                                                              | See [Availability section](#availability)                                                                                                                              | See [Availability section](#availability)                                                                                                              |                                                                                                                             |
| `~"bug::vulnerability"` Security Vulnerability                                         | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)                                                | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)                                                | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)                                                                | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)                                                | AppSec team                                                                                                                 |
| Global Search                                                                          | See [Search Prioritization](/handbook/engineering/development/dev/foundations/search/#severity-labels-for-search-issues-advanced-search-global-search) | See [Search Prioritization](/handbook/engineering/development/dev/foundations/search/#severity-labels-for-search-issues-advanced-search-global-search) | See [Search Prioritization](/handbook/engineering/development/dev/foundations/search/#severity-labels-for-search-issues-advanced-search-global-search)                 | See [Search Prioritization](/handbook/engineering/development/dev/foundations/search/#severity-labels-for-search-issues-advanced-search-global-search) |                                                                                                                             |
| `~test` Bugs blocking end-to-end test execution                                        | See [Blocked tests section](#blocked-tests)                                                                                                            | See [Blocked tests section](#blocked-tests)                                                                                                            | See [Blocked tests section](#blocked-tests)                                                                                                                            | See [Blocked tests section](#blocked-tests)                                                                                                            | [Developer Experience stage](/handbook/engineering/infrastructure-platforms/developer-experience/)                          |
| `~GitLab.com Resource Saturation` Capacity planning warnings                           | Mean forecast shows Hard SLO breach within 3 months.                                                                                                   |                                                                                                                                                        |                                                                                                                                                                        |                                                                                                                                                        | Scalability Engineering Manager (who will hand over to EM that owns the resource)                                           |

### Severity SLOs

The severity label also helps us define a completion time for issues with the following labels:

- `~"type::bug"`
- `~"infradev"`

This indicates the expected timeline & urgency which is used to measure our SLO targets.

| **Severity**   |  `~infradev` SLO | `~"type::bug"` resolution SLO | `~"GitLab.com Resource Saturation"` resolution SLO | Security `~vulnerability` SLO |
|----------------|---------|--------------------------------------------------------------------------------| ----|-----|
| `~"severity::1"` | 1 week  | The current release + next available deployment to GitLab.com (within 30 days) | Within 2 months | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) |
| `~"severity::2"` | 30 days | The next release (60 days)                                                   |  | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)  |
| `~"severity::3"` | 60 days | Within the next 3 releases (approx one quarter or 90 days) |  | See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/) |
| `~"severity::4"` | 90 days | Anything outside the next 3 releases (more than one quarter or 120 days).    |  |  See [Vulnerability Remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/)  |

#### Examples of severity levels

If a issue seems to fall between two severity labels, assign it to the higher severity label.

- Example(s) of `~"severity::1"`
  - Data corruption/loss.
  - Security breach.
  - Unable to create an issue or merge request.
  - Unable to add a comment or thread to the issue or merge request.
  - An error message displays (that looks like a blocker) when the message should instead be informational.
  - Unclear instructions in the UI that lead to irreversible changes.
- Example(s) of `~"severity::2"`
  - Cannot submit changes through the web IDE, but the command line works.
  - A status widget on the merge request page is not working, but information can be seen in the test pipeline page.
  - A workaround is available but it requires the use of the [Rails console](https://docs.gitlab.com/ee/administration/operations/rails_console.html), making it unacceptably complex.
- Example(s) of `~"severity::3"`
  - Can create merge requests only from the Merge Requests list view, not from an Issue page.
- Example(s) of `~"severity::4"`
  - Incorrect colors.
  - Misalignment.

## Re-evaluating closed issues

As the triager of an issue you are responsible for adjusting your decision based on additional information that surfaces later.
To do that, track subsequent activity on issues that you have closed and adjust your decision as needed.

## Availability

Issues with `~"bug::availability"` label directly impacts the availability of GitLab.com SaaS. It is considered as another category of `~"type::bug"`.

For the purposes of [Incident Management](/handbook/engineering/infrastructure/incident-management/), incident issue severities are chosen based on the `availability` severity matrix below.

We categorize these issues based on the impact to GitLab.com's customer business goal and day to day workflow.

The prioritization scheme adheres to our [product prioritization](/handbook/product/product-processes/#prioritization) where security and availability work are prioritized over feature velocity.

The presence of these severity labels modifies the standard severity labels(`~"severity::1"`, `~"severity::2"`, `~"severity::3"`, `~"severity::4"`) by primarily taking into account the impact to users. The severity of these issues may change depending on the re-analysis of the impact to GitLab.com users.

| Severity | Availability impact | Time to mitigate (TTM)(1) | Time to resolve (TTR)(2) | Minimum priority |
|-|-|-|-|-|
| `~"severity::1"` | Problem on GitLab.com blocking the typical user's workflow<br/><br/>Impacts 20% or more of users without an available workaround<br/><br/>**AND/OR**<br/><br/>Any roadblock that puts the [guaranteed self-managed release date](/handbook/engineering/releases/#timelines) at risk (use ~backstage label)<br /><br/>**AND/OR**<br/><br/>Any data loss directly impacting customers | Within 8 hrs | Within 48 hrs | `~"priority::1"` |
| `~"severity::2"` | Problem on GitLab.com blocking the typical user's workflow<br/><br/>Impacts 20% or more of users, but a reasonable workaround is available.<br/><br/>Impacts between 5%-20% of users without an available workaround | Within 24 hrs | Within 7 days |  `~"priority::1"` |
| `~"severity::3"` | Broad impact on GitLab.com and minor inconvenience to typical user's workflow. No workaround needed.<br/><br/>Impacts up to 5% of users | Within 72 hrs | Within 30 days | `~"priority::2"` |
| `~"severity::4"` | Minimal impact on GitLab.com typical user's workflow to less than 5% of users <br/><br/>May also include incidents with no impact, but with importance to resolve to prevent future risk| Within 7 days | Within 60 days | `~"priority::3"` |

(1) - Mitigation uses non-standard work processes, eg. hot-patching, critical code and configuration changes. Owned by Infrastructure department, leveraging available escalation processes (dev-escalation and similar)

(2) - Resolution uses standard work processes, eg. code review. Scheduling is owned by the Product department, within the defined SLO targets.

### Availability prioritization

The priority of an availability issue is tied to severity in the following manner:

| Issue with the labels  | Allowed priorities | **Not-allowed priorities** |
|-|-|-|
| `~"bug::availability"` `~"severity::1"`  | `~"priority::1"` only | `~"priority::2"`, `~"priority::3"`, and `~"priority::4"` |
| `~"bug::availability"` `~"severity::2"`  | `~"priority::1"` only | `~"priority::2"`, `~"priority::3"`, and `~"priority::4"` |
| `~"bug::availability"` `~"severity::3"`  | `~"priority::2"` as baseline, `~"priority::1"` allowed | `~"priority::3"`, and `~"priority::4"` |
| `~"bug::availability"` `~"severity::4"`  | `~"priority::3"` as baseline, `~"priority::2"` and `~"priority::1"` allowed | `~"priority::4"` |

### Merge requests experience

The merge request (MR) experience is the core of our product. Due to many teams contributing to the MR workflow components, it has become a disjointed experience.

The overlapping is largely seen in the following areas: Merge Request Widgets, Mergeability Checks, MWPS and Merge Trains.

As part of the analysis in the [Transient Bug working group](/handbook/company/working-groups/transient-bugs/), we have discovered that the top most affected product areas are:

1. `create::code review`
1. `verify::continuous integration`
1. `create::source code` (tied)
1. `plan::project management` (tied)

These product groups also have a high sensitivity to GMAU. This product groups will benefit from a heightened awareness on bugs overlapping with Merge Request functionality.

#### Merge requests experience prioritization

We need an elevated sense of action in this area. If a bug is related to the merge request experience it should have the labels `~UX` `~merge requests`.
Priority is tied to severity in the following manner:

| MR UX bug severity | Allowed priorities | **Not-allowed priorities** |
|-|-|-|
| `~"severity::1"` | `~"priority::1"` only | `~"priority::2"`, `~"priority::3"` and `~"priority::4"` |
| `~"severity::2"` | `~"priority::1"` only | `~"priority::2"`, `~"priority::3"` and `~"priority::4"` |
| `~"severity::3"` | `~"priority::1"` or `~"priority::2"` | `~"priority::3"` and `~"priority::4"` |
| `~"severity::4"` | `~"priority::1"` or `~"priority::2"` or `~"priority::3"` | `~"priority::4"` |

### Blocked tests

End-to-end tests that don't run lead to blind spots that can cause unforeseen availability issues.
We must ensure coverage is stable and active by quickly resolving issues that cause quarantined end-to-end tests.

#### Blocked tests prioritization

To promote awareness of bugs blocking end-to-end test execution, newly opened ~test ~"type::bug" issues will be announced in several Slack channels:

- All newly opened bugs blocking end-to-end test execution should be announced in [#quality](https://gitlab.slack.com/archives/C3JJET4Q6) channel.
- A newly opened bug blocking end-to-end test execution that is a product bug should also be announced in [#development](https://gitlab.slack.com/archives/C02PF508L) and [#vp-development](https://gitlab.slack.com/archives/CRC0B18UX) channels with the appropriate EM and PM tagged.

Priority is tied to severity in the following manner:

| Type of test blocked | Bug severity | Allowed priorities | **Not-allowed priorities** |
|-|-|-|-|
| Smoke end-to-end test | `~"severity::1"` | `~"priority::1"` only | `~"priority::2"`, `~"priority::3"` and `~"priority::4"` |
| Non-smoke end-to-end test | `~"severity::2"` | `~"priority::2"` as baseline, `~"priority::1"` allowed | `~"priority::3"` and `~"priority::4"` |

### Performance

**Improving performance**: It may not be possible to reach the intended response time in one iteration.
We encourage performance improvements to be broken down. Improve where we can and then re-evaluate the next appropriate level of severity & priority based on the new response time.

[^1]: Our current response time targets for APIs, Web Controllers and Git calls are based on the TTFB P90 results of the [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance) being run against a [200 RPS / 10k User reference architecture class environment](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html) under lab like conditions. This run happens nightly and results are outputted to the [Reference Architecture project wiki](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/Latest/10k). These targets are owned by the [GitLab Delivery: Framework](/handbook/engineering/infrastructure-platforms/gitlab-delivery/framework/) team.

[^2]: Our current Browser Rendering targets for [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) and [Total Blocking Time (TBT)](https://web.dev/articles/tbt) are based on results of [SiteSpeed](https://gitlab.com/gitlab-org/quality/performance-sitespeed) being run against a [20 RPS / 1k User reference architecture class environment](https://docs.gitlab.com/ee/administration/reference_architectures/1k_users.html) under lab like conditions. This run happens nightly and results are outputted to the [wiki on the GBPT project](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/wikis/Benchmarks/SiteSpeed/1k). These targets are owned by the [Developer Experience: Performance Enablement](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/) team.

### UX

#### UX bugs

Some UX-related issues are known to impact our [System Usability Scale (SUS) score](/handbook/product/ux/performance-indicators/system-usability-scale/), which is a focus in our [three-year strategy](/handbook/company/strategy/#three-year-strategy). We particularily target issues *with* the label `bug::ux`. These issues will have a severity label applied and they follow the [severity](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) and [SLOs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos) for `type::bug` issues.

#### Deferred UX

Issues labeled as `~Deferred UX` also have a severity (and additionally [priority](#priority)) label applied *without* an accompanying `~"type::bug"` label. [Deferred UX](/handbook/engineering/workflow/#deferred-ux) results from the decision to release a user-facing feature that needs refinement, with the intention to improve it in subsequent iterations. Because it is an intentional decision, `~Deferred UX` should not have a severity higher than `~"severity::3"`, because [MVCs](/handbook/values/#minimal-valuable-change-mvc) should not intentionally have obvious bugs or significant usability problems. If you find yourself creating a Deferred UX issue that is higher than `~"severity::3"`, please talk to your stage group team about reincorporating that issue into the MVC.

### Transient bugs

A transient bug is unexpected, unintended behavior that does not always occur in response to the same action.

Transient bugs give users conflicting impressions about what is happening when they take action, may not consistently occur, and last for a short period of time. While these bugs may not block a user's workflow and are usually resolved by a total page refresh, they are detrimental to the user experience and can build a lack of trust in the product. Users can become unsure about whether the data they are seeing is stale, fresh, or has even updated after they took an action. Examples of transient behaviors include:

- Clicking the "Apply Suggestion" button and the page not getting updated with the applied suggestion
- Updating the milestone of an issue by using a quick action, but the sidebar not updating to reflect the new milestone
- Merging a merge request and the merge request page still showing as "Open"

In order to define an issue as a "transient bug," use the `~"bug::transient"` label

### Infradev Issues

An issue may have an `infradev` label attached to it, which means it subscribes to a dedicated process to related to SaaS availability and reliability, as detailed in the [Infradev Engineering Workflow](/handbook/engineering/workflow/#infradev). These issues follow the established [severity SLOs for bugs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos).

### Limit Related Bugs

GitLab, like most large applications, enforces limits within certain features. The absences of limits can impact security, performance, and availability. For this reason issues related to limits are considered `~"type::bug"` in the `~"bug::availability"` sub-category.

In order to define an issue as related to limits add the labels `~"availability::limit"` and `~"bug::availability"`.

Severity should be assessed using the following table:

| Severity | Availability impact |
|-|-|
| `~"severity::1"` | Absence of this limit enables a single user to negatively impact availablity of GitLab |
| `~"severity::2"` | Absence of this limit poses a risk to reduced availability of GitLab |
| `~"severity::3"` | Absence of this limit has a negative impact on ability to manage cost, performance, or availability |
| `~"severity::4"` | A limit could be applied, but it's absences does not pose availability risk |

These issues follow the established [severity SLOs for bugs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos).

## Triaging Issues

Initial triage involves (at a minimum) labelling an issue appropriately, so un-triaged issues can be discovered by searching for issues without any labels.

Follow one of these links:

- [GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)
- [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)
- [GitLab.com Support Tracker](https://gitlab.com/gitlab-com/support-forum/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=None&assignee_id=None)

Pick an issue, with preference given to the oldest in the list, and evaluate it with a critical eye, bearing the [issue triage practices](#issue-triage-practices) below in mind. Some questions to ask yourself:

- Do you understand what the issue is describing?
- What labels apply? Particularly consider [type, stage and severity](https://docs.gitlab.com/ee/development/labels/index.html) labels.
- How critical does it seem? Does it need to be escalated to a product or engineering manager, or to the security team?
- Would the `~"bug::vulnerability"` label be appropriate?
- Should it be made confidential? It's usually the case for `~"bug::vulnerability"` issues or
  issues that contain private information.

Apply each label that seems appropriate. Issues with a security impact should be treated specially - see the [security disclosure process](/handbook/support/channels/#security-disclosures).

If the issue seems unclear - you aren't sure which labels to apply - ask the requester to clarify matters for you.
Keep our [user communication guidelines](/handbook/communication/#user-communication-guidelines) in mind at all times, and commit to keeping up the conversation until you have enough information to complete triage.

Consider whether the issue is still valid. Especially for older issues, a `~"type::bug"` may have been fixed since it was reported, or a `~"type::feature"` may have already been implemented.

Be sure to check cross-reference notes from other issues or merge requests, they are a great source of information!
For instance, by looking at a cross-referenced merge request, you could see a "Picked into `8-13-stable`, will go into `8.13.6`." which would mean that the issue is fixed since the version `8.13.6`.

If the issue meets the requirements, it may be appropriate to make a [scheduling request](/handbook/engineering/workflow/#scheduling-issues) - use your judgement!

You're done! The issue has all appropriate labels, and may now be in the backlog, closed, awaiting scheduling, or awaiting feedback from the requestor. Pick another, if you've got the time.

## Issue Triage Practices

We're enforcing some of the policies automatically in
[triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops), using the
[`@gitlab-bot`](https://gitlab.com/gitlab-bot) user.
For more information about the automated triage, please read the
[Triage Operations](/handbook/engineering/infrastructure/engineering-productivity/triage-operations/)

That said, we can't automate everything. In this section we'll describe some of
the practices we're doing manually.

### Shared responsibility issues

From time to time you may encounter issues for which it is difficult to pick a group or stage that should be responsible. It is likely that these issues address what is called [Shared Responsibility Functionality](/handbook/product/categories/#shared-responsibility-functionality) of the product.

The approach for these is to use a decentralized triage process. The triage is not centralized in a single report or list, and it does not fall to one individual or group to have the responsibility to review those issues. This helps with scaling our triage operations to address a large number of issues that may fall into this shared responsibility category on an ongoing basis rather than in a recurring scheduled event.

The goal is to empower leadership at the group level (i.e. Product Manager and/or Engineering Manager) to make decisions on who, when and how these issues should be addressed. Higher-level management individuals and groups act as a backup to address escalations and make decisions when competing priorities make it difficult to decide on a course of action.

#### Initial triage

If you are triaging one of these issues as a GitLab engineer or as a quality department manager, or if you are the author of the issue, please make your best effort to assign a group label to the issue as soon as possible after creation. You don't have to get it perfect, but just make a conscious effort to identify the group that is the best one set up for success to work on the issue.

You can ask yourself these questions when picking a group:

- Does the group directly lists this area in their product categories?
- Does the group works with the underlying technologies of the issue at hand?
- Have they done similar work in the past?
- Are they a foundational group that regularly engages in similar cross-cutting features?
- Can you identify the affected file and use git blame to see who was the author of the last change?
- Can you identify the Code Owners of the file?

To help with initially narrowing down the list of possible groups, you may review the [Product Categories](/handbook/product/categories/) page or the [Stage Groups Ownership Index](https://gitlab-com.gitlab.io/gl-infra/platform/stage-groups-index/) page.

In any case, you should attempt to understand the nature of the issue by asking follow-up questions to the author if necessary, and then map the requirements to the group that best matches the skills or expertise required.

#### Secondary triage

Secondary triage happens when the issue has already been assigned to a group and now someone within the group (typically the PM or EM) is assessing the issue for prioritization and/or estimation. If you are the one doing this triage you may take one of the following courses of action:

1. If you determine that it falls squarely within your group's categories, then follow your own internal triage procedure.
1. If you think it falls squarely into another group's product categories, then ping the EM or PM of that other group async in a comment thread on the issue. Explain your reasoning as to why you think it falls under their purview and ask them to take ownership. Please ask and **let them be the one to update** the label when they have seen your comment and agreed that they are better suited to take on the issue.
1. If you think the issue falls into the shared responsibility category, first consider carefully having your team be the one contributing to the issue and owning it to see it through to completion. However, if you think your team does not have the skill or can not ramp up the necessary knowledge and skills to contribute to the issue in a timely manner, then try to identify other groups who might be better suited (or with whom your group can collaborate to deliver the functionality together). At that point, engage with them in a conversation and coordinate further triage of the issue until it has a clear owner. Alternatively, through this triage process you may collectively decide that the issue is not worth pursuing (e.g. perhaps considering its value vs effort). In this case, make sure to close the issue while providing a clear rationale for the decision.

As you work through the triage, exercise your judgement to decide when it is time to escalate issues to a higher level (i.e. senior management, directors or above) if you and your EM/PM peers can't agree on the value, severity, priority or group purview of the issue. For now, the method to escalate is flexible and you can choose the right communication channel and modality for the situation.

As the DRI you should consider take additional steps to ensure the continued support of the affected area. This may involve putting forward proposals for the creation of new platform groups that can take the ongoing responsibility and technical strategy for the components in question. This of course does not preclude the need to take immediate action on the issue assigned to your group.

If as a result of the triage process a group is identified as qualified and willing to take ownership on a permanent basis, product and engineering leaders should officially document the type of ownership model and the team in the [shared services components](/handbook/engineering/development/#shared-services-and-components) section of the Development handbook. Multiple groups may permanently share ownership of the same component if deemed appropriate.

It is important to keep in mind that throughout this process, as a leader in your group, you are deemed the initial Directly Responsible Individual ([DRI](/handbook/people-group/directly-responsible-individuals/)) until the issue is resolved or someone else agrees to take over. Simply removing your group label without further triage conversations with other groups is not an acceptable or helpful action to take in this process. This aligns with our value of [Results: global optimization](/handbook/values/#global-optimization).

### Outdated issues

For issues that haven't been updated in the last 3 months the "Awaiting Feedback" label should be added to the issue. After 14 days, if no response has been made by anyone on the issue, the issue should be closed. This is a slightly modified version of the Rails Core policy on outdated issues.

If they respond at any point in the future, the issue can be considered for reopening. If we can't confirm an issue still exists in recent versions of GitLab, we're just adding noise to the issue tracker.

### Duplicates

To find duplicates:

- Open the issue tracker for the project the issue is for.
- Enter relevant keywords from the issue.
- Scan through the first page of the result list.
- Check both open and closed issues.

Use the issue with the better title, description, or more comments and positive reactions as the canonical version. If you can't decide, keep the earlier issue.

#### Support issue message

If the issue is really a support request for help, you can use the `Issue triage - support question` [comment template](https://docs.gitlab.com/ee/user/profile/comment_templates).

#### Duplicate issue message

If you find duplicates, you can post this message:

```md
Hey {{author}}! Thanks for submitting this issue. It looks like a duplicate of {{issue}}. I'm marking your issue as a duplicate and close it.
Please add your thoughts and feedback on {{issue}}. Don't forget to upvote feature proposals.

/duplicate {{issue}}
```

Don't make any forward looking statements around milestone targets that the duplicate issue may be assigned.

### Lean toward closing

We simply can't satisfy everyone. We need to balance pleasing users as much as possible with keeping the project maintainable.

- If the issue is a bug report without reproduction steps or version information, close the issue and ask the reporter to provide more information.
- If we're definitely not going to add a feature/change, say so and close the issue.

### Label issues as they come in

When an issue comes in, it should be triaged and labeled. Issues without labels are harder to find and often get lost.

Be careful with severity labels. Underestimating severity can make a problem worse by suggesting resolution can wait longer than it should. Review available
[Severity](#severity) labels. If you are not certain of the right label for a bug, it is OK
to overestimate the severity. But do get confirmation from a [domain expert](/handbook/engineering/workflow/code-review/#domain-experts).

### Take ownership of issues you've opened

Sort by "Author: your username" and close any issues which you know have been fixed or have become irrelevant for other reasons. Label them if they're not labeled already.

### Product feedback issues

Some issues may not fall into the [type labels](https://docs.gitlab.com/ee/development/labels/index.html#type-labels), but they contain useful feedback on how GitLab features are used.
These issues should be mentioned to the product manager and labeled as `~"Product Feedback"` in addition to the group, category and stage labels.
<https://gitlab.com/gitlab-org/gitlab/-/issues/324770> is an example of a Product Feedback issue.

### Questions/support issues

If it's a question, or something vague that can't be addressed by the development
team for whatever reason, close it and direct them to the relevant support
resources we have (e.g. <https://about.gitlab.com/get-help/>, our Discourse forum or emailing Support).

### New labels

If you notice a common pattern amongst various issues (e.g. a new feature that
doesn't have a dedicated label yet), suggest adding a new label in Slack or a new issue.

### Reproducing issues

If possible, ask the reporter to reproduce the issue in a public project
on GitLab.com. You can also try to do so yourself in the
[issue-reproduce group](https://gitlab.com/issue-reproduce). You can ask
any owner of that group for access.

## Notes

The original issue about these policies is [#17693](https://gitlab.com/gitlab-org/gitlab-ce/issues/17693). We'll be working to improve the situation from within GitLab itself as time goes on.

The following projects, resources, and blog posts were very helpful in crafting these policies:

- [CodeTriage](https://www.codetriage.com/)
- [How to be an open source gardener](https://steveklabnik.com/writing/how-to-be-an-open-source-gardener)
- [Managing the Deluge of Atom Issues](https://web.archive.org/web/20221129082058/https://blog.atom.io/2016/04/19/managing-the-deluge-of-atom-issues.html)
- [Handling Large OSS Projects Defensively](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)
- [My condolences, you're now the maintainer of a popular open source project](https://danielbachhuber.com/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/)
