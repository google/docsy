---
title: Contributing
description: How to contribute to Docsy
weight: 100
cSpell:ignore: chalin docsy hugo
---

# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement (CLA)

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Community Guidelines / Code of conduct

This project follows
[Google's Open Source Community Guidelines](https://opensource.google.com/conduct/).

## Student contributions

Docsy welcomes contributions from students. However, we cannot guarantee that
PRs will be merged within any specific time frame. We ask that instructors _not_
create assignments requiring students to have PRs merged into the project. We
will not merge PRs solely to satisfy any class assignments.

## How to contribute

See the [contribution guidelines][] in the Docsy user guide.

## Publishing a release

These notes are WIP for creating a **release** from a local copy of the repo.
These instructions assume the release is {{% param version %}}, if not adjust
accordingly.

1.  **Change directory** to your local Docsy repo.

2.  **Create or update a [CHANGELOG] entry** for {{% param version %}}.
    - The section should provide a brief summary of breaking changes using the
      section template at the end of the file.
    - Ensure to remove the UNRELEASED note.
    - You'll create a new section for the next release in a later step.

3.  **Update the release report blog post** for {{% param version %}}, if any.
    Remove draft status.

4.  Run `npm run fix`.

    > Note: This might update the version in `package.json` via `fix:version`,
    > but you can ignore this change since you'll be setting the version
    > explicitly in the next step.

5.  **Update Docsy version** to {{% param version %}} using the following from a
    (bash or zsh) terminal:

    ```sh
    # Version {{% param version %}} or 0.X.Y; replace with actual version
    VERSION={{% param version %}}
    npm run set:package-version -- --version $VERSION
    ```

    This updates both `version` keys in [package.json] and
    [docsy.dev/hugo.yaml].

6.  Run `npm run ci:test`, which runs `ci:prepare` and more to ensure that,
    e.g., vendor assets and [go.mod] dependencies are up-to-date, etc.

7.  **Submit a PR with your changes**, using a title like "Release
    {{% param version %}}" preparation". Use this command to create the PR via
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

12. **Create and push a tag** for {{% param version %}}. Set the REL variable to
    the release version or use the `VERSION` variable if you set it in the
    previous step.

    ```sh
    # Replace with the actual version, or use the VERSION variable
    REL=v{{% param version %}}
    REL=v$VERSION
    echo "REL=$REL"
    ```

    Then:

    ```sh
    git tag $REL
    git tag --list | grep $REL
    ```

13. **Push the new tags** to the main remote (`origin` or `upstream` depending
    on your setup) as well as any secondary remotes, if any:

    ```console
    $ git push upstream $REL
    ...
    * [new tag]         v{{% param version %}} -> v{{% param version %}}
    ```

    You can push to all remotes with this alias.[^push-all-remotes] First check
    if it's already defined.

    [^push-all-remotes]:
        You only need to run this command once. Using `--global` will make the
        alias available in all your Git repositories; it can be omitted to make
        the alias available only in the current repository.

    ```console
    $ git config --global --list | grep alias.push-all-remotes
    $ git config --global alias.push-all-remotes \
        '!f() { for r in $(git remote); do (set -x; git push "$r" "$1"); done; }; f'
    ```

    Then:

    ```console
    $ git push-all-remotes $REL
    + git push origin v{{% param version %}}
    * [new tag]         v{{% param version %}} -> v{{% param version %}}
    + git push upstream v{{% param version %}}
    * [new tag]         v{{% param version %}} -> v{{% param version %}}
    ...
    ```

14. **[Draft a new release][]** using GitHub web; fill in the fields as follows:
    - From the **release/tag dropdown**: Select the new release tag that you
      just pushed, v{{% param version %}}.

    - Set the **release title** to the release version:

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

15. **Publish the release**: click _Publish release_.
16. Test the release with a downstream project, such as [docsy-example].
17. If you find issues, determine whether they need to be fixed immediately. If
    so, get fixes submitted, reviewed and approved. Then publish a dot release:
    go back to step 1.

## Post-release followup

Assuming that Docsy release v{{% param version %}} has been successfully
deployed and use by at least one downstream project, then perform the following
actions before any further changes are merged into the default branch:

1. Set `version` in [package.json] to the next planned (or the next dot) release
   with a dev suffix, such as `v0.X.Z-dev`. You can also run:

   ```sh
   npm run set:package-version -- --id ''
   ```

2. In the [CHANGELOG]:
   - **Create a new entry** for the next release by copying the ENTRY TEMPLATE
     at the end of the file.

   - **Pin the {{% param version %}} release URL**, which ends with
     `latest?FIXME=...`, to the {{% param version %}} release at:

     <https://github.com/google/docsy/releases/v{{% param version %}}>

3. **Submit a PR with your changes**, using a title like:

   ```text
   Set NPM package version to next unreleased dev version
   ```

4. **Get PR approved and merged**.

## Release helper scripts

- **`npm run fix:version`**: Adds build ID to `package.json` (for
  development/CI).
- **`scripts/get-build-id.sh`**: Generates build ID from git describe (empty on
  tags).
- **`scripts/set-package-version/index.mjs`**: Low-level version manager. See
  script help for usage.

[CHANGELOG]: /site/changelog/
[contribution guidelines]: /docs/contribution-guidelines/
[docsy-example]: https://github.com/google/docsy-example
[Draft a new release]: https://github.com/google/docsy/releases/new
[go.mod]: https://github.com/google/docsy/blob/main/go.mod
[package.json]: https://github.com/google/docsy/blob/main/package.json
[docsy.dev/hugo.yaml]:
  https://github.com/google/docsy/blob/main/docsy.dev/hugo.yaml
