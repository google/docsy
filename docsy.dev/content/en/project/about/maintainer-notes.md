---
title: Maintainer notes
description: Notes for Docsy maintainers
aliases: [contributing, ../contributing]
cSpell:ignore: docsy hugo creatordate
---

For our main contributing page covering license agreements, code of conduct and
more, see [Contributing][]. This page is for **maintainers only**.

## Publishing a release

These notes are WIP for creating a **release** from a local copy of the repo.
These instructions assume the release is {{% param version %}}, if not adjust
accordingly.

1.  **Change directory** to your local Docsy repo.

2.  **Create or update a [changelog][] entry** for {{% param version %}}.
    - The section should provide a brief summary of breaking changes using the
      section template at the end of the file.
    - Ensure to remove the UNRELEASED note.
    - You'll create a new section for the next release in a later step.

3.  **Update the release report blog post** for {{% param version %}}, if any.
    - Remove draft status.
    - Update the date to today's date.

4.  Run `npm run fix`.

    > Note: This might update the version in `package.json` via `fix:version`,
    > but you can ignore this change since you'll be setting the version
    > explicitly in the next step.

5.  **Update Docsy version** to {{% param version %}} using the following from a
    (bash or zsh) terminal:

    ```sh
    VERSION={{% param version %}}
    npm run set:version -- --version $VERSION
    ```

    This updates both `version` keys in [package.json] and
    [docsy.dev/hugo.yaml]. You can omit the argument to `--version` when the
    package is already a dev version of {{% param version %}}.

6.  <a id="ci-test-step">Run `npm run ci:test`</a>, which runs `ci:prepare` and
    more to ensure that, e.g., vendor assets and [go.mod] dependencies are
    up-to-date, etc.

7.  **Submit a PR with your changes**, using a title like "Release
    {{% param version %}} preparation". Use this command to create the PR via
    the web interface:

    ```sh
    gh pr create --web --title "Release $VERSION preparation" \
      --body "- Contributes to #<ADD-RELEASE-PREP-ISSUE-HERE>"
    ```

8.  **Test the PR** branch from selected sites, and push any required
    adjustments.
    - If the test site uses Docsy as a Git submodule:

      ```sh
      cd themes/docs
      git fetch
      git switch -t REPO/BRANCH-NAME # e.g. chalin/chalin-m24-0.14.0-pre-release
      ```

9.  **Get PR approved and merged**.

10. **Pull in `main`** to get the last PR.

11. **Ensure** that you're:
    - On the default branch, `main`
    - At the commit that you want to tag as {{% param version %}}

12. **Create the new tag** for {{% param version %}}.
    - Set the REL variable to the release version or use the `VERSION` variable
      if you set it in the previous step.

      ```sh
      REL=v${VERSION:-{{% param version %}}}
      echo "REL=$REL"
      ```

    - Create the new tag.

      ```sh
      git tag $REL
      ```

    - Double check:

      ```sh
      git tag --sort=-creatordate | head -3
      ```

13. **Push the new tag**: either to all remotes at once, or one at a time.

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
      SKIP_VERSION_CHECK=1
      ```

    - Push the tag to the remotes:

      ```console
      $ git push-all-remotes $REL
      + git push origin v{{% param version %}}
      * [new tag]         v{{% param version %}} -> v{{% param version %}}
      + git push upstream v{{% param version %}}
      * [new tag]         v{{% param version %}} -> v{{% param version %}}
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
    ```

    - Sanity check over `upstream` for example:

      ```sh
      git ls-remote --tags upstream | grep $REL
      ```

    </details>

14. Fast-forward the [release][release-branch] branch so that it points to the
    same commit as `main`:

    ```sh
    git checkout release
    git merge --ff-only main
    git push-all-remotes release
    ```

    This will trigger a production deploy of the website.

15. Wait for the production deploy to complete and check that [docsy.dev][] has
    been updated to the new release.

16. **[Draft a new release][]** using GitHub web; fill in the fields as follows:
    - **Target**: select the `release` branch.

    - **Tag**: select new release tag v{{% param version %}}

    - **Release title**: use the release version.

      ```text
      v{{% param version %}}
      ```

    - Click **Generate release notes** to get the release details inserted into
      the release notes text area.

    - Add the following text atop the generated release notes:

      ```markdown
      {{% release-summary %}}
      ```

    - Select **Create a discussion for this release**.

17. **Publish the release**: click _Publish release_.

18. Test the release with a downstream project and/or the [docsy-example][]
    site.

19. If you find issues, determine whether they need to be fixed immediately. If
    so, get fixes submitted, reviewed and approved. Go back to step 1 to publish
    a dot release.

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
    - To create a new release draft, visit [Docsy-example release draft][].
    - Once the release branch has been updated, wait for the production deploy
      to complete and check that [example.docsy.dev][] has been updated to the
      new release.

[Docsy-example release draft]:
  https://github.com/google/docsy-example/releases/new
[example.docsy.dev]: https://example.docsy.dev

## Post Docsy-release followup

Assuming that both the Docsy and Docsy-example releases v{{% param version %}}
have been successfully deployed, and that at least one other project has been
successfully tested with the new release, then perform the following actions
before any further changes are merged into the `main` branch:

1. Update the package version to a dev ID for Docsy and Docsy-example:

   ```console
   $ npm run fix:version

    > docsy@0.14.1 fix:version
    > npm run set:version -- --version "$(scripts/get-build-id.sh)"


    > docsy@0.14.1 set:version
    > node scripts/set-package-version/index.mjs --version 0.14.2-dev-001-over-main-20ff86e7

    ✓ Updated version: 0.14.1 → 0.14.2-dev-001-over-main-20ff86e7
   $ npm run fix:version:example
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

- **`npm run fix:version`**: Adds build ID to `package.json` (for
  development/CI).
- **`scripts/get-build-id.sh`**: Generates build ID from git describe (empty on
  tags).
- **`scripts/set-package-version/index.mjs`**: Low-level version manager. See
  script help for usage.

[changelog]: /project/about/changelog/
[contributing]: /docs/contributing/
[docsy-example]: https://github.com/google/docsy-example
[docsy.dev]: https://www.docsy.dev/
[docsy.dev/hugo.yaml]:
  https://github.com/google/docsy/blob/main/docsy.dev/hugo.yaml
[Draft a new release]: https://github.com/google/docsy/releases/new
[go.mod]: https://github.com/google/docsy/blob/main/go.mod
[package.json]: https://github.com/google/docsy/blob/main/package.json
[release-branch]: https://github.com/google/docsy/tree/release
