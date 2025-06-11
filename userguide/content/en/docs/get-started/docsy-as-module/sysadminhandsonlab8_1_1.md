---
title: "GitLab System Administration - Hands-on Lab: Troubleshoot GitLab"
description: "TThis Hands-On Guide walks you through troubleshooting GitLab services NGINX, Puma, and Gitaly."
---

> Estimated time to complete: 30 minutes

## Objectives

The purpose of this lab is to show how to troubleshoot the GitLab server by using the `gitlab-ctl` command. For this lab exercise, refer to GitLab's [application architecture](https://docs.gitlab.com/ee/development/architecture.html#simplified-component-overview) to review GitLab's major services and interactions.

### Task A. Troubleshoot NGINX

1. From a shell session on your GitLab instance, view one of the NGINX active logs.

```bash
sudo gitlab-ctl tail nginx/gitlab_access.log
```

Note the log adds new entries every few seconds. Most of these entries are gitlab-runner checking in with the GitLab instance via HTTP.

1. Stop the NGINX services.

```bash
sudo gitlab-ctl stop nginx
```

1. Attempt to navigate to `http://<your_gitlab_instance>` using a web browser. Your web browser should display "**This site can't be reached**" or a similar message.

1. Check `nginx/access_log` again.

```bash
sudo gitlab-ctl tail nginx/gitlab_access.log
```

The log should no longer be updating since no clients can make HTTP/HTTPS requests to GitLab after stopping NGINX.

1. Verify web services aren't running or listening anywhere.

```bash
curl -i http://localhost/nginx_status
curl -i http://localhost:80
```

1. Restart NGINX services.

```bash
sudo gitlab-ctl restart nginx
```

1. Verify the clients (e.g. the GitLab Runner) can communicate with GitLab again.

```bash
sudo gitlab-ctl tail nginx/gitlab_access.log
```

1. Verify the webserver is running and listening on port 80.

```bash
curl -i http://localhost/nginx_status
```

### Task B. Troubleshoot Puma

1. Connect to your GitLab instance with a web browser. Verify you can click around to projects, the Admin Area, etc.

1. From a shell session on the GitLab instance, stop Puma.

```bash
sudo gitlab-ctl stop puma
```

1. Refresh GitLab in your web browser. You should immediately see an error that reads "**502: GitLab is taking too much time to respond**". NGINX is running, so it can accept HTTP requests. However, when workhorse tries to pass an HTTP request to the Rails application, there is no running service to accept it.

1. View the GitLab Workhorse logs.

```bash
sudo gitlab-ctl tail gitlab-workhorse/current
```

You will see a variety of **502** and **badgateway** errors in the output.

1. View Puma logs.

```bash
sudo gitlab-ctl tail puma
```

You should see a message in `puma/puma_stdout.log` about the Puma service shutting down. You may also see errors in `puma/puma_stderr.log`.

1. Restart Puma.

```bash
sudo gitlab-ctl restart puma
```

1. View Puma's runit log.

```bash
sudo gitlab-ctl tail puma/current
```

You may see output indicating Puma has restarted.

1. View `puma/puma_stdout.log`.

```bash
sudo gitlab-ctl tail puma/puma_stdout.log
```

You should see that Puma is running and consuming resources again.

1. Wait about 2 minutes, then refresh GitLab in your web browser. The application should now be reachable.

1. View the GitLab Workhorse log.

```bash
sudo gitlab-ctl tail gitlab-workhorse/current
```

Recent entries should indicate successful requests to Puma (i.e. when you reloaded GitLab in your web browser).

### Task C. Troubleshoot Gitaly

1. Connect to your GitLab instance with a web browser.

1. Navigate to **Menu > Projects > Your Projects**.

1. Select **New Project**.

1. Select **Create blank project**.

1. Name the project `Test project`. Set project visibility to **Public**, and ensure **Initialize repository with a README** is selected. Leave all other settings as they are.

1. Select **Create project**. You will be redirected to the project's landing page.

1. SSH into your **GitLab Runner server**.

```bash
ssh -i <SSH_HOST_KEY>.pem ec2-user@<GITLAB_runner_host>
```

1. Download Git if it is not already installed.

```bash
sudo dnf install -y git
```

