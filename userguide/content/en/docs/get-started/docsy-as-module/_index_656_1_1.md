---
title: "Verify:Runner"
description: "The GitLab Runner team page."
---

## Vision

By 2025, our vision for GitLab Runner is that the runner's setup and day-to-day operations at scale be an almost zero-friction experience.

## Mission

Our mission is to enable organizations to efficiently run GitLab CI/CD jobs on any computing platform and do so in an operationally efficient and highly secure way at any scale.

This team maps to [Verify](/handbook/product/categories/#verify-stage) DevOps stage.

## Product Strategy and Roadmap

The product strategy and roadmap for the runner product categories are covered on the following direction pages.

- [Runner Core](https://about.gitlab.com/direction/verify/runner_core/)
- [Hosted Runners](https://about.gitlab.com/direction/verify/hosted_runners/)
- [Fleet Visibility](https://about.gitlab.com/direction/verify/fleet_visibility/)

## UX strategy

Our UX vision, more information around how UX and Development collaborate, and other UX-related information will be documented in the [UX Strategy page](/handbook/product/ux/product-design/ux-roadmaps/).
Our [Jobs to be Done](/handbook/product/ux/jobs-to-be-done) are documented in [Verify:Runner JTBD](/handbook/engineering/development/ops/verify/runner/jtbd/) and provide a high-level view of the main objectives. Our User Stories are documented in [Runner Group - User Stories](/handbook/engineering/development/ops/verify/runner/user-stories/) which guide our solutions as we create design deliverables, and ultimately map back to JTBDs.

## Performance Indicator

In the [OPS section](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/), we continuously define, measure, analyze, and iterate or Performance Indicators (PIs). One of the PI process goals is to ensure that, as a product team, we are focused on strategic and operational improvements to improve leading indicators, precursors of future success.

## Team Members

The following people are permanent members of the Verify:Runner group:

{{< team-by-manager-role "Engineering Manager(.*)Verify:Runner" >}}

## Stable Counterparts

{{< stable-counterparts role="Verify:Runner" manager-role="Engineering Manager(.*)Verify:Runner" >}}

For a more comprehensive list of counterparts, look at the [runner product categtory](/handbook/product/categories/#runner-group)

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="runner" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="runner" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="runner" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="runner" >}}
{{< /tableau >}}

## Projects we maintain

As a team we maintain several projects. The <https://gitlab.com/gitlab-com/runner-maintainers> group
is added to each project with maintainer permission. We also try to align tools and versions used across them.

### Product projects

- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner)
- [GitLab Runner Operator for Kubernetes](https://gitlab.com/gitlab-org/gl-openshift/gitlab-runner-operator)
- [GitLab Runner Helm Chart](https://gitlab.com/gitlab-org/charts/gitlab-runner)
- [GitLab Runner UBI offline build](https://gitlab.com/gitlab-org/ci-cd/gitlab-runner-ubi-images)

### Runner component projects

- [Taskscaler](https://gitlab.com/gitlab-org/fleeting/taskscaler)
- [Fleeting](https://gitlab.com/gitlab-org/fleeting/fleeting)
- [Fleeting Plugin AWS](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-aws)
- [Fleeting Plugin Google Compute](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-googlecompute)
- [Fleeting Plugin Azure](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-azure)
- [Fleeting Plugin Static](https://gitlab.com/gitlab-org/fleeting/fleeting-plugin-static)
- [Nesting](https://gitlab.com/gitlab-org/fleeting/nesting)
- [Docker Machine (fork)](https://gitlab.com/gitlab-org/ci-cd/docker-machine)
- [Custom Executor Autoscaler](https://gitlab.com/gitlab-org/ci-cd/custom-executor-drivers/autoscaler)

### CI Steps projects

- [Step Runner](https://gitlab.com/gitlab-org/step-runner)
- [Action Runner](https://gitlab.com/gitlab-org/components/action-runner)

### Helper projects

- Linters
  - [Runner linters Docker images](https://gitlab.com/gitlab-org/ci-cd/runner-tools/runner-linters)
  - [goargs linter](https://gitlab.com/gitlab-org/language-tools/go/linters/goargs)
- Testing
  - [DinD image tests](https://gitlab.com/gitlab-org/ci-cd/tests/dind-image-tests)
  - [SaaS Runner Tests](https://gitlab.com/gitlab-org/ci-cd/tests/saas-runners-tests/)
- Release
  - [Process](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releases)
  - [Release tool](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releaser)
  - [GitLab Changelog](https://gitlab.com/gitlab-org/ci-cd/runner-tools/gitlab-changelog)
  - [Release index generator](https://gitlab.com/gitlab-org/ci-cd/runner-tools/release-index-generator)
- Maintenance
  - [Runner Pod Cleanup](https://gitlab.com/gitlab-org/ci-cd/gitlab-runner-pod-cleanup)

### Runner SaaS projects

- Images
  - [Linux](https://gitlab.com/gitlab-org/ci-cd/shared-runners/images/gcp/linux-cos)
  - [MacOS host](https://gitlab.com/gitlab-org/ci-cd/shared-runners/images/aws/macos-nesting)
  - [MacOS VM 12 and before](https://gitlab.com/gitlab-org/ci-cd/shared-runners/images/macstadium/orka)
  - [MacOS VM 13 and after](https://gitlab.com/gitlab-org/ci-cd/shared-runners/images/job-images)
  - [Windows](https://gitlab.com/gitlab-org/ci-cd/shared-runners/images/gcp/windows-containers)
- Configuration and Deployment
  - [Monitoring in K8s](https://gitlab.com/gitlab-com/gl-infra/ci-runners/k8s-workloads)
  - [Terraform Runner Workers](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments) (all `ci*` and `r-saas-*` folders)
  - [Chef Runners](https://gitlab.com/gitlab-com/gl-infra/chef-repo/) (all `runner-mananger*` roles)
  - [Chef Runner Cookbook](https://gitlab.com/gitlab-cookbooks/cookbook-gitlab-runner)
  - [Chef Runner Cookbook Wrapper](https://gitlab.com/gitlab-cookbooks/cookbook-wrapper-gitlab-runner)
  - [Ansible Playbooks](https://gitlab.com/gitlab-com/gl-infra/ci-runners/deployer)
  - [Windows Runners](https://ops.gitlab.net/gitlab-com/gl-infra/ci-infrastructure-windows/)
  - [GRIT](https://gitlab.com/gitlab-org/ci-cd/runner-tools/grit.git)
- Operations
  - [Runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/ci-runners)
  - [MacOS Runbooks](https://gitlab.com/gitlab-org/ci-cd/shared-runners/macos) (deprecated)

## GitLab projects that rely on Runner public-facing APIs

The following projects depend on the public Runner APIs, and should be taken
into consideration in the scope of any changes/deprecations to the public API surface:

| Project | API |
|---------| --- |
| [GitLab Terraform Provider](https://gitlab.com/gitlab-org/terraform-provider-gitlab) | [REST API](https://docs.gitlab.com/ee/api/api_resources.html) |
| [GitLab CLI](https://gitlab.com/gitlab-org/cli) | [REST API](https://docs.gitlab.com/ee/api/api_resources.html) |

## Technologies

We spend a lot of time working in Go which is the language that [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) is written in. We also contribute to the main [GitLab app](https://gitlab.com/gitlab-org/gitlab), working in Rails and Vue.js. Familiarity with Docker and Kubernetes is also useful on our team.

## Common Links

- [Issue Board](https://gitlab.com/groups/gitlab-org/-/boards/5389813?label_name[]=group%3A%3Arunner&milestone_title=Upcoming)
- [Issue Tracker](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Arunner)
- [Slack Channel](https://gitlab.slack.com/archives/g_runner)

## How we work

### Iterations

We work in monthly iterations. Iteration planning dates for the upcoming milestone are aligned with GitLab's [product development timeline](/handbook/engineering/workflow/#product-development-timeline).

At a minimum, 30 days before the start of a milestone, the runner PM reviews and re-prioritizes as needed the features to be included in the [iteration planning issue](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=20). The planning issue is a tool for asynchoronous collaboration between the PM, EM and members of the team. We use [cross-functional prioritization](/handbook/product/product-processes/cross-functional-prioritization/#prioritization-for-feature-maintenance-and-bugs) to guide the collaboration process.

The commitments for the iteration plan are directly related to the capacity of the team for the upcoming iteration. Therefore, to finalize the iteration plan (resource allocation) for a milestone, we evaluate and consider the following:

- Forced prioritization issues (these issues will always be first in line for resource allocation.)
- In flight development work that did not complete prior to the feature freeze.
- Strategic direction features.
- Community or customer requested features.
- Bugs
- Technical Debt
- Maintenance
- Community merge requests review assignments

### Iteration Planning and Issue Refinement Process

1. The PM creates iteration planning issues for at minimum the next three milestones.
1. The PM adds candidate issues to the planning issues, applying the appropriate priority label for the iteration (e.g. `Runner::P1`)
1. The PM adds the scoped label `~candidate::x.y` to each issue. For example `~candidate::16.0`
1. The PM assigns the iteration planning issues to the runner EM, UX, QE and TW counterparts.
1. The EM reviews all candidate tech debt, bugs, security and feature issues and applies the `deliverable` label to issues based on team capacity. The deliverable label signals a commitment for delivery and is tied directly to our team KPIs. Any issue not receiving the `deliverable` label will be treated as stretch and pulled in as team members have capacity.
1. At minimum, three business days prior to GitLab's monthly release [kickoff](/handbook/engineering/workflow/#kickoff) livestream, the PM, EM, Quality and UX leads finalize the iteration plan for the upcoming milestone.

As we have a lot of involvement with our stable counterparts and reliability team, we also add a section to our iteration plan to reflect any `blocking` or `relating` issues.

1. The engineering team adds all `blocking` or `related` reliability issues to the iteration plan.
1. The reliability team reviews these issues and checks feasibility and suggests changes.
1. The reliability team commits to their issues in the iteration plan as long as:
    1. They don't affect the current due dates for an ongoing KR.
    2. They fit under one of the quarterly [OKRs of the Reliability::Practices team](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Reliability%3A%3APractices&first_page_size=20).
    3. They take into account downtime related to the OnCall and OnCall follow up work.

### Prioritization labeling

To indicate priority of issues during an iteration we may use labels `~"Runner::P1" ~"Runner::P2" ~"Runner::P3"`.
At a minimum we will always identify our top priorities using `~"Runner::P1"`.

1. `~"Runner::P1"` means "elevated priority". We aim to deliver all or most of these issues.
1. `~"Runner::P2"` means "normal priority".
1. `~"Runner::P3"` means "reduced priority".
1. `~"Runner::P*"` labels can and should differ from `~priority:*` labels.
    [`~priority:*`](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority) labels imply the timeline for when issues will be addressed.
    While `~"Runner::P*"` indicate priority for the scheduled iteration.

### Design and development process

We follow the [product development flow](/handbook/product-development-flow/). Our team uses one issue as SSOT for design, backend, and frontend work.

Once a problem is [validated](/handbook/product-development-flow/#validation-phase-2-problem-validation), the issue enters the [design phase](/handbook/product-development-flow/#validation-phase-3-design) where the product designer collaborates with the team to ideate solutions and explore different approaches before converging on a single solution that is feasible and has requirements meet the business goals.

Sometimes we need to increase our confidence that the proposed solution meets the user's needs and expectations. This confidence can be obtained from additional research during the [solution validation](/handbook/product-development-flow/#validation-phase-4-solution-validation) phase.

Following the design and validation phases, the problem should already be broken down into the quickest change possible to improve the user's outcome and be ready for a more detailed review by engineering before moving to the [build track](/handbook/product-development-flow/#build-track).

Once the PM intends to prioritize the issue for the next milestone, the `~"workflow::planning breakdown"` label is applied and the EM will assign a developer to further break down and apply weights to that work so that the issue can be `~"workflow::ready for development"`.

### Release

At the end of the iteration we release Runner and associated projects. The release process is documented [here](https://gitlab.com/gitlab-org/ci-cd/runner-tools/releases/-/blob/main/README.md).

### Guidelines for Merge Requests

As a developer on the runner team, you will be contributing to the various runner projects. Since the GitLab Runner project reviewers and maintainers review all code contributions (runner team members and community contributions), we must try and be as efficient as possible when submitting merge requests for review.

#### The responsibility of the merge request author

We follow the [merge request author responsibility guidelines](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-merge-request-author).

#### The responsibility of Reviewers and Maintainers

We follow the [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer).

To help authors find a reviewer with capacity to take on a review, we have a [spreadsheet dashboard](https://docs.google.com/spreadsheets/d/1fkPW5cy2Cz_h2T2tSoYGlnuulMzU-zX6Miwz53sErE4/edit#gid=0) that shows the number of MRs any of the backend members of the Verify:Runner or Verify:Runner SaaS groups have assigned.

If you as a reviewer or maintainer who has reached your limit of assigned review MRs, consider asking for assistance from your peers by reassigning some to them. Additionally consider pair-reviewing with the authors on a video call to speed up the review cycle - especially if you have multiple MRs to review from a single author.

Non-team member MRs count towards WIP limit. At GitLab anyone can contribute, and codebases do not equal "teams" or "groups" (even if they happen to share a name). Therefore we should, from time to time, anticipate the occasional MR from a non-team member. Since other teams may not be familiar with our imposed WIP limits, we will need to accommodate them as best we can and the reviewers may need to help with the re-balancing their workload. We should not accept these MRs as a valid reason to go above the WIP limits.

These limits are intended to help with the work load on the reviewers and maintainers. If you are feeling pressured to rush through reviews, talk to your EM. Quality is always more important than speed of review.

### Runner Group Specific Onboarding Needs

- `editor` access to the `group-verify` project in GCP
- Add as `maintainer` to the `gitlab-com/runner-group` group on GitLab.com
- Make sure entry in `team.yml` has the new member as a reviewer of `gitlab-org/gitlab-runner` and `gitlab-org/ci-cd/custom-executor-drivers/autoscaler`
- Add to `Verify` 1password vault (requires creating an access request).

### Onboarding

When a new developer joins Runner, their responsibility will include maintaining the runner project and all satelite repositories we own from their first day. This means that the developer will get Maintainer access to our repositories and will be added to the [`runner-maintainers`](https://gitlab.com/groups/gitlab-com/runner-maintainers/-/group_members?with_inherited_permissions=exclude) group so they appear in merge request approval group.

This allows the onboarding developer to grow organically over time in their responsibilities, which might include (non-exhaustive) code reviews, incident response, operations and releases. We should still follow the [traditional two-stage review process](/handbook/engineering/workflow/code-review/) for merges in most cases (incident response and operations being exceptions if the situation warrants it).

### Becoming a maintainer for one of our projects

Although maintainer access is provided from day one for practical purposes,
we follow the same process [outlined here](/handbook/engineering/workflow/code-review/#how-to-become-a-project-maintainer).
Any engineeer inside of the organization is welcome to become a
maintainer of a project owned by the Runner team.

### Technical Debt / Backstage work

In general, technical debt, backstage work, or other classifications of development work that don't directly contribute to a users experience with the runner are handled the same way as features or bugs and covered by the above Kanban style process. The one exception is that for each engineer on the team, they can only have 1 technical debt issue in flight at a time. This means that if they start working on a technical debt type issue they cannot start another one until the first one is merged. In the event that an engineer has more than one technical debt item in flight, they should choose which one to keep working on and move the others to the "in development" or "ready for review" columns depending on their status. The intent of this limitation is to constrain the number of technical debt issues that are in review at any given time to help ensure we always have most of our capacity available to review and iterate on features or bugs.

### Retrospectives

The team has a monthly retrospective meeting on the first Tuesday of the
month. The agenda can be found
[here](https://docs.google.com/document/d/1fJfUzsk2RJqLaN8C42fXWzsTo5M8sZDQ5N2M-qJGt2M/edit?usp=sharing)
(internal link).

### Deprecations process

At GitLab, our release post policy specifies that deprecation notices need to be added to the release post at least two cycles before the release when the feature is removed or officially obsolete. There are typically several deprecations or removals that the runner team needs to manage across the main runner project and the other projects that this team maintains.  As such, the runner development team uses the following process to manage deprecations and removals. This process should start no later than one month after the launch of a major release.

1. The assigned developer creates a Deprecations and Removal epic for the next major release. See example [epic](https://gitlab.com/groups/gitlab-org/-/epics/3212).
1. The assigned developer collects all planned deprecations and removals with input from the development team and includes them in the epic.
1. The assigned developer verifies that there are deprecation issues created for each deprecation.
1. The assigned developer tags the runner development team, engineering manager, and product manager.
1. The product manager uses the list of issues to create the deprecation notices. Our goal is to start announcing deprecations no later than six cycles before the next major release.
1. The product manager will continue to include the deprecation notices in all release post entries up to and including the major release where the features will be fully deprecated or removed.

### Managing CVE vulnerability report issues

Managing CVE vulnerability issues is part of GitLab's vulnerability management effort
([1](https://internal.gitlab.com/handbook/security/threat_management/vulnerability_management/),
[2](../../../../../security/product-security/vulnerability-management/)), and is an important part of maintaining the
GitLab FedRAMP certification.

Using the [`container-scanners`](https://gitlab.com/gitlab-com/gl-security/appsec/container-scanners) project, GitLab
scans all images we produce to highlight CVE vulnerabilities. From those scans, the
[`vulnmapper`](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper)
project creates issues in the project that created the vulnerable image, including
[SLAs](/handbook/security/product-security/vulnerability-management/sla/) to which we must adhere.
The Runner team member assigned the `Support & Security Responder` role in the weekly team task should triage and
review the list of CVEs and address any issues as appropriate:

- `Critical` severity issues should be addressed immediately.
- `High`, `Medium`, and `Low` severity issues should be addressed in the priority order of the
  [remediation SLAs](/handbook/security/product-security/vulnerability-management/sla/).

The procedure for addressing CVE issues is as follows:

#### Surfacing active vulnerability reports

- Use one of the following to surface active CVE issues assigned to our team:
  - [Issue search](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=FedRAMP%3A%3AVulnerability&label_name%5B%5D=group%3A%3Arunner&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AAccepted&not%5Blabel_name%5D%5B%5D=FedRAMP%3A%3ADR%20Status%3A%3AOpen&first_page_size=50)
  - The [`gitlab-dashboard cves`](https://gitlab.com/avonbertoldi/gitlab-dashboard) command.
  - The [`cver imageVulns`](https://gitlab.com/gitlab-org/ci-cd/runner-tools/cver.git) command.

     Many issues will reference the same CVE vulnerability report; it's best to group issues for the same vulnerability
    report and address them together.
- Focusing on CVE reports in priority order, start with `critical`, `high`, and `medium` severities first and proceed as
follows:
  1. For each group of common/related issues, confirm that the associated CVE is still valid. This can be done by
     scanning the `latest` version of the image(s) identified in the issue(s) with tools such as
     [`trivy`](https://trivy.dev/) and [`grype`](https://github.com/anchore/grype), and checking whether the CVE
     referenced in the issue appears in the `trivy` or `grype` scan.
  1. If the vulnerability is no longer reported in the `trivy` or `grype` scan of the relevant image(s), the issue(s)
     can be closed. Note that the `cver` internal tool mentioned above largely automates this task, including closing
     the relevant issues (see the documentation).
  1. If the vulnerability is **still** present in the relevant image(s), it must be addressed.

Note that issues that reference `ubi-fips` flavors of `gitlab-runner` or `gitlab-runner-helper` images take precedence
over other image flavors (like `alpine` or `ubuntu`) since the GitLab FedRAMP certification is contingent on `ubi-fips`
images only.

#### Addressing active vulnerability reports

Vulnerabilities usually appear in one of three flavors (ordered in most to least frequency of occurrence):

- The vulnerability exists in a third-party OS package (like `git` or `git-lfs`).
- The vulnerability exists in `gitlab-runner` in one of its dependencies.
- The vulnerability exists in `gitlab-runner` in code we've written.

##### Third-party OS packages

In this case, the vulnerability:

- Has not been fixed upstream
- Has been fixed upstream but an OS package including the fix has not been created and published yet
- Will not be fixed upstream

The primary course of action here is to create a
[`deviation request issue`](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues)
(see
<https://handbook.gitlab.com/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/>).
We generally create one deviation request issue per offending software module (e.g. `git-lfs` or `libcurl`). When
creating the issue, be sure to select `operational_requirement_template` as a template and complete the following
sections:

- Affected images
- Vulnerability details (one row for each relevant CVE report)
- Relevant `vulnmapper` issues
- Justification

Once the deviation request issue is created, add:

- A note to all the relevant `gitlab-runner` issues pointing to the deviation request issue
- The label `FedRAMP::DR Status::Open`
- The [most relevant label](../../../../../security/product-security/vulnerability-management/labels) from this list:

  - `Vulnerability::Vendor Base Container::Fix Unavailable`
  - `Vulnerability::Vendor Base Container::Will Not Be Fixed`
  - `Vulnerability::Vendor Package::Fix Unavailable`
  - `Vulnerability::Vendor Package::Will Not Be Fixed`

Eventually, a fix in the offending package will make its way to the OS package manager, and then both the
`gitlab-runner` and deviation request issues can be closed.

##### `gitlab-runner` dependencies

The simplest course of action here is to update the dependency to the latest compatible version (or at least a version
that addresses the vulnerability). Once the MR with the dependency update is merged, the `gitlab-runner` issue can be
closed.

If the dependency does not address the vulnerability, possible courses of action are:

- If a fork of the dependency that addresses the vulnerability exists, use it with the Go module `replace` directive. In
this case, be sure to create a task to switch back to the upstream dependency when the vulnerability has been addressed
there.
- If possible, consider not using the dependency or replacing it with another similar dependency.
- Create a [deviation request issue](#third-party-os-packages).

##### `gitlab-runner` source

The only course of action here is to fix the vulnerable code. If the fix is not simple and will take time to implement
(and prevent us from meeting CVE SLAs), it might be necessary to create a [deviation request issue](#third-party-os-packages).

### Working with security forks

When issues are marked confidential, the MR that fixes the issue should be made in a project's security fork (see
[security-forks](https://gitlab.com/gitlab-org/security?filter=gitlab%20runner)). In general the process is identical to
crating and merging MRs in the canonical project repo, with a couple of notable differences.

Note that MRs in the security repo _must_ be reviewed/approved by a security counterpart in addition to a runner
code-owner.

The examples below are given for the [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) project, but apply
equally to all [runner-related projects with security forks](https://gitlab.com/gitlab-org/security?filter=gitlab%20runner).

#### Keeping the security fork up to date with its canonical repo

Security forks are configured to automatically synchronize with the canonical repo, but this can be disabled if changes
exist in the security fork's `main` branch that do not exists in the canonical repo's `main` branch. This usually
happens when a security MR is merged into the security fork's `main`, but not into the canonical repo's `main` branch.
In this event, it is necessary to manually synchronize the security fork against the canonical repo.

From a checked-out canonical repo:

```shell
git fetch # ensure you have the latest changes from the canonical repo.
git remote add security git@gitlab.com:gitlab-org/security/gitlab-runner.git # add the security repo as a remote, be sure to use the git url.
git fetch security # fetch the security fork repo references.
git checkout -b security-main security/main # checkout the security fork's main branch.
git rebase --rebase-merges origin/main # rebase the canoncial main onto the security main.
git log --color --topo-order --oneline # ensure the resulting history is sane.
git push --force # push the resulting local security main brnach to the security remote repo.
```

Notes:

1. These steps will not fully synchronize the security and canonical repositories in both directions. They will only
   bring changes that are only the canonical repo, into the security repo. Synchronizing in the other direction is
   described below.
2. The security repos do/should not have force-push branch protection on the `main` branch, but if the one you are
   working with does, temporarily disable it so you can perform the last step.
3. If the security fork `main` branch becomes too out of date with the canonical repo `main` branch (specifically with
   changes that exist only in the security repo), merge conflicts are likely to occur when rebasing the canonical repo
   atop the security fork. You will have to resolve these.

#### Merging security MRs back into the canonical repo

When MRs created in the security repo are merged (into the security repo's `main` branch), the security and canonical
repo will become unsynchronized. Merging MRs from the security fork back into the canonical repo is a manual process.
Each MR in the security repo that a developer wants to incorporate into the canonical repo must be be done manually via
a new MR in the canonical repo. This procedure is manual so developers can control when these merges are done.

To merge an MR already merged in the security fork `main` branch into the canonical repo, follow these steps:

From a checked-out canonical repo:

```shell
git fetch # ensure you have the latest changes from the canonical repo.
git remote add security git@gitlab.com:gitlab-org/security/gitlab-runner.git # add the security repo as a remote, be sure to use the git url.
git fetch security # fetch the security fork repo references.
git checkout -b name-of-working-branch origin/main # create a new branch into which you'll cherry-pick commits from the security repo.
git cherry-pick sha-of-commit-in-security-repo # cherry-pick all commits from the relevant MR from the security repo into your branch in the canonical repo.
```

Repeat the final step for all commits in the relevant MR, in topographical order, _excluding the merge commit_. Do not
include the MR's merge commit in the cherry-picked commits.

Finally, create an MR in the canonical repo from this branch as usual.

Notes:

1. If the security fork becomes too out of date with the canonical repo, merge conflicts are likely when
cherry-picking the commits. You will have to resolve them.
2. You should manually synchronize the security repo as described above immediate after the MR is merged into the
   canonical main.
3. It is not the aim of these instruction to completely synchronize the security and canonical repos in both directions.
   Full synchronization will occur as a byproduct of merging all MRs from the security repo into the canonical repo. It
   is up to the developers' discretion when this happens for each MR.

## Issue Health Status Definitions

- **On Track** - We are confident this issue will be completed and live for the current milestone. It is all [downhill from here](https://basecamp.com/shapeup/3.4-chapter-13#work-is-like-a-hill).
- **Needs Attention** - There are concerns, new complexity, or unanswered questions that if left unattended will result in the issue missing its targeted release. Collaboration needed to get back `On Track` within the week.
  - If you are moving an item into this status please mention individuals in the issue you believe can help out in order to unstick the item so that it can get back to an `On Track` status.
- **At Risk** - The issue in its current state will not make the planned release and immediate action is needed to get it back to `On Track` today.
  - If you are moving an item into this status please consider posting in a relevant team channel in slack. Try to include anything that can be done to unstick the item so that it can get back to an `On Track` status in your message.
  - Note: It is possible that there is nothing to be done that can get the item back on track in the current milestone. If that is the case please let your manager know as soon as you are aware of this.

## Async Issue progress updates

When an engineer is actively working (workflow of ~workflow::"In dev" or further right on current milestone) on an issue they will periodically leave status updates as top-level comments in the issue. The status comment should include the updated health status, any blockers, notes on what was done, if review has started, and anything else the engineer feels is beneficial. If there are multiple people working on it also include whether this is a front end or back end update. An update for each of MR associated with the issue should be included in the update comment. Engineers should also update the [health status](https://docs.gitlab.com/ee/user/project/issues/#health-status) of the issue at this time.

This update need not adhere to a particular format. Some ideas for formats:

```markdown
Health status: (On track|Needs attention|At risk)
Notes: (Share what needs to be shared specially when the issue needs attention or is at risk)
```

```markdown
Health status: (On track|Needs attention|At risk)
What's left to be done:
What's blocking: (probably empty when on track)
```

```markdown
## Update <date>
Health status: (On track|Needs attention|At risk)
What's left to be done:

#### MRs
1. !MyMR1
1. !MyMR2
1. !MyMR3
```

There are several benefits to this approach:

- Team members can better identify what they can do to help the issue move along the board
- Creates an opening for other engineers to engage and collaborate if they have ideas
- Leaving a status update is a good prompt to ask questions and start a discussion
- The wider GitLab community can more easily follow along with product development
- A history of the roadblocks the issue encountered is readily available in case of retrospection
- Product and Engineering managers are more easily able to keep informed of the progress of work

Some notes/suggestions:

- We typically expect engineers to leave at least one status update per week, barring special circumstances
- Ideally status updates are made at a logical part of an engineers workflow, to minimize disruption
- It is not necessary that the updates happen at the same time/day each week
- Generally when there is a logical time to leave an update, that is the best time
- Engineers are encouraged to use these updates as a place to collect some technical notes and thoughts or "think out loud" as they work through an issue

## How to work with us

### On issues

Issues worked on by the Runner group a group label of `~group::runner`. Issues that contribute to the verify stage of the DevOps toolchain have the `~devops::verify` label.

### Get our attention

GitLab.com: `@gitlab-com/runner-group`
Slack: [`#g_runner`](https://gitlab.slack.com/archives/CBQ76ND6W)

### Code review

Our code review process follows the [general process](https://docs.gitlab.com/ee/development/code_review.html)
where you choose a reviewer (usually not a maintainer) and then send it over to a maintainer for the final review.

Current maintainers are members of the [`runner-maintainers`](https://gitlab.com/groups/gitlab-com/runner-maintainers/-/group_members?with_inherited_permissions=exclude) group.
Current reviewers are members of the [`runner-group`](https://gitlab.com/groups/gitlab-com/runner-group/-/group_members?with_inherited_permissions=exclude) group.

## Runner PM and engineering pre and post-sales process for runner scaling and configuration deep dives

As part of the pre-sales and post-sales engagement, your customer may have in-depth questions regarding topics such as GitLab Runner configuration, autoscaling options, how concurrency works, distributing the CI jobs workload, monitoring runners, and so on. The goal of the process below is to enable the runner team to be as efficient as possible in providing the level of support that our sales team and customers require.

### Step 1

- Start with the current [documentation page](https://docs.gitlab.com/runner/fleet_scaling/) on scaling a fleet of runners.

### Step 2

- Open an issue in the customer collaboration project and capture the specific configuration questions that the customer has. The purpose of the issue is to address some questions async if possible and finalize the agenda for any follow up synch calls . It also allows us to identify if we need to invite a specific engineer to the customer  call. Example [issue](https://gitlab.com/gitlab-com/account-management/eastern-north-america/walmart-poc-planning/-/issues/5).

### Step 3

- As needed, schedule the sync call with the customer and the Runner PM. The Runner PM will determine if other runner engineers will be included on the call.

## Team Resources

See [dedicated page](/handbook/engineering/development/ops/verify/runner/team-resources/#overview).
