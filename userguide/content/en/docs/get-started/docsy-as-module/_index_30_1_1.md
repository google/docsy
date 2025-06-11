---
title: "Identity Platform CI/CD Auditlog Pipeline"
description: ""
---

{{% alert title="Not Live Yet" color="warning" %}}
You are viewing a preview of documentation for the future state of GitLab Identity v3 (mid 2024). See the <a href="/handbook/security/access-management-policy">Access Management Policy</a> for the GitLab Identity v2 current state with baseline entitlements and access requests. See the roadmap in the <a href="https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/roadmap?state=all&sort=start_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&group_path=gitlab-com/gl-security/identity/eng&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true">epics gantt chart</a>.
{{% /alert %}}

## Pipeline Overview

```mermaid
graph LR

subgraph accessctl GitLab Repositories
direction LR
subgraph accessctl-policies Repo
direction TB
REPO_INV_POLICIES_ROLES[("policies/role/{kingdom}.yml")]
REPO_INV_POLICIES_OU[("policies/ou/{kingdom}.yml")]
end
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_ROLE[("manifests/roles/<br/>{role}.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]:::sky
end
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_USERS_ONBOARDING[("auditlog/users/<br />onboarding.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_USERS_OFFBOARDING[("auditlog/users/<br />offboarding.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_USERS_CHANGES[("auditlog/users/<br />attributes.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_ATTRIBUTE[("auditlog/attribute/<br />{attribute}.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_ROLE[("auditlog/role/<br />{role}.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_OU[("auditlog/ou/<br />{ou}.yml/json/csv")]:::emerald
end
end

subgraph accessctl GitLab CI/CD Pipeline Jobs
direction LR
subgraph Manifest Stage
direction LR
CI_MANIFEST_USER_JOB[["Stage 1.1<br />Users Job<br/>CLI manifest:users"]]
CI_MANIFEST_ROLE_JOB[["Stage 1.2<br />Roles Job<br />CLI manifest:roles"]]
CI_MANIFEST_GROUP_JOB[["Stage 1.3<br />Org Units Job<br/>CLI manifest:ou"]]
end
subgraph Auditlog Stage
direction LR
CI_CHANGELOG_USER_JOB[["Stage 2.1<br />Users Job<br/>CLI auditlog:users"]]:::orange
CI_CHANGELOG_ATTRIBUTE_JOB[["Stage 2.2<br />Attributes Job<br/>CLI auditlog:attributes"]]:::orange
CI_CHANGELOG_ROLE_JOB[["Stage 2.3<br />Roles Job<br/>CLI auditlog:roles"]]:::orange
CI_CHANGELOG_GROUP_JOB[["Stage 2.4<br />Org Units Job<br/>CLI auditlog:ou"]]:::orange
end
subgraph Provisioning Stage
direction LR
subgraph Okta API
CI_PROVISIONING_OKTA_USER_JOB["Stage 3.1<br />Okta Users Job<br />provision:okta-users"]
CI_PROVISIONING_OKTA_GROUP_JOB["Stage 3.2<br />Okta Groups Job<br />provision:okta-groups"]
end
subgraph Google Workspace Directory API
CI_PROVISIONING_GOOGLE_GROUP_JOB["Stage 3.3<br />Google Groups Job<br />provision:google-groups"]
end
subgraph GitLab.com SaaS API
CI_PROVISIONING_GITLAB_SAAS_GROUP_JOB["Stage 3.4<br />GitLab SaaS Groups Job<br />provision:gitlab-saas-groups"]
end
subgraph GitLab Self-Managed Instance API
CI_PROVISIONING_GITLAB_SELF_GROUP_JOB["Stage 3.5<br />GitLab Self-Managed Groups Job<br />provision:gitlab-self-groups"]
end
end

CI_MANIFEST_USER_JOB --> CI_MANIFEST_ROLE_JOB --> CI_MANIFEST_GROUP_JOB
CI_CHANGELOG_USER_JOB --> CI_CHANGELOG_ATTRIBUTE_JOB --> CI_CHANGELOG_ROLE_JOB --> CI_CHANGELOG_GROUP_JOB
CI_PROVISIONING_OKTA_USER_JOB --> CI_PROVISIONING_OKTA_GROUP_JOB --> CI_PROVISIONING_GOOGLE_GROUP_JOB --> CI_PROVISIONING_GITLAB_SAAS_GROUP_JOB --> CI_PROVISIONING_GITLAB_SELF_GROUP_JOB

click CI_MANIFEST_USER_JOB "/handbook/security/identity/platform/manifests" "View Details"
click CI_MANIFEST_ROLE_JOB "/handbook/security/identity/platform/manifests" "View Details"
click CI_MANIFEST_GROUP_JOB "/handbook/security/identity/platform/manifests" "View Details"
click CI_CHANGELOG_USER_JOB "/handbook/security/identity/platform/auditlog" "View Details"
click CI_CHANGELOG_ATTRIBUTE_JOB "/handbook/security/identity/platform/auditlog" "View Details"
click CI_CHANGELOG_ROLE_JOB "/handbook/security/identity/platform/auditlog" "View Details"
click CI_CHANGELOG_GROUP_JOB "/handbook/security/identity/platform/auditlog" "View Details"
click CI_PROVISIONING_OKTA_USER_JOB "/handbook/security/identity/platform/provisioning/okta" "View Details"
click CI_PROVISIONING_OKTA_GROUP_JOB "/handbook/security/identity/platform/provisioning/okta" "View Details"
click CI_PROVISIONING_GOOGLE_GROUP_JOB "/handbook/security/identity/platform/provisioning/google" "View Details"
click CI_PROVISIONING_GITLAB_SAAS_GROUP_JOB "/handbook/security/identity/platform/provisioning/gitlab" "View Details"
click CI_PROVISIONING_GITLAB_SELF_GROUP_JOB "/handbook/security/identity/platform/provisioning/gitlab" "View Details"

classDef slate fill:#cbd5e1,stroke:#475569,stroke-width:1px;
classDef red fill:#fca5a5,stroke:#dc2626,stroke-width:1px;
classDef orange fill:#fdba74,stroke:#ea580c,stroke-width:1px;
classDef yellow fill:#fcd34d,stroke:#ca8a04,stroke-width:1px;
classDef emerald fill:#6ee7b7,stroke:#059669,stroke-width:1px;
classDef cyan fill:#67e8f9,stroke:#0891b2,stroke-width:1px;
classDef sky fill:#7dd3fc,stroke:#0284c7,stroke-width:1px;
classDef violet fill:#c4b5fd,stroke:#7c3aed,stroke-width:1px;
classDef fuchsia fill:#f0abfc,stroke:#c026d3,stroke-width:1px;
end
```

