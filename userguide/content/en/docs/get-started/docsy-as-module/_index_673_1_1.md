---
title: "Organization"
status: ongoing
creation-date: "2023-04-05"
authors: [ "@lohrc", "alexpooley" ]
coach: "@ayufan"
approvers: [ "@lohrc" ]
owning-stage: "~devops::data stores"
participating-stages: []
toc_hide: true
---

{{< design-document-header >}}

This document is a work in progress and represents the current state of the Organization design.

## Glossary

- Organization: An Organization is the umbrella for one or multiple top-level Groups. Organizations are isolated from each other by default meaning that cross-Namespace features will only work for Namespaces that exist in a single Organization.
- Top-level Group: Top-level Group is the name given to the topmost Group of all other Groups. Groups and Projects are nested underneath the top-level Group.
- Cell: A Cell is a set of infrastructure components that contains multiple Organizations. The infrastructure components provided in a Cell are shared among Organizations, but not shared with other Cells. This isolation of infrastructure components means that Cells are independent from each other.
- User: An Organization has many Users. Joining an Organization makes someone a Member of that Organization.
- Member: Adding a User to a Group or Project within an Organization makes them a Member. Members are always Users, but Users are not necessarily Members of a Group or Project within an Organization. For instance, a User could just have accepted the invitation to join an Organization, but not be a Member of any Group or Project it contains.
- Non-User: A Non-User of an Organization means a User is not part of that specific Organization. Non-Users are able to interact with public Groups and Projects of an Organization, and can raise issues and comment on them.

## Summary

GitLab.com is currently a single monolithic application that serves all users and organizations. This architecture has several limitations:

1. Scalability challenges: As the user base grows, it becomes increasingly difficult to scale the entire application uniformly.
2. Performance bottlenecks: Heavy usage by one organization can potentially impact the performance for others.
3. Limited isolation: Issues affecting one part of the application can potentially impact all users.
4. Maintenance complexity: Updating or maintaining the system requires careful coordination to avoid disrupting all users simultaneously.

The Organization and Cell concepts aim to address these limitations by introducing a more modular and scalable architecture. Here's how they work together:

1. Organizations provide logical separation: They group related users, groups, and projects under a single entity, allowing for better management and isolation of resources.
2. Cells provide physical separation: Each Cell is an independent set of infrastructure components that can host multiple Organizations.

By combining Organizations and Cells, we can achieve:

1. Improved scalability: We can add new Cells as needed to accommodate growth, rather than scaling the entire application.
2. Better performance isolation: Issues or heavy usage in one Cell won't affect Organizations in other Cells.
3. Enhanced reliability: Problems in one Cell are contained, reducing the risk of system-wide outages.
4. Easier maintenance: Cells can be updated or maintained independently, minimizing disruption to users.

This approach allows GitLab.com to grow more efficiently while providing a more stable and performant experience for all users.

## Overview

GitLab.com, our SaaS offering, is growing rapidly.
This growth requires that the underlying infrastructure components are able to scale to accommodate additional users.

Scaling GitLab requires different strategies for the individual components.
For example, web application nodes are stateless and can be scaled relatively easily by creating more individual servers.
Stateful components are much harder to scale. As a single solution for the entire DevOps lifecycle, GitLab depends on a single data store which serves as a the single source of truth of data.
For GitLab, this data store is mostly a single PostgreSQL database.
Given the continuing growth of GitLab.com, this PostgreSQL database needs to handle more and more transactions per second.
Reading data can be accelerated by provisioning additional replicas.
Writing new data, however, can't be easily scaled in the same way.
There can only be one primary server and all writes have to go through it.
In order to address this problem there are several possible solutions:

1. Buy more capable hardware - Bigger servers can handle more transactions. This is generally referred to as vertical scaling.
1. Define a horizontal scaling strategy.

GitLab.com is approaching a point where buying bigger servers is no longer easily possible.
Hence, the shift to a [Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) architecture is an investment into our horizontal scaling strategy.
This architecture creates many mostly isolated GitLab instances, called Cells, that include all required services (database, web, Redis, Gitaly, Runners, Sidekiq etc.).
The number of Cells can grow alongside the growth of the business.

