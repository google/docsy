<h1>TravisCI</h1>

TravisCI is a "continuous integration" (CI) cloud service. It is useful for Open SDG in a way that is typical of open-source projects: it "listens" for certain events in your Github repository, and then provides temporary virtual machines to perform various server-side tasks. Open SDG needs a CI tool to accomplish these things:

* Run each new proposed change through certain tests, to prevent regression bugs
* Build and deploy the platform to a "staging" environment whenever changes are made
* Build and deploy the platform to a "production" environment whenever a new release is made

## Pros

* Although there are paid plans, TravisCI is free for open-source projects
* Built-in integrations with Github repositories

## Cons

* Requires the creation of SSH keys to communicate with version control (eg, GitHub)
* Requires the installation of Ruby to set up SSH keys

Other than these very minor issues, TravisCI makes a good choice for Open SDG.

## Set-up

TravisCI's tight integration with Github repositories makes it relatively simple to set up. More details can be found in [the official TravisCI documentation](https://docs.travis-ci.com/user/tutorial/).

## Usage

Using TravisCI involves putting a configuration file (`.travis.yml`) in your repository. For details on getting started, see the [TravisCI documentation](https://docs.travis-ci.com/).

Note that although TravisCI has [dedicated support for Github Pages](https://docs.travis-ci.com/user/deployment/pages/), this approach is discouraged because it is coupled to a particular user's Github account.
