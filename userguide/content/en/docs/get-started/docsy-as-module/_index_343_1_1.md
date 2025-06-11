---
title: "Test Governance Group"
description: "Test Governance Group under Developer Experience Stage"
---

## Common Links

| **Category**            | **Handle**                                                                                      |
|-------------------------|-------------------------------------------------------------------------------------------------|
| **GitLab Group Handle** | [`@gl-dx/test-governance`](https://gitlab.com/gl-dx/test-governance)                            |
| **Slack Channel**       | [`#g_test-governance`](https://gitlab.enterprise.slack.com/archives/C064M4S0FU5)                |
| **Slack Handle**        | `@dx-development-analytics`                                                                     |
| **Team Boards**         |                                                                                                 |
| **Issue Tracker**       | [`tracker`](https://gitlab.com/groups/gitlab-org/developer-experience/test-governance/-/issues) |
| **GitLab Repositories** | [test-governance](https://gitlab.com/gitlab-org/developer-experience/test-governance)           |

## Mission

## Vision

## Team members

{{< team-by-manager-slug "amyphillips" >}}

## Core Responsibilities

```mermaid
graph LR
    A[Test Governance Team]

    A --> B[Provide test expertise for critical Product releases]
    B --> B1[Define test strategy for the critical feature releases]
    B --> B2[Ensure adequate and robust test coverage for critical features]
    B --> B3[Stay informed about the stage roadmap]

    A --> C[Stage-level test tools and infrastructure]
    C --> C1[Design, Build and continuously improve tests, test frameworks and tools]
    C --> C2[Influence, advise and increase the testing capabilities for product teams]
    C --> C3[Monitor and address test flakiness]

    A --> D[Test guidance. Provide guidance and coach engineering teams in the areas:]
    D --> D1[Writing e2e tests and feature specs]
    D --> D2[Debugging and fixing test failures]
    D --> D3[Planning testing early in the development process]
    D --> D4[Anticipating test infrastructure needs and requesting change in advance]
    D --> D5[Shift left and maintaining appropriate ratio between unit, integration and e2e tests]
    D --> D7[Post-incident action]

    A --> E[E2E Pipeline triage. Shared responsibility among all DevX sub-department]
```

## Roadmap

## How we work

### Work related rituals

### Work management

#### Planning

#### Working with us through request for help

The Test Governance group aims to better enable teams to apply the principle that [quality is everyone's responsibility](/handbook/engineering/development/principles/#quality).
Please request all support via the RFH process below. This will allow us to prioritize requests against our planned project roadmap. 
Please use the following Request for Help process for all support requests.

#### Request for Help Process

1. Creates an issue in the [Request for Help](https://gitlab.com/gitlab-org/quality/test-governance/request-for-help#step-1-create-a-new-issue) project. Please complete all sections of the template so we can quickly triage your request
1. The Test Governance team will triage the request within a week, adding appropriate labels and assigning team members based on the request type and priority. Yu will recieve details about the prioritization and next steps on the request for help issue.

For more detailed guidance on E2E test coverage, consider these approaches:

* Engage with key DRIs to define [persona](/handbook/product/personas) use cases that illustrate how different customers will use new features
* Evaluate which parts of use cases can be covered by lower-level tests versus E2E tests, keeping the entire [testing pyramid](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html) in mind
* Refer to our documentation on [Testing Best Practices](https://docs.gitlab.com/development/testing_guide/end_to_end/best_practices) before submitting your request
