---
title: "Distribution Team Merge Request Handling"
description: "Workflow and responsibilities for Merge Requests performed by Distribution Engineers."
---

## Introduction

Merge Requests are the responsibility of all Distribution Engineers. For the most part, we follow the [engineering process for code review](/handbook/engineering/workflow/code-review/).

## Workflow

The Distribution team uses the [Reviewers feature](https://docs.gitlab.com/ee/development/code_review.html#dogfooding-the-reviewers-feature) in the code review process. The process looks like this:

1. Author opens a merge request in a project.
1. When ready for review:
   - If the merge request included an automatic Reviewer Roulette comment like [this one](https://gitlab.com/gitlab-org/charts/gitlab/-/merge_requests/3801#note_1947892314), after the `danger-review` CI/CD job has finished:
      - The Author assigns the review directly to the reviewer suggested by the Reviewer Roulette and applies the "workflow::ready for review" label using the command "@gitlab-bot ready @username-of-someone".
   - If not:
      - The Author applies the "workflow::ready for review" label.
      - A reviewer checks the [Distribution merge requests ready for review dashboard](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) per their priority regularly, and then picks up the merge request when they are able to work on it by adding themselves under the Reviewers section, and adding the "workflow::in review" label.
1. Once approved, the Reviewer adds a Maintainer under the Reviewers section for final review/merge. At this point, the Reviewer may decide whether to keep themselves listed as a Reviewer or to remove themselves (so the MR no longer appears in their MR list). If the Maintainer has any comments, then they work with the Author to clarify. It is the responsibility of the Maintainer to find another Maintainer to look at a merge request that is assigned to them if they are unable.

**NOTE**: If you are working on a merge request that requires a response quicker than the [SLO](#service-level-objective), please `@` mention the `gitlab-org/distribution` group in order to alert the Distribution team. The team will exercise best effort in handling these requests.

## Reviewers

By default, every Distribution Engineer team member who is not a Maintainer on a project should consider themselves a Reviewer. You are encouraged to spend some of your time looking at Merge Requests in any of our [projects](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects) that have the "workflow::ready for review" label.

Reviewers are responsible for working with contributors to ensure that changes meet our standards, before approving and passing them on to a Maintainer for final review and merge. Reviewers should confirm that the Merge Request addresses the problem the linked Issue describes. Reviewers are also responsible for verifying that all applicable Merge Request checklist items have been completed. In situations where a checklist item is not applicable, Reviewers should verify that the item is indeed not necessary. When you encounter a situation as Reviewer where you are unsure whether something meets our standards, ping a Maintainer directly within the Merge Request with the question.

Additionally, in the spirit of "everyone can contribute", anyone who is interested is encouraged to be a Reviewer. There should be no barrier preventing anyone from reviewing available merge requests. We encourage any interested party to participate.

Anyone who plans on actively participating in the Reviewer process is encouraged to [update their entry on the team page](/handbook/about/editing-handbook/#add-yourself-to-the-team-page).

When looking for merge requests to review, consider checking the [Merge Request Report](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) to see what reviews are in danger of breaching the [SLO](#service-level-objective).

## Maintainers

Project Maintainers are encouraged to ensure that Reviewers, and in particular Reviewers who have designated themselves [enrolled in the Reviewer mentorship program](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program), look at a Merge Request before they spend time on it. There are times when it makes sense for a Maintainer to not wait for a reviewer, so judgment should be used here. For example, we do need to keep the [SLO](#service-level-objective) in mind. If an MR is in danger of missing that deadline, a Maintainer should not hesitate to respond.

## Assigning Merge Requests

To help achieve all of this, we should urge contributors to **not** assign merge requests to an individual when looking for initial review, unless there is a specific reason someone should look at a merge request. Rather, the merge request should have the "workflow::ready for review" label applied, and a Reviewer will add themselves under the Reviewers section when they are beginning to look into it.

If a merge request is assigned directly to you as a Maintainer without prior review, you are encouraged to assign it to an available Reviewer. If a merge request is assigned directly to you as a Reviewer, use your judgment. If you will not be able to work on it soon, try and find another Reviewer to take a look.

## Service-level objective

When looking for a merge request to work on, consider the [GitLab Review-response SLO](/handbook/engineering/workflow/code-review/#review-response-slo). Anything in danger of breaching that deadline should be looked at first.

Due to the load on the Distribution team, the SLO is longer than that of the rest
of the company:

- From GitLab team members: Review-response SLO < 4 business days
- From authors of [Leading Organizations](/handbook/engineering/workflow/code-review/#leading-organizations): Review-response SLO < 6 business days

The team aims to return to the company-wide SLO standard dependent upon expanding the team and paying down technical debt.

## Review iteration

Once the merge request is in review, the "workflow::in review" label should remain on the merge request as the Reviewer/Maintainer and Author iterate through feedback.

When the merge request is ready to be handed back for changes or further review, ensure that the individual responsible for the next step is assigned and signal the handoff with a fresh comment mentioning the individual in the Merge Request.

**NOTE**: By default, Authors should handoff to the Reviewer/Maintainer who previously reviewed the merge request. If that individual is listed as away in their status for longer than two days, then please `@` mention the `gitlab-org/distribution` group in order to alert the Distribution team for a new reviewer.

## Squash and merge

Distribution-owned projects enable [squash and merge](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html) by default. This feature combines all of the merge request's commits into one commit before merging, ensuring a clean history on the target branch.

Because the squash and merge feature is set to [encourage](https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html#squash-commits-options), authors can still disable the option if desired. For example, merge requests with only one commit would not necessarily benefit from a squash prior to merge.

## References

1. [Distribution team projects](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#all-projects) - The full list of projects the Distribution team maintains
1. [Engineering Projects](/handbook/engineering/projects/) - The full list of supported GitLab projects. Clicking on the project name will bring you to the list of Maintainers and Reviewers for each project.
