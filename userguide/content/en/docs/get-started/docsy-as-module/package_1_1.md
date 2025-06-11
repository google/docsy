---
title: "Usecase: Artifact Management"
---

#### Who to contact

| Product Marketing | Developer Advocate | Product Management |
| ---- | --- | --- |
| Daniel Hom (@danielhom)  | Itzik Gan-Baruch ( @iganbaruch ) | Tim Rizzi (@trizzi) |

## The Market Viewpoint

## Artifact management

As an Admin at a large, enterprise organization you need to enable your developers to point their tools like Maven, npm,or pip at a local proxy server for all of the dependencies that they need. The server must be able to fetch dependencies from remote repositories, cache the artifacts, and be able to export its database of them to an air-gapped system at a regular interval. You need the ability to easily apply policies when dependencies are initially downloaded—either scanning them for security vulnerabilities or applying some other selection criteria (allowable license, allowable package author, etc.).

Well the air-gapped requirement might be a bit much, the above is what I typically hear from our customers. You can just as easily add in requirements like geo-replication, high-availability, and auditing. If you are a large organization, you need help with artifact management. Why large organizations? Well, smaller development teams can typically work with the myriad of artifact management solutions out there because they likely:

- Only pull packages from public repositories like Maven Central
- Only have projects in one or two programming languages
- The developers can manage shared config files that handle how packages are downloaded and from where

For large organizations:

- You likely have projects in many different programming languages, including some you've probably forgotten about.
- Since you have many developers, it's hard to manage the various configuration files needed to securely manage how and where dependencies are downloaded from.
- You likely have much stricter compliance requirements.
- You may have team members spread out across the globe and you need download times to be fast and reliable from anywhere.
- You may have several affiliate companies or vendors that you'd like to give access to read or publish packages.
- You need to know who is downloading packages, how often and if there is any suspicious activity. (This probably can be stated under compliance)

I guess you can surmise from reading the above that the problem of artifact management is tough for large, complex organizations. So, why make it harder by spending more money on additional tools. The trend towards consolidation make sense. It's why companies like JFrog and Sonatype have been striving to expand their products from universal artifact managers to complete DevOps platforms.

GitLab can save you money and time with the GitLab Artifact Management offering. In the below article, we'd like to walk you through the requirements of an artifact management tool, how GitLab compares to the competition, and how you should evaluate vendors.

## Personas

The personas for this use case are going to focus on large, complex organizations that need a tool for securely managing dependencies in a variety of formats from many different sources.

### User personas

#### Today

1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟨 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟨 [Simone - Software Engineer in Test](/handbook/product/personas/#simone-software-engineer-in-test)
1. 🟨 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟨 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. ⬜️ Central IT / System Admins

#### Medium Term (1-2 years)

As we execute our [3-year strategy](https://about.gitlab.com/direction/#3-year-strategy), our medium term (1-2 year) goal is to provide a single application that enables collaboration between cloud native development and platform teams.

1. 🟩 [Priyanka - Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)
1. 🟩 [Sasha - Software Developer](/handbook/product/personas/#sasha-software-developer)
1. 🟩 [Devon - DevOps Engineer](/handbook/product/personas/)
1. 🟩 [Allison - Application Ops](/handbook/product/personas/#allison-application-ops)
1. 🟩 [Simone - Software Engineer in Test](/handbook/product/personas/#simone-software-engineer-in-test)
1. 🟩 [Delaney - Development Team Lead](/handbook/product/personas/#delaney-development-team-lead)
1. 🟩 [Rachel - Release Manager](/handbook/product/personas/#rachel-release-manager)
1. 🟨 Ops Teams
1. ⬜️ Central IT / System Admins

#### Software Developer [Sacha](/handbook/product/personas/#sasha-software-developer)

Software developers have expertise in all sorts of development tools and programming languages; an invaluable skillset to help ensure usability and consistency throughout the entire application development process and software development ecosystem while managing packages, storing and distributing images, and more.

- Developers are problem solvers, critical thinkers, and love to learn. They work best on planned tasks and want to spend a majority of their time creating value that's delivered to customers in the form of lovable features.

#### DevOps Engineer [Devon](/handbook/product/personas/)

DevOps Engineers have a deep understanding of their organization's SDLC and provide support for infrastructure, environments, and integrations.

- DevOps engineers strive to make their daily life a little bit easier every day by automating everything.

## Market Requirements

| Market Requirement                    | Description |
|---------                              |-------------|
| 1) Package Registry                   | The GitLab Package Registry acts as a private or public registry for a variety of common package managers. You can publish and share packages, which can be easily consumed as a dependency in downstream projects.|
| 2) Container registry                 | A highly scalable application that stores and lets you distribute Docker images. |
| 3) API                                | An API for all features is required for supporting your customer workflows.       |
| 4) Storage management                 | Dependencies can build up fast. You need a way to manage storage costs.          |
| 5) Extensive metadata                 | Dependency metadata is required to validate you are using the correct one.       |
| 6) Dependency scanning                | Automatically find security vulnerabilities in your dependencies while you’re developing and testing your applications.  |
| 7) Dependency firewall                | Prevent the introduction of security vulnerabilities from external dependencies  |
| 8) Virtual registries                 | A collection of local, remote, and other virtual repositories accessed through a single logical URL. This hides the access details of the underlying repositories letting users work with a single, well-known URL.          |
| 9) High availability                  | A highly available product will ensure your teams stay productive                |
| 10) Geo replication                   | You can set up a Docker Registry on your secondary Geo site that mirrors the one on the primary Geo site.           |
| 11) Searchable dependencies           | It should be easy to search for and discover dependencies.                       |
| 12) Certified dependencies (or images)| Protect important dependencies from being corrupted or overridden.               |

