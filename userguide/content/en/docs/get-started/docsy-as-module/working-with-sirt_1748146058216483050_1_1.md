---
title: "Application Security Engineer Working With SIRT"
---

This runbook is meant to help AppSec engineers who need to engage and work with SIRT to respond to a HackerOne report, discovered vulnerability, or other security incident.

## Requirements for using /security to engage SIRT

If this is a P1S1, follow the [P1S1 runbook](/handbook/security/product-security/application-security/runbooks/handling-s1p1/) and [engage the security on-call](/handbook/security/security-operations/sirt/engaging-security-on-call/).

When using `/security` to engage SIRT:

- Only use `/security` after we have validated the vulnerability or otherwise confirmed the incident
- Fill out the form as completely as you can
- Include a link to the issue or HackerOne report, a summary of what has occurred, and a description of what we are asking SIRT to help with
- Select the appropriate urgency (see below for some guidelines)

## Situations where SIRT needs to be engaged

Note: This is not an exhaustive list, there may be other situations in which you need to engage SIRT.

- P1 vulnerabilities
- Publicly known P2 vulnerabilities with a publicly available exploit
- Secret leaks
- Vulnerabilities that could result in account takeover
- Vulnerabilities that lead to customer communications being required in addition the usual processes
- Security fixes made in public that should have been made against a security repository
- Personal data leaks
- DNS takeovers

## Urgency guidelines

These are some guidelines for selecting the urgency in the `/security` form:

| Type of incident | Urgency | Notes |
| --- | --- | --- |
| Any kind of S1 | Urgent (page right away) | Examples include critical vulnerabilities, exposure of red data, still-valid team member token leaks |
| Personal data leaks | Not Urgent (review within 24 hours) | Could be Urgent depending on the volume and the data |
| Public merge requests fixing vulnerabilities not labeled `security-fix-in-public` | See notes | S2 and above is likely Urgent, S3 and below is Not Urgent |

For more information, consider viewing the [SIRT incident classification and severity matrix](/handbook/security/security-operations/sirt/severity-matrix/) page.

## Getting SIRT attention without using /security

In some situations, we just want SIRT to be aware of something that is happening or may become an incident soon. An example of this would be a high severity unverified HackerOne report from a reliable HackerOne reporter.

Put a message in the `#sd_security_operations` Slack channel with a brief description of the situation. You may consider using `/sirtoncall` to determine who is on-call and pinging them.

For HackerOne reports, you can also import the report into a GitLab issue and then mention `@gitlab-com/gl-security/security-operations/sirt` on it. Keep in mind this may not be appropriate, since it will ping all team members of SIRT.

## Assisting with incidents in general

- Be ready to join the SIRT bridge or collaborate with SIRT asynchronously
- Assist in writing summaries, documenting reproduction steps, and keeping the timeline up to date
- Add information and context in the incident issue and discussion threads
- Update the incident issue with access timestamps, your IP address, and the IP address of any HackerOne reporters (and/or HackerOne triage team) to assist with log reviews
