const { QuickDB } = require("quick.db")
const db = new QuickDB()
class sqliteDatabase {
  constructor() {
    this.table = db.table
    this.all =db.all
    this.set = db.set
    this.get = db.get
    this.push = db.push
    this.delete = db.delete
    this.deleteAll = db.deleteAll
    this.add = db.add
    this.subtract = db.subtract
    this.has = db.has
    this.pull = db.pull
  }
}
module.exports = sqliteDatabase