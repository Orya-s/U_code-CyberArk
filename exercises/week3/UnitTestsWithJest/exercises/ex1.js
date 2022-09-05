const { error } = require("console")

class Exercises {
    constructor() {}

    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    // If there are more trues than falses in the array, should return true, otherwise false
    validate(arr) {
        const trueArr = arr.filter(e => e === true)
        const falseArr = arr.filter(e => e === false)
        if(trueArr.length === 0 && falseArr.length === 0) {
            return {error: "Need at least one boolean"}
        }
        return trueArr.length > falseArr.length ? true : false
    }
    
}

module.exports = Exercises 