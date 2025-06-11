### json
- responding to a request with json data
- we can't send js object as it is as a response, we will get an error, we should convert it first to json format using <mark>JSON.stringfy()</mark> we also have to specify the content-Type as <mark>application/json</mark>
```js
const server = http.createServer((req, res) => {
    const MMA = {
        firstName: "mostafa",
        middleName: "mahmoud",
        lastName: "abokhadra"
    }
    res.writeHead(200, {"content-Type": "application/json"})
    res.end(JSON.stringfy(MMA))
    res.end(MMA) // wrong will produce error, instead
})
```
- you can convert it back to object using <mark>JSON.parse()</mark>
- now we have one endPoint <mark>localhost:3000</mark> that returns some json data? YUP you have written you first API with nodeJS
- not just the browser, any server that is able to make a request can now get this data from our application