## Adoption Guide

The following section provides resources to help CSMs lead capabilities adoption, but can also be used for prospects or customers interested in adopting GitLab stages and categories.

### Playbook Steps

1. Ask [Discovery Questions](#discovery-questions) to identify customer need.
2. Complete the deeper dive discovery sharing demo, proof points, value positioning, etc.
3. Agree to adoption roadmap, timeline and change management plans, offering relevant services (as needed) and updating the success plan (as appropriate)
4. Lead the adoption plan with the customer, enabling teams and tracking progress through engagement and/or product analytics data showing use case adoption

### Adoption Recommendation

This table shows the recommended use cases to adopt, links to product documentation, the respective subscription tier for the use case,  and product analytics metrics.

| Feature / Use Case                                           | F  | Product Analytics | Notes |
| ------------------------------------------------------------ | ---| ----------------- | ----  |
| Enable [container registry](https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry) across instance | x |`container_registry_enabled`        |   The Container Registry is enabled by default, but it can be turned off by an Administrator or by adjusting the project's settings.   |
| [Publish packages to your project](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts.projects_with_packages`        |   This metric looks at the number of projects with at least one package. (all formats) It can be used to get a high-level overview of adoption amongst an organization. |
| [Publish packages to your project](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`counts_monthly.packages`        |   This metric measures the total number of packages (all formats) published monthly. It can be used directionally to understand if adoption is growing or shrinking.  |
| [Publish packages to your project](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages) | x |`redis_hll_counters.user_packages.user_packages_total_unique_counts_monthly`        |   This metric measures the total number of users (all formats) that published a package in a given month.  |
| [Publish packages using a Deploy Token](https://docs.gitlab.com/ee/user/packages/package_registry/#authenticate-with-the-registry) | x |`counts.package_events_i_package_push_package_by_deploy_token`        |   This metric measures the monthly number of packages published using a Deploy Token. This important metric signifies that adoption of the Package Registry has matured into the customers' production workflows.   |
| [Pull packages as a Guest](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) | x |`counts.package_events_i_package_pull_package_by_guest`        |   This metric measures the monthly number of packages downloaded by a Guest user. This metric signifies broader adoption as well. As it means that several different teams and projects are consuming packages.   |
| [Publish npm packages](https://docs.gitlab.com/ee/user/packages/npm_registry/#publish-an-npm-package) | x |`redis_hll_counters.user_packages.i_package_npm_user_monthly`        |   This metric measures the monthly number of users publishing npm packages   |
| [Publish Maven packages](https://docs.gitlab.com/ee/user/packages/maven_repository/#publish-a-package) | x |`redis_hll_counters.user_packages.i_package_maven_user_monthly`        |   This metric measures the monthly number of users publishing Maven packages   |
| [Publish PyPI packages](https://docs.gitlab.com/ee/user/packages/pypi_repository/) | x |`redis_hll_counters.user_packages.i_package_pypi_user_monthly`        |   This metric measures the monthly number of users publishing PyPI packages   |
| [Publish Composer packages](https://docs.gitlab.com/ee/user/packages/composer_repository/#publish-a-composer-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_composer_user_monthly`        |   This metric measures the monthly number of users publishing Composer packages   |
| [Publish NuGet packages](https://docs.gitlab.com/ee/user/packages/nuget_repository/#publish-a-nuget-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_nuget_user_monthly`        |   This metric measures the monthly number of users publishing NuGet packages   |
| [Publish Generic packages](https://docs.gitlab.com/ee/user/packages/generic_packages/) | x |`redis_hll_counters.user_packages.i_package_generic_user_monthly`        |   This metric measures the monthly number of users publishing generic packages   |
| [Publish Conan packages](https://docs.gitlab.com/ee/user/packages/conan_repository/#publish-a-conan-package-by-using-cicd) | x |`redis_hll_counters.user_packages.i_package_conan_user_monthly`        |   This metric measures the monthly number of users publishing Conan packages   |
| [Publish Helm charts](https://docs.gitlab.com/ee/user/packages/helm_repository/#use-cicd-to-publish-a-helm-package) | x |`redis_hll_counters.user_packages.i_package_helm_user_monthly`        |   This metric measures the monthly number of users publishing Helm charts   |

### Discovery Questions

- Are you using GitLab for CI?
  - Do you currently containerize your apps?
    - If yes, what container registry are you using?
    - What percentage of your projects are building containers?
    - Which features are important to you in a container registry?
    - Do you have customized workflows or requirements?
    - What is working / not working about your current container registry?
  - Do you package any libraries? Are you planning to?
    - What languages are you using?
    - Which features are important to you in a package registry?
    - What is working / not working about your current package registry?
  - Do you want to provide public access to any of your containers or packages?

#### Additional Documentation Links

- [Use CI/CD to build packages](https://docs.gitlab.com/ee/user/packages/package_registry/#use-gitlab-cicd-to-build-packages)
- [Build and push images using CI/CD](https://docs.gitlab.com/ee/user/packages/container_registry/#build-and-push-by-using-gitlab-cicd)
- [Avoid Docker Hub rate limits with the Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/#docker-hub-rate-limits-and-the-dependency-proxy)

#### Enablement and Training

- [Package roadmap review - March 2022](https://youtu.be/gsSWEqX4dOA)
- [Helm Chart repository demo](https://youtu.be/B6K373-pAgw)
- [How to host all your packages in a single project](https://youtu.be/ui2nNBwN35c)
- [Fetch packages from npmjs.org when the package is not available in the GitLab NPM Registry](https://youtu.be/Do-5bmgvHOU)
- [Display more robust build data in the Package Registry](https://youtu.be/mo6q7mWmlfA)
- [Publish and share Composer dependencies](https://youtu.be/e_HqOOWuRoI)
- [Control access to the container registry](https://youtu.be/UyGEOLp_4E4)
- [How to remove Docker images using CI/CD (speedrun)](https://youtu.be/jDlFCrH9H7g)
- [Use the GitLab Dependency Proxy to proxy and cache images from DockeHub](https://youtu.be/fNTfL55fh5c)
- [Conan Repository Demo](https://youtu.be/7NYgJWg-w5w)

### Frequent customer questions

1. Do you support the formats I need?
1. Can I pull dependencies from external sources? Are they cached?
1. Can I prevent dependencies with known vulnerabilities from ever being downloaded?
1. Can the dependencies be made available reliably for my organization? (multi-region, highly available, air-gapped)
1. OK, but we really rely on this, is it reliable?
1. Is it secure?
1. We have many terabytes of dependencies, can you handle that?
1. We have millions of downloads/uploads per day, can you handle that?
1. We also need the ability to audit the logs and know who/what/when/how packages have been uploaded or downloaded.
1. My organization destroys the current instance of GitLab before installing the new version. Are my packages backed up?
1. How the heck are we going to migrate our existing packages from vendor `x` to GitLab?
1. Beyond the migration, how are we going to update all of our pipelines and cookbooks.
1. I'm kind of a stickler Meseeks, how available is the product really?
1. Does it integrate easily with CI?
1. Can I manage storage easily?
1. I need to be able to make the repository private but the registry public?
1. I work for a center of excellences at a large organization, is there a way to put a big ol' badge on a dependency so the developers know what's available to them and pick the right dependencies.
1. Can you help me to avoid dependency confusion and typosquatting attacks?
1. Can you tell me how permissions work?
1. I want packages to be immutable objects, is that how GitLab works?
1. What about customer support?
1. Is it easy to get started?
1. Do the docs make sense?
1. What happens if the registry goes down?
1. Is anybody using GitLab's offering? Do they like it?
1. How should I tag things?
1. Is there an API?
1. Can I view packages and their build data?
1. Can I see when something has gone wrong?
1. Can I search for a package by name/version/type/description/commit/build/ really anything
1. Can I upload a package through the app?
1. Does the app warn me when a package is not compliant or contains a known vulnerability?
