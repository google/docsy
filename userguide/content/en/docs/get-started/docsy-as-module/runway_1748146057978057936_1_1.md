---
title: "Runway"
description: "Runway is GitLab's internal Platform as a Service, which aims to enable teams to deploy and run their services quickly and safely."
---

## What is Runway?

Runway is GitLab's internal Platform as a Service implementation, which aims to enable teams to deploy and run their services quickly and safely. Having built-in capabilities for monitoring and scaling means that Development teams can focus on delivering and enhancing their features.

Runway is maintained by the [Runway](/handbook/engineering/infrastructure/team/runway/) team.

## Initial Goals

- Enable Development team to deploy their service using the built-in capabilities for infrastructure, scaling, monitoring that Runway provides.
- Focused on satellite services that are stateless and thus can be autoscaled to meet demand.
- Integration with GitLab's existing tooling (e.g. Pipeline) to enable a streamlined experience.

## Services deployed on Runway

- [AI-gateway](/handbook/engineering/architecture/design-documents/ai_gateway/)
- [Duo Workflow](/handbook/engineering/architecture/design-documents/duo_workflow/)
- [PVS Service](https://docs.gitlab.com/ee/administration/external_pipeline_validation.html)
- [Woodhouse](https://gitlab.com/gitlab-com/gl-infra/woodhouse)
- [glgo](https://gitlab.com/gitlab-org/architecture/gitlab-gcp-integration/glgo)
- [Runway Docs](https://docs.runway.gitlab.com/)
- [Topology Service](/handbook/engineering/architecture/design-documents/cells/topology_service/)
- [Contributors Platform](https://gitlab.com/gitlab-org/developer-relations/contributor-success/contributors-gitlab-com)

## Milestones

## Documentation

[Runway Documentation](https://docs.runway.gitlab.com/)

### Is Runway suitable for my service?

Yes! Runway is a new initiative and will therefore have some limitations. However, it's important that the team can understand your specific requirements so we can build a robust system that is able to deploy any service.

### How do I deploy a service through Runway?

Please reach out to the team following the links below.

### How do I get further help?

If you need further support in understanding whether Runway can help you, or you have feedback or questions, please reach out to the [Scalability:Frameworks](/handbook/engineering/infrastructure/team/scalability/frameworks/) team by either creating an [Issue](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/new) or sending a message in [#f_runway](https://gitlab.slack.com/archives/C05G970PHSA).

### Technical Specification

- [Epic: Runway - Platform tooling to support AI Innovation](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969)
- [Runway Docs: Architecture](https://gitlab.com/gitlab-com/gl-infra/platform/runway/docs/-/blob/master/architecture.md)
- [Blueprint: GitLab Service-Integration: AI and Beyond](https://docs.gitlab.com/ee/architecture/blueprints/gitlab_ml_experiments/)

## Resources

- Slack channel: [#f_runway](https://gitlab.slack.com/archives/C05G970PHSA)
- [Issue tracker](https://gitlab.com/gitlab-com/gl-infra/platform/runway/team/-/issues/)
- [Project repository](https://gitlab.com/gitlab-com/gl-infra/platform/runway)
- [Youtube: Runway Demos](https://www.youtube.com/playlist?list=PL05JrBw4t0Kosd76voQ6tbQbW-YnlIuBy)
