---
title: "Why are there noinspection comments"
no_list: true
---

## What are all the `noinspection` comments in the code?

(***If you were given this referred to this page in response to asking that question, please read this page for a thorough explanation.**
But if you just want to learn how to use Code Inspection effectively in JetBrains, please see the [Code Inspection main page](..)*)

### JetBrains is widely used

JetBrains is a powerful IDE, and is by far the industry leader in traditional "IDEs" (as opposed to all-purpose editors), with various surveys showing a significant percentage of developers using JetBrains IDEs (it is hard to get specific numbers, because most surveys split them into separate IDEs per ecosystem/platform/language such as RubyMine, Webstorm, etc., but compare these to multi-ecosystem editors such as VSCode, Vim, etc.).

Here's some various surveys showing usage of JetBrains editors:

- [StackOverflow 2023 Developer Survey](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment)
- [Ruby on Rails 2022 Community Survey](https://railsdeveloper.com/survey/2022/#what-is-your-preferred-editor)
- [JetBrains 2022 Developer Ecosystem Survey](https://www.jetbrains.com/lp/devecosystem-2022/ruby/#what-editor-ide-do-you-mostly-use-for-ruby-development-)
- [GitLab 2023 IDE/Editor usage (INTERNAL DOCUMENT LINK)](https://docs.google.com/document/d/1tITdhdkJm5xaPiPpXQ9wW1X6M3SAMhncJYaNmQfja70/edit)

### JetBrains supports powerful Code Inspection above and beyond what is provided by git hooks or CI

JetBrains IDEs include a powerful [Code Inspection feature](..) with inspections built into JetBrains IDEs, including type safety and other checks which are not provided by our standard static analysis tools such as RuboCop or ESLint.

This support can be a tremendous productivity boost for JetBrains IDE users, because you can get instant feedback on linting/type/etc. errors, without having to wait for LEFTHOOK pre-push hooks, or a CI pipeline to run and fail (a much longer and more tedious feedback loop).

### This feature makes GitLab team members and contributors who use it more efficient

There are multiple JetBrains IDE users who are GitLab team members, and there is an
active [internal `#jetbrains-ide-users` Slack channel](https://gitlab.slack.com/archives/CR08PTQ6T).

Therefore, on some teams with several JetBrains users, such as the Workspaces team, we invest
ongoing effort in keeping the [`Code Inspection`](..) for the feature clean and without any warnings/errors,
which means the "green check" at the top right of each file is useful, and if it's not there, we know
immediately that we have introduced some problem.

This approach also supports our mission of "Everyone can Contribute", because if a JetBrains external
contributor wants to contribute to an area of the code with curated `noinspection` comments, they can
do so without having to deal with any false positive warnings in the IDE, and trust that warnings they
see are likely due to problems which they themselves have introduced in their current coding session or MR.

### We must suppress false positives to make full use of this feature

However, sometimes they give false positives, and must be disabled with `noinspection` comments to
keep things clean, similar to `disable` comments in RuboCop, ESLint, or similar static analysis tools.

These false positives often indicate a bug or missing functionality in the IDE. Therefore, in these
cases, we will proactively report these to JetBrains, and track the corresponding issues in their issue tracker.

This tracking exists under [Tracked JetBrains Issues](/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/tracked-jetbrains-issues/), and the related
comments should all include the relevant issue entry as a reference. Once the underlying issues are
resolved and included in a new IDE release,
[the corresponding `noinspection` comments can be removed](../tracked-jetbrains-issues/_index.md#handling-of-issues-related-to-noinspection-comments).

But other `noinspection` comments are due to default JetBrains inspection rules we don't want to
enforce because we are intentionally making an exception to the default rule. An example of this is
warnings about class/variable/module/method/constant names being too long or too short.
One option would be to just change the settings for the inspection, for example to allow longer
names. However, this would require that everyone have these same overrides in their JetBrains
configuration, which we do not want to require or rely on, especially for external contributors.

### Not everyone has to use them, but please don't try to prevent others from using them

We also do not require that non-JetBrains users maintain these comments - the JetBrains users on the
team will take responsibility for maintaining them, adding explanatory comments/TODOs, tracking any
associated JetBrains issues, and removing fixed or obsolete ones.

We do request is that there are no
[requests from non-JetBrains users to remove these comments](https://gitlab.com/gitlab-org/gitlab/-/issues/409823),
unless the [JetBrains Issue](../tracked-jetbrains-issues/_index.md) tracking the comment has already been resolved.

While it may not be useful for folks not using JetBrains IDEs, it does provide benefits to JetBrains users to write
quality code by ensuring no such warnings are present, and it is in support of our values of Efficiency, Results,
and Diversity/Inclusion/Belonging.

If you are using a non-JetBrains IDE which has significant usage at GitLab, and it has similar support in that IDE, we encourage
you to create such documentation on its benefits and how they should be used and how will they be tracked.

Concerns about proliferation of such comments in our codebase for different editors are well-founded, and we take them seriously.
Thus, team members are encouraged to open issues inviting discussion to remove comments from an IDE which is not being actively used at GitLab, or for
JetBrains `noinspection` comments in areas of the code which are not being
actively maintained/curated.

In reality, these comments are currently restricted in scope in the `gitlab` codebase. Currently, as of
[this MR in July 2023](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125831), all `noinspection`
comments have been removed from the code except for within the `Workspaces` domain, which is
the only group actively using it.

But now that we have standardized this process and added
[handbook support for configuring and using JetBrains IDEs](../setup-and-config/_index.md)
, other team members and teams who are JetBrains users may also want to adopt this approach.
