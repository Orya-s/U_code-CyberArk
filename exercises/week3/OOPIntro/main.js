
class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}


// sc 1
const dog = new Animal("Cheddar", 4)
console.log(dog);



// sc 2

class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
        this.children = []
    }

    giveBirth(name){
        console.log("Boom. Birthed " + name)
        this.children.push(name)
    }
}

const Batel = new Human("Batel", 25, true)
console.log(Batel);



// sc 3

const Nir = new Human("Nir", 29, true)
Nir.giveBirth("kid")
console.log(Nir.children);



// sc 4

class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x
        this.y = y
        this._speed = speed
        Vehicle.carsSold++;
        this._fuel = fuel
    }

    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
            return console.log("Fuel must be in range [0,150]")
        }
        this._fuel = fuel
    }

    get fuel() {
        return this._fuel
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed(){
        return this._speed
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney() {
        console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
    }
}

Vehicle.carsSold = 0;
const car1 = new Vehicle(1, 1, 100)
const car2 = new Vehicle(1, 1, 200)
Vehicle.getInfo()



// sc 5
Vehicle.calculateMoney()

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed)


// cs 6
const a = new Vehicle()
a.x = 3
a.y = 1
a.speed = 100
a.fuel = 100
console.log(a);