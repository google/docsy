---
title: "Supply Chain Risk Management Strategy"
description: "This page outlines GitLab's comprehensive approach to supply chain risk management, providing a structured framework for identifying, assessing, and mitigating risks across the software development lifecycle while advancing toward higher SLSA compliance levels."
---

## Introduction

This page outlines GitLab's comprehensive strategy for identifying, assessing, and mitigating risks within our software supply chain. Our risk-based approach is designed to protect both our own data and our customers' data while progressively advancing towards higher levels of Supply chain Levels for Software Artifacts (SLSA) compliance.

## Goals and Objectives

- Identify and mitigate risks to GitLab's internal data assets throughout the supply chain
- Safeguard our customers' data by ensuring the integrity and security of our software delivery pipeline
- Achieve and maintain progressively higher levels of SLSA compliance through risk-focused improvements
- Establish comprehensive visibility and traceability to detect supply chain threats and vulnerabilities
- Implement a proactive risk management framework to address emerging supply chain threats
- Create a measurable approach to reduce supply chain attack surfaces
- Support and enhance the [Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/) with structured supply chain risk data and analysis

## Supply Chain Component Model

### Decomposing Supply Chain Complexity

GitLab's complete supply chain is too complex to represent in a single comprehensive diagram. Instead, we break down this complexity into manageable components using a recursive model:

- Each artifact has its own supply chain
- Each artifact's supply chain may depend on other artifacts, which have their own supply chains
- This creates a directed graph structure where:
  - Root nodes are the distributed artifacts (our final products)
  - Internal nodes are intermediate artifacts and components
  - Leaf nodes represent the boundaries of our supply chain (external components)

We focus our inventory and management efforts on artifacts and components within GitLab's direct control. For external components (leaf nodes), we track their origin and basic metadata but do not attempt to document their entire supply chains at this stage.

### SLSA Supply Chain Model

