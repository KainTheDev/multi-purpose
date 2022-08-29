class randomNumber {
    constructor(number) {
        this.get = function (percentage) {
            const random = Math.floor(Math.random()*number)
          switch(percentage) {
            case !percentage:
                return random
            break;
            case percentage:
                return random * percentage/100
        }
          
        }
    }
}
const num = new randomNumber(100)
console.log(num.get(200))