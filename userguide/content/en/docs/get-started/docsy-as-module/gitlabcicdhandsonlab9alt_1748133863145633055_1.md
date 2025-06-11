---
title: "GitLab CI/CD - Hands-On Lab: Code Quality Scanning"
description: "This Hands-On Guide walks you through using the Code Quality scanner to find and fix a code issue."
---

> Estimated time to complete: 15 - 20 minutes

## Objectives

Code quality scans allow you to analyze your source code for quality and complexity. The goal of a code quality scan is to keep your project's code simple, readable, and easier to maintain. In this lab, you will learn how to enable and view a code quality scan in your project. To learn more about code quality scans, click [here](https://docs.gitlab.com/ee/ci/testing/code_quality.html).

### Task A. Add a Python file with code quality problems

1. Using the left navigation pane, click **Code > Repository**.

1. Create a new file by going to the top of the window and clicking **+ > This directory > New file**.

1. For the **File name**, type `HelloWorld.py`.

1. Paste the following Python code into the file's contents:

    ```python
    def hello_world(a, b, c, d, e, f, g):
        print("Hello world")
        # TODO: improve this function
    ```

1. In the **Commit message** field, type `Add Python code`.

1. Set the **Target Branch** to `main`.

1. Click `Commit changes`.

### Task B. Configure the .gitlab-ci.yml with Code Quality Scanning

1. In the left navigation pane, click **Code > Repository**.

1. Click on your existing `.gitlab-ci.yml` file.

1. Edit the file by clicking the blue **Edit** dropdown and selecting **Edit single file**.

1. Delete all of the existing code in the file. Replace the code with the following file content:

    ```yml
    stages:
      - test

    test-job:
      stage: test
      script:
        - echo "Pipeline needs at least one job"

    include:
      - template: Code-Quality.gitlab-ci.yml

    # TODO: should we refactor this file?
    ```

  > This code starts by defining a single stage named `test`. Next, a single job is defined named `test-job`, which runs as a part of the `test` stage. The `include` section enables code quality scanning by including the code quality template. Finally, the `TODO` command is added as an example of code that is flagged as a code quality problem.

1. In the **Commit message** field, type `Add CI/CD configuration file that includes code quality scanning`.

1. Set the **Target Branch** to `main`.

1. Click `Commit changes`.

### Task C. View code quality scan results

1. In the left navigation pane, click **Build > Pipelines**.

1. The top row represents the pipeline that started running when you committed the `.gitlab-ci.yml` file in the previous section. Wait until the status icon at the left of that pipeline says **passed**.

  > It can take as long as 5 minutes for the code quality scanner to complete in the training environment, so this is a great time to grab a snack.

1. Once the pipeline's status is **passed**, click the status icon to see the pipeline details.

1. On the pipeline details screen, click the **Code Quality** tab above the pipeline graph.

1. Notice that the scanner found 3 code quality issues in 2 different files: 2 in `HelloWorld.py` and 1 in `.gitlab-ci.yml`.

### Task D. Make a branch

1. In the left navigation pane, click **Code > Branches**.

1. Click **New branch**. In the **Branch name** field, type `branch-A`.

1. Click **Create branch**.

1. Click **Create merge request** in the top right of the window. Leave all settings at their default values.

1. Click **Create merge request**.

### Task E. Fix issues on the branch

1. In the left navigation pane, click **Code > Repository**.

1. In the branch dropdown in the top left of the window, pick **branch-A**.

1. Open `HelloWorld.py` and click **Edit**.

1. Fix a code quality problem by replacing line 1 with this code:

   ```python
   def hello_world(a):
   ```

1. Fix another code quality problem by deleting line 3.

1. Commit these changes with the commit message `Fix code quality problems`

### Task F. Compare the code quality of **branch-A** to the code quality of **main**

1. In the left navigation pane, click **Build > Pipelines**.

1. Wait for the most recent pipeline to show **passed** status. This might take as long as 5 minutes.

1. In the left navigation pane, click **Merge requests**. Click the **Draft: Branch A** MR to see the MR details page.

1. Half-way down the MR details page, if it says **No changes to code quality**, you may have to refresh the page.  The pane should say **Code Quality scans found 2 fixed findings.**. This means you have fixed 2 code quality problems on **branch-A** which remain unfixed on **main**.

1. **Expand** the code quality pane to see the code quality problems you fixed on **branch-A**.

1. To transport or save the results of code quality scanning, the json artifact is available on the Pipelines page by clicking on the vertical ellipses right of the page.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
