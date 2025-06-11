---

title: Five Minute Production
---







## Five Minute Production

### Important

**The Five Minute Production project has evolved into [⛅🌱 Cloud Seed](/handbook/engineering/development/incubation/cloud-seed/).**

**This page is dated and being maintained for archival purposes.**

**Check out [⛅🌱 Cloud Seed](../cloud-seed) for the latest version**

The objective of the Five Minute Production (5MP) incubation project is to make (non-k8s) deployments trivial for GitLab users. This includes, but is not restricted to, AWS and Google Cloud as deployment targets.

The [original 5MP prototype](https://gitlab.com/gitlab-org/5-minute-production-app/deploy-template) was built between November 2020 and January 2021 and a [short video description](https://www.youtube.com/watch?v=XcDN4bx7sNs) of it's usage and internals is available.

## Direction

* Current focus:
  * Five Minute Review-Apps (5MR)
  * 1-click Auth
  * 1-click Config
  * 5MR Pipeline
* Someday:
  * Research GCP and AWS service usage
  * Research GitLab customers usage
  * Build dedicated pipelines for GCP and AWS managed services

### Five Minute Review-Apps (5MR)

Before 5MP is deeply embedded in GitLab user experience, we must introduce 5MR (Five Minute Review-Apps). 5MR allows non-k8s users to deploy their Review Apps on AWS or Google Cloud.

Building 5MR will let us ship fast and verify the maturity of the pipeline with a test pool of existing Review App users.

Additionally, Review-Apps as a Service (without Kubernetes) is a top backlog item for Incubation Engineering. Focusing on 5MR allows us to make progress across multiple incubation projects.

### 1-click Auth

The original 5MP usage needed manually creating AWS keys and adding them as `Project :: Settings :: CICD` variables. This is fine, and will continue to be an acceptable way of functioning.

However, it would be nice if this manual process could be simplified and automated. Thus we would like to offer an option to `Setup AWS Creds` or `Setup Google Cloud Creds` in the `Group :: Settings :: CICD` settings which would make it possible to simplify and automate.

### 1-click Config

The original 5MP usage required manually `include`-ing the pipeline in the project `.gitlab-ci.yml` file. This is fine, and will continue to be an acceptable way of functioning.

However, would be nice if this manual process could be simplified and automated based on the model first introduced in the `Secure :: Config` section. This means an option is added to `Project :: Settings :: CICD` where the maintainer presser a button and an MR is automatically created which appends the relevant lines in the `.gitlab-ci.yml` pipeline definition.

### 5MR Pipeline

We will strip down the original 5MP pipeline to its base-elements and use that for 5MR. Review apps don't need VPCs, Subnets, Resource Groups, Managed Email Service and the likes.

The expectation is that the user brings their own AWS/GCP keys. However someday hosting might be a service offered by GitLab. Let's see.

## Quick URLs

* [Progress Tracker](https://gitlab.com/groups/gitlab-org/incubation-engineering/five-minute-production/-/boards?group_by=epic)
* [Monthly Direction and Weekly Updates](https://gitlab.com/gitlab-org/incubation-engineering/five-minute-production/meta/-/issues/7)
* [YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Krf0LZbfg80yo08DW1c3C36)
