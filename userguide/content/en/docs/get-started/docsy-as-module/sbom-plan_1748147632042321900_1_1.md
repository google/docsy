---
title: "Software-Bill-of-Materials (SBOM) Maturity Model and Implementation Plan"
aliases:
  - /handbook/security/security-assurance/dedicated-compliance/sbom-plan/
---

## Purpose

The purpose of this page is to provide direction on where GitLab needs to go as both a software producer and software consumer to provide transparency, and most importantly visibility, into the security of our software supply chain. GitLab is evaluating a very dynamic regulatory landscape with references to SBOM requirements in numerous draft legislation in both the U.S. and non-U.S., executive orders and directives, customer requests, and numerous community frameworks and formatting specifications.

### Why SBOMs

The ability to generate and consume complete and accurate SBOMs is **essential** for securing our software and managing our software supply chain risk. Here are a few reasons why we should prioritize it.

1. **Transparency is one of our core values**
    - Providing complete and accurate information the components used in our software, beyond name and version to include pedigree and vulnerability exploitability data, is directly in line with our values and the fact that we are an open core company. SBOMs are the vehicle through which software transparency can be achieved.
1. **Lack of visibility into software dependencies and vulnerabilities is a top risk for every company**
    - The information in SBOMs from other companies and open source projects helps GitLab make quick, risk-informed decisions.
1. **Competitive differentiation**
    - The world is still coming to terms with the reality of SBOMs, both present and future. As a DevSecOps category leader, GitLab will be held to a higher standard than our competitors and will need to be leading the world in this domain from both a product perspective and a customer trust perspective.
1. **Efficiency**
    - Conveying information in a standard, authoritative format such as CycloneDX and VEX means that we and our customers will gain numerous efficiencies. For example - there will never be questions/requests for which dependencies are actually present in software and which vulnerabilities are exploitable and their status.
1. **Regulatory mandates**
    - Although there are few binding requirements today, SBOMs have been referenced as a requirement for U.S. Federal Agencies to do business with software providers in and Executive Order, the National Cybersecurity Strategy, NIST SSDF standard, CISA, and is already appearing in draft legislation and Requests for Information (RFI). Non-U.S. public sector and commercial regulatory frameworks are following suit, and the regulatory landscape is expected to very dynamic over the coming years. See the Resources section at the bottom of this page for more information.

## Current State (as of %16.4)

Refer to GitLab's Software Supply Chain Security [direction page](https://about.gitlab.com/direction/supply-chain/) for the latest information on current and planned features related to SBOMs.

