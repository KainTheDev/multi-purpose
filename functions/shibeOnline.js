class shibeOnline {
constructor(option) {
  const options = ["shibes", "birds", "cats"]
  switch (option) {
    case !Boolean(options.find(name => name===option)):
      return console.log("Invalid option!")
      
  }
  const Fetch = function (option_2) {
    const fetch = require("node-fetch")
    var data;

      if(option_2 === "json") data = fetch(`http://shibe.online/api/${option}?count=1&urls=true&httpsUrls=true`)
    .then(response => response.json())
      if(option_2 === "string") data = fetch(`http://shibe.online/api/${option}?count=1&urls=true&httpsUrls=true`)
    .then(response => response.text())
    
    return data
  }
  this.json = function () {
    return Fetch("json")
  }
  this.string = function () {
    return Fetch("string")
  }
}
}
module.exports = shibeOnline