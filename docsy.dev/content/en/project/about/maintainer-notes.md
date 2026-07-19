---
title: Maintainer notes
description: Notes for Docsy maintainers
aliases: [contributing, ../contributing]
cSpell:ignore: hugo creatordate lycheecache
---

For our main contributing page covering license agreements, code of conduct and
more, see [Contributing][]. This page is for **maintainers only**.

## Content placement

Keep project content DRY by writing each fact in the artifact whose purpose and
audience it serves. Each artifact links to the more detailed ones rather than
restating them:

- **[Changelog][]**: a lean record of _what changed_, for developers who want a
  quick overview. No upgrade advice, implementation detail, or background.
  Entries link to the release report for details and cite a change's key issues
  — PRs only when there is no key issue, such as for contributor credit.
- **Release and upgrade blog posts**: what's new, what to watch out for, and
  actionable upgrade guidance — the historical narrative. Link to the site docs
  for current behavior and reference detail. Don't enumerate PRs and issues;
  link an open tracker only where it adds follow-up context. Upgrades are a
  chore, so keep posts maximally actionable yet lean: the release summary reads
  like a selective table of contents — a link per section with a clause of
  guiding glue — and each fact appears in one section, its home.
- **Site docs** (`docs/`): Docsy _as it is now_. Minimal historical references
  or links to issues and PRs.
- **[Release notes][] and [milestones][]**: the exhaustive record — generated
  release notes list every PR, PRs link their motivating issues, and the release
  milestone gathers the issues resolved. Authored artifacts link to these rather
  than reproducing the enumeration.
- **Test and code comments**: implementation rationale and regression
  background.

## PR descriptions

Generally speaking, a PR opening comment should be a Markdown list that explains
the “why” behind the changes, and at a very high level what was changed. Start
each item with a verb in the present tense, 3rd person singular.

PR authors are _encouraged_ to flag the **scope of changes** when a PR touches
Docsy's [public customization surface][public] -- especially for [breaking
changes][breaking change] -- to help reviewers and release-time audits. For
example:

```markdown
- Scope: breaking (removal), user-facing (new)
```

Suggested scope labels (use one or more):

- **breaking**, **user-facing**, **internal-only**, **docs-only**.

Optionally qualify with **kinds** in parentheses, mapping to release-blog and
changelog sections: **new**, **change**, **fix**, **removal**, **deprecation**.

