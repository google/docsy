---
title: Working with the NPM GitLab Registry
---

## Overview

The purpose of this workflow is to make it easy(or easier) to test common customer scenarios by having access to package(s). You can follow the steps outlined below
to create a package, or use [this one](https://gitlab.com/sahbabou/test-package). Just make sure to reference to correct project ID when publishing your package [(Step 3)](#3-publishing-the-scoped-package).

## Creating A Scoped Package

- A scoped package is a package that's available under a scope(*insert you don't say meme*). The scope is used in the namespace, and usually either references
the org, or your username, depending on where the package is hosted. For example, if I create a package, and host it under my GitLab account, the scope will be `@sahbabou/name-of-my-package`

**NOTE:** [We do not currently support publishing packages from `subgroup/project`](https://gitlab.com/gitlab-org/gitlab-ee/issues/9960)

For the purpose of this workflow, our package will not do anything special since it will not have any functionality other than to confirm it's been installed. As a result, we will
only need a `package.json` file.

### Step 1: Create a directory for your package

- `mkdir npm-package`

### Step 2: Initialize the project on git

- `git init`
- `git remote add origin <your_git_url>`

### Step 3: Navigate to the npm-package directory and initialize the npm package under your org/username

This will create a `package.json`

- `npm init --scope=<your_group/username>`

### Step 4, follow the steps in the prompt

You don't need to add a license, keyword etc. All that matters it that:

- The package name has the right scope
- It points to the correct git url
- If it asks for a command, you can pass `npm start`, or else it'll just show an error command in the `package.json`, which for now is harmless

 NOTE **Note**: You can always change the values in the `package.json`

1. Create and provision the `.npmrc` file

The `npmrc` file is one of the locations where npm gets its settings. In our case, the configuration, per the official [GitLab NPM Registry docs](https://docs.gitlab.com/user/packages/npm_registry/), it will hold is where to look for packages under a particular
scope, as well as the current user's authentication to push/pull packages.

### Step 1: Create the ~/.npmrc file

- The ~/.npmrc generally lives in the home directory, however, sometimes, it can be created within the project's root directory, but also has no effect on packages that
 are installed globally (`npm install -g`)

### Step 2: Provision the ~/.npmrc file <a name="create-npmrc-file"></a>

- Add the registry to your scope, that way npm knows where to look for packages that start with @nameofyourscope.
  Example:
  - `@sahbabou:registry=https://gitlab.ahbabou.com/api/v4/packages/npm`
- Add your Oauth token(create one [here](https://docs.gitlab.com/api/oauth2/#resource-owner-password-credentials-flow) if you don't have one), and add it using this format:
  - `//gitlab.ahbabou.com/api/v4/packages/npm/:_authToken=<Oauth Token>`

 NOTE **Note**: This is so you can pull packages from that repo when running `npm install`.

- Add the auth token to the URL to publish your package:

  - `//gitlab.ahbabou.com/api/v4/projects/<project_id>/packages/npm/:_authToken=<Oauth Token>`

NOTE **Note**: We can't install nor publish this particular project yet, because we still have to tell our package where it can publish itself.

## 3. Publishing The Scoped Package

- Add this to your `package.json`:

  `"publishConfig": {
      "@your_scope:registry":"<yourgiturl>/api/v4/projects/<project_Id>/packages/npm/"
    },`

- Run `npm publish`
- Check the Packages section in your package's repository to confirm that it has been published

 `your-gitlab-url/package-project/-/packages`

## 4. Pulling the scoped package from the NPM Registry on GitLab

- You can run npm install from any other npm project(including this one), or clone [this project](https://gitlab.com/sahbabou/npm-test-project), then run npm install from the project's directory, and then
confirm whether you're able to install the package.

## 5. Common troubleshooting tips

Note: **NOTE**: If on < 11.9, [packages with a dot in the package name return a 403 on npm install](https://gitlab.com/gitlab-org/gitlab-ee/issues/10248) @test.group/project is read as @test. The workaround is to either:

- Rename the groups/username so they don't include a dot in the URL(sara-ahbabou/saraahbabou)
- Re-publish packages under the new scope. Be sure to update the `publichConfig` value in the `package.json`:

    `"publishConfig": {
        "@username-dash:registry":"http://localhost:3001/api/v4/projects/24/packages/npm/"
    }`

- Update the `.npmrc` file so it reflects the new group name/username(@sara-ahbabou:registry or @saraahbabou:registry)

If you receive a 40x error, re-run the same command with a `--verbose` flag, and confirm whether it's hitting the correct registry

- 401: Make sure there's no trailing / in the URL in your `~/.npmrc`
- 403: Make sure you're using the correct token with the appropriate permissions
- Also worth double checking whether the URL to your git repo contains http/https, especially if/when self-managed
- Make sure you're using a Premium/Ultimate license, especially if you're using an older license :)

## 6. Publishing a package to the NPM Registry on GitLab via GitLab CI

In order to run a job to publish your package in a job, paste the snippet below in your `gitlab-ci.yml`. For the job to be successful, you will need to:

1. Run it from the package's repository
1. Add your Personal Access Token and Oauth Access Token as environment variables(this scripts assumes you named them `PERSONAL_ACCESS_TOKEN` and `OAUTH_TOKEN`)
1. Add the following lines in `package.json` in `script` so the commit message includes the package version and name:

  ```text
  "scripts": {
         "getName": "echo  $npm_package_name"
         "getVersion": "echo  $npm_package_version",
       }

  ```

```text
image: node:latest

# This template assumes you have the following settings configured
# OAUTH Access Token generated and added as an Environment Variable under Project -> Settings -> CI/CD https://docs.gitlab.com/api/oauth2/
# Personal Access Token added as an Environment Variable in order to update your package.json with the new version value
# Your package.json contains the path to your private NPM Registry on GitLab. https://docs.gitlab.com/user/packages/npm_registry/#uploading-packages
######
######

cache:
  paths:
    - node_modules/

build:create_npmrc:
  stage: build
  script:
    - |
      if [ ! -f .npmrc ]; then echo .npmrc missing. Creating one now. Please review the following link for more information https://docs.gitlab.com/user/packages/npm_registry/#authenticating-with-an-oauth-token;
          export NPM_PROJECT_URL=$(echo "$CI_PROJECT_URL" | sed "s/${CI_PROJECT_PATH//\//\\/}/api\/v4/g")
          export NPM_REGISTRY_PATHS=$(echo "$CI_PROJECT_URL" | sed "s/${CI_PROJECT_PATH//\//\\/}/api\/v4/g")
          export NPMRC_URL=$(echo "$NPM_REGISTRY_PATHS" |  sed 's/[^:]*[:]//')
          export NPMRC_INSTALL_URL=$(echo "$NPMRC_URL/packages/npm/:_authToken=$OAUTH_TOKEN")
          export NPMRC_PUBLISH_URL=$(echo "$NPMRC_URL/projects/$CI_PROJECT_ID/packages/npm/:_authToken=$OAUTH_TOKEN")
          export NPM_SCOPE=$(echo "$CI_PROJECT_PATH" | sed 's/[/].*$//')
          echo "@$NPM_SCOPE:registry=$NPM_REGISTRY_PATHS/npm/" >> .npmrc
          echo "$NPMRC_INSTALL_URL" >> .npmrc
          echo "$NPMRC_PUBLISH_URL" >> .npmrc
      fi
  artifacts:
    paths:
      - .npmrc
    expire_in: 1 week

build_package:
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$GIT_SSH_PRIV_KEY")
    - git config --global user.name "${GITLAB_USER_NAME}"
    - git config --global user.email "${GITLAB_USER_EMAIL}"
    - mkdir -p ~/.ssh
    - ssh-keyscan my-gitlab-machine >> gitlab-known-hosts
    - cat gitlab-known-hosts >> ~/.ssh/known_hosts
  script:
    - npm version minor --git-tag-version=false
    - npm publish
    - git status
    - git add package.json
    ## You can add a getName and getVersion key under scripts in your package.json to return the name and version of your package and add it to the commit message
    #
    # "scripts": {
    #     "getVersion": "echo  $npm_package_version",
    #     "getName": "echo  $npm_package_name"
    #   },
    - git commit -m "[ci skip] updated $(npm run getName -s) version to $(npm run getVersion)
    - git push -o ci.skip http://<USERNAME>:<$PERSONAL_ACCESS_TOKEN>@gitlab.example/username/project_name.git HEAD:master
  dependencies:
    - build:create_npmrc
```
