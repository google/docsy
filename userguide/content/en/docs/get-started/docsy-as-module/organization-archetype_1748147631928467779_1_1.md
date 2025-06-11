---
title: Organization Archetype
---

## What is an organization archetype?

An organization archetype is a typical example of an organizational setup. In our case, we are specifically interested in organization archetypes relevant to how the organization might engage with GitLab. We've learned that roles of various [personas](../personas) change based on the specific organizational setup of their company. This handbook page captures the organization archetype we have identified.

### How do you use organization archetypes as a Product Manager?

An organization archetype can be considered an additional layer to an end-user's demographics alongside [personas](.../personas). When collecting insights during interviews, it would be useful to understand the context of the user within their role and organization via organization archetypes.

## Cloud Infrastructure Resourcing

Cloud infrastructure enables flexible and purposefully designed infrastructure per application. Because of this, infrastructure provisioning and software development has become part of a coupled workflow. We have observed 5 different types of infra team or platform team models outlined below.

### All-in-One Team

![All-in-One](/images/product/personas/all-in-one.png)

All-in-One teams use resources democratically. In this model, developers are also DevOps engineers. They have access and credentials to infrastructure and related toolings and are expected to use them as needed. There may be unofficial specialist that teammates go to for help.

**Company Size:** SMB

Examples of how resources are used:

- **Monitoring & Alerting**
  - Teams reuse SaaS templates across different clients, adjusting as needed
  - Team members use both service and infrastructure dashboards
- **CI Templates**
  - Teams create CI Templates as a community process
  - Everyone contributes to and starts from the same templates
  - Basic templates can be used across clients, with adjustments
  - CI Templates are private if they have environment variables

### Service Model Team

![Service Model](/images/product/personas/service-model.png)

On Service Model teams, infrastructure teams gate access to and are responsible for optimize the use of resources. Other development are customers of the infrastructure team and have to request resources and ask for help when needed.

**Company Size:** Mid-Market, Enterprise

Examples of how resources are used:

- **Public Cloud Infrastructure**
  - only centralized Infra teams can access cloud provider resources
  - Devs are able to check audit logs
  - to request access to cloud resources, Dev files tickets to infrastructure via tools like Freshworks
  - Devs have more freedom to work with cloud resources in Dev environments
- **Development Environments**
  - Infra teams experiment with dummy environments to see how changing the number of pods impacts performance (in non-production environments)
- **Audit Logs**
  - Devs self-serve audit log modules from the Infra team, and adapt them as needed

### Service & Embedded Team

![Service & Embedded](/images/product/personas/service-embedded.png)

On service & embedded teams, resource use is guided or optimized in partnership. Teams buddyup with specialist as needed so that both Dev and Ops are working together.

**Company Size:** SMB, Small Enterprise

Examples of how resources are used:

- **Deployment Patterns**
  - Infra teams offer a self-serve way for Devs to increase the number of pods in a deployment
- **Database Provisioning**
  - To work on Proof-of-Concepts (PoCs), Devs can go into the AWS Development account and experiment with different ways to use databases to help them optimize their use of them
  - They work with service teams to implement changes
- **Test Environments**
  - Infra teams have tried to set up local test environments that mirror production environments for Devs to use because they would be helpful in the complex areas worked on by these teams. But it has proven very challenging  for Infra teams to get Devs to make updates with their changes

### All-in-One & Service Model

![All-in-One & Service](/images/product/personas/all-in-one-service.png)

On All-in-One & Service teams, specialized roles guide/enforce DevOps/SecOps practice. Within development teams, they have the access to many of the resources. Central platform teams provide tools to facilitate self-service and enforce governance and compliance.

**Company Size:** Large Enterprise

Examples of how resources are used:

- **CI Templates**
  - All-in-One & Service teams are navigating the entire stack using a standardized set of CI templates in coordination with SaaS or in-house tools. Specialized support teams (e.g., security) monitor this workflow from the sidelines, and auto-correct or account for deviations as needed
- **Secrets Workflow**
  - All-in-One team members determine how secrets are handled for different types of services based on guidance or requirements provided by Security teams (e.g., what security scans to run). If All-in-One team members deviate from suggested patterns, they notify security teams or complete a waiver request
  - Platform teams create internal documentation for All-in-One team members to follow

### All-in-One & Embedded Model

![All-in-One & Embedded](/images/product/personas/all-in-one-embedded.png)

On All-in-One & Embedded teams, DevOps engineer work embedded within product groups or product lines to co-create DevOps/SecOps practice relevant to the users.

**Company Size:** Large Enterprise

Examples of how resources are used:

- **CI Templates**
  - All-in-One & Embedded team members who specialize in different areas work in close concert to coordinate specialized workflows that are specific to different environments
- **Deployment Patterns**
  - All-in-One & Embedded teams members create specialized deployment patterns that are specific to the products line they are working within, use cases and security requirements. They refine them together
