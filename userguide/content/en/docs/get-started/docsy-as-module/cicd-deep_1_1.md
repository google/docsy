---
title: "CI/CD Deep Dive Demo"
---

## CI/CD Deep Dive

Let's take a more in-depth look at GitLab CI/CD pipelines.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/pBe4t1CD8Fc?start=1885" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## Configuration and Integration

Let's start at the top with configuring CI and setting up any required integrations.

### Connecting to a Repository (Mirroring)

Now, we've already installed GitLab earlier so we will continue on to connecting our source code repository. The vast majority of our customers utilize our built-in Git repository functionality, due to it's great feature set and seamless integration with CI/CD. However for those would like to utilize a different SCM tool, you can connect any Git based repository by simply configuring mirroring.

> Project Settings > Repository > Pull from a remote repository

We'll get started with our built-in repository and a simple Java app which is composed to two parts. A Java library and a front-end service which depends on that library to respond to users with a simple greeting.

### Integration with Agile Planning Tools (JIRA & Slack)

Similar to the repository, GitLab also includes a powerful set of planning tools as you saw earlier. However we also have great integration options here as well, for example tools like JIRA and Slack. Let's see how these are configured now.

Configuring JIRA takes just a minute or two. We've provided our server's URL, credentials to authenticate, and then our project information: the key and a transition so we can close issues. That's it!

> Project Settings > Integrations > JIRA

Enabling Slack notification and ChatOps commands are similarly easy. For notifications we simply choose what events we want to push to our channel, and then provide a webhook for our Slack server. In this case we are pushing Pipeline events, for both successful and failed pipelines on all branches.

> Project Settings > Integrations > Slack Notifications

### Working with `.gitlab-ci.yml` (Versioned, Ways to edit)

> Repository

Now, setting up downstream tool integration is accomplished by working with our pipeline definition file, `.gitlab-ci.yml`, which specifies the stages, jobs, and actions we want to perform.

Before we do that though, let's just talk briefly about the various options for working with this file. As you can see, this is file is checked in to our repository, which provides a number of benefits:

- The file is versioned which means pipeline changes can be tested in branches supporting any changes in your app code. Similarly if you need to go back to an old version, perhaps to ship a security release, the associated pipeline will be exactly how you left it for that particular release.
- It also means that there are a large number of ways to work with this file. Nearly all IDE's have direct integration with Git, so you can use your favorite editor. The classic CLI is of course always possible as well, as well as our integrated web based editor that you can see here.

Let's now take a closer look at this file, and how you can define the pipeline and integrate with a wide variety of tools.

### Settings in `.gitlab-ci.yml` (Self Service, Bash script, Templates)

> Click on the `.gitlab-ci.yml` file to view

At the top of the file we have defined a few global defaults:

- A docker image to run our commands within, in this case the official Maven image
- A few environment variables
- Cache settings, which allow folders to be persisted between jobs to increase performance

Next we start to define our stages and jobs. In GitLab CI, a Pipeline is made up of a series stages. Each stage then contains one or more jobs. There are no limitations on how many jobs a single stage can have.

The stages keyword defines the order the stages should execute in. So our flow will be: build, test, generate docs, release, and then deploy.

#### Build Stage (Maven, Bash scripting)

We then start to define our jobs, or the actions we want to perform.

Our first job is to build our library, which we utilize Maven for. You can see here we simply invoke Maven, as we would as if we were running it on our machines. That is because the script you see here, is actually just Bash script. This means provides a great amount of flexibility, because you can now automate anything you would normally do on your machine.

#### Test Stage (2 jobs, code coverage output, artifacts)

After we built our library, we are now going to test it.

Our test stage includes two jobs: unit tests and static analysis with codeclimate. We are going to leverage Maven again to run our tests, but we'll also include jacoco to generate code coverage reports. We then output the coverage percentage into the build log. The last step in this job is to take our code coverage reports and persist them with GitLab's integrated artifact repository. We do this by simply specifying the folders we want to save.

While that is happening, we will also be running static analysis with codeclimate. Here we override the default image, to utilize the official Docker image. We use that to then execute run Docker-in-Docker, to execute the codeclimate image to analyze our source. Once that is done, we retrieve our JSON report and persist it as an artifact.

#### Doc Stage (Generate, Artifacts)

Here, we are simply generating our javadocs and again retaining them as an artifact.

#### Release Stage (Protected Variable)

Now that we have tested our library, we are ready to release it. We are going to use Maven again to publish our library out to our Packagecloud server. Now you are paying really close attention, you will see we are using a variable we did not define above. That is because this is a credential token, which should not be checked into the repository. Instead, we add this as a Protected Variable in our project settings, which only administrators can view.

#### Deploy Stage (Pages, Cross-Project Pipelines)

Finally we have our last stage, deploy, which includes two jobs.

