---
description: >-
  In this page you will find how to retrieve, create, update or delete single
  raindrop.
---

# Single raindrop

## Get raindrop

<mark style="color:blue;">`GET`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}`

#### Path Parameters

| Name                                 | Type   | Description          |
| ------------------------------------ | ------ | -------------------- |
| id<mark style="color:red;">\*</mark> | number | Existing raindrop ID |

{% tabs %}
{% tab title="200 " %}
```
```
{% endtab %}
{% endtabs %}

## Create raindrop

<mark style="color:green;">`POST`</mark> `https://api.raindrop.io/rest/v1/raindrop`

Description and possible values of fields described in "Fields"

#### Request Body

| Name                                   | Type    | Description                                                                                                                                |
| -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| pleaseParse                            | object  | Specify empty object to automatically parse meta data (cover, description, html) in the background                                         |
| created                                | string  |                                                                                                                                            |
| lastUpdate                             | string  |                                                                                                                                            |
| order                                  | number  | <p>Specify sort order (ascending).<br>For example if you want to move raindrop to the first place set this field to <strong>0</strong></p> |
| important                              | boolean |                                                                                                                                            |
| tags                                   | array   |                                                                                                                                            |
| media                                  | array   |                                                                                                                                            |
| cover                                  | string  |                                                                                                                                            |
| collection                             | object  |                                                                                                                                            |
| type                                   | string  |                                                                                                                                            |
| excerpt                                | string  |                                                                                                                                            |
| title                                  | string  |                                                                                                                                            |
| link<mark style="color:red;">\*</mark> | string  |                                                                                                                                            |
| highlights                             | array   |                                                                                                                                            |
| reminder                               | object  |                                                                                                                                            |



{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "item": {
        ...
    }
}
```
{% endtab %}
{% endtabs %}

## Update raindrop

<mark style="color:orange;">`PUT`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}`

Description and possible values of fields described in "Fields"

#### Path Parameters

| Name                                 | Type   | Description          |
| ------------------------------------ | ------ | -------------------- |
| id<mark style="color:red;">\*</mark> | number | Existing raindrop ID |

#### Request Body

| Name        | Type    | Description                                                                                                                                |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| created     | string  |                                                                                                                                            |
| lastUpdate  | string  |                                                                                                                                            |
| pleaseParse | object  | Specify empty object to re-parse link meta data (cover, type, html) in the background                                                      |
| order       | number  | <p>Specify sort order (ascending).<br>For example if you want to move raindrop to the first place set this field to <strong>0</strong></p> |
| important   | boolean |                                                                                                                                            |
| tags        | array   |                                                                                                                                            |
| media       | array   |                                                                                                                                            |
| cover       | string  |                                                                                                                                            |
| collection  | object  |                                                                                                                                            |
| type        | string  |                                                                                                                                            |
| excerpt     | string  |                                                                                                                                            |
| title       | string  |                                                                                                                                            |
| link        | string  |                                                                                                                                            |
| highlights  | array   |                                                                                                                                            |
| reminder    | object  |                                                                                                                                            |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "item": {
        ...
    }
}
```
{% endtab %}
{% endtabs %}

## Remove raindrop

<mark style="color:red;">`DELETE`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}`

When you remove raindrop it will be moved to user `Trash` collection. But if you try to remove raindrop from `Trash`, it will be removed permanently.

#### Path Parameters

| Name                                 | Type   | Description          |
| ------------------------------------ | ------ | -------------------- |
| id<mark style="color:red;">\*</mark> | number | Existing raindrop ID |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true
}
```
{% endtab %}
{% endtabs %}

## Upload file

<mark style="color:orange;">`PUT`</mark> `https://api.raindrop.io/rest/v1/raindrop/file`

