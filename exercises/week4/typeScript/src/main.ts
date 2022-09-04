
// assigning example
let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;



// arrays example
let ids: number[] = [1, 2, 3, 4, 5]; // array of type 'number'
let names: string[] = ['Danny', 'Anna', 'Bazza']; // array of type 'string'
let options: boolean[] = [true, false, false]; // array of type 'boolean'

ids.push(6); // OK
// ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.



// objects example
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
};
  
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
function circumference(diameter: number): string {
    return 'The circumference is ' + Math.PI * diameter;
}
  
console.log(circumference(10));  // => "The circumference is 31.41592653589793"



// class exaple
class Person {
    name: string;
    isProgrammer: boolean;
    children: number;
  
    constructor(n: string, c: boolean, p: number) {
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
let result: number | string;

result = 10; // OK
result = 'Hi'; // also OK
// result = false; // a boolean value, ERROR


// type alias
type ID = number | string; // Type alias 'ID'

let returnedId: ID = 8; // OK
let newId: ID = '9'; // OK



// sc 1
// - Convert the following union types to a type alias.
const val: string | number | boolean = true;

function doX(val: string | number | boolean): string | number | boolean {
    return val == 8;
}

doX(val);

// ans - 
type Type = string | number | boolean;
const val_2:Type = true;

