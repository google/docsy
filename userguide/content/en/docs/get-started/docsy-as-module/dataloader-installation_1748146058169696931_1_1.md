---
title: "Dataloader Installation, Deletion, and Upgrade Instructions at GitLab"
description: "Instructions on how to install, delete, and upgrade Dataloader at GitLab"
---

## Installing from Scratch

1. Go to [Salesforce Dataloader's GitHub repo's Releases](https://github.com/forcedotcom/dataloader/releases)
1. Please download one major version previous from the latest, but at minimum version 56.0.6. The file should be named something like *dataloader_mac_v* **whatever version you want to download** *.zip*
    - **EXAMPLE:** If the latest release version is 30.9.2, you'll want to download version 29.x.y, where x and y are the highest subversions of major version 29
    - **WHY?** Salesforce regularly updates its API but delays the new version from production environments
        - If you download the latest release version and try to use it in production, but production is not updated to that API version yet, your upload probably won't work
        - Newest API versions are released as a preview in sandbox environments, so the latest version of the dataloader should always work in sandboxes, but you may have to wait till it works in prod
1. Remember if your Mac is using an Apple processor. If you're not sure, follow these substeps
    - From any window, top left corner of the screen should be an Apple symbol, click that
    - Click *About this Mac*
    - Look for *Processor* or *Chip*
        - If you see "Intel" anywhere on that line, you <ins>do not</ins> have an Apple processor
        - If you see "Apple M"*something* on that line, you <ins>do</ins> have an Apple processor
1. If you do not have Java installed, or you're not sure if Java is installed, follow these substeps. If you're really sure you already have Java installed, go to the next numbered Step.
    - If you <ins>do not</ins> have a Mac processor
        - Install Java from GitLab's Self Service app
            - From any window, top right of the screen should be a magnifying glass
            - Click that and search for Self Service
                - If you see *Self Service.app* show up, open that
                - If you don't see *Self Service.app* anywhere, ask IT about it
            - Open Self Service app and search Java
            - Install "Java"version number"- Open Source"
                - Really unlikely, but if the version number is < 11, please let someone on the Sales Systems team know, Dataloader requires at least Java version 11 to run
    - If you <ins>do</ins> have an Apple processor
        - We'll be downloading Java directly, you need a slightly different version than what the Self Service app provides
        - Go to [Azul JDKs](https://www.azul.com/downloads/?version=java-18-sts&os=macos&architecture=arm-64-bit&package=jdk) and scroll down till you see a button to download a .dmg file
            - The link in the above substep should already have a few options filled in for you, Java 18, macOS, ARM 64-bit, and JDK. If these aren't set, or this version of Java is no longer available, or you also want/need to use Salesforce CLI, please let someone on Sales Systems know
        - Click the .dmg button and download it
        - When it's done downloading, open the .dmg file and install Java. If it asks you about where to install it, the defaults should be OK
            - Open a terminal window and paste:
            - `/usr/sbin/softwareupdate --install-rosetta`
            - Hit "enter"
            - This command is necessary to have Dataloader run on these new processors as explained in the "Running Data Loader on Mac M1 Hardware" section of the [official Salesforce Dataloader install instructions](https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/loader_install_mac.htm)
                - Don't follow Salesforce's instructions, this handbook page will explain the rest of the steps you need
1. Find the zip file for Dataloader you downloaded from Step 2 and extract it
1. From the extracted folder, hold down the "control" key and click the "install.command" file, from the dropdown, click "Open"
1. If a window pops up, click "Open" again
1. A terminal window should pop up. This is the Dataloader install wizard
1. First thing it should be asking is where to install. The default path is fine, just hit "enter"
1. It should then ask if you want a desktop shortcut. I suggest you type *Yes* and hit "enter" to create a shortcut
1. The last thing it should ask is if you want to add an Applications shortcut. Type *Yes* if you do or *No* if you don't then hit "enter". We usually do *Yes*
1. The installation should be finished! You can close the terminal window if it looks like there were no problems
    - Ask someone on Sales Systems if it looks like there's a problem in the terminal window
1. You can delete the zip file and the extracted folder
1. Try opening Dataloader from one of the shortcuts if you made one. Tell someone on Sales Systems if it doesn't open or if there are any errors while opening.

## Uninstalling Dataloader

1. If you added a shortcut to Applications for the version of Dataloader you want removed
    - Go to *Applications* in Finder and delete the shortcut
1. If you added a shortcut to Desktop for the version of Dataloader you want removed
    - Go to *Desktop* in Finder and delete the shortcut
1. If you know where you installed the version of Dataloader you want removed
    - Go there and delete the folder
    - Skip the rest of the numbered steps, you're done!
1. Try using Search to find where it was installed
    - From any window, top right of the screen should be a magnifying glass, click that
    - Type *dataloader*
    - There should be a folder in the results, click that folder to bring up a Finder window
    - In that folder, if there's only one sub folder with a version number, you can delete the whole "dataloader" folder
    - If there's multiple versions, delete the versions you don't want and keep the ones you want to keep. To delete all of them, delete the whole "dataloader" folder
1. If you can't find where it was installed, don't worry too much, you should be able to have different versions installed at the same time with no conflicts, or ask someone on the Sales Systems team for help

## Upgrading Versions

1. Follow the [Uninstalling Dataloader](#uninstalling-dataloader) instructions
    - Note the version(s) of Dataloader you're uninstalling
    - If at least one of them is version 45 or higher and you know it worked,
        - You most likely have Java installed, when you are following the "Installing from Scratch" steps, you probably don't have to install Java
    - If none of the versions are at least 45
        - You may need to install Java, follow those steps in the "Installing from Scratch" section
1. Follow the [Installing from Scratch](#installing-from-scratch) instructions
