---
title: "Supply Chain Risk Management Strategy"
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

We align our supply chain tracking with the SLSA framework ([Specification 1.0](https://slsa.dev/spec/v1.0/)), which defines three key areas to secure:

![SLSA Supply Chain Model](/images/security/product-security/supply-chain-risk-management/supply-chain-model.svg)

This model illustrates the core steps we track:

1. **Source**: Where code is authored, reviewed, and stored
1. **Build**: Where source is transformed into packages/artifacts
1. **Package**: Where built artifacts are stored and distributed

The model also depicts:

- **Producer**: The entity responsible for creating the software
- **Consumer**: The entity consuming the software (another supply chain, or end-user)
- **Dependencies**: Internal and external components that feed into the build and package processes

For each artifact in our supply chain, we track its path through these three core steps, documenting controls and provenance at each stage.

### Supply Chain component types

Our model identifies specific component types within each core step of the supply chain. These types serve as reference elements to be used when describing a particular subset of the supply chain. Note that not all components will be present in every supply chain - the categorization below provides a framework for comprehensive modeling.

These types are linked to [SLSA threats](https://slsa.dev/spec/v1.0/threats) in the PSRR to create comprehensive risks, see the "[Threats](#threats)" section below. Risks can be linked to a subtype if more granularity is needed.

#### Source components

The Source core step includes everything that can edit and alter the source code before the Build step:

| Component type | Sub type | Label |
| -- | -- | -- |
| **Development Dependencies** | (Wraps all sub-types below) | `~sscs-rm-component:src:dev-dependencies` |
|  | Development environment setup tools and dependencies (ex: [asdf](https://asdf-vm.com/)/[mise](https://mise.jdx.dev/)) | `~sscs-rm-component:src:dev-setup-tools` |
|  | IDEs (including extensions and plugins) | `~sscs-rm-component:src:IDEs` |
|  | Docker images | `~sscs-rm-component:src:docker-images` |
|  | Pre-commit hooks | `~sscs-rm-component:src:pre-commit-hooks` |
|  | Local code formatters and linters | `~sscs-rm-component:src:linters` |
| **GitLab Repositories** | (Wraps all sub-types below) | `~sscs-rm-component:src:repo` |
|  | Project configuration | `~sscs-rm-component:src:repo-config` |
|  | [Code Owners](https://docs.gitlab.com/user/project/codeowners/) configuration | `~sscs-rm-component:src:repo-code-owners` |
|  | Repository access controls | `~sscs-rm-component:src:repo-access-control` |

#### Build components

The Build core step includes everything that can transform the source code (compilation, linting, etc.) and produce an artifact:

| Component type | Sub type | Label |
| -- | -- | -- |
| **CI/CD** | (Wraps all sub-types below) | `~sscs-rm-component:build:ci-cd` |
|  | GitLab Runners | `~sscs-rm-component:build:gitlab-runners` |
|  | CI/CD templates | `~sscs-rm-component:build:ci-templates` |
|  | CI/CD Components | `~sscs-rm-component:build:ci-components` |
| **Build images** | (Wraps all sub-types below) | `~sscs-rm-component:build:build-images` |
|  | Base Docker images | `~sscs-rm-component:build:base-docker-images` |
|  | Intermediate images | `~sscs-rm-component:build:intermediate-images` |
|  | Container build tools | `~sscs-rm-component:build:container-build-tools` |
|  | Container registry | `~sscs-rm-component:build:container-registry` |
| **Runtime Dependencies** | (Wraps all sub-types below) | `~sscs-rm-component:build:runtime-dependencies` |
|  | Ruby Gems | `~sscs-rm-component:build:ruby-gems` |
|  | NPM packages | `~sscs-rm-component:build:npm-packages` |
|  | Go modules | `~sscs-rm-component:build:go-modules` |
|  | Python packages | `~sscs-rm-component:build:python-packages` |
|  | Other language-specific dependencies | `~sscs-rm-component:build:other-packages` |
| **Secrets** | (Wraps all sub-types below) | `~sscs-rm-component:build:secrets` |
|  | Vault | `~sscs-rm-component:build:vault` |
|  | CI/CD variables | `~sscs-rm-component:build:ci-variables` |
|  | Key management systems | `~sscs-rm-component:build:key-management` |
|  | Certificate authorities | `~sscs-rm-component:build:certificate-authorities` |
|  | Signing infrastructure | `~sscs-rm-component:build:signing-infra` |

#### Package components

| Component type | Sub type | Label |
| -- | -- | -- |
| **Registries** | (Wraps all sub-types below) | `~sscs-rm-component:pkg:registries` |
|  | Package registry | `~sscs-rm-component:pkg:package-registry` |
|  | Container registry | `~sscs-rm-component:pkg:container-registry` |
| **Distribution Infrastructure** | (Wraps all sub-types below) | `~sscs-rm-component:pkg:distribution-infra` |
|  | CDNs | `~sscs-rm-component:pkg:cdns` |
|  | Mirror services | `~sscs-rm-component:pkg:mirror-services` |
|  | Download servers | `~sscs-rm-component:pkg:download-servers` |
| **Verification Systems** | (Wraps all sub-types below) | `~sscs-rm-component:pkg:verification-systems` |
|  | Signature verification | `~sscs-rm-component:pkg:signature-verification` |
|  | Checksumming services | `~sscs-rm-component:pkg:checksumming-services` |
|  | Attestation systems | `~sscs-rm-component:pkg:attestation-systems` |

### SLSA 1.0 Alignment

This framework is based on the Supply chain Levels for Software Artifacts (SLSA) specification 1.0. We deliberately adopt SLSA terminology and concepts to ensure consistency with industry standards and facilitate compliance efforts. Key SLSA elements incorporated into our model include:

- Build provenance documentation
- Source verification
- Build integrity controls
- Artifact authentication
- Access control requirements

#### Threats

SLSA [defines a set of threats](https://slsa.dev/spec/v1.0/threats) that are used in the PSRR to link elements of the model to risks:

![SLSA Threats](/images/security/product-security/supply-chain-risk-management/supply-chain-threats.svg)

| Threat area | Threat | Label |
| -- | -- | -- |
| Source | (A) Submit unauthorized change | `~sscs-rm-threat::a-submit-unauthorized-change` |
|        | (B) Compromise source repo | `~sscs-rm-threat::b-compromise-source-repo` |
|        | (C) Build from modified source | `~sscs-rm-threat::c-build-from-modified-source` |
| Dependency | (D) Use compromised dependency | `~sscs-rm-threat::d-use-compromised-dependency` |
| Build  | (E) Compromise build process | `~sscs-rm-threat::e-compromise-build-process` |
|        | (F) Upload modified package | `~sscs-rm-threat::f-upload-modified-package` |
|        | (G) Compromise package registry | `~sscs-rm-threat::g-compromise-pkg-registry` |
|        | (H) Use compromised package | `~sscs-rm-threat::h-use-compromised-pkg` |

### SBOM Integration

Software Bills of Materials (SBOMs) play a crucial role in connecting different supply chains. For each artifact we produce:

- We generate a comprehensive SBOM
- The SBOM documents all dependencies and their sources
- These SBOMs serve as the "connective tissue" between different supply chain segments
- SBOMs provide traceability from any artifact back through its entire dependency tree

## Integration with the Product Security Risk Register

The Supply Chain Risk Management Strategy serves as a critical foundation for the [Product Security Risk Register (PSRR)](/handbook/security/product-security/security-platforms-architecture/risk-register/). Each supply chain-related risk identified in the PSRR must be linked to specific elements within this supply chain model:

1. **Risk Mapping Requirements**

   - Every supply chain risk in the PSRR must reference specific components from this model
   - By extension, risks identifies which part of the supply chain step is affected (Source, Build, or Package)
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
| Progressive achievement of higher SLSA levels with documented risk reduction | Track implemented [SLSA requirements](https://slsa.dev/spec/v1.0/requirements). | This [Epic](https://gitlab.com/groups/gitlab-org/-/epics/15857) for SLSA Level 3 support. |
| Successful passing of external security audits with minimal findings | Map findings related to supply chain. Loop back with coverage above to make sure previously unknown risks are logged. | SecAssurance / AppSec |
| Improved visibility and quantification of supply chain risks and dependencies | Track "dead-ends" in supply chains (missing information). | Each risk is labeled correctly in the PSRR & [Inventory of GitLab public artifacts](https://gitlab.com/gitlab-com/gl-security/product-security/security-architecture/general/-/issues/73) |
| Reduced number of critical and high-risk components in the supply chain | Number of components with risk score above a shreshold. | PSRR |

## References and Resources

- [SLSA 1.0 Specifications and Requirements](https://slsa.dev/spec/v1.0/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf)
- [SPDX SBOM Format](https://spdx.dev/)
- [CycloneDX SBOM Format](https://cyclonedx.org/)
