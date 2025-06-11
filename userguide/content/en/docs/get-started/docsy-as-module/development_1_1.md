<h1>Local development</h1>

When making changes to the website, it is useful to check how those changes look before committing and pushing them to GitHub. In this case, we can build the website locally first. To do this, you will need to have a few tools installed, namely you will need:

* [`Ruby`](https://www.ruby-lang.org/en/downloads/)
* [`git`](https://git-scm.com/)
* [`python3`](https://www.anaconda.com/download/)

# Installation

The following commands make use of the command line.

## Ruby

### Windows

If you are using a Windows device, use the following [link](https://www.ruby-lang.org/en/downloads/) to download and install `Ruby`.

### Ubuntu

```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install build-essential ruby2.4 ruby2.4-dev
sudo gem update install --system
```

### Mac

Whilst MacOS comes with `Ruby` pre-installed, it is only updated with updates to the system. Therefore on a Mac, we recommend using [`Homebrew`](https://brew.sh/) to manage your installations. To install `Homebrew`, run the following command.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now you are ready to install `Ruby`.

```
brew install ruby
```

## Gems

Once you have `Ruby` successfully installed, you are now ready to install the gems. The following commands will work regardless of your operating system.

```
gem install bundler
bundle install
```

The `bundler` will install the package versions as listed in the `Gemfile`.

## Git

Note: we will assume you have a GitHub account for this part.

We will need `git` to `clone` your forker copy of the repository. You can download and install `git` from the [official Git download page](https://git-scm.com/downloads), or if you are using `Homebrew` on a Mac, just use:

```
brew install git
```

Once you have `git` installed, you will need to set `git` up by setting your [username](https://help.github.com/articles/setting-your-username-in-git/) and [email address](https://help.github.com/articles/setting-your-email-in-git/).

## Python 3

The easiest way to install Python for Mac and Windows is the [Anaconda distribution](https://www.anaconda.com/download/). Make sure to download version 3.

For Linux you may get away with installing just the packages you need: `python3`, `python3-yaml`, `python3-pandas`, `python3-pandas-lib`, `python3-setuptools`, `python3-pip`.

The pre-processing works fine for version anything greater than or equal to 3.4.

## Building the site

After you have gone through the [quick start](quick-start.md) to implement the platform, you will be ready to `clone` the site repository. On the command line, change your directory (`cd`) to the relevant area of your computer where you wish to store the website files and type:

```
git clone https://github.com/{#NAME}/open-sdg-site-starter.git
cd open-sdg-site-starter
```

Where `{#NAME}` is the name of the organisation or user account you have forked the starter site repository to.

You can build and run the site locally using:

```
bundle exec jekyll serve
```

You should see that `jekyll` provides us with a server address from which we can access the site. Copy and paste this URL into any web browser to see any changes. Remember you will need to "commit" and "push" these changes to your `develop` branch on GitHub for others to view them.

## Developing the platform

To work on Open SDG itself, you will need Ruby, Python, and Node.js. Fork and clone the repository to your computer. Then:

```
make serve
```

And to run the tests:

```
make test
```
