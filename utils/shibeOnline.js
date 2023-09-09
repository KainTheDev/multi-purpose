/**
 * 
 * @param {string} option options for which type of image / json data will be fetched. Available options: shibes, birds, cats.
 * @returns 
 */
async function shibeOnline (option) {
  const options = ["shibes", "birds", "cats"]
  if(!option) console.trace("Missing paremeter: option."), process.exit(0);
  else if(!option in options) {
    console.trace("Invalid option provided. Available options:\n- "+options.join(", ")), process.exit(0);
  }
  const Fetch = async function (type) {
    const fetch = require("node-fetch")
    var data;

      if(type === "json") data = fetch(`http://shibe.online/api/${option}?count=1&urls=true&httpsUrls=true`)
    .then(response => response.json())
      if(type === "string") data = fetch(`http://shibe.online/api/${option}?count=1&urls=true&httpsUrls=true`)
    .then(response => response.text())
    
    return data
  }
  const object = {}
  object.json = async function () {
    return Fetch("json")
  }
  object.string = async function () {
    return Fetch("string")
  }
  return object
}
module.exports = shibeOnline