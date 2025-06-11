---
title: "GitLab System Administration - Hands-on Lab: Manage GitLab Logs"
description: This Hands-On Guide walks you through managing GitLab logs on a virtual machine.
---

> Estimated time to complete: 30 minutes

## Objectives

The objective of this lab is to guide you on managing your GitLab logs via the `gitlab-ctl` and `sed` commands. For more information on GitLab logging, click [here](https://docs.gitlab.com/ee/administration/logs/).

### Task A. View active logs

The `gitlab-ctl` command allows you to tail all GitLab log files as well as filter by GitLab service.

1. From a shell session on your GitLab instance, run the following command to view all active GitLab logs.

```bash
sudo gitlab-ctl tail
```

Amidst all the output, you should notice the command shows the full file path to each log. Most GitLab logs live in `/var/log/gitlab`. (Note: You can type `CTRL-C` to exit the `tail` command.)

1. You can also view GitLab logs by service. Run the following command to view only NGINX logs (i.e. log files in `/var/log/gitlab/nginx`).

```bash
sudo gitlab-ctl tail nginx
```

You should now see the most recent entries of log files specific to the NGINX web server.

1. Finally, you can drill down to an individual log file.

```bash
sudo gitlab-ctl tail nginx/gitlab_access.log
```

### Task B. Set minimum log levels

Admins are able to set minimum log levels for some GitLab services. Note that only some services such as NGINX and Gitaly let admins change the minimum logging level, and even then only for some log files. The `log_level` for other services, such as Sidekiq and Redis, cannot be changed.

1. Check the current minimum log levels for GitLab services.

```bash
sudo grep -n -E 'log_level|logging_level' /etc/gitlab/gitlab.rb
```

1. Note the line number for `nginx['error_log_level']`.

1. Change the minimum log level for `nginx`. Replace "1731" with the appropriate line number from the `grep` output in the previous step.

```bash
sudo sed -i '1731s/\"error\"/\"warn\"/' /etc/gitlab/gitlab.rb
sudo sed -i '1731s/# //' /etc/gitlab/gitlab.rb
```

1. Re-run the `grep` command from Step 1 to verify the line was modified as intended.

1. Reconfigure to apply the changes.

```bash
sudo gitlab-ctl reconfigure
```

### Task C. Manage log retention

GitLab uses **logrotate** to manage retention of all logs except those managed by the **runit** service manager (**runit** uses a separate service logging daemon called **svlogd**). Log retention can be configured in `/etc/gitlab/gitlab.rb`.

1. Examine default logrotate retention settings.

```bash
sudo grep -n 'logrotate' /etc/gitlab/gitlab.rb
```

1. **Optional**: View the default retention settings for the runit-managed logs.

```bash
sudo grep -n 'svlogd' /etc/gitlab/gitlab.rb
```

1. It appears logrotate (and svlogd) rotate log files every day, and retain 30 days worth of logs. We can verify this by looking inside the service log directories.

```bash
sudo ls /var/log/gitlab/puma
```

Note the gzipped archive files for Puma's stdout and stderr logs from previous days.

1. Change logrotate's behavior to rotate log files weekly. As before, modify the line `sed` edits accordingly using the line number from the grep output.

```bash
sudo sed -i '1234s/daily/weekly/g' /etc/gitlab/gitlab.rb
sudo sed -i '1234s/# //' /etc/gitlab/gitlab.rb
```

1. Change logrotate's retention period to 1 year of retained log files. As before, modify the line `sed` edits accordingly using the line number from the grep output.

```bash
sudo sed -i '1234s/30/52/g' /etc/gitlab/gitlab.rb
sudo sed -i '1234s/# //' /etc/gitlab/gitlab.rb
```

1. Run the following again to ensure your changes are properly written to `gitlab.rb`.

```bash
sudo grep -n 'logrotate' /etc/gitlab/gitlab.rb
```

1. Reconfigure to apply the changes.

```bash
sudo gitlab-ctl reconfigure
```

### Task D. Change log formatting

Many logs are JSON formatted by default. Admins may wish to configure text formatting depending on the log ingestion system used, or for readability.

1. Check the current log formats for Gitaly.

    ```bash
    sudo grep -n -F "gitaly['configuration']" -A20 /etc/gitlab/gitlab.rb
    ```

    > This command will find the start of the gitaly configuration with grep, then display the 20 lines that follow using the `-A20` flag. This will show the full configuration of the Gitaly configuration file

1. Within the output, locate the following lines and note their line numbers

    ```bash
    # gitaly['configuration'] = {
    ...
    #   logging: {
    #     dir: "/var/log/gitlab/gitaly",
    #     level: 'warn',
    #     format: 'json',
    #     sentry_dsn: 'https://<key>:<secret>@sentry.io/<project>',
    #     sentry_environment: 'production',
    # },
    ```

1. Run `sudo gitlab-ctl tail gitaly/current` to see the current JSON output for Gitaly logging.

1. Change Gitaly's log format from JSON to text formatting. Ensure you align the line numbers to the correct lines from above.

    ```bash
    sudo sed -i '2588s/json/text/' /etc/gitlab/gitlab.rb
    sudo sed -i '2574s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2588s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2585s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2591s/# //' /etc/gitlab/gitlab.rb
    sudo sed -i '2591s/,/ }/' /etc/gitlab/gitlab.rb
    ```

    > With these sed commands, you are first replacing the JSON format with text. Next, you are removing the comments in front of the format and Gitaly configuration blocks to enable them.

1. Rerun your `grep` command to view your configuration: `sudo grep -n -F "gitaly['configuration']" -A20 /etc/gitlab/gitlab.rb`. The end result will look similar to below:

```bash
gitaly['configuration'] = {
...
   logging: {
##     dir: "/var/log/gitlab/gitaly",
##     level: 'warn',
      format: 'text'
##     sentry_dsn: 'https://<key>:<secret>@sentry.io/<project>',
##     sentry_environment: 'production',
}}
```

1. Reconfigure to apply the change.

```bash
sudo gitlab-ctl reconfigure
```

1. Verify the updated formatting.

```bash
sudo gitlab-ctl tail gitaly/current
```

You should see the log output is now text formatted instead of JSON formatted.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson).

### Suggestions?

If you’d like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
