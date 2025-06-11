---
description: >-
  In this page you will find how to retrieve, create, update or delete multiple
  raindrops at once.
---

# Multiple raindrops

### Common parameters

To filter, sort or limit raindrops use one of the parameters described below. Check each method for exact list of supported parameters.

| Parameter    | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | `Integer`        | <p>Path parameter that specify from which collection to get raindrops. Or specify one of system:</p><p><code>0</code> to get all (except Trash)</p><p><code>-1</code> to get from "Unsorted"</p><p><code>-99</code> to get from "Trash"</p><p></p><p>Warning: update or remove methods not support <code>0</code> yet. Will be fixed in future.</p>                                                                                                              |
| search       | `String`         | <p>As text, check all <a href="https://help.raindrop.io/using-search#operators">examples here</a></p><p>You can first test your searches in Raindrop app and if it works correctly, just copy content of search field and use it here</p>                                                                                                                                                                                                                        |
| sort         | `String`         | <p>Query parameter for sorting:</p><p><code>-created</code> by date descending (default)</p><p><code>created</code> by date ascending</p><p><code>score</code> by relevancy (only applicable when search is specified)</p><p><code>-sort</code> by order</p><p><code>title</code> by title (ascending)</p><p><code>-title</code> by title (descending)</p><p><code>domain</code> by hostname (ascending)</p><p><code>-domain</code> by hostname (descending)</p> |
| page         | `Integer`        | Query parameter. 0, 1, 2, 3 ...                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| perpage      | `Integer`        | Query parameter. How many raindrops per page. 50 max                                                                                                                                                                                                                                                                                                                                                                                                             |
| ids          | `Array<Integer>` | You can specify exact raindrop ID's for batch update/remove methods                                                                                                                                                                                                                                                                                                                                                                                              |
| nested       | `Boolean`        | Also include bookmarks from nested collections (true/false)                                                                                                                                                                                                                                                                                                                                                                                                      |

## Get raindrops

<mark style="color:blue;">`GET`</mark> `https://api.raindrop.io/rest/v1/raindrops/{collectionId}`

#### Path Parameters

| Name                                           | Type   | Description                                   |
| ---------------------------------------------- | ------ | --------------------------------------------- |
| collectionId<mark style="color:red;">\*</mark> | number | Collection ID. Specify 0 to get all raindrops |

#### Query Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| sort    | string  |             |
| perpage | number  |             |
| page    | number  |             |
| search  | string  |             |
| nested  | boolean |             |

{% tabs %}
{% tab title="200 " %}
```
```
{% endtab %}
{% endtabs %}

## Create many raindrops

<mark style="color:green;">`POST`</mark> `https://api.raindrop.io/rest/v1/raindrops`

#### Request Body

| Name                                    | Type  | Description                                                                                                              |
| --------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| items<mark style="color:red;">\*</mark> | array | <p>Array of objects. Format of single object described in "Create single raindrop".<br>Maximum 100 objects in array!</p> |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "items": [
        {
            ...
        }
    ]
}
```
{% endtab %}
{% endtabs %}

## Update many raindrops

<mark style="color:orange;">`PUT`</mark> `https://api.raindrop.io/rest/v1/raindrops/{collectionId}`

Specify optional `search` and/or `ids` parameters to limit raindrops that will be updated.\
Possible fields that could be updated are described in "Body Parameters"

#### Path Parameters

| Name                                           | Type    | Description |
| ---------------------------------------------- | ------- | ----------- |
| collectionId<mark style="color:red;">\*</mark> | number  |             |
| nested                                         | boolean |             |

#### Request Body

| Name       | Type    | Description                                                                                                                                     |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | array   |                                                                                                                                                 |
| important  | boolean | <p>TRUE - mark as "favorite"<br>FALSE - unmark as "favorite"</p>                                                                                |
| tags       | array   | <p>Will append specified tags to raindrops.<br>Or will remove all tags from raindrops if <code>[]</code> (empty array) is specified</p>         |
| media      | array   | <p>Will append specified media items to raindrops.<br>Or will remove all media from raindrops if <code>[]</code> (empty array) is specified</p> |
| cover      | string  | <p>Set URL for cover.<br><em>Tip:</em> specify <code>&#x3C;screenshot></code> to set screenshots for all raindrops</p>                          |
| collection | object  | Specify `{"$id": collectionId}` to move raindrops to other collection                                                                           |

{% tabs %}
{% tab title="200 " %}
```
```
{% endtab %}
{% endtabs %}

## Remove many raindrops

<mark style="color:red;">`DELETE`</mark> `https://api.raindrop.io/rest/v1/raindrops/{collectionId}`

Specify optional `search` and/or `ids` parameters to limit raindrops that will be moved to "**Trash**"\
When `:collectionId` is **-99**, raindrops will be permanently removed!

#### Path Parameters

| Name                                           | Type    | Description |
| ---------------------------------------------- | ------- | ----------- |
| collectionId<mark style="color:red;">\*</mark> | number  |             |
| nested                                         | boolean |             |

#### Query Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| search | string |             |

#### Request Body

| Name | Type  | Description |
| ---- | ----- | ----------- |
| ids  | array |             |

{% tabs %}
{% tab title="200 " %}
```javascript
{
    "result": true,
    "modified": 330
}
```
{% endtab %}
{% endtabs %}
