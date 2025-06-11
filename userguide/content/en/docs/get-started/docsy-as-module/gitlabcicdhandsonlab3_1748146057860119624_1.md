---
title: "GitLab CI/CD - Hands-On Lab: Configuring Pipeline Testing"
description: "This Hands-On Guide demonstrates how to configure testing for a binary"
---

> Estimated time to complete: 15 minutes

## Objectives

- Handling different test types (unit, integration, end to end)
- Using the `allow_failure`, `dependencies` / `needs`, and `before_script` / `after_script` keywords
- Including a code coverage job

In this lab, we will create a simple testing procedure for our Go application.

## Task A. Create code and tests

Let’s introduce some code to test, as well as some unit tests for the code.

1. Navigate to your project.

1. Select **+ > New directory**.

1. Set the directory name to **ArrayUtils**.

1. Make sure that **Commit to the current main branch** is selected, and click **Commit changes**.

1. In the **ArrayUtils** directory, select **+ > New file**.

1. Name the file `ArrayUtils.go`. Add the following code to the file:

    ```go
    package ArrayUtils

    func SearchArray(a []int, x int) bool{
      var found bool
      found = false

      for i := 0; i < len(a); i++{
        if a[i] == x{
          found = true
        }
      }

      return found
    }
    ```

1. Leave all other options as default and select **Commit changes**.

1. In your `ArrayUtils` directory, select **+ > New file**.

1. Name the file `ArrayUtils_test.go`. In this file, we will add our unit tests:

    ```go
    package ArrayUtils

    import(
      "testing"
    )

    func TestArraySearch(t *testing.T){
      var a = []int{1,2,3}
      var result bool 
      
      result = SearchArray(a,3)

      if !result{
        t.Fatalf("Expected to find value!");
      }
      
      result = SearchArray(a,5)

      if result{
        t.Fatalf("Expected to not find value!");
      }

    }
    ```

1. Leave all other options as default and select **Commit changes**.

To run these tests, you can use the command `go test array/ArrayUtils`. Let’s see how we can integrate these tests into our CI/CD pipeline.

## Task B. Create test stage and job in .gitlab-ci.yml

Generally, tests will run inside of the test stage of a CI/CD process.

1. Select your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. In the stages section, add the `test` stage before the `build` stage:

    ```yaml
    stages:
      - test
      - build
      - run
      - release
    ```

1. Create a job in the test stage that runs the tests we created for ArrayUtils.

    *Coding Challenge:*

    What is the the syntax for a job in the test stage that runs the tests we created for ArrayUtils? Write the syntax.

    *Answer:* One example approach is shown in the following code snippet. If you have not done so yet, copy the code into your `.gitlab-ci.yml` file.

    ```yaml
    test go:
      stage: test
      script: go test array/ArrayUtils
    ```

1. After adding these changes, select **Commit changes**.

1. View the resulting pipeline. You will now see a test stage appear. In the test stage, you will see your test job. When you select the test job, you will see that the job runs the `go test array/ArrayUtils` command. If all of your code is correct, this stage should succeed without any errors.

Note that when we add the test stage, it automatically precedes our other stages like release. In this setup, if the tests fail for any reason, the stages afterwards will not run. In some cases, we may not want to cause future stages to fail if our current job fails.

## Task C. Creating a failable job

*Coding Challenge:*
What would we add to our job configuration to define this behavior? Write the syntax.

*Answer:* To allow a job to fail, you can add the `allow_failure` attribute to a job. If you have not done so yet, add `allow_failure: true` to your `test go` job. The job should look like the code below.

```yaml
test go:
  stage: test
  script: go test array/ArrayUtils
  allow_failure: true
```

1. To test this out, try adding a new test that will always fail. If you are unsure on how to write the test, edit your `ArrayUtils_test.go` file and copy the code below.

    ```go
    package ArrayUtils

    import(
      "testing"
    )

    func TestArraySearch(t *testing.T){
      var a = []int{1,2,3}
      var result bool 
      
      result = SearchArray(a,3)

      if !result{
        t.Fatalf("Expected to find value!");
      }
      
      result = SearchArray(a,5)

      if result{
        t.Fatalf("Expected to not find value!");
      }

      result = SearchArray(a,7)

      if !result{
        t.Fatalf("Expected to find value!");
      }

    }
    ```

    In this example, the final test looks for a value that does not exist in the array, but expects it to find the value. This test will always fail as we are expecting the wrong result.

1. Select **Commit changes** and, commit the changes to a new branch called `failable-tests-branch`. Commit the code without a Merge Reuqest.

1. Monitor the progress of your test job.

    > When the test job completes, you will see that the job fails. When it fails, it will show a yellow exclamation mark rather than a red x. This indicates that the job failed as a warning, meaning it won’t prevent future stages from running. You will see that your next stage does execute even with the failure.

1. Navigate to **Build > Jobs**. You will see that the test job is tagged as `Allowed to fail`. This allows you to easily see if a job is allowed to fail or not in a pipeline.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request.
