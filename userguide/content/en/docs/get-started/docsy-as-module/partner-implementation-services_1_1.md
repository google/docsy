---
title: "Channel Partner Implementation Services"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Implementing a GitLab instance

- [Decide between GitLab Community and Enterprise Editions](#deciding-between-gitlab-community-and-enterprise-editions)
  - First, you need to decide which edition of GitLab to install for your customer. You can find plenty of information about this below.
- [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/)
  - **Read, understand, and follow the guidance given in this reference architecture page.  It's crucially important for long term maintainability of a GitLab instance.**
- [GitLab Environment Toolkit (GET)](https://gitlab.com/gitlab-org/gitlab-environment-toolkit#documentation)
  - [Getting started video](https://partners.gitlab.com/prm/English/s/assets?id=543232&renderMode=Collection)
  - **This is the Way... to install GitLab.**  The GitLab Environment Toolkit (GET) is a set of opinionated Terraform and Ansible scripts to assist with deploying scaled self-managed GitLab environments following the Reference Architectures.  Built and actively maintained by the Quality Enablement team.
- [Other Installation Methods](https://docs.gitlab.com/ee/install/install_methods.html)
  - Make sure any automation you provide that automatically installs GitLab is installing the Enterprise Edition, and leverages at the core one of these installation methodologies to have a supported configuration.
- [Unsupported Designs](https://docs.gitlab.com/ee/administration/reference_architectures/#deviating-from-the-suggested-reference-architectures)
  - Also review these unsupported configurations to make sure you are in compliance with our support requirements.
- [Next Implementation Steps After Installation](https://docs.gitlab.com/ee/install/next_steps.html)
  - Once you have the product installed, here are additional steps to make the installation operationally successful (like backups).
- [GitLab Performance Tool (GPT)](https://gitlab.com/gitlab-org/quality/performance)
  - After installation, to tests the server performance of GitLab environments.
- [Upgrading GitLab](https://docs.gitlab.com/ee/update/)
  - **Upgrades are important to become good at.**  GitLab schedules major releases for May each year, by default.  GitLab releases a minor update on the 3rd Thursday of every month, and has released monthly consistently for more than a decade. Security patches are released more frequently. GitLab.com has updates multiple times per day.
- [Upgrade Path Tool](https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/)
  - Plan upgrades with ease. This website generates supported upgrade paths to assist with updating GitLab.
- [Deprecations and removals by version](https://docs.gitlab.com/ee/update/deprecations.html) and [What's new since?](https://gitlab-com.gitlab.io/cs-tools/gitlab-cs-tools/what-is-new-since/?tab=features)
  - Use these resources to understand what is there and what isn't anymore in a given GitLab version.

## Implementing GitLab Runners

- [GitLab Runner Overview](https://docs.gitlab.com/runner/)
  - GitLab Runners represent the **largest workload the system generates.**  The Runner is the software that executes all of the CI pipelines.  It's possible to deploy them on fixed infrastructure, or autoscale them (up and down) in a cloud provider.
- [GitLab Runner Installation](https://docs.gitlab.com/runner/install/)
- [GitLab Runner Advanced Configuration](https://docs.gitlab.com/runner/configuration/)
- [GitLab Runner Fleet Scaling](https://docs.gitlab.com/runner/fleet_scaling/)
- [GitLab Runner Monitoring](https://docs.gitlab.com/runner/monitoring/) and [GitLab Runner Fleet Dashboards](https://docs.gitlab.com/ee/ci/runners/runner_fleet_dashboard.html)

## Deciding between GitLab Community and Enterprise Editions

GitLab has [two distributions](https://about.gitlab.com/install/ce-or-ee/):

- **Enterprise Edition (EE)**: built from the [official GitLab repository](https://gitlab.com/gitlab-org/gitlab). It contains the code of [all license tiers](https://about.gitlab.com/pricing/), including the open-source code of Free and the proprietary code of Premium and Ultimate.

- **Community Edition (CE)**: built from the [open source fork of GitLab](https://gitlab.com/rluna-gitlab/gitlab-ce). It contains only the [MIT licensed](https://opensource.org/license/mit) code from the EE repository above, synced with that one automatically on each push.

This means that both editions contain the exact same version of our Free features, but **only EE contains Premium and Ultimate features**.

### Which one should I install for my customer?

#### Premium or Ultimate customers

No choice: you need to install EE.

#### Free customers

Rule of thumb: always go with EE, except when you can't.

Upsides of installing EE:

1. No need to do a [migration](/handbook/resellers/partner-enablement/partner-migration-services/) when your customer decides to upgrade to Premium or Ultimate.

2. Optionally get access to free Premium or Ultimate features through our [Registration Features Program](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#registration-features-program). You can find the list of those features [here](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#available-features).

**Then why would anybody go with CE?**

There are some customers who are mandated to use open source tools that has a license compatible with their internal policies. Since CE is licensed under the extremely permissive [MIT license](https://opensource.org/license/mit), it can generally satisfy any of those requirements. Thus, the only reason to install CE is if the customer explicitly asks for it. Otherwise, start with EE: even if the customer decides not to share usage statistics with us, it'll still be just a flick of a switch for them to upgrade to Premium or Ultimate later.

### I've made a mistake and installed the wrong edition

Fear not, follow one of [these guides](https://docs.gitlab.com/update/#upgrading-between-editions) instead.
