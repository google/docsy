---
title: "GitLab CI/CD - Hands-On Lab: Security Scanning"
description: "This Hands-On Guide walks you through using SAST to find and fix a security vulnerability in your code."
---

> Estimate time to complete: 15 - 20 minutes

## Objectives

SAST, an optional feature on CI/CD pipelines, analyzes your source code for known vulnerabilities. GitLab’s Vulnerability Report then shows any old or new vulnerabilities found with each pipeline run. In this lab, you will learn the process of enabling SAST scans in your CI/CD pipelines. You can learn more about SAST scanner by clicking [here](https://docs.gitlab.com/ee/user/application_security/sast/).

### Task A. Creating a Test File

1. Open your **CICD Demo** project from previous labs.

1. Near the top left, to the right of the branch dropdown, click **(+) > This directory > New file.**

1. Type `run.py` as the name of the file.

1. Copy and paste the following code into the body:

    ```python
    import subprocess

    ip = input("Enter your server ip: ")
    subprocess.run(["ping", ip])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. Type `Create Run.py as a test file` into the commit message.

1. Set the **Target branch** to `main`.

1. Click **Commit changes**.

    > This file has a command injection vulnerability, which can lead to security breaches. We are going to use the SAST Scanner to detect issues in our code.

### Task B. Creating and Running a SAST Scan

1. Open your **CICD Demo** project from previous labs.

1. Click on your `.gitlab-ci.yml` file to view its contents.

1. Click **Edit > Edit single file**. Paste the following snippet at the end of the file.

    ```yml
    include:
      - template: Jobs/SAST.gitlab-ci.yml
    ```

1. In the **Commit message** field, type `Enable SAST`, leave the **Target Branch** set to `main`, and click **Commit changes**.

1. Navigate to the pipeline that was started by this change and click the `semgrep-sast` job to ensure that it's running.

    > It might take a minute or two for the `Build` stage to complete first.

1. To view the results of the SAST scan, click **Secure > Vulnerability Report** in the left-hand navigation pane. In the **Tool** drop-down list, select **SAST**. Click on any vulnerabilities to learn more about them.

### Task C. Fix the Key Issues

1. In the sidebar, navigate to **Code > Repository**.

1. Click the `run.py` file.

1. On the `run.py` file, click the blue **Edit** dropdown and select **Edit single file**.

1. The scan showed that lines 1 and 4 contained a vulnerability.

    ```python
    # main.py Line 1
    import subprocess
    ```

    ```python
    # main.py Line 4
    subprocess.run(["ping", ip])
    ```

    > The problem is that these lines use user input to run a system command. In this situation, a user could craft an input that causes the application to execute an unintended command. To resolve this, you can either remove the command, or remove the user input from the command.

1. Remove the two lines from the code. This is what the file should look like now.

    ```python
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. In the commit field, type `Fix changes as suggested by SAST scan`, leave the **Target Branch** set to `main`, and click **Commit changes**

    > The SAST scan will need to run again in order to update the changes.

1. Once the pipeline has finished running, click **Secure > Vulnerability Report** in the left-handed navigation pane. In the **Tool** drop-down list, select **SAST**. Review to see if the security issues have been remediated.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
