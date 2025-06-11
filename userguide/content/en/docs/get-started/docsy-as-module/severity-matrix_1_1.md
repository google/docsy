---
title: "Security Incident Severity and Priority Matrix"
description: " "
weight: 30
---

Incidents will be classified using `Priority` and `Severity` labels.  SIRT will use the criteria defined below when assigning labels and the [SIRT Escalation Guide]({{< ref "sirt#-engaging-sirt" >}}) for escalations.

## Priority

The priority label is used to indicate the importance and guide the response timing of the incident. Priority labels are expected to be set based on the circumstances of the incident, number of impacted users, and affected systems.  Priority should be adjusted as the incident is worked and the conditions change.

| Urgency | Example | Expected Response | GitLab Label |
| --- | --- | --- | --- |
| Immediate | A service which is critical for day-to-day operations is unavailable. The incident’s sphere of impact is expanding rapidly, or quick action may make it possible to limit its scope. Time-sensitive work or customer actions are affected. The incident affects high-status individuals or organizations (i.e., upper management or major clients).<br><br>Unauthenticated RCE vulnerability on production instances. | Immediate response from SEOC is needed. <br><br>Work should continue in every region (follow-the-sun), with updates per shift in relevant channels. | \~priority::1 |
| High | The fact that an indicent is still ongoing influences the urgency score. Furthermore, if credentials were leaked in the process, we need to act sooner than possible.<br><br>A patched RCE vulnerability on production instances. | The issue can wait until next business day.<br><br>Work should continue in every assigned region, with daily updates in relevant channels. | \~priority::2 |
| Moderate | Affected services are optional and used infrequently. The effects of the incident appear to be stable. Important or time-sensitive work is not  affected.<br><br>A patched RCE vulnerability on production instances that is being rolled out to the wider public. | No urgent action required, but actively monitored by SIRT.<br><br>Work should continue in every assigned region.<br><br>Updates are posted in the incident issue when needed. | \~priority::3 |
| Low | Limited to no affected services. Actions being taken are cleanup or preventative.<br><br>A previously revoked and investigated access token has been discovered. | No action required, monitored in case the situation changes.<br><br>Updates are posted in the incident issue when needed. | \~priority::4 |
| Eventually | False positives kept open for review, informational notices. | No action required, handled when/if SIRT has spare cycles.<br><br>Updates are posted in the incident issue when needed. | \~priority::5 |

## Severity

The severity label is used to indicate the actual or potential impact and helps determine the priority of the incident.  Severity should remain the highest level assessed once triage has been done. If it is determined the severity was inaccurately assessed, it should be updated with why the adjustment was made and how we arrived at that conclusion clearly documented in the issue comments.

| Impact | Example |  GitLab Label |
| --- | --- | --- |
| Critical | Severe impact to production data confidentiality, integrity or availability is likely if immediate action is not taken. Current controls do not satisfactorily mitigate the risk. Possibility of mass customer impact. Or, reputational risk is severe. | \~severity::1 |
| High | Impact to production data confidentiality, integrity or availability is likely if one or more security controls are circumvented.  Current controls mitigate the initial risk. Customer impact or high likelihood of customer impact. Or, reputational risk is high. | \~severity::2 |
| Moderate | Unlikely to impact production data confidentiality, integrity or availability unless multiple security controls fail or are bypassed. Current controls mitigate the initial risk. No customer impact. Or, reputational risk is moderate. | \~severity::3 |
| Low | No risk to impact production data confidentiality, integrity or availability unless multiple security controls fail or are bypassed. Current controls are adequate. No risk of customer impact. Reputational risk is low or highly unlikely. | \~severity::4 |

### Considerations for determining severity

There are a few factors we take into account when determining impact. Every time we are faced with a security incident, we evaluate the scope and exposure of the risk, the confidentiality level, and more. By doing so, we split the issue into multiple, easier to assess, sub-issues. Here are a few examples:

**How many of the following areas of the CIA Triad apply?**

- Confidentiality
- Integrity
- Availability

**Affected Surface** - What is the affected surface?

- GitLab infrastructure
- Customer data
- Cloud accounts
- One particular application
- A customer's instance
- Your own machine

**Exploitability** - How easy is it to exploit the issue?

- Very easily - Attacker simply needs to run a command or script to trigger the issue.
- Requires some effort - Attacker requires specific conditions such as someone else to be logged in to exploit the issue.
- Difficult - Attacker requires specific conditions that are difficult to achieve.

**Visibility** - Who can see this issue?

- Everyone
- Someone with specific access
- Only me

The more areas of the CIA Triade that apply combined with the significance of the **Affected Surface**, **Exploitability**, and **Visibility** should be used to determine an estimated **Severity**
