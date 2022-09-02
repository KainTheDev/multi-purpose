const functions = ["randomNumber", "shibeOnline"]
const value = []
functions.map(i => {
  value.push(require(`./functions/${i}`))
})
for (i in functions) {
  eval(`var ${functions[i]} = ${value[i].toString()}`)
  eval(`var ${functions[i]} = eval("${functions[i]}")`)
}
 eval(`var FUNCTIONS = {${functions.join(", ")}}`)
//export functions
module.exports = FUNCTIONS