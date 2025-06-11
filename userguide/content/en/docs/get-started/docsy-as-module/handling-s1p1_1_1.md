---

title: "Application Security Engineer Handling priority::1/severity::1 Issues"
---

The following process is a supplement to the first few steps of the [critical release process](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/process.md#critical-security-releases)

Once a potential severity::1/priority::1 issue is made known. The appsec engineer steps are as follows:

## Triage

1. Triage and verify the issue as you normally would [triage a report]({{< ref "hackerone-process" >}}).
1. Finalize the CVSS score of the security issue with team member votes on Bug Bounty Council (BBC) thread before engaging the SIRT team. Consider using a sync call or Slack for the discussion due to time sensitivity. Capture the outcome of the discussion in the BBC thread. If a sync call or a Slack discussion was not possible due to AppSec team members in the region being on PTO or timezone issues, trigger the SIRT workflow if 4 hours have passed since the issue was triaged.
1. To help SecOps quickly determine impact and log analysis, comment in the security issue with the summarized reproduction steps (HTTP Requests, generated log messages, images, etc).
1. After escalating, do an investigation to try to determine if there are other immediately vulnerable components or other impacts.

## Escalate

1. [Engage the Security Engineer on-call]({{< ref "engaging-security-on-call" >}}) with a link to the issue, a summary of what has happened, and an description of what SIRT may need to do.
1. Engage the appropriate [engineering manager and product manager of the affected component](/handbook/product/categories/) in both the issue **and** in the appropriate Slack channels.
1. If help from the GitLab Dedicated team is needed, [follow the runbook to escalate to their engineer on call](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/runbooks/on-call.html#escalating-to-an-on-call-person).
1. Ping `@appsec-leadership` in the `#sec-appsec` Slack channel with a link to the issue. This will help team leadership and other engineers get up to speed, in case they need to step in.

## Evaluate Impact in Different Environments

Due to differences in settings, feature availability, and configuration between GitLab self-managed, GitLab Dedicated, and GitLab SaaS (GitLab.com), the CVSS for a single vulnerability may differ depending on environment.

To accurately communicate and effectively mitigate negative impact of a security vulnerability, consider any possible discrepancies in settings, feature availability, and configuration for the different environments - especially when there are certain preconditions required for a successful attack to occur.

### GitLab Dedicated

When assessing if a GitLab vulnerability impacts GitLab Dedicated, consider the following features that are [**not available** in GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#features-that-are-not-available):

#### Application Features that are Unavailable in GitLab Dedicated

- [ ]  LDAP, Smartcard, or Kerberos authentication
- [ ]  Multiple login providers
- [ ]  Advanced search
- [ ]  GitLab Pages
- [ ]  Reply-by email
- [ ]  Service Desk
- [ ]  FortiAuthenticator, or FortiToken 2FA
- [ ]  GitLab-managed runners (hosted runners)
- [ ]  GitLab AI capabilities ([More Info](https://about.gitlab.com/direction/saas-platforms/dedicated/#supporting-ai-features-on-gitlab-dedicated))
- [ ]  Features that must be configured outside of the GitLab user interface, including those behind [feature flags](https://docs.gitlab.com/ee/user/feature_flags.html) which are disabled-by-default
- [ ]  Mattermost
- [ ]  Server-side Git hooks (Due to security concerns and potential service SLA impact. Consider using [push rules](https://docs.gitlab.com/ee/user/project/repository/push_rules.html) or [webhooks](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html) as alternatives.)

If a vulnerability requires using features listed above for successfuly exploitation, it most likely **does not** impact GitLab Dedicated. Always cross-check with the specific details of the vulnerability to ensure accurate assessment.

## Mitigate

Mitigation of critical security issues has to strike a balance between securing GitLab and our users as fast as possible and doing it in a reliable way that will not require another patch shortly after.
The patch will first be deployed to GitLab-managed environments (.com, Dedicated, etc.) and then will be released to our self-managed users.

1. Collaborate with all the relevant teams (development team owning the feature, infrastructure, SIRT, etc.) to come up with a solution for the vulnerability.
1. Analyze the impact for each option.
    - How effective is it at solving the problem?
    - Are we patching a symptom or are we fixing the root cause?
    - How many customers are affected by this decision?
    - How exactly are they affected?
    - What's the magnitude?
    - What other positive and negative consequences are there?
1. Choose the solution that best balances the concerns above with the concerns of participating teams.
1. Once the solution has been delivered, validate that the fix was effective.

Occasionnaly, we'll need a quick fix before a good patch can be thoroughly developed and reviewed.
Here are some examples of short term options we've used in the past:

- Cloudflare rule to block certain endpoints.
- Disable a specific feature using feature flags or application configuration.
- Deploy a [hotpatch](https://gitlab.com/gitlab-org/release/docs/blob/master/general/deploy/post-deployment-patches.md).

### Releasing to self-managed customers

Since moving to a bi-weekly release schedule the need to follow the [critical security releases workflow](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/security-engineer.md##critical-security-releases) to patch critical vulnerabilities is much lower.
To decide between including a patch in the regular patch release or a critical security release many factors have to be considered.
Those factors include but are not limited to:

- How easily can this vulnerability be exploited?
- Does the vulnerability require a user account?
- Is the vulnerability being exploited in the wild?
- Is the exploit automatable and easily exploitable at scale?
- How impactful is the vulnerability?

This is handled on a case by case basis and will need to be evaluated with all the stake holders each time the situation arises.
Some scenarios where we would be very likely to opt for an ad-hoc critical security release would be:

- Unpatched critical severity vuln (CVSS 9+) being exploited in the wild
- Unpatched critical severity vuln (CVSS 9+) with PoC/exploitation code publicly available
- CVSS 10.0 vulns (e.g. unauth RCE or admin account takeover)

## Handoff

Appsec engineers are not on-call. That means when the assigned appsec engineer's end of day arrives, they are responsible for handing it off to an appsec engineer in a subsequent timezone.

Provide a brief summary of the current status and outstanding or upcoming tasks required of AppSec. Provide useful links like the SIRT issue, comms document, slack links. Ideally also schedule a short synchronous call with the person to whom you're handing over, to discuss and answer questions.

Share that a handover has happened in the incident's Slack channel, and cross-post to other relevant channels like #sec-appsec. A message template like the following may be appropriate:

> 🤝 AppSec Handover 🤝  I have handed over to `@username` for any AppSec needs, as I am close to the end of my working day. [Include details on how we will continue to deliver on any tasks that AppSec is DRI for].

### Family and Friends Day Coverage

[Family and Friends Days]({{< ref "family-and-friends-day" >}}) are days where GitLab publicly shuts down. The AppSec [rotation spreadsheet](https://docs.google.com/spreadsheets/d/18vz84dgTfetTaBjbOCXaLKNfzLYMiy_tBW6RfEUYYHk/edit#gid=1486863602) indicates who is available from the AppSec team on those days. There will be one AppSec engineer covering for each timezone region (AMER, EMEA, APAC) during each F&F Day. Team members assigned to this rotation are expected to move their F&F Day to another day as they see fit.
