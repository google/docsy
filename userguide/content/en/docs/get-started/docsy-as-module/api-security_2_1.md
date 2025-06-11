---
title: API Security team in the Dynamic Analysis Group
---

## API Security

The API Security team is a standalone team which is part of the Dynamic Analysis group at GitLab. It is charged with developing solutions which perform Fuzzing.

| Repo | Purpose |
| ---- | ------- |
| [API Fuzzer](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src) - Private | GitLab's API Fuzzing scanner. |

### Important Fuzzing repositories

| Repo | Purpose |
| ---- | ------- |
| [API Security](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src) | Private - The API Security tool performs API Fuzzing and API DAST scans |
| [API Fuzzing E2E Tests](https://gitlab.com/gitlab-org/security-products/tests/api-fuzzing-e2e) | Private - API End to End Tests |
| [DAST API demos](https://gitlab.com/gitlab-org/security-products/demos/api-dast/) | Public - DAST API demos linked from the documentation. |
| [API Fuzzing demos](https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing) | Public - API Fuzzing demos linked from the documentation. |
| [API Fuzzing demos](https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing-example/) | Public - API Fuzzing demos linked from the documentation (har/openapi branches). |

## How to Contact Us

- Slack channel: #g_secure-dynamic-analysis
- Slack alias: @secure_dynamic_analysis_be
- Google groups: dynamic-analysis-be@gitlab.com
- GitLab mention: @gitlab-org/secure/dynamic-analysis-be

## How We Work

The Dynamic Analysis group largely follows GitLab's [Product Development Flow](/handbook/product-development-flow/).

Issues worked by this team are backend-centric and are typically in one the above repos, [vendored templates](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Security), and GitLab's [Rails monolith](https://gitlab.com/gitlab-org/gitlab). At times, issues can require support from Secure's frontend team if UI changes are required. We will require more notice for initiatives like these.

## Repeated tasks

There are several maintenance tasks that need to be completed each milestone. Each iteration, an issue is opened and assigned to an engineer on a rotating basis. Those rotating tasks are:

- Review upstream changes, and open an issue to upgrade DAST if the upstream changes provide important improvements
- Review the [security dashboard](https://gitlab.com/gitlab-org/security-products/dast/-/security/vulnerability_report) for DAST and address all critical and high issues. Review the dashboards for upstream projects, [ZAP](https://gitlab.com/gitlab-org/security-products/dependencies/zaproxy) and [ZAP Extensions](https://gitlab.com/gitlab-org/security-products/dependencies/zap-extensions)

### Fuzzing Technologies

- The API Security product is built using mostly C# with some small amounts of Python. Our engineers use Windows VMs for development.

### Specialized Labels

When opening up issues, the following label snippet often added:

```text
/label ~"Category:API Security"
/label ~"group::dynamic analysis"
/label ~"devops::secure"
/label ~"backend"
/label ~"section::sec"
```

### Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="dynamic analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="dynamic analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="dynamic analysis" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="dynamic analysis" >}}
{{< /tableau >}}

#### Targets

For our Merge Request types, we have an initial soft target ratio of 60% features, 30% maintenance, and 10% bugs based on the [cross-functional prioritization process](/handbook/product/product-processes/#cross-functional-prioritization).  This is not a hard target and we expect to see variation in this ratio as we mature and our focus evolves.

### Support Requests

The Dynamic Analysis engineering team provides support to GitLab Support Engineers [following the process outlined in the Sec Section support project](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help/).

## Issue Boards

- [API Security - Delivery Workflow Board](https://gitlab.com/groups/gitlab-org/-/boards/4543953?label_name[]=Category%3AAPI%20Security)
- [API Security Planning Board](https://gitlab.com/gitlab-org/gitlab/-/boards/4127408?label_name[]=Category%3AAPI%20Security#)
- [Dynamic Analysis EM Board](https://gitlab.com/groups/gitlab-org/-/boards/1353832?scope=all&utf8=%E2%9C%93&state=opened)
