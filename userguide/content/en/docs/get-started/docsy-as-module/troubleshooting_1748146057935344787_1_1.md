---
title: Troubleshooting
description: "Information about monitoring and logging tools of Duo Workflow."
---

## Tools

Duo Workflow uses the following logging and monitoring tools:

1. [LangSmith](https://smith.langchain.com/o/477de7ad-583e-47b6-a1c4-c4a0300e7aca/projects/p/5409132b-2cf3-4df8-9f14-70204f90ed9b?timeModel=%7B%22duration%22%3A%227d%22%7D) - collects logs scoped to underlaying graph execution, including inforamtion like: LLM completions or tool calls
2. [GCP logs explorer](https://console.cloud.google.com/logs/query;query=resource.labels.service_name%3D%22duo-workflow%22%0AjsonPayload.workflow_id%3D%2212312415%22%0AjsonPayload.gitlab_global_user_id%3D%22evhd9EY......%22%0AjsonPayload.correlation_id%3D%2268bd87b3-fb70-4093-afb7-21f30ab6021d%22%0A--%20jsonPayload.level%3D%22error%22%0A;cursorTimestamp=2024-12-17T13:17:58.986139Z;duration=P1D?hl=en&invt=AbkXXw&project=gitlab-runway-production&inv=1) - Runway logs
3. Sentry error tracking collects error traces for:
    1. [Duo Workflow Service](https://new-sentry.gitlab.net/organizations/gitlab/issues/?limit=5&project=36&query=&sort=freq&statsPeriod=14d)
    2. [Duow Workflow Executor](https://new-sentry.gitlab.net/organizations/gitlab/issues/?limit=5&project=40&query=&sort=freq&statsPeriod=14d)
4. Runway monitoring [dashboard](https://dashboards.gitlab.net/d/runway-service/runway3a-runway-service-metrics?from=now-24h&orgId=1&timezone=utc&to=now&var-PROMETHEUS_DS=mimir-runway&var-environment=gprd&var-region=$__all&var-type=duo-workflow) - this a grafana dashboard that tracks hardware resource consumption for Duo Workflow Service
5. [Tableau dashboard for internal events tracking](https://10az.online.tableau.com/#/site/gitlab/views/DuoRequestWorkflow/DuoWorkflow) - displays aggregated data collected with internal event tracking, showing additional product metrics like total number of workflows, or distribution between differnt workflow outcomes

### GCP Logs explorer (Runway logs)

Following projects hold loggs for different pieces of Runway deployments:

1. `gitlab-runway-production` - holds logs for production runway deployments
1. `gitlab-runway-staging` - holds logs for staging runway deployments

When browsing Runway logs you can narrow scope to piece of infrastructure that is of interest to you using following filters:

1. To filter only load balancer logs use:

   ```plain
   resource.type="http_load_balancer"
   resource.labels.forwarding_rule_name="duo-workflow-https"
   ```

1. To filter only Duo Workflow Service deployment logs use:

   ```plain
   resource.labels.service_name="duo-workflow
   ```

### gRPCurl

The [grpcurl](https://github.com/fullstorydev/grpcurl) is a cli tool that enables you to interact with gRPC servers just like `curl` does for http ones.

An example usage of `grpcurl` for Duo Workflow is shown in the example below:

1. Duo Workflow credentails can be obtained via `curl`

```bash
curl -X POST -H "Authorization: Bearer $GITLAB_API_PRIVATE_TOKEN" https://gitlab.com/api/v4/ai/duo_workflows/direct_access
```

1. With credentials assigned to environment variables `grpcurl` can be used to start bidirectional channel to Duo Workflow Service

```bash
grpcurl -keepalive-time 20 -H "x-gitlab-global-user-id":"$GLOBAL_USER_ID" \
   -H "x-gitlab-instance-id":"ea8bf81......." -H "x-gitlab-realm":"saas" \
   -H "x-gitlab-authentication-type":"oidc" \
   -H authorization:"bearer $GRPC_TOKEN" -d @ -vv -proto ../duo-workflow-service/contract/contract.proto
   -import-path ../duo-workflow-service/contract cloud.gitlab.com:443 DuoWorkflow/ExecuteWorkflow


Resolved method descriptor:
rpc ExecuteWorkflow ( stream .ClientEvent ) returns ( stream .Action );

Request metadata to send:
authorization: bearer eyJhbGc.....
x-gitlab-authentication-type: oidc
x-gitlab-global-user-id: Rf9.........
x-gitlab-instance-id: ea8bf810-..........
x-gitlab-realm: saas
```

1. With channel being established messages can be sent via stdin

```json
{
  "startRequest": {
    "workflowID": "12344",
    "goal": "create hello world in go",
    "workflowMetadata":  "{\"extended_logging\":true,\"git_sha\":\"e621c52bb0f3af0a102a06cf2e485aa961f60d8c\",\"git_url\":\"gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/metric-dictionary.git\"}"
  }
}
```

## Tips and tricks

A typical investigation around problematic Duo Workflow execution follows steps listed below:

Based on a user report:

1. Ask the user for the `workflow_id` for the problematic workflow which is displayed in the list of workflows
2. Use the `workflow_id` from previous step to filter down [langsmith traces](https://smith.langchain.com/o/477de7ad-583e-47b6-a1c4-c4a0300e7aca/projects/p/a86cfa18-72b2-4729-844e-94d4ffb7f54a?timeModel=%7B%22duration%22%3A%227d%22%7D) by applying a filter for `metadata` and `thread_id=[workflow_id]`
3. Use the `workflow_id` from 1st step to filter down logs in gcp logs explorer `jsonPayload.workflow_id="123456789"`

Based on a Sentry issue:

1. Use Duo Workflow Sentry issue to locate problematic workflow's `correlation_id`.
2. Use the `correlation_id` from previous step to filter down logs in gcp logs explorer, example filter: `jsonPayload.correlation_id="e7171f28-706d-4a47-be25-29d9b3751c0e"`

In addition one can use a workflow's `workflow_id` that is being recorded either in sentry or in log explorer to filter down LangSmith logs using `thread_id` filter in _metadata_ and comparing it against `workflow_id`.

## Past in depth investigations

1. Faulty network proxy via Cloudflare [investigation issue](https://gitlab.com/gitlab-org/gitlab/-/issues/501170)
