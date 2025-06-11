---
title: "Distribution Team Infrastructure and Maintenance"
---

## Common links

* [Distribution Team Handbook](..)

## Infrastructure

As part of the team tasks, team has responsibility towards the following nodes/tasks:

* `dev.gitlab.org`: This internal GitLab instance runs nightly CE packages and
  is used for building official packages as well as hosting security release
  related MRs before publishing. Details of the node as well as the maintenance
  tasks can be found in [the dev.gitlab.org specific docs](dev-gitlab-org/).

* Build Machines: Runner manager machines that spins up machines that are used
  by various CI jobs for building and publishing packages. Details of the node
  as well as the maintenance tasks can be found in [the build machines specific docs](build-infrastructure.md)

* `packages.gitlab.com`: This is a self-hosted package server managed by
  GitLab Infrastructure team. It's used by Distribution team to ship GitLab CE and EE
  omnibus-gitlab packages along with Verify team to ship gitlab-runner packages
  to users. GitLab CE and EE packages are built via our CI pipeline on `dev.gitlab.org`.

  * _Distribution uses the package server as a tool and doesn't have any
  maintenance tasks associated with it. The package server is currently deployed
  on our own infrastructure from a package provided by Packagecloud.io. If the
  Infrastructure team requires help, Distribution team should provide a best effort
  to resolve issues._

* Keeping SSH public keys `gitlab.com` and `dev.gitlab.org` up-to-date: The CI
  configuration of **omnibus-gitlab** uses public SSH keys of these servers
  during execution. The keys are stored in the codebase (in [`support/known_hosts`](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/support/known_hosts))
  and it is the responsibility of the team to update them in case any of them
  changes. To do so:

  ```console
  bundle exec rake infrastructure:known_hosts
  git add support/known_hosts
  git commit -m "Update SSH keys"
  ```

  Please note that you need to push this change as a separate MR and ask the
  maintainer for review.

## External Services

As part of the team tasks, the team uses the following external services:

* [dependencies.io](https://www.dependencies.io/): This is used to automatically update
software components required by GitLab. See [the specific docs](https://www.dependencies.io/quickstart/)
for how to work with this service.
