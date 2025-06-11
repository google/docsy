---
title: Environments Group - GitLab Quality Assurance End-to-End Testing for the Environments group
---

## Overview

The goal of this page is to document how the Environments group uses the [GitLab QA framework](https://gitlab.com/gitlab-org/gitlab-qa) ([video walkthrough](https://www.youtube.com/watch?v=enfx6tiz5WY)) to implement and run [end-to-end tests](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/).

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/enfx6tiz5WY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

[Supporting slides for the above walkthrough](https://docs.google.com/presentation/d/1KyJ3Q2_tl38Axb-Esi7SNM8yEtqj40O4itfJrHuV7C4/edit?usp=sharing)

### Why do we have them

> End-to-end testing is a strategy used to check whether your application works as expected across the entire software stack and architecture, including the integration of all micro-services and components that are supposed to work together.

The testing strategy for [this level of the pyramid](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html) can be found under the [Environments Test Plan](https://gitlab.com/groups/gitlab-org/-/epics/8642) epic.

### Where are they

In the [GitLab repository](https://gitlab.com/gitlab-org/gitlab), the End-to-End tests for the Environments group are located at:

- `qa/qa/specs/features/api/7_configure/`
- `qa/qa/specs/features/browser_ui/7_configure/`
- `qa/qa/specs/features/ee/api/7_configure/`
- `qa/qa/specs/features/ee/browser_ui/7_configure/`

### Limitations

End-to-End tests for Environments are running only in staging and staging-canary environments.
It is not possible to run these kind of tests against your local GDK without directly tweaking the test code.

### FAQ

#### I triggered the e2e:test-on-omnibus job. Where do I find the tests?

If you have an MR and want to make sure it is running the End-to-End tests, please trigger the manual `e2e:test-on-omnibus` job on the pipeline of your MR. After the pipeline runs there will be a note on your MR titled "Allure report" with a test report link.
It is also possible to see which jobs failed in the `e2e:test-on-omnibus` pipeline directly.

**Note:** Currently, the tests most relevant for Environments run only on staging and staging canary environments.

#### How can I find tests results for staging or staging canary?

Tests running in [staging](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines) need access to https://ops.gitlab.net/gitlab-org/quality/staging/.
The results of test runs can be found also in the `#e2e-run-staging` Slack channel. The jobs in the staging pipeline that are relevant to Environments are:

- `ee-qa-api`
- `qa-browser_ui-7_configure`

#### Which resources tests use and where can they be found?

Environments End-to-end tests use the `gitlab-qa-resources` project in GCP to spin up GKE clusters.

#### What's the GitLab Agent for Kubernetes client version in use?

The version in use can be found on the [Runtime Environment Variables file](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/runtime/env.rb#L433).

### Troubleshooting

Please reach out in the `#s_developer_experience` channel.

### Helpful Documentation

- [Testing Guide - End-to-End Testing](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
- [GitLab QA orchestration tool](https://gitlab.com/gitlab-org/gitlab-qa)
- [Run QA tests against your GDK setup](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/run_qa_against_gdk.md)
- [Beginner's Guide to writing End-to-End tests](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/beginners_guide.html)
