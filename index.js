const functions = ["randomNumber", "shibeOnline", "translateText", "randomName"]
const randomNumber = require("./functions/"+functions[0])
const shibeOnline = require("./functions/"+functions[1])
const translateText = require("./functions/"+functions[2])
const randomName = require("./functions/"+functions[3])

module.exports = {randomNumber, shibeOnline, translateText, randomName}