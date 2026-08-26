---
title: Swagger UI
type: swagger
---

This page renders [`/openapi/petstore.yaml`](/openapi/petstore.yaml) using the
`swagger` layout and `swaggerui` shortcode. It exercises the theme's pinned
Swagger UI CDN assets: after a version or SRI-hash bump, an API reference
below and a clean browser console (no `integrity` errors) confirm the pins.

{{< swaggerui src="/openapi/petstore.yaml" >}}