## CI/CD Job Workflows

### Users Auditlog

```mermaid
graph TB

subgraph Identity GitLab Repositories
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]
REPO_INV_MANIFESTS_ROLES[("manifests/roles/<br />{role}.yml/json/csv")]
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]
end
end


subgraph Identity Platform CI/CD Auditlog Stage Scripts
direction LR

CI_USER_JOB[["Stage 2.1<br />Users Job<br/>CLI auditlog:users"]]:::orange
CI_USER_PARSE_MANIFEST_CURRENT[(Parse Current Manifest Commit)]
CI_USER_PARSE_MANIFEST_PREVIOUS[(Parse Previous Manifest Commit)]
CI_USER_PARSE_MANIFEST_FILTER{Filter results<br />with differences}
CI_USER_ONBOARDING_CHECK{{Check if user has been created}}
CI_USER_OFFBOARDING_CHECK{{Check if user has been deprovisioned}}
CI_USER_ATTRIBUTE_CHECK{{Loop through users and<br />compare attributes for differences}}

CI_USER_LOG_S3{{Create Audit Log entry in S3 bucket}}
CI_USER_API{{Audit Transaction<br />REST API Call to accessctl<br />for automation workflows}}
CI_USER_LOG_REPO{{Append Auditlog in Repository}}

CI_USER_JOB --> CI_USER_PARSE_MANIFEST_CURRENT
CI_USER_JOB --> CI_USER_PARSE_MANIFEST_PREVIOUS
CI_USER_PARSE_MANIFEST_CURRENT --> CI_USER_PARSE_MANIFEST_FILTER
CI_USER_PARSE_MANIFEST_PREVIOUS --> CI_USER_PARSE_MANIFEST_FILTER

CI_USER_PARSE_MANIFEST_FILTER --> CI_USER_ONBOARDING_CHECK
CI_USER_PARSE_MANIFEST_FILTER --> CI_USER_OFFBOARDING_CHECK
CI_USER_PARSE_MANIFEST_FILTER --> CI_USER_ATTRIBUTE_CHECK
CI_USER_ONBOARDING_CHECK --> CI_USER_LOG_S3
CI_USER_OFFBOARDING_CHECK --> CI_USER_LOG_S3
CI_USER_ATTRIBUTE_CHECK --> CI_USER_LOG_S3
CI_USER_LOG_S3 --> CI_USER_API
CI_USER_API --> CI_USER_LOG_REPO

end

subgraph Identity GitLab Repositories
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_USERS_ONBOARDING[("auditlog/users/<br />onboarding.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_USERS_OFFBOARDING[("auditlog/users/<br />offboarding.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_USERS_CHANGES[("auditlog/users/<br />attributes.yml/json/csv")]:::emerald
end
end

REPO_INV_MANIFESTS_USERS --> CI_USER_JOB

CI_USER_LOG_REPO --> REPO_INV_CHANGELOG_USERS_ONBOARDING
CI_USER_LOG_REPO --> REPO_INV_CHANGELOG_USERS_OFFBOARDING
CI_USER_LOG_REPO --> REPO_INV_CHANGELOG_USERS_CHANGES

classDef slate fill:#cbd5e1,stroke:#475569,stroke-width:1px;
classDef red fill:#fca5a5,stroke:#dc2626,stroke-width:1px;
classDef orange fill:#fdba74,stroke:#ea580c,stroke-width:1px;
classDef yellow fill:#fcd34d,stroke:#ca8a04,stroke-width:1px;
classDef emerald fill:#6ee7b7,stroke:#059669,stroke-width:1px;
classDef cyan fill:#67e8f9,stroke:#0891b2,stroke-width:1px;
classDef sky fill:#7dd3fc,stroke:#0284c7,stroke-width:1px;
classDef violet fill:#c4b5fd,stroke:#7c3aed,stroke-width:1px;
classDef fuchsia fill:#f0abfc,stroke:#c026d3,stroke-width:1px;
```

