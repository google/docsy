### libuv
- is a cross platform open source library written in C language
- it handles asynchronous non-blocking operation in nodejs
- it does that by using Tread Pool and Event loop

### Thread Pool
- there is a conversation between js main thread and libuv when main thread encounters an asynchronous operation.
- libuv has a pool of threads that can run some of these time consuming tasks, when the task is done the file contents are retrieved and the associated callback function can be run
- every method in nodejs that has the <mark>sync</mark>suffix always runs on the main thread and is blocking
- a few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread in libuv's thread pool, they do run synchronously in their own thread but as fas as the main thread is concerned, it appears as if the method is running asynchronously
- libuv thread pool has 4 threads in total (4 async operation at a time)
- you can increase the thread pool size by setting process environmental variable to you can run multiple calls of an asynchronous methods
```js
process.env.UV_THREADPOOl_SIZE = 5
```
> [!caution]
> don't increase pool size beyond the number of your cpu cores

- watch [this](https://youtu.be/I1sqnbJ1Fno?si=SGW1DyF2AtVtu2lw) and [this](https://youtu.be/3JYNNf3Iljo?si=4Fbx7DLkXTq5QrHV)

## Event loop
watch [this](https://youtu.be/L18RHG2DwwA?si=2PEaTZbAqh0vwdyC)