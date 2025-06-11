---
title: Code Review Guidelines
description: "Code reviews are mandatory for every merge request, you should get familiar with and follow our Code Review Guidelines."
---

## Overview

Code reviews are mandatory for every merge request, you should get familiar with and follow our [Code Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html).

These guidelines also describe who would need to review, approve and merge your, or a community member's, merge request. They also describe the [review response time SLO's](#review-response-slo) team members have to abide by.

## Values

Every reviewer at GitLab must strive for our [reviewer values](/handbook/engineering/workflow/reviewer-values/).

## Reviewer

All GitLab engineers can, and are encouraged to, perform a code review on merge requests of colleagues and community contributors. If you want to review merge requests, you can wait until someone assigns you one, but you are also more than welcome to browse the list of open merge requests and leave any feedback or questions you may have.

You can find someone to review your merge requests by looking on the [team page](/handbook/company/team/), or on the list of [GitLab Engineering Projects](/handbook/engineering/projects/), both of which are fed by YAML files under `data/team_members/person/*`.

You can also help community contributors get their merge requests ready, by becoming a [Merge Request Coach](/job-families/expert/merge-request-coach/).

Note that while all engineers can review all merge requests, the ability to *accept* merge requests is restricted to maintainers.

## Maintainer

Maintainers are GitLab engineers who are experts at code review, know the GitLab product and codebase very well, and are empowered to accept merge requests in one or several [GitLab Engineering Projects](/handbook/engineering/projects/).

Every project should have at least two maintainers, but most should have more. Some projects have separate maintainers for different specialties. For example, [the main GitLab codebase](https://gitlab.com/gitlab-org/gitlab) has separate maintainers for frontend, backend, and database.

Great engineers are often also great reviewers, but code review is a skill in and of itself and not every engineer, no matter their seniority, will have had the same opportunities to hone that skill. It's also important to note that a big part of being a good maintainer comes from knowing the existing product and codebase extremely well, which lets them spot inconsistencies, edge cases, or non-obvious interactions with other features that would otherwise be missed easily.

Becoming a reviewer/maintainer means you are taking on a broader responsibility beyond your immediate group. Your available capacity should be adjusted accordingly to make room for you to work effectively. There is no strict formula for this as each project comes with a different workload, but do make sure to discuss this with your manager to avoid burnout and to ensure your manager understands how this may impact your team's capacity.

To protect and ensure the quality of the codebase and the product as a whole, people become maintainers only once they have convincingly demonstrated that their reviewing skills are at a comparable level to those of existing maintainers.

As with regular reviewers, maintainers can be found on the [team page](/handbook/company/team/), or on the list of [GitLab Engineering Projects](/handbook/engineering/projects/).

### Senior+ Maintainers

For senior+ engineers, being a maintainer is part of their job family unless they have discussed with their manager or Team Member Relations in line with our [reasonable accommodation process](/handbook/people-policies/inc-usa/#reasonable-accommodation). Any of the [engineering projects](/handbook/engineering/projects/) considered as part of the product are suitable, provided the individual has been a contributor and an active reviewer of the project. Effective 2022-08-01, we use the following table for the timeframe expectations of maintainership:

| Description | Timeframe |
| ----------- | --------- |
| Intermediate Engineers | Maintainership is optional |
| Existing Senior+ Engineer | Existing senior+ engineers who are not already maintainers are encouraged to complete the trainee program in support of our team's productivity and motivation. There is no expected completion timeframe of the trainee program. |
| Newly hired Senior+ | During onboarding, newly hired senior+ engineers will be asked to become trainee maintainers instead of reviewers. We expect their maintainership to be complete within 12 months of their onboarding completion. |
| Promotions to Senior | For engineers moving into the Senior role, we expect that they have already become a maintainer prior to promotion. |

### Meeting the reviewer/maintainer

Communication happens easier when you are familiar with the person reviewing the code. Take opportunities (for example coffee chats) to get to know reviewers to break the ice and facilitate future communication.

### How to become a project maintainer

**This applies specifically to backend, frontend and database maintainers. Other areas (docs, etc.) may have separate processes documented below.**

Before considering maintainership, first you should be a contributor. You should have made at least a few feature or maintenance contributions to the project before you can become a reviewer in the trainee maintainer process. These contributions should be complex enough to give you an understanding of the project's unique domain and design.

#### Maintainership check-ins and mentorship

Interested reviewers should check in regularly with their manager/mentor to discuss progress towards maintainership and review any recent detailed reviews, for example during their 1-on-1s. Reviewers are encouraged to also seek out a [maintainer mentor](#reviewer-mentorship-program) for further perspective on their reviews. Reviewers are encouraged to think of their eligibility for maintainership in the terms of "I could be ready at any time to be a maintainer as long as it is justified".

You can also open a **trainee maintainer issue** using this [template](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/issue_templates/trainee-maintainer.md) allowing you to build up examples that will translate into your final merge request.

#### Merge request feedback for reviewers 

After each review is complete, the reviewer should write up a justification about why they believe the merge request is ready to merge. This justification is then reviewed by the maintainer and if the maintainer agrees with the justification they should add a 👍 reaction to the comment, even if they have additional non-blocking comments. The maintainer should leave a comment highlighting any blocking concerns that were missed in the initial review.

#### Maintainership nomination process

At any time, the manager/mentor may choose to open a merge request, adding the reviewer as a maintainer. This merge request should have a justification from the manager/mentor as to why the reviewer should become a maintainer. You are also welcome to open this merge request yourself at any time. There are [merge request templates available](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/.gitlab/merge_request_templates) to help you with the content and steps.

#### Pre-requesites for Maintainership

Before opening the merge request, the author should:

1. Review justifications for several of the reviewer's recent merge requests.
1. Reach out to at least two of the maintainers privately for feedback on the reviewer. The reviewer may have some suggestions on who these maintainers could be.

#### Request Maintainership feedback

Before merging, the manager/mentor should:

1. Mention the maintainers from the given specialty and ask them to provide feedback to the manager/mentor directly. Emphasize that any negative feedback should be communicated privately to the manager/mentor, not in the merge request. This is inline with our Collaboration value that [Negative feedback is 1-1](/handbook/values/#negative-feedback-is-1-1). Refer to the additional guidance for [managing negative feedback](#managing-negative-feedback).
1. Leave the merge request open for 1 week, to give the maintainers time to provide feedback to the manager/mentor.
1. Have at least 2 approvals from existing maintainers.

##### Managing negative feedback

**If the manager/mentor receives private feedback indicating the reviewer is not ready to become a maintainer**:

1. The manager/mentor should review the concerns raised and decide whether it's substantial enough to close the merge request.
1. The manager/mentor could then close the merge request with a comment about there being feedback for the reviewer to work on, but keep the feedback confidential. 
1. The manager/mentor would provide the feedback directly to the reviewer in a one-to-one conversation. This approach allows the reviewer to address the gaps before being re-submitted for maintainer status. The earlier the manager/mentor can solicit and receive this feedback, the better.

Handling disagreements in maintainer readiness:

The manager/mentor should seek to understand any concern raised by a current maintainer when they disagree with a trainee maintainer's readiness or qualifications. Use the following guidelines to determine if a single disapproval should veto approvals received in favor of the trainee maintainer.

1. In keeping with other values, the maintainer's concern(s) should not be personal or prejudicial.
1. The maintainer's concern(s) must be consistent with the [Responsibilities of a Maintainer](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-maintainer).
1. The maintainer's concern(s) should be grounded in fact that:
1. the trainee maintainer consistently does not perform [MR reviews in a conventional manner](https://docs.gitlab.com/ee/development/code_review.html#reviewing-a-merge-request), or
1. the trainee maintainer has consistently been irresponsible in ensuring our [code quality and standards](/handbook/engineering/development/principles/#code-quality-and-standards) as isolated incidents are expected in the training process.

In order to better inform a decision, the manager should privately reach out to 2 existing maintainers without sharing any personal information regarding the feedback. The manager is ultimately responsible for the readiness of the trainee maintainer and owns the decision to entrust the trainee maintainer with maintainer responsibilities.

#### Maintainership approval

After merging, the manager should:

1. Announce this change in the applicable channels listed under [Slack section of the engineering communications handbook](/handbook/engineering/engineering-comms/#slack) and `#backend_maintainers`/`#frontend_maintainers` and `#backend`/`#frontend`.
1. Post an update in the **Engineering Week-in-Review document**. The agenda is internal only, please search in Google Drive for 'Engineering Week-in-Review'.

### Additional steps for approved project maintainers

Interested reviewers for the projects below should complete the listed tasks in addition to what is described in [How to become a project maintainer](#how-to-become-a-project-maintainer) to progress from a reviewer to a maintainer.

#### Project maintainer process for  `gitlab-rails`

- For Backend Maintaiers, ping to `@gitlab-org/maintainers/rails-backend`
- For Frontend Maintainers, ping to `@gitlab-org/maintainers/rails-frontend`

#### Project maintainer process for `gitlab-database`

- Familiarize with [database review process](https://docs.gitlab.com/ee/development/database_review.html).
- Familiarize with [migration helpers](https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/database/migration_helpers.rb) and review usage in existing migrations.
- Familiarize with best practices in [database guides](https://docs.gitlab.com/ee/development/database/index.html).
- Read [Understanding EXPLAIN plans](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html).
- Get yourself added to [`@gl-database`](https://gitlab.com/groups/gl-database/-/group_members) group and respond to @-mentions to the group (reach out to any maintainer on the group to get added). You will get TODOs on gitlab.com for group mentions..
- Create an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) for [`psql`/`AllFeaturesUser` access to database lab/postgres.ai](https://docs.gitlab.com/ee/development/database/database_lab.html#access-database-lab-engine) if you do not already have `AllFeaturesUser` access.

Tips:

- If you'd like a dashboard limited to just reviews where you applied the `~"database::reviewed"` label,
  reach out to the database group manager to get one.

#### Project maintainer process for `gitlab-components`

[`gitlab-components`](https://gitlab.com/components)

- Review our [documentation and best practices for creating CI/CD components](https://docs.gitlab.com/ee/ci/components/).
- Familiarize with our [documentation on GitLab-maintained components](https://docs.gitlab.com/ee/development/cicd/components/).
- Develop one or more components to familiarize yourself with the development process.
- Create a merge request and assign the merge request to your manager for you to be added as a CI/CD components maintainer. Be sure to cite references for the CI/CD components you have developed. (See [MR example](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/132498))
- Ping the existing maintainers (`@gitlab-org/maintainers/ci-components`) in the MR for review and feedback.
- Have at least 2 approvals from existing maintainers in order to merge the MR.

Upon approval, the maintainer who merges the MR will:

- Add the newly approved maintainer to the CI components maintainer group (`@gitlab-org/maintainers/ci-components`).
- Announce in [`#ci_components_maintainers`](https://gitlab.slack.com/archives/C06AQBJETRR) and post an update in the *Engineering Week-in-Review document*

#### Project maintainer process for `design.gitlab.com` or `gitlab-svgs`

[`design.gitlab.com`](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) or [`gitlab-svgs`](https://gitlab.com/gitlab-org/gitlab-svgs)

- Understand [how to become a maintainer](/handbook/product/ux/pajamas-design-system/design-review/#how-to-become-a-maintainer).
- All designers are maintainers of [`gitlab-design`](https://gitlab.com/gitlab-org/gitlab-design) project. If you are interested in becoming a Maintainer of UI (`.scss`) for `gitlab`, and `gitlab-ui` projects, please follow the [Engineering Review Workflow](/handbook/engineering/workflow/code-review).
- It is up to you to ensure that you are getting enough MRs to review, and of varied types. You could also seek out more reviews from your team, for example by asking for reviews on the `#ux` and `#pajamas-design-system` Slack channels. If you are not receiving enough MRs to advance in your training, be proactive and work on your own improvements to Pajamas. This will demonstrate overall understanding of the product, as well as quality contributions, and help propel your progress. Maintainers are available to help guide you.
- Your reviews should aim to cover maintainer responsibilities as well as reviewer responsibilities. Design Maintainers should be focused on MRs that have an impact on usability, iterate on existing user experience, and/or include usage of design guidelines, standards, and patterns. Your approval means you think it is ready to merge.
- As maintainer, you must keep [relying on others](/handbook/values/#its-impossible-to-know-everything) for the expertise they have that you don't. In the MR description, highlight the efforts that showcase your results at a maintainer-level, what skills you want to continue working on, and add a link to this issue. ([Example](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2395)).

#### Project maintainer process for `gitlab-quality`

[`gitlab-quality`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)

- Choose which Quality project(s) you would like to become a maintainer for:
  - [`GitLab (/qa)`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
  - [`GitLab-QA`](https://gitlab.com/gitlab-org/gitlab-qa)
  - [`GitLab Triage`](https://gitlab.com/gitlab-org/gitlab-triage/)
  - [`Triage Ops`](https://gitlab.com/gitlab-org/quality/triage-ops/)
  - [`GitLab CustomersDot (/qa)`](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/qa/)
  - [`GitLab Environment Toolkit (GET)`](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
  - [`GitLab Performance Tool (GPT)`](https://gitlab.com/gitlab-org/quality/performance)
- The requirements for each project is different, please make sure to read the [maintainer section in the Quality handbook](/handbook/engineering/infrastructure/engineering-productivity/project-management/#reviewers-and-maintainers).

#### Project maintainer process for `gitlab-secure-analyzers`

[`gitlab-secure-analyzers`](https://gitlab.com/gitlab-org/security-products/analyzers)

- Understand our [Secure Team standards and style guidelines](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines).
- Understand our [Secure Release Process](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#versioning-and-release-process).
- Understand our [Secure QA Process](/handbook/engineering/development/sec/secure/qa_process/).

#### Project maintainer process for `gitlab-elasticsearch-indexer`

[`gitlab-elasticsearch-indexer`](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

- Complete [`golang` training](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md).
- Review the [GitLab Elasticsearch Indexer development and release](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/blob/main/PROCESS.md) process.
- Join the `#g_global_search` Slack channel.
- Work on issues to gain familiarity with the project.
- *Optional:* Reach out to an [existing maintainer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/project_members?with_inherited_permissions=exclude) to [help you become](#how-to-become-a-project-maintainer) a maintainer.

#### Project maintainer process for `customers-gitlab-com`

[`customers-gitlab-com`](https://gitlab.com/gitlab-org/customers-gitlab-com)

- Understand our [standards and style guidelines](https://docs.gitlab.com/ee/development/development_processes.html).
- Understand the [software architecture](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/doc/architecture) used in Fulfillment systems.
- Read through [CustomersDot documentation](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/index.md).
- Contribute to issues and gain familiarity with the project.
- Contribute to reviews demonstrating domain expertise and consistency with reviewer responsibilities.

#### Project maintainer process for `gitlab-secure-license-db`

[`gitlab-secure-license-db`](https://gitlab.com/gitlab-org/security-products/license-db)

- Familiarize with [GitLab Go standards and style guidelines](https://docs.gitlab.com/ee/development/go_guide/).
- Complete [Golang training issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md) if you don't have prior experience with Go.
- Watch [External License DB Architecture and Repository Walkthrough](https://www.youtube.com/watch?v=5b5QNJNwoJ8)
- Review [Fullstack Development of LicenseDB guideline](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/blob/main/docs/fullstack_development.md).
- Understand how to release and [deploy](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/merge_requests/162) new changes to the components.
- Understand how [the scheduled pipelines](https://gitlab.com/gitlab-org/security-products/license-db/deployment/-/pipeline_schedules) are used for the deployment project.
- Author or review 3 merge requests in total to a specific project in the `license-db` namespace. Maintainership is granted per project.

#### Project maintainer process for `gitlab-chart`

[`gitlab-chart`](https://gitlab.com/gitlab-org/charts/gitlab)

- Familiarize yourself with [Distribution's merge request workflow](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)
- Familiarize yourself with the [architecture](https://docs.gitlab.com/charts/architecture/index.html) and [style guide](https://docs.gitlab.com/charts/development/style_guide.html) of the GitLab Helm chart.
- Understand the relation between the [GitLab Operator and the GitLab Helm chart](https://docs.gitlab.com/operator/developer/charts_dependency.html).
- Contribute to issues and review merge requests.
- Understand how the [GitLab Helm chart is tested using rspec](https://docs.gitlab.com/charts/development/rspec.html).

#### Project maintainer process for `gitlab-operator`

[`gitlab-operator`](https://gitlab.com/gitlab-org/cloud-native/gitlab-operator)

- Familiarize yourself with [Distribution's merge request workflow](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/#workflow)
- Familiarize youself with [GitLab Go standards and style guidelines](https://docs.gitlab.com/ee/development/go_guide/).
- Understand how [custom resources and controllers](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) work.
- Familiarize yourself with the following libraries and tools:
  - [operator-sdk](https://sdk.operatorframework.io/docs/overview/)
  - [controller-runtime](https://pkg.go.dev/sigs.k8s.io/controller-runtime)
  - [Operator Lifecycle Manager](https://olm.operatorframework.io/docs/)
  - [envtest](https://book.kubebuilder.io/reference/envtest.html)
- Contribute to issues and review merge requests.
- Understand the relation between the [GitLab Operator and the GitLab Helm chart](https://docs.gitlab.com/operator/developer/charts_dependency.html).

#### Project maintainer process for `ai-gateway`

[`ai-gateway`](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist)

- Understand the [software architecture](/handbook/engineering/architecture/design-documents/ai_gateway/).
- Setup [GitLab Duo for local development](https://docs.gitlab.com/ee/development/ai_features/#instructions-for-setting-up-gitlab-duo-features-in-the-local-development-environment).
- Read through [Maintainership documentation](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/maintainership.md)
and follow the steps outlined there to become a maintainer.

#### Learning to be a maintainer

While any reviewer may be recommended by their manager to become a maintainer at any time, reviewers who wish to become maintainers should follow a few basic steps on each review in order to get into a maintainer mindset, and learn from feedback from maintainers.

Create a merge request and indicate your role as a `project-name: trainee_maintainer` in your [team member entry](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person). Assign MR to your manager for merge.

After each review, reviewers should summarize why they believe a merge request is ready to be merged:

For example:

> Looks good!  I believe this MR resolves the issue and it looks safe because the code change is relatively isolated.
>
> LGTM! I feel this MR is a good iteration. And it has low risk because it is behind a feature flag.

Maintainers should respond to the comment from the reviewer with a 👍 if they agree, and upon merging if there were additional comments they feel should have been caught, they should ping any reviewers so they are aware of the comments.

Some reviewers find it helpful to track their progress. This is not required, but a few ways people have done this are:

- Keep an issue with all of the various reviews and feedback comments from maintainers they have received. There are some tools to help with this type of issue:
  - https://gitlab.com/nolith/review-tanuki
  - https://gitlab.com/caalberts/review-tanuki
  - https://gitlab.com/arturoherrero/trainee
  - https://gitlab.com/knejad/gitlab-career-development#mr-reviews
- Use an emoji to mark all MRs they received feedback from maintainers on so they are easily searchable.

#### After becoming a maintainer

If you've become a new maintainer, follow these instructions to request relevant permissions that will allow you to fulfill your role:

- Join the maintainer's group channel on Slack: `#frontend_maintainers`, `#backend_maintainers`, etc.
- Ask the maintainers in your group to invite you to any maintainer-specific meeting if one exists.
- Request access to the GitLab maintainer group you belong: [frontend](https://gitlab.com/gitlab-org/maintainers/frontend), [backend](https://gitlab.com/gitlab-org/maintainers/rails-backend), or [database](https://gitlab.com/gitlab-org/maintainers/database).
- Request maintainer permissions on the projects you will act as a maintainer using the [Single Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) issue template. Once you've created the issue, request another maintainer to grant you those permissions.

### Reviewer mentorship program

Training and onboarding new maintainers is an important process. As the engineering team grows and the total number of MRs rapidly expands, the number of MR reviews per maintainer quickly becomes unsustainable.

[Recent research](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/8504) has shown that the trainee process for new maintainers is hindered by several key factors:

- Reviewers self-perceived readiness and confidence
- Reviewers ability to review a substantial quantity of MRs
- Reviewers ability to review a diversity of MRs covering enough breadth across the codebase

#### Structure

1. Participation is voluntary for both maintainers and reviewers.
1. Maintainers may directly mentor up to 4 reviewers at a time.
1. Mentor / reviewer assignments are coordinated within a [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) file.
1. New reviewers need to locate an existing maintainer that has an opening available in [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) and contact the maintainer directly.
1. Every 6 weeks the maintainer will check-in with each reviewer. This could happen async or via Coffee chat.
1. The goal of the checkin is to: review MRs, answer questions, clarify any doubts, and track readiness toward graduating.
1. Mentorship is capped at 12 months by which the reviewer should be prepared to graduate.
1. At least 1 additional check-in should be scheduled once the reviewer has graduated to celebrate the achievement and answer any further questions.
1. Make sure to remove graduated reviewers from the [maintainer_mentorship.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/maintainer_mentorship.yml) file to make space for new mentees.

#### Benefits

1. It develops and expands mentorship skills among maintainers
1. Gives reviewers a regular touch point for skilling-up in deficient areas
1. Creates stronger networks amongst reviewers/maintainers than currently exists
1. Mentoring directly under a maintainer should catalyze more competence and confidence in taking ownership of the GitLab codebase.

##### Transitioning away from being a reviewer/maintainer

After consultation with your manager, you may wish or need to transition away
from being a reviewer/maintainer. Regardless of the circumstances, it's
perfectly OK for this to happen! Responsibilities and workloads change; projects
evolve. So it's important to ensure your time is spent on the areas that are
most important.  To make the change official and to be removed from [reviewer roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette):

1. See the [Team Member Database](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/team_database.md)
   document for how to update your YAML file.
1. Create a new MR and assign the MR to your manager.

##### Returning to become a reviewer/maintainer

After a period of transitioning away from being a reviewer/maintainer, you may
wish to return to performing these duties. To make the request official, see
the section on [how to become a project maintainer](#how-to-become-a-project-maintainer), creating
the tracking issue and Merge Request, referencing previous tracking issue(s)
and Merge Request(s) for context. The newly created Merge Request should be
assigned to your manager for immediate review as the process can usually be
fast tracked.

### Maintainership process for smaller projects

**This is a general purpose template that projects belonging to a specific group and/or projects with less than 10 internal contributors can use to define and document their maintainership process.**

Projects may adopt these guidelines for maintainership to help grow maintainers in projects where there are not enough maintainers.

- All team members should consult the [engineering development roles](/job-families/engineering/development/) and become a reviewer or maintainer.
- Add a project specific maintainer process under [How to become a project maintainer](#how-to-become-a-project-maintainer). A [lightweight template](#maintainer-process-template) is provided.
- Enable Danger Review using [`simple_roulette`](https://gitlab.com/gitlab-org/ruby/gems/gitlab-dangerfiles/-/tree/master#simple_roulette) within the project to identify MR reviewers.
- Reduce the number of Merge Request reviews required to be considered a maintainer.
- Count work on the project itself as progress for maintainership.
- Require a maintainer mentor to help speed up the process.
- Curate some practice MRs based on past reviews. Create copies of the MRs in a closed state and provide the links in the project maintainership process.
- Consider creating project-specific development guidelines if they don't already exist for the project.
- Add instructions on how to become a project maintainer to the project README.

#### Accelerated maintainer onboarding for smaller projects

Smaller projects with a limited number of maintainers can benefit from an accelerated onboarding process. This process is less involved than the main GitLab maintainership, mainly because there is not enough feature work and MRs in these smaller projects. Each project can modify this process to fit their needs.

The onboarding process consists of the following steps:

- Establish the criteria for becoming a maintainer and the process for onboarding new maintainers and document them on an issue. For example:
  - Eligible engineers: Everyone who wants to work with TypeScript.
  - Training: Recorded code walk-through and interactive pairing sessions.
  - Criteria for becoming a maintainer: Self-selection after the training based on confidence in the codebase.
- Share knowledge by pair programming on an end-to-end feature. A current project maintainer will host a series of pairing sessions to educate potential maintainers. In the VS Code Extension pilot, we changed the implementation of one of the VS Code commands in four one-hour sessions spread over four weeks.
- Schedule the code walk-through and pairing sessions with potential new maintainers. Determine the appropriate amount of time and number of sessions needed to provide a comprehensive understanding of the codebase.
- In the pilot program, we also considered that each potential maintainer will do X MR reviews, but there wasn't enough MRs in the project.
- After you design the process, ask for feedback from potential new maintainers. They might prefer a different mix of walk-throughs, pairing sessions and other resources.

By following this onboarding process, projects can efficiently add new maintainers with a solid understanding of the codebase and the project's business logic. An example of this process in action can be seen in the [GitLab VS Code Extension](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/issues/656) Project.

#### Maintainer process template

Use this lightweight template as a starting point for defining your project's maintainer requirements.

- Work on issues to gain familiarity with the project's domain and guidelines.
- Complete project-specific language training if the programming language is not used in the main GitLab project (example: [golang training](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/issue_templates/golang_training.md)).
- Review project-specific release process (if one exists).
- Join the `[project or team]` Slack channel.
- Create a merge request and indicate your role as a `project-name: trainee_maintainer` in your [team member entry](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person). Assign MR to your manager for merge.
- *Optional:* Perform simulated reviews on practice MRs if available.
- *Optional:* Peer review MRs.
- *Optional:* Reach out to an existing maintainer to [help you become](/handbook/engineering/workflow/code-review/#reviewer-mentorship-program) a maintainer.

### Maintainer ratios

We aim to keep the engineer : maintainer ratio under 6, for both frontend and backend. We track this in the Engineer : Maintainer Ratio dashboard:

https://10az.online.tableau.com/t/gitlab/views/DraftEngineerMaintainerRatio/EngineerMaintainerRatio_1

### Maintainer Demand

We can gauge demand by looking at the Maintainership Demand dashboard, which can be filtered by month, project and technology:

https://10az.online.tableau.com/#/site/gitlab/views/MaintainershipDemand/MaintainershipDemand?:iid=1

#### About this dashboard

Definitions of metrics:

- Incoming Merge Requests - The total number of Merge Requests opened by any author.
- Average Availability - The average percentage of time that maintainers are accepting reviews, and not busy, out of office, on vacation, or at capacity.
- Total Maintainers - The number of engineers who have `maintainer` specified in their `team.yml`
- Available Maintainers - The number of Total Maintainers multiplied by the Average Availability
- Monthly Review Target - A variable number based on the expected number of reviews per maintainer in a given month. Monthly review targets can be custom based on the area, or generally defined based on the number of Incoming Merge Requests. For more information on this metric, [read below](#monthly-review-targets).
- Target Maintainer Counts - A variable number, changing month over month, based on the number of Incoming Merge Requests to the area for that month, the current number of Total Maintainers, and the Average Availability.
- Minimum Maintainers Required - The number of Available Maintainers required in order to meet the demand of Incoming Merge Requests.
- Maintainers Needed - The number of Available Maintainers still needed in order to meet Minimum Maintainers Required.
- Technology Group - For projects that have specific specialties for their maintainers, like database, backend, frontend, CI Templates, Workhorse

Explanation of charts:

- Available Maintainers VS Need - An overall, high-level look at our maintainer targets, totals, and availability.
- Projects where maintainers are needed - Based on the previous months data, this is an output of any area predicted to need more available maintainers.
- Project/Area Maintainership Health - The percentage of projects (GitLab) or areas (backend) that are not meeting the Minimum Maintainers Required over time.
- Unhealthy Core Areas of Maintainership Health - The percentage of projects (GitLab) or areas (backend) that are not meeting the Minimum Maintainers Required, and are receiving more than 100 Incoming Merge Requests per month over time.
- Part of Product Repos - Full Data - An all-inclusive chart for each project, area, and month that includes all metrics noted above.

#### Monthly Review Targets

Targets are calculated based on the number of available maintainers (described above) and what a "reasonable" number of reviews per maintainer per month is. "Reasonable" has been defined for some areas in [separate analysis issues](https://gitlab.com/groups/gitlab-com/-/epics/1817). These are custom targets defined in the "maintainer_custom_targets" Sisense snippet. There are general targets for all other projects based on the number of incoming merge requests to the project. These numbers are a first iteration and were based on the analysis issues, where less demanding projects had fewer maintainers (therefore requiring more monthly reviews per person) and more demanding projects had more maintainers (therefore requiring less monthly reviews per person):

- The default target is 5 reviews per maintainer
- If the area receives more than 10 merge requests, the monthly target is 10 reviews per maintainer
- If the area receives more than 500 merge requests, the monthly target is 40 reviews per maintainer
- If the area receives more than 1000 merge requests, the monthly target is 16 reviews per maintainer
- If the area receives more than 1500 merge requests, the monthly target is 20 reviews per maintainer

To add a custom target to an area using the `maintainer_custom_targets` Sisense snippet:

- In Sisense, go to Snippets > `maintainer_custom_targets`
- Add a new `CASE/WHEN` statement based on the project name and optionally technology group
- Set the number to the ideal monthly review target per person, according to what a reasonable number of reviews is for this project

#### Caveats

- **Total Maintainer counts may show as 0** - This data is using reviewer roulette to determine the number of total maintainers because we do not have access to the project memberships in Sisense, and because many projects have maintainers/owners who are not truly active. One reason this may be showing 0 despite having maintainers on the project is because the project name displayed does not match the project name used in the `team.yml` for reviewer roulette. Another reason might be that the project is not using reviewer roulette. In these cases, the project will need to be set up and configured correctly to use reviewer roulette. Finally, the `team.yml` must match the requirements of the project or area - for example, if reviews in your project are able to go to any maintainer, the `team.yml` should specify `maintainer`. If the reviews in your project are separated by specialty, the `team.yml` must specify `maintainer [SPECIALTY]` and the merge request should be labeled according to that specialty.

### Maintainer/Reviewer Availability

We aim to have enough reviewers and maintainers across timezones to ensure that there are people available to review MRs in a timely manner while keeping review load at a reasonable level. We track this in the [Reviewer/Maintainer Availability and Capacity dashboard](https://10az.online.tableau.com/#/site/gitlab/views/ReviewermaintainerAvailabilityandCapacity/Reviewermaintaineravailabilityandcapacity?:iid=1):

https://10az.online.tableau.com/#/site/gitlab/workbooks/2286852/views

## Leading Organizations

All wider community members, and their organizations, [can contribute](/handbook/company/mission/#contribute-with-gitlab). We strongly believe that contributing to
open source, and particularly to GitLab is a competitive advantage for organizations and their members, and want to
reward those organizations for doing so. GitLab highly encourages, celebrates & rewards those that contribute in
[frequent and atomic iterations](/handbook/values/#iteration). When an organization or individual without affiliations
reaches 20 merged merge requests or more within the last 3 completed months, we consider that organization or individual
a ```Leading Organization```.

Organizations are matched based on the ```Organization``` field in [your profile](https://gitlab.com/-/profile). GitLab
can also match individuals to organizations using other metadata available to the Contributor Success team. [Create an  issue in the Contributor Success queue](https://gitlab.com/gitlab-com/quality/contributor-success/-/issues) if you
think you or your organization should qualify but is not receiving the label ```Leading Organization``` on your merge
requests.

A ```Leading Organization``` is entitled to a [review response SLO](#review-response-slo). This entitlement will be
awarded in the beginning of each month. Merge requests that were created during the time in which an organization is
entitled to the ```Leading Organization``` status, will receive the label ```Leading Organization```.

> Leading Organization = 20 merged Merge Requests or more within the last 3 completed months.

Eligible merge requests include contributions to the [GitLab product](/handbook/product/groups/product-analysis/engineering/dashboards/) and documentation. Contributions to the [www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com) repository (e.g. the GitLab handbook) are not currently included or entitled to a review response SLO.

## Domain Experts

Our [Code Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html) states that we default to assigning reviews to team members with domain expertise.

### What makes a domain expert?

We currently don't provide rigid rules for what qualifies a team member as a domain expert and instead we use a boring solution of implicit and self-identification.

Implicit:

- Team members working in a specific stage/group (e.g. Create: Source Code) are implicitly considered domain experts for that area of the app they work on.
- Team members working on a specific feature (e.g. search) are implicitly considered domain experts for that feature.

Self-identification:

- Team members can self-identify as a domain expert for a specific feature (e.g. file uploads).
- Team members can self-identify as a domain expert for a specific technology (e.g. GraphQL), product feature (e.g. file uploads) or area of the codebase (e.g. CI).

### How to self-identify as a domain expert

The only requirement to be considered a domain expert is to have substantial experience with a specific technology, product feature or area of the codebase. We leave it up to the team member to decide whether they meet this criteria.

1. Define a new, or use an existing domain expertise key, located in [`data/domain_expertise.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/domain_expertise.yml).
1. Update your entry in your own [YAML file](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person) with a new `domain_expertise` property and list all domain expertise keys.

Example:

**domain_expertise.yml**

``` yaml
webpack:
  display_name: Webpack
  link: https://webpack.js.org/
frontend_architecture:
  display_name: Frontend Architecture
  link: https://docs.gitlab.com/ee/development/fe_guide/architecture.html
```

**your_handle.yml**

``` yaml
domain_expertise:
    - webpack
    - frontend_architecture
```

When self-identifying as a domain expert, it is recommended to assign the MR to be merged by an already established Domain Expert or a corresponding Engineering Manager.

### Where can I find a list of people with domain expertise?

The expertise of a team member can be seen on the [Engineering Projects](/handbook/engineering/projects/) page.

## Review turnaround time

Because [unblocking others is always a top priority](/handbook/values/#iteration),
reviewers are expected to review merge requests in a timely manner,
even when this may negatively impact their other tasks and priorities.

Doing so allows everyone involved in the merge request to iterate faster as the
context is fresh in memory, and improves contributors' experience significantly.

### Review-response SLO

To ensure swift feedback to ready-to-review code, we maintain a `Review-response` Service-level Objective (SLO).
The SLO applies to GitLab team members and [Leading Organizations](#leading-organizations), but not to other wider community contributors.

The SLO is defined as:

> Review-response SLO = (time when review is provided) - (time MR is assigned to reviewer)

The SLO value depends on the author of the merge request:

- From GitLab team members: `Review-response` SLO < 2 business days
- From authors of [Leading Organizations](#leading-organizations): `Review-response` SLO < 4 business days

If you don't think you can review a merge request in the `Review-response` SLO
time frame, let the author know as soon as possible in the comments
(no later than 36 hours after first receiving the review request)
and try to help them find another reviewer or maintainer who is able to, so that they can be unblocked
and get on with their work quickly. Remove yourself as a reviewer.

Reviewers may also communicate their status through the use of several other emoji. For more details
on these other statuses, please refer to the [code review](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)
page in the developer documentation.

Of course, if you are out of office and have
[communicated](/handbook/people-group/paid-time-off/#communicating-your-time-off)
this through your GitLab.com Status, authors are expected to realize this and
find a different reviewer themselves.

When a merge request author has been blocked for longer than
the `Review-response` SLO, they are free to remind the reviewer through Slack or add
another reviewer.

### Managing expectation

When you are assigned to review an MR and you are not able to get to it within the `Review-response` SLO, you should leave a comment on the MR informing the author of your delayed response. If possible, you should also indicate when the author can expect your feedback or help them find an alternative reviewer.

As the author of an MR you should reassign to another reviewer or maintainer if the `Review-response` SLO has not been met and you have been unable to contact the assignee.

## Code Owner approvals

Some GitLab projects use GitLab's [CODEOWNERS file feature](https://docs.gitlab.com/ee/user/project/codeowners/) to manage approvals for specific file paths and types. In the `gitlab-org/gitlab` project, [we use a combination of CODEOWNERS approval rules plus MR approval settings](https://docs.gitlab.com/ee/development/code_review.html#merging-a-merge-request) in order to follow segregation of duties best practices. This section describes the process for updating the eligible approvers for CODEOWNERS changes for the `gitlab-org/gitlab` project.

The Code Owners for the [CODEOWNERS file](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS) itself are managed with a rule in the file. For example:

```text
CODEOWNERS @gitlab-org/development-leaders @gitlab-org/tw-leadership
```

There are two ways to update the Code Owner(s) of the `CODEOWNERS` file:

1. Update the membership of a group that already has the ability to approve CODEOWNERS changes via the [standard access request process](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).
1. Open a merge request to update the relevant lines. An existing Code Owner will have to approve the merge request. You are also encouraged to ping a security compliance team member for visibility.

The `@gitlab-org/development-leaders` group consists of team members from Senior Managers and above in the management track, and Distinguished Engineer and above in the individual contributor track in the development departments within Engineering.
