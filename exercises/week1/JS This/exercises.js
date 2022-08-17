// Bug Fixing

// ex1

const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {    // added- this. -to hungry
      hungry = false;
      alert('Im no longer hungry!')
    }
  }
}  

person.feed() //should alert "I'm no longer hungry"



// ex2

const pump = function (amount) {
  this.liters += amount;  // added- this. -to liters
  console.log('You put ' + this.amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};
  
garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);



// ex3

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,  // added- fuel:0
  fly: function () {
    if (this.fuel < 2) {  // added- this. -to fuel
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());



// ex4

const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function(num) {  // added method
    this.coinCount -= num; 
  }
};


tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



// ex5

const revealSecret = function () {
  return this.secret;   // added .this -to secret
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);    // added- + -between " said: " and result
};

const avi = {
  name: "Avi",    // added ,
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",  // added ,
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);



// ex6   // ex6.1

const coffeeShop = {
  beans: 40,

  money: 100,   // added property

  drinkRequirements: {
    latte:  {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 7},
    frenchPress: {beanRequirement: 12, price: 6},
  },

  makeDrink: function (drinkType) {    // added function body
    if (drinkType in this.drinkRequirements) {
      if (this.drinkRequirements[drinkType]["beanRequirement"] <= this.beans) {
        this.beans -= this.drinkRequirements[drinkType]["beanRequirement"]
      } 
      else {
        alert("Sorry, we're all out of beans!")
      } 
    }
    else {
      alert("Sorry, we don't make " + drinkType) ;
    }
  },

  buyBeans: function(numBeans) {    // added function
    // 1 bean = 0.1 dollar
    if (this.money >= numBeans / 10) {
      this.money -= numBeans / 10;
      this.beans += numBeans;
    } 
    else {
      alert("You don't have enouch money to buy " + numBeans + ", you can only afford to buy " + this.money * 10 + " more beans.")
    }
  },

  buyDrink: function(drinkType) {    // added function
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");   //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");   //should alert/console "Sorry, we're all out of beans"



 


