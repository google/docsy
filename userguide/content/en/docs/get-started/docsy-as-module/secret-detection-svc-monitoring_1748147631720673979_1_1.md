---
title: "Secret Detection Service: Monitoring"
---

### When to use this runbook?

This runbook is intended to be used when monitoring the [Secret Detection Service](../../../../../../engineering/architecture/design-documents/secret_detection/#phase-2---standalone-secret-detection-service) to identify and mitigate any reliability issues or performance regressions that may occur when it is enabled on Gitlab.com and/or Dedicated.

### What to monitor?

We primarily need to monitor system metrics and recurrent errors raised within the service. Here are the narrowed down list of monitoring targets:

* **Resource Saturation**: Saturation is a measure of what ratio of a finite resource is currently being utilized.
* Aggregated Service Level Indicators(SLIs)
  * **Apdex Score**: Apdex is a measure of requests that complete within a tolerable period of time for the service.
  * **Error Ratio**: Error rates are a measure of unhandled service exceptions per second. Client errors are excluded when possible.
  * **Request Rate**: The operation rate is the sum total of all requests being handle for all components within this service. Note that a single user request can lead to requests to multiple components.
* Recurrent appplication errors raised by the service.

### How to monitor the service?

Most of above-mentioned monitoring targets i.e. Resource Saturation and Aggregated SLIs, are available in the [**Service Overview Dashboard**](https://dashboards.gitlab.net/d/secret-detection-main/secret-detection3a-overview?orgId=1).

The recurrent application errors are generally available in the GitLab Error Monitoring/[Sentry](https://new-sentry.gitlab.net/organizations/gitlab) tool. However, we are yet to integrate the service with the Error Monitoring tool. Please refer to this [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/499067) to track the integration progress.

Meanwhile, you may refer to the logs for any log messages with `ERROR` levels to look for application-related errors. **Logs** are available [here](https://console.cloud.google.com/run/detail/us-east1/secret-detection/logs?project=gitlab-runway-production).

### How to know if there is an SLO violation for the service?

The service receives slack alerts in the event of SLO violation. Currently, [six alerts](https://dashboards.gitlab.net/alerting/list?search=secret-detection) are configured by the alertmanager tracking multiple metrics.

In the event of SLO violation, the alertmanager sends an alert to `#feed_alerts-general` and `#g_secure-secret-detection` Slack channels.

**Note**: The alertmanager **does not** page on-call SRE team member in the event of SLO violation for this service. The service [inherits](https://gitlab.com/gitlab-com/runbooks/-/blob/0df5f62959e813330c572465b20879b07b886f46/metrics-catalog/services/secret-detection.jsonnet#L6-10) Runway's default SLIs which [sets](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L18) the alert severity to `S4`. Only the alerts marked as `S1` or `S2` will page the on-call. In other words, Secure::Secret Detection team will be responsible for addressing service disruption incidents by keeping an eye on the slack alerts.

In case the alertmanager failed to trigger a slack alert, we can always find the alerts that are _actively_ being fired for the service in the [`alerts dashboard`](https://alerts.gitlab.net/#/alerts?silenced=false&inhibited=false&active=true&filter=%7Btype%3D%22secret-detection%22%7D).

### How to check the logs emitted by the service?

Runway uses GCP Cloud Logs to manage logs emitted by the service. The logs for the service are available [here](https://console.cloud.google.com/run/detail/us-east1/secret-detection/logs?project=gitlab-runway-production).

#### Additional References

* [Documentation](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/blob/main/README.md?ref_type=heads)

* [Architecture](../../../../../../engineering/architecture/design-documents/secret_detection/decisions/004_secret_detection_scanner_service.md)

* [Service FAQs](./secret-detection-svc-faqs.md)

* [Runway Monitoring Stack](https://docs.runway.gitlab.com/reference/observability/)
