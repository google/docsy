---
title: "GitLab CI/CD - Hands-On Lab: Create A Basic CI Configuration"
description: "This Hands-On Guide walks you through creating and running a .gitlab-ci.yml file."
---

> Estimate time to complete: 15 - 20 minutes

## Objectives

The `.gitlab-ci.yml` file allows you to define the stages and jobs for your CI/CD process. In this lab, you will learn how to modify your `.gitlab-ci.yml` file.

## Task A. Define a Basic `.gitlab-ci.yml` File

1. Open your **CICD Demo** project from the last lab.

1. On the left Navigation pane click **Code > Repository**. Click on your `.gitlab-ci.yml` file to view its contents. Click **Edit > Edit single file**. Replace all the code in `.gitlab-ci.yml` with the content of the following snippet:

    ```yml
    stages:
      - test
      - build

    test job:
      stage: test
      script:
        - echo "I am a unit test!"

    build job:
      stage: build
      script:
        - echo "I am a build image!"
    ```

    > The pipeline logic will be almost identical to what you had previously, just the job names and echo statements will change slightly.

1. In the **Commit message** field, type `Add CI starter`, set the **Target Branch** to `main`, and click **Commit changes**.

1. Refresh the page to make the pipeline status icon appear. Check that the configuration is valid and that the pipeline is running by hovering over the **Pipeline: running** icon or the **Pipeline: passed** icon in the upper right corner of the page, to the left of the commit's SHA.

1. When the pipeline status changes to the **Pipeline: passed** icon, click it to review the pipeline graph for your CI configuration.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
