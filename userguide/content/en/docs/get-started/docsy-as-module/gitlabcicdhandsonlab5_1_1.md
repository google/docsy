---
title: "GitLab CI/CD - Hands-On Lab: Defining CI/CD Variables"
description: "This Hands-On Guide walks you through using inline, project, and group variables."
---


> Estimate time to complete: 15 - 20 minutes

## Objectives

To customize your CI/CD process, you can define your own environment variables. In this lab, you will learn how to define inline global variables, inline local variables, and group and project level variables.

### Task A: Add Inline Variables

There are two types of inline variables we will explore in this section: global inline variables and job scoped inline variables. These variables are defined only for the `.gitlab-ci.yml` file they are declared in.

Variables in GitLab CI/CD have a precedence, which means variables at a higher 'level' will override the values of a lower 'level'. This can lead to unintended results, so re-use of variable names should be monitored carefully. For more information, click [here](https://docs.gitlab.com/ee/ci/variables/#cicd-variable-precedence).

1. Open your **CICD Demo** project from previous labs.

1. Click your `.gitlab-ci.yml` file to view its contents. To edit the file, click **Edit > Edit single file**.

1. Paste the following snippet at the end of the file, with an empty line between the file's previous content and the snippet's content.

    ```yml
    environment echoes:
      stage: build
      script:
        - echo "Who am I running as..."
        - whoami
        - echo "Where am I..."
        - pwd
        - ls -al
        - echo "Here's what is available in our environment..."
        - env

    environment variables:
      stage: build
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

1. After doing this, your `.gitlab-ci.yml` file will look like this:

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

    environment echoes:
      stage: build
      script:
        - echo "Who am I running as..."
        - whoami
        - echo "Where am I..."
        - pwd
        - ls -al
        - echo "Here's what is available in our environment..."
        - env

    environment variables:
      stage: build
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

1. Near the top of your `.gitlab-ci.yml`, in a new line below the entire `stages` section, paste the following to declare a global inline variable:

    ```yml
    variables: 
      INLINE_GLOBAL_VARIABLE: "I'm an inline variable set at the global level of the CI/CD configuration file"
    ```

    > A variable declared at the top level is globally available. In this example, all jobs can use the `INLINE_GLOBAL_VARIABLE` variable.

1. Inside the `environment variables` job, just below that job's `stage: build` line (but before the `script` line), paste the following to declare a local inline variable. The `variables` keyword should be at the same indentation as that job's `stage` amd `script` keywords.

    ```yml
    variables:   
      INLINE_LOCAL_VARIABLE: "I'm an inline variable set at the job level of the CI/CD configuration file"
    ```

    > Since this variable inside a job, it is only accessible by the job. For this example, `INLINE_LOCAL_VARIABLE` is only accessible in the `environment variables` job.

1. At this point, your `.gitlab-ci.yml` file will look like this:

    ```yml
    stages:
      - test
      - build

    variables: 
      INLINE_GLOBAL_VARIABLE: "I'm an inline variable set at the global level of the CI/CD configuration file"

    test job:
      stage: test
      script:
        - echo "I am a unit test!"

    build job:
      stage: build
      script:
        - echo "I am a build image!"

    environment echoes:
      stage: build
      script:
        - echo "Who am I running as..."
        - whoami
        - echo "Where am I..."
        - pwd
        - ls -al
        - echo "Here's what is available in our environment..."
        - env
        
    environment variables:
      stage: build
      variables:   
        INLINE_LOCAL_VARIABLE: "I'm an inline variable set at the job level of the CI/CD configuration file"
      script:
        - echo "Do a test here"
        - echo "Here are some default, global, & local variables..."
        - echo $CI_COMMIT_SHORT_SHA
        - echo $group_level_variable
        - echo $project_level_variable
        - echo $INLINE_GLOBAL_VARIABLE
        - echo $INLINE_LOCAL_VARIABLE
    ```

    > When defining variables, watch your indentation. Global variables must be indented by 2 spaces, and must be immediately under a flush-left `variables` keyword that is outside any job definition. Local variables must be indented 4 spaces, and must be immediately under a `variables` keyword that is indented 2 spaces and is within a job definition.

1. In the **Commit message** field, type `Add custom variables`, ensure the **Target Branch** set to `main`, and click **Commit changes**.

### Task B: Add Group and Project-level Variables

> There are two types of variables we will discuss in this section: group and project-level variables. These variables are accessible at either the group or project level, allowing for a wider application of CI/CD variables.

1. Navigate to your **My Test Group** group by clicking it from the breadcrumbs at the top of the page.

1. In the left-hand navigation pane, click **Settings > CI/CD**

1. In the **Variables** section, click the **Expand** button.

1. Click **Add Variable**. Enter `group_level_variable` in the **Key** dialog box. *Hint: watch your spelling, capitalization, and underscores!*

1. Type `I'm a variable set at the group level` in the **Value** dialog box.

1. Leave all other options at their defaults and click **Add variable**.  

    > This is a group level variable, meaning it is accessible to any projects inside of **My Test Group**.

1. Navigate to your project by clicking your **My Test Group** in the breadcrumbs at the top of the page, and then clicking on the `CICD Demo` project.

1. Repeat steps 2 to 6, entering `project_level_variable` in the **Key** field and `I'm a variable set at the project level` in the **Value** field.

    > This is a project level variable, meaning it is accessible only inside the current project.

1. Setting variables does not trigger a pipeline run, so click **Build > Pipelines** in the left navigation pane, click the **Run Pipeline** button, and click the second **Run Pipeline** button.

1. Click on the widget for the `environment variables` job from your running pipeline and verify the variables and their values are correctly displayed in the job output.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
