# Package Documentation

This document provides an overview of the functions and methods available of the multi-purpose package. You will find details on how to use each code snippet, examples, and explanations.

## `customSearch`

### Description
The `customSearch` function allows you to perform a custom Google search using the Google Custom Search API.

### Parameters
- `query` (String): The query to search.
- `apiKey` (String): API key from googleapis.
- `searchEngineId` (String): Search engine ID from googleapis.
- `imageSearchOption` (Boolean, optional): Toggle if results should be images. Default is `false`.

### Usage
```javascript
const customSearch = require('customSearch');

async function searchImages() {
  const query = 'cats';
  const apiKey = 'your-api-key';
  const searchEngineId = 'your-search-engine-id';

  const imageResults = await customSearch(query, apiKey, searchEngineId, true);
  console.log(imageResults);
}

searchImages();
```

## `randomName`

### Description
The `randomName` function generates random names based on a provided list of names.

### Parameters
- `Your_names_list` (Array, optional): A custom names list.
- `type` (String, optional): The response type. It can be 'string', 'array', or 'JSON'.

### Usage
```javascript
const randomName = require('randomName');

async function generateRandomName() {
  const customNames = ['Alice', 'Bob', 'Charlie'];
  const response = await randomName(customNames, 'array');
  console.log(response);
}

generateRandomName();
```

## `randomNumber`

### Description
The `randomNumber` function generates a random number.

### Parameters
- `number` (Number): The maximum value for generating a random number.

### Usage
```javascript
const randomNumber = require('randomNumber');

async function generateRandomNumber() {
  const max = 100;
  const random = await randomNumber(max);
  console.log(random);
}

generateRandomNumber();
```

## `randomTOD`

### Description
The `randomTOD` function provides a random truth or dare from predefined lists.

### Parameters
- `maxValues` (Number, optional): Configure how many truths or dares to fetch. Default is 1.
- `onlyTruth` (Boolean, optional): Returns only truths. Default is `false`.
- `onlyDare` (Boolean, optional): Returns only dares. Default is `false`.

### Usage
```javascript
const randomTOD = require('randomTOD');

async function getRandomTOD() {
  const maxValues = 2;
  const truths = await randomTOD(maxValues, true);
  console.log(truths);
}

getRandomTOD();
```

## `shibeOnline`

### Description
The `shibeOnline` function fetches images or text data of shibes, birds, or cats from shibe.online API.

### Parameters
- `option` (String): Options for the type of data to fetch. Available options: 'shibes', 'birds', 'cats'.

### Usage
```javascript
const shibeOnline = require('shibeOnline');

async function fetchShibeImage() {
  const option = 'shibes';

  const imageData = await shibeOnline(option).string();
  console.log(imageData);
}

fetchShibeImage();
```

## `textDatabase`

### Description
The `textDatabase` class provides methods for storing and retrieving data using an external database API.

### Methods
- `get(key)`: Get the value associated with a specific key.
- `get_all()`: Get all data.
- `set(key, value)`: Set a value for a specific key.
- `delete(key)`: Delete a value associated with a specific key.
- `delete_all()`: Delete all data.

### Usage
```javascript
const textDatabase = require('textDatabase');

const database = new textDatabase('your-database-id');

async function manageData() {
  await database.set('name', 'John');
  const name = await database.get('name');
  console.log(name);
}

manageData();
```

This documentation provides a comprehensive guide on how to use the functions and classes in the multi-purpose package. Make sure to replace the placeholder values with your actual API keys, IDs, and data.


