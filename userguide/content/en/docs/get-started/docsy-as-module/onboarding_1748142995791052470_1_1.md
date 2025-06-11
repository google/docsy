---
title: "Demo Systems Onboarding"
description: "This guide is meant for getting any new hire to the CS Org set up on demo systems and prepaired to start demoing the product"
---

## Demo Systems Initial Set Up

### Preface

If you experience any roadblocks while setting up your environment, open an [issue in the original project](https://gitlab.com/gitlab-com/customer-success/demo-engineering/demo-systems-initial-set-up/-/issues/new) or attend the office hours linked below.

The goal is that you will  be able to use and contribute to this shared demo group: <https://gitlab.com/gitlab-learn-labs/webinars> by the time you complete this.

You can collaborate with your onboarding buddy and your colleagues to remove this blocker, and open a merge request to improve the instructions and make onboarding easier for everyone.

### Demo Systems & Shared Demos Office Hours

Feel free to join our weekly office hours to ask any questions if you get stuck, linked at the top of this doc: [Demo Systems Onboarding Links](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing)

## Envionments

You have access to three types of environments for performing demos.

### GitLab.com SaaS Groups

You will have your two of your own groups on GitLab.com that allow you to showcase featues with each SaaS license tier.

- `https://gitlab.com/gl-demo-ultimate-{handle}`
- `https://gitlab.com/gl-demo-premium-{handle}`

This group should then be where you store all of your demo projects as it will not be constrained by the limitations of trying to just keep your demos in your personal namespace (ex. [Epics](https://docs.gitlab.com/ee/user/group/epics/#epics), [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#gitlab-security-dashboards-and-security-center) and other [group features](https://docs.gitlab.com/ee/user/group/#groups)).

- [ ] **Action:** Do not try to create these groups yourself. Open an access request using the [GitlabCom_Licensed_Demo_Group_Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitlabCom_Licensed_Demo_Group_Request) template.

## Self Managed Omnibus Shared Instances

You have access to an always-on GitLab Demo Cloud self-managed GitLab Omnibus instance that you have admin rights to for showing all of the features of the Admin UI that is not shown in GitLab SaaS. This also provides a backup for demos if something goes wrong with GitLab.com.

When you provision your credentials, a new top-level group will be created with your name that you can store your projects in. This is a shared environment so please do not change any admin-level settings so you don't break another team member's demo.

- [ ] **Action:** Follow the [self-service instructions](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances) to provision credentials for the `cs.gitlabdemo.cloud` instance.
- [ ] **Action:** Join the `#demo-systems` Slack channel for system maintenance announcements and a safe space to ask questions if you have any problems.

## Personal AWS Account and GCP Project

Each team member can use the [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) to provision their own AWS account or GCP project for deploying infrastructure yourself.

> For the purposes of onboarding, we will focus on GCP. You will not need your AWS account right away, so you can always come back later.

- [ ] **Action:** Follow the [self-service instructions](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) to provision a GCP project.
- [ ] **Action:** Follow the [self-service instructions](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) to provision an AWS account.
- [ ] **Action:** Read about how [Terraform Environments](/handbook/company/infrastructure-standards/realms/sandbox/#terraform-environments) have been automated with the Sandbox Cloud and explore the [available templates](https://gitlab.com/gitlab-com/infra-standards/project-templates). You can follow the [self-service instructions](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-create-a-terraform-environment) to create an environment using one of the templates or create any resources manually yourself in your AWS account or GCP project.

Please note that services may take a few minutes before being ready. If you log in and immediately see an error, wait a few minutes then try to access the account again.

You can ask for help from other peers in the `#sandbox-cloud-questions` or [#cs-questions](https://gitlab.slack.com/archives/CR5JLJEEM) Slack channel and tag `@Logan Stucker`.

## Set Up the GitLab Agent for Kubernetes for Your Group

At this point you should have your own group on GitLab.com SaaS as well as a GCP project created using [gitlabsandbox.cloud](https://gitlabsandbox.cloud/cloud).

### Task 1. GKE Cluster

> Our first task will be to set up a cluster on GKE.

1. Login to your [Google Cloud console](https://console.cloud.google.com/).
1. Check if the API for [Kubernetes Engine](https://console.cloud.google.com/kubernetes/) is enabled.
1. Check if the API for [Compute Engine](https://console.cloud.google.com/compute/)  is enabled.
1. Navigate to [**Kubernetes Engine > Clusters**](https://console.cloud.google.com/kubernetes/list/).
1. From here we want to click **CREATE**,
1. In the popup modal window click **Configure** next to the ***Autopilot: Google manages your cluster (Recommended)*** option.
1. Rename the cluster to a not objectionable identifiable name.
1. Choose the region closest to you.
1. Leave the rest of the settings as-is.
1. Click **create**. This will kick off the building of the cluster which will take around 10 minutes.

> While we wait for the cluster to spin up we are going to set up cluster management and a kubernetes agent connection in the ultimate group we set up in the first step. Let's start by navigating there.

### Task 2. GitLab Agent for Kubernetes & Cluster Management

> This agent will enable you to pull any project into your group and deploy it out using the agent we set up. If you want to set up for both GCP and AWS you will need to define two sub groups and have an agent + cluster management in each.

1. Navigate to your Ultimate group.
1. Click on **New Project**.
1. On the follow up screen click **Create from template**.
1. In the template options you are going to want to scroll down to find the **GitLab Cluster Management** project then click **Use Template**.
1. Name the project `Cluster Management`.
1. Keep it at **Private** visibility level.
1. Click **Create project**.
1. After waiting a few seconds for the project to be created we will then want to click **Web IDE** so that we can start setting up the GitLab agent for Kubernetes.
1. First click new file where you can then copy in the snippet below and click **Create file**: `.gitlab/agents/primary-agent/config.yaml`
1. Within the `config.yaml` we want to add the code below, where you edit the & values to be the correct paths to your project & group. Both of these values can be grabbed from the URL you have the Web IDE open in. If you get stuck feel free to reference [this](https://gitlab.com/gitlab-learn-labs/webinars/cluster-management/-/blob/master/.gitlab/agents/primary-agent/config.yaml) agent config.

   ```yaml
   gitops:
     # Manifest projects are watched by the agent. Whenever a project changes,
     # GitLab deploys the changes using the agent.
     manifest_projects:
     # Adjust the line below for your Project
     # For Example: - id: gitlab-learn-labs/webinars/cicd-demo-project
     - id: {path-to-your-group-and-project}
       paths:
       - glob: 'manifests/*.yaml'

     # The CI/CD tunnel is always enabled in the project where you register and configure the Agent.
     # This connection can be shared with other groups and projects.
     ci_access:
       groups:
       # Adjust the line below for your Project
       # For Example: - id: gitlab-learn-labs/webinars
       - id: {path-to-your-group}
   ```

   > **Notice how the path example above does not include `https://gitlab.com` but only the path after it**
   >
   > This config is telling the agent to look at our Cluster Management project for any manfiest changes as well as to allow any other projects within our group to use it for deployments.

1. Once your agent config is set up, go ahead commit the changes to the `main` branch.
1. Once committed, we can click our project name in the top left to get back to our project overview page.
1. From the landing page use the left hand navigation menu to click through **Infrastructure > Kubernetes clusters**.
1. We then want to click **Connect a cluster**.
1. In the popup modal window select our new agent, `primary-agent`, from the dropdown and click **Register**.

   > Throughout your demos you may get some questions about the differences between the GitLab agent for Kubernetes and our old certificate approach. In short, the agent is far more secure and offers alot of flexibility, but it is a good idea to research this further for when the question comes up.

1. In the resulting popup we want to copy the helm command somewhere locally to reference later. Now that we can connect our agent we also want to navigate back to our Google Cloud console to see if our cluster has been created yet.

### Task 3. Connecting the Agent

1. If the cluster is ready to go you will see a green checkmark in the status column. If green lets go ahead and click into the cluster.
1. On the resulting page click **CONNECT**.
1. Click **RUN IN CLOUD SHELL**. Wait for the shell to spin up.
1. Then run the from GCP auto generated command to connect to the right cluster. If a popup comes to authorize, press **authorize**.
1. Copy and paste the helm command that we got from setting up our agent in GitLab into the gcloud terminal.
1. We then want to navigate back to our GitLab.com tab where we can close the agent connection popup if it is still open. Go ahead and refresh the page to make sure that the agent has made the connection.
1. In the GCP Cloud Shell still connected to your GCP C:uster, you can view the logs with this command: `kubectl logs -f -l=app=gitlab-agent -n gitlab-agent-primary-agent`
1. Next using the bread crumbs at the top of the page navigate out to the top level of your group. Ensure that you are at the group level and not project level or the rest of the pipelines will fail. We then want to use the left hand navigation menu to click through **Settings > CI/CD**.

   > Not adding the variables to the group level is the most common mistake people make when trying to set this up. Take your time and read carefully.

1. In the CI/CD settings, locate the **Variables** section and expand it.

1. Click **Add variable** and use the key value pair example below to add the variable.

   ```text
   KUBE_CONTEXT:{path-to-your-group-and-project}:primary-agent
   ```

   ```text
   Example
   KUBE_CONTEXT:gitlab-learn-labs/sample-project-testing/cm-test:primary-agent
   ```

   > This variable is used for any projects that have access and want to know where to look for the agent config. Without it, the Cluster Management project will fail because it dosent know what agent changes it is meant to compare to.

1. Unselect Protected and Masked.
1. When done click **Add variable**
1. Next we want to click the name of our group in the top left then click back into our cluster management project.
1. Once again we will click **Web IDE** to make some code changes.
1. Once in the Web IDE click into the `helmfile.yaml`.
1. Uncomment line 19. `- path: applications/ingress/helmfile.yaml`

   > You can come back later to set up cert manager as well. Just keep in mind that you will need to set up your own domain name or use sslip.io due to cert limitations with nip.io.

1. Once done go ahead and commit the change to master. This time you should see a pipeline kick off in the bottom left of the webpage. We want to click the hyperlink that starts with # in the bottom left to get a view of the cluster management pipeline.

   > Line 19 holds the command to install and ingress controller in the cluster. By doing this GCP allows our application to be accessible through a public IP

1. Wait a few minutes for the first job to complete. If everything was set up correctly the job will pass and then we can manually start the sync job. If the job fails, reference the troubleshooting section before moving on.
1. Once the pipeline has fully run (~5 minutes), go back to the tab we have the Google Cloud console open on and in the gcloud terminal run the command below.

   ```bash
   kubectl get service --all-namespaces
   ```

1. Within the `gitlab-managed-apps` namespace, look for the service named `ingress-ingress-nginx-controller`. We then want to copy its EXTERNAL-IP value and use it locally.
1. Now that we have the ingress value we want to go back to our GitLab.com tab for the last time and navigate to the groups top level. We will be adding another variable so to make sure your application deployments work ENSURE you are at the group level.
1. Use the left hand navigation menu on the group level, to click through **Settings > CI/CD** and locate the variables section.
1. Expand the section and click **Add variable**.
1. Then add the variable below in addition to the existing ones making sure that ***protected*** and ***mask*** are not checked and the rest of the default settings are the same. The {your-external-ip} value is going to be the ingress ip we just copied from the gcloud console:

   ```text
   KUBE_INGRESS_BASE_DOMAIN:{your-external-ip}.nip.io
   ```

### Task 4. Deploy Ruby on Rails Application

1. Now that all of the variables are set up we should be good to go.
1. Go back to your project overview page of your group.
1. Click **New project**, **Create from template**.
1. Select and import the ***Ruby on Rails** project with a name of your choice and public.
1. Once the project is imported use the left hand navigation menu to click through **Settings > CI/CD** and
1. Expand the ***Auto DevOps*** section.
1. Click ***Default to Auto DevOps pipeline***, leave the ***Deployment strategy*** as the first option,  & **Save changes**
1. We then want to click our project name in the top right and click **Web IDE** on the project homepage.
1. Within the IDE we will want to locate the ***.gitlab-ci.yml*** file and delete it.
1. Once deleted commit the changes to master and watch as the Auto DevOps pipeline uses our new agent & infra to push out an application.

   > This step also makes sure that your agent was set up correctly. If your Auto DevOps pipeline does not look like the one below make sure your agent config is correct. It may be a single indent is missing that invailidated the whole yaml.

   ![Correct Auto DevOps Pipeline](/images/customer-success/demo-systems/ADO.png)

1. It is out of scope for onboarding but you could continue to modify the agent as you add more and more projects to this group. The below example is what your manifest definition might look like if you started adding multiple projects:

   ```yml
   gitops:
     manifest_projects:

     - id: gitlab-learn-labs/gitops/2022-10-11-ultimate-gitops/jenlung/world-greetings-env-1
       default_namespace: default
       paths:
         - glob: '/manifests/**/*.yaml'
       reconcile_timeout: 3600s # 1 hour by default
       dry_run_strategy: none # 'none' by default
       prune: true # enabled by default
       prune_timeout: 360s # 1 hour by default
       prune_propagation_policy: foreground # 'foreground' by default
       inventory_policy: must_match # 'must_match' by default

     - id: gitlab-learn-labs/gitops/2022-10-11-ultimate-gitops/lai_dai/world-greetings-env-1
       default_namespace: default
       paths:
         - glob: '/manifests/**/*.yaml'
       reconcile_timeout: 3600s # 1 hour by default
       dry_run_strategy: none # 'none' by default
       prune: true # enabled by default
       prune_timeout: 360s # 1 hour by default
       prune_propagation_policy: foreground # 'foreground' by default
       inventory_policy: must_match # 'must_match' by default
   ```

## Sample Demo Projects

### Adding Ready-To-Go Demos

- [ ] **Fork one demo into your personal ultimate group**

There is a shared demo group for webinars at [https://gitlab.com/gitlab-learn-labs/webinars](https://gitlab.com/gitlab-learn-labs/webinars) that you can fork projects out of and into your new ulitmate group & have running in under 5 minutes.

We suggest reading the [documentation](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects) about how these shared projects works. These demos are great because they all come with suggested talk tracks as well for how you might present the various topics.

By forking the project, you can use them how you want and then submit MRs to the original project to collaborate with others on fixing any bugs or add any new features.

Learn more about setting up these demos at [gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects](https://gitlab.com/gitlab-learn-labs/webinars/how-to-use-these-projects)

### Installing Personal GitLab Runners

- [ ] **Install GitLab Runners**

You only need to do this if you find yourself running out of shared runner minutes. It is typical that SAs + CSM/Es exhaust their quota of compute minutes. While installing and running an agent is an advanced topic, it is something that our customers ask a lot of questions about so it's best to be well versed on the topic. If you are brave you can [follow our docs](https://docs.gitlab.com/runner/install/) to set up the runner in a different way.

1. First we need to set up an Ubuntu VM before moving forward. Navigate to your GCP project, and click through **Compute Engine > VM instances**.  Next click **CREATE INSTANCE**.

1. On the creation page add a name (something runner related), then leave the settings as is until the **Boot disk** section. Click **Change** and change the ***Operating system*** to Ubuntu & the ***Version*** 20.04 LTS x86/64, amd64. Then click **SELECT**.

   > If you hit "no space left on device", you can always [increase the volume size](https://cloud.google.com/compute/docs/disks/resize-persistent-disk) at a later time

1. From there scroll down to the **Firewall** section and make sure both **Allow HTTP traffic** and  **Allow HTTPS traffic** are selected.

1. Click **CREATE** and wait for the pod to spin up. Once its spun up click **SHH > View gcloud command**. If you have gcloud set up already on your machine copy the command and run it in your terminal of choice. If you don't, you can click **RUN IN CLOUD SHELL** which should auto paste in the command. Just keep in mind that the cloud shell is not reliable and you should get your local connection set up.

1. Within your terminal shell first run the below command to enter privileged mode:

   ```console
   sudo -i
   ```

1. Install Docker.

   ```console
   sudo apt-get update
   sudo apt install docker.io
   ```

   > If that doesn't succeed, please reference [docker's documentation](https://docs.docker.com/engine/install/ubuntu/).

1. Install GitLab Runner.

   ```console
   # Add the GitLab repository
   curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
   ```

   ```console
   # Install the GitLab Runner package.
   sudo apt-get install gitlab-runner
   ```

1. You can then check the status of the runner with this command:

    ```console
    sudo gitlab-runner status
    ```

1. Now that the runner is up and running we need to connect it.

   - If you are configuring this at the group level, navigate to the group and using the left hand navigation menu click **CI/CD > Runners**. In the upper right corner, select **Register a group runner** and copy the registration token locally.
   - If you are configuring this at the project level, navigate to the project and using the left hand navigation menu click through **Settings > CICD** and scroll down and expand the **Runner** section and copy the registration token locally.
   - For more information, see the documentation for [registering runners](https://docs.gitlab.com/runner/register/).

1. Copy this command into a text editor and replace the `REGISTRATION_TOKEN` placeholder below with the token that you copied locally. Copy the command into your Terminal and run it.

   ```console
   sudo gitlab-runner register -n \
     --url https://gitlab.com/ \
     --registration-token REGISTRATION_TOKEN \
     --executor docker \
     --description "My Docker Runner" \
     --docker-image "docker:20.10.16" \
     --docker-privileged \
     --docker-volumes "/certs/client"
   ```

   - If you configured a group runner, navigate back to the **CI/CD > Runners** page in your group. You should now see your runner listed with an **Online** status.

     > Consider modifying the Runner's configurations located at `/etc/gitlab-runner/config.toml` (e.g. concurrent, see [here](https://docs.gitlab.com/runner/configuration/advanced-configuration.html) for additional details)

   - If you configured a project runner, navigate back to the **Settings > CICD** page and expand the **Runners** section. You should now see your runner listed with an **Online** status.

### Troubleshooting The Agent

- Check that your `KUBE_CONTEXT` & `KUBE_INGRESS_BASE_DOMAIN` variables are configured at the group level and not the project level.

- Check that your `KUBE_CONTEXT` & `KUBE_INGRESS_BASE_DOMAIN` variables do not have trailing spaces or indents

- Ensure that your agents `config.yaml`points at the right group or project

- In your gcloud shell run `kubectl logs -f -l=app=gitlab-agent -n gitlab-agent` to see if any errors were logged

- Check out the `#f_agent_for_kubernetes` Slack channel to see if the team has mentioned any ongoing issues

- Try out any further troubleshooting on this handbook page: <https://docs.gitlab.com/ee/user/clusters/agent/troubleshooting.html>

- Attend weekly office hours linked here: [Demo Systems Onboarding Links](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing)

### Next steps

Now that you have your own instance and projects spun up, go ahead and try out some of our customer facing workshops we put on by clicking the link below.

Please ensure that you sign up with your GitLab provided email for access. These workshop will cover the basics of Advanced CI/CD & DevSecOps & can be a good reference point for later.

### Additional Notes

- If a `Learn Labs Group` or `a group that was set up for you` is mentioned, this is your group that you created above.

- Both labs have a `Kubernetes Agent` section that you can skip over because we have already done that.

- Recordings have been provided for you to follow along with an Instructor if you would like, but keep in mind to not try and redeem a group at the start of the recording.

See the [Demo Systems Onboarding Links](https://docs.google.com/document/d/1dy5Zb38pryB-fNMCw4HDUZ6wBEqlc1rPkKyN5z_OH3o/edit?usp=sharing) Google Doc for additional resources.
