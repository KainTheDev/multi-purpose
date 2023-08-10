# Multi-Purpose Utility Package

Looking for a package with a plethora of functionalities? Check out our Multi-Purpose package!

## ShibeOnline

Dive into adorable animal images. Whether you love shibes, birds, or cats, ShibeOnline offers an enchanting collection. For more, visit [shibe.online](https://shibe.online/).

Example:
```javascript
const shibe = await shibeOnline("shibes"); // Try other options like Birds and Cats
const json = await shibe.json(); // Get JSON
console.log(json); // Console display
```
_Or, use `.then()` method_
```javascript
shibeOnline("shibes").then(data => data.json().then(console.log)); // Console display
```

## Randomness

Experience the thrill of randomness with `randomNumber`. Generate within a specified range.

Example:
```javascript
const num = await randomNumber(100); // Get random number
console.log(num); // Console display
```
_Or, simplify with `.then()` method_
```javascript
randomNumber(100).then(console.log); // Console display
```

## Translate Text

Overcome language barriers effortlessly with `translateText`. Translate between languages.

Example:
```javascript
const translated = await translateText({ text: "hola", from: "spanish", to: "english" }); // Get translated text
console.log(translated); // Console display
```
_Or, use `.then()` method_
```javascript
translateText({ text: "hola", from: "spanish", to: "english" }).then(console.log); // Console display
```

## Random Names

Explore boy or girl names with `randomName`. Customize with your list.

Additional Information:
- [boyNames](https://www.verywellfamily.com/top-1000-baby-boy-names-2757618)
- [girlNames](https://www.verywellfamily.com/top-1000-baby-girl-names-2757832)

Example:
```javascript
const name = await randomName({ String: true }); // Options: JSON, Array
console.log(name); // Console display
```
_Or, directly log the result_
```javascript
randomName({ names_list: ["Paul", "John", "James", "Kyle", "Axel"], String: true }).then(console.log); // Console display
```

## Truths or Dares

Have a blast with `truthOrDare`. Choose between truths and dares for an exciting experience.

Example:
```javascript
const selectedChallenge = await truthOrDare(maxValues = 1); // Get challenge

// Additional options: onlyTruth or onlyDare.

console.log(selectedChallenge); // Console display
```
_Or, use `.then()` method_
```javascript
truthOrDare(maxValues = 1).then(console.log); // Console display
```