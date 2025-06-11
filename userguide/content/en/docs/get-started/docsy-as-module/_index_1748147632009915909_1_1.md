---
title: SentinelOne EDR Setup Guide
---

## macOS

> **No Action Required:** SentinelOne is automatically installed by Jamf MDM and you do not need to perform any installation tasks.

## Linux

### Pre-Requisites

If you are using Advanced Intrusion Detection Environment (AIDE) to monitor file integrity and detect intrusions, you will need to create an exclusion in AIDE. When both AIDE and the SentinelOne Agent are running together, AIDE is not able to update its database correctly. AIDE tries to scan a SentinelOne Directory and cannot scan it.

To create an exclusion for SentinelOne, edit `/etc/aide.conf` and add `!/opt/sentinelone/mount` to the end to ignore the SentinelOne Agent mount directory:

```shell
echo '!/opt/sentinelone/mount' | sudo tee -a /etc/aide.conf
```

### Installation

> These steps are only needed for **Linux** laptops. SentinelOne is already automatically installed on macOS by Jamf MDM.

1. Make sure you are using an approved [Linux distribution](https://internal.gitlab.com/handbook/it/it-self-service/operating-systems/#linux).

1. [Download](https://gitlab.com/gitlab-com/it/security/sentinelone-installers) the configuration file and the installer (DEB/RPM).

1. In the following examples, we'll assume you put those in the following locations and that you renamed the package name to be `sentinelagent`.

   > Configuration file: `~/.config/sentinelone/config.cfg`
   > DEB package: `~/Downloads/sentinelagent.deb`
   > RPM package: `~/Downloads/sentinelagent.rpm`

1. Get your laptop's serial number.

    ```shell
    sudo dmidecode -s system-serial-number
    ```

1. Edit `config.cfg` and update `S1_AGENT_CUSTOMER_ID`.

    - Replace `tanuki` with the username portion (the part before the `@` sign or the [local-part per RFC2822](https://www.rfc-editor.org/rfc/rfc2822)) of your GitLab email address.
    - Replace `ABCD1234` with your laptop's serial number.
    - Verify that the edited variable is formatted correctly with a hyphen separating the GitLab email and serial number. For example, `S1_AGENT_CUSTOMER_ID=jdoe@gitlab.com-ABCD1234`.

1. Install the package (distro commands may vary).

    ```shell
    # Fedora 37+ and RPM distributions
    export S1_AGENT_INSTALL_CONFIG_PATH=~/.config/sentinelone/config.cfg
    sudo -E rpm -i --nodigest ~/Downloads/sentinelagent.rpm
    ```

    ```shell
    # Ubuntu 22.04+ and Debian/Ubuntu distributions
    export S1_AGENT_INSTALL_CONFIG_PATH=~/.config/sentinelone/config.cfg
    sudo -E apt install ~/Downloads/sentinelagent.deb
    ```

1. Verify that the agent is running in the terminal output.

    ```plaintext
    Setting registration token...
    Registration token successfully set
    Setting management device type...
    Device type successfully set
    Setting customer ID...
    Customer ID successfully set
    Starting agent...
    Agent is running
    ```

1. Verify that the systemd service is running.

    ```shell
    systemctl status sentinelone
    ```

    ```plaintext
    ● sentinelone.service - Monitor SentinelOne Agent
        Loaded: loaded (/lib/systemd/system/sentinelone.service; enabled; vendor preset: enabled)
        Active: active (running) since Fri 2023-02-10 09:37:35 CET; 4min 5s ago
        Process: 298024 ExecStart=/opt/sentinelone/bin/sentinelctl control run (code=exited, status=0/SUCCESS)
    Main PID: 298039 (s1-agent)
        Status: "Starting agent..."
        Tasks: 50
        Memory: 594.6M (limit: 7.9E)
            CPU: 1min 19.288s
        CGroup: /system.slice/sentinelone.service
                ├─298034 s1-orchestrator "" "" "" "" "" "" "" ""
                ├─298035 s1-network "" "" "" "" "" "" "" "" "" ""
                ├─298037 s1-scanner "" "" "" "" "" "" "" "" "" ""
                ├─298039 s1-agent "" "" "" "" "" "" "" "" "" "" "
                ├─298041 s1-firewall "" "" "" "" "" "" "" "" "" "
                ├─298043 s1-fanotify "" "" "" "" "" "" "" "" "" "
                └─298045 s1-perf "" "" "" "" "" "" "" "" "" "" ""
    ```

1. If you see the previous step outputs, you're all set!

    > Not working? See to the [linux installation error](/handbook/security/corporate/systems/sentinelone/troubleshooting#linux-installation-error) steps on the [troubleshooting](/handbook/security/corporate/systems/sentinelone/troubleshooting) handbook page.
