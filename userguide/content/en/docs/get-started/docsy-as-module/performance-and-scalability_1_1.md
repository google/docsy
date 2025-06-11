---

title: "Performance and Scalability"
description: "The Quality Department has a focus on measuring and improving the performance of GitLab, as well as creating and validating reference architectures that self-managed customers can rely on as performant configurations."
---







The Quality Department has a focus on measuring and improving the performance of GitLab, as well as
creating and validating reference architectures that self-managed customers can rely on as
performant configurations.

## Reference Architectures

To ensure that self-managed customers have performant, reliable, and scalable on-premise
configurations, the Quality Department has built and verified [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/).
The goal is to provide tested and verified examples to customers which can be used to ensure good performance and
give insight into what changes need to be made as organizations scale.

[Reference Architectures](https://gitlab.com/gitlab-org/quality/reference-architectures) project is used to track all work related
to GitLab Reference Architectures and [`#reference-architectures`](https://gitlab.slack.com/archives/C015V8PDUSW) Slack channel is used for
discussions related to the Reference Architectures.

| Users      | Status            | Link to more info                                                                                                                                                         |
|------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1k         | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/1k_users.html)                                                                          |
| 1k hybrid  | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/1k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts)                                                                                   |
| 2k         | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/2k_users.html)                                                                          |
| 2k hyrbid  | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/2k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative)  |
| 3k         | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/3k_users.html)                                                                          |
| 3k hyrbid  | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/3k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative)  |
| 5k         | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/5k_users.html)                                                                          |
| 5k hyrbid  | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/5k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative)  |
| 10k        | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html)                                                                         |
| 10k hyrbid | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative) |
| 25k        | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/25k_users.html)                                                                         |
| 25k hyrbid | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/25k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative) |
| 50k        | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/50k_users.html)                                                                         |
| 50k hyrbid | Complete          | [Documentation](https://docs.gitlab.com/ee/administration/reference_architectures/50k_users.html#cloud-native-hybrid-reference-architecture-with-helm-charts-alternative) |
| 100k       | To Do (on demand) | [Issue link](https://gitlab.com/gitlab-org/quality/reference-architectures/-/issues/6)                                                                                    |

## Performance Tool

We have created the [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance)
which measures the performance of various endpoints under load.
This Tool is in use internally within GitLab, but it is also available for
self-managed customers to set up and run in their own environments.

If you have a self-managed instance and you would like to use the Tool to test its performance,
please take a look at the documentation in the
[Tool's README file](https://gitlab.com/gitlab-org/quality/performance/blob/master/README.md).

More detailed information about the current test list that is run by GPT
can be viewed at the [Test Details wiki page](https://gitlab.com/gitlab-org/quality/performance/wikis/current-test-details).

### Test Process

The GitLab Performance Tool is run against the existing reference architectures using
the latest Nightly release of GitLab. This allows us to catch and triage degradations early in
the process so that we can try to implement fixes before a new release is created. If problems are
found, issues are created for degraded endpoints and are then prioritized during the weekly
[Bug Refinement](../#bug-refinement) meeting.

High-level GPT pipeline overview:

- Update environment job: starts up and updates the target environment from [Quality Config](https://gitlab.com/gitlab-org/quality/gitlab-environment-toolkit-configs/quality) with the latest Nightly using [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
- Test job: runs performance [tests](https://gitlab.com/gitlab-org/quality/performance/wikis/current-test-details) against the environment
- Report job: publishes results to [GPT Wiki](https://gitlab.com/gitlab-org/quality/performance/wikis/Benchmarks/Latest) and [`#qa-performance`](https://gitlab.slack.com/archives/CH8J9EG49) Slack channel
- Stop job: [stops](https://cloud.google.com/compute/docs/instances/stop-start-instance) the target environment instances to save costs

#### Test Results

Information on the testing results can be found over on the
[Reference Architecture documentation](https://docs.gitlab.com/ee/administration/reference_architectures/#validation-and-test-results).

#### Performance results comparison of different GitLab versions

Every month on the 23rd a comparison [pipeline](https://gitlab.com/gitlab-org/quality/performance/-/pipeline_schedules/39211/edit)
is triggered that provides performance results comparison table of the last 5 GitLab versions.
It builds GitLab docker container with the test data using [performance-images](https://gitlab.com/gitlab-org/quality/performance-images) project,
runs GPT against the last 5 GitLab versions simultaneously, then it generates performance results summary.

The latest results are automatically posted to [the GitLab versions wiki page](https://gitlab.com/gitlab-org/quality/performance/wikis/Benchmarks/GitLab-Versions)
in the GPT project and [`#qa-performance`](https://gitlab.slack.com/archives/CH8J9EG49) Slack channel.

#### No shared environments usage

To ensure consistent and reliable performance results we need to effectively control each part of the process, including the test environment setup and its test data, for the following reasons:

1. Shared environments with unknown environment loads and test data shapes can notably skew performance results.
1. Performance test runs can affect other pipelines running against the environment, such as GitLab QA.
1. Environment configuration such as rate limits can block the tests from running correctly.
1. Performance test runs can take more than 90 minutes to complete. Deployments on some environment can occur within 50-60 minutes, which would impact the results notably.
1. Investigating any performance test failures wouldn't be possible due to various reasons as shown above to find the cause as well as not having full access to the environment to perform investigations.

For the above reasons we test against fully controlled environments and don't tests others such as Staging or Production.

### Expanding the Tool

The Quality Department aims to enhance the GPT and performance test coverage.
One of the goals is to release the GPT v3, you can track its progress in this [epic](https://gitlab.com/groups/gitlab-org/-/epics/4300).
We plan to further increase the test coverage, especially in more complex areas like CI/CD and Registry.

Additionally, we would like to define a process for conducting an endpoint coverage review on some regular cadence,
whether that is after every release, once a quarter, or some other timing.
Because GitLab is constantly expanding and evolving, we need to iterate on our coverage in tandem.

We've created [an epic](https://gitlab.com/groups/gitlab-org/quality/-/epics/10) to track the
initial expansion as well as the work defining our recurring process for analyzing endpoints and
verifying our coverage is adequate.

Another area that Quality team would like to explore on is to [shift performance testing left](https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/570).

## Browser Performance Tool

We have created the [GitLab Browser Performance Tool](https://gitlab.com/gitlab-org/quality/performance-sitespeed)
to specifically test web page frontend performance in browsers. More detailed information about
the current test pages list can be viewed at the [Test Details wiki page](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/wikis/Current-Test-Details).

Testing process is similar to [GPT testing process](#test-process). After 10k environment is updated to the latest Nightly,
GBPT is run against the environment and then it's being shut down to save costs.

| Environment                                                                             | GCP project                                                                         | Schedule                                                                                          | Latest results and dashboards                                                                  |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [10k](https://docs.gitlab.com/ee/administration/reference_architectures/10k_users.html) | [10k](https://console.cloud.google.com/home/dashboard?project=gitlab-qa-10k-cd77c7) | [Every weekday](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/pipeline_schedules) | [10k wiki](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/SiteSpeed/10k) |

## Performance Playbook

When self-managed customers experience or suspect they are experiencing performance issues, we have
developed a playbook for initial steps to investigate the problem.

The first step is requesting logs. We use a tool called fast-stats in conjunction with the following
log artifacts. These logs should be either rotated, or logs from a peak day after peak time.

- `production_json.log`
- `api_json.log`
- Gitaly logs: `/var/log/gitlab/gitaly/current`
- Sidekiq logs: `var/log/gitlab/sidekiq/current`
