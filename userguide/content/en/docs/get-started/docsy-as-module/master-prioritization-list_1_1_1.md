| Priority | Description | Issue label(s) |
| ------ | ------ | ------ |
| 1* | <a href="/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues">Security</a> | `bug::vulnerability` |
| 2* | Data Loss | `data loss` |
| 3* | Resilience, Reliability, <a href="/handbook/engineering/performance/index.html#availability">Availability</a>, <a href="/handbook/engineering/workflow/#infradev">and Performance</a>| `availability`, `infradev`, `Corrective Action`, `bug::performance` |
| 4 | <a href="/handbook/product/product-okrs/">OKR's</a> | |
| 5 | Usability | `Usability benchmark`, `SUS::Impacting`, `Deferred UX` |
| 6 | Instrumentation | `instrumentation` |
| 7 | xMAU / ARR Drivers | `direction` |
| 8 | All other items not covered above | |

*indicates forced prioritization items with SLAs/SLOs

#### Forced Prioritization

Any of the items with a "*" are considered issues driven by the attached [SLO or SLA](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity) and are expected to be delivered within our stated policy. There are two items that fall into Forced Prioritization:

1. Security Issues labeled with `bug::vulnerability` must be delivered according to the stated [SLO](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)
1. Issues supporting our product's scale which include `bug::availability` with [specific SLOs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#availability) as well as `infradev`, `Corrective Action`, `ci-decomposition::phase*` that follow the stated [`type::bug` SLO](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos)

Any issues outside of these labels are to be prioritized using [cross-functional prioritization](/handbook/product/product-processes/cross-functional-prioritization/). Auto-scheduling issues based on automation or triage policies are not forced prioritization. These issues can be renegotiated for milestone delivery and reassigned by the DRI.
