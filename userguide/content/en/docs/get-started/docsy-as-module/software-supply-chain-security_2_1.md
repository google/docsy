---
title: "Software Supply Chain Security Working Group"
description: "Implement key SSCS features across GitLab"
status: active
---

## Attributes

| Property     | Value                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created | 2023-03-23                                                                                                                                                                       |
| End Date     | TBD                                                                                                                                                                              |
| Slack        | `#wg_software_supply_chain_security` (only accessible from within the company)                                                                                                   |
| Google Doc   | [Software Supply Chain Security Working Group Agenda](https://docs.google.com/document/d/1MEMPo1zxRrVr7yliOq1HMRJuaOZEgYvmFSIPBIXpu3A) (only accessible from within the company) |
| Issue Label  | `WorkingGroup::SSCS`                                                                                                                                                             |

## Overview and goals

Software Supply Chain Security (SSCS) is a key area where GitLab needs to excel, not only for the benefit of the company but for the benefit and security of our users. SSCS features and capabilities span across nearly all of the stages and groups in GitLab. The primary focus of this working group will be to work on building signing and verification into GitLab and will involve contributions in areas the following groups maintain: `Create::Source Code`, `Verify::Pipeline Execution`, `Verify::Runner`, `Package::Package Registry`, and `Package::Container Registry`. There may be some minor code contributions into other team areas as well. The other SSCS feature work at GitLab that is unrelated to signing and verification is outside the scope of this Working Group (but is still being considered or worked on in other areas in GitLab). This [direction page](https://about.gitlab.com/direction/supply-chain) describes the broad, long-term future vision for SSCS across the entire SDLC.

Signing and verification are traditionally difficult tasks. To securely sign a build artifact, container image, or package, users need to first securely store a private signing key. This key needs to be regularly rotated, and the signing tool needs a way to securely access the signing key. The combination of all of these requirements result in a high barrier to entry for users to sign their builds. As a result, many private projects and small open source projects do not publish signed build artifacts.

At a high level, this working group plans on making it possible for signing to happen automatically and by default anytime GitLab is used to build an artifact, container image, or package. By taking this complexity away from the end user and enabling it by default, GitLab intends to help lower this barrier to entry and make signing an industry-wide on-by-default standard.

## Useful references and links

Some of these links may provide useful background for the working group:

- [SLSA framework requirements](https://slsa.dev/spec/v0.1/requirements)
- [OpenSSF's SLSA verifier](https://github.com/slsa-framework/slsa-verifier)
- [Sigstore Cosign project](https://github.com/sigstore/cosign)
- [Sigstore Fulcio project](https://github.com/sigstore/fulcio)
- [Sigstore GitSign project](https://github.com/sigstore/gitsign)
- WIP [engineering blueprint](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113157/diffs) (this is not finalized yet and will require input from the members of this working group)

## Anticipated timeline

This working group is anticipated to require a total of 12-15 months to complete. This timeline is only an estimate and the working group will formally conclude once the exit criteria is met. This may result in either a longer or shorter timeline than the estimate of 12-15 months. The group will hold a review at the end of each quarter.

## Member commitments and expectations

Unlike other working groups, this effort is expected to take priority over other work. Core members from the Govern stage in the working group should expect to contribute approximately 80% of their time towards this project. Core members from other stages are volunteers and the percentage of their time may be much smaller. This commitment should be discussed and agreed upon with the individual's manager, and product counterpart where applicable, prior to joining the working group. Team members can also join as regular working group contributors.

We intend to re-evaluate the staffing needs of this working group on a quarterly basis. The product and engineering DRIs for the working group may increase, decrease, or swap out team members each quarter based on the overall interests of the team and the needs of the working group. The following dates are planned for re-evaluating the team structure:

- March 2023 - initial formation of group
- 15.10 Milestone (March 17, 2023) - working group officially begins
- July 2023 - end of quarter evaluation of team structure
- 16.2 Milestone (July 17, 2023) - any team changes go into effect
- October 2023 - end of quarter evaluation of team structure
- 16.5 Milestone (October 17, 2023) - any team changes go into effect
- January 2024 - end of quarter evaluation of team structure
- 16.8 Milestone (January 17, 2024) - any team changes go into effect
- April 2024 - end of quarter evaluation of team structure
- 16.11 Milestone (April 17, 2024) - any team changes go into effect

## Code management and handoff

Because software supply chain security impacts areas across GitLab, this working group will operate similar to a community contributor by adding functionality into other stages and groups in GitLab. As that functionality is incrementally completed, it will be handed off to the appropriate stage/group for ongoing maintenance.

## Exit criteria

The exit criteria for this working group is the completion of the following four criteria:

1. Builds are [signed by default](https://gitlab.com/groups/gitlab-org/-/epics/9212), including build artifacts, attestation files, container images, and packages.
1. Commits are [signed by default](https://gitlab.com/gitlab-org/gitlab/-/issues/364428), including commits made through the Web UI. Our approach for doing this commit signing is still being determined.
1. SLSA level 3 attestations are generated by default (currently we generate [SLSA level 1 attestations](https://docs.gitlab.com/ee/ci/runners/configure_runners.html#artifact-attestation) by default)
1. Build signatures and validation status is visible in the UI for [build artifacts](https://gitlab.com/groups/gitlab-org/-/epics/8839), [container images](https://gitlab.com/groups/gitlab-org/-/epics/7856), and packages. Verification status should be visible by default without requiring users to run custom tooling outside of just viewing the item in GitLab.

Epics to track the above work are still being created, along with the necessary requirements and designs. Please consider the items that do have links as a work-in-progress. Epics to track items that do not have links will be created and added in the future.

## Priorities and progress

A prioritized list of work will be tracked here after an engineering DRI has been identified.

{{< product-priorities/software-supply-chain-security-wg >}}

This list is a WIP and we are still working to add a list of prioritized Epics to deliver on the rest of the exit criteria for the group.

## Outcome

To be added once the project is complete

## Roles and responsibilities

| Working Group Role | Person             | Title                                           |
|--------------------|--------------------|-------------------------------------------------|
| Executive Sponsor  | Hillary Benson     | Senior Director, Product Management             |
| Product DRI        | Sam White          | Group Manager, Product - Govern                 |
| Engineering Manager DRI | Nathan Rosandich   | Engineering Manager, Govern                |
| Engineering DRI    | Aaron Huntsman     | Sr. Backend Engineer, Govern                    |
| Member             | Charlie Ablett     | Staff Backend Engineer, Plan                    |
| Member             | Georgi N. Georgiev | Senior Backend Engineer, Verify                 |
| Advisor            | Greg Myers         | Security Engineer, Application Security         |
| Advisor            | Ottilia Westerlund       | Security Engineer, Application Security         |
| Advisor            | Paul McCarty       | Security Engineer, Red Team                     |
