---
title: "Code Suggestions Testing Guide"
---

This document serves as a technical how-to guide for testing Code Suggestions functionality.

## End-to-End testing

Code suggestions is tested by using the API in [code_suggestions_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/api/3_create/code_suggestions_spec.rb) and tested indirectly through the Web IDE in [code_suggestions_in_web_ide_spec.rb](https://gitlab.com/gitlab-org/gitlab/-/blob/master/qa/qa/specs/features/ee/browser_ui/3_create/web_ide/code_suggestions_in_web_ide_spec.rb).

### Code Suggestions Self-managed End-to-End Tests

In MRs, the end-to-end tests exercise the Code Suggestions API against self-managed instances by using an instance of the GitLab Linux (Omnibus) package
integrated with the `latest` version of AI Gateway. The instance of AI Gateway is configured to return [mock responses](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist#mocking-ai-model-responses).
To view the results of these tests, open the `e2e:test-on-omnibus-ee` child pipeline and view the `ai-gateway` job. The `ai-gateway` job activates a cloud license and then assigns a Duo Pro seat to a test user, before the tests are run.

Note: The `e2e:test-on-omnibus-ee` pipeline either needs to be triggered manually or the MR needs to have the `pipeline:run-all-e2e` label applied.

For further information, please refer to the [GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios)

### Code Suggestions End-to-End Tests in live environments

Code Suggestion end-to-end tests run continuously against [Staging](https://staging.gitlab.com/users/sign_in) and [Production](https://gitlab.com/) GitLab environments.

These tests run in scheduled pipelines and ensure the end-to-end code suggestion experience is functioning correctly.
Results can be viewed in the `#e2e-run-staging` and `#e2e-run-production` Slack channels. The pipelines can be found below, access can be requested in `#test-platform`:

- [Staging-canary pipelines](https://ops.gitlab.net/gitlab-org/quality/staging-canary/-/pipelines)
- [Staging pipelines](https://ops.gitlab.net/gitlab-org/quality/staging/-/pipelines)
- [Canary pipelines](https://ops.gitlab.net/gitlab-org/quality/canary/-/pipelines)
- [Production pipelines](https://ops.gitlab.net/gitlab-org/quality/production/-/pipelines)

### Running end to end tests locally

#### Using a GDK instance

Ensure that your GDK is connected to a working AI gateway instance, and that the root user has the ability to request code suggestions.

```shell
cd qa
bundle install
QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

The above command will log in as the default root user and create the appropriate personal access token to use in the test. This has to be done using the UI, so explicitly passing an admin access token will make the tests a lot faster:

```shell
GITLAB_QA_ADMIN_ACCESS_TOKEN=<admin_PAT> QA_LOG_LEVEL=DEBUG QA_GITLAB_URL=https://gdk.test:3443  bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag ai_gateway
```

#### Using an Omnibus instance (orchestrated tests)

To run the AI gateway end to end tests (which includes code suggestion tests) as [orchestrated tests](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#orchestrated-tests), the following command will use the latest GitLab Linux (Omnibus) package and the `latest` AI Gateway image.

```shell
CHROME_DISABLE_DEV_SHM=true DOCKER_DEFAULT_PLATFORM=linux/amd64  GITLAB_LICENSE_MODE=test QA_EE_ACTIVATION_CODE=<1Password> bundle exec gitlab-qa Test::Integration::AiGateway EE --no-teardown
```

Please see [GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#aigateway-scenarios) for more details about AI Gateway scenarios.

#### Using staging.gitlab.com

The code suggestions end to end tests can be run against live environments. The following will execute the tests against staging:

```shell
cd qa
bundle install
QA_LOG_LEVEL=debug GITLAB_QA_ADMIN_ACCESS_TOKEN=<1Password> GITLAB_QA_USER_AGENT=<1Password> GITLAB_USERNAME=gitlab-qa GITLAB_PASSWORD=<1Password> GITLAB_QA_ACCESS_TOKEN=<1Password> QA_GITLAB_URL=https://staging.gitlab.com bundle exec rspec qa/specs/features/ee/api/3_create/code_suggestions_spec.rb --tag external_ai_provider
```

To find the secret values in 1Password, search for the variable name and the environment name, for example `staging`. Please see [GitLab QA documentation](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md#supported-gitlab-environment-variables) for a complete list of supported environment variables.
