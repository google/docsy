---
title: "ADR 003: Centralize Unit Primitives configuration"
toc_hide: true
---

## Context

### Problems with the current Unit Primitives configuration

#### Service abstraction

The service abstraction was introduced to simplify client permission checks and centralize permission logic. By organizing features around "services," clients could determine if a user had access to a specific interface (for example, opening the GitLab Duo Chat window) without needing to understand underlying unit primitives or configurations.

##### Solved problems

###### Permission checks for UI elements

- **Problem:** Clients needed to check if the user had access to a UI element, not just the underlying feature.
- **Solution:** The service abstraction allowed clients to perform permission checks based on services like `duo_chat` or `code_suggestions`, without needing to delve into unit primitives.

###### Shielding clients from internal changes

- **Problem:** Internal backend changes, such as splitting or deprecating unit primitives, could disrupt client functionality.
- **Solution:** The service abstraction hid these internal changes from clients, ensuring that such changes didn't affect the interface presented to them.

##### Current problems

Despite its initial benefits, the services abstraction now presents several challenges.

- **Mixed responsibilities:**
  - The current interface mixes UI-related end-user permission checks with CloudConnector's domain responsibilities (instance-level access control).
- **Configurable restrictions limited to service level:**
  - All configurable restrictions (such as cut-off dates, minimum GitLab versions, and how unit primitives are bundled with add-ons or licenses) are defined only at the service level, not at the unit primitive level.
    - This prevents granular control over feature availability and packaging.
    - This means that services containing the same unit primitive can be configured with different cut-off-dates or bundled add-ons.
    - **Example:** `documentation_search` is included in both the [`duo_chat`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L36) and [`anthropic_proxy`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L95) services but with different configurations.
- **Workarounds:**
  - Special handling is needed for specific use cases, adding complexity to the system.
    - **Example:** [`anthropic_proxy`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L104-120) and [`self_hosted_models`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L151-168) services.
