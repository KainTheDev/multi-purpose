class randomNumber {
    constructor(number) {
        this.random = Math.floor(Math.random()*number)
        this.get = function () {
                return this.random
    }
        this.log = function () {
            console.log(this.random)
        }
    }
}
module.exports = randomNumber