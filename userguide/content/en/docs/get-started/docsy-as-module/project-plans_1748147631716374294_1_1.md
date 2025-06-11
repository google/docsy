---
title: "Verify:Runner Project Plans"
description: "This project's scope is to replace the current autoscaling technology, Docker Machine, used for the GitLab SaaS Shared Runners."
---

## Autoscaling Provider for GitLab Runner to replace Docker Machine

**Runner Team DRI:** Arran Walker

**Description:** This project's scope is to replace the current autoscaling technology, Docker Machine, used for the GitLab SaaS Shared Runners. To view the complete implementation plan
please visit [the parent epic](https://gitlab.com/groups/gitlab-org/-/epics/6995) that is currently tracking this work.

### Week of 2023-09-18

#### Goals

- ~~[ ] `fleeting`: [Log AWS Autoscaling Activity](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws/-/issues/11)~~
  - Implemention revealed questions about whether we really want/need this.
- [X] `fleeting`: [Add Shutdown func to API](https://gitlab.com/gitlab-org/fleeting/fleeting/-/issues/10)
- [X] `fleeting`: [Add public provisioning integration tests that plugins can use](https://gitlab.com/gitlab-org/fleeting/fleeting/-/issues/12)

### Week of 2023-09-25

#### Goals

- [X] `fleeting-plugin-aws`: [AWS plugin integration tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws/-/issues/7)
- [X] `taskscaler`: [Integration tests](https://gitlab.com/gitlab-org/fleeting/taskscaler/-/issues/3)

### Week of 2023-10-02

#### Goals

- [X] `fleeting-plugin-googlecompute`: [GCP plugin integration tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/8)
- [X] `runner`: [Taskscaler-based executor integration tests](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/30880)

### Week of 2023-10-09

#### Goals

- [X] `fleeting-plugin-googlecompute`: [GCP plugin integration tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/8)
- [X] `runner`: [Taskscaler-based executor integration tests](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/30880)
- [ ] `fleeting-plugin-googlecompute`: [Unit tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute/-/issues/7)
- [X] `runner-incept`: [End-to-End test runner manager in GCE](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/36794)
- [X] `fleeting-plugin-googlecompute`: [Recommend minimum IAM permissions for google compute plugin](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/29452)

### Week of 2023-10-16

#### Goals

- [X] `fleeting-plugin-azure`: [Add README / configuration options](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/1)
- [ ] `fleeting-plugin-azure`: [Unit tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/2)
- [ ] `fleeting-plugin-azure`: [Integration tests](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure/-/issues/3)
- [ ] `taskscaler`: [Implement Acquisition.WithContext](https://gitlab.com/gitlab-org/fleeting/taskscaler/-/issues/23)

## Dedicated SaaS Runners for GitLab Dedicated

**Runner Team DRI:** Joseph Burnett
**Slack Channel:** #f_hosted_runners

**Description:** A dedicated runner is a runner that would only be registered to a specific project, group, or instance and not be shared with other users.
With this project GitLab will spin up dedicated runner resources within the Dedicated cloud account.
The project plan tracking this work can be [found here](https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/158).

### Iteration 16.5 (ending 2023-10-19)

- [ ] https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/14+s
- [ ] https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/87+s

### Week of 2023-09-25

- [X] Verify Runner SaaS delivery timeline meets the requirements of Environment Automation.
  It does: https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2825#note_1586596202

### Week of 2023-10-02

#### Goals

- [X] Consolidate all work under a single sub-epic.
  Update issue and epic structure to reflect our agreement to deliver infrastructure-as-a-library (GRIT) and for Environment Automation to operate the runners themselves.

### Week of 2023-10-09

Clarified epic and issue structure with Dedicated ([thread](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/2825#note_1586917812)).
New project plan for Runner side to replace previous epic: https://gitlab.com/gitlab-org/ci-cd/shared-runners/infrastructure/-/issues/158
New GRIT sub-epic to track all library work for this use-case: https://gitlab.com/groups/gitlab-org/ci-cd/runner-tools/-/epics/2

#### Goals

- [X] Create a provisional Docker capable Linux AMI
- [X] Update [`dev` environment](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/blob/master/modules/dev/dev.tf) to support Linux.

### Iteration 16.6 (ending 2023-11-17)

#### Goals

- [X] Complete test template working end-to-end
- [X] Complete prod template working end-to-end
- [ ] Unit tests (in progress: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6)
- [x] End-to-End test (in review: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/8)
- [x] Demo and launch video (https://www.youtube.com/watch?v=K_eOuXN-nXM)

### Week of 2023-11-20

Completed end-to-end functionality for both the test template and prod template.
End-to-end testing has been added and unit tests are in-progress as we decide a reusable approach for all unit test cases.
The [demo video for GRIT beta prod](https://www.youtube.com/watch?v=K_eOuXN-nXM) was recorded, demonstrating the latest state of GRIT using the prod template.

#### Iteration Goals

- [ ] Unit tests (in progress: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6)
- [ ] Allow users to bring your own VPC (https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35)
- [ ] Update READMEs to match latest changes (https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/36)

### Week of 2023-11-27

If you haven\'t had a chance, please check out the [demo video for GRIT beta prod](https://www.youtube.com/watch?v=K_eOuXN-nXM), which demonstrates the latest state of GRIT using the prod template.
Progress was made last week on adding unit tests, and the only blocker appears to be an issue that is breaking e2e tests in both the unit test branch and the `master` branch. We will investigate and get the test passing this week.
We will also update READMEs to reflect the recent changes and refactors as well as begin adding granularity to VPC configuration in the `prod` module.

#### Goals

- [x] Add Unit tests (in progress: https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/merge_requests/6)
- [x] Begin issue: [Allow users to bring your own VPC](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35)
- [x] [Fix and improve E2E tests](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit-e2e/-/issues/1)

### Week of 2023-12-04

We investigated the failing E2E tests and discovered the issue was caused by changes to log levels in GitLab Runner. The
E2E tests were fixed and unit tests merged. I began updating the README and discovered our refactors have broken some
configurations that involve GCP. These configurations predated our unit and e2e testing. I added an issue and put up an
MR to fix the broken configurations and add test coverage. Our current focus is on AWS for Dedicated Runners, so my aim
with the fixes for GCP configs in the README is to cover only those README cases at this time and follow up on more
thorough GCP tests when we move our focus to GCP at a later date. We also [began discussions](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35#note_1674412071)
on how to customize VPCs and subnets in Dedicated Runners.

#### Goals

- [ ] [Fix broken README configurations](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/38)
- [ ] [Update READMEs to match latest changes](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/36)
- [ ] [Allow users to bring their own VPC](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit/-/issues/35)

## Runner Fleet Dashboard

**Runner Team DRI:** Vladimir Shushlin
**Slack Channel:** #f_runner_fleet_management

**Description:** Operators of self-managed runner fleets need, at a glance, observability or, more specifically, the ability to quickly answer critical questions about their Runner Fleet infrastructure.
Providing actionable insights in the Runner Fleet Dashboard equips GitLab Runner Fleets operators with the tools they need to ensure that developers in their organization can consistently and efficiently run CI/CD jobs at scale. The answers to questions such as how fast will CI/CD jobs start, are our CI/CD jobs waiting in a queue, are there are performance or other problems with the CI/CD job environment will be readily available in the Runner Fleet Dashboard.
The result is improved developer efficiency, reduced costs, and excellent customer experience for the development teams that rely on the CI/CD build infrastructure.

### Week of 2023-10-02

#### Goals

- [x] Enable ClickHouse connection on Staging
- [x] Enable [Runner Dashboard](https://gitlab.com/gitlab-org/gitlab/-/issues/417002) on Staging
- [ ] Enable [CI data ingestion](https://gitlab.com/gitlab-org/gitlab/-/issues/421203) on Staging
- [x] Enable [ClickHouse part of the dashboard](https://gitlab.com/gitlab-org/gitlab/-/issues/424498) on Staging

#### Summary

We got everything working on Staging, but discovered two bugs in data ingestion:

1. [duplicating some data](https://gitlab.com/gitlab-org/gitlab/-/issues/427427)
1. [not handling removed `ci_builds`](https://gitlab.com/gitlab-org/gitlab/-/issues/427421)

So we disabled data ingestion, and are working on fixing it.

We also reviewed the [bigger epic](https://gitlab.com/groups/gitlab-org/-/epics/11169), and decided that nothing blocks us from enabling
the dashboard for everyone without ClickHouse part of data.

There are [ongoing discussions](https://gitlab.com/gitlab-org/gitlab/-/issues/426113) on how to use this ci analytics architecture in other features.

### Week of 2023-10-09

Continuing to focus on issues found last week with the goal of re-enabling dashboard on staging and production.

#### Goals

- [x] Fix [duplication bug](https://gitlab.com/gitlab-org/gitlab/-/issues/427427)
- [x] Fix [removed ci_builds bug](https://gitlab.com/gitlab-org/gitlab/-/issues/427421)
- [x] Rollout and remove [runners_dashboard feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/417002) thus enabling Runner Dashboard for everyone
- [x] Re-enable [CI data ingestion on Staging](https://gitlab.com/gitlab-org/gitlab/-/issues/421203) and finish it
- [x] [Add clickhouse credentials for Production](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/16931)
- [x] [Add support for clickhouse in Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8249) - that will be required for tests on self-managed as well as using ClickHouse from rails console Staging/Production
- [x] [Fix "always integer" bug](https://gitlab.com/gitlab-org/gitlab/-/issues/427433)

#### Summary

1. We got Runner dashboard enabled on both staging and production including ClickHouse!
2. Decided not to release dashboard in 16.5. We want to test it a bit better and prepare a proper release post.
3. Omnibus part stuck in review a bit.
4. During the data ingestion we discovered that we [duplicate some data, it needs investigation](https://gitlab.com/gitlab-org/gitlab/-/issues/428146)

### Week of 2023-10-16

With production rollout complete we now will focus on delivering the dashboard(including Clickhouse) to self-managed.
We also have half of the usual backend capacity throughout the 16.6 due to planned time off.

#### Goals

- [x] Create [closed-beta self-managed rollout plan](https://gitlab.com/groups/gitlab-org/-/epics/11720)
- [x] Finish [omnibus support](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8249)
- [x] [Enable dashboard for self-managed and release in 16.6](https://gitlab.com/gitlab-org/gitlab/-/issues/417002)
- [x] (stretch) Get a working PoC for [Clickhouse migrations support](https://gitlab.com/gitlab-org/gitlab/-/issues/428124)

### Weeks of 2023-10-23 - 2023-11-20

We released the dashboard for self-managed in 16.6.
And were working delivering ClickHouse-powered part of the dashboard to self-managed.

#### Goals

- [x] Write [the documentation for setting-up the ClickHouse and the dashboard on self-managed](https://gitlab.com/gitlab-org/gitlab/-/issues/424500).
- [x] Implement [the basic support for ClickHouse migrations](https://gitlab.com/gitlab-org/gitlab/-/issues/428124)
- [x] Debug [the duplicates issue](https://gitlab.com/gitlab-org/gitlab/-/issues/428146) on gitlab.com

### Week of 2023-11-27

With the basic migrations support in place, we're now working on running those migrations automatically
during the normal GitLab upgrade process for omnibus and gitlab chart.

We're also working on fixing the duplicates issue.

#### Goals

- [x] Fix [the duplicates issue](https://gitlab.com/gitlab-org/gitlab/-/issues/428146).
- [ ] [Run ClickHouse migrations automatically during omnibus upgrade](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8266) - get it working and in review
- [ ] [Imlement exclusive lease to prevent parallel execution of migrations](https://gitlab.com/gitlab-org/gitlab/-/issues/428274)
