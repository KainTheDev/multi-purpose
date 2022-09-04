const functions = ["randomNumber", "shibeOnline", "profilePictures"]
const value = []
functions.map(i => {
  value.push(require(`./functions/${i}`))
})
for (i in functions) {
  eval(`var ${functions[i]} = ${value[i].toString()}`)
  eval(`var ${functions[i]} = eval("${functions[i]}")`)
}
 eval(`var FUNCTIONS = {${functions.join(", ")}}`)

module.exports = FUNCTIONS