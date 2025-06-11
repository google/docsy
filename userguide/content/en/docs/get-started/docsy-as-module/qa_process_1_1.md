---
aliases: /handbook/engineering/development/sec/secure/qa_process.html

title: Secure QA Process
---







## Everything starts with a Merge Request

We expect and require all contributions to our products to go a merge request with a formal review. As such, we follow the [Merge Request workflow](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html) and [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html) articulated in GitLab's developer documentation. We would, however, like to highlight a few items from these documents and add a few additional considerations for reviewers and authors.

### Additional considerations for Merge Request reviewers

* The best way to unblock a peer or community member is to [provide feedback in a timely manner](/handbook/engineering/workflow/code-review/#review-turnaround-time). If you are at capacity and cannot facilitate a review in the SLO to which we aspire, please let folks know in the merge request so another reviewer may be found.

### Additional considerations for Merge Request authors

* Being a globally distributed organization can, and frequently does, add latency to back-and-forth communication between folks. [Don't take it personally](/handbook/values/#assume-positive-intent) if it's taking longer than you expected to get feedback on your changes.

## Secure QA Process

The secure analyzers verify merge requests by running a new commit against downstream test projects for their supported languages/frameworks (i.e. the [`gemnasium` analyzer](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium) of `Dependency Scanning` will trigger tests against `php`, `go`, and [several other](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium/-/blob/v2.21.0/.gitlab-ci.yml#L35-89) test projects). The verification is done by comparing the generated report output against an expected report committed to the analyzer's repository. If analyzer behavior has changed, then the pipeline will fail because the contents of the expected and generated reports will no longer match.

The expectations for the `Dependency Scanning`, `SAST`, and `Secrets Detection` analyzers are stored in the project's `qa/expect` directory with a sub-directory for each particular framework/language type.

### Test Projects

The test projects reside in the Secure [tests subgroup](https://gitlab.com/gitlab-org/security-products/tests/) and their use and best practices are found in the [common README](https://gitlab.com/gitlab-org/security-products/tests/common/-/blob/master/README.md).

### Changing Analyzer Behavior

If a change to an analyzer changes the report output, then the expected report must change as well.

In `SAST`, `Dependency Scanning`, `Secret Detection` the expected reports are stored with the analyzer in a path corresponding to the test project in a subdirectory for the language/framework. For example, the expected report for scanning the dependencies of `java-maven` is stored in [gemnasium-maven/qa/expect](https://gitlab.com/gitlab-org/security-products/analyzers/gemnasium-maven/-/tree/master/qa/expect/java-maven). This way if an analyzer's behavior changes, the expectation can be changed and packaged in the same commit.

For `License Compliance`, expectations are stored in the test project's `qa/expect` directory (e.g. [ruby-bundler/qa/expect](https://gitlab.com/gitlab-org/security-products/tests/ruby-bundler/-/tree/master/qa/expect)).

More information about can be found in the [Security Products test projects repository](https://gitlab.com/gitlab-org/security-products/tests/common/-/blob/master/README.md).

### Testing on OpenShift

We currently do not have automated tests for OpenShift. If you want to see how a change affects the analyzer behavior on OpenShift,
you can test it using the [Secure OpenShift Instance](http://gitlab.apps.secure-stage-openshift-test.k8s-ft.win/).
You can find the credentials to login to this instance in 1Password under the name `Secure Openshift`.

If there is not an existing test project for the feature which you would like to test, then it is recommended
to mirror an existing test repository on GitLab.com. To do this, go to **New Project** -> **Import Project** -> **Repo by URL**
and paste the Git repository URL of the repository that you would like to mirror. Enable the **Mirror repository**
checkbox so that updates to the test respository on GitLab.com will be automatically synced to the OpenShift instance.
Set the project visibility to **public** so that any links that you leave to these projects on your merge requests
are visible to others.

Once you have finished creating the project, go to **CI/CD** -> **Pipelines** and click the **Run Pipeline** button
in order to start a new pipeline. The job will be picked up by OpenShift runners installed on the instance. Optionally, you can set an env var for the analyzer image (e.g. `SAST_ANALYER_IMAGE`) set to a tmp image built on a branch on gitlab.com to pull in changes and iterations.
