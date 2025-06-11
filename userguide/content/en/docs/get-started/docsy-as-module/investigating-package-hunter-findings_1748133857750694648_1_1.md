---
title: Investigating Package Hunter Findings
---

## List of Package Hunter Findings

Any Package Hunter related finding can be found on this [dashboard](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerability_report/?severity=UNKNOWN&scanner=GitLab.DEPENDENCY_SCANNING&state=DETECTED) (internal link).

## Network Connection Findings

We're going to use [this finding](https://gitlab.com/gitlab-org/gitlab/-/security/vulnerabilities/5043319) as an example. In this finding,
Package Hunter detected that a package opened a network connection.

> 02:24:56.163600570: Notice Disallowed outbound connection destination (command=node scripts/install.js connection=172.17.0.2:36884->52.217.109.44:443 user=root container_id=fb38d63ef02a container_name=some-container-eae8d3ec-a482-441b-8262-78198b46fdfb.tgz image=maldep)

### Investigation

- We can look at the destination IP address and see if gives any interesting information
  - In this example, it's a an AWS IP address but it gives us no information
  about what package might have contacted this IP
- **Attention: This step requries to checkout the branch for which the finding was made.
Please proceed with caution when analyzing potentially malicious code on your local computer.
We recommend to checkout the code into a dedicated VM.
If there are any questions or you require assistance, please reach out to `@gitlab-com/gl-security/product-security/appsec`.**
  - We know that the package ran the command `scripts/install.js` so we can search for that file (be sure to execute `yarn install` before running the search)
  - Running `find . -name install.js` leads us to `node_modules/node-sass/scripts/install.js`
- We can inspect the `package.json` files to find the command that triggered the detection
  - We see in `node_modules/node-sass/package.json` that `scripts/install.js` is indeed called

Completing the investigation in the example, we see that the `install.js` script
calls `getBinaryURL()`. This function is defined in `node_modules/node-sass/lib/extensions.js`:

```javascript
/**
 * Determine the URL to fetch binary file from.
 * By default fetch from the node-sass distribution
 * site on GitHub.
 */
function getBinaryUrl() {
  var site = getArgument('--sass-binary-site') ||
             process.env.SASS_BINARY_SITE  ||
             process.env.npm_config_sass_binary_site ||
             (pkg.nodeSassConfig && pkg.nodeSassConfig.binarySite) ||
             'https://github.com/sass/node-sass/releases/download';  return [site, 'v' + pkg.version, getBinaryName()].join('/');
}
```

We see from this file that `node-sass` is trying to download the binary
from `https://github.com/sass/node-sass/releases/download/VERSION/BINARY_NAME`

Doing this locally we obtain:

```shell
$ wget https://github.com/sass/node-sass/releases/download/v5.0.0/linux-x64-64_binding.node
...
Connecting to github-production-release-asset-2e65be.s3.amazonaws.com (github-production-release-asset-2e65be.s3.amazonaws.com)|52.216.204.107|:443... connected.
...
```

It's resolving the URL to 52.216.204.107, which is not exactly the same IP
from the Package Hunter finding, but IP address info is very similar and it's
normal that the request wouldn't exactly be served by the same IP every time
in this context. At this point we can be reasonably sure about the source of
the alert and that there is no malicious intent.

### Actions

- If we discover that the package was malicious all along (typosquatting for example),
[security on-call should be engaged] for further investigation and an MR should be
opened to replace the package with the legitimate one. Consider [reporting](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)
the malicious package to the registry operator ([NPM](https://docs.npmjs.com/policies/security#reporting-security-problems-to-npm) or [RubyGems](https://guides.rubygems.org/security/#reporting-security-vulnerabilities))
- If we discover that a legitimate package was compromised,
[security on-call should be engaged](/handbook/security/security-operations/sirt/engaging-security-on-call/) for further investigation and an MR should be
opened to roll back to a previous version of the package that is known to be secure.
Consider [reporting](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software)  the malicious package to the registry operator ([NPM](https://docs.npmjs.com/policies/security#reporting-security-problems-to-npm) or [RubyGems](https://guides.rubygems.org/security/#reporting-security-vulnerabilities))
and to the maintainer of the package
- If we discover that the network connection is used to fetch a legitimate resource,
we should look into the possibility of self-hosting the resource or verifying its
integrity during the build process to protect against a potential compromise of
the external resource