- **Redundancy:**
  - Since most unit primitives map 1:1 to an interface element (like a button or API call), many service definitions only define a single unit primitive of the same name.
    - This creates redundancy and noise in the configuration files.
    - **Example:** [`summarize_comments`](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml?ref_type=tags#L176-182)

#### Configuration management challenges

Updating unit primitive configurations currently requires manual changes in multiple places:

- **GitLab rails**: Update the [config/access_data.yml](https://gitlab.com/gitlab-org/gitlab/-/blob/v17.5.0-ee/ee/config/cloud_connector/access_data.yml) configuration and permission checks.
- **CustomersDot**: Update the [config/cloud_connector.yml](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/config/cloud_connector.yml) configuration.
- **AI gateway and Duo workflows**: Modify unit primitive [mappings](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/ai_gateway/cloud_connector/gitlab_features.py#L94) and access control logic.

##### Current problems

- **No Single Source of Truth:**
  - Configurations are scattered across several repositories and services, leading to inconsistencies and making management difficult. Multiple merge requests across different repositories add complexity and friction.

## Decision

We will implement a new unit primitive-based configuration system by extracting it to an external library ([gitlab-cloud-connector](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector)) that will serve as the Single Source of Truth (SSoT). This library will be available as both a Ruby gem and a Python package.

### Configuration structure

```shell
config
├─ unit_primitives/
│  ├─ duo_chat.yml
│  └─ ...
├─ backend_services/
│  ├─ ai_gateway.yml
│  └─ ...
├─ add_ons/
│  ├─ duo_pro.yml
│  └─ ...
└─ license_types/
   ├─ premium.yml
   └─ ...
```

#### Unit primitives

We have a `.yml` file per unit primitive. It contains information on how this `unit_primitive` is bundled with add-ons and license types, and other useful metadata.

```yaml
# config/unit_primitives/duo_chat.yml
---
name: duo_chat
description: Ask various GitLab-related questions and tasks.
cut_off_date: 2024-10-17T00:00:00+00:00
min_gitlab_version_for_free_access: '16.8'
min_gitlab_version: '16.9'
group: group::duo_chat
feature_category: duo_chat
documentation_url: https://docs.gitlab.com/ee/user/gitlab_duo_chat/
backend_services:
    - ai_gateway
add_ons:
    - duo_pro
    - duo_enterprise
license_types: # List of license types that unit primitive is available for
  - premium
  - ultimate
```

For full list of supported attributes, please check [unit_primitive_schema.json](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector/-/blob/main/config/schemas/unit_primitive_schema.json).

#### Backend services

Represents the definition of backend service where the unit primitive is hosted. Contains useful metadata such as `project_url` or group responsible for the project. It also contains an `audience` header used when a JWT token is issued.

```yaml
# config/backend_services/ai_gateway.yml
---
name: ai_gateway
project_url: https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist
group: group::ai framework
jwt_aud: gitlab-ai-gateway
```

#### Add-ons and license types

Similarly defined in their respective YAML files, providing necessary metadata.

### Expected process for adding/modifying unit primitives

#### Making changes

- **Single update point:** Developers modify unit primitive definitions by editing the YAML files in the `gitlab-cloud-connector` repository.
  - **CLI tools:** Command-line tools for adding, updating, and removing unit primitives should be implemented to simplify this step and make it less error-prone.
  - **Example:** To add a new unit primitive `code_review`, create `config/unit_primitives/code_review.yml` with the necessary configuration.

#### Deployment process

- **Automated release pipeline:**
  - **Validation:** Changes are validated using JSON schema validation in CI/CD pipelines.
  - **Testing:** Automated tests ensure consistency and correctness.
  - **Publishing:** New versions of the Ruby gem and Python package are published to RubyGems and PyPI upon successful validation and testing.

- **Versioning:** The library follows semantic versioning. Downstream applications are updated to use the new version.

#### Updating downstream applications

- **GitLab Rails, CustomersDot, and others:**
  1. **Dependency update:** Bump the `gitlab-cloud-connector` gem version in the `Gemfile`.
  2. **Merge request:** Submit an MR to update the dependency and any necessary code changes.
  3. **Deployment:** Changes are deployed following the standard GitLab deployment process.

### How UI permissions will work

- **Centralized permission checks:**
  - Clients can check access to the most basic unit primitive to determine UI element availability. With the knowledge of the basic unit primitive, client still has the flexibility to check if the user has access to the UI element, without needing to understand all underlying unit primitives or configurations.
  - The actual permission logic that considers license types, add-on purchases and user seat assignments can be implemented in separate layer, based on fetched unit primitive configuration.

### Backward compatibility

- **Server-Side mapping:** Implement mapping from unit primitives to legacy services to maintain compatibility.
- **Support for deprecated unit primitives:** Continue to support deprecated unit primitives with appropriate deprecation notices.
- **GraphQL schema updates:**
  - Update the GraphQL [CloudConnectorAccessType](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/app/graphql/types/gitlab/cloud_connector_access_type.rb#L14) to include both `availableServices` and `availableUnitPrimitives`, deprecating `availableServices` but keeping it available until all clients have migrated.
  - Mark old unit primitives as deprecated in their YAML files instead of removing them, providing deprecation messages and timelines.

### API for reading configuration

- **Language-Agnostic library:** The `gitlab-cloud-connector` library is available in both Ruby and Python.
- **Backward compatibility:** Provides an adapter to convert the new YAML format to the legacy services format for older systems.
- **Permission agnostic:** The library focuses on providing configuration information, leaving permission checks to the application logic.

### Tools and validation

- **CLI tools:** Provide command-line tools for adding, updating, and removing unit primitives.
- **Schema validation:** Use JSON schema validation in CI/CD pipelines to ensure configuration correctness.
- **Automated testing:** Implement comprehensive test suites to validate changes.
- **Automated release process:** Streamline the release and publishing process to minimize delays.

## Consequences

### Positive

- **Single source of truth:** Centralized configuration simplifies maintenance and ensures consistent access across all systems.
- **Modular and scalable:** Modular YAML files allow easy addition of new unit primitives by stage groups, reducing the maintenance surface through a "fix it once, run everywhere" approach.
- **Separation of concerns:** Properly divides UI functionality and backend access control, keeping concerns distinct and manageable.
- **Centralized ownership and configuration:** Configuration management and ownership are centralized, making updates efficient and reducing potential discrepancies.

### Negative

- **Release dependency:** Changes require new library releases, creating dependencies on release cycles.
  - **Mitigation:** Establish a streamlined release process and use automation to minimize delay.
- **Reduced code visibility:** Code is less visible to the broader team, potentially reducing collaborative input.
  - **Mitigation:** Enhance documentation and use internal communication channels to keep teams informed of changes.
- **Security update challenges:** Managing security updates may become more complex across multiple repositories.
  - **Mitigation:** Implement regular automated security scans and synchronize updates across repositories.
- **Initial setup overhead:** Setting up and maintaining a separate repository introduces initial overhead.
  - **Mitigation:** Invest in comprehensive setup documentation and tooling to simplify onboarding and maintenance.

## Next steps

### Core library development

- Create `gitlab-cloud-connector` library with the new YAML configuration structure.
- Implement configuration parser and validator.
- Build adapter to convert new YAML format to legacy services format.
- Add basic test suite and CI/CD pipeline.
- Create configuration management CLI for adding, updating, and removing unit primitives.

### Migration path

- Update all GitLab Rails and CustomersDot instances to use the new library (SSoT).
- Switch primary source to the new YAML format while maintaining legacy output.
- Gradually migrate clients to use the new YAML format and API, deprecating the legacy `AvailableServices`.
- Maintain backward compatibility with existing services format for older GitLab versions.
- Ensure continuity of impacted analytics data models by replacing `services` (renamed to `features` in the data platform and Tableau dashboards) with more granular attributes such as `feature_category` (as detailed in issue [#502457](https://gitlab.com/gitlab-org/gitlab/-/issues/502457)).

### Documentation

- Create guides for unit primitive management.

### Client updates

- Update permission checking mechanisms.
- Support both old and new formats for backward compatibility.

## Useful links

- [Decide on CloudConnector unit primitives config and API](https://gitlab.com/gitlab-org/gitlab/-/issues/502821)
- [Extract CloudConnector `unit_primitive` configuration and logic](https://gitlab.com/groups/gitlab-org/-/epics/14310)

This decision maintains a two-way door, allowing for future changes if needed. We will focus on implementing this solution and integrate additional features and backends before considering further improvements.
