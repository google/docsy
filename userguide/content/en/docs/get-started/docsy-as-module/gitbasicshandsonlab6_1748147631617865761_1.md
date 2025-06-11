---
title: "GitLab with Git Fundamentals - Hands-On Lab: Static Application Security Testing (SAST)"
description: "This Hands-On Guide walks you through setting up a SAST job to track security flaws in code."
---

> Estimated time to complete: 30 minutes

## Objectives

This lab uses SAST, an optional feature in CI/CD pipelines, to identify security vulnerabilities in your code. GitLab's Vulnerability Report then shows any old or new vulnerabilities found with each pipeline run. You can learn more in the [documentation](https://docs.gitlab.com/ee/user/application_security/sast/).

## Task A. Enable SAST in your `CI Test` project

1. Navigate to your **CI Test** project.

1. Click on the `.gitlab-ci.yml` file and click **Edit > Edit single file**.

1. Copy the following lines at the bottom of your `gitlab-ci.yml` file:

    ```yaml
    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

    > To learn more about integrating `SAST` scanning into your `.gitlab-ci.yml` file, see the [documentation](https://docs.gitlab.com/ee/user/application_security/sast/#configure-sast-in-your-cicd-yaml).

1. The current `.gitlab-ci.yml` file should look like this:

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

    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

    > The **include** lets you include external YAML files in your CI/CD configuration. You can split one long `.gitlab-ci.yml` file into multiple files to increase readability, or reduce duplication of the same configuration in multiple places. You can read more about the include keyword in the [documentation](https://docs.gitlab.com/ee/ci/yaml/#include).

1. Enter an appropriate **Commit message**.

1. Set the **Target Branch** to `main`.

1. Click the **Commit changes** button.

## Task B. Add `run.py` and review SAST scanning results

In this task, you'll add a file with known vulnerabilities and see if SAST detects it.

1. Return to the **Project overview** page by clicking on the name of your project in the breadcrumbs section.

1. At the top of the project landing page, to the right of the branch dropdown, click **(+) > This directory > New file**.

1. For the **File name** field, type in `run.py`.

1. Copy the content below into the file:

    ```python
    import subprocess

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. Add an appropriate **Commit message**.

1. Set the **Target Branch** to `main`.

1. Click the **Commit changes** button.

1. In the left-hand navigation pane, click **Build> Pipelines**.

1. At the top of the row of the table of pipelines, click on the **running** (if it is still running) or **passed** (if the pipeline has been completed) status labels.

    > The SAST scan may take a few moments, so feel free to grab a cup of coffee while you wait.

1. When the pipeline finishes, in the left navigation pane, click on **Secure > Vulnerability report**.

1. Click any of the vulnerabilities and read about a potential security problem detected by SAST scanning in `run.py`.

1. Feel free to edit the code to fix the issue raised (such as removing the `subprocess.run` command), and commit the changes. Does the vulnerability report still note the issue as present?

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
