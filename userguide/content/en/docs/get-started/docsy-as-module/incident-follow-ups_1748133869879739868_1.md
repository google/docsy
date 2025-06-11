---
title: "Incident Follow Up Issues"
---

This page documents the process for managing follow-up items from incidents.

## Terminology

- **Follow Up Item**: Action items, bugs, or improvements identified during an incident that need to be addressed after the incident is resolved.
- **Incident Lead**: The person responsible for coordinating the incident response and ensuring proper follow-up after resolution.
- **Corrective Action**: A follow-up item aimed at preventing similar incidents in the future (synonymous with InfraDev for labeling purposes).
- **InfraDev**: [Infrastructure development issues](/handbook/engineering/workflow/#infradev) that affect the production platform.

## Default Issue Locations

We use different default projects for incident follow-up issues based on privacy requirements and team structure:

### GitLab.com Team

- **Default Location**: `gitlab-com/gl-infra/incident-follow-ups`
- This project serves as the initial triage point for all follow-up items from GitLab.com incidents

### Dedicated Team

- **Default Location**: `gitlab-com/gl-infra/dedicated-follow-ups`
- This private project preserves confidentiality for customer-specific incidents

## Incident Lead Responsibilities

Incident Leads have the following responsibilities for managing follow-up items:

1. **During the Incident**:
   - Ensure all follow-up items are properly documented
   - Assign initial owners for each follow-up item where possible

2. **After the Incident**:
   - Review all automatically created follow-up issues within 1 business day
   - Verify that each issue has appropriate context from the incident
   - Ensure each issue is moved to the correct project for the team that will address it
   - Apply appropriate labels including team and group labels
   - Assign the issue to the correct team member or manager for triage

## Issue Triage Process

### For GitLab.com Incidents

1. Follow-up items are automatically created in `gitlab-com/gl-infra/incident-follow-ups`
2. To attach an existing GitLab issue to an incident as a follow up instead of creating a new one, paste the issue's URL into the slack channel
3. The Incident Lead reviews each issue and:
   - For infrastructure issues: Apply appropriate infrastructure team labels
   - For application issues: Move to `gitlab-org/gitlab` using the `/move` command
   - For service-specific issues: Move to the appropriate service project (e.g., `gitlab-org/gitaly` for Gitaly issues)

4. Apply appropriate group/team labels:
   - Engineering team issues should include the group label (e.g. `group::database`)
   - Infrastructure team issues should include the team label (e.g. `team::database`)
   
5. When moving an issue, ensure the `infradev` label is maintained on the issue

### For Dedicated Incidents

1. Follow-up items are automatically created in `gitlab-com/gl-infra/dedicated-follow-ups`
2. To attach an existing GitLab issue to an incident as a follow up instead of creating a new one, paste the issue's URL into the slack channel
3. The Incident Lead reviews each issue and:
   - Applies appropriate team labels
   - Ensures the issue has a clear owner
   - Maintains confidentiality by keeping customer-specific information in the private repository

4. Only move issues if the Dedicated team requires a different location (for example, if it's an issue that needs to be addressed by a team outside of the Dedicated organization)

## Tracking and Visibility

To ensure no follow-up items fall through the cracks:

1. **Weekly Triage**: The Production Engineering team performs a weekly triage of all open issues in the incident follow-up repositories to identify any untriaged items
2. **SaaS Availability Reviews**: The status of critical incident follow-up items is reviewed in SaaS Availability meetings
3. **Engineering Teams**: Engineering directors and managers are expected to regularly triage the `infradev` issues assigned to their teams

## Labels

The following labels are automatically applied to all incident follow-up issues in both repositories:

- `infradev`: Applied to all follow-up issues
- `corrective action`: Applied to all follow-up issues

Additional labels that should be manually applied:

- Team labels (e.g., `team::database`, `team::observability`)
- Group labels (e.g., `group::database`, `group::analytics`)

## Template and Issue Format

Follow-up issues contain:

1. A link to the original incident
2. A link to the Post Incident Review (PIR) if one has been created
3. Context from the incident
4. A description of the required action
5. Due date (if specified)

Incident Leads should ensure each issue contains:

- Clear acceptance criteria
- Sufficient context for someone unfamiliar with the incident to understand the issue
- Links to relevant logs, metrics, or other evidence from the incident

## References

- [Engineering Workflow - InfraDev](/handbook/engineering/workflow/#infradev)
- [Product Processes - InfraDev](/handbook/product/product-processes/#infradev)
- [Incident Management - Corrective Actions](/handbook/engineering/infrastructure/incident-management/#corrective-actions)
