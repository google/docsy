---
title: "GitLab CI/CD - Hands-On Lab: Understanding the Basics of Pipelines"
description: "This Hands-On Guide walks you a live example of a GitLab CI/CD Pipeline"
---

> Estimate time to complete: 15 - 20 minutes

## Objectives

CI/CD is a continuous method of software development, where you continuously build, test, deploy, and monitor iterative code changes. To achieve these tasks, GitLab uses various different components. The objective of this lab is to familiarize yourself with the GitLab Pipeline UI, as well as the jobs and stages that make up a pipeline.

## Task A: Review GitLab's CI/CD Pipelines

1. Click [here](https://gitlab.com/gitlab-org/gitlab/-/pipelines) to navigate to GitLab's pipelines. You will see all of the pipelines that are running for commits to the main GitLab repo.

    On this page, you will see a table with four columns. The four columns you see at the top are:

    **Status**: The current status of the overall pipeline. Each job in the pipeline will have their own status as well.

    **Pipeline**: The name of the pipeline being ran. Also contains information on what merge request and commit the pipeline is running on.

    **Created by**: The individual responsible for starting the pipeline.

    **Stages**: The phases of the pipeline.

1. Hover over any of the icons in the **Stages** column to see the status of each stage as the pipeline progresses.

    Some common statuses you can see are:

    **Passed**: The job has successfully completed.

    **Running**: The job is actively processing.

    **Created**: The job is waiting on other jobs to complete before it can run, but it is ready to run.

    **Failed**: The job has not passed due to an exception. This does not necessarily mean that the entire pipeline will fail.

1. Click on any of the running pipeline statuses in the leftmost column to view that pipeline's graph. The graph is a visual representation of the order of stages in a pipeline, as well as the statuses of the jobs in a stage. By default, all jobs in a stage must succeed in order for the next stage to run.

    > There are exceptions to the rule that all jobs in a stage must succeed for the next stage to run. You can read more about the exceptions [here](https://docs.gitlab.com/ee/ci/yaml/needs.html).

1. Review the names of the pipeline's stages. The name of a stage can be whatever you want it to be. The order of the stages will be determined by the `.gitlab-ci.yml` file.

1. Click on the name of a job with either a **Passed** or a **Running** status to see the output from the jobs.

    > Each job runs in an environment independent of all other jobs.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
