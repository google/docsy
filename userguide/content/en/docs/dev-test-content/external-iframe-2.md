---
title: "Not working external iframe"
weight: 20
icon: fas fa-tools
tags: ["tag 1","tag 2","tag 6"]
projects: ["project 1","project 2","project 6"]
description: >
  Not working test page for iframe shortcode.
---

The official Hugo website https://gohugo.io can't be embedded, because of it's X-Frame-Options - see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

{{< iframe src = "https://gohugo.io" class = "css-class" >}}