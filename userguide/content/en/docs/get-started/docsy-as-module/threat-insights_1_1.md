---
title: Govern, Threat Insights
description: "The Threat Insights group at GitLab is charged with developing solutions to enable customers to manage their security risks effectively and efficiently."
---

## Customer outcomes we are driving for at GitLab

As a developer it is imperative to know if you are introducing vulnerabilities as you merge into protected branches in addition to the default branch. In FY25, we will allow users to track vulnerabilities across multiple branches. If there is something a developer wants to remediate, but aren’t sure where to get started, they can use our features AI to learn more and get a suggestion for a fix.

As a security engineer, you want to know what vulnerabilities to work on first. Over the next year we will be adding key risk metrics so you can quickly triage and mitigate vulnerabilities that have the potential to be exploited.

Leadership wants to make sure their organization is mitigating risks and their security programs are effective. With enhancements to the Security Dashboards, leaders will have a place to get an overview and answer key questions about metrics, trends and vulnerabilities that need
to be addressed quickly.

## Top Priorities for FY25

**Enable users to identify risk and visualize trends** - We will be making enhancements to Security Dashboards at the project and group level.

**Estimate potential impact and likelihood of vulnerability exploitation** - Give users the ability to access risk directly in the vulnerability report through industry known risk scores like CVSS (Common Vulnerability Scoring System) and exploitability probability.

**Enable users to track vulnerabilities across multiple branches** - Allow users to track vulnerabilities outside the default branch.

**Offer guidance for users to get started with vulnerability remediation** - leverage the power of AI and security training to help developers understand and remediate vulnerabilities.

**Threat Insights features are reliable and perform at scale** - As we add more group and organization level features, we will be optimizing query performance and move forward with confidence that our database will scale and perform as we grow.

## Threat Insights Team Structure

