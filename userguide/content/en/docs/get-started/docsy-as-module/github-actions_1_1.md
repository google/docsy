<h1>GitHub Actions</h1>

GitHub Actions is the automation service used in the [Quick start](../quick-start.md). Historically, GitHub has not provided an automation service, and required third-party services like CircleCI or Travis. But GitHub Actions changes that.

GitHub Actions is a "continuous integration" (CI) cloud service, specifically for repositories in GitHub. It is useful for Open SDG in a way that is typical of open-source projects: it "listens" for certain events in your GitHub repository, and then provides temporary virtual machines to perform various server-side tasks. Open SDG needs a CI tool to accomplish these things:

* Run each new proposed change through certain tests, to prevent regression bugs
* Build and deploy the platform to a "staging" environment whenever changes are made
* Build and deploy the platform to a "production" environment whenever a new release is made

## Pros

* GitHub Actions is free for public repositories
* Does not require any SSH keys to integration with GitHub repositories

## Cons

Assuming you are using GitHub for your repository, there are not many downsides to GitHub Actions, making it a good choice for Open SDG.

## Set-up

The [Quick start](../quick-start.md) page includes all the set-up for GitHub Actions.

## Usage

Using GitHub Actions involves putting "workflow" files (eg, `.github/workflows/my-workflow.yml`) in your repository. The [site starter](https://github.com/open-sdg/open-sdg-site-starter) and [data starter](https://github.com/open-sdg/open-sdg-data-starter) repositories include workflows for automating tests of pull requests, and deployment of the staging site.
