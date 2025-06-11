---
title: "GitLab Advanced CI/CD - Hands-On Lab: Deployment Strategies"
description: "This Hands-On Guide walks you through the process of creating feature flags"
---

The next step in your development process is to determine an appropriate deployment strategy for your application. Rolling out changes to all users at once is a risky strategy, since any errors will impact all of your users and potentially cause outages. To mitigate this, you can take advantage of GitLab’s deployment features. In this section, you will learn how to implement a feature flag in your application to allow for a gradual rollout of features.

> Estimated time to complete: 15 minutes

## Objectives

By the end of this lab, you will be able to:

- Use GitLab's feature flag functionality

## Task A. Implement a Feature Flag

In this task, you will implement a feature flag in your application using GitLab's feature flag functionality. This will allow you to gradually roll out new features to a subset of users, reducing the risk of widespread issues if problems arise.

Follow these steps to set up and use a feature flag:

1. Navigate to **Deploy > Feature flags**.

1. Select **New Feature Flag**.

1. For the name, input `test`. For the Type, select `Percent rollout`.

1. Set the percentage to 50%, and set the **Based on** to Random.

1. Select **Create feature flag**.

1. After creating the feature flag, select **Configure**. Take note of the API URL and Instance ID fields. You will need these for your code changes.

1. Select your `index.js` file.

1. Select **Edit > Edit in single file**.

1. In your `index.js` file, remove all of your existing code and replace it with the following, ensuring to replace **your-instance-url** and **your-instance-id** with the values your made a note of earlier:

    ```js
    const { initialize } = require('unleash-client');

    const unleash = initialize({
      url: 'your-instance-url',
      appName:'production',
      instanceId: 'your-instance-id'
    });

    setInterval(() => {
    if (unleash.isEnabled('test')) {
        console.log('Toggle enabled');
    } else {
        console.log('Toggle disabled');
    }
    }, 1000);
    ```

1. Select **Commit changes**.

    > This code will continually run, attempting to check if the feature flag toggle is enabled or disabled. Since it is enabled for 50% of users, you should see it around half the time when this runs.

1. To test running this, we will test running the script.

1. Open you `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. Replace your whole `.gitlab-ci.yml` file with the following code:

    ```yml
    default:
      image: node:latest
      
    stages:
      - test

    test_flag:
      stage: test
      script:
        - npm i unleash-client
        - node index.js
    ```

1. Select **Commit changes**.

1. After committing your changes, in the left sidebar, select **Build > Pipelines**.

1. Select the `test_flag` job.

1. Observe that sometimes this job outputs true and sometimes it outputs false. This is because the feature flag is active 50% of the time.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Advanced CI/CD*, please submit your changes via Merge Request.
