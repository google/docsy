---
title: "Retrospective summaries"
---

## Retrospectives

This page contains executive summaries of retrospectives done by the Secure::static analysis group. The purpose of these summaries is to externalize lessons learned during the retrospective process.

Access to internal retrospective documentation is available to the team and their immediate counterparts only.

### 17.0

This milestone focused on the [deprecation](https://docs.gitlab.com/ee/update/deprecations.html#sast-analyzer-coverage-changing-in-gitlab-170) and migration of functionality from various SAST analyzers to the semgrep based analyzer.

During this milestone the following concerns were raised in no particular order:

1. Lack of awareness of QA processes that failed during the final moments of the milestone caused confusion.

1. The release process for the sast-rules/semgrep pair is cumbersome and needs streamlining.

1. Implementation plans were not kept up to date during the milestone and caused unnecessary difficulty during the review process.

Specific Remediations raised during the discussion:

1. Undertake [maintenance tasks](https://gitlab.com/gitlab-org/gitlab/-/issues/440373) to reduce complexity of semgrep & sast-rules release.

1. Apply strict review processes for implementation plans, and refer to the [MVC principle](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) more frequently

### 17.1

This milestone focused on [SAST in the IDE](https://gitlab.com/groups/gitlab-org/-/epics/13753) and various maintenance tasks. During the retrospective discussion, the following points were raised:

1. The format of weekly team meetings is inefficient. The second iteration of the meeting often repeats discussions from the first iteration. To address this, the meeting format will now include "Carry-over" items that need further discussion in the next timezone. All other items will be marked as read-only.

1. The policy for handling vulnerabilities is unclear. To improve this, we will create a [runbook](/handbook/engineering/development/sec/secure/static-analysis/runbooks) detailing the required steps.

### 17.2-17.3

During these milestones the team continued to work on SAST in the IDE. The retrospective focused on one main item:

1. We've discussed how blockers should be raised and how they should be handled. To enable a better reflection of status, we've changed the format of our standup to be more concise and will continue monitoring the situation.
