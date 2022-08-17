
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