The release-time audit (see [Release-prep audit](#release-prep-audit)) is the
source of truth for what gets documented; PR-level scope labels are a hint, not
a substitute.

## Hugo versions

The repo tracks two distinct Hugo versions, as documented below. Their
declarations, synchronization requirements, and relative-version constraints are
guarded by [test:hugo-versions](#test-suites).

Only current-state pages — docs and the changelog's
[official support](/project/about/changelog/#official-support) section — render
these versions live, via the `hugoMinVersion` site param and the `hugo-version`
shortcode. Blog posts are historical snapshots and render versions
time-insensitively: a post that renders one of these version params freezes it
in its front matter, so updating the post (say, for a patch release) means
editing one field. (Version literals in narrative text are already
time-insensitive.) Page params take precedence over site params, so the same
`{{%/* param hugoMinVersion */%}}` call is frozen in a post and live in docs.
Guarded by [test:hugo-versions](#test-suites).

### Minimum Hugo version

Docsy declares the minimum Hugo version required to support the features that
Docsy provides and to cover important security fixes.

This version is declared in three places that must agree:

- [theme/theme.toml][] `min_version` (canonical source)
- [theme/hugo.yaml][] `module.hugoVersion.min`
- [docsy.dev/config/_default/hugo.yaml][] `params.hugoMinVersion`, which feeds
  the requirement statements in user-facing docs (via
  `{{%/* param hugoMinVersion */%}}`) and, through the `&hugoMinVersion` anchor,
  docsy.dev's own `module.hugoVersion.min`.

Raising the minimum is a breaking change for theme users, only done to support
new features or security fixes. To validate that a Docsy site actually builds
with Hugo pinned to the declared minimum, run [test:smoke](#test-suites).

### Officially supported Hugo version {#official-hugo-version}

The Hugo version that Docsy [officially supports][] is pinned as the
`hugo-extended` dev dependency in [docsy.dev/package.json][].

This version is generally kept in sync with the latest Hugo release; to update
it, run:

- `npm -C docsy.dev run update:hugo` for the latest
- `npm -C docsy.dev install -DE hugo-extended@X.Y.Z` for a specific version

Docs render this version live through the `hugo-version` shortcode
(`hugo.Version`): docsy.dev builds always run the pinned Hugo.

## Test suites

From the repo root:

| Script               | Role                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `test:fixture-site`  | Fast, offline checks over minimal monolingual fixture sites — paths docsy.dev can't cover           |
| `test:hugo-versions` | Fast, offline checks of the [Hugo versions](#hugo-versions) declarations and constraints            |
| `test:smoke`         | Slow, network-bound; builds a site from GitHub several ways (NPM, Hugo module, clone, minimum-Hugo) |
| `test:tooling`       | Unit tests for repo scripts                                                                         |
| `test:website`       | Full docsy.dev checks: format, links, hugo-build, alt-site, md-output, and favicon tests            |

All but `test:smoke` run in CI; smoke tests are run manually for PR-branch
validation (they auto-target the current branch's GitHub upstream).

The md-output and favicon tests compare built output against committed golden
files. When a golden test reports intended drift, run `npm run update:goldens`
to rebuild the site and refresh both suites' goldens, then review the diff and
commit it.

## Link checking and the refcache

`test:website` checks docsy.dev's links with Lychee, caching external-link
results in the committed `docsy.dev/.lycheecache` (the "refcache") so checks
stay fast and offline-friendly. Config lives in `docsy.dev/lychee.toml`. CI
installs a pinned lychee binary (see `.github/workflows/test.yaml`); a plain
site build doesn't need it.

- **Refresh** after adding or changing external links: `npm run fix:refcache`
  re-runs the check, adding any missing entries and renormalizing — then commit
  the updated `.lycheecache`.
- **Inspect or prune** with `npm run refcache` (`-- -s` for a summary,
  `-- -p 10%` to drop the oldest tenth).

Both scripts work from the repo root or `docsy.dev/`.

## Release-prep audit

Before drafting the changelog entry and release blog post, run a careful audit
of every PR and raw commit in the release range so nothing user-visible slips
through (motivated by the version-menu near-miss during 0.15.0 prep).

For each PR/commit in `git log v<prev>..main`:

1. Inspect the actual diff (not just the title or PR description). Use
   `gh pr view <num>` and `git show <sha>` as needed.
2. Classify the change: **breaking**, **user-facing**, **internal-only**, or
   **docs-only** (see definitions in [Public customization surface][public] and
   [Breaking change][breaking change]).
3. For every **breaking** or **user-facing** item, verify it appears in **both**
   the [changelog][] and the release blog post — with cross-links to the
   relevant user-guide sections where applicable.
4. Be especially alert to: new/renamed params, partials, shortcodes, layouts,
   CSS classes, i18n keys, default-behavior shifts, and changes to the version
   menu, navigation, or other rendered output.

Capture the audit as a working document under `tasks/<release>/release-prep/`
(see prior releases for examples) so reviewers can sanity-check the
classifications. Treat the audit — not PR-level scope hints — as the source of
truth for what the changelog and release blog must cover.

## Publishing a release

These notes are WIP for creating a **release** from a local copy of the repo.
These instructions assume the release is:

- **{{% dev-version final %}}**

If not adjust accordingly.

> [!IMPORTANT]
>
> Before creating a release, do a [release-prep audit](#release-prep-audit) and
> use it to drive the changelog and release-blog updates in the next two steps.

1.  **Change directory** to your local Docsy repo.
    - Expecting final adjustments as you prepare for the release? Create a
      branch to work from. For example:

      ```sh
      git checkout -b release-{{% dev-version final %}}-prep
      # Or you have a local create-branch alias:
      gcb release-{{% dev-version final %}}-prep
      ```

    - Serve the site and continue working through these steps from the served
      version of these notes.

2.  **Create or update a [changelog][] entry** for {{% dev-version final %}}.
    - This step is driven by the [release-prep audit](#release-prep-audit).
    - The section should provide a brief summary of breaking changes using the
      section template at the end of the file.
    - Ensure to remove the UNRELEASED note, if still present.
    - You'll create a new section for the next release in a later step.

3.  **Update the release report blog post** for {{% dev-version final %}}, if
    any.
    - Remove draft status.
    - Set `date` (or `lastmod` if already published) to today's date.

4.  Run `npm run fix`.

5.  **Update Docsy version** to {{% dev-version final %}} using the following
    from a (bash or zsh) terminal.
    - First set the `VERSION` variable; we use it throughout the steps below.

      ```sh
      VERSION={{% dev-version final %}}
      ```

    - Then run the `set:version` script.

      Docsy is probably already at `{{% dev-version final %}}-dev`, so you can
      run:

      ```sh
      npm run set:version
      ```

      Otherwise, set the version explicitly:

      ```sh
      npm run set:version -- --version $VERSION
      ```

      Both forms update the `version` related fields in [package.json][] and
      [docsy.dev/config][] files.

6.  <a id="ci-test-step">Run `npm run ci:test`</a>, which runs `ci:prepare` and
    more to ensure that, e.g., vendor assets and [go.mod][] dependencies are
    up-to-date, etc.

7.  **Submit a PR with your changes**.
    - Set the `BASE` variable to the target branch: `main` if this is a stable
      release, and `release` for patch releases.

      ```sh
      BASE=main # or release for patch releases
      ```

    - Commit any changes accumulated from the previous steps using this title:

      ```text
      Release {{% param tdVersion.latest %}} preparation
      ```

    - Create a PR (with version-checks disabled) using the following command
      that will open a PR-creation page in your browser:

      ```sh
      export SKIP_VERSION_CHECK=1
      gh pr create --web --title "Release $VERSION preparation" \
        --base $BASE \
        --body "- Contributes to #<ADD-RELEASE-PREP-ISSUE-HERE>"
      ```

    - Use the web interface to fill in the PR details.
    - Submit the PR.

8.  **Test the PR** branch from selected sites, and push any required
    adjustments.
    - Run the [smoke tests](#test-suites), which auto-target the PR branch
      pushed in the previous step and include a build at the
      [minimum Hugo version](#minimum-hugo-version):

      ```sh
      npm run test:smoke
      ```

    - If the test site uses Docsy as a Git submodule:

      ```sh
      cd themes/docs
      git fetch
      git switch -t REPO/BRANCH-NAME # e.g. chalin/chalin-m24-0.14.0-pre-release
      ```

9.  **Get PR approved and merged**.

10. **Pull the PR** to get the last changes.

11. **Test Docsy** from [docsy-example][] and the docsy-starter. (Consider
    updating the Docsy version for these examples in the examples page.)

12. **Ensure** that you're:
    - On the target `$BASE` branch
    - At the commit that you want to tag as {{% param tdVersion.latest %}}

13. **Create the new tag** for {{% param tdVersion.latest %}}.
    - Set the REL variable to the release version or use the `VERSION` variable
      if you set it in the previous step.

      ```sh
      REL=${VERSION:-{{% param tdVersion.latest %}}}
      REL=v${REL#v} # tags are v-prefixed; normalize to exactly one leading v
      echo "REL=$REL"
      ```

    - Create the new tag.

      ```sh
      git tag $REL
      ```

    - Also create the nested **theme module tag**. Since the theme moved under
      `theme/`, it is its own Go module ([github.com/google/docsy/theme][]), and
      Go resolves it via a subdirectory-prefixed tag — this is what consuming
      sites get when they import `…/docsy/theme`:

      ```sh
      git tag theme/$REL
      ```

    - Double check:

      ```sh
      git tag --sort=-creatordate | head -3
      ```

14. **Push the new tags** (the release tag `$REL` and the theme module tag
    `theme/$REL`): either to all remotes at once, or one at a time.

    <details>
    <summary class="h6 text-info">Push to all remotes</summary>

    <!-- Prevent Prettier from gluing the list to this HTML hunk -->
    - List the remotes so you know what you'll be pushing to:

      ```sh
      git remote
      ```

    - Check that the `push-all-remotes` alias is defined, and if not, define it:

      ```sh
      git config --global --list | grep alias.push-all-remotes
      ```

      <details>
      <summary class="h6 text-primary">Define a `push-all-remotes` alias</summary>

      First check if the `push-all-remotes` alias is already defined:

      ```sh
      git config --global --list | grep alias.push-all-remotes
      ```

      If not, define the alias:

      ```sh
      git config --global alias.push-all-remotes \
        '!f() { for r in $(git remote); do (set -x; git push "$r" "$1"); done; }; f'
      ```

      > [!NOTE]
      >
      > You only need to define the alias once. Omit `--global` from the command
      > above to make the alias available only in the current repository rather
      > than all repositories.

      </details>

    - If you have git hooks enabled that auto-update the Docsy package version,
      disable the hook check for now:

      ```sh
      export SKIP_VERSION_CHECK=1
      ```

    - Push the tags to the remotes (the release tag, then the theme module tag):

      ```console
      $ git push-all-remotes $REL
      + git push origin {{% param tdVersion.latest %}}
      * [new tag]         {{% param tdVersion.latest %}} -> {{% param tdVersion.latest %}}
      + git push upstream {{% param tdVersion.latest %}}
      * [new tag]         {{% param tdVersion.latest %}} -> {{% param tdVersion.latest %}}
      ...
      $ git push-all-remotes theme/$REL
      ...
      ```

    - Sanity check over `upstream` for example:

      ```sh
      git ls-remote --tags upstream | grep $REL
      ```

    - Unset the SKIP_VERSION_CHECK variable when you're done:

      ```sh
      unset SKIP_VERSION_CHECK
      ```

    </details>

    <details>
    <summary class="h6">Push to a single remote</summary>

    <!-- Prevent Prettier from gluing the list to this HTML hunk -->
    - Push to a single remote at a time, such as `upstream`:

    ```sh
    git push upstream $REL
    git push upstream theme/$REL
    ```

    - Sanity check over `upstream` for example:

      ```sh
      git ls-remote --tags upstream | grep $REL
      ```

    </details>

15. Update the [deploy/prod][] branch from `$BASE`.

    For stable releases from `main`, use:

    ```sh
    git checkout deploy/prod
    git merge --ff-only main
    git push-all-remotes deploy/prod
    ```

    For patch releases from `release`, selectively merge from `release`.

    The branch update will trigger a production deploy of the website.

16. Wait for the production deploy to complete and check that [docsy.dev][] has
    been updated to the new release.

17. **[Draft a new release][]** using GitHub web; fill in the fields as follows:
    - Visit [tags][] to find the new release tag {{% param tdVersion.latest %}}.

    - Select Create a new release from the {{% param tdVersion.latest %}} tag
      dropdown menu

    - **Release title**: use the release version.

      ```text
      {{% param tdVersion.latest %}}
      ```

    - Click **Generate release notes** to get the release details inserted into
      the release notes text area.

    - Add the following text atop the generated release notes:

      ```markdown
      {{% release-summary %}}
      ```

    - Select **Create a discussion for this release**.

18. **Publish the release**: click _Publish release_.

19. Test the release with a downstream project and/or the [docsy-example][]
    site.

20. If you find issues, determine whether they need to be fixed immediately. If
    so, get fixes submitted, reviewed and approved. Go back to step 1 to publish
    a dot release.

21. **Update the `release` branch** once the release is final.

    For a stable release, fast-forward `release` to the final release commit
    from `main`:

    ```sh
    git checkout release
    git merge --ff-only main
    git push-all-remotes release
    ```

    For patch releases, the release-prep PR should already target `release`, so
    there is no separate `main` to `release` fast-forward.

22. Update the [doc-rooted][] branch from [deploy/prod][]:

    ```sh
    git checkout doc-rooted
    git merge --ff-only deploy/prod
    npm run doc-rooted -- build
    # Optionally take a look at the preview
    npm run doc-rooted -- serve
    curl http://localhost:1313/index.md
    # Push the changes
    git push-all-remotes doc-rooted
    ```

    If the fast-forward merge fails, stop and reconcile the branch history. Once
    pushed, wait for the Netlify deploy and check the doc-rooted preview.

23. Update, create, or close GitHub milestones as appropriate.

If all is well, release the Docsy example as detailed next.

## Docsy example release

The steps you follow are similar to the ones above for the Docsy release, but
with the following modifications:

1.  **Update the version** of the example to {{% param version %}}:

    ```sh
    VERSION={{% param version %}}
    npm run set:version:example -- --version $VERSION
    ```

2.  Perform [step 6](#ci-test-step) onwards as above to test, create a PR,
    create a release and publish it with one difference:
    - Once the deploy/prod branch has been updated, wait for the production
      deploy to complete and check that [example.docsy.dev][] has been updated
      to the new release.
    - To create a new release draft, visit [Docsy-example release draft][].

3.  **Update the [Examples page][]** Docsy version in the Starter templates
    table to {{% dev-version final %}}.

[Docsy-example release draft]:
  https://github.com/google/docsy-example/releases/new
[example.docsy.dev]: https://example.docsy.dev

## Post Docsy-release followup

Assuming that both the Docsy and Docsy-example releases {{% param version %}}
have been successfully deployed, and that at least one other project has been
successfully tested with the new release, then perform the following actions
before any further changes are merged into the `main` branch:

1. Update the package version to a dev ID for Docsy and Docsy-example:

   ```console
   $ npm run -s set:version:git-info
   ✓ Updated package.json version: 0.14.3 → 0.14.3-dev+003-over-main-cf4f514b
   ✓ Updated docsy.dev/config/_default/params.yaml version: 0.14.3 → 0.14.3-dev
   ✓ Updated docsy.dev/config/_default/params.yaml tdBuildId: (none) → 003-over-main-cf4f514b
   ...
   $ npm run -s set:version:example:git-info
   ...
   ```

2. In the [Changelog][]:
   - **Create a new entry** for the next release by copying the ENTRY TEMPLATE
     at the end of the file.

   - **Fix the new release URL**, which ends with `latest?FIXME=...`, so that it
     refers to the actual release, now that it exists.

3. **Submit a PR with your changes**, using a title like:

   ```text
   Set version to {{% param version %}}
   ```

4. **Get PR approved and merged**.

## Release helper scripts

- NPM scripts: `set:version` and `set:version:*`; `update:hugo` (see
  [Hugo versions](#hugo-versions))
- `scripts/get-build-id.sh`: Builds `X.Y.Z-dev+…-over-main-…` from the latest
  semver tag on `main`, commit offset, and tip SHA; if **`package.json`**’s
  X.Y.Z core is already **greater** than that git-derived core, keeps the higher
  core (release prep ahead of tagging).
- `scripts/set-package-version/index.mjs`: Low-level version manager. See script
  help for usage.

<!-- prettier-ignore-start -->
[breaking change]: /project/about/changelog/#breaking-change
[changelog]: /project/about/changelog/
[contributing]: /docs/contributing/
[deploy/prod]: <{{% param github_repo %}}/tree/deploy/prod>
[doc-rooted]: <{{% param github_repo %}}/tree/doc-rooted>
[docsy-example]: <{{% param github_repo %}}-example>
[docsy.dev]: <{{% _param baseURL %}}>
[docsy.dev/config]: <{{% param github_repo %}}/blob/main/docsy.dev/config/>
[docsy.dev/config/_default/hugo.yaml]: <{{% param github_repo %}}/blob/main/docsy.dev/config/_default/hugo.yaml>
[docsy.dev/package.json]: <{{% param github_repo %}}/blob/main/docsy.dev/package.json>
[Draft a new release]: <{{% param github_repo %}}/releases/new>
[Examples page]: /examples/
[github.com/google/docsy/theme]: <{{% param github_repo %}}/blob/main/theme/>
[go.mod]: <{{% param github_repo %}}/blob/main/theme/go.mod>
[milestones]: <{{% param github_repo %}}/milestones>
[officially supports]: /project/about/changelog/#official-support
[package.json]: <{{% param github_repo %}}/blob/main/package.json>
[Release notes]: <{{% param github_repo %}}/releases>
[theme/hugo.yaml]: <{{% param github_repo %}}/blob/main/theme/hugo.yaml>
[theme/theme.toml]: <{{% param github_repo %}}/blob/main/theme/theme.toml>
[public]: /project/about/changelog/#public
[tags]: <{{% param github_repo %}}/tags>
<!-- prettier-ignore-end -->
