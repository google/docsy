---
title: "Tier-2 Oncall"
---
The Tier-2 SME on-call program enhances incident response by establishing a second tier of specialized support to complement the existing SRE EOC (Engineering On-Call) rotation. Subject Matter Experts (SMEs) provide domain-specific knowledge to help resolve complex incidents faster, improve MTTR (Mean Time To Recover), and increase ownership and accountability for service reliability.

## Expectations

- Respond when paged by:
  - Tier-1 SRE EOC
  - Security
  - Self-Managed Support
- Assist with complex, domain-specific incidents that Tier-1 cannot resolve independently
- Maintain a 24/7/365 rotation with reliable coverage across time zones
- Acknowledge pages within 15 minutes and have a clear escalation path if the primary responder is unavailable
- Help define and maintain:
  - Escalation rules for your domain
  - Documentation and runbooks

## Escalation Criteria

The Tier-1 Engineering On-Call (EOC) will perform initial triage and use available documentation before escalating to Tier-2 SMEs. However, timely escalation is encouraged when domain expertise is clearly needed, especially for critical incidents. The following guidelines help determine when escalation is appropriate:

### By Severity Level

- **S1/S2 Incidents**: These typically require escalation when the Tier-1 team cannot resolve them independently. Due to their critical nature, Tier-2 SMEs should expect to be paged for these incidents when domain-specific expertise is needed.

- **S3/S4 Incidents**: These typically do not require escalation to Tier-2 SMEs during off-hours. However, Tier-1 may escalate S3/S4 incidents in specific circumstances:
  - When the customer impact is unclear and requires domain expertise to assess
  - When there's uncertainty about whether the issue might develop into a higher severity incident
  - When multiple lower-severity incidents combined create a potentially broader impact

### Customer Impact Assessment

The primary consideration for escalation is actual or potential customer impact, regardless of the initial severity classification:

- If an incident has clear customer impact that Tier-1 cannot mitigate, escalation is appropriate even if initially classified as lower severity
- If Tier-1 needs help determining whether errors or unusual behavior in a service will affect customers, they may consult with Tier-2 SMEs

## Onboarding Process for Teams

1. **Define SME group**
   - Identify team members who will participate in the rotation
   - Consider legal and employment restrictions for out-of-hours coverage
2. **Create onboarding issue**
   - Use the [Team incident onboarding template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?description_template=team-incident-onboarding)
   - Document escalation criteria and severity levels
3. **Set up on-call rotation**
   - Configure schedules in incident.io
   - Ensure pager settings and notification rules are set for each member of the new rotation.
4. **Document escalation procedures**
   - Define escalation chain for unacknowledged pages (who is escalated to if no one responds within 15-minute period)
5. **Complete training**
   - Ensure all participants understand their role
   - Review incident response procedures

## Next Steps

1. Double check your schedule to ensure coverage during holidays and team events
