
let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)


// another way to use setTimeout - no anonymous function now
const doSomething = function(){
    console.log("something")
}

setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds



// setInterval(function() {
//     console.log(new Date())
// }, 1000)


 

/// Arrow functions \\\


const greet = () => {
    console.log("Hello there")
} 
    // same as = 
    // const greet = function() {
    //     console.log("Hello there")
    // }

greet();



// Arrow functions have an even shorter version for when the function body is one line
const greet2 = (name) => console.log("Hello there, " + name)
greet2("Jolene") //prints "Hello there, Jolene"


// or like that- when we only have 1 parameter
const greet3 = name => console.log("Hello there, " + name)
greet3("Jolene") //prints "Hello there, Jolene"


const square = num => console.log(num*num);
square(4) // should print 16




// works with return as well
const add = (x, y) => {
    return x + y
}
const sum = add(1, 2) 
console.log(sum) //prints 3



// If the function block is only one line - we don’t even need the return keyword
const add2 = (x, y) => x + y

const sum2 = add2(1, 2) 
console.log(sum2) //prints 3



// if you have a more complicated function, you still need curly braces and return
const getHypotenuse = (a, b) => {
    const aSquared = a * a
    const bSquared = b * b
    const cSquared = aSquared + bSquared
    return Math.sqrt(cSquared)
}

const hypoteneuese = getHypotenuse(3, 4) 
console.log(hypoteneuese ) //prints 5


const getFormalTitle = (first, last) => first + " " + last

formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"





// THIS\\


// arrow functions do not create their own this contex
// in this example -  since “no one” called the function, this will just be the general window object, and this.name will be undefined.
const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(function () { //normal function
            console.log("The name is: " + this.name)
        }, 3000)

    }
}
suspenseBuilder.displayName()



// If we rewrite the callback as an arrow function, like this:
const suspenseBuilder2 = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(() => { //this is the change
            console.log("The name is: " + this.name)
        }, 3000)

    }
}
suspenseBuilder2.displayName()
// This works because in arrow functions, this is determined by lexical scope. That just means that it doesn’t matter who called the
// function, but rather where it was called - the context of the function.

////  other solutions:
// .bind()  -  choose the object .this refers to.
// call the function (which uses this) through the wanted object 


// Do use arrow functions: 
// * when we want to refer the context, and not the object
// * iterator methode (filter, maps, etc)
// * simple functions