### Attributes Auditlog

```mermaid
graph TB

subgraph Identity GitLab Repositories
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_ROLES[("manifests/roles/<br />{role}.yml/json/csv")]
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]
end
end

subgraph Identity Platform CI/CD Auditlog Stage Scripts
direction LR
CI_ATTRIBUTE_JOB[["Stage 2.2<br />Attributes Job<br/>CLI auditlog:attributes"]]:::orange
CI_ATTRIBUTE_PARSE_MANIFEST_CURRENT[(Parse Current Manifest Commit)]
CI_ATTRIBUTE_PARSE_MANIFEST_PREVIOUS[(Parse Previous Manifest Commit)]
CI_ATTRIBUTE_PARSE_MANIFEST_FILTER{Filter results<br />with differences}
CI_ATTRIBUTE_CREATED_CHECK{{Check if attribute has been created}}
CI_ATTRIBUTE_DELETED_CHECK{{Check if attribute has been deleted}}
CI_ATTRIBUTE_LOG_S3{{Create Audit Log entry in S3 bucket}}
CI_ATTRIBUTE_API{{Audit Transaction<br />REST API Call to accessctl<br />for automation workflows}}
CI_ATTRIBUTE_LOG_REPO{{Append Auditlog in Repository}}
CI_ATTRIBUTE_JOB --> CI_ATTRIBUTE_PARSE_MANIFEST_CURRENT
CI_ATTRIBUTE_JOB --> CI_ATTRIBUTE_PARSE_MANIFEST_PREVIOUS
CI_ATTRIBUTE_PARSE_MANIFEST_CURRENT --> CI_ATTRIBUTE_PARSE_MANIFEST_FILTER
CI_ATTRIBUTE_PARSE_MANIFEST_PREVIOUS --> CI_ATTRIBUTE_PARSE_MANIFEST_FILTER
CI_ATTRIBUTE_PARSE_MANIFEST_FILTER --> CI_ATTRIBUTE_CREATED_CHECK
CI_ATTRIBUTE_PARSE_MANIFEST_FILTER --> CI_ATTRIBUTE_DELETED_CHECK
CI_ATTRIBUTE_CREATED_CHECK --> CI_ATTRIBUTE_LOG_S3
CI_ATTRIBUTE_DELETED_CHECK --> CI_ATTRIBUTE_LOG_S3
CI_ATTRIBUTE_LOG_S3 --> CI_ATTRIBUTE_API
CI_ATTRIBUTE_API --> CI_ATTRIBUTE_LOG_REPO
end

subgraph Identity GitLab Repositories
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_ATTRIBUTE[("auditlog/attribute/<br />{attribute}.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_ROLE[("auditlog/role/<br />{role}.yml/json/csv")]
REPO_INV_CHANGELOG_OU[("auditlog/ou/<br />{ou}.yml/json/csv")]
end
end

REPO_INV_MANIFESTS_ATTRIBUTES --> CI_ATTRIBUTE_JOB
CI_ATTRIBUTE_LOG_REPO --> REPO_INV_CHANGELOG_ATTRIBUTE

classDef slate fill:#cbd5e1,stroke:#475569,stroke-width:1px;
classDef red fill:#fca5a5,stroke:#dc2626,stroke-width:1px;
classDef orange fill:#fdba74,stroke:#ea580c,stroke-width:1px;
classDef yellow fill:#fcd34d,stroke:#ca8a04,stroke-width:1px;
classDef emerald fill:#6ee7b7,stroke:#059669,stroke-width:1px;
classDef cyan fill:#67e8f9,stroke:#0891b2,stroke-width:1px;
classDef sky fill:#7dd3fc,stroke:#0284c7,stroke-width:1px;
classDef violet fill:#c4b5fd,stroke:#7c3aed,stroke-width:1px;
classDef fuchsia fill:#f0abfc,stroke:#c026d3,stroke-width:1px;
```

