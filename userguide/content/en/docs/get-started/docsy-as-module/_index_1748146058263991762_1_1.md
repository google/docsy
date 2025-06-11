---
title: "Code Inspection"
simple_list: true
---

## Code Inspections

(***If you are here to ask "What are all the `noinspection` comments in the code?", please read the ["Why are there `noinspection` comments"](why-are-there-noinspection-comments/) page for a thorough explanation.**
But if you just want to learn how to use Code Inspection effectively in JetBrains, this is the page you're looking for...*)

One of the nice features of JetBrains IDEs is "Inspect Code" (`Code -> Inspect Code`).

See a description of this feature here: <https://www.jetbrains.com/help/ruby/running-inspections.html>

The sections below give more details on how to take full
advantage of this feature.

## Keeping a clean "Inspect Code" and "green check"

This allows you to run all code inspections, including project-configured supported linters
such as RuboCop/ESLint, as well as custom IDE inspections such as type safety, potential bugs,
etc., which will show up in the "Problems" pane after you run "Inspect Code".

In addition to the "Problems" pane, you get instant feedback in the editor with the problems
being underlined, as well as a summary of all problems with icons in the upper-right of each file.
All of these can be hovered over with the mouse to give you more options to deal with the errors,
including automatically fixing them in some cases.

And if you have no problems in the file, you get a "Green Check" at the top right of the file, as
a constant and instant feedback.

These can be powerful time-saving tools to catch problems immediately, without having to wait for
a pre-push hook like "LEFTHOOK" to catch them, or ever worse, having to wait for CI to catch them.

## "Next Error" shortcut

**PRO TIP:** If you set
`Settings -> Editor -> Code Editing -> Error Highlighting -> The 'Next Error' action goes through`
to the `"All Problems"` selection, you can use `F2` to cycle through all errors in the file,
then use `Alt-Enter` and arrow keys to show the options you have for resolving the error.

## Suppressing false positives with `noinspection` comments

Sometimes, though, there are "false positive" problems reported by "Inspect Code". These are
usually due to some IDE bug or limitation, or sometimes due to incorrect type annotations
in a library.

Whatever the cause, it's good to suppress these false positives, because:

1. They cause noise in the "Problems" pane, and have to be ignored. Or in the case of a file with
   no other real problems, cause the "Problems" pane to pop up when it otherwise would not.
1. They prevent the nice "Green Check" from showing up in a file with no other real problems.
1. For JetBrains users who new to that area of the code, they don't have a way to know if they are
   a legit problem they should consider fixing or not.

The way you suppress these false positives is with `noinspection ...` comments: <https://www.jetbrains.com/help/ruby/disabling-and-enabling-inspections.html>

If you use
`F2` "Next Error" then right arrow, you can automatically add the correct `noinspection ...` comment to ignore the problem. However,
you will have to manually add a space after the `#` to avoid a RuboCop
warning in the `gitlab` project.

Use the following process to automatically add a `noinspection` comment:

1. Either hit `Option-Enter` while on the warning line in the code (after pressing `F2` to find it),
   or else in the "Inspect Code" `Problems` pane report right-click on the error.
1. In the menu that comes up, find the `Suppress for statement` option and click it.
1. Note that there is currently a bug that doesn't put a space after the `#` comment in Ruby, you'll have to add one to avoid a rubocop error (TODO: Open an issue for this against RubyMine)
1. This enables you to have a nice, clean report and green check with no false positives :)

## Each `noinspection` should be accompanied by an explanation or link

These `noinspection` comments might confuse some non-JetBrains users.

Therefore, each of these comments should be accompanied by a comment explaining why it
was needed, with a reference to any supporting information.

*If it was needed due to a JetBrains bug or limitation, you can reference the specific entry on the
[Tracked JetBrains Issues](../tracked-jetbrains-issues) page*. If one doesn't exist yet, you should:

1. Open an issue against JetBrains and add it to that page (this is preferred).
1. Or, if you don't have time to identify or open an issue against JetBrains, leave a `TODO:` link pointing to that page, and
   indicating that a JetBrains issue should be identified or opened at a later time.

## Each `noinspection` and explanation should be a one-liner

All `# noinspection - <some link or explanation>` comments should be on a single line.