GitLab the Product currently has the following SBOM features: ability to generate CycloneDX-formatted SBOMs after GitLab [Dependency](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html#cyclonedx-software-bill-of-materials) and [Container](https://docs.gitlab.com/ee/user/application_security/container_scanning/index.html#cyclonedx-software-bill-of-materials) scans, and the ability to view a [Dependency List](https://docs.gitlab.com/ee/user/application_security/dependency_list/) with vulnerability and license data pulled in from existing GitLab databases. As of 16.4, GitLab the product added an API for [Pipeline-specific CycloneDX SBOM exports](https://docs.gitlab.com/ee/api/dependency_list_export.html) and the ability to create [group-level dependency lists](https://docs.gitlab.com/ee/user/application_security/dependency_list/).

GitLab the Company uses the Dependency List for viewing vulnerability information for key projects, however generally uses the [Vulnerability Report](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/) instead after running dependency and/or container scans in CI pipelines. Although CycloneDX SBOMs are generated for most of our projects, we do not yet consume these, combine them with one another, generate VEX BOMs, nor make them readily available to customers.

## SBOM Maturity Model (work in progress)

### Foundational Capabilities

#### GitLab the Product

- Ability to automatically generate complete and accurate SBOMs in an accepted format such as CycloneDX for GitLab repositories, which includes all of NTIA's recommended minimum data elements: Supplier Name, Component Name, Version of the Component, Other Unique Identifiers, Dependency Relationship, Author of SBOM Data, and Timestamp.
  - Many of these fields are available today (sampled SBOM from a dependency scan job for `gitlab-org/gitlab`), however, Dependency Relationship and Author must be enabled. [Feature request for missing fields](https://gitlab.com/gitlab-org/gitlab/-/issues/428073).
- Feature for "Source SBOM" created directly from the development environment, source files, and included dependencies used to build a product artifact. Typically generated from software composition analysis (SCA) tooling, with manual clarifications.
  - This is already a feature, see [Dependency List](https://docs.gitlab.com/ee/user/application_security/dependency_list/) docs. It cannot yet be exported into CycloneDX format.
- Feature for "Analyzed SBOM" generated through analysis of artifacts (e.g., executables, packages, containers, and virtual machine images) after its build. Such analysis generally requires a variety of heuristics. In some contexts, this may also be referred to as a "3rd party" SBOM. Typically generated through analysis of artifacts by 3rd party tooling.
  - This is already a feature as CycloneDX SBOMs can be produced in CI pipelines for both [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/index.html#cyclonedx-software-bill-of-materials) and [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/index.html#cyclonedx-software-bill-of-materials).
- Support for digitally signing SBOMs at build or release time (release evidence) and/or upon being generated.
  - This is already a planned feature reflected on our Software Supply Chain Security direction page under [SBOM generation and management](https://about.gitlab.com/direction/supply-chain/#provenance-and-signing).

#### GitLab the Company

- Generate complete and accurate SBOMs for all product-related / released software for customers. Document instances where SBOMs are not complete/accurate (e.g. due to declaring dependencies in an unexpected way).
  - [Export release SBOM for GitLab Omnibus](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/6933)
- Combine GitLab SBOMs to ensure they are representative of GitLab product releases, as opposed to one-off components/projects.
  - This can be done manually, for example using CycloneDX CLI, but there is no native GitLab support for this.
- Create a company-wide SBOM Standard which includes the practices and process that must be followed such as the tools and format, how frequently we will generate SBOMs and for which software/projects, what level of depth it needs to be, how it will be used/consumed, how we will track inaccuracies or incompleteness, and how they will be distributed/shared with customers.
- Digitally sign all SBOMs and/or assemblies within BOMs to provide integrity verification and non-repudiation.
- Maintain readily accessible and digitally signed SBOM repositories, and have a documented mechanism to share SBOMs with customers. The mechanism may be within the [Security CAP](https://trust.gitlab.com/) or through a similar, publicly available page. Inform Product, Field Security, and Sales of how customers can request/access GitLab SBOMs.

### Intermediate Capabilities

#### GitLab the Product

- Ability to generate and annotate a VEX BOM (or embedded VEX data within the SBOM) for a linked SBOM.
  - [Support VEX in SBOM Reports](https://gitlab.com/gitlab-org/gitlab/-/issues/413694)
- Feature for "Build SBOM" generated as part of the process of building the software to create a releasable artifact (e.g., executable or package) from data such as source files, dependencies, built components, build process ephemeral data, and other SBOMs. Typically generated as part of a build process. May consist of integrated intermediate Build and Source SBOMs for a final release artifact SBOM.
  - This is already a planned feature reflected on our Software Supply Chain Security direction page under [Release Evidence Generation](https://about.gitlab.com/direction/supply-chain/#provenance-and-signing).
- Include additional data elements on GitLab's SBOMs to better inform overall risk posture and expanded use cases. This includes provenance and pedigree information for dependencies, links to VEX BOMs, license information, hash for each component, and purl/cpe/swid references.
- Include metadata for generating a [dependency graph](https://cyclonedx.org/use-cases/#dependency-graph) such as bom-ref for every component.
- GitLab has a feature to import 3rd party SBOMs (ideally within GitLab using UI and API) and enrich this with vulnerability data (e.g. from GitLab Security Advisory database).
- Include [security advisories as external references](https://cyclonedx.org/use-cases/#security-advisories) within SBOMs / VEX BOMs.
- Develop a feature to combine SBOMs within GitLab to get a full picture of a particular component/assembly or product. For example this could be achieved by manually selecting various SBOM job artifacts and/or dependency lists from within a top-level group.
- Native support for other SBOM formats such as SPDX. Customers can already convert CycloneDX outputs into SPDX via a custom CI job or via publicly available OSS tools.

#### GitLab the Company

- GitLab has a mechanism (e.g. contract) to hold 3rd party commercial vendors accountable for the same standard that we set for ourselves regarding acceptable SBOM format, level of detail, frequency, completeness/accuracy, etc. This includes ensuring SBOM availability and accuracy as part of our Third Party Risk Management program.
  - Maintain vendor vulnerability disclosure reports at the SBOM component level.
- GitLab has a process to consume and analyze SBOMs (ideally within GitLab using UI and API) from 3rd party commercial vendors and non-GitLab open source software to understand if there are vulnerability or licensing risks.
- GitLab maintains up-to-date vulnerability metadata for its SBOMs via annotating and updating linked VEX BOMs (or embedded VEX metadata). The intent is to relay VEX info to customers.
- Automatically consume and report on vulnerabilities gleaned from GitLab-generated SBOMs and linked VEX BOMs at a point in time. The intent is to drive internal security awareness and remediation prioritization.
- Produce and maintain a SaaS SBOM for GitLab.com and GitLab Dedicated.
- Produce and maintain a SBOM for GitLab Omnibus and CNG.

### Advanced Capabilities

#### GitLab the Product

- GitLab has a feature to import 3rd party VEX BOMs to make it possible to view vulnerability metadata from 3rd party and other open source software directly in GitLab.
- Automatically keep VEX BOMs up to date by extracting [remediation status information using pedigree](https://cyclonedx.org/use-cases/#vulnerability-remediation) metadata.
- Support for SBOM [assemblies](https://cyclonedx.org/use-cases/#assembly) to show relationship of nested software components/products and transitive dependencies.
- Provide support for [other properties](https://cyclonedx.org/use-cases/#properties--name-value-store) in GitLab-generated SBOMs that allow for automating the triage and remediation process (e.g. using built-in name-value store to identify product groups or departments, internal severity information, remediation SLAs/due dates, etc.).
- Provide support for [composition completeness](https://cyclonedx.org/use-cases/#composition-completeness) information within the SBOM.
- ML Transparency metadata (once supported by industry-accepted specifications such as CycloneDX).
- Support [Vulnerability Disclosure Report (VDR)](https://cyclonedx.org/capabilities/vdr/) as a feature in SBOM reports. Issue: [Support Vulnerability Disclosure Report (VDR) in SBOM reports](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8298).
- Feature for "Deployed SBOM" provides an inventory of software that is present on a system. This may be an assembly of other SBOMs that combines analysis of configuration options, and examination of execution behavior in a (potentially simulated) deployment environment. Typically generated by recording the SBOMs and configuration information of artifacts that have been installed on systems.
- Feature for "Runtime SBOM" generated through instrumenting the system running the software, to capture only components present in the system, as well as external call-outs or dynamically loaded components. In some contexts, this may also be referred to as an "Instrumented" or "Dynamic" SBOM. Typically generated from tooling interacting with a system to record the artifacts present in a running environment and/or that have been executed.

#### GitLab the Company

- Develop risk management and measurement capabilities to dynamically monitor the impact of SBOMs' vulnerability disclosures on the acquiring organization.
- Perform binary decomposition of software installation packages to generate SBOMs when no vendor-supplied SBOM is available (e.g., legacy software), when technically and legally feasible.
- Ensure all available SBOM spec properties are completed for GitLab's SBOMs including vulnerability metadata/VEX, composition completeness information, assembly data, and other properties as needed.
- Add [Vulnerability Disclosure Report (VDR)](https://cyclonedx.org/capabilities/vdr/) data to CycloneDX SBOMs.

## Proposed SBOM Implementation Plan / Roadmap (not yet agreed to)

### FY 25

Target implementation of all Foundational capabilities and select Intermediate capabilities for both GitLab the Product and GitLab the Company.

### FY 26

Target implementation of all Intermediate capabilities and select Advanced capabilities for both GitLab the Product and GitLab the Company, as warranted by customer value-add, product differentiation, or security/compliance requirements.

## Resources
