---
title: Setup Guide for Vulnerability Explanation and Resolution
---

## Setup Guide for Vulnerability Explanation and Resolution

Several setup steps are necessary in order to test and develop Vulnerability Explanation (VE) and Vulnerability Resolution (VR) features locally. This guide contains instructions for setting up and configuring the necessary components.

### Setup Runner

To generate vulnerability reports you will need to run a CI pipeline. Follow the instructions below to install and configure the GitLab Runner.

[https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md)

Optionally, you can install Docker with Colima. The docs can be found [here](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/runner.md) or you can follow the steps in [this snippet](https://gitlab.com/-/snippets/2259133).

### Setup Vulnerability Report

The VE and VR features are designed to work on SAST vulnerabilities. Clone one or more of the following projects to use for local testing:

* [https://staging.gitlab.com/govern-team-test/oxeye-rulez](https://staging.gitlab.com/govern-team-test/oxeye-rulez)
* [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net)
* [https://gitlab.com/gitlab-examples/security/security-reports](https://gitlab.com/gitlab-examples/security/security-reports)
* [https://gitlab.com/gitlab-org/govern/threat-insights-demos/verification-projects/cwe-samples](https://gitlab.com/gitlab-org/govern/threat-insights-demos/verification-projects/cwe-samples)

Run the pipeline on the main or master branch for any of the sample projects to generate the vulnerability report. `Build` > `Pipelines` > `Run Pipeline`

Once the pipeline is finished, the Vulnerability Report can be viewed by going to `Secure` > `Vulnerability Report` > Any SAST finding

Examples:

* Vulnerability Report: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerability_report](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerability_report)
* SAST finding: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245)

### Setup AI

Follow this [instructions here](https://docs.gitlab.com/ee/development/ai_features/) to configure your GDK access to AI features.

For GitLab Team members only:

* An EE license is required, follow the steps [here](https://docs.gitlab.com/ee/development/ai_features/#required-setup-licenses-in-gitlab-rails) to request one.
* Anthropic access is required. Create an access request if necessary ([example](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/29415)).

#### Duo Access

Once you have AI set up locally, you will need to enable Duo features. Follow the steps below to ensure you have everything correctly configured.

Follow this [instructions here](https://docs.gitlab.com/ee/development/ai_features/#set-up-and-run-gdk) to setup and run GDK.

### Usage

With the configuration in place, you should expect to see the `Explain with AI` button for any SAST vulnerability. For example: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/105323245)

You should expect to see the 'Resolve with AI` button for any SAST vulnerability in the [high confidence CWE list](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/app/models/vulnerabilities/finding.rb#L25-69). For example: [https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/114941072](https://gitlab.com/gitlab-org/security-products/tests/webgoat.net/-/security/vulnerabilities/114941072)

If you need assistance, please reach out in [#g_govern_threat_insights_eng_ai](https://gitlab.enterprise.slack.com/archives/C07KSUHD09E)
