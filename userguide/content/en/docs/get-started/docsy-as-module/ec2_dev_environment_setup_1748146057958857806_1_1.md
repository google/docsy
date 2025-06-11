---
title: "Static Analysis Group EC2 development machine setup guide"
---

## Static Analysis Group EC2 development machine setup guide

Some of the SAST analyzers, [including Semgrep](https://github.com/semgrep/semgrep/issues/2252), do not run on the M1 mac as ARM64 is not supported.

To overcome this, a SAST developer image has been added to the EC2 AMI catalog and shared with the `arn:aws:organizations::663740273027:organization/o-qjrbh9ll6x` sandbox organisation so that SAST contributors can run SAST analyzers in a development environment. To setup the image:

1. Create an AWS sandbox account for yourself by visiting https://gitlabsandbox.cloud/login and clicking on `Create individual Account`.
   - For the `Cloud Provider`, select `aws-51eab1fa (Master Account 663740273027)`.
   - For the `Organizational Unit`, select `eng-dev-sandbox-f1098f70`.
1. When the account has finished being provisioned, click on `View IAM Credentials` and note the `Username` and `Password`.
1. Click on `Open AWS Web Console` and use the `Username` and `Password` from step `2` above.
1. Once logged in to the `AWS Web Console`, click on the hamburger menu on the left hand side to open up the `Console Home` sidebar.
1. Click on `All services` in the sidebar, then navigate to `Compute -> EC2`.
1. Choose the `Sydney` region (`ap-southeast-2`) in the region selector at the top right
1. Use the sidebar on the left to navigate to `Images -> AMI Catalog`.
1. Once the `AMI Catalog` page has loaded, click on `My AMIs`.
1. If you see the message `No results were found in My AMIs with your current filters.`, then click on the `Clear Filters` button.
1. You should now see the `static-analysis-workspace` image with the description `A fast path to Static Analysis analyser development`.

   Alternatively, you can search for `static-analysis-workspace` to filter the list of AMIs.

1. Select the `static-analysis-workspace` AMI and click "Launch Instance with AMI".
1. For the instance type, `c6a.xlarge` is recommended as it should provide decent single core performance which is useful for the integration tests.
1. In "Network Settings", ensure the check box "Allow SSH traffic from" is selected and choose "My IP" in the dropdown select.
1. Create or select a key pair and download the private key `.pem`.
1. Click on "Launch Instance". You'll be redirected to another page and see a message stating "Successfully initiated launch of instance".
1. Click on "View all instances" and note the public IP address of the instance.
1. SSH into the instance using `ssh -i <path-to-pem> ubuntu@<ip>`.

   Note: If you see a warning message such as `WARNING: UNPROTECTED PRIVATE KEY FILE!!` along with `Permissions 0644 for '<path/to/private-key.pem>' are too open.`, then you'll need to change the mode of the file using `chmod 600 <path/to/private-key.pem>`

1. You should be greeted by the MOTD.
1. The image has a number of analyzers already cloned, however, these analyzers have been cloned using `ssh`, so you won't be able to fetch the latest changes for the analyzer unless you copy the SSH key from your local development machine to the EC2 instance.

   To avoid copying your SSH key, simply force `git` to use `https` instead of `ssh`:

   ```shell
   git config --global url."https://gitlab.com/".insteadOf "git@gitlab.com:"
   ```
