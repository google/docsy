The Users Search endpoint provides a simple, relevance-based search interface to public user accounts on X. Try querying by topical interest, full name, company name, location, or other criteria.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/users/search/introduction)

## Search Users

Get users that match a search query.

```python
my_api.search_users(query="developers")
# Response(data=[User(id='866707894389141505', name='Refinitiv Developers', username='Developers'), User(id='2244994945', name='Developers', username='XDevelopers')])
```
