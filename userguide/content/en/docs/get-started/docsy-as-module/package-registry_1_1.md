---

title: Package Stage - Package Registry
---







## Overview

The goal of this page is to document specific processes and tools for the [GitLab Package Registry](https://docs.gitlab.com/ee/user/packages/package_registry/index.html).

## Releasing a new Package Registry format

Implementing support for a new package format in the Packages Registries requires [several steps](https://docs.gitlab.com/ee/development/packages.html#mvc-approach).
On top of this, Package Managers can be configured in a variety of ways that can't be exhaustively listed during the [investigation step](https://docs.gitlab.com/ee/development/packages.html#analysis).

This creates an amount of uncertainty that can't be completely eliminated but can certainly be minimized. This section presents a guideline on how to achieve that.

We will assume that the [recommended approach](https://docs.gitlab.com/ee/development/packages.html#mvc-approach) for new Package Regisitries was followed:

- A [feature flag](https://docs.gitlab.com/ee/development/feature_flags/index.html) is used.
- The minimum amount of API endpoints has been implemented for the project level only.

The recommended way to release the new Package Registry is using the support [statuses](https://docs.gitlab.com/ee/policy/experiment-beta-support.html).

Each update on the status should be documented on the [list of supported package formats](https://docs.gitlab.com/ee/user/packages/package_registry/#supported-package-managers).

In case of Package Registries implemented by the Package team, the rollout can be carried by a team member different from the one that led the implementation.
This is to promote knowledge sharing and prevent siloing.

### Experiment

In this state, the new Package Registry must be tested on staging.
This is the time to test as many scenarios as possible. During these, all the moving pieces (frontend, backend, background jobs) should be checked for errors or bad behaviors.

1. Push a small package (including duplicated packages if allowed).
1. Push a large package.
   - For an idea of what a large package is, have a look at the instance limits for the [Package Registry](https://docs.gitlab.com/ee/administration/instance_limits.html#package-registry).
1. Push a few hundreds of packages and interact with the metadata endpoint (if any). Check for slow responses.
1. Pull a package (including some of the duplicated ones).
1. Check any additional command implemented. For example, packages search or view all the versions available for a given package.
1. Check if overall, there is any option or endpoint that is custom to GitLab. Look for a clear reason why we need that additional aspect.
1. Re-run the above scenarios with all the supported token types.
Usually, in the MVC, we support: [personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html), [deploy tokens](https://docs.gitlab.com/ee/user/project/deploy_tokens/) and [CI job tokens](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html).

If an issue is discovered during this testing, it should be documented in the feature flag rollout issue and a new issue describing the problem should be opened and scheduled.

Optionally, the [documentation](https://docs.gitlab.com/ee/user/packages/package_registry/) could be updated with a dedicated page for this new Package Registry.
This way, interested self-managed users have the instructions on how to enable and use the new Package Registry.
This page should clearly state that the Package Registry is an Experiment and thus, not ready for production use.

Iterate until we're confident in the behavior and performance of the new Package Registry on staging.

### Beta

This state is where we start enabling the Package Registry for a few selected projects on GitLab.com. Take this opportunity to:

- Apply [dogfooding](/handbook/values/#dogfooding). For example, some GitLab teams could be interested in using the new Package Registry.
- Let selected users test the new Package Registry.
  - The related issue/epic is usually followed by several users. Some of them might be interested in using the Package Registry even if it is in Beta.

This is the period where we could receive a significant amount of bug reports. It is important to triage them accordingly and prioritize bugs that prevent the expected use of the new Package Registry.

When we resolve all blocking issues, we can move the Package Registry to the next support status.

### Generally Available

We fully release the Package Registry. For this state, we have a few things to take care of:

- Update the documentation accordingly.
- Update the feature flag so that the Package Registry is released to self-managed users.
- Communicate accordingly about the Package Registry release.