Our Pages job is slightly unique, in that this is a special job that works in tandem with GitLab Pages, our static site hosting feature. With Pages, deploying a static site is as easy as creating an artifact. We do that here by specifying we will utilize the artifacts of two of our jobs: unit tests and javadocs. This job then copies those into a single directory structure and persists it as an artifact. GitLab Pages will then take this and deploy out to the integrated hosting service, providing an easy and automated way of posting in our case, our code coverage and documentation.

Now for our last job, recall that our Java app was made up of two components: this library and a front-end service which used it. At this point, we've confirmed that all of our tests pass which is a good start. But what about downstream projects that utilize this? Well this job kicks off what we refer to as a cross-project pipeline. We take a stock alpine image, install curl, then use it to trigger the webhook to start a new front-end service pipeline. Confirming downstream projects are not negatively affected by upstream changes is as easy as a few lines of YML.

#### Wrap up (Self-service: no plugins, Flexible: Bash script, Templates)

As you can see, this supports our larger goals of GitLab: scalability, flexibility, and self-service:

- A developer can integrate with any tool they need, without having to worry about installing plugins or involving the administrators. They can simply provide the required container or VM to run the script in, or install their own runner on a machine with the associated requirements.
- Integrating with static analysis and unit testing frameworks is just a lines of code.
- Moving into the Part 2, you can see integrating with build automation tools like Maven is similarly straight forward and easy.
- We also have a collection of templates which can be used to help users get started.

### Deep Tool Integration & Intelligence (Code Climate, Code Coverage, JIRA Issue)

Now we already showed how easy it is to execute unit tests and static analysis, but our integration goes a lot deeper. I have a pending merge request ready for me to review, so lets take a look.

> Open pending merge request

As a code reviewer, my job is really important: to ensure that only high quality code that meets our standards is merged. To assist in manual review, we often include automated tools to like static analysis and code coverage. However these reports can often be lengthy and tedious to review, leading to decreased usage. With GitLab's holistic vision, we have a unique opportunity so solve these challenges.

So it looks like one of our developers forgot to clean up a stray FIXME comment that was already addressed. Our pipeline succeeded, so that is promising. We built our code, ran our unit tests and static analysis, and generated our javadocs. That's all pretty straight forward, but as you can see our integration goes further with additional intelligence.

Here we've extracted the code coverage from the unit testing job and present it directly on the interface.  We've also done analysis of the codeclimate report. By comparing the results from this branch to the branch we are looking to merge into, we can provide the reviewer with the delta in code quality if this were to be accepted. Instead of sifting through a bunch of results, I'm presented with what is relevant to this change.

Of course down below we can review and collaborate on the actual code changes. But this all looks good, so let's go ahead and merge.

> Merge

Now similar to what you saw earlier with our integrated issue feature, we will go ahead and close the associated JIRA issue as well. Let's take a quick look at this issue.

> Show it is already linked, and now closed. Close tab and return to MR.

## Executing Build Automation

By committing a change to master we now have a new pipeline running, let's take a look to see how it executes and the notifications we receive.

> *Command-Click* on Pipelines to open a new tab, then click on the pipeline we just started on Master to see the overview.

We can now see a real-time overview of our pipeline as it progresses. Our build stage just completed, and you can now see our two test stages executing in parallel.  Let's take a closer look at our unit test job.

### Unit Tests Job (Maven, Code Coverage, Artifacts)

> Click on `unit tests` job

As before, we get a live look at the build log as it is being executed by our Runner. You can see Maven is executing, and finally our tests have passed. Here is the code coverage output which GitLab is parsing, and our artifacts. On the right hand side, you can see we are presenting the code coverage and also offer a way to browse the artifacts. They can also be accessed in the future by other jobs.

Now let's go take a look at our codequality job.

### Code Climate Job (Docker, Artifact)

> Click on `codeclimate` job from right pane

In this job, you can see us downloading the codeclimate image and executing it. We then collect the output and persist as an artifact. It's that easy.

Going back to pipeline overview, we can check back in on our progress.

> Click on Pipeline # at the top of the page to go back to overview

Our release job is now executing, lets see how that is progressing.

### Release Job (Protected Variable, Maven deploy)

We're now ready to publish our library to our packagecloud server, utilizing Maven. Remember we had utilized a protected variable for this, to ensure the secure token was not committed into the repository.

> Scroll up in build log to show the environment variable functioning

And that's it, our library is now available for others to consume.

> Go back to pipeline overview

### Pages Job (as necessary to kill time for success notifications)

In our Pages job, we are leveraging the artifacts we collected in our earlier stages. Here, we simply copy them into a single directory structure, and persist them in a new artifact. Our GitLab Pages service will take over from here to copy our code coverage and documentation to our static site. Note this works with any static site generator as well.

