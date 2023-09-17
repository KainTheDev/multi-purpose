const { readFileSync } = require("fs")

/**
 * 
 * @param {Array} Your_names_list custom names list
 * @param  {string} type this parameter is used for defining response type. 3 available types: string, array and JSON
 * @returns
 */
async function randomName (Your_names_list, type) {
  if(Your_names_list && typeof Your_names_list !== "object") console.trace("Your_names_list must be array."), process.exit(0);
  let nameList = readFileSync("data/names.txt", "utf-8").split("\n")
  if(Your_names_list) nameList = Your_names_list
  var result = nameList[Math.floor(Math.random()*nameList.length)]
  if(!type) type === 'string'
  if(type === "string") result = String(result)
  if(type === "array") result = [result]
  if(type === "JSON") result = {name: result}
  return result
}
module.exports = randomName