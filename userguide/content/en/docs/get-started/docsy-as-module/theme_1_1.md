---
title: Theme
description: Support Operations documentation page for our Zendesk theme
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/theme"
---

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

The process for modifying the theme should always be as follows:

1. [Create the merge request](#create-the-merge-request)
1. [Run the merge request pipeline](#run-the-merge-request-pipeline)
1. [Add a comment linking to the temporary theme in the sandbox](#add-a-comment-linking-to-the-temporary-theme-in-the-sandbox)
1. [Perform a full review of the changes](#perform-a-full-review-of-the-changes)
1. [Merge the changes into the master branch](#merge-the-changes-into-the-master-branch)

#### Never modify a theme in Zendesk itself

As we manage our themes via the API, you should **never** modify a theme
directly in Zendesk. Doing so will revert it from an "API theme" to a
"customized theme", making it no longer able to be managed via the API. As such,
you should only *ever* work out of merge requests from the source project.

If this should happen, please notify the team via our slack channel immediately.

#### Create the merge request

The first thing you should be doing is creating the merge request for the
changes. Doing so is *essential* for the rest of the process.

It is **critical** you ensure you update the theme's version in the
`data/theme/manifest.json` file. If this does not happen, the theme will fail to
actually update during the deployment sync.

To do this, locate the attribute `version` in the file and add 1 to the value
after the last decimal. As an example, if the version was `1.0.9`, you would
change it to `1.0.10`.

#### Run the merge request pipeline

With your merge request created, you need to run the manual pipeline for your
merge request. Doing so will upload your changes into a temporary theme in the
corresponding instance's sandbox. This will allow you to view the changes and
perform any needed testing.

To do so, navigate to your merge request, click the `Pipelines` tab, and locate
the most recent pipeline. It should not have run any jobs, but instead having
one that is waiting for your action. This is a manual pipeline. To run this,
you will want to click the play icon to the right of the most recent pipeline.

#### Add a comment linking to the temporary theme in the sandbox

After the manual job finishes, you will want to check the logs of the job to get
the temporary theme link. Towards the bottom of the logs should be a line
looking something like this:

```bash
Theme will be available via https://gitlab1707170878.zendesk.com/theming/theme/febb6377-13f5-489d-8287-1c16467718b0
```

You will want to copy that whole line and add it as a comment in your merge
request.

#### Perform a full review of the changes

With all that done, you can now review the changes and perform your testing. To
do that, use the theme URL from the job log. Navigating to it (once logged in)
will load the theme up and let you navigate its various pages.

**NOTE** Do not click `Edit code`! This will convert the theme to a non-API
theme, which might make it unable to be modified via the API.

#### Merge the changes into the master branch

Once all review and testing has been done, and the needed approvals have been
granted, you are good to merge the changes into the master branch. The changes
will automatically be populated into both the production and sandbox instances
on the next deployment date.

### Source Projects

#### Zendesk Global

- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/theme)

#### Zendesk US Government

- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/theme)
