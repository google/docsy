---
title: "Open Source at GitLab"
---

## We believe in Open Source

As a company, GitLab is dedicated to open source. Not only do we believe in it, but we use it, and we give back to it. Not just through GitLab, but through contributions to other open source projects.

The purpose of this page is to document how a GitLab employee can:

- Create an open source project on behalf of GitLab
- Contribute to a third-party open source project on behalf of GitLab
- Use a third-party open source code in a GitLab's project

## Growth Strategy

As an open source project, we want to stay healthy and be open for growth, but also ready to accommodate a 10x factor of
our community. In order to achieve that, we've [outlined a strategy](growth-strategy.html) that is a collaboration between multiple departments.

## General notes

- [GitLab Code of Business Conduct and Ethics](/handbook/legal/gitlab-code-of-business-conduct-and-ethics/)
- [PIAA](/handbook/people-group/contracts-probation-periods/#piaa-proprietary-information-and-assignment-agreement)

## Creating an open source project

See [Creating a new project](../gitlab-repositories/#creating-a-new-project) for the instructions.

## Contributing to a third-party project on behalf of GitLab

### Contributor License Agreements (CLAs)

If you're contributing to an open source project on behalf of GitLab, you may be required to enter into a CLA.

- In accordance with the [Authorization Matrix Policy](/handbook/finance/authorization-matrix/#authorization-matrix-policy), Legal approval is required in order for you to enter into a CLA on behalf of GitLab.
- Visit the [Legal & Corporate Affairs Product handbook](/handbook/legal/product/#contributor-license-agreements) for further information on this process.

### Contributing to a project on GitHub

If your GitHub account's primary email is not your @gitlab.com email, you can add it as an additional address. No need to create a separate account.

1. Fork the repository you want to contribute to into your account
2. Follow the usual [pull request flow](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

In the future, we might have a single organization for forks. That will allow us to track various metrics about contributions made by GitLab employees.

## Using open source software

The guidance for using open source software, including details of which licenses are pre-approved for use, is now available in the [Legal & Corporate Affairs handbook](/handbook/legal/product/#using-open-source-software).

## Using forks in your code

Avoid using forked code and try to contribute your change upstream.

It's typical for forks to fall far behind the upstream repository and such dependencies become a source of pain:

- Rebasing the branch may become non-trivial and it'd become hard to bring such dependency up to date.
- Some other library in your project might depend on the original version, creating a [diamond dependency problem](https://en.wikipedia.org/wiki/Dependency_hell).

There may be good reasons to create a fork:

- To fix a security issue that is not being fixed upstream fast enough if it's affecting us or our customers
- Any other reasons? Talk to your peers and use your best judgement.

If you decide to create a fork, make sure you open an issue that:

- Describes the reason for the fork to exist
- Links to the MR(s) where the fork was introduced as a dependency
- Links to any relevant issues in the upstream project. If the issue was not reported already, make sure you report it in the project's issue tracker. This is important because if the project's maintainers don't know about it they will not fix it
- Links to any opened MRs/PRs to fix the issue upstream
- Describes the remediation work needed to start using the upstream code again
- If it's not just changes in the forked code, but also some modifications in your code to use the fork, consider putting a TODO and a link to this issue next to that code in a comment

## GPL Cooperation Commitment

Visit the [Legal & Corporate Affairs Product handbook](/handbook/legal/product/#gpl-cooperation-commitment) for further information on this.
