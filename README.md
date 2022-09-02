# multi-purpose
A multi-purpose package with many different functions.

## shibeOnline
Used for images. For example: shibes (a type of dog), birds, cats.
More information in: (https://shibe.online/)
Example:
```js
const {shibeOnline} = require("multi-purpose")
```

## randomNumber
Randomize a given number, send/log to console or get the data.
Example:
```js
const {randomNumber} = require("multi-purpose")
const num = new randomNumber(100).get() // -> get the number

new randomNumber().log() // -> log to console
```

## newDatabase
Used same as quick.db, but have advanced functions.
Documentation: ()
Example:
```js
const {sqliteDatabase} = require("multi-purpose")
const db = new sqliteDatabase()
```