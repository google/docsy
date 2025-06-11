---
description: Handy methods to implement import functionality
---

# Import

## Parse URL

<mark style="color:blue;">`GET`</mark> `https://api.raindrop.io/rest/v1/import/url/parse`

Parse and extract useful info from any URL

#### Query Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| url  | string | URL         |

{% tabs %}
{% tab title="200 " %}
```javascript
//Success
{
  "item": {
    "title": "Яндекс",
    "excerpt": "Найдётся всё",
    "media": [
      {
        "type": "image",
        "link": "http://yastatic.net/s3/home/logos/share/share-logo_ru.png"
      }
    ],
    "type": "link",
    "meta": {
      "possibleArticle": false,
      "canonical": "https://ya.ru",
      "site": "Яндекс",
      "tags": []
    }
  },
  "result": true
}

//Invalid URL
{
  "error": "not_found",
  "errorMessage": "invalid_url",
  "item": {
    "title": "Fdfdfdf",
    "excerpt": "",
    "media": [
      {
        "link": "<screenshot>"
      }
    ],
    "type": "link",
    "parser": "local",
    "meta": {
      "possibleArticle": false,
      "tags": []
    }
  },
  "result": true
}

//Not found
{
  "error": "not_found",
  "errorMessage": "url_status_404",
  "item": {
    "title": "Some",
    "excerpt": "",
    "media": [
      {
        "link": "<screenshot>"
      }
    ],
    "type": "link",
    "parser": "local",
    "meta": {
      "possibleArticle": false,
      "tags": []
    }
  },
  "result": true
}
```
{% endtab %}
{% endtabs %}

## Check URL(s) existence&#x20;

<mark style="color:green;">`POST`</mark> `https://api.raindrop.io/rest/v1/import/url/exists`

Does specified URL's are already saved?

#### Request Body

| Name | Type  | Description |
| ---- | ----- | ----------- |
| urls | array | URL's       |

{% tabs %}
{% tab title="200 ids array contains ID of existing bookmarks" %}
```javascript
//Found
{
    "result": true,
    "ids": [
        3322,
        12323
    ]
}

//Not found
{
    "result": false,
    "ids": []
}
```
{% endtab %}
{% endtabs %}

## Parse HTML import file

<mark style="color:green;">`POST`</mark> `https://api.raindrop.io/rest/v1/import/file`

Convert HTML bookmark file to JSON. \
Support Nestcape, Pocket and Instapaper file formats

#### Headers

| Name         | Type   | Description         |
| ------------ | ------ | ------------------- |
| Content-Type | string | multipart/form-data |

#### Request Body

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| import | string | File        |

{% tabs %}
{% tab title="200 " %}
```javascript
{
  "result": true,
  "items": [
    {
      "title": "Web",
      "folders": [
        {
          "title": "Default",
          "folders": [],
          "bookmarks": [
            {
              "link": "https://aaa.com/a",
              "title": "Name 1",
              "lastUpdate": "2016-09-13T11:17:09.000Z",
              "tags": ["tag"],
              "excerpt": ""
            }
          ]
        }
      ],
      "bookmarks": [
        {
          "link": "https://bbb.com/b",
          "title": "Name 2",
          "lastUpdate": "2016-09-13T11:17:09.000Z",
          "tags": ["tag"],
          "excerpt": ""
        }
      ]
    },
    {
      "title": "Home",
      "folders": [
        {
          "title": "Inspiration",
          "folders": [],
          "bookmarks": [
            {
              "link": "https://ccc.com/c",
              "title": "Name 3",
              "lastUpdate": "2016-09-13T11:17:09.000Z",
              "tags": ["tag"],
              "excerpt": ""
            }
          ]
        }
      ],
      "bookmarks": []
    }
  ]
}
```
{% endtab %}
{% endtabs %}