### Roles Auditlog

```mermaid
graph TB

subgraph Identity GitLab Repositories
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]
REPO_INV_MANIFESTS_ROLES[("manifests/roles/<br />{role}.yml/json/csv")]:::sky
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]
end
end

subgraph Identity Platform CI/CD Auditlog Stage Scripts
direction LR
CI_ROLE_JOB[["Stage 2.3<br />Roles Job<br/>CLI auditlog:roles"]]:::orange
CI_ROLE_PARSE_MANIFEST_CURRENT[(Parse Current Manifest Commit)]
CI_ROLE_PARSE_MANIFEST_PREVIOUS[(Parse Previous Manifest Commit)]
CI_ROLE_PARSE_MANIFEST_FILTER{Filter results<br />with differences}
CI_ROLE_CREATED_CHECK{{Check if user has been added}}
CI_ROLE_DELETED_CHECK{{Check if user has been deleted}}
CI_ROLE_LOG_S3{{Create Audit Log entry in S3 bucket}}
CI_ROLE_API{{Audit Transaction<br />REST API Call to accessctl<br />for automation workflows}}
CI_ROLE_LOG_REPO{{Append Auditlog in Repository}}
CI_ROLE_JOB --> CI_ROLE_PARSE_MANIFEST_CURRENT
CI_ROLE_JOB --> CI_ROLE_PARSE_MANIFEST_PREVIOUS
CI_ROLE_PARSE_MANIFEST_CURRENT --> CI_ROLE_PARSE_MANIFEST_FILTER
CI_ROLE_PARSE_MANIFEST_PREVIOUS --> CI_ROLE_PARSE_MANIFEST_FILTER
CI_ROLE_PARSE_MANIFEST_FILTER --> CI_ROLE_CREATED_CHECK
CI_ROLE_PARSE_MANIFEST_FILTER --> CI_ROLE_DELETED_CHECK
CI_ROLE_CREATED_CHECK --> CI_ROLE_LOG_S3
CI_ROLE_DELETED_CHECK --> CI_ROLE_LOG_S3
CI_ROLE_LOG_S3 --> CI_ROLE_API
CI_ROLE_API --> CI_ROLE_LOG_REPO
end

subgraph Identity GitLab Repositories
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_ATTRIBUTE[("auditlog/attribute/<br />{attribute}.yml/json/csv")]
REPO_INV_CHANGELOG_ROLE[("auditlog/role/<br />{role}.yml/json/csv")]:::emerald
REPO_INV_CHANGELOG_OU[("auditlog/ou/<br />{ou}.yml/json/csv")]
end
end

REPO_INV_MANIFESTS_ROLES --> CI_ROLE_JOB
CI_ROLE_LOG_REPO --> REPO_INV_CHANGELOG_ROLE

classDef slate fill:#cbd5e1,stroke:#475569,stroke-width:1px;
classDef red fill:#fca5a5,stroke:#dc2626,stroke-width:1px;
classDef orange fill:#fdba74,stroke:#ea580c,stroke-width:1px;
classDef yellow fill:#fcd34d,stroke:#ca8a04,stroke-width:1px;
classDef emerald fill:#6ee7b7,stroke:#059669,stroke-width:1px;
classDef cyan fill:#67e8f9,stroke:#0891b2,stroke-width:1px;
classDef sky fill:#7dd3fc,stroke:#0284c7,stroke-width:1px;
classDef violet fill:#c4b5fd,stroke:#7c3aed,stroke-width:1px;
classDef fuchsia fill:#f0abfc,stroke:#c026d3,stroke-width:1px;
```

