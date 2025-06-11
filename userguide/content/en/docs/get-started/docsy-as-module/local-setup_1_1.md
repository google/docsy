---
title: "AppSec Engineer's Local Setup"
---

When evaluating security issues or MRs, it can be useful to have a way to reproduce issues, dig in to root causes, look for further impacts. This can also be a great way to get familiar with GitLab during your first few weeks of onboarding. Here are some handy tips & tricks.

## Get a version of GitLab to play with

Many AppSec engineers will opt to install GitLab locally using GDK. [Here's how to install GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md#one-line-installation) and [how to use it](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md). The UX team have a great summary of [other ways to play with & test GitLab](/handbook/product/ux/how-we-work/#preview-test-and-contribute).

### Step through execution chains

If you want to see the code executed as part of a web or API request, an interactive debugger may be a useful tool. Here's how to [configure Pry & Thin](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/pry.md#using-thin)

A typical workflow might be to find the `Controller` action which kicks off the request (methods like `create` or `update` are good bets), add in `binding.pry`, save the file, then perform that request in a browser. The execution will stop and in a terminal you can inspect the current state using IRB, type `step` to go in_to_ a method, `next` to go to the next statement, and `continue` to let the request run to the next break point and/or completion.

Watching logs can be helpful: `tail -f gitlab/log/development.log`.

## Install a testing proxy

Your role might not require you to do "penetration testing", but having access to a testing proxy that lets you intercept and manipulate requests can help with reproducing HackerOne issues.

The AppSec team have a multi-user license for [Burp Suite Professional](https://portswigger.net/burp/pro). Ask in #sec-appsec about getting a license, and ([download the latest stable version here](https://portswigger.net/burp/releases)). You can also use [OWASP ZAP](https://www.zaproxy.org/) which is free and open source.

These tools can easily cause damage to websites or eat up your CPU with active scans. In OWASP Zap, use "Safe" mode to prevent any potentially malicious requests. In Burp Suite, disable any live "audit" scans.

## Browser Profiles

When testing requires using multiple users, an Incognito / Private tab is an easy option. You can also create and use [un-signed-in Chrome Profiles](https://support.google.com/chrome/answer/2364824) or [Firefox Multi-Account Containers](https://support.mozilla.org/en-US/kb/containers) to provide "session sandboxes", which will persist beyond window closure (unlike Incognito tabs) and you can colour code them to help with visual distinction.

## Mocking Servers / ngrok / tunnels

Some bugs require connecting to a service. An example is using `ngrok` to stub a fake GitLab server in ["CVE-2022-0244: Arbitrary file read via the bulk imports UploadsPipeline"](https://gitlab.com/gitlab-org/gitlab/-/issues/349524#steps-to-reproduce).

Making your local machine accessible from the internet is [not permitted](/handbook/business-technology/it/security/system-configuration/#other-servicesdevices), which precludes tools like `ngrok` or `localtunnel`. Use GitLab's [Sandbox Cloud](/handbook/infrastructure-standards/realms/sandbox) to host mock servers instead. Refer to [Secure Cloud testing environments]({{< ref "test_env#securing-cloud-testing-environments" >}}) for advice on how to secure your Sandbox Cloud test environments.
