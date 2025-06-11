---
title: Handbook Development
doc_type: doc
doc_id: doc-979
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

<!-- Unsupported block type: image -->

Development environment and processes for maintaining the handbook

The handbook site uses Hugo for static page generation from Markdown.

The handbook uses a base theme called Docsy. A custom theme override is located in the Docsy GitLab Theme project and automatically included in the handbook setup.

## Support

For help and support with the development environment, please reach out in the public #handbook Slack channel.

If you encounter a problem or bug, please open an issue or MR in the respective handbook projects.

## Edit the handbook in your browser

Follow the editing the handbook documentation.

## Architecture Overview

The Markdown files get parsed by Hugo, and converted into static HTML files, including all assets (JS, CSS, images, etc.). The static files are uploaded to GitLab Pages.

<!-- Unsupported block type: code -->

There are four internal projects and one external project used in the process of building and deploying the internal and external handbooks.

1. Docsy is the base theme used for both handbook sites.

1. Docsy GitLab is an extension to the base Docsy theme with GitLab specific customizations and features. Docsy GitLab is included in both handbook sites.

1. www-gitlab-com is the source repository of data files used by both handbook sites.

1. handbook is the public handbook site.

1. internal-handbook is the internal handbook site.

### Templates and Partials

Review the Hugo development documentation to learn more.

- https://gohugo.io/templates/introduction/

- https://gohugo.io/functions/partials/

There are some partials specific to GitLab.

### Access tokens

To minimize maintenance, a small number of group and project access tokens are used. This overview is not meant to be a comprehensive list. Search in this and other development documentation pages for details on the individual access tokens.

1. GITLAB_TOKEN, currently called Docsy GitLab Release. Used for various things, primarily: 

1. TRIAGE_BOT, currently called Triage bot. Used for various maintenance tasks, primarily: 

1. Project access tokens are sometimes created for project specific tasks, such as DANGER_GITLAB_API_TOKEN.

A “zap” (internal) (use shared 1Password sign in) has been configured with a group level webhook to notify the #handbook-escalation channel. Due to its reliability, you may want to consider creating an issue, or some other reminder.

### Handbook monitoring

The handbook monitor project runs a pipeline every 10 minutes (see pipeline schedule) to check if the handbook is “up” using hurl.

There is another scheduled monthly pipeline that will rebuild the image used in CI. This job will only run if there’s an environment variable REBUILD set to TRUE to avoid rebuilding the image with every scheduled CI job.

If the job fails, the pipeline will post to the #handbook-escalation Slack channel.

Notices are also posted in that channel when pipelines fail on the main branch of the handbook projects.

Note: Internal handbook is not monitored in this way as there is a blocking issue. See internal-handbook#90. Similarly, the request for integrating the handbook to infra’s monitoring is pending. See docsy#14 for more information.

## Run the handbook locally for edits

Supported methods:

1. Docker or compatible runtime (all software preinstalled in a container image)

1. Local installation (experienced users, more software dependencies, can break)

### Requirements

- Command line: git, wget (for syncing data). Additional requirements for local installation, see below.

- Docker or compatible runtime (for running the Hugo environment in a container) 

### Clone the handbook Git repository

Cloning the repository allows you to manually edit the handbook locally. If you prefer to use the Web IDE, please continue reading the editing the handbook documentation.

We recommend using git to clone the repository and then editing the handbook with a text editor such as Visual Studio Code, Typora, Nova or Sublime to name a few.

Clone the repository:

Public handbook:

<!-- Unsupported block type: code -->

Internal handbook:

<!-- Unsupported block type: code -->

Docsy GitLab theme:

<!-- Unsupported block type: code -->

### Set up the repository

After cloning the repository, sync the required data files from the data file location (currently the www-gitlab-com repository). Without this step, the handbook cannot be run locally.

Open a terminal, navigate into the cloned handbook repository path, and run the sync-data.sh script.

Example for the public handbook:

<!-- Unsupported block type: code -->

### Running Hugo

Hugo needs to be run to generate the static files from the handbook markdown content.

When installing Hugo, review the CI file of the relevant handbook repository for the version of Hugo in use. The latest version may or may not work.

There are two ways to run Hugo:

1. Running the Handbook in Docker

1. Running the Handbook Locally

### Parameters for Hugo

The handbook is huge, and by default, the hugo server command loads everything to memory.

The following options for the hugo command can be helpful for debugging or otherwise running locally:

- -environment=production: generate a production build (asset minification, checksums, etc) 

- -renderToDisk: slower but requires less memory to run. Useful if you have less than 16GB allocated to docker machine

- -verbose: enables verbose logging output

- -templateMetrics and -templateMetricsHints: prints metrics related to how frequently templates are invoked and how much time is being spent evaluating them

- -printMemoryUsage: periodically prints memory usage while the site is building

### Build static files

To render the entire site to disk (and inspect the output in ${PWD}/public), purge the generated files first, and then run Hugo.

<!-- Unsupported block type: code -->

### Permissions

For some pages to render you may need a personal access token. Generate one and export it as an environment variable prior to running hugo commands:

<!-- Unsupported block type: code -->

If you need to make changes to the underlying theme you’ll need to make changes in the Gitlab-Docsy module.

## Linting content

To enforce rules and guidelines, we use:

1. Custom Handbook lint

1. Hugo lint

1. markdownlint

1. Vale

Once an error is encountered, the relevant job fails and a comment is added to the merge request with a list of errors, with guidance for the suggested fix. Warnings and suggestions are not reported in the comment, but are in the code quality report.

Currently, all configuration and script files exist in each repository. See configuration file sync issue.

### Handbook lint

The custom handbook lint script (handbook version) is used to verify a number of the guidelines we have, including:

1. Media files 

1. Codeowners  

### Hugo lint

We use Hugo lint to check for the validity of internal links. It supports relative linking to the markdown file, and the production path.

Each job also outputs the top 30 incorrect links to assist in fixing them.

See the ReadMe for more information about how Hugo lint works.

### markdownlint

Refer to the markdown guide for style guide information, and guidance on rules.

We use markdownlint-cli2 in our pipelines with a slightly customized set of rules. Before pushing any changes, you can run markdownlint-cli2 and fix any suggested changes to avoid pipeline failures.

To run markdownlint-cli2 using Docker, run:

<!-- Unsupported block type: code -->

If you have markdownlint-cli2 installed locally, you can run the command in the relevant repository. This method is recommended when editing the config file (look for the markdownlint file), and testing the changes. To have markdownlint automatically fix some errors, add the fix option:

<!-- Unsupported block type: code -->

Rules are configured to be close to the GitLab documentation markdownlint, without some of the stricter styling rules. The relevant rules are also noted in the markdown guide.

### Vale

We use Vale to verify some of the rules in the Handbook Markdown Guide.

Vale errors will fail the pipeline and are included in the MR comment. Warnings are included in the job log, code quality, and MR diff.

To run Vale using Docker, run:

<!-- Unsupported block type: code -->

If you have vale installed locally, you can test the changes. To limit the results, add the minAlertLevel option, such as:

<!-- Unsupported block type: code -->

Rules are configured to be close to the GitLab documentation vale rules. When the gitlab_base rules are exactly the same, they are included in the gitlab_base folder in the content sites repositories. When the rules differ, they are stored in the handbook folder.

## Docsy GitLab Theme Development

Docsy is used as a base for the internal and public handbooks. Modifications and extensions have been added on top to ensure efficient handbook usage.

All Hugo partials and shortcodes should be added to this repository, instead of duplicating them locally into the handbook projects.

The Docsy GitLab theme is integrated into the public/internal handbook repositories using a Go module in go.mod.

### Local Development

To develop on the Docsy GitLab theme locally build the handbook (or internal-handbook) project with the updated local copy of the docsy-gitlab theme following the steps below:

1. 

1. 

1. 

Any changes made to files in local docsy-gitlab project will be rendered in the local instance.

### Testing changes

When making changes that may have a user impact (not content only changes):

1. Test the changes locally first by performing the upgrades to gitlab-docsy, handbook, and internal-handbook and running the builds locally. Manual testing locally will make it easy to spot any major issues.

1. If there are no concerns, create a MR in the Docsy project with the changes, and have a maintainer review. Ensure that only the relevant changes you’re testing are in the MR. 

1. With the new version of the theme available, create new MRs in handbook and internal-handbook with the changes and upgrade to the theme if needed. Use review apps for both MRs to test the dependency changes in a production-like environment.

1. Apply the changes to the internal handbook first, and ensure changes are okay.

1. Next, apply the changes to the public handbook.

1. If there are any issues, revert the changes to the handbook projects.

### Releases

Changes made to docsy-gitlab will be made available to the handbook and internal-handbook after the version is bumped and deployed to each project. This includes all theme updates with partials, shortcodes, and any changes to /docs. Much of this process has been automated, but a few manual steps are still required. To release a docsy-gitlab change follow these steps:

1. After the merge request is merged, a pipeline on the main brach will kick off. After the pipeline succeeds, the release job can be triggered manually. For example: https://gitlab.com/gitlab-com/content-sites/docsy-gitlab/-/pipelines/1304430830

1. The release job will do three things: 

1. Assign a handbook backend maintainer or codeowner to each MR for review.

1. Once the merge request to handbook and internal-handbook have been merged, the theme changes will be deployed to the sites.

For more information on the release process, see the release script.

## Dependencies

### Updating dependencies

<!-- Unsupported block type: quote -->

Always update dependencies individually to isolate potential bugs and regressions. Never pull latest but pin the dependencies to a specific released version.

<!-- Unsupported block type: code -->

### Google Docsy

<!-- Unsupported block type: code -->

<!-- Unsupported block type: quote -->

## Redirects

You can add redirects to the layouts/index.redirects file in the relevant repository. Refer to the GitLab Pages redirect documentation for how these are formatted.

Please add your redirect in chronological order with a removal date of:

- 3 months for within a single handbook, from one relative path to another relative path,

