---
title: "Identity Platform CI/CD Manifest Pipeline"
description: ""
---

{{% alert title="Not Live Yet" color="warning" %}}
You are viewing a preview of documentation for the future state of GitLab Identity v3 (mid 2024). See the <a href="/handbook/security/security-and-technology-policies/access-management-policy/">Access Management Policy</a> for the GitLab Identity v2 current state with baseline entitlements and access requests. See the roadmap in the <a href="https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/roadmap?state=all&sort=start_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&group_path=gitlab-com/gl-security/identity/eng&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true">epics gantt chart</a>.
{{% /alert %}}

## Pipeline Overview

```mermaid
graph LR

subgraph accessctl GitLab Repositories
direction LR
subgraph accessctl-policies Repo
direction TB
REPO_INV_POLICIES_ROLES[("policies/role/{kingdom}.yml")]:::sky
REPO_INV_POLICIES_OU[("policies/ou/{kingdom}.yml")]:::sky
end
subgraph accessctl-manifests Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_ROLE[("manifests/roles/<br/>{role}.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]:::emerald
end
subgraph accessctl-auditlog Repo
direction TB
REPO_INV_CHANGELOG_USERS_ONBOARDING[("auditlog/users/<br />onboarding.yml/json/csv")]
REPO_INV_CHANGELOG_USERS_OFFBOARDING[("auditlog/users/<br />offboarding.yml/json/csv")]
REPO_INV_CHANGELOG_USERS_CHANGES[("auditlog/users/<br />attributes.yml/json/csv")]
REPO_INV_CHANGELOG_ATTRIBUTE[("auditlog/attribute/<br />{attribute}.yml/json/csv")]
REPO_INV_CHANGELOG_ROLE[("auditlog/role/<br />{role}.yml/json/csv")]
REPO_INV_CHANGELOG_OU[("auditlog/ou/<br />{ou}.yml/json/csv")]
end
end

subgraph accessctl GitLab CI/CD Pipeline Jobs
direction LR
subgraph Manifest Stage
direction LR
CI_MANIFEST_USER_JOB[["Stage 1.1<br />Users Job<br/>CLI manifest:users"]]:::orange
CI_MANIFEST_ROLE_JOB[["Stage 1.2<br />Roles Job<br />CLI manifest:roles"]]:::orange
CI_MANIFEST_GROUP_JOB[["Stage 1.3<br />Org Units Job<br/>CLI manifest:ou"]]:::orange
end
subgraph Auditlog Stage
direction LR
CI_CHANGELOG_USER_JOB[["Stage 2.1<br />Users Job<br/>CLI auditlog:users"]]
CI_CHANGELOG_ATTRIBUTE_JOB[["Stage 2.2<br />Attributes Job<br/>CLI auditlog:attributes"]]
CI_CHANGELOG_ROLE_JOB[["Stage 2.3<br />Roles Job<br/>CLI auditlog:roles"]]
CI_CHANGELOG_GROUP_JOB[["Stage 2.4<br />Org Units Job<br/>CLI auditlog:ou"]]
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

```mermaid
graph TB

subgraph "Workday"
    WORKDAY_WORKER[Worker]
    WORKDAY_REGION([Region])
    WORKDAY_DEPARTMENT([Department])
    WORKDAY_DIVISION([Division])
    WORKDAY_JOBTITLE([Job Title])
    WORKDAY_DEPARTMENT -.- WORKDAY_WORKER
    WORKDAY_DIVISION -.- WORKDAY_WORKER
    WORKDAY_REGION -.- WORKDAY_WORKER
    WORKDAY_JOBTITLE -.- WORKDAY_WORKER
    WORKDAY_WORKER -. "Manager Relationship" .-> WORKDAY_WORKER
end

subgraph Identity SaaS Vendor Services
direction LR
subgraph Okta GitLab Tenant
OKTA_PROFILE_MAPPING{{Workday to Okta<br>Profile Mapping}}
IDENTITY_VENDOR_OKTA_API_USERS[("Okta Users")]
IDENTITY_VENDOR_OKTA_API_ENDPOINT[("Okta API<br />https://gitlab.okta.com/api/v1")]
WORKDAY_WORKER -- "SCIM Provisioning<br />Every Hour" --> OKTA_PROFILE_MAPPING
OKTA_PROFILE_MAPPING --> IDENTITY_VENDOR_OKTA_API_USERS
IDENTITY_VENDOR_OKTA_API_USERS --> IDENTITY_VENDOR_OKTA_API_ENDPOINT
end
end

subgraph Identity Platform CI/CD Manifest Stage Scripts
direction LR
CI_USER_JOB[["Stage 1.1<br />Users Job<br/>CLI manifest:users"]]:::orange
CI_ROLE_JOB[["Stage 1.2<br />Roles Job<br />CLI manifest:roles"]]:::orange
CI_GROUP_JOB[["Stage 1.3<br />Org Units Job<br/>CLI manifest:ou"]]:::orange

CI_USER_PARSE_API[(Get All Users<br/>from Okta API)]
CI_USER_TRANSFORM{{Transform users with<br/>snake_case attributes}}
CI_USER_MANIFEST_USERS{{Create manifest of users}}
CI_USER_MANIFEST_ATTRIBUTES{{Create manifest of unique<br />attributes and count of users}}
CI_USER_JOB --> CI_USER_PARSE_API
CI_USER_PARSE_API --> CI_USER_TRANSFORM
CI_USER_TRANSFORM --> CI_USER_MANIFEST_USERS
CI_USER_MANIFEST_USERS ----> CI_USER_MANIFEST_ATTRIBUTES

