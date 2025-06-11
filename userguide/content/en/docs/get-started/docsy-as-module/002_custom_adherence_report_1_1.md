---
title: "Compliance Frameworks ADR 002: Custom Adherence Report"
toc_hide: true
---

## Context

We delivered [compliance standards adherence report MVC](../compliance_standards_adherence_dashboard_mvc.md). This was
well received by our customers, however, we received feedbacks around the possibility of customising the compliance
adherence dashboard. The existing compliance standards adherence report displays all the checks that are currently
supported and displays the compliance status of all the projects within that group. Currently, users cannot configure
this behaviour.

## Approach

To allow customising the compliance standards adherence report we plan to introduce the concept of compliance
requirements and compliance checks.

1. Compliance Requirement: A compliance framework can have multiple compliance requirements. These requirements can
have multiple checks associated to it. Requirement allows the users to club multiple checks together as per their need.
For example: A requirement could be "Code safeguards" and it can contain the "At least two approvers" and
"Prevent authors as approvers" checks.
1. Compliance Check: They belong to a compliance requirement and denotes one of the checks supported by GitLab product.

We thought of the following approaches to implement custom compliance adherence report

1. [Using YAML for storing compliance adherence configuration](#using-yaml-for-storing-compliance-adherence-configuration)
2. [Storing the compliance adherence configuration in database as JSON](#storing-the-compliance-adherence-configuration-in-database-as-json)
3. [Storing the compliance adherence configuration in database as relational data](#storing-the-compliance-adherence-configuration-in-database-as-relational-data) (selected approach)

### Using YAML for storing compliance adherence configuration

1. Similar to security policies, we planned on using YAML files for storing the compliance adherence report
configuration.
1. Users would create a file for each framework named `.compliance-standard@framework_name.yml`. These YAML files
would be stored in special projects within that group similar to
[security policies project](https://docs.gitlab.com/ee/user/application_security/policies/#security-policy-project)
which is used for storing security policies.
1. While creating compliance frameworks users would be able to set the reference of this standards YAML file to
associate the YAML with that compliance framework.
1. We would create a Standards Editor similar to [Policy Editor](https://docs.gitlab.com/ee/user/application_security/policies/#policy-editor)
easily allowing users to modify the configuration from the UI.
1. The YAML would be used for saving the requirements and checks configuration. An example YAML:

    ```yaml
    requirements:
    - name: Code safeguards enabled
      description: Ensure that code is guarded correctly.
      checks:
       - at_least_two_approvals
       - prevent_approval_by_merge_request_author
    - name: Authentication Control
      description: Ensure all users have multi-factor authentication and use organisations email.
      checks:
       - multi_factor_auth_enabled
       - organizations_email_domain
   ```

1. The checks would be a list of Enums that and denotes one of the checks supported by GitLab.
1. Once the configuration is saved and applied to a compliance framework, we would only display the results of the
selected checks for the projects with those compliance frameworks.
1. We would not display the compliance adherence status for projects that don't have a compliance framework applied.
1. This approach had certain advantages:
   1. Compliance configurations stored as code, easier to share and reuse it.
   1. This would also allow in the future for some kind of centralized registry in GitLab for these configurations.
   1. Standards YAML configured through merge requests helps in auditing and viewing historical changes easily.
1. This approach also had several disadvantages:
   1. It seems to be a bit complex to adopt for compliance users.
   1. Accessing the configuration via the repository might be a bit slower as compared to storing it in database.
   1. YAML structure needs to be designed properly to allow any future changes to the YAML schema easily.

### Storing the compliance adherence configuration in database as JSON

1. In this approach we planned to store the compliance adherence report configuration as a JSON column in the
compliance frameworks table.
1. We would create a UI for creating requirements within compliance frameworks and also adding checks to this
requirement.
1. We would translate this configuration into a JSON and store it in the `jsonb` column named `requirements` within
the compliance frameworks table.
1. An example JSON:

    ```json
    [{
      "name": "Code safeguards enabled",
      "description": "Ensure that code is guarded correctly",
      "checks": [
        "at_least_two_approvals",
        "prevent_approval_by_merge_request_author"
      ]
    },
    {
      "name": "Authentication Control",
      "description": "Ensure all users have multi-factor authentication and use organisations email",
      "checks": [
        "multi_factor_auth_enabled",
        "organizations_email_domain"
      ]
    }]
    ```

1. Similar to the previous approach, we would only display the results of checks for the projects that have compliance
frameworks applied with valid `requirements` configuration.
1. This approach had certain advantages:
   1. This gives a UI friendly approach.
   1. No need for setting up special projects and understand complex YAML configurations.
   1. No major database changes required.
1. This approach also had disadvantages:
   1. Fetching the requirements JSON from the database will not be an easy operation.
   1. Designing a scalable JSON schema validator that will also work easily for future iterations might be complex.
   1. Viewing historical changes to the configuration will not be easy. Users will have to track changes through
   historical audit event logs.
   1. Updating the existing JSON configurations will be difficult when compared to storing it as a non JSON column.

### Storing the compliance adherence configuration in database as relational data

1. In this approach we planned to store the configuration in new database tables to prevent issues with JSON columns.
1. The compliance requirements and checks would be stored in individual tables with the following schema:

    ```mermaid
        classDiagram
    class namespaces {
        id: bigint
        name: text
        path: text
        ...(more columns)
    }
    class projects {
        id: bigint,
        name: text
        path: text
        description: text
        ...(more columns)
    }
    class compliance_management_frameworks {
        id: bigint,
        name: text,
        description: text,
        ...(more columns)
    }

    class compliance_requirements {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        namespace_id: bigint
        framework_id: bigint
        name: text
        description: text
    }

    class compliance_checks {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        requirement_id: bigint
        namespace_id: bigint
        check_name: smallint
    }

    class project_compliance_standards_adherence {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        check_name: smallint
        status: smallint
    }

    compliance_requirements --> compliance_checks : has_many
    compliance_requirements <-- compliance_checks : belongs_to
    compliance_management_frameworks --> compliance_requirements : has_many
    compliance_management_frameworks <-- compliance_requirements : belongs_to
    compliance_management_frameworks <--> projects : many_to_many
    projects <-- namespaces : has_many
    projects --> namespaces : belongs_to
    namespaces --> compliance_management_frameworks : has_many
    namespaces <-- compliance_management_frameworks : belongs_to
    projects --> project_compliance_standards_adherence : has_many
    projects <-- project_compliance_standards_adherence : belongs_to
    ```

1. We have dropped the `standard` column from the `project_compliance_standards_adherence` since we don't want to
associate checks with a standard anymore, therefore, allowing the users to customise and group checks as per their
requirements.
1. Similar to the previous approaches, we would still be storing results for all the compliance adherence checks for
ultimate projects, irrespective of the frameworks applied to that project, however, we would only display the results
of checks for the projects that have compliance frameworks applied with requirements configured at the compliance
standards adherence dashboard. This means there is no need for a relationship between `compliance_checks` and
`project_compliance_standards_adherence` database tables.
1. In the next iteration we would also allow importing and exporting the compliance adherence report configurations.

## Decision

We went ahead with storing the compliance adherence configuration in database as relational data.
