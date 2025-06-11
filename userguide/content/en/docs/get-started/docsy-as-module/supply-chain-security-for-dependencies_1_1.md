---
title: Supply Chain Security for Open Source Dependencies and Libraries
---

## Overview

Software supply chain security has become increasingly critical as modern applications, including GitLab products, rely heavily on third-party open source dependencies and libraries.
A single compromised dependency can result in serious real-world consequences.
This guide provides developers and security team members with best practices and considerations for evaluating and securely using open source dependencies in their projects.

## When to Use These Guidelines

Apply these guidelines when:

- Reviewing merge requests (MRs) that add new dependencies
- Evaluating updates to existing dependencies
- Auditing current dependencies for security

This includes changes to:

- Library manifests (e.g., `Gemfile`, `package.json`, `go.mod`)
- Lockfiles (e.g., `Gemfile.lock`, `yarn.lock`, `go.sum`)
- Vendored dependencies

## Dependency Evaluation Process

### Evaluate the Need for the Dependency

Before adding a new dependency, first evaluate whether it's truly necessary:

- How much of the dependency's functionality will you actually use?
- Could the needed functionality be implemented directly with a reasonable amount of code?
- Would maintaining this code yourself be simpler than managing a new dependency?
- Is the dependency solving a complex problem (like cryptography) that should not be implemented in-house?
- Does the dependency have other dependencies that would also need to be added?

### Initial Risk Assessment

Before diving into detailed evaluation, consider:

- The scope of access and permissions the dependency requires
- The criticality of the component or feature that will use this dependency

### Evaluate Project Health and Secure Development Practices

Note: these criteria are *not* required to use a dependency, but they are good indicators of the project's health and security.

- Is the project actively developed, maintained, and mature?
  - When was the code last updated?
  - When was the last release shipped?
  - How many releases are there?
  - How frequently are new releases shipped?
  - Is the software dependency version being evaluated a stable "release" version? (for example: not alpha, beta, v0.x)
  - Is the project older than 90 days?
- Is the project well-known or widely adopted in the software industry and open source community?
  - Wide adoption can indicate stability, reliability, and community trust
  - Lesser-known, newer, specialized, or niche dependencies may still be appropriate if they:
    - Meet our security requirements
    - Solve a specific need better than alternatives
  - Note: Low adoption alone is not a disqualifying factor if other security and maintenance criteria are met
- Given the complexity of the project, does the project have a sufficient number of maintainers and contributors?
- Does the project keep its dependencies updated?
- Does the project have sufficient test coverage?
  - Do the project's pipelines or tests include security checks or testing?
- Is the project well-documented and does the document include guidance on how to use or implement the software component securely?
- Does the project have an established and documented process for reporting vulnerabilities and are these vulnerabilities addressed in a timely manner?
- Is the dependency version being evaluated affected by known vulnerabilities or CVEs? If so, is there a fix available?
- Are commits to this project cryptographically signed?
- Does the project have a code review process for changes before code is merged into the main branch?
  - Does the project require approvals for merge/pull requests?
- Are releases signed or cryptographically verifiable?
- Do project maintainers use accounts registered to personal custom email domains?
- Does the project have security requirements for maintainer accounts? (Check project security or contribution requirements, if available)

### Code Inspection

- Review library code for malicious or problematic content
- Inspect the source code
- To help review code changes between dependency versions, use services like [diffend.io](https://diffend.io/) for Gems or [app.renovatebot.com](https://app.renovatebot.com/) for Node.js modules
- For vendored libraries, use standard code review tools
- Review diffs for dependency upgrades to ensure the upgrade is safe and does not introduce new vulnerabilities or

### Supply Chain Security Best Practices

- **Implement Security Scanning**: Implement automated vulnerability scanning in your GitLab CI/CD pipeline.
- **Verify the package source**: Always download packages from trusted sources. Stick to official package repositories or well-known sources that have a good reputation.
- **Double-check package names**: Pay close attention to the spelling and formatting of package names.
- **Verify package integrity**: Many package managers provide mechanisms to verify package integrity using checksums or digital signatures.
- **Pin dependencies**: Use a lockfile or similar mechanism to specify the exact version of a dependency that is used in a project. This can help to prevent the "dependency confusion" attack.
- **Plan for security compromise**: Consider developing a plan to quickly remove or replace a compromised dependency.

## Dependency review guidelines for AppSec engineers

### Ruby Gems

When a new gem is added to our `Gemfile` or when versions are changed in `Gemfile.lock`, we ask developers to [reach out to the AppSec team](https://docs.gitlab.com/ee/development/gemfile.html#request-an-appsec-review) to request a review. As an AppSec engineer performing the review, please refer to the guidelines above and follow the steps mentioned below to perform reviews like these:

- First, look to see if the gem is well maintained.
  - Look closer at the gem's code to see if there are any anomalies. This step can be time consuming, so, make sure you balance the time taken to review the gem's code with the urgency of the MR/issue the GitLab developer pinged us on.
  - The `diffgem` helper function in [gitlab-com/gl-security/product-security/appsec/tooling/appsec-command-line-utils](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/appsec-command-line-utils) was created to assist in reviewing gem version changes by showing only the `diff`s for Ruby files. (excluding changes to specs, `json`, `yaml`, and other noise)
  - [Depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore) if enabled in the project CI/CD will run [checks](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore#the-following-checks-are-carried-out-on-a-newly-introduced-ruby-gem) against the new dependency and comments the result in the MR to help with the Gem review.
- Look to see if we are using the latest version of the gem in our code.
- Read the gem's documentation to see if there are any configurations or usages that should be avoided.
- Check for security advisories and fixes to evaluate the quality of security fixes.

After you have done the above, please add a comment to the MR/issue the developer pinged us on mentioning that:

- You have looked at the gem in question. Add a hyperlink to the gem's GitLab/GitHub page.
- Please mention if the gem is well maintained. If it isn't, ask the developer to use alternate gems to do the task they would like to do.
- Please mention if we are using the latest version of the gem in our code. If that isn't the case, ask the developer to move to the latest version.
- If you notice that the developer is using the gem in an insecure manner, recommend secure usages of the gem or disable any insecure configurations in the gem by pointing the developer to the gem's documentation.

### NPM packages

The dependency review guidelines for Gems are applicable for reviewing npm packages as well, in addition to that:

- If [npm aliases](https://docs.npmjs.com/cli/v8/using-npm/package-spec#aliases) are noticed verify that the package referred by alias name is not malicious.
