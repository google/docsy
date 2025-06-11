---
title: "Contributing to GitLab the Product as a Security Team Member"
---

## Product Security Code Contributions

Security Engineers typically act as Subject Matter Experts and advisors to GitLab's engineering teams. Security Engineers may wish to make a larger contribution to GitLab products, for example a defense-in-depth measure or new security feature.

Like any contributor, follow the [Contributor and Development Docs](https://docs.gitlab.com/ee/development/), paying particular attention to the issue workflow, merge requests workflow, style guides, and testing standards.

Security Engineers will need to collaborate with and ultimately hand over their work to a team in the Development Department. That team will be responsible for prioritisation, review, rollout, error budget, and maintenance of the contribution. Security Engineers should ideally open an Issue or Epic as early as possible, labeled with the candidate owning team. The team can inform implementation or architectural decisions, highlight existing or upcoming work that may impact yours, and let them plan capacity for reviewing your work.

If a team does not have capacity or a desire to assist, a Security Engineer's work can still continue; everyone can contribute.

Requests from Security Engineers for new features and enhancements should follow the process in ["Requesting something to be scheduled"](/handbook/engineering/workflow/#requesting-something-to-be-scheduled)

This does not apply to addressing security vulnerabilities or dependency updates, which have separate processes for triage and patching.

## External Code Contributions

We have a process in place to conduct security reviews for externally contributed code, especially if the code functionality includes any of the following:

- Processing credentials/tokens
- Storing credentials/tokens
- Logic for privilege escalation
- Authorization logic
- User/account access controls
- Authentication mechanisms

The Security Team works with our Community Outreach Team to ensure that security reviews are conducted where relevant. For more information about contributing, please reference the [Contribute to GitLab](https://about.gitlab.com/community/contribute/) page.

## Package Signing{#package-signing}

The packages we ship are signed with GPG keys, as described in the [GitLab documentation](https://docs.gitlab.com/ee/administration/package_information/signed_packages.html). The process around how to make and store the key pair in a secure manner is described in [the runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/packaging/manage-package-signing-keys.md). The Distribution team is responsible for updating the package signing key. For more details that are specific to key locations and access at GitLab, find the internal google doc titled "Package Signing Keys at GitLab" on Google Drive.
