# multi-purpose
A multi-purpose package with many different functions.

## shibeOnline
Used for images. For example: shibes (a type of dog), birds, cats.<br>
More information in: [shibe.online](https://shibe.online/)<br>
Example:
```js
const {shibeOnline} = require("multi-purpose")
const shibe = new shibeOnline("shibes") // *there's other choices, for example: shibes, birds, cats

//async/await method
const image = await shibe.json()
console.log(image)


//or you can use .then() method
shibe.json().then(image => console.log(image))
```

## randomNumber
Randomize a given number, send/log to console or get the data.<br>
Example:
```js
const {randomNumber} = require("multi-purpose")

const num = new randomNumber(100).get() // -> get the number

new randomNumber().log() // -> log to console
```