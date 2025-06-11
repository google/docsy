---
title: Knowledge Base Style Guide
description: Guidelines for writing Support knowledge base articles
---

This document outlines the standards for GitLab Support's Knowledge Base documentation. These articles help address a specific customer issue in the moment and allow them to self-solve or receive quicker solutions when Support is required. The style guide helps ensure that we provide information in a consistent format and voice for our customers.

## The Knowledge Base voice

The voice in KB articles should be concise, direct, and precise. Since many users will use these articles during a stressful situation, it is important that we make the information as clear and simple as possible.

## Formatting

Follow the [Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/) and use the [recommended word list](https://docs.gitlab.com/development/documentation/styleguide/word_list/) unless otherwise specified. The important thing is that we deliver clear information following a standard template that customers know they can trust.

Pay special attention to things like:

- [Writing for localization](https://docs.gitlab.com/development/documentation/styleguide/#writing-for-localization)
- [Capitalization](https://docs.gitlab.com/development/documentation/styleguide/#capitalization), especially for feature and product names
- [Unordered and ordered lists](https://docs.gitlab.com/development/documentation/styleguide/#choose-between-an-ordered-or-unordered-list), and when to use each type
- [Acronyms](https://docs.gitlab.com/development/documentation/styleguide/#acronyms)

### File naming

File name should be as similar to the title of the article as possible. Follow the conventions in the [structure guide](https://docs.gitlab.com/development/documentation/site_architecture/folder_structure/#work-with-directories-and-files). Specifically:

- Do not use special characters, spaces, or capital letters in file names, directory names, branch names, or anything that generates a path. This will break things when submitting the article to the Support Super Form for Zendesk.
- When creating or renaming a file or directory and it has more than one word in its name, use underscores (_) instead of spaces or dashes.

### Title

The H1 header becomes the document title in Zendesk. For example:

```text
# This is the page title
```

When creating a new KB article from a template, the title must be changed to properly publish the article in Zendesk.

A good title briefly describes the content of the article while remaining concise. Only capitalize the first word and proper nouns, and refer to [capitalization](https://docs.gitlab.com/development/documentation/styleguide/#capitalization) in the Documentation Style Guide when in doubt. You can include error snippets if relevant, but keep title length in mind.

In general you should cover:

- Break/fix: The symptoms customers will see when they encounter an issue
- How-to: How to complete a specific task
- Q&A: The question a customer may have

Examples:

- Break/fix: [504 Gateway timeouts and performance degradation after losing PostgreSQL nodes](https://support.gitlab.com/hc/en-us/articles/16783619814044-504-Gateway-timeouts-and-performance-degradation-after-losing-PostgreSQL-nodes)
- How-to: [How to update the Primary email address of multiple users](https://support.gitlab.com/hc/en-us/articles/16784431039132-How-to-update-the-Primary-email-address-of-multiple-users-LDAP-and-SAML)
- Q&A: What are the required steps to upgrade my environment?

### Description

This section describes the symptoms, task, or situation that would need a solution. At the moment, we believe the first 140 characters will be indexed for search engine optimization (SEO).

- Write for the issue encountered, not theoretical situations. Add unconfirmed situations as an additional note if necessary.
- Entries should be listed in order of significance from top to bottom.
- Include as much relevant context as possible. Every small symptom is an extra data point to help the customer self-diagnose.
- Include the exact error or message a user would encounter as text in the description to aid with searchability. Avoid images of error messages.
- Error messages should be put in block quotes.
- Use an unordered list for multiple items.

### Environment

The environment quickly highlights what custom configurations, installation types, or versions are relevant to the KB. Be as specific as possible.

- Use an unordered list when possible
- Impacted offerings - aligns with the Offering section of Docs pages
- Impacted versions - highlights affected versions.
  - If the document affects all versions of the product, use your best judgement to either omit the versions section, or state that all versions are affected.
  - Use [earlier](https://docs.gitlab.com/development/documentation/styleguide/word_list/#earlier) and [later](https://docs.gitlab.com/development/documentation/styleguide/word_list/#later) when talking about version numbers.
  - Note the product with the version, like `GitLab 17.4.4` or `GitLab Runner 14.3.1`.
  - Always indicate which patch versions are affected, for clarity. This differs from the Documentation Style Guide.
    - If all patch versions of a minor version are affected, say `All GitLab 17.4.x versions`.
    - If a fix was backported, say `GitLab 17.4.0 to 17.4.6, fixed in 17.4.7`. You can repeat this if multiple minor versions are affected.

Some examples:

```markdown
- **Impacted offerings:**
  - GitLab Dedicated
  - GitLab Self-Managed
- **Impacted versions:**
  - GitLab 16.3.0 to 16.3.7, fixed in GitLab 16.3.8
  - GitLab 16.4.3 to 16.4.5, fixed in GitLab 16.4.8
```

```markdown
- **Impacted offerings:**
  - GitLab Self-Managed
- **Impacted versions:**
  - GitLab 17.0.4 and later
- GitLab Geo is configured
- LDAP is configured
```

```markdown
- **Impacted offerings:**
  - GitLab.com
- Project is configured with SAST scanning
```

### Solutions and workarounds

The solution section clearly lists the steps a user must follow to resolve the issue. You can preface the steps with a high-level summary. If there is a solution and a workaround, add the workaround as a level 3 (###) sub-heading.

1. Change the title of this section to best fit its content: Solution or Workaround
1. Describe steps needed to resolve or work around the issue. Steps should be as concise as possible. For example:

    ```text
    1. On a rails or database node, connect to the database with `sudo gitlab-psql connect`
    1. Run:
    
        ```pgsql
        --- comment: explain what complicated command does if not obvious
        <complicated command>
        ```
    ```

- For different environments, list commands as sub-items:
  - Linux: `<command>`
  - macOS: `<command>`
- Use ordered lists for tasks that must be completed sequentially. Use `1.` for all items to allow for steps to be added or removed in the future.
- Use unordered lists for unordered steps.
- Link to pre-existing documentation when possible.

### Cause

This section describes **what** caused the issue to happen and **why** it was introduced, if known.

The cause does not immediately diagnose or solve the issue, which is why it is a separate section and listed after the description and solution.

If the cause is still under investigation, state that the cause is unknown.

Link to docs, blog posts, issues, and other supporting materials inline as necessary.

### Additional information

Providing additional information is optional, but can be useful for sharing related topics that are not addressed in other sections. While most sections should be concise and clear, we can dive deeper into information or steps such as:

- Specific locations of logs, errors, or other data mentioned in the description
- Alternative commands to find information in the solution
- Related feature requests worth upvoting

### Related links

Optional. Add links to relevant feature requests, bug issues, or other info as necessary. Follow the format used for [related topics](https://docs.gitlab.com/development/documentation/topic_types/index/related-topics).

Even when links have been included inline in other sections, it's useful to consolidate the links in one section as well, for quick reference.

## Integrate pre-existing documentation when possible

We should strive to re-use existing documentation when possible. If steps to a solution already exist within our documentation or another KB, link to that section and provide additional steps and context to the KB as necessary. Any newly found steps to a pre-existing solution should be merged into that solution and referenced in the new article.

Examples:

- [Update to Solution to link to a doc rather than duplicating information](https://gitlab.com/gitlab-com/support/support-pages/-/merge_requests/98/diffs?diff_id=1210778953&start_sha=a6936a6ac8d26199db694ad1e44198368edc7efd)
- [Discussion on whether to update steps in the KB or in Docs](https://gitlab.com/gitlab-com/support/support-pages/-/merge_requests/98#note_2245546605)
