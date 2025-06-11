---
title: "Projects"
---

## Introduction

We maintain our projects in the public [gitlab-da group](https://gitlab.com/gitlab-da). This group has access to an Ultimate subscription.

The group organizes use cases, workshops, tutorials, maintained [open source projects](/handbook/marketing/developer-relations/developer-advocacy/oss-contributions/), demo playgrounds, thought leadership research, and more learning resources.

## Organisation Structure

All projects are organized in sub-groups on the top level. No projects are allowed on the top-level namespace `gitlab.com/gitlab-da`.

| Group        | DRI | Description  |
|--------------|-----|--------------|
| [conferences](https://gitlab.com/gitlab-da/conferences) | @fjdiaz | Group for public demos for team members at [conferences, events, meetups, etc.](/handbook/marketing/developer-relations/events/#event-booth-training)  |
| [playground](https://gitlab.com/gitlab-da/playground) | all | Test projects, simple demo cases, code snippets, etc. without support. Please move them into the corresponding use-cases groups when linking from a blog post. |
| [use-cases](https://gitlab.com/gitlab-da/use-cases) | all | Use cases for specific topics for product demos, talks, thought leadership, research |
| [projects](https://gitlab.com/gitlab-da/projects) | @abuango | Production projects maintained by the team. For blog projects and demos, use the specific `use-cases` groups. |
| [projects/devrel-bot](https://gitlab.com/gitlab-da/projects/devrel-bot) | @abuango | Issue triage and automation workflows for Developer Advocacy and Developer Relations workflows. |
| [projects/hide-duo-beta-trial](https://gitlab.com/gitlab-da/projects/hide-duo-beta-trial) | @abuango | Chrome extension to hide Beta/Trial widgets in the GitLab UI. |
| [projects/discourse-assets](https://gitlab.com/gitlab-da/projects/discourse-assets) | @sugaroverflow @dnsmichi | [GitLab Discourse forum](/handbook/marketing/developer-relations/workflows-tools/forum/) assets and customizations. |
| [tutorials](https://gitlab.com/gitlab-da/tutorials) | all | |
| [tutorials/security-and-governance](https://gitlab.com/gitlab-da/tutorials/security-and-governance) | @fjdiaz | This group contains different projects as well as documentation around GitLab's security and governance tools. |
| [unmaintained](https://gitlab.com/gitlab-da/unmaintained) | - | Projects, tutorials, use cases that are not maintained anymore but kept public for transparency |
| [workshops](https://gitlab.com/gitlab-da/workshops) | all | Workshop groups and projects provided by the team |

Use cases overview:

| Group        | DRI | Description  |
|--------------|-----|--------------|
| [use-cases/ai](https://gitlab.com/gitlab-da/use-cases/ai) | all | [GitLab Duo workflows, coffee chats, learning AI, use cases](https://about.gitlab.com/gitlab-duo/) |
| [use-cases/ai/ai-applications](https://gitlab.com/gitlab-da/use-cases/ai/ai-applications) | @sugaroverflow | Example applications using GitLab Duo |
| [use-cases/ai/ai-workflows](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows) | @dnsmichi | [GitLab Duo](https://about.gitlab.com/gitlab-duo/) [prompts](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-prompts) and [challenges](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges) with exercise source code and self-learning modules, linked from the [documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html) |
| [use-cases/ai/ai-research](https://gitlab.com/gitlab-da/use-cases/ai/ai-research) | @dnsmichi | AI research with local LLMs (`Ollama`), RAG, AI agents, etc. |
| [use-cases/ai/ai-workshops](https://gitlab.com/gitlab-da/use-cases/ai/ai-workshops) | @dnsmichi | GitLab Duo and AI workshops and live-programming sessions with customers |
| [use-cases/ai/gitlab-duo-coffee-chat](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat) | @dnsmichi | [GitLab Duo coffee chats](#gitlab-duo-coffee-chat) |
| [use-cases/ai/learn-with-ai](https://gitlab.com/gitlab-da/use-cases/ai/learn-with-ai) | @dnsmichi @sugaroverflow | Learning a programming language with GitLab Duo (AI), [blog series](https://about.gitlab.com/blog/categories/ai-ml/) |
| [use-cases/ai/test-ai](https://gitlab.com/gitlab-da/use-cases/ai/test-ai) | all | Test playground for AI and GitLab Duo |
| [use-cases/cicd-components-catalog](https://gitlab.com/gitlab-da/use-cases/cicd-components-catalog) |  @iganbaruch | GitLab CI/CD Components Catalog use cases |
| [use-cases/code-experiments](https://gitlab.com/gitlab-da/use-cases/code-experiments) |  @waarias @csaavedra1  | Code experiments with automation and quality assessments |
| [use-cases/coverage-reports](https://gitlab.com/gitlab-da/use-cases/coverage-reports) | all | Code coverage reports examples |
| [use-cases/devsecops-platform](https://gitlab.com/gitlab-da/use-cases/devsecops-platform) | @waarias | End-to-end DevSecOps platform demo environment |
| [use-cases/efficiency](https://gitlab.com/gitlab-da/use-cases/efficiency) | @dnsmichi | Efficiency use cases (CI/CD, container images, workflows, CLI, etc.) |
| [use-cases/gitlab-api](https://gitlab.com/gitlab-da/use-cases/gitlab-api) | @dnsmichi | GitLab API use cases with libraries and scripts |
| [use-cases/observability](https://gitlab.com/gitlab-da/use-cases/observability) | @dnsmichi | Observability uses cases and research (OpenTelemetry, eBPF, etc.) |
| [use-cases/remote-development](https://gitlab.com/gitlab-da/use-cases/remote-development) | @dnsmichi @iganbaruch | Workspaces environments and Web IDE use cases |
| [use-cases/scientific-research](https://gitlab.com/gitlab-da/use-cases/scientific-research) | @abuango | Scientific research projects and integrations |

### Access

Access is limited to [team members in the `gitlab-da` group](https://gitlab.com/groups/gitlab-da/-/group_members). Adding/removing members [requires an issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues) to document the change.

Allowed exceptions are workshop sub-groups that invite external users into their workshop projects temporarily. All temporarily added users [**must** use a membership expiration date of 7 days](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).

### Add a new project or group

1. Define the scope of your project, and add it into one of the top-level groups.
1. When unsure, create the project in the [playground](https://gitlab.com/gitlab-da/playground) group first, and transfer it to its production location later in the project settings.

**Do not create new top-level groups without first proposing the change in an issue/MR.**

#### README

Always add a `README.md` file that explains the purpose of the project/group (copy the text into `Settings > General > Description`), and links all resources (issues, direction pages, blog posts, etc.). GitLab supports [Group READMEs](https://docs.gitlab.com/ee/user/group/manage#add-group-readme) next to project READMEs.

Optional but recommended: Add a project/group avatar image that illustrates the topic. Use an official GitLab brand image, or download [a free asset from Unsplash](/handbook/legal/ip-public-materials-guidelines/#visual-content-including-videos-gifs-photographs-illustrations-graphics-and-artwork). Add the credits to the `README.md` file.

Tip: You can [resize images](/handbook/tools-and-tips/#resizing-images) using the following CLI command:

```console
find . -type f -exec sh -c 'convert {} -resize 150 {}' \;
```

#### Group: Use Cases

1. Blog posts or thought leadership research usually describe a use case or specific topic. Review the existing [use-cases](https://gitlab.com/gitlab-da/use-cases), add a new project or sub-group.
1. If your use case is new, create a new subgroup, add a description, and update the handbook organization structure. Add yourself as DRI to the table.

#### Group: Tutorials and Workshops

1. [Tutorials](https://gitlab.com/gitlab-da/tutorials) provide helpful content to learn specific topics and have a DRI assigned to maintain the projects. Tutorials are referenced in blog posts, webinars, etc.
1. [Workshops](https://gitlab.com/gitlab-da/workshops) provide self-contained learning resources in the form of exercises, solutions, etc. in a single repository.

When unsure where to start, create a new tutorial sub group first, and later decide to migrate the content to a workshop for example.

#### Group: Projects

The [projects](https://gitlab.com/gitlab-da/projects) group contains all projects that are used in production. They require extended documentation in the team handbook, since the team depends on the functionality for workflows and efficiency. We also maintain microsites that are served with GitLab Pages and custom domains.

### Remove a project/group

Our demo projects are referenced in blog posts and other public content. Moving these projects/groups into the [unmaintained](https://gitlab.com/gitlab-da/unmaintained) is recommended to signal their deprecation to users instead of archiving/deleting the projects.

## Project Resources

Some projects require access to Kubernetes clusters, self-managed CI/CD Runners, cloud VMs, domains, etc. The team has access to Google Cloud or AWS cloud resources that allow hosting these types of external infrastructure dependencies for GitLab.com SaaS demos.

Learn more in the [Cloud Resources for Developer Relations handbook](/handbook/marketing/developer-relations/workflows-tools/cloud-resources).

### Best Practices

1. Document the project setup in its README file (or a in a docs/ structure in the Git repository).
1. Always add [security scanning](https://docs.gitlab.com/ee/user/application_security/) as default, unless it competes with the demo cases.
1. A GitLab app requires OAuth setup from an account. Use a group shared account (for example, [DevRel Bot](/handbook/marketing/developer-relations/developer-advocacy/projects/#developer-relations-bot)) for production apps (Code challenge, etc.)

### Workspaces

> Status: Inactive. Kubernetes cluster needs to be re-created.

The [remote-development sub group](https://gitlab.com/gitlab-da/use-cases/remote-development) has an agent for Kubernetes installed, which is documented in the [agent-kubernetes-gke](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke) project. This includes troubleshooting when the agent becomes unresponsive, and workspaces are not created.

Assigned resources:

1. The Kubernetes cluster [`de-remote-development-1`](https://console.cloud.google.com/kubernetes/list/overview?project=group-community-a29572) is running in GKE. Current resources: 3 nodes. Total 6 vCPU, 12 GB memory.
1. The domain `remote-dev.dev` has been purchased through the Google DNS service and points to the Kubernetes cluster's public IP.
1. The TLS certificates have been generated manually with Let's Encrypt and need to be renewed quarterly (2023-08-15), following the [documentation steps](https://gitlab.com/gitlab-da/use-cases/remote-development/agent-kubernetes-gke).

## Product Adoption Initiatives

### GitLab Duo Adoption

[FY25 Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475) (internal).

#### GitLab Duo Coffee Chat

Live learning session with AI-powered workflows throughout the DevSecOps lifecycle, with the help of GitLab Duo. We discuss, explore, research, learn, debug, create product feedback and feature ideas, and discover new features and workflows.

Goal: The coffee chats help our customers learn how to use GitLab Duo and adopt best practices – by example, making mistakes, trying different routes, and achieving better results and DevSecOps efficiency.

Maintainer: [Michael Friedrich, @dnsmichi](/handbook/company/team/#dnsmichi)

- [YouTube playlist](https://go.gitlab.com/xReaA1)
- [GitLab group with projects](https://gitlab.com/gitlab-da/use-cases/ai/gitlab-duo-coffee-chat)
- [GitLab Duo](https://go.gitlab.com/Z1vBGD)
- [Talk: Efficient DevSecOps Workflows with a little help from AI](https://go.gitlab.com/T864XF) - [content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402)
- [Organization issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/developer-advocacy-meta/-/issues/375)
- [Slide templates and resources](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2a6734f20af_0_0) for recording video editing.

The recordings are also linked from the [GitLab Duo Use Cases documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html).

##### Process

1. Define the scope of the session (for example, 30 minutes writing an application, or exploring a new programming language like COBOL). Duo Challenges require staying in the IDE or GitLab UI context only.
1. Invite guests to collaborate (optional)
1. Start the Zoom recording, give a short introduction about the goal of the session. When alone, you can also use OBS to record the session.
1. Start the session, ask Duo Chat how to get started, follow-up with Code Suggestions, etc.
1. When finished/stopping because time, breath and provide a recap summary of what we learned today.
1. Export the video.
1. Take a screenshot from the session (or IDE) that highlights the learning. Add the screenshot to the [slide placeholder](https://docs.google.com/presentation/d/1FBOxe43l4qY8KastAWjblphOLiktNtPjHgFNmNYf0Uw/edit#slide=id.g2b429ab8253_0_23), edit the text with the session details, and again create a slides screenshot. This will serve as a video introduction in Premiere Pro.

Video editing in Adobe Premiere Pro:

1. Create a new project in Adobe Premiere Pro.
1. Import the recording and intro/outro image assets.
1. Drag the video into a new sequence.
1. Add the intro screenshot into the first 3-5 seconds. Right-click > Scale to fit frame size.
1. Use the razor icon to cut the video after the intro sequence. Select the first part and delete the sequence.
1. Add an ending screenshot to the last 3-5 seconds. Right-click > Scale to fit the frame size.
1. Use the razor icon to cut the video before the ending sequence, and remove any silence parts. Select the last part and delete the sequence.
1. Export the raw video: `File > Export > Media`.

Video upload:

1. Log into [GitLab Unfiltered account on YouTube](https://www.youtube.com/@GitLabUnfiltered/) and upload the video file.
1. Edit the title of the session: `GitLab Duo Coffee Chat: Challenge - Explain and Refactor COBOL programs` or similar.
1. Edit the video description with 2-3 sentences of what to expect. Add all docs/blog URLs as `Resources` entry.
1. Open the video preview in a new window and scroll over the sections. Note the timestamps, and write down a TOC into the video description. The table of content helps viewers to navigate quickly.
1. Add to `Playlist` - `GitLab Duo Coffee Chat`
1. Add tags: `gitlab`, `gitlab-duo`, `ai`, `development`, etc.
1. Publish the video.

Distribution

1. Add the video to the [GitLab Use Case documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html), Highspot, blog posts, social posts, etc.

### CI/CD Adoption

[FY25 Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466) (internal)

#### CI/CD Components Catalog

Collaborate with product and engineering to help seed the CI/CD component catalog through CI/CD template migration for [GitLab-maintained components](https://gitlab.com/components). Help maintain and review contributions from community competition and hackathons. Repurpose the learnings into content and story-telling ([content epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399)).

This initiative is part of the [CI Adoption WG](/handbook/company/working-groups/customer-use-case-adoption/) and contributions by Developer Relations ([epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/317)).

Goal: Help customers with CI/CD components for DevSecOps Efficiency. Learn best practices and share them in blog posts, tutorials, workshops.

Maintainers: [Michael Friedrich, @dnsmichi](https://about.gitlab.com/company/team/#dnsmichi), [Itzik Gan Baruch, @iganbaruch](https://about.gitlab.com/company/team/#iganbaruch)

### LinkedIn Lives in Collaboration with the Social team

GitLab hosts a monthly LinkedIn Live broadcast, generally on the fourth Thursday of every month, to highlight our monthly release, and share product updates and thought leadership. Each broadcast features GitLab team members and special guests to discuss the latest in AI-powered software development. This is a collaborative project between [Developer Advocacy](/handbook/marketing/developer-relations/developer-advocacy/) and the [Social Media](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) teams.

Episodes generally run for 30 minutes and feature 4-5 panelists and a moderator to discuss a predetermined topic or product update. In certain instances, the conversations are pre-recorded.

| Episode Title                                                                 | Views   | Month   |
|-------------------------------------------------------------------------------|---------|---------|
| [GitLab 16.11](https://www.linkedin.com/events/7191139444916146176/) | 5.6K    | 2024/04 |
| [GitLab 17.0](https://www.linkedin.com/feed/update/urn:li:activity:7198692684436250626) | 6.8K    | 2024/05 |
| [GitLab 17 Release event recap](https://www.linkedin.com/video/live/urn:li:ugcPost:7212131667262492673/) | 7.3K    | 2024/06 |
| [Harnessing AI: GitLab’s Insights & Innovations](https://www.linkedin.com/events/7219699059933020163) | 6.3K    | 2024/07 |

#### Information for Panelists

**Before the Broadcast/Recording**

- You will be added to a temporary Slack channel with the social media team and other panelists to discuss the agenda, logistics, and promotion.
- You will be asked to be available for a 30-minute walkthrough before the recording/broadcast to do a tech check, walk through the talking points, and meet the other panelists.
- You will be added as a speaker to the LinkedIn event page so your network is notified that you will be going live on LinkedIn.
- Please help us promote the event by sharing any LinkedIn posts promoting the event with your network.

**During the Broadcast/Recording**

- Please confirm you have a strong wifi signal and are in a well-lit area that is free from distractions.
  - Ideally, use a virtual background.
- If you have GitLab swag, please wear it!
- Use a headset as your microphone.

**After the Broadcast**

- Please engage with people who commented on the broadcast.
- Please re-share the event video with your network.

## Learning Collections

### Our Work Environments

- [Michael's dotfiles](https://gitlab.com/dnsmichi/dotfiles) covered in [this blog post](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)

### log4j-resources

The [log4j-resources](https://gitlab.com/gitlab-da/projects/log4j-resources) project provides a collection of resources to learn about, detect and mitigate the impact of the log4j vulnerability, more formally known as [CVE-2021-44228](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228).

Maintainers: [Developer Advocacy team](/handbook/marketing/developer-relations/developer-advocacy/)

## Workshops

### DevOps and GitLab

#### DevOps with GitLab CI Course - Build Pipelines and Deploy to AWS

Published: 2022.

[GitLab Hero](https://about.gitlab.com/community/heroes/members/) [Valentin Despa](https://twitter.com/vdespa) created the 5h course in collaboration Michael Friedrich, who helped with the [course outline review](https://gitlab.com/everyonecancontribute/workshops/gitlab-ci-freecodecamp/-/merge_requests/1).

[![''](https://img.youtube.com/vi/PGyhBwLyK2U/0.jpg)](https://www.youtube.com/watch?v=PGyhBwLyK2U "DevOps with GitLab CI Course - Build Pipelines and Deploy to AWS")

#### Efficient DevSecOps Pipelines in a Cloud Native World

Published: 2021.

The [slides](https://docs.google.com/presentation/d/12ifd_w7G492FHRaS9CXAXOGky20pEQuV-Qox8V4Rq8s/edit) provide a 10+ hours workshop created by Michael Friedrich for the Open Source Automation Days 2021. The exercises in the slides refer to [a workshop project](https://gitlab.com/gitlab-da/workshops/ci-cd-pipeline-efficiency-workshop) which also includes the solutions.

The following topics will be practiced:

- Introduction: CI/CD meets Dev, Sec and Ops
- CI/CD: Terminology and first steps
- Analyse & Identify
  - Learn using the [GitLab CI Pipeline Exporter](https://github.com/mvisonneau/gitlab-ci-pipelines-exporter/tree/main/examples/quickstart) to monitor the exercise project throughout the workshop.
- Efficiency actions
  - Config Efficiency: CI/CD Variables in variables, job templates (YAML anchors, extends), includes (local, remote), rules and conditions (if, dynamic variables, conditional includes), `!reference` tags (script, rules), maintain own CI/CD templates (include templates, override config values), parent-child pipelines, multi project pipelines, better error messages to fix failures fast
  - Resource Use Efficiency: Identification, max pipeline duration analysis, fail fast with stages grouping, fail fast with async needs, analyse blocking stages pipeline (solution with needs), matrix builds for parallel execution (pratice: combine matrix and `extends`, combine matrix and `!reference`), `extends` merge strategies (with and without `!reference`)
  - CI/CD Infrastructure Efficiency: Optimization ideas, custom build images, optimize builds with C++ as example, GitLab Runner resource analysis (sharing, tags, external dependencies, Kubernetes), local runner exercise, resource groups, storage usage analysis, caching (Python dependency exercise, including `when:always` on failed jobs)
  - Auto-scaling: Overview, AWS auto-scaling with GitLab Runner with Terraform, insights into [Spot Runners on AWS Graviton](https://about.gitlab.com/blog/2021/08/17/100-runners-in-less-than-10mins-and-less-than-10-clicks/)
- Group discussion
  - Deployment Strategies: IaC, GitOps, Terraform, Kubernetes, registries
  - Security: Secrets in CI/CD variables, Hashicorp Vault, secrets scanning, vulnerability scanning
  - Observability: CI/CD Runner monitoring, SLOs, quality gates, CI/CD Tracing
  - More efficiency ideas: Auto DevOps, Fast vs Resources, Conclusion and tips

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQCF72s_IIogKurtLhEZ3Pe3SrkcRL1KYIhScYwhwPlFDJTGYLK_sZGnG4gAfy0jiiQnITuxSGPDB48/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### Template: Basics and CI/CD with the Go Tanuki

The [slides](https://docs.google.com/presentation/d/1bj8FqU5I-Og-Yf9rDbp0qRjV4AXQo8K-rfOXkSUClW4/edit?usp=sharing) provide the step-by-step instructions as exercises for the [GitLab CI/CD Go Tanuki workshop](https://gitlab.com/gitlab-da/workshops/gitlab-cicd-go-tanuki-workshop):

- First Steps with GitLab
- CI/CD: Getting Started
- CI/CD: Go Project and Tests
- Security with GitLab
- Deliver and Deploy
- What's next
- Exercises for async practice
- Efficiency practice

#### Recent Recordings

Published: 2021.

[![''](https://img.youtube.com/vi/id9klDUrGN8/0.jpg)](https://www.youtube.com/watch?v=id9klDUrGN8 "TalentQL Pipeline workshop in October 2021")
[![''](https://img.youtube.com/vi/kTNfi5z6Uvk/0.jpg)](https://www.youtube.com/watch?v=kTNfi5z6Uvk "1. Swiss Meetup 2021 in January")

Recordings of past workshops and other videos from the Developer Advocacy team can be found on our [team playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq-bYO9jCJaN45BBpzWSLAQ) on GitLab Unfiltered.

### Past Meetup Workshops

Meetup workshops are available in the [workshops group](https://gitlab.com/gitlab-da/workshops) in the GitLab Developer Advocacy group. Note that the content, exercises and source code evolved over time :)

#### Basics and CI/CD

- [TalentQL Pipeline workshop in October 2021](https://gitlab.com/gitlab-da/workshops/go-tanuki-cicd-workshop-talentql-pipeline-program)
- [1. Swiss Meetup 2021 January](https://gitlab.com/gitlab-da/workshops/swiss-meetup-2021-jan)
- [Morehouse College CI CD Lecture](https://gitlab.com/gitlab-da/workshops/morehouse-college-lecture-cicd)
- [CI Community Day 2020](https://gitlab.com/gitlab-da/workshops/ci-community-day-2020)
- [KDE Akademy Workshop 2020](https://gitlab.com/gitlab-da/workshops/kde-akademy-workshop-2020)
- [LA / SoCal / Orange County Meetup 2020](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw41)
- [Collision from Home GitLab CI workshop](https://gitlab.com/gitlab-da/workshops/collision-from-home-2020)
- [Linuxing London Meetup - GitLab Introduction](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw17)
- [First virtual GitLab meetup - intro to CI](https://gitlab.com/gitlab-da/workshops/meetup-2020-cw13)

German language:

- [German CI/CD Workshop 2021](https://gitlab.com/gitlab-da/workshops/german-cicd-workshop-2021-jan)

#### Monitoring and Security

- [Identify, analyze, action! Deep monitoring with CI](https://gitlab.com/gitlab-da/workshops/ci-monitoring-webcast-2020)
- [GitLab CI Security Webcast](https://gitlab.com/gitlab-da/workshops/ci-security-webcast-2020)

### Developer Relations Bot

Maintainer: TBD. Ask [Michael Friedrich](/handbook/company/team/#dnsmichi) meanwhile.

This bot aims to automate the team tasks such as:

- Create [release evangelism](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism) issues for team members.
- Triage issues following the [Developer Advocacy workflows](/handbook/marketing/developer-relations/developer-advocacy/workflow/).
- Generate an issue letter (created, closed, open CFPs) on every Monday.

Project: [DevRel Bot](https://gitlab.com/gitlab-da/projects/devrel-bot)

### YouTube2Sheets

Maintainer: TBD. Ask [Michael Friedrich](/handbook/company/team/#dnsmichi) meanwhile.

This project is used internally at GitLab to retrieve the list of videos from specified playlists on YouTube onto a specified Google Sheet. Pipeline is scheduled to run at midnight and noon UTC.

Project: [YouTube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets)

### CodeChallenge.dev

Maintainer: Not actively maintained.

`CodeChallenge.dev` is an app that you can use to create challenges that are tied to actions in GitLab.  For example, you can create a challenge that teaches folks how to make merge requests, add issues, or use other GitLab features.  Currently in the beta release, the Code Challenge software was first used at KubeCon EU 2022.

Homepage: [CodeChallenge.dev](https://codechallenge.dev)

Documentation: [docs.codechallenge.dev](https://docs.codechallenge.dev)

Project: [codechallenge](https://gitlab.com/gitlab-da/projects/codechallenge)

<figure class="video_container">
    <iframe src="https://www.youtube.com/embed/BNEQMNtrlSM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