CI_ROLE_PARSE_POLICY[(Parse Users<br />Parse Attributes<br />Parse Policies<br />Parse Policy Rules)]
CI_ROLE_VALIDATE_KEYS{{Validate attribute keys exist<br />for each policy rule}}
CI_ROLE_GET_NAMED_USERS{{Get users<br />for each policy handle}}
CI_ROLE_GET_USERS_FOR_ATTRIBUTE{{Get users<br />for each Attribute Key}}
CI_ROLE_CREATE_MANIFEST{{Create manifest of users<br />with unique email addresses<br />for each role}}
CI_ROLE_JOB --> CI_ROLE_PARSE_POLICY
CI_ROLE_PARSE_POLICY --> CI_ROLE_VALIDATE_KEYS
CI_ROLE_VALIDATE_KEYS --> CI_ROLE_GET_NAMED_USERS
CI_ROLE_GET_NAMED_USERS --> CI_ROLE_GET_USERS_FOR_ATTRIBUTE
CI_ROLE_GET_USERS_FOR_ATTRIBUTE ---> CI_ROLE_CREATE_MANIFEST

CI_GROUP_PARSE_POLICY[(Parse Users<br />Parse Roles<br />Parse Attributes<br />Parse Policies<br />Parse Policy Rules)]
CI_GROUP_VALIDATE_KEYS{{Validate attribute keys<br /> and role keys exist<br />for each policy rule}}
CI_GROUP_GET_NAMED_USERS{{Get users<br />for each policy handle}}
CI_GROUP_GET_USERS_FOR_ROLE{{Get users<br />for each Role Key}}
CI_GROUP_GET_USERS_FOR_DIMENSION{{Get users<br />for each Attribute Key}}
CI_GROUP_CREATE_MANIFEST{{Create manifest<br />with unique email addresses<br />for each group}}
CI_GROUP_JOB --> CI_GROUP_PARSE_POLICY
CI_GROUP_PARSE_POLICY --> CI_GROUP_VALIDATE_KEYS
CI_GROUP_VALIDATE_KEYS --> CI_GROUP_GET_NAMED_USERS
CI_GROUP_GET_NAMED_USERS --> CI_GROUP_GET_USERS_FOR_ROLE
CI_GROUP_GET_USERS_FOR_ROLE --> CI_GROUP_GET_USERS_FOR_DIMENSION
CI_GROUP_GET_USERS_FOR_DIMENSION --> CI_GROUP_CREATE_MANIFEST
end

subgraph Identity GitLab Repositories
subgraph accessctl-policies Repo
direction LR
REPO_INV_POLICIES_ROLES[("policies/role/{kingdom}.yml")]:::sky
REPO_INV_POLICIES_OU[("policies/ou/{kingdom}.yml")]:::sky
end
end

subgraph Identity GitLab Repositories
subgraph accessctl-inventory Repo
direction TB
REPO_INV_MANIFESTS_USERS[("manifests/users/<br />users.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_ATTRIBUTES[("manifests/attributes/<br />{attribute}.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_ROLE[("manifests/roles/<br/>{role}.yml/json/csv")]:::emerald
REPO_INV_MANIFESTS_OU[("manifests/ou/<br />{ou}.yml/json/csv")]:::emerald
end
end

CI_USER_MANIFEST_USERS --> REPO_INV_MANIFESTS_USERS
CI_USER_MANIFEST_ATTRIBUTES --> REPO_INV_MANIFESTS_ATTRIBUTES

IDENTITY_VENDOR_OKTA_API_ENDPOINT --> CI_USER_JOB
REPO_INV_POLICIES_ROLES --> CI_ROLE_JOB
REPO_INV_POLICIES_OU --> CI_GROUP_JOB
CI_ROLE_CREATE_MANIFEST --> REPO_INV_MANIFESTS_ROLE
CI_GROUP_CREATE_MANIFEST --> REPO_INV_MANIFESTS_GROUPS

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

## Policy and Manifest Breaking Changes

### Attribute Key No Longer Exists

When a policy is parsed prior to creating a manifest, the `manifests/attributes/{attribute}.yml` file is parsed to verify that the attribute key exists. This file includes the latest list of unique values from users in the Okta API.

This will detect if a `department`, `division`, `title`, etc no longer exists (ex. has been renamed upstream).

If a policy uses an attribute key value that no longer exists, no updated manifest will be created so the current (previous) state will be retained. This freezes the current manifest until the policy is updated by Identity Operations and the policy `CODEOWNERS`.

See the [updating keys in policies](#updating-keys-in-policies) documentation to learn how this process has been partially automated.

### Manager No Longer Exists

Similar to an [attribute key that no longer exists](#attribute-key-no-longer-exists), every `manager` value is verified against the latest manifest of users. This will ensure that the user has not been offboarded and email handle hasn't changed (ex. maiden name change).

If the manager user no longer exists based on the `manager` handle defined in the policy, no updated manifest will be created so the current (previous) state will be retained. This freezes the current manifest until the policy is updated by Identity Operations and the policy `CODEOWNERS`.

See the [updating keys in policies](#updating-keys-in-policies) documentation to learn how this process has been partially automated.

### Updating Keys in Policies

If a key in a policy cannot be found, a branch and merge request is automatically created by `accessctl` and the `CODEOWNERS` and Identity Operations team members are assigned to make edits.

A comment is posted automatically to the merge request with the list of the previous manifest users and their latest updated values for the key of the value that does not exist anymore. This automates the research work to determine what the new values appear to be upstream that can be verified or adjusted by `CODEOWNERS`.

The policy manifest remains frozen until the changes are made. After the branch is merged, an updated manifest will be created on the next pipeline run which automatically heals the problem.
