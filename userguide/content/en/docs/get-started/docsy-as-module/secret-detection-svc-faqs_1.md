---
title: "Secret Detection Service: General FAQs"
---

This page contains answers to the general questions about the Secret Detection Service. This runbook can be used by anyone who want to understand the technical aspects about the service.

#### General FAQs

 1. **Where is the service deployed?**

    The service is deployed on [Runway](https://docs.runway.gitlab.com/) which internally uses [Google Cloud Run](https://cloud.google.com/run/docs/overview/what-is-cloud-run) to manage containers.

 2. **In how many environments will the service be deployed?**

    The service is deployed in Staging (`https://secret-detection.staging.runway.gitlab.net`) and Production (`https://secret-detection.production.runway.gitlab.net`).

 3. **In what regions will the service be deployed in the production environment?**

    The service is deployed only at `us-east1`, the same region where the GitLab Rails monolith is deployed too.

 4. **Does the service use environment variables?**

    Yes. Currently, it uses the `ENV`(non-sensitive) var to determine the active environment the application is running and the `AUTH_TOKEN`(sensitive) var to match it against the token embedded in the API request.

 5. **Where are environment variables stored in the service and who has access to modify them?**

    Non-sensitive variables are stored in `env-<environment>.yml` files in the [project repository](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/tree/main/.runway?ref_type=heads) whereas sensitive variables are stored in the [Hashicorp Vault](https://vault.gitlab.net/ui/). Currently, the ~"group::secret detection" team has access to the vault.

 6. **Where exactly in the vault do I find SD service variables?**

    You can find them [here](https://vault.gitlab.net/ui/vault/secrets/runway/kv/list/env/staging/service/secret-detection/) for the staging environment, and [here](https://vault.gitlab.net/ui/vault/secrets/runway/kv/list/env/production/service/secret-detection/) for the production environment.

 7. **Are the service APIs publicly accessible?**

    It depends on the environment. Currently, the service in the staging environment is publicly accessible and we might change it to private later. To reduce security exposure, the service in the production environment is made accessible only by the GitLab Rails monolith instance.

 8. **What category of APIs does the service expose?**

    The service exposes only gRPC endpoints for Secret Detection scans. Read [here](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#secret-detection-scan-unary-rpc-call) for more details.

 9. **Is there an authentication process to access service APIs?**

    Yes. A basic form of token-based authentication where the client is expected to embed a token in the request which is matched against the `AUTH_TOKEN` in the service. Note that the authentication is only applied to secret detection-related RPC endpoints. Read more about it [here](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#calling-grpc-endpoints-from-terminal).

10. **How do I ensure that the service is running? Is there a health-check endpoint to confirm?**

    The service exposes a health check RPC endpoint used by Runway to ensure the service's health. You can find it [here](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service#health-check). However, for the production environment, we might have to rely on logs for health check failures since the instance isn't accessible publicly. Alternatively, we could access it from a [teleport console](https://production.teleport.gitlab.net/) since Rails monolith can access the service.

11. **Which GitLab services access SD service?**

    Only the Rails monolith service accesses the SD service to invoke scans.

12. **Where can I access the service logs?**

    We can access them through [Google Cloud Run logs](https://console.cloud.google.com/run/detail/us-east1/secret-detection/logs?project=gitlab-runway-production). We can view logs through [GCP Logs Explorer](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%0Aresource.labels.service_name%20%3D%20%22secret-detection%22%0Aresource.labels.location%20%3D%20%22us-east1%22%0A%20severity%3E%3DDEFAULT;storageScope=project;cursorTimestamp=2024-09-26T08:37:16.966685Z;duration=PT1H;aroundTime=2024-09-26T08:37:16.966523Z?project=gitlab-runway-production) too to get custom filtering/querying abilities.

13. **Where can I access the service dashboard for monitoring purposes?**

    You can find them [here](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?orgId=1&var-PROMETHEUS_DS=mimir-runway&var-environment=gstg&var-type=secret-detection&var-region=All&from=now-30d&to=now) for the staging environment and [here](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?orgId=1&var-PROMETHEUS_DS=mimir-runway&var-environment=gstg&var-type=secret-detection&var-region=All&from=now-30d&to=now) for the production environment.

14. **Is there any rate limiting added to the APIS?**

    Application-level rate limiting is not added, however, Cloud Run defines [rate limiting](https://cloud.google.com/run/quotas#networking_limits) for the instances under which the service is covered.

15. **What are the Service Level Indicators(SLIs) for the service to determine the availability?**

    We are using Runway's default SLIs([`runway_ingress`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L51)) which contains the Apdex Score, Request Rate, and Error Rate.

16. **What are the Service Level Objectives(SLOs) configured for the service?**

    SLOs for the Service are set to meet 99.9% (`0.999`) of the Apdex Score and 99.9% of (`0.999`) Error Ratio. These are default SLO values configured by Runway and we are sticking to the default values as they seemed sufficient for the service. We can change it [here](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/services/secret-detection.jsonnet) whenever necessary.

17. **Do we have alerts configured in case there is an SLO violation?**

    Yes. The alerts are configured [here](https://dashboards.gitlab.net/alerting/list?search=secret-detection&view=grouped). The alerts are triggered for Apdex violations, Error Rate violations, Traffic ceased (Server signal present, traffic none), and Traffic absent (No server signal, including Health Checks) in the past 30 minutes.

18. **What happens in the event of an SLO violation?**

    In case of an SLO violation incident, the alertmanager fires all alerts to the `#feed_alerts-general` slack channel, and also a copy of it will be sent to `#g_secure-secret-detection` slack channel.

19. **What severity will be assigned to the triggered alert?**

    Since the service borrows [Runway's SLI defaults](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet), the defaults also include [setting severity as S4](https://gitlab.com/gitlab-com/runbooks/-/blob/master/libsonnet/service-archetypes/runway-archetype.libsonnet#L18). We can change it to a different severity appropriate to our needs (requires Readiness Review approval).

20. **Does it page the SRE team in the event of an SLO violation?**

    No. Only the alerts with severity S1 or S2 are paged to the SRE team. The `group::secret detection` team will be responsible for monitoring incidents.

#### Additional References

* [Documentation](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-service/-/blob/main/README.md?ref_type=heads)

* [Architecture](../../../../../../engineering/architecture/design-documents/secret_detection/decisions/004_secret_detection_scanner_service.md)

* [Benchmarks](https://gitlab.com/gitlab-org/gitlab/-/work_items/468107)

* [Monitoring](./secret-detection-svc-monitoring.md)
