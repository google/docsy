---
title: "Plan to Monitor (p2m) Demo"
---

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/nMAgP4WIcno" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Note: This is the latest video. Work to catch up these demo instructions to match the video is underway.

## Overview

Today, modern software development teams need version control for everything,
automated testing, support for complex build and deployment configurations, and
end-to-end visibility and traceability so they can work to improve their
software development and operations over time. But for most teams, getting this
tooling right is incredibly difficult.

This demonstration will highlight [GitLab's single platform for the complete DevOps lifecycle](https://about.gitlab.com/direction/#scope), from plan to
monitor, through issues, planning, merge request, CI, CD, and monitoring.

![''](/images/press/devsecops-lifecycle.svg)

If you encounter issues replicating this demo on GKE or on your own Kubernetes
cluster please [open an issue](https://gitlab.com/gitlab-com/marketing/product-marketing/-/issues/new). We're still
working to improve this demo further, please see [all open idea-to-production issues](https://gitlab.com/gitlab-org/gitlab-ce/boards/814228?label_name[]=idea-to-production).

## Preparation

> - Disable desktop notifications (on a Mac, top-right corner, option click).
> - Open up new browser window so the audience doesn't see all your other open tabs.
> - Resize your browser window to something reasonable for sharing. 1280x720 is a good option. <https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/720p.scpt> is a handy AppleScript if you're on a Mac and using Chrome. Add it to your User Scripts folder and show the Script menu in your menu bar, and it'll be really easy to trigger.
> - Consider just sharing web browser window so the audience isn't distracted by notes or other windows.
> - If displaying full-screen, go to 'Displays' settings, Resolution: Scaled, Larger text.
> - Consider opening this page on an iPad that has screen lock disabled.

## GitLab installation

There are four options:

1. [Log in at gitlab.i2p.online](https://gitlab.i2p.online) (for GitLab sales people)
1. [Set up a cluster on Google Kubernetes Engine (GKE)](../gke-setup/)
1. [set up a cluster on Azure Container Service (ACS)](../acs-setup/)
1. [Offline local demo environment with Minikube](https://gitlab.com/charts/charts.gitlab.io/blob/add-minikube-support/minikube.md)

If you need to use a license, GitLab team-members can [request a license](/handbook/engineering/developer-onboarding/#working-on-gitlab-ee-developer-licenses).

<!--### Enable Auto DevOps

> * Log in as administrator
> * Go to Admin Area (wrench icon)
> * Click on `Settings`
> * Under `Continuous Integration and Deployment`, click on `Enabled Auto DevOps (Beta) for projects by default`
> * Click `Save`
> * Log out as administrator-->

## Project set up

## Cleanup

> - Delete previous GitLab groups you made last time
> - Delete previous Kubernetes namespace for projects (`kubectl delete namespace minimal-ruby-app-<project-id>`)
> - Delete previous Mattermost team or at least leave Mattermost team

## Create a user

*Note: If using a shared demo, each demo-giver only needs to do this once.*

Now let's register a new user in our GitLab server.

> - Click `Register`
> - Create a user with your name and email address (no verification sent)

## Create a group (optional, if showing Chat)
<!-- Maybe re-use to show how groups work instead of for Mattermost -->

We've got GitLab running and we're logged in. Since we'll want to work as a
team, we'll create a GitLab group. Groups allow you to organize projects into
directories and quickly gives users access to several projects at once. You can
even nest subgroups under groups to match your org structure. Let's give ours a
unique name.

> - Click hamburger menu in top-left corner > Groups
> - Click `New Group`
> - Give the group a unique name, perhaps the name of the company you're demoing to, or a made up name (all lowercase, no spaces or special characters other than `-`)
> - Change Visibility level to `Public`
> - Click `Create group`

## Create a project

*Note: If you've given the demo before, make sure to delete the `minimal-ruby-app` project first.*

Now let's create a new project. I'll import from a really simple example app
just to save myself some typing.

> - Click `New Project`
> - Under `Import project`, click `Repo by URL`
> - Set `Git repository URL` to `https://gitlab.com/auto-devops-examples/minimal-ruby-app.git`
> - Set `Project name` to `minimal-ruby-app`
> - Make it public

## Set up GitLab Auto DevOps

Now we're ready to configure GitLab Auto DevOps, which is the easiest way to
configure GitLab CI/CD with a bunch of best practices already built in. Let's go
to the CI/CD settings. We just need to enable Auto DevOps and give it a base
domain.

> - Go to `Settings > CI/CD`
> - Expand `Auto DevOps`
> - Check the box `Default to Auto DevOps pipeline`
> - Change domain to `i2p.online` (or the base domain you are using) by creating the [KUBE_INGRESS_BASE_DOMAIN variable](https://docs.gitlab.com/ee/topics/autodevops/#auto-devops-base-domain)
> - Leave the default of `Continuous deployment to production`
> - Click `Save changes`

Now we see it kicked off the first pipeline, which I'll dig into later, but for
now, it's great to know that without any effort, we've got a fully functional
CI/CD pipeline.

Great, that completes our setup.

## Project permissions (optional)

Okay, so everything we need to bring an application from plan to monitor is
set up. But let's assume you want to safeguard your source code before handing
this over to your developers. I'll take you through a few key ways you can
outline project permissions and manage your team's workflows.

**User roles and permissions**: Since this is a public project, we'll want to ensure that we have a way to manage what actions each team member can take. For example, we may want only certain people to be able to merge to `master` or to be able to adjust the CI project configuration.

**Change a user's permission level**: In GitLab, permissions are managed at a user and group level and they apply to projects and GitLab CI. We have five different role types, so you can set granular permissions and keep your code and configurations management secure. To save your admins time and the headache of managing multiple logins, GitLab integrates with your Active Directory and LDAP. You can just connect GitLab to your LDAP server and it will automatically sync users, groups, and admins.

**Project settings**: In addition to permissions, we also have features to help you manage the team's workflow and bake quality control into your development process.

**Navigate to project settings for protected branches**: It's no secret that code review is essential to keeping code quality high. But when the team is on a deadline, there could be an incentive to skip code review and force-push changes. Therefore, in addition to permissions, we also allow you to identify protected branches to prevent people from pushing code without review. The `master` branch is protected by default but you can easily protect other branches, like your QA branch, and restrict push and merge access to certain users or groups.

**Navigate to project settings for merge request approvals**: If you want to take code review a step further and ensure your code is always reviewed and signed off by specific team members, you can enable merge request approvals. GitLab lets you set the number of necessary approvals and predefine a list of approvers or approval groups that will need to approve every merge request in the project.

Permissions, merge request approvals, and protected branches help you build
quality control into your development process so you can confidently hand GitLab
over to your developers to get started on turning their ideas into a reality.

## Plan to Monitor (formerly Idea to Production) (main demo)

## Issue (Plan)

Let's create our first issue, starting from an issue board.

> - Go to `Issues > Boards`
> - Click on `+` in Backlog column
> - Set `Title` to `Make homepage prettier`
> - `Submit issue`
> - Click `X` to close issue if needed

## Board (Plan)

Inspiration is perishable, so let's pick this one up right away. Since this is
our first time, we have to add a couple columns here to match our workflow.
These columns are fully-customizable and you can have multiple Issue Boards per
project to help your team organize their releases. I'll just add the default "To
Do" and "Doing" columns.

> - `Add default lists`

There. Now we can just move the new issue from the backlog into the Doing column,
because we want to resolve this issue right now.

> - Drag issue from `Backlog` to `Doing`

## Commit (Create)

Now let's get coding! I'll click through to the issue and create a new merge
request. This creates a new branch for me, starting with the issue number to
keep them associated and automatically specifies that this merge request will
close the issue once it's merged.

> - Click on issue title in issue board card
> - Click `Create merge request`

Clicking through to the branch, I see that it's a really simple app. Viewing the
files I can see it's basically just Hello World, but with some random timings to
make monitoring more interesting. I'm going to go ahead and update the message
and remove the TODO comment using the WebIDE.

> - Click on branch name (e.g. `1-make-homepage-prettier`)
> - Click on `server.rb`
> - Click `WebIDE` button

The WebIDE, which is a part of GitLab gives me a development environment without
any configuration necessary on my client. I can edit multiple files, stage my
changes, preview them, commit, and view the resulting pipeline statuses all from
the IDE.

> - Change `Hello, world!` to `<h1>Hello, world!</h1>`
> - Delete the `#TODO: use HTML` line
> - Click the `Commit...` button

When I commit changes the WebIDE immediately shows me the diffs so I can do a
quick check of my changes. I can then stage the changes I want to commit, add a
commit message, and then I have some options about branching. Since we already have a merge
request started on this branch I'll just commit to the existing branch.

> - Double-click on `server.rb` to move it to `Staged changes`
> - For the commit message type `Added HTML`
> - Make sure `Commit to <your branch name> branch` is selected (eg. Commit to 1-make-homepage-prettier branch)
> - Click the `Commit` button
> - *If popup asks to show notifications, click Allow*

## Build Stage (Verify)

After the commit, we can see in the WebIDE that it automatically kicked off the
CI/CD Pipeline that will test our contributed code. We can see the pipeline contains many stages including Build, Test, Review, dynamic testing, and then Cleanup.

> - Click on `rocket icon` in the top right of the WebIDE

In the build job, we build the Docker container image and push it to the built-in container registry.

> - Click on the `View log` button in the Build stage
> - Slide open the resulting pane to show more at once

If we didn't have a Dockerfile, it would have used Heroku buildpacks to detect
the language and framework and build an appropriate Docker image.

## Runner progress

### (optional: if CI/CD is taking a while)

While it's running, we can head back to our Kubernetes console to see that our
GitLab Runner is working directly with Kubernetes to spawn new containers for
each job, as they are needed. It even creates a namespace for the project,
providing isolation.

> - Go to Kubernetes
> - Change Namespace to `default`
> - Click on Pods
> - Change the Namespace drop-down to `minimal-ruby-app-<number>`
> - Click on Pods

## Test stage (Verify)

Let's look at this same pipeline from a different view.

> - Click the `< View jobs` button to get back to pipeline view
> - Click the Pipeline `######` (should be a link) at the top of the panel

In the Test stage we see six jobs...

### Code Quality (Verify)

> - Click `code_quality`

The `code_quality` job, runs static analysis on your code to look for stylistic
and other quality problems. Catching these types of problems early makes them
100's of times cheaper to fix, and helps keep technical debt away.

### Container scanning (Security)

#### (optional: requires GitLab Ultimate)

> - Click back (to pipeline view)
> - Click `container_scanning`

The `container_scanning` job analyzes your application environments (your
containers) for known security vulnerabilities. This makes sure that your
application is running in as secure an environment as possible from the start.

### Dependency scanning (Security)

#### (optional: requires GitLab Ultimate)

> - Click back (to pipeline view)
> - Click `dependency_scanning`

The `dependency_scanning` job finds and reports on security vulnerabilities in
the libraries your application is dependent on. This catches reliance on
vulnerable libraries and provides the opportunity to correct them before
development gets too far.

### License compliance (Verify)

#### (optional: requires GitLab Ultimate)

> - Click back (to pipeline view)
> - Click `license_management`

The `license_management` job analyzes your application dependencies and
highlights the presence of licenses you don't want to use, or new ones that
need a decision. This catches reliance on libraries with unwanted licenses
early, before it is more costly to change.

### Static Application Security Testing (Security)

#### (optional: requires GitLab Ultimate)

> - Click back (to pipeline view)
> - Click `sast`

The `sast` job runs static application security testing on your code to
look for known security vulnerabilities. Catching security vulnerabilities early
means less work to resolve the issues, less costs, and safer code from the start.

### Test (Verify)

> - Click back (to pipeline view)
> - Click `test`

The `test` job detects the language used, again using Heroku buildpacks, and runs
the language appropriate tests you've defined. In this case it's Ruby, so it
runs `rake test`.

## Review (Create)

### Review apps

When the tests pass, it automatically creates a temporary review app in our
Kubernetes cluster.

> - Go Back (to pipeline view)
> - Click on `Review`

Here we see a bunch of steps it's doing automatically for us with the highlight
being a deployment to Kubernetes, using our default Helm chart. If the app had a
Helm chart in the project itself, it would have used that custom chart instead.
Or I can even add a project variable to point to another chart. But here, we're
using the default.

To see the beauty of the review app, let's go back to the merge request.

> - Click on the `commit ID` above the pipeline to get to the commit page
> - From the commit page, go to the linked MR (begins with a "!")

Here we see a new line showing us that it was deployed to the review app, and
here's the URL to actually see my changes running live. This is great because I
don't want to trust reading the code; I want to see it live in a production-like
environment and this review app provides that.

> - Click on external link to review app

So this is what we just changed, and any new changes pushed to our branch will
automatically update the app.

Now back to the merge request...

> - Close review app tab
> - Click `Expand` on Code quality

We see there's a new line for the code quality. We see that it likes that we
removed the TODO. If we made things worse, it would show up here as well.

And there's a new line for the security scanning, showing that no security
vulnerabilities were detected.

<!--
### Debugging (Terminal)

Now if there were any problems, for example differences between development and
production, and you don't want to keep testing changes by pushing them to source
control, we could debug those problems right here. By clicking the web terminal
button we get a command prompt in the same container as our application.

> * Click on `review/1-make-homepage-prettier`
> * Click Terminal button (on the upper right, 1st on right)

All our files are here. Let's edit the server.rb file.

> * `ls`
> * `vi server.rb`
> * i (to insert)
> * Update text to `Corrected Hello World!`
> * esc (to go back to normal mode)
> * ZZ (to save and close)

Now we've saved the changes, let's restart the server.

> * `killall ruby`

And now we can view the web page live to see how we like the changes.

> * Click external URL link on top right (2nd from right)
-->

### Code review

At this point we'd usually ask for another developer on the team to review our
merge request. They can see the exact code that has changed, comment on it, and
we'd see a thread of the discussion, as well as get an email notification, of
course.

> - Close review app tab
> - Close environment tab
> - Click on `Changes`
> - Click on a changed line to show ability to comment
> - Comment "Looks good", `Comment`
> - Go to `Discussion` tab to see comment

### Merge to `master`

This all looks great so let's remove the WIP status and merge the changes into
the `master` branch.

> - Click `Resolve WIP status`
> - Check `Remove source branch`
> - Click `Merge`

## Production (Package & Release)

> - Click on `CI/CD > Pipelines`
> - Click on top pipeline

Now we see it's kicked off a new pipeline. And inside this pipeline, it looks
familiar, but a little different. Instead of creating a review app, this one is
deploying right into production. This is continuous deployment at its best.

### Environments with deployment history

> - Go to Environments

Going to the Environments page, I see production listed here and the last deploy
happened less than a minute ago. And I can easily click through to see what it
looks like.

> - Click external URL link (left-most button)

There we go! We've got our new formatting changes; all the way from plan to
monitor!

> - Close production app tab

## Scaling and Deploy Boards (Configure) (optional: requires GitLab EE)

Now, there's more to this page. Here I see the deploy board for `production`.
Right now it's only showing a single pod, but let's go and scale that up. I'll
go to CI/CD settings and add a project variable to set the PRODUCTION_REPLICAS
to 4.

- `Settings -> CI/CD`
- Expand `Secret variables`
- Set key to `PRODUCTION_REPLICAS`
- Set value to `4`
- `Add new variable`

Now let's go back. And I can redeploy.

- Click back twice to get back to environment list or go to `CI/CD > Environments`
- Click `Re-deploy`

Soon we'll see the deploy board update in realtime as the fleet rolls out, and
we can wait a bit to see the deploy finish.

## Monitoring (Monitor)

So that's a high level status of the deploy, but how about monitoring the
ongoing health of your app environments? Clicking on the graph icon, I see
response metrics, with latency, error rate, and throughput, and system metrics,
with CPU and memory usage, and all of these are taken from the built-in
Prometheus monitoring, the leading open-source monitoring solution. There's not
much to see right now, but this will show the last 8 hours so you can monitor
how your app is doing. There's lines for each deploy as well, so you can
corelate changes in performance caused by recent deployments. Application
performance monitoring can help your team be more strategic, preventing errors
vs. simply reacting to them. Imagine if your application monitoring tool could
help you avoid pushing poor-performing code in the first place, saving your
business future downstream costs? That's exactly where we are heading.

## Closing the loop (optional)

Let's close the loop here and go back to our merge request. Since it's already
been merged, we have to look for it in the right tab.

> - Go to `Merge Requests > Merged`
> - Click on top merge request

On the merge request, we now see another status showing that this code has
indeed been deployed to production. This is great for managers looking at closed
merge requests to know if they've actually been deployed or not. But we go
further and show feedback about your application's performance, right on the
merge request, telling you how much your memory usage changed before and after
the merge request was deployed.

## Custom pipeline - staging and canary (optional: requires GitLab EE)

So that covers Auto DevOps from build, test, code quality, review app, deploy to
production, and monitoring. Pretty awesome. But what if you want to do something
differently?

Well, here I'll go to manually set up CI, but instead of having to start from
scratch and re-create all that we just saw, I can pick Auto DevOps from the
templates, and import the whole thing.

> - Go to `Overview`
> - Click on `Set up CI`
> - Pick `Auto DevOps` template

There's a lot in here, but it's not as scary as it first looks. And there's some
helpful tips in here already. Say I'm not ready for continuous deployment to
production, I can just uncomment out this staging job. And if I want to add
canary deployments, I uncomment this one. I then just need to uncomment this one
last line to make my deployments to production manual and I'm ready to go.

> - Remove leading `.` from staging job
> - Remove leading `.` from canary job
> - Remove `#` in front of `when: manual` line in production job

So I save this into master. And now I see another pipeline is kicked off. This
one again looks familiar, but there are two new stages for staging and canary.

> - `Commit changes` to `master`
> - Go to `CI/CD > Pipelines`
> - Click on top pipeline

Let's just wait for staging to finish deploying. There, now we can go back to
environments and see there's a new staging environment. With this configuration
staging is going to be automatically updated with the latest changes.

> - Go to `CI/CD > Environments`
> - Click on `staging` external URL
> - Close staging tab

But production is no longer going to update automatically. When we're ready, we
have to manually promote from staging to production. But we're not going to ship
directly to the entire production fleet. GitLab supports canary deploys,
basically letting you deploy to a smaller portion of your fleet to reduce risk.
So here I'll click on the `Canary` manual action to start the deployment. And I
can even see my canary deployment happening in the deploy board!

> - Click on `staging` manual action dropdown, select `Canary`
> - Expand staging deploy board

Now there's one new pod in production running the new canary code, and it's
taking a portion of production traffic, but the rest of the pods are still
running the old code. This is a great way to reduce risk in deployments.

When we've validated that the canary is working as expected, we can then go and
ship it completely to production. Let's go ahead and do that now.

> - Click on `production` manual action, select `Production`
> - Wait for deployment to finish
> - Click on `production` external URL

Great, now it's in production!

So whether you want continuous deployment to production, or a continuous
delivery flow that's more under your control, or even if you want something else
altogether, we've got you covered.

> - Close production tab

## Feedback (Cycle Analytics) (optional)

To help you spot bottlenecks in your development process, GitLab has a built-in
dashboard that tracks how long it takes the team to move from plan to
monitor.

> - Go to `Overview > Cycle Analytics`

Here we can see some metrics on the overall health of our project, and then a
breakdown of average times spent in each stage on the way from plan to
monitor. So far, we're doing amazingly well, by completing a release cycle in
minutes.

This is great for managers looking to better understand their company's release
cycle time, which is critical to staying competitive and responding to
customers and changing market needs.

## Instance Monitoring (optional)

Not only does Prometheus monitor your apps, but it monitors the GitLab instance
itself. Let's go to the Prometheus dashboard.

> - Visit Prometheus `https://prometheus.i2p.online`  (Change the domain to match the domain used for your GitLab installation)

Let's look at a couple simple queries that show how your GitLab instance is
performing. Here's our CPU usage:

> - Copy `1 - rate(node_cpu{mode="idle"}[5m])` into the Expression bar; hit enter.
> - Click Graph

And then memory usage:

> - Copy `(1 - ((node_memory_MemFree + node_memory_Cached) / node_memory_MemTotal)) * 100` into the Expression Bar; hit enter.

## Conclusion

So that's it. In less than 10 minutes, we took an idea through the complete
DevOps lifecyle, with issue tracking, planning with an issue board, committing
to the repo, testing with continuous integration, reviewing with a merge request
and a review app, debugging in the terminal, deploying to production, scaling
the application, application performance monitoring, and closing the feedback
loop with cycle analytics. And all of this on top of a container scheduler that
allows GitLab, the GitLab Runners for CI, and the applications that we deploy,
to scale. Welcome to GitLab, the single application for the entire DevOps lifecycle, helping
you bring modern applications from plan to monitor, quickly and reliably.
