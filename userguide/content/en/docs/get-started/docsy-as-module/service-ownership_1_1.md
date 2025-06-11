---
title: GitLab Service Ownership Policy
---

## Purpose

This policy establishes service ownership within the engineering organization for customer-facing services, outlining responsibilities and ownership structure.

## Scope

This policy applies specifically to customer-facing services and the underlying infrastructure services that support them.

## Service Ownership

### Customer Facing Services

#### Reliability::General

- Contains all customer-facing services tied to the monolith architecture.
- Responsibilities include design, development, deployment, and operational stability.
- Ensuring alignment with organizational standards and meeting service level objectives (SLOs) for customer-facing services.

#### Reliability::Practices

- Contains all services that require designated engineering resources and expertise.
- Responsibilities include design, development, deployment, and operational stability of these services.
- Collaboration with the General Team, relevant stakeholders, and development teams to ensure compliance with organizational standards, overall system architecture, and specialized requirements.
- Higher level of collaboration between the Infrastructure and Development factions to leverage expertise, align goals, and optimize service delivery.

### Infrastructure Services

The Reliability Team maintains responsibility for the underlying infrastructure on which customer-facing services run.  This includes:

- Network infrastructure
- Compute resources
- Storage systems
- Security and access controls
- Monitoring and observability systems

Collaboration between service owners and development teams in establishing and scaling the underlying infrastructure is vital for ensuring efficient service operations and meeting [availability SLAs](/handbook/engineering/monitoring/#gitlabcom-service-level-availability).
