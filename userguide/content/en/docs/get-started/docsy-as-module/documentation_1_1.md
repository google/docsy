---
title: Documentation
aliases:
- /handbook/documentation/
---

GitLab documentation is crafted to help users, admins, and decision-makers
learn about GitLab features and to optimally implement and use GitLab to meet
their [DevOps needs](https://about.gitlab.com/stages-devops-lifecycle/).

The documentation is an essential part of the product. Its source is developed
and stored with the product in its respective paths within the
[GitLab repositories](https://docs.gitlab.com/ee/development/documentation/site_architecture/#architecture).
It's published at [docs.gitlab.com](https://docs.gitlab.com) (offering multiple
versions of all product documentation) and at the `/help/` path on each GitLab
instance’s domain, with content for that instance’s version.

Our goal is to create documentation that is accurate and easy
to use. The documentation should be easy to browse or search for the information you need, and
it should be easy to contribute to the documentation itself.

All standards and practices for contributing documentation are in the
[GitLab Documentation guidelines](https://docs.gitlab.com/ee/development/documentation/).

## Documentation is the single source of truth (SSOT)

See the [SSOT section in the Documentation Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot),
and especially read the [docs-first methodology](https://docs.gitlab.com/ee/development/documentation/styleguide/#docs-first-methodology).

## Contributing to the documentation

Everyone can contribute. For documentation needs resulting from the development
and release of new or enhanced features, the developer responsible for the code
writes or updates the documentation.

Technical writers monitor the planning and merging of documentation, reviewing
all changes before or after merging.

For more information on these processes, see the
[Documentation section of our Development documentation](https://docs.gitlab.com/ee/development/documentation/).

## Merging documentation

Anyone with Maintainer access is welcome to merge documentation changes to the
GitLab master or main branches, provided they believe the content is:

- Clear and sufficiently easy to understand for the intended audience.
- Technically accurate (per their own knowledge or trust in the author or SME reviewers).
- In line with GitLab [Documentation guidelines](https://docs.gitlab.com/ee/development/documentation/)
and [Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/).

GitLab technical writers review all content to confirm it is clear and
meets the structure and style guidelines, often making additional improvements.

Note that documentation doesn't need to be perfect in structure and style to
merge. It's better to publish an improved documentation page and then later
refine it than to hold a documentation page in a review process, where users
don't know it exists or are using an inferior version of the documentation page.

However, if you know or suspect that a documentation page has been merged but still needs some additional work or polish,
please create another MR or issue.

For more information, see the [Documentation section of our Development documentation](https://docs.gitlab.com/ee/development/documentation/).

## Resources about GitLab documentation

- The [Documentation Guidelines](https://docs.gitlab.com/ee/development/documentation/):
  - [Workflow](https://docs.gitlab.com/ee/development/documentation/workflow.html)
  - [Page structure and template](https://docs.gitlab.com/ee/development/documentation/topic_types/index.html)
  - [Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/)
  - [Site architecture](https://docs.gitlab.com/ee/development/documentation/site_architecture/index.html)
- The [Documentation Markdown Guide](/docs/markdown-guide/)
- The [GitLab Docs project](https://gitlab.com/gitlab-org/gitlab-docs/), which
contains the code that pulls the documentation content from multiple
repositories and builds docs.gitlab.com

## The Technical Writing team

For more information about the team and how we continually improve
the GitLab documentation, see [Technical Writing](/handbook/product/ux/technical-writing)
in the Product section of the handbook.
