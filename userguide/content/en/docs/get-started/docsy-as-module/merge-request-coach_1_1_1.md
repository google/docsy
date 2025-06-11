---
title: "Merge Request Coach"
---

The main goal of a Merge Request Coach is to help
[merge requests from the community](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=opened&label_name[]=Community%20contribution)
get merged into GitLab.

## Responsibilities

- Triage merge requests labeled [`~"Community contribution"`](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&state=opened&label_name[]=Community%20contribution) according to the [Wider Community Merge Request Triage policy](/handbook/engineering/infrastructure/engineering-productivity/merge-request-triage).
- Close merge requests that we don't want, with a clear explanation on the
  reasons why, so that people don't feel discouraged but incentivized that they can make a difference next time.
- Help contributors to get their merge requests to meet the
  [contribution acceptance criteria](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria).
- Act on the merge requests assigned to you on the daily [newly created community contribution merge requests triage report](/handbook/engineering/infrastructure/engineering-productivity/triage-operations/#newly-created-community-merge-requests).
- Help find and assign merge requests to available reviewers.
- If the contributor is unresponsive or if they are unable to finish it, finish
  their merge requests. Also, see the [closing policy for merge requests](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#merge-request-ownership).
- Make it easy to contribute to GitLab even for people who are new to Ruby,
  JavaScript, Golang, etc. or programming entirely. For example, you can add any hints or possible fixes on issues that are open for community contribution.
- Join and actively follow the internal [`#mr-coaching` Slack channel](https://app.slack.com/client/T02592416/C2T9APP9C) and the external [GitLab Community Discord](https://discord.gg/gitlab) to assist contributors and fellow MR Coaches when they need help or to discuss best practices for collaboration.
- Ensure the content on the [MR Coaches handbook pages](/handbook/marketing/developer-relations/contributor-success/merge-request-coach-lifecycle/) stays relevant, up-to-date and keeps evolving.
- Participate in the discussion and voting for the [release post MVP](/handbook/marketing/blog/release-posts/#mvp).

### Specialties

We are working on adding the following Merge Request Coach Specialties

- Development - for changes related to feature and bug fixes.
- Technical Writing - for changes related to our documentation.
- Quality - for changes related to our tests and tooling (MR workflow, and pipeline configuration).

## Collaboration guidelines

As a Merge Request Coach you will collaborate with people from the wider GitLab community and respond or close their merge requests per need.

### Responding to merge requests

With each merge request opened by a wider community member, it's important to note GitLab is **not** their main focus. They have contributed to GitLab out of kindness, and we should aim to give them the space they need to fulfill their merge request.

After a merge request from a wider community member has been submitted and you have provided feedback, allow a period of up to **two weeks** for the community member to continue their work before following up with the community member through a comment in the merge request.

The Danger bot performs many useful activities including reviewer roulette.
Merge requests from forks outside GitLab require [setup](https://docs.gitlab.com/ee/development/dangerbot.html#configuring-danger-for-forks) to run it.
If this setup is missing, you can run the pipeline yourself and it will use your token.
Or [spin the roulette manually](https://gitlab-org.gitlab.io/gitlab-roulette).
Please verify that the merge request contains no abusive changes before doing so.

#### Dealing with trivial merge requests

Some MRs may not need triaging and as an MR coach you should feel empowered to approve an MR immediately before passing it to the appropriate maintainer(s) for merging if appropriate. Examples of these types of MRs include:

- MRs where the content is tightly related to your domain knowledge.
- MRs that include only whitespace or stylistic changes.
- MRs that resolve ignored Rubocop violations.

#### Giving a contributor more CI minutes

When a contributor runs out of CI minutes, you can either:

- Move the MR into the [community fork](https://gitlab.com/gitlab-community/) to take advantage of the unlimited CI minutes and many other [benefits](https://gitlab.com/gitlab-community/#why) there.
- As a GitLab Team member you can run the pipeline for the contributor. This is useful if the MR is close to completion and moving it would not be efficient.

### Finishing merge requests

Sometimes a contributor will either become unresponsive or state that they will not be able to finish a merge request. If a Merge Request Coach deems the effort worthwhile and has the knowledge and the bandwidth to complete it, they will bring the MR to the finish line instead of [closing it](#closing-merge-requests).

Steps:

 1. Close the original merge request and say that you will finish it.
 1. Check out the branch locally.
 1. Make sure a changelog git trailer crediting the author exists.
 1. Add your own commits to improve and finish the original work.
 1. Don't erase the author's commit.
 1. Push to a new branch and open a new merge request.

### Closing merge requests

Sometimes community contributions become stale or obsolete and changes become no longer relevant or applicable. If the changes are no longer needed, it's fine to close the merge request whether the author is responsive or not. If there's an open discussion or questions for the author, allow some time for them to get back to the discussion before closing the merge request.

In all cases, **always** provide some context on why the merge request is being closed as this can lead to fewer questions later on and create a point for future reference which would be useful for team members and community contributors.

Last but not least, if there's an opportunity to provide any help or pointers for future contributions try to do that. This could be pointing to [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html), documentation on [how to contribute](https://docs.gitlab.com/ee/development/contributing/#how-to-contribute), or [getting help](https://docs.gitlab.com/ee/development/contributing/#get-help) while [contributing](https://about.gitlab.com/community/contribute/) to GitLab.

#### Closing empty merge requests

Sometimes MRs are opened by wider community contributors by accident with no changes. In this instance close the merge request straight away, without triage labels, with a polite message to the contributor asking them to reopen the merge request once there is something to review. It may be that they intended to open a merge request at some point and we want to ensure that they feel their contribution will be welcomed at an appropriate time.

An example response could be:

```markdown
Hi {CONTRIBUTOR_NAME} 👋 \
Thanks for contributing to GitLab 🙇 ✨ \
It seems that this MR does not contain any changes 🤔 \
Because of that I will close this MR but please feel free to reopen if you are still planning to contribute ❤ \
If you have any other questions please don't hesitate and ping me 🙂
```

More information on the Merge Request Coach role is available in the [handbook](/handbook/marketing/developer-relations/contributor-success/merge-request-coach-lifecycle/).
