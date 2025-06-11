---
title: "CI/CD Tools Primer"
---

## CI & CD

![CD vs CD Pipeline](/images/blogimages/cicd_pipeline_infograph.png)
From "[Setting up GitLab CI/CD for Android projects](https://about.gitlab.com/blog/2018/02/14/setting-up-gitlab-ci-for-android-projects/)"

### Continuous Integration (CI)

> **Continuous Integration** usually refers to integrating, building, and testing code within the development environment. Continuous Delivery builds on this, dealing with the final stages required for production deployment.
> \- [Martin Fowler on continuous delivery, 2013](https://martinfowler.com/bliki/ContinuousDelivery.html)

#### What

- **Continuous Integration** is a development practice
- Focuses on frequently integrating code into a shared repository
- Involves automatically building and testing every change that is committed
- Higher frequency of integration and testing means smaller problems
  - smaller problems are easier/quicker to fix
- Focus is to find code issues as early and quickly as possible
  - while the developer is still in context of code change, so easier to resolve problems

#### Why

- Reduces late discovery of code problems/bugs, making releases non-events and fixes less costly
- Enables developer confidence in code, which results in faster development

#### Who

- All development organizations
- Especially those who are trying to practice DevOps

### Continuous Delivery/Deployment (CD)

> **Continuous Delivery** is sometimes confused with **Continuous Deployment**. Continuous Deployment means that every change goes through the pipeline and automatically gets put into production, resulting in many production deployments every day. Continuous Delivery just means that you are able to do frequent deployments but may choose not to do it, usually due to businesses preferring a slower rate of deployment. In order to do Continuous Deployment you must be doing Continuous Delivery.
> \- [Martin Fowler on continuous delivery, 2013](https://martinfowler.com/bliki/ContinuousDelivery.html)

#### What

- Can mean either Continuous Delivery and/or Deployment
- The main difference between continuous delivery and deployment is delivery = manual release, deployment = automated release
- Either way, CD is a release management practice
- **Continuous Delivery** means that the software is always ready to be released
  - Can mean it is ready to be pushed to a staging or production system
  - Or that it is ready to be shipped/distributed (not everyone does web apps)
- **Continuous Deployment** means that changes are actually released to production automatically when the pipeline successfully completes
- An automated, reliable and repeatable deployment process is critical for CD
- An immutable way to store and reference your deployment artifacts is critical for CD
  - eg. Artifact repository, Container registry
- Feature flags are important to enable CD with minimal impact to customers
- Deployment visibility is important with CD to keep track of what is where with the increased deployment frequency

#### Why

- Continual testing for releasability lowers the risk of each release - goal: boring releases
- When releases are low risk, they happen more, and value gets delivered to customers more frequently

#### Who

- All software organizations (at least for "continuous delivery")
- Not all software organizations need to, want to, or can get to "continuous deployment"
- If an org has a DevOps initiative, even if not explicitly defined, DevOps serves to enable CD

## Market Overview

### Forrester CI Wave

![Forrester CI Wave](/images/home/forrester-ci-wave-graphic.svg)

- No vendor can survive today by only doing CI
- Vendors in the CI space have all evolved to include CD, as it is a natural extension of the capabilities of a CI system
- This evolution largely involves adding integrations to provision and configure environments (the automation is already a capability)
- Containers, micro-services, and Kubernetes changed the game of what it takes to do CI/CD
  - build artifacts through the pipeline now come wrapped in their application environments
  - storing container images instead of build artifacts
  - full integration testing becomes easier in earlier stages
  - CI/CD tools can now more easily automate everything about an applications deployment with minimal integration work
- So now CI/CD vendors are all racing to add Docker and Kubernetes support

## Competitor Scope - Continuous Integration

|Feature           |GitLab      |CircleCI    |Azure DevOps|Jenkins     |Travis CI   |Bitbucket    |
|:-----------------|:----------:|:----------:|:----------:|:----------:|:----------:|:-----------:|
|Auto-scaling      |Y           |Y           |N           |Integration |Y           |Y            |
|Pipeline graphs   |Y           |Y           |Y           |Integration |N           |Integration  |
|Parallel jobs     |Y           |Y           |Y           |Y           |Y           |Y            |
|Config as Code    |Y           |Y           |Y           |Y           |Y           |Y            |
|Native Docker support|Y        |Y           |Y           |Integration |Y           |Y            |

## Competitor Scope - Continuous Delivery/Deployment (CI products)

|Feature           |GitLab      |CircleCI    |Azure DevOps|Jenkins     |Travis CI   |Bitbucket    |
|:-----------------|:----------:|:----------:|:----------:|:----------:|:----------:|:-----------:|
|Environments      |Y           |N           |Y           |N           |Y           |Y            |
|Env History       |Y           |N           |N           |N           |N           |Y            |
|No Conf staging apps|Y           |N           |N           |N           |Y           |N            |
|Deploy boards     |Y           |N           |Y           |Integration |Y           |N            |
|Native Canary Deploy |Y           |N           |Y           |N           |Y           |N            |
|Secure variables  |Y           |N           |Y           |Integration |N           |Y            |
|Deploy tracability|Y           |N           |Y           |Integration |Y           |Y            |
|Protected Envs    |Y           |N           |Y           |N           |N           |Y            |
|Native Kubernetes support|Y           |N           |Y           |Integration |N           |N            |
|Native Feature flags|Y         |N           |N           |N           |N           |N            |

## Competitor Scope - Continuous Delivery/Deployment (CD products)

|Feature           |GitLab      |Spinnaker    |Azure DevOps|XebiaLabs  |ElectricFlow|CodeFresh    |
|:-----------------|:----------:|:----------:|:----------:|:----------:|:----------:|:-----------:|
|Environments      |Y           |-           |Y           |-           |Y           |-            |
|Env History       |Y           |-           |N           |-           |Y           |-            |
|No Conf staging apps|Y         |-           |N           |-           |N           |-            |
|Deploy boards     |Y           |-           |Y           |-           |Y           |-            |
|Native Canary Deploy |Y        |-           |Y           |-           |Y           |-            |
|Secure variables  |Y           |-           |Y           |-           |Y           |-            |
|Deploy tracability|Y           |-           |Y           |-           |Y           |-            |
|Protected Envs    |Y           |-           |Y           |-           |Y           |-            |
|Native Kubernetes support|Y    |-           |Y           |-           |N           |-            |
|Native Feature flags|Y         |-           |N           |-           |N           |-            |
