---
title: "Current Organization"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
---

We will ensure that the current organization id is defined on every entry point. These entry points include web requests, background jobs, and scheduled tasks.

## Web Requests

Including rails controllers, Grape API, GraphQL, ActionCable.

For web requests the current organization will be determined in the following order of precedence with details listed in sub-sections below:

1. Path params. E.g. /groups/abc-group, /-/organizations/my-organization
1. Header field
1. Session variable storing current organization id.
1. The default organization (ID = 1).

### Path Params

The current Organization will be the parent Organization for the resource requested.

For example `/groups/abc-group`, `/-/organizations/my-organization`

### Header Field

- Organization context included in `X-GitLab-Organization-ID` header
- Frontend JavaScript automatically includes the context in AJAX/API calls
- Maintains consistent context during interactive sessions

### Session Variable

- User's last accessed organization stored in session
- Used for generic pages without explicit resource context
- Defaults to User's [home organization when no context is available

The session variable will assist to disambiguate on pages such as `/explore` and will reduce the roadmap to dog fooding.
We don't consider session variable usage a long term solution because it will break browser tab usage, and HTTP GET requests won't be idempotent breaking bookmarks and sharing of links.
Features that depend on the session variable will be considered incomplete until they are scoped appropriately.

### The Default Organization

This is a fallback for unauthenticated requests not handled by the higher precedent mappings.

Use of the Default Organization will break Cells compatibility because the Default Organization is only available on one Cell.

## Background Jobs

Jobs will be enqueued with the current organization context and automatically applied during execution.

For example:

```ruby
# Sidekiq client middleware - preserves context when enqueuing
class OrganizationContextClientMiddleware
  def call(worker_class, job, queue, redis_pool)
    # Capture current organization context
    job['organization_id'] = Current.organization_id
    yield
  end
end

# Sidekiq server middleware - restores context during processing
class OrganizationContextServerMiddleware
  def call(worker, job, queue)
    organization_id = job['organization_id']
    raise "Missing organization context" unless organization_id

    # Set thread-local context that query executor will use
    Current.organization_id = organization_id
    yield
  ensure
    Current.organization_id = nil
  end
end
```

## Scheduled Tasks

Cron jobs will be required to define a current Organization. There will be provision to skip this requirement, but it will be considered an exceptional circumstance rather than typical.

## Exceptions

The Current Organization will be defined as a kind of global execution context. There is an expectation that Current Organization is always defined, however there are recognized circumstances where this is not possible or desirable.

Admin Operations
: System-wide admin tasks will use explicit context exemption blocks

Scheduled Tasks
: Cron jobs will likely initalize the job without a Current Organization and then define Current Organization per Organization batch.

An example exception may look like:

```ruby
class DropPendingBuildsWorker
  def perform
    # Process each organization's builds with proper context
    organizations_with_pending_builds.each do |org_id|
      # Set thread-local context for automatic query wrapping
      Current.organization_id = org_id
      process_builds_for_organization(org_id)
    end
  ensure
    Current.organization_id = nil
  end

  def organizations_with_pending_builds
    Organizations::Organization.without_current_organization do
      # make some query
    end
  end
end
```
