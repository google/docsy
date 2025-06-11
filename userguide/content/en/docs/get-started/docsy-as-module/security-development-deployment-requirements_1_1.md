---
title: "Security Requirements for Development and Deployment"
---

## Summary

The Security Department and its subteams are responsible for a number of
applications and other resources that process various types of sensitive data
in service of supporting GitLab.com.

## Scope

The scope of the requirements and practices documented in this page are Security
Department tools and resources that collect, process, and store [RED]({{< ref "data-classification-standard#red" >}}) data.

## What's in this page

- Infrastructure requirements for security team tools that collect, process, and
  and store RED data.

## What is not in this page

- An exhaustive list of security best practices for network, host, and infrastructure security.
- An exhaustive list of security best practices for application, database,
  cloud function, or other development resources.
- Prescriptive guidelines for development and change management.

### Review Process

Future work: At this time, we don't have defined process for architecture and
implementation review like we have for [AppSec Reviews]({{< ref "appsec-reviews" >}}).
Such a process will be the responsibility of a future Security team.

## Requirements

### Overall Guidelines

The following requirements are driven by 3 high level guidelines:

- [Least Privilege]({{< ref "access-management-policy#principle-of-least-privilege" >}})
- [Zero Trust](/handbook/security/product-security/architecture/zero-trust/)
- [GitLab's Security Controls]({{< ref "sec-controls#gitlabs-security-controls" >}})

### Identity, Authentication, and Authorization

#### Accounts and Credentials

1. Shared user accounts MUST NOT be used.
1. Multi-factor (MFA) authentication MUST be enabled for all user accounts.
1. Access to service account credentials MUST follow the access control of the resources to which the credentials grant access.
1. Service account credentials MUST be rotated every 365 days.
1. Non-MFA user account credentials (for example, API keys) MUST be rotated every 90 days.

#### Identity

1. An identity provider MUST be used for all external accounts.

#### Authentication

1. Service accounts MAY be authenticated using static credentials, such as API tokens or shared private keys.

#### Authorization

1. User access to sensitive data MUST be granted through security groups.
1. Individual access for disaster recovery MAY be granted to system owners as
   specified in the [tech stack tracking file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

#### Service Account usage

1. Service accounts names SHOULD be meaningful.
1. Service accounts with access to RED data MUST follow the [Access Request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#shared-account-access-request)
   process.
1. Service accounts with access to RED data MUST be limited to single logical scope; for example, a single GCP project.

#### Network Security

1. All network firewalls MUST be configured such that the default policy is DENY.
1. Network firewall rules SHOULD deny egress by default.
1. All external communication MUST be encrypted in transit using up to date protocals and ciphers.
1. All internal communication SHOULD be encrypted in transit if possible.

#### Data Handling and Isolation

1. Data [retention policies]({{< ref "records-retention-deletion" >}}) MUST be followed.
1. Data MUST be encrypted at rest.
   1. Data MAY be encrypted using provider managed keys.
1. Data of different types MUST be logically seperated at rest.
1. Virtual networks (for example, VPC in GCP) MAY be used as a mechanism for data and workload isolation.

Examples of different data types:

- User content, such as repository contents or attachments
- Production derived data, such as logs
- DFIR (Digital Forensics and Incident Reponse) artifacts, such as system logs and disk images

## Vulnerability and Patch Management

1. Resources MUST be covered by the [Security Vulnerability Management]({{< ref "../product-security/vulnerability-management" >}}) process.

## Change Management and Tracking

1. Changes to systems that process RED data MUST be tracked in a corresponding
   issue, merge request, or other reviewable process.

## Audit Logging

1. Environment audit logs MUST be enabled and stored in accordance with [retention policies]({{< ref "records-retention-deletion" >}}).
1. Application audit logs, if supported and available, MUST be enabled and stored in accordance with [retention policies]({{< ref "records-retention-deletion" >}}).
1. Logs MUST be forwarded and processed in a centralized location that provides
   access to any operational team, such as Security Operations.

## Best Practices

The following practices are meant to provide more specific technical implementation
examples to meet the above criteria.

### GCP Practices

#### Disable legacy metadata endpoints

The legacy metadata endpoints should be [disabled on all projects](https://cloud.google.com/compute/docs/storing-retrieving-metadata).

#### Multiple Environments

Development and deployment should occur in a minimum of 2 environments, in addition
to local development:

- A shared testing, integration, or other non-production environment.
- A production environment which meets or exceeds the requirements in this page.

The environments should be configured as closely as possible as a best practice
to reduce errors in deployment due to inconsistent configuration.

#### GCP Security Group (gcp-*-sg@gitlab.com) Conventions

Security groups for `gitlab.com` organization resources should be named `gcp-:grouppurpose-sg@gitlab.com`.

#### Remove default service account permissions

When services are enabled, the default service account may be created with
`project/editor` permissions.

- This default mapping should be removed.
- A service account for each workload should be provisioned with the least
  privileges required.

#### Use Lifecycle Management for GCS

Buckets which store data subject to retention requirements should use
lifecycle management to automate deletion.

```terraform
resource "google_storage_bucket" "system-logging-archive" {
  name          = "${var.project_id}-system-logging-archive"
  project       = var.project_id
  location      = "US"
  force_destroy = true

  lifecycle_rule {
    condition {
      age = "365"
    }
    action {
      type = "Delete"
    }
  }
}
```

#### Shielded VMS

Shielded VMs should be used in all cases. This can be enforced with
organization or folder policy. Since this can't be enforced on the existing
`gitlab.com` organization due to existing workloads, it should enforced at
the folder or project level for new folders and projects.

```terraform
resource "google_folder_organization_policy" "shielded_vm_policy" {
  folder     = "myfolder"
  constraint = "compute.requireShieldedVm"

  boolean_policy {
    enforced = true
  }
}

# Enable shielded VMs for k8s node pools
resource "google_container_node_pool" "nodes" {
  ...

  #enable_shielded_nodes = true
  node_config {
    ...

    shielded_instance_config {
      enable_secure_boot          = true
      #enable_vtpm                 = true
      enable_integrity_monitoring = true
    }

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }

  lifecycle {
    ignore_changes = [
      node_config,
    ]
  }
}
```

#### VPC Firewall Rules

A default DENY rule for both egress and ingress should be added to all VPCs:

```terraform
resource "google_compute_network" "vpc" {
   ...
}

resource "google_compute_firewall" "deny-all-egress" {
  name      = "${google_compute_network.vpc.name}-deny-all-egress"
  project   = var.project_id
  network   = google_compute_network.vpc.self_link
  priority  = 65533
  direction = "EGRESS"

  deny {
    protocol = "all"
  }
}

resource "google_compute_firewall" "deny-all-ingress" {
  name      = "${google_compute_network.vpc.name}-deny-all-ingress"
  project   = var.project_id
  network   = google_compute_network.vpc.self_link
  priority  = 65533
  direction = "INGRESS"

  deny {
    protocol = "all"
  }
}
```

#### Least Privileges Review

GCP now has a [permission recommender](https://cloud.google.com/iam/docs/recommender-overview)
which will recommend least privilege based on actual usage. It can be used to
determine minimum permissions in non-production environments. It should be
reviewed periodically as part of scheduled reviews and maintenance.

## Identity Providers

[Okta](/handbook/business-technology/okta/) is our corporate identity and authentication provider. Configuration of
applications using Okta as a SAML provider is the preferred solution. It meets
operation needs for security monitoring of activity and can be provisioned by
IT Ops using the standard Access Request process. Applications designed
to work as SAML Service Provider should be able to work with other identity
providers if that changes in the future.

For applications requiring shell access for daily work, [Okta ASA](https://gitlab.com/gitlab-cookbooks/gitlab_okta_asa) should be
implemented for ssh authentication.
