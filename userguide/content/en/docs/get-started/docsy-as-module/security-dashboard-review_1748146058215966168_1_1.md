---
title: "Security Dashboard Review"
---

**Frequency:** Daily

AppSec engineers are responsible for triaging the findings of the GitLab security tools. This role has two primary functions.

1. Validate the findings and handoff to engineering for correction
1. Provide feedback to the Secure team

## Security Dashboard List

The following is a list of security dashboards that need to be reviewed:

- [GitLab](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerability_report)
- [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/security/vulnerability_report)
- [Gitaly](https://gitlab.com/gitlab-org/gitaly/security/vulnerability_report)
- [GitLab Pages](https://gitlab.com/gitlab-org/gitlab-pages/-/security/vulnerability_report)
- [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell/-/security/vulnerability_report)
- [k8s-workloads](https://gitlab.com/groups/gitlab-com/gl-infra/k8s-workloads/-/security/vulnerability_report)
- [Version](https://gitlab.com/gitlab-services/version-gitlab-com/-/security/vulnerability_report)
- [UBI images](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/container-scanners/-/security/vulnerability_report/)
- [release-cli](https://gitlab.com/gitlab-org/release-cli/-/security/vulnerability_report/)
- [vscode-extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/security/vulnerability_report)
- [Customers](https://gitlab.com/gitlab-org/customers-gitlab-com/-/security/vulnerability_report)
- [elastic-search-indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/security/vulnerability_report)
- [GitLab DAST](https://gitlab.com/gitlab-org/security-products/dast/-/security/vulnerability_report/)
- [GitLab Terminal](https://gitlab.com/gitlab-org/gitlab-terminal/-/security/vulnerability_report/)
- [GitLab Agent](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/security/vulnerability_report)
- [Compensation Calculator](https://gitlab.com/gitlab-com/people-group/peopleops-eng/compensation-calculator/-/security/vulnerability_report)

## Validation

For each finding:

- Using the information provided and any additional information, determine if the finding is valid
- For a valid report:
  - Change the status to `Confirmed`
  - Click `Create Issue`
  - Assign [Priority and Severity labels](/handbook/security/engaging-with-security#severity-and-priority-labels-on-security-issues) based on the finding rating and the impact on GitLab
  - Assign a [Due Date](/handbook/security/engaging-with-security/#due-date-on-security-issues)
  - add labels (`/label ~` command) corresponding to the [DevOps stage](/handbook/product/categories/#devops-stages) and source group (consult the [Hierarchy](/handbook/product/categories/#hierarchy) for an overview on categories forming the hierarchy)
  - @-mention product manager of appropriate teams for scheduling and/or the engineering managers if additional engineering feedback is required to complete the triage, based on the [product categories page](/handbook/product/categories/)
    - If an appropriate engineering team is not immediately apparent, ping an Appsec manager for help identifying the owner
- For an invalid report:
  - Change the status to `Dismissed`
  - Leave a comment providing feedback on why the vulnerability is being dismissed. This information can be used by Secure engineers in tuning the findings of the tool and is also useful if we ever wonder why it was dismissed at some point in the future.

## Dependency Updates

If a vulnerability is identified in a product dependency, the appsec engineer should follow the [security development workflow](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md) to create a merge request to update the dependency in all supported versions. The merge request should be opened in the [GitLab Security repo](https://gitlab.com/gitlab-org/security/gitlab) so that the dependency gets updated in supported backports as well. Vulnerabilities determined to be `Critical` or `High` should have merge requests created when identified. `Medium` and `Low` vulnerabilities will be addressed by best effort, but always within the 90-day SLA.

The goal of this process is to update dependencies as quickly as possible, and reduce the impact on development teams for minor updates. In the future, this step could be replaced by [auto remediation](https://gitlab.com/gitlab-org/gitlab/issues/37452).

**If an upgrade to a new major version is required**, it might be necessary for the update to be handled directly by the responsible development team.

- Complete the [Validation](#validation) process above.
- Create an issue in the [GitLab Security repo](https://gitlab.com/gitlab-org/security/gitlab/issues) issue tracker using the `Security developer workflow` template.
- Follow the template to create a merge request targeting the `master` branch.
- If the resulting pipeline is clean, continue with the developer checklist in preparation for merging. This must include reviews by a reviewer and maintainer.
- If the pipeline fails, work with the responsible engineering team to remediate. Depending on the cause, it may be necessary for a developer with advanced knowledge of the dependency functionality to review the change. If a developer is not immediately available, continue to track the issue/MR to ensure remediation within the defined SLA.
