"use strict";
// assigning example
let id = 5;
let firstname = 'danny';
let hasDog = true;
// arrays example
let ids = [1, 2, 3, 4, 5]; // array of type 'number'
let names = ['Danny', 'Anna', 'Bazza']; // array of type 'string'
let options = [true, false, false]; // array of type 'boolean'
ids.push(6); // OK
// ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// objects example
let person;
person = {
    name: 'John',
    location: 'Israel',
    isProgrammer: true,
};
// person.isProgrammer = 'Yes'; // ERROR, must be of 'boolean' type
/*
person = {
    name: 'John',
    location: 'Israel',
};
*/
// ERROR, missing 'isProgrammer' property
// cunction example
// Calculate the circumference of a circle given its diameter
function circumference(diameter) {
    return 'The circumference is ' + Math.PI * diameter;
}
console.log(circumference(10)); // => "The circumference is 31.41592653589793"
// class exaple
class Person {
    constructor(n, c, p) {
        this.name = n;
        this.isProgrammer = c;
        this.children = p;
    }
    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.children} children`;
    }
}
const person1 = new Person('John', false, 2);
//   const person2 = new Person('Michael', 'yes', 4); // ERROR, Argument of type 'string' is not assignable to parameter of type 'boolean'.
console.log(person1.sayHello()); // => Hi, my name is John and I have 1 children
// Union types
let result;
result = 10; // OK
result = 'Hi'; // also OK
let returnedId = 8; // OK
let newId = '9'; // OK
// sc 1
// - Convert the following union types to a type alias.
const val = true;
function doX(val) {
    return val == 8;
}
doX(val);
const val_2 = true;
