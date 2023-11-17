const { default: fetch } = require('node-fetch');
/**
 * 
 * @param {String} query query to search
 * @param {boolean} imageSearchOption toggle if results should be image or not
 * @param {String} apiKey API key from googleapis
 * @param {String} searchEngineId search engine ID from googleapis
 * @returns {JSON}
 */
async function customSearch(query, apiKey, searchEngineId, imageSearchOption) {
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}${imageSearchOption ? `&searchType=image` : ''}&key=${apiKey}&cx=${searchEngineId}`;
  return fetch(apiUrl)
    .then(async response => {
      const data = await response.json()
      return data;
    })
    .catch(error => {
      console.trace('Error fetching image search results: ' + error.message), process.exit(0);
    });
}

module.exports = customSearch