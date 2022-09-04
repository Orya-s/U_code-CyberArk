//  TYPES EXERCISES 
// EX 1

function sum(arr: number[]): number {
    let sum:number = 0;
    arr.forEach(x => sum += x);
    return sum;

    //  return numbers.reduce((a, b) => a + b);
}

const isEven = (num:number): boolean => {return num % 2 === 0};


function testFunc(arr: number[]):void {
    const sumArr:number = sum(arr);
    console.log(arr, sumArr, isEven(sumArr));
}

testFunc([1, 2, 3, 4]);
testFunc([3]);
testFunc([]);


const numArray1: number[] = [4,7,44,5,234];
const numArray2: number[] = [65,33,5,2532,32,6];
const numArray3: number[] = [54,6,656,4];
console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);



// EX 2

class Student {
    name: string;
    age: number;
    grades: number[];

    constructor(n: string, a: number, g: number[]) {
        this.name = n;
        this.age = a;
        this.grades = g;
    }

    addGrade(grade:number): void {
        this.grades.push(grade)
    }

    getGradeAvg(): number {
        return this.grades.reduce((a, b) => a + b) / this.grades.length
    }
}

const student1:Student = new Student("Dan", 25, [90, 95, 92, 97])
const student2:Student = new Student("Dan", 35, [100, 95, 90, 91])
const student3:Student = new Student("Dan", 30, [91, 93, 92, 97])

const students:Student[] = [student1, student2, student3];
students.forEach(s => console.log(`${s.name}: ${s.getGradeAvg()}`))







// UNION TYPES EXERCISES

// Ex 1
function concat(strings:(string | string[]), flag:(boolean | number)): void {
    let ans: string = "";
    if(typeof strings === 'string') {
        ans = strings
    }
    else {
        strings.forEach(s => ans += s)
    }

    if(flag === 1 || flag === true) {
        console.log(ans);
    }
    else if(typeof flag === 'number' && flag !== 0) {
        throw("flag can only be 0, 1, or bollean")
    }
}


concat("hi", true)
concat("hi", 1)
concat("hi", 0)
concat(["hi", "hello", "hi"], true)
concat(["hi", "hello", "hi"], false)
// concat(["hi", "hello", "hi"], 2)     // => throws an error




// Ex 2
type phoneNumber = string | string[] | number | number[];
function print_numbers(numbers:phoneNumber): void {
    if(Array.isArray(numbers)) {
        if(typeof numbers[0] === "number"){
        console.log(`type-number[] | ${numbers}`);
        }
        else {
            console.log(`type-string[] | ${numbers}`);
        }
    }
    else {
        if(typeof numbers === "number") {
            console.log(`type-number | ${numbers}`);
        }
        else {
            console.log(`type-string | ${numbers}`);
        }
    }
}

print_numbers([23, 34, 45])
print_numbers(["02", "03", "04"])
print_numbers(303030)
print_numbers("45454")
