---
title: "Infrastructure Labels and Tags"
description: "This handbook section defines the latest iteration of infrastructure standards for AWS and GCP across all departments and groups at GitLab."
---

## Quick Reference

We use the `gl_` prefix for all labels and tags. All keys use underscores (`snake_case`). All values should use hyphens (`alpha-dash` for slug'd values), however underscores are allowed.

In labels and tags for specific realms should be prefixed with the realm prefix. You can learn more about the realm variables in the respective realm's documentation.

### Global Labels/Tags

| Slug/Label/Tag/Key       | Usage                                | Human Name              | Documentation                                                                       |
| ------------------------ | ------------------------------------ | ----------------------- | ----------------------------------------------------------------------------------- |
| `gl_realm`               | Required                             | Environment Realm       | [Usage Documentation](#environment-realm-gl_realm)                                  |
| `gl_env_type`            | Required                             | Environment Type        | [Usage Documentation](#environment-type-gl_env_type)                                |
| `gl_env_name`            | Required                             | Environment Name        | [Usage Documentation](#environment-name-gl_env_name)                                |
| `gl_env_id`              | Optional                             | Environment ID          | [Usage Documentation](#automated-infrastructure-environment-id-gl_env_id)           |
| `gl_env_continent`       | Optional                             | Environment Continent   | [Usage Documentation](#geographic-continent-region-of-environment-gl_env_continent) |
| `gl_owner_email_handle`  | Required                             | Owner Email Handle      | [Usage Documentation](#owner-email-handle-gl_owner_email_handle)                    |
| `gl_owner_timezone`      | Optional                             | Owner Timezone          | [Usage Documentation](#owner-timezone-gl_owner_timezone)                            |
| `gl_entity`              | Optional                             | GitLab Entity           | [Usage Documentation](#gitlab-entity-gl_entity)                                     |
| `gl_dept`                | Required                             | GitLab Department       | [Usage Documentation](#gitlab-department-gl_dept)                                   |
| `gl_dept_group`          | Required                             | GitLab Department Group | [Usage Documentation](#gitlab-department-group-gl_dept_group)                       |
| `gl_product_stage`       | Optional                             | GitLab Product Stage    | [Usage Documentation](#gitlab-product-stage-gl_product_stage)                       |
| `gl_product_category`    | Required                             | GitLab Product Category | [Usage Documentation](#gitlab-product-category-gl_product_category)                       |
| `gl_resource_type`       | Optional                             | Cloud Resource Type     | [Usage Documentation](#resource-type-gl_resource_type)                              |
| `gl_resource_group`      | Optional                             | Cloud Resource Group    | [Usage Documentation](#resource-name-gl_resource_group)                             |
| `gl_resource_name`       | Optional                             | Cloud Resource Name     | [Usage Documentation](#resource-name-gl_resource_name)                              |
| `gl_resource_host`       | Optional                             | Cloud Resource Host     | [Usage Documentation](#resource-host-gl_resource_host)                              |
| `gl_data_classification` | Optional (Required for data storage) | Data classification     | [Usage Documentation](#data-classification-gl_data_classification)                  |

### Realm Labels/Tags

Please see the realm label and tag handbook pages for labels and tags specific to the realm.

- [infra-shared-services](/handbook/company/infrastructure-standards/realms/infra-shared-services/labels-tags)
- [it](/handbook/company/infrastructure-standards/realms/it/labels-tags)
- [saas](/handbook/company/infrastructure-standards/realms/saas/labels-tags)
- [sandbox](/handbook/company/infrastructure-standards/realms/sandbox/labels-tags)
- [security](/handbook/company/infrastructure-standards/realms/security/labels-tags)

### Design Decisions and Change Log

Here is a summary of changes made during the design of these standards based on team feedback that should be preserved for historical reference.

- Based on feedback in the issue, we have revamped the list of departments and groups based on functional teams rather than people manager reporting structure.
- The GitLab Division has been deprecated since it is prefixed on the `gl_department`.
- We have renamed `gl_department` to `gl_dept` to allow it to be shorter as a prefix for `gl_dept_group`.
- We have renamed `gl_team` to `gl_dept_group` based on feedback about the ambiguity of `team` and the remapping that we did in the spreadsheet that most departments have groups/teams but none have sub-groups other than engineering which has the sub-department/stage (Ex. `Dev` - `Plan`) organizational hierarchy. The engineering sub-department is not used in our label/tag structure.
- We have added `gl_product_stage`. Earlier iterations used `gl_stage` however the term `stage` is ambiguous so we identify it as the product stage.
- We have abbreviated all values to allow for easier prefixing using industry recognizable abbreviations. We use full words where an abbreviation is not universally recognizable. For OKTA integration, we remap values from Workday to their short names that we use for infrastructure.
- We removed `gl_owner_username` since GitLab.com usernames can have characters not allowed cloud provider labels and tags.
- We renamed `gl_owner_email` to `gl_owner_email_handle` to provide clarity of the value that is expected.
- We have removed `gl_owner_slack_id` since we won't perform any action from a cloud resource and will use owner lookup in separate tools using `gl_owner_email_handle`.
- We added the `allocate` value to `gl_entity` for legacy parity with how we allocate global costs based on percentage of revenue for each entity.
- We added the `gl_resource_type` and `gl_resource_name` fields since GCP doesn't support easy reporting based on type of resource or name unless you use labels.
- We added `gl_resource_host` to help show aggregate costs of a parent resource for all resources (ex. disk, network, etc.)
- We added `gl_resource_group` to allow for infrastructure-as-code tools (ex. Ansible) to deploy resources to multiple instances of the same type and configuration.
- On 2021-07-22, we performed an audit and updated the `gl_dept`, `gl_dept_group`, and `gl_product_stage` tables with the latest values. A new table was added below `gl_dept_group` expected values with the list of renamed or removed department groups.
- The `sales-cs` realm was consolidated into the `business-tech` realm since the Demo Systems infrastructure is now managed by Business Technology.
- The `infra-shared-services` realm was added for top-level infrastructure management.
- We now allow short-term and long-term [working groups](/handbook/company/working-groups/) to use the `gl_dept_group` label with the prefix of `wg-` and an easily understood name of their choice (no codenames).

## Environment Realm (`gl_realm`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_realm: `eng-dev`
```

This is for the top-level identification of what type of resources reside here, and which infrastructure team has authoritative ownership of it.

Any custom labels or tags that are created should use the respective realm slug as the prefix for the label/tag key (Ex. `gl_sandbox_keyname`).

### Shared Services

<table>
    <thead>
        <tr>
            <th style="width: 25%;">Value</th>
            <th style="width: 25%;">Human Friendy Name</th>
            <th style="width: 40%;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>infra-shared-services</code></td>
            <td>
                <a href="/handbook/infrastructure-standards/realms/infra-shared-services">Infrastructure Shared Services</a>
            </td>
            <td>
                This is for top-level infrastructure and shared services managed by the Infrastructure Realm Owners in Business Technology, Engineering Infrastructure, and Infrastructure Security teams.
            </td>
        </tr>
        <tr>
            <td><code>saas</code></td>
            <td>
                <a href="/handbook/infrastructure-standards/realms/saas">GitLab SaaS</a>
            </td>
            <td>
                This is for GitLab.com SaaS that is managed by Engineering Infrastructure and Site Reliability Engineers.
            </td>
        </tr>
        <tr>
            <td><code>sandbox</code></td>
            <td>
                <a href="/handbook/infrastructure-standards/realms/sandbox">Compute Sandbox Cloud</a>
            </td>
            <td>
                This is for sandbox and ephemeral testing resources that provides an account/project for each user that are self-administered by each team member.
            </td>
        </tr>
    </tbody>
</table>

- The `gitter` realm was removed on 2021-07-22.

### Department Realms

<table>
    <thead>
        <tr>
            <th style="width: 25%;">Value</th>
            <th style="width: 25%;">Human Friendy Name</th>
            <th style="width: 50%;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>eng-infra</code></td>
            <td>
                <a href="/handbook/infrastructure-standards/realms/eng-infra">Engineering Infrastructure</a>
            </td>
            <td>
                This is for additional services managed by Engineering Infrastructure and Site Reliability Engineers that may not be specific to GitLab.com SaaS (Ex. tools, release and package management services, etc).
            </td>
        </tr>
    </tbody>
</table>

- The `sales-cs` realm was migrated to the `business-tech` realm on 2021-07-22.

## Environment Type (`gl_env_type`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_env_type: 'experiment'
```

### Expected values

| Value         | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| `experiment`  | (default) This is for individual user experiments are not impacted if powered off by infrastructure or security team, or data lost due to systems change. |
| `test`        | This is for experiments that affect multiple users (ex. customer proof-of-concept or load testing) and would have disruptive impact if powered off. |
| `stg`         | This is for a staging environment for tools/etc that would have major impact if powered off. These are for environments that are known to infra/security teams. The infra team has standardized on the use of `stg` instead of `stag` or `stage`, so we've universally adopted that here. |
| `prd`         | This is for a production or production-like environment for tools/etc that would have major impact if powered off. These are for environments that are known to infra/security teams. The infra team has standardized on the use of `prd` instead of `prod`, so we've universally adopted that here. |
| `other`       | As a last resort, you can use the other category. These are subject to periodic review. |

> New values can be added to this list and used without any other changes needed. This list was created for this label/tag and is not inherited from another source.

## Environment Name (`gl_env_name`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_env_name: 'learning-kubernetes'
```

The environment name is a short name or description of the purpose of the environment or service. This is a sub-descriptor of `gl_realm` and `gl_env_type`. The standards and use of this label/tag vary based on the `gl_realm` that it is used in, and each team can use it however it makes sense to them.

### Realm Usage Guidelines

| Realm              | Usage Guidelines or Standards                                                              |
|--------------------|--------------------------------------------------------------------------------------------|
| `infra-shared-services` | (Placeholder for future use)   |
| `saas`             | (Placeholder for future use)   |
| `business-tech`    | (Placeholder for future use)   |
| `eng-dev`          | (Placeholder for future use)   |
| `eng-infra`        | (Placeholder for future use, this is currently called `pet_name`)                          |
| `eng-security`     | (Placeholder for future use)   |
| `eng-support`      | (Placeholder for future use)   |
| `sandbox`          | Descriptive name of the purpose (Ex. `learning-kubernetes`, `tanuki-industries-iac-demo`)  |

## Automated Infrastructure Environment ID (`gl_env_id`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_env_id: 'a1b2c3d4'
```

The environment ID allows various inputs, but in general is a short UUID, long UUID, SHA or other alphanumeric identifier that is systematically generated. The use of this label/tag will vary based on the `gl_realm` that it is used in, and each team can use it however it makes sense to them.

### Realm Usage Guidelines

| Realm              | Usage Guidelines or Standards  |
|--------------------|--------------------------------|
| `infra-shared-services` | (Placeholder for future use)   |
| `saas`             | (Placeholder for future use)   |
| `business-tech`    | (Placeholder for future use)   |
| `eng-dev`          | (Placeholder for future use)   |
| `eng-infra`        | (Placeholder for future use)   |
| `eng-security`     | (Placeholder for future use)   |
| `eng-support`      | (Placeholder for future use)   |
| `sandbox`          | For AWS accounts and GCP projects, this is the short UUID of the corresponding database record in the Sandbox Cloud portal that handled account provisioning. For Terraform-managed environments, this is the commit ID or SHA of the Terraform configuration (implementation varies).  |

## Geographic Continent (Region) of Environment (`gl_env_continent`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_env_continent: 'america'
```

> We use `continent` to avoid confusion with `region` since that is an ambiguous word.

This is the continent where this environment's resources are consumed by users. This may not necessarily be where it is deployed or where the environment owner resides. This allows us to understand impact to users if infrastructure maintenance is needed or security incidents occur. This can also be used as meta data for global resources with autoscaling resources in specific continents/regions, however the `gl_entity` label/tag is needed for explicit cost allocation.

The abbreviation used by the business can change over time (Ex. `APJ`, `APAC`, `Asia Pacific`), and the cloud providers use different nomenclature, so we are standardizing using full names based on the prefix of programmatic timezones (Ex. `America/Los_Angeles` is `america`). For non-regional services, you can use the `global` value.

### Expected Values

| Value         | Business Acronyms     | Cloud provider regions                                                   |
|---------------|-----------------------|--------------------------------------------------------------------------|
| `global`      |                       | (default) For global resources or any non-region specific services.      |
| `america`     | `AMER`, `US`, `NORAM` | AWS `us-*`/`ca-*`/`sa-*`, GCP `us-*`/`southamerica-*`/`northamerica-*`   |
| `europe`      | `EMEA`, `METNA`       | AWS `eu-*`/`me-*`, GCP `europe-*`                                        |
| `africa`      |                       | AWS `af-*`                                                               |
| `asia`        | `APAC`, `APJ`         | AWS `ap-*`/`cn-*`, GCP `asia-*`                                          |
| `australia`   | `APAC`, `APJ`         | AWS `ap-*`, GCP `australia-*`                                            |

> Some possible prefix values have been omitted from this list for brevity and unlikely applicability (Ex. `brazil`, `hongkong`, `indian`, etc.). They can be added at environment owner's discretion.

## Owner Email Handle (`gl_owner_email_handle`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_owner_email_handle: 'jmartin'
```

The email handle before `@gitlab.com`. We only use the handle since labels and tags do not support `@` and `.` symbols. Values can be individual users or Google Workspace group aliases. For people handles, this should be `{firstinitial}{lastname}` and not any username aliases (Ex. `jeff`) since user aliases cannot be looked up programatically with our current architecture.

This is used for association with OKTA account, infrastructure notifications, and identifying the user's account with additional meta data. Users may receive emails with security advisory notifications.

## Owner Timezone (`gl_owner_timezone`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_owner_timezone: 'america-los_angeles'
```

This is the timezone of the environment owner that is used for determining working hours. We assume that working hours are between 6am (06:00) and 6pm (18:00). This is usually only used when there is only one or two people who own a system. For systems with global coverage, you should not use this label/tag.

This is the based on the programmatic timezone ID that usually follows the format `Continent/Locality`. You can see the full list of examples in the [GCP documentation](https://cloud.google.com/dataprep/docs/html/Supported-Time-Zone-Values_66194188).

Due to limitations with the allowed characters in labels, the `/` is not allowed and we use lowercase labels. Therefore, we replace the slash `/` with a hyphen `-` and use lowercase letters exclusively. This is the same reason that we chose not use UTC values since cannot use `+` symbols.

### Example Values

- `america-los_angeles`
- `america-denver`
- `america-chicago`
- `america-new_york`
- `asia-singapore`
- `asia-tokyo`
- `australia-sydney`
- `africa-johannesburg`
- `europe-amsterdam`
- `europe-berlin`
- `europe-london`
- `europe-paris`
- `europe-vienna`

> These are examples and not an exhaustive list. As part of our inclusive values, please know that all timezones are valued equally and this was created based on some of the localities on the team map with the largest number of team members per capita.

## GitLab Entity (`gl_entity`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_entity: 'allocate'
```

This allows us to allocate costs to the respective business entity in financial reports. If not set, we will assume `allocate`.

### Expected Values

| Value         | Description                                      |
|---------------|--------------------------------------------------|
| `allocate`    | (global default) Allocate based on % of revenue  |
| `inc`         | GitLab Inc, United States of America             |
| `ltd`         | GitLab Ltd, United Kingdom                       |
| `bv`          | GitLab BV, the Netherlands                       |
| `gmbh`        | GitLab GmbH, Germany                             |
| `pty`         | GitLab PTY Ltd, Australia                        |
| `canada`      | (future use) GitLab Canada Corp., Canada         |
| `gk`          | (future use) GitLab GK, Japan                    |

See the [GitLab Mailing addresses](https://about.gitlab.com/company/visiting/) for details about each entity.

### Realm Usage Guidelines

| Realm              | Usage Guidelines or Standards  |
|--------------------|--------------------------------|
| `infra-shared-services` | (Placeholder for future use)   |
| `saas`             | (Placeholder for future use)   |
| `business-tech`    | (Placeholder for future use)   |
| `eng-dev`          | (Placeholder for future use)   |
| `eng-infra`        | (Placeholder for future use)   |
| `eng-security`     | (Placeholder for future use)   |
| `eng-support`      | (Placeholder for future use)   |
| `sandbox`          | The GitLab entity that the team member is associated with in Workday. |

### Workday Mapping

During testing of OKTA integration, this field is populating additional values we did not expect (ex. `safeguard-italy`, `federal`). This is documented in [www-data/data/entity_mapper.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/entity_mapper.yml) and we will map the respective entities to our cost center entities listed.

## GitLab Department (`gl_dept`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_dept: eng-dev
```

We have abbreviated all values to allow for easier prefixing using industry recognizable abbreviations. We use full words where an abbreviation is not universally recognizable. For OKTA integration, we use YAML data file to remap values from Workday to their short names that we use for infrastructure. You can see a quick reference in the table below.

### Expected Values

| Division    | Department             | gl_dept (Slug/Label/Tag)   |
|-------------|------------------------|----------------------------|
| Engineering | Customer Support       | `eng-support`              |
| Engineering | Development            | `eng-dev`                  |
| Engineering | Infrastructure         | `eng-infra`                |
| Engineering | Quality                | `eng-quality`              |
| Engineering | Security               | `eng-security`             |
| Engineering | UX                     | `eng-ux`                   |
| GA          | Accounting             | `ga-accounting`            |
| GA          | Business Technology    | `ga-business-tech`          |
| GA          | CEO                    | `ga-ceo`                   |
| GA          | Finance                | `ga-finance`               |
| GA          | Legal                  | `ga-legal`                 |
| GA          | People Success         | `ga-people`                |
| GA          | Talent Acquisition     | `ga-talent-acquisition`    |
| Marketing   | Awareness              | `mktg-awareness`           |
| Marketing   | Brand & Digital Design | `mktg-brand-design`        |
| Marketing   | Campaigns              | `mktg-campaigns`           |
| Marketing   | Communications         | `mktg-communications`      |
| Marketing   | Developer Relations    | `mktg-community`           |
| Marketing   | Content Marketing      | `mktg-content`             |
| Marketing   | Digital Marketing      | `mktg-digital`             |
| Marketing   | Field Marketing        | `mktg-field`               |
| Marketing   | Inbound Marketing      | `mktg-inbound`             |
| Marketing   | Marketing Ops          | `mktg-ops`                 |
| Marketing   | Owned Events           | `mktg-events`              |
| Marketing   | Partner Marketing      | `mktg-partner`             |
| Marketing   | Product Marketing      | `mktg-product`             |
| Marketing   | Sales Development      | `mktg-sales-dev`           |
| Marketing   | Strategic Marketing    | `mktg-strategic`           |
| Product     | Product Management     | `product-mgmt`             |
| Sales       | Business Development   | `sales-alliances`          |
| Sales       | Channel                | `sales-channel`            |
| Sales       | Commercial Sales       | `sales-commercial`         |
| Sales       | Customer Success       | `sales-cs`                 |
| Sales       | Enterprise Sales       | `sales-ent`                |
| Sales       | Field Operations       | `sales-field-ops`          |
| Sales       | Practice Management    | `sales-practice-mgmt`      |

## GitLab Product Stage (`gl_product_stage`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_product_stage: eng-dev-manage
```

Since the `eng-dev` department has many groups, we use the [Product sections, stages, groups and categories](/handbook/product/categories/#devops-stages) handbook page to define a parent group using the product stage. During the design discussion, we iterated with using product categories and sub-departments, and the stage made the most sense.

For GitLab SaaS and infrastructure cost allocation or attribution, the Engineering Infrastructure department team members can use the `gl_product_stage` label to attach to resources that should be attributed to a specific stage. You can optionally use the `gl_dept_group` if you need more granular attribution.

### Expected Values

| Value | Product Category Documentation |
|------------------------|--------------------------------------------------------------------------------------------------|
| `eng-dev-manage`       | [Manage Stage](/handbook/product/categories/#manage-stage)               |
| `eng-dev-plan`         | [Plan Stage](/handbook/product/categories/#plan-stage)                   |
| `eng-dev-create`       | [Create Stage](/handbook/product/categories/#create-stage)               |
| `eng-dev-ecosystem`    | [Ecosystem Stage](/handbook/product/categories/#ecosystem-stage)         |
| `eng-dev-verify`       | [Verify Stage](/handbook/product/categories/#verify-stage)               |
| `eng-dev-package`      | [Package Stage](/handbook/product/categories/#package-stage)             |
| `eng-dev-deploy`       | [Deploy Stage](/handbook/product/categories/#deploy-stage)               |
| `eng-dev-monitor`      | [Monitor Stage](/handbook/product/categories/#monitor-stage)             |
| `eng-dev-secure`       | [Secure Stage](/handbook/product/categories/#sec-section)               |
| `eng-dev-govern`       | [Software Supply Chain Security Stage](/handbook/product/categories/#software-supply-chain-security-stage) |
| `eng-dev-growth`       | [Growth Stage](/handbook/product/categories/#growth-stage)               |
| `eng-dev-fulfillment`  | [Fulfillment Stage](/handbook/product/categories/#fulfillment-stage)     |
| `eng-dev-enablement`   | [Enablement Stage](/handbook/product/categories/#enablement-stage)       |
| `eng-dev-modelops`     | [ModelOps Stage](/handbook/product/categories/#modelops-stage)           |
| `eng-dev-mobile`       | [Mobile Stage](/handbook/product/categories/#mobile-stage)               |
| `eng-dev-deploy`       | [Deploy Stage](/handbook/product/categories/#deploy-stage)               |

## GitLab Product Category (`gl_product_category`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_product_category: gitaly
```

### Expected Values

Product categories should match one of the categories defined in [`categories.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/categories.yml) in the handbook: <https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/categories.yml>

By providing this value, costs can be directly mapped back to a specific set of features, as well as a set of owners within both Product and Engineering.

## GitLab Department Group (`gl_dept_group`)

{{% alert color="success" %}}
This label/tag is required.
{{% /alert %}}

```terraform
gl_dept_group: eng-support-americas
```

For Engineering Development (`eng-dev`) department groups, the product stage slug (`gl_product_stage`) is used as the prefix for the `gl_dept_group` value. For all other departments, the `gl_dept` slug is used as the prefix.

All departments or stages have a default `shared-infra` label/tag/AWS account/GCP project that can be used when a separately distinguished/functional group is not needed. For groups with heavy infrastructure usage, we use the group name as a suffix and provide an isolated AWS account/GCP project for group team members to use.

For the groups that provide a shared service to other departments at GitLab, we also have a `shared-services` group value that can be used for shared cost attributions. We use `shared-infra` for our own team's resources and `shared-services` for everyone else's resources that we manage.

You can get an editable version of this table in the [spreadsheet](https://docs.google.com/spreadsheets/d/1adgn5CLB4DdhpoG3TnFsOmeSYg8n8Bvl_g7GFPEl8vs/edit#gid=26160192) that we used to design this schema, however recent changes may not be reflected and this handbook page is the SSOT.

### Expected Values

{{% alert color="warning" %}}
If a group listed below does not have a group documentation link, it is safe to assume that a AWS account or GCP project has not been created for that group yet. Please follow the instructions for provisioning the group (TODO).
{{% /alert %}}

<!-- To add group documentation, please add a link to a new page [Group Documentation](/handbook/company/infrastructure-standards/realms/{realm_name}/groups/{gl_dept_group}) -->

The full list of groups was last audited and updated on 2021-07-22.

**Footnotes:**

1. If a group was renamed or removed, it appears in the [Deprecated Group Names](#deprecated-group-names) table below. Any renamed groups have a footnote indicator.
1. This was added after the initial list was created.
1. This is a special group that may not directly align with a team. For `eng-dev`, this usually appears under [Other Functionality](/handbook/product/categories/#other-functionality).

| gl_realm        | gl_dept                  | gl_product_stage                  | gl_dept_group                        | Group Documentation |
|-----------------|--------------------------|-----------------------------------|--------------------------------------|---------------------|
| infra-shared-services | wg-infra-shared-services |                             | wg-infra-shared-services [^2]        | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-access                | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-import                | |
| eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-optimize [^1]         | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-shared-infra            | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-project-mgmt            | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-product-planning [^1]   | |
| eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-certify                 | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-source-code [^3]           | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-code-review [^2] [^3]     | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-editor                | |
| eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-gitaly                | |
| eng-dev         | eng-dev                  | eng-dev-ecosystem                 | eng-dev-ecosystem-integrations       | |
| eng-dev         | eng-dev                  | eng-dev-ecosystem                 | eng-dev-ecosystem-foundations        | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-ci [^3]               | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-pipeline-authoring [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-pipeline-execution [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-runner                | |
| eng-dev         | eng-dev                  | eng-dev-verify                    | eng-dev-verify-testing               | |
| eng-dev         | eng-dev                  | eng-dev-package                   | eng-dev-package-shared-infra         | |
| eng-dev         | eng-dev                  | eng-dev-package                   | eng-dev-package-package              | |
| eng-dev         | eng-dev                  | eng-dev-deploy                    | eng-dev-deploy-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-deploy                    | eng-dev-deploy-environments          | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-shared-infra         | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-monitor [^1] [^2]    | |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-apm [^3]             |  |
| eng-dev         | eng-dev                  | eng-dev-monitor                   | eng-dev-monitor-health [^3]          |  |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-static-analysis       | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-dynamic-analysis      | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-composition-analysis  | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-fuzz-testing          | |
| eng-dev         | eng-dev                  | eng-dev-secure                    | eng-dev-secure-research              | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-security-policies     | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-threat-insights       | |
| eng-dev         | eng-dev                  | eng-dev-govern                    | eng-dev-govern-compliance            | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-shared-infra [^2]   | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-applied-ml [^2]     | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-ml-ops [^2]         | |
| eng-dev         | eng-dev                  | eng-dev-modelops                  | eng-dev-modelops-data-ops [^2]       | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-shared-infra          | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-activation [^1] [^2]      | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-adoption [^1] [^2]            | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-conversion            | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-expansion             | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-retention             | |
| eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-product-intelligence [^1] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-shared-infra [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-shared-services [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-purchase [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-license [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-fulfillment               | eng-dev-fulfillment-utilization [^1] [^2] | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-shared-infra      | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-distribution      | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-geo               | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-search            | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-sharding [^2]     | |
| eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-database          | |
| eng-dev         | eng-dev                  | eng-dev-mobile (S.E.G.)           | eng-dev-mobile-devops-apps [^2]      | |
| eng-dev         | eng-dev                  | eng-dev-deploy (S.E.G.)           | eng-dev-deploy-five-min-app [^2]     | |
| eng-infra       | eng-infra                |                                   | eng-infra-shared-infra              | |
| eng-infra       | eng-infra                |                                   | eng-infra-shared-services            | |
| eng-infra       | eng-infra                |                                   | eng-infra-analytics                  | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-shared-infra [^2]  | |
| eng-infra       | eng-infra                | eng-infra-delivery                | eng-infra-automation [^2]            | |
| eng-infra       | eng-infra                | eng-infra-scalability             | eng-infra-scalability                | |
| eng-infra       | eng-infra                |                                   | eng-infra-deliverability             | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-database [^2]      | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-foundations [^2]   | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-general [^2]       | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-observability [^2] | |
| eng-infra       | eng-infra                | eng-infra-reliability             | eng-infra-reliability-practices [^2]     | |
| eng-infra       | eng-infra                | eng-infra-enablement              | eng-infra-cloud-connector            | |
| eng-dev         | eng-quality              |                                   | eng-quality-shared-infra             | |
| eng-dev         | eng-quality              |                                   | eng-quality-env-toolkit [^2]         | |
| eng-dev         | eng-quality              |                                   | eng-quality-ops-ci-cd                | |
| eng-dev         | eng-quality              |                                   | eng-quality-secure-enablement        | |
| eng-dev         | eng-quality              |                                   | eng-quality-productivity             | |
| eng-dev         | eng-quality              |                                   | eng-quality-growth-govern            | |
| eng-security    | eng-security             |                                   | eng-security-shared-infra            | |
| eng-security    | eng-security             |                                   | eng-security-shared-services         | |
| eng-security    | eng-security             |                                   | eng-security-ops-infra               | |
| eng-security    | eng-security             |                                   | eng-security-ops-red                 | |
| eng-security    | eng-security             |                                   | eng-security-ops-incident-response   | |
| eng-security    | eng-security             |                                   | eng-security-ops-trust-safety        | |
| eng-security    | eng-security             |                                   | eng-security-risk-compliance         | |
| eng-security    | eng-security             |                                   | eng-security-eng-app-sec             | |
| eng-security    | eng-security             |                                   | eng-security-eng-automation          | |
| eng-security    | eng-security             |                                   | eng-security-eng-research            | |
| eng-security    | eng-security             |                                   | eng-security-eng-vuln-mgmt           | |
| eng-security    | eng-security             |                                   | eng-security-logging                 | |
| eng-support     | eng-support              |                                   | eng-support-shared-infra             | |
| eng-support     | eng-support              |                                   | eng-support-saas                     | |
| eng-support     | eng-support              |                                   | eng-support-self-managed             | |
| eng-support     | eng-support              |                                   | eng-support-americas                 | |
| eng-support     | eng-support              |                                   | eng-support-emea                     | |
| eng-support     | eng-support              |                                   | eng-support-apac                     | |
| eng-dev         | eng-ux                   |                                   | eng-ux-shared-infra                  | |
| eng-dev         | eng-ux                   |                                   | eng-ux-technical-writing             | |
| eng-dev         | eng-ux                   |                                   | eng-ux-research                      | |
| business-tech    | ga-accounting           |                                   | ga-accounting-shared-infra           | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-shared-infra        | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-shared-services     | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-engineering [^2]    | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-integrations [^2]   | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-operations          | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-data                | |
| business-tech    | ga-business-tech        |                                   | ga-business-tech-procurement [^2]    | |
| business-tech    | ga-ceo                   |                                   | ga-ceo-shared-infra                  | |
| business-tech    | ga-finance               |                                   | ga-finance-shared-infra              | |
| business-tech    | ga-legal                 |                                   | ga-legal-shared-infra                | |
| business-tech    | ga-people                |                                   | ga-people-shared-infra               | |
| business-tech    | ga-recruiting            |                                   | ga-recruiting-shared-infra           | |
| business-tech    | mktg-awareness           |                                   | mktg-awareness-shared-infra          | |
| business-tech    | mktg-brand-design        |                                   | mktg-brand-design-shared-infra       | |
| business-tech    | mktg-campaigns           |                                   | mktg-campaigns-shared-infra          | |
| business-tech    | mktg-communications      |                                   | mktg-communications-shared-infra     | |
| business-tech    | mktg-community           |                                   | mktg-community-shared-infra          | |
| business-tech    | mktg-content             |                                   | mktg-content-shared-infra            | |
| business-tech    | mktg-digital             |                                   | mktg-digital-shared-infra            | |
| business-tech    | mktg-field               |                                   | mktg-field-shared-infra              | |
| business-tech    | mktg-inbound             |                                   | mktg-inbound-shared-infra            | |
| business-tech    | mktg-ops                 |                                   | mktg-ops-shared-infra                | |
| business-tech    | mktg-events              |                                   | mktg-events-shared-infra             | |
| business-tech    | mktg-partner             |                                   | mktg-partner-shared-infra            | |
| business-tech    | mktg-product             |                                   | mktg-product-shared-infra [^2]       | |
| business-tech    | mktg-sales-dev           |                                   | mktg-sales-dev-shared-infra          | |
| business-tech    | mktg-strategic           |                                   | mktg-strategic-shared-infra          | |
| business-tech    | mktg-strategic           |                                   | mktg-strategic-technical-mktg        | |
| eng-dev          | product-mgmt             |                                   | product-mgmt-shared-infra            | |
| business-tech    | sales-alliances          |                                   | sales-alliances-shared-infra         | |
| business-tech [^1] | sales-channel          |                                   | sales-channel-shared-infra           | |
| business-tech      | sales-commercial       |                                   | sales-commercial-shared-infra        | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-shared-infra                | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-demo-cloud                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-training-cloud              | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-shared-infra             | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-us-west                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-us-east                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-pub-sec                  | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-mid-market               | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-emea                     | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-sa-apac                     | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-shared-infra            | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-us-west                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-us-east                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-pub-sec                 | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-emea                    | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-tam-apac                    | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-shared-infra             | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-consulting               | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-education                | |
| business-tech [^1] | sales-cs               |                                   | sales-cs-ps-pub-sec                  | |
| business-tech    | sales-ent                |                                   | sales-ent-shared-infra               | |
| business-tech    | sales-field-ops          |                                   | sales-field-ops-shared-infra         | |
| business-tech    | sales-practice-mgmt      |                                   | sales-practice-mgmt-shared-infra     | |

### Deprecated Group Names

The following group names have been renamed or removed and may still be in use with legacy infrastructure and are preserved here for reference purposes.

| Changelog Date  | gl_realm        | gl_dept                  | gl_product_stage                  | gl_dept_group                        | Replaced with                                 |
|-----------------|-----------------|--------------------------|-----------------------------------|--------------------------------------|-----------------------------------------------|
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-manage                    | eng-dev-manage-analytics             | eng-dev-manage-optimize                       |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-plan                      | eng-dev-plan-portfolio-mgmt          | eng-dev-plan-product-planning                 |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-create                    | eng-dev-create-gitter                | N/A                                           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-progressive-delivery | N/A                                           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-acquisition           | eng-dev-growth-activation, eng-dev-growth-adoption  |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-telemetry             | eng-dev-growth-product-intelligence           |
| 2021-07-22      | eng-dev         | eng-dev                  | eng-dev-growth                    | eng-dev-growth-fulfillment           | eng-dev-fulfillment-purchase, eng-dev-fulfillment-license, eng-dev-fulfillment-utilization |
| 2021-07-22      | business-tech   | ga-business-tech         |                                   | ga-business-tech-systems             | ga-business-tech-engineering, ga-business-tech-integrations |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-shared-infra         | eng-dev-deploy-shared-infra                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-release                   | eng-dev-release-release-mgmt         | eng-dev-deploy-environments                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-configure                 | eng-dev-configure-shared-infra       | eng-dev-deploy-shared-infra                   |
| 2023-03-14      | eng-dev         | eng-dev                  | eng-dev-configure                 | eng-dev-configure-configure          | eng-dev-deploy-environments                   |
| 2023-10-19      | eng-dev         | eng-dev                  | eng-dev-enablement                | eng-dev-enablement-memory            | eng-infra-cloud-connector |

## Resource Type (`gl_resource_type`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_resource_type: compute-instance
```

GCP doesn't support easy reporting based on type of resource and name unless you use labels. This is optional, but recommended for resources that cost a significant amount of money or are part of a production service. This is not recommended for sandbox and ephemeral use cases.

### Expected Values

| Value                  | Recommended Usage |
|------------------------|---------------------------------------------------------------------------|
| `compute-cluster`      | AWS EKS, GCP Kubernetes Engine (GKE) cluster                              |
| `compute-container`    | AWS ECS                                                                   |
| `compute-instance`     | AWS EC2 instance, GCP Compute Engine instance                             |
| `serverless`           | AWS Lambda, GCP AppEngine                                                 |
| `storage-disk`         | Persistent Storage Disks for instances                                    |
| `storage-snapshot`     | (Placeholder for discretionary usage, not easy to auto label/tag)         |
| `storage-bucket`       | AWS S3, GCP Google Cloud Storage (GCS)                                    |
| `network`              | AWS VPC, GCP Network/VPC                                                  |
| `network-lb`           | AWS ELB                                                                   |
| `network-nat`          | AWS NAT                                                                   |
| `network-firewall`     | Firewall rules                                                            |
| `network-ip`           | External IP addresses                                                     |
| `network-bandwidth`    | (Placeholder for discrentionary usage)                                    |
| `database`             | AWS RDS, AWS Aurora, GCP CloudSQL, etc.                                   |
| `queue`                | AWS ElastiCache, MQ, SQS, GCP CloudTasks, etc.                            |
| `logging`              | (Placeholder for discretionary usage)                                     |

## Resource Name (`gl_resource_group`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_resource_group: prod-app
```

This is optional for using with Terraform, Ansible, and other related infrastructure-as-code or related tools.

The value of this key should match the name of the group in your infrastructure-as-code group definitions (ex. Ansible role/group naming)

## Resource Name (`gl_resource_name`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_resource_name: prod-app-web1
```

The value of this key should match the name of the resource in the cloud console.

GCP doesn't support easy reporting based on type of resource and name unless you use labels. This is optional, but recommended for resources that cost a significant amount of money or are part of a production service. This is not recommended for sandbox and ephemeral use cases.

## Resource Host (`gl_resource_host`)

{{% alert color="info" %}}
This label/tag is optional.
{{% /alert %}}

```terraform
gl_resource_host: prod-app-web1
```

This is used for associating child resources (disks, snapshots, buckets, network IPs, etc) with the parent resource (ex. `compute-instance`) to show the aggregate costs of the resource.

The value of this key should match the name of the parent resource in the cloud console.

GCP doesn't support easy reporting based on type of resource and name unless you use labels. This is optional, but recommended for resources that cost a significant amount of money or are part of a production service. This is not recommended for sandbox and ephemeral use cases.

## Data Classification (`gl_data_classification`)

{{% alert color="info" %}}
This label/tag is required for resources that store data (databases, storage buckets, etc..).
{{% /alert %}}

```terraform
gl_data_classification: red
```

Values should match the documented [Data Classification Levels](/handbook/security/data-classification-standard/#data-classification-levels) with all lowercase value (for cloud provider tag and label consistency).

### Expected Values

| Value      |
|------------|
| `red`      |
| `orange`   |
| `yellow`   |
| `green`    |

## Accounting and Financial Reporting

In alignment with our [transparency value](/handbook/communication/confidentiality-levels/#not-public), financial information cannot be shared publicly. Team members can see the details of how labels and tags impact financial reporting in this [issue](https://gitlab.com/gitlab-com/compute-sandbox/issue-tracking/-/issues/3#impact-to-accounting-and-financial-reporting). The cost allocation methodology for production environments that in this [document](https://docs.google.com/document/d/1p4pzquEZjXRZfcdgSUQZ2Kw988o3sdknq5ZQVxtGAkw/edit?usp=sharing).

## Impact to Business Owners and Infrastructure Team

The largest impact of the label and tag schema is known owner and department identification for every resource provisioned in each cloud provider, and cross-reference to the Terraform configuration that can be referenced during infra/security review.

There are significant cost savings possible with the ability to set time limits on resources that solve the abandoned infrastructure problem. We can also save up to 65% of spending by implementing automation to power off infrastructure during non-working hours (overnight and weekends).

## Impact to Users and Managers

With the label and tags, we can easily report on infrastructure and help you understand what's running and help you self manage the costs of the resources that you provision.

Since most labels and tags will be automatically added with Terraform and automation, or at the account/project level for sandbox accounts, there is not a significant burden on users to remember to add labels/tags to resources.

With future automation, we can also create frictionless experience for users with notification of system vulnerabilities, security incidents, and friendly reminders in Slack about upcoming expiration of infrastructure since your email, GitLab username, and Slack ID are automatically associated.

## Footnotes

[^1]: This was renamed or removed after the initial list was created.
[^2]: This group was added after the initial list was created.
[^3]: This is a special group that may not directly align with a team. For `eng-dev`, this usually appears under [Other Functionality](/handbook/product/categories/#other-functionality).