### Notifications - Success: Browser, Slack, Favicon, Email (off by default)

As you can see from our notifications, our pipeline has succeeded. In the event you didn't catch them all during that flurry, let's review them quickly:

- GitLab itself will alert you via browser notifications when a pipeline succeeds or fails.
- Since we configured Slack notifications, we received a notification there as well. Let's take a look.

> Switch to Slack tab, show notification

- GitLab also updates the favicon for both our MR and pipeline views, indicating we were successful.
- Last we could also have received an email as well, however by default we do not send them for successful pipelines.

> Go back to pipeline overview

### Cross Project Pipelines (Environment Screen, Registry)

Let's check in and see how our Cross Project Pipeline is doing, for our front-end service.

> Click on downstream stage

Here you can see a relatively simple pipeline:

- We will build project
- Execute our tests
- Package up our JAR file
- Build our Docker container
- Deploy to Production

> Click on Production

Great, it looks like our deploy has finished and our environment is available. You can always get more information on an environment by clicking on it, where we will show you the deploy history as well as options for monitoring and troubleshooting.

We can also get a closer look at our integrated container registry.

> Click on the Registry tab

Here we can a view of all the containers we currently have pushed to the registry, and their associated tags. If we'd like, we can manually remove some if we don't need them anymore. We also provide a tool to manage your containers in bulk, as well.

Aside from an integrated UI, one of the key benefits of integrating the registry is the unified authentication architecture. Instead of having to manage credentials and security on your own, GitLab makes is extremely simple. We provide a simple environment variable to access the registry which is valid for as long as the job is executing.

### Pipeline Wrap-up (flexible, self-service)

So that's our "Happy Path". With just a few lines of YML we accomplished:

- Integration with Maven, Unit Tests, Code Coverage, and Code Climate
- Generation of Javadocs
- Releasing our library to Package Cloud
- Publishing the latest documentation to our team's site
- And triggering downtream project pipelines to ensure there we no negative impacts

And we did that all without involving a single administrator or opening a ticket. Completely self-service by a developer.

## Negative Path

But you know what? I think we can make some improvements to library.

> Go back to dep.java and edit the bye text.

This library, as you can see, greets and wishes farewell to our users. Let's make it a little more polite though, by saying "Goodbye".

We'll commit this to a new branch, and create a new Merge Request.

> Commit to new branch, create new Merge Request

### Failed Merge Request (MWPS, GitLab, Slack, Favicon, Email)

Since we've now created a new branch, we have a new Pipeline running. Now if I am the reviewer and already checked out the changes, I can simply click on our Merge When Pipeline Succeeds button. This will automatically merge the issue as long as we have a good pipeline. However if it fails and the developer needs to make a further change, it will of course have to get re-reviewed. This is a great way to save some time for your reviewers, so they aren't waiting until a pipeline complete before moving on.

Now we're going ahead and building the new version of our library, and next up we'll be running our tests. Let's see how our unit tests are going.

> *Command-Click* on `unit tests` job

Uh oh, as you can tell from the notifications it looks like our tests failed. In this case, we changed the message but forgot to update our tests.

Let's quickly review the notifications we received:

- GitLab itself sent a browser notification, indicating the failed pipeline
- With our Slack integration, we received an alert there as well. (Show Slack)
- If you take a look, our favicons also updated to indicate an errors
- And finally since this was a failed pipeline, we received an email alert as well

> Show email tab
> Return to the job log for the unit tests

#### Failed Merge Follow up (New Issue, New Todo)

As you can see we have a wide array of ways to inform users that their pipeline failed. But what is at least as important as notifications, is follow up.

Looking back at our failed job we can see a new button has appeared, to easily create an issue for this problem. Clicking it will open an issue with some helpful information already filled out, like the build log.

Looking at the top right corner of our screen, you may also have noticed we have a new To Do. To dos are essentially an automatic built in tool, to help our users ensure things don't fall into the cracks. For example, you've been mentioned in an issue or comment, or in this case had a failed pipeline.

This way it's easier for users to go about their day, with less repetition, and fewer mistakes.

So that's a quick review of what we would call the "Negative Path". Let's take a look at some of the available options for reviewing pipeline performance.

## Monitoring CI (Pipeline History, CI Monitoring with Prometheus)

> Click on Pipelines tab for the list of all pipelines

First, GitLab retains a complete pipeline history for all current and old pipelines, stages, and jobs. We track the status of each job, but also retain the build logs permanently. As for the artifacts a default expiration can be set to manage space, but it is easily overridden from within the `.gitlab-ci.yml` file.

This page is great for checking out the status of pipelines for a variety of branches, and getting insight into what the CI system is doing.

But that isn't the only way to get an understanding of what the CI system is currently executing. We also offer a wealth of metrics that are tracked with the integrated Prometheus monitoring system. Let's take a look at the public monitoring dashboard for GitLab.com