- 3-6 months when linking from one handbook to another (such as linking from handbook.gitlab.com to internal.gitlab.com), or

- 3-12 months for external links, meaning not part of the handbook.gitlab.com or internal.gitlab.com domains.

## CI/CD Pipelines

### Handbook & Internal Handbook

The CI/CD pipelines for the handbook and internal-handbook projects are roughly the same, and should remain that way.

### build stage

The build stage performs a few linter and security jobs (handbooklint, hugolint, markdownlint, and secret_detection), and a build job which builds the whole site and saves it as CI artifacts.

### deploy stage

The deploy stage uses the artifacts generated in the build stage to deploy the production site for changes to the main branch or review apps which can be deployed for MRs.

### notify stage

The notify stage has two jobs that are triggered on specific events:

1. post_comment_on_failure posts a comment to the MR when the markdownlint or handbooklint jobs fail.

1. notify_slack_on_build_failures post a message to the #handbook-escalation Slack channel when there is a build failure on the main branch. This type of failure would indicate a broken CI pipeline.

### $BUILD_AND_TEST_ONLY mode

The pipelines can be triggered to run in $BUILD_AND_TEST_ONLY mode which means they will run all the test and build jobs, but none of the deploy or notify jobs. A pipeline can be triggered in $BUILD_AND_TEST_ONLY mode by setting the $BUILD_AND_TEST_ONLY CI variable to true. This is used primarily by the downstream pipelines triggered from the www-gitlab-com project.

### $GITLAB_TOKEN

Tools or scripts that need to interact with the repositories to perform handbook tasks should use the GITLAB_TOKEN CI variable. This is group level access token called Docsy GitLab Release with a developer role and has api and write_repository scopes. This token will expire after a year and will need to be refreshed. Follow the steps below to refresh the token:

1. Create a new developer group level access token in <https://gitlab.com/groups/gitlab-com/content-sites/-/settings/access_tokens with api> and write_repository scopes. Give it the name GITLAB_TOKEN_YYYY_MM_DD (replace the YYYY_MM_DD portion with the current date).

1. Update the value of GITLAB_TOKEN in docsy-gitlab, handbook, and internal-handbook with the new token value.

1. Create a new release of the Docsy GitLab Theme and ensure the pipeline works correctly.

1. Delete the old token.

See above for more on general management of access tokens.

### GitLab Pages Deployment

The deploy and review apps are configured in the pages job in the .gitlab-ci.yml configuration file.

- 

- 

- 

The route map is configured in the .gitlab/route-map.yml.

### Docsy GitLab

The CI/CD pipeline for docsy-gitlab is responsible for building, testing, and releasing the Docsy GitLab theme used by both handbook and internal-handbook.

### test stage

The test stage performs the markdownlint, and secret_detection jobs.

### build stage

The build stage performs runs the hugo command to ensure the theme builds successfully.

### release stage

The release stage performs one manual job to create a new release of the theme and merge requests to both handbook and internal-handbook. See the Releases section for more details.

### www-gitlab-com

The CI/CD pipeline for www-gitlab-com is responsible for triggering downstream builds of both handbook and internal-handbook in $BUILD_AND_TEST_ONLY mode. This ensures that any changes to dependent data files in www-gitlab-com will build successfully for both handbook and internal-handbook.

### Danger review and reviewer roulette

Right now the handbook projects doesn’t use the Reviewer Roulette feature of the danger-review CI/CD component. See issue.

We use the architecture plugin to provide guidance on how to review MRs that contain changes to architecture evolution design documents.

In order to make Danger post message to MRs we need to setup a project token (api scope with Developer role) and a CI/CD variable called DANGER_GITLAB_API_TOKEN to contain this project token (Masked but not Protected). See above for more on general management of access tokens.

For more details, follow the Danger documentation and inspect the MR adding the reviewer roulette to the public handbook.

### Code quality report MR commenter

The CI/CD linting jobs generate code quality report artifacts for MR widget integration. If there are errors detected, a custom CI/CD job posts a Markdown table summary as MR comment, linking to helpful handbook editing resources.

The parse-codequality-report.sh script in the handbook and internal-handbook generates the code quality report posted in the MR. Changes to these reports need to be applied to both projects.

The code quality report relies on the GITLAB_TOKEN to perform the reporting actions on any MRs.

### CI/CD maintenance tasks

See maintenance tasks.

## Triage bot

The triage-bot project is meant to help triage issues in the handbook, internal-handbook, and docsy-theme projects. It has two main goals:

1. Ensure issues are triaged.

1. Close stale issues and merge requests.

Please see the .triage-policies.yml for rules. You can find more about how to create policies in the GitLab triage gem project readme.

The triage bot is scheduled to run 3 times a week. See the project’s pipeline schedule for details.

Triage uses the TRIAGE_BOT access token to perform tasks. This must have the Developer role to take actions on merge requests. See above for more on general management of access tokens.

### Handbook Maintenance

Documentation on how to carry out maintenance tasks.

### Running the Handbook in Docker

Instructions for running the Handbook projects in Docker

### Running the Handbook Locally

Instructions for running the Handbook projects locally
