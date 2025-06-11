---
title: "Static Analysis Group"
---

## Static Analysis

The Static Analysis group at GitLab is charged with developing the [Static Application Security Testing (SAST)](https://about.gitlab.com/direction/application_security_testing/static-analysis/sast/) feature category for customer software repositories.

## Links

- Slack channel: [`#g_ast-static-analysis`](https://gitlab.enterprise.slack.com/archives/CLA54H7PY)
- Team members: [Static Analysis group](/handbook/product/categories/#static-analysis-group)

## How We Work

The Static Analysis group is largely aligned with GitLab's [Product Development Flow](/handbook/product-development/product-development-flow/),
however there are some notable differences in how we seek to deliver software. The engineering team
predominantly concerns itself with the delivery of software, which is the portion of the workflow
states where we deviate the most. What follows is how we manage the handoff from product management
to engineering to deliver software.

Issues worked by this team can span analyzers, vendored templates, CI/CD components, and GitLab's Rails monolith.

### Planning

The Static Analysis group works on a monthly planning cadence, much like all groups across the
company. We are product-driven and work in response to the priorities identified by Product
Management.

As a guideline, the team capacity is allocated to:

- 60% Features (Product priorities)
- 40% Maintenance and bugs (Engineering priorities)

We use planning issues to determine what our team is going to be working on during each milestone. Planning issues are the single-sourch-of-truth from which engineers do work. If an issue is not in the planning issue, it's unlikely that we're working on it.

[Planning issues for 17.x](https://gitlab.com/groups/gitlab-org/-/epics/15743).

This link is also available on our Slack channel bookmarks.

#### How we interact with planning issues

- Engineering Manager adds to the planning issue:
  1. Feature epics and standalone issues based on Product priorities.
  2. Maintenance epics, standalone issues, and bugs based on Engineering priorities.
  3. The engineering allocation for the milestone; i.e.: DRIs for epics, feature vs maintenance
     allocation, and reaction rotation.
- Engineering Manager mentions engineers requesting that they:
  1. Review their allocation.
  2. Commit to deliverables by setting the `~Deliverable` label to chosen issues.
  3. Update labels, milestone and health status on selected issues.
- Engineering Manager mentions Product manager for review.

### Static Analysis Shared Calendar

The [Static Analysis Shared Calendar](https://calendar.google.com/calendar/embed?src=c_fb285ec72974733f23fd84f70397732e68f7db9abe706c5613f199b6202e379a%40group.calendar.google.com) is used to make sure PTO events are visible to everyone on the team.

Below are the steps to add the calendar to Time Off by Deel:

- In Slack, jump to **Time Off by Deel** > **Home**, click on the dropdown **Your Events**, and select **Calendar Sync**.
- Under **Additional calendars to include?**, click on **Add calendar**.
- Add the following calendar ID: `c_fb285ec72974733f23fd84f70397732e68f7db9abe706c5613f199b6202e379a@group.calendar.google.com`.
- Great job! 🎉 Your PTO events will be synced to Static Anaylsis Shared Calendar from now on. 🚀

### Observability

For GitLab.com, we monitor performance of our code within the Rails application, metrics around our CI build performance, and traffic to our container registries. These dashboards are accessible on the [Monitoring](/handbook/engineering/monitoring) page.

Observability is a critical component to any high-availability system and it is recommended for each team member to review each dashboard and ensure they are familiar with their usability and trends.

- [Static Analysis Group Dashboard](https://dashboards.gitlab.net/d/stage-groups-static_analysis/stage-groups-static-analysis-group-dashboard)
- [SAST Analyzer Registry Traffic](https://log.gprd.gitlab.net/app/dashboards#/view/84aa3f10-89d2-11ec-9dd2-93d354bef8e7?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow)))
- [SAST Engineering Kibana Dashboard](https://log.gprd.gitlab.net/app/dashboards#/view/1eebd010-9a73-11ec-9dd2-93d354bef8e7)

#### Runbooks

The process for monitoring, responding to, and mitigating incidents is documented within our [Static Analysis Runbooks](runbooks/) page.

### Software delivery in Static Analysis

We follow the AST stage [Planning](/handbook/engineering/development/sec/secure/planning) process.

#### How we commit to delivering work in a milestone

In GitLab, the `~Deliverable` label is referred to as a [release scoping label](https://docs.gitlab.com/ee/development/labels/index.html#release-scoping-labels). Applying this label
represents a commitment from the engineering team to realize the work required in the issue within the milestone to which the issue is assigned. This means we decide whether we can commit to
delivering work once an issue is in the `workflow::ready for development` state.

The decision on when to use the `~Deliverable` label is made through answering the following questions.

- Given the issue's weight, are we reasonably confident there is enough time left in the milestone for the engineer to deliver the issue?
  - We currently assume that an issue with weight 9 can be delivered in a single milestone.
- Would the issue be achievable early in the next milestone if work began now?
  - If so, discuss with the Product Manager about the situation. Work can begin if the Product Manager agrees with the proposed timeline and would like to proceed.
  - Please make sure the milestone is updated before continuing with work.
- Is this the smallest, testable unit of work which adds value and cannot be further broken down without adding overhead?

The `~Deliverable` label is applied if the answer to the above questions are yes. The use of this label impacts the group's Say/Do ratio, making the Engineering Manager the directly responsible
individual for this label. However, engineers in Static Analysis are empowered to use their judgment about applying this label and proceeding if they believe the work is achievable. Please
have a conversation with the Engineering Manager if uncertain about how to proceed.

#### Code Review Process

The process for reviewing and maintainer code is documented within our [Static Analysis Group Code Review](/handbook/engineering/development/sec/secure/static-analysis/code_review/) page.

### Security Vulnerability Process

We are responsible to ensure that what we deliver is secure. This means that we dogfood GitLab's Security
features.

See the [vulnerability management process](/handbook/engineering/development/sec/secure/#vulnerability-management-process).

When creating an issue for a vulnerability, please make sure to follow
the [Engineering Security instructions](/handbook/security/engaging-with-security/#creating-new-security-issues).

#### SLO by Vulnerability Severity

When triaging `Unknown` vulnerabilities, they should be assigned a proper severity as a means to decide the
priority they should receive to be resolved. The corresponding priority is taken from [issue triage](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority).

| Target                     | Unknown | Critical     | High         | Medium       | Low          |
|----------------------------|:------:|:------------:|:------------:|:------------:|:------------:|
| Dismiss/Confirm Vuln       | 72h    | 72h          | 72h          | 1mo          | 1mo          |
| Confirmed Vuln is Resolved | N/A    | ~priority::1 | ~priority::2 | ~priority::3 | ~priority::4 |

#### Workstream Designation

The following is a description of the type of work and which workstream it flows through.

| Work | Responsible Workstream |
|---|---|
| Triage of new vulns | This should be done as a part of the MR review that introduces the vulns. |
| Triage of existing vulns | This is done by the main maintainer of each of our analyzers as defined in our [Release project's issue template](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb). |
| Resolution of Critical / High Vulns | These should be a Product-driven priority. |
| Resolution of Medium / Low Vulns | This is done by the main maintainer of each of our analyzers as defined in our [Release project's issue template](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb). |

As always, contributions are welcome from our community or the current MR coach in rotation.

#### False Positive Dismissal Process

The process for dismissing a vulnerability as a false positive is as follows:

- If it doesn't exist on the [Static Analysis Group Defined False Positives](/handbook/engineering/development/sec/secure/static-analysis/false_positives/) page, then write documentation describing the type of false positive and why we think it is classified as such.
- If the vulnerability relates to a specific code location (e.g. SAST), then open an MR with comments at each FP location that contain a link to the FP documentation.
- Dismiss vulnerability in the GitLab UI with a comment that contains:
  - A link to the FP documentation.
  - A link to the FP comment MR if it was created.

#### Vulnerability Issue Labels

When creating issues for vulnerability consider adding the following labels besides our normal labels:

- ~security
- ~"type::bug"

When there is a doubt about the severity/priority while creating the issue and severity/priority labels are
not added. Then [Appsec Escalation Engine](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/appsec-escalator#appsec-escalation-engine)
could be leveraged to initiate a discussion with the Appsec team.  This bot monitor issues that are labeled
~security and not ~test or ~"type::feature". If severity/priority labels are not present, then labels
security-sp-label-missing and security-triage-appsec will be added and this issue will be mentioned in the
\#sec-appsec Slack channel. Then, the appsec stable counterpart for the group or App sec team triage person
will pick up the issue and assign a severity as part of the appsec triage rotation.

### We Own What We Ship

The security analyzers we develop may rely heavily upon open source software.
This means we can be dramatically affected by changes in those software packages. We will check for updates to these packages once per [GitLab release](https://about.gitlab.com/releases/). New versions will be scrutinized for the following aspects:

- Breaking changes
- New, updated, or removed security rules
- Behavior changes
- Analyzer changes needed to use the new version
- Security vulnerabilities

An issue will be created and prioritized if a breaking change is discovered. Otherwise, dependency updates will be detailed in the relevant
analyzer's changelog and a new version will be released utilizing the change. This is a lot of work, most likely requiring several hours of
focused study to understand what is happening in the new version. As a result, dependency updates will be divided evenly and assigned to
Senior and Intermediate Backend Engineers, with the remainder going to the group's Staff Backend Engineer. Assignments will be managed
through our [Release project's issue template](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/scripts/templates/release_issue.md.erb).

The assigned backend engineer is the group's primary liaison with the dependency's open source community. Engineers are expected to contribute
back to those projects, especially if critical or high security findings are confirmed.

#### Testing for security vulnerabilities

We have a [dependencies group](https://gitlab.com/gitlab-org/security-products/dependencies) which contains mirrored copies of the OSS projects upon which we most rely. Prior to submitting an MR updating an analyzer to a new version of these projects, engineers are expected to do the following:

1. Find a release branch which matches the new version we wish to ship.
1. If one doesn't exist, create it from the corresponding tag.
1. Push the branch through a pipeline which executes all of our security products.
1. Please note, some of these projects have complicated builds. Auto DevOps works sometimes, but projects such as [spotbugs](https://gitlab.com/gitlab-org/security-products/dependencies/spotbugs) can require a custom CI configuration for our scans to be successful. Also, these projects include tests that can be noisy if not filtered out.
1. Evaluate any potential security vulnerabilities which are found.
1. Work with the relevant Open Source community to resolve any Critical or High severity findings.
1. GitLab has published [Secure Coding Guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html), which may be a useful resource to use when trying to solve identified risks.

We do not want to ship updated dependencies which have Critical and High severity vulnerabilities in them. If we find ourselves in this situation, we will
withhold updates to the dependency until the problems have been patched.

#### Go security fixes

At times we will need to update our analyzers because of security updates to golang itself. In this situation, we follow the [established release process](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#security-and-build-fixes-of-go).

#### Testing and validation

Our users expect us to provide them with a quality experience, no matter which open source or proprietary components we include in our analyzers.
They also expect our documentation to clearly outline the configurations we support so that they can make informed decisions about whether to adopt our tools for their needs.

Before we document that we support a configuration, we **do validate** that it works.
For example, before we list a certain type of file or build configuration as a supported feature, we must have checked it at least once, however minimally.

However, we **do not** independently reproduce all end-to-end **tests** for components we rely on.
Maintaining these tests independently would require unnecessary effort and would duplicate work that would be better contributed upstream if it's lacking.
Instead, we aim to build tests that cover basic configurations for smoke-testing and demonstration purposes.

We may choose to document supported configurations once they're validated, even if the test coverage is not yet complete.

### Unplanned work

In general, the Static Analysis group has two sources of unplanned work: community contributions and ~priority::1 bugs. We will reserve capacity each
release so we can respond quickly and efficiently. In both scenarios, we will route community contributions to the [engineer who "owns" the analyzer](#we-own-what-we-ship).

We do, however, own and contribute to projects beyond the analyzers shipped as part of GitLab's product. Where possible, unplanned work requiring
the attention of an engineer in Static Analysis will be routed according to that project's `CODEOWNERS` file. Otherwise, unplanned work will be
considered and handled on a case-by-base basis.

#### Support to customers and prospects

While we plan our work on a monthly basis, customers and customer-facing team members may need support on an unplanned basis.
We aim to support these requests quickly because they affect the success of our customers and our business.

Generally, we aim to provide an initial response and triage the question/report as quickly as is reasonable.
"Reasonable" means, for example, that team members are answering during their normal working hours and are continuing their normal work activities.
Whoever is available and can contribute to a solution is encouraged to make first contact with the questioner and ask any clarifying questions—remember, you can always tag in another group member later if you're unable to resolve the question.

The aim of the triage is to support other team members in moving forward; if development work is required to address the problem, it is not automatically a top priority for the group and should not automatically displace existing planned work.
If there is any question of whether a bug fix or improvement should be taken up immediately, the Engineering Manager and Product Manager should be alerted to facilitate a decision.

When a [Customer Success Escalation](/handbook/customer-success/csm/escalations/) is declared, the Engineering Manager and Product Manager should both be alerted, and an appropriate team member should be designated to deprioritize existing work and respond to the escalation as soon as possible.

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="static analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="static analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="static analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="static analysis" >}}
{{< /tableau >}}
