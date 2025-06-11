---
title: "Sales Play: Expand with Package"
description: "This page has all the information for the expand with Package sales play."

---

Note: Think of a sales play as a recipe. If you follow the recipe, we can achieve more predictable, consistent results. And if we find an asset or approach that works best (or flops), then we can tweak the recipe to continuously improve. **If you have improvements to suggest, please contribute comments to [this issue](https://gitlab.com/gitlab-com/Product/-/issues/4440) to suggest your edits and upvote on others.

### Sales Play Quick Reference Guide

[Sales Play Quick Reference Guide](https://docs.google.com/presentation/d/1F0aZ4k9NutSwYDBCiXF4AcwprBPDcsISvAOYb7NgepM/edit?usp=sharing) (internal)

## Overview

**Objective** - Competitive take out of JFrog's Artifactory and Sonatype's Nexus.

Who is this sales play for?

* Primary: SAEs and AEs who call on one or more existing GitLab Premium/Ultimate customers
* Secondary: SAs and CSMs who support one or more existing GitLab Premium/Ultimate customers

## Who to meet

**Ideal Customer Profile**  - GitLab customers looking to consolidate on GitLab and migrate away from JFrog's Artifactory or Sonatype's Nexus.

* Bonus points for:
  * Organizations at lower maturity level undergoing or planning to undergo tranformation
  * Siloed teams with disparate tools for managing artifacts, such as packages or container images
  * Organizations with stringent regulatory security or compliance requirements

**Target Buyer Personas**

| Persona role  | Possible titles|
| ------------- | ---------------------- |
| Economic buyers    | CISO, VP of IT or CTO, App/Dev Director |
| Technical influencers    | Chief Architect, App Dev Manager |
| Other Personas to consider | Infrastructure Engineering Director |

## Getting Started

Consider the following questions:

* What has prevented the customer from moving away from (or considering moving away from) JFrog's Artifactory?
* Does the customer have any strategic initiative or priority to which consolidating on GitLab and removing an additional tool/license?
* Are you engaged with the right personas/teams (see Target Buyer Personas above)?
* Do you have access to power/authority (a business decision maker)?
* Who are your champions within the account?
* Are the capabilities that are enabled by GitLab Package important to the customer? Why or why not? How do you know?

## Value Discovery

### Common Pains

GitLab Premium/Ultimate customers may be experiencing one or more of the below challenges:

| Challenges ("Before Scenarios")  | So What? ("Negative Consequences")  |
| ------------- |-------------|
| Managing complex tool chains, plugins, and fragile automation scripts   | Added cost, maintenance, and admin overhead |
| Poor developer experience from switching apps and context | Inefficient use of scarce developer resources |
| Costly triaging and tracking of vulnerabilities    | Inefficient use of scarce security resources, lengthy remediation process |
| Costs are unpredictable or concerning as DevSecOps scales | Must find more money as number of supported applications grows |

### Common Benefits

By consolidating on GitLab for package management, customers may experience one or more of the below benefits:

| Desired Future State ("After Scenarios") | So What? ("Positive Business Outcomes")   |
| ------------- | ------------- |
| Reduced cost, maintenance, and admin overhead    | Save money on licensing costs |
| Greater efficiencies for security, admin, and dev    | Less risk and greater velocity of DevSecOps |
| Reduced security exposure, more scanning finds more vulnerabilities    | Reduced risk to finance and reputation |

### Required Capabilities

| Market Requirement                                | Description |
|---------                                          |-------------|
| Publish, download, and validate packages          | A private or public registry for a variety of common package managers. |
| Publish, download, and validate container images  | A highly scalable application that stores and lets you distribute Docker images. |
| Reduce costs with cleanup policies                | Dependencies can build up fast. You need a way to manage storage costs.          |
| Use GitLab metadata to validate artifacts         | Dependency metadata is required to validate you are using the correct one.       |
| Comprehensive app sec scanning methods.            | Automatically find security vulnerabilities in your dependencies while you're developing and testing your applications.  |
| Filter upstream dependencies prior to download.    | Prevent the introduction of security vulnerabilities from external dependencies.  |
| Cache upstream dependencies from multiple sources. | A collection of local, remote, and other virtual repositories accessed through a single logical URL. |
| Sign and protect packages, images, and containers.             | Protect important artifacts from being corrupted or overridden.               |

## Engaging the Customer

| Questions to Better Understand the Customer's needs  | Discovery questions  |
| ------------- | ------------- |
| current state    | 1. Do you want to move away from Artifactory or Nexus? How is that going?<br>2. What challenges does managing these extra tools bring you? <br>3. How are you currently securing your container images and packages?|
| future state    | 1. What if you reduce your total licensing costs and tool chain? ?<br>2. What challenges do you have with your existing tools and can you predict their cost 2 yrs out?<br>3. Would you like improve developer experience and ensure greater security compliance? |
| Required capabilities   | 1. Could GitLab help you get there?<br>2. What if you had one, known cost that enabled ALL your artifact management? <br>3. What if you could cache upstream packages to improve reliability and speed up your builds? |