Organizations will be the vehicle to distribute customers amongst different Cells.
While customers will not be exposed to Cells via the UI and they will operate in the context of Organizations, they are likely to benefit from improved service availability as a result of this architecture change.
Further, the increased isolation of functionality will allow us to tailor the user experience more to an organization's context.

[Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) provide a solution for organizations in the small to medium business (up to 100 users) and the mid-market segment (up to 2000 users). Larger organizations may benefit substantially from [GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/index.html).

Organizations will offer the following functionality:

1. **Centralized management:** An Organization entity allows all groups, projects, and members to be managed under a single umbrella. This centralization simplifies administration, as it allows for easier configuration and maintenance of access controls, policies, and settings across the entire Organization.
   - An Organization can contain multiple top-level groups. For example, the following top-level groups would belong to the Organization `GitLab`:
     1. `https://gitlab.com/gitlab-org/`
     1. `https://gitlab.com/gitlab-com/`
   - Organizations remove the constraint of having a single hierarchy. An Organization is a container that could be filled with any collection of hierarchies that make sense.
   - Centralized control of user profiles. With an Organization-specific user profile, administrators can control the user's role in a company, enforce user emails, or show a graphical indicator that a user is part of the Organization. An example could be adding a "GitLab employee" indicator on comments.
   - **Unified UX and wider audience.** Organizations allow us to better unify the experience on SaaS and self-managed deployments. Many instance-level features are admin only. We do not want to lock out users of GitLab.com in that way. We want to make administrative capabilities that previously only existed for self-managed users available to our GitLab.com users as well. The Organization Owner will have access to instance-equivalent settings with most of the configuration controlled at the Organization level. Instance-level workflows like dashboards can also be shifted to the Organization. This also means we would give users of GitLab.com more independence from GitLab.com admins in the long run. Today, there are actions that self-managed admins can perform that GitLab.com users have to request from GitLab.com admins, for instance banning malicious actors.
1. **Isolation:** In a cellular architecture, each Organization's data, configurations, and resources are isolated. This is particularly important for customers in highly regulated industries, such as finance, healthcare, or government. Top-level Groups of the same Organization can interact with each other but not with Groups in other Organizations, providing clear boundaries for an Organization, similar to a self-managed instance. Isolation should have a positive impact on performance and availability as things like User dashboards can be scoped to Organizations.
1. **Integration with Cells:** Isolating Organizations makes it possible to allocate and distribute them across different Cells. The benefit of being on a cellular architecture is:
   - **Increased reliability:** A group of Organizations is fully isolated from other Organizations located on a different Cell. If an issue arises within one Organization, the impact is contained within the Cell the Organization is on, preventing a single point of failure from affecting the entire platform. This enhances the overall reliability of GitLab, reducing the risk of widespread outages and improving customer satisfaction. Having isolated Organizations is a pre-requisite to distribute customers amongst multiple Cells.

### Goals

- Improved UX: Inconsistencies between the features available at the Project and Group levels create navigation and usability issues. Moreover, there isn't a dedicated place for Organization-level features.
- Aggregation: Data from all Groups and Projects in an Organization can be aggregated.
- An Organization includes settings, data, and features from all Groups and Projects under the same owner (including personal Namespaces).
- Cascading behavior: Organization cascades behavior to all the Projects and Groups that are owned by the same Organization. It can be decided at the Organization level whether a setting can be overridden or not on the levels beneath.
- Minimal burden on customers: The addition of Organizations should not change existing Group and Project paths to minimize the impact of URL changes.

### Non-Goals

Due to urgency of delivering Organizations as a prerequisite for Cells, it is currently not a goal to build Organization functionality on the Namespace framework.

## Decision Log

