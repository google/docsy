<h1>Jenkins</h1>

Jenkins is a self-contained, open-source automation server. It is useful for Open SDG in a way that is typical of open-source projects: it "listens" for certain events in your Github repository, and then performs pre-configured tasks. Open SDG needs a CI tool to accomplish these things:

* Run each new proposed change through certain tests, to prevent regression bugs
* Build and deploy the platform to a "staging" environment whenever changes are made
* Build and deploy the platform to a "production" environment whenever a new release is made

## Pros

* Large community of plugins and users
* Integrations with Github (and most other services) via plugins

## Cons

* Must be self-hosted, which requires maintaining and upkeeping a server
* As a do-it-yourself option, requires more technical expertise to set up and run

## Set-up

Jenkins has been around long enough for the creation of a multitude of tutorials and videos on how to set it up. The best place to start is the official [Jenkins documentation](https://jenkins.io/doc/).

## Usage

As with set-up, Jenkins usage is well-documented online. A good place to start is the official [Jenkins tutorials](https://jenkins.io/doc/tutorials/).
