"use strict";
// Ex 1
function sum(numbers) {
    if (Array.isArray(numbers)) {
        let sum = 0;
        for (const num of numbers) {
            if (typeof numbers[0] === "number") {
                sum += num;
            }
            else if (typeof numbers[0] === "string") {
                if (!isNaN(parseInt(num))) {
                    sum += parseInt(num);
                }
            }
        }
        return sum;
    }
    else {
        if (typeof numbers === "number") {
            return numbers;
        }
        else if (typeof numbers === "string") {
            if (!isNaN(parseInt(numbers))) {
                return parseInt(numbers);
            }
        }
        else {
            throw ("function sum() can only recieve types: string, string[], number, number[].");
        }
    }
    return 0;
}
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
// codio solution - 
// function sum<Type>(val: Type): number {
//     if (Array.isArray(val)) {
//         let sum: number = 0;
//         val.forEach(elem => sum += getNumValue(elem));
//         return sum;
//     } else if (typeof val === 'string' || typeof val === 'number') {
//         return getNumValue(val);
//     } else {
//         return 0;
//     }
// }
// function getNumValue(val: string | number): number {
//     if (typeof val === 'string') {
//         const num: number = parseInt(val);
//         return !isNaN(num) ? num : 0;
//     } else {
//         return val;
//     }
// }
// Ex 2
class Numbers {
    constructor(arr = []) {
        this.arr = arr;
    }
    addNumber(val) {
        this.arr.push(val);
    }
    sum() {
        let sum = 0;
        this.arr.forEach(elem => sum += this.getNumValue(elem));
        return sum;
    }
    getNumValue(val) {
        if (typeof val === 'string') {
            const num = parseInt(val);
            return !isNaN(num) ? num : 0;
        }
        else if (typeof val === 'number') {
            return val;
        }
        else {
            return 0;
        }
    }
}
const numbers1 = new Numbers(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Numbers([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
