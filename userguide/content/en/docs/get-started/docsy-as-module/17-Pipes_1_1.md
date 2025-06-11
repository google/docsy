### Pipes
- in a real world pip, there is a tank خزان that is connected to the tap الحنفيه via the pipe الماسوره
- in nodeJS we are reading water(data) from the tank(readableStream) and writing it to the sink(writableStream) via a <mark>Pipe</mar>
- we use the <mark>pipe</mark> method on readable stream to connect it with wirtable stream
- pipes is a simpler and easier way to implement readable and writable streams

```js
readableStream.pipe(writableStream)
```
- pipe returns the destenation stream which enables chaining, but the the destination stream has to be <mark>readable, duplex or transform</mark> stream, in the above example we have a writable stream so we can't chain by calling pipe again
