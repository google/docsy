---
title: "SRE Onboarding"
---

## Onboarding Template

SRE onboarding is mostly handled by two issue templates:

1. [Machine setup](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-machine-setup.md)
1. [Gather context](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-sre-context.md)

These are assigned to the SRE when they start. This will guide them
through different areas of the system, starting off with some simple
tasks and help both the SRE and the SRE manager through various access issues.

There is a third issue template for [oncall onboarding](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/blob/master/.gitlab/issue_templates/onboarding-oncall.md),
which should be completed after the first two and will probably take at least 3 months from the start date to complete.

## GitLab.com Infrastructure Management

The SRE teams use [Terraform](https://www.terraform.io/) and
[Chef](https://chef.io) for configuration management of GitLab.com
infrastructure.

### Terraform

Terraform configuration is currently divided into three environment:

* [production](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gprd)
* [staging](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/gstg)
* [ops](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/tree/master/environments/ops)

There is [shared terraform config](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt/-/blob/master/environments/ops/shared-configurations.tf)
for both staging and production
to keep topology parity between these environments. Instance sizing, fleet sizes
and other environment specific configuration is set in variable files for
staging, production and ops.

The state for terraform is maintained in object storage, the master branch
should always represent the current state of infrastructure. Changes should be
merged and applied through CI.

### Chef

Chef is a critical part of SRE infrastructure management. Currently it is used
for OS patching, applying system level configuration and installing the omnibus
package for releases. Here are a few notable cookbooks which will be a good
starting-point for new SREs:

* [cookbook-omnibus-gitlab](https://gitlab.com/gitlab-cookbooks/cookbook-omnibus-gitlab): This cookbook
  is responsible for creating a `gitlab.rb` on every server that has GitLab installed. This config
  file is used by the omnibus package.
* [gitlab-cookbooks](https://gitlab.com/gitlab-cookbooks): This is a collection of cookbooks that are used for GitLab.com.

### Releases

Releases candidates are deployed to GitLab.com through auto-deployments that occur throughout the week. For information about how releases at GitLab.com read about [the releases process](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-deployments-process) visit the
[release project documentation](https://gitlab.com/gitlab-org/release/docs/blob/master/README.md).
documentation.

For information about GitLab.com deployments and patches see the following
release docs:

* [release documentation for deployer](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/gitlab-com-deployer.md)
* [post-deployment patch documentation](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/post-deployment-patches.md)

## Where to find things

### Repositories

The following repositories are used for GitLab.com infrastructure management.
These repository locations are the remotes that the SRE team uses for pushes,
issues and MRs. Mirrors are setup in case that GitLab.com is unavailable.
Repositories that are necessary for assets, configuration, infrastructure, releases
and patch management use https://ops.gitLab.net as a remote.

1. [terraform](https://ops.gitlab.net/gitlab-com/gl-infra/config-mgmt): This
is the repository that holds all terraform configuration for the GitLab.com staging,
production and operations environments. There is a
[repository mirror](https://gitlab.com/gitlab-com/gl-infra/config-mgmt)
on GitLab.com .

1. [chef cookbooks](https://gitlab.com/groups/gitlab-cookbooks): These
repositories are the cookbooks used for GitLab.com. Runlists for the fleets
are configured in roles. There are repository mirrors for these cookbooks on
[ops.gitLab.com](https://ops.gitlab.net/gitlab-cookbooks).

1. [chef](https://gitlab.com/gitlab-com/gl-infra/chef-repo): This
repository contains all role and node attributes for GitLab.com infrastructure.
It also has the environment configurations for production, staging and ops
for cookbook version pinning.

1. [runbooks](https://gitlab.com/gitlab-com/runbooks/): This repository contains
runbooks, howtos and alert definitions for GitLab.com. Alerts defined in this
repository are automatically applied to the monitoring infrastructure when
merged to master. For more information see the
[alert section](https://gitlab.com/gitlab-com/runbooks/-/tree/master#alerts).
There is a [repository mirror](https://ops.gitlab.net/gitlab-com/runbooks/) on ops.GitLab.net.

### Dashboards

It is useful to have the following dashboards bookmarked and easily accessible

1. [Grafana](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage)
1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [System Logs](https://log.gprd.gitlab.net/app/kibana)
1. [Fastly](https://manage.fastly.com/dashboard/services/652MHuIME217ZATbh7vFWC/datacenters/all) CDN

### Cloud Providers

1. [Google Cloud](https://console.cloud.google.com/home/dashboard?project=gitlab-production&pli=1)
1. [Amazon Web Services](https://console.aws.amazon.com/console/home?region=us-east-1#)

### Monitoring tools

1. [PagerDuty](https://gitlab.pagerduty.com/incidents) Alerting
1. [Grafana](https://dashboards.gitlab.net/d/bd2Kl9Imk/host-stats?orgId=1) Performance Monitoring
1. [Alert Dashboard](https://dashboards.gitlab.net/d/SOn6MeNmk/alerts)

### Issue Trackers

It is useful to have the following issue trackers bookmarked and easily accessible

1. [On Call Issues](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=oncall)
1. [Production Incidents Issues](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=incident)
1. [Change Management Issues](https://gitlab.com/gitlab-com/gl-infra/production/issues?label_name%5B%5D=change)

### Yubikey

SREs should be using a [YubiKey](https://www.yubico.com) and should not have keys on their laptop. It is recommended to have a spare YubiKey to avoid being locked out of your accounts if you lose your primary key.

Follow the [yubikey runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/yubikey.md) to set up

## Credentials

The following is intended to be a comprehensive list of credentials and access
that need to be set up, which are not covered above or elsewhere in the handbook.
The list may not be up to date.  If something is missing, please add it.

1. SSH Key - this is provided to you by the yubikey setup
1. [GitLab.com](https://gitlab.com) account
1. [GitLab.com](https://gitlab.com) admin account
1. [dev.GitLab.org](https://dev.gitlab.org) account
1. [ops.GitLab.net](https://ops.gitlab.net) account
1. Chef access
1. Cloud Providers

   * Amazon Web Services
   * Azure
   * Digital Ocean
   * Google Cloud

## Slack Channels

* Oncall-related channels:
  * `production`
  * `incident-management`
  * `alerts`
  * `announcements`
  * `dev-escalation`
  * `feed_alerts-general`
  * `cloud-provider-alerts`
* Infrastructure channels:
  * `sre_standup`
  * `infrastructure-lounge`
  * `infra-lounge-social`
  * `infra-read-feed`
  * `g_delivery`
  * `g_scalability`
  * `infra_capacity-planning`
  * `reliability-lounge`
  * `ansible`
  * `kubernetes`
  * `terraform`

## Zendesk

Every SRE should register for a “Light Agent” account in ZenDesk. Often times incidents are generated from customer reports, and it’s useful to see their submission and the back and forth with support. You can also leave internal notes for support engineers so that they can gather more information for troubleshooting purposes. See ['Light Agent' Zendesk accounts available for all GitLab staff](/handbook/support/internal-support/#viewing-support-tickets)

## Time Off by Deel

We use Time Off by Deel to notify and delegate for planned timeoff. When setting up your integrations with Slack,
be sure to run the `/time-off-deel help` command then click _Go to Home Tab_ then in the drop-down select _Calendar Sync_ then _Add Calendar_ to add the team's shared Google Calendar
(ID: `gitlab.com_oji6dki1frc8g8qq9feuu1jtd0@group.calendar.google.com`) as an "Additional calendars to include?".

## Suggested Software Tools

As production engineers we are allowed to utilize a linux workstation.  The list
below is mostly comprised of macOS tools.  You'll need to find the linux
equivalent to match the linux distro of your choice.

In addition to the standard tools for interacting with the rest of GitLab,
the following tools help when working on production issues.

Required tools

1. [Homebrew](https://brew.sh)
1. [SSH, properly configured](https://gitlab.com/gitlab-com/gl-infra/infrastructure/blob/master/onboarding/ssh-config)
1. [chef, knife, berkshelf](https://docs.chef.io/workstation/install_workstation/)
1. kubectl (`brew install kubernetes-cli`)

Nice to have

1. iTerm (`brew install iterm2`) or kitty (`brew install kitty`) (bear in mind that kitty requires more configuration to get it up and running so it's targeted at more advanced users)
1. macOS doesn't source ~/.bashrc file by default, so if you want it to be processed, you need to source it in your profile file (which you might need to create manually). Why to create the rc file at all instead of keeping everything in the profile? some tools default to rc so they will not process the profile at all. There are actually more differences, see: [About bash_profile and bashrc on macOS](https://scriptingosx.com/2017/04/about-bash_profile-and-bashrc-on-macos/)
1. macOS doesn't have bash completion feature by default, to install it: `brew install bash-completion` and enable it: `echo "[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion" >> ~/.bashrc`
1. fzf used for fuzzy completion in shell, e.g. history search or filepaths, (`brew install fzf` + `echo "[ -f ~/.fzf.bash ] && source ~/.fzf.bash" >> ~/.bashrc`)
1. the default length of bash history on macOS is 500, to extend the number of entries kept and save the timestamp you can add to your .bashrc for example:

```console
export HISTFILESIZE=2000000
export HISTSIZE=1000000
export HISTTIMEFORMAT="%d/%m/%y %T "
```

1. helm - "Kubernetes package manager" (`brew install kubernetes-helm`)
1. minikube (`brew install minikube`) and virtualbox (`https://www.virtualbox.org/wiki/Downloads`)
1. GCP cli [gcloud quickstart macos](https://cloud.google.com/sdk/docs/quickstart-macos)
1. Digital Ocean cli (`brew install doctl`)
1. Azure cli (`brew install azure-cli`)
1. AWS cli (`pip3 install awscli --upgrade`)
1. A text editor such as [Sublime](https://www.sublimetext.com/), [Textmate](https://macromates.com), [MacVim](https://macvim.org/), or [neovim](https://neovim.io)
1. watch (`brew install watch`)
1. tmux/tmate (`brew install tmux tmate`)
1. A markdown editor such as [macdown](https://macdown.uranusjr.com) (`brew install macdown`)
1. [BitBar](https://github.com/matryer/xbar) with [GitLab Plugin](https://gitlab.com/devin/gitlab-bitbar)
1. To [install gnu utils and replace mac utilities]( https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities) use the --with-default-names option.
1. when using gpg, you will be asked for a password. Querying for passwords can be facilitated by different tools, but a fairly standard and widely supported one is pinentry-mac (`brew install pinentry-mac`). To tell your gpg agent to use it: `echo 'pinentry-program /usr/local/bin/pinentry-mac' >> ~/.gnupg/gpg-agent.conf`

### Brew Files

There are sample brew files in the [Infrastructure Project](https://gitlab.com/gitlab-com/gl-infra/infrastructure/tree/master/onboarding)

### iOS apps

1. [Slack](https://apps.apple.com/us/app/slack/id618783545)
1. [Zoom](https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307)
1. [PagerDuty](https://apps.apple.com/us/app/pagerduty/id594039512)
1. [Working Copy](https://apps.apple.com/us/app/working-copy/id896694807) (Optional)

## Reference Material

List of relevant reference material that an engineer may need to brush up on

1. [Chef](https://docs.chef.io)
1. [Terraform Docs](https://developer.hashicorp.com/terraform/docs) or [getting started guide](https://developer.hashicorp.com/terraform/intro)