### Organization Units Auditlog

```mermaid
graph TB

subgraph Identity GitLab Repositories
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]
REPO_INV_MANIFESTS_ROLES[("manifests/roles/<br />{role}.yml/json/csv")]
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]:::sky
end
end

subgraph Identity Platform CI/CD Auditlog Stage Scripts
direction LR
CI_GROUP_JOB[["Stage 2.4<br />Org Units Job<br/>CLI auditlog:ou"]]:::orange
CI_GROUP_PARSE_MANIFEST_CURRENT[(Parse Current Manifest Commit)]
CI_GROUP_PARSE_MANIFEST_PREVIOUS[(Parse Previous Manifest Commit)]
CI_GROUP_PARSE_MANIFEST_FILTER{Filter results<br />with differences}
CI_GROUP_CREATED_CHECK{{Check if user has been added}}
CI_GROUP_DELETED_CHECK{{Check if user has been deleted}}
CI_GROUP_LOG_S3{{Create Audit Log entry in S3 bucket}}
CI_GROUP_API{{Audit Transaction<br />REST API Call to accessctl<br />for automation workflows}}
CI_GROUP_LOG_REPO{{Append Auditlog in Repository}}
CI_GROUP_JOB --> CI_GROUP_PARSE_MANIFEST_CURRENT
CI_GROUP_JOB --> CI_GROUP_PARSE_MANIFEST_PREVIOUS
CI_GROUP_PARSE_MANIFEST_CURRENT --> CI_GROUP_PARSE_MANIFEST_FILTER
CI_GROUP_PARSE_MANIFEST_PREVIOUS --> CI_GROUP_PARSE_MANIFEST_FILTER
CI_GROUP_PARSE_MANIFEST_FILTER --> CI_GROUP_CREATED_CHECK
CI_GROUP_PARSE_MANIFEST_FILTER --> CI_GROUP_DELETED_CHECK
CI_GROUP_CREATED_CHECK --> CI_GROUP_LOG_S3
CI_GROUP_DELETED_CHECK --> CI_GROUP_LOG_S3
CI_GROUP_LOG_S3 --> CI_GROUP_API
CI_GROUP_API --> CI_GROUP_LOG_REPO
end

subgraph Identity GitLab Repositories
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_ATTRIBUTE[("auditlog/attribute/<br />{attribute}.yml/json/csv")]
REPO_INV_CHANGELOG_ROLE[("auditlog/role/<br />{role}.yml/json/csv")]
REPO_INV_CHANGELOG_OU[("auditlog/ou/<br />{ou}.yml/json/csv")]:::emerald
end
end

REPO_INV_MANIFESTS_OU --> CI_GROUP_JOB
CI_GROUP_LOG_REPO --> REPO_INV_CHANGELOG_OU

classDef slate fill:#cbd5e1,stroke:#475569,stroke-width:1px;
classDef red fill:#fca5a5,stroke:#dc2626,stroke-width:1px;
classDef orange fill:#fdba74,stroke:#ea580c,stroke-width:1px;
classDef yellow fill:#fcd34d,stroke:#ca8a04,stroke-width:1px;
classDef emerald fill:#6ee7b7,stroke:#059669,stroke-width:1px;
classDef cyan fill:#67e8f9,stroke:#0891b2,stroke-width:1px;
classDef sky fill:#7dd3fc,stroke:#0284c7,stroke-width:1px;
classDef violet fill:#c4b5fd,stroke:#7c3aed,stroke-width:1px;
classDef fuchsia fill:#f0abfc,stroke:#c026d3,stroke-width:1px;
```
