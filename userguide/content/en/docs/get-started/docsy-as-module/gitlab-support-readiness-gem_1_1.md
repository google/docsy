---
title: Support Readiness
description: Documentation page for the GitLab Support Readiness Gem
canonical_path: "/handbook/security/customer-support-operations/docs/ruby-gems/gitlab-support-readiness-gem/"
---

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1919](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1919)*</sup>

{{% pageinfo color="warning" %}}

This is an information page for the gem. If you are looking for information about maintaining the gem, please see [Ruby gems workflows](../../workflows/ruby-gems)

{{% /pageinfo %}}

The
[gitlab_support_readiness gem](https://rubygems.org/gems/gitlab_support_readiness)
is our own created gem to act as our core library for all that we do in Support
Readiness.

## Administration information

### How do I install it on my system?

You can install a gem using the `gem install` command. To install our specific
gem, you would run:

```text
gem install gitlab_support_readiness
```

### How do I update it on my system?

You can update the gem on your system by running the command

```text
gem update gitlab_support_readiness
```

### How do I include it in my code?

Much like any other gem, you simply require it in your code and it will be used.
You can do this using

```ruby
require 'support_readiness'
```

## Usage

More detailed information on how to use the gem can be found within the
[YARD docs](https://gitlab-support-readiness.gitlab.io/gitlab_support_readiness_gem/)
for the gem itself. To keep our handbook clean, we won't go over every
applicable use of the gem, but instead show some general examples.

### Example: Adding overrides to a Pagerduty schedule

To do this we need to define the configuration to use for the Pagerduty
connection, establish the client, locate our schedule, and then create
overrides. Overall, this would look like:

```ruby
require 'support_readiness'

config = Readiness::Pagerduty::Configuration.new
config.token = ENV.fetch('PD_WRITE_TOKEN')
client = Readiness::Pagerduty::Client.new(config)
schedule = Readiness::Pagerduty::Schedules.find(client, 'ABC123')
overrides = [
  {
    start: '2012-07-01T00:00:00-04:00',
    end: '2012-07-02T00:00:00-04:00',
    user: {
      id: 'PEYSGVA',
      type: 'user_reference' 
    },
    time_zone: 'UTC'
  }
]
created = Readiness::Pagerduty::Schedules.create_overrides(client, schedule, overrides)
pp created.map { |c| c['status'] }
# => [201]
```

A breakdown of what this is doing would be:

- `config = Readiness::Pagerduty::Configuration.new`

  Setting the variable `config` to a new instance of the
  `Readiness::Pagerduty::Configuration` Object

- `config.token = ENV.fetch('PD_WRITE_TOKEN')`

   Setting the instance variable `token` in the Object stored in the variable
   `config` to the value stored within the environment variable `PD_WRITE_TOKEN`

- `client = Readiness::Pagerduty::Client.new(config)`

   Set the variable `client` to a new instance of the
  `Readiness::GitLab::Client` Object, passing the value of the variable `config`
   as a parameter.

- `schedule = Readiness::Pagerduty::Schedules.find(client, 'ABC123')`

   Set the variable `schedule` to the value returned by running the function
   `Readiness::Pagerduty::Schedules.find!`, passing the variable `client` and
   the String `ABC123` as parameters. This function will use the Pagerduty API
   to find a schedule and convert its information into an Object

- `overrides = [..]`

  Set the variable `overrides` to the an Array (see Pagerduty docs for more
  details on what to use for overrides)

- `created = Readiness::Pagerduty::Schedules.create_overrides(client, schedule, overrides)`

   Set the variable `created` to the value returned by running the function
   `Readiness::Pagerduty::Schedules.create_overrides`, passing the variables
   `client`, `schedule`, and `overrides` as parameters. This function will use
   the Pagerduty API to create overrides in that schedule

- `pp created.map { |c| c['status'] }`

   Outputs the value of the key `status` from within the Array of Hashes stored
   in the variable `created`

### Example: Fetching the value stored within a key from Redis

To do this, we need to establish the client for the Redis connection and then
fetch the value from the key. Overall, this would look like:

```ruby
require 'support_readiness'

redis = Readiness::Redis.new(
  ENV.fetch('REDIS_HOSTNAME'),
  ENV.fetch('REDIS_PORT'),
  ENV.fetch('REDIS_PASSWORD')
)
pp Readiness::Redis.get(redis, 'foo')
# => "bar"
```

A breakdown of what this is doing would be:

- `redis = Readiness::Redis.new(`

   Set the variable `redis` to a new instance of the `Readiness::Redis` Object,
   passing several parameters (see below)

- `ENV.fetch('REDIS_HOSTNAME')`

  Use the value stored within the environment variable `REDIS_HOSTNAME`

- `ENV.fetch('REDIS_PORT')`

  Use the value stored within the environment variable `REDIS_PORT`

- `ENV.fetch('REDIS_PASSWORD')`

  Use the value stored within the environment variable `REDIS_PASSWORD`

- `pp Readiness::Redis.get(redis, 'foo')`

   Outputs the value stored within the key `foo`.

### Example: Adding a comment and updating the status of a ticket in Zendesk Global

To do this, we need to define the configuration to use for the Zendesk
connection, establish the client, locate our ticket, and then update its status.
Overall, this would look like:

```ruby
require 'support_readiness'

config = Readiness::Zendesk::Configuration.new
config.username = ENV.fetch('ZENDESK_GLOBAL_USERNAME')
config.token = ENV.fetch('ZENDESK_GLOBAL_TOKEN')
config.url = ENV.fetch('ZENDESK_GLOBAL_API_URL')
client = Readiness::Zendesk::Client.new(config)
ticket = Readiness::Zendesk::Tickets.find!(client, 123456)
ticket.status = 'open'
ticket.comment = { body: 'I have an update!', author_id: 123456789 }
update = Readiness::Zendesk::Tickets.update!(client, ticket)
pp update.status
# => "open"
```

A breakdown of what this is doing would be:

- `config = Readiness::Zendesk::Configuration.new`

  Setting the variable `config` to a new instance of the
  `Readiness::Zendesk::Configuration` Object

- `config.username = ENV.fetch('ZENDESK_GLOBAL_USERNAME')`

     Setting the instance variable `token` in the Object stored in the variable
   `config` to the value stored within the environment variable
   `ZENDESK_GLOBAL_USERNAME`

- `config.token = ENV.fetch('ZENDESK_GLOBAL_TOKEN')`

     Setting the instance variable `token` in the Object stored in the variable
   `config` to the value stored within the environment variable
   `ZENDESK_GLOBAL_TOKEN`

- `config.url = ENV.fetch('ZENDESK_GLOBAL_API_URL')`

     Setting the instance variable `token` in the Object stored in the variable
   `config` to the value stored within the environment variable
   `ZENDESK_GLOBAL_API_URL`

- `client = Readiness::Zendesk::Client.new(config)`

   Set the variable `client` to a new instance of the
  `Readiness::Zendesk::Client` Object, passing the value of the variable
  `config` as a parameter.

- `ticket = Readiness::Zendesk::Tickets.find!(client, 123456)`

  Set the variable `ticket` to the value returned by running the function
   `Readiness::Zendesk::Tickets.find!`, passing the variable `client` and the
   Integer `123456` as parameters. This function will use the Zendesk API to
   find a ticket and convert its information into an Object

- `ticket.status = 'open'`

   Setting the instance variable `status` in the Object stored in the variable
   `ticket` to a String

- `ticket.comment = { body: 'I have an update!', author_id: 123456789 }`

   Setting the instance variable `status` in the Object stored in the variable
   `ticket` to a Hash

- `update = Readiness::Zendesk::Tickets.update!(client, ticket)`

  Set the variable `update` to the value returned by running the function
  `Readiness::Zendesk::tickets.update!`, passing the variables `client` and
  `ticket` as parameters. This function will use the Zendesk API to update the
  ticket and convert its information into an Object

- `pp update.status`

   Outputs the value of the instance variable `status` on the Object stored
   within the variable `update`

### Example: Creating a gitlab.com issue

To do this, we need to define the configuration to use for the gitlab.com
connection, establish the client, locate our project, and then create an issue.
Overall, this would look like:

```ruby
require 'support_readiness'

config = Readiness::GitLab::Configuration.new
config.token = ENV.fetch('GITLAB_PAT')
client = Readiness::GitLab::Client.new(config)
project = Readiness::GitLab::Projects.find!(client, 123)
issue = Readiness::GitLab::Issues.new
issue.title = 'Important issue!'
issue.description = 'This is totally important!'
issue.assignee_ids = [1, 3, 4]
created_issue = Readiness::GitLab::Issues.create!(client, project, issue)
puts created_issue.web_url
# => "https://gitlab.com/jcolyer/my_project/-/issues/8"
```

A breakdown of what this is doing would be:

- `config = Readiness::GitLab::Configuration.new`
  
  Setting the variable `config` to a new instance of the
  `Readiness::GitLab::Configuration` Object

- `config.token = ENV.fetch('GITLAB_PAT')`

   Setting the instance variable `token` in the Object stored in the variable
   `config` to the value stored within the environment variable `GITLAB_PAT`

- `client = Readiness::GitLab::Client.new(config)`

   Set the variable `client` to a new instance of the
  `Readiness::GitLab::Client` Object, passing the value of the variable `config`
   as a parameter.

- `project = Readiness::GitLab::Projects.find!(client, 123)`

   Set the variable `project` to the value returned by running the function
   `Readiness::GitLab::Projects.find!`, passing the variable `client` and the
   Integer `123` as parameters. This function will use the gitlab.com API to
   find a project and convert its information into an Object

- `issue = Readiness::GitLab::Issues.new`

   Set the variable `issue` to a new instance of the `Readiness::GitLab::Issues`
   Object

- `issue.title = 'Important issue!'`

   Setting the instance variable `title` in the Object stored in the variable
   `issue` to a String

- `issue.description = 'This is totally important!'`

   Setting the instance variable `description` in the Object stored in the
   variable `issue` to a String

- `issue.assignee_ids = [1, 3, 4]`

   Setting the instance variable `assignee_ids` in the Object stored in the
   variable `issue` to an Array

- `created_issue = Readiness::GitLab::Issues.create!(client, project, issue)`

   Set the variable `created_issue` to the value returned by running the
   function `Readiness::GitLab::Issues.create!`, passing the variables `client`,
   `project`, and `issue` as parameters. This function will use the gitlab.com
   API to create an issue and convert its information into an Object

- `puts created_issue.web_url`

   Outputs the value of the instance variable `web_url` on the Object stored
   within the variable `created_issue`

## Useful links

- [Source code](https://gitlab.com/gitlab-support-readiness/gitlab_support_readiness_gem)
- [rubygems.org page](https://rubygems.org/gems/gitlab_support_readiness)
- [Issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/new)
- [YARD docs](https://gitlab-support-readiness.gitlab.io/gitlab_support_readiness_gem/)
- [CHANGELOG](https://gitlab-support-readiness.gitlab.io/gitlab_support_readiness_gem/file.CHANGELOG.html)
