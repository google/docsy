---
description: Export all raindrops in specific format
---

# Export

## Export in format

<mark style="color:green;">`GET`</mark> `https://api.raindrop.io/rest/v1/raindrops/{collectionId}/export.{format}`

**Path Parameters**

<table><thead><tr><th width="243">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>collectionId</code><mark style="color:red;">*</mark></td><td>number</td><td>Collection ID. Specify <code>0</code> to get all raindrops</td></tr><tr><td><code>format</code><mark style="color:red;">*</mark></td><td>string</td><td><code>csv</code>, <code>html</code> or <code>zip</code></td></tr></tbody></table>

**Query Parameters**

<table><thead><tr><th width="243">Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>sort</code></td><td>string</td><td>Check <a href="https://developer.raindrop.io/v1/raindrops/multiple">https://developer.raindrop.io/v1/raindrops/multiple</a></td></tr><tr><td><code>search</code></td><td>string</td><td>Check <a href="https://developer.raindrop.io/v1/raindrops/multiple">https://developer.raindrop.io/v1/raindrops/multiple</a></td></tr></tbody></table>