We align our supply chain tracking with the SLSA framework ([Specification 1.1](https://slsa.dev/spec/v1.1/)), which defines three key areas to secure:

![SLSA Supply Chain Model](/images/security/product-security/supply-chain-risk-management/supply-chain-model.svg)

This model illustrates the core steps we track:

1. **Source**: Where code is authored, reviewed, and stored
1. **Build**: Where source is transformed into packages/artifacts
1. **Distribution**: Where built artifacts are stored and distributed

The model also depicts:

- **Producer**: The entity responsible for creating the software
- **Consumer**: The entity consuming the software (another supply chain, or end-user)
- **Dependencies**: Internal and external components that feed into the Build and Distribution processes

For each artifact in our supply chain, we track its path through these three core steps, documenting controls and provenance at each stage.

### Supply Chain component types

Our model identifies specific component types within each core step of the supply chain. These types serve as reference elements to be used when describing a particular subset of the supply chain. Note that not all components will be present in every supply chain - the categorization below provides a framework for comprehensive modeling.

These types are linked to [SLSA threats](https://slsa.dev/spec/v1.1/threats) in the PSRR to create comprehensive risks, see the "[Threats](#threats)" section below. Risks can be linked to a subtype if more granularity is needed.

#### Source components

The Source core step includes everything that can edit and alter the source code before the Build step:

| Component type | Sub type | Label |
| -- | -- | -- |
| **Development Dependencies** | (Wraps all sub-types below) | [`~sscs-rm-component:src:dev-dependencies`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:dev-dependencies&first_page_size=100) |
|  | Development environment setup tools and dependencies (ex: [asdf](https://asdf-vm.com/)/[mise](https://mise.jdx.dev/)) | [`~sscs-rm-component:src:dev-setup-tools`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:dev-setup-tools&first_page_size=100) |
|  | IDEs (including extensions and plugins) | [`~sscs-rm-component:src:IDEs`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:IDEs&first_page_size=100) |
|  | Docker images | [`~sscs-rm-component:src:docker-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:docker-images&first_page_size=100) |
|  | Pre-commit hooks | [`~sscs-rm-component:src:pre-commit-hooks`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:pre-commit-hooks&first_page_size=100) |
|  | Local code formatters and linters | [`~sscs-rm-component:src:linters`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:linters&first_page_size=100) |
| **GitLab Repositories** | (Wraps all sub-types below) | [`~sscs-rm-component:src:repo`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo&first_page_size=100) |
|  | Project configuration | [`~sscs-rm-component:src:repo-config`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-config&first_page_size=100) |
|  | [Code Owners](https://docs.gitlab.com/user/project/codeowners/) configuration | [`~sscs-rm-component:src:repo-code-owners`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-code-owners&first_page_size=100) |
|  | Repository access controls | [`~sscs-rm-component:src:repo-access-control`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:src:repo-access-control&first_page_size=100) |

#### Build components

The Build core step includes everything that can transform the source code (compilation, linting, etc.) and produce an artifact:

| Component type | Sub type | Label |
| -- | -- | -- |
| **CI/CD** | (Wraps all sub-types below) | [`~sscs-rm-component:build:ci-cd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-cd&first_page_size=100) |
|  | GitLab Runners | [`~sscs-rm-component:build:gitlab-runners`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:gitlab-runners&first_page_size=100) |
|  | CI/CD templates | [`~sscs-rm-component:build:ci-templates`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-templates&first_page_size=100) |
|  | CI/CD Components | [`~sscs-rm-component:build:ci-components`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-components&first_page_size=100) |
| **Build images** | (Wraps all sub-types below) | [`~sscs-rm-component:build:build-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:build-images&first_page_size=100) |
|  | Base Docker images | [`~sscs-rm-component:build:base-docker-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:base-docker-images&first_page_size=100) |
|  | Intermediate images | [`~sscs-rm-component:build:intermediate-images`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:intermediate-images&first_page_size=100) |
|  | Container build tools | [`~sscs-rm-component:build:container-build-tools`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:container-build-tools&first_page_size=100) |
|  | Container registry | [`~sscs-rm-component:build:container-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:container-registry&first_page_size=100) |
| **Runtime Dependencies** | (Wraps all sub-types below) | [`~sscs-rm-component:build:runtime-dependencies`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:runtime-dependencies&first_page_size=100) |
|  | Ruby Gems | [`~sscs-rm-component:build:ruby-gems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ruby-gems&first_page_size=100) |
|  | NPM packages | [`~sscs-rm-component:build:npm-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:npm-packages&first_page_size=100) |
|  | Go modules | [`~sscs-rm-component:build:go-modules`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:go-modules&first_page_size=100) |
|  | Python packages | [`~sscs-rm-component:build:python-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:python-packages&first_page_size=100) |
|  | Other language-specific dependencies | [`~sscs-rm-component:build:other-packages`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:other-packages&first_page_size=100) |
| **Secrets** | (Wraps all sub-types below) | [`~sscs-rm-component:build:secrets`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:secrets&first_page_size=100) |
|  | Vault | [`~sscs-rm-component:build:vault`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:vault&first_page_size=100) |
|  | CI/CD variables | [`~sscs-rm-component:build:ci-variables`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:ci-variables&first_page_size=100) |
|  | Key management systems | [`~sscs-rm-component:build:key-management`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:key-management&first_page_size=100) |
|  | Certificate authorities | [`~sscs-rm-component:build:certificate-authorities`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:certificate-authorities&first_page_size=100) |
|  | Signing infrastructure | [`~sscs-rm-component:build:signing-infra`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:build:signing-infra&first_page_size=100) |

#### Distribution components

| Component type | Sub type | Label |
| -- | -- | -- |
| **Registries** | (Wraps all sub-types below) | [`~sscs-rm-component:dis:registries`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:registries&first_page_size=100) |
|  | Package registry | [`~sscs-rm-component:dis:package-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:package-registry&first_page_size=100) |
|  | Container registry | [`~sscs-rm-component:dis:container-registry`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:container-registry&first_page_size=100) |
| **Distribution Infrastructure** | (Wraps all sub-types below) | [`~sscs-rm-component:dis:distribution-infra`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:distribution-infra&first_page_size=100) |
|  | CDNs | [`~sscs-rm-component:dis:cdns`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:cdns&first_page_size=100) |
|  | Mirror services | [`~sscs-rm-component:dis:mirror-services`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:mirror-services&first_page_size=100) |
|  | Download servers | [`~sscs-rm-component:dis:download-servers`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:download-servers&first_page_size=100) |
| **Verification Systems** | (Wraps all sub-types below) | [`~sscs-rm-component:dis:verification-systems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:verification-systems&first_page_size=100) |
|  | Signature verification | [`~sscs-rm-component:dis:signature-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:signature-verification&first_page_size=100) |
|  | Checksumming services | [`~sscs-rm-component:dis:checksumming-services`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:checksumming-services&first_page_size=100) |
|  | Attestation systems | [`~sscs-rm-component:dis:attestation-systems`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-component:dis:attestation-systems&first_page_size=100) |

### SLSA 1.1 Alignment

This framework is based on the Supply chain Levels for Software Artifacts (SLSA) specification 1.1. We deliberately adopt SLSA terminology and concepts to ensure consistency with industry standards and facilitate compliance efforts. Key SLSA elements incorporated into our model include:

- Build provenance documentation
- Source verification
- Build integrity controls
- Artifact authentication
- Access control requirements

#### Threats

SLSA [defines a set of threats](https://slsa.dev/spec/v1.1/threats) that are used in the PSRR to link elements of the model to risks:

![SLSA Threats](/images/security/product-security/supply-chain-risk-management/supply-chain-threats.svg)

| Threat area | Threat | Description | Label |
| -- | -- | -- | -- |
| Source | [(A) Producer](https://slsa.dev/spec/v1.1/threats#a-producer) | Software producer intentionally creates a malicious revision of the source | [`~sscs-rm-threat::a-malicious-source`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::a-malicious-source&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B1) Submit change without review](https://slsa.dev/spec/v1.1/threats#b1-submit-change-without-review) | Directly submit without review | [`~sscs-rm-threat::b1-submit-without-review`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-submit-without-review&first_page_size=100) |
| | | Single actor controls multiple accounts | [`~sscs-rm-threat::b1-actor-controls-multiple-accounts`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-actor-controls-multiple-accounts&first_page_size=100) |
| | | Use a robot account to submit change | [`~sscs-rm-threat::b1-robot-account-submit`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-robot-account-submit&first_page_size=100) |
| | | Abuse of rule exceptions | [`~sscs-rm-threat::b1-abuse-rule-exceptions`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-abuse-rule-exceptions&first_page_size=100) |
| | | Highly-permissioned actor bypasses or disables controls | [`~sscs-rm-threat::b1-bypass-controls`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b1-bypass-controls&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B2) Evade change management process](https://slsa.dev/spec/v1.1/threats#b2-evade-change-management-process) | Modify code after review | [`~sscs-rm-threat::b2-modify-after-review`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-modify-after-review&first_page_size=100) |
| | | Submit a change that is unreviewable | [`~sscs-rm-threat::b2-unreviewable-change`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-unreviewable-change&first_page_size=100) |
| | | Copy a reviewed change to another context | [`~sscs-rm-threat::b2-copy-to-another-context`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-copy-to-another-context&first_page_size=100) |
| | | Commit graph attacks | [`~sscs-rm-threat::b2-commit-graph-attacks`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b2-commit-graph-attacks&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B3) Render code review ineffective](https://slsa.dev/spec/v1.1/threats#b3-render-code-review-ineffective) | Collude with another trusted person | [`~sscs-rm-threat::b3-collusion`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-collusion&first_page_size=100) |
| | | Trick reviewer into approving bad code | [`~sscs-rm-threat::b3-trick-reviewer`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-trick-reviewer&first_page_size=100) |
| | | Reviewer blindly approves changes | [`~sscs-rm-threat::b3-blind-approval`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b3-blind-approval&first_page_size=100) |
| | [(B) Modifying the source](https://slsa.dev/spec/v1.1/threats#b-modifying-the-source) -> [(B4) Render change metadata ineffective](https://slsa.dev/spec/v1.1/threats#b4-render-change-metadata-ineffective) | Forge change metadata | [`~sscs-rm-threat::b4-forge-metadata`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::b4-forge-metadata&first_page_size=100) |
| | [(C) Source code management](https://slsa.dev/spec/v1.1/threats#c-source-code-management) | Platform admin abuses privileges | [`~sscs-rm-threat::c-admin-abuse`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::c-admin-abuse&first_page_size=100) |
| | | Exploit vulnerability in SCM | [`~sscs-rm-threat::c-exploit-scm-vulnerability`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::c-exploit-scm-vulnerability&first_page_size=100) |
| Build | [(D) External build parameters](https://slsa.dev/spec/v1.1/threats#d-external-build-parameters) | Build from unofficial fork of code | [`~sscs-rm-threat::d-unofficial-fork`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-fork&first_page_size=100) |
| | | Build from unofficial branch or tag | [`~sscs-rm-threat::d-unofficial-branch`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-branch&first_page_size=100) |
| | | Build from unofficial build steps | [`~sscs-rm-threat::d-unofficial-steps`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-steps&first_page_size=100) |
| | | Build from unofficial parameters | [`~sscs-rm-threat::d-unofficial-parameters`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-unofficial-parameters&first_page_size=100) |
| | | Build from modified version of code modified after checkout | [`~sscs-rm-threat::d-modified-after-checkout`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::d-modified-after-checkout&first_page_size=100) |
| | [(E) Build process](https://slsa.dev/spec/v1.1/threats#e-build-process) | Forge values of the provenance (other than output digest) | [`~sscs-rm-threat::e-forge-provenance-values`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-forge-provenance-values&first_page_size=100) |
| | | Forge output digest of the provenance | [`~sscs-rm-threat::e-forge-output-digest`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-forge-output-digest&first_page_size=100) |
| | | Compromise project owner | [`~sscs-rm-threat::e-compromise-owner`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-owner&first_page_size=100) |
| | | Compromise other build | [`~sscs-rm-threat::e-compromise-other-build`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-other-build&first_page_size=100) |
| | | Steal cryptographic secrets | [`~sscs-rm-threat::e-steal-secrets`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-steal-secrets&first_page_size=100) |
| | | Poison the build cache | [`~sscs-rm-threat::e-poison-cache`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-poison-cache&first_page_size=100) |
| | | Compromise build platform admin | [`~sscs-rm-threat::e-compromise-platform-admin`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::e-compromise-platform-admin&first_page_size=100) |
| | [(F) Artifact publication](https://slsa.dev/spec/v1.1/threats#f-artifact-publication) | Build with untrusted CI/CD | [`~sscs-rm-threat::f-untrusted-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-untrusted-cicd&first_page_size=100) |
| | | Upload package without provenance | [`~sscs-rm-threat::f-upload-without-provenance`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-upload-without-provenance&first_page_size=100) |
| | | Tamper with artifact after CI/CD | [`~sscs-rm-threat::f-tamper-after-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-tamper-after-cicd&first_page_size=100) |
| | | Tamper with provenance | [`~sscs-rm-threat::f-tamper-with-provenance`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::f-tamper-with-provenance&first_page_size=100) |
| | [(G) Distribution channel](https://slsa.dev/spec/v1.1/threats#g-distribution-channel) | Build with untrusted CI/CD | [`~sscs-rm-threat::g-untrusted-cicd`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-untrusted-cicd&first_page_size=100) |
| | | Issue VSA from untrusted intermediary | [`~sscs-rm-threat::g-untrusted-vsa`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-untrusted-vsa&first_page_size=100) |
| | | Upload package without provenance or VSA | [`~sscs-rm-threat::g-upload-without-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-upload-without-verification&first_page_size=100) |
| | | Replace package and VSA with another | [`~sscs-rm-threat::g-replace-package-vsa`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-replace-package-vsa&first_page_size=100) |
| | | Tamper with artifact after upload | [`~sscs-rm-threat::g-tamper-after-upload`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-tamper-after-upload&first_page_size=100) |
| | | Tamper with provenance or VSA | [`~sscs-rm-threat::g-tamper-verification`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::g-tamper-verification&first_page_size=100) |
| Usage | [(H) Package selection](https://slsa.dev/spec/v1.1/threats#h-package-selection) | Dependency confusion | [`~sscs-rm-threat::h-dependency-confusion`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::h-dependency-confusion&first_page_size=100) |
| | | Typosquatting | [`~sscs-rm-threat::h-typosquatting`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::h-typosquatting&first_page_size=100) |
| | [(I) Usage](https://slsa.dev/spec/v1.1/threats#i-usage) | Improper usage | [`~sscs-rm-threat::i-improper-usage`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::i-improper-usage&first_page_size=100) |
| Dependency | [Build dependency](https://slsa.dev/spec/v1.1/threats#build-dependency) | Include a vulnerable dependency | [`~sscs-rm-threat::dep-vulnerable-dependency`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-vulnerable-dependency&first_page_size=100) |
| | | Use a compromised build tool | [`~sscs-rm-threat::dep-compromised-build-tool`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-compromised-build-tool&first_page_size=100) |
| | | Use a compromised runtime dependency during the build | [`~sscs-rm-threat::dep-compromised-runtime-dependency`](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team/storm-risk-register/-/issues/?sort=created_date&state=opened&label_name%5B%5D=sscs-rm-threat::dep-compromised-runtime-dependency&first_page_size=100) |

## Integration with the Product Security Risk Register

The Supply Chain Risk Management Strategy serves as a critical foundation for the [Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/). Each supply chain-related risk identified in the PSRR must be linked to specific elements within this supply chain model:

1. **Risk Mapping Requirements**

   - Every supply chain risk in the PSRR must reference specific components from this model
   - By extension, risks identifies which part of the supply chain step is affected (Source, Build, or Distribution)
   - Risk documentation can include specific artifacts involved
   - The potential for risk propagation through the supply chain should be documented

1. **Bidirectional Traceability**

   - Supply chain model components must link back to relevant PSRR risk items (see labels above)
   - PSRR entries must link to the affected supply chain components
   - Updates to the supply chain model should trigger reviews of related PSRR entries
   - New PSRR risks related to supply chain must be mapped to this model during risk registration

1. **Unified Risk Assessment Approach**

   - The risk scoring methodology must be consistent between this model and the PSRR
   - Supply chain risk mitigations documented in the PSRR should align with controls in this model
   - Risk acceptance decisions should consider the full context of the supply chain graph

This integration ensures a comprehensive approach to supply chain risk management that leverages our existing security frameworks while providing deeper visibility into supply chain-specific threats.

## How to Use This Model

### For Development Teams

{{% alert title="Note" color="primary" %}}
The following items represent future/North Star requests and are not current requirements.
{{% /alert %}}

1. **Artifact Documentation**

   - For each new artifact type, document its source components
   - Register artifact in the central inventory (see https://gitlab.com/groups/gitlab-org/-/epics/16484)

1. **Compliance Verification**

   - Regular self-assessments against the model requirements
   - Document evidence of control implementation
   - Participate in periodic supply chain reviews

### For Security Teams

1. **Risk Monitoring and Intelligence**

   - Implement continuous risk monitoring for registered components
   - Conduct regular threat hunting across the supply chain ecosystem
   - Maintain a supply chain threat intelligence program
   - Establish risk thresholds and escalation procedures for detected anomalies

1. **Risk-Based Audit Support**

   - Maintain risk evidence collection for compliance purposes
   - Support external audits with risk assessment documentation
   - Verify the implementation and effectiveness of risk controls across teams
   - Develop risk-focused audit narratives and documentation

1. **Risk Model Evolution**

   - Update the risk model as new threats and attack techniques emerge
   - Refine risk classification criteria based on incident data and operational feedback
   - Ensure alignment with evolving SLSA requirements and industry threat landscape
   - Conduct periodic red team exercises to test supply chain security resilience

## Risk Management Metrics and Success Criteria

{{% alert title="Note" color="primary" %}}
The following metrics represent future/North Star indicators. These are not currently tracked and are subject to changes.
{{% /alert %}}

Success in our supply chain risk management strategy will be measured by:

| Metric | Possible methodology | Dependencies |
| -- | -- | -- |
| Completeness of risk assessment coverage across all components and artifacts | Track threat models done for each component. | [Inventory of GitLab public artifacts](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/73) |
| Quantifiable reduction in supply chain security incidents and vulnerabilities | Create new labels to track down incidents and vulnerabilities related to our supply chain. | AppSec team |
| Decreased mean time to detect and respond to supply chain threats | Risks in the PSRR should have remediation issues linked, but also detection issues. | PSRR |
| Progressive achievement of higher SLSA levels with documented risk reduction | Track implemented [SLSA requirements](https://slsa.dev/spec/v1.1/requirements). | This [Epic](https://gitlab.com/groups/gitlab-org/-/epics/15857) for SLSA Level 3 support. |
| Successful passing of external security audits with minimal findings | Map findings related to supply chain. Loop back with coverage above to make sure previously unknown risks are logged. | SecAssurance / AppSec |
| Improved visibility and quantification of supply chain risks and dependencies | Track "dead-ends" in supply chains (missing information). | Each risk is labeled correctly in the PSRR & [Inventory of GitLab public artifacts](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/73) |
| Reduced number of critical and high-risk components in the supply chain | Number of components with risk score above a shreshold. | PSRR |
