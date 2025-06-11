## Direct Messages lookup

Direct Messages enable private conversations on Twitter. Direct Messages are one of the most popular features of Twitter, with a wide variety of use cases. These use cases range from group chats among friends to powering customer support for brands around the world. New v2 versions of Direct Messages endpoints will be introduced in stages, and this first stage includes fundamental endpoints for creating Direct Messages and listing Direct Message conversation events. For the first time, the Twitter API v2 supports group conversations.

You can get more information for this at [docs](https://developer.twitter.com/en/docs/twitter-api/direct-messages/lookup/introduction)

### Get all messages in a 1-1 conversation

Returns a list of Direct Messages (DM) events within a 1-1 conversation with the user specified in the participant_id path parameter.

Messages are returned in reverse chronological order.

```python
my_api.get_dm_events_by_participant("1334059193268011010", max_results=1)
# Response(data=[DirectMessageEvent(id='1593226322066567177', event_type='MessageCreate', text='from api to III')])
```

### Get all messages in a specific conversation (both group and 1-1 conversations)

Returns a list of Direct Messages within a conversation specified in the dm_conversation_id path parameter.

Messages are returned in reverse chronological order.

```python
my_api.get_dm_events_by_conversation("1593091374437781506", max_results=1)
# Response(data=[DirectMessageEvent(id='1593091374437781510', event_type='MessageCreate', text='New group by api')])
```

### Get all messages across a user's DM conversations (both sent and received, group and 1-1 conversations)

Returns a list of Direct Messages for the authenticated user, both sent and received. Direct Message events are returned in reverse chronological order.

Supports retrieving events from the previous 30 days.

```python
my_api.get_dm_events(max_results=2)
# Response(data=[DirectMessageEvent(id='1593226454237487108', event_type='MessageCreate', text='from api to III'), DirectMessageEvent(id='1593226322066567177', event_type='MessageCreate', text='from api to III')])
```
