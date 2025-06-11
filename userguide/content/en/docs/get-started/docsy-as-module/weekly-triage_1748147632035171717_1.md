---
title: "Weekly Triage"
description: "Provides actionable guidance for Vuln Mgmt team members to perform weekly triage tasks"
---

## Overview

The Vulnerability Management team receives, reviews, and approves/denies various requests including for [Deviation Requests](../../../security-assurance/security-compliance/poam-deviation-request-procedure/) or [SLA Exceptions](../sla-exceptions.md). To ensure timely consideration of these requests, a team member is assigned randomly on a rotation as the DRI for the week for the initial triage and handling of new requests for that week.

Automation creates a new Weekly Triage Issue at the start of each week, and randomly chooses a team member to assign it to. The issue is based on [this issue template](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/blob/37bb0482dbc9693229e56c04f379ab3b0abe1a38/.gitlab/issue_templates/weekly_triage_rotation.md) which includes 

## General Guidance

TODO

## Specific Guidance

### POA&M

TODO        
      
### SLA Exceptions

TODO

### SLA Exception near breach or breached

As part of the weekly triage rotation, a review of approved SLA Exception's nearing their due date is performed. These steps are here to guide the process and provide consistent templated messaging to the SLA Exception request owner.

For an exception to fall under the `At risk SLA Exceptions` table, the due date must fall in the 2 weeks prior to the Weekly Triage Rotation issue `due_date` and be in an open state.

1. Add a comment to the SLA exception using the template below.
   
    ```PLAINTEXT
    Hi @<author>, 

    This SLA Exception is at risk of breaching due date.

    Has remediation work been completed?
    Can this exception request be closed?

    If not, please provide
      - An expected remediation timeline.
      - Detail why the existing extension was missed.
      - A requested to update the exception length if need be.
      
    note: An extension to the initial exception length is not a given and will require a approval by the Vulnerability Management Team.

    If all remediation work has been completed and deployed
      - Please confirm this is the case.
      - Please close close the SLA Exception Request issue.
   
    Thank you for your time.
    The Vulnerability Management team
    ```
      
### Deviation Requests

TODO
      
### Wiz issue/finding

TODO
