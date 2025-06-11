---
title: Automated Software Delivery POV Scope and Acceptance
description: Automated Software Delivery POV Scope and Acceptance
---

Other Automated Software Delivery Resources: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | [Education Services](https://university.gitlab.com/pages/ci-cd-training/) | [Professional Services](https://about.gitlab.com/services/#acceleration-services)

The Automated Software Delivery solution is identified for organizations who are trying to reduce the complexity and increase the velocity of Continuous Integration (CI) and Continuous Delivery/Deployment (CD) capabilities to deliver better software faster.

From the early discovery when qualifying the POV, it is confirmed that the current CI/CD pipeline solution does not provide sufficient flexibility in organizing pipelines and requires too much administrative overhead to operate and integrate the CI/CD system with the source code repository.

The key objective of the POV is to validate the value of a tightly connected CI/CD pipeline system that does not require additional integration or plugins to provide a broad variety of pipeline shapes and capabilities.

### Input to the POV

- Pain points identified: Toolchain review and mapped out existing app sec tools and usage
- High level ROI discussion identifying potential tool consolidation (hard cost); and overall efficiency gains with transformative process with shift left security
- Both DevOps + App sec team are stakeholders to be involved

### Suggested Success Criteria

- Business Driver: increase velocity, consolidate/reduce spending, improve security posture, protect brand and reputation
- Enterprise Initiative and Sponsor: cloud transformation, CIO
- Required capabilities with the objectives to infuse security earlier in the development process, ability to scan all code and act them real time. Have the security oversight as the integral part of the end to end DevOps.

| Required Capability | Acceptance | Objective | GitLab Feature |
| ---                 | ---        | ---       |---             |
| Low friction developer experience with CI pipelines | Developers are able to easily run pipelines.  Developers are able to modify pipelines using normal development methnods | Continuous Integration  | Pipeline per branch, pipeline configuration as code in repo with application, Pipeline structure is intuitive |
| Developers quickly fix problems with immediate and precise pipeline feedback | Pipelines fire on push, on merge, from UI and API | CI, shift left | Pipeline results and code quality report in merge request widget |
| CI support for monorepos | CI only for parts of repo that changed | Ease of dependency management | Parent - Child pipelines, `when: changed:` directive, DAG pipelines |
| Pipelines scale to match performance and cost demands | Able to run hundreds of pipelines concurrently | Scalability | scalable job queues, scalable runner architecture |
| Coordinated pipeline execution across multiple repositories | A pipeline running for one repo is able to trigger pipelines in other repos and record outcome | Pipeline coordination | Cross-project pipelines |
| Shared and reusable pipelines | Pipelines can be composed from reusable templates and included pipelines | Innersourcing and best practices | Pipeline templates, includes, compliance pipelines |
| Enforce compliance with required pipelines | Mandatory parts of a pipeline can be set up for an entire group of repos | Organizational compliance | Compliance pipelines, Security Scan Policies |
| Control who can run pipelines and under what conditions | Running pipelines against "protect" branches is limited by role | Continuous Deployment | Credentials Inventory,  protected branches, runners, variables and tags |
| Limit access to deployment pipelines | Only designated `maintainer` users can deploy to higher level environments | Continuous Deployment | Protected runners, variables, environments and branches |

### Other POV Scope and Acceptance

SA working with SAE and AE can define the POV scope with the customer, with alignment to the business values and the GitLab solution. For each solution, the typical scope and acceptances are listed for reference but the team should define the scope, time and execution with acceptance for each engagement.

- [DevSecOps](/handbook/solutions-architects/tools-and-resources/pov/devsecops/)
- [Software Compliance](/handbook/solutions-architects/tools-and-resources/pov/compliance/)
- [DevOps Platform](/handbook/solutions-architects/tools-and-resources/pov/platform/)
