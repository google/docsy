---
title: Recommended Setup
description: Training documentation concerning the recommended setup for Support Ops
canonical_path: "/handbook/support/readiness/operations/recommended_setup/"
---

**Note**: These are all recommendations. Some of this might be required for
doing your job (1Password, Zoom, Slack, Okta, etc.), but largely if you feel
you have a better alternative, go for it!

## What tooling do we recommend

| Tooling                          | Why we recommend it                                                                                                                             |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1Password                        | You are going to be logging into things. This is helpful to have handy                                                                          |
| Atom                             | Having a solid text editor is useful, especially as we are often editing text in repo files. Atom has a lot of nice features and is open source |
| .bashrc/.bash_profile            | This will make running a lot of our scripts via CLI easy. See the setup for more information                                                    |
| Calendly browser plugin          | This makes it quick and easy to grab one-time use links, which we are sometimes asked to do                                                     |
| GitLab Token                     | Will help you in running API calls via CLI to gitlab.com                                                                                        |
| Homebrew                         | This is super useful for installing things on macOS                                                                                             |
| nodenv                           | We work with a lot of projects that use a variety of node versions. This tool helps you switch between them very quickly.                       |
| Okta browser plugin              | You are going to be logging into things. This is helpful to have handy                                                                          |
| Openshot Video editor            | We often make videos for training/documentation/etc. Having a solid video editor handy is useful. Openshot is easy to use and open source.      |
| rbenv                            | We work with a lot of projects that use a variety of ruby versions. This tool helps you switch between them very quickly.                       |
| Slack                            | How a good portion of the company communicates                                                                                                  |
| Zendesk Global Token             | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful                                           |
| Zendesk Global Sandbox Token     | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful                                           |
| Zendesk US Federal Token         | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful                                           |
| Zendesk US Federal Sandbox Token | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful                                           |
| Zoom                             | What we use 99% of the time for meetings                                                                                                        |

## Homebrew

This is only for those using macOS. To install homebrew, simply use their setup
script:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## rbenv

This is a fantastic tool, especially when needing to utilize many different ruby
versions! We highly recommend installing and setting this up on your station.

Once you have this setup, we recommend the following commands be used to install
the more common ruby versions we use:

- `rbenv install 2.6.3`
- `rbenv install 2.6.7`
- `rbenv install 2.6.8`
- `rbenv install 2.6.10`
- `rbenv install 2.7.2`
- `rbenv install 2.7.5`
- `rbenv install 3.0.0`
- `rbenv install 3.0.4`

### macOS setup for rbenv

