---
title: "Tracked JetBrains Issues"
no_list: true
---

## Overview

This is a list of all JetBrains issues which are relevant to GitLab, and we want to follow/upvote
in hopes that they eventually get fixed.

Here's the main issue trackers to look for existing issues before reporting a new one:

- RubyMine: <https://youtrack.jetbrains.com/issues/RUBY>
- GoLand: <https://youtrack.jetbrains.com/issues/GO>
- WebStorm: <https://youtrack.jetbrains.com/issues/WEB>

Each issue we track should have a `H3` section under the [Open Issues](#open-issues) section below.
This could be in table format, but Markdown tables are hard to maintain, and headers have automatic anchor links.

Here's a template example:

```markdown
### RUBY-30422

- Title: Rename can be invoked in empty string shared_examples
- Link: https://youtrack.jetbrains.com/issue/RUBY-30422/Rename-can-be-invoked-in-empty-string-sharedexamples
- Available In: 2022.3 (if the issue is closed, omit this line if the issue is still open)
- Notes: (anything for easy searching within this page, e.g. mention `noinspection` if this is a
  bug for a false positive `noinspection` comment.
```

When an issue is fixed, verify it yourself, and move the issue's entry from the [Open Issues](#open-issues) to the [Closed Issues](#closed-issues) section for reference by people who may still be on an older IDE version. It can be deleted after it has been fixed for one or two IDE releases.

## Handling of issues related to `noinspection` comments

Many of these issues are related to the [suppression of Code Inspection false positives via `# noinspection ...` comments](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/code-inspection/#suppressing-false-positives-with-noinspection-comments)

When an issue related to `noinspection` is resolved and included in a released version of the IDE:

1. Search the codebase for the corresponding `noinspection` using the issue id (e.g. `RUBY-25400`)
1. Remove the `noinspection` comment and run `Inspect Code` on the file to ensure it is fixed.
1. Move the issue's entry from the [Open Issues](#open-issues) to the [Closed Issues](#closed-issues) section as described above.

## Open Issues

Keep these sections sorted alphabetically. They are headers so that they can be directly linked.

### IDEA-337625

- Title: DIRC checksum mismatch error in Settings Sync
- Link: https://youtrack.jetbrains.com/issue/IDEA-337625
- Notes: The Settings Sync feature currently does not work. This is problematic because [JetBrains has also deprecated the previous alternative Settings Repository Plugin](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/setup-and-config/#update-2023-11)

### RUBY-25400

- Title: Programmatically defined constants always produce 'Unresolved reference' error
- Link: <https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-7812554.0-0>
- Notes:
  - Requires `# noinspection RubyResolve`
  - UPDATE 2023-07-10: Got a response from JetBrains here: <https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-7813280.0-0> stating limitations and potential workarounds.
  - UPDATE 2023-01-06: This still happens in some cases, notably in the Declarative Policy DSL. Asked if we can get a specific issue to follow for this case:
    https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-8744732.0-0

### RUBY-25600

- Title: Code style: compatibility with Rubocop's Layout/MultilineOperationIndentation
- Link: https://youtrack.jetbrains.com/issue/RUBY-25600
- Notes:
  - This issue makes it impossible to have RubyMine autoformat match GitLab's RuboCop settings, and we have decided that we do not
    want to change the default settings.
  - Please upvote (thumbs-up) this issue to bring attention to it!

### RUBY-31542

- Title: Cannot resolve attributes on ActiveRecord model which is not in standard location
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location>
- Notes:
  - Requires `# noinspection SqlResolve` or sometimes maybe `# noinspection RubyResolve` (e.g. if it's indirectly accessed via Rspec).
  - UPDATE 2023-07-10: Got a response from JetBrains here: <https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location#focus=Comments-27-7813387.0-0> providing some information and requesting more info and follow-up
  - UPDATE 2024-01-06: JetBrains marked the issue resolved, but we are still seeing errors which seem related. See comment here:
    https://youtrack.jetbrains.com/issue/RUBY-31542/Cannot-resolve-attributes-on-ActiveRecord-model-which-is-not-in-standard-location#focus=Comments-27-8744712.0-0

### RUBY-32287

- Title: RubyResolve error when calling ActiveRecord dynamically defined attribute methods from within an `if` block on ActiveRecord lifecycle methods
- Link: <https://youtrack.jetbrains.com/issue/RUBY-32287>

### RUBY-32288

- Title: "Go To Declaration" shows libraries from gems in non-current SDK
- Link: https://youtrack.jetbrains.com/issue/RUBY-32288
- Notes:
  - The root of this problem is really that we don't want rubymine to create modules for all our vendored gems under `gems`,
    but it always prompts by default to make modules. Then this causes a related problem where the interpreters for these modules get
    out of date.
  - See this comment for some workarounds: https://youtrack.jetbrains.com/issue/RUBY-32288/Go-To-Declaration-shows-libraries-from-gems-in-non-current-SDK#focus=Comments-27-8922166.0-0

### RUBY-32301

- Title: Unable to find associated model/association in GitLab application
- Link: https://youtrack.jetbrains.com/issue/RUBY-32301
- Notes:
  - This is currently un-resolvable due to the amount of metaprogramming and indirection involved with how we mix in the `EE` modules.
  - Comment from JetBrains on the issue:
    *"...it looks like RubyMine is unable to understand the relationship here due to the alternative definition approach with `prepended` from `ee/app/models/ee/clusters/agent.rb`. `Prependable` seems to be a custom approach to prepending code in GitLab,
    and we don't have any recognition of it. Unfortunately I don't have any workarounds for this right now, but we can leave the ticket open in case we think of something."*

### RUBY-32336

- Title: Add support for declarative_policy
- Link: https://youtrack.jetbrains.com/issue/RUBY-32336
- Notes:
  - Extensive metaprogramming in the declarative_policy gem causes 'Unresolved reference' errors
  - See also https://youtrack.jetbrains.com/issue/RUBY-25400/Programmatically-defined-constants-always-produce-Unresolved-reference-error#focus=Comments-27-8805699.0-0 :
    - "I'm afraid there is no existing issue. I think this is something that we can't really address without implementing custom support for this library, just due to how
      it has written its own DSL. We'll create an issue requesting support for this library (so that you can mention it in your comments), but there isn't any timeframe
      on implementing it right now sorry."

### RUBY-32975

- Title: Update unconventional name inspections to match RuboCop further
- Link: https://youtrack.jetbrains.com/issue/RUBY-32975
- Notes:
  - Requires `# noinspection RubyClassModuleNamingConvention`
  - Required to allow 2-character module names like `EE`

## Closed Issues

### RUBY-31540

- Title: Invalid RailsParamDefResolve warning when table name does not match class name
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31540/Invalid-RailsParamDefResolve-warning-when-table-name-does-not-match-class-name>
- Notes:
  - Requires `# noinspection RailsParamDefResolve` and other noinspection comments.
  - This is likely due to our non-standard naming of the `Clusters::Agent` model, where
    the table is named `cluster_agents` and must be overridden with
    `self.table_name = 'cluster_agents'`. This also requires overrides and non-standard
    handling in GraphQL mutations. We should consider renaming this table or model to match
    standard rails naming conventions.

### RUBY-31544

- Title: Cannot find fixtures defined with `RSpec::Parameterized::TableSyntax`, causes `RubyResolve` warning
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31544/Cannot-find-fixtures-defined-with-RSpecParameterizedTableSyntax-causes-RubyResolve-warning>
- Notes: Requires `# noinspection RubyResolve`

### RUBY-32041

- Title: Mismatched argument type inspection false positive on RSpec parameterized table syntax
- Link: <https://youtrack.jetbrains.com/issue/RUBY-32041>
- Notes: Requires `# noinspection RubyMismatchedArgumentType`.
  Note that this is different than <#ruby-31544> (<https://youtrack.jetbrains.com/issue/RUBY-31544/Cannot-find-fixtures-defined-with-RSpecParameterizedTableSyntax-causes-RubyResolve-warning>), which appears to be fixed in the latest EAP.
  RUBY-32041 seems to be specific to using `Array` types with `RSpec::Parameterized::TableSyntax`.

### RUBY-31543

- Title: Fixtures declared with `let_it_be` from `test-prof` gem cannot be found, and give `RubyResolve` warning
- Link: <https://youtrack.jetbrains.com/issue/RUBY-31543/Fixtures-declared-with-letitbe-from-test-prof-gem-cannot-be-found-and-give-RubyResolve-warning>
- Notes: Requires `# noinspection RubyResolve`
