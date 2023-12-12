const { default: fetch } = require("node-fetch");

/**
 * @param {"firstname" | "surname" | "fullname"} [type]
 * @param {number} [amount] 
 * @param {Array} Your_names_list 
 * @returns 
 */
async function randomName(type='fullname', amount=5000, Your_names_list) {
  if (Your_names_list && typeof Your_names_list !== "object") throw console.trace("Your_names_list parameter must be array.");
  if(amount > 5000) throw console.trace('Amount must be under or equal to 5000.');
  const response = await fetch(`https://randommer.io/api/Name?nameType=${type}&quantity=${amount}`, {
    headers: {
      'X-Api-Key': '21bd79236f314f828fd25ad415ae5c3f'
    }
  })
  const data = await response.json()
  if (data.status) throw console.trace(data);
  const nameList = data
  return nameList[Math.floor(Math.random() * nameList.length)]
}

module.exports = randomName