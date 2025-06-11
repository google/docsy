---
title: Software Supply Chain Security, Security Policies
description: "The Security Policies team at GitLab is responsible for creating solutions that enforce scans, and require security approvals once vulnerabilities are detected."
layout: single
---

## Mission

The Security Policies group's mission is to provide security and compliance teams with a way to enforce security controls globally in their organization. With tools developed by our team, customers can prevent security risks by enforcing and automating security scans and requiring security approvals for proposed changes in their repository. For a comprehensive understanding of our vision and direction, we invite you to visit the Direction page at https://about.gitlab.com/direction/security_risk_management/security_policies/security_policy_management/.

## Top Priorities FY25

* Integrate Security Policies with other Software Supply Chain Security feature categories by allowing users to scope policies to selected Compliance Frameworks or Projects.
* Allow for complex and customized Scan Execution Policies by introducing Pipeline Execution Action with the ability to enforce Custom CI YAML for selected projects and groups.
* Help users understand why we require merge request approvals in their MRs by displaying Security Policy Violation details as a comment with helpful information.
* Help customers with the slow rollout of features from the Security Policies team by customizing their policy configuration to allow them to select if they want to fail open or fail closed in case the policy or project is misconfigured.
* Decrease performance impact on runners when enforcing scheduled Scan Execution Policies.
* Ability to enforce policies on Organization Level.

### Customer Outcomes we are driving for GitLab

1. Increase usage of Merge Request Approval Policies with detailed information explaining why we require approvals for given MR.
2. Speed up adoption time in enabling Security Policies by providing a way to enforce them gradually without blocking their current workflows for selected projects or projects with given Compliance Frameworks only.
3. Increase the flexibility of Scan Execution Policies and allow users limitless possibilities with enforcing any job with Pipeline Execution Action for selected projects and groups.
4. Help other groups introduce new types of policies to help customers automate and manage their security controls on group and organization levels.

## Common Links

* Slack channel: `#g_srm_security_policies`
* Slack alias: @govern_security_policies_be, @govern_security_policies_fe
* Google groups: sec-govern-security-policies@gitlab.com

## How we work

### Prioritization

We use our [Security Policies Priorities](https://about.gitlab.com/direction/security_risk_management/security_policies/security_policy_management/#security-policies) list in our direction page to track what we are doing, and what order to do it in.  Each initiative includes these fields:

1. Name - Description and link to the epic
1. BE DRI / FE DRI - indicates the backend and frontend [DRIs](/handbook/engineering/development/sec/security-risk-management/srm-planning/#epic-engineering-dri) who will be actively involved.
1. Size
1. Target Release

Complete items are removed from the table once the code is in production without a feature flag, and a release post, if applicable, has been merged. The epic is closed at this point.

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="security policies" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="security policies" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="security policies" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="security policies" >}}
{{< /tableau >}}

### Workflow

The Security Policies group largely follows GitLab's [Product Development Flow](/handbook/product-development/product-development-flow/).

Additional information about how we operate can be found on the [Planning page](/handbook/engineering/development/sec/security-risk-management/srm-planning/).

Our current workflow is visualized as flowchart on the [Workflow page](/handbook/engineering/development/sec/software-supply-chain-security/security-policies/workflow/).

Our current process on how we work on features is on the [Feature process page](/handbook/engineering/development/sec/software-supply-chain-security/security-policies/feature_process/)

#### MR Reviews

We follow these guidelines when submitting MRs for review when the change is within the Security Policies domain:

1. The initial review should be performed by a member of the team, stage, or section. This helps the team by:
   * Faster reviews, as the reviewer is already familiar with the domain
   * Additional awareness of changes taking place within the domain
   * Identifying changes that don't align with what is happening with the domain
1. For GraphQL changes, the MR should be reviewed by a frontend engineer as soon as possible. This helps to validate the interface, and allows changes to be made before tests are written.

### Issue Boards

