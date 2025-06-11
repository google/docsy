### Call-Backs
- in js, functions are first class objects
- a function can be passed as an argument to a function
- a function can also be returned as values from other functions
- any function that is passed to another function is called <mark>a call back function </mark> in js
- a function that is accept a function as its argument or returns another function is called <mark>higher order function</mark>

```js
function greet(name) {
    console.log(`Hello ${name}`);
}
function higerOrderFunction(Callback) {
    callback("mostafaAbokhadra")
}
higherOrderFunction(greet)
```
#### why do we need callbacks?

### Types of CallBacks
1. **synchronous**
    - it is a call back which is executed immediately e:g the above example, or functionos that is passed to methods like sort, filter and map
2. **asynchronous**
    - it is often used to continue or resume code execution after an asynchronous operation has completed
    - are used to delay the execution of a function until a particular time or event has occurred
    - in node.js have an asynchronous nature to prevent blocking of execution
    e:g <mark>reading dat from a file, fetching data from a datatbase, handling a network request</mark>
    - e:g of asynchronous call backs in browser like <mark>events handlers</mark>
    ```js
    function callback(){
        document.getElementById("demo").innerHTML = "HelloWorld"
    }
    document.getElementById("btn").addEventListener('click', callback)
    ```
    - in above example js don't immediately run the callback function but wait untill user clicks on the button e:i execution of the callback function is delayed unitll an event occur in the browser
