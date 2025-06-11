---
title: Solutions Architects GitLab Docs Section
description: "Purpose and contribution process for the GitLab Solutions Documentation section."
---

## Purpose

The overarching purpose is to ensure that solutions that are built with GitLab have a place in GitLab's documentation to assist with discovery and endorsement of such solutions as being recognized and in some cases actively maintained by GitLab.

Official GitLab documentation is managed with regard to industry standard excellence in software product documentation. In this regard the official documentation:

- is scoped to focus only on official features in GitLab itself.
- follows specific structures for pages.
- how to tutorial content generally stays focused on small feature set scenarios as they tend to be a function of documenting the same features.

In the past, solution oriented items have also been published in GitLab's blog. The Solutions documentation area differs from blogs in the following ways:

- Blog articles are edited for brevity, where solutions are edited to ensure specific features and functions are shown to work, regardless of length.
- Blog articles are known by the reader to age and become less accurate over time, where solutions documented items are intended to be maintained in a working state.
- Blog articles becomes harder to find in searches as they age, where solutions should continue to be relatively easy to find.

The creation of the Solutions documentation section allows the documentation of solutions, which are best formulated in ways that are generally broader than product documentation in some of these ways:

- can focus on features in partner products that integrate with GitLab
- can focus on solutions that may leverage features from many parts of GitLab and in combination with non-GitLab technologies.

The solutions area is under complete stewardship of the SA team and are not actively reviewed by Tech Writing. The solutions documentation section will strive to meet the excellence bar set by GitLab tech writing. All contributors are encouraged to take the [GitLab Internal Tech Writing Course](https://university.gitlab.com/courses/gitlab-technical-writing-fundamentals).

## Content scope

While the solutions area is more flexible to account for solution oriented assets, it must also be fresh and accurate. A content freshness review process is identified below. Additionally, this content scope helps ensure more volatile information is not stored as documentation as it generally leads to editorial overwhelm.

| Content Example                                              | In or Out of Scope | Notes                                                        |
| ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| Solutions Indexes that point to solutions inside and outside of GitLab. | In Scope           |                                                              |
| Cloud integration resources - where there may be many points of integrations authored by both companies. | In Scope           |                                                              |
| Detailed step-by-step tutorials and working code examples that will be maintained. | Out of Scope       | Step-by-Step tutorials stored in a GitLab project, with a single line reference to it's existence in Solutions documentation |
| Working code or step-by-step tutorials that are meant to be a one-time contribution to the solution ecosystem. | Out of Scope       | Published as a blog - which carries the expectation that it was working when published, but will age with time. |
|                                                              |                    |                                                              |

## Documentation Merge Process

It is important that MRs for Solution Docs use the appropriate MR Template so that the documentation change is not routed through the normal tech editing process and CI jobs - but through the optimized workflow of Solutions Docs instead.

1. Prepare your changes in https://gitlab.com/gitlab-org/gitlab
1. **IMPORTANT:** When preparing your Merge Request, use the MR Template called "Documentation SA Solutions Docs"
   1. This leaves off the label ~"docs::improvement" and adds the label ~"Solutions" (which also affects which CI jobs run)
   1. This adds the appropriate reviewers (which can be seen in the MR template here: https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/merge_request_templates/Documentation%20SA%20Solutions%20Docs.md)
