<!-- Unsupported block type: image -->

This page lists various tips and tools for macOS.

## macOS tips

Here are some useful tips if you are new to macOS. Even if you are not new, these keyboard shortcuts may come in handy.

If you are switching from Windows to macOS, these tips may be useful.

## Taking screenshots and videos

On a macOS, there are a few screen shot key shortcuts that can be very helpful:

- command + shift + 3 - takes a screen shot of your entire screen(s - it will create an image for each screen you have)

- command + shift + 4 - allows you to select an area on the screen to take a screen shot (it will create one image of your selected area)

- command + shift + 5 - brings up a tool that allows you to do all of these things as well as create a video (with audio) of all or part of your screen.

In the case of command + shift + 3 and command + shift + 4, if you also hold your control key (so, command + shift + control + 3), your screen shot will be in your clipboard. Alternatively you can quickly select the screenshot preview in the bottom right corner and press command + c.

You can paste the screenshot from your clipboard into a lot of applications with command + v. GitLab supports pasting the screenshot into issue descriptions, comments and the Web IDE.

If you have a screen shot in your clipboard, you can open the Preview and then create an image from the clipboard using the File -> New from clipboard.

For screen recordings, you can use Quicktime Player to capture an area or the full screen. Open the application and, under the File menu, select New Screen Recording, or press command + control + n.

### Screenshot productivity tips

To automatically compress your screenshots and move them to a designated directory, so your Desktop directory won’t get cluttered with screenshot files, check this GitLab Unfiltered blog post: One simple trick to make your screenshots 80% smaller.

## Disabling macOS notification center

During a presentation or screen share, you might want to disable your notifications on macOS to prevent distractions or possible embarrassment.

The Notification Center can be quickly disabled by Option-Clicking the menu bar icon in the top right of your screen. This disables notifications until the next day. Option-Click again to re-enable immediately. Alternatively, click on the Notification Center icon, then scroll up to reveal the “Do Not Disturb” toggle.

If your laptop is a MacBook with a Touch Bar, note that you can assign a handy “Do Not Disturb” button on your Control Strip. In System Preferences, navigate to Keyboard settings and click “Customize Control Strip…” to add this.

## Locking your screen

### On your macOS menu bar

1. Click on the Apple logo  menu

1. Click “Lock Screen”

Alternatively, you can use the keyboard shortcut ⌃+⌘+Q (ctrl+cmd+Q) or press Touch ID, if it’s available on your Mac or Magic Keyboard.

### On your macOS Touch Bar

1. Open System Preferences > Keyboard

1. Click Customize Control Strip…

1. Drag the Screen Lock icon to the Touch Bar

1. Done!

## Docker Desktop

Docker Desktop is a licensed tool and approved for usage and can be accessed via instructions in the Tech Stack.

To request access to Docker, please follow these steps:

1. Create an account on hub.docker.com using your @gitlab.com email. It is not possible to gain access with a non-company email.

1. Log an Access Request with the Access_Change_Request template, detailing why alternatives are not an option (as noted above).

1. Once your manager approves the request, assign to the System Provisioner listed in the [Tech Stack] for this system.

Once your access has been provisioned, you will receive an email notification that you have been added to a specific dockerdesktop team. Following that, you can install Docker desktop, and login with the registered account.

The number of licenses is limited, so provisioning might take time, or might not be temporarily possible to gain access to the team.

If at some point in the future you do not want to use the product anymore, please file an Access Change request, assign to provisioner listed in the Tech Stack so that we can assign the license to someone else.

The following open source alternatives appear to be maintained (as of 2025-02-28):

1. Rancher Desktop

1. Colima

## Usage of Java

Some applications used on MacOS may require Java. The last open-source version of Oracle Java that was released was in January of 2019. All new versions since then require a paid/licensed scubscription. Therefore GitLab no longer supports Oracle Java, and requires all team-members to use an open-source alternative like OpenJDK. Oracle periodicaly audits all downloads of Oracle Java and actively pursues companies that are out of compliance. The IT department therefore enforces a policy that will remove all instances of Oracle Java that are found on team-members machines.

To ensure you are using the correct version, use the java -version command.

If OpenJDK is installed, the response will look similar to this:

<!-- Unsupported block type: code -->

If Oracle Java is installed, the response will look similar to this:

<!-- Unsupported block type: code -->

Most systems will be running either the OpenJDK version or Java will not be installed. If Java is not installed and you wish to install OpenJDK, open the Self Service app located in your Applications folder and double-click on the app called Java 18 - Open Source.

If you are running the Oracle Java version, you will be automatically notified by the IT Deptartment with a pop-up that looks like this

and it will be removed from your machine.

Last modified February 28, 2025: Handbook updates removing outdated and potentially insecure advice and tools. (2afa17eb)