- 2024-07-21: [Self-managed instances will initially be restricted to one Organization](https://gitlab.com/gitlab-org/gitlab/-/issues/419543#note_2013887114)
- 2023-05-10: [Billing is not part of the Organization MVC](https://gitlab.com/gitlab-org/gitlab/-/issues/406614#note_1384055365)
- 2023-05-15: [Organization route setup](https://gitlab.com/gitlab-org/gitlab/-/issues/409913#note_1388679761)

## Proposal

We create Organizations as a new lightweight entity, with just the features and workflows which it requires. We already have much of the functionality present in Groups and Projects, and Groups themselves are essentially already the top-level entity. It is unlikely that we need to add significant features to Organizations outside of some key settings, as top-level Groups can continue to serve this purpose at least on GitLab.com. From an infrastructure perspective, cluster-wide shared data must be both minimal (small in volume) and infrequently written.

```mermaid
graph TD
  o[Organization] -. has many .- g
  ns[Namespace] --> g[Group]
  ns[Namespace] --> pns[ProjectNamespace] -. has one .- p[Project]
  ns --> un[UserNamespace]
  g -. has many .- p
  un -. has many .- p
  ns[Namespace] -. has many .- ns[Namespace]
```

All instances would set a default Organization.

### Benefits

- No changes to URL's for Groups moving under an Organization, which makes moving around top-level Groups very easy.
- Low risk rollout strategy, as there is no conversion process for existing top-level Groups.
- The Organization becomes the key for identifying what is part of an Organization, which is on its own table for performance and clarity.

### Drawbacks

- By not basing Organizations on the existing namespace construct, it is not clear how we would avoid duplicating the effort of achieving parity for features like reporting between GitLab.com and self-managed, without doing the work twice. (At instance/organization level for top-level reporting, and at group-level for sub-group level reporting)
- Long term, it may make sense to shift billing from top-level Groups to the Organization level.

## Data Exploration

From an initial [data exploration](https://gitlab.com/gitlab-data/analytics/-/issues/16166#note_1353332877), we retrieved the following information about Users and Organizations:

- For the users that are connected to an organization the vast majority of them (98%) are only associated with a single organization. This means we expect about 2% of Users to navigate across multiple Organizations.
- The majority of Users (78%) are only Members of a single top-level Group.
- 25% of current top-level Groups can be matched to an organization.
  - Most of these top-level Groups (83%) are associated with an organization that has more than one top-level Group.
  - Of the organizations with more than one top-level Group the (median) average number of top-level Groups is 3.
  - Most top-level Groups that are matched to organizations with more than one top-level Group are assumed to be intended to be combined into a single organization (82%).
  - Most top-level Groups that are matched to organizations with more than one top-level Group are using only a single pricing tier (59%).
- Most of the current top-level Groups are set to public visibility (85%).
- Less than 0.5% of top-level Groups share Groups with another top-level Group. However, this means we could potentially break 76,000 existing links between top-level Groups by introducing the Organization.

Based on this analysis we expect to see similar behavior when rolling out Organizations.

## Design and Implementation Details

Cells will be rolled out in three phases: Cells 1.0, Cells 1.5 and Cells 2.0.
The Organization functionality available in each phase is described below.

### Organization MVC

#### Organizations on Cells 1.0 (FY24Q2-FY25Q4)

The Organization MVC for Cells 1.0 will contain the following functionality:

- **Creation**
  - Organizations can be created. Form fields include name, URL, description, avatar, and visibility (readonly in Cells 1.0).
  - An admin setting controls the ability to create Organizations. This setting is enabled on GitLab.com and disabled by default on self-managed GitLab.
  - In addition to the admin setting, a feature flag will control the ability to create Organizations. On GitLab.com, this feature flag will only be enabled for GitLab team members. On self-managed GitLab this feature flag will be disabled by default. We will warn against enabling it, but will not be able to prevent self-managed instances from doing so.
- **Editing**
  - Organizations can be edited in the **Settings > General** section. Form fields include name, ID (readonly), description, avatar, and visibility (readonly in Cells 1.0). Only accessible by Organization Owners.
  - Organization slug can be changed in the **Settings > General** section. Only accessible by Organization Owners.
- **Visibility**
  - Organizations can only be `private`. Private Organizations can only be seen by the Users that are part of the Organization. They can only contain private Groups and Projects. The only exception to this is the default Organization on the Primary Cell, which is `public`, and contains all currently existing Groups and Projects on GitLab.com.
- **Users**
  - [Roles and permissions](#roles-and-permissions)
  - The creation of an Organization appoints that User as the Organization Owner.
  - Organization Owners can update the existing role of a user from User to Owner or vice versa.
  - A User can only be part of one Organization for Cells 1.0. A new account needs to be created for each Organization a User wants to be part of. GitLab team members may be part of multiple Organizations for testing purposes.
  - Organization Owners can delete users from an Organization. This equals an account deletion in the context of Cells 1.0.
  - When a user becomes a member of a group or project they are also added as an Organization User. They receive an email informing them that they have been added to the Organization.
  - Removing a user from their last group or project should not remove them from the Organization.
  - Users can delete their own accounts. Users should not be able to delete their account when they are the last Owner of an Organization.
  - [User Profile will be scoped to the Organization](https://docs.gitlab.com/ee/architecture/blueprints/cells/impacted_features/user-profile.html). In Cells 1.0, this is a result of a user only being part of one Organization.
- **Groups**
  - All existing top-level Groups on GitLab.com and self-managed GitLab are part of the default Organization.
  - Groups can be created in an Organization.
  - Groups can be edited by the Organization Owner.
  - Groups can be deleted by the Organization Owner.
  - Organization Owners and Users can view the groups they have access to in the Groups overview. The list of groups can be sorted and searched.
- **Projects**
  - All existing Projects on GitLab.com and self-managed GitLab are part of the default Organization.
  - Projects cannot be created directly in an Organization, instead they are created in a group that belongs to an Organization.
  - Projects can be edited by the Organization Owner.
  - Projects can be deleted by the Organization Owner.
  - Organization Owners and Users can view the projects they have access to in the Projects overview. The list of projects can be sorted and searched.
- **Activity**
  - Organization Owners and Users can access the Activity page for the Organization.
- **Admin**
  - All created Organizations are listed in the Admin Area section `Organizations`.
  - Admins can assign the Owner or User role to new users.
  - Admins can update the existing role of a user from Owner to User or vice versa.
  - Admins can delete a user and receive a warning about the user's Organization association. Admins cannot delete the last Organization Owner. They need to assign a new Owner first.
- **Navigation**
  - Current Organization context is indicated in the navigation sidebar.
- **Isolation**
  - Organizations for 1.0 will contain the minimal set of features required to implement isolation. Features that are present in top-level groups for SaaS, such as billing or enterprise users, will remain here.
  - Organizations themselves are not fully isolated, isolation is a result of being on a Secondary Cell. We aim to complete [phase 1 of Organization isolation](https://gitlab.com/groups/gitlab-org/-/epics/11837), with the goal to `define sharding_key` and `desired_sharding_key` rules.

##### Dependencies on other services

- Organizations rely on the Topology Service
  - to guarantee the uniqueness of global claims (like usernames, emails, namespaces, SSH public keys, and more) across the cluster.
  - provides IDs that are unique across the cluster.
- Organizations rely on the router to route requests to the correct Cell based on eg. path, token prefix, users, or SSH public keys.
- All Cells have their own application secrets
- Application settings are synchronized across Cells

##### Some affected features

- All forms of authentication. As the Topology Service cannot classify the request with an unauthenticated user, the process is as follows:
  1. Cell #1 displays the login form.
  1. Cell #1 identifies the user based on the request data.
  1. Cell #1 looks up the user's associated Cell from the Topology Service.
  1. Cell #1 sets a cookie indicating the associated Cell and redirects the user.
  1. The router routes the request to the correct Cell based on the cookie.
  1. Cell X authenticates the user
- Billing stays at top-level Group.
- Enterprise Users or verified domains are not required to be used with Organizations.
- Public visibility of Groups and Projects, or unauthenticated requests are not allowed apart from Cell #1.

A list of features not supported in Cells 1.0 is available in the [Cells 1.0 blueprint](/handbook/engineering/architecture/design-documents/cells/iterations/cells-1.0/#features-on-gitlabcom-that-are-not-supported-on-cells).

##### Open Questions

- To minimize the number of cluster-wide resources, consider refactoring [Standalone resources](https://docs.gitlab.com/ee/api/api_resources.html#standalone-resources) to scope them to an Organization, Group, or Project.
- Consider refactoring global endpoints (e.g. `/jwt/auth`) to be scoped to an Organization, Group, or Project, unless they are supporting cluster-wide resources.

#### Organizations on Cells 1.5 (FY26Q1-FY26Q2)

Organizations in the context of Cells 1.5 will contain the following functionality:

- **Deletion**
  - Organizations can be deleted by Organization Owners.
- **Users**
  - Organization Users can be part of multiple Organizations using one account.
  - Users are able to navigate between their Organizations using an Organization switcher.
  - Non-Enterprise Users can be removed from or leave an Organization.
  - When users are added to Organizations they receive an email informing them that they have been added to the Organization.
  - Users get [a personal Namespace in each Organization](https://docs.gitlab.com/ee/architecture/blueprints/cells/impacted_features/personal-namespaces.html) they are associated with.
  - [User Profile can be scoped to multiple Organizations](https://docs.gitlab.com/ee/architecture/blueprints/cells/impacted_features/user-profile.html). Changing the Organization in the switcher will change the scope of the User Profile to the selected Organization.
- **Groups**
  - Users can transfer existing top-level Groups into Organizations.
- **Isolation**
  - Organizations are fully isolated. We aim to complete [phase 2 of Organization isolation](https://gitlab.com/groups/gitlab-org/-/epics/11838), with the goal to implement isolation constraints.

#### Organizations on Cells 2.0 (FY26Q3-FY26Q4)

Organizations in the context of Cells 2.0 will contain the following functionality:

- Public visibility. Organizations can now also be `public`, containing both private and public Groups and Projects.

### Organization Access

See [Organization Users](organization-users.md).

### Roles and Permissions

Organizations will have an Owner role. Compared to Users, they can perform the following actions:

| Action | Owner | User |
| ------ | ------ | ----- |
| View Organization settings | ✓ |  |
| Edit Organization settings | ✓ |  |
| Delete Organization | ✓ |  |
| Remove Users | ✓ |  |
| View Organization front page | ✓ | ✓ |
| View Groups overview | ✓ | ✓ (1) |
| View Projects overview | ✓ | ✓ (1) |
| View Users overview | ✓ |  |
| View Organization activity page | ✓ | ✓ (1) |
| Transfer top-level Group into Organization if Owner of both | ✓ |  |

(1) Members can only see what they have access to.
(2) Users can only see Users from Groups and Projects they have access to.

[Roles](https://docs.gitlab.com/ee/user/permissions.html) at the Group and Project level remain as they currently are.

#### Relationship between Organization Owner and Instance Admin

Users with the (Instance) Admin role can currently [administer a self-managed GitLab instance](https://docs.gitlab.com/ee/administration/index.html).
As functionality is moved to the Organization level, Organization Owners will be able to access more features that are currently only accessible to Admins.
On our SaaS platform, this helps us in empowering enterprises to manage their own Organization more efficiently without depending on the Instance Admin, which is currently a GitLab team member.
On SaaS, we expect the Instance Admin and the Organization Owner to be different users.
Self-managed instances are generally scoped to a single organization, so in this case it is possible that both roles are fulfilled by the same person.
There are situations that might require intervention by an Instance Admin, for instance when Users are abusing the system.
When that is the case, actions taken by the Instance Admin overrule actions of the Organization Owner.
For instance, the Instance Admin can ban or delete a User on behalf of the Organization Owner.

### Settings in Organizations

See [Organization: Settings](organization-settings.md).

### Routing

Today only Users, Projects, Namespaces and container images are considered routable entities which require global uniqueness on `https://gitlab.com/<path>/-/`.
Initially, Organization routes will be [unscoped](https://docs.gitlab.com/ee/development/routing.html).
Organizations will follow the path `https://gitlab.com/-/organizations/org-name/` as one of the design goals is that the addition of Organizations should not change existing Group and Project paths.

## Impact of the Organization on Other Domains

We want a minimal amount of infrequently written tables in the shared database.
If we have high write volume or large amounts of data in the shared database then this can become a single bottleneck for scaling and we lose the horizontal scalability objective of Cells.
With isolation being one of the main requirements to make Cells work, this means that existing features will mostly be scoped to an Organization rather than work across Organizations.
One exception to this are Users, which are stored in the cluster-wide shared database.
For a deeper exploration of the impact on select features, see the [list of features impacted by Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html).

### Alignment between Organization and Fulfillment

Fulfillment enhancements for Organizations will happen in a different timeline to the [Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) project and should not be seen as blockers to any Cells timelines.

For Cells 1.0, Billing remains at the top-level Group. Said otherwise, Billing will not occur at the Organization level. The guidance for Cells 1.0 is for GitLab.com SaaS customers to use a single top-level Group to keep Billing consolidated.

We are currently [evaluating future architecture designs](https://gitlab.com/gitlab-org/gitlab/-/issues/443708) (e.g. Zuora Billing Accounts being aligned to Organizations) but have yet to determine the North star direction and how/if it aligns to the Cells iterations.

### Open-source Contributions in Organizations

Several aspects of the current open-source workflow will be impacted by the introduction of Organizations.
We are conducting deeper research around this specific problem in [issue 420804](https://gitlab.com/gitlab-org/gitlab/-/issues/420804).

## Post-MVC Iterations

After the initial rollout of Organizations, the following functionality will be added to address customer needs relating to their implementation of GitLab:

1. [Organizations can invite Users](https://gitlab.com/gitlab-org/gitlab/-/issues/420166).
1. Complete [phase 3 of Organization isolation](https://gitlab.com/groups/gitlab-org/-/epics/11839), with the goal to allow customers to move existing namespaces out of the default Organization into a new Organization.
1. Internal visibility will be made available on Organizations that are part of GitLab.com.
1. Restrict inviting Users outside of the Organization.
1. Enterprise Users will be made available at the Organization level.
1. Organizations are able to ban Users.
1. Projects can be created from the Organization-level Projects overview.
1. Groups can be created from the Organization-level Groups overview.
1. Move billing from top-level Group to Organization.
1. Audit events at the Organization level.
1. Set merge request approval rules at the Organization level and cascade to all Groups and Projects.
1. Security policies at the Organization level.
1. Vulnerability Report and Dependency List at the Organization level.
1. Cascading Organization setting to enforce security scans.
1. Merge request approval policies at the Organization level.
1. Compliance frameworks.
1. [Support the agent for Kubernetes sharing at the Organization level](https://gitlab.com/gitlab-org/gitlab/-/issues/382731).

## Organization Development

Below is a high level development roadmap for Organizations.
The project is complicated and requires coordination across many engineering teams.
In response to this, the roadmap has been broken into the following broad phases.
Phases after the backend essentials phase can overlap depending on capacity and release dependencies.

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    axisFormat  X
    todayMarker off

    %% Dates are for illustration purposes only.
    Default Organization : done, do1, 2024-07-01, 5d
    Organization Backend Essentials : active, be, after do1, 5d
    Cells 1.0 : milestone, 2024-07-11,
    Organization Product Feature : pf, after be, 30d
    Addressing Tech Debt : td, 2024-07-14, 27d
    Extend Product Features : 2024-07-18, 23d
    Cells 1.5 : milestone, 2024-07-21,
    Cells 2.0 : milestone, 2024-07-31,
```

### Default Organization

We have seeded the database with a "default organization" that has an `ID` of `1`.
This is a catch all Organization that contains all existing entities.
[Work is in progress](https://gitlab.com/groups/gitlab-org/-/epics/13678) to link as many tables as possible directly or indirectly to an Organization.
These associations will group all entities underneath an Organization, which is a pre-requisite to scaling Organizations across Cells.
Note that not all tables fit within an Organization.

### Organization backend essentials

[Organization backend essentials](https://gitlab.com/groups/gitlab-org/-/epics/14111)

This is foundational work to integrate the Organization at low levels of the code base.

- All tables with an `organization_id` foreign key are defined with not null foreign key constraints.
- All code paths are writing the correct `organization_id` value and are not relying on a default value.

This stage will be completed by Cells 1.0 and must be completed before the next phases listed below.

### Organization Product Feature

This phase formally introduces the Organization UI so that basic Organization features are available:

- Organization [front page](https://gitlab.com/groups/gitlab-org/-/epics/11187)
- Organization user overview
- Organization [group](https://gitlab.com/groups/gitlab-org/-/epics/11188) and [project](https://gitlab.com/groups/gitlab-org/-/epics/11189) overview
- [Display of the current organization](https://gitlab.com/groups/gitlab-org/-/epics/11190).

This work will be required by Cells 1.5.
We expect that these pages will allow other teams to add features more easily to Organizations.
After this stage, there will be additional enhancements to the Organization UI.

### Addressing Tech Debt

This phase will complete the migration of critical product features to the Organization level.

In order to release Cells 1.0, some product features will exist in a transient "workaround" state.
For example, some tables (such as application settings) may simply be "mirrored" to release Cells 1.0.
This stage will address the development of workarounds to permanent solutions.

### Extend Product Features

Product teams that were not already asked to move their features in a previous phase can begin to add functionality to Organizations.

Some Organization level requests we are aware of are listed in #post-mvc-iterations.

## Organization Rollout

We propose the following steps to successfully roll out Organizations:

### Cells 1.0

- User is confined to one Organization within one Cell.
- Gitlab.com will have two Cells or more.
  - The [legacy cell](../cells/goals.md#legacy-cell) with the default Organization (public) that holds every existing top-level group except for selected internal customer group(s).
  - The other cells with Organizations (private) holding select internal customer group(s).
- Self managed will have one hidden `default Organization`.
- An Organization UI will not be visible to external users, except by enabling a set of feature flags. The internal customer group will have the feature flag enabled and use the Organization UI.

### Cells 1.5

- New private Organizations can be created on GitLab.com
- Users can switch between Organizations.
- Gitlab.com users can migrate top-level groups to a new Organization.
- An Organization UI will be visible, including:
  - Drop down Organization switcher.
  - Organization management pages.
  - Some Organization level features.
- Organizations are promoted, e.g. via a banner message, targeted conversations with large customers via the CSMs.

### Cells 2.0

- Organizations can be public on GitLab.com
- Organizations can move between Cells.
- Gitlab entities have migrated off the primary Cell and onto the secondary Cell.

### Post Cells 2.0

A force-option to move top-level groups into Organizations may be considered if we do not achieve the load distribution we are aiming for with Cells.

## Alternative Solutions

An alternative approach to building Organizations is to convert top-level Groups into Organizations. The main advantage of this approach is that features could be built on top of the Namespace framework and therewith leverage functionality that is already available at the Group level. We would avoid building the same feature multiple times. However, Organizations have been identified as a critical driver of Cells. Due to the urgency of delivering Cells, we decided to opt for the quickest and most straightforward solution to deliver an Organization, which is the lightweight design described above. More details on comparing the two Organization proposals can be found [here](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/56).

## Links

- [Organization epic](https://gitlab.com/groups/gitlab-org/-/epics/9265)
- [Organization MVC design](https://gitlab.com/groups/gitlab-org/-/epics/10068)
- [Enterprise Users](https://docs.gitlab.com/ee/user/enterprise_user/index.html)
- [Cells blueprint](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html)
- [Cells epic](https://gitlab.com/groups/gitlab-org/-/epics/7582)
- [Namespaces](https://docs.gitlab.com/ee/user/namespace/index.html)
- [Organization Isolation](isolation.md)
- [Organization: Frequently Asked Questions](organization-faq.md)
