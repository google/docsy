---
title: Recommended Setup
description: Operations documentation on the recommended setup
canonical_path: "/handbook/security/customer-support-operations/recommended-setup/"
---

{{% alert title="Note" color="primary" %}}

These are all recommendations. Some of this might be required for doing your job (1Password, Zoom, Slack, Okta, etc.), but largely if you feel you have a better alternative, go for it!

{{% /alert %}}

## What tooling do we recommend

| Tooling | Why we recommend it |
|---------|---------------------|
| 1Password | You are going to be logging into things. This is helpful to have handy |
| .bashrc/.bash_profile | This will make running a lot of our scripts via CLI easy. See the setup for more information |
| GitLab Token | Will help you in running API calls via CLI to gitlab.com |
| Homebrew | This is super useful for installing things on macOS |
| nodenv | We work with a lot of projects that use a variety of node versions. This tool helps you switch between them very quickly. |
| Okta browser plugin | You are going to be logging into things. This is helpful to have handy |
| Openshot Video editor | We often make videos for training/documentation/etc. Having a solid video editor handy is useful. Openshot is easy to use and open source. |
| rbenv | We work with a lot of projects that use a variety of ruby versions. This tool helps you switch between them very quickly. |
| Slack | How a good portion of the company communicates |
| Visual Studios Code | You are going to need a code editor. This one aligs with the gitlab WebIDE |
| Zendesk Global Token | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful |
| Zendesk Global Sandbox Token | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful |
| Zendesk US Federal Token | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful |
| Zendesk US Federal Sandbox Token | You are going to be using the Zendesk API a good bit. Having your own admin token will be very useful |
| Zoom | What we use 99% of the time for meetings |

### Homebrew

{{% alert title="Note" color="primary" %}}

This is only for those using macOS

{{% /alert %}}

To install homebrew, simply use their setup script:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### rbenv

This is a fantastic tool, especially when needing to utilize many different ruby versions! We highly recommend installing and setting this up on your station.

Once you have this setup, we recommend the following commands be used to install the more common ruby versions we use:

- `rbenv install 3.0.1`
- `rbenv install 3.2.2`

#### macOS setup for rbenv

