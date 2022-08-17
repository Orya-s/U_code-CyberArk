console.log("Hello, world!")


console.log((5 > 2) && false) 
console.log(!("knife" === "sword")) 


// (5 > 2) && false  // f
// !("knife" === "sword")  // t
// (1 < 2) || (-1 > -1) || !false  // t
// ""  // f
// (31 % 5) == "1"  // t
// !!true  // t
// "5th Avenue" != "5th Avenue"  // f
// 52 !== "52"  // t
// (undefined || null)  // f


let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a, b, c)


// let username = prompt("What is your username?")
// console.log(username)


// tesla exercise
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

// if (isUSCitizen) {
//     if(boughtTesla && currentYear-yearOfTeslaPurchase <= 4) {
//         console.log("Would you like an upgrade?")
//     } 
//     else if(boughtTesla) {
//         console.log("Are you satisfied with your car?")
//     }
//     else {
//         console.log("Would you like to move to the US?")
//     }
// }
// else {
//     console.log("Are you intrested in buying a tesla?")
// }


// JS BASICS

// ex 9

if (boughtTesla) {
    if (isUSCitizen) {
        if (currentYear-yearOfTeslaPurchase <= 4) {
            console.log("Would you like an upgrade?")
        }
        else {
            console.log("Are you satisfied with your car?")
        }
    }
    else {
        console.log("Would you like to move to the US?")
    }
}
else {
    console.log("Are you intrested in buying a Tesla?")
}


// array exercise
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2)
// [1,4,5,6,7,8,9,10]
numbers.splice(3,1,1)   // == numbers[3] = 1
// [1,4,5,1,7,8,9,10]
numbers.splice(4,4)  // == number.splice(4)  => deletes untill the end of the array
// [1,4,5,1]
numbers.splice(0,0,0)  // == numbers.unshift(num)
// [0,1,4,5,1]

console.log(numbers)



const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
}
console.log(animalCounts)

//Suddenly the zoo acquired two dozen eagles
animalCounts.eagle = 24
console.log(animalCounts)


// object exercise 1
const p1 = {
    name: "Jill",
    age: 32,
    city: "NYC"
}
const p2 = {
    name: "Robert",
    age: 34,
    city: "NYC" 
}

if(p1.age == p2.age) {
    if(p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    }
    else {
        console.log("Jill wanted to date Robert, but couldn't")
    }
}


// object exercise 2
const b1 = {
    title: "A",
    author: "a"
}
const b2 = {
    title: "B",
    author: "b"
}
const library = {
    books: [b1, b2]
}

console.log(library)


// object exercise 3
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}
  
const newRes = Object.fromEntries(
    Object.entries(reservations).map(([k, v]) => [k.toLowerCase(), v])
);
const name = prompt('Please enter the name for your reservation').toLowerCase();
if(name in newRes) {
    if (!newRes[name]["claimed"]) { 
        alert("Welcome, " + name);
    }
    else {
        alert("Hmm, someone already claimed this reservation")
    }
}
else {
    // alert("You have no reservation");
    newRes[name] = { claimed: true }
}
console.log(newRes);



const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

// if () {

// } else {

// }



// loops exercises
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(n in names) {
    people.push({name: names[n], age: ages[n]});
}
console.log(people);


for(p of people) {
    console.log(p.name + " is " + p.age + " years old.")
}


const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]

for(i in posts) {
    if(posts[i].id === 2) {
        posts.splice(i, 1);
        break;
    }
}
console.log(posts);

const posts2 = [
    {
        id: 1, 
        text: "Love this product",
        comments: []
    },
    { 
        id: 2, 
        text: "This is the worst. DON'T BUY!", 
        comments: [
                    {id: 1, text: "Idiot has no idea"}, 
                    {id: 2, text:"Fool!"}, 
                    {id: 3, text: "I agree!"}
                ]
    },
    {
        id: 3, 
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for(i in posts2) {
    if(posts2[i].id === 2) {
        let arr = posts2[i].comments;
        for(c in arr) {
            if(arr[c].id === 3) {
                arr.splice(c, 1);
            }
        }
    }
}
console.log(posts2);







// scope Q1

const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

//console.log("Damn, you see this gal? She ran " + distance + " miles") 

// error - line 152 , dist is only defined in if scope


// scope Q2

if (13 == "space") {
    let cowSound = "moo"
}
else {
   // console.log("Cow says " + cowSound)
}

// error - cow cowSound is only defined in if scope


// scope Q3

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

// no error. console log = 'Served a special fish', ...


// scope Q4

const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    // console.log("Planting the " + seed + " inside a " + pot)
}

plant()

// error - seed undefined, only defined in getSeed func


// scope Q5

const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return 0 //found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

// error - found undefined , only defined in if scope


// scope Q6

let isEnough = false//const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

// error - can't chane isEnough - it's a const (bool should always be let)



// functions exercises

function isEven(num) {
    return num%2===0;
}
console.log(isEven(9))
console.log(isEven(4))


const printOdd = function(arr) {
    for(let n in arr){
        if(!isEven(arr[n])) {
            console.log(arr[n])
        }
    }
}
printOdd([2,3,4,5])


const isInArr = function(arr, num) {
    for(let n in arr){
        if(arr[n] === num) {
            return true;
        }
    }
    return false;
}
console.log(isInArr([2,3,4,5], 2));


const calculator = {
    add: function(n1, n2) {
        return n1+n2;
    },
    substract: function(n1, n2) {
        return n1-n2;
    }
}



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

