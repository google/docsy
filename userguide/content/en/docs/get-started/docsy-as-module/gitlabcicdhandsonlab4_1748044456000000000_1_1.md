---
title: "GitLab CI/CD - Hands-On Lab: Working with CI/CD Components"
description: "This Hands-On Guide demonstrates how to add CI/CD components to a pipeline"
---

> Estimated time to complete: 15 minutes

## Objectives

A component is a reusable CI/CD configuration. Many of GitLab’s provided CI/CD features are provided as components. In this lab, you will learn how to create and add a CI/CD component to your GitLab project.

## Task A. Creating a Component

Let's create a component to use in our GitLab project.

1. Navigate to your **My Test Group** by clicking it in the breadcrumb at the top of the page.

1. From your **My Test Group** in GitLab, click the **New project** button.

1. Click the **Create blank project** tile.

1. Name your project `Example Component`.

1. Leave all other values as their default, and click the **Create project** button and wait for GitLab to redirect you to the new project's main page.

Now, we need to set up the configuration for the component.

1. In the repository of your Example Component project, click the **+** button, then click the **New Directory** option.

1. For the directory name, type in **templates**. Make sure that it is in lower case.

1. Click the **Commit changes** button, and commit it to the main branch.

1. Ensure you are now in the new templates directory. Click on the **+** button, then click the **New file** button.

1. Type in **sample-template.yml** as the file name.

1. In the body of the file, copy the following text to create your sample component:

```yaml
spec:
  inputs:
    stage:
      default: test
---
component-job:
  script: echo job 1
  stage: $[[ inputs.stage ]]
```

Here, we are creating a component with an input called *stage*. The stage input has a default value of 'test', which we will override in our other project.

1. Click **Commit changes**, and then click **Commit changes** in the pop-up screen.

Now we have a component file, but in order for the component to be accessible by other projects, we need to publish the component. Note that since the project is private, it will only be accessible by you.

## Task B. Publishing the Component

1. On the lefthand toolbar, select **Settings > General**.

1. All components require a project description. Write in your project description section, "This component is an example component, and is meant for demonstration purposes only."

1. Expand **Visibility, project features, permissions**.

1. Turn on the CI/CD Catalog project toggle. Click **Save changes**.

This will now make the project a CI/CD Catalog project. Any templates in the *templates* directory will now be available to any project, provided we make a release. Next we will use a component to make a release on our new custom component.

1. In the repository of your Example Component project, click the **+** button, then click the **New File** option.

1. Title the file `.gitlab-ci.yml`.

1. In the `.gitlab-ci.yml` file, add the following code snippet.

```yaml
workflow:
  rules:
    - if: '$CI_COMMIT_TAG'
      when: never
    - when: always
stages:
  - release
release component:
  stage: release
  image: registry.gitlab.com/gitlab-org/release-cli:latest
  script:
    - echo "Releasing the latest version of our component."
  release: 
    tag_name: 'v0.$CI_PIPELINE_IID.0'
    description: 'The latest component release.'
```

This code looks similar to our release component we made in a similar lab, but there is one key difference- component releases require a release format in semantic versioning (MAJOR.MINOR.PATCH). We use the PATCH version to differentiate between each commit.

1. Click **Commit changes**, and then click **Commit changes** in the pop-up screen.

1. Wait for the pipeline to complete.

## Task B. Adding the Created Component to our Project

1. Navigate to your CI/CD Catalogue by clicking on the search bar, and then clicking the **Explore** option.

1. Click on the **CI/CD Catalog** option on the left.

1. Click on the **Example component** component. This component will be only visible to you.

1. Copy the `include` statmement in the component. It should look similar to this:

```yaml

include:
  - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iuhrhhmd/example-component/sample-template@v0.4.0

```

1. Navigate to your CI/CD project by clicking on the Tanuki logo in the top left corner of the page, then click on your project name.

1. From the project, select your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in Pipeline Editor**.

1. At the top of your file, below the image, add in the custom component we created earlier. 

The top of the `.gitlab-ci.yml` file should look like this:

```yaml
workflow:
  rules:
    - if: $CI_COMMIT_TAG
      when: never 
    - when: always

default:
  image: golang

include:
  - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iuhrhhmd/example-component/sample-template@v0.4.0
```

1. Select **Commit changes**.

1. After committing your changes, navigate to the pipeline created for your commit. You will now see a new job named *component-job*. This job is the custom job we have imported using the `include` keyword.

1. Let's try overriding the stage to instead run in the deploy stage by adding the following to the `.gitlab-ci.yml` file:

```yaml
  include:
    - component: $CI_SERVER_FQDN/training-users/session-0a9ee9b9/iu6t0rjr/example-component/sample-template@v0.36.0
      inputs:
        stage: deploy
```

1. Select **Commit changes**, and watch as your *component-job* now runs in the deploy stage.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request.