This is easily done using [Homebrew](#homebrew). The command for this is:

`brew install rbenv`

If you ever need to upgrade it (to get newer ruby versions), you simply would
do:

`brew upgrade rbenv ruby-build`

### Linux setup for rbenv

You can use a package manager (such as `apt`) for this, however we would
recommend installing this via `git` instead. To do this, run the following
commands:

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
source ~.bashrc
mkdir -p "$(rbenv root)"/plugins
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
source ~.bashrc
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

To upgrade rbenv and the plugin, you would simply do the following:

```bash
cd ~/.rbenv
git pull
cd ~/.rbenv/plugins/ruby-build
git pull
```

## Calendly browser plugin

You can add this to your Chrome based browser using the
[Calendly browser plugin](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
page.

You can add this to your Firefox based browser using the
[Calendly browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling)
page.

Once installed, you simply ensure you are logged into Calendly via your browser
and it should begin working.

## 1Password

There are two ways to go about this:

- App based (macOS only)
- Browser based

### App based setup for 1Password

**Note**: This is for macOS only. There is a Linux varient, however it does not
currently work properly.

To install the 1Password app, you would utilize [Homebrew](#homebrew) via the
following command:

```bash
brew install --cask 1password
```

To upgrade it, you would use:

```bash
brew upgrade --cask 1password
```

### Browser based setup for 1Password

You can add this to your Chrome based browser using the
[1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
page.

You can add this to your Firefox based browser using the
[1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager)
page.

## Okta browser plugin

You can add this to your Chrome based browser using the
[Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
page.

You can add this to your Firefox based browser using the
[Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
page.

Once installed, you simply ensure you are logged into Okta via your browser and
it should begin working.

## nodenv

This is a fantastic tool, especially when needing to utilize many different node
versions! We highly recommend installing and setting this up on your station.

Once you have this setup, we recommend the following commands be used to install
the more common node versions we use:

- `nodenv install 12.18.4`
- `nodenv install 12.22.1`
- `nodenv install 14.15.4`
- `nodenv install 14.20.0`
- `nodenv install 16.15.0`

### macOS setup for nodenv

This is easily done using [Homebrew](#homebrew). The command for this is:

`brew install nodenv`

If you ever need to upgrade it (to get newer node versions), you simply would
do:

`brew upgrade nodenv node-build`

### Linux setup for nodenv

You can use a package manager (such as `apt`) for this, however we would
recommend installing this via `git` instead. To do this, run the following
commands:

```bash
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc
source ~.bashrc
mkdir -p "$(nodenv root)"/plugins
git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
source ~.bashrc
curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
```

To upgrade nodenv and the plugin, you would simply do the following:

```bash
cd ~/.nodenv
git pull
cd ~/.nodenv/plugins/node-build
git pull
```

## Openshot Video Editor

This one is only really needed if you need a video editor and do not have a
preference. Several of us at GitLab use this and find it very simple to use.

### macOS setup for Openshot

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask openshot-video-editor
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask openshot-video-editor
```

### Linux setup for Openshot

As this is not part of normal package repositories, you'll need to install a PPA
first:

```bash
sudo add-apt-repository ppa:openshot.developers/ppa
sudo apt-get update
sudo apt-get install openshot-qt
```

## Atom

This one is only really needed if you need a text editor and do not have a
preference. Several of us at GitLab use this and find it very simple to use.

### macOS setup for Atom

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask atom
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask atom
```

### Linux setup for Atom

As this is not part of normal package repositories, uou'll need to first add
Atom's package repository:

```bash
wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
sudo apt-get update
```

## .bashrc/.bash_profile/.zshrc setup

What exactly you put in this file it really up to you, but to help ensure all
the scripts and the like we use work properly, we would at least recommend doing
the following:

```bash
# us fed ZD instance
export US_ZD_URL='https://gitlab-federal-support.zendesk.com/api/v2'
export US_ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export US_ZD_TOKEN='ZENDESK_US_FEDERAL_ADMIN_TOKEN'

# main ZD instance
export ZD_URL='https://gitlab.zendesk.com/api/v2'
export ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export ZD_TOKEN='ZENDESK_GLOBAL_ADMIN_TOKEN'

# main sandbox
export ZD_SB_URL='https://gitlab1707170878.zendesk.com/api/v2'
export ZD_SB_USERNAME='YOUR_EMAIL_ADDRESS'
export ZD_SB_TOKEN='ZENDESK_GLOBAL_SANDBOX_ADMIN_TOKEN'

# us fed sandbox
export US_SB_ZD_URL='https://gitlabfederalsupport1585318082.zendesk.com/api/v2'
export US_SB_ZD_USERNAME='YOUR_EMAIL_ADDRESS'
export US_SB_ZD_TOKEN='ZENDESK_US_FEDERAL_SANDBOX_ADMIN_TOKEN'

# GitLab token
export GL_TOKEN='YOUR_GITLAB_TOKEN'
```

## Zendesk tokens

As an admin for Zendesk, you are very likely to need to make API calls. Doing
this via an API token is useful (and how many of our scripts do it). As such,
it is recommend you generate an API token for yourself on every Zendesk instance
(production and sandbox) you will be managing.

## GitLab token

We often make things that interact with gitlab.com. As such, having an API token
handy for API calls is always useful!

## Slack

This is going to be required for your job, as we communicate a good bit via
Slack.

### Slack setup for macOS

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask slack
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask slack
```

### Slack setup for Linux

To do this, you will want to install the DEB package from the
[Slack download page](https://slack.com/downloads/linux) and then install the
DEB file like so:

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## Zoom

This is going to be required for your job, as we communicate a good bit via
Zoom.

### Zoom setup for macOS

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask zoom
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask zoom
```

### Zoom setup for Linux

To do this, go to the [Zoom download center](https://zoom.us/download?os=linux)
and download the DEB file. Then install it using the following commands:

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## Useful links

- [Homebrew site](https://brew.sh/)
- [rbenv repo](https://github.com/rbenv/rbenv)
- [Calendly browser plugin for Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
- [Calendly browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling)
- [1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager)
- [Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
- [Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
- [Support Ops Toolbox](https://gitlab.com/gitlab-com/support/support-ops/support-ops-tools/toolbox)
- [Slack download page](https://slack.com/downloads/linux)
- [Zoom download center](https://zoom.us/download?os=linux)
