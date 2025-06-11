---
title: "RubyMine"
---

## Overview

Website: <https://www.jetbrains.com/ruby/>

Best for: editing Ruby or Rails applications, which can include Javascript/Typescript and most other
web technologies.

## Common JetBrains Setup and Configuration

JetBrains IDEs are standardized, so much of the setup and configuration information applies to all IDEs, and can be found under [Common JetBrains Setup and Configuration](../setup-and-config/_index.md).

Specific config for RubyMine can be found in the sections below.

## Using Rubymine debugger for GitLab running under GDK

### Debugging `rails-web`

#### Note on Rails Puma binding

By default, the Rails [puma configuration template which GitLab uses binds to a socket](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/d948d5485e3f519688783dc92ad70d94f132e396/support/templates/puma.rb.erb#L44), instead of a TCP port.

[This MR](https://gitlab.com/gitlab-org/gitlab-development-kit/-/merge_requests/1693) added support for configuring the GDK to bind Rails puma to a TCP socket, and added support for Workhorse to use TCP ports instead of sockets, and [this JetBrains issue](https://youtrack.jetbrains.com/issue/RUBY-27404) added support for starting a socket-based Puma server in a Run Configuration.

See the [architecture documentation around components](https://docs.gitlab.com/ee/development/architecture.html#components) for more details on how GitLab Workhorse and Puma work together.

#### Setting up a RubyMine "Ruby" Run Configuration with puma using default socket binding

1. Make sure you have done `gdk stop rails-web` before each debugging session (and `gdk start rails-web` when you are done debugging)
1. In RubyMine, open the gitlab repo directory from `/path/to/gdk/gitlab` (Cloning gitlab and running it from a different directory won't work out of the box)
1. Go to `Run -> Edit Configurations` to set up a Rails Run/Debug config like this in RubyMine:
    - Name: `GitLab: rails-web`
    - Configuration:
      - Server: `Puma`
      - IP address: BLANK (delete `0.0.0.0`)
      - Port: BLANK (delete `3000`)
      - Environment: `development`
      - Environment Variables (Note: these are taken from the current GDK `Procfile`, as well as additional ones to prevent timeouts during debugging. They may become outdated):
        - `RAILS_RELATIVE_URL_ROOT=/;ACTION_CABLE_IN_APP=true;ACTION_CABLE_WORKER_POOL_SIZE=4;FIPS_MODE=false;GEO_SECONDARY_PROXY=0;GITLAB_RAILS_RACK_TIMEOUT=999999;GITLAB_RAILS_WAIT_TIMEOUT=999999;GITALY_DISABLE_REQUEST_LIMITS=false;PUMA_WORKER_TIMEOUT=99999999`
        - NOTE: The following values from the Procfile entry are omitted as they are not necessary:
            - `BUNDLE_GEMFILE`
            - `ENABLE_BOOTSNAP`
            - `RAILS_ENV`
1. Start the config in Run ("Play" ▶️ button) or Debug mode (at top right)

### Debugging `rails-background-jobs`

To debug services run as background jobs, you will need to set up debugging for `rails-background-jobs`, in addition to the `rails-web` debugger. The setup is similar, although you're connecting to the sidekiq process instead of puma.

1. Make sure you have done `gdk stop rails-background-jobs` before each debugging session (and `gdk start rails-background-jobs` when you are done debugging)
1. Go to `Run -> Edit Configurations` to set up a Ruby (NOT Rails) Run/Debug config like this in RubyMine:
    - Name: `GitLab: rails-background-jobs`
    - Ruby Script: `/Users/YOUR_USER/.asdf/installs/ruby/RUBY_VERSION/bin/sidekiq`
    - Working Directory `/Users/YOUR_USER/PATH_TO/gitlab-development-kit/gitlab/`
      - Environment Variables (Note: these are taken from the current GDK `Procfile`, they may become outdated): `SIDEKIQ_VERBOSE=false;SIDEKIQ_QUEUES=default,mailers,email_receiver,hashed_storage:hashed_storage_migrator,hashed_storage:hashed_storage_project_migrate,hashed_storage:hashed_storage_project_rollback,hashed_storage:hashed_storage_rollbacker,project_import_schedule,service_desk_email_receiver;SIDEKIQ_WORKERS=1;RAILS_RELATIVE_URL_ROOT=/;GITALY_DISABLE_REQUEST_LIMITS=false`
      - NOTE: The following values from the Procfile entry are omitted as they are not necessary:
          - `BUNDLE_GEMFILE`
          - `ENABLE_BOOTSNAP`
          - `RAILS_ENV`

## Configuring GDK database connection

First, follow the ["Access the database with a GUI"](https://docs.gitlab.com/ee/development/database/database_debugging.html#access-the-database-with-a-gui)
instructions to reconfigure postgresql under the GDK to run on localhost.

Then configure the develoment database:

1. Go to `File -> New -> Data Source -> Postgresql` (or from the `Databases` tab on the right border)
1. Enter a name: `gitlabhq_development@localhost`
1. Host: `localhost`
1. Port: `5432`
1. Authentication `User & Password`
1. User - leave blank
1. Password: leave default, shows `<hidden>`
1. URL (auto-calculated from the above fields): `jdbc:postgresql://localhost:5432/gitlabhq_development`
1. Download driver if needed.
1. Click `Test Connection`.

Then access the database:

1. Open the `Databases` panel from the right border
1. Click the Refresh button (circle arrows)
1. Expand to see tables/views/etc.

If you want to add more schemas from `config/database.yml`:

1. Go to `Database` tab
1. Right click on top level of database, and view `Properties` (or the "wrench" button)
1. Go to the `Schemas` tab
1. Select the schemas you want.

## Miscellaneous

- To enable "Navigate to Test" (<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>t</kbd>) for EE code, right click on `ee/spec` directory and choose "Mark Directory As...", "Test Sources".
