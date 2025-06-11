# Highlights

Single `highlight` object:

| Field   | Type     | Description                                                                                                                                                                                                                                                                                                          |
| ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_id    | `String` | Unique id of highlight                                                                                                                                                                                                                                                                                               |
| text    | `String` | Text of highlight (required)                                                                                                                                                                                                                                                                                         |
| title   | `String` | Title of bookmark                                                                                                                                                                                                                                                                                                    |
| color   | `String` | <p>Color of highlight. <br>Default <code>yellow</code><br><br>Can be <code>blue</code>, <code>brown</code>, <code>cyan</code>, <code>gray</code>, <code>green</code>, <code>indigo</code>, <code>orange</code>, <code>pink</code>, <code>purple</code>, <code>red</code>, <code>teal</code>, <code>yellow</code></p> |
| note    | `String` | Optional note for highlight                                                                                                                                                                                                                                                                                          |
| created | `String` | Creation date of highlight                                                                                                                                                                                                                                                                                           |
| tags    | `Array`  | Tags list                                                                                                                                                                                                                                                                                                            |
| link    | `String` | Highlighted page URL                                                                                                                                                                                                                                                                                                 |

{% swagger method="get" path="/rest/v1/highlights" baseUrl="https://api.raindrop.io" summary="Get all highlights" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="page" type="Number" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="perpage" type="Number" %}
How many highlights per page. 50 max. Default 25
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "result": true,
    "items": [
        {
            "note": "Trully native macOS app",
            "color": "red",
            "text": "Orion is the new WebKit-based browser for Mac",
            "created": "2022-03-21T14:41:34.059Z",
            "tags": ["tag1", "tag2"],
            "_id": "62388e9e48b63606f41e44a6",
            "raindropRef": 123,
            "link": "https://apple.com",
            "title": "Orion Browser"
        },
        {
            "note": "",
            "color": "green",
            "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
            "created": "2022-03-21T15:13:21.128Z",
            "tags": ["tag1", "tag2"],
            "_id": "62389611058af151c840f667",
            "raindropRef": 123,
            "link": "https://apple.com",
            "title": "Apple"
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/rest/v1/highlights/{collectionId}" baseUrl="https://api.raindrop.io" summary="Get all highlights in a collection" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="collectionId" type="Number" required="true" %}
Collection ID
{% endswagger-parameter %}

{% swagger-parameter in="path" name="page" type="Number" %}

{% endswagger-parameter %}

{% swagger-parameter in="path" name="perpage" type="Number" %}
How many highlights per page. 50 max. Default 25
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "result": true,
    "items": [
        {
            "note": "Trully native macOS app",
            "color": "red",
            "text": "Orion is the new WebKit-based browser for Mac",
            "created": "2022-03-21T14:41:34.059Z",
            "tags": ["tag1", "tag2"],
            "_id": "62388e9e48b63606f41e44a6",
            "raindropRef": 123,
            "link": "https://apple.com",
            "title": "Apple"
        },
        {
            "note": "",
            "color": "green",
            "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
            "created": "2022-03-21T15:13:21.128Z",
            "tags": ["tag1", "tag2"],
            "_id": "62389611058af151c840f667",
            "raindropRef": 123,
            "link": "https://apple.com",
            "title": "Apple"
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/raindrop/{id}" method="get" summary="Get highlights of raindrop" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" required="true" %}
Existing raindrop ID
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "item": {
        "_id": 373777232,
        "highlights": [
            {
                "note": "Trully native macOS app",
                "color": "red",
                "text": "Orion is the new WebKit-based browser for Mac",
                "created": "2022-03-21T14:41:34.059Z",
                "lastUpdate": "2022-03-22T14:30:52.004Z",
                "_id": "62388e9e48b63606f41e44a6"
            },
            {
                "note": "",
                "color": "green",
                "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
                "created": "2022-03-21T15:13:21.128Z",
                "lastUpdate": "2022-03-22T09:15:18.751Z",
                "_id": "62389611058af151c840f667"
            }
        ]
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/raindrop/{id}" method="put" summary="Add highlight" %}
{% swagger-description %}
Just specify a `highlights` array in body with `object` for each highlight

**Fore example:**

`{"highlights": [ { "text": "Some quote", "color": "red", "note": "Some note" } ] }`
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" required="true" %}
Existing raindrop ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights" type="array" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].text" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].note" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].color" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "item": {
        "_id": 373777232,
        "highlights": [
            {
                "note": "Trully native macOS app",
                "color": "red",
                "text": "Orion is the new WebKit-based browser for Mac",
                "created": "2022-03-21T14:41:34.059Z",
                "lastUpdate": "2022-03-22T14:30:52.004Z",
                "_id": "62388e9e48b63606f41e44a6"
            },
            {
                "note": "",
                "color": "green",
                "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
                "created": "2022-03-21T15:13:21.128Z",
                "lastUpdate": "2022-03-22T09:15:18.751Z",
                "_id": "62389611058af151c840f667"
            }
        ]
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/raindrop/{id}" method="put" summary="Update highlight" %}
{% swagger-description %}
Just specify a `highlights` array in body with `object` containing particular `_id` of highlight you want to update and all other fields you want to change.

**Fore example:**

`{"highlights": [ { "_id": "62388e9e48b63606f41e44a6", "note": "New note" } ] }`
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" required="true" %}
Existing raindrop ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights" type="array" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[]._id" required="true" %}
Particular highlight _id you want to remove
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].text" required="false" %}
Should be empty string
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].note" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].color" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "item": {
        "_id": 373777232,
        "highlights": [
            {
                "note": "Trully native macOS app",
                "color": "red",
                "text": "Orion is the new WebKit-based browser for Mac",
                "created": "2022-03-21T14:41:34.059Z",
                "lastUpdate": "2022-03-22T14:30:52.004Z",
                "_id": "62388e9e48b63606f41e44a6"
            },
            {
                "note": "",
                "color": "green",
                "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
                "created": "2022-03-21T15:13:21.128Z",
                "lastUpdate": "2022-03-22T09:15:18.751Z",
                "_id": "62389611058af151c840f667"
            }
        ]    }}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/raindrop/{id}" method="put" summary="Remove highlight" %}
{% swagger-description %}
Just specify a `highlights` array in body with `object` containing particular `_id` of highlight you want to remove and empty string for `text` field.

**Fore example:**

`{"highlights": [ { "_id": "62388e9e48b63606f41e44a6", "text": "" } ] }`
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" required="true" %}
Existing raindrop ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights" type="array" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[]._id" required="true" %}
Particular highlight _id you want to remove
{% endswagger-parameter %}

{% swagger-parameter in="body" name="highlights[].text" required="true" %}
Should be empty string
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "item": {
        "_id": 373777232,
        "highlights": [
            {
                "note": "Trully native macOS app",
                "color": "red",
                "text": "Orion is the new WebKit-based browser for Mac",
                "created": "2022-03-21T14:41:34.059Z",
                "lastUpdate": "2022-03-22T14:30:52.004Z",
                "_id": "62388e9e48b63606f41e44a6"
            },
            {
                "note": "",
                "color": "green",
                "text": "Built on WebKit, Orion gives you a fast, smooth and lightweight browsing experience",
                "created": "2022-03-21T15:13:21.128Z",
                "lastUpdate": "2022-03-22T09:15:18.751Z",
                "_id": "62389611058af151c840f667"
            }
        ]
    }}
```
{% endswagger-response %}
{% endswagger %}
