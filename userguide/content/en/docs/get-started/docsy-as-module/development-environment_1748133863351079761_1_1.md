---
title: "Setting up your Development Environment"
description: "Tutorial on setting up Professional Services development environment"
---

This tutorial will walk you through setting up the following foundational technologies we use in Professional Services:

- Python
- Poetry
- Node
- NPM
- Ruby

Instead of installing each of these tools directly through a package manager or by compiling from source, we will be leveraging version managers as much as possible.

## Installing Python with Pyenv

[Pyenv](https://github.com/pyenv/pyenv) is a python version manager which allows a user to manage multiple python versions on a single machine through a simple CLI

1. Follow the [installation instructions](https://github.com/pyenv/pyenv#installation) on Pyenv's GitHub
2. Once Pyenv is installed, run `pyenv install 3.8`. This will install Python 3.8 as well as Pip for installing additional python packages
3. Confirm Python and pip are installed by running

```bash
python3 --version
pip3 --version
```

*Note: Refer to Pyenv's [common build problems](https://github.com/pyenv/pyenv/wiki/Common-build-problems) wiki article if you are experiencing any issues installing Python through Pyenv, and then reach out to #ps-practice on slack if you have additional questions*

## Installing Poetry

[Poetry](https://python-poetry.org/) is our default dependency manager for our Python applications. Poetry bundles up a few useful tasks into one single tool:

- Python [virtual environments](https://python-poetry.org/docs/basic-usage/#using-your-virtual-environment)
- Package [dependencies](https://python-poetry.org/docs/basic-usage/#installing-dependencies)
- [Building](https://python-poetry.org/docs/cli/#build) and [publishing](https://python-poetry.org/docs/cli/#publish) to PyPi
- [Custom scripts](https://python-poetry.org/docs/pyproject/#scripts) or exectuables that will be installed when installing the package

1. Install Poetry using their [official installer](https://python-poetry.org/docs/#installing-with-the-official-installer) or through pip by running `pip install poetry`
1. Confirm poetry is install by running

```bash
poetry --version
# OR
python3 -m poetry --version
```

## Installing Node and NPM with NVM

[NVM](https://github.com/nvm-sh/nvm) is a version manager for Node and NPM, and like Pyenv helps to keep versions up to date through the use of a single CLI.

1. Follow the [installation instructions](https://github.com/nvm-sh/nvm#installing-and-updating) on NVM's GitHub
2. Check to make sure NVM is part of your $PATH. This can be found in a file like `~/.bashrc`, `~/.bash_profile`, but depending on your shell of choice the file may have a difference name.
3. Run `nvm install node` to install the latest version of Node and NPM. You can specify the Node version by running a command like `nvm install 14.7.0`. Additional usage can be found in the [Usage](https://github.com/nvm-sh/nvm#usage) section of the NVM README
4. Confirm Node and NPM are installed by running:

```bash
node --version
npm --version
```

## Installing Ruby with RVM

While we do not do a lot of Ruby development in Professional Services, it is important to have Ruby installed in the event we need to do some work directly on the GitLab codebase itself.

This section is only going to cover installing RVM to manage your Ruby installation. If you want to work on the GitLab codebase, refer to the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit#installation) project and its installation instructions.

1. Follow the installation instructions on the [RVM](https://rvm.io/) website
2. Ensure RVM is in the $PATH
3. Install the version of Ruby specified in the [.ruby-version](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.ruby-version) file in GitLab by running

```bash
rvm install <version-specified>
```

You may need to run `/bin/bash --login` if RVM prompts you with an error saying `RVM is not a function`

## Optional Next Steps

### Service Delivery Workshops

- [Migration Workshop](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate-onboarding-workshop) - Learn how to use Congregate to migrate data from one GitLab instance to another
- [GET Deployment Workshop](https://gitlab.com/gitlab-org/professional-services-automation/tools/implementation/get-deployment-workshop) - Set up and use GET to spin up a highly available GitLab instance in AWS

### Application Specific Development Environments

- [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/setup-dev-env/)
- [GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit)
