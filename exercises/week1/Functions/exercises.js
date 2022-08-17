
// Q1
function isEven(num) {
    return num%2===0;
}
console.log(isEven(9))
console.log(isEven(4))



// Q2
const printOdd = function(arr) {
    for(let n in arr){
        if(!isEven(arr[n])) {
            console.log(arr[n])
        }
    }
}
printOdd([2,3,4,5])



// Q3
const isInArr = function(arr, num) {
    for(let n in arr){
        if(arr[n] === num) {
            return true;
        }
    }
    return false;
}
console.log(isInArr([2,3,4,5], 2));



// Q4
const calculator = {
    add: function(n1, n2) {
        return n1+n2;
    },
    substract: function(n1, n2) {
        return n1-n2;
    }
}



// Q5
const increaseByNameLength = function(money, name) {
    return name.length * money
}

const makeRegal = function(name) {
    return "His Royal Highness, " + name;
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 
// should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

