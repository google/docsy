---
title: "Production Readiness: Compliance Assessment"
description: "The Compliance Production Readiness Assessment is a process designed to make it clear what obligations systems owners have for configuring and hardening a system/tool/service in order for GitLab to meet its compliance and regulatory obligations."
---

The Compliance Production Readiness Assessment is a process designed to make it clear what obligations systems owners have for configuring and hardening a system/tool/service in order for GitLab to meet its compliance and regulatory obligations.

## Scope

This Compliance Production Readiness Assessment process applies to new systems/tools/services or any existing system/tool/service that is processing new data or existing data in a different way that might change the compliance and regulatory obligations.

An example of a scope change would be a system like Calendly that might only be processing Yellow data today but due to a new feature is now processing Orange data. This new type of data being ingested into such a system would change the security control requirements and would required increased support from the system owner to help ensure these controls are operating effectively.

## Process

1. If you have a new system that you're thinking about onboarding or an existing system that will change the type of data being processed or a system that is connecting to a new system, start by [opening a Security Compliance intake issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/security-compliance-intake/-/issues/new?issuable_template=intakeform) and include the system name, data types (old and new), and system connection information. This will kick off a triage process by the Security Risk team to gather additional information.
1. Security Risk and Security Compliance will work together to determine what security controls will need to be tested and when. System owners and relevant stakeholders will be notified about these requirements
1. Testing will be scheduled based on capacity and priority and will follow the [GCF Security Control Lifecycle](/handbook/security/security-assurance/security-compliance/security-control-lifecycle/)
1. Testing will result in a system health rating and testing observations/findings (if applicable) which will be communicated out to system owners and relevant stakeholders.

## Questions about this process

Please reach out to the Security Compliance team using the `@sec-compliance-team` tag in the [#sec-assurance slack channel](https://gitlab.slack.com/archives/C0129P7DW75) and we can work with any questions you have about this process.

## FAQ

1. I'm just testing something with production data but don't plan to keep the data here long term. Do I need to engage with the above process?
   - Yes. We have contractual obligations to our customers and the scope fo our external security audits change when we store RED data in a new location regardless of how long the data will exist there.
1. I have a system processing RED data, but I have never had to engage with the above process. Do I need to do anything?
   - Yes. This might be an indication that the Security Compliance teams aren't aware of this new environment which means we will need to test the system as soon as possible.
1. I am working on a demo of a tool and we are going to use actual data, but I haven't signed a contract yet. What do I need to do?
   - Open an issue according to the above process. Our processes are based on the type of data being used on not whether or not we're paying for a service.
1. I have a new system that will be processing [RED data](/handbook/security/standards/data-classification-standard/) or an existing system that will now be processing RED data. What requirements are there for me as a system owner?
   - Open an issue according to the above process and work with Security Compliance to provide evidence and system context so we can understand the compliance or regulatory requirements.
1. Same as above for ORANGE Data
   - Same requirements as RED data to start the intake process.
1. Same as above for YELLOW Data
   - Same requirements as RED data to start the intake process.
1. Same as above for GREEN Data
   - Same requirements as RED data to start the intake process
