<h1>Linux server</h1>

The industry-standard operating system-of-choice for web applications, Linux, is one option for hosting the Open SDG platform. There are endless different ways to provision a Linux server for this purpose. Here we will simply mention some possibilities, with links to helpful resources.

## Pros

* Full control: When you maintain the environment at this level, you gain absolute control over every aspect of the system — from software versions and patches, to security policies, firewalls, proxies. You can even go "on-premise" and control the actual physical location of any hardware.

## Cons

* Burden of maintenance: When self-hosting a Linux server, it will be your responsibility to make sure the server is functional, secure, available, and optimized. Thankfully there are open-source "recipes" to mitigate this burden.
* Expertise requirements: There will be no getting around the need to have a "system administrator" on hand to deal with setup, upgrades, and troubleshooting.
* Costs: This will be the most expensive hosting option, given the cost of the server itself, the network connection (if on-premise), and the staff needed to maintain it.

## Domain name

Because of the control afforded by this option, there are no limitations (or headstarts) when it comes to domain names.

## Set-up

As mentioned above, there are endless ways to set up a Linux server for this purpose. Some approaches include:

* Installing all required software by hand with package-managers
* Provisioning the server using software like Ansible or Chef
* Composing the server as microservices with Docker or Kubernetes

To minimise the "cons" mentioned above, try to go with the most modern, automated, and community-supported approach possible. With that philosophy, Docker images like [this Let's Encrypt Docker image](https://github.com/linuxserver/docker-letsencrypt) are probably your best bet.

## Automation

The details of your automation approach will depend on the choice you made during setup, but the high-level requirements are:

1. The automation tool contains SSH keys to allow it to log onto the Linux server
1. After each build, the automation tool uses `scp` or `rsync` to transfer the build to the Linux server
