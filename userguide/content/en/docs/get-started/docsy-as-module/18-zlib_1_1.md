### zlib
- here we will just look at the concept of chaining with pipe method using zlib moudle
- it provides compression functionality implemented using Gzip algorithm
- it allows us to create zlib files
- it has a built in transform stream
```js
const zlib = require("node:zlib")

const gzib = zlib.createGzip()
const readableStream = fs.createReadstream("./file1", {
    encoding: "utf-8",
    highWaterMark:2
    }
)

// this returns a tranform stream
readableStream.pipe(gzip)
.pipe(fs.writeStream("./file2.txt.gz"))
```