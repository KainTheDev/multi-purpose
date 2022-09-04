# multi-purpose
A multi-purpose package with many different functions.

## profilePictures
Used for generating a random profile picture and send it back as an array.<br>
More profile pictures: [pfps.gg](https://pfps.gg/)<br>
Example:
```js
const {profilePictures} = require("multi-purpose")
console.log(profilePictures())
```

## shibeOnline
Used for images. For example: shibes (a type of dog), birds, cats.<br>
More information: [shibe.online](https://shibe.online/)<br>
Example:
```js
const {shibeOnline} = require("multi-purpose")
const shibe = new shibeOnline("shibes") // *there's other choices, for example: shibes, birds, cats
const image = await shibe.json()
console.log(image)
```
_or you can use .then() method_
```js
const {shibeOnline} = require("multi-purpose")
const shibe = new shibeOnline("shibes") // *there's other choices, for example: shibes, birds, cats
shibe.json().then(image => console.log(image))
```

## randomNumber
Randomize a given number, send/log to console or get the data.<br>
Example:
```js
const {randomNumber} = require("multi-purpose")
const num = new randomNumber(100).get() // -> get the number
```
_Or log to console directly_
```js
const {randomNumber} = require("multi-purpose")
new randomNumber(100).log() // -> log to console
```