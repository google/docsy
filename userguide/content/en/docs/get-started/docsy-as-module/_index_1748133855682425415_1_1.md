---
title: "Common JetBrains Setup and Configuration"
no_list: true
---

## Overview

JetBrains IDEs are standardized, so much of the setup and configuration information applies to all IDEs, and is consolidated on this page.

Any setup and configuration and other info that is specific to individual IDEs will be found on these sub-page under [Individual IDEs](../individual-ides). If this is the case, a link will be provided to the relevant section in the specific IDE's sub-page.

## Getting Help

1. If you need help, ask in one of the [Chat Groups](../#chat-groups)!

## Install the IDE

1. Decide what IDE you need to use for the project you are working on:
    - [RubyMine](../individual-ides/rubymine) for Ruby/Rails/JS
    - [GoLand](../individual-ides/goland) for golang
    - [Webstorm](../individual-ides/webstorm) for pure-Javascript/Typescript.
    - Idea for JVM/Java/Kotlin
    - CLion for Rust
1. If you are an GitLab employee, you can request and obtain a [License](../licenses) for the IDE(s) you need to use.
1. Install [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/).
1. Use JetBrains Toolbox to install the IDE you need.

At this point, you should be able to run the IDE and open the project you need to work on. For basic tasks, most things "just work" by default out of the box - that's one of the nice things about using JetBrains IDEs!

**However, note that very large and complex projects such as the GitLab Rails monolith under RubyMine may an exception to this. Continue on with the rest of the instructions on this page for more details**.

## Indexes

The most important thing to do related to indexing is to set up the proper excluded folders. See the
[Set up excluded folders](#set-up-excluded-folders) section below.

### Indexing Overview

One of the things that makes JetBrains IDEs powerful is their proprietary indexing
technology, which indexes all of your project and dependency code, and
allows for powerful and near-instantaneous searches and navigation across the project.

However, when you first open a new project for the first time, or if you pull in significant updates to a project, it can take a while to update the indexes,
especially on a slower machine.

And for very large projects, such as the GitLab Rails monolith, which has
more than 2 *million* lines of Ruby code, and who knows how many millions of lines
of gem code dependency, the very first indexing can take a *very* long time, up to
15-20 minutes or more depending on your machine. However, after that initial indexing,
subsequent incremental indexing after pulling new changes or switching branches usually
takes no more than a minute or so.

As long as you've already [set up the proper excluded folders](#set-up-excluded-folders),
the best advice here is to just "be patient" - the good news is that it is only
required once, when you first open the project or pull in new changes. Use this opportunity
to take a little break, do a little stretching... 🧘🏼

### Shared Indexes

JetBrains does offer support for [Shared Indexes for RubyMine](https://www.jetbrains.com/help/ruby/shared-indexes.html) (and other IDEs), which have the potential to greatly reduce the indexing time for people setting up the GitLab project for the first time.

However, this seems to be an involved setup process. If you are interested in helping
set up and maintain shared indexes, please let us know in one of the
[Chat Groups](../#chat-groups)!

## Set up excluded folders

It's important to set up the excluded folders, otherwise indexing and searching will take much longer
than necessary.

This will be under `Settings -> Project Structure` in RubyMine and GoLand, and under
`Settings -> Directories` under WebStorm.

If you want to see a current example of the RubyMine excluded folders for the `gitlab` project,
you can see Chad's `gitlab.iml` module at
<https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/gitlab.iml>,
and search for `excludeFolder`.

Alternately, these would be included in the config if you use one of the "copy someone else's config"
Configuration approaches under [Configuration](#configuration).

## Set up test roots

You should [properly set up the test sources root directories](https://www.jetbrains.com/help/ruby/create-tests.html#mark_test_sources_root).

Ensure that you add both `spec` and `ee/spec` as test roots.

This has several effects, including making that `Cmd-Shift-T` "Go to Test Subject" action work to easily toggle back and forth between the subject file and test file.

You can review existing test roots under `Settings -> Project Structure`.

## Increase maximum heap size in memory settings

When working with the GitLab project, which is BIG, RubyMine can use a lot of memory when indexing/searching/etc. It's not unusual for memory usage to peak out at **up to 10 gigabytes or more of memory during indexing**, if it is allocated.

If you have the memory to spare on your workstation, it will help your performace to allocate a lot of memory. 12 gigabytes is a good start.

1. `Help menu -> Change Memory Settings`
1. Change `Maximum heap size` to `12000` Mib, or whatever you think you can allocate without otherwise impacting system performance. On a maxed-out MacBook pro with 64G of memory, allocating 12G should be fine.

## Open files in RubyMine from Terminal

This can be set up at the OS level so it works for all type of files. For example, to set up open all .rb files:
1, Open a `*.rb` file in `Finder`
2. Right click and select `Get Info`
3, Expand `Open With`
4. Select `RubyMine.app`
5. Select `Change All...`

## Configuration

### UPDATE 2025-05

Toolbox Enterprise has been renamed to [IDE Provisioner in the IDE Services suite](https://www.jetbrains.com/ide-services/ide-provisioner/):

> *Propagate global IDE settings*
>
> *With IDE Provisioner, you can define and propagate global IDE settings to all instances of the IDEs running in your organization. Set custom VM options, limit maximum heap size, define default code styles, and manage other properties on a per-profile, per-team, or company-wide basis.*

### UPDATE 2024-04

JetBrains has pointed us to this issue to follow their progress on allowing team settings sharing: [Make Settings Sync/new separate feature suitable for team settings sharing](https://youtrack.jetbrains.com/issue/IDEA-309002)

### UPDATE 2023-12

Based on demo previews, it looks like the new [Toolbox Enterprise](https://www.jetbrains.com/ide-services/ide-provisioner/) features will finally provide a viable and easy way to share configuration across a team. JetBrains has said that the features we need should be available sometime around mid-2024. However, the additional license cost of this may be prohibitive.

### UPDATE 2023-11

With the deprecation of the Settings Repository feature, JetBrains has acknowledged that
[there is currently no supported, non-deprecated way to share settings among team mambers](https://youtrack.jetbrains.com/issue/IDEA-309002).
This is the current description of that issue:

> The new Settings Sync works with the JetBrains account; it makes this solution inappropriate for team settings sharing when it's necessary to share only certain settings (code style, color schemes, etc) between team members (they have their own JB Accounts).
>
> We already have the Settings Repository plugin, but it can be used only with third-party sources, and we don't maintain this plugin for now.
> The import/export settings feature is not automated enough.
> This feature may be implemented along with making profiles for Settings Sync.

On the [`#jetbrains-ide-users` internal Slack channel for GitLab team members](https://gitlab.slack.com/archives/CR08PTQ6T), JetBrains has indicated that:
*"one of the possible solutions should be implemented in the scope of [Toolbox Enterprise](https://www.jetbrains.com/ide-services/ide-provisioner/), but AFAIK, there is no ETA for now"*

*However, if you are only wanting to sync your own settings to a remote git repo and not necessarily share them, that's still possible.*

Since the deprecation of the Settings Repository plugin (and the fact that it seems to have some bugs they aren't planning to fix),
the [Settings Sync feature](https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#IDE_settings_sync) seems to be the choice to do this,
which is listed below as "JetBrains-supported option 1: Settings Sync"

TODO: So, all of the sections below could use a reorg and rewrite in light of this new information.

### TL;DR

If you want to get your JetBrains (RubyMine) configured to work (and specifically
work with GitLab):

1. Your best bet is probably "Manual Option 1: Manually configure everything".
   This will take maybe an hour or so, but you'll learn your way around the settings.
1. If you are in a hurry, consider "Manual option 2: Manually zip and copy IDE and Project
   config folders" and ask on [Chat Groups](../#chat-groups) for a zip of someone's config
   folders
1. If you just want to backup or transfer your existing config, consider
   "JetBrains-supported option 1: Settings Sync"
1. If you have aspirations to be a JetBrains power user, or are the type of person who
   wants to keep all your configs under source control, see
   "JetBrains-supported option 2: Settings Repository" and
   "Manual option 3: Keep your `.idea` folder under source control".

### Overview

***NOTE: This Configuration section is a work in progress, especially since the
options for managing/sharing configs have changed in recent versions of JetBrains.
Please feel free to contribute any updates you may have.***

Although most basic functionality works out of the box in JetBrains IDEs, if you work on a project with very specific and strict rules around code style and formatting (such as GitLab)
you may need to carefully curate your IDE configuration to match the requirements of the
project. For example, matching all code formatting and linting rules defined by the project.

Ideally, you would just want to import a pre-existing configuration that someone else
is already curating and maintaining to keep it up-to-date with the project.

Unfortunately, this isn't as easy as it should be, and this is one of the areas that
JetBrains IDEs could use a lot of improvement, as is evidenced by the 5 different approaches
documented below.

This section will attempt to provide some solutions for this. But if you are new to
JetBrains, please feel free to ask for guidance and advice in the [Chat Groups](../#chat-groups).

### "IDE" vs. "Project" config

JetBrains stores config in two ways: "Stored in IDE" and "Stored in Project":

- The "IDE" settings are stored under your home directory, in a directory like
`/Users/cwoolley/Library/Application Support/JetBrains/RubyMine2023.2`
- The "Project" settings are stored in the `.idea` folder in the root of your project.

And some types of config allow you to choose which of those to use.  It's probably better to store everything possible in the project.

Here's how you set that up:

1. `Settings -> Editor -> Code Style -> Scheme -> "Project"`
1. `Settings -> Editor -> Inspections -> Scheme -> "Project Default"`
1. `Settings -> Editor -> File and Code Templates -> "Project"`

### Manual option 1: Manually configure everything

You can manually go into settings and make all the changes yourself.

Chad Woolley maintains documentation on how to manually configure
JetBrains IDEs to work in an optimal and compatible way, specifically the GitLab monorepo.

If you have some time, this can be the simplest approach, and also lets you have more control
than the other approaches of copying entire configs.

If you want to do this, you can just follow these instructions - it should
take maybe a half hour to an hour.

- [Chad Woolley's JetBrains IDE setup notes](https://gitlab.com/cwoolley-gitlab/cwoolley-gitlab/-/blob/main/gitlab-workstation-setup-notes.md#jetbrains-ide-setup)
- [Chad Woolley's curated list of JetBrains overridden settings](https://github.com/thewoolleyman/workstation/blob/master/README.md#jetbrains-overridden-settings)

These are a bit scattered as they have evolved over multiple years, projects, and IDE versions.
Chad hopes to migrate and consolidate all these instructions to this page and
sub-pages page real soon™️.

### Manual option 2: Manually zip and copy IDE and Project config folders

Ask someone who already has the project configured to give you zipped copies of their
IDE and Project config folders listed above. This *SHOULDN'T* contain any personal
information other than perhaps dictionary override entries, but some plugins might
store personal info in their own configs.

You should also ensure you are both on the exact same version of the IDE product.

Then you can backup your own folders (just in case), close the IDE,
and unzip theirs to the same place. This should theoretically give you all their settings.

Also, Chad Woolley keeps his current `.idea` Project Config folder for the
`gitlab` project committed and updated in source control (see instructions on how
you can do this in the next section).

You can clone it or copy any files from this config here:
<https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/tree/master/dotidea>

### Manual option 3: Keep your `.idea` folder under source control

If you want to keep your Project (not IDE) config under source control, you can
do this manually. See Chad's instructions here:

<https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/README.md#project-level-config>

### JetBrains-supported options

JetBrains provides three different options for sharing settings, which are
described on the following page (using RubyMine as an example):

<https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html>

1. Settings Sync
1. Settings Repository (DEPRECATED)
1. Settings Export/Import

Each of these have their tradeoffs, see the following sections for details.

#### JetBrains-supported option 1: Settings Sync

NOTE: With the deprecation of Settings Repository, this is the only option supported by
JetBrains which allows you to store your settings in a git repo (see [`UPDATE 2023-11`](#update-2023-11) note above).

This approach is described here: <https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#IDE_settings_sync>

~~The main downside of this approach is that since this is done through your JetBrains account,
there appears to be no way to share with other team members. So, you'll have to one of the other
approaches if you want to share your settings with someone else, or have them share theirs with you.~~

Update: As of RubyMine 2022.3, this (like the Settings Repository) also stores the config in a local git repo on disk
in the [IDE Configuration Directory](https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html#config-directory), which on MacOS is at:
`/Users/cwoolley/Library/Application Support/JetBrains/<product><version>/settingsSync`.

You can also manually manage pushing the repo to a remote, if you want to back it up outside your machine,
or let other team members view/copy individual config files.

Note that the downside of this is that is still only manages IDE-level config, not Project-level
config in the `.idea` folder of the project. If you want to back up your `.idea` folder too, you'll have to
manage that manually as described above.

#### JetBrains-supported option 2: Settings Repository

NOTE: This option is now deprecated and unsupported by JetBrains (see [`UPDATE 2023-11`](#update-2023-11) note above).
You should use the Settings Sync option above as it is supported.

This involves syncing your IDE-level (not-project level) config to a git repo.

This approach has a few downsides:

1. It only manages IDE-level config, not project-level config
1. It's complex to set up, involving setting up a custom repo with HTTPS credentials
1. It doesn't support all git features (e.g. `.gitignore` seems to be ignored)
1. It doesn't seem well-supported by JetBrains, especially since they moved it out of being
   bundled with the IDE and made it a plugin.

The upside of it is that you can keep your IDE-level config under source control in your own
repo, and not in JetBrains cloud as is done with "Settings Sync" above. This also means you can share it yourself as needed.

Here's the docs:

1. It's mentioned as the second approach here: <https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html>
1. ...which links here to an old version of the docs for the real instructions: <https://www.jetbrains.com/help/ruby/2022.2/sharing-your-ide-settings.html#settings-repository>
1. ...and you can also see some instructions Chad has written around it here: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/README.md#ide-level-config>

#### JetBrains-supported option 3: Export/Import your settings

This approach is documented here: <https://www.jetbrains.com/help/ruby/sharing-your-ide-settings.html#import-export-settings>

It is found under `File -> Manage IDE Settings -> Import/Export Settings`

I (Chad) haven't tested this approach much. I *THINK* it only does IDE-level settings.

Please feel free to update this section if you experiment with this and learn more details.