Make sure to send PUT request with [multipart/form-data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST#example) body

#### Headers

| Name                                           | Type   | Description         |
| ---------------------------------------------- | ------ | ------------------- |
| Content-Type<mark style="color:red;">\*</mark> | string | multipart/form-data |

#### Request Body

| Name                                   | Type   | Description   |
| -------------------------------------- | ------ | ------------- |
| file<mark style="color:red;">\*</mark> | object | File          |
| collectionId                           | String | Collection Id |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "item": {
        "title": "File name",
        "type": "image",
        "link": "https://up.raindrop.io/raindrop/111/file.jpeg",
        "domain": "raindrop.io",
        "file": {
            "name": "File name.jpeg",
            "size": 10000
        }
        ...
    }
}
```
{% endtab %}

{% tab title="400 " %}
```javascript
//file is not specified
{
  "result": false,
  "error": -1,
  "errorMessage": "no file"
}

//unsupported file format
{
  "result": false,
  "error": "file_invalid",
  "errorMessage": "File is invalid"
}

//file size is big
{
  "result": false,
  "error": "file_size_limit",
  "errorMessage": "File size limit"
}
```
{% endtab %}
{% endtabs %}

## Upload cover

<mark style="color:orange;">`PUT`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}/cover`

PNG, GIF or JPEG

#### Path Parameters

| Name                                 | Type   | Description          |
| ------------------------------------ | ------ | -------------------- |
| id<mark style="color:red;">\*</mark> | number | Existing raindrop ID |

#### Headers

| Name                                           | Type   | Description         |
| ---------------------------------------------- | ------ | ------------------- |
| Content-Type<mark style="color:red;">\*</mark> | string | multipart/form-data |

#### Request Body

| Name                                    | Type   | Description |
| --------------------------------------- | ------ | ----------- |
| cover<mark style="color:red;">\*</mark> | object | File        |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "item": {
        "cover": "https://up.raindrop.io/raindrop/...",
        "media": [
            {
                "link": "https://up.raindrop.io/raindrop/..."
            }
        ]
        ...
    }
}
```
{% endtab %}

{% tab title="400 " %}
```javascript
//file is not specified
{
  "result": false,
  "error": -1,
  "errorMessage": "no file"
}

//unsupported file format
{
  "result": false,
  "error": "file_invalid",
  "errorMessage": "File is invalid"
}

//file size is big
{
  "result": false,
  "error": "file_size_limit",
  "errorMessage": "File size limit"
}
```
{% endtab %}
{% endtabs %}

## Get permanent copy

<mark style="color:blue;">`GET`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}/cache`

Links permanently saved with all content (only in PRO plan). Using this method you can navigate to this copy.

#### Path Parameters

| Name                                 | Type   | Description          |
| ------------------------------------ | ------ | -------------------- |
| id<mark style="color:red;">\*</mark> | number | Existing raindrop ID |

{% tabs %}
{% tab title="307 " %}
```http
Location: https://s3.aws...
```
{% endtab %}
{% endtabs %}

## Suggest collection and tags for new bookmark

<mark style="color:green;">`POST`</mark> `https://api.raindrop.io/rest/v1/raindrop/suggest`

#### Request Body

| Name                                   | Type   | Description |
| -------------------------------------- | ------ | ----------- |
| link<mark style="color:red;">\*</mark> | string |             |

{% tabs %}
{% tab title="200 " %}
```json
{
    "result": true,
    "item": {
        "collections": [
            {
                "$id": 568368
            },
            {
                "$id": 8519567
            },
            {
                "$id": 1385626
            },
            {
                "$id": 8379661
            },
            {
                "$id": 20865985
            }
        ],
        "tags": [
            "fonts",
            "free",
            "engineering",
            "icons",
            "invalid_parser"
        ]
    }
}
```
{% endtab %}
{% endtabs %}

## Suggest collection and tags for existing bookmark

<mark style="color:blue;">`GET`</mark> `https://api.raindrop.io/rest/v1/raindrop/{id}/suggest`

#### Path Parameters

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| <mark style="color:red;">\*</mark> | String | Bookmark id |

{% tabs %}
{% tab title="200 " %}
```json
{
    "result": true,
    "item": {
        "collections": [
            {
                "$id": 568368
            },
            {
                "$id": 8519567
            },
            {
                "$id": 1385626
            },
            {
                "$id": 8379661
            },
            {
                "$id": 20865985
            }
        ],
        "tags": [
            "fonts",
            "free",
            "engineering",
            "icons",
            "invalid_parser"
        ]
    }
}
```
{% endtab %}
{% endtabs %}
