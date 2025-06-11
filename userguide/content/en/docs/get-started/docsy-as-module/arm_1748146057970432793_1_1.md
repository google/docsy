---
title: "Distribution Team Infrastructure: ARM"
description: "Describes the hardware and use of infrastructure for building ARM packages."
---

## Hardware Provider

AWS Graviton is the current provider for ARM64 and Raspberry Pi runner
instances. All [distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) team members should be able to
log in with their own credentials.

## Teams Working on ARM Related Tasks

Several GitLab teams collaborate to provide support for ARM:

1. [Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) manages the ARM runner provider
   and issues with build pipelines.
1. [Developer Relations team](/handbook/marketing/developer-relations/) and support teams answer questions and provide community assistance in the forums.
1. [Verify CI](/handbook/engineering/development/ops/verify/) would help build packages for ARM runners.

## Failure Notifications

Build failures for master, stable branches, and tags are sent to the
[distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/) team slack channel. Developers receive failure
notices via e-mail for pipelines triggered from their feature branches as
they would normally for any other branch.

## Frequently Asked Questions

### What GitLab packages get built for Raspberry Pi?

Due to [memory requirements](https://docs.gitlab.com/ee/install/requirements.html#memory) we do not currently recommend the Raspberry Pi
as a production platform. Due to this, we only build packages for the
Community Edition.
