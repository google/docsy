---

title: "Set up GitLab CE or EE on Azure Container Service"
---

## Video

The video below shows how to install GitLab EE onto Azure Container Service. For
the DevOps lifecycle, please refer to the [sales demo](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/demo/).

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/MoLKFQxRaGE" frameborder="0" allowfullscreen="true"> </iframe>
 </iframe>
</figure>

## Preparation

> - You need an Azure account. A free trial account will suffice. Ensure you are logged in.
> - Login to [Azure Portal](https://portal.azure.com).
> - This script assumes the `tanuki.website` domain, but you should either:
>   - Pick the least-recently used domain from the [Google Doc](https://docs.google.com/spreadsheets/d/1HZ-7XhDNzdCBxfjzDFIQi7EjliptkpY4CB3LbiLa9MY/edit#gid=0). (Let's Encrypt limits SSL cert creation on a weekly basis, so rotating usage helps reduce hitting the limits), or
>   - Buy a new domain for your demo and substitute throughout the script.
>     - [Google Domains](https://domains.google.com) is $12 for `.com` domains, which isn't the cheapest, but comes with privacy protection.
>     - [Create DNS Zone](https://console.cloud.google.com/networking/dns/zones/~new?project=gitlab-demos) to let Google manage DNS for you.
>     - Click `Registrar Setup` to see what name servers to use.
> - Disable desktop notifications (on a Mac, top-right corner, option click).
> - Open up new browser window so the audience doesn’t see all your other open tabs.
> - Share just the web browser window so the audience isn’t distracted by notes or other windows.
> - [Optional] Go to 'Displays' settings, Resolution: Scaled, Larger text.
> - [Optional] Open this page on an iPad that has screen lock disabled.
>
> **CLI setup**
>
> - On macOS, install `brew` for all the things
>   - `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
> - You need to have the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed. e.g.
>   - `curl -L https://aka.ms/InstallAzureCli | bash`
>   - `sudo az acs kubernetes install-cli`
> - Install `helm`
>   - `brew install kubernetes-helm`
> - `az login`

## Set up a container scheduler cluster

We’re going to install everything from scratch and we’ll start by creating a new
container cluster. Today I'm going to use Azure Container Service, which is a
Kubernetes platform hosted by Microsoft. We're going to use the CLI and I'm
already logged in, so the first thing is to create a group to house the cluster.
I'll create it in the northcentralus zone. Then we create the cluster and name
it `tanukiWebsite`, based on the domain name I'll use. I’ll only use 1 node so
it fits in a free trial account, but you can bump up the agent-count if desired.

> - `az group create -n GitLabDemos -l northcentralus` (Change group name to something appropriate for you)
> - `az acs create -n tanukiWebsite -d tanuki -g GitLabDemos --generate-ssh-keys --orchestrator-type kubernetes --agent-count=1 --agent-vm-size Standard_DS2_v2` (Change cluster name to reflect your base domain name)

Now that we have created the cluster, we can go back and check on our cluster.

> - Navigate to [Container services](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.ContainerService%2FcontainerServices).
> - Confirm it's up.

Good, our cluster is ready for us to use. Let's connect to it.

> - `az acs kubernetes get-credentials --name tanukiWebsite -g GitLabDemos`
> - `az acs kubernetes browse --name tanukiWebsite -g GitLabDemos`

## Set up GitLab itself

Now that we have our cluster configured, we're ready to install GitLab. To do
this, we'll need the base domain name, and an email address to use with Let's
Encrypt. Then we use `helm` to install all the necessary components.

> - `helm init`
> - `helm repo add gitlab https://charts.gitlab.io`
> - `helm upgrade -i tanuki --namespace gitlab --set baseDomain=tanuki.website,legoEmail=you@gitlab.com,provider=acs,redisDedicatedStorage=false,postgresDedicatedStorage=false gitlab/gitlab-omnibus` (Replacing baseDomain, and legoEmail as appropriate.)
> - *Note, if you're using a non-trial account, we recommend dropping `redisDedicatedStorage=false,postgresDedicatedStorage=false` which will isolate your database disks.*
>
> **Alternate instructions for GitLab EE**
>
> - Go to [/free-trial/](https://about.gitlab.com/free-trial/) and enter in your info to request a trial license for GitLab EE
> - Wait for email
> - Download license to `~/.gitlab-license`
> - Install helm chart, adding the gitlab and gitlabEELicense options:

```console
export LICENSE= `cat ~/GitLab.gitlab-license`
helm upgrade -i tanuki --namespace gitlab --set baseDomain=tanuki.website,legoEmail=you@gitlab.com,provider=acs,redisDedicatedStorage=false,postgresDedicatedStorage=false,gitlab=ee,gitlabEELicense=$LICENSE gitlab/gitlab-omnibus
```

GitLab is now deploying and will take a while. The first thing is to wait until
the load balancer spins up so we can grab the IP address assigned and configure
our DNS with it.

> - `kubectl get svc -w --namespace nginx-ingress nginx`
> - Wait until the output changes with an `EXTERNAL-IP`
> - Configure DNS to point a wildcard to that IP. Similar to:
>   - `*.tanuki.website 300 IN A 1.1.1.1` (Note you want a short lifespan for this record so you're not waiting a day every time it changes.)
> If using Microsoft Azure DNS zones:
> - Click [`DNS zones`](https://portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Network%2FdnsZones) from the menu on the left.
> - Click on the Zone that has the name of the domain to be used for the demo. (e.g. `tanuki.website`) or click [`+ Add`](https://portal.azure.com/#create/Microsoft.DnsZone-ARM), give it a name, and a Resource group.
> - Click on the `+ Record Set` button.
> - Set the `Name` to `*`.
> - Set the `IP Address` to the External-IP from the nginx service.
> - Set `TTL` to `5` and `TTL unit` to `Minutes`.
> - Click the `OK` button at the bottom of the page.

Now let's check if our `gitlab` service is up, and wait for it if not.

> - `kubectl get deployment -w gitlab --namespace gitlab`
> - Wait until `Available` shows 1.

**Optional filler**

We'll watch the Kubernetes dashboard for all items to have a green checkmark
showing that they have completed. This process can take a few minutes as ACS
allocates resources and starts up the various containers. You can see here there
are several containers. The main GitLab container has the Rails app, but also
Mattermost for Chat, the integrated Docker Registry, and Prometheus for
monitoring. Then there's separate containers for Postgres and Redis and the
autoscaling GitLab Runner for CI and CD. This is everything you need for the
application development lifecycle on Kubernetes.

While we're waiting: In the rest of the demo, I’ll take you through everything
you need to take ideas to production, including chat with Mattermost, issues and
issue tracking, planning with issue boards, coding with terminal access,
committing with git version control, merge requests for code review, testing
with continuous integration, getting peer reviews with live review apps,
continuous delivery to staging, deploying to production directly from chat,
cycle analytics to measure how fast you’re going from planning to monitoring, and
lastly, Prometheus monitoring of your GitLab instance. With GitLab, everything
is integrated out of the box.

What takes 10 minutes in this demo would take days if you're not using GitLab
and have to integrate different tools. Not only is GitLab faster to set up, but
it is also more convenient to have everything in one interface. Developers want
to work on creating a great product, not on learning and maintaining the
integrations between theirs tools.

*If there is more time talk about what a review app is and what cycle analytics are.*

> - Wait for gitlab pod to go to green or deployment to show available

Looks like our deployment is finished. Let's check out GitLab...

> - Go to `gitlab.tanuki.website` (Adjusting the URL to the domain you used for this demo)

Boom, we’ve got a shiny new GitLab installation!

### Set root password

Before we get too carried away, we need to secure the root account with a new
password.

> - Set password for root user (You don't need to actually log in as root, but you can)

## Cleanup

> - Delete the cluster

## Troubleshooting

### Various failures block Let's Encrypt, and thus GitLab

There are several scenarios which can cause deployment failures due to issues
surrounding the `kube-lego-nginx` and the Let's Encrypt (LE) ACME process. The
easiest way to find these errors is checking the logs of the `kube-lego-nginx`
service in the `kube-lego` namespace of the dashboard for your Kubernetes
cluster.

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
  kubectl logs <POD> --namespace=<NAMESPACE>
 ```
