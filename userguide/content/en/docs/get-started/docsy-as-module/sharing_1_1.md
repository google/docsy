---
description: >-
  Collection can be shared with other users, which are then called
  collaborators, and this section describes the different commands that are
  related to sharing.
---

# Sharing

### Collaborators

Every user who shares at least one collection with another user, has a collaborators record in the API response. The record contains a restricted subset of user-specific fields.

| Field      | Description                                                                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_id       | User ID of the collaborator                                                                                                                                             |
| email      | <p>Email of the collaborator</p><p>Empty when authorized user have read-only access</p>                                                                                 |
| email\_MD5 | MD5 hash of collaborator email. Useful for using with Gravatar for example                                                                                              |
| fullName   | Full name of the collaborator                                                                                                                                           |
| role       | <p>Access level:</p><p><strong><code>member</code></strong> have write access and can invite more users</p><p><strong><code>viewer</code></strong> read-only access</p> |

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/sharing" method="post" summary="Share collection" %}
{% swagger-description %}
Share collection with another user(s). As result invitation(s) will be send to specified email(s) with link to join collection.
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="role" type="string" %}
Access level. Possible values:

\




**`member`**

\




**`viewer`**
{% endswagger-parameter %}

{% swagger-parameter in="body" name="emails" type="array" %}
The user email(s) with whom to share the project.

\


Maximum 10
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "emails": [
        "some@user.com",
        "other@user.com"
    ]
}
```
{% endswagger-response %}

{% swagger-response status="400" description="" %}
```javascript
//'emails' array is empty
{
    "result": false,
    "errorMessage": "no emails"
}

//'emails' array larger than 10
{
    "result": false,
    "errorMessage": "you cant send more than 10 invites at once"
}
```
{% endswagger-response %}

{% swagger-response status="403" description="" %}
```javascript
//When user have more than 100 pending invitations:
{
    "result": false,
    "errorMessage": "you have too many pending invitations, you will be banned if you continue send more"
}

//User doesn't have enought permissions to invite more people
{
    "result": false,
    "errorMessage": "you dont have permissions to invite more people"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/sharing" method="get" summary="Get collaborators list of collection" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "items": [
    {
      "_id": 373381,
      "email": "some@mail.com",
      "email_MD5": "e12bda18ca265d3f3e30d247adea2549",
      "fullName": "Jakie Future",
      "registered": "2019-08-18T17:01:43.664Z",
      "role": "viewer"
    }
  ],
  "result": true
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/sharing" method="delete" summary="Unshare or leave collection" %}
{% swagger-description %}
There two possible results of calling this method, depends on who authenticated user is:

\


\- 

**Owner**

: collection will be unshared and all collaborators will be removed

\


\- 

**Member or viewer**

: authenticated user will be removed from collaborators list
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/sharing/{userId}" method="put" summary="Change access level of collaborator" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="number" %}
User ID of collaborator
{% endswagger-parameter %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="role" type="string" %}
**`member`**

 or 

**`viewer`**
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/sharing/{userId}" method="delete" summary="Delete a collaborator" %}
{% swagger-description %}
Remove an user from shared collection
{% endswagger-description %}

{% swagger-parameter in="path" name="userId" type="number" %}
User ID of collaborator
{% endswagger-parameter %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://api.raindrop.io" path="/rest/v1/collection/{id}/join" method="post" summary="Accept an invitation" %}
{% swagger-description %}
Accept an invitation to join a shared collection
{% endswagger-description %}

{% swagger-parameter in="path" name="id" type="number" %}
Existing collection ID
{% endswagger-parameter %}

{% swagger-parameter in="body" name="token" type="string" %}
Secret token from email
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "result": true,
    "role": "member"
}
```
{% endswagger-response %}

{% swagger-response status="403" description="" %}
```javascript
//Incorrect token
{
    "result": false,
    "error": "CollaboratorsIncorrectToken",
    "errorMessage": "Incorrect or expired token"
}

//Collection no more exists
{
    "result": false,
    "error": "CollaboratorsNoCollection",
    "errorMessage": "Shared collection not found or removed"
}

{
    "result": false,
    "error": "CollaboratorsAlready",
    "errorMessage": "You already owner of this collection"
}
```
{% endswagger-response %}
{% endswagger %}