This is because we want to avoid the possibility of deleting an obsolete/fixed `# noinspection` line
but forgetting to delete the separate associated comment line.

This should be done consistently, even if there needs to be an associated `# rubocop:disable Layout/LineLength`,
on a separate line (because that will cause a separate RuboCop warning if it is left in while no longer
necessary).

Other options considered:

- We could use a URL shortener service, but that makes people concerned about the security of clicking
on links with an unknown destination.
  [We did discuss and reject in the past the possibility of an internal URL shortener](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/861).
- We could leave some of the comment without an explanation of link, but that leaves us with the original
  problem of people not understanding their purpose, and having to manually address repeated questions
  around them, rather than people discovering the answer themselves in this section.

## Using `Inspect Code` with custom scopes

One way you can make Code Inspections (and other JetBrains operations) faster and more powerful is through
the use of *custom scopes*

If you curate a custom "Scope" which only selects the files related to the feature you are currently working on, you can
also use this report to find all warnings/errors in any of those files.

Here's a quick list of steps to set this up (TODO: add more details/links):

1. Ensure you have all the linting plugins enabled and configured: rubocop, eslint, prettier (search for these in the Preferences search, some are enabled by default)
1. In Preferences -> Editor -> Code Editing -> Error Highlighting section -> Change `The 'Next Error' action goes through` to `All problems`
1. Then you can see all the highlighting in the current file by default.
1. Press `F2` (next error) to cycle through all errors in the current file. Press `Option+Return` while on the error to open a menu of possible fixes.
1. To check multiple files, you can use the `Inspect Code` function (Cmd-shift-A -> "Inspect Code")
   and pick an individual file or custom scope to inspect.
1. You can also set up a custom scope to only include the files for the Feature or area of code you are working on
    1. Preferences -> Appearance and Behavior -> Scopes
    1. `+` to add a scope and give it a name (e.g. `remote_dev`)
    1. Use the Include/Exclude/Recursively buttons to define what files should be included in the scope.
    1. Here's a current example of the `remote_dev` scope definition which could be shared with other team members: `file[gitlab]:ee/lib/remote_development//*||file[gitlab]:ee/spec/factories/remote_development//*||file[gitlab]:ee/spec/lib/remote_development//*||file[gitlab]:ee/app/services/remote_development//*||file[gitlab]:app/models/remote_development//*||file[gitlab]:ee/app/graphql/mutations/remote_development//*||file[gitlab]:ee/app/graphql/resolvers/remote_development//*||file[gitlab]:ee/app/graphql/types/remote_development//*||file[gitlab]:ee/app/models/remote_development//*||file[gitlab]:ee/spec/graphql/types/remote_development//*||file[gitlab]:ee/spec/models/remote_development//*||file[gitlab]:ee/spec/services/remote_development//*||file[gitlab]:ee/app/finders/remote_development//*||file[gitlab]:ee/spec/features/remote_development//*||file[gitlab]:ee/spec/support/shared_contexts/remote_development//*||file[gitlab]:ee/app/graphql/ee/types/user_interface.rb||file[gitlab]:ee/app/graphql/resolvers/concerns/remote_development//*||file[gitlab]:ee/app/graphql/resolvers/projects/workspaces_resolver.rb||file[gitlab]:ee/app/graphql/resolvers/users/workspaces_resolver.rb||file[gitlab]:ee/spec/requests/api/graphql/mutations/remote_development//*||file[gitlab]:ee/spec/requests/api/graphql/remote_development//*||file[gitlab]:ee/spec/finders/remote_development//*||file[gitlab]:ee/app/assets/javascripts/remote_development//*||file[gitlab]:ee/spec/frontend/remote_development//*||file[gitlab]:ee/spec/graphql/api/workspace_spec.rb`
    1. You can also share the XML file for the directly, it will be under `.idea/scopes/SCOPE_NAME.xml`.
    1. Here's Chad's current examples of two scopes related to Workspaces:
       1. All remote dev files: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/scopes/remote_dev.xml>
       1. Only remote dev services and lib files: <https://gitlab.com/jetbrains-ide-config/jetbrains-ide-config-gitlab/-/blob/master/dotidea/scopes/remote_dev_services___lib.xml>
