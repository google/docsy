---
title: "Software Development Lifecycle Policy"
controlled_document: true
---

## Purpose

Secure software development is critical to developing and maintaining a safe and trusted application. This policy outlines the general components of GitLab's software development lifecycle.

## Scope

This policy applies to anyone developing code at GitLab in support of GitLab's production applications. For in depth view of development process, see [product development flow](/handbook/product-development-flow/).

## Roles and responsibilities

| Role  | Responsibility |
|-----------|-----------|
| Security Governance | Responsible for creating and implementing this policy |
| Team members | Responsible for execution of the policy statements |

## Policy

### Inception

This stage occurs across different mediums depending upon each team's individual processes.

During this stage, the following information is established:

- problem statement and desired results
- scope is defined
- identification of key stakeholders
- a detailed project plan with milestones and deliverables is created

### Requirements

During the requirements stage, requirements are gathered from stakeholders relevant to each project.

At a minimum, requirements must identify:

- what the application or functionality will do
- the necessary components
- the resources required to complete the project

Identified requirements are documented in the project management tool and made available for review and approval by relevant stakeholders.

### Design

During the design stage, design documents are captured in the project management tool as version controlled documents.

Considerations for design documents are:

- Architecture: Teams define if they want a specific type of template or if they want to implement any type of industry practice.

- User Interface: Teams define the way users will be interacting with the application or function.

- Security: Developers must define how they will keep the application secure. This includes deciding how to protect user data and general application data.

- Programming: Define the project’s tech and tool stack.

Design documents must be approved by relevant stakeholders prior to being merged (prototyping).

### Development and Testing

Software development at GitLab is accomplished using industry standard development practices.

Software development must be accomplished using GitLab's development platform in a version controlled manner.

[Code review guidelines](https://about.gitlab.com/handbook/engineering/workflow/code-review/) must be adhered to when developing code at GitLab.

Development work must undergo testing and approval prior to deployment to production. This includes configuration changes and other related changes that may not be considered "development" work.

### Deployment

Deployment of software at GitLab must adhere to all defined staging, testing, release, and rollback processes.

After any necessary verification in production is completed, details of changes are pushed to the releases page to be communicated as part of the relevant release notes.

### Maintenance

GitLab continuously monitors the state and stability of its platforms.

Maintenance of GitLab's platform is conducted in accordance with [GitLab's release and maintenance policy](https://docs.gitlab.com/ee/policy/maintenance.html).

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).
