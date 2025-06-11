---
title: "GitLab Duo Tips"
---

Learn how to use AI-powered GitLab Duo Chat, Code Suggestions and more to make your DevSecOps workflows faster.

## Access

If you require access to GitLab Duo for the gitlab-com [group](https://gitlab.com/gitlab-com) please create a [HelpLab ticket](/handbook/business-technology/enterprise-applications/guides/helplab-guide/#create-a-ticket--request) to work with IT to get GitLab Duo enabled for the group.

GitLab contributors and co-creators can also take advantage of AI-powered GitLab Duo. Start with the onboarding process in [contributors.gitlab.com/](https://contributors.gitlab.com/).

If team members need access in customer demo group on GitLab.com, create an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) using the `GitlabCom_Licensed_Demo_Group_Request` template.

Follow the [Getting Started](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html) documentation to onboard.

## GitLab Duo in IDEs

For IDE integration through GitLab Duo extensions, follow the [editor extensions documentation](https://docs.gitlab.com/ee/editor_extensions/#available-extensions).

## Resources

- [GitLab Duo documentation](https://docs.gitlab.com/ee/user/gitlab_duo/)
  - [Getting Started](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html)
  - [Use cases](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html)
  - [Duo Code Suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/)
  - [Duo Chat](https://docs.gitlab.com/ee/user/gitlab_duo_chat/)
- [GitLab University](https://university.gitlab.com)
  - [AI and GitLab Duo courses](https://university.gitlab.com/learn/dashboard?labels=%5B%22Topic%22%5D&values=%5B%22AI%22%5D)
  - [GitLab Duo Enterprise learning path](https://university.gitlab.com/learn/learning-path/gitlab-duo-enterprise-learning-path)
- [Developer Advocacy resources](/handbook/marketing/developer-relations/developer-advocacy/)
  - [Content library](/handbook/marketing/developer-relations/developer-advocacy/content/) with GitLab Duo demos, use cases, product tours, talks, workshops, recordings, etc.
- [Highspot: Field guide](https://gitlab.highspot.com/items/6459a4f9a583c8ebe9aa5a64) (internal only, field teams)
- Dogfooding: [Developing GitLab Duo blog tutorial series](https://about.gitlab.com/blog/2024/06/03/developing-gitlab-duo-series/)

## Tips

GitLab Duo Chat can answer many questions about GitLab, programming languages, technology and more. Use it for your advantage, and practice how to ask questions and create follow-up conversations, instead of opening multiple browser search tabs. Explore, experiment, and iterate on chat prompts and responses. Learn more in the blog post [10 best practices for AI-powered GitLab Duo Chat](https://about.gitlab.com/blog/2024/04/02/10-best-practices-for-using-ai-powered-gitlab-duo-chat/).

If you are using GitLab Duo to write code, dive into the blog post [Top tips for efficient AI-powered Code Suggestions with GitLab Duo](https://about.gitlab.com/blog/2024/06/11/top-tips-for-efficient-ai-powered-code-suggestions-with-gitlab-duo/).

Explore the use cases in this handbook page for GitLab team members and co-creators. More use cases and workflows are documented in the [GitLab Duo documentation](https://docs.gitlab.com/ee/user/gitlab_duo/).

Open feature requests:

1. [Ask GitLab handbook questions in GitLab Duo Chat](https://gitlab.com/gitlab-com/content-sites/handbook/-/issues/212)

## Handbook use cases

### Preparation steps for handbook edits

Ensure that GitLab Duo Chat works in [your IDE or GitLab UI](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html#step-4-prepare-to-use-gitlab-duo-in-your-ide).

1. [GitLab UI](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-the-gitlab-ui)
1. [Web IDE](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-the-web-ide)
1. [VS Code](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-vs-code)
1. [JetBrains IDEs](https://docs.gitlab.com/ee/user/gitlab_duo_chat/#use-gitlab-duo-chat-in-jetbrains-ides) (IntelliJ IDEA, PyCharm, and others)

Keyboard shortcuts to access Duo Chat in VS Code/Web IDE:

1. Use `cmd shift p` (macOS) to open the command palette.
1. Search for `GitLab Duo Chat` and press Enter.
1. Optional: Move Duo Chat to the right panel by dragging it there [explained in [this video](https://www.youtube.com/watch?v=foZpUvWPRJQ)].

If you want to use Code Suggestions to write and complete Markdown content, you need to configure `markdown` as [additional language in the IDE extension settings](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/supported_extensions.html#add-support-for-more-languages). Tip: Multiple open tabs and more file content can help increase the [context](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/#advanced-context) and quality of suggestions. Schedule a coffee chat with @dnsmichi, handbook backend maintainer, and ask for live screenshare learning sessions.

### Create Markdown tables

Problem to solve: `Is there a way to add a table on a handbook page via web IDE?`

Use the following prompt to create a table with preseed data columns:

```markdown
Create a Markdown table with the following data set
Header: Cloud, GPU type, Costs, Spec, Notes
Fill the entries with sample data for 3 rows.
```

GitLab Duo Chat may visualize the Markdown table. Use that to your advantage to verify that the result matches your expectations, and follow up with a prompt to define the output format as raw Markdown.

```markdown
Show the raw Markdown in a code block
```

> Note: The same workflow is available in GitLab Duo Chat in [local IDEs with the Duo extension](https://docs.gitlab.com/ee/user/get_started/getting_started_gitlab_duo.html#step-4-prepare-to-use-gitlab-duo-in-your-ide).

### Update or refactor Markdown tables

Sometimes, Markdown tables need to be split into multiple tables, or merged into a single one. Or an additional column needs to be added.

1. Open the IDE and select the table that should be updated or refactored.
1. Ask GitLab Duo Chat the following prompt:

   ```markdown
   /refactor the table for better readability. Split it by the first column into separate tables.
   ```

1. When Duo Chat visualizes the table in the response, use that to verify that the table is correctly divided. You can follow up with a prompt to ask for a raw output:

   ```markdown
   Only show the refactored table as raw Markdown code blocks
   ```

## Development use cases

Read the blog post [Developing GitLab Duo: How we are dogfooding our AI features](https://about.gitlab.com/blog/2024/05/20/developing-gitlab-duo-how-we-are-dogfooding-our-ai-features/) to learn how to

1. Streamline the code review process
1. Condense comment threads
1. Create new documentation
1. Craft release notes
1. Optimize docs site navigation
1. and more

### Troubleshoot failed CI/CD pipelines

1. Navigate into the failed pipeline's job view, and inspect the log. Follow the [steps in the documentation](https://docs.gitlab.com/ee/user/gitlab_duo_chat/examples.html#troubleshoot-failed-cicd-jobs-with-root-cause-analysis) to start the Root Cause Analysis.
1. Use the chat prompt to ask follow-up questions, for example how to prevent the error long term.

You can explore the use cases in:

1. [Duo Enterprise product tours](/handbook/marketing/developer-relations/developer-advocacy/content/#product-tours) and [Root Cause Analysis challenges](https://gitlab.com/gitlab-da/use-cases/ai/ai-workflows/gitlab-duo-challenges/root-cause-analysis) maintained by the [Developer Advocacy team](/handbook/marketing/developer-relations/developer-advocacy/projects/#organisation-structure)
1. [GitLab University: GitLab Duo Enterprise course](https://university.gitlab.com/courses/gitlab-duo-enterprise)

### Onboarding and contributions

Team members and community contributors can take advantage of AI-powered workflows for fast onboarding, learning more about the code base and GitLab, and contributing with faster review cycles.

1. Learn about the source code base, and explore how to implement a specific feature proposal or bugfix.
1. Speed up Merge Request summary and code reviews.
1. Troubleshoot failing CI/CD pipelines.

Learn more in the [GitLab Duo use cases documentation](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html#use-gitlab-duo-to-contribute-to-gitlab).

## Terminal Integration with GitLab Duo Quick Chat

### Problem to solve

Remembering command line arguments is hard and searching through man pages is time-consuming.

### Solution

Integrate GitLab Duo Quick Chat with your terminal to help with command-line operations.

### How to set it up

1. Configure your terminal to use VSCode as the default editor by adding this to your shell profile (`.bashrc`, `.zshrc`, etc.):

   ```bash
   export EDITOR="code --wait"
   ```

2. When you need help with a command:
   - Begin typing the command in your terminal (e.g., `git rebase -i`)
   - Press <kbd>Ctrl</kbd>+<kbd>x</kbd> <kbd>Ctrl</kbd>+<kbd>e</kbd> to open your current command line in VSCode

3. In VSCode:
   - The command you were typing appears in a new temporary file
   - Open GitLab Duo Chat (using <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on macOS or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on Windows/Linux and type "GitLab Duo Chat")
   - Select the command text (or delete it) and ask Duo to help you achieve your goal. For example: "Help me write a git command to squash my last 3 commits into one" or "I need a command to rebase my current branch onto main and resolve conflicts interactively"

4. Use Duo's response:
   - When Duo generates the improved command, click the **Insert Snippet** button in its response
   - Save the file (<kbd>Cmd</kbd>+<kbd>S</kbd> or <kbd>Ctrl</kbd>+<kbd>S</kbd>) and close the tab
   - The edited command will appear in your terminal, ready to execute

### Additional notes

- This workflow also works with the integrated terminal in VSCode
- Keyboard shortcut <kbd>C-x</kbd> <kbd>C-e</kbd> is a standard bash/zsh feature for editing the current command line, not specific to Duo