The Threat Insights group is structured into three focused swimlanes that each approach work in [vertical slices](https://www.visual-paradigm.com/scrum/user-story-splitting-vertical-slice-vs-horizontal-slice/): Performance and Optimization, Projects, and AI. This subdivision is to provided bounded focus to each area: enabling us to progress on multiple fronts and reduce planning overhead.

### Stable Counterparts

The following members of other functional teams are our stable counterparts, and work across all swimlanes:

{{% stable-counterparts role="Threat Insights" other-manager-roles="Engineering Manager(.*)Govern:(.*)|Director of Engineering(.*)Govern" %}}

### [Performance and Optimization](https://about.gitlab.com/direction/govern/threat_insights/17_threat_insights_priorities.html#technical-debt-and-deprecations)

DRI: {{< member-by-gitlab "nmccorrison" >}}

{{< member-and-role-by-gitlab "bwill" "ghavenga" "minac" "wandering_person" "Quintasan" "subashis">}}

### [Projects](https://about.gitlab.com/direction/govern/threat_insights/17_threat_insights_priorities.html#vulnerability-management)

DRI: {{< member-by-gitlab "ryaanwells" >}}

{{< member-and-role-by-gitlab "bala.kumar" "lorenzvanherwaarden" "Quintasan" "svedova" >}}

### [AI](https://about.gitlab.com/direction/govern/threat_insights/17_threat_insights_priorities.html#ai)

DRI: {{< member-by-gitlab "sming-gitlab" >}}

{{< member-and-role-by-gitlab "dpisek" "darbyfrey" "alexbuijs" >}}

### Reporting Structure

Threat Insights was previously sub-divided into Navy and Tangerine, following the reporting lines below.
Navy engineers report to {{< member-by-gitlab "nmccorrison" >}} and Tangerine engineers report to {{< member-by-gitlab "ryaanwells" >}}.

{{% team-by-manager-slug manager="nmccorrison" team="Engineer(.*)Govern:Threat Insights" %}}

{{% team-by-manager-slug manager="ryaanwells" team="end Engineer(.*)Govern:Threat Insights" %}}

## Common Links

* Slack channels:
  * Main channel: [`#g_govern_threat_insights`](https://gitlab.slack.com/archives/CV09DAXEW/p1663788936706469)
  * Stand-up updates: [`#g_govern_threat-insights_standup`](https://gitlab.slack.com/archives/C01U7T6DPNY)
  * Engineering - All: [`#g_govern_threat_insights_eng`](https://gitlab.slack.com/archives/C05N5BLDYUT)
  * Engineering - Team Navy: [`#g_govern_threat_insights_navy`](https://gitlab.slack.com/archives/C042WT4PJN9)
  * Engineering - Team Tangerine: [`#g_govern_threat_insights_tangerine`](https://gitlab.slack.com/archives/C043G312PHS)
* Slack aliases: `@govern_threat_insights_be`, `@govern_threat_insights_fe`
* Google groups: eng-dev-secure-threat-insights-members@gitlab.com
* [Threat Insights calendar](https://calendar.google.com/calendar/u/0?cid=Y19iNGQxYmYzYzY4ZTBjODZkYTE0ZDc4N2M0MjZhMDUxYWEzYzljYWRlZjIwZTcwMmNmOWRjZmEwNzQzMmRmMDNkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20) (internal link)

### Prioritization

We use our Threat Insights Priorities page for [17.x](https://about.gitlab.com/direction/govern/threat_insights/17_threat_insights_priorities.html) to track what we are doing, and what order to do it in.

### Metrics

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="threat insights" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="threat insights" >}}
{{< /tableau >}}

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssuesDetails" >}}
  {{< tableau/filters "GROUP_NAME"="threat insights" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="threat insights" >}}
{{< /tableau >}}

### Workflow

The Threat Insights group largely follows GitLab's [Product Development Flow](/handbook/product-development-flow/).

Additional information can be found on the [Planning page](/handbook/engineering/development/sec/govern/sp-ti-planning.html).

### Milestone Planning

* On the second Tuesday of the month the Product Manager kicks off the planning issue. They identify priorities for the milestone and tag engineering managers, and stable counterparts (UX, QA) to review.
* By the third Tuesday of the month the Engineering Managers have reviewed the planning issue and agreed on the scope for the milestone.
  * All epics scheduled for this milestone should have the `~auto-report` label and **one** of these labels:
    * `~Threat Insights::Performance`
    * `~Threat Insights::Projects`
  * All issues scheduled for the milestone should have the `~Deliverable` label as well as `Health Status: On Track` at the beginning of the milestone. The milestone field should also be set correctly.
* The planning issue is created in this [epic](https://gitlab.com/groups/gitlab-org/-/epics/12683) for 17.0-17.11.

### Tracking Deliverables

* Issues that are marked as Deliverables for a milestone serve as the single source of truth for what we aimed to deliver for a given milestone. Throughout the milestone, things may change, become blocked, etc. *Ideally, we'd like to keep the Planning Issue unchanged after the milestone starts.*
* Something is considered delivered if it is either a. merged into production in time for the release date, b. completed before the next milestone start, or c. the feature flag enabling the feature is turned on.  It is important to keep track of the milestone of the deliverable; we encourage self-managed customers to turn on feature flags so they can try different features. Ensuring the milestone is correct, allows someone to tell if that change is available in a specific release.

#### Weekly async issue updates

At the end of every week, each engineer is expected to provide a quick async issue update by commenting on their assigned issues using the following template:

```markdown
### Async issue update

* Current status:
<!--- Please provide a quick summary of the current status (one sentence) -->

* Shipping this milestone: <!-- Not confident | Slightly confident | Very confident -->

* Scope reduction opportunities: <!-- No | Yes, ... -->

/health_status <!-- on_track | needs_attention | at_risk -->
/label <!-- ~"workflow::blocked" | ~"workflow::refinement" | ~"workflow::ready for development" | ~"workflow::In dev" | ~"workflow::In review" | ~"workflow::verification" -->

<!-- Please apply a :triangular_flag_on_post: emoji to this comment. Fore more information see https://gitlab.com/jayswain/automated-reporting -->
```

We do this to encourage our team to be more async in collaboration and to allow the community and other team members to know the progress of issues that we are actively working on. This also enables us to automatically collate updates across swimlanes, removing some manual process.

### MR Reviews

We follow these guidelines when submitting MRs for review when the change is within the Threat Insights domain:

1. Aim to request at least one of the reviews from someone outside our group. This helps avoid a code knowledge silo.
1. For time-critical reviews, consider using internal reviewers and maintainers.
1. The initial review should be performed by a member of the team. This helps the team by:
   * Faster reviews, as the reviewer is already familiar with the domain.
   * Additional awareness of changes taking place within the domain.
   * Identifying changes that don't align with what is happening with the domain.
   * Providing additional confidence from a domain expert to the external maintainer reviewer that the change behaves as expected.
1. GraphQL merge requests should be reviewed by a frontend engineer as soon as possible. This
   helps to validate the interface, and allows changes to be made before tests are written.

### Issue Boards

* [Threat Insights Delivery Board](https://gitlab.com/groups/gitlab-org/-/boards/1754666?scope=all&utf8=%E2%9C%93&milestone_title=%23started&label_name[]=group%3A%3Athreat%20insights)
  * Primary board for engineers from which engineers can work. It's stripped down to only include the workflow labels we use when delivering software.

* [Threat Insights Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/1420734?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Athreat%20insights)
  * Milestone-centric board primarily used by product management to gauge work in current and upcoming milestones.

* [Threat Insights "Ready to Pull" Board](https://gitlab.com/groups/gitlab-org/-/boards/4643978?label_name[]=group%3A%3Athreat%20insights&label_name[]=ready%20to%20pull)
  * Secondary board for unassigned issues that are separate from a larger effort. Ideal candidates are small features, bugs, and follow-up items.

These boards show current status of issues.

### Indicating Status and Raising Risk

Our teams use the [Health Status](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status) feature within issues to indicate the likelyhood of completion within the milestone. We assign `On Track` at the beginning of a milestone to a small number of issues where we have high confidence in delivery during that milestone. If there is concern with marking something as initially on track, then we should discuss why.

Raising risk early is important. The more time we have, the more options we have. For example, issues that have not gone into review by the 10th of the month may not have enough time to get merged. These should be considered Needs Attention or At Risk depending on their complexity and other factors.

Follow these steps when raising or downgrading risk:

1. Update the Health Status in the issue:
    1. `On Track` - high confidence - there is no indication the work won't get merged by the 15th.
    1. `Needs Attention` - medium confidence - the issue is blocked or has other factors that need to be discussed.
    1. `At Risk` - low confidence - the issue is in jeopardy of missing the merge cutoff of the 15th.
1. Add a comment about why the risk has increased or decreased. Copy the Engineering Manager and Project Manager for awareness.

Note that an issue probably shouldn't go directly from On Track to At Risk. That pattern indicates we have missed an opportunity to discuss earlier. Consider the progression: `On Track -> Needs Attention -> At Risk`.

## Quality

### Running E2E specs in the MR pipeline

We encourage running the `e2e: package-and-test` downstream [E2E job](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/#testing-code-in-merge-requests) in merge requests at least once and review the results when there are changes in:

* GraphQL (API response, query parameters, schema etc)
* Gemfile (version changes, adding/removing gems)
* Database schema/query changes
* Any frontend changes which directly impact vulnerability report page, MR security widget, pipeline security tab, security policies, configuration, license compliance page

### Running Govern E2E specs locally against GDK

Standalone [E2E specs can be run against your local GDK instance](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa?ref_type=heads#generic-command-for-a-typical-gdk-installation).

### E2E tests with feature flags

E2E tests should pass with a feature flag enabled before it is enabled on Staging or on GitLab.com.
Therefore, it's important to confirm this when introducing a new feature flag. Adding or editing a feature flag definition file [starts two `e2e:package-and-test` jobs](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/feature_flags.html#automatic-test-execution-when-a-feature-flag-definition-changes) (one with the feature flag turned on and another where it's turned off).

## Monitoring

* [Stage Group dashboad on Grafana](https://dashboards.gitlab.net/d/stage-groups-threat_insights/stage-groups-threat-insights-group-dashboard)
* [Largest Contentful Paint (LCP)](https://dashboards.gitlab.net/d/sftijGFMz/sitespeed-lcp-leaderboard?from=now-90d&orgId=1&to=now&refresh=30s&var-namespace=sitespeed_io&var-path=desktop&var-domains=gitlab_com&var-pages=Secure_Instance_Dashboard_Settings&var-pages=Secure_Instance_Security_Dashboard&var-pages=Secure_Instance_Vulnerability_Report&var-pages=Secure_Group_Security_Dashboard&var-pages=Secure_Group_Vulnerability_Report&var-pages=Secure_Project_Security_Dashboard&var-pages=Secure_Project_Vulnerability_Report&var-pages=Secure_Standalone_Vulnerability&var-browser=chrome&var-connectivity=cable&var-function=median) for our web pages.

## Contributing

### Local testing of licensed features

When a feature needs to check the current license tier, it's important to make sure this also works on GitLab.com.

To emulate this locally, follow these steps:

1. Export an environment variable: `export GITLAB_SIMULATE_SAAS=1`[^1]
1. Within the same shell session run `gdk restart`
1. Admin > Settings > General > "Account and limit", enable "Allow use of licensed EE features"

See the [related handbook entry](https://docs.gitlab.com/ee/development/ee_features.html#act-as-saas) for more details.

### Cross-stack collaboration

We encourage frontend engineers to contribute to the backend and vice versa. In such cases we should work closely with a domain expert from within our group
and also keep the initial review internal.

This will help ensure that the changes follow best practice, are well tested, have no unintended side effects, and help the team be across any changes that go into the Threat Insights codebase.

### Community Contributions

The Threat Insights group welcomes community contributions. Any community contribution should get prompt feedback from one of the Threat Insights engineers. All engineers on the team are responsible for working with community contributions. If a team member does not have time to review a community contribution, please tag the Engineering Manager, so that they can assign the community contribution to another team member.

If a team member creates an issue or finds an issue where we would be open to a community contribution, it should be labelled with ~"Seeking community contributions". If the contributor needs an EE license, we can point towards the [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) section on the Community contributors workflows page.

### Group discussion

We hold weekly group discussions alternating on APAC/AMER, and EMEA/AMER time zones. Everyone is invited to attend, and it's a great forum to ask questions about Vulnerability Management, customer queries, our road map, and what the Threat Insights team might be thinking about. You can find the meetings on the [Threat Insights calendar](#common-links); take a look at [the agenda](https://docs.google.com/document/d/1mbXHw6EYT-IqlEFguYRyLrm35f_DGA7EzGPGBCOc9ao/edit#heading=h.pt5d0o3avmun) (internal link). We hope to see you there!

## Footnotes

[^1]: There are many ways to pass an environment variable to your local GitLab instance. For example, you can create a `env.runit` file in the root of your GDK with the above snippet.
