---
title: Testing Environment
category: Infrastructure for troubleshooting
description: "Support Engineer test environment setup options and guidelines"
---

## Selecting the Right Testing Environment

Support Engineers need testing environments to learn how to support GitLab and also to replicate customer issues.

This page explains the main choices available to you. Some guidelines:

1. You should choose a way to spin up a specific version of GitLab quickly so that you can replicate customer issues. The current recommended way to do this is to use [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started). Each specific module that you'll be using has its own `README.md` in the deployment projects, so make sure to give that a read as well.
1. Testing locally is also recommended - configuring Docker Engine / VM based system (details below) to your taste will let you quickly spin up a specific GitLab version.
1. You will need licenses for all self-managed tiers so you can match the features available with your customer's features - see the next section.
1. For most testing, a single box Omnibus installation will be fine.
1. If you need a more complex environment, the following tools can help:
    - [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)
    - [GitLab Support Setups](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-setups/-/blob/master/README.md) via local (Virtualbox, VMWare, libvirt) VMs
1. For K8s Helm installations, we [recommend using GKE](#gcp-gke-kubernetes-cluster).
1. If you need to replicate specific cloud provider environments (e.g. for a scaled architecture), see the sections on GCP, AWS and Azure below.
1. Consider joining the [#spt_testing Slack Channel](https://gitlab.slack.com/archives/C0167JB9E02) to share your own tips and tricks for testing environments.

Have fun!

## Testing Environment License

If you require a license for testing:

- For a **self-managed instance**, use the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/).
- For **GitLab.com**, individual test namespaces with licenses pre-applied have been provisioned as part of your onboarding.

Please keep in mind *you can't generate licenses for customers*, only for your own testing purposes.

### AWS Marketplace Resources

Note that when using some AWS Marketplace resources, free trials (including GitLab Ultimate) may automatically renew. You should always prefer using test licenses, but ensure that you [cancel any AWS Marketplace subscriptions](https://aws.amazon.com/premiumsupport/knowledge-center/cancel-marketplace-subscription/) if you trial anything for testing purposes.

## Testing on GitLab.com

As noted in [Testing Environment License](#testing-environment-license), you will have received licensed namespaces for testing on GitLab.com as part of your onboarding.

You will be added as `Owner` in these groups and can make changes at-will, including inviting customers to specific projects as you collaborate with them.

- **Avoid** making the namespace public.
  - *Instead* create a subgroup or project within your test namespace or a namespace unique to the customer case and assign them sufficient permissions to invite collaboration.

- **Avoid** granting a customer permanent access.
  - *Instead* set an access expiration date when you invite a customer.

- **Avoid** using access tokens for your main GitLab account: a leak in a test project may not be automatically detected and can be used to traverse sensitive company namespaces.
  - *Instead* try to use [Project Access Tokens](https://docs.gitlab.com/user/project/settings/project_access_tokens/) or [Group Access tokens](https://docs.gitlab.com/user/group/settings/group_access_tokens/). Otherwise, create a test account and use personal access tokens for it (If you do this, make sure the token is set to a expire within a maximum of 2 days).

## Cloud Testing Environments

You can create (ephemeral) testing environments. We recommend using the [Sandbox Cloud Realm](/handbook/company/infrastructure-standards/realms/sandbox/) at [gitlabsandbox.cloud](https://gitlabsandbox.cloud) for doing so.

You're free to create any testing environments that you need in order to perform your role, however be advised that:

- Cloud resources are not free: please delete or shutdown any instances you aren't using.
- Multi-node reference architectures are *very* expensive to run, so be particularly mindful of not leaving them active longer than you need to.
- You shouldn't expose your instances to the public Internet or run without TLS. Instances vulnerable to known RCEs or other exploits detected through automated scans will be shut down without warning. Please review [Securing Cloud Testing Environments](#securing-cloud-testing-environments) before you create your first instance.

### GCP

GCP resources can belong to different [GCP projects](https://cloud.google.com/storage/docs/projects). There is a number of GCP projects available to you to create your resources in.

#### GitLab Sandbox Cloud for GCP (preferred)

If you need flexibility for creating test environments, the [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) allows for creating a personally-owned GCP projects. You can create test resources using the [GCP console](https://console.cloud.google.com/home/dashboard), or [gcloud command line tool](https://cloud.google.com/sdk/gcloud). If you need to replicate any of the [Reference Architectures](https://docs.gitlab.com/administration/reference_architectures/), it's recommended that you use the [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit).

**Note:** Please remember to shut down resources that you are no longer using.
We are now using [automation scripts](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/instance-ttl-automation) to shutdown resources over the weekend. To exclude your resources from being shutdown you'll need to add the `instance-ttl-bot-ignore` label to those resources.

##### Managing your GCP resources automatically

You can use [Terraform Environments](/handbook/company/infrastructure-standards/realms/sandbox/#terraform-environments) to automatically manage GCP resources in your personally-owned GCP projects. If you are after a simple Omnibus machine with a runner, select `support-resources-template-v2-########` template. Feel free to also explore other available [Project templates](https://gitlab.com/gitlab-com/infra-standards/project-templates) to deploy [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) or create a GKE cluster that already has GitLab installed through Helm chart.

Note that these environments are ephemeral.

Check out a [this demo video](https://www.youtube.com/watch?v=aBF-AyQiFfA) for details walk-through.

#### Other GCP Projects

**Warning:** You may also have access to the `gitlab-internal` and `gitlab-support` GCP projects. You should use [GitLab Sandbox Cloud](#cloud-testing-environments) instead of creating resources in these projects.

**Note:** Please remember to shut down or delete any resources that you are no longer using.

#### GCP GKE Kubernetes Cluster

Please use your [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) GCP project to create a GCP Kubernetes (GKE) cluster. You can create a GKE cluster manually from the console or you can use the [Support GKE cluster template](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-gke-cluster-template) (for an empty GKE cluster) or  [Support GitLab GKE cluster template](https://gitlab.com/gitlab-com/infra-standards/project-templates/support-gitlab-gke-template) (for a GKE cluster with a GitLab helm deployment) from your [GitLab Sandbox account](https://gitlabsandbox.cloud/cloud). Click [here](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-create-a-terraform-environment) for more information on spinning up resources with terraform in the GitLab Sandbox.

**Note:** If you are using GKE to test GitLab Runners, note that GitLab Runners require the use of [RBAC roles in GCP](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). The `support-resources` GCP project  does not allow the user enough permission to create the required roles, but you can do it with your personal [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) GCP project

<details>
<summary>Open me for instructions on how to manually create GKE on your own project.</summary>
<div markdown="1">

1. Ensure you have selected your own project at the top of [GCC](https://console.cloud.google.com).
1. Open the navigation menu at the top of [GCP](https://console.cloud.google.com)
1. Select **Kubernetes Engine > Create Cluster** from the dashboard.
1. Enter a name, select a zone, and choose the default static master version unless you have a specific reason to use an alternative version.  It's important to use a server version that will [match your kubectl client version](https://kubernetes.io/docs/tasks/tools/#before-you-begin).

All of the remaining options can be left as their default settings unless you have a need to add customization to your cluster.  Of note, the Maximum Pods per Node option [directly correlates with the CIDR assignment](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr?_ga=2.246280516.-1734733517.1581009580) of your node(s).

Connecting to, and configuring, your cluster can be done locally using [gcloud](https://cloud.google.com/sdk/docs#install_the_latest_cloud_tools_version_cloudsdk_current_version) and [kubectl](https://kubernetes.io/docs/tasks/tools/#download-as-part-of-the-google-cloud-sdk). Or you can use the Google Cloud Shell.  Clicking Connect in GCP will provide the command to run locally for you to copy and paste, or let you open Cloud Shell immediately. Using [docker images](https://hub.docker.com/r/kiwigrid/gcloud-kubectl-helm) is also an option for a quick deployment of all tools locally.
</div>
</details>

### AWS Testing Environment

Please use [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) to create credentials for AWS.

#### EKS testing Environment with Helm

<details>
<summary>Open me for instructions on how to quickly create an EKS deployment using Helm</summary>
<div markdown="1">

The following guide is designed to help you quickly deploy a Kubernetes environment using EKS and Helm for testing purposes on this environment.

Pre-requisites:

- A domain name
- A [GitLab Sandbox Cloud](https://gitlabsandbox.cloud) account

Install the following programs on your local computer:

- [Helm v3 (3.3.1 or higher)](https://helm.sh/docs/intro/install/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Certbot](https://certbot.eff.org/instructions?ws=other&os=osx) (If you are using other OS than OSX please look for your specific OS.)

For OS X, you can install all of the programs above by running:

```shell
brew install certbot helm kubectl
```

##### Getting an AWS IAM Access Key

1. Log in to your [Sandbox Cloud](https://gitlabsandbox.cloud/)
1. Log into your AWS individual account in Sandbox Cloud
1. [Create an IAM Access key](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

When they key has been created successfully, you'll get an **Access key ID** and a **Secret key**.

##### Configure locally your AWS IAM Access Key

Go to your terminal to configure the AWS CLI to use the IAM Access Key:

1. Type `aws configure`
1. Enter the **Access key ID** and **Secret key** when prompted
1. Optionally, set a region
1. Choose the [output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output-format.html) (This controls what format the AWS CLI will use when printing out data. Options include `json`, `yaml` and `text`.)

##### EKS Setup

A [bootstrap script](https://gitlab.com/gitlab-org/charts/gitlab) has been created to setup an easier and automated cluster creation using Cloud Formation.
Clone this project locally and navigate to `gitlab/scripts` and execute `./eks_bootstrap_script up`. This script will use a CloudFormation stack to deploy all the required resources for your cluster so it will take a while to complete. After successful completion you will see something similar this output:

**NOTE:** If the Kubernetes cluster version is `>= 1.23`, you must run `./eks_bootstrap_script add_ebs_csi_driver` **prior to** deploying GitLab to the cluster.

```shell
2022-07-18 16:47:40 [ℹ]  node "ip-192-168-63-211.us-east-2.compute.internal" is ready
2022-07-18 16:47:41 [ℹ]  kubectl command should work with "/Users/cats/.kube/config", try 'kubectl get nodes'
2022-07-18 16:47:41 [✔]  EKS cluster "gitlab-cluster" in "us-east-2" region is ready
```

Once your cluster is ready create a certificate for your domain using Certbot by running:

```shell
sudo certbot --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns-01 certonly -d "*.<DOMAIN NAME>"
```

Certbot will create a TXT DNS record that you need to add on your DNS Registrar so that your domain will have a valid HTTPS certificate to be used by your GitLab instance.

After your record had been added to your registrar create a secret for your cluster to use the certificate by running:

```shell
sudo kubectl create secret tls tls-star-<SECRET NAME> --cert=/etc/letsencrypt/live/<DOMAIN NAME>/fullchain.pem --key=/etc/letsencrypt/live/<DOMAIN NAME>/privkey.pem
```

(Optional) If you also want to have GitLab Pages in your cluster then you will need to create another certificate for your domain and another secret for your cluster

```shell
sudo certbot --server https://acme-v02.api.letsencrypt.org/directory --manual --preferred-challenges dns-01 certonly -d "*.pages.<DOMAIN NAME>"
```

```shell
sudo kubectl create secret tls tls-star-pages-<SECRET NAME> --cert=/etc/letsencrypt/live/pages.<DOMAIN NAME>/fullchain.pem --key=/etc/letsencrypt/live/pages.<DOMAIN NAME>/privkey.pem
```

##### Helm Setup and Chart deploy

- Add the GitLab repository charts to your Helm environment

```shell
helm repo add gitlab https://charts.gitlab.io/
```

- Update your repository to the latest version

```shell
helm repo update
```

- Create a `values.yml` file with the desired values you wish to deploy your instance. (A sample file can be found [here](https://gitlab.com/-/snippets/2402111))
- Deploy GitLab using

```shell
helm install gitlab gitlab/gitlab -f <values.yml>
```

- To get the loadbalancer hostname of your GitLab deployment run

```shell
kubectl get ingress/gitlab-webservice-default -ojsonpath='{.status.loadBalancer.ingress[0].hostname}'
```

- Create a CNAME record with the name `gitlab` pointing to your loadbalancer hostname to access your instance on HTTPS.
- (Optional) If you want to setup GitLab Pages create another CNAME record using `*.pages` pointing to the same loadbalancer hostname.
- Get your initial root password by executing

```shell
kubectl get secret gitlab-gitlab-initial-root-password -ojsonpath='{.data.password}' | base64 --decode ; echo
```

:tada: Your GitLab instance is up and running!

Once these steps are completed you can visit your GitLab instance using `gitlab.<DOMAIN NAME>`.

##### Destroy and recreate your environment

- Once you're done using your EKS instance run `./eks_bootstrap_script down` to destroy all resources used.
- When creating a new cluster you will need to run:

1. `./eks_bootstrap_script up`.
1. Create Kubernetes secrets as before.
1. Deploy your Helm chart.
1. Update your CNAME with the new loadbalancer in your registrar.

**Note**: You might need to wait for your TTL to reset after you updated your loadbalancer in your registrar before accessing the instance.

</div>
</details>

### OpenShift Testing Environment using ROSA

One option for creating an OpenShift cluster to run the GitLab and GitLab Runner Operators is to use the [Red Hat OpenShift Service on AWS (ROSA)](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws).

Installation is performed from your laptop using the `rosa` utility which collects cluster configuration details and then runs a scripted deployment of an OpenShift cluster in AWS. The installation typically takes 30-45 minutes.

The key steps are as follows:

Prerequisites:

1. Local AWS command line access is configured on your laptop by setting the `AWS_REGION`, `AWS_ACCESS_KEY_ID` and
   `AWS_SECRET_ACCESS_KEY` environment variables to access your AWS sandbox account.
1. The AWS ROSA prerequisites are met - in the AWS Console, search for the `Red Hat OpenShift Service on AWS` service, click on
   **Get started** and ensure ROSA is enabled and the Service Quotas and ELB service-linked role requirements are met.
1. A personal Red Hat account - register a new personal account at https://www.redhat.com/wapps/ugc/register.html.

Cluster Setup:

1. Browse to https://console.redhat.com/openshift/create/rosa/getstarted.
1. Log in using your Red Hat account. This will take you to the Hybrid Cloud Console.
1. Download and install the ROSA CLI tool for your local OS (step 1).
1. Login to the ROSA CLI with your Red Hat account token and create AWS account roles and policies as described on the setup page (step 2).
1. From your laptop, run `rosa create cluster` to start the installation. You will be prompted for quite a few settings - accept the
   offered defaults for all except the following:

   - `Cluster name` - choose a name for your cluster
   - `Create cluster admin user` - select Yes
   - `Openshift version` - enter desired OpenShift version
   - `AWS region` - enter desired AWS region

1. The installation process will start, and a message will appear prompting you to run commands to create the `operator-roles` and
   `oidc-provider` in order for the installation to continue. You need to run these now or the installation will pause indefinitely.
   Accept the default options when prompted.
1. Record the admin user name and password that were displayed during the setup step.
1. You can monitor the progress of the installation and the installation log from the Hybrid Cloud Console **Cluster List** page. Note
   that multiple connection errors will be logged while services are being provisioned - these are expected.
1. While the cluster is installing you can download the OpenShift CLI tool (`oc`) from the link provided on the cluster status page,
   if required.

#### Logging in to the OpenShift cluster

Once the cluster state is `ready` you can log into the cluster console from the Hybrid Cloud Console by selecting the cluster from
**Cluster List** and clicking on the **Open Console** button.

However you will need to wait an additional 5-10 minutes for the setup of the default identify provider and TLS certificates to complete
and the `cluster-admin` identify provider button to appear first on the login page. If you are only presented with username and
password fields to fill in wait a few more minutes and try browsing to the console login page again.

Once you see the `cluster-admin` button click on it and you will be prompted for the admin user and password you recorded earlier. You
are now logged into the cluster.

#### Accessing the OpenShift cluster from the command line

To access the cluster from the command line you first need to log into it using the `oc` command. From the cluster console, click on
the **cluster-admin** drop down at the top right and then on **Copy login command**. You will be prompted to log in as the cluster
admin again, and then shown a **Display token** link. Click on the link and copy the `oc login` command that is displayed.

Run the `oc login` command on your laptop with the supplied token - you should then be able to run other commands such as `oc get pods -A`.

#### Destroying the cluster

ROSA clusters aren't cheap to run and so to reduce AWS costs the OpenShift cluster should be destroyed as soon as it is no longer
needed (even if that means building a new one in a couple of days) - this is done from the command line by running
`rosa delete cluster --cluster=mycluster`.

### Azure Testing Environment

For *Group* SAML/SCIM (GitLab.com) testing, shared account credentials can be located within the 1password entry `Azure Active Directory Sandbox (SAML Testing)`. This level of access should be sufficient for the majority of test cases.

If you need access to the shared infrastructure team's Azure account for testing AKS and similar features, please create an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) and tag your manager.

For features not available in either instance, please create your own trial for Azure.

### Okta Testing Environment

If you need an Okta sandbox environment to test SAML and SCIM, please go to <https://developer.okta.com/signup/> and enter your credentials for a free developer instance where you can perform all your tests. This is a full featured environment so you should be able to add and remove applications, and perform all tests as if you were in a regular production instance.

### Google Workspace Testing Environment

The IT team has a Google Workspace test environment which the Support team can use. The credentials for 1 admin and 1 user account can be found
in 1password as:

- Google Workspace Admin Test Account
- Google Workspace User Test Account

If you need to create more user test accounts, please delete them afterwards. There is a seat limit in the test environment.

When creating apps, please include your name or the ticket number in the app name. Note that all apps should be considered temporary and may be deleted 2 weeks after creation.

### LDAP Testing Environments

For testing LDAP integrations with a self-managed GitLab instance, you may consider any of these options:

1. [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/ldap.md).
1. [Docker container](https://github.com/osixia/docker-openldap).
1. [Jumpcloud](https://jumpcloud.com/) (Free for up to 10 users).

### DNS for test instances

See the handbook for IT policies about [Domain Names and DNS Records](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/domains-dns/).

If you wish to test resources using a real domain name (instead of an IP address, e.g. for testing TLS certificates), you can purchase a domain name of your choice (without GitLab trademarks) that is paid for by GitLab through your Sandbox Cloud AWS account or GCP project. Instructions and guidelines can be found [here](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/domains-dns#non-trademark-domain-names).

## Securing Cloud Testing Environments

Test instances are, by default, publicly accessible on the Internet. Often, we need to test specific versions or configurations that may be vulnerable to remote compromise. It is your responsibility to secure your test instances to prevent them from being compromised and used to further attack our cloud environment.

The [GitLab Red Team](/handbook/engineering/security/threat-management/red-team/) regularly scans GitLab's cloud environments for publicly accessible instances with known vulnerabilities. Instances vulnerable to known RCEs or other exploits detected through automated scans will be shut down without warning.

### IP Filtering

A highly effective way to secure your cloud instances is to apply the [concept of IP filtering](https://www.oreilly.com/library/view/linux-network-administrators/1565924002/ch09s03.html) for each test instance you create whether its a GitLab instance or otherwise.  For the majority of cases, this means source IP filtering from one or more [CIDR block ranges](https://whatismyipaddress.com/cidr) ensuring that only certain IPs and integrations can interact with the GitLab instance, therefore reducing the attack surface of the GitLab organization as a whole.

If you don't know your current IP address to use for source IP filtering, you can utilize services like [whatsmyipaddress.com](https://whatismyipaddress.com/) or [ipinfo.io](https://ipinfo.io/) to retrieve it.  Though configuring IP filtering is currently a manual process for each cloud service, [discussions are underway](https://gitlab.com/gitlab-com/business-technology/engineering/tools/hackystack/-/issues/134) at the time of writing regarding how best to automate this practice to reduce complexity and manual processes needed in some cases. The steps to implement IP filtering will differ per cloud environment.  Below you can find a detailed guide maintained by the support engineering team.

- [Support Engineering Step-by-Step Guide to Implementing IP Filtering](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/content/ip%20filtering/ip_filtering_test_instances.md)

In addition, you can find official, platform-specific documentation of features involved in implementing IP filtering:

- [Google Cloud](https://cloud.google.com/vpc/docs/using-firewalls#creating_firewall_rules#console)
- [Amazon Web Services (AWS)](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)
- [Azure](https://learn.microsoft.com/en-us/training/modules/introduction-azure-web-application-firewall/)

### TLS

To be in line with [GitLab's encryption policy](/handbook/security/product-security/vulnerability-management/encryption-policy), TLS should also be implemented on public-facing testing resources.

For GitLab instances specifically, it's recommended that [LetsEncrypt is manually enabled for Omnibus installs](https://docs.gitlab.com/omnibus/settings/ssl/).  First, you'll need a domain assigned to your external IP regardless of your cloud platform.  Enabling LetsEncrypt for Omnibus installs is well documented at the link above.

#### Self-Signed Certificates

 Implementing TLS on any test instance that includes a login page can be done with a self-signed certificate if desired.  Self-signed certificates are free, suitable for testing environments, and encrypt ingress and egress traffic with the same ciphers as paid certificates.  The down-side is that self-signed certificates are not trusted by any browser or operating system and will therefore warn users of the risks when accessing a site that utilizes a self-signed (untrusted) certificate.  If external parties will be accessing your instance that should rely on your TLS implementation, it's best to include a signed certificate from a legitimate certificate authority.

Self-signed certificates can be generated with a tool like [`mkcert`](https://github.com/FiloSottile/mkcert). Once `mkcert` has been installed, you can this command to generate a certificate file and a key file for `gitlab.example.com`:

```sh
mkcert gitlab.example.om
```

The command's output will tell you the filenames that are generated:

>```sh
> The certificate is at "./gitlab.example.com.pem" and the key at "./gitlab.example.com-key.pem" ✅
>```

For instructions on using self-signed certificates on your test instances, please review the GitLab docs on [Configure HTTPS manually](https://docs.gitlab.com/omnibus/settings/ssl/index.html#configure-https-manually) and the documentation available from these cloud service providers:

- [Google Cloud](https://cloud.google.com/load-balancing/docs/ssl-certificates/self-managed-certs)
- [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html)
- [Azure](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-self-signed-certificate)

### Patching against known vulnerabilities

Running a Support test instance with a known vulnerability can be a security issue. When running a test instance, you should patch against known vulnerabilities if possible.

For example, GitLab versions from 11.9 to 13.10.2 are vulnerable to [CVE-2021-22205](https://about.gitlab.com/releases/2021/04/14/security-release-gitlab-13-10-3-released/#Remote-code-execution-when-uploading-specially-crafted-image-files).

If you're running GitLab version 12.6 to 13.10.2, patch against this vulnerability by running the following commands for each instance:

```sh
sudo su
cd ~
curl -JLO https://gitlab.com/gitlab-org/build/CNG/-/raw/master/gitlab-ruby/patches/allow-only-tiff-jpeg-exif-strip.patch
cd /opt/gitlab/embedded/lib/exiftool-perl
patch -p2 < ~/allow-only-tiff-jpeg-exif-strip.patch
```

For GitLab versions 11.9.0 to 12.5.x, you can "patch" the vulnerability by replacing the `exiftool` binary with the following commands:

```sh
sudo rm -f /opt/gitlab/embedded/bin/exiftool
sudo printf '#!/bin/bash \n\ncat -' > /opt/gitlab/embedded/bin/exiftool
sudo chmod a+x /opt/gitlab/embedded/bin/exiftool
```

## Local Testing Environments

### Docker

If you'd like to use [Docker Desktop for Mac](https://www.docker.com/get-started/) a subscription is required for business use. Please review the [Docker Desktop handbook page](/handbook/tools-and-tips/mac/#docker-desktop) to find more information on how to obtain a license as well as a list of recommended alternatives.

In the mean time, consider using a Cloud or local VM with [Linux Engine](https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux) for testing Docker environments.

Note that on Macs with M1 / Apple Silicon, running GitLab in Docker is not working properly for now. Check out [UTM](#utm-apple-m1-compatible) below as an alternative for a local setup on your M1 Mac.

### Docker Machine

Since Docker Toolbox has been deprecated, Docker Machine has to be downloaded and installed manually. Use the following commands to install or upgrade Docker Machine separately:

```sh
$ curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-`uname -s`-`uname -m` >/usr/local/bin/docker-machine && \
  chmod +x /usr/local/bin/docker-machine
```

### VMWare

This guide involves configuring and setting up VMWare and Docker locally and assumes you're using macOS.

#### Install VMWare (paid)

1. Navigate to [VMWare store](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion), and then purchase
   **VMWare Fusion 10 (for macOS)** (or current version).
1. Download **VMWare Fusion 10 (for macOS)** using the provided link.
1. Install VMWare Fusion 10.
1. Launch VMWare Fusion.
1. When prompted, enter the license details.

### UTM (Apple M1 Compatible)

UTM is an open source QEMU-based virtualisation software for MacOS. It currently provides support for Apple silicon hardware, so may be useful for engineers on Apple M1 devices to deploy local virtual machines.

#### Install UTM

1. [Navigate to the UTM home page](https://mac.getutm.app/) and select 'Download'.
1. Once installed, follow the [instructions for an ARM-based installation of Ubuntu](https://mac.getutm.app/gallery/ubuntu-20-04)
1. Start the VM within the UTM interface.

### VirtualBox (Incompatible with Apple M1)

This guide involves configuring and setting up VirtualBox and Docker locally and assumes you're using macOS. *VirtualBox does not currently support Apple M1 CPUs.*

#### Install VirtualBox

Oracle VM VirtualBox is a free and open-source hosted hypervisor for x86
virtualization.

1. Navigate to [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
1. Download the latest version of the software for your operating system.
1. Install VirtualBox.

**Note** The following list of commands can be saved as bash script for quickly spinning up new instances

### Vagrant

#### Install Vagrant

From [Introduction to Vagrant](https://developer.hashicorp.com/vagrant/intro)

> Vagrant is a tool for building and managing virtual machine environments in a single workflow

Vagrant encapsulates the local VM apps VMWare and Virtual along with [libvirt](https://libvirt.org/).

To install Vagrant, go to [tutorials/vagrant/getting-started-install](https://developer.hashicorp.com/vagrant/tutorials/getting-started/getting-started-install)

Once installed, [support/toolbox](https://gitlab.com/gitlab-com/support/toolbox) has two projects which you can explore for local GitLab and tools setup.

- [GitLab Support Toolkit](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-toolkit)

> Support toolkit to help manage GitLab inventory and additional services via docker containers.

- [GitLab Support Setups](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-setups)

> Provide a common provisioning and directory structure for various support setups including GitLab with connected GitLab Runners.

### Multipass

#### Install multipass

Multipass is a tool to generate cloud-style Ubuntu VMs quickly on Linux, macOS, and Windows. This method is similar to Vagrant.

It can be [installed using brew](https://canonical.com/multipass/docs/install-multipass) or the [package installer](https://canonical.com/multipass/docs/install-multipass).

NOTE: Some Mac users may experience a [long standing bug](https://github.com/canonical/multipass/issues/2387) where the MacOS firewall prevents Multipass from functioning consistently. Use macOS 13.3.1 or above to avoid this issue.

Once installed, use `multipass help` to get an idea of what it can do. The general format is `multipass <command> <name>`.

For a solution that uses multipass see [GitLab-in-a-VM](https://gitlab.com/gitlab-com/support/toolbox/gitlab-in-a-vm). It automates a lot of stuff regarding setting up the VMs and making sure the instance is trusted between the GitLab runner and the GitLab instance itself.

#### Examples

##### Omnibus

1. Make sure you download and install multipass.
1. Create a script called `install-omnibus.sh` inside of `~/mp_mount` (or your preferred mount directory) with the following content:

   ```bash
   #!/bin/bash

   echo "Starting script..."
   sudo apt-get update
   sudo apt-get install -y curl openssh-server ca-certificates
   curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
   export GITLAB_ROOT_PASSWORD="your_root_password"
   export EXTERNAL_URL="$(hostname -I | awk '{print $1}')"
   echo $EXTERNAL_URL
   echo "Please enter the GitLab version (ex. 15.1.1):"
   read GL_VERSION
   apt install -y "gitlab-ee=$GL_VERSION-ee.0"
   ```

   ***Please note:*** You need to replace the above password entry "your_root_password" with an alphanumeric password which is not a series of words and phrases otherwise you will encounter the error message "Password must not contain commonly used combinations of words and letters".

1. Run the following one-liner. If you'd like to increase/decrease memory or disk, replace with the appropriate values. You can use `multipass help launch` for more details on this command.

   ```bash
   multipass launch --cpus 4 --memory 8G --disk 10G --name gitlab-omnibus && multipass mount ~/mp_mount/ gitlab-omnibus:/mp_mount && multipass exec gitlab-omnibus -- sh -c 'sudo sh /mp_mount/install-omnibus.sh'
   ```

1. You're finished! Use `multipass shell gitlab-omnibus` to access your instance. Additionally:
    - `multipass list` or `multipass ls` to see all instances
    - `multipass stop gitlab-omnibus` to stop the instance
    - `multipass delete gitlab-omnibus` to delete the instance
    - Change the default `open shell` menu item by [using duti](https://canonical.com/multipass/docs/changing-terminal)

##### GitLab Runner

1. Create an executable script called `install-runner.sh` inside of `~/mp_mount` (or your preferred mount directory) with the following content:

    ```bash
    #!/bin/bash

    echo "Starting script..."
    sudo apt-get update
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
    apt-get install -y gitlab-runner
    ```

1. Create a new instance:

   ```bash
   multipass launch --cpus 2 --memory 4G --disk 5G --name gitlab-runner && multipass mount ~/mp_mount/ gitlab-runner:/mp_mount && multipass exec gitlab-runner -- sh -c 'sudo sh /mp_mount/install-runner.sh'
   ```

1. Use `multipass shell gitlab-runner` to access your instance.

##### Elasticsearch Instance

1. Create a script called `install-es.sh` inside of `~/mp_mount` (or your preferred mount directory) with the following content:

    ```bash
    #!/bin/bash

    wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
    sudo apt-get install apt-transport-https
    echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-7.x.list
    sudo apt-get update && sudo apt-get install elasticsearch
    sudo /bin/systemctl daemon-reload
    sudo /bin/systemctl enable elasticsearch.service
    sudo systemctl start elasticsearch.service
    cat << EOF > /etc/elasticsearch/elasticsearch.yml
    path.data: /var/lib/elasticsearch
    path.logs: /var/log/elasticsearch
    network.host: $(hostname -I | awk '{print $1}')
    http.port: 9200
    discovery.seed_hosts: ["$(hostname -I | awk '{print $1}')", "elasticsearch"]
    EOF
    sudo systemctl restart elasticsearch.service
    ```

1. Create a new instance:

    ```bash
    multipass launch --cpus 2 --memory 8G --disk 5G --name gitlab-es && multipass mount ~/mp_mount/ gitlab-es:/mp_mount && multipass exec gitlab-es -- sh -c 'sudo sh /mp_mount/install-es.sh'
    ```

1. Use `multipass shell gitlab-es` to access your instance. You can use `multipass ls` to get the IP address and connect to it in your browser at port `:9200` to verify it is working. Alternatively, run `curl ip_address:9200` from your GitLab Omnibus instance to confirm you can reach your Elasticsearch instance.

## Creating GitLab test instance

### Creating settings variables

```sh
export SSH_PORT=2222
export HTTP_PORT=8888
export VERSION=11.9.9-ee.0
export ENV_NAME=gitlab-test-env
export CONTAINER_NAME=gitlab-test-11.9
```

### Create new docker host

This command will create a new VirtualBox virtual machine called `gitlab-test-env` that will act as a docker host.

- CPUs: Same as host (`-1`)
- RAM: `4GB`
- Name: `gitlab-test-env`
- Driver: `virtualbox`

```sh
docker-machine create \
--virtualbox-cpu-count -1 \
--virtualbox-memory 4096 \
--virtualbox-disk-size 30000 \
--driver virtualbox $ENV_NAME
```

- Resource: [https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/drivers/virtualbox/](https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/drivers/virtualbox/)

### Creating GitLab test instance with docker machine

#### Connect your shell to the new machine

In this example we'll create a GitLab EE 11.9.9 instance.

First connect the docker client to the docker host you created previously.

```sh
eval "$(docker-machine env gitlab-test-env)"
```

You can add this to your `~/.bash_profile` file to ensure the `docker` client uses the `gitlab-test-env` docker host. You can use `echo` to do so:

```sh
echo 'eval "$(docker-machine env gitlab-test-env)"' >> ~/.bash_profile
```

#### Get the available tags for GitLab

Optionally replace the `ee` in the URL with `ce`

```sh
wget -q https://registry.hub.docker.com/v1/repositories/gitlab/gitlab-ee/tags -O - | sed -e 's/[][]//g' -e 's/"//g' -e 's/ //g' | tr '}' '\n' | awk -F: '{print $3}'
```

#### Create new GitLab container

- HTTP port: `8888`
- SSH port: `2222`
  - Set `gitlab_shell_ssh_port` using `--env GITLAB_OMNIBUS_CONFIG`
- Hostname: IP of docker host
- Container name: `gitlab-test-11.9`
- GitLab version: **EE** `11.9.9-ee.0`

<!-- #####  Set up container settings

```sh
export SSH_PORT=2222
export HTTP_PORT=8888
export VERSION=11.9.9-ee.0
export NAME=gitlab-test-11.9
``` -->

##### Create container

```sh
export IP=$(docker-machine ip $ENV_NAME)

docker run --detach \
--env GITLAB_OMNIBUS_CONFIG="external_url 'https://$IP:$HTTP_PORT'; gitlab_rails['gitlab_shell_ssh_port'] = $SSH_PORT;" \
--hostname $IP \
-p $HTTP_PORT:$HTTP_PORT -p $SSH_PORT:22 \
--name $CONTAINER_NAME \
gitlab/gitlab-ee:$VERSION
```

#### Connect to the GitLab container

##### Retrieve the docker host IP

```sh
echo $IP
# example output: 192.168.151.134
```

- Browse to: <https://192.168.151.134:8888/>

**Note**: The container might take a few seconds to spin up and become accessible via the browser.

##### Execute interactive shell/edit configuration

```sh
docker exec -it $CONTAINER_NAME /bin/bash
```

```sh
# example commands
root@192:/# vi /etc/gitlab/gitlab.rb
root@192:/# gitlab-ctl reconfigure
```

##### How to update gitlab.rb values with sed

For example, to set the **gitlab_shell_ssh** port on a container named
**gitlab-ee** to port **2222**

```sh
docker exec -it gitlab-ee \
sed -i "s/.*gitlab_shell_ssh_port.*/gitlab_rails['gitlab_shell_ssh_port'] = 2222/g" /etc/gitlab/gitlab.rb

docker exec -it gitlab-ee gitlab-ctl reconfigure
```

#### Resources

- <https://docs.gitlab.com/install/docker/>
- <https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/get-started/>
- <https://web.archive.org/web/20210619101324/https://docs.docker.com/machine/reference/ip/>

## Windows

It may come to pass that you require a Windows environment to test a [Windows Runner](https://docs.gitlab.com/runner/install/windows.html) or
even the [Kubernetes Executor in a Mixed Cluster](https://docs.gitlab.com/runner/executors/kubernetes/index.html#example-for-windowsamd64).

The options are the same as above:

- Cloud environments: GCP and AWS have Windows Server images you can spin up to connect to via RDP.
- A local environment: Microsoft provides [pre-packeged Windows VMs](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/) for your hypervisor of choice.
