---
title: "Linux tools and tips"
description: " Various tools and tips related to Linux laptop usage in GitLab"
---

Linux is allowed as an alternative to an Apple Mac running macOS. Historically this was only allowed for the engineering team, but anyone in GitLab can use Linux. Just bear in mind it is assumed you are capable of self-support when running Linux - there is a #linux channel in Slack where one can exchange tips and tricks, but it is not intended as an official helpdesk resource.

The following is a guide to go over the basics of what is recommended for installation to get you up and running as quickly as possible.

- Not everything listed here may apply to your use case.
- This document will not cover the customization desired for your own personal configuration and setup of your desktop/window manager/etc.
- This guide is intended to be very generic. Be aware package names listed here may be named differently on your distro of choice.
- And as always, there are multiple ways to do many things, so if you have a better preference or are more familiar with another method, feel free to do so and contribute back to this document.

## Basic Setup

Outside of the basics listed [here](/handbook/security/corporate/services/laptops/security/) for all laptop and desktop systems, there are a few additional steps required for Linux. Currently, the recommended laptop for Linux is Dell running Ubuntu, which is discussed in detail [here](/handbook/it/end-user-services/onboarding-access-requests/#laptop-configurations). These instructions assume that setup, so for alternate choices in hardware or Linux distribution it is recommended you use this as a general guideline but adapt as needed.

Dell maintains its own Ubuntu distribution. While not needed to use Linux on Dell, it does seem to offer direct support for various chipsets and hardware components. This means that for a stock Ubuntu (or other distribution) install, generic choices are often made by the installer, and if you wish to take advantage of drivers that better support the hardware, you may have to install and configure drivers for certain components. The Dell Ubuntu distribution removes that burden.

To summarize our install process to meet GitLab standards, we will go the following steps (remember these steps were current as of December 2019):

- Boot up the Dell and begin the installation of Ubuntu on the screen.
- When you reach the screen that gives you the option to create recovery media, insert a USB thumbdrive and do so.
- Continue with the installation until complete.
- Immediately back up some key files created during the installation process. If you decide to switch to generic Ubuntu (for example to upgrade to a newer Ubuntu version), you will need these files.
- Reboot and using the recovery media, restore the system but select the option to encrypt the hard drive.
- Complete the installation as before.

### Initial Installation

- **Note:** Before installation, make sure you have a few USB thumbdrives on hand. It is highly recommended you use modern thumbdrives that are compatible with UEFI booting (most modern ones are).
- Boot up the Dell Laptop. You will reach an Ubuntu System Configuration screen. Under "Welcome" select your language and press Continue.
- You will be presented with a "Terms of Service" to review. Click the checkbox at the bottom and click Continue.
- On the "Keyboard layout" screen, make your selection and click on Continue.
- On the "Wireless" screen, choose the network, enter its password and click on Continue.
- On the Where are you? screen you enter your location to determine your time zone. Click Continue.
- On the Who are you? screen you enter in your computer name, username, your password. Click Continue.
- You will be given an opportunity to make a backup copy of recovery media. It is highly recommended you do so, even if you intend to wipe and reload the entire operating system from scratch. In the event of complete failure, you can at least recover the system. For our purposes of encrypting the hard drive, it is a must. Do this on a USB drive and make sure you label it "Recovery". Follow the prompts and press Continue when complete.
- The system will reboot.
- When it boots up, log in. If asked if you wish to "Help improve Ubuntu", select the option of "No, don't send system info" in case crash information is sent that contains proprietary work information. If it tries to update the system with patches, fine - but you do not have to update yet if you don't want to. We are getting ready to rewipe anyway.
- Insert a blank USB drive, as we need to back up some data before we encrypt the main hard drive, just in case the encryption process fails.
- The USB drive will auto-mount, usually to a location like "/media/<username>" where <username> is the name you log in with.
- Hold down the Ctrl key and press t to open a terminal window. Type in the following:

 `$ df`

- This is mainly to confirm the USB drive location, in my instance this was "/media/mloveless".
- Create a couple of directories to store backups of some critical information we might need:

`$ sudo mkdir /media/mloveless/bkup`

`$ sudo mkdir /media/mloveless/bkup/apt`

- We need to make a backup copy of all information regarding sources for updates to our system to our USB drive:

 `$ sudo cp -R /etc/apt/sources.list* /media/mloveless/bkup/apt/`

- Next we need to backup and copy signing keys used for verifying packages for future installation and update processes:

`$ sudo apt-key exportall > apt.keys`

`$ sudo cp apt.keys /media/mloveless/bkup`

- Unmount and remove the USB drive, and label it "Backup". We're now ready to encrypt the Dell hard drive.
- Insert the USB drive labeled "Recovery" and boot off of that USB drive. You may have to enter the BIOS and specifically choose to boot off of it. Instructions vary by Dell laptop, it usually involves pressing F2 or F12 during the boot process. Search on the Dell website for more information, but essentially you want to select an option that allows you to boot off of the USB drive.
- Once you boot up, you will be given some options for recovery. The language has changed for this, but the option you are looking for is a complete wipe and reload of the system. As you move forward, installation will continue, similar to the regular installation above. The main difference is you are looking for an option to encrypt the hard drive. Do so, and reinstall as normal. You will be repeating the steps from above.
- On restart, you will be prompted for your password for the encrypted drive, and you will log in as normal.
- If all goes correctly, you will end up at a normal Ubuntu desktop and can jump down to the Final Installation Steps below.
- If there is a problem where the recovery fails and you are unable to encrypt the drive (or you wish to upgrade the system to a more recent version of Ubuntu), you will need to proceed with the [Alternate Installation steps](#alternate-installation) below. Otherwise, feel free to move on to the General Applications section.

### Alternate Installation

In some cases the "recovery" process when trying to encrypt the hard drive has failed for other team members, in other cases they decided they wanted to use a more recent version of the Ubuntu operating system than what the Dell Ubuntu version is. Either way, you can follow these steps. **These steps assume you have the "Backup" USB drive created during the Initial Installation instructions.**

If you must configure a fresh Ubuntu install on the Dell yourself, you may not be able to perform any steps involving the "Backup" USB drive. In this case, ignore these steps, but all other instructions remain applicable.

You will need a copy of vanilla Ubuntu copied onto a UEFI bootable USB drive (labeled "Ubuntu", and this will be a fairly straight-forward Ubuntu install. The instructions assume Ubuntu 18.04 or 20.04 LTS, although you can do the same with a later version, including non-LTS versions.

- Insert the USB drive labeled "Ubuntu" into the USB port and boot. Press F12 when you see the Dell logo. You will reach a boot screen which lists the following (if you do not reach the boot screen, try restarting again and hitting F12 quickly and repeatedly after the logo appears). Select your UEFI-compatible USB drive. This is important: If you do not use a UEFI USB device for your initial load, it could trick your install process into a non-UEFI style installation, rendering your laptop unbootable.
- Once booted up, select Install Ubuntu.
- On the "Keyboard layout" screen, make your selection and click on Continue.
- On the "Wireless" screen, choose the network, enter its password and click on Continue.
- On the "Updates and other software" screen, make sure the "Normal installation" is checked. There is no need to select the "Install third party software for graphics and Wi-Fi hardware and additional media formats" unless you decide to take advantage of additional drivers for your hardware (which you can do later if you wish). Click on Continue.
- On the "Installation type" screen, click on "Erase disk and install Ubuntu", then click on "Encrypt the new Ubuntu installation for security". "Use LVM with the new Ubuntu installation" will be checked automatically, which you can leave it. Click on the Install Now button.
- On the "Choose a security key:" screen, enter a strong password and confirm it. DO NOT FORGET THIS PASSWORD. If you do you will have to reinstall as you will be unable to boot. Click on the Install Now button. After a brief wait a "Write the changes to disks?" window will appear to confirm you are installing the partitions, click on Continue.
- On the "Where are you?" screen select your timezone and click Continue.
- On the Who are you? screen, you will be prompted for your name, the name of your computer, a username, a password, and your password a second time to ensure it is correct. The button next to "Require my password to login" will be selected, make sure it remains selected. For convenience sake, you may wish to make your username match your GitLab username, but this is not required.
- The install process will take a while, anywhere from a few minutes to maybe an hour, depending on your connection speed. You will eventually reach an "Installation Complete" window. Click on Restart Now. After the restart, remove the USB drive.
- On restart, you will be prompted for your password for the encrypted drive, and you will log in as normal.
- After you have reached the Ubuntu Desktop, you will have a few more steps to perform.
- Edit /etc/apt/sources.list, remove the `#` symbol to uncomment the line that reads:

    `# deb https://archive.canonical.com/ubuntu bionic partner`

- Insert the USB drive labeled "Backup" and perform the following action:
- Enter the following commands from a terminal window (the instructions below assume your username is mloveless, change to your username:

`$ sudo apt-key add /media/mloveless/bkup/apt.keys`

`$ sudo cp -R /media/mloveless/bkup/apt/sources.list/* /etc/apt/sources.list.d/`

`$ sudo apt update`

`$ sudo apt upgrade -y`

`$ sudo apt autoremove -y`

- The commands above will restore pointers to the Dell Ubuntu repository, perform updates, and remove unused packages introduced during this entire process (none occurred during testing, this is to be sure).

## General Applications

- Enable the firewall with the following command:

`$ sudo ufw enable`

- The prompt will respond with "Firewall is active and enabled on system startup".
- Some common applications to install include Google Chrome, Slack, and Zoom. Not all may be available via the normal Ubuntu repository, but you can download them via their respective sites with up-to-date installation instructions:
  - [Google Chrome](https://www.google.com/chrome/)
  - [Slack](https://slack.com/downloads/linux)
  - [Zoom](https://zoom.us/download)
  - Checkout our [Tools page](/handbook/tools-and-tips/) for more potential items.

## Usage of Java

Some applications used on Linux may require Java. The last open-source version of Oracle Java that was released was in January of 2019. All new versions since then require a paid/licensed scubscription. Therefore GitLab no longer supports Oracle Java, and requires all team-members to use an open-source alternative like OpenJDK. Oracle periodicaly audits all downloads of Oracle Java and actively pursues companies that are out of compliance. The IT department therefore enforces a policy that will remove all instances of Oracle Java that are found on team-members machines

To ensure you are using the correct version, use the `java -version` command.

If OpenJDK is installed, the response will look similar to this:

``` shell
$ java -version
openjdk version "11.0.14.1" 2022-02-08
OpenJDK Runtime Environment (build 11.0.14.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.14.1+1-Ubuntu-0ubuntu1.20.04, mixed mode, sharing)
```

If Oracle Java is installed, the response will look similar to this:

``` shell
$ java -version
java version "16.0.1" 2021-04-20
Java(TM) SE Runtime Environment (build 16.0.1+9-24)
Java Hotspot(TM) 64-Bit Server VM (build 16.0.1+9-24, mixed mode, sharing)
```

Most systems will be running either the OpenJDK version or Java will not be installed. If Java is not installed and you wish to install OpenJDK, follow the instructions for installation you received after running the `$ java -version` command. If you are running the Oracle Java version, follow the instructions [here](https://linuxhint.com/uninstall-java-ubuntu/) for Ubuntu, and for other distributions follow the instructions for package deletion and installation for your specific distribution.

## Dell and Nvidia

Some GitLab team members have experienced issues with the Nvidia drivers on Dell, including battery drain due to sleep issues when the laptop is closed, random lockups when waking the laptop up, and so on. If this happens, consider the following steps:

- Examine the /etc/default/grub file, the line containing `GRUB_CMDLINE_LINUX_DEFAULT`may look like this:

 `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"`

- Edit the line to look like this:

 `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash mem_sleep_default=deep"`

- Then update grub:

 `$ sudo update-grub`

This has reported to work with latest versions of the Nvidia drivers (as of Dec 2019) so you can update the drivers.

## Engineering/coding tools

- It's advised to have some sort of version manager for programming languages as
  what's supplied by repos is typically not sufficient
  - [asdf](https://github.com/asdf-vm/asdf) is pretty good, and usable across
    many platforms
    - This project includes a [large amount of plugins](https://github.com/asdf-vm/asdf-plugins)
      to control various packages as well as languages that you'd need
- Other common packages - this list includes things that always appear to be
  required no matter what realm of work you are in:
  - `gcc`
  - `git`
  - `libssl-dev`
  - `make`
  - `zlib1g-dev`
  - `libereadline-dev` # Prior to Ubuntu 20.04
- Abide by our [security practices](/handbook/security/):

## Production engineering

- As a Production Engineer, we'll need some common tooling
  - [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
  - [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
  - [Docker](https://docs.docker.com/get-started/get-docker/)
  - [Vagrant](https://developer.hashicorp.com/vagrant/install)
  - [VirtualBox](https://www.virtualbox.org/wiki/Linux_Downloads)
  - [gcloud CLI](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version)
- Other important packages:
  - `gnupg2`
  - `pwgen`
  - `scdaemon`
  - `yubikey-personalization`
- If you chose to utilize `asdf` as mentioned above, install a few plugins to
  prep yourself to be ready to install a few tools in the future:
  - `asdf plugin-add golang`
  - `asdf plugin-add kubectl`
  - `asdf plugin-add minikube`
  - `asdf plugin-add ruby`
  - `asdf plugin-add terraform`
- Then you'll need to find out which version of the above needs to be installed
  - Check the appropriate repos or ask someone:
  - `asdf install ruby 2.4.4`
  - `asdf install terraform 0.11.5`

## Development

- In development, we'll probably need the following packages installed:
  - `cmake`
  - `g++`
  - `krb5`
  - `libkrb5-dev`
  - `libmysqlclient-dev`
  - `libpq-dev`
  - `libre2-dev`
  - `libsqlite3-dev`
- If you chose to utilize `asdf` as mentioned above, install a few plugins to
  prep yourself to be ready to install a few tools in the future:
  - `asdf plugin-add nodejs`
  - `asdf plugin-add postgres`
  - `asdf plugin-add ruby`
- Then you'll need to find out which version of the above needs to be installed
  - Check the appropriate repos or ask someone:
  - `asdf install ruby 2.4.4`
  - `asdf install nodejs 8.11.3`

## Enabling the fingerprint reader

Some of the authorized Dell laptops come with a fingerprint reader which is not supported by their official Ubuntu images. However, the fingerprint reader can be enabled using [fprintd](https://fprint.freedesktop.org/).

- Install the required software:

``` shell
sudo apt install fprintd libpam-fprintd
```

- Update the PAM configuration:

``` shell
sudo pam-auth-update
```

- Edit the `/etc/pam.d/common-auth` configuration to enable fingerprint authorization in the terminal and other password prompts. Find the `auth [success=1 default=ignore] pam_unix.so nullok_secure` line and replace it with the following two lines.

``` shell
auth    [success=2 default=ignore]      pam_fprintd.so max-tries=3 timeout=10
auth    [success=1 default=ignore]      pam_unix.so nullok_secure
```

  Note that `max-tries` is the number of fingerprint scans you can attempt until prompted for a password instead, and `timeout` is how long you have to scan your fingerprint before the authorization times out. You can configure these to your requirements.

- Enable fingerprint authorization on the login screen (`sddm`) by editing the `/etc/pam.d/sddm` file and adding the following lines **at the top of the file**.

``` shell
auth        sufficient        pam_unix.so try_first_pass likeauth nullok
auth        sufficient        pam_fprintd.so
```

- Finally, enroll your fingerprint with `fprintd`:

``` shell
fprintd-enroll $USER
```

Fingerprint login and authorization has now been enabled! Note that the sddm login screen has an unintuitive user interface. You'll be prompted with a password field as usual. Press enter and the screen will fade slightly. Now you can scan your fingerprint to log in.

## Troubleshooting

### Zoom screen sharing on GNOME on Wayland

In order to share the user's screen on GNOME on Wayland, Zoom uses a private schreenshot API to chain successive screenshots into a stream. [As GNOME 41, those private D-Bus APIs have been restricted to their intended callers for security reasons, so that hack no longer works.](https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/4665#note_1283742).

As a workaround, you can use [looking glass](https://wiki.gnome.org/Projects/GnomeShell/LookingGlass) to set `global.context.unsafe_mode = true`. You can reinstate default security settings either by ending the session, or by running `global.context.unsafe_mode = true`.

Some caveats apply to this workaround.

- You are disabling a security setting. (This is no worse than a default Xorg session.)
- Zoom freezes for about 15 seconds when initiating a screen sharing session. Wait through the "application not responding" dialogue if it appears, and the "select display" prompt will appear.
- You can share whole desktops, but you cannot share individual application windows.
- Zoom freezes for about 5 seconds upon ending a screen sharing session.
- This workaround must be applied at each login.

### Common issues

Here's a list of common situations that prove to be problematic on Linux.

- You'll want to ensure these components work as desired:
  - Audio through various types of headphones
  - Video capturing - Zoom video and Zoom screen sharing
  - Display - screen resolution or video card related issues
- When having problems with Okta under Linux, make sure to:
  - To use the latest Chrome (not Chromium) and your Yubi-Key or a phone without a custom ROM
  - Install SentinelOne and DirectStrike after your start as soon as possible
