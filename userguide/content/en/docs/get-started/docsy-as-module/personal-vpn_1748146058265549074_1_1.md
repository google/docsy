---
title: "Personal VPN"
description: "Basic questions answered, tips, and recommendations for using a personal VPN."
---

GitLab does not use a [corporate VPN](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust/#why-we-dont-have-a-corporate-vpn). We have selected [NordLayer](/handbook/security/corporate/systems/vpn/_index.md) as our personal VPN solution.

## What is a personal VPN?

A VPN (Virtual Private Network) is the extension of a private network across a public network, allowing the users of the private network a level of protection and privacy to their network traffic that might be lacking if crossing a public network. Typically the private traffic is "tunneled" and encrypted with safeguards built in to prevent leakage of data that could lead to compromising situations with the public network, such as network-based attacks or private data being revealed. Corporations with centralized headquarters and private internal networks in their offices have used VPNs for years to allow for remote workers to access internal systems when working remotely. As a remote-only company, GitLab does not use a corporate VPN.

A *personal* VPN is similar to the corporate VPN in that it uses some of the same methods of tunneling, encryption, and safeguards that the corporate VPN uses, except it is intended for personal use. Instead of a corporate VPN server, the company providing the personal VPN service has its own server and simply uses it as a jump point to reach resources while protecting the user from some of the same dangers the corporate users face.

The personal VPN has a few other advantages. All personal VPN companies maintain their servers in different locations around the world, which not only helps with speed (there is a slight performance hit with using a personal VPN) but allows a user to access resources that are geographically restricted (watch a YouTube video not available in your country), avoid monitoring by your ISP (Internet Service Provider) of which websites you access, bypass Internet censorship, and many others. As a result, personal VPN service providers will compete with each other by offering enhanced privacy features, hundreds of servers in a variety of locations, support for various tunneling and communication options, end user device support, and more.

## Why would a GitLab team member use one?

There are a few reasons why a GitLab team member might want to use [NordLayer](/handbook/security/corporate/systems/vpn/_index.md):

- You use public Wi-Fi frequently. This could be because of travel, deciding to work from a coffee shop for the afternoon, or some other reason.
- You are using a private network but you do not trust it to be secure. You are working from a relative's home, a university network, or some other network that is not public but may not have tight security controls (or they are unknown).
- You share your home network with housemates that work at other companies, are students, and even neighbors, and you'd like to ensure that your communications remain private.
- You wish to [isolate your work environment from your home environment](/handbook/security/network-isolation/).

## Important tips

- Be consistent in your usage. If your goal is to secure your device while using public Wi-Fi, always use the VPN.
- Get familiar with the VPN solution before you need to use it. If you are using one while traveling, don't try it out for the first time at the airport while waiting to board your flight. Try it out at home.
- Remember that a VPN is not a guarantee of complete security and privacy. Keep the software up-to-date with the latest patches, just like other applications and your operating system. Also remember that like any other organization, personal VPN vendors can have breaches, security flaws, and other issues that could compromise your security and privacy. Stay alert, check with the vendor's website, and keep an eye on `#security` as there will certainly be discussion of such issues as the Security Team hears about them.
- There may be reasons you cannot use a VPN while working. For example, if you are supporting a government customer, you might only be able to assist that customer while in that country and only use network connections within the geographic confines of that country. The VPN might route your travel through different jurisdictions, and therefore should not be used.
- The same basic rules for personal usage that apply to you work laptop also continue to apply while using the personal VPN.
- Questions? Ask in the `#security` Slack channel.
