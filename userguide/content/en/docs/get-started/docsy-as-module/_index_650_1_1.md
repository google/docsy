---
title: "Create:Editor Extensions Group"
description: The Create:Editor Extensions Group is responsible for all product categories that fall under the Editor Extensions group of the Create stage.
---

The Create:Editor Extensions Group is responsible for all aspects of the product categories that fall under the [Editor Extensions group](/handbook/product/categories/#editor-extensions-group) of the [Create stage](/handbook/product/categories/#create-stage) of the [DevOps lifecycle](/handbook/product/categories/#devops-stages).

## Group overview

### Group members

{{% team-by-departments "Create:Editor Extensions" %}}

### Stable counterparts

The following people are [stable counterparts](/handbook/leadership/#stable-counterparts) of the Create:Editor Extensions Group:

{{< group-by-slugs dashaadu amyqualls jay_mccure tvanderhelm truegreg>}}

### Product categories

The Editor Extensions group is responsible for the following [product categories](/handbook/product/categories/#editor-extensions-group):

- [Editor Extensions](https://about.gitlab.com/direction/create/editor_extensions/)

## Communication

We have a sync meeting as a team once per week.
Recordings are uploaded to the [Editor Extensions Category](https://www.youtube.com/playlist?list=PL05JrBw4t0KoC0pFfuNOAQjKxe4_ypFKc) playlist on GitLab Unfiltered.
When the discussion is finished, we stop the recording and stay on the call for the remaining time to have a group [coffee chat](/handbook/company/culture/all-remote/informal-communication/#coffee-chats).

Additionally to our main team's slack channels, each extension/project we work on has its own slack channel:

- Team:
  - [#g_editor-extensions](https://gitlab.slack.com/archives/C058YCHP17C) - [Sync Agenda](https://docs.google.com/document/d/1UJg-Prf5qGjiGImvaYl5HNjMcJddoeE4u33Ri6SxQ6g)
  - [#g_editor-extensions_social](https://gitlab.slack.com/archives/C062W19B8NR)
  - [#g_editor-extensions-standup](https://gitlab.slack.com/archives/C058YCWPKMG)
- Projects
  - Language Server: [#f_language_server](https://gitlab.slack.com/archives/C05B1PFHRPU)
  - VS Code extension: [#f_vscode_extension](https://gitlab.slack.com/archives/C013QJ9NEPL)
  - Visual Studio extension: [#f_visual_studio_extension](https://gitlab.slack.com/archives/C0581SE363C)
  - JetBrains extension: [#f_jetbrains_plugin](https://gitlab.slack.com/archives/C02UY9XKABH)
  - Neovim extension: [#f_neovim_plugin](https://gitlab.slack.com/archives/C05BF7L6PEX)

## Shared calendars

- Editor Extensions Shared Calendar (Calendar ID: c_673d889354d021f7fa9f20a003b5867185a9bf12989b5eaacbc8b537cc9ef27c@group.calendar.google.com)

## Cross-group ownership and boundaries

Editor extensions systems host features and modules owned by different groups.

The [Ownership and Boundaries](/handbook/engineering/development/dev/create/editor-extensions/ownership/) page provides clarity and a clear expectation between all parties who author/maintain features in our systems.

## Group processes

Our group processes are documented in this section.
If a process is in use but not described here, please follow the guidance in [Evolving the process](#evolving-the-process) to document it.

Our group is relatively new, and currently light on processes.
There are several differences between how we operate and the shared processes documented in the [product development flow](/handbook/product-development-flow/) and [engineering workflow](/handbook/engineering/workflow/).

### Evolving the process

We take an [iterative](/handbook/values/#iteration) approach to our processes.
Instead of defining it all at once, we add process when we see a gap or identify a problem.
For [efficiency](/handbook/values/#freedom-and-responsibility-over-rigidity), we also don't shy away from removing a process that has outlived its usefulness.

To evolve the process, please [start with an MR](/handbook/communication/#start-with-a-merge-request) to this page which contains your specific proposal, and ask for feedback.
If an issue is better suited for the discussion, it should be created in the [`meta` project](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues).

### Epics & Issues

We exclusively use [issue/epic descriptions as the single source of truth](/handbook/product-development-flow/#issue-descriptions-as-the-single-source-of-truth-ssot) for our planned work.

- Epics: [GitLab Epic Search](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=group::editor+extensions)
- Issues: [GitLab Issue Search](https://gitlab.com/groups/gitlab-org/-/issues/?sort=due_date&state=opened&label_name%5B%5D=group%3A%3Aeditor%20extensions&first_page_size=20)

Epics and issues are created in the project that matches their scope in the narrowest possible way. We use the following projects:

- Work specific to a single extension or to the Language Server:
  - [Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-language-server-for-code-suggestions)
  - [Visual Studio Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension)
  - [VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension)
  - [JetBrains Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin)
  - [Neovim Extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim)
- Other projects:
  - [Editor Extensions Meta](https://gitlab.com/gitlab-org/editor-extensions/meta) - Extensions work that isn't specific to a single extension, and general team-related issues
  - [Code Suggestions](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions) - Code Suggestions work that isn't specific to Extensions
  - [GitLab](https://gitlab.com/gitlab-org/gitlab) - Monolith work

### Prioritizing

We use [Milestone Planning Issues](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/?sort=created_date&state=all&label_name%5B%5D=Planning%20Issue)
to define our goals for the current/upcoming milestone.
The PM and EM are responsible for aligning on the goals.
The planning issues are [created automatically](https://gitlab.com/gitlab-org/editor-extensions/meta/-/tree/main#issue-creation-process) every month.

We use the [Editor Extensions Priority Board](https://gitlab.com/groups/gitlab-org/-/boards/7088820?label_name[]=group%3A%3Aeditor%20extensions)
to track the relative [priority of issues](/handbook/product/product-processes/#boards). Issues at the top of a column have the highest priority.

Separately, the technical writer for this group also triages open issues for potential documentation and UI text changes,
and follows the Technical Writing [triage process](/handbook/product/ux/technical-writing/workflow/#documentation-feedback-and-improvements). After review, each issue receives the `~tw::triaged` label.

#### Technical debt

We mark technical debt with the `~tech-debt` label.

##### Language Server + VS Code Extension

We prioritise technical debt in the monthly TypeScript Contributors
meeting ([example meeting issue](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/160)).
This meeting can be found in the team calendar (also in the frontend and Create stage calendars).

The detailed process for setting up the meeting can be found in this [team snippet](https://gitlab.com/gitlab-org/editor-extensions/meta/-/snippets/4767546).

We vote on [all technical debt issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=tech-debt&or%5Blabel_name%5D%5B%5D=group%3A%3Aeditor+extensions&or%5Blabel_name%5D%5B%5D=Category%3AWeb+IDE&not%5Blabel_name%5D%5B%5D=Deliverable&first_page_size=100)
with emoji reactions and then discuss the top priority issues in the meeting. The most upvoted issues
are prioritised (if capacity allows it) in our next milestone.

### Estimates

We use three weights to give a rough estimate of the issue's complexity. The weight is made out of two parts:

#### Base weight

These are estimates for someone familiar with the codebase/system.

- `1` - day or two of effort
- `2` - week of effort
- `3` - week and a half of effort

Everything with a base weight above `3` should be a spike that will result in one or more issues with estimated weight.

#### Subjective weight

You can add extra weight `1` or `2` to the base weight if you are new to the team/codebase/system.

Examples:

- Bob is new to the team, they are picking up an issue with weight `1` (i.e. simple). They know the technologies, but not our system. They'll add `2` subjective weight making the final weight `3`.
- Alice is familiar with the system but is picking up an issue (weight `2`) that touches authentication. She's unfamiliar with our authentication patterns and adds `1` subjective weight to have enough time to review the existing approaches. That makes the final weight `3`.

### Development Workflow

The work in progress is captured on our [Workflow Board](https://gitlab.com/groups/gitlab-org/-/boards/7248909?milestone_title=16.8&label_name%5B%5D=group%3A%3Aeditor+extensions).
For issues to appear on this board, they must have `~"group::editor extensions"` label and current milestone.

We use the following subset of the `workflow` labels to indicate the state of the issue:

- `~"workflow::ready for development"` - the issue has been described, estimated and scheduled, and it's ready to be picked up and worked on.
- `~"workflow::in dev"` - the issue has an assigned person who started implementing it.
- `~"workflow::in review"` - the spike/implementation is finished, and someone needs to review the spike result or the last MR (the last MR because if there are more MRs to implement, only the last one should result in the change of the workflow label).

### Code review

#### Comment severity levels

We are using the following levels of comments in our MR reviews. The MR reviewer decides on the severity of their comments and discusses this judgement with the MR author.

Immediate follow-up and follow-up levels have more complex processes attached to them. You can link to this page in your reviews to explain how the follow-ups should be tracked and addressed.

- **blocking** - `(blocking)` - Must be addressed in the same MR. All comments without any decorator are blocking, so adding the `(blocking)` decorator is optional.
- **immediate follow-up** - `(non-blocking, immediate follow-up)` - The comment is important enough that the fix should be implemented as the very next MR the author creates (emergencies like critical production bugs still take priority over the follow-up).
- **follow-up** - `(non-blocking, follow-up)` - This issue should be addressed but the severity should be weighed against all other technical debt and follow-ups
- **optional** - `(non-blocking)` - this comment is either personal preference or doesn't have a large impact on the MR. Creating a follow-up issue is optional.

##### When to use immediate follow-up

These are the reasons why we would choose immediate follow-up over a blocking
comment:

- The original MR was too complex and we are trying to re-focus - The MR review has many comments and it has been going on for many days, then working on an immediate follow-up might reduce the cognitive load and improve focus.
- **The original MR is urgent** - The MR delivers an urgent/critical feature, the feature works but the code needs to be still changed to match our standards. If it wasn't for the urgency, we would prefer to do the work in the same MR.

##### Immediate follow-up process

When an MR with an unaddressed immediate follow-up comment is merged:

- MR author creates an issue for this comment and ensures the issue:
  - Has the MR author is assigned to it
  - Has title and description that captures the work
  - Is marked as blocking issue associated with the original MR
  - Is labeled `~immediate` and `~follow-up`
- Until the immediate follow-up is implemented, the GitLab issue for the original MR should not be closed.

##### Follow-up process

1. The MR author creates a follow-up issue and **clearly documents** (in title and description) what the follow-up is about and adds the `~follow-up` label.
1. The MR author references the issue in a [`// FIXME` comment in the code](#tracking-issues-in-code-with-fixme-comments).

##### Comment Example

> "(immediate follow-up): This introduces a singleton and we are trying to move away from singletons in the whole system (issue link). We should address this quickly to prevent the anti-pattern from spreading."

These comment severity levels are not static. For example, you might initially mark a comment as _blocking_, but after discussion with the MR author, you may agree to change it to a _follow-up_.

#### Tracking issues in code with FIXME comments

We track existing issues directly in the code using `// FIXME` comments. These comments are created in two ways:

- An engineer notices a _pre-existing_ issue during development that they can't fix immediately. They add a `// FIXME` comment to the codebase and _optionally_ reference an issue.
- A [Follow-up comment](#follow-up-process) has been created during an MR review, and we track this follow-up with both an issue and a `// FIXME` comment.

Maintainers are allowed to add `// FIXME` comments as the last commit to the MR before merging it to avoid an extra review cycle.

We use `FIXME` and `TODO` comments interchangeably.

For a more detailed explanation and list of advantages of this approach, see the [proposal](https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues/142).

### Temporary silos

Our team owns several projects, written in different languages (Typescript, Kotlin, C#, Lua) and targeting different platforms.

We are currently intentionally working in silos, by assigning engineers to the project/technology that they can contribute to most efficiently.
This increases speed of development as we aim to reach GA for Code Suggestions, at the cost of knowledge sharing and team resiliency.

This intentional siloing is a temporary measure.
While we do need to cultivate deep expertise in each project,
the mid-term vision for the team is to provide opportunities for [everyone to contribute](/handbook/company/mission/) across each project.
This will increase collaboration, team resiliency, and provide opportunities for growth.

## Knowledge sharing

This section contains links to make it easier to find the same information for each extension.
This is a first iteration, this content should probably live somewhere else eventually.

### Languages supported by Code Suggestions

Each extension defines an array of supported languages.

- VS Code: [AI_ASSISTED_CODE_SUGGESTIONS_LANGUAGES](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/f28a17478a41f554e1c620648237705007128d57/src/common/code_suggestions/constants.ts#L9-37)
- Visual Studio: [LanguageManager](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension/-/blob/a973ef56bac290ed0c2c5c69d20c5606a7198125/GitLab.Extension/CodeSuggestions/LanguageManager.cs#L17-42)
- JetBrains: [SUPPORTED_EXTENSIONS](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/blob/ec5b239e6dea3714139031a4d6a9a547142afffc/src/main/kotlin/com/gitlab/plugin/util/GitLabUtil.kt#L20-43)
- Neovim: [auto_filetypes](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim/-/blob/5b781dffbd047df7050064ad3255154ecef2524c/lua/gitlab/config/defaults.lua#L7-28)

### Language Server versions in use

- Visual Studio: the server binary is versioned directly: [GitLab.Extension/Resources/gitlab-lsp-win-x64.exe](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension/-/blob/a973ef56bac290ed0c2c5c69d20c5606a7198125/GitLab.Extension/Resources/gitlab-lsp-win-x64.exe)
- VS Code: the server is pulled as a package: [package.json](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/blob/main/package.json)
- JetBrains: N/A - see [issue](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/issues/30)
- Neovim: the server is pulled as a package: [lsp/package.json](https://gitlab.com/gitlab-org/editor-extensions/gitlab.vim/-/blob/main/lsp/package.json)

## Hiring

Check out our [jobs page](https://about.gitlab.com/jobs/) for current openings.

## Engineering metrics

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="editor extensions" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="editor extensions" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="editor extensions" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="editor extensions" >}}
{{< /tableau >}}
