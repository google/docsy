---
title: Anti-Abuse Group
description: "The Anti-Abuse group creates controls to prevent abuse of the GitLab product"
---

## Vision

Our goal is to provide Insider Threat features for your applications as well as GitLab itself. We will help proactively identify malicious activity, accidental risk, compromised user accounts or infrastructure components, anomalous use of the GitLab platform, and various high-risk behaviors where actionable remediation steps are possible.

## Direction

- [Instance Resiliency](https://about.gitlab.com/direction/govern/anti-abuse/instance_resiliency/)
- [Insider threat](https://about.gitlab.com/direction/govern/anti-abuse/insider_threat/)

## Planning

Our [planning issues](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=Planning%20Issue) are the SSOT of what we're working on now, and what we're working on next. We also have an [issue board](https://gitlab.com/groups/gitlab-org/-/boards/4292845?not%5Bmilestone_title%5D=Backlog&label_name[]=group%3A%3Aanti-abuse&group_by=epic) to view these from a `workflow` perspective. To maintain the issue lists leadership (EM+PM) will keep the lists triaged.

### Workflow

We follow the same [workflow pattern](./authorization.md#workflow) as our friends in Govern::Authorization.

## Iteration

When planning how to construct our [MVC](/handbook/values/#minimal-viable-change-mvc), we need to be aware of the [tradeoffs of slicing MR’s vertically vs horizontally](/handbook/engineering/workflow/iteration/#tradeoffs-between-horizontal-and-vertical-slicing). Reducing scope for each iteration is encouraged.

As requirements can shift, and complexity can increase when uncovering challenging areas in the codebase, we strive to keep issue requirements updated for clarity.

We follow the [iteration process](/handbook/engineering/development/principles/#iteration) outlined by the Engineering function.

## Weekly async issue updates

We use the same [weekly async issue template](./authorization.md#weekly-async-issue-updates) as our friends in Govern::Authorization.

## Group members

 [Anti-abuse group](https://gitlab.com/groups/gitlab-org/govern/authorization/) can be `@` mentioned on GitLab with `@gitlab-org/modelops/anti-abuse`.

The following people are permanent members of the group:

{{< team-by-manager-slug manager="jayswain" team="(?i)Engineer(.*)Govern:Anti-abuse" >}}

## Team Meetings

Our group holds synchronous meetings to gain additional clarity and alignment on our async discussions. We aspire to [record](/handbook/tools-and-tips/zoom/) all of our meetings as our team members are spread across several time zones and often cannot attend at the scheduled time.

We have a weekly team sync meeting with rotating [AMER](https://drive.google.com/drive/folders/1ZPjzqSaMslSQXe7ZA0IHK4gbCTv25MYC?usp=sharing) and [AMER/APAC](https://drive.google.com/drive/folders/1wLdWWi3f6Aho6E2m4Xbhv1Nuoy_ZSC1e?usp=sharing) friendly time slots: Tues 18:30 UTC and Weds 00:00 UTC.

## Collaboration

You are encouraged to work as closely as needed with our [stable counterparts](/handbook/product/categories/#govern-stage).

Other teams that we might collaborate with include but are not limited to:

- [Govern:Authentication and Authorization](/handbook/engineering/development/sec/govern/authentication-and-authorization/)
- [Growth:Acquisition and Activation](/handbook/marketing/growth/engineering/)
- [Fulfillment:Fulfillment Platform](/handbook/engineering/development/fulfillment/fulfillment-platform/#team-members)

Here are some examples of when to engage with your counterpart:

- [Seeking a Govern:Authentication and Authorization review when making a significant change to the registration flow](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/99193#note_1120182366)
- [Seeking a Fulfillment review when making a change involving Zuora](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/96994#note_1089045221)
- Discussing in `#f_signup_registration` (Slack, GitLab internal) when making a change that affects how our users signup or login

### Abuse Maintenance

The Anti-abuse team works closely with [Trust and Safety](/handbook/security/security-operations/trustandsafety/) to mitigate abuse on our platform. It's not uncommon for Trust and safety to [request features or maintenance](https://gitlab.com/gitlab-org/modelops/anti-abuse/team-tasks/-/issues/new?issuable_template=abuse_maintenance) from our team to assist their effort of mitigating abuse. Prioritized requests are organized in our [Abuse Maintenance epic](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Aanti-abuse&or%5Blabel_name%5D%5B%5D=workflow%3A%3Aready%20for%20development&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ain%20dev&or%5Blabel_name%5D%5B%5D=workflow%3A%3Ascheduling&epic_id=773187&first_page_size=20).

#### Pipeline Validation Service responsibility

[PVS](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service) is an internal service that belongs to the Anti-abuse team. It’s a combination of heuristic-based (text matching, etc) and behavior-based rules (duplicate builds, etc). The [Trust and Safety team](/handbook/security/security-operations/trustandsafety/) leverages this service the most, and acts as the customer for feature requests.

#### Heuristic rules

Due to the nature of cryptomining attacks, heuristics are going to change quickly and need to be implemented rapidly. Accordingly, T&S is invited to submit MR’s to PVS that are heuristic based, or alternatively [request these changes](https://gitlab.com/gitlab-org/modelops/anti-abuse/pipeline-validation-service/-/issues/new?issuable_template=pvs_miss) from the Anti-abuse team.

#### Behavior rules

Behavior rules are more slow to change and potentially cast a much wider net (vs a very targeted heuristic rule). Changes to behavior rules are expected to come from T&S, and implemented by the Anti-abuse team.

#### Severity and Priority

[Severity](/handbook/security/#severity-and-priority-labels-on-security-issues) and priority will be added on all issues/merge requests created by T&S so that Anti-abuse can act on them accordingly.

Priority will be based on impact and likelihood of the attacker returning.

#### Iteration

Anti-abuse will periodically review the accuracy of PVS alerts to see where there are opportunities to reduce the False Positive rate, without impacting the true positives, and Trust and Safety will help provide the required information to do this.

## Links and resources {#links}

- Our Slack channels
  - Govern:Authorization [#g_govern_anti-abuse](https://gitlab.enterprise.slack.com/archives/C03EH5HCLPR)

## Metrics

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="anti abuse" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="anti abuse" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="anti abuse" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="anti abuse" >}}
{{< /tableau >}}
