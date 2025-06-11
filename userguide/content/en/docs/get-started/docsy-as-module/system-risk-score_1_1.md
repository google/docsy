---
title: "System Risk Scoring Procedure"
controlled_document: true
---

## Purpose

System-level risk scores are intended to be a quantitative representation of the amount of security risk a given system holds. This quantitative approach to risk scoring is meant to inform GitLab management about where risk exists and help with prioritization and resourcing.

## Scope

The procedures outlined in the sections below are used specifically by the Security Assurance Team once an observation's [risk rating is determined]({{< ref "observation-management-procedure" >}}). This procedure is limited to systems in scope of GitLab's security continuous control monitoring program.

### Procedure

#### Risk rating and determining system risk scores

The importance of risk rating each control observation comes into play when making a final determination on how to establish a system's risk score. System risk scores, allow for clearer communication and prioritization with broader audiences outside of compliance functions and allows non-compliance stakeholders the ability to view how observations impact the control environment.

System risk scores provide a quantitative value of a system's risk that is used as an input for various processes within the Risk Management Program.

##### System Risk Scoring Methodology

System risk scores are based on the number of open observations associated with the system in question and the risk rating of each of those observations. Each system starts with a base risk score of `1` which means that the system is operating without any known security risk. As observations are opened and related to that system a risk weight is applied to each observation commensurate with the risk of the related observation. The risk weights are:

| Observation Weight | Observation Risk Rating |
|--------------------|-------------------------|
| 0.75               | High                    |
| 0.5                | Moderate                |
| 0.25               | Low                     |

A count of all open observations mapped to the related system is multiplied by the corresponding weight value above and that is added to the base risk of `1`. This results in a decimal value for system risk score. That score will be rounded to 2 decimal places. Because system risk is tied to open observation, the remediation of associated observations will have a direct and immediate impact on the corresponding system risk score. If a high risk observation is partially remediated and some of the risk is mitigated, the related observation risk rating will be adjusted and that will immediately reflect in the system risk score.

This approach takes a "pure count" approach where a score is calculated for a system based on pure count of observations mapped to it in our GRC tool ZenGRC, even if the observation may also be mapped to another system as well (1:many mappings are OK). Observations are also not consolidated for calculation, meaning we do not group multiple observations for one control together into one for purposes of calculating a score if each observation could be treated independently in remediation.

##### Target System Risk Score

**The target system risk score for GitLab systems is 3.00.** System with a risk score higher than this have a greater amount of security risk.

Note: This change in methodology no longer places systems on a 1-5 scale and instead systems are eligible for a score of any number greater than or equal to 1.

###### Example 1

A system has 5 open observations:

- 4 high risk observations
- 1 moderate risk observation

The system risk score would be calculated thus:

```text
1 + (0.75 * 4) + (0.5 * 1) = 4.50
```
<!-- vale handbook.Repetition = NO -->
That's the base risk risk score plus the weight of high risk observations times the number of high risk observations plus the weight of moderate risk observations times the number of open moderate risk observations.

###### Example 2

A system has 9 open observations:

- 1 moderate risk obervation
- 8 low risk observations

The system risk score would be calculated thus:

```text
1 + (0.5 * 1) + (0.25 * 8) = 3.50
```

That's the base risk risk score plus the weight of moderate risk observations times the number of moderate risk observations plus the weight of low risk observations times the number of open low risk observations.
<!-- vale handbook.Repetition = YES -->
#### System Risk Score Override

To account for edge case scenarios or other extenuating circumstances that may not be modeled appropriately using the outlined System Risk Scoring methodology, the final system risk score can be downgraded (i.e the risk impact to the organization is less) at the discretion of the Security Compliance Senior Director if it is determined that the observation's risk ratings and therefore system risk score does not appropriately reflect the current system risk. The rating cannot be upgraded (i.e the risk impact to the organization is more) to ensure a conservative approach to securing the organization and managing risk.

## Exceptions

There are no exceptions to this process.

## References

- [Control Health and Effectiveness Rating Procedure]({{< ref "control-health-effectiveness-rating" >}})
- [GCF Control Lifecycle]({{< ref "security-control-lifecycle" >}})
- [Observation Creation Procedure]({{< ref "observation-management-procedure" >}})
- [Observation remediation Procedure]({{< ref "observation-remediation-procedure" >}})]
- [Observation Management Project](https://gitlab.com/gitlab-com/gl-security/security-assurance/observation-management)

## Contact

If you have any questions or feedback about the system risk scoring methodology please [contact the GitLab Security Assurance Team]({{< ref "security-assurance#contacting-the-team" >}})
