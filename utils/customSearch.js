const axios = require('axios');
/**
 * 
 * @param {String} query query to search
 * @param {boolean} imageSearchOption toggle if results should be image or not
 * @param {String} apiKey API key from googleapis
 * @param {String} searchEngineId search engine ID from googleapis
 * @returns 
 */
async function customSearch(query, apiKey, searchEngineId, imageSearchOption) {
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}${imageSearchOption ? `&searchType=image` : ''}&key=${apiKey}&cx=${searchEngineId}`;
  return axios.get(apiUrl)
    .then(response => {
      const items = response.data.items;
      const imageResults = items.map(item => item)
      return imageResults;
    })
    .catch(error => {
      console.trace('Error fetching image search results: ' + error.message), process.exit(0);
    });
}

module.exports = customSearch