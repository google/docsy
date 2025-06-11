---
title: "FY26 - Hosted Runners"
---

## Table of Contents

- [Background](#background)
- [North Star](#north-star)
- [Current Landscape](#current-landscape)
- [Goals for FY26](#goals-for-fy26)

## Background

GitLab-hosted runners (a.k.a [hosted runners for GitLab.com](https://docs.gitlab.com/ee/ci/runners/index.html#hosted-runners-for-gitlabcom)) are managed, deployed, and maintained through cross-team collaboration. SRE supports and sometimes leads deployment solutions to ensure the scalability and reliability of the service in Production.

In FY25, SRE supported Runners in the following chronologically-sorted efforts:

1. Assisted Dedicated Runners with the [Beta release in AWS](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/epics/276)
2. Released new runner type offerings: [Medium and Large ARM64-based runners](https://gitlab.com/groups/gitlab-org/-/epics/8442)
3. Explored [PoC - Deploying Hosted Runners using Dedicated Runners architecture](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1326)
4. Found a solution to the [VPC peering limits](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1386) which prevented the scalability of .com hosted runners
5. Implemented the VPC re-design [across all .com runner shards](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1459)
6. Consolidated .com [runner environment deviations in terraform](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1458)

In FY26, the focus will be on enabling the runners team to better self-service runners operational work.

## North Star

Achieving fully automated, hands-off scalability and maintainability for GitLab-hosted runners, ensuring seamless, continuous operations with minimal manual intervention.

## Current Landscape

The following sections highlight the shortcomings of the current landscape. While focusing on areas needing the most growth may seem pessimistic, our setup and processes are in a better position today compared to a year ago. However, we're still far from ideal and have room for improvement.

### Knowledge Silos

Access to information about maintaining and scaling Hosted runners is limited. Expertise is demonstrated by a few engineers, and the process is not well-documented.

### Scalability Fatigue

The scalability process, both for offering new runner types and for scaling existing ones, is hands-on, demanding, prone to human error, repetitive, and boring.

### Cost Efficiency

The cost efficiency for some shards is far from ideal. While insights to this data are available for the FinOps team, they're not empowered to take action or make decisions based on this data. Additionally, we're not investing in exploring alternative deployment methods or understanding the current CPU usage to minimize the cost of hosting .com runners.

## Goals for FY26

*Effort Level Key:*

- LF: Low Effort
- MF: Medium Effort
- TF: Tremendous Effort

### Knowledge Transparency

**Objectives:**

1. Improve the quality of deployment and scalability docs (MF)
1. Create discoverable, easy-to-reach information (LF)
1. Convert docs to CR template for better cross-team transparency (LF)
1. Coordinate with Runners team to transfer Runbooks ownership (MF)

**Related Links:**

1. [Hosted Runners - improve Runbooks](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1457)

### Scalability Fatigue

**Objectives:**
Automate scaling the existing shards [process](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/ci-runners/linux/new-shards.md):

1. Author epic/issue in the runner's tracker to (LF):
   1. Improve existing tools ([deployer](https://gitlab.com/gitlab-com/gl-infra/ci-runners/deployer/) and [GRIT](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit))
   1. Consider embedding the process in a pipeline
   1. Research alternative deployment solutions (e.g., revisit [runner-managers in k8s](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/3360))

**Related Links:**

1. [Runners - automate the scaling process](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1313)
1. [Future iterations for Runner deploy improvements](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/581)

### Cost Efficiency

**Objectives:**

1. Work with FinOps to determine objectives (LF)
1. Achieve reasonable cost efficiency for all existing shards (MF)
1. Explore more cost-efficient hosting methods (MF)
1. Optimize resources usage (TF)

**Related Links:**

1. [Investigate FinOps Cloud Efficiency vs Grafana Idle Efficiency](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/241)
1. [Reduce autoscaling parameters for larger Linux runners due to high compute inefficiency](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/166)