* [Security Policies Delivery Board](https://gitlab.com/groups/gitlab-org/-/boards/1754674?milestone_title=Started)
  * Primary board for engineers from which engineers can work. It's stripped down to only include the workflow labels we use when delivering software.
* [Security Policies Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/1420731?label_name%5B%5D=group%3A%3Asecurity%20policies)
  * Milestone-centric board primarily used by product management to gauge work in current and upcoming milestones.
* [Security Policies EM Board](https://gitlab.com/groups/gitlab-org/-/boards/4738985)
  * Engineer-centric board used by engineering management to gauge how heavy a load engineer is carrying. Judged by the number of issues assigned to them.

#### Issue and Merge Requests labels

GitLab has a labeling convention for issues and Merge Requests. We follow this convention, though there are specific labels required to route artifacts to us. We
use these labels to filter issues meant for us on our issue boards. They are also used for metrics and KPI reporting.

| Label | Meaning |
| ----- | ------- |
| ~"section::sec" | Identifies the issue or MR as belonging to the Sec Section's roadmap. |
| ~devops::govern | Identifies the issue or MR as belonging to the Software Supply Chain Security Stage's roadmap. |
| ~"group::security policies" | Identifies the Security Policies group as the collection of individuals who will work on the issue or MR. |
| ~"Category:Security Policy Management" | Identifies the issue or MR as being part of the Security Policy Management feature category. |
| ~backend | Identifies the issue or MR as being part of GitLab's backend. |
| ~frontend | Identifies the issue or MR as being part of GitLab's frontend. |

When creating a new issue, use the `/copy_metadata #373191` quick command to copy required labels.

## Quality

### How to classify MRs which need to run Package and QA?

It is advisable to manually trigger the `Package and QA` downstream [E2E](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/) job in an MR and review the results when there are changes in:

* GraphQL (API response, query parameters, schema etc)
* Gemfile (version changes, adding/removing gems)
* Vue files which contain "data-qa-selector" attribute because these are used in identifying UI elements in E2E tests
* Database schema/query changes
* Any frontend changes which directly impact vulnerability report page, MR security widget, pipeline security tab, security policies, configuration, license compliance page

To manually trigger the QA job:

1. Navigate to the pipelines tab of the MR.
1. Click the `>` arrow on the right of the `Stages` and click the `package-and-qa` item.

It's advisable to run the QA job on the latest pipeline at least once during the MR review cycle.

## Monitoring

* [Stage Group dashboad on Grafana](https://dashboards.gitlab.net/d/stage-groups-security_policies/stage-groups-security-policies-group-dashboard?orgId=1)

### Metrics the team tracks

#### Engineering productivity metrics

* Total Open Bug by Severity
* Overall MRs by Type %
* Group MR Rate
* Flaky Test Issues
* Slow RSpec Tests Issues

#### Product metrics

Adoption of Security Policies features:

* Number of projects with an assigned security policy project
* Number of groups with an assigned security policy project
* Number of open merge requests with at least one applicable scan result policy
* Number of projects with at least one scan result policy
* Number of users who have created merge requests with at least one applicable scan result policy
* Number of users who have created merge requests in Projects that have an assigned security policy project
* Unique count of Software Supply Chain Security actions in a given timeframe
* Unique count of the Security Policies actions in a given timeframe
* Unique count of the Security Policies visits in a given timeframe
* Unique count of users creating merge requests with security policies in a given timeframe

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

This will help ensure that the changes follow best practice, are well tested, have no unintended side effects, and help the team be across any changes that go into the Security Policies codebase.

### Community Contributions

The Security Policies group welcomes community contributions. Any community contribution should get prompt feedback from one of the Security Policies engineers. All engineers on the team are responsible for working with community contributions. If a team member does not have time to review a community contribution, please tag the Engineering Manager, so that they can assign the community contribution to another team member.

## Footnotes

[^1]: There are many ways to pass an environment variable to your local GitLab instance. For example, you can create a `env.runit` file in the root of your GDK with the above snippet.
