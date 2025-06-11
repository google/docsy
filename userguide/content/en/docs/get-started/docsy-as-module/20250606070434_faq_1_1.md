## FAQ

__I want to see more than 100 log messages, is it possible?__

Yes, there is a `limit` URL parameter that you can change to any number.

__Can I use regular expressions in the search field?__

Yes, you can enable regular expressions next to the search field.

__Is the search field case insensitive?__

Yes.

__How is a Piwik log line formatted by default?__

`'$severity $tag[$datetime] [$requestId] $message` eg `WARNING Piwik\Common[2015-01-01 01:02:03] [cf27] The log message`

__Is the search pattern applied to the whole log line?__

Yes, this means a search for `WARNING Piwik\Common` would deliver you all warnings triggered by `Piwik\Common`.

__How do I find all messages that belong to a certain request?__

Each log message shows a "Request Id". By clicking on this Id it selects all log messages of the same request.
Alternatively you can search for the expression `\[1234\]` where `1234` need to be replaced by a Request Id.

__How do I find messages that belong to the same day?__

Either click on a date field or search for it, eg `2012-12-12`.

__What are the known issues?__

* If there are messages being logged while viewing the log messages, the paging might not work 100% correctly.
* There seems to be a problem when searching for a single quotation mark "'".
