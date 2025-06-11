---
title: Incubation Engineering Maturity Stages
---

This guide provides guidelines and best practices for how to properly position an Incubation Engineering project, and what needs to be accomplished in order for a project to mature from Experiment to Beta to Generally Available.

## Establish an Experiment

The first step when releasing the first iteration for an Incubation Engineering project is to establish the experiment. See the [documentation](https://docs.gitlab.com/ee/policy/experiment-beta-support.html#experiment) for more details on what makes a GitLab Experiment.

To establish an experiment, ensure that the feature being released has:

1. A documentation page or blog post, that reflects that the feature is subject to the [GitLab Testing Agreement](/handbook/legal/testing-agreement/).
2. An [experiment badge](https://design.gitlab.com/usability/feature-management#highlighting-feature-versions) in the UI.
3. A UI for users to enable/disable the feature. This UI should also link to the [GitLab Testing Agreement](/handbook/legal/testing-agreement/).
4. A feedback issue ([example](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/feedback/-/issues/10)) or feedback project ([example](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/feedback)) so user can easily provide feedback and bug reports.

Be sure not to include this feature in a release post until it is mature enough to be classified as a Beta feature.

## Graduate from Experiment to Beta

Once an experiment has matured sufficiently and the SEG is confident the feature is stable, unlikely to cause data loss, and the interface is unlikely to drastically change, the feature should be moved to Beta. See the [documentation](https://docs.gitlab.com/ee/policy/experiment-beta-support.html#beta) for expectations of a Beta feature.

To move an experiment to Beta, the following items should be in place:

1. Any monitoring and alerting to ensure that any availability issues are captured. Use [logging](https://docs.gitlab.com/ee/development/logging.html) or [event tracking](/handbook/engineering/development/analytics/analytics-instrumentation/event_system_draft.html) and build dashboards from the data received.
2. [Runbook entries](https://gitlab.com/gitlab-com/runbooks) are added if necessary in order to support SRE in the event of availability issues.
3. All data for this feature should be included in the [backup and restore processes](https://docs.gitlab.com/ee/administration/backup_restore/).
4. Any feature flags should be on by default, or better yet removed completely.
5. Update the experiment badge to a [beta badge](https://design.gitlab.com/usability/feature-management#highlighting-feature-versions) in the UI.
6. Documentation must exist (blog posts aren't sufficient), and the documentation should reflect beta status.
7. Sufficient support materials should exist so that Support teams have the resources necessary to help customers with issues.
8. One or more release post items.

## Graduate from Beta to Generally Available (GA)

The final maturity step for a feature is to move to Generally Available (GA). See the [documentation](https://docs.gitlab.com/ee/policy/experiment-beta-support.html#generally-available-ga) for expectations of a GA feature.

A feature that is ready for GA will have:

1. Passed a [Production Readiness Review](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/.gitlab/issue_templates/production_readiness.md)
2. Completed a design review and all UIs are in line with GitLab's [design guidelines](https://design.gitlab.com/).
3. Full documentation in line with GitLab's [documentation style guide](https://docs.gitlab.com/ee/development/documentation/styleguide/).
4. Full support documentation and is fully supported by the customer service team.
