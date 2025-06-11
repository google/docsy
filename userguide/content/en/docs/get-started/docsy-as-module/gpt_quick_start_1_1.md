---
title: GitLab Performance Tool (GPT) Quick Start
description: This guide provides steps to use the GitLab Performance Tool
category: Self-managed
---

## What is GitLab Performance Tool (GPT)

[The GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) (`gpt`) is built and maintained by the GitLab Quality Engineering - Enablement team to provide performance testing of any GitLab instance. The tool has itself been built upon the industry-leading open-source tool [k6](https://k6.io/) and provides numerous tests that are designed to effectively performance test GitLab.

GitLab recommends running GPT against your GitLab environment to get an effective performance test. We do not recommend running on a production instance. Only run on production if it’s really required. If so, then run it at the quietest possible time. Depending on your system environment, the test may take up at least 4 hours.

**NOTE**: This quick start was written and adopted based on [documentation for `GPT v2` (2.10.0)](https://gitlab.com/gitlab-org/quality/performance/-/blob/2.10.0/docs/README.md). Please always check the [official GitLab Project documentation: GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/README.md) for latest changes.

## Requirements

- A separate workstation or server with Docker installed.
- Must be able to connect to the GitLab instance.

## Initializing the environment

On your workstation with Docker installed, please run the following in your terminal:

```bash
# clone the gpt project
git clone https://gitlab.com/gitlab-org/quality/performance
cd performance
mkdir results
```

## Preparing the Environment

This will generate the data that will be used for the test later. More details on [GPT Project](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/environment_prep.md):

1. Create [Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#creating-a-personal-access-token) with API scope from an **Admin** user.
   1. In the top-right corner on your GitLab UI, select your avatar.
   1. Select **Edit profile**.
   1. In the left sidebar, select **Access Tokens**.
   1. Enter a name and optional expiry date for the token.
   1. Select the [API scopes](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-token-scopes).
   1. Select **Create personal access token**.
   1. Save the personal access token somewhere safe. After you leave the page, you no longer have access to the token.

1. Next, edit your environment file under `./k6/config/environment/`. In this example, we will use the 2k users environment. Hence, it will be the `2k.json`. Replace the values for `"url"` with the URL of your GitLab instance and `"user"` with the username of the Admin user created in the above step.

   ```bash
   vi ./k6/config/environment/2k.json
   ```

   Edit the following lines:

   ```yaml
   "url": "<your gitlab url>",
    "user": "<username that the access token belong to>",
   ```

   **NOTE:** If you have a top-level group named `gpt`, please replace the value for `"root_group"` with another unique top-level group name.

1. Run the following docker command to generate the data needed for the performance test:

   ```bash
   docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v $(pwd)/results:/results gitlab/gpt-data-generator --environment 2k.json
   ```

   **NOTE:** Replace <TOKEN> with your personal access token created in Step 1.

## Running the Tests

Full details and explanation are available at [GPT project](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md)

Run the following Docker command:

```bash
docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v  $(pwd)/k6/tests:/tests -v $(pwd)/results:/results gitlab/gitlab-performance-tool --environment 2k.json --options <OPTIONS-FILE>.json
```

**NOTE:** Please replace `<TOKEN>` with your personal access token, then replace `<OPTIONS-FILE>` with `60s_40rps.json` to run against 2k users testing. [Optional] You may replace `<OPTIONS-FILE>` with the following recommended options files based on your target environment user count:

- 1k - `60s_20rps.json`
- 2k - `60s_40rps.json`
- 3k - `60s_60rps.json`
- 5k - `60s_100rps.json`
- 10k - `60s_200rps.json`
- 25k - `60s_500rps.json`
- 50k - `60s_1000rps.json`

## Viewing Test Output and Results

After starting the tool you will see it running each test in order. Once all tests have completed you will be presented with a results summary. As an example, here is a [test summary](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md#test-output-and-results) you can view.

For your reference, here are the test runs from GitLab:

1. [Latest Results](https://gitlab.com/gitlab-org/quality/performance/wikis/Benchmarks/Latest) - Our automated CI pipelines run multiple times each week and will post their result summaries to the wiki here each time.
1. [GitLab Versions](https://gitlab.com/gitlab-org/quality/performance/wikis/Benchmarks/GitLab-Versions) - A collection of performance test results done against several select release versions of GitLab.'

There are known issues when running [the GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance). Some tests run against parts of the product which are known to be non-performant.

- [Improve performance of users API under load](https://gitlab.com/gitlab-org/gitlab/-/issues/346601).
- [Check for other issues the Quality team has raised about other tests](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Quality:performance-issues)

For more details on other possible problems see [Troubleshooting section](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/docs/k6.md#troubleshooting)

## Cleaning Up

This step will delete the test data generated.

Method 1: Run the following Docker command

```bash
docker run -it -e ACCESS_TOKEN=<TOKEN> -v $(pwd)/k6/config:/config -v $(pwd)/results:/results gitlab/gpt-data-generator --environment 2k.json --clean-up
```

Method 2: Delete the top-level group `gpt` (or the unique name you've replaced at your environment json) from GitLab UI.

**NOTE**: There is no preference of one method over the other as both will delete the top-level group.

## Reviewing results for customers

Customers often ask for their GPT results to be reviewed as part of building out a Reference Architecture.

- Check [the GPT issues list](https://gitlab.com/gitlab-org/quality/performance/-/issues) if errors or issues .
- Ask for help from [support team members with GPT experience](https://gitlab-com.gitlab.io/support/team/skills-by-subject).
- Alternatively reach out to the Quality Engineering - Enablement team who manage GPT over on the `#gitlab-performance-tool` channel on Slack.
- The [Reference Architecture group](/handbook/engineering/infrastructure/test-platform/self-managed-excellence/#reference-architectures) can also review the results as well as the environment as a whole on request. This can be done by asking the customer's CSM to raise an issue on the [Reference Architectures](https://gitlab.com/gitlab-org/quality/reference-architectures/-/issues) project with the `environment-review-request` template.
