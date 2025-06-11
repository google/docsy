---
title: "GitLab with Git Fundamentals - Hands-on Lab: Build a .gitlab-ci.yml file"
description: "This Hands-On Guide walks you through creating and running a CI/CD pipeline via a .gitlab-ci.yml file."
---

> Estimated time to complete: 30 minutes

## Objectives

CI/CD stands for Continuous Integration and Continuous Deployment. In other words, it is a continuous method of software development, where you continuously build, test, deploy, and monitor iterative code changes.

This iterative process helps reduce the chance that you develop new code based on buggy or failed previous versions. GitLab CI/CD can catch bugs early in the development cycle, and help ensure that all the code deployed to production complies with your established code standards.

To use GitLab CI/CD, you start with a .gitlab-ci.yml file at the root of your project which contains the configuration for your CI/CD pipeline. This file follows the YAML format and has its own special syntax. To learn more, see the [documentation](https://docs.gitlab.com/ee/ci/). **It is recommended to bookmark this page for future reference.**

## Task A. Create a new project and add a CI/CD configuration file

1. Navigate to your **My Test Group**, click on the **New project** button, and click the **Create blank project** tile.

1. In the title, type in `CI Test`.

1. Set the **Visibility Level** of the project to **Private**.

1. Enable the **Initialize repository with a README** checkbox.

1. Leave **Enable Static Application Security Testing (SAST)** unchecked.

1. Click the **Create project** button and wait for GitLab to redirect you to the new project's main page.

1. Create a new file by clicking **(+) > This directory > New file**

1. In the **Filename** dialog box enter `.gitlab-ci.yml`

1. In the **Apply a template** dropdown, select **General > Bash**. This populates your file with the contents of a minimal `.gitlab-ci.yml` file.

1. In the editor, delete all lines above the `build1:` line and below the `- echo "For example run a test suite"` line. This will leave you with two sections of code, which define the **build1** and **test1** jobs. Your `.gitlab-ci.yml` file should look like this:

    ```yaml
    build1:
      stage: build
      script:
        - echo "Do your build here"

    test1:
      stage: test
      script:
        - echo "Do a test here"
        - echo "For example run a test suite"
    ```

    > To learn more about jobs, see the [documentation](https://docs.gitlab.com/ee/ci/jobs/).

1. Define **build** and **test** stages by adding these 3 lines at the top of the file. The `stages` keyword must be flush left and the stage names must be indented by 2 spaces.

    ```yaml
    stages:
      - build
      - test
    ```

    > Use stages to define stages that contain groups of jobs. Use stage in a job to configure the job to run in a specific stage. See the [documentation](https://docs.gitlab.com/ee/ci/yaml/index.html#stages) to learn more.

1. Your current `.gitlab-ci.yml` file should look like this:

    ```yaml
    stages:
      - build
      - test

    build1:
      stage: build
      script:
        - echo "Do your build here"

    test1:
      stage: test
      script:
        - echo "Do a test here"
        - echo "For example run a test suite"
    ```

1. Leave the default values for the **Commit message** and **Target Branch** fields, and click the **Commit changes** button.

## Task B. Inspect the CI/CD pipeline

> Pipelines are the top-level component of continuous integration, delivery, and deployment. Pipelines comprise of **Jobs**, which define what to do, and **Stages**, which define when to run the jobs. For example, a stage can be defined for all the operations that build a project, and a job of this stage could be to compile the code. To learn more, click [here](https://docs.gitlab.com/ee/ci/pipelines/).

1. GitLab started running a CI/CD pipeline as soon as you committed `.gitlab-ci.yml` to your project's repository. To see the project's pipelines, navigate to **Build > Pipelines**.

1. Only 1 pipeline has run so far, so your table of pipelines has only 1 row. See the details of that pipeline by clicking the **status** label at the left of the pipeline's row.

    > The status label should show either **Running** or **Passed**

1. Inspect the pipeline graph. Each column represents a stage. In the **Build** stage, there's a widget representing the **build1** job. In the **Test** column there's a widget representing the **test1** job. Click on the **build1** widget to see the job's output in a web terminal. For example, look for the message `Do your build here` in the output.

1. Return to the pipeline graph by clicking on the back button on your web browser. Click on the **test1** widget to see the job's output in a web terminal. For example, look for the message `Do a test here` in the output.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
