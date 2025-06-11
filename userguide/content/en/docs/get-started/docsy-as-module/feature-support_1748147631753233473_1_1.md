---
title: "Infrastructure Feature Support"
description: "How the Infrastructure Department supports shipping features to Production."
---

## Getting started

When a GitLab feature is released to Production, it can be released at one of these levels: Experiment, Beta, Generally Available.
(See the [product documentation](https://docs.gitlab.com/ee/policy/development_stages_support.html) for further details.)

The availability of a feature is closely related with our ability to support the feature on our SaaS Platforms.

These guidelines ensure that features in our Production environments can be operated by our [Reliability teams](/handbook/engineering/infrastructure/team/) to match the expected level of support.

### Requesting and creating new GCP infrastructure resources

Runway is the preferred method to create and launch new services. Self service onboarding is available via the [onboarding guide](https://docs.runway.gitlab.com/guides/onboarding/) and any questions should be directed to the [`#f_runway` Slack channel](https://gitlab.enterprise.slack.com/archives/C05G970PHSA). Runway includes automated configuration and Runway provides many of the Infrastructure Readiness requirements as standard. Using Runway will make it easier and faster to promote new features into a Generally Available state in Production.

If your requirements are not currently supported by Runway, or on the [Runway roadmap](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969), you can use the [Sandbox Cloud GCP Group Project issue template](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=gcp_group_account_create_request) to request new resources. After the GCP project is created, it can be configured as needed, this provides initial provisioning and IAM management. This provides basic resources and is available to anyone team-member.

## Severity levels for different product maturity

1. Incidents for Experimental and Beta features are assigned as [Severity 4](/handbook/engineering/infrastructure/incident-management/#incident-severity)
1. Incidents for Generally Available features are assigned according to the [incident severity table](/handbook/engineering/infrastructure/incident-management/#incident-severity) listed on the Incident Management page.

## How to expedite features to General Availability

We are able to help expedite features to General Availability.

In order to expedite a prototype feature, on the epic tracking the work required to reach General Availability, include the label `~expedite_prototype`.
Infrastructure leadership are subscribed to this label and will be notified that the intention is to expedite this feature.

Infrastructure leadership will confirm with the epic DRI if they are able to support this.

Epics with this label are visible in the [Prototype Status epic board](https://gitlab.com/groups/gitlab-org/-/epic_boards/44867).
