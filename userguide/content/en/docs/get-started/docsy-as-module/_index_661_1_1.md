---
title: Mobile DevOps Single-Engineer Group
---

{{% alert title="Note" color="danger" %}}
This Incubation Engineering project is currently [on hold](/handbook/engineering/development/incubation/#on-hold--cancelled).
{{% /alert %}}

## Mobile DevOps Single-Engineer Group

The Mobile DevOps SEG is a [Single-Engineer Group](/handbook/company/structure/#single-engineer-groups) within our [Incubation Engineering Department](/handbook/engineering/development/incubation/).

### Vision

GitLab's vision for Mobile DevOps is to provide high-value, best-in-class capabilities for enterprise flagship apps.

## What's Available Today?

| Feature                                                                                                  | Status      |
|----------------------------------------------------------------------------------------------------------|-------------|
| [macOS Build Environments](https://docs.gitlab.com/ee/ci/runners/hosted_runners/macos.html)            | Public Beta |
| [Project-level Secure Files](https://docs.gitlab.com/ee/ci/secure_files/)                                | GA          |
| [Apple App Store Integration](https://docs.gitlab.com/ee/user/project/integrations/apple_app_store.html) | GA          |
| [Google Play Integration](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111621)                  | GA          |

## What's Next & Why?

The future roadmap for Mobile DevOps will look to mature the `build`, `sign`, and `release` capabilities that exist today while introducing new features to support the `test` and `secure` stages of the process. Below are the items we look to address in coming releases.

* Support [macOS SaaS Runners to GA](https://gitlab.com/groups/gitlab-org/-/epics/8267)
* [Android support for Dependency Scanning (gemnasium-maven)](https://gitlab.com/gitlab-org/gitlab/-/issues/336866)
* Mature [Mobile SAST](https://docs.gitlab.com/ee/user/application_security/sast/index.html#experimental-features)
* Device Farm Integrations
* [Mobile DevOps CI/CD components](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/readme/-/issues/113)
* [Firebase Integration](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/readme/-/issues/46)
* [Code Coverage for Mobile](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/readme/-/issues/22)

## Other Resources

* [Mobile DevOps Docs](https://docs.gitlab.com/ee/ci/jobs/mobile_devops.html)
* Mobile DevOps Blog Posts
  * [Tutorial: iOS CI/CD with GitLab](https://about.gitlab.com/blog/2023/06/07/ios-cicd-with-gitlab/)
  * [Tutorial: Android CI/CD with GitLab](https://about.gitlab.com/blog/2023/06/13/android-cicd-with-gitlab/)
  * [Mobile DevOps with GitLab, Part 1 - Code signing with Project-level Secure Files](https://about.gitlab.com/blog/2022/09/20/mobile-devops-with-gitlab-part-1/)
  * [Mobile DevOps with GitLab, Part 2 - Code signing for Android with GitLab](https://about.gitlab.com/blog/2022/09/28/mobile-devops-with-gitlab-part-2/)
  * [Mobile DevOps with GitLab, Part 3 - Code signing for iOS with GitLab CI and Fastlane](https://about.gitlab.com/blog/2022/10/03/mobile-devops-with-gitlab-part-3-code-signing-for-ios-with-gitlab-and-fastlane/)
