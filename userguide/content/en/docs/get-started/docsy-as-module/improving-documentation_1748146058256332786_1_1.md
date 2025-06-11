---
title: Improving Documentation
description: "Workflow for submitting GitLab documentation improvements from the Support team"
category: Handling tickets
---

## Improving Documentation

As outlined in the [Documentation section](/handbook/support/workflows/how-to-respond-to-tickets#documentation) of the **How to Respond to Tickets** workflow, comprehensive documentation is a powerful tool for ticket deflection.

> By taking a [docs-first](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology) approach to answering, we can ensure that the documentation remains a highly useful [single source of truth](https://docs.gitlab.com/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot). By building up a corpus of documentation informed by real-world problems, we help GitLab customers find the answers or solutions they need before they come into the queues.

With that in mind, whenever possible, include a link to the applicable documentation as part of your response to a ticket. If the documentation does not exist yet, then *write* a documentation issue or draft merge request, and send the link  in the response.

The information collected below should be helpful for when you contribute to the docs.

### General Documentation Guidelines

#### Making Your Changes

Make your edits and commits on a new branch named according to the Documentation
guidelines, which state that branch names must start with `docs-` (or
[one of the other options listed in the branch name scheme](https://docs.gitlab.com/development/documentation/workflow/#branch-naming)).

- Commit the changes. Make sure the commit message follows our [commit message guidelines](https://docs.gitlab.com/development/contributing/merge_request_workflow/#commit-messages-guidelines).
    If you don't follow the guidelines, the [Danger Bot](https://docs.gitlab.com/development/dangerbot/) job may fail when it checks if the commits are aligned with our guidelines. If it fails, read the job trace and fix the issue with a new commit, or an [interactive rebase](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History). (Ask for help if you're not sure how to do a rebase!)

> **Note:** If you are unfamiliar with the basics of working in a Git or GitLab
environment, please complete the
[Git and GitLab Basics training module](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/.gitlab/issue_templates/Git%20and%20GitLab%20Basics.md) before attempting to make documentation changes.

#### Style Guide and Linting

- Review the [documentation style guide](https://docs.gitlab.com/development/documentation/styleguide/).
  - It's not required to memorize the style guide, but remember to check it when writing your documentation to ensure it complies. This will help to ensure your Merge Request is approved quickly.
- Remember to also review the [topic types page](https://docs.gitlab.com/development/documentation/topic_types/), paying close attention to the [troubleshooting section](https://docs.gitlab.com/development/documentation/topic_types/troubleshooting/).
- While not required, it is highly recommended to [install the docs linters](https://docs.gitlab.com/development/documentation/testing/)
  in your local editor to prevent pipelines from failing, or use the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit). Plugins can be also
  used from the command line.
  - Set up [markdownlint](https://docs.gitlab.com/development/documentation/testing/markdownlint/).
  - Set up [Vale](https://docs.gitlab.com/development/documentation/testing/vale/).
  - [Set up a vertical ruler](https://stackoverflow.com/questions/29968499/how-can-i-have-multiple-vertical-rulers-in-vs-code) to help you [split long lines](https://docs.gitlab.com/development/documentation/styleguide/#text).

#### Documentation Merge Requests

- Follow the [docs MR guidelines](https://docs.gitlab.com/development/documentation/#merge-requests-for-gitlab-documentation) as you create the MR
- In the MR Description, be sure to include a link to any relevant ticket or issue
- Add appropriate labels:
  - documentation (the template should be automatically adding this label, but check to make sure).
  - group [scoped label](https://docs.gitlab.com/user/project/labels/#scoped-labels) (if in doubt, it should be listed at the top of the docs page)
  - customer (if related to a ticket)
  - *Note: the bot will add the stage, section, [Support Team Contributions](/handbook/support/#support-fixes), and docs-only labels if you don't*
- Follow the [Code Review Guidelines](https://docs.gitlab.com/development/code_review/) and set the relevant Technical Writer (TW) as a Reviewer.
  - The documentation template has instructions on how to find this, but basically refer to the metadata information at the top of the source version of the docs page.
  - Check the [Technical Writing Assignments](/handbook/product/ux/technical-writing/#assignments) to find the appropriate tech writer for the page you edited.
  - If you're using the [Support dotfiles](https://gitlab.com/gitlab-com/support/toolbox/dotfiles), you can use the `find-technical-writer` command to quickly see who is the tech writer for a specific group.
- Make sure that the following options are checked before submitting the MR:
  - `Delete source branch when merge request is accepted.`
  - `Squash commits when merge request is accepted.` The "Apply suggestion" feature is used frequently in docs MRs, so this checkbox is essential to keeping a clean history in the default branch after merging.

### Working with the Tech Writers on the Merge Request

- Remember to provide timely answers to any questions the tech writing team may ask you about your contribution.
- Read through the [documentation process](https://docs.gitlab.com/development/documentation/workflow/).
  - Note: Support is expected to verify the technical accuracy of a docs MR before assigning to a TW. When in doubt, get a technical review from an engineer first. Find an [appropriate engineer](/handbook/product/categories/) using the metadata information from the edited page.
- Read the [post merge review guidelines](https://docs.gitlab.com/development/documentation/workflow/#post-merge-reviews).
  - In Support, you might use the post-merge review option if you have an urgent docs MR, such as when we need to publish a docs fix as soon as possible.
  - If it's in the "Troubleshooting section" of any page, follow the guidelines except assign to a support manager who is online who will do a quick review and merge.
  - If it's not, then depending on how quickly you need it, share it in the [#docs Slack channel](https://gitlab.slack.com/archives/C16HYA2P5) asking anyone there to review and merge ASAP. This does not require a post-merge review, as it involves a TW review.
- Read about [docs deploy](https://docs.gitlab.com/development/documentation/site_architecture/#deploy-the-docs-site). The key thing is to note how often docs are deployed.
  - Optionally, read the rest of the [site architecture information](https://docs.gitlab.com/development/documentation/site_architecture/) to learn how the docs site is built.
- Also remember to not take feedback personally - we all want the documentation to be accurate and easy to follow, so all feedback from the tech writers will be with this goal in mind!

### Zendesk "Document this" workflow

For those situations in which making documentation is a more time-consuming exercise, we have set up a process to automatically create an issue in [the GitLab issue tracker](https://gitlab.com/gitlab-org/gitlab/-/issues) to track documentation tasks that needs to be completed:

- Apply [the macro `General::Document This`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/Document%20This.yaml) to the ticket. This macro will apply the `create_doc_issue` tag and prefill the template for you to fill out.
- Fill out the template changing the title and the description. Example of the filled out template:

```text
CREATE DOCUMENTATION ISSUE
Title: Document how to use Y with an X
Description
There is a new cool feature Y that we released last month. It can be used with X to improve Z. We need to document how Y can be used with X.

## Test h2 header

We should remember to document:

1. requirements
1. how to enable
1. how to configure
1. how to troubleshoot
```

- Submit as internal note. When issue is created `doc_issue_created` tag will be added to the ticket.

If you need to create multiple issues using this workflow, just apply the macro once again.
The automation creates issues with [label_name\[\]=documentation&label_name\[\]=customer](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&state=opened&label_name[]=documentation&label_name[]=customer) and assigns them to the agent who submitted the internal note.

**Note:** Make sure to use the template so that your internal note is correctly parsed by the trigger.

This workflow is implemented using a [zendesk trigger](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/triggers/-/blob/master/triggers/active/Lifespan%20Stage/Create%20documentation%20issue.yaml) that parses the internal note and sends it to [Zendesk's HTTP target](https://developer.zendesk.com/api-reference/ticketing/targets/targets/) that creates a documentation issue.