> Show dashboards.gitlab.com

Here you can see a wide variety of metrics, ranging from the number of jobs in each state to how many parallel jobs a given runner is executing. All of these metrics are available not just on SaaS, but also self-managed as well.

## Analytics (Charts, Static Analysis, Code Coverage, Cycle Analytics, APM)

GitLab also provides methods to understand the health of the CI pipelines for a particular job as well. We have a dedicated analytics page we call Charts, which shows additional information for each project.

> Open Pipelines > Charts

Here you can get insight into the average success rate and execution duration of your pipelines. For us, ours are executing quite quickly, usually under 2 minutes.

We also provide historical insight into how the success rate is changing over time, and the number of jobs executed within the last week, month and year.

And we've already taken a look at some of the other analytics services we offer as part of CI:

- Our static analysis intelligence with codeclimate
- Code coverage parsing
- and cycle analytics, for team health and efficiency.

## GitLab Runner (Shared, Specific, Autoscaling)

Now I've mentioned our Runner a couple times, but we've been mostly looking at what it can do. Next we'll take a few minutes to talk about this important part of GitLab CI.

The GitLab Runner is a small portable app, which we build for a wide variety of platforms. It's essentially the worker bee, which picks up and executes the jobs we specify in our pipelines.

In our Pipelines settings page is where a developer can take a look at the Runner configuration for their project. You will see we have two categories of Runners: shared and specific.

> Go to Settings, Pipelines.

### Shared (Ease, Speed, Efficient Management)

Shared runners are runners that have been provided by the administrators of the GitLab instance, we've been using one as you can see here. By allowing administrators to provide a shared pool, there are a number of benefits:

- Consolidation of infrastructure, whether cloud or on premise. Cluster and credentials can be centrally managed.
- Reduces effort required to set up CI for each team

But there are some cases where an administrator has not provided a shared pool, or they don't meet your needs.

### Specific (Self-service, Install)

For these cases, we have the ability for any development team to connect their own Runners. They simply download the Runner, enter in the URL and key, and they are on their way.

Let's take a look at that process now. In the interest of time, I've already downloaded the macOS version.

The first action we want to take is to register our runner:

> gitlab-runner register

During registration we configure a few aspects of the runner:

- We set the URL and token
- Name that we want to appear on the Runner page
- And then any tags we want to specify. Tags allow you to uniquely identify runners with certain properties, for example here we can set `osx` and `xcode8` to identify what we have installed. These are then specified in the `.gitlab-ci.yml` for the job you want to run.

### Runner Architecture (Shell/SSH, VM, Container, Auto-Scaling)

The last choice we have to make is what mode of operation we want for our Runner. The simplest is Shell, where it executes the script on the machine and account it's installed on.

We then have support for working with images and containers, via virtual box, parallels, and of course Docker. The runner will start the specified image, execute the job, and then clean up. These modes are great for shared runners, because the development team can still bring their own base image to start from.

The last mode of operation, is what we call our auto-scaling runner. We support this on Docker Machine and Kubernetes, and here the Runner will elastically process jobs as needed to process the CI queue.

### Wrap up (Self-service, Flexible, Scalable)

And that's it for the configuration, we just start our Runner and it is ready to process jobs.

> gitlab-runner start
> Refresh the Runner settings page

This ability of GitLab CI, to allow development teams to set up their own CI infrastructure, is really transformative.

First, self-service: Instead of needing to file a request for a new piece of hardware, wait for the response, justify the changes and cost, have a PO potentially filed... the dev team takes 2 minutes with an old machine from the cabinet an off they go. The dev team is happy and more productive, and the infrastructure is happy they don't have to worry about managing a flock of Mac Minis for the iOS team in their data center.

Second it provides a lot of flexibility. If you need to run jobs on an ARM device, perhaps for Android or Deep Learning, it's as easy as installing the Runner on Android. Need to run something on a mainframe like Linux on Z? Build the runner and away you go. Managing hardware and software dependencies, when something like a container is not possible, could not get any easier.

Last, is scalability. A handful of auto-scaling runners on GitLab.com routinely process over a thousand concurrent CI jobs. If more are needed, simply turn up the dial.

## GitLab Pages

The final area we wanted to discuss was GitLab Pages. As you saw earlier with our Pipeline, we pushed our javadocs and code coverage reports here with just a few lines of YML. This site is then hosted by GitLab at a specific domain, making it easy to publish technical content or even entire websites with CI.

## Wrap (Flexible: Bash it, script it. Self-service: runners, no plugins. Scalable: SaaS scale CI)

To summarize, GitLab CI is flexible. If you can bash it, you can automate it. Self service runners, no plugins. And SaaS scale CI, with auto-scaling.
