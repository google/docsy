---
title: "Infrastructure Reference Links"
description: "This page provides helpful links and reference material for the infrastructure team."
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Milestones

Each issue and epic gets mapped to the milestone for the time period that most of the work takes place. This is used as our lightweight version of time tracking and capacity planning, and is helpful with roadmap planning.

- Monthly Milestones
  - [BT Infra 2021-07](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/2)
  - [BT Infra 2021-08](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/3)
  - [BT Infra 2021-09](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/4)
  - [BT Infra 2021-10](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/5)
  - [BT Infra 2021-11](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/6)
  - [BT Infra 2021-12](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/7)
  - [BT Infra 2022-01](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/8)
- Quarterly Milestones
  - [BT Infra FY22-Q3](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/9)
  - [BT Infra FY22-Q4](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/10)
- Fiscal Year Milestones
  - BT Infra FY22-2H
  - [BT Infra FY23-1H](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/11)
  - [BT Infra FY23-2H](https://gitlab.com/groups/gitlab-com/business-technology/engineering/infrastructure/-/milestones/12)

## Repositories

- [gitlab.com/gitlab-com/business-technology/engineering/infrastructure](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure) - The group with all repositories for Business Technology Engineering Infrastructure that don't contain sensitive information that should be hosted on [ops.gitlab.net](https://ops.gitlab.net).

## Labels and Tags

### Issue Types

You can view the issues with these labels on the [BT Eng Infra - Issue Types](https://gitlab.com/groups/gitlab-com/-/boards/2870859) issue board.

These labels can be applied to any issue, MR, or epic in the [gitlab.com/gitlab-com](https://gitlab.com/gitlab-com) namespace, which includes the majority of issue trackers used by GitLab team members in child groups and projects.

> <small>**Note:** These labels have not been created for the `gitlab-org` namespace since our team does not work on any projects in that namespace, and it would require the creation of additional issue boards and automation for the separate top-level group.</small>

<!-- This is an HTML table since multi-link links do not format well with Markdown tables. It cannot be indented due to Markdown indent formatting problems. -->
<table>
<thead>
<tr>
<th style="width: 35%;">Label</th>
<th style="width: 40%;">When it's used</th>
<th style="width: 25%;">Links</th>
</tr>
</thead>
<tbody>
<!-- bt-infra::access-request -->
<tr>
<td><code>bt-infra::access-request</code></td>
<td><small>Applied to all access requests that we responsible for provisioning.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aaccess-request">Epics</a>
</td>
</tr>
<!-- bt-infra::bug -->
<tr>
<td><code>bt-infra::bug</code></td>
<td><small>Applied to bug reports and quick fixes that isn't directly associated with a code repository that should be fixed ASAP. If this is a broader or longer lived issue, this should likely be refactored into another category and/or issues in the code repository issue tracker.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Abug">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Abug">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Abug">Epics</a>
</td>
</tr>
<!-- bt-infra::epic-project -->
<tr>
<td><code>bt-infra::epic-project</code></td>
<td><small>Applied to larger scope or longer duration issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aepic-project">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aepic-project">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aepic-project">Epics</a>
</td>
</tr>
<!-- bt-infra::iac -->
<tr>
<td><code>bt-infra::iac</code></td>
<td><small>Applied to Terraform, Ansible, and K8s changes that often require a certain headspace to complete. This allows us to resolve multiple issues simultaneously.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aiac">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aiac">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aiac">Epics</a>
</td>
</tr>
<!-- bt-infra::interest -->
<tr>
<td><code>bt-infra::interest</code></td>
<td><small>Applied to issues that we're watching or are interested in as an FYI.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Ainterest">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Ainterest">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Ainterest">Epics</a>
</td>
</tr>
<!-- bt-infra::service -->
<tr>
<td><code>bt-infra::service</code></td>
<td><small>Applied to issues related to providing (internal) customer service and/or for issues relating to one of the managed services that we offer. If we're helping people and it's not a bug, this label is usually applied.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aservice">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aservice">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aservice">Epics</a>
</td>
</tr>
<!-- bt-infra::unplanned -->
<tr>
<td><code>bt-infra::unplanned</code></td>
<td><small>Applied to any asks from team members or other departments that are not part of our day-to-day responsibilities or managed services that we offer.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Aunplanned">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Aunplanned">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Aunplanned">Epics</a>
</td>
</tr>
<!-- bt-infra::wishlist -->
<tr>
<td><code>bt-infra::wishlist</code></td>
<td><small>Applied to our long-lived backlog of things that are relevant and should not be rejected, however are not a priority right now.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra%3A%3Awishlist">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra%3A%3Awishlist">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/epics?label_name%5B%5D=bt-infra%3A%3Awishlist">Epics</a>
</td>
</tr>
</table>

### Managed Services

You can view the issues with these labels on the [BT Eng Infra - Managed Services](https://gitlab.com/groups/gitlab-com/-/boards/2871346) issue board.

<!-- This is an HTML table since multi-link links do not format well with Markdown tables. It cannot be indented due to Markdown indent formatting problems. -->
<table>
<thead>
<tr>
<th style="width: 35%;">Label</th>
<th style="width: 40%;">When it's used</th>
<th style="width: 25%;">Links</th>
</tr>
</thead>
<tbody>
<!-- bt-infra-service::aws -->
<tr>
<td><code>bt-infra-service::aws</code></td>
<td><small>Applied to all AWS infrastructure related issues that are not specific to the GitLab Sandbox Cloud.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Aaws">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aaws">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aaws">Epics</a>
</td>
</tr>
<!-- bt-infra-service::demo-systems -->
<tr>
<td><code>bt-infra-service::demo-systems</code></td>
<td><small>Applied to all Customer Success Demo Systems related issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ademo-systems">Epics</a>
</td>
</tr>
<!-- bt-infra-service::dns -->
<tr>
<td><code>bt-infra-service::dns</code></td>
<td><small>Applied to all DNS domain, zone, and record related issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Adns-zones">Epics</a>
</td>
</tr>
<!-- bt-infra-service::gcp -->
<tr>
<td><code>bt-infra-service::gcp</code></td>
<td><small>Applied to all Google Cloud Platform (GCP) issues that are not specific to the GitLab Sandbox Cloud.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Agcp">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Agcp">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Agcp">Epics</a>
</td>
</tr>
<!-- bt-infra-service::infra-standards -->
<tr>
<td><code>bt-infra-service::infra-standards</code></td>
<td><small>Applied to all Infrastructure Standards and Infrastructure shared services issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Ainfra-standards">Epics</a>
</td>
</tr>
<!-- bt-infra-service::platypus -->
<tr>
<td><code>bt-infra-service::platypus</code></td>
<td><small>Applied to all BT Enterprise Apps Integrations Project Platypus infrastructure related issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Aplatypus">Epics</a>
</td>
</tr>
<!-- bt-infra-service::sandbox-cloud -->
<tr>
<td><code>bt-infra-service::sandbox-cloud</code></td>
<td><small>Applied to all GitLab Sandbox Cloud and HackyStack issues.</small></td>
<td>
<a href="https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Issues</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Merge Requests</a><br />
<a href="https://gitlab.com/groups/gitlab-com/-/merge_requests?label_name%5B%5D=bt-infra-service%3A%3Asandbox-cloud">Epics</a>
</td>
</tr>
</table>
