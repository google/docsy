---

title: "Runner Group - User Stories"
description: "The GitLab Runner Group's user stories."
---

## User stories

We use user stories at GitLab to guide our solutions as we create design deliverables. [User stories are different to JTBDs](/handbook/product/ux/jobs-to-be-done/#jtbd-user-stories-and-tasks), but still relate to one another and are important within the product development process. User stories are focused on a persona, the tools they are using, and how and why they are completing the job at hand.

## Runner Fleet user stories mapping

All of our user stories map back to our [Runner JTBDs](/handbook/engineering/development/ops/verify/runner/jtbd/).

### Sub-Job: managing the execution of CI jobs

- As a Platform Engineer who is administering runners for a GitLab instance or group, I need to know when a job executor is compromised, so I can prevent vulnerabilities from infiltrating my product.
- As a Platform Engineer who is administering runners for a GitLab instance or group, I need to perform general administrative functions as quickly and efficiently as possible, so that I enable my team to continue their daily work.
- As a Platform Engineer who is administering runners for a GitLab instance or group, I need to determine how many runners are out of date by X versions, so that I can help with compliance enforcement.
- As a Platform Engineer who is administering runners for a GitLab instance or group, I need to specify the automatic removal of X runners that have not contacted the GitLab instance for X period of time, so that I can reduce the overhead of maintaining a large fleet of runners.
- As a Platform Engineer who is administering runners for a GitLab instance or group, I need to validate that a team hosting their own runners is on an approved version, so that I can validate it is compliant with my organization.
- As a Software Engineer who is running a CI job, I need to know which of my runners are used for my own development purposes, so I can delete them if they are no longer useful.

### Sub-Job: troubleshooting CI jobs`

- As a Platform Engineer who is helping a developer or team troubleshoot issues with a CI job, I need to determine who registered the runner of that CI job, so I can quickly troubleshoot and resolve the issue.
- As a Platform Engineer who is helping a developer or team troubleshoot issues with a CI job, I need to determine which group the runner is associated with, so that I can quickly troubleshoot and resolve the issue.
- As a Platform Engineer who is checking on CI jobs' performance for an instance, I need to see pending and running jobs, so that I can quickly determine if there are performance issues with that runner and the underlying host system or platform.
