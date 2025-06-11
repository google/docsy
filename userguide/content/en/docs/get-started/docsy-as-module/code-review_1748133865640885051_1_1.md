---
title: DEX Code Review Guidelines
description: "Code reviews are mandatory for every merge request, you should get familiar with and follow our Code Review Guidelines specific to GitLab Marketing projects."
---

## Overview

Code reviews are mandatory for every merge request, you should get familiar with and follow our Code Review Guidelines outlined here.

These guidelines also describe who would need to review, approve and merge your, or a community member's, merge request. They also describe the [review response time SLO's](#review-response-slo) team members have to abide by.

## Values

Every reviewer at GitLab must strive for our [reviewer values](/handbook/marketing/digital-experience/engineering/code-review-values/).

## Getting your merge request reviewed, approved, and merged

### Acceptance Checklist

This checklist encourages the authors, reviewers, and maintainers of merge requests (MRs) to confirm changes were analyzed for high-impact risks to quality, performance, reliability, security, observability, and maintainability.

Using checklists improves quality in software engineering. This checklist is a straightforward tool to support and bolster the skills of contributors to the GitLab Marketing codebases.

### Checklist for Submitting a Merge Request

1. Complete the Merge Request Template
   * Prefix the merge request with `Draft:` while you are building it.
   * Ensure all fields in the merge request template are properly filled out.
Provide a Comprehensive Description
   * Clearly describe what has changed, why the changes were necessary, and how they address the problem or feature request.
   * If applicable, mention any refactoring or architectural decisions made.
2. Link Related Issues
   * Reference any related issues, tickets, or user stories using appropriate syntax (e.g., related #1234).
Ensure the issues being referenced are correctly tagged and updated.
3. Document Testing Instructions
   * Provide clear, step-by-step instructions on how to test the changes locally or in a testing environment.
   * Mention any special configurations, test data, or preconditions required for testing.
   * If automated tests are included, specify their location and how to run them.
4. Deployment Steps
   * Detail the deployment process, including any scripts, commands, or configurations needed.
   * Mention any dependencies or services that need to be updated or restarted.
5. QA and Verification
   * Outline the QA process, specifying which environments (e.g., local, review app, production) will be used for validation.
   * List key scenarios and edge cases to be tested, including expected results.
6. Post-Deployment Validation
   * Provide a plan for validating the changes in the production environment post-deployment.
   * Include any monitoring or logging to watch for potential issues.
   * Detail a rollback plan in case of issues, specifying steps to revert the changes safely.
7. Request Feedback and Review
   * Remove `Draft:` from merge request title or explain why it is left in draft
   * Tag relevant team members for code review, QA, and any other necessary approvals.
   * Address any comments or requested changes promptly to ensure a smooth review process. The assignee is responsible for creating and tracking any follow-up issues to ensure they are completed in a timely manner.

## Reviewer

All GitLab engineers can, and are encouraged to, perform a code review on merge requests of colleagues and community contributors. If you want to review merge requests, you can wait until someone assigns you one, but you are also more than welcome to browse the list of open merge requests and leave any feedback or questions you may have. Note that while all engineers can review all merge requests, the ability to *accept* merge requests is restricted to maintainers.

You can find someone to review your merge requests by:

1. Looking on the list of [GitLab Digital Experience Team Members](/handbook/marketing/digital-experience/#team-members).
2. Utilizing Reviewer Roulette which will drop suggestion(s) for both a maintainer an reviewer currently available on our team. The suggestion will be listed as on comment on the change associated with your MR *Reviewer Roulette is only availble for the Buyer Experience project*
3. Utilizing the [Gitlab Review Workload Dashboard](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=buyer-experience) this will randomly select a maintainer and reviewer for you *Gitlab Review Workload Dashboard is only availble for the Buyer Experience project*

## Review turnaround time

Because [unblocking others is always a top priority](/handbook/values/#efficiency-for-the-right-group),
reviewers are expected to review merge requests in a timely manner,
even when this may negatively impact their other tasks and priorities.

Doing so allows everyone involved in the merge request to iterate faster as the
context is fresh in memory, and improves contributors' experience significantly.

### Review-response SLO

To ensure swift feedback to ready-to-review code, we maintain a `Review-response` Service-level Objective (SLO).
The SLO applies to GitLab team members, but not to other wider community contributors.

The SLO is defined as:

> Review-response SLO = (time when review is provided) - (time MR is assigned to reviewer)

The SLO value from Digital Experience GitLab team members is 2 business days

If you don't think you can review a merge request in the `Review-response` SLO
time frame, let the author know as soon as possible in the comments
(no later than 36 hours after first receiving the review request)
and try to help them find another reviewer or maintainer who is able to, so that they can be unblocked
and get on with their work quickly. Remove yourself as a reviewer.

Of course, if you are out of office and have
[communicated](/handbook/people-group/paid-time-off/#communicating-your-time-off)
this through your GitLab.com Status, authors are expected to realize this and
find a different reviewer themselves.

When a merge request author has been blocked for longer than
the `Review-response` SLO, they are free to remind the reviewer through Slack or add
another reviewer.

### Managing expectation

When you are assigned to review an MR and you are not able to get to it within the `Review-response` SLO, you should leave a comment on the MR informing the author of your delayed response. If possible, you should also indicate when the author can expect your feedback or help them find an alternative reviewer.

As the author of an MR you should reassign to another reviewer or maintainer if the `Review-response` SLO has not been met and you have been unable to contact the assignee.

## Code Owner approvals

Some GitLab projects use GitLab's [CODEOWNERS file feature](https://docs.gitlab.com/ee/user/project/codeowners/) to manage approvals for specific file paths and types. In the `digital-experience/buyer-experience` project, [we use a combination of CODEOWNERS approval rules plus MR approval settings](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request) in order to follow segregation of duties best practices. This section describes the process for updating the eligible approvers for CODEOWNERS changes for the `digital-experience/buyer-experience` project.

The Code Owners for the [CODEOWNERS file](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/.gitlab/CODEOWNERS) itself are managed with a rule in the file.
