## FAQ

A document answering some questions we've received and thought to note down. 

This will be updated as we receive more questions/feedback, Contributions welcome!

#### What is the difference between `fieldsOfStudy` and `s2FieldsOfStudy`?

Answer: 
* `fieldsOfStudy` exist for a paper if we have this information from an external source. It is a list of strings.
* `s2FieldsOfStudy` is a list of `Dict[str, str]`, each with keys `category` and `source`:
  * if `source` is `external`, this is the same as `fieldsOfStudy`
  * if `source` is `s2-fos-model`, this is determined by our [internally developed classifier](https://www.semanticscholar.org/faq#how-does-semantic-scholar-determine-a-papers-field-of-study).
* `s2FieldsOfStudy` is a replacement for `fieldsOfStudy`, the latter will be deprecated and removed eventually.
  
```python
>>> r = requests.get('https://api.semanticscholar.org/graph/v1/paper/corpusid:4698432', params={'fields': 'fieldsOfStudy,s2FieldsOfStudy'})
>>> print(json.dumps(r.json(), indent=2))
{
  "paperId": "1fec9d41d372267b4474f18cbeadd806c8b67adb",
  "fieldsOfStudy": [
    "Computer Science"
  ],
  "s2FieldsOfStudy": [
    {
      "category": "Computer Science",
      "source": "external"
    },
    {
      "category": "Computer Science",
      "source": "s2-fos-model"
    }
  ]
}
```

#### What is the version of SPECTER embeddings we serve in the API? 

* When you request the embedding for a given paper, we return a version string too.
* This is an internal identifier, and does not correspond to any particular version of the HuggingFace SPECTER model.
* We are working on SPECTER 2.0 and will serve both embeddings for some period of time.

For example [this](https://api.semanticscholar.org/graph/v1/paper/cb92a7f9d9dbcf9145e32fdfa0e70e2a6b828eb1?fields=embedding
) link returns:
```
{
  "paperId": "cb92a7f9d9dbcf9145e32fdfa0e70e2a6b828eb1",
  "embedding": {
    "model": "specter@v0.1.1",
    "vector": [
      -5.399959087371826,
      -4.762187957763672,
      ....
    ]
  }
}
```

#### What are influential citations?

See https://www.semanticscholar.org/faq#influential-citations

#### What are citation intents?

See https://www.semanticscholar.org/faq#citation-intent

#### I'm receiving HTTP codes you haven't documented! 

My suggestion is to handle 5xxs gracefully, incorporating some exponential backoff retry algorithm in your code.
We have hit scaling issues in the past and cannot guarantee perfect availability, although we are trying our best to adhere to an SLA internally.

Unrelated, here's some 4xx error codes you can expect to receive:
* `403` - the API key you've sent is incorrect
* `429` - you're sending too many requests, please slow down

#### There's missing data / incorrect data! 

This is perhaps a disclaimer: missing/ambiguous/incorrect data could be present for any field.

Please consult the [FAQ](https://www.semanticscholar.org/faq#authorship-error) for more information on how you can either make the correction yourself
or report it to customer support.

