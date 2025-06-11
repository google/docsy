---
title: Tracking Incidents
category: GitLab.com
subcategory: Triaging
description: How to perform various tasks that assist in tracking customer impact of incidents.
---

## Overview

Incidents usually result in a larger than normal number of users opening Zendesk tickets. In order to gauge impact and track users affected by an incident for potential followup its necessary to be able to quickly identify all tickets related to a particular incident by creating a Zendesk macro and tag for the incident.

## Create Zendesk Macro

Whether it's because a number of tickets are coming in, or we anticipate tickets,
a macro should be created to track the tickets that are related to a specific incident. Before creating the macro you should be sure that the wording used has been approved by whoever is running the incident, which will vary depending on the type of incident. For production incidents it will be the Incident Manager and Security for security related incidents.

1. Create a new branch in the [Zendesk Macros](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros) project.

1. Create a new file in the [macros/active/incident](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/tree/master/macros/active/Incident) directory for the macro and use the format `Macro Title.yaml` for the title.
    - Examples of how to format the yaml for the macro can be found in [the README](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/tree/master#some-examples) or you can reference older macros in the `incident` directory.
    - Be sure to include the [tag:](#naming-a-tag) and `description:` headers.

1. Submit a merge request for the new macro. Since it will likely be used for an ongoing incident, it's okay to ping `#support_operations` and `#support_leadership` for their expedited approval.

## Naming a Tag

Based on the relevant issue, the tag for the macro should be formed from an abbreviated version of the project tracker name and the issue number or `com` for GitLab.com production incidents.

For example:

- `com_incident_6544` for [this incident](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/6544).
- `sec_comms_302` for [this incident](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/302)
- `tas_incident_444` for [this incident](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues/444)

## See Also

- [How To Perform CMOC Duties](/handbook/support/workflows/cmoc_workflows/) for how to handle production incidents as the CMOC.
