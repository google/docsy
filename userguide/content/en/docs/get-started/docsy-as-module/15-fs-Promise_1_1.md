### promise based fs module
```js
const fs = reqire('node:fs/promises');
```
- you can add then and catch blocks
- then execute when no error occur, catch execute when error occur
```js
fs.readFile("filePath", "utf-8")
.then(data => console.log(data))
.catch(error => console.log(error))
```
- it can also be used with async await
- async await is just a syntactical wrapper over promises
- top level await can only be used in moudles <mark>.mjs</mark>
- you can use async function in .js
```js
async function readFile(){
    try {
        const data = await fs.readFile("file", "utf-8")
        console.log("data")
    } catch(err) {
        console.log(err)
    }
}
```