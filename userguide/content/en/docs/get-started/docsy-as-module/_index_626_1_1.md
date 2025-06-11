---
title: Duo Workflow Group
description: "The Duo Workflow group is focused on developing GitLab Duo Workflow, an AI system to automate tasks and help increase productivity in your development workflow."
---

## Vision

The Duo Workflow group is focused on developing GitLab Duo Workflow, an AI system to automate tasks and help increase productivity in your development workflow.

### Team Members

**Engineering Manager & Engineers**

{{< team-by-manager-slug "bastirehm" >}}

**Product, Design & Quality**

{{% stable-counterparts role="(Product Manager|Technical Writer|Software Engineer in Test|Security Engineer).*(Duo Workflow)" %}}

### ☎️ How to reach us

Depending on the context here are the most appropriate ways to reach out to the IDE Group:

* Slack Channel: `#g_duo_workflow`
* Slack Groups: `@duo-workflow` (entire team) and `@duo-workflow-engs` (just engineers)

### Technical Components 🛠️

Besides the main GitLab repository these are the key technical components we work with:

1. [Duo Workflow Service](https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-service) 🐍
1. [Duo Workflow Executor](https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-executor) 🏃‍♂️
1. IDE Integration 🧩
   1. [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
   1. [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension)

Additional projects that we mainly maintain:

1. [Duo Workflow Tests](https://gitlab.com/gitlab-org/duo-workflow/testing/duo-workflow-tests)
2. [Default Docker Image](https://gitlab.com/gitlab-org/duo-workflow/default-docker-image)

For an understanding of how these components work together, take a look at the [architecture](/handbook/engineering/architecture/design-documents/duo_workflow/).

## 📦 Team Processes

### 📆 Regular team meetings

**❗️Important**: For every meeting, the [Duo Workflow team's meeting document](https://docs.google.com/document/d/15N9G3UWoB_u8KOErdk_aGk5IdBoxEFBWMSgg9FvwVXo/edit?tab=t.0#heading=h.j3rcm4sf2nc9) should be used, and filled with the meeting notes, as well as references to any other sync meeting agendas/notes/recordings which have recently occurred. This will make it easier for people to find any meeting notes.

#### Team Meetings

1. **Duo Workflow Meeting**
   * **When:** Every Monday, 15:00 UTC and every Wednesday 7:00 UTC
   * **What:** This meeting serves as a general sync meeting to bring up any current issues and blockers. We walk the board at least once a week on an alternating basis between the meetings to ensure clarity around current progress and priorities

### Shared calendars

* AI-Powered Stage Calendar (Calendar ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`)

### 📚 Duo Workflow Board Outline

The Duo Workflow team is following a 2-week iteration process. All currently prioritized issues including an overview of the are visualized in our [iteration board](https://gitlab.com/groups/gitlab-org/-/boards/7828018?milestone_title=Started&label_name[]=group%3A%3Aduo%20workflow). Overview issues that outline the goal and focus points of past iterations and the current one can be found in the [overarching epic](https://gitlab.com/groups/gitlab-org/-/epics/16048).

We aim for ambitious but achievable planning of the current iteration, and only issues in the current iteration should be actively worked on. If there are no more issues available reach out to the EM/PM of the team for clarification.

These are the workflow labels we work with:

1. **Open**: As of yet unclassified issues, which need to be updated to one of the used workflow labels or meta issues such as iteration overview.
1. **workflow::refinement**: Issues in this stage have been identified as important to be worked on but are not ready for development yet. This might be due to a variety of reasons such as missing or not finished designs or architectural questions that need to be clarified.
1. **workflow::ready for development**: Issues that are ready for implementation are moved to this list.
1. **workflow::in dev**: When a developer begins work on an issue, they should move it to this list.
1. **workflow::in review**: After development is complete and submitted to be reviewed, the issue should be moved to this list.
1. **workflow::verification**: Following a successful code and UX review, the issue should be moved to this list and the "verification" label should be applied.
1. **Closed**: Once the issue is verified and confirmed to be working properly, it should be moved to this list, the "complete" label should be applied, and the issue should be closed.

We use priority labels to help with understanding the order in which issues should be worked on:

1. **DuoWF-Prio::1**: These items are the primary deliverables of an iteration and should therefore be picked up first.
1. **DuoWF-Prio::2**: We aim to deliver all of these items, but as part of planning ambitiously some of them might slip.
1. **DuoWF-Prio::3**: These are likely follow-up issues that might depend on Prio 1 or 2 work or the are generally not yet time-sensitive.

## 👏 Communication

The Duo Workflow Team communicates based on the following guidelines:

1. Always prefer async communication over sync meetings.
1. Don't shy away from arranging a [sync call](#-ad-hoc-sync-calls) when async is proving inefficient, however always record it to share with team members.
1. By default communicate in the open.
1. All work-related communication in Slack happens in the `#g_duo_workflow` channel.

## Sentry Error Triage

New sentry errors for the Duo Workflow Service and Executor are coming into the [#g_duo_workflow_alerts channel](https://app.slack.com/client/E03N1RJJX7C/C07V276CFQX). We set up a triage process in order to stay on top of these errors.
Every week a different backend engineer of the team is responsible for triaging new messages in this channel.
The schedule for triage shifts can be found in the [iteration issues](https://gitlab.com/groups/gitlab-org/-/epics/16048).
While on shift the engineer should:

1. Look at the channel at least once per day.
1. For any incoming message for a sentry error try to find out:
   1. Is the error related to an existing issue?
   1. Depending on that either:
      1. Create a new issue.
         1. Tag the EM in the issue.
         1. If it turns out to be a [severity 1 issue](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity), then announce it in Slack, to coordinate work on it.
      1. Link the error in an existing issue.
      1. continue to observe the error the next days if it only occured once.
1. Apply the ✅ as a reaction to the error once it's been triaged.

### Triage Schedule

The schedule can be found in [this Google sheet](https://docs.google.com/spreadsheets/d/1zoZ3o-2xlq5Qlg-BUxt3hO8SRqZAFVTK3QO2BVBl0qY/edit?gid=0#gid=0). Every Monday an auto generated message announces who is responsible for the alerts channel based on this schedule.

### ⏲ Time Off

Team members should add any [planned time off](/handbook/people-group/paid-time-off/#paid-time-off) in the "Workday" slack app, in accordance with the [taking time off](/handbook/engineering/#taking-time-off) policy, including creating a [PTO coverage issue](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new).

### 🤙 Ad-hoc sync calls

We operate using async communication by default. There are times when a sync discussion can be beneficial and we encourage team members to schedule sync calls with the required team members as needed.

### Transparency with regards to Duo Workflow

Due to the prominent nature of AI agents (such that they generate investment attention) and the early development phase of Duo Workflow it is very important to consider our [SAFE Framework](/handbook/legal/safe-framework/) when it comes to information around Duo Workflow.
Demo, Progress and sharing designs is ok, but internal feedback issues and unstructured / overly negative internal feedback should remain confidential.

## 🔗 Useful Links

* [Monthly Retros](https://gitlab.com/gl-retrospectives/data-science/ai-powered/duo-workflow)
* [LangGraph Workshop](https://gitlab.com/gitlab-org/duo-workflow/langgraph-workshop)

### 📝 Dashboards (internal only)

* [Usage Metrics Tracking in Tableau](https://10az.online.tableau.com/#/site/gitlab/views/DuoWorkflowMetricsTracking/DuoWorkflowMetricsTracking?:iid=1)

### 📹 GitLab Unfiltered Playlist

The Duo Workflow Group collates all video recordings related to the group and its team members in [a playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KoByUnA4Oq-AAins6hDFwyC) in the [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube channel.
