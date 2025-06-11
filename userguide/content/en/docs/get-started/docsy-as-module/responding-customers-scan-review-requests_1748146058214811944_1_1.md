---
title: "Responding to customers security scanners review requests"
---

We scan our own product using our [security scanners](https://docs.gitlab.com/ee/user/application_security/). Our Engineering teams are remediating vulnerabilities detected by our scanners on a regular basis. This is done when a patch is available **and** for vulnerabilities that can be exploited in our context.

We often receive inquiries from customers regarding potential vulnerabilities detected by their own scanning tools or those integrated into GitLab. We value our customers' trust in our expertise to assess these issues. However, given the volume of requests we receive and our limited resources, we kindly request cooperation in performing a reasonable level of initial review before seeking our input. These proactive efforts will enable us to focus on addressing the most critical vulnerabilities efficiently.

## Scope

### GitLab Images

We are accepting requests to review vulnerabilities detected in the latest version of the following GitLab images:

- `gitlab/gitlab-ee:latest` (Docker Hub)
- `gitlab/gitlab-runner:latest` (Docker Hub)

Ensure you are scanning an image running on the latest release or previous two monthly release version. You can consult our [maintenance policy](https://docs.gitlab.com/ee/policy/maintenance.html) for more details on supported versions for security backports. We will typically not be able to review scanner findings for codebases and image versions outside of the maintenance policy.

### What scanners results are we accepting?

We are accepting the following scanner results:

- [SAST](https://docs.gitlab.com/ee/user/application_security/sast/)
- [DAST](https://docs.gitlab.com/ee/user/application_security/dast/)
- [Dependency scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)
- [Container scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)
- [Secret detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)

Results from our scanners are accepted for review as long as [you have triaged the results first](#review-scanner-results).

If you are using third-party security scanners, we ask that you provide the following information for each vulnerability submitted to us:

- An assessment and analysis of the vulnerability.
- Provide a step-by-step guide for the vulnerability to show how it may be exploited in your instance and environment.

Please be sure to add any helpful context to your requests including environment details and specific security risks that you're concerned about. For each risk identified, please provide some explanation and reasoning to help us better understand your concerns so that we can respond in an effective manner.

The format needs to be in an editable file format, for example in CSV, JSON or in an internal spreadsheet.

### Will GitLab review scanner results for vulnerabilities of all severity? {#review-scanner-results}

No. We will only be able to review scanner results for critical and high vulnerabilities. We will not be able to review scanner results for other severities such as medium, low or informational findings.

## Initial self triage

Security scan results are prone to false positives and reported even if vulnerabilities are not exploitable within the application context, making them time consuming to triage. Before submitting your scan results to us, we ask you to perform some initial triage:

- [Only submit findings for critical and high vulnerabilities](#review-scanner-results).
- Make sure the vulnerability impacts a component or code within the GitLab directory. GitLab installs required components within that directory. Vulnerabilities for components outside of the GitLab directory will not be investigated as they are not used.
- Vulnerabilities for components that you have installed, either inside or outside of the GitLab directory, will not be investigated.

## SLO

Our goal is to reply to customer requests within 10 business days.

## Where do I submit scanner findings that adhere to the standards outlined above?

If you are a customer, our [Field Security team](/handbook/security/security-assurance/field-security/) can open an issue in our issue tracker for you using [this template](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=customer_scan_result_request) to follow-up on the request internally. Internal team members can directly open issues as long as guidelines outlined above are followed.
