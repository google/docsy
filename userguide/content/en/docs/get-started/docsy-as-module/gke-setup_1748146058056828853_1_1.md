---
title: "Set up GitLab CE or EE on Google Kubernetes Engine"
description: "This tutorial walks through the process of installing GitLab on Google Kubernetes Engine (GKE) including setting up clusters, instructions for both GitLab CE and EE, and how to troubleshoot potential issues during installation."
---

## Video

The video below shows installing GitLab on Google Kubernetes Engine (GKE). For the DevOps lifecycle, please refer to the
[sales demo](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/).

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/HLNNFS8b_aw" frameborder="0" allowfullscreen="true"> </iframe>
 </iframe>
</figure>

## Preparation

- You need a Google Cloud Platform account, GitLab employees will have this. Ensure you are logged in with your GitLab account.
- Login to [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes).
- GitLab employees should use the `gitlab-demos` project. Others should select or create a project to work in.

  - URL: [https://console.cloud.google.com/kubernetes/list?project=gitlab-demos](https://console.cloud.google.com/kubernetes/list?project=gitlab-demos)

- If you've run through the demo before but didn't clean up your [demo cluster(s)](https://console.cloud.google.com/kubernetes/list), [do so now](#cleanup).
- This script assumes the `make-sid-dance.com` domain, but you should either:

  - Pick the least-recently used domain from the [Google Doc](https://docs.google.com/spreadsheets/d/1HZ-7XhDNzdCBxfjzDFIQi7EjliptkpY4CB3LbiLa9MY/edit#gid=0) (internal only). (Let's Encrypt limits SSL cert creation on a weekly basis, so rotating usage helps reduce hitting the limits), or
  - Buy a new domain for your demo and substitute throughout the script.

    - [Create DNS Zone](https://console.cloud.google.com/networking/dns/zones/~new?project=gitlab-demos) to let Google manage DNS for you.
    - Click `Registrar Setup` to see what name servers to use.

- Disable desktop notifications (on a Mac, top-right corner, option click).
- Open up new browser window so the audience doesn't see all your other open tabs.
- Resize your browser window to something reasonable for sharing. 1280x720 is a good option. <https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/720p.scpt> is a handy AppleScript if you're on a Mac and using Chrome. Add it to your User Scripts folder and show the Script menu in your menu bar, and it'll be really easy to trigger.
- Consider just sharing web browser window so the audience isn't distracted by notes or other windows.
- If displaying full-screen, go to 'Displays' settings, Resolution: Scaled, Larger text.
- Consider opening this page on an iPad that has screen lock disabled.

**CLI setup**

- On macOS, install `brew` for all the things
- `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- You need to have the [Google Cloud SDK](https://cloud.google.com/sdk/downloads) installed. e.g.
- Install Brew Caskroom
- `brew install caskroom/cask/brew-cask`
- Install Google Cloud SDK
- `brew cask install google-cloud-sdk`
- Run `gcloud components install kubectl`
- Install `helm`

  - `brew install kubernetes-helm`

- Before each demo, run `sudo gcloud components update; gcloud auth application-default login`, saving you time from doing this in the middle of the demo.

## Set up a container scheduler cluster

We're going to install everything from scratch and we'll start by creating a new
container cluster. Today I'm going to use Google Kubernetes Engine.

- [Create cluster](https://console.cloud.google.com/kubernetes/add?project=gitlab-demos) (or open [GKE](https://console.cloud.google.com/kubernetes), pick [`gitlab-demos` project](https://console.cloud.google.com/kubernetes/list?project=gitlab-demos) and click [Create cluster](https://console.cloud.google.com/kubernetes/add?project=gitlab-demos)).

We'll name this cluster `make-sid-dance` and have it created in the us-central
zone. I will bump up the machine type to have 2 virtual CPUs for performance
reasons, but I'll drop it down to 1 node. A real cluster should have 3 or more
nodes for better availability.

- Name the cluster after your domain name (e.g. `make-sid-dance`).
- Note the `Zone` field should read `us-central1-*`, and will have a letter on the end. This letter does not matter.
- Change the number of vCPU in Machine type to `2 vCPU`.
- Change the Size to `1`. *Note: The demo will run fine on more nodes, if desired*
- Click the `Create` button at the bottom of the page.
- End `Advanced options` in the `Security` section select `Enable legacy authorization`

Now we need to get an external IP address for the demo so that we can use a
domain name and Let's Encrypt for SSL.

- Navigate to [VPC Network](https://console.cloud.google.com/networking/addresses/list).
- Select `External IP addresses` from the menu on the left.
- Click [`Reserve static address`](https://console.cloud.google.com/networking/addresses/add?project=gitlab-demos) at the top of the page.
- Set the name to match the name used for the cluster (e.g. `make-sid-dance`).
- Set the Region to `us-central1` to match the Zone where you made the cluster.
- **Warning:** The external IP **must not** be attached to anything yet. This will happen automatically  in a later step.
- Click the `Reserve` button at the bottom of the page.

We'll now create a wildcard DNS entry for our demonstration domain, pointing to
the IP we just created.

- Copy the `External Address` from the list, from the line containing the name you used.
- Navigate to [Network services](https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list?project=gitlab-demos)
- Click `Cloud DNS` from the menu on the left.
- Click on the Zone that has the name of the domain to be used for the demo. (e.g. `make-sid-dance-com`)
- Click on the `Add Record Set` button at the top of the page.
- Set the `DNS Name` to `*`.
- Set the `IPv4 Address` to the clipboard contents (the External Address you just copied).
- Click the `Create` button at the bottom of the page.

Now that we have created the cluster and configured a domain, we can go back and
check on our cluster.

- Navigate to [Kubernetes Engine](https://console.cloud.google.com/kubernetes/list).
- Confirm a green checkmark.

Good, our cluster is ready for us to use. Let's connect to it.

- Click on the `Connect` button for your cluster.
- Click the `copy` icon to the right of the `gcloud container ...` entry. It looks like two overlapping white boxes.
  - Run this command:

    ```shell
    gcloud container clusters get-credentials makesiddance-com \
    --zone us-central1-a --project gitlab-demos
    ```

- Switch to the Terminal window, paste this command in and run it.

## Set up GitLab itself

Now that we have our cluster configured, we're ready to install GitLab. To do
this, we'll need the base domain name, the external IP address we just
configured, and an email address to use with Let's Encrypt. Then we use `helm`
to install all the necessary components.

- `helm init`
- `helm repo add gitlab https://charts.gitlab.io`
- `helm upgrade -i makesiddance --namespace gitlab --set baseDomain=makesiddance.com,baseIP=192.168.1.1,legoEmail=you@gitlab.com,provider=gke gitlab/gitlab-omnibus` (Replacing baseDomain, baseIP with External Address from above, and legoEmail as appropriate.)

**Alternate instructions for GitLab EE**

- Go to [`/free-trial/`](https://about.gitlab.com/free-trial/) and request a trial license for GitLab EE
- Wait for email
- Download license to `~/.gitlab-license`
- Install helm chart, adding the gitlab and gitlabEELicense options:

```console
export LICENSE= `cat ~/GitLab.gitlab-license`
helm upgrade -i makesiddance --namespace gitlab --set baseDomain=makesiddance.com,externalIP=192.168.1.1,legoEmail=you@gitlab.com,provider=gke,gitlab=ee,gitlabEELicense=$LICENSE gitlab/gitlab-omnibus
```

Now let's check if our `gitlab` service is up, and wait for it if not.

- `kubectl get deployment -w gitlab --namespace gitlab`
- Wait until `Available` shows 1.

**Optional filler**

- `kubectl proxy`
- Go the Kubernetes Dashboard at `http://localhost:8001/ui`
- Change the `Namespace` drop-down on the left. Change it from `default` to `All Namespaces`
- Click on `Workloads` on the left.

GitLab is now deploying, and we can watch the status from the Workloads page in
the Kubernetes dashboard. We'll watch here for all items to have a green
checkmark showing that they have completed. This process can take a few minutes
as GKE allocates resources and starts up the various containers. You can see
here there are several containers. The main GitLab container has the Rails app,
but also Mattermost for Chat, the integrated Docker Registry, and Prometheus for
monitoring. Then there are separate containers for Postgres and Redis and the
autoscaling GitLab Runner for CI and CD. This is everything you need for the
DevOps lifecycle on Kubernetes.

While we're waiting: In the next demo, I'll take you through everything you need
to take ideas to production, including chat with Mattermost, issues and issue
tracking, planning with issue boards, coding with terminal access, committing
with git version control, merge requests for code review, testing with
continuous integration, getting peer reviews with live review apps, continuous
delivery to staging, deploying to production directly from chat, cycle analytics
to measure how fast you're going from planning to monitoring, and lastly, Prometheus
monitoring of your GitLab instance. With GitLab, everything is integrated out of
the box.

What takes 10 minutes in this demo would take days if you're not using GitLab
and have to integrate different tools. Not only is GitLab faster to set up, but
it is also more convenient to have everything in one interface. Developers want
to work on creating a great product, not on learning and maintaining the
integrations between theirs tools.

*If there is more time talk about what a review app is and what cycle analytics are.*

- Wait for gitlab pod to go to green or deployment to show available

  Looks like our deployment is finished. Let's check out GitLab...

- Open a new tab with `gitlab.make-sid-dance.com` (Adjusting the URL to the domain you used for this demo)

Boom, we've got a shiny new GitLab installation!

### Set root password

Before we get too carried away, we need to secure the root account with a new
password.

- Set password for root user (You don't need to actually log in as root, but you can)

## Cleanup

- Before you delete the cluster, delete all of the underlying services/pods/etc. using the CLI.
- If you accidentally delete the cluster using the web UI, make sure you:

  - Look for [persistent disks](https://console.cloud.google.com/compute/disks?project=gitlab-demos&organizationId=769164969568) that need to be deleted manually.
  - Look up the [external IP](https://console.cloud.google.com/networking/addresses/list?project=gitlab-demos&organizationId=769164969568) you used, find the ID of the load balancer it is forwarding to, then find that ID in the list of [load balancers](https://console.cloud.google.com/networking/loadbalancing/list?project=gitlab-demos&organizationId=769164969568). Delete the load balancer.

- Release the [static IP](https://console.cloud.google.com/networking/addresses/list?project=gitlab-demos&organizationId=769164969568).
- Delete all orphaned disks

## Troubleshooting

### Various failures block Let's Encrypt, and thus GitLab

There are several scenarios which can cause deployment failures due to issues surrounding the `kube-lego-nginx` and the Let's Encrypt (LE) ACME process. The easiest way to find these errors is checking the logs of the `kube-lego-nginx` service in the `kube-lego` namespace of the dashboard for your Kubernetes cluster.

1. **Let's Encrypt top-level domain request rate limit exceeded**

   The failure mode here is the most vague from the logs, however it occurs when you have exceeded the number of certificate or renewal requests allowed for a single TLD. [Please see their documentation regarding this](https://letsencrypt.org/docs/rate-limits/).

1. **Unresolvable DNS**

   If your DNS records are not correctly configured, the Let's Encrypt servers may not be able to resolve your domain when the ACME requests are filed against it. Let's Encrypt performs a reachability test that depends on valid, resolvable Fully-Qualified Domain Names. You must confirm that your entry DNS is functional, and has propagated. You can do this by using an external host (anywhere not directly querying your primary DNS where this record is present) to ping `test.my.tld` where `my.tld` is the domain name you are using. Because you should have configured a wildcard record (`*.my.tld`), `test.my.tld` should resolve to that address.

1. **Host not responding (reachability)**

   This has been observed as a failure of the LoadBalancer to be properly connected to the reserved statis external IP address. There are a few methods of failure here, but the primary cases are:

   - Unable to assign due to prior assignment.

     Either an existing use, or a failure to fully remove the prior deployment. This has been seen in both scenarios by GitLab personnel.  If you are re-creating a previous deployment, you need to wait a short period and/or confirm that the previously used GCP Networking LoadBalancer has been removed. You can manually remove these if you do not wish to wait for GCP to catch up with the de-provisioning.

   - Unable to assign due to incorrect region.

     If you inadvertently create a GKE Kubernetes cluster in a region that is not the same as the static IP address you are attempting to use, your deployment will fail to attach to that IP address, and result in the inability to listen and respond to requests.

### General notes

#### Creating connection to your cluster from kubectl

- Navigate to [Container Engine](https://console.cloud.google.com/kubernetes/list).
- Click on the `Connect` button for your cluster.
- Click the `copy` icon to the right of the `gcloud container ...` entry. It looks like two overlapping white boxes.
  - Run this command:

    ```shell
    gcloud container clusters get-credentials makesiddance-com \
    --zone us-central1-a --project gitlab-demos
    ```

- Switch to the Terminal window, paste this command in, run it.
- run `kubectl proxy`

#### Logs

- You can find logs for each pod in the Kubernetes Dashboard

  - Select `Namespace` you want to see logs for
  - Navigate to `Pods`
  - Select `Pod` you want to see logs for
  - Click on `View logs`

- You can check logs from CLI using `kubectl` as well

 ```console
  kubectl get namespaces
  kubectl get pods --namespace=<NAMESPACE>
  kubectl logs <POD--namespace=<NAMESPACE>
 ```
