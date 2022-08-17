
// Variables, Identifiers and Operators

// ex1

console.log((5 > 2) && false)  // f
console.log(!("knife" === "sword"))  // t
console.log((1 < 2) || (-1 > -1) || !false)  // t
console.log("")  // f
console.log((31 % 5) == "1")  // t
console.log(!!true)  // t
console.log("5th Avenue" != "5th Avenue")  // f
console.log(52 !== "52")  // t
console.log((undefined || null))  // f


// ex2

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a, b, c)   // 3,3,3



// Conditional Statements

// ex

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

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



// Arrays

// ex1

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



// Objects

// ex1

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


// ex2

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


// ex3

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
        alert(`Welcome, ${name}`);
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




// Loops

// ex1

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(const n in names) {
    people.push({name: names[n], age: ages[n]});
}
console.log(people);


// ex2

for(const p of people) {
    console.log(p.name + " is " + p.age + " years old.")
}


// ex3

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]

for(const i in posts) {
    if(posts[i].id === 2) {
        posts.splice(i, 1);
        break;
    }
}
console.log(posts);


// ex4

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

for(const i in posts2) {
    if(posts2[i].id === 2) {
        let arr = posts2[i].comments;
        for(const c in arr) {
            if(arr[c].id === 3) {
                arr.splice(c, 1);
            }
        }
    }
}
console.log(posts2);

