---

title: Developer Cheatsheet
description: Helpful information for developers on the Editor team.
---







## Useful Commands

### general

- Testing CI/CD Jobs Locally: `gitlab-runner exec shell job_name`

### gitlab-org/gitlab

- `gdk start`
( `gdk doctor`
- `bin/rake frontend:fixtures`
- Running tests:
  - `yarn karma`
  - `yarn jest`
- [Debugging Capybara](https://docs.gitlab.com/ee/development/testing_guide/best_practices.html#debugging-capybara)
  - `CHROME_HEADLESS=0 bundle exec rspec spec/features/projects/tree/create_directory_spec.rb`
- [Capybara Screenshots](https://gitlab.com/gitlab-org/gitlab/blob/master/doc/development/testing_guide/best_practices.md#screenshots)
  - `screenshot_and_save_page`
  - `screenshot_and_open_image`
- [`live_debug`](https://docs.gitlab.com/ee/development/testing_guide/best_practices.html#live-debug)
- Static Analysis:
  - `scripts/static-analysis` (long)
  - `yarn eslint` (faster)
- `fdescribe` and `fit` for focused karma specs

#### Running QA Specs

See <https://gitlab.com/gitlab-org/gitlab/tree/master/qa#how-can-i-use-it> for more details.

- `cd qa`
- `bundle`
- `brew cask <install|reinstall> chromedriver`
- `bundle exec bin/qa Test::Instance::All http://0.0.0.0:3000 -- qa/specs/features/ee/browser_ui/1_manage/project/project_templates_spec.rb`

To run the QA specs in RubyMine, use a custom rspec runner configuration (right click on the arrow next to the example in the gutter), and set the `qa/bin/rubymine` script as the custom RSpec runner script, and the working directory as `qa`.

See more detailed instructions for this process here: <https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/end_to_end_test_configuration.md#starting-tests-using-the-rubymine-gutter>

### gitlab-com/www-gitlab-com

- Run site locally:
  - `cd sites/handbook && NO_CONTRACTS=true bundle exec middleman`
  - (see [monorepo docs](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/monorepo.md) for more details)
- [Development Documentation](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md)
  - [Testing tips](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md#testing)
- You can use this dashboard to select a page or pages and timeframe for page views: [https://datastudio.google.com/reporting/e7618539-81b4-4174-9731-3c858e3057b2/page/xXKYB](https://datastudio.google.com/reporting/e7618539-81b4-4174-9731-3c858e3057b2/page/xXKYB)

## Tips and Tricks

## GDK Tips

- To access EE features, you need to make sure you have an EE license added in `/admin/license`

### Running Web IDE Terminal in GDK

- GDK Docs: [Web IDE Terminal HowTo](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/web_ide_terminal_gdk_setup.md)
- YouTube: [Web IDE Terminal - Setup using GDK (23:44)](https://www.youtube.com/watch?v=MhwmqqaREw0)

### GDK Debugging

#### Log Debugging

- If you want to print out a debugging message:
  - `puts` or `p` will **ONLY** show up in `gdk tail rails`
  - `logger.info('...')` will **ONLY** show up in `tail -f log/development.log`

#### RubyMine Debugging

**_MOVED: Ths section on debugging the GDK with the RubyMine debugger has been moved to https://handbook.gitlab.com/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/individual-ides/rubymine/#debugging-rails-web**

## Git Tips

### Rebasing

- Use of interactive rebasing (`git rebase -i master`) and message cleanup via `reword`/`fixup` are worth learning more about if you are unfamiliar with them.
- Interactive rebasing tip:
  - This process will let you separate "interactive rebasing" against the `merge-base` (the common ancestor of your branch `HEAD` and the upstream branch `master`) from the possibility of "conflict resolution" when rebasing against the latest upstream `master`.
  - First, do a `git rebase -i $(git merge-base HEAD master)`. This lets you do your interactive rebase against the `merge-base` without any chance of having to deal with conflicts at the same time. Make sure that the `merge-base` commit is contained on your master branch (i.e. you didn't just fetch and checkout the branch directly without updating master). You could just `git fetch` then rebase against `origin/master`, but this negates the benefit of using `--force-with-lease`.
  - Optionally `git push --force-with-lease` (Or just wait until after the next step to push if you don't want to trigger an extra unnecessary build)
  - Then, do a `git rebase master`, to rebase against the latest master, and resolve any conflicts against your cleaned-up, interactively-rebased branch.
  - `git push --force-with-lease` (force-with-lease ensures nobody else has pushed to the branch since you last pulled)

### Git References

- See [this blog post](https://about.gitlab.com/blog/2016/12/08/git-tips-and-tricks/) and our [git cheatsheet](https://about.gitlab.com/images/press/git-cheat-sheet.pdf) for more git tips.

### Interactive Git Learning Tools

- [http://onlywei.github.io/explain-git-with-d3/](http://onlywei.github.io/explain-git-with-d3/) is a very cool sandbox site that takes you through tutorials of various git commands, with a real-time visualization of what is going on.  You can also type your own commands outside of the tutorial instructions in many cases!
- [https://ndpsoftware.com/git-cheatsheet.html](https://ndpsoftware.com/git-cheatsheet.html) is a great reference and visualization of the various git commands grouped into different "areas" in git.

### Squashing down a branch which has had master merged into it

When a branch has followed a merge instead of a rebase workflow, it can get very confusing to know what is going on, and you want to just squash it down to a single commit. But, you can't just do a regular interactive rebase relative to master if the branch has had master merged into it. Here's what you have to do instead.

Note there may be more efficient ways of doing this, suggestions are welcome. Also note that sometimes this doesn't work, you'll end up with almost all the changes from the branch uncommitted after step 5 - not sure why :(

Assuming branch is named `branch` and upstream is named `master`:

1. Do a log of all the commits on the branch: `git log master..branch --oneline`
1. Find the last (latest) commit on the branch. It will be the top one, assume it is `123456`.
1. Find the first (earliest) commit on the branch. It will be the bottom one, assume it is `abcdef`.
1. Reset hard to the first commit: `git reset --hard abcdef`
1. `merge --squash` the last commit: `git merge --squash 123456`
1. There may be extra changes from the master commits that you don't want. Get rid of them with:
    1. `git restore --staged .`
    1. `git checkout .`
    1. `git clean -df`

## Working with Issues/MRs

- [Expanding Issue/MR Threads for Searching](https://gitlab.com/gitlab-org/gitlab/issues/38235)

## New habits

Though the [contributor and development docs](https://docs.gitlab.com/ee/development/) are the single source of truth, there are some additional habits that may be worth developing when you're new to the code contribution process.

Depending on your existing habits and `git` practices the habits below may help mitigate pain during code submissions.

- Keep GDK up to date (update often, if not daily)
- Keep your commit history clean
  - Take special note of the [commit message guidelines](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#commit-messages-guidelines)
  - See "Git Tips" above
- Keep merge requests small
  - Merge conflicts are inevitable, but focusing on making your MRs smaller will save you pain later
- Keep localization files up to date
  - When adding English copy, messages, or labels don't forget to [update localization files](https://docs.gitlab.com/ee/development/i18n/externalization.html#updating-the-po-files-with-the-new-content)

## Dealing with Broken Master

- <https://about.gitlab.com/handbook/engineering/workflow/#broken-master>
- <https://about.gitlab.com/handbook/engineering/workflow/#merging-during-broken-master>

## Browser Testing

- Browser Testing: <https://docs.gitlab.com/ee/development/fe_guide/index.html#browser-support>
- Dynamic element validation in E2E tests: <https://docs.gitlab.com/ee/development/testing_guide/end_to_end/dynamic_element_validation.html>

## Links on Testing and Software Design

About testing:

- Vue test utils guide: <https://vue-test-utils.vuejs.org/guides/>
- Book: The way of the web tester: <https://pragprog.com/titles/jrtest/>
- An essay on mocks: <https://martinfowler.com/articles/mocksArentStubs.html>
- Clean architecture book: <https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164>

Some frontendmasters workshops related to testing that I want to take after the web security workshop:

- <https://frontendmasters.com/courses/testing-practices-principles/>
- <https://frontendmasters.com/courses/testing-javascript/>

## Jetbrains IDE Usage

**_MOVED: There is now a dedicated handbook section on JetBrains IDEs: https://handbook.gitlab.com/handbook/tools-and-tips/editors-and-ides/jetbrains-ides/_**
