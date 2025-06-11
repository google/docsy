---
title: "GitLab Advanced CI/CD - Hands-On Lab: Optimizing Build Pipelines"
description: "This Hands-On Guide walks you through optimizing a build pipeline"
---

The purpose of this lab is to demonstrate the benefits of caching in a GitLab CI/CD Pipeline. A cache is one or more files a job downloads and saves. Subsequent jobs that use the same cache don’t have to download the files again, so they execute more quickly. Caches, unlike artifacts, are not stored in GitLab.

> Estimated time to complete: 15 minutes

## Objectives

The objectives for this lab are:

- Displaying the benefits of caching

## Task A. Building a basic pipeline

To start, let’s create a basic `Node.js` application to use for demonstration of pipeline builds.

1. Navigate to your ILT group.

1. Select **New project**.

1. Select **Create blank project**.

1. Set the project name to **Node**, leave all other options as default, then select **Create project**.

1. In this project, select **+ > New file**.

1. Set the filename to `index.js` and add the following code:

    ```js
    module.exports.binarySearch = function binarySearch(arr, val) { 
        let start = 0; 
        let end = arr.length - 1; 
        while (start <= end) { 
            let mid = Math.floor((start + end) / 2); 
            if (arr[mid] === val) { 
                return mid; 
            } 
            if (val < arr[mid]) { 
                end = mid - 1; 
            } else { 
                start = mid + 1; 
            } 
        } 
        return -1; 
    }

    module.exports.linearSearch = function linearSearch(arr, val){
      let index = 0;
      let found = false;
      while (!found && index < arr.length){
        if (arr[index] == val){
            found = true;
        }else{
          index += 1;
        }
        }

        if (!found){
            index = -1;
        }

      return index;
    }
    ```

    > This code is a simple binary search, which will search a sorted array for a value, returning either the index of the value if it exists in the array, or -1 if the value is not found.

1. Select **Commit changes**.

To create a Node project, we need to also create a `package.json` file.

1. Navigate to your project repository.

1. Select **+ > New file**.

1. Set the Filename to `package.json` and add the following text:

    ```json
    {
      "name": "ci-cd-demos",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
    ```

1. Select **Commit changes**.

## Task B. Creating tests

To demonstrate the concepts of caching, let’s introduce some testing into our application. First, let’s create some tests for the binary search.

1. Navigate to your code repository.

1. Select **+ > New file**.

1. Set the filename to `binarysearch.test.js` and add the following code:

    ```js
    const {binarySearch} = require("./index.js");

    describe("Binary search tests", () => {
        test("Search should succeed on first element", () => {
            expect(binarySearch([1,2,3,4],1)).toBe(0);
        });

        test("Search should succeed on last element", () => {
            expect(binarySearch([1,2,3,4],4)).toBe(3);
        });

        test("Search should succeed on any element", () => {
            expect(binarySearch([1,2,3,4],2)).toBe(1);
        });

        test("Search should return -1 on not found", () => {
            expect(binarySearch([1,2,3,4],10)).toBe(-1);
        });

    });
    ```

1. Select **Commit changes**.

1. We will create a similar set of tests for the linear search. Create a new file named `linearsearch.test.js` and add the following code:

    ```js
    const {linearSearch} = require("./index.js");

    describe("Linear search tests", () => {
        test("Search should succeed on first element", () => {
            expect(linearSearch([1,2,3,4],1)).toBe(0);
        });

        test("Search should succeed on last element", () => {
            expect(linearSearch([1,2,3,4],4)).toBe(3);
        });

        test("Search should succeed on any element", () => {
            expect(linearSearch([1,2,3,4],2)).toBe(1);
        });

        test("Search should return -1 on not found", () => {
            expect(linearSearch([1,2,3,4],10)).toBe(-1);
        });

    });
    ```

1. Commit your `linearsearch.test.js` file.

Next, we will create a `.gitlab-ci.yml` file to define our tests.

1. Navigate to the project repository.

1. Select **+ > New file**.

1. For the filename, enter `.gitlab-ci.yml`.

1. Add the following job definitions to the file:

    ```yml
    stages:
      - test

    default:
      image: node:latest
        
    test binarysearch:
      script:
        - npm i -g jest
        - npm install jest-junit
        - jest binarysearch.test.js

    test linearsearch:
      script:
        - npm i -g jest
        - npm install jest-junit
        - jest linearsearch.test.js
    ```

1. Select **Commit changes**.

## Task C. Using caching to optimize jobs

Let’s take a look at this set of job definitions to see if they can be made more efficient. One common optimization we can look for is repetition in scripts run during jobs. In this example, both jobs need to install the `jest-junit` package with npm. Rather than installing `jest-junit` twice, we can cache the package between jobs.

1. In your `.gitlab-ci.yml` file, add the following job:

    ```yml
    install deps:
      stage: deps
      script:
        - npm install jest-junit
      cache:
        key: $CI_COMMIT_REF_SLUG
        paths:
          - node_modules
    ```

1. Next, add the deps stage before the test stage to ensure the dependencies are cached before the testing scripts run:

    ```yml
    stages:
      - deps
      - test
    ```

The `.gitlab-ci.yml` file should now look like this:

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
    stage: test
    script:
      - npm i -g jest
      - npm install jest-junit
      - jest binarysearch.test.js

  test linearsearch:
    stage: test
    script:
      - npm i -g jest
      - npm install jest-junit
      - jest linearsearch.test.js
  ```

> With this definition, we create a cache with a key that matches the `CI_COMMIT_REF_SLUG`. This ensures that each job will receive a unique cache. The data being cached is the `node_modules` folder. To set up the cache for use, we use the script to run the install command for the `jest-junit` package, which we will use for report formatting in a later lab.

Now that we have a cache defined, we can remove the `jest-junit` package install from each job.

1. Remove the `npm i jest-junit` commands from your jobs and replace it with a cache reference. Below is an example of the completed `.gitlab-ci.yml` file:

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

1. Commit your changes to `main`.

1. Navigate to your pipeline and verify that your testing jobs now run successfully.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Advanced CI/CD*, please submit your changes via Merge Request.
