---
title: "GitLab with Git Fundamentals - Hands-on Lab: Auto DevOps With a Predefined Project Template"
description: "This Hands-on Guide walks you through setting up and running an Auto DevOps pipeline."
---

> Estimated time to complete: 30 minutes

## Objectives

GitLab Auto DevOps is a collection of pre-configured features and integrations that work together to support your software delivery process. Auto DevOps detects your programming language and uses CI/CD templates to create and run default pipelines to build and test your application. Then, you can configure deployments to deploy your apps to staging and production, and set up Review Apps to preview your changes per branch. See the [documentation](https://docs.gitlab.com/ee/topics/autodevops/) to learn more.

In other words, Auto DevOps is an alternative to writing and using your own `.gitlab-ci.yml` file.

## Task A. Create a new Node JS Express project with Auto DevOps

> We will use a pre-defined template for NodeJS Express to show how Auto DevOps works. Pre-defined templates allow you to start off with a base project instead of starting from scratch. A list of all of our base projects can be found [here](https://gitlab.com/gitlab-org/project-templates).

1. Navigate to your **My Test Group** and select **New project**,.

1. Instead of making a blank project, click on the **Create from template** tile.

1. Click the **Use template** button next to **NodeJS Express**.

1. In the **Project name** field, enter `Auto DevOps Test Project`

1. Make sure the **Visibility Level** is **Private**, and then click the **Create project** button.

1. At the top of your project, there is a banner with the title **Auto DevOps**. Below this banner, click the **Enable in settings** button.

   > If this banner does not appear for you, navigate to **Settings > CI/CD**, click the **Expand** button next to **Auto DevOps**.

1. Click the **Default to Auto DevOps pipeline** checkbox.

1. For **Deployment strategy**, click **Automatic deployment to staging, manual deployment to production**.

   > For your own projects, you may choose to use a different deployment strategy. To learn more about each strategy, click the **blue question mark** beside each option.

1. Click the **Save changes** button.

1. In the left-hand navigation pane, click **Code > Branches**.

1. In the branches menu, click **New branch**.

1. In the **Branch name** field, enter `new-feature`.

1. Ensure that the **Create from** branch is set to **master**.

1. Click the **Create branch** button.

1. In the left-hand navigation pane, click on **Build > Pipelines**. You'll see an **Auto DevOps** pipeline running on the branch you just created.

1. Click on the pipeline's **running** status icon and note the stages (represented by columns in the pipeline graph) and the jobs that Auto DevOps has created.

   > You may see the `dast` job fail in your pipeline. This job requires additional configurations to scan successfully. See the [documentation](https://docs.gitlab.com/ee/user/application_security/dast/#configuration) to learn more about DAST scan configurations.

## Task B. Commit a change to trigger a pipeline run

> The most common way to run a pipeline is to commit to a branch in your project's repository. In this section, you will apply a new commit and view the resulting pipeline.

1. Navigate to **Code > Repository**.

1. Near the top left of the window, switch to the **new-feature** branch by selecting it in the dropdown that currently says **master**.

1. In the list of repository files, click the `server.js` file.

1. Click **Edit > Edit single file** and modify the `get` endpoint as follows:

   ```js
      app.get("/", (req, res) => {
         return res.status(200).send({
            message: "Hello World from GitLab!",
         });
      });
   ```

1. The file should now look like this:

   ```js
   const express = require("express");
   const app = express();

   const port = process.env.PORT || 5000;

   app.get("/", (req, res) => {
      return res.status(200).send({
         message: "Hello World from GitLab!",
      });
   });

   app.listen(port, () => {
      console.log("Listening on " + port);
   });

   module.exports = app;
   ```

1. For **Commit message**, type `Update welcome message in server.js`

1. Leave **Target branch** set to `new-feature`

1. Click on the **Commit changes** button.

After you commit these changes, a pipeline will run, and the test stage will fail. This is because the test cases no longer match the contents of the index file. To ensure that the tests in our pipeline run successfully, we will also need to update our tests to match the new index file.

1. In the list of repository files, click the `tests` directory and then the `server.test.js` file.

1. Click **Edit > Edit single file** and modify the line `assert.equal(res.body.message, 'Hello World!');` to `assert.equal(res.body.message, 'Hello World from GitLab!');`. After completing the edits, your code will look like this:

   ```js
   const request = require('supertest');
   const assert = require('assert')
   const app = require('../server');

   describe('GET /', () => {
   it('responds responds to the world', async function() {
      const res = await request(app)
         .get('/')
         .set('Accept', 'application/json');

      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.message, 'Hello World from GitLab!');
      });
   });

   describe('GET /404', () => {
      it('responds with a 404', async function() {
         const res = await request(app)
            .get('/404')
            .set('Accept', 'application/json');

         assert.equal(res.status, 404);
      });
   });

   ```

1. For **Commit message**, type `Update welcome message test`

1. Leave **Target branch** set to `new-feature`

1. Click on the **Commit changes** button.

1. Once the change have been committed, click on the  **Create merge request** button.

1. Click the **Mark as draft** checkbox to set the merge request to draft.

   > If you type `DRAFT:` at the front of the title, the **Mark as draft** checkbox will check automatically.

1. Assign the merge request to yourself by clicking on the `Assign to me` option next to **Assignees**.

1. Leave all other fields at their default values and click **Create merge request** at the bottom of the page.

1. To mark the merge request ready to merge, click the **Mark as ready** button. This removes `Draft:` from your MR's title.

   > You now have an active merge request for merging the `new-feature` branch into the `master` branch. The page you are on shows the details of that merge request, including the status of the last pipeline that was run on the `new-feature` branch (you might have to refresh the page to see the pipeline status). GitLab will run a new pipeline every time you commit to the `new-feature` branch.

1. The Auto DevOps pipeline automatically executes with your merge request. This pipeline contains various stages and jobs. As the pipeline runs, you will see new sections appear inside of your MR. Once the pipeline completes, refresh the page to see the results.

   > When your pipeline completes, it may display a **warning** status. The warning is due to the `dast` scan not being configured. For this example, it is ok to proceed with this warning, since we will not use `dast`.

1. Select your merge request pipeline

1. In the pipeline details, you will see three stages associated with the Auto DevOps pipeline:

- The **build** stage, which creates a build of the application using an existing Dockerfile or Heroku buildpacks. The resulting Docker image is pushed to the **Container Registry**, and tagged with the commit SHA or tag. Once the build stage is completed, navigate to **Deploy > Container Registry** to see your application.

- The **test** stage, which runs various tests on your application code to ensure it is secure and high quality. A few of the jobs are explained below:

  - The Dependency scan will scan to detect any new licenses and dependencies added to the project. Select **Full report** in the License Compliance section to see the scan details. After viewing the report, return to the pipeline.

  - The Code Quality scan will scan to detect if the code quality has changed between the main and the merge request code. If any code quality issues exist, they will be flagged in this section.

  - The SAST, Dependency, Secret Detection, and Container Scan jobs will check if any new vulnerabilities have been introduced in the code. Select **View all pipeline findings** in the Security Scanning section to see the scan details.

- The **dast** stage, which uses a running version of your application to check if there are any known vulnerabilities that it can find by running API calls on your application. Since we did not configure a live environment for the DAST job to scan, we do not need to worry about this job.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
