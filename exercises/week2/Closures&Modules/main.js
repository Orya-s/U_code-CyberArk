
// closure example
const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }

    return count
}

const increment = setCounter(2)
increment()



// spot check 1

const family = function() {
    const members = [];
    const birth = function(name) {
        members.push(name);
        console.log(members);
    }
    return birth;
}

const giveBirth = family();
giveBirth("Dad");
giveBirth("Mom");
giveBirth("son");




// Modules \\

const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}


// my code:
const m = mathOperations()

console.log(m.add(3,4))
console.log(m.sub(3,4))
console.log(m.mult(3,4))
console.log(m.div(3,4))

console.log(m.add(13,29))   // 42
console.log(m.mult(1.75,24))    // 42
console.log(m.mult(7,m.div(36,6)))  // 42



// my own module:
const advancedMath = function() {
    const square = function(num) {
        return num * num;
    }
    const squareRoot = function(num) {
        return Math.sqrt(num);
    }
    const triple = function(num) {
        return num * num * num;
    }

    return {
        sqr: square,
        sqrt: squareRoot,
        tri: triple,
    }
}  

const ma = advancedMath();
console.log(ma.sqr(6));
console.log(ma.sqrt(25));
console.log(ma.tri(2));




// nodule with closure 

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()



// my code:

usersModule.addUser("Lior");
usersModule.addUser("Ben");
usersModule.listUsers();
// console.log(userModule.users)   // error - not defined



