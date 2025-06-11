### HTML response
- content-Type is gonna be `text/html`
```js
res.writeHead(200, {"Content-Type": "text/html"})
res.end("<h1>mostafa abokhadra</h1>")
```
but ofcourse we don't send html code as strings in res.end right!, instead we send an html file as a response

### HTML file response
1. create your html file
2. read the file content in your request listener using fs module and store it in a variable
3. send that variable with res.end()
```js
const fs = require("node:fs")
const http = require("node:http")

const server = http.createServer((req, res) =>{
    res.wirteHead(200, {"Content-Type": "text/html"})
    const html = fs.readFileSync("./index.html", "utf-8")
    res.end(html)
})
server.listen(3000, () => {
    console.log("listening")
})
```

readFileSync reads the entire html file at once, if we have a very large html file we stores all that content in a temporary buffer which may lead to unneccessary use of memmory, instead we can rely on streams

```js
fs.createReadStream(__dirName__ + "./index.html").pipe(res)
```