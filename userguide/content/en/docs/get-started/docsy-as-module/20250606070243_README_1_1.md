# @streamparser/json

Fast dependency-free library to parse a JSON stream using utf-8 encoding in Node.js, Deno or any modern browser. Fully compliant with the JSON spec and `JSON.parse(...)`.

*tldr;*

```javascript
import { JSONparser } from '@streamparser/json';

const parser = new JSONparser();
parser.onValue = (value) => { /* process data */}

// Or passing the stream in several chunks 
try {
  parser.write('{ "test": ["a"] }');
  // onValue will be called 3 times:
  // "a"
  // ["a"]
  // { test: ["a"] }
} catch (err) {
  console.log(err); // handler errors 
}
```

## Dependencies / Polyfilling

@streamparser/json requires a few ES6 classes:

* [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
* [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
* [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)

If you are targeting browsers or systems in which these might be missing, you need to polyfil them.

## Components

### Tokenizer

A JSON compliant tokenizer that parses a utf-8 stream into JSON tokens

```javascript
import { Tokenizer } from '@streamparser/json';

const tokenizer = new Tokenizer(opts);
```

The available options are:

```javascript
{
  stringBufferSize: <bufferSize>, // set to 0 to don't buffer. Min valid value is 4.
  numberBufferSize: <bufferSize>, // set to 0 to don't buffer
  separator: <string>, // separator between object. For example `\n` for nd-js.
}
```

If buffer sizes are set to anything else than zero, instead of using a string to apppend the data as it comes in, the data is buffered using a TypedArray. A reasonable size could be `64 * 1024` (64 KB).

#### Buffering

When parsing strings or numbers, the parser needs to gather the data in-memory until the whole value is ready.

Strings are inmutable in Javascript so every string operation creates a new string. The V8 engine, behind Node, Deno and most modern browsers, performs a many different types of optimization. One of this optimizations is to over-allocate memory when it detects many string concatenations. This increases significatly the memory consumption and can easily exhaust your memory when parsing JSON containing very large strings or numbers. For those cases, the parser can buffer the characters using a TypedArray. This requires encoding/decoding from/to the buffer into an actual string once the value is ready. This is done using the `TextEncoder` and `TextDecoder` APIs. Unfortunately, these APIs creates a significant overhead when the strings are small so should be used only when strictly necessary.

#### Properties & Methods

* **write(data: string|typedArray|buffer)** push data into the tokenizer.
* **end()** closes the tokenizer so it can not be used anymore. Throws an error if the tokenizer was in the middle of parsing.
* **isEnded** readonly boolean property indicating whether the Tokenizer is ended or is still accepting data.
* **parseNumber(numberStr)** method used internally to parse numbers. By default, it is equivalent to `Number(numberStr)` but the user can override it if he wants some other behaviour.
* **onToken(token: TokenType, value: any, offset: number)** no-op method that the user should override to follow the tokenization process.
* **onError(err: Error)** no-op method that the user can override to act on errors. If not set, the write method simply throws synchronously.
* **onEnd()** no-op method that the user can override to act when the tokenizer is ended.
 
```javascript
// You can override the overridable methods by creating your own class extending Tokenizer
class MyTokenizer extends Tokenizer {
  parseNumber(numberStr) {
    const number = super.parseNumber(numberStr);
    // if number is too large. Just keep the string.
    return Number.isFinite(numberStr)) ? number : numberStr;
  }
  onToken(token: TokenType, value: any) {
    if (token = TokenTypes.NUMBER && typeof value === 'string') {
      super(TokenTypes.STRING, value);
    } else {
      super(token, value);
    }
  }
}

const myTokenizer = new MyTokenizer();

// or just overriding it
const tokenizer = new Tokenizer();
tokenizer.parseNumber = (numberStr) => { ... };
tokenizer.onToken = (token, value, offset) => { ... };
```

### TokenParser

A token parser that processes JSON tokens as emitted by the `Tokenizer` and emits JSON values/objects.

```javascript
import { TokenParser} from '@streamparser/json';

const tokenParser = new TokenParser(opts);
```

The available options are:

```javascript
{
  paths: <string[]>,
  keepStack: <boolean>, // whether to keep all the properties in the stack
  separator: <string>, // separator between object. For example `\n` for nd-js. If left empty or set to undefined, the token parser will end after parsing the first object. To parse multiple object without any delimiter just set it to the empty string `''`.
}
```

* paths: Array of paths to emit. Defaults to `undefined` which emits everything. The paths are intended to suppot jsonpath although at the time being it only supports the root object selector (`$`) and subproperties selectors including wildcards (`$.a`, `$.*`, `$.a.b`, , `$.*.b`, etc). 
* keepStack: Whether to keep full objects on the stack even if they won't be emitted. Defaults to `true`. When set to `false` the it does preserve properties in the parent object some ancestor will be emitted. This means that the parent object passed to the `onValue` function will be empty, which doesn't reflect the truth, but it's more memory-efficient.

#### Properties & Methods

* **write(token: TokenType, value: any)** push data into the token parser.
* **end()** closes the token parser so it can not be used anymore. Throws an error if the tokenizer was in the middle of parsing.
* **isEnded** readonly boolean property indicating whether the token parser is ended or is still accepting data.
* **onValue(value: any)** no-op method that the user should override to get the parsed value.
* **onError(err: Error)** no-op method that the user should override to act on errors. If not set, the write method simply throws synchronously.
* **onEnd()** no-op method that the user should override to act when the token parser is ended.
 
```javascript
// You can override the overridable methods by creating your own class extending Tokenizer
class MyTokenParser extends TokenParser {
  onValue(value: any) {
    // ...
  }
}

const myTokenParser = new MyTokenParser();

// or just overriding it
const tokenParser = new TokenParser();
tokenParser.onValue = (value) => { ... };
```

### JSONparser

A drop-in replacement of `JSONparse` (with few ~~breaking changes~~ improvements. See below.).


```javascript
import { JSONParser } from '@streamparser/json';

const parser = new JSONParser();
```

It takes the same options as the tokenizer.

This class is just for convenience. In reality, it simply connects the tokenizer and the parser:

```javascript
const tokenizer = new Tokenizer(opts);
const tokenParser = new TokenParser();
tokenizer.onToken = this.tokenParser.write.bind(this.parser);
tokenParser.onValue = (value) => { /* Process values */ }
```

#### Properties & Methods

* **write(token: TokenType, value: any)** alias to the Tokenizer write method.
* **end()** alias to the Tokenizer end method.
* **isEnded** readonly boolean property indicating whether the JSONparser is ended or is still accepting data.
* **onToken(token: TokenType, value: any, offset: number)** alias to the Tokenizer onToken method. (write only).
* **onValue(value: any)** alias to the Token Parser onValue method (write only).
* **onError(err: Error)** alias to the Tokenizer/Token Parser onError method  (write only).
* **onEnd()** alias to the Tokenizer onEnd method (which will call the Token Parser onEnd methods) (write only).
 
```javascript
// You can override the overridable methods by creating your own class extending Tokenizer
class MyJsonParser extends JSONParser {
  onToken(value: any) {
    // ...
  }
  onValue(value: any) {
    // ...
  }
}

const myJsonParser = new MyJsonParser();

// or just overriding it
const jsonParser = new JSONParser();
jsonParser.onToken = (token, value, offset) => { ... };
jsonParser.onValue = (value) => { ... };
```

## Usage

You can use both components independently as

```javascript
const tokenizer = new Tokenizer(opts);
const tokenParser = new TokenParser();
this.tokenizer.onToken = this.tokenParser.write.bind(this.tokenParser);
```

You push data using the `write` method which takes a string or an array-like object.

You can subscribe to the resulting data using the 

```javascript
import { JSONParser } from '@streamparser/json';

const parser = new JSONParser({ stringBufferSize: undefined, paths: ['$'] });
parser.onValue = console.log;

parser.write('"Hello world!"'); // logs "Hello world!"

// Or passing the stream in several chunks 
parser.write('"');
parser.write('Hello');
parser.write(' ');
parser.write('world!');
parser.write('"');// logs "Hello world!"
```

Write is always a synchronous operation so any error during the parsing of the stream will be thrown during the write operation. After an error, the parser can't continue parsing.

```javascript
import { JSONParser } from '@streamparser/json';

const parser = new JSONParser({ stringBufferSize: undefined });
parser.onValue = console.log;

try {
  parser.write('"""');
} catch (err) {
  console.log(err); // logs 
}
```

You can also handle errors using callbacks:

```javascript
import { JSONParser } from '@streamparser/json';

const parser = new JSONParser({ stringBufferSize: undefined });
parser.onValue = console.log;
parser.onError = console.error;

parser.write('"""');
```

## Examples

### Stream-parsing a fetch request returning a JSONstream

Imagine an endpoint that send a large amount of JSON objects one after the other (`{"id":1}{"id":2}{"id":3}...`).

```js
  import { JSONParser} from '@streamparser/json';

  const jsonparser = new JSONParser();
  jsonparser.onValue = (value, key, parent, stack) => {
	if (stack > 0) return; // ignore inner values
    // TODO process element
  }

  const response = await fetch('http://example.com/');
  const reader = response.body.getReader();
  while(true) {
    const { done, value } = await reader.read();
    if (done) break;
    jsonparser.write(value);
  }
```


### Stream-parsing a fetch request returning a JSON array

Imagine an endpoint that send a large amount of JSON objects one after the other (`[{"id":1},{"id":2},{"id":3},...]`).

```js
  import { JSONParser } from '@streamparser/json';

  const jsonparser = new JSONParser({ stringBufferSize: undefined, paths: ['$.*'] });
  jsonparser.onValue = (value, key, parent, stack) => {
    if (stack.length === 0) /* We are done. Exit. */; 
    // By default, the parser keeps all the child elements in memory until the root parent is emitted.
    // Let's delete the objects after processing them in order to optimize memory.
    delete parent[key];
    // TODO process `value` which will be each of the values in the array.
  }

  const response = await fetch('http://example.com/');
  const reader = response.body.getReader();
  while(true) {
    const { done, value } = await reader.read();
    if (done) break;
    jsonparser.write(value);
  }
```

## Why building this if we have JSONparse

JSONParser was awesome.... in 2011.

@streamparser/json strengths include:

* As performant as the original an even faster in some cases.
* Works on the browser.
* Allows selector of what to emit.
* Well documented.
* Better designed and more plugable/configurable by clearly separating the tokenizer and token parser processes.
* Simpler and cleaner code. Uses ES6 and doesn't rely on deprecated Node.js methods.
* 100% unit test coverage.
* Fully compliant with the JSON spec. You will always get the same result as using `JSON.parse()`.


### ~~Breaking changes~~ Improvements compared to JSONparse

* JSONparse errors keep big number as a string which is not compliant with the spec. With @streamparser/json you can achieve such behaviour by simply overriding the `parseNumber` method.
* JSONparse errors on characters above 244 which is not compliant with the spec. @streamparser/json parsed them correctly.
* JSONparse incorrectly allows trailing comas in objects or arrays which is not compliant with the spec. @streamparser/json do not.
* JSONparse's uses the `onError` callback to handle errors. Since the `write` method is synchronous, @streamparser/json defaults to throwing on error, so wrapping the write operation in a try-catch block captures all possible errors. If the `onError` callback is set, nothing is thrown.
* JSONparse uses buffers to parse strings to avoid memory exhaustion if your JSON include very long strings (due to V8 optimizations). This has a performance impact and it is not necessary for most use cases. @streamparser/json uses a string as internal buffer by default to improve performance and allows the user to get the exact same behaviour as in JSONparse by setting the `stringBufferSize` option to `64 * 1024`.
* JSONparse parses all valid JSON objects that come through the stream and doesn't support ending the processing. @streamparser/json ends the processing after a single object unless the user explicitly configure a `separator`. When using a separator, the user can end the processing by calling the `end` method which will end the processing and throw and error if the stream is in the middle of parsing something i.e. the JSON passed so far was incomplete/incorrect. Users can use the `onEnd` callback to act when the processing ends.
* JSONparse will fail to emit a number until is followed by a non-numeric character, i.e. it will not parse a single number which is valid JSON. @streamparser/json uses the `end` method to emit any possible number that was being parsed before completely ending the processing.