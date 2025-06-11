---
title: "Custom Roles"
status: ongoing
creation-date: "2025-02-13"
authors: [ "@jarka" ]
coach: [ "@grzesiek" ]
approvers: [ "@alexbuijs", "@grzesiek" ]
owning-stage: "~devops::software supply chain security"
participating-stages: []
toc_hide: true
---

{{< engineering/design-document-header >}}

## Overview

GitLab Custom Roles lets Ultimate subscribers create roles with specific permissions that fit their team's needs. Instead of using only the standard roles (Guest, Reporter, Developer, Maintainer, Owner), administrators can create new roles with exactly the permissions they want. This works for both project/group permissions and admin area access.
For example, an Ultimate customer could create an "Engineer" role based on the Guest standard role with `read code` and `admin merge requests` abilities, but without abilities like `admin issues`.

Each role can be customized by turning specific permissions on, making it easy to give team members just the access they need. Currently, custom abilities can only be added to standard roles, not subtracted.

## Custom roles vs default roles

In GitLab 15.9 and earlier, GitLab only had [default roles](https://docs.gitlab.com/ee/development/permissions/predefined_roles.html) as a permission system. In this system, there are a few predefined roles that are statically assigned to certain abilities. These default roles are not customizable by customers.

With custom roles, the customers can decide which abilities they want to assign to certain user groups. For example:

- In the default role system, reading of vulnerabilities is limited to at least the Developer role.
- In the custom role system, a customer can assign this ability to a new custom role based on any default role.

Like default roles, custom roles are [inherited](https://docs.gitlab.com/ee/user/project/members/#membership-types) within a group hierarchy. If a user has custom role for a group, that user will also have a custom role for any projects or subgroups within the group.

## Terminology

- **Custom Roles**: User-facing feature name for customer-defined groups of permissions
- **Member Roles**: Backend/API term for custom roles, stored in the `member_roles` table
- **Access Levels**: Backend term for the default roles, stored as integers in the database
- **Base Role**: The default role that a custom role is based upon (can be nil for admin-related roles)
- **Additive Permissions**: Additional permissions granted on top of the base role's permissions

The terms "permission" and "ability" are often used interchangeably.

- "Ability" is an action a user can do. These map to [Declarative Policy abilities](https://gitlab.com/gitlab-org/ruby/gems/declarative-policy/-/blob/main/doc/defining-policies.md#rules) and live in Policy classes in `ee/app/policies/*`.
- "Permission" is how we refer to an ability [in user-facing documentation](https://docs.gitlab.com/ee/user/permissions). The documentation of permissions is manually generated so there is not necessarily a 1:1 mapping of the permissions listed in documentation and the abilities defined in Policy classes.

## Architecture

### Permission Models

#### Regular Permissions

- Based on a default role
- Has one or more additive permissions
- Scoped to projects and/or groups
- Hierarchical Permission Inheritance:
  - A user with different custom roles at different levels receives all permissions
  - Example: If a user has guest+read_code in Group A and guest+read_vulnerability in Project B (within Group A),
    they will effectively have guest role with both read_code and read_vulnerability permissions in Project B
  - When going down the hierarchy, only custom roles with same or higher base role can be added

#### Admin Permissions

- Not tied to base access levels
- Specific permissions for admin area access

### Database Structure

- Individual custom roles are stored in the `member_roles` table (`MemberRole` model). It includes individual permissions and a `base_access_level` value.
- A `member_roles` record is associated with top-level groups (not subgroups) via the `namespace_id` foreign key for regular custom roles SaaS. Regular custom roles on self-managed instances and admin custom roles are not associated with groups.
- A Group or project membership (`members` record) is associated with a custom role via the `member_role_id` foreign key. Each member (group or project) can be associated with one custom role
- A Group or project membership can be associated with any custom role that is defined on the root-level group of the group or project.
- The `base_access_level` must be a [valid access level](https://docs.gitlab.com/ee/api/access_requests#valid-access-levels).

- The `base_access_level` determines which abilities are included in the custom role. For example, if the `base_access_level` is `10`, the custom role will include any abilities that a default Guest role would receive, plus any additional abilities that are enabled by the `member_roles` record by setting an attribute, such as `read_code`, to true.

- Admin-related roles use `Users::UserMemberRole` model with its `user_member_roles` table
- Custom roles for admin permissions always have nil `base_access_level`

### Permission Loading Architecture

The `Authz::CustomAbility` class orchestrates permission checking:

- Determines the appropriate preloader based on resource type (Project, Group, Admin)
- Validates permission eligibility (feature flags, license, etc.)
- Memoizes permission results for performance

We use specialized preloaders to efficiently load custom permissions for different resource types:

#### Project Permissions

- Handled by `Authz::Project` class
- Uses `UserMemberRolesInProjectsPreloader` to load permissions
- Returns project-specific custom permissions for a given user

#### Group Permissions

- Handled by `Authz::Group` class
- Uses `UserMemberRolesInGroupsPreloader` to load permissions
- Returns group-specific custom permissions for a given user

#### Admin Permissions

- Handled by `Authz::Admin` class
- Uses `UserMemberRolesForAdminPreloader` to load admin-specific permissions
- Returns admin-level custom permissions for a user

#### Finder

`MemberRoles::RolesFinder` is a search service class that filters and sorts member roles based on parameters like parent, ID, and type. It takes care of searching regular roles while for admin roles we have `Members::AdminRolesFinder`

## Documentation and Maintenance

### Automated Documentation

- Documentation is automatically generated using Rake tasks:

  - `bundle exec rake gitlab:custom_roles:compile_docs` for custom abilities list
  - `bundle exec rake gitlab:graphql:compile_docs` for GraphQL documentation

- Generated documentation ensures consistency between code and docs

### Adding New Custom Abilities

- Generated using `./ee/bin/custom-ability <ABILITY_NAME>`
- YAML configuration in `ee/config/custom_abilities`
- Schema validation and spec file generation
- Feature flag support with `custom_ability_<name>` pattern
- Policy updates in GroupPolicy and/or ProjectPolicy + specific entities if needed
- For detailed process on how to add custom permissions, please refer to the [respective contributor documentation page.](https://docs.gitlab.com/ee/development/permissions/custom_roles.html)

### Development Status

- Regular custom roles framework is implemented and actively being expanded with new permissions
- Admin custom roles are in early development stages, behind a feature flag

  - Currently available only for self-managed instances
  - Planned expansion to SaaS environments within few releases

## References

- [Custom Roles Blueprint](../permissions/)
- [Technical Discovery for Custom Permissions MVC](https://gitlab.com/gitlab-org/gitlab/-/issues/352891)
- [Designs for Custom Permissions MVC](https://gitlab.com/gitlab-org/gitlab/-/issues/350192)
