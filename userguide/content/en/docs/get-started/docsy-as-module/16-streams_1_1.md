### Streams
- revies stream and buffer file-12
- steams is infact a built-in module that inherits from the event emitter calss
- we rarely use streams directly, other modules internally use streams for their functioning
- fs module uses streams to read and write data

### Example
- we will create 2 files, <mark>file1.txt and file2.txt</mar> and then we will transfere file1 content to file2

```js
const fs = require("node:fs")
```

### createReadStream()
- to read data we use <mark>readable stream</mark> using createReadStream()
- it accept the <mark>filePath</mark> and an <mark>Options-Object</mark>
```js
const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8"
})
```
- this readable stream now will read data in chunks from file.txt

### createWriteStream()
- to create writable stream
- it accept the <mark>filePath</mark>
```js
const wirtableStream = fs.createWriteStream("./file2.txt")
```

- streams extends from eventEmitter class which allows us to add listeners to events
- the readable stream emit a data event to which we can listen
```js
readableStream.on("data", (chunk) => {
    console.log(chunk)
    writableStream.write(chunk)
})
```
> [!NOTE]
> now if your file1.txt is small the chunk will be the whole file, because the buffer that streams use has a default size of 64 kilobytes, if you want to see the data being read and transferred in chunk you can set another option when you read the data <mark>highWaterMark: size</mark>
```js
const readableStream = fs.createReadStream("filePath", {
    encoding: "utf-8",
    highWaterMark: 2
})
readableStream.on("data", (chunk) => {
    console.log(chunk)
    writableStream.write(chunk)
})
```
- now you will notice that the data being logged to the console is 2 characters at a time which indicates that data is being read and transfered to  file2 2-characters at a time

### Types of streams
1. **Readable stream** from which data can be read
2. **writable stream** to which we can write data
3. **Duplex stream** that are both readable and writable
4. **Transform stream** that can modify or transform the data as it is written and read

### **examples**
- reading from a file as a <mark>readable stream</mark>
- wirting to a file as <mark>writable stream</mark>
- sockets as a <mark>duplex stream</mark>
- file compression where you can write compressed data and read de-compressed data to and from a file as a <mark>transform stream</mark>

### sum
> [!IMPORTANT]
> the concept of <mark>streams</mark> allows us to work with small chunks of data rather than large amount of data at once