---
title: "Scaled Agile Framework and GitLab"
description: "The scaled agile framework has evolved to be a common approach for large enterprises adopt agile delivery practices at scale."
---
## Scaled Agile Framework (SAFe)

The scaled agile framework has evolved to be a common approach for large enterprises adopt agile delivery practices at scale where they need to manage governance, coordination, and cross project collaboration.

Before explaining how GitLab can support SAFe, a brief overview of the GitLab project and portfolio model help.   This [slide deck](https://bit.ly/2K5ZDka) is where we have been collaborating internally about how GitLab can support the Scaled Agile Framework.

## GitLab Project Management

### GitLab "Project"

The project in GitLab is the core building block, where work is organized, managed, tracked and delivered.  A project in GitLab enables the team to collaborate and plan their work in the form of Issues (use cases/requirements), Issue boards (Kanban), and Milestones (Sprints).

![GitLab Project](https://about.gitlab.com/images/solutions/scaled-agile/gitlab-project.png)

The GitLab Project is much, much, much more than simply project management.  The GitLab project unlocks the power of an industry leading source code management repository and a CI/CD pipeline.  The Merge Request is the linkage between the issue and the actual code changes.  The merge request captures the design, implementation details (code changes), discussions (code reviews), approvals, testing (CI Pipeline), and security scans.

![GitLab Repository](https://about.gitlab.com/images/solutions/scaled-agile/gitlab-repository.png)

#### Issue

The issue in GitLab is the fundamental planning object.  It is where the team documents the use case in the description, discusses the approach, estimates the size/effort (issue weight), tracks actual time/effort, assigns work, and tracks progress.  Labels enable the team to tag issues, track status, and associate issues with different initiatives.

#### Boards

Boards provide a flexible and dynamic approach to visually manage a project.  Here, teams can manage their backlog of work, prioritize the items, and then move the issues to the team or specific stage in the project.  Each list in the board calculates the total size (weights) of the associated issues, enabling the team to understand how much work is assigned at any given time.

#### Milestones

Milestones establish a target date for a sprint or specific bundle of issues and code changes to be delivered.  The milestone enables the team to either set a specific Start and Stop for the work, as in a Sprint, or the milestone could be a fixed point in time.

#### Labels

The label in GitLab is a flexible and powerful mechanism to tag and track work.   Labels are used to define columns in the issue boards and make it easy to search and find issues or merge requests related to a common theme.

### GitLab Groups

In order to manage multiple projects (portfolios of projects), the GitLab Group is the entity that enables strategic planning and tracking of business initiatives through delivery.  At the Group Level, you can manage sub-groups, projects, epics, milestones, roadmaps and group level boards.

![GitLab Group](https://about.gitlab.com/images/solutions/scaled-agile/gitlab-groups2.png)

#### Epics

In order to track groups of related projects and issues, the GitLab epic gives product owners and leaders the ability to link and manage work over an extended time frame.  An epic can span multiple milestones and makes it easier to manage the overall flow and priority of work.

#### Milestones

While milestones at the project level often align to sprints, at the group level, milestones can be created for all the projects and sub-groups within the group.  This way, teams can stay in synch with each other and focus on common release targets.

![Milestone burndown chart](https://docs.gitlab.com/ee/user/project/milestones/img/burndown_chart_v15_3.png)

#### Roadmaps

The roadmap is a visual representation of the various epics for the group.   The roadmap view can be filtered by label and organized by start / stop date of the epics in order to visualize the sequence of work.   At this point, GitLab doesn't create dependencies between issues or epics.

![GitLab Roadmap](https://about.gitlab.com/images/solutions/scaled-agile/gitlab_roadmap.png)

#### Group Boards

The group level issue board makes it possible for oversight and governance of the projects and sub groups.  This view, makes it easy to see how specific issues are flowing through the lifecycle and to understand the overall capacity of the teams.

![GitLab Kanban Board](https://about.gitlab.com/images/gitlab-kanban-board.png)

## Scaled Agile Framework

The [scaled agile framework](https://v5.scaledagileframework.com/) is used by many large enterprises to define, organize, and synchronize the work of multiple agile teams.  Designed to help enable coordination, collaboration, governance and oversight of multiple agile teams in complex environments.

![SAFe Model Board](https://about.gitlab.com/images/solutions/scaled-agile/safe_model.png)

GitLab's structure of Groups, SubGroups and Projects makes it possible to model and support different variations of the Scaled Agile Framework.

![GitLab to SAFe](https://about.gitlab.com/images/solutions/scaled-agile/gitlab-safe-overview.png)

To support the entire model (the 4 layer SAFe model), an organization would start with a Group to represent the Portfolio planning work.  Then the Large Solution part of the model would be a Sub Group.  The Programs would each be listed as SubGroups below the Large Solution, and finally the agile teams would work in GitLab Projects, each modeled as part of "Programs".

### Team

The [agile team](https://v46.scaledagileframework.com/agile-teams/) is the foundation of the Scaled Agile Framework, it is where teams organize, plan, and actually deliver new features. In GitLab, the **project** is the fundamental team work area.  In GitLab projects teams manage their backlog of use cases (issues), assign work (boards), collaborate on features (issue discussions), develop code (merge requests), review changes (merge request discussions), and integrate and deploy applications (CI/CD pipelines).

#### Team backlog

GitLab **issues and issue boards** enable the project team to capture, manage and prioritize [their backlog](https://v46.scaledagileframework.com/team-backlog/). They can prioritize their issues directly in the issue board, or they can use labels to establish overall priority of issues.

#### Scrum

Project level **milestones** are used to define [time based sprints](https://v46.scaledagileframework.com/scrumxp/). Issues are added to the milestone and then GitLab enables burndown charts to visualize the progress of the team in closing issues and delivering new features.

#### Team Kanban

[Project **issue board**](https://v46.scaledagileframework.com/team-kanban/) helps teams to visualize and manage the flow of their work, with the ability to track the overall 'weight' of all the issues assigned to any specific stage in the board.

---

### Program

The [Program layer](https://v5.scaledagileframework.com/program-and-solution-kanbans/) of the Scaled Agile model is the Sub Group which contains related project teams.   At this level, Labels and Boards are used to define and manage the Program Increments and the Agile Release Trains

#### Agile Release Trains

[Agile Release Trains](https://v46.scaledagileframework.com/agile-release-train/) enable cross project collaboration and coordination of work to meet specific release targets.   In GitLab, the **Group Level boards and labels** are used to define specific stages in the release train and to track how project level issues and merge requests are progressing toward being ready to release.

#### Program increment

The [Program increment](https://v46.scaledagileframework.com/program-increment/) is a smaller time frame than the Agile Release Train, and is managed in GitLab using **group level boards and labels**.

---

### Large Solution

In order to coordinate how multiple dimensions of a complex solution are delivered, the [Large Solution layer](https://v5.scaledagileframework.com/large-solution-safe/) of the scaled agile framework is designed to facilitate cross project coordination.  In GitLab, a subgroup can enables oversight and coordination of both projects and additional subgroups.

#### Solution Intent

[Solution Intent](https://v46.scaledagileframework.com/solution-intent/)

#### Solution Train

[Solution Trains](https://v46.scaledagileframework.com/solution-train/) enable cross project collaboration and coordination of work to meet specific release targets.   In GitLab, the **Group boards and labels** are used to define specific stages in the solution train and to track how project level issues and merge requests are progressing toward being ready to release.

---

### Portfolio

At the top of the Scaled Agile Framework is where [portfolio](https://v5.scaledagileframework.com/portfolio-safe/) and strategic planning drive decisions about future investments and business objectives. In GitLab, the Group is able to contain both Projects and Subgroups, to enable reporting, tracking, and management of strategic initiatives.

#### Strategic Themes

[Strategic themes](https://v46.scaledagileframework.com/strategic-themes/) are effectively long term goals and objectives at the portfolio level.  In GitLab, the **Epic** at the group level can be used to define the overall theme.

#### Epic

The [epic](https://v46.scaledagileframework.com/epic/) is a way to package and organize work required to deliver specific business value.  In GitLab, Epics are a way to strategically organize work from multiple projects.
