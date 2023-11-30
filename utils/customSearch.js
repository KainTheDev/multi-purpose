const { default: fetch } = require('node-fetch');
/**
 * 
 * @param {String} query query to search
 * @param {{safe_search: boolean, image_search: boolean, image_size: 'huge' | 'icon' | 'large' | 'medium' | 'small' | 'xlarge' | 'xxlarge'}} config configure other options. More information: https://developers.google.com/custom-search/v1/reference/rest
 * @param {String} apiKey API key from googleapis
 * @param {String} searchEngineId search engine ID from googleapis
 * @returns {JSON}
 */
async function customSearch(query, apiKey, searchEngineId, config = {}) {
  let safeSearchOption;
  if(config['safe_search'] === true) safeSearchOption = '&safe=active'
  if(config['safe_search'] === false) safeSearchOption = '&safe=off'
  if(config['safe_search'] === undefined) safeSearchOption = ''
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}${config['image_search'] ? `&searchType=image` : ''}${safeSearchOption}${config['image_size'] ? `&imgSize=${config['image_size']}` : ''}`;
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