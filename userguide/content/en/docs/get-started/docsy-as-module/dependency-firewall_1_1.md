---

title: Dependency Firewall Single-Engineer Group
---







## Dependency Firewall Single-Engineer Group

The Dependency Firewall SEG is a [Single-Engineer Group](/handbook/company/structure/#single-engineer-groups) within our [Incubation Engineering Department](/handbook/engineering/development/incubation/).

We have an existing [Dependency Firewall category](https://about.gitlab.com/direction/package/#dependency-firewall) which aims to prevent any unknown or unverified providers from introducing potential security vulnerabilities.  This SEG will work closely with that group to accelerate the development of the Dependency Firewall feature, and integrate closely with the work taking place on the [Dependency Proxy](https://about.gitlab.com/direction/package/#dependency-proxy).

An initial MVP may be to implement NPM Audit with a UX that allows a user to specify an allow/deny list against criteria for the container registry.  Criteria can include checking for missing author name, email, or look for the existance of specific licenses.  We can also add rules to stop dependencies being downloaded immediately after an author change, as an example.

Following NPM, we can then iterate to look at other popular package managers such as Maven, Python, and Nuget.
