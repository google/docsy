---
title: "GitLab Advanced CI/CD - Hands-On Lab: Optimizing Pipeline Testing"
description: "This Hands-On Guide walks you through optimizing a test pipeline"
---

The goal of this lab is to explore the different ways that we can configure testing in an application.

> Estimated time to complete: 15 minutes

## Objectives

- Stop a pipeline after failure
- Unit test reporting
- Parallelization

In this lab, we will explore the different ways that we can configure testing in an application. Currently, we have the following testing setup for our project:

  ```yml
    stages:
      - deps
      - test

    default:
      image: node:latest

    install deps:
      stage: deps
      script:
        - npm install jest-junit
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test binarysearch:
      before_script:
        - npm install -g jest
      script:
        - jest binarysearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      before_script:
        - npm install -g jest
      script:
        - jest linearsearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
```

This lab will explore how we can ensure a test pipeline when a single job fails. We will also see how we can add test reporting to our test jobs.

## Task A. Stopping a Pipeline after Failure

In this example, let’s look at how we can cancel the pipeline in the case where one of our tests fails.

1. Navigate to your `Node` project repository.

1. Select `.gitlab-ci.yml`.

1. Select **Edit > Edit in pipeline editor**.

1. Just below the stages section of your `.gitlab-ci.yml` file, add a workflow to auto cancel the jobs.

    ```yml
    workflow:
      auto_cancel:
        on_job_failure: all
    ```

1. With this configuration, if any jobs fail, the whole pipeline will fail. To test this, you can create a test job that will purposely fail.

    ```yml
    test fail:
      stage: test
      script:
        - jet test.js
    ```

1. Select **Commit changes**.

Let's see how the pipeline handles the failed job.

1. In the left sidebar, select **Build > Pipelines**.

1. Select your most recent pipeline and observe the jobs. Note that when the `test fail` job fails, other jobs cancel, showing a grey slash icon.

Now that we have verified the auto cancel works, let's remove the failing job.

1. Navigate to your repository.

1. Select `.gitlab-ci.yml`.

1. Select **Edit > Edit in pipeline editor**.

1. Remove the `test fail` job. Your `.gitlab-ci.yml` file will look like this:

    ```yml
    stages:
      - deps
      - test

    workflow:
      auto_cancel:
        on_job_failure: all

    default:
      image: node:latest

    install deps:
      stage: deps
      script:
        - npm install jest-junit
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test binarysearch:
      before_script:
        - npm install -g jest
      script:
        - jest binarysearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      before_script:
        - npm install -g jest
      script:
        - jest linearsearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
    ```

1. Select **Commit changes**.

## Task B. Adding Test Reports

In this task, we will add a test report to our test jobs.

1. Navigate to your repository.

1. Select `.gitlab-ci.yml`.

1. Select **Edit > Edit in pipeline editor**.

1. We are going to adjust our `jest` commands for the `test binarysearch` and `test linearsearch` jobs to add a `testResultsProcessor` to the command.  We can do this by adding the `--ci --testResultsProcessor=jest-junit` flags to the command. The `--ci` option is provided will make Jest assume it is running in a CI environment. Below is an example of both jobs after the changes have been made:

```yml
    test binarysearch:
      before_script:
        - npm install -g jest
      script:
        - jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      before_script:
        - npm install -g jest
      script:
        - jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
```

1. The test results need to be stored in a JUnit file in order to be accessed by the pipeline. To do so, we need to add the following code snippet to both of our tests after the `script` keyword:

```yml
artifacts:
  when: always
  reports:
    junit: junit.xml
```

The tests will now look like this:

```yml
    test binarysearch:
      before_script:
        - npm install -g jest
      script:
        - jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      artifacts:
        when: always
        reports:
          junit: junit.xml
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      before_script:
        - npm install -g jest
      script:
        - jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      artifacts:
        when: always
        reports:
          junit: junit.xml
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
```

1. After making these changes, select **Commit changes**.

1. In the left sidebar, select **Build > Pipelines**.

1. Select your most recent pipeline.

1. Wait for the tests to complete. Refresh after the test jobs are complete and select the tab `Tests`.

1. You will see a report of your test results in the tab.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Advanced CI/CD*, please submit your changes via Merge Request!
