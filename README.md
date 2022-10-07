# multi-purpose
A multi-purpose package with many different functions.

## shibeOnline
Cute animal pictures & photos. For example: shibes (a type of dog), birds, cats.<br>
More information: [shibe.online](https://shibe.online/)<br>
Example:
```js
const {shibeOnline} = require("multi-purpose")
const shibe = await shibeOnline("shibes") // there's other choices. For example: Birds, cats.
const json = await shibe.json() // -> get the json object
console.log(json) // -> log to console
```
_You can also use .then() method_
```js
const {shibeOnline} = require("multi-purpose")
shibeOnline("shibes").then(data => data.json().then(console.log)) // -> log to console
```

## randomNumber
Randomize a given number.<br>
Example:
```js
const {randomNumber} = require("multi-purpose")
const num = await randomNumber(100) // -> get the number
console.log(num) // -> log to console
```
_You can also log to console directly_
```js
const {randomNumber} = require("multi-purpose")
randomNumber(100).then(console.log) // -> log to console
```

## translateText
Translate a text for you.<br>
Example:
```js
const {translateText} = require("multi-purpose")
const translated = await translateText({text: "hola", from: "spanish", to: "english"}) // -> get the text
console.log(translated) // -> log to console
```
_You can also log to console directly_
```js
const {translateText} = require("multi-purpose")
translateText({text: "hola", from: "spanish", to: "english"}).then(console.log) // -> log to console
```

## randomName
Random boy or girl names.<br>
More information:<br>
[verywellfamily.com/boyNames](https://www.verywellfamily.com/top-1000-baby-boy-names-2757618)<br>
[verywellfamily.com/girlNames](https://www.verywellfamily.com/top-1000-baby-girl-names-2757832)<br>
Example:
```js
const {randomName} = require("multi-purpose")
const name = await randomName({String: true}) // other choices: JSON, Array
console.log(name)
```
### Or you can put your custom names!
```js
const {randomName} = require("multi-purpose")
const name = await randomName({names_list: ["Paul", "John", "James", "Kyle", "Axel"], String: true}) // -> get the randomized name
console.log(name) // -> log to console
```
_You can also log to console directly_
```js
const {randomName} = require("multi-purpose")
randomName({names_list: ["Paul", "John", "James", "Kyle", "Axel"], String: true}).then(console.log) // -> log to console
```