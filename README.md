# multi-purpose
A multi-purpose package with many different functions.

## newDatabase
Example:
```js
const {sqliteDatabase} = require("multi-purpose")
const db = new sqliteDatabase()
```
### Methods:
#### db.table(_name_)
This function adds a number to a key in the database. 
(If no existing number, it will add to 0)
```js
const economy = db.table('economy')
await economy.set('myBalance', 500) // -> 500
await economy.get('myBalance') // -> 500
await db.get('myBalance') // -> null
```
#### db.add(_key_, _number_) -> updatedRow
This function adds a number to a key in the database. 
(If no existing number, it will add to 0)
```js
await db.get('myBalance')
// -> 500

await db.add('myBalance', 250)
// -> 750
```
_Also allows for accessing properties using dot notation_
```js
await db.get('myUser')
// -> { guild: null, balance: 500 }

await db.add('myUser.balance', 250)
// -> { guild: null, balance: 750 }
```
#### db.all() -> array
This function returns the entire active table as an array.
```js
await db.all()
// -> [Array]
```
#### db.delete(_key_) -> boolean
This function deletes the specified key. 
Returns if it was a success or not.
```js
await db.get('myData')
// -> "Hello World!"

await db.delete('myData')
// true
```
_Also allows for accessing properties using dot notation_
```js
await db.get('myUser')
// -> { guild: null, balance: 500 }

await db.delete('myUser.balance')
// -> true

await db.get('myUser')
// -> { guild: null }
```
#### db.deleteAll() -> number
This function delete all there is in the database (or the table)
It returns the numbers of rows deleted
```js
await db.deleteAll() // Removes every thing
```
#### db.get(_key_) -> row
This function returns data from a row based on the key. 
_Alias: .fetch()_
```js
await db.set('myData', 'Hello World!')
// -> 'Hello World!'

await db.get('myData')
// -> 'Hello World!'

// *await db.fetch()
```
_Also allows for accessing properties using dot notation_
```js
await db.set('myUser', { guild: 'Plexi', balance: 500 })
// -> { guild: 'Plexi', balance: 500 }

await db.get('myUser.guild') // -> "Plexi"
await db.get('myUser.balance') // -> 500
await db.get('myUser.notAProp') // -> undefined
```
#### db.has(_key_) -< boolean
This function returns a boolean based on whether an element 
or property exists. _Alias: .exists()_
```js
await db.set('myData', 'Hello World!')
// -> 'Hello World!'

await db.has('myData') // -> true

// *await db.exists()
```
```js
await db.set('myUser', { guild: 'Plexi', balance: 500 })
// -> { guild: 'Plexi', balance: 500 }

await db.has('myUser.guild') // -> true
await db.has('myUser.items') // false
```
#### db.push(_key_, _element_) -> updatedRow
This function will push into an array in the database based on the key. 
(If no existing array, it will create one)
```js
await db.set('myItems', ['Sword', 'Lock'])
// -> ['Sword', 'Lock']

await db.push('myItems', 'Dagger')
// -> ['Sword', 'Lock', 'Dagger']
```
_Also allows for accessing properties using dot notation_
```js
await db.set('myUser', { balance: 500, items: ['Watch', 'Sword'] })
// -> { balance: 500, items: ['Watch', 'Sword'] }

await db.push('myUser.items', 'Dagger')
// -> { balance: 500, items: ['Watch', 'Sword', 'Dagger'] }
```
#### db.pull(_key_, _value_|_array_|_function_) -> updatedRow
This function removes a value from an array (reverse operation from push).
The second parameter can be a simple value, an array or a function.
When used with a function, it will only remove the value when the function returns true
```js
// Example data in the database
await db.set("myArray", ["test", "other test", "third test", "$special test"]);

// Single value example (removing test)
await db.pull("myArray", "test"); // -> ["other test", "third test", "$special test"]

// Array example (remove other test and third test)
await db.pull("myArray", ["other test", "third test"]); // -> ["$special test"]

// Function example (removing items that starts with $)
// First parameter is the item in the array
// The function is executed for each item
await db.pull("myArray", (item) => item.startsWith("$")); // -> []
```
#### db.set(_key_, _data_) -> updatedRow
This function sets new data based on a key in the database. 
(When using dot notation, if the object doesn't exist it'll create one)
```js
await db.set('myData', 'Hello World!') // -> 'Hello World!'
await db.set('myData', 50) // -> 50
await db.set('myData', { foo: 'bar' }) // -> { foo: 'bar' }
```
_Also allows for accessing properties using dot notation_
```js
await db.get('myUser') // -> null

await db.set('myUser.guild.rank', 'Mage') 
// -> { guild: { rank: 'Mage' } }

await db.set('myUser.balance', 500) 
// -> { guild: { rank: 'Mage' }, balance: 500 }

await db.set('myUser.guild.rank', 'Warrior') 
// -> { guild: { rank: 'Warrior' }, balance: 500 }
```
#### db.sub(_key_, _number_) -> updatedRow
This function subtracts a number to a key in the database. 
(If no existing number, it will subtract from 0)
```js
await db.get('myBalance') // -> 500
await db.sub('myBalance', 200) // -> 300
```
_Also allows for accessing properties using dot notation_
```js
await db.get('myUser', { league: 'Gold', XP: 500 }) // -> { league: 'Gold', XP: 500 }
await db.sub('myUser.XP', 200) // -> { league: 'Gold', XP: 300 }
```