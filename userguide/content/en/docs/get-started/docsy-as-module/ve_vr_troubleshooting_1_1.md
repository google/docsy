---
title: Vulnerability Explanation and Vulnerability Resolution troubleshooting
---

## Troubleshooting Resource Guide for VE and VR

When working with Vulnerability Resolution and Vulnerability Explanation, you might run into an error. Most commons
problems are documented in this section.
If you find an undocumented issue, you should document it in this section after
you find a solution.

If you need help developing or testing locally, please see the [setup guide](ve_vr_setup).

For availability of these features please first check the prerequisites listed here: [vulnerability explanation](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-explanation) and [vulnerability resolution](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution).

Also check: [VR troubleshooting guide](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#troubleshooting).

| Problem                                                               | Solution                                                                                                                                                                                                                                                                              |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Duo / VR features aren't available | The group/project may not have assigned Duo Seats. Follow the [Duo subscription add-ons instructions](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#assign-gitlab-duo-seats). |
|  Upstream errors such as "The upstream AI provider request timed out without responding" | This may indicate an issue with our third-party AI. This could be Anthropic outage - check [status](https://status.anthropic.com/).|
| Specific recurring errors like "an unexpected error has occurred" | This may indicate an issue with the creation of the diff patch or MR. Refer to [Error handling code](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/llm/completions/resolve_vulnerability/helpers.rb) |
| False positive errors | We handle empty responses and empty <fixed_code> as false positives. [Documentation](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#troubleshooting), [Response modifier code](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/llm/response_modifiers/resolve_vulnerability.rb) |
| If you see that the VR button is disabled, that means that the CWE is not part of the supported list at this time. |  Feature coverage restriction: VR is available for a set of CWEs, check SSOT [doc](https://docs.google.com/spreadsheets/d/1G5zN4s4Inw2xhcyZP1U1oDW1erJuxL7QZsXSoOGNKeI/edit?gid=1605042126#gid=1605042126). |
| Query custom errors in Elastic | Check this [dashboard](https://log.gprd.gitlab.net/app/r/s/8no4f) for further investigation. |

### Dashboard to see logs

1. [Production log dashboard](https://log.gprd.gitlab.net/app/r/s/Bfmiw) - shows request/response/error
1. [Staging log dashboard](https://nonprod-log.gitlab.net/app/r/s/2OKmz)

### Monitoring VR alerts

1. [Elastic watcher](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/status)
1. Slack channel to see alerts: [`#g_srm_security_insights_ai_error_alerts`](https://gitlab.enterprise.slack.com/archives/C07V46USRHT)
1. Elastic logs used in watcher: https://log.gprd.gitlab.net/app/r/s/foNLr
1. Error watcher in IaC repo: https://gitlab.com/gitlab-com/runbooks/-/blob/master/elastic/managed-objects/log_gprd/watches/test_g_srm_security_insights_ai_error_watcher.jsonnet
1. Alert threshold for this watcher is 5 errors over last 90 minutes. If needed the watcher can be deactivated from [this page](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/status). The threshold value can be changed from the [edit page](https://log.gprd.gitlab.net/app/management/insightsAndAlerting/watcher/watches/watch/test_g_srm_security_insights_ai_error_watcher/edit).

### Resources

1. Documentation
   - [Vulnerability Resolution](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution)
   - [Vulnerability Resolution in the MR](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/#vulnerability-resolution-in-a-merge-request)
1. [LLM Prompts for VE and RV](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/lib/gitlab/llm/templates/vulnerabilities)
