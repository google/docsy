---
title: "Developer Onboarding"
description: "Awesome! You're about to become a GitLab developer! Here you'll find everything you need to start developing."
aliases:
- /handbook/developer-onboarding/
---

Awesome! You're about to become a GitLab developer!
Make sure you've checked out our [handbook] beforehand, so you get a feeling
of how we work at GitLab. Below you'll find everything you need to start developing.
If something is missing, add it (as goes with everything at GitLab)!

## GitLab Environments

We have multiple [GitLab environments](/handbook/engineering/infrastructure/environments/).

On those instances, please enable the
[performance bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html)
by pressing <kbd>p</kbd> then <kbd>b</kbd> (even on production.)

Then, read how to use and enable the
[production Canary](/handbook/engineering/infrastructure/environments/canary-stage/)
on GitLab.com.

## Getting started with GitLab development

To start development, follow the instructions for the
[GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit).

## GitLab Repositories

GitLab consists of many subprojects. A curated list of GitLab Repositories
can be found at the [GitLab Engineering Projects](/handbook/engineering/projects/) page.

Almost all repositories are available on both GitLab.com and dev.gitlab.org. We
also mirror to dev.gitlab.org for availability reasons and [GitHub](https://github.com/gitlabhq)
for historical reasons.

All issues should be filed on GitLab.com.

## Infrastructure

For everything related to infrastructure, check out the
[Infrastructure handbook](/handbook/engineering/infrastructure/).
In particular [production architecture](/handbook/engineering/infrastructure/production/architecture/) might be useful for onboarding.

If you need a VPS for any reason, it's probably easiest to set one up at DigitalOcean. Ask another developer for access.

## Basics of GitLab development

### Workflow

Please see the [engineering workflow document](/handbook/engineering/workflow/) in the handbook and read
the [developer documentation](https://docs.gitlab.com/ee/development/).

### Security

Read the [developer security documentation](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md) prior to working on a security issue.

### Quality

One of GitLab's strengths is its high quality of software. To achieve this we've
introduced some requirements to all source code that is contributed. All
requirements are mentioned in [the Contribution guide](https://about.gitlab.com/community/contribute/).
Make sure you read and follow it.

### Dependencies

GitLab can be installed through an Omnibus package or from source on different
Linux distributions and macOS. In order to maintain portability, we need to
avoid adding extra dependencies and use of exotic database extensions. Every
time you choose between changes in the application code or adding new
dependencies, you should give priority to the first because this is easier to
maintain and set up. If you still need to bring new dependencies to GitLab, ask
another developer or the CTO for advice.

### Submit your code

In GitLab all code should go through a review process before it can be merged.
Make sure you submit a merge request for any changes you've made.
When the merge request is ready, it should be assigned to [someone else on the team](/handbook/engineering/workflow/code-review/).
This person is then responsible for reviewing your code and merging it.
Optionally, you can request another developer to help or review by writing a comment.
If a merge request is not assigned, it will probably be ignored and create
unnecessary delays.

Don't work on one task for multiple days before submitting a merge request.
Even the biggest task can be split into smaller tasks.
Try to submit a merge request for each part of the functionality.
This means that we expect multiple merge requests per week from you.
Smaller merge requests are more likely to receive good feedback and will get
merged sooner.

Unless the change is very minor, or is fixing a bug that was introduced in the
same version, create a changelog entry using the
[`Changelog` Git commit trailer](https://docs.gitlab.com/ee/development/changelog.html).
Do not include your name in the entry as we only do that to give recognition to
volunteer contributors.

### Working on GitLab EE (developer licenses)

GitLab EE requires a license key to be used.

Team members should file a submission via the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) by selecting
"Request a team member license" from the drop down options.

Wider community members should contact the [Contributor Success team](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows#contributing-to-the-gitlab-enterprise-edition-ee).

[Learn more about working with licensing and subscriptions internally.](/handbook/support/internal-support/)

### Ruby Gems

Follow the [development guidelines for Ruby gems](https://docs.gitlab.com/ee/development/gems.html).

## Get involved with the wider community

- Become a [Merge Request Coach](/job-families/expert/merge-request-coach/)
- Join the [Community Discord](https://discord.gg/gitlab)
- Encourage teams to host [Community Office Hours](/handbook/marketing/developer-relations/contributor-success/#community-office-hours)
- Reach out to the [Contributor Success team](/handbook/marketing/developer-relations/contributor-success) on Slack in `#contributor-success`
- Involve the community in things you do
- Have conversations in public
- Triage team issues and label with `quick win` where applicable, especially in advance of [Hackathons](https://about.gitlab.com/community/hackathon/)
- Use the [Community Forks](https://gitlab.com/gitlab-community)
- Consider [live streaming](/handbook/marketing/marketing-operations/youtube/#public-or-private-streaming) and [pairing sessions](/handbook/marketing/developer-relations/contributor-success/community-pairing-sessions/), with team members and/or the community
- Record meetings for the [GitLab Unfiltered](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) YouTube channel (handbook info [here](/handbook/marketing/marketing-operations/youtube/))
- Champion requests from community members and raise concerns internally
- Reach out offline to connect with community members on channels like X/Twitter or LinkedIn

## Relevant links

- [Engineering Handbook](/handbook/engineering/)
- [Engineering Workflow](/handbook/engineering/workflow/)
- [Product Handbook](/handbook/product/)
