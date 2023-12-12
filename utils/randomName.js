const { default: fetch } = require("node-fetch");

/**
 * @param {"firstname" | "surname" | "fullname"} [type]
 * @param {string} apiKey 
 * @param {Array} Your_names_list
 * @returns 
 */
async function randomName(type = 'fullname', apiKey, Your_names_list) {
  if (Your_names_list && typeof Your_names_list !== "object" && !Your_names_list.length) throw console.trace("Your_names_list parameter must be array.");
  const response = await fetch(`https://randommer.io/api/Name?nameType=${type}&quantity=${amount}`, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
  const data = await response.json()
  if (data.status) throw console.trace(data);
  const namesList = data
  for (const name of Your_names_list) {
    namesList.push(name)
  }
  return namesList[Math.floor(Math.random() * namesList.length)]
}

module.exports = randomName