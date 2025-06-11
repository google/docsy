# Covers/icons

In your app you could easily make icon/cover selector from more than 10 000 icons

![](../../.gitbook/assets/icon-finder.png)

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collections/covers/{text}" method="get" summary="Search for cover" %}
{% swagger-description %}
Search for specific cover (icon)
{% endswagger-description %}

{% swagger-parameter in="path" name="text" type="string" %}
For example "pokemon"
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "items": [
    {
      "title": "Icons8",
      "icons": [
        {
          "png": "https://rd-icons-icons8.gumlet.com/color/5x/mystic-pokemon.png?fill-color=transparent"
        }
      ]
    },
    {
      "title": "Iconfinder",
      "icons": [
        {
          "png": "https://cdn4.iconfinder.com/data/icons/pokemon-go/512/Pokemon_Go-01-128.png",
          "svg": "https://api.iconfinder.com/v2/icons/1320040/formats/svg/1760420/download"
        }
      ]
    }
  ],
  "result": true
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collections/covers" method="get" summary="Featured covers" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "items": [
    {
      "title": "Colors circle",
      "icons": [
        {
          "png": "https://up.raindrop.io/collection/templates/colors/ios1.png"
        }
      ]
    },
    {
      "title": "Hockey",
      "icons": [
        {
          "png": "https://up.raindrop.io/collection/templates/hockey-18/12i.png"
        }
      ]
    }
  ]
}
```
{% endswagger-response %}
{% endswagger %}
