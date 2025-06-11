---
title: ZD-SFDC Sync
description: Operations workflow page for the ZD-SFDC sync
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/zd-sfdc-sync"
---

{{% alert title="Note" color="danger" %}}

ZD-SFDC Sync changes are classified as ad-hoc. Once changes are made in the repo, they are then used on future syncs.

We rarely directly edit the ZD-SFDC Sync repo itself, as the gitlab_support_readiness gem does most of the heavy lifting here.

Changes to these can cause severe problems if you have not thoroughly tested them. Exercise extreme caution before proceeding.

{{% /alert %}}

## Is a cache reset required?

When making changes to the ZD-SFDC Sync, you must determine if a cache reset is going to be required. This is determined by the nature of what exactly is being changed. If anything was added, modified, or removed from the redis objects used (in the gitlab_support_readiness gem), you will have to do a cache reset.

If you are not directly modifying those objects, a cache reset is not required.

## Changes involving cache resets

Because a cache reset is required, you need to undergo a very specific (and intensive) process:

1. Disable the scheduled pipeline(s) in the corresponding ZD-SFDC Sync project
1. Clear the redis cache for the corresponding objects
   - This is done by manually running the corresponding scheduled pipeline in the corresponding maintenance project. See our [Zendesk maintenance documentaiton](./maintenance) for more information
1. Apply the changes (via the repo and/or gem)
1. Run the sync tasks via CLI on your laptop (running in a screen).
   - This is going to take some time depending on the number of changes being made.
   - It is likely you may need to dedicate your whole shift to just doing this task in some cases.
   - Plan accordingly
1. Once all changes are synced, re-enable the scheduled pipeline(s) in the corresponding ZD-SFDC Sync project

## Changes not involving cache resets

For these, you will make the changes in the repo (and/or gem).

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

## Need to prevent changes from going live before a set date?

While rare, we sometimes need changes to the ZD-SFDC Sync to only go live on a specific date. Being an ad-hoc deployment, this does really enable that naturally.

For situations that require it, make a MR that modifies the `Gemfile` of the project to lock the gitlab_support_readiness gem verison used to a specific version.

As an example, if you are needing to lock the version to `1.0.128`, the Gemfile will look like this:

```ruby
# frozen_string_literal: true

source 'https://rubygems.org'

gem 'gitlab_support_readiness', '1.0.128', require: 'support_readiness'
```

Once it is the desired deployment , simply chahnge the `Gemfile` back to the original value, which should be:

```ruby
# frozen_string_literal: true

source 'https://rubygems.org'

gem 'gitlab_support_readiness', require: 'support_readiness'
```
