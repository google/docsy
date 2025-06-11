---
title: "GitLab CI/CD - Hands-On Lab: Job Policy Patterns"
description: "This Hands-On Guide walks you through working with CI/CD jobs with the rules keyword."
---

> Estimate time to complete: 25 - 30 minutes

## Objectives

Job Policy patterns allow the pipeline to control when and if jobs run using the `rules` keyword. In this lab, you will learn how to create jobs with rules. You will see the impact of these rules on a pipeline and learn how to use variables with pipeline rules.

> Usage of the `only` and `except` keywords, while able to accomplish similar results, are not actively being developed and are not encouraged. For more information, click [here](https://docs.gitlab.com/ee/ci/jobs/job_control.html).

## Task A: Creating Jobs with Rules

1. Open your **CICD Demo** project from previous labs.

1. Click your `.gitlab-ci.yml` file to view its contents. Click **Edit > Edit single file**.

1. To clean up our configuration file, remove the `environment echoes` and `environment variables` jobs. Also remove the `variables` keyword and the associated variable. After completing these steps, you will have the following `.gitlab-ci.yml` file:

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

1. At the end of the file, paste the following code snippet:

    ```yml
    deploy review:
      stage: review
      script:
        - echo "Do your average deploy here"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: never
        - if: '$CI_COMMIT_TAG'
          when: never
        - when: always
      environment:
        name: review/$CI_COMMIT_REF_NAME

    deploy release:
      stage: deploy
      script:
        - echo "Deploy to a production environment"
      rules:
        - if: '$CI_COMMIT_TAG =~ /^v.*/'
          when: manual
      environment:
        name: production

    deploy staging:
      stage: deploy
      script:
        - echo "Deploy to a staging environment"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: always
        - when: never
      environment:
        name: staging
    ```

1. At the top of `.gitlab-ci.yml`, in the `stages` section, add the `review` and `deploy` stages.

1. In full, you will have the following `.gitlab-ci.yml` file upon completion:

    ```yml
   stages:
      - test
      - build
      - review
      - deploy

    test job:
      stage: test
      script:
        - echo "I am a unit test!"

    build job:
      stage: build
      script:
        - echo "I am a build image!"

    deploy review:
      stage: review
      script:
        - echo "Do your average deploy here"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: never
        - if: '$CI_COMMIT_TAG'
          when: never
        - when: always
      environment:
        name: review/$CI_COMMIT_REF_NAME

    deploy release:
      stage: deploy
      script:
        - echo "Deploy to a production environment"
      rules:
        - if: '$CI_COMMIT_TAG =~ /^v.*/'
          when: manual
      environment:
        name: production


    deploy staging:
      stage: deploy
      script:
        - echo "Deploy to a staging environment"
      rules:
        - if: '$CI_COMMIT_REF_NAME == "main"'
          when: always
        - when: never
      environment:
        name: staging
    ```

1. In the **Commit message** field, type `Add CI structure job definitions`, ensure the **Target Branch** is set to `main`, and click **Commit changes**.

1. In the left-hand navigation pane, click **Build > Pipelines** and click the status icon next to the most recent pipeline run.

1. Click the widgets to see what environment the pipeline is deploying the code to. In the left sidebar, click **Operate > Environments** to see the environments that have been created.

    > You will see that `deploy staging` is the only one of the three jobs that executed, based on the rules that were defined for each job.

1. **Optional:** Experiment with triggering pipelines using different branches and tags. Can you get different pipeline runs to execute the **deploy release**, **deploy review**, and **deploy staging** jobs?

    > Hint: Look at the `rules` keyword in the relevant `.gitlab-ci.yml` job definitions.

## Solutions

### Task B1: Running the `deploy review` Job

1. Review the rules specified in the deploy review's `rules` section. It will only run when A) The branch name (represented by `$CI_COMMIT_REF_NAME`) is not equal to `main`, and B) there is no tag on the branch (represented by `$CI_COMMIT_TAG`).

    > A variable used with an if keyword on its own is checking if said variable has any value associated with it. If it has any value, regardless of what that value is, the statement is true. This includes values that would be considered false in other programming languages, such as `False`. If there is no value, the statement is false. A variable with whitespace as its value is considered false as well.

1. Create a new branch by clicking on `Code > Branches`.

1. Click the **New branch** button.

1. Type **Dev** in the **branch name** section, and click **Create branch**.

1. Click on **Build > Pipelines**.

1. Click on the **Run Pipeline** button.

1. Under **Run for branch name or tag**, make sure **Dev** is selected.

1. Click on the **Run Pipeline** button.

Your `deploy review` job should be the only job that should be running.

### Task B2: Running the `deploy release` Job

1. Open your .gitlab-ci.yml file and review the rules specified in the deploy release rules section. It will only run when A) The branch name (represented by `$CI_COMMIT_REF_NAME`) is not equal to main, and B) there is a tag on the branch that begins with the letter `v` (represented by `$CI_COMMIT_TAG =~ /^v.*/`)

1. We will need to make a tag for this job to run. To make a tag, click on **Code > Tags**.

1. Click on the **New tag** button.

1. Type in `v1.0` into the Tag name section.

1. Change the **Create from** option to display `Dev` instead.

1. Click the **Create tag** button.

1. Click on **Build > Pipelines**.

1. Click on the **Run Pipeline** button.

1. Under Run for branch name or tag, make sure **v1.0** is selected.

1. Click on the **Run Pipeline** button.

1. Your deploy release job should be the only job available. Since the job has been set to manual, it will not run until you explicitly start it. Click on the arrow next to the job to start the job.

### Task B3: Running the `deploy staging` Job

1. Open your `.gitlab-ci.yml` file and review the rules specified in the deploy staging `rules` section. It will only run when A) The branch name (represented by `$CI_COMMIT_REF_NAME`) is equal to `main`.

1. In the top left corner, click on the button that says **Dev**, and set the option to be **main** instead.

1. Click on **Build > Pipelines**.

1. Click on the **Run Pipeline** button.

1. Under **Run for branch name or tag**, make sure **main** is selected.

1. Click on the **Run Pipeline** button.

Your `deploy staging` job should be the only job that is running.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
