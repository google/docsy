---
title: Technical Interview Setup
category: Support Team
description: Information about setting up technical interview instances
---

## Set up technical interview instance through Sandbox

### Initial setup in Sandbox

1. <https://gitlabsandbox.cloud/cloud>
1. Use GCP - I tested this only on GCP
1. Select your account (If not selected)
1. "Create Terraform Environment"
1. For Cloud account select your account (if not already selected)
1. Select the Environment Template "support-interview-resources-template-v2-x"
1. Give it an Environment Name
    - Since we are never deleting this Environment only the VM instance behind it, give it a good name that represents what it's for.
1. Click "Create Environment"
1. Wait until you are back in the overview before continuing to the next section.

### Configure your interview instance

1. After the name you just gave your interview instance click the button "view Terraform configuration" (the book)
1. You must modify the "main.tf" file with the following.
    - Update your ssh_key
1. Commit the change and move on to "run your first pipeline"

### Run your first pipeline

1. Wait a moment until "Dry Run" has finished successfully.
1. Manually run "🚀 Everything" and wait till it's finished.
    - Get something to drink, the job can take up to 15 minutes to finish.

### Finally Finished

You now have successfully created your interview instance with the Sandbox.
You can connect to your instance through 2 different methods.

1. `gcloud compute ssh --zone "<your_zone>" "<instance_name>"  --project "<your_name>-<ID>"`
1. `ssh root@<IP_given_in_the_job>`
