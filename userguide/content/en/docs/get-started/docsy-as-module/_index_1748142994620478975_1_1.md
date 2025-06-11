---
title: "JetBrains IDEs"
simple_list: true
---

## Sub-pages

See the sub-pages for information on configuration and usage of
JetBrains IDEs in general, and for specific usage of IDEs.

## Overview

JetBrains offers a [suite of powerful integrated development environments(IDEs)](https://www.jetbrains.com/products/)
for all major software development ecosystems.

While they have a somewhat steep learning curve, JetBrains IDEs have many benefits which can make the investment worth it:

1. **Common UI**: Although they are separate applications, each IDE shares a common UI and controls, which allows you to
   easily switch between them without re-learning UX or keybindings.
1. **Powerful proprietary features**: The proprietary support for refactoring, indexing, searching, type checking, code navigation, etc., especially
   for languages without official language server support, is often much more powerful and faster than what is available
   from other editor ecosystems.
1. **Works out of the box**: Since they are language/ecosystem specific, many features work "out of the box", without the
   need to find, install, or configure any custom plugins or extensions. For example, ESLint and RuboCop have native
   support, with no plugins required. However, "power users" or complex projects
   will often want to customize their configurations.
1. **Curated plugin ecosystem** The JetBrains plugin ecosystem is (subjectively) more "curated" than other editor ecosystems.
   Most important tools which are not built into the IDE have officially supported plugins provided by JetBrains
   (e.g. VueJS, Prettier, NodeJS, etc.), and most popular non-JetBrains plugins only have one or a small number to choose from.
   This is in contrast to plugin ecosystems such as VS Codes, where there can be dozens of different plugins for each key tool
   or library, without a clear way to choose between them, and sometimes they will conflict with each other in keybindings or
   behavior.

JetBrains IDEs are widely used by many developers. The actual usage numbers are often hard to interpret,
because most surveys and polls compare each individual IDE (e.g. RubyMine vs. PyCharm vs. IDE) against
other non-specialized editors (e.g. vim, emacs, VS Code). But, based on recent surveys,
a rough estimate is that about 15% of professional software developers today use one or more JetBrains IDEs.

## Setup and Configuration

See the [Common JetBrains Setup and Configuration](setup-and-config) page for instructions on installing and configuring JetBrains IDEs.

## Recommendation

**Please do not use personal access tokens (PAT) on plug-ins for security reasons. For GitLab Duo, please use an API token with scope ai_features**

## Debugging

See the following IDE-specific pages for tips on debugging:

- [RubyMine debugging](individual-ides/rubymine#using-rubymine-debugger-for-gitlab-running-under-gdk)

## Keymaps

There's a lot of keybindings in JetBrains IDEs. Here's a list for RubyMine: <https://www.jetbrains.com/help/ruby/mastering-keyboard-shortcuts.html>. You can find the ones for their other IDEs too.

But if you only memorize one keyboard shortcut in JetBrains, make it this one:

- "Find Action": `Cmd-Shift-A" (`Ctrl-Shift-A` on Windows/Linux)

This will let you find a command and execute it, open a tool window, or search for a setting
just by typing its name, and you can also see the menu location and shortcut (if defined) next to it.
It is similar to "Command Palette" (`Cmd-Shift-P`) in VS Code.

Although it is a good practice to learn the default keymaps, you will probably want to
customize some of your keymaps. See the [Configuration](setup-and-config/#configuration) section
for details and examples on how to configure your own keymap additions/overrides, or copy someone
else's.

## Code Inspections

One of the powerful and productivity-enhancing features of JetBrains IDEs is
[Code Inspections](https://www.jetbrains.com/help/ruby/running-inspections.html)

See more details at [Code Inspection](code-inspection)

## Tracked JetBrains Issues

We keep a list of all JetBrains issues which are relevant to GitLab, and we want to follow/upvote
in hopes that they eventually get fixed.

See the list here: [Tracked JetBrains Issues](tracked-jetbrains-issues)

## Getting Help

If you need help, ask in one of the [Chat Groups](#chat-groups)!

## Chat Groups

- [`#jetbrains-ide-users` internal Slack channel for GitLab team members](https://gitlab.slack.com/archives/CR08PTQ6T).
- [`#ext-jetbrains-gitlab-support`] shared Slack channel for JetBrains and [GitLab team members](https://gitlab.slack.com/archives/C05KXC04AAX). This is a private channel and you can request access in the `#jetbrains-ide-users` channel.

## Licenses

If you are a GitLab team member, see the [Licenses](licenses) page for details on how to get
JetBrains IDE licenses.
