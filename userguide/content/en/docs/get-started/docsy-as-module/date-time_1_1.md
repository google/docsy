```js
let date = new Date()
let customDate = new Date('2018', '6', '5')
console.log(customDate)
console.log(date) // date and time
console.log(date.getFullYear())
console.log(date.getMonth()) // 0 based
console.log(date.getDate()) // day
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

date.setDate(date.getDate() + 3) // adding days to date
console.log(date)

date.setHours(date.getHours() + 1) // adding hours
console.log(date)

// date.setMinutes(getMinutes() + )
// date.setSeconds(getSeconds() + )
// date.setFullYear(2025)
// date.setMonth(11)
// date.setDate(15) // setting day

```