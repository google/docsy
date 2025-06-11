---

title: Auto DevOps
description: "Auto DevOps is a technology that allows automated application of DevOps best practices."
---







## Current end-to-end tests

At the time of writing this entry there are two end-to-end test files:

- [`auto_devops_templates_spec.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/browser_ui/7_configure/auto_devops/auto_devops_templates_spec.rb)
- [`create_project_with_auto_devops_spec.rb`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb)

under the [`qa/specs/features/browser_ui/7_configure`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/browser_ui/7_configure) folder of the qa directory. There are not presently any end-to-end api-based tests.

### Where the tests execute

#### Non-quarantined test execution environments

The `Configure AutoDevOps Templates template: express|rails|spring works with Auto DevOps` test is a tagged to run only in the [`:staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines) environment and therefore runs in :

- [`staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
    -`qa-triggers-browser_ui-7_configure`

#### Quarantined tests

The following tests, if they are tagged `quarantine`, will run in these environments:

`Configure AutoDevOps Templates template: express|rails|spring works with Auto DevOps`

- [`staging`](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
  - `qa-triggers-browser_ui-quarantine`

## Configure your GDK to run the tests

Follow the documentation on [how to Use GDK with a GKE cluster](https://gitlab.com/gitlab-org/gitlab-development-kit/-/tree/master/doc/howto/kubernetes#use-gdk-with-a-gke-cluster).

NOTE: The default instructions below prescribe using "the GCP project called `gitlab-internal-153318` for development and testing," which, in order to create a cluster on said project, requires a set of permissions your humble author did not possess, whereas I have found that using the project `gitlab-qa-resources` was more compliant with my permission set.

### Run the tests

To run the `create_project_with_auto_devops_spec` tests, ensure you have GDK set up to run a GKE cluster (see [above instructions](/handbook/engineering/development/ops/configure/autodevops/#configure-your-gdk-to-run-the-tests)) and call the test from the `../gitlab/qa/` directory.

Example: `CHROME_HEADLESS=true bundle exec bin/qa Test::Instance::All http://gdk.test:3000 -- qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb --tag orchestrated --tag kubernetes`

or

`gitlab-qa Test::Instance::Image EE -- qa/specs/features/browser_ui/7_configure/auto_devops/create_project_with_auto_devops_spec.rb --tag orchestrated --tag kubernetes` to run [orchestrated](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests).

To run the `auto_devops_templates_spec.rb` tests, it is easiest to execute the tests against the [staging](https://staging.gitlab.com/) environment by following [these instructions](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#testinstancestaging) for setting up your environment variables.
NOTE: You will need access to the "QA Vault" in 1password. If you require access, you can fill out an individual access request from [here](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request)

Example: `gitlab-qa Test::Instance::Staging -- qa/specs/features/browser_ui/7_configure/auto_devops/auto_devops_templates_spec.rb` to run [orchestrated](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests) (append `--tag quarantine` to run quarantined tests)

### Useful links for contributing to Auto DevOps

- [Tips and Troubleshooting](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/master/doc/howto/kubernetes/tips_and_troubleshooting.md)
- [Useful Commands](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/master/doc/howto/kubernetes/useful_commands.md)
- [How to work with slow connections](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/master/doc/howto/auto_devops/tips_and_troubleshooting.md#qa)
- [Enabling premium features for development purposes](https://license.gitlab.com/users/sign_in)
- [Thanos query for complete Auto DevOps pipelines](https://thanos-query.ops.gitlab.net/graph?g0.range_input=2d&g0.max_source_resolution=0s&g0.expr=sum(increase(auto_devops_pipelines_completed_total%7Benv%3D%22gprd%22%7D%5B6h%5D))%20by%20(status)&g0.tab=0)

<sup>*</sup> For information as to why we're running master pipelines on `qa-mirror` see the following issues:

- [https://gitlab.com/gitlab-org/gitlab-qa/-/issues/423](https://gitlab.com/gitlab-org/gitlab-qa/-/issues/423)
- [https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4717](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/4717)
