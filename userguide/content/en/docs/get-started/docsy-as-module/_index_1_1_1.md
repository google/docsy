---
title: Tools and tips
simple_list: true
---

## Overview

This page contains useful tips for working at GitLab and for various tools we use.

## GitLab tips

### Change your username at GitLab.com

- Starting point: let's say your username is `old-mary` and you want it to be just `mary`.
- **Note:** each GitLab account is tracked by an **userID**, which is a number stored in a database.
If we change the username, the userID does not change.
And all the permissions, issues, MRs, and relevant stuff within GitLab are related to your **userID**, not with your username.
- **Note:** if you are not a GitLab Team member, the same process applies except your e-mail ([STEP 2](#change-username-step-2)), which will be different (will not be @gitlab.com email), so you can replace it with your own email account.

#### STEP 1: Request your new username

- As of this [Merge Request](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5170), it is no longer possible to request a username via the [Namesquatting process](/handbook/support/workflows/namesquatting_policy). If the username you wish to use is unavailable, you will have to pick a different one.

#### STEP 2: Create a new account with your new username {#change-username-step-2}

- If support replies to you telling that the username is free to use, create a new GitLab.com account with it.
Use a personal email to register your new account and choose one that has not been used with your old GitLab account.
- Navigate to your [**Profile Settings** > **Emails**](https://gitlab.com/-/profile/emails), and add a new email.
⭐️ **Trick** ⭐️ If your email at GitLab is `mary@gitlab.com`, add the new email as `mary+something@gitlab.com`: this is a [Gmail trick](https://support.google.com/mail/answer/12096?hl=en)! All your emails sent to this alias will end up in your GitLab email account 😃
- Navigate to [https://gitlab.com/-/profile/notifications](https://gitlab.com/-/profile/notifications) and choose the notifications email: `mary+something@gitlab.com`.
- Open your old account in one browser and the new one in another browser (e.g., Chrome and Firefox, or Chrome and Safari) - log in to both accounts at the same time.

#### STEP 3: Let's have some fun (kidding, this is critical!)

- Navigate to [https://gitlab.com/-/profile/account](https://gitlab.com/-/profile/account) in both your accounts.
- Look for your username.
This operation has to be done quickly, otherwise you are risking to lose your awesome new username to someone else quicker than you.
We need to **swap** the usernames between both accounts, so you'll keep all your history, your privileges, issues, and MRs assigned to you, etc.
- If you work with 2 monitors, open each browser on one monitor.
If you don't, open them side by side, so that you can keep an eye on both at the same time.
- Rename your new username `mary` to something like `mary-1` and **DO NOT** click **update username** yet.
Rename your old username `old-mary` to your new username `mary` and **DO NOT** update that either.
Just leave them typed into the boxes.
- Make sure you did the previous step right!
- ⚠️ **CRITICAL** ⚠️ Update the first one (`mary` to `mary-1`).
Immediately, click **update** on the other one (`old-mary` to `mary`).
- Immediately, rename the `mary-1` to your old one `old-mary` and click **update username** again.
- Ta-Da! 🙌

#### STEP 4: Move your projects (or not)

- Now, if you have any personal projects, you might want to import them to your new account (the one that has your old username now).
To do that, in your new account (the one with the old username), click **Create a New Project**, give it the very same name as the original one, click **Git - add repo by url**, and paste the `https://` URL of your project there.
To make things easier, make sure all the projects you want to import are set to `public` view.
You can make them private afterwards.
- If you have GitLab Pages projects with the default **GitLab.io** url, you will need to import them to you new account, then make a change to **trigger a build** and redeploy your site.
They will be affected only if you're using a [CNAME with a subdomain instead of an A record](https://about.gitlab.com/blog/2016/04/07/gitlab-pages-setup/#custom-domains).
This won't affect Pages projects that use custom domains, as they all point to the same Pages server IP via `A` record.
Your groups won't be affected either, as they operate under their own namespace.
Add both users as members of your groups and nothing changes.

That's it!

#### STEP 5: Update your username in other places

Don't forget to update your username in the following places:

- [team page](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/team.yml)
- If you're part of Marketing, [Marketing Handbook](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/handbook/marketing/index.html.md)
- Workday - GitLab Username under 'Additional Data' > 'View all' in your profile actions

#### STEP 6: Set up your notifications

Team members choose to manage their GitLab activities in different ways. Setup your notifications in a way that works best for you.

1. **To-do list:** all team members will see a [to-do list](https://docs.gitlab.com/ee/user/todos.html) within their GitLab account. This will track different action items. Items can be marked as done as they are completed.
1. **Email:** team members can choose which, if any, notifications show up in their Gmail accounts by [using filters](#filters).
1. **Slack notifications:** team members can choose to enable [Slack notifications](https://docs.gitlab.com/ee/user/project/integrations/gitlab_slack_application.html). Please note that GitLab slack expires after 90 days, so this is not a tool for longer-term activity management.

### GitLab team members' resources

The [GitLab team-member resources project](https://gitlab.com/gitlab-com/gitlab-team-member-resources) has a wiki for sharing among [GitLab team-members](/handbook/company/structure/).

It's for topics like parenting where people may want to share knowledge, but the handbook is not the best fit.

### GitLab team members' setups

[@tipyn](https://gitlab.com/tipyn)'s [home office equipment and macOS setup](https://gitlab.com/tipyn/tipyn/blob/master/mac-os-setup.md)

### Linking Gravatar photo

Link your GitLab email address to an easily recognizable photo of yourself on GitLab, Slack, and [Gravatar](https://gravatar.com/).
It is company policy to use a photo, and not an avatar, a stock photo, or something with sunglasses for any of your GitLab accounts, as we have a lot of GitLab team-members and our brains are comfortable with recognizing people; let's use them.

***Note**: If you upload your photo to Gravatar associated with your gitlab.com email, then you can simply not set an image in your GitLab and Slack profiles and they will automatically use your Gravatar photo.  If you already uploaded individual photos to your GitLab and Slack profiles, simply removing them will cause your avatar to use the Gravatar photo by default.*

### Using Mermaid

Mermaid is a tool that allows us to create flowcharts, graphs, diagrams, Gantt charts, etc. within GitLab! Check out the [examples in the GitLab docs](https://docs.gitlab.com/ee/user/markdown.html#mermaid) on how to use Mermaid.

A few additional resources that can be helpful when working with Mermaid are:

- The [live mermaid editor](https://mermaid-js.github.io/mermaid-live-editor) to check your work!
- [GitHub's Mermaid overview](https://mermaid.js.org/#/)
- A [CSS color bank](https://www.rapidtables.com/web/css/css-color.html) to add color to your charts.
- You can see an example of how to add images to Mermaid charts [here](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgQVtDaHJpc3RtYXNdIC0tPnxHZXQgbW9uZXl8IEIoR28gc2hvcHBpbmcpXG4gIEIgLS0-IEN7TGV0IG1lIHRoaW5rfVxuICBDIC0tPnxPbmV8IERbTGFwdG9wXVxuICBDIC0tPnxUd298IEVbaVBob25lXVxuICBDIC0tPnxUaHJlZXwgRltmYTpmYS1jYXIgQ2FyXVxuICBDIC0tPiBHXG4gIEcoXCI8aW1nIHNyYz0naHR0cHM6Ly9pY29uc2NvdXQuY29tL21zLWljb24tMzEweDMxMC5wbmcnOyB3aWR0aD0nMzAnIC8-XCIpIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJzZWN1cml0eUxldmVsIjoibG9vc2UifX0).
- Examples of Mermaid charts that have been created by GitLab team members:
  - [Talent Development Program Chart](/handbook/people-group/talent-development-program/#talent-development-program-chart) by [Cassiana Gudgenov](https://gitlab.com/cgudgenov), People Compliance Partner
  - [CEO Year at a Glance](/handbook/company/cadence/#year)
  - [Data Infrastructure System Diagram](/handbook/enterprise-data/platform/)
- [Advanced layout demos](mermaid) for Mermaid diagrams

*Note: When creating Mermaid charts in the GitLab handbook, you need to type `three back tick symbols` followed by the word `mermaid` before the chart, and `three back tick symbols` at the end of the chart. This will enable Markdown to distinguish between .md and Mermaid. Please reference the example Mermaid charts linked above to see how this looks live.*

### Visual help to differentiate between GitLab servers

If you are working on multiple GitLab instances and want to have a visual differentiation, you can change the default [Navigation theme](https://docs.gitlab.com/ee/user/profile/preferences.html#navigation-theme) to a different color.

### Calculating the GitLab handbook page count

Page counts are determined through a simple two-step process:

1. Count the number of words in the handbook.
This can be done by running `find source/handbook -type f | xargs wc -w` from the root directory of the repository.
1. Submit the word count to [WordCounter](https://wordcounter.net/words-per-page) for conversion to a page count.

### Trainee maintainer issue upkeep

Part of the [maintainer training process](/handbook/engineering/workflow/code-review/) is to keep track of Merge Request that have been reviewed and writing down an assessment on the review in the maintainer training issue.
Manual upkeep of the maintainer training issue can be time consuming. There are tools that others have built to help with this task:

- <https://gitlab.com/nolith/review-tanuki>
- <https://gitlab.com/splattael/traintainer>
- <https://gitlab.com/arturoherrero/trainee>
- <https://gitlab.com/alberts-gitlab/review-tanuki>
- <https://gitlab.com/gitlab-org/gitlab-dev-cli#maintainer-trainee-helper>

**Note:** When using these tools, avoid adding mentions to maintainers in existing comments. There is a [known issue](https://gitlab.com/gitlab-org/gitlab/-/issues/118779) where users are not notified by email when mentioned in an edited comment. It only generates a TODO which a maintainer may not use.

## Handbook Tips

Refer to the [Handbook Development section](https://handbook.gitlab.com/docs/development/) to learn more about the architecture, structure and how to edit the handbook locally on your desktop. For how to edit the handbook in your browser, refer to [the editing handbook page](/handbook/about/editing-handbook/).

## www-gitlab-com Tips

Portions of the [https://about.gitlab.com](https://about.gitlab.com) site lives in the
[www-gitlab.com](https://gitlab.com/gitlab-com/www-gitlab-com/) repo. The marketing website is maintained by the [digital experience team](/handbook/marketing/digital-experience/) in their [GitLab group](https://gitlab.com/gitlab-com/marketing/digital-experience).

The `data/*.yml` files live in the `www-gitlab-com` repository, and are used by numerous sites including the marketing website and the handbook.

The documentation for the site itself is in markdown documents under the
[`doc` folder in the repo](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/doc). If you are looking to do local development on the site,
[doc/development.md](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/doc/development.md)
is probably the best place to start.

## Image and GIF tips

Many of the tips shown in this section require ImageMagick, an image manipulation tool. The installation is described in the [ImageMagick section](#imagemagick).

### ImageMagick

[ImageMagick](https://imagemagick.org/) provides the `convert` CLI command which can be used to resize images, add drop shadows, edit GIFs, etc.

On macOS, install ImageMagick with Homebrew:

``` shell
brew install imagemagick
```

On Linux, use your package manager:

``` shell
sudo dnf install ImageMagick
sudo apt install imagemagick
```

### Creating GIFs

We have a [dedicated section](/handbook/product/product-processes/making-gifs/) for that in the handbook.

### Resizing images

[ImageMagick](#imagemagick) provides the `convert` CLI command which can be used to resize images. Our blog images do not need resolutions higher than 1920x1080. This saves bandwidth and makes the website load faster.

This example converts an existing image to `1920x1080` resolution and replaces it inline:

``` shell
convert blogimage.jpg -resize 1920x1080 blogimage.jpg
```

You can also use percentage values for the `-resize` parameter. The `convert` CLI command can do more things explained in the [documentation](https://imagemagick.org/script/convert.php).

If you need to convert multiple images, combine the `convert` command with `find`. Note that this replaces the images inline.

```shell
find . -type f -name '*.jpg' -exec sh -c 'convert {} -resize 1920x1080 {}' \;
```

### Convert HEIC to JPG

> Tip: Modern macOS versions provide the Finder right-click menu `Quick Actions > Convert Image` which automatically converts an image to JPG. Use this method for quick UI conversions.

[ImageMagick](#imagemagick) provides the `mogrify` CLI command which can be used to convert the `HEIC` image format to other formats like `JPG` which are accepted on all websites.

```shell
mogrify -format jpg icloudphoto.HEIC
```

If you need to convert multiple images, combine the `mogrify` command with `find`. Note that this creates new files and requires manual cleanup of `.heic|HEIC` files, `-iname` uses a case insensitive match.

```shell
find . -type f -iname '*.heic' -exec sh -c 'mogrify -format jpg \"{}\"' \;
```

An example shell alias can be found in [@dnsmichi's dotfiles project](https://gitlab.com/dnsmichi/dotfiles/-/blob/main/.oh-my-zsh/custom/aliases.zsh?ref_type=heads).

### Add drop shadow to images

[Install ImageMagick](#imagemagick) and use the `convert` CLI command to add a drop shadow. The `-shadow` parameter may need adjustments on the dimension.

```shell
convert input.png \( +clone -background black -shadow 80x20+0+15 \) +swap -background transparent -layers merge +repage output.png
```

## Troubleshooting

### 2FA debugging

If 2FA stops working unexpectedly (no new phone or computer) it's usually because of improperly configured date & time on either device.
Make sure that "Automatic Date & Time" is **enabled** on both devices.
If they're already enabled try toggling them off and on again to force an update.
If this doesn't work, request that IT Ops reset your 2FA setting.

Links for finding the settings:

- iOS: [Get help with the date and time on your iPhone, iPad, and iPod touch - Apple Support](https://support.apple.com/en-us/101619)
- macOS: [If the date or time is wrong on your Mac - Apple Support](https://support.apple.com/en-ca/guide/mac-help/mchlp2996/mac)
- Linux (using systemd): [systemd-timesyncd - ArchWiki](https://wiki.archlinux.org/title/Systemd-timesyncd)

For Android there's no definitive link, since most vendors have different UIs for their settings.
But in the Settings-app, look for "Date & Time" and there should be a "Automatic Date & Time" toggle.

### Check which process occupies a given port

#### Using Netstat

Netstat is a command line tool which can be useful to print network connections, routing tables, interface statistics, etc. One of the most common uses for netstat during troubleshooting is to display a list of open ports listening for connections.

`sudo netstat -tulpn | grep -i listen`

```sh
[user@gitlab ~]$ sudo netstat -tulpn| grep -i listen
 tcp   0      0 127.0.0.1:5000     0.0.0.0:*     LISTEN     18948/registry
 tcp   0      0 127.0.0.1:9100     0.0.0.0:*     LISTEN     18841/node_exporter
 tcp   0      0 127.0.0.1:9229     0.0.0.0:*     LISTEN     18764/gitlab-workho
 tcp   0      0 127.0.0.1:8080     0.0.0.0:*     LISTEN     18980/unicorn maste
 tcp   0      0 127.0.0.1:9168     0.0.0.0:*     LISTEN     18808/puma 4.3.3.gi
 tcp   0      0 0.0.0.0:80         0.0.0.0:*     LISTEN     18831/nginx: master
```

If you find a port already in use, you won't be able to successfully start up a service or program that utilizes that same port. Options to resolve are:

- Stop the service currently running on the needed port and confirm the port is no longer in use
- Review documentation to determine whether it is possible to specify an alternate port for either process (the existing one or your new service)

#### Known Port Conflicts

When the GitLab Development Kit cannot start using the `./run` command and Unicorn terminates because port 3000 is already in use, you will have to check what process is using it.
Running `sudo lsof -iTCP:3000 -sTCP:LISTEN -n -P` will yield the offender so this process can be killed.
It might be wise to alias this command in your `.bash_profile` or equivalent for your shell.

You may also wish to add a function in your `.bash_profile` (or equivalent file for your shell) like this:

``` zsh
function killport() {
  lsof -i tcp:$1 | awk '(NR!=1) && ($1!="Google") && ($1!="firefox") {print $2}' | xargs kill
}
```

which you can use like so:

``` shell
> killport 3000
```

and it will kill whatever process is currently using port 3000.

## Terminal

### Display current git branch in the console

By adding this small configuration you will be able to view the git branch that you are using currently.
If you are not inside a git repository, it only displays the username and the current directory.

**For Bash:**

Add the following lines in your `.bash_profile`

``` sh
git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\u@\[\033[32m\]\w\[\033[33m\]\$(git_branch)\[\033[00m\]\$ "
```

Doing the following, makes the changes to get reflected in you current terminal:

``` sh
source ~/.bashrc
```

**For Zsh:**

On macOS Catalina, ZSH is the [default shell](https://support.apple.com/en-us/102360).
By installing [Oh My ZSH!](https://ohmyz.sh/), the git plugin is automatically loaded and shows the current git branch.

Another option would be:

Add the following lines in your `~/.zshrc`

``` sh
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
PROMPT="%n@%d~%f%\$(parse_git_branch) %# "
```

The changes will show on the next terminal or immediately by running.

``` sh
. ~/.zshrc
```

### Shell aliases

Use command aliases in your shell to speed up your workflow.
Take a look at [these aliases](https://gitlab.com/sytses/dotfiles/blob/master/zsh/aliases.zsh) and others in [Sid's dotfiles project](https://gitlab.com/sytses/dotfiles/tree/master).
For example, by adding the following to your `.bash_profile` or equivalent for your shell, you can just type<kbd>s</kbd>to checkout the `master` branch of this website, pull the latest changes, and open the repository in Sublime Text:

``` sh
alias gco='git checkout'
alias gl='git pull --prune'
alias gca='git commit -a'
alias gp='git push origin HEAD'
alias www='cd ~/Dropbox/Repos/www-gitlab-com/source'
alias s='www;subl .;gco master;gl'
```

After editing, you can just type<kbd>gca</kbd>to commit all of your changes, followed by<kbd>gp</kbd>to push them to the remote branch.

If you are using [Oh My ZSH!](https://ohmyz.sh/), you can add custom aliases shown below. You can freely define the file name, only the suffix `.zsh` is important.

``` sh
vim ~/.oh-my-zsh/custom/aliases.zsh
```

An example can be found in [Michael Friedrich's dotfiles project](https://gitlab.com/dnsmichi/dotfiles/-/tree/main/.oh-my-zsh/custom).

#### Delete local Git branches where remote branch was deleted

In order to delete local Git branches which are deleted on the remote server, you'll need to combine the `--prune` pull/fetch command with more commands. `git branch -vv` lists all details of local branches, the followed `grep` filters for all marked gone in the default remote `origin` and prints the results with `awk`. This argument is passed into `git branch -d`, and executed for all matching results. Note that `-d` does not delete unmerged branches. `-D` has more impact but can accidentally delete branches.

```sh
# Delete all remote tracking Git branches where the upstream branch has been deleted
alias git_prune="git fetch --prune && git branch -vv | grep 'origin/.*: gone]' | awk '{print \$1}' | xargs git branch -d"
```

Run the command without the final deletion command to see the potential affected branches. Note that `\$1` is shell escaped in the alias and needs to be executed as `$1`.

```sh
git fetch --prune && git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}'
```

### Dotfiles

You can use dotfiles to customize your system, and keep all configuration in a central place. The name `dot file` is derived from Linux/Unix where all configuration files started with a dot, hiding them from the default list view `ls`.

Team member dotfiles projects:

- [Sid Sijbrandij's dotfiles](https://gitlab.com/sytses/dotfiles)
- [Michael Friedrich's dotfiles](https://gitlab.com/dnsmichi/dotfiles), more details in [this blog post](https://about.gitlab.com/blog/2020/04/17/dotfiles-document-and-automate-your-macbook-setup/)
- [Brendan O'Leary's dotfiles](https://gitlab.com/brendan/dotfiles)

## Traveling

### Long haul flights

Note: you have to pay for these items yourself.

- [Quiet comfort Bose over ear noise canceling headphones](https://www.bose.com/p/noise-cancelling-headphones/quietcomfort-acoustic-noise-cancelling-headphones/QC-HEADPHONEARN.html) (so it doesn't touch your dried out eyes)
- Custom molded ear plugs (can be up to $200 hearing aid store but are usable in many situations, there are also [DYI kits](https://www.amazon.com/Radians-CEP001-Custom-Molded-Earplugs/dp/B003A28P4I) but Sid has not tried that)
- Melatonin (possible unsafe during pregnancy and breast-feeding)
- Sleeping pills (over the counter is fine)

### WorkFrom

[WorkFrom](https://workfrom.co/) is a crowd-sourced resource of coffee shops and other such places that are remote-work friendly.

### Wi-fi usage

When using unsecured Wi-Fi, consider a personal VPN.
We [don't have a corporate VPN](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust/#why-we-dont-have-a-corporate-vpn) but consider [purchasing](/handbook/finance/expenses/#vpn-subscription) a [personal VPN](/handbook/tools-and-tips/personal-vpn/) if you travel for GitLab or use unknown networks often.

Remember that if your job has restrictions based upon geolocation (for example supporting customers with specific data restrictions and country-based access), a personal VPN may not be the best choice as often the VPN vendor routes traffic through other countries.
If this restriction applies to you, consider tethering.
[Tethering](https://en.wikipedia.org/wiki/Tethering) is when you set up your mobile phone as a hotspot and connect your laptop up to it via Wi-Fi, avoiding the unsecured Wi-Fi network.
There is more information [here](https://www.computerworld.com/article/1536443/how-to-use-a-smartphone-as-a-mobile-hotspot.html) on the subject, and as long as your data plan supports it, you should be good to go.
Double check before international travel, as it may be supported but have hidden costs.

When connecting to a network with a [captive portal](https://en.wikipedia.org/wiki/Captive_portal), most websites will not load as modern sites use HTTPS, and captive portals interrupt that process.
Your device will try and compensate for this, but it can be tough to manage manually.
If you have trouble, try connecting to [https://captive.apple.com/](https://captive.apple.com/) first, which is intentionally only HTTP and will load the captive portal.

### FIDO2 / WebAuthn

FIDO2 is a cryptographically strong 2FA (2-factor authentication) method. It is hardware-based, and is typically deployed via a USB, NFC, or built into a device such as a MacBook's Touch ID or iPhone's Face ID. The standard is open and is maintained by the [FIDO Alliance](https://fidoalliance.org/). [WebAuthn](https://www.okta.com/sites/default/files/pdf/How_WebAuthn_Works_0.pdf) is a component of FIDO2 that supports verification by web applications using public key cryptography. FIDO2/WebAuthn is the preferred method of 2FA and is highly recommended by GitLab's Security Department. One of the points of 2FA is that while you are authenticating with a username and password for the first factor, a secondary factor should use a separate - or "out of band (OOB)" - communication channel for the authentication. FIDO2/WebAuthn devices certainly meet that criteria, better than all other methods. There are other 2FA methods [outlined below](#other-2fa-methods).

#### How it works

During the authentication process, you enter in your username and your password. On systems with 2FA enabled and using FIDO2/WebAuthn, the hardware token is queried. By pressing a button or tapping a sensor on the FIDO2 device, the FIDO2 device completes the authentication process in a cryptographically strong way. It is generally considered the most secure form of 2FA. It is also more convenient than manually entering codes generated by a [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) application.

During the registration of the FIDO2/WebAuthn device, a public/private key pair is generated, with the public key being registered with the service you will be authenticating with, and the private key is stored on a secure chip in the device. When authenticating, after you've entered in your username and password, the device is queried via an encrypted message that can only be authenticated by the private key, so a button or sensor is pressed on the device to allow the query to be completed, and the user is then granted access to the system.

#### FIDO2/WebAuthn devices

YubiKey: The most popular FIDO2/WebAuthn device is Yubico's YubiKey. There are a wide variety of sizes and styles of YubiKeys. Yubico (along with Google) helped develop the predecessor to FIDO2 standard (U2F) before it was moved to the FIDO Alliance. Most GitLab team members that have WebAuthn devices have a YubiKey. It should be noted that for a long time Yubico's source code for its firmware was open source, but some of the newer versions of firmware are closed source. This has caused some concern in the security community, particularly those that prefer to use open source whenever possible.

#### Are They Secure?

YubiKey has been examined by the security industry at large, third party audits and by the Security Team. YubiKey's are more than suitable for use within GitLab and work fine with FIDO2/WebAuthn-compatible systems.

YubiKey has had a number of [security issues](https://www.yubico.com/support/security-advisories/) which are typically resolved quickly. They have a dedicated page for security advisories.
In rare cases, a security issue involving a hardware token arises that requires the hardware token to be replaced as a firmware update will not mitigate the issue. This happened with [Yubico in 2017](https://support.yubico.com/hc/en-us/articles/360021803580-Infineon-RSA-Key-Generation-Issue-Customer-Portal).

Most of the attack models that impact the FIDO2/WebAuthn tokens require physical access to the token itself. That is, the security advisories involve coding issues that can only be exploited via access to the token or the computer that the token is plugged into. This in itself makes the devices more secure.

### Recommendations

While there are other hardware tokens that are also decent and will function with GitLab, some have limitations. The recommended solution for team members is Yubico's YubiKeys.

- Please fill out this [form](https://forms.gle/VZ7Q4RWXfmfB58FJ9) before ordering a YubiKey, as we may be able to provide a YubiKey via our group buy subscription.
- Recommended YubiKey models include the YubiKey 5Ci (for iPhone users) and YubiKey 5 NFC (for Android users).

What GitLab team members need to keep in mind is that if you travel with your company laptop - either on a business trip, a trip to visit family and friends in another location but you intend to keep working, or just a trip to the local coffee shop - treat the token with the same level of care as a credit card. Do not leave it where it could be stolen.

If you are concerned about potentially losing your hardware token, be sure to add [Touch ID](/handbook/it/okta/#i-want-to-add-touch-id--face-id--face-authentication--yubikey-to-okta) and potentially a [mobile device](/handbook/security/corporate/systems/okta/verify/) as an accepted authentication token. Sites following the FIDO2/WebAuthn standard should support multiple tokens. That way if one is lost or stolen, you can still login use another method. Currently YubiKey's are limited to one per user, in the case of lost or damaged, please reach out in the #it_security_help Slack channel and we'll assist you with a replacement.

Usage of 2FA is mandatory for GitLab team members.

## Other 2FA Methods

In addition to [FIDO2/WebAuthn](#fido2--webauthn), there are additional protocols used for 2FA. There is "cryptographic push", [TOTP](https://en.wikipedia.org/wiki/Time-based_One-Time_Password), and SMS-based authentication (text message). Pluses and minuses to each are listed below.

### Cryptographic Push

This is usually shortened to simply "push technology". It is called "push" because during the authentication process, after you've entered your username and password, the service you are authenticating with automatically "pushes" a secondary authentication via a separate communications channel to a device you possess. This is usually your phone, and it is facilitated via a phone app that is specific to that process. During the registration process a cryptographically-secure key pair is generated, and the app uses that key pair to uniquely identify the Push as coming from the service you are authenticating to. Typically the app then either directly notifies you or you access the app, which will pop up a message asking if you were in fact trying to authenticate. Answer yes and the authentication process is complete. GitLab team members may be familiar with this Push method as it is used by [Okta Verify](https://help.okta.com/eu/en-us/Content/Topics/end-user/ov-overview.htm).

#### Push Caveats

This method is not quite as secure as a hardware token, as typically those devices stores data securely on the secure chip on the device itself. It is possible that the Push phone app is also storing secret data on the local secure chip on the phone, however the entire process is dependent on the service's servers being up, and WebAuthn is more self-contained. But note that Push technology is still considered extremely secure, and once configured it is fairly convenient to use.

### TOTP

Timed-based One-Time Password is fairly secure. This method involves a rotating value based off of a cryptographic seed that is used to uniquely identify communication between the service and the end user authenticating. The value is (usually) a six digit number that changes every 30 seconds, and during the authentication process after you've successfully entered in your username and password, you are asked to enter in the value. GitLab team members should use [1Password](/handbook/security/corporate/systems/1password/) to manage TOTP codes.

#### TOTP Caveats

The main problem with TOTP is that during this 2FA process it typically involves the end user entering in all values through a single communications channel (usually a web browser). As this is the case, it is possible that an attacker could send you a fake web page for you to enter in your credentials, including your TOTP value. Granted, the attacker would have to be reading your replies and sending in all of your credential information extremely quickly and get the entire process completed with 30 seconds so the risk is greatly reduced, but it still exists. Both WebAuthn and Push are preferred over TOTP, but as long as you are the one initiating the communication and you are not clicking on a link in email, you should be okay.

### SMS

One of the more popular (and most common) methods of 2FA is SMS-based text messaging. It is similar to TOTP, but instead of using a locally-stored application to calculate the six digit number, the service you are authenticating to sends the six digits to you via an SMS text message. When you set up your account, you provide the service with your cell phone number so they know which phone number to send the six digits to.

#### SMS Caveats

Due to the number of caveats, SMS is only recommended if there is no other 2FA option available. Here are the main problems with SMS messaging.

- SMS is subject to the same phish-style attack as TOTP. The main difference is that some SMS-based authentication schemes time out after 60 seconds instead of 30, making the phish-style attack slightly easier for the attacker.
- The information regarding your phone number is stored on a SIM card in your phone. If an attacker with physical access to your phone were to steal the SIM, they could impersonate you from their own phone. Of course they could do the same thing with your hardware token, however they would still need your username and password to use the hardware token. Unfortunately, calling up the service and asking for your password to be reset is often confirmed using SMS messaging, so with the possession of the SIM card, the attacker could pose as you. Again, if you treat your phone the same way you treat your credit card or cash, then this type of attack is minimized.
- An attacker could contact your phone carrier, impersonate you and state you lost your phone, and set up a new SIM card. Unfortunately many times your account is protected with a security question such as "mother's maiden name", "favorite restaurant", or some other simple question - all information that could be determined from a website that does family trees or via social media where you post pictures of your dinner.
- An older attack known as "[SIMJacker](https://www.enea.com/info/simjacker/)" allowed an attacker to send your phone an SMS message with a malicious payload that allows for direct manipulation of the SIM card itself. This attack still works on older SIM cards, although more modern SIMs are no longer vulnerable to this. Most of the known attacks using SIMJacker involved Latin and South America, the Middle East, Northern Africa, parts of Eastern Europe, and parts of Southeast Asia.

#### If You Must Use SMS

There may be services that only offer SMS as their 2FA solution, so in those cases it is better than nothing. If this is the case, there are a few things you can do to secure things ever so slightly.

- If you have an old phone (5+ years old) you might want to consider upgrading the SIM to a recent one, as these are not susceptible to the SIMJacker issues.
- Contact your phone carrier and ask if there are additional security measures to protect your account besides security questions, such as a PIN. In lieu of that, you could also try setting your mother's maiden name or family pet security questions to something more, shall we say, unique (e.g. `Hdyla86kajDF64asdlui`).
- Set a SIM PIN. For iOS devices, follow these [instructions from Apple](https://support.apple.com/en-us/118228). For Android devices, start with [these instructions](https://www.digitalcitizen.life/how-change-or-remove-sim-pin-android-2-steps/) but contact your phone's manufacturer website if the instructions do not fit your particular model.
- Complain to the service to offer more than just SMS for 2FA! The more complaints they get, the more likely they might be to offer more secure options.

### Additional 2FA Concerns

Remember the purpose of 2FA - it is a secondary authentication method, invoked after the primary authentication method has succeeded. You should only acknowledge a 2FA request if you personally have just successfully completed the primary authentication. An unsolicited 2FA request means someone has your password, and is in the process of trying to log in as you. This is why 2FA exists, to help protect your user account from attacks involving your password.

If you experience any such irregularities, please bring it to the attention of the Security Team. For more information, review the handbook regarding [Security Awareness](/handbook/security/security-assurance/governance/sec-awareness-training/)

## Slack

There is a lot of information pertaining to Slack, as it is a critical part of GitLab's communication. See the [Slack handbook page](slack.md).

## Zoom

There is a lot of information pertaining to Zoom, as it is a critical part of GitLab's
communication. See the [Zoom handbook page](zoom.md).

The [Google Calendar](/handbook/tools-and-tips/#google-calendar) invite is the single source of truth for the Zoom link. Avoid linking the Zoom link in Google Document agendas since those may quickly become out of date. If the zoom link changed around the start of the meeting it is OK to have it in there temporarily.

## Google

Need a new document or new slide deck quickly? Use shortcuts like <https://doc.new> or <https://slide.new>. The full list (not even restricted to Google products) is available at <https://whats.new/shortcuts/>.

### Google Docs

#### Google Docs Pro Tips

1. Quickly create a new Google Doc in chrome: type "docs.new" in the chrome address bar.
Likewise "sheets.new" for a Google Sheet etc...
1. While in a document with many other editors, click on the image or icon of any user at the top of the document to move focus to their cursor and what they are typing in the document.
This is great when someone is speaking about something they are typing on a video call and you are not sure where they are in the document.
1. Quickly find all action items assigned to you with a [search for `followup:actionitems`](https://drive.google.com/drive/search?q=followup:actionitems).
1. To add additional rows to a numbered list in a Google Document, press `Return` to add additional spaces under the existing numbered list in the document, highlight those spaces, and click the numbered list icon in the formatting bar (or press `Command ⌘ + Shift + 7` on a Mac) to create a numbered list from the spaces. See video on [how to add more rows to a numbered list](https://www.youtube.com/watch?v=dgyttEJi-ZQ) for a quick tutorial.
1. Type the `@` character to quickly embed today's date, other document titles, references to people, and more; without clicking anything (a menu will pop up). See details in the [Smart Canvas](https://cloud.google.com/blog/products/workspace/delivering-new-innovations-in-google-workspace-with-smart-canvas) blog post and the [Add items with the @ menu](https://support.google.com/docs/answer/11276813?hl=en) support doc.
    - [Emoji live-search](https://support.google.com/docs/answer/3371015) can be accessed by typing `@:`, or shorter using the `:` character. Start typing to search for an emoji and press enter to insert.
1. Pageless docs are great for documents you don't intend to print, and is the [preferred format at GitLab](/handbook/communication/#pageless-is-the-gitlab-preferred-format). You can [switch in File > Page setup](https://support.google.com/docs/answer/11528737).

See also [Live Doc Meetings](/handbook/company/culture/all-remote/live-doc-meetings/) for more Google Doc tips.

### Google Analytics

[Google Analytics (GA)](https://analytics.google.com/) is an essential tool for making data-driven decisions.
It receives data from both about.gitlab.com and docs.gitlab.com websites.
Read through the [Inbound Marketing Handbook](/handbook/marketing/inbound-marketing/search-marketing/analytics/) for more information on GA.

For example, you can look at the GA data to analyze how visited is a certain page, in a period of your choice.
You can also look at the GA referrals data to understand where the users are coming from and where they go when they leave a certain page.

To see the data for a specific page:

- Open [GA](https://analytics.google.com/analytics/web/), and expand **Behavior** on the sidebar
- Click **Site content > All pages**
- On the top-right, adjust the period of time you'd like to analyze
- On the middle of the page, look for a search bar and paste the URL you'd like to analyze (without `https://`) and click on the magnifier button to search:
![Google Analytics - find pageviews](/images/tools-and-tips/google-analytics-find-pageviews.png)
Note that you can use the search tool with:
  - A full URL, which will return results for that specific URL
  - Part of an URL, e.g., `/2017/`, which will return the results for all the blog posts published on 2017
  - The higher directory on the file tree, which will return the results for a range of URLs in that tree.
    E.g., `docs.gitlab.com/ee/ci/` will return the results for all the range of pages contained in the `/ci/` directory
- GA will output the data about the page (or range of pages) you searched for, including pageviews, unique pageviews, and other data:
![Google Analytics - see pageviews](/images/tools-and-tips/google-analytics-pageviews.png)

To find the referrals for a certain page, continue from the steps above.

- Click on one of the website links to look at the data for a page of your choice
![Google Analytics - find referrals](/images/tools-and-tips/google-analytics-find-referrals.png)
- Just above the graph, click **Navigation summary**
- GA will output the referrals, including **Previous Page Path** and **Next Page Path**:
![Google Analytics - see referrals](/images/tools-and-tips/google-analytics-referrals.png)

### Set your picture in Google

Optional: [Set your picture](https://myaccount.google.com/personal-info) in Google so that your picture will show where you are in a Google document (vs showing just your first intial). This will allow others to more easily follow a discussion when meeting attendees move around in a document.

### Add name pronunciation in Google

Consider adding a phonetic pronunciation of your name and/or a pronunciation recording in your Google profile.

- Click on your profile icon on the top-right of any Google account page (i.e. Google Docs, Google Sheets)
- Select "Manage your Google account"
- On the left-hand side panel, select "Personal info" >> on the center of the page, go to "Name & pronunciation"
- Add a recording or a phonetic pronunciation e.g. Rochana (Rosh-ah-na)

### Google Calendar

#### Finding a time

Please make use of the Find a Time tab in Google Calendar, especially when scheduling events with teammates in other parts of the world:

![Google Calendar - Find a Time](/images/tools-and-tips/google-calendar-find-a-time.png)

Find a Time presents a new or existing event's time for all participants, adjusting for time zones as appropriate.
To use Find a Time:

1. Create a new event or modify an existing event.
1. Click the "Find a Time" tab. Invited guests will be presented in the availability table and represented by a column.
    - Areas outside of someone's working hours (9:00 AM - 5:00 PM by default) are represented in light grey.
    - Guests who are optional will not appear in the availability table by default.
    You can add them by checking their name in the "Guests" area on the right hand side.

For meetings spanning across multiple time zones and with external parties, [Time & Date Calculator](https://www.timeanddate.com/worldclock/meeting.html) can help determine the best time to schedule.

#### GitLab availability calendar

The GitLab Availability Calendar has been deprecated to allow for GitLab to scale effectively.
We have created [tools and tips for managing your time off](/handbook/people-group/paid-time-off/).

#### Setting working hours & location

To help other team members to schedule meetings with you, you can set your normal [working hours & location in Google Calendar](https://support.google.com/calendar/answer/7638168). The preferred times will show up when someone tries to schedule a meeting with you.

To set your working hours, go to `Settings` -> `General` -> `Working Hours & Location`. `Working location` can be set here or on your calendar directly by clicking on the pill in the `All day` row. In Settings there's a helpful `Copy to all` option as well.

Since all GitLab Team Members work remotely `Home` can be an ambiguous choice as folks may travel and it doesn't provide any context on timezones. If you'd like, you can choose `Somewhere else` (in Settings) or `Edit pencil` -> `+` -> `Another location` (from the pill) to set this to something such as `City, State, Country (GMT-#)` and keep it up to date when traveling or timezones shift, which can help folks with planning and understanding timezones.

#### GitLab Team Meetings calendar

The GitLab Team Meetings Calendar is available to all team members and can be found in your calendars list after it's added. To add the GitLab Team Meetings Calendar to your list of calendars:

1. Go to [your calendar](https://calendar.google.com/)
1. Scroll the left sidebar down to `Other calendars`
1. Press on `+`
1. Select `Subscribe to calendar`
1. Enter in the search field `gitlab.com_6ekbk8ffqnkus3qpj9o26rqejg@group.calendar.google.com` and then press enter on your keyboard

Please reach out to a People Connect Team member if you have any questions. NOTE: Please do NOT remove any meetings from this calendar or any other shared calendars, as it removes the event from everyone's calendar.

You can find the details for the Company Calls, Group Conversations, 101s, and other teams' meetings here, so you can attend a different teams' meeting and ask questions, learn about what they're working on, and get to know the rest of the GitLab Departments and teams.

These meetings are open to everyone in GitLab.

If you are creating a new team meeting, please [add it](#adding-an-event-to-the-gitlab-team-meetings-calendar) to the GitLab Team Meetings calendar

Please reach out to the People Connect Team in the `#people-connect` Slack channel with any questions, requests or changes to the GitLab Team Meetings calendar.

##### Adding an event to the GitLab Team Meetings calendar

1. Create your calendar invite
1. Add your Zoom link
1. Add an agenda or relevant content
1. Under Add Guests, add `GitLab Team Meetings` in addition to anyone else you want invited (if you want the entire company invited please use everyone@).

   {{% note %}}
   This will appear like adding a room, which is expected
   {{% /note %}}

   ![Adding GitLab Team Meetings](/images/tools-and-tips/adding-gitlab-team-meetings.png)

#### Managing invite responses

If you are familiar with queries in Gmail, add a filter to remove invites responses from your inbox with the following query:

`*.ics subject:("invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined") when where calendar who organizer`

You can also create a filter to remove ALL invite responses from your inbox with the following search terms:

- Subject: "invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined"
- Has the words: *.ics

Then click Create filter:

- Skip the Inbox
- Apply the label (of your choosing)

#### Modifying events

Please click 'Guests can modify event' so people can update the time in the calendar instead of having to reach out via other channels.
You can configure this to be checked by default under [Event Settings](https://calendar.google.com/calendar/r/settings).

![Google Calendar - Guests can modify events setting](/images/tools-and-tips/google-calendar-guestsmodifyevent.png)

#### Notifications

You can change the default notification settings by calendar (add or remove notifications for all-day events, add a second default notification to all events...). This is accessible through Settings -> `Settings for my calendars` -> pick the calendar -> `Event notifications` and `All-day event notifications`.

If you change the default notifications, all existing events will inherit that as well (unless their notifications have been customized).

#### Restore deleted calendar items

(This assumes you are using [Google's new Calendar](https://support.google.com/calendar/answer/7541906)).

When you have accidentally deleted something from the Team Meetings calendar, you can recover it by:

- Go to [Google Calendar](https://calendar.google.com/calendar/r) and click the gear icon at the top left of your screen.
- Choose the [Trash](https://calendar.google.com/calendar/r/trash).
- Make sure you are on the correct calendar, by clicking on the name of the calendar in the left sidebar.
- Hover over the item you'd like to restore and click the arrow to "Restore".

#### Show declined events

We recommend enabling the 'Show declined events' setting if you are unable to attend a meeting but will still contribute to the agenda or attendance list asynchronously. Use this setting if it's helpful for you to see declined meetings in your calendar view for any other reason.

- Navigate to [Event settings](https://calendar.google.com/calendar/u/0/r/settings)
- Check the box for 'Show declined events' under 'View options'

![Google Calendar - Show declined events](/images/tools-and-tips/showdeclinedevents.png)

#### Sharing

We recommend you set your Google Calendar access permissions to 'Make available for GitLab - See all event details'. Team member calendars should **not** have access permissions set to 'Make available to public' due to the risk of sensitive data exposure and [zoombombing](https://en.wikipedia.org/wiki/Zoombombing).

Consider marking the following appointments as 'Private':

- Personal appointments
- Confidential & sensitive meetings with third-parties outside of GitLab
- 1-1 performance or evaluation meetings
- Meetings on organizational changes

There are several benefits and reasons to sharing your calendar with everyone at GitLab:

1. Transparency is one of our values and sharing what you work on is in line with our message of "be open about as many things as possible".
1. Due to our timezone differences, there are small windows of time when our availabilities overlap.
If other members need to schedule a new meeting, seeing the details of recurring meetings (such as 1-1s) will allow for more flexibility in scheduling without needing to wait for a confirmation from the team member.
This speaks to our value to be more efficient.

![Google Calendar - make calendar available setting](/images/tools-and-tips/google-calendar-share.png)

When setting up your Google Calendar be sure to [set your working hours](https://support.google.com/calendar/answer/7638168?hl=en).

If you'd like to share your calendar with e.g. your partner you can use the 'Share with specific people' feature and set the permissions to 'See only free/busy (hide details)':

![Share with specific people](/images/tools-and-tips/share-with-specific-people.png)

#### Speedy meetings

Enable speedy meetings to automatically provide a buffer at the end of events you schedule.
This thoughtfully allows participants with back-to-back events the opportunity to use the restroom or grab a cup of coffee without being late to their next function.

![Google Calendar - Enable speedy meetings](/images/tools-and-tips/google-calendar-speedy-meetings.png)

#### World clock

Add as many time zone world clocks as you wish by, in Google Calendar, going to `Settings -> World Clock` in order to see team members' local times.

![Google Calendar - World Clock](/images/tools-and-tips/world-clock.png)

You can also use sites like [TimeAndDate](https://www.timeanddate.com/worldclock/converter.html) to convert times to/from UTC for example.

#### Time zone

Check `Display secondary time zone` and select `(GMT+00:00) Coordinated Universal Time` (UTC). This enables team members to standardize on a single time zone in communicating when meetings take place.

![Google Calendar - Time Zone](/images/tools-and-tips/google-calendar-timezone.png)

### Google Cloud Platform

See the [Sandbox Cloud page](/handbook/company/infrastructure-standards/realms/sandbox) for a listing of cloud resources and how to gain access to them.

### Google Drive

#### First, an important message - Don't use Google Drive/Apps (unless you have to)

We would be remiss if we didn't start this section off with this IMPORTANT message: **Your default storage place for information that needs to persist and be available to others in the company should be ON THE WEBSITE/IN THE COMPANY HANDBOOK and not in Google Drive and Google Apps files!!** This is from the top.
This is how we operate, because Google Docs/Apps can only be found and contributed to by team members, and not by users, customers, advocates, future employees, Google handbook searches, or developers.

#### Do not link directly to Google Drive/Apps

Having said that, there is content which doesn't make sense to be created on the website directly (e.g. large collections of data in tables, spreadsheets for calculations, etc) or for which Google Drive storage makes sense.

When directing folks to these files in Google Drive please include name of the file in the handbook so that team members can search for it in Google Drive. If you link directly to the URL, people from outside the organization can request access, creating workload and the potential for mistakes.

#### Keeping it organized

It is important that we not just throw files into random or general places in the shared Google Drives.
Doing so makes it harder for others to find and work with the content.
Here are some guidelines to organizing the Google Drive content:

- First by department (e.g. strategic marketing)
- then by subject (e.g. analysts relations)
- then by sub-subjects as deep as necessary (e.g. Gartner -> 2018 ARO MQ)

#### Using Google Drive

For starters, when your GitLab Google company account is created you automatically get a Google Drive with unlimited storage allocation in your own "home" directory (called My Drive).
You can get to it by:

1. (optional) Login to your GitLab account in your browser (if you are using Chrome)
1. Open your web browser to <https://drive.google.com>
1. If you're not already logged in as your GitLab account (Chrome users should be) then login to Google using your GitLab account
1. This will take you to your Google Drive (called My Drive) which is like your home directory.
If you create Google files using Google Apps and don't specify where to store them, they will be put in this home directory.

This is great for storing your own working files.
As already stated, **this should never be the final resting place for shared files** that are meant to be used by the rest of the company (or beyond).

#### Existing GitLab Google Drive repositories

There are a few Google Drive repositories of GitLab shared files (there might be more, please add if not listed here):

- [UX Research Drive](https://drive.google.com/drive/folders/0AH_zdtW5aioNUk9PVA) - This houses all findings from [Customer Discovery Meetings](/handbook/product/product-processes/#customer-discovery-meetings) and raw, confidential materials from customers shared with Design, UX Research, Product and Customer Success. Distilled findings from [User Research](/handbook/product/ux/ux-research/) are stored in the [UXR_Insights repository](https://gitlab.com/gitlab-org/uxr_insights/).
- [GitLab Marketing Drive](https://drive.google.com/drive/u/0/folders/0Bz6KrzE1R_3helZZQlV3ajFNTzg) - This houses all shared files from the entire Marketing organization.
The best practice is for sub-organizations to have their own directory inside this space (e.g. [Strategic Marketing](https://drive.google.com/drive/u/0/folders/0Bz6KrzE1R_3hNjJMNUt2LUJGREU)).
- [Sales Drive](https://drive.google.com/drive/u/0/folders/0BzQII5CcGHkKSFFJWkx3R1lUdGM) - This houses all the shared files from the Sales organization.
The best practice is for some sub-organizations to have their own directory inside this space (e.g. [Customer Success](https://drive.google.com/drive/u/0/folders/0B3MA-pZf8fAYdUl6Nk5ObzlQbjQ)).
- [GitLab Alliance Drive](https://drive.google.com/drive/folders/1ElkWOoepL1eAGi2WfxPNM3W9uEMx62US) - This houses all shared files from the entire Alliance organization.
The best practice is for sub-organizations to have their own directory inside this space (e.g. [Partner Discussions](https://drive.google.com/drive/folders/1tAmu6pnw0cwR7dXj1Yeylrpt-ijerXyQ)).

How do you use these? You don't have to remember these URL's.
To add these links to your Google Drive My Drive directory, do the following:

![Add to Drive Animation](/images/tools-and-tips/add2drive.gif)

1. Make sure you are logged into your GitLab account in Google Drive in your browser
1. Open the link of interest (from above) to go to that directory
1. Find the directory path across the top (under the "Search Drive" field)
1. Find the name of directory in that path that you want to add to your drive (e.g. Sales)
1. Click on the down arrow next to it
1. From the resulting pop-up menu, select "Add to My Drive"
1. From now on you can get to that directory by first going to your drive (<https://drive.google.com>) and then opening that link

#### Adding Google Drive to your Mac

To really make your Google Drive easier to access, you can have your Google Drive show up on your Mac Finder as a regular drive.
With this it is easier to store and view files such as videos, analyst reports (PDFs), etc.

Here's how to do this:

![Download Drive for Desktop](/images/tools-and-tips/drive-for-desktop.png)

1. Make sure you are logged into your GitLab account in Google Drive in your browser
1. Go to your Google Drive (<https://drive.google.com>)
1. Click on the "Settings" icon (Gear) to the right of the search field
1. From the resulting menu, select "Get Drive for desktop"
1. It might pull up a new page/tab and use your personal login.
If it does this you won't see "Download & install Drive for desktop" on the page.
Switch to your GitLab account.
1. Download and install

### Google Forms

Use these [GitLab branded form templates](https://drive.google.com/open?id=0BxrZ6azkqZ1bVDl1TTZuelFOb1k) when creating internal or external surveys or forms.
Make a copy of the form and only edit the copy; do not edit the template itself.

Review [what data privacy means at GitLab](/handbook/legal/privacy/#what-data-privacy-means). Help participants make informed decisions by applying the following guidelines:

- *For external forms*: State that any Personal Data collected will be processed in accordance with the [GitLab Privacy Statement](https://about.gitlab.com/privacy/).
- *For internal forms*: Ensure that the purpose for collecting data is stated under our [Team Member Privacy Policy](/handbook/legal/privacy/employee-privacy-policy/) and that this purpose is made clear to Team Members.
- Don't make Personal Data form fields mandatory unless they're absolutely necessary to achieve the processing; any inessential Personal Data collected should be through a voluntary form field.
- Only process Personal Data for the reason in which it was initially collected e.g., if the Google Form collected traveler information, don't then use that Personal Data to create a marketing list.

### Google Mail (Gmail)

#### Auto-advance

If you use the archive function, you normally return to your overview.
With Auto-advance you can select whether to advance to the next or previous message.
"Auto-advance" can be enabled from the Advanced section under Settings.
This reveals the Auto-advance settings in the General section under Settings.
The default setting of showing the previous (older) message is usually preferred.

#### Email signature

-Set up an [email signature](https://support.google.com/mail/answer/8395) which includes your full name and job title so people can quickly know who you are and what you do.
-It is also an option to add your [personal pronouns](/handbook/people-group/pronouns/) to your email signature.

##### Example

*Note: You can copy and paste the template below to use it in your own signature.*

<span style="font-family: serif;font-size: small;display: block;">Alex Doe (they/them)</span>
<span style="color: #999999;font-family: sans-serif;font-size: small;display: block;">Frontend Engineer | GitLab</span>

<img src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png" alt="GitLab Logo" width="98" height="37">

#### Email signature if employed by our German entity

During onboarding you may have been asked to set up your GitLab Gmail and your email signature using the [following example as a guideline](/handbook/tools-and-tips/#email-signature). If you are employed by our German entity, you will need to add some company related details to the end of your email signature as set out [here](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-and-compliance/germany/germany-works-council/#email-signature-if-employed-by-our-german-entity) (*accessible internally to GitLab only*).

#### Add company details to certain company communications if employed by our German entity

Certain company details are required to be added as a signature to the forms of communication listed below, where that communication is going from a team member employed by our German entity GitLab GmbH to outside of the company, and relates to GitLab's business activities:

- order forms
- physical mail
- fax
- postcard
- email
- SMS
- Twitter
- Zendesk
- other electronic communications

If you are sending such a communication, externally, please look at the setting of the relevant application and add the company details below to the end of the communication. If you are in doubt, please do add the details. If you are unable to add this information for any reason, please alert legal-employment@gitlab.com.

If you are employed by our German entity you may have been asked during onboarding to set up your signature wherever it's required to be used and to include certain company details, and if you have not been, please do so now, as set out [here](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-and-compliance/germany/germany-works-council/#add-company-details-to-certain-company-communications-if-employed-by-our-german-entity) (*accessible internally to GitLab only*).

#### Filters

##### Apply label on mention

It might be useful to add a Gmail filter that adds a label to any GitLab notification email in which you are specifically mentioned, as opposed to a notification that you received simply because you were subscribed to the issue or merge request.

1. Search for `from:(gitlab@mg.gitlab.com) "you+have+been+mentioned+on"`.
1. Click the down arrow on the right side of the search field.
1. Click **Create filter with this search**.
1. Check **Apply the label:** and select a label to add, or create a new one, such as "Mentioned".
1. Check **Also apply filter to matching conversations**.
1. Click **Create filter**.

##### Apply label when assigned as reviewer

You can create a Gmail filter that adds a label to any GitLab notification email in which you are assigned as a reviewer:

1. Search for `from:(gitlab@mg.gitlab.com) "(Reviewer) (Firstname Lastname)"`.
1. Click the down arrow on the right side of the search field.
1. Click **Create filter with this search**.
1. Check **Apply the label:** and select a label to add, or create a new one, such as "Assigned".
1. Check **Also apply filter to matching conversations**.
1. Click **Create filter**.

##### Apply label when MR is merged

You can create a Gmail filter that adds a label to any GitLab notification email in which an MR has been merged:

1. Search for `from:(gitlab@mg.gitlab.com) "Merge Request"+"was merged"`.
1. Click the down arrow on the right side of the search field.
1. Click **Create filter with this search**.
1. Check **Apply the label:** and select a label to add, or create a new one, such as "Merged".
1. Check **Also apply filter to matching conversations**.
1. Click **Create filter**.

##### Apply label to all GitLab-generated emails

GitLab issues and merge requests can generate a lot of email notifications depending on your settings and how in-demand your attention is.
It can be useful to apply a label to these generated emails and move them out of your immediate inbox.

1. Search for `from:gitlab@mg.gitlab.com`.
1. Click the down arrow on the right side of the search field.
1. Click **Create filter with this search**.
1. Check **Skip the Inbox (Archive it)**.
1. Check **Apply the label:** and select a label to add, or create a new one, such as "GitLab.com".
1. Check **Also apply filter to matching conversations**.
1. Click **Create filter**.

You can learn more about how to use Gmail filters to organize your inbox in [Productivity Hack video](https://www.youtube.com/watch?v=YOgm-vZVqng).
To import downloaded [filter export](https://drive.google.com/file/d/1vm_psZOXjYZ9ulKYmdMqrTk435KcR1DL/view) go to Gmail => Settings => Filters and Blocked Addresses => Import filters.

#### Keyboard shortcuts

Keyboard shortcuts only work if you've turned them on in Gmail Settings.

Steps below:

- In "Settings" scroll down to the "Keyboard shortcuts" section
- Turn Keyboard shortcuts "on"
- Scroll down and Save Changes

[Here are some shortcuts you can use](https://support.google.com/mail/answer/6594?hl=en&ref_topic=3394150)

#### Split screen

List your inbox and preview mails in one view with this configuration change:

- Cog/settings top right of inbox.
- Settings option.
- Inbox tab
- Reading pane: enable
- Select a position for the reading pane, Right of Inbox or Below Inbox
- Save changes
- Reload inbox

#### Inbox Zero

To utilitze Gmail to it's full potential, consider adopting the [Inbox Zero](https://www.youtube.com/watch?v=oLdHnWLbn4A) strategy. It's the same way Google employees use Gmail.

There's also an internal training recording about this. It goes into more details and more "power user" focused, covering keyboard shortcuts, etc.

- [Video](https://youtu.be/IwngC9NmcRs) (It’s set to private, so log in with GitLab Unfiltered to watch it: upper right corner > click on your profile picture > switch account > GitLab Unfiltered)
- [Meeting notes](https://docs.google.com/document/d/1EXEIENJrUkP75MmG6Nn9Ld4-T0P9SfpcQA4xmpx9Bck/edit?usp=sharing)

### Disable Google Meet and Chat in Google Mail

The integration for Google Meet and Google Chat is enabled by default. It can consume too much space in the left menu listing mailbox folders. In order to disable the integration in Google Mail, navigate to `Settings` at the right top, `See all settings`, `Mail and Chat` and select the following:

- Chat: `Off`
- Meet: `Hide the Meet section in the main menu`

Save the changes and wait for Google Mail to reload.

### Google Slides

Use this general [GitLab Slide Template](https://docs.google.com/presentation/d/1XhGp21FKlIBiJMI9OpvwyneF6fkrQeOQjFxDJF678Ys/edit#slide=id.g1e546bbceaf_0_817g) when creating slide decks for internal and external use.
Make a copy of the slide deck and only edit the copy; please do not edit the template itself. To avoid potentially editing the source deck, you can go to the [Template gallery](https://docs.google.com/presentation/u/0/?ftv=1&tgif=d) and click on the `GitLab Slide Template vYear-Month` to quickly make a copy and begin a new deck. Ensure that all pages in the slide deck are numbered, with the title page always being number 1.

#### Sales slide decks

Slide decks are available in [Highspot](/handbook/sales/field-communications/gitlab-highspot/) in [GitLab's Official Sales Deck Library](https://gitlab.highspot.com/items/650461a504701b188c124951?lfrm=shp.6).

### Google Jamboard

Jamboard is a collaborative whiteboarding platform, accessible at <https://jamboard.google.com/>. The results are persisted in Drive and are shareable like any other object.

### Google Chrome

- Search and find things by typing words from document/issue/etc page titles into the urlbar (anything that appears in the page title). The search is "best effort" but surprisingly efficient at finding that doc or issue you've accessed recently.
- "Search engines" help even more! Typing "drive" and pressing Tab, for example, searches in Google Drive. To discover and customize them, go to `Settings > Search engine`.
- Practice [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179?hl=en). Here are a few common helpful shortcuts:
  - Jump to the address bar: `cmd l`
  - Create a new tab `cmd t`, close a tab `cmd w`, undo close tab `cmd shift t`
  - Open new incognito window: `cmd shift n` (e.g. to reproduce a UI bug, or login problem)
  - Search all opened tabs: `cmd shift a`
  - Hide the bookmarks bar: `cmd shift b` (e.g. for screenshots, or shared screen presentations)
  - Open the developer tools: `cmd option i` (e.g. for debugging website errors)
- You can [organize tabs into tab groups](https://www.google.com/chrome/tips/#organize), assign names and custom colors, and collapse or reorder them. Moving tabs between groups also works across browser windows.
- Logging in to the browser (with your GitLab Workspace account) preserves [your profile across installations](https://www.google.com/chrome/tips/#customize). This is helpful to migrate bookmarks, extensions, and configuration [when refreshing your laptop](/handbook/security/corporate/services/laptops/refresh/).

#### Chrome Performance Settings

1. Enable the [memory saver](https://support.google.com/chrome/answer/12929150?hl=en). This will pause inactive tabs and reduce memory consumption.
1. Enable the [energy saver](https://support.google.com/chrome/answer/12929150?hl=en). This can help extend battery life by telling Chrome to reduce background task activities.
