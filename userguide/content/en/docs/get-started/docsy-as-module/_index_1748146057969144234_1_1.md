---
title: "Performance Enablement"
description: "Performance Enablement group within Developer Experience sub-department"
---


![DevPerfOps Logo](/images/engineering/infrastructure-platforms/developer-experience/performance-enablement/devperfops-diagram.svg)

## Mission

Enable developers to proactively build performance into the system and provide insight into feature performance health pre and post deployment. 

## Vision

In order to transform GitLab's performance testing from reactive to proactive while fostering a culture of performance awareness we must:

- Optimize feedback loops
  - Faster times between test setup, execution, and result analysis
  - Enable engineers to detect and prevent performance issues as early as possible
  - Enable engineers to be in the know of current Feature Performance Health pre and post-deployments
- Reduce cognitive load
  - Improve documentation for better clarity and accessibility of performance testing best practices and available tooling
  - Simplify complexity in tools and dashboards used for performance awareness
- Improve flow state
  - Define feature readiness at the performance level
  - Ensure seamless self-servicing of performing performance testing at the adequate layer of the SDLC

## Common Links

| S.No     | Section                                                                                                             |
|------    |---------------------------------------------------------------------------------------------------------------------|
| **GitLab Team Handle** | [`@gl-dx/performance-enablement`](https://gitlab.com/gl-dx/dperformance-enablement)                               |
| **Team Boards** | [Team Board](https://gitlab.com/groups/gitlab-org/-/boards/8955771?label_name%5B%5D=group%3A%3Aperformance+enablement) |

Engineers in this team support Performance Enablement projects.

## Team members

Engineering Manager: Kassandra Svoboda

| S.No     |                    |
|------    |-------------------------|
| 1        | Andy Hohenner    |
| 2        | Brittany Wilkerson     |
| 3        | Jim Baumgardner       |
| 4        | John McDonnell      |
| 5        | Nivetha Prabakaran |
| 6        | Vishal Patel  |

## Primary Projects

| Name | Description |
| :---: | :--- |
| [GitLab Browser Performance Tool](https://gitlab.com/gitlab-org/quality/performance-sitespeed)| Tool that is a [SiteSpeed](https://www.sitespeed.io/) wrapper which measures frontend performance in browsers, providing insights into web page performance across GitLab environments. |
| [GitLab Component Performance Tool](https://gitlab.com/gitlab-org/quality/component-performance-testing)| Tool which leverages containerization and automated testing to provide insights on individual component performance. |
| [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance)| Tool to provide performance testing of any GitLab instance. |
| [GitLab Verify Playbook](https://gitlab.com/gitlab-org/quality/quality-engineering/gitlab-verify-playbook)| Experimental Tool to verify that a GitLab instance is up and functional after deployment or reconfiguration. |

## All Projects

| Name | Description |
| :---: | :--- |
| [Test Data Generator](https://gitlab.com/gitlab-org/quality/test-data-generator)| Tool designed to populate a GitLab instance with dummy data that can be used to simulate a larger production instance. |
| [Performance Test Data](https://gitlab.com/gitlab-org/quality/performance-data)| This Project serves as an LFS data repository for the GitLab Performance Tool |
| [Performance Docker Images](https://gitlab.com/gitlab-org/quality/performance-images)| Docker builder and registry for GitLab Performance testing |
| [AI Gateway Latency Baseline Executor](https://gitlab.com/gitlab-org/quality/gitlab-environment-toolkit-configs/aigw-latency-baseline-executor)| Gets the latency baseline for AI Gateway in a specific region |

## Working with us

To request for help with performance testing of a new feature, please create a new issue within the GPT project with the request for help template.

For individual questions please reach out to the team through our Slack channels.

### Slack Channels

| Channel | Purpose |
| :---: | :--- |
| [#g_performance_enablement](https://gitlab.slack.com/archives/C081476PPAM) | Channel to engage with the Performance Enablement Team |

## How we work

### Meetings and Scheduled Calls

Our preference is to work asynchronously, within our projects issues trackers.

The team does have a set of regular synchronous calls:

- Performance Enablement Team meeting
- 1-1s between the Individual Contributors and Engineering Manager

### Project Management

The majority of our [project management process is described at the Platforms level](/handbook/engineering/infrastructure/platforms/project-management/) and is shared between all Infrastructure Platform teams.

Project management links

- Team [Project Status epic](https://gitlab.com/groups/gitlab-org/quality/-/epics/96)
- Team [Roadmap epic](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/117)
