---
title: "Test Intelligence"
---

## Introduction

As the owner of [pipeline configuration](https://docs.gitlab.com/ee/development/pipelines/index.html) for the [GitLab project](https://gitlab.com/gitlab-org/gitlab), the Engineering Productivity team has adopted several test intelligence strategies aimed to improve pipeline efficiency with the following benefits:

- Shortened feedback loop by prioritizing tests that are most likely to fail
- Faster pipelines to scale better when Merge Train is enabled

These strategies include:

- Predictive test jobs via test mapping
- Fail-fast job
- Re-run previously failed tests early
- Selective jobs via pipeline rules
- Selective jobs via labels

## Predictive test jobs via test mapping

Tests that provide coverage to the code changes in each merge request are most likely to fail. As a result, merge request pipelines for the [GitLab project](https://gitlab.com/gitlab-org/gitlab) run only the predictive set of tests by default. These include:

- [RSpec predictive jobs](https://docs.gitlab.com/ee/development/pipelines/#rspec-predictive-jobs) which runs relevant RSpec tests that are mapped to the code changes
- [Jest predictive jobs](https://docs.gitlab.com/ee/development/pipelines/#jest-predictive-jobs) which runs relevant Jest tests that are mapped to the code changes

See <https://docs.gitlab.com/ee/development/pipelines/index.html#predictive-test-jobs-before-a-merge-request-is-approved> for more information.

## Fail-fast job

There is a [fail-fast job](https://docs.gitlab.com/ee/development/pipelines/#fail-fast-job-in-merge-request-pipelines) in each merge request pipeline aimed to run all the RSpec tests that provide coverage for the code changes, hence are most likely to fail. It uses the same [test_file_finder](https://gitlab.com/gitlab-org/ruby/gems/test_file_finder) gem for test mapping. The job provides faster feedback by running early and stops the rest of the pipeline right away if any of the fail-fast job tests fail.
Take a look at this [youtube video](https://www.youtube.com/watch?v=FCCbxZky5Nk) for details on how [GitLab](https://gitlab.com/gitlab-org/gitlab) implements the fail-fast job with test_file_finder.
Note that the current design only works with low-impacting merge requests which are only mapped to a small set of tests. If there is a large number of tests that are likely to fail for a merge request, putting them in a single job is not feasible and could result in a long-running bottleneck which defeats its purpose.

See <https://docs.gitlab.com/ee/development/pipelines/index.html#fail-fast-job-in-merge-request-pipelines> for more information.

Premium GitLab customers, who wish to incorporate the `Fail-Fast job` into their Ruby projects, can set it up with our [Verify/Failfast](https://docs.gitlab.com/ee/ci/testing/fail_fast_testing.html) template.

## Re-run previously failed tests early

Tests that previously failed in a merge request are likely to fail again, so they provide the most urgent feedback in the next run.
To grant these tests the highest priority, the [GitLab](https://gitlab.com/gitlab-org/gitlab) pipeline [prioritizes previously failed tests by re-running them early](https://docs.gitlab.com/ee/development/pipelines/#re-run-previously-failed-tests-in-merge-request-pipelines) in a dedicated job, so it will be one of the first jobs to fail if attention is needed.

See <https://docs.gitlab.com/ee/development/pipelines/index.html#re-run-previously-failed-tests-in-merge-request-pipelines> for more information.

## Selective jobs via pipeline rules

The GitLab pipeline consists of hundreds of jobs, but not all are necessary for each merge request. For example, a merge request with only changes to documentation files do not need to run any backend tests, so we can exclude all backend test jobs from the pipeline.
See [specify-when-jobs-run-with-rules](https://docs.gitlab.com/ee/ci/jobs/job_control.html#specify-when-jobs-run-with-rules) for how to include/exclude CI jobs based on file changes.
Most of the pipeline rules for the [GitLab project](https://gitlab.com/gitlab-org/gitlab) can be found in <https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/ci/rules.gitlab-ci.yml>.

## Selective jobs via labels

Developers can add labels to run jobs in addition to the ones selected by the pipeline rules. Those labels start with `pipeline:` and multiple can be applied. A few examples that people commonly use:

- `~"pipeline:run-all-rspec"`
- `~"pipeline:run-all-jest"`
- `~"pipeline:run-as-if-foss"`
- `~"pipeline:run-as-if-jh"`
- `~"pipeline:run-praefect-with-db"`
- `~"pipeline:run-single-db"`

See [docs](https://docs.gitlab.com/ee/development/pipelines/) for when to use these pipeline labels.