This is easily done using [Homebrew](#homebrew). The command for this is:

`brew install rbenv`

If you ever need to upgrade it (to get newer ruby versions), you simply would do:

`brew upgrade rbenv ruby-build`

#### Linux setup for rbenv

You can use a package manager (such as `apt`) for this, however we would recommend installing this via `git` instead. To do this, run the following commands:

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

### 1Password

There are two ways to go about this:

- App based (macOS only)
- Browser based

#### App based setup for 1Password

{{% alert title="Note" color="primary" %}}

This is for macOS only. There is a Linux varient, however it does not currently work properly.

{{% /alert %}}

To install the 1Password app, you would utilize [Homebrew](#homebrew) via the following command:

```bash
brew install --cask 1password
```

To upgrade it, you would use:

```bash
brew upgrade --cask 1password
```

#### Browser based setup for 1Password

You can add this to your Chrome based browser using the [1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en) page.

You can add this to your Firefox based browser using the [1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/) page.

### Okta browser plugin

You can add this to your Chrome based browser using the [Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en) page.

You can add this to your Firefox based browser using the [Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/) page.

Once installed, you simply ensure you are logged into Okta via your browser and it should begin working.

### nodenv

This is a fantastic tool, especially when needing to utilize many different node versions! We highly recommend installing and setting this up on your station.

#### macOS setup for nodenv

This is easily done using [Homebrew](#homebrew). The command for this is:

`brew install nodenv`

If you ever need to upgrade it (to get newer node versions), you simply would do:

`brew upgrade nodenv node-build`

#### Linux setup for nodenv

You can use a package manager (such as `apt`) for this, however we would recommend installing this via `git` instead. To do this, run the following commands:

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

### Openshot Video Editor

This one is only really needed if you need a video editor and do not have a preference. Several of us at GitLab use this and find it very simple to use.

#### macOS setup for Openshot

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask openshot-video-editor
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask openshot-video-editor
```

#### Linux setup for Openshot

As this is not part of normal package repositories, you'll need to install a PPA first:

```bash
sudo add-apt-repository ppa:openshot.developers/ppa
sudo apt-get update
sudo apt-get install openshot-qt
```

### .bashrc/.bash_profile/.zshrc setup

What exactly you put in this file it really up to you, but to help ensure all the scripts and the like we use work properly, we would at least recommend doing the following:

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

### Zendesk tokens

As an admin for Zendesk, you are very likely to need to make API calls. Doing this via an API token is useful (and how many of our scripts do it). As such, it is recommend you generate an API token for yourself on every Zendesk instance (production and sandbox) you will be managing.

### GitLab token

We often make things that interact with gitlab.com. As such, having an API token handy for API calls is always useful!

### Slack

This is going to be required for your job, as we communicate a good bit via Slack.

#### Slack setup for macOS

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask slack
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask slack
```

#### Slack setup for Linux

To do this, you will want to install the DEB package from the [Slack download page](https://slack.com/downloads/linux) and then install the DEB file like so:

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Visual Studios Code

This one is only really needed if you need a code editor and do not have a preference. Several of us at GitLab use this and it aligns with the GitLab WebIDE.

#### Visual Studios Code setup for macOS

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask visual-studio-code
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask visual-studio-code
```

#### Visual Studios Code setup for Linux

To do this, you will want to install the DEB package from the [Visual Studios Code download link](https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64) and then install the DEB file like so:

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

### Zoom

This is going to be required for your job, as we communicate a good bit via Zoom.

#### Zoom setup for macOS

This is easily done using [Homebrew](#homebrew). The command for this is:

```bash
brew install --cask zoom
```

If you ever need to upgrade it, you simply would do:

```bash
brew upgrade --cask zoom
```

#### Zoom setup for Linux

To do this, go to the [Zoom download center](https://zoom.us/download?os=linux) and download the DEB file. Then install it using the following commands:

```bash
sudo dpkg -i /absolute/path/to/deb/file
sudo apt-get install -f
```

## Filesystem setup

We utilize a _large_ number of repositories. While you can do many things in the GitLab UI, you are going to eventually run into the need to utilize command line.

As such, we recommend two things:

1. Have local clones of all the repos we work with (that you have access to)
1. Have a script to mass update them as needed

The exact way you go about this is up to you.

{{% alert title="How Jason does it" color="primary" %}}

<details>
<summary>Expand for a wall of text</summary>

I will preface this by stating this is solely how I prefer to do it. This is all going to be based around preference. But you ever see me do things via CLI, matching what I do might help you in replication.

Firstly, I made a folder in my home directory named `dev`

I think begin making child folders to match the namespace pathing of all the repos I deal with.

Since I'm often working out of our namespace and the gitlab-com namespace, I made two folders in `dev`:

```plaintext
.
└── dev
    ├── gitlab-com
    └── gitlab-support-readiness
```

From here, I followed the natural path of our namespace pathing. So as an example, the pathing to the [Zendesk Global ZenDuo app](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zenduo) on my filesystem looks like this:

```plaintext
.
└── dev
    └── gitlab-support-readiness
        └── zendesk-global
            └── apps
```

In that `apps` folder, I then did the `git clone` of the repo in question.

Once I had everything cloned and setup, I then made a script to update my repos (and any submodules). I tend to run this at the start of my day. It helps prevent me from working out of a stale repo.

```bash
#!/bin/bash

echo 'Updating Customer Support Operations repos...'
CWD=$PWD
find /home/jason/dev/gitlab-support-readiness -type d -name .git | while read dir; do
  path=$(echo $dir | sed s_/".git$"__)
  echo "  Updating $path"
  cd $path
  git submodule update --remote --quiet 2>/dev/null
  git pull -q 2>/dev/null
  if [ $? -eq 1 ]; then
    echo "    Branch issue: $(git branch|grep '*')"
  fi
done
cd $CWD
```

As I added other paths (like for the support managed content, the handbook, etc.), I modified that update script to ensure it included those as well.

Finally, I made some aliases in my .bashrc file to help me with quicker navigation:

```bash
alias cdops='cd /home/jason/dev/gitlab-support-readiness'
alias cdglobal='cd /home/jason/dev/gitlab-support-readiness/zendesk-global'
alias cdusfed='cd /home/jason/dev/gitlab-support-readiness/zendesk-us-government'
alias cdusgov='cd /home/jason/dev/gitlab-support-readiness/zendesk-us-government'
alias cdforms='cd /home/jason/dev/gitlab-support-readiness/forms'
alias cdprocessor='cd /home/jason/dev/gitlab-support-readiness/processors'
alias cdslack='cd /home/jason/dev/gitlab-support-readiness/slack'
alias cdteam='cd /home/jason/dev/gitlab-support-readiness/support-team'
alias cdhandbook='cd /home/jason/dev/gitlab-com/content-sites/handbook'
alias cdgem='cd /home/jason/dev/gitlab-support-readiness/gitlab_support_readiness_gem'
```

I also tweaked my shell to display the branch I am working in on the prompt, mainly to help me keep track of it. This is also done in the .bashrc file (not this is going to be specifically for Linux as that is what I use):

```bash
## Show branch info on PS1

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

</details>

{{% /alert %}}

## Useful links

- [Homebrew site](https://brew.sh/)
- [rbenv repo](https://github.com/rbenv/rbenv)
- [Calendly browser plugin for Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en)
- [Calendly browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
- [1Password browser plugin for Chrome](https://chrome.google.com/webstore/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en)
- [1Password browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager/)
- [Okta browser plugin for Chrome](https://chrome.google.com/webstore/detail/okta-browser-plugin/glnpjglilkicbckjpbgcfkogebgllemb?hl=en)
- [Okta browser plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/okta-browser-plugin/)
- [Slack download page](https://slack.com/downloads/linux)
- [Zoom download center](https://zoom.us/download?os=linux)
