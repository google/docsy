---
title: "GitLab Advanced CI/CD - Hands-On Lab: Reviewing Best Practices"
description: "This Hands-On Guide walks you through common best practices for CI/CD in GitLab"
---

The goal of this lab is to use things like hidden jobs and map merges to help make your code more concise, and avoid repitition.

> Estimated time to complete: 15 minutes

## Objectives

- Reducing repetition in your pipeline
- Hidden jobs and map merges

In our testing pipeline, there are a few instances where we are repeating code and definitions.  We already saw that it was possible to use caches to reduce repetition in the npm install of packages. In this lab, you will learn how to further reduce the repetition in your code.

Here is the current `.gitlab-ci.yml` file definition:

```yml:
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
    key: node_mod
    paths:
      - node_modules
  
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
    artifacts:
      when: always
      reports:
        junit: junit.xml
    cache:
      key: $CI_COMMIT_REF_SLUG
      paths:
        - node_modules
```

## Task A. Simplifying your jobs

1. Navigate to your project repository.

1. Select the `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. In our current `.gitlab-ci.yml` file, all of the tests contain the same set of artifacts. Instead of defining the artifacts at each job, you can instead first create a hidden job with the definition:

    ```yml
    .artifactdef: &artifactdef
      artifacts:
        when: always
        reports:
          junit: junit.xml
    ```

1. You can then use a map merge to add the artifact definition to all of your testing jobs:

    ```yml
    test binarysearch:
      script:
        - jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      <<: *artifactdef
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

    test linearsearch:
      script:
        - jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      <<: *artifactdef
      key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
    ```

1. Additionally, we can move the cache into a hidden job to avoid repetition. In this example, we moved these definitions into the `cachedef` hidden job:

    ```yml
    stages:
      - deps
      - test
      
    workflow:
      auto_cancel:
        on_job_failure: all

    default:
      image: node:latest

    .artifactdef: &artifactdef
      artifacts:
        when: always
        reports:
          junit: junit.xml

    .cachedef: &cachedef
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules

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
        - jest --ci --testResultsProcessor=jest-junit binarysearch.test.js
      <<: [*artifactdef, *cachedef]

    test linearsearch:
      before_script:
        - npm install -g jest
      script:
        - jest --ci --testResultsProcessor=jest-junit linearsearch.test.js
      <<: [*artifactdef, *cachedef]
      
    ```

    > This change not only reduces the total number of lines of code, but also makes it so if the artifact changes, you only need to change it in one place, rather than multiple locations.

1. After making these changes, select **Commit changes**.

1. Monitor your pipeline by selecting **Build > Pipelines** in the left sidebar.

1. After verifying that your pipeline ran successfully, return to your `.gitlab-ci.yml` file. Can you find any other optimizations for this file?

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Advanced CI/CD*, please submit your changes via Merge Request.
