The manage List endpoints allow you to create, delete, and update Lists on behalf of an authenticated user. 

For these endpoints, there are three methods available: POST, DELETE and PUT. The POST method allows you to create a List, the DELETE method allows you to delete a List, and the PUT method allows you to update the metadata of a List.

There is a user rate limit of 300 requests per 15 minutes for all three endpoints.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/introduction)

Note that you can create up to 1000 Lists per account.

## Create a list

Enables the authenticated user to create a List.

```python
my_api.create_list(name="pytwitter")
# TwitterList(id='1451603640167194629', name='pytwitter')
```

## Update a list

Enables the authenticated user to update the meta data of a specified List that they own.

```python
my_api.update_list(list_id="1448302476780871685", name="lists for tw")
# {'updated': True}
```

## Delete a list

Enables the authenticated user to delete a List that they own.

```python
my_api.delete_list(list_id="1448302476780871685")
# {'data': {'deleted': True}}
```