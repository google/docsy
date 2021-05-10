---
title: "internal link with relref"
linkTitle: "internal link with relref"
manualLinkRelref: "about"
manualLinkTitle: "internal link to about page using relref"
type: docs
date: 2020-11-27T00:00:00+01:00
draft: false
weight: 999
description: >
  Internal link to following page: [about]({{% relref "about" %}} "internal link") - The link in the page (which uses alsoe the relref function of Hugo) description doesn't render correct, because the page description get markdownified and markdownify doesn't replace shortcodes.
---

[about]({{< relref "about" >}} "internal link")
