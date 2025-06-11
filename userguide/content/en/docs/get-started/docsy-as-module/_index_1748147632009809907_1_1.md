---
title: "SentinelOne Endpoint Detection and Response (EDR)"
---

## Overview

We use [SentinelOne](https://www.sentinelone.com/) for endpoint (team member laptop) detection and response (EDR) at GitLab.

All macOS, Windows and Linux devices used by GitLab Team Members for the purposes of fulfilling the responsibilities of their role as a GitLab Team Member are required have the SentinelOne EDR agent installed and functioning.

The use of a Windows endpoint requires a specific business reason and an approved exception as the [use of a Windows endpoint is prohibited](/handbook/security/corporate/services/laptops/hardware#windows).

- `#sentinelone` Slack Channel
- [SentinelOne Setup Guide](/handbook/security/corporate/systems/sentinelone/setup)
- [SentinelOne Troubleshooting Guide](/handbook/security/corporate/systems/sentinelone/troubleshooting)

### DRI

This platform has a shared responsibility model.

- **Corporate Security (Device Trust Engineering):** Configuration and deployment of agents (via Jamf)
- **Security Operations (Security Incident Response Team):** Manage console alerts for incidents and investigations
- **Security Compliance:** Auditing components and configuration
- **Legal Privacy:** Audit of incidents and appropriate administrator access to personal data

## Background Context

GitLab is a growing global company and as such we are required to meet compliance requirements in different countries, with one of those requirements being endpoint protection. An EDR solution meets that requirement. A number of customers also ask us if we are protecting their data by us protecting the systems that could potentially access their data, and ask specifically about EDR and Antivirus. EDR meets this requirement and addresses customer concerns.

Equally important is the security and privacy of our team members and their laptops. As GitLab continues to grow, we are increasing the likelihood that we will be targeted by malicious attackers. We want to ensure we have a way to protect team members and their laptops whether they are at home, on the road, or at the coffee shop down the street.

With an increased number of high profile breaches in the media today it is important we carefully consider the risk and external threats GitLab faces.  Due to our service and the companies that use us, it is credible that we are or will soon become a high profile target for adversaries looking to exploit GitLab or a GitLab customer.

### Vendor Decision

- [EDR Proof of Concept Repository](https://gitlab.com/gitlab-com/gl-security/security-research/edr-proof-of-concept/-/tree/master)

### How It Works

Endpoint detection and response (EDR) technology helps further strengthen endpoint security protecting not only GitLab, but each of our Team Members as well. EDR is a collection of endpoint security technologies that together record and store endpoint-system-level behaviors, use various data analytics techniques to detect suspicious system behavior, provide contextual information, block malicious activity, and provide remediation paths to restore affected systems.

The first line of defense is stopping (or if configured, alerting) common threats on the laptop. As for additional or more "layered" lines of defense, certain types of activity (mainly involving processes on the laptop) are recorded and uploaded to a private instance for further processing and investigation. Much more sophisticated processing can take place for more thorough threat detection. As a result, the agent on the laptop is typically 40-60mb in size, as opposed to the older traditional antivirus solutions which can be well over a gigabyte. This results in less resources being used on the laptop including low CPU and low memory usage.

- [Wikipedia - Endpoint Security](https://en.wikipedia.org/wiki/Endpoint_security)
- [Wikipedia - Endpoint Detection and Response](https://en.wikipedia.org/wiki/Endpoint_security)
- [Wikipedia - Data Loss Prevention Software](https://en.wikipedia.org/wiki/Data_loss_prevention_software)
- [Wikipedia - Network Detection and Response](https://en.wikipedia.org/wiki/Network_detection_and_response)

### Antivirus vs EDR

If you remember the old days of installing antivirus and anti-malware scanners on your computer, this is similar next-generation of scanning technology with a wider reach to improve our security posture.

Antivirus can be seen as one part of the EDR complete security technology solution. Traditionally, antivirus software is a single program which serves basic purposes like scanning, detecting and removing viruses and different types of malware. For EDR, real time status, remediation paths, endpoint firewalls, and system behavioral analytics come together to create a comprehensive technology stack to protect against modern day digital attacks.

### MDM vs EDR

The EDR technology is in addition to Jamf MDM. While Jamf does offer security features and protections, an EDR solution combined with Jamf will offer great ability to detect and stop significant threats and advanced digital attacks on GitLab team member laptops.

## FAQs

### Monitoring Exemption

Do not attempt to modify or remove SentinelOne components, unless instructed to do so by Corporate Security for troubleshooting purposes.

If SentinelOne is causing issues with your ability to fulfill the responsibilities of your role, you may request an exception to be granted using the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

Exceptions will be granted based on the goal of least needs, attempting to maximize effectiveness, efficiency, and security risk mitigation of SentinelOne while minimizing the negative impact on the team member. For this reason, rarely will an exception be granted to completely disable SentinelOne. Rather, an exception will be granted for specific directory paths, specific applications, or specific collections of data that SentinelOne may be negatively impacting through quarantine or system performance degradation.

### Local Network Monitoring

> Will it monitor my local network?

No. The EDR solution only monitors the GitLab laptop, like an antivirus solution would (only much more efficiently).

### Home Network Privacy

> What options does a team member have to protect their home network privacy?

If you wish to add further privacy and security to your home network, you can further isolate your work machine by creating a separate network for it.

While we cannot provide you with any direct support for this type of network setup, see the [wireless networks](/handbook/security/corporate/services/laptops/security/networks) and [network isolation](/handbook/security/network-isolation) guides. [examples](/handbook/security/network-isolation/) that might help to get you started.

### Third Party Vendor

> Why are we using a third party EDR system?

We do not want to write our own EDR solution, nor do we want to assemble a series of partial solutions into some type of chain to attempt to meet compliance requirements. Not only does a third party EDR solution allow us to meet requirements in a thorough and more economic way, it will show auditors, regulators, and customers that we are taking security seriously and implementing it consistently.

### SaaS vs Self Hosted

> Can we self-host our own solution to have more control?

We could, although this would require a substantial amount of effort to be able to have a self-managed solution that would address both compliance requirements and customer concerns. The chosen EDR technology is a single-tenant-hosted third party EDR solution to help ensure GitLab and Team Member data privacy.

### Operating System Partitions

> I dual boot two different operating systems, do they both need an agent?

Yes. Each operating system on a host computer that is used to access GitLab computing resources, infrastructure, or environments, will need have an EDR agent installed.

### Virtual Machines

> I have several virtual hosts/machines on my laptop, do they all need agents?

Yes. Each operating system on a computer, to include the host operating system, and all guest operation systems, that are used to access GitLab computing resources, infrastructure, or environments, will need have an EDR agent installed.

### Antivirus Alternative

> I run my own antivirus solution on my work laptop, isn’t that enough?

While this effort is certainly appreciated, we need a way to be able to audit laptops to meet compliance requirements. We would still encourage you to run any such antivirus product up until the EDR solution has been rolled out to your laptop. After which time, we strongly encourage you to uninstall the antivirus solution previously installed. Multiple instances of these technologies, especially from different vendors, have the tendency to cause issues on an endpoint which may negatively impact system performance and your productivity.

### Administrative Safeguards

> What safeguards are in place to ensure that owners of this process can prevent abuse?

While such a possibility exists, we feel that the risk of something like this happening is much, much smaller than some of the risks that an endpoint management solution is made to address. Risks like:

- Laptop is accidentally infected with malware and team-member is unaware of the infection.
- Laptop is accidentally infected with malware or was the target of an attack.
- The laptop is compromised and the GitLab team members access and identity are used to further attack GitLab and our customers.
- A new security exploit is discovered, and unpatched applications start getting exploited in the wild.
- GitLab experiencing a targeted attack on our endpoints, which could lead to a compromise of the GitLab Production environment resulting in a customer data breach.

That being said, the EDR solution provides the ability to audit any processes and actions that have been conducted by an Administrator or the technology itself. The solution has role-based access controls implemented to limit access to certain features, and all of the use of such features is auditable.
