---
title: Test Platform in Distribution group
---

## Overview

The goal of this page is to document existing Quality Engineering activities in Distribution group.

### Dashboards

- [QE Distribution dashboard](https://gitlab.com/groups/gitlab-org/-/boards/2187925?label_name%5B%5D=Quality&label_name%5B%5D=devops%3A%3Asystems&label_name%5B%5D=group%3A%3Adistribution) - Dashboard to track Quality Engineering work items
- [Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard) - Dashboard to visualize metrics important for Bug Prioritization
- [Bug Prioritization metrics](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard?:iid=2) - Bugs metrics required for [Bug Prioritization](#bug-prioritization) (ensure to filter by Distribution group)

### Quality work

Quality work is being tracked in [epic#9057](https://gitlab.com/groups/gitlab-org/-/epics/9057). The epic lists large initiatives that need to be worked on to better support quality in Distribution group.

### GitLab QA

GitLab QA is being used in several Distribution projects to validate that GitLab works as expected.

| Project | Tests type | Schedule   |
|--------------------|------------|-----------------------------|
| [GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab)                | Full       | [QA mirror pipeline is triggered](https://gitlab.com/gitlab-org/omnibus-gitlab/-/blob/master/doc/development/pipelines.md#triggerqa-test) |
| [GitLab Charts](https://gitlab.com/gitlab-org/charts/gitlab)                  | Sanity     | Run [automatically in merge requests](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/.gitlab-ci.yml) and [scheduled against default branch](https://gitlab.com/gitlab-org/charts/gitlab/-/pipeline_schedules)                                                                    |
| [GitLab Charts](https://gitlab.com/gitlab-org/charts/gitlab)                  | Full       | Triggered [manually in merge requests](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/.gitlab-ci.yml)                              |
| [GitLab Operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | Smoke      | Run [automatically in merge requests](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator/-/blob/master/.gitlab-ci.yml)        |
| [GitLab Operator](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator) | Full       | [Manually triggered](https://docs.gitlab.com/operator/developer/ci.html#qa-pipelines)               |
| [Reference Architecture Tester](https://gitlab.com/gitlab-org/distribution/reference-architecture-tester)                                                | Full       | [Manually triggered](https://gitlab.com/gitlab-org/omnibus-gitlab/-/blob/master/doc/development/pipelines.md#rat) and FIPS QA Nightly    |

Check [Running GitLab QA](https://docs.gitlab.com/charts/development/gitlab-qa/) for information on how
to run GitLab QA locally for development.

#### Investigate QA failures

1. Search for the failure in open [Pipeline Triage issue](https://gitlab.com/gitlab-org/quality/pipeline-triage/-/issues) or search for the spec name in [the main GitLab project](https://gitlab.com/gitlab-org/gitlab/-/issues/?scope=all&search=qa%20failure&state=opened&utf8=%E2%9C%93)
    - If Allure report is available: Click on report link -> Product defects -> Select failed spec -> click Failure issues. [Demo](https://youtu.be/_0dM6KLdCpw?t=234)
    - Some specs might have multiple QA failure issues with different stack trace. In such case, compare failed stack trace from the job with the ones listed in the issues.
1. If an issue with the same error is not found
    - Continue to debug the QA failure [following the guide](/handbook/engineering/testing/pipeline-triage/#investigate-the-root-cause)
    - Reach out to the Developer Experience stage - [on-call DRI](https://gitlab.com/gitlab-org/quality/pipeline-triage#dri-weekly-rotation-schedule) or [Distribution SET](/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/#team-members)

### Bug Prioritization

The Distribution team works together on [Bug Prioritization](/handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/) and aims to close at least 6 bugs per milestone [based on the team's current availability](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1075#note_1056963489). The number of bugs per milestone is revisited in the following [issue#1100](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1100).

Process:

- Team creates a new [Planning issue](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/?label_name%5B%5D=Planning%20Issue)
- SET creates a new issue using [Bug Prioritization template](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/new?issuable_template=Distribution%20Bug%20Prioritization)
- SET reviews open bugs using [Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard)
  - Add [Severity labels](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) to bugs that are missing a severity label
  - Review open bugs following [Prioritization Guidelines](/handbook/engineering/infrastructure-platforms/developer-experience/bug-prioritization/#prioritization-guidelines)
- SET to propose in team planning issue 6 bugs to be considered in milestone
- At the end of the quarter:
  - SET reviews [Distribution Issues](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/OpenBugAgeOBADashboard) metrics for open bugs
  - SET shares analysis with the Distribution team
  - The Distribution discusses if the process should be adjusted

### Quad Planning

Quality team reviews [open issues for quad planning](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=section%3A%3Aenablement&label_name%5B%5D=Quality&first_page_size=20) following Quad Planning process.
