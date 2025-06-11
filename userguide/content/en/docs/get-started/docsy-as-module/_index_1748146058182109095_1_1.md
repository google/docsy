---
title: Laptop Procurement Processes
---

<!-- TODO: Add links to other pages -->

## Shipping Timelines

> **KPI:** 90% of laptops will arrive prior to start date or 21 days from the date of order.

Once Corporate Security receives your laptop order, we will start working on purchasing your laptop. We leverage business relationships with several different vendors across the globe to accomplish this remotely. Please note delivery times will vary depending on location, hardware supply, vendor selection, and shipping method.

In some instances, we may be able to work out priority or overnight delivery. We will not be able to service this for all cases and regions at this time but please feel free to reach out to laptops@gitlab.com or talk with your hiring manager to review all options available.

If you are a hiring manager or member of the hiring/recruiting team, you may check the status and content of a new hires order in the [IT Equipment Order Process Project](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-equipment-order-processing/-/issues/?sort=created_date&state=opened&first_page_size=100)

Estimated Delivery Timelines for GitLab Hardware

- US New Hires - 1-2 weeks (Apple) and 3-5 weeks (Linux)
- EMEA New Hires - 1-2 weeks (Apple) and 3-5 weeks (Linux)
- Other Regions - 2-3 weeks (Apple) and 6-9 weeks (Linux)

## Special Requests

### Additional Laptop Request

We do not allow personal laptops to be used for GitLab work. If you are in need of a additional device, have a business justification, have manager approval and IT approval, you can request an additional laptop through the [Laptop Refresh/Upgrade template](https://gitlab.com/gitlab-com/it/end-user-services/issues/laptop-issue-tracker/-/issues/new#). Please note that if the secondary device is approved it will be a refurbished device and not a new device.

### Non Standard Specifications

If the laptop is outside the [standardized specifications](/handbook/security/corporate/services/laptops/hardware), then manager and [Michael Beltran's](/handbook/company/team/#mbeee)/[Steve Ladgrove's](https://about.gitlab.com/company/team/#sladgrove) approval will be required before IT can purchase the laptop.

## Business Context

### Laptop Vendor Selection Criteria

When recommending or approving end user device vendors for team member access, the Security Team tries to balance privacy, security, and compliance to ensure a solid choice for accessing GitLab data.

Our current recommendations include Apple MacBook Pro running macOS and Dell Precision running Linux.

By its very nature, GitLab has historically been very open as a company, starting as open source and migrating from a group of coders with their own laptops to an organization that needs to protect not just their own corporate data but customer data as well.

Having developed a Data Classification Policy and currently implementing Zero Trust, we've had to make adjustments in laptop recommendations.

Our laptop vendor selection criteria is as follows:

#### Team member need

The main needs center around processing power and the operating system support for required workloads.

Most modern systems meet the processing power needs of our team members.

Apple macOS and Dell Linux distributions meet the operating system needs.

#### Security needs

GitLab needs the ability to ensure a secure and stable platform. From an operating system perspective, macOS and Linux meet the needs. The Security team has found a slight advantage in Ubuntu as a Linux distribution due to their rapid response time when it comes to patching security flaws, and we recommend this distribution. It is necessary to use an [approved Linux distribution](https://internal.gitlab.com/handbook/it/it-self-service/operating-systems/).

#### Compliance needs

To meet compliance needs for the various certifications, programs, and industry regulations, we have to meet criteria including the ability to restrict access to sensitive data to company-issued laptops running company-monitored software.

In many cases we need to be able to prove this via auditing, including outside auditors.

Using one vendor for macOS (Apple by default) and one for Linux (Dell by default).

A part of this process will include ensuring systems are patched, and in the Linux case we want to ensure firmware patches are applied.

Very few hardware vendors not only supply Linux as an operating system but also provide a way to apply patches - including security patches - to firmware via the normal Linux patch process.

There is no specific example for using one brand over another from a compliance perspective.

That being said, there are customers we wish to sell GitLab products that have specific requirements internally, and to align ourselves with those requirements can be not only a positive sign we understand the customer space, but give us a competitive advantage.

For example, since there is a [strong push](https://internal.gitlab.com/handbook/engineering/infrastructure/platforms/gitlab-dedicated/us-public-sector-services/) to sell to agencies within the US Government, we will already face restrictions such as support from only US-citizen GitLab team members while on US soil.

As these agencies also have access to classified (non-public) reports on such things as computer vendors, one only has to note which laptops are approved for purchase.

For that reason, we will restrict our vendor list to vendors that are currently approved by the various organizations issuing those certifications and programs we are trying to be compliant with.

This simplifies the ability to support those customers which may impose restrictions on team members working in support roles for that customer solely based upon the hardware they are using.

In other words, we eliminate this possibility of becoming a situation to be managed.

#### Logistics needs

To be able to use a laptop vendor, we have to be able to purchase and ship hardware to our team members regardless of where they live.

Therefore the vendor should be able to handle most if not all shipping requirements to all team members. Our current hardware provider for the US is CDW. GitLab laptops that are procured from CDW will come with GitLab branded asset labels by default. Please refer to this issue for more information on GitLab asset labels. [GitLab Branded Laptop Labels](https://gitlab.com/gitlab-com/it/end-user-services/issues/laptop-issue-tracker/-/issues/914)
