---
stage: enablement
group: Tenant Scale
title: 'Organization: Settings'
toc_hide: true
---

The end goal for most existing Admin Area settings is to migrate them to Organizations, with a few exceptions in which we might want to make a setting available at both the instance and Organization level.

## Setting Inheritance

When it comes to setting inheritance in Organizations, we follow a hierarchical approach:

1. Instance-level settings
2. Organization-level settings
3. Group-level settings (if applicable)
4. Project-level settings (if applicable)

Settings at a lower level can override settings from higher levels, allowing for more granular control, unless they are locked.
This inheritance model ensures that:

- Administrators can set default values at the instance level.
- Organization owners can customize settings for their entire organization.
- Group and project maintainers can further refine settings as needed.

## Types of Settings

We categorize Organization settings into three main types:

1. **Organization-only settings**: These are specific to Organizations and don't exist at the instance level.
2. **Inherited settings**: These can be set at both instance and Organization levels, with Organization settings taking precedence.
3. **Instance-only settings**: These remain at the instance level and are not migrated to Organizations.

## Migration Strategy

When migrating existing Admin Area settings to Organizations, we follow these guidelines:

1. Identify the setting's scope and determine if it should be Organization-only, inherited, or remain instance-only.
2. For inherited settings, implement a mechanism to uniformly apply Organization-level settings to their contained groups and projects.
3. Update the UI to reflect the new setting location and inheritance model.
4. Provide clear documentation on how each setting behaves in the Organization context.

During the transition phase settings will move from the Admin Area to Organizations. To minimize disruption and maintain the admin experience, settings being moved to the Organization should continue to be represented in the Admin Area.

### Use cases

#### One Organization in one instance (self-managed)

A setting migrated from the Admin Area to the Organization should be displayed in both setting areas.
Settings in the Admin Area should indicate it is an Organization setting.
Changing the setting in the Admin Area or in the Organization should update the setting in both areas.

Instance admins should be able to access and update settings in the Admin Area.
Organization owners and instance admin should be able to access and update settings in the Organization.
Organization members cannot access Organization settings.

#### Multiple Organizations in one instance (GitLab.com)

A setting migrated from the Admin Area to the Organization should be displayed in both setting areas.
Settings in the Admin Area should require selecting an Organization to enable viewing or editing.
Updating settings within the admin area should apply only to the selected Organization.  Updating settings within the Organization should also update settings in the Admin Area when that Organization is selected.

Instance admins should be able to access and update settings in the Admin Area for all Organizations.
Organization owners should be able to access and update settings in the Organization they are an owner of.
Organization members cannot access the settings.

## Future Considerations

As we continue to develop the Organization feature, we should consider:

- Implementing a visual indicator in the UI to show which level a setting is inherited from.
- Providing an option to reset Organization settings to instance defaults.
- Developing APIs to manage Organization settings programmatically.
- Exploring the possibility of setting templates or profiles for quick Organization setup.

By carefully designing and implementing these setting structures, we can provide a flexible and powerful way for users to manage their GitLab instances and Organizations.
