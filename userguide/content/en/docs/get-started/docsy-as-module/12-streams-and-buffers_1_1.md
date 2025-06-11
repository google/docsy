### streams
- it is a sequence of data that is being moved from one point to another over time

**Ex:**
- stream of data over the internet being moved from one computer to another
- a stream of data being tranferred from one file to another within the same computer

> [!NOTE]
> in node js the idea is to process streams of data <mark>in chunks</mark> as they arrive instead of waiting for the entire data to be available before processing
- e:g when you watch a youtube video you don't wait for the whole video to be downloaded to start watching it, the data arrives in chunks and you watch in chunks while the rest of the data arrives over time
- e:g when you are transferring file contents from file1 to file 2, you don't wait for the entire file1 content to be saved in temporary memmory before moving it to file 2 , the contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time

in doing so we prevent unnescessary data downloads and memmory usage

**but how exactly do these sequence of data move?**

### Buffer
- it is an area where data wait before send to proccessing
- nodejs can't control the pace at which data arrives in the stream
- it can only decide when is the right time to send the data for processing
- if there is data already processed or too little data to process, node puts the arriving data in a buffer
- it is an intentionally small area that node maintains in the runtime to process a stream of data
- e:g when you stream a video online, if your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing, that will repeat till the stream is finished
- if your connection is slow, after processing the first chunk of data that arrived, the video player will display s aloading spinner which indicates it is waiting for more data to arrive
- once the buffer is filled up and the data is processed, the video player shows the video
- while the video is playing, more data will continue to arrive and wait in the buffer

#### buffer.from()
```js
// holding data in a buffer
const buffer = Buffer.from("Vishwas", 'utf-8')
```

#### buffer.toJSON()
```js
console.log(buffer.toJSON())
```
**output**
```
{ 
    type: 'buffer',
    data: '{
        86, 105, 115,
        104, 119, 79,
        115
    }
}
```
> [!NOTE]
> each number in data key is a <mark>Unicode character code</mark> of the string Vishwas

#### buffer object
```js
console.log(buffer);
```
**output**
```
<Buffer 56 69 73 68 77 61 73>
```
- buffer object contains raw binary data
- But isn't binary just 0 and 1 ? yes it is
- what nodejs is print the hexadecimal representation(base16) of the number, as printing 8 bytes binary format for each number will flood you terminal

#### buffer.toString()
```js
buffer.toString()
```
print the string representation of the binary data in the buffer

#### buffer.write()
```js
buffer.write("code")
```
- buffer now will contatin binary representation of codeafa
- because buffers has limited memmory