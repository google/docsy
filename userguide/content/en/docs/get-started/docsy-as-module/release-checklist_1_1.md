The following is meant to be copy-pasted into a Github issue whenever it is time to start working towards a new release:

In the steps below, "all four repos" refers to open-sdg, sdg-build, sdg-translations, and jekyll-open-sdg-plugins.

## Definitions

The following definitions and examples assuming that the new release is going to be 5.5.0 (an arbitrary example version).

* *New dev branch*: The new branch to be created in Github and used as the default. Example: 5.5.0-dev
* *Old dev branch*: The branch in Github that was previously used as the default. Example: 5.4.0-dev.
* *New tag* or *New version*: The tag for the new version. Example: 5.5.0
* *Beta tag* or *Beta version*: A pre-release tag to use for testing. Examples: 5.5.0-beta1, 5.5.0-beta2, etc.

# Releasing the first *beta tag*

* [ ] Create a *new dev branch* in all four repos
* [ ] Make these *new dev branches* the default branch for all four repos
* [ ] Update the "Repository branch" in Weblate to point to the *new dev branch*. This needs to be done in all the Weblate components separately:
    * https://hosted.weblate.org/settings/sdg-translations/calendar/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/data/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/frontpage/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/general/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/global_goals/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/global_indicators/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/global_targets/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/goal/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/header/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/menu/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/indicator/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/metadata_fields/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/post/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/search/#vcs
    * https://hosted.weblate.org/settings/sdg-translations/status/#vcs
* [ ] In the *new dev branch* for open-sdg, make sure that tests run against the *new dev branches* for the other repos, by updating these files:
     * [tests/site/Gemfile](https://github.com/open-sdg/open-sdg/blob/HEAD/tests/site/Gemfile)
     * [tests/data/requirements.txt](https://github.com/open-sdg/open-sdg/blob/HEAD/tests/data/requirements.txt)
* [ ] Bump the version in [this file](https://github.com/open-sdg/jekyll-open-sdg-plugins/blob/HEAD/lib/jekyll-open-sdg-plugins/version.rb) and publish the *beta version* of jekyll-open-sdg-plugins to rubygems.org, eg:
    * `gem build jekyll-open-sdg-plugins.gemspec`
    * `gem push jekyll-open-sdg-plugins-5.5.0.pre.beta1.gem`
* [ ] Push the *beta tag* for all four repos
* [ ] Create a PR against the *old dev branch* with upgrade instructions (specific to the *beta branches*) and tweaks to the [docs/updates.md](https://github.com/open-sdg/open-sdg/blob/HEAD/docs/updates.md) and [docs/changelog.md](https://github.com/open-sdg/open-sdg/blob/HEAD/docs/changelog.md) files.
* [ ] Do testing, pushing new *beta tags* (eg, beta2, beta3, etc.) as needed

# Releasing the *new version*

## A. Changelogs and versions

1. [ ] Make sure these open-sdg files have been updated:
    * [docs/changelog.md](https://github.com/open-sdg/open-sdg/blob/HEAD/docs/changelog.md)
    * [docs/updates.md](https://github.com/open-sdg/open-sdg/blob/HEAD/docs/updates.md)
2. [ ] Make sure these sdg-build files have been updated:
    * [CHANGELOG.md](https://github.com/open-sdg/sdg-build/blob/HEAD/CHANGELOG.md)
    * [README.md](https://github.com/open-sdg/sdg-build/blob/HEAD/README.md)
    * [setup.py](https://github.com/open-sdg/sdg-build/blob/HEAD/setup.py) (version number)
3. [ ] Make sure these sdg-translations files have been updated:
    * [www/changelog.md](https://github.com/open-sdg/sdg-translations/blob/HEAD/www/changelog.md)
4. [ ] Make sure these jekyll-open-sdg-plugins files have been updated:
    * [lib/jekyll-open-sdg-plugins/version.rb](https://github.com/open-sdg/jekyll-open-sdg-plugins/blob/HEAD/lib/jekyll-open-sdg-plugins/version.rb) (version number)
5. [ ] Make sure the upgrade instructions have been added to [docs/upgrades/](https://github.com/open-sdg/open-sdg/tree/HEAD/docs/upgrades).

## B. Translations

1. [ ] Make sure that any new translations have been translated into all languages. Use machine translation for this, and mark them as "Needs edit" so that a human translator can eventually edit/approve. **This has now been automated for all translation groups except for global_indicators, global_targets, and global_goals, thanks to the "Automatic translation" add-on in Weblate.**
2. [ ] Make sure that Weblate has no pending commits and the Weblate pull-request has been merged.

## C. Tags and branches

1. [ ] Push the *new tag* for all four repos.
2. [ ] Merge the *old dev branch* into the *new dev branch* for all four repos.
3. [ ] Merge the *old dev branch* into the master branch for all four repos.

## D. Packages

1. [ ] Build ("gem build") and push ("gem push") the jekyll-open-sdg-plugins gem to rubygems.org. For example:
    * `gem build jekyll-open-sdg-plugins.gemspec`
    * `gem push jekyll-open-sdg-plugins-5.5.0.gem`
2. (Not implemented yet) Publish sdg-build to pypi.org.

## E. Starter repositories

1. [ ] Update the open-sdg-data-starter to point to the *new tags*, by updating these files:
    * https://github.com/open-sdg/open-sdg-data-starter/blob/develop/config_data.yml
    * https://github.com/open-sdg/open-sdg-data-starter/blob/develop/scripts/requirements.txt
2. [ ] Update the open-sdg-site-starter to point to the *new tags*, by updating these files:
    * https://github.com/open-sdg/open-sdg-site-starter/blob/develop/_config.yml
    * https://github.com/open-sdg/open-sdg-site-starter/blob/develop/Gemfile
3. [ ] Update the open-sdg-simple-starter to point to the *new tags*, by updating these files:
    * https://github.com/open-sdg/open-sdg-simple-starter/blob/develop/Gemfile
    * https://github.com/open-sdg/open-sdg-simple-starter/blob/develop/requirements.txt
    * https://github.com/open-sdg/open-sdg-simple-starter/blob/develop/_config.yml
    * https://github.com/open-sdg/open-sdg-simple-starter/blob/develop/config_data.yml
4. [ ] If this release contains any "recommended but optional" features, configure them in the starter repos as needed.

## F. Outreach

1. [ ] Create "Releases" in Github for all 4 projects. Copy the text of changelogs (when available) for the content of the Github releases.
2. [ ] Create a release video
3. [ ] Create a post on open-sdg.org
4. [ ] Social media announcements