1. Back on GitLab's **Test project**, select **Clone** on the right side of the page.

1. Next to **Clone with HTTP**, select **Copy URL**.

1. From your GitLab Runner server, clone the repository.

```bash
git clone <URL_copied_from_previous_step>
```

1. Verify the project is correctly cloned.

```bash
cd ~/test-project
ls -a
git status
```

1. Enter `exit` to exit the SSH session on your GitLab Runner server.

1. Open an SSH session on your **GitLab Omnibus instance**.

```bash
ssh -i <SSH_HOST_KEY>.pem ec2-user@<GITLAB_OMNIBUS_HOST>
```

1. Verify Gitaly is running.

```bash
sudo gitlab-ctl status gitaly
```

1. View Gitaly logs.

```bash
sudo gitlab-ctl tail gitaly
```

> You should see many recent gRPC requests relating to **Test Project** (you can see the references more clearly if you grep the output, e.g. `sudo gitlab-ctl tail gitaly | grep test-project`).

1. Stop Gitaly services.

```bash
sudo gitlab-ctl stop gitaly
```

1. Verify Gitaly (and only Gitaly) is stopped.

```bash
sudo gitlab-ctl status
```

1. Navigate back to **Test Project** in your web browser. On the project page select the dropdown that says **main** under the project title. Ordinarily you would be able to select a Git branch to switch to. Now you see an error and the branch list will not load.

1. In the left sidebar, select **Repository > Files**. Note the 404 error as GitLab is unable to fetch any repository files.

1. Select the Back button to go back to the project landing page. Then refresh the page.

1. Note the additional errors. One error may read "**An error occurred while fetching folder content**". GitLab cannot checkout the HEAD of the default branch because Gitaly is not running to handle the request.

1. Return to your GitLab instance SSH session. Check Gitaly's recent log entries.

```bash
sudo gitlab-ctl tail gitaly/current
```

> Note the many errors in the log output.

1. Enter `exit` to exit the SSH session on your GitLab Instance server.

1. SSH back into your **GitLab Runner server**.

```bash
ssh -i <SSH_HOST_KEY>.pem ec2-user@<GITLAB_RUNNER_HOST>
```

1. Navigate into your cloned **Test Project**.

```bash
cd ~/test-project
```

1. Try to fetch any new changes from the remote repo on the GitLab instance.

```bash
git fetch
```

> You may see error 503 in the output, indicating Gitaly is not reachable and can not handle the request.

1. Enter `exit` to exit the SSH session on your GitLab Runner server.

1. Re-initiate an SSH session on your **GitLab Omnibus instance**.

```bash
ssh -i <SSH_HOST_KEY>.pem ec2-user@<GITLAB_OMNIBUS_HOST>
```

1. Restart Gitaly services.

```bash
sudo gitlab-ctl start gitaly
```

1. Check Gitaly logs.

```bash
sudo gitlab-ctl tail gitaly/current
```

> The output should now show successful gRPC requests.

1. Return to **Test Project** in your web browser. Refresh the page. You should now be able to navigate around the repository, view files, and check out branches.

1. SSH back into your runner server and test `git fetch`. The command should now run without errors (there probably will not be any output since files have not changed in GitLab).

### Task D. Run the gitlabsos utility

1. Navigate to the [gitlabsos project page](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos/). Read through the project summary and README to learn the utility's purpose and usage.

2. Connect to your GitLab Omnibus instance via SSH.

3. Clone the gitlabsos utility.

   ```bash
   /opt/gitlab/embedded/bin/git clone --recursive https://gitlab.com/gitlab-com/support/toolbox/gitlabsos.git
   ```

4. Run gitlabsos.

   ```bash
   cd gitlabsos
   sudo ./gitlabsos.rb
   ```

   > The script may take a few minutes to run.

5. Once the script is finished, examine the resulting report file and its contents.

   ```bash
   ls
   tar -tvf gitlabsos.<GITLAB_FQDN>.<timestamp>.tar.gz
   ```

   GitLab Support may ask for this report to assist with troubleshooting.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/sysadminhandson).

### Suggestions?

If you’d like to suggest changes to the GitLab System Admin Hands-on Guide, please submit them via merge request.
