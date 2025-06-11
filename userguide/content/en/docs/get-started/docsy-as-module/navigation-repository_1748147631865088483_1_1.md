---
title: "Navigation Repository"
---

The [navigation repository](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation) (also known as `be-navigation`) is a separate package that is updated and maintained independently from the rest of the marketing website. This is so that we can make changes in one place, and have any consuming repositories pull from that single source of truth. The navigation is currently maintained by the [Digital Experience team](/handbook/marketing/digital-experience/).

Navigation is following [Semantic Versioning](https://semver.org/). The current released version can be found on this [npm page](https://www.npmjs.com/package/be-navigation) under `Versions`.

## Making Changes

Navigation data is distinct from the Navigation code, as it originates from Contentful. To effect changes, two methods are available, contingent on the nature of the desired alteration.

### Content Changes

Navigation data is stored within Contentful, and it is utilized by projects that rely on the Navigation repository. Subsequently, this data is transferred to the Navigation component. Below, you will find two entries containing the data for the navigation in Contentful.

1. [Navigation Entry](https://app.contentful.com/spaces/g1m12f5de7m9/entries/4ANorm7zz94uE5N6oexbdi)
2. [Footer Entry](https://app.contentful.com/spaces/g1m12f5de7m9/entries/QxdoqHd5ixKTwFjIHYvYI)

Localization data is managed within this context, where child entries are organized by language, and each entry is named with its respective language code format, such as `[fr-fr] - Name of the entry`.

To ensure that changes become visible in production, it's necessary to **publish** the data in Contentful. Afterward, within a few minutes, the updated data will become accessible on the website once the pipeline of the corresponding project has been successfully executed.

### Structural Changes

To request changes to the Navigation repository, please fill out an issue [here](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/issues/new) to be triaged by the Digital Experience team.

If you would like to self-serve changes to the navigation, feel free to clone the project locally following the instructions in the [readme](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/blob/main/README.md). Once you make changes, please tag a member of the [Digital Experience team](/handbook/marketing/digital-experience/#groups-metrics--team-members) to review your MR. We are consistently running tests on navigation links, and doing research and design spikes on navigation changes, so all changes will need to be approved by a member of our team.

**When making a change to the navigation, it's important to check for an AB test**. The quickest check is to look at the file system for the navigation repository. Is there a folder for `Navigation` as well as a folder for `NavigationB` (or some other duplicate name that contains similar files)? If so, be sure to make your changes in both folders, so that both variants will see the updates.

**Note**: Two JSON files are stored under a folder named **mocks**. The data within this folder is exclusively for testing purposes, and any modifications made will have no impact on the production data.

## Releases

Currently, our team releases new navigation changes in bundles on **Wednesdays**. This can be adjusted as necessary, and we typically opt to release large, breaking changes in their own version.

We avoid deploying minor or major releases of the navigation on release post days.

### Releasing involves 4 main steps

1. Prepping issues for the release
2. Publishing a new version to npm
3. Updating any repositories that consume the navigation to point to the new version
4. Publishing any changes made in Contentful

### Detailed instructions

1. Create a new issue titled `Navigation release: Version x.x.xx` and include links to the MRs and Issues included in this release. This navigation issue should be added to the quarterly navigation release epic (ex. [FY23Q3 epic](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/epics/155)). If this has been assigned to you already, you can skip this step.
1. Create a new branch from `main`, with all changes
1. Increment the version number in `package.json`
1. Build /dist folder - ```yarn build``` (optionally use `yarn link` [for a detailed local review](#detailed-local-review-before-a-nav-release-with-yarn-link))
1. Publish to npm - ```npm publish``` (Note: You may need to login with your npm credentials using ```npm login```)
1. Merge changes to `origin/main`
1. Once the package has been published it's now ready to be [updated in the consuming repositories](#using-navigation-in-other-repositories). This should include the `Buyer Experience` and `www` repositories. Open an MR in those repos using the `navigation-change` description template. Include links to those MRs in your Navigation Release Issue assigned to you.
1. Close the Navigation Release Issue

If you see "Please Choose a version of be-navigation from this list:", this means that there is an issue with the npm package version you specified. You should double check that your package was published and that the `package.json` contains the correct `be-navigation` version

## Using Navigation in Other Repositories

To update the navigation in the repositorys that consume it, for example www-gitlab-com, or buyer-experience:

- Go to `package.json`, find the `be-navigation` line item, and increment to the latest version
- run `npm install` to update the package
- commit your changes so that you can do extensive testing in the review app
- Once the review app is built, check the following for bugs or strange behaviour. Remember that this component is on every page, sitewide:
  - Click all top level navigation headers. Do their menus show up properly?
  - Tab through all items in one of the navigation sections using your keyboard
  - Check that the Close, Login, and Support buttons all work as expected
  - Check that the logos in Alliance Partners look alright, and that Resources -> Get Started icons are aligned
  - Scroll down to the footer and click on a regular link, and `Cookie Preferences`, and `Edit in Web IDE` to make sure they work as expected
  - Go to mobile view and click through all links
- Does anything seem off? If it's breaking, hotfix it in the navigation repo and release a new version. If it's a minor bug, create a new issue to be triaged.

## Major Release Navigation Checklist

You can use the MR template in the buyer experience repo titled "navigation change". It contains the following checks, for a thorough runthrough of the navigation:

_Chrome_

- [ ] Test a link in each dropdown of the **desktop** header (Especially login/free trial buttons)
- [ ] Test a link each section of the **desktop** footer (Especially Edit in IDE/Page source links)
- [ ] Test a link in each section of the **mobile** header
- [ ] Test a link in each section of the **mobile** footer
- [ ] Test search on desktop
- [ ] Test search on mobile
- [ ] Test tabbing through header links
- [ ] Test tabbing through footer links

_Safari_

- [ ] Test a link in each dropdown of the **desktop** header (Especially login/free trial buttons)
- [ ] Test a link each section of the **desktop** footer (Especially Edit in IDE/Page source links)
- [ ] Test a link in each section of the **mobile** header
- [ ] Test a link in each section of the **mobile** footer
- [ ] Test search on desktop
- [ ] Test search on mobile
- [ ] Test tabbing through header links
- [ ] Test tabbing through footer links

_Firefox_

- [ ] Test a link in each dropdown of the **desktop** header (Especially login/free trial buttons)
- [ ] Test a link each section of the **desktop** footer (Especially Edit in IDE/Page source links)
- [ ] Test a link in each section of the **mobile** header
- [ ] Test a link in each section of the **mobile** footer
- [ ] Test search on desktop
- [ ] Test search on mobile
- [ ] Test tabbing through header links
- [ ] Test tabbing through footer links

_Note: You will have to visit pages built by that repository in order to see your navigation changes. For example, the website [homepage](https://about.gitlab.com) is built in `Buyer Experience`, so you can visit the homepage in your review app to see your navigation changes. However the [handbook](/handbook/) is built by `www-gitlab-com`, so you'll need to go to a handbook page in order to test your navigation changes in the `www` review app._

## Major 5.0.0 navigation release

This version has some major updates like:

- Updated Vue library from `2.6.x` to `2.7.x`
- Now you can check the project bundle size by accessing `http://localhost:YOUR_PORT_NUMBER_HERE/stats.html` in local environment.
- The project bundler is now Vite instead of Webpack, which has reduced the bundle size by 90%.
- There were some minor changes that can be viewed [here](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/issues/167)
- We updated the nuxt.config.js in the BE repository. The line `be-navigation/dist/be-navigation.css` has been changed to `be-navigation/dist/style.css`.
- When running this new version of the Navigation repo, we encountered an issue with the `dist` folder not updating its content if the user already had an older version of the repo installed. To fix this, you need to delete the 'dist' folder and run 'yarn' again
- From this version onward, we **will no longer support the nav project in the www-repo anymore.** This means that www-gitlab-com **must stay pinned to major version 4**. You will need to move your page over to [Buyer Experience by opening an issue](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/new#) if having the most up-to-date navigation is a concern for your content.
- In the `Buyer Experience` repository the nav updates will follow the current instructions.

## How to update the navigation on the www-gitlab-com repository

In order to update www and Buyer Experience separately we created a [new main branch](https://gitlab.com/gitlab-com/marketing/digital-experience/navigation/-/tree/legacy-navigation-main) in the navigation repository.

- Create a new MR on the Navigation repository, **forking from** `legacy-navigation-main`
- Finish your updates and merge them to the `legacy-navigation-main`, or ask someone with permission to merge it for you.
- After the `legacy-navigation-main` is ready with all the issues merged, update its version on the `package.lock` file.
- Publish the version for our npm by running `npm publish` or ask someone to do it for you
- Open a new MR on [www repository](https://gitlab.com/gitlab-com/www-gitlab-com) updating the navigation version on the `package.lock`
- Run the `yarn` command in order to generate the yarn.lock file, commit both the yarn.lock, and package.lock files.
- Ask for review/merge

### Note

The package version for the www repo **should not** be major, which means it can't be anything higher than `4.x.x`

### Detailed local review before a nav release with yarn link

If you want to review locally changes made to the navigation:

1. Cd into the navigation folder
1. Build /dist roject locally by running `yarn build`.
1. Link the built package to yarn by running `yarn link`.
1. Cd into the repository you want use the navigation
1. Run `yarn link be-navigation`.
1. Install packages and start the project by running `yarn && yarn dev`

Changes made to the navigation should be available in the BE or Dub repo for testing extensively on your local environment.

## Semantic Versioning and releasing alpha versions

When we release larger versions of the navigation (beyond simply adding a link), we recommend using the semantic versioning [alpha directive](https://semver.org/#spec-item-9)

For example, if you are looking to release verion `1.1.0` of the navigation, consider releasing version `1.1.0-alpha` instead. You can then bring the alpha version into the consuming repositories, such as Buyer Experience, and test it out.

If there are problems, you can make changes in the navigation repo, release those changes as `1.1.0-beta` or `1.1.0-alpha.1`, test them, and so on, continuing to release "unstable" alpha versions until you're happy with the release.

Once the bugs are fixed, re-release the same code to npm as version `1.1.0`, and merge everything in.

Although this means re-releasing identical code as a new version to npm, it saves us from incrementing multiple minor versions in one release.

## Running an A/B Test on the Navigation

We use LaunchDarkly as our AB testing tool. Because of the way the navigation is bundled and pulled into other repositories, we can't target specific items in the Navigation repo for testing. If we want to test something in the Navigation, we need to create a duplicate of the entire navigation component, make the changes in that duplicate version, and release two entirely complete navigations. If we're running an ABC test, we need to duplicate the navigation a third time.

This adds a layer of complexity, since we need to keep two or more distinct navigations up-to-date with any changes. It also takes a fairly lightweight package and doubles it in size. Due to this, when we run navigation tests, they should be testing **genuine, burning questions the team has** - we should run test for which we really need the data to drive a decision (i.e. Could this change be a "just do"?)

Once the two navigation components have been released, they can be used in the Buyer Experience repository like so:

```text
<LaunchDarkly feature-flag="some-ab-test-id">

  <template #control>
    <SlpNavigation />
  </template>

  <template #experiment>
    <SlpNavigationB />
  </template>

</LaunchDarkly>
```

You may need to add click events on elements in the navigation, depending on the data you're looking for. Questions about this can be directed to the #digital-experience-team slack channel. We are not set up to run tests in the `www-gitlab-com` repository at this time.
