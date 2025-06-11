---
title: Application Security Testing Sub-Department
---

The Application Security Testing engineering sub-department is responsible for the [Application Security Testing Stage](/handbook/product/categories/#sec-section) of the product.

## Vision

To provide content and tools to support the best possible assessment at the earliest possible moment.

Following our [single application](/handbook/product/categories/gitlab-the-product/single-application/) paradigm,
we integrate and build scanning tools to supply security and compliance assessment data to the main GitLab application
where we develop our vulnerability management system and other features.
While it might be technically feasible, we do not aim at building standalone products that provide this data independently from the GitLab application.

For more details about the vision for this area of the product, see the [Secure stage](https://about.gitlab.com/stages-devops-lifecycle/#secure) page.

## Mission

To support the success of GitLab by developing highly usable, hiqh quality tools for customers to build more secure software.

The Application Security Testing team works on GitLab's [Secure stage](https://about.gitlab.com/stages-devops-lifecycle/#secure).

## Sub-department development people leaders

{{< team-by-manager-slug manager="thomaswoodham" team="Manager(.*)Application Security Testing" >}}

To contact Application Security Testing stage development people leaders, use the following aliases:

* GitLab: `@gitlab-org/secure/managers`
* Slack: `@s_application_security_testing_managers`

## Team Members

The following people are permanent members of the Application Security Testing Sub-Department:

### Composition Analysis

Team Page: [Composition Analysis](composition-analysis/)

{{< team-by-departments departments="Secure:Composition Analysis BE Team"  >}}

{{< team-by-departments departments="Secure:Composition Analysis FE Team" >}}

### Static Analysis

Team Page: [Static Analysis](static-analysis/)

{{< team-by-departments departments="Application Security Testing:Static Analysis" >}}

### Dynamic Analysis

Team Page: [Dynamic Analysis](dynamic-analysis/dynamic-analysis.md)

{{< team-by-manager-role role="Engineering(.*)Manager(.*)Secure:Dynamic Analysis" team="Engineer" >}}

### Vulnerability Research

Team Page: [Vulnerability Research](vulnerability-research/)

{{< team-by-departments departments="Secure:Vulnerability Research BE Team" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{< stable-counterparts role="Secure" other-manager-roles="Engineering Manager(.*)Application Security Testing:Static Analysis|Backend Engineering Manager(.*)Secure:Dynamic Analysis|Manager, Software Engineering(.*)Secure:Composition Analysis|Senior Engineering Manager(.*)Secure|Senior Engineering Manager(.*)Secure|Director of Engineering(.*)Sec|Engineering Manager(.*)Dynamic Analysis" >}}

## Secure Team

The Application Security Testing Team is responsible for the security checks features in the GitLab platform, and maps to the [application security testing](/handbook/product/categories/#application-security-testing-stage) transversal stage.
You can learn more about our approach on the [Application Security Testing Vision](https://about.gitlab.com/direction/application_security_testing/) page.

The features provided by the Application Security Testing Team are mostly present at the pipeline level, and mostly available as container images.
This particularity shapes our processes and QA, which differs a bit from the other stages.

### Security Products

We still refer to "*Security Products*" as the tools developed by the Application Security Testing Team. Hence the home of our projects in GitLab: [https://gitlab.com/gitlab-org/security-products/](https://gitlab.com/gitlab-org/security-products/).

We strive to maintain a consistent User Experience across our Security Products but we do not enforce consistency at the implementation level.
Each group faces its own challenges and is in the best position to make the technical choices it deems are the most suitable to achieve its goals.
While [UX inconsistencies are considered as bugs](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity),
we rely on individual teams to make smart decisions about when consistency is important and when divergence makes more sense
— either because the divergence itself creates a better experience or because of velocity considerations.

### Domains of Expertise

#### SAST

[SAST](https://docs.gitlab.com/ee/user/application_security/sast/) (*Static Application Security Testing*) refers to static code analysis.
GitLab leverages the power of various opensource tools to provide a wide range of checks for many languages and support.
These tools are wrapped inside docker images which ensure we get a standard output from there.
An orchestrator, [developed by GitLab](https://gitlab.com/gitlab-org/security-products/sast), is in charge of running these images, and gathering all the data needed to generate the final report.

#### DAST

[DAST](https://docs.gitlab.com/ee/user/application_security/dast/) (*Dynamic Application Security Testing*) is used to hit a live application.
Because some vulnerabilities can only be detected once all the code is actually running, this method complements the static code analysis.
DAST is relying on [OWASP Zed Attack Proxy Project](https://gitlab.com/gitlab-org/security-products/zaproxy), modified by GitLab to enable authentication.

#### Dependency Scanning

[Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) is used to detect vulnerabilities introduced by external dependencies in the application.
Because a large portion of the code shipped to production is actually coming from third-party libraries, it's important to monitor them as well.
Dependency Scanning is relying mostly on the Gemnasium engine.

#### Fuzz Testing

Coverage-guided fuzzing and API fuzzing are used to automatically input data into applications or web apis that has the potential to cause crashes or bugs. Coverage-guided fuzzing relies on open-sourced [language-specific fuzzers](https://gitlab.com/gitlab-org/security-products/analyzers/fuzzers). API Fuzzing is based on a [proprietary GitLab engine](https://gitlab.com/gitlab-org/security-products/analyzers/api-fuzzing-src).

#### License Compliance

[License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) helps with the licenses introduced by third-party libraries in the application.
Licence management relies on the [LicenseFinder](https://github.com/pivotal/LicenseFinder) gem.

#### Vulnerability Research

The [Vulnerability Research](vulnerability-research/) team's purpose is
to perform research and develop proofs of concepts that increase the
capabilities and effectiveness of the
[Secure stage](https://about.gitlab.com/stages-devops-lifecycle/secure/).

### Skills

Because we have a wide range of domains to cover, it requires a lot of different expertises and skills:

| Technology skills | Areas of interest |
| ----------------- | ----------------- |
| Ruby on Rails | Backend development |
| Go | SAST, Dependency Scanning, DAST |
| Python | DAST |
| SQL (PostgreSQL) | Dependency Scanning / all |
| Docker | Container Scanning / all |
| C# | API Security |

Our team also must have a good sense of security, with at least basic skills in [application security](https://en.wikipedia.org/wiki/Application_security).

We provide tools for many different languages (ex: [sast](https://docs.gitlab.com/ee/user/application_security/sast/#supported-languages-and-frameworks), [dependency scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/#supported-languages-and-dependency-managers), [license compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html#supported-languages-and-package-managers)). It means our team is able to understand the basics of each of these languages, including their package managers. We maintain [tests projects](https://gitlab.com/gitlab-org/security-products/tests) to ensure our features are working release after release for each of them.

### Release process

See [Versioning and release process](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html).

### QA process

See [QA Process](qa_process.html) for more info.

### Vulnerability Management process

#### Automation

We use the [security-triage-automation](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation) tool in conjunction with [scheduled pipelines in the release project](https://gitlab.com/gitlab-org/security-products/release/-/blob/master/.gitlab/ci/security-triage-automation.yml?ref_type=heads) to handle the following tasks:

1. [Create security issues for FedRAMP vulnerabilities (Container Scanning results only) still detected on the default branch](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation#process-vulnerabilities-for-a-given-project), executed at least once, on the first day of the month to match with FedRAMP compliance report cadence.
Note that we do not yet automatically create security issues for non-FedRAMP vulnerabilities. Please see the [Non-FedRAMP vulnerabilities section](#non-fedramp-vulnerabilities) for more details.
1. [Resolve all vulnerabilities (both FedRAMP and non-FedRAMP) no longer detected on the default branch and close their issues](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation#resolve-vulnerabilities-and-close-their-issues), executed every 2 days.

[The Vulnmapper tool](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper) also provides some [automation to vulnerability management](/handbook/security/product-security/vulnerability-management/automation/) like:

1. Adding labels to security issues to further classify the fix availability (fix_available, fix_unavailable, will_not_be_fixed, etc.).
1. Creating Deviation Request issues for FedRAMP related security issues that should have one.

Note: Our goal is to centralize automation for vulnerability management in the [Vulnmapper tool in the nearest future](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/milestones/4#tab-issues) and standardize our processes across the company. However, so far we're following the existing process based on the [security-triage-automation tool](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation).

#### Automation failures

It's possible that our security automation tooling may [fail](https://gitlab.com/gitlab-org/security-products/release/-/pipelines?page=1&scope=all&status=failed).
If this occurs, and the issue cannot be immediately resolved, open an issue to
track the error. Then, announce the failure in `#s_application-security-testing` to raise awareness,
and follow the manual security triage process outlined below.

<details>
<summary>View manual process fallback when automation fails</summary>

#### Manually reviewing and resolving vulnerabilities

On a weekly basis: review the vulnerability report to resolve no longer detected ones and close related issues. Note: It is not necessary to investigate vulnerabilities that are no longer detected.

1. Visit `Vulnerability Report Dashboards` to verify that there are vulnerabilities that can be resolved.
2. Execute the `security-triage-automation` tool to [resolve vulnerabilities and close their issues](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation#resolve-vulnerabilities-and-close-their-issues). This tool must be executed separately for each project that have vulnerabilities to resolve.
3. Verify in `Vulnerability Report Dashboards` that vulnerabilities have been resolved.

#### Manually creating security issues for FedRAMP vulnerabilities

Last working day before the 1<sup>st</sup> of the month, create security issues
for FedRAMP vulnerabilities of the `CONTAINER_SCANNING` type, and `CRITICAL`, `HIGH`,
`MEDIUM`, `LOW`, and `UNKNOWN` severity levels by executing the `security-triage-automation`
tool to [process vulnerabilities for a given project](https://gitlab.com/gitlab-org/secure/tools/security-triage-automation#process-vulnerabilities-for-a-given-project)
(please make sure to adjust CLI options accordingly). This tool must be executed
separately for each project.

#### Manually creating deviation requests for FedRAMP vulnerabilities

Vulnmapper automatically creates Deviation Requests but may fail for various reasons, such as the absence of analysis from NVD.

In cases where automation fails, you must create the [Deviation Requests](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/) manually before the issues reach SLA.
To do so, use the following procedure.

1. Open a DR issue with the [operational requirement template](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=operational_requirement_template).
    1. Update the `Vulnerability Details` section with a link to the advisory (RedHat tracker usually), CVE ID, severity, and CVSS score.
    1. Update the `Justification Section` with:
        > The OS vendor has published an updated advisory for <CVE_ID>, indicating that package <PACKAGE_NAME> has not yet had a fix released for this vulnerability. Until a fix is available for the package, this vulnerability cannot practically be remediated.
    1. Update the `Attached Evidence` section with:
        > As this operational requirement represents a dependency on a vendor-published package to address this vulnerability, no additional evidence has been supplied. Please refer to the linked vendor advisory in the above justification.
    1. Link it to the security issue: `/relate <issue_id>`
1. Update the security issue accordingly

   ```text
   /label ~"FedRAMP::Vulnerability" ~"FedRAMP::DR Status::Open"
   /milestone %Backlog
   ```

</details>

##### Troubleshoothing

* **`GITLAB_ACCESS_TOKEN` has expired**. The automation relies on API requests to manage vulnerabilities and issues on various projects. This requires specific permissions and authentication is achieved with a Private Access Token generated on the service account `gl-service-security-triage` (credentials available in 1Password). If the token is expired, a new one (with `api` scope) must be generated by signing in with this account on gitlab.com and then the new value must be configured in [the settings](https://gitlab.com/gitlab-org/security-products/release/-/settings/ci_cd) of the `release` project.

##### FedRAMP vulnerabilities

To ensure compliance, the management of FedRAMP vulnerabilities is handled by [automation](#automation). Please check the manual process fallback for additional details.

##### Non-FedRAMP vulnerabilities

We do not yet have the same automation in place for non-FedRAMP vulnerabilities since it represents a too important volume to manage for our teams and some necessary [improvements in the vulnmapper tool](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/milestones/4#tab-issues) are required prior to enabling this.
In the meantime, we favor a more specialized approach for these vulnerabilities and there is no standardized process across the groups.

#### Error Monitoring

500 errors on gitlab.com are reported to Sentry. Below are some quick links to pull up Sentry errors related to Application Security Testing.

* StoreSecurityReports Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+StoreSecurityReportsWorker&statsPeriod=14d
* SyncSecurityReportsToReportApprovalRules Worker - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+SyncSecurityReportsToReportApprovalRulesWorker&statsPeriod=14d
* Vulnerabilities - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+vulnerabilities&statsPeriod=14d
* On-Demand DAST - https://sentry.gitlab.net/gitlab/gitlabcom/?query=is%3Aunresolved+Dast&statsPeriod=14d

#### Brainstorming sessions

Our team occasionally schedules synchronous brainstorming sessions as a method of deep-diving on a specific topic.
This approach can be useful in breaking down complexity and deriving actionable steps for problems that lack
definition.

These are purposefully freeform to allow for creative problem solving.
When possible, time should be reserved for a list of actions to be taken from the open discussion.

Brainstorming Sessions Doc (Internal): https://docs.google.com/document/d/179JL5RzbgSIz2XZewbYn79cuX7_vUtte_TcoLwUUC5o/edit#

*Examples of previous brainstorming topics:*

* [Reduce false positives in Security reports](https://gitlab.com/gitlab-org/gitlab/issues/33934)
* How to manage occurrence uniqueness identification in the common report format? (CompareKey)
* [One file with syntax errors should not stop SAST and similar kind of jobs from running](https://gitlab.com/gitlab-org/gitlab/issues/7102)

#### Resources

* [How to triage a QA test pipeline failure](/handbook/engineering/infrastructure-platforms/developer-experience/debugging-end-to-end-test-failures/)
* [Beginner's guide to writing end-to-end tests](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/beginners_guide.html)
* [GitLab QA README](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa)
* [GitLab QA Scenarios](https://gitlab.com/gitlab-org/gitlab-qa/-/blob/master/docs/what_tests_can_be_run.md)
* [E2E info for GitLab developers](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/)
* [Quality training video material](https://www.youtube.com/playlist?list=PL05JrBw4t0KoNUmi5MOeNURxjl_BtUBxH)

#### Product Documentation

As the product evolves, it is important to maintain accurate and up to date documentation for our users. If it is not documented, customers may not know a feature exists.

To update the documentation, the following process should be followed:

1. When an issue has been identified as needing documentation, add the `~Documentation` label, outline in the description of the issue what documentation is needed, and assign a Backend Engineer and Technical Writer(TW) to the issue (find the appropriate TW by searching the [product categories](/handbook/product/categories/)).
1. If the task is documentation only, apply a `~Px` label.
1. For documentation around features or bugs, a backend engineer should write the documentation and work with the technical writer for editing. If the documentation only needs styling cleanup, clarification, or reorganization, this work should be lead by the Technical Writer with support from a BE as necessary. The availability of a technical writer should in no way hold up work on the documentation.
[Further information on the documentation process](https://docs.gitlab.com/ee/development/documentation/workflow.html).

#### Async Daily Standups

Since we are a [remote](/handbook/company/culture/all-remote/) company, having daily standup meetings would not make any sense, since we're not all in the same timezone.
That's why we have async daily standups, where everyone can give some insights into what they did yesterday, what they plan to do today, etc.
For that, we rely on the [geekbot](https://geekbot.com/) slack plugin to automate the process.

##### Standup messages format

* Use the "`description in backquote` + `[link to issue](#)`" format when mentioning issues in your standup report.
* Prepend CI status icons to the answer lines for `What did you do since yesterday?` to denote the current state:
  * ![Accomplished](/images/engineering/development/sec/secure/ci-success.svg) for successfully accomplished tasks (`:ci_passing:` emoji)
  * ![Overdue](/images/engineering/development/sec/secure/ci-failed.svg) for tasks that were due on some period of time but were not accomplished (`:ci_failing:` emoji)
  * ![In progress](/images/engineering/development/sec/secure/ci-running.svg) for tasks currently in progress (`:ci_running:` emoji)
  * ![Paused](/images/engineering/development/sec/secure/ci-pending.svg) for paused or postponed tasks (`:ci_pending:` emoji)
  * any other `:ci_...` icon you find applicable

**Example:**

What did you do since yesterday?

* ![Accomplished](/images/engineering/development/sec/secure/ci-success.svg) Accomplished the `Spotbugs java analyzer compareKey is not unique` [https://gitlab.com/gitlab-org/gitlab-ee/issues/10860](https://gitlab.com/gitlab-org/gitlab-ee/issues/10860)
* ![In progress](/images/engineering/development/sec/secure/ci-running.svg) Still working on `Allow guests to create an issue from a vulnerability` [https://gitlab.com/gitlab-org/gitlab-ee/issues/7813](https://gitlab.com/gitlab-org/gitlab-ee/issues/7813)
* ![Overdue](/images/engineering/development/sec/secure/ci-failed.svg) Catch-up on all emails and threads after the vacation

**Slack Channels:**

As our teams focus on different areas, we have Geekbot configured to broadcast to separate channels in addition to our common one at [#s_secure-standup].

1. Composition Analysis: [#g_ast-composition-analysis-standup](https://gitlab.slack.com/archives/g_ast-composition-analysis-standup)
1. Dynamic Analysis: [#g_ast-dynamic-analysis-standup](https://gitlab.slack.com/archives/g_ast-dynamic-analysis-standup)
1. Secret Detection: [#g_ast-secret-detection-standup](https://gitlab.slack.com/archives/g_ast-secret-detection-standup)
1. Static Analysis: [#g_ast-static-analysis-standup](https://gitlab.slack.com/archives/g_ast-static-analysis-standup)

#### Recorded meetings

Our important meetings are recorded and published on YouTube, in the [Application Security Testing Stage playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7yUrZazEF3diazV29RRo1).
They give a good overview of the decision process, which is often a discussion with all the stakeholders. As we are a [remote](/handbook/company/culture/all-remote/) company, these video meetings help to synchronize and take decisions faster than commenting on issues. We prefer asynchronous work, but for large features and when the timing is tight, we can detail a lot of specifications. This will make the asynchronous work easier, since we have evaluated all edge cases.

### Calendar

We welcome team members to join meetings that are on our shared calendar. The [Application Security Testing Calendar](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV9tZDBhbzM2Z3B2bDV2MWY0MTI4ZXJobmo2Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) is available to all logged in GitLab team members.

### Staying informed

GitLab is an extremely active organization which generates a lot of news and activity each week. Everyone in Application Security Testing are encouraged to keep themselves informed as to what is happening in the larger organzation. Everyone is also
encouraged to contribute to these channels and communication paradigms when you have information to share.

In addition to this, each group in Application Security Testing conducts a weekly synchronous meeting. These meetings are publicized on the Application Security Testing Calendar mentioned above. As always at GitLab, we strive to [make meeting attendance optional](/handbook/company/culture/all-remote/meetings/#1-make-meeting-attendance-optional).

#### Keeping others informed

In addition to keeping yourself informed, team members are encouraged to keep others informed as well. Application Security Testing groups have adopted a practice of including the following topics as standing agenda items in their weekly meetings, with example
topics for each bullet point.

* **Current status**
  * Work recently achieved against top priorities for that milestone.
    * Pre-recorded demos are appreciated and encouraged as part of these updates.
  * Newly discovered scope or dependencies.
* **Risks**
  * Issues which are blocked or slowed, impacting whether they can be delivered in the desired timeframe.
* **Help wanted**
  * Issues or topics on which the team or individuals on the team are getting stuck and could use some help.
* **Praise**
  * Anyone doing a great job and you want to give them kudos?
  * Any bit of work which has been delivered that's exceptional?

Engineering Managers are responsible for populating this section of weekly group meetings, though everyone can contribute. In addition to helping the group keep itself informed about what's happening each week, the SEM for Application Security Testing will collect
this information weekly and broadcast a curated list to the section.

#### Technical onboarding

New hires should go through these steps and read the corresponding documentation when onboarding in the Application Security Testing Team.
Every new hire will have an assigned [onboarding issue](https://gitlab.com/gitlab-org/security-products/onboarding/blob/master/.gitlab/issue_templates/Technical_Onboarding.md) that will guide them through the whole process.

#### Workflow and Refinement

See [Application Security Testing Engineering Planning](/handbook/engineering/development/sec/secure/planning).

#### Coding standards and style guidelines

The Application Security Testing Team follows the coding standards and style guidelines outlined in the company-wide [Contributor and Development Docs](https://docs.gitlab.com/ee/development/), however, please consult the following guidelines which are specific to the Application Security Testing Team:

* [Application Security Testing Team Go standards and style guidelines](https://docs.gitlab.com/ee/development/go_guide/#secure-team-standards-and-style-guidelines)

#### Cross group collaboration

Some components of the architecture that support Application Security Testing features are shared between multiple groups like the [common](https://gitlab.com/gitlab-org/security-products/analyzers/common) Go library,
the [Security Report Schemas](https://gitlab.com/gitlab-org/security-products/security-report-schemas), the [rails parsers](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/lib/gitlab/ci/parsers/security), etc.

Modifying these shared pieces might impact other groups so we should rely as much as possible on approval rules to ensure
such changes are reviewed by the relevant teams before being merged.

Impactless two-way door changes could skip the approval process, please use sound judgement and common sense in such situations.

The author of changes should announce broadly the changes made on these components to raise awareness (weekly meeting agenda, slack channel).

### Development of new analyzers

For a complete guide about developing a new analyzer please refer to our [user documentation](https://docs.gitlab.com/ee/development/sec/analyzer_development_guide.html#development-of-new-analyzers)

## Technical Documentation

As our product evolves, the engineering teams are researching ways to achieve new functionality and improve our architecture.

The outcome of this research can be found in our [Technical Documentation](tech-docs/) section.

### Data Sources

We keep a [list of data sources in our internal wiki](https://gitlab.com/gitlab-org/secure/data-feeds-and-sources/-/wikis/Data-Feeds-&-Sources). This includes advisory databases, package license information, and related data.

## Retrospectives

The Application Security Testing sub-department conducts retrospectives at the group level.

Each group's EM or delegated DRI is responsible to prepare and schedule the retrospective sync sessions and the async retrospective issues can be found in [the corresponding project](https://gitlab.com/gl-retrospectives/secure-sub-dept).

## Analytics

The Application Security Testing group reviews analytics to help understand customers and their usage of the tools. This data helps drive product and technical decisions.  The following links show usage of Application Security Testing functionality.

[Secure Scan Metrics Dashboard](https://10az.online.tableau.com/t/gitlab/views/PDSecureScanMetrics_17090087673440/SecureScanMetrics)

## Cross-functional Backlog

We also track our backlog of issues, including past due security and infradev issues, and total open SUS-impacting issues and bugs.

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "STAGE_LABEL"="application security testing" >}}
{{< /tableau >}}

## Merged Merge Request Types

MR Type labels help us report what we're working on to industry analysts in a way that's consistent across the engineering department. The dashboard below shows the trend of MR Types over time and a list of merged MRs.

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "STAGE_LABEL"="application security testing" >}}
{{< /tableau >}}

## Common Links

* [#s_application-security-testing](https://gitlab.slack.com/archives/s_application-security-testing) in Slack
* [Security Glossary](https://docs.gitlab.com/ee/user/application_security/terminology/)
