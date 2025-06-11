# How To Contribute

Thanks for reading our contribution guidelines.

The following guidelines for contribution should be followed if you want to submit a pull request.

## How To Prepare

* You need a [GitHub account](https://github.com/signup/free).
* Before reporting a bug or suggesting an improvement, please check the `develop` branch to see if it has already been addressed.
* Duplicate tickets will be closed without hesitation, so please check through existing tickets first to see if someone else has already discussed it.
* Submit an [issue ticket] for your issue if there is not one yet.
    * Describe the issue and include steps to reproduce if it's a bug.
    * If the issue is a bug, add any relevant JavaScript or PHP error messages. For PHP error messages, a backtrace is preferred. If you don't know how to get one, please [follow these instructions](https://gist.github.com/jrfnl/5925642).
    * Include relevant version numbers.
    * Additional screenshots or videos are often helpful.
* If you are able and want to fix this, fork the repository on GitHub.

## Make Changes

We use the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model. Before reporting a bug or new feature, please check the `develop` branch to see if it's already been addressed.

* In your forked repository, create a topic branch for your upcoming patch. Usually this is based on the `develop` branch.
    * For enhancements, name the branch according to the feature e.g. `feature/auto-activate`.
    * For un-reported bug fixes, add a `fix-` prefix e.g. `feature/fix-admin-notices`.
    * For code that addresses an existing Issue, add the Issue number as a prefix e.g. `feature/123-auto-activate` or `feature/321-fix-admin-notices`.
    * Please avoid working directly on the `develop` branch.
* Code should follow the [WordPress Coding Standards for PHP](https://make.wordpress.org/core/handbook/coding-standards/php/).
    * Use [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) with the [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) sniffs to check. Since we use `phpcs.xml`, you should be able to navigate on command line to the root of the repo and just run `phpcs` without any arguments.
* Make commits of logical units and describe them properly.
* Check for unnecessary whitespace with `git diff --check` before committing.

## Commit Messages
We suggest you follow best practices for commit messages:

* Separate subject (first line) from body with a blank line.
* Limit the subject line to 50 characters.
* Capitalize the subject line.
* Do not end the subject line with a period.
* Use the imperative mood in the subject line.
* Wrap the body at 72 characters.
* Use the body to explain _what_ and _why_ versus _how_.
* Please [reference any existing issue](https://help.github.com/articles/closing-issues-via-commit-messages/) in the commit message.

Read [this post](http://chris.beams.io/posts/git-commit/) for more detail.

## Submit Changes

* Push your changes to a topic branch in your fork of the repository.
* Open a pull request to the original repository and choose the correct original branch (probably `develop`) you want to patch.
* Do not close any issue you referenced in your commit message.
* If you have write access to the repository, do not directly push or merge your own pull-requests. Add the `[reviewmerge]` label when your branch is considered complete and let another team member review your pull request and approve.

## License

All submissions are agreed to be licensed under the same license as present in the repository.

## Security

There is no need to sign-off or GPG sign your commits. Tags (from 2.4.1 onwards) will be GPG signed.

# Additional Resources

* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/).
* [Read the Issue Guidelines by @necolas](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md) for more details,

[issue ticket]: https://github.com/TGMPA/TGM-Plugin-Activation/issues
[reviewmerge]: https://github.com/TGMPA/TGM-Plugin-Activation/labels/reviewmerge
