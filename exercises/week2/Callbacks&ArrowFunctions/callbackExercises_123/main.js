
// ex1

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
console.log("pulling it!")
}


// my code:
const pushPull = function(callback) {
    callback();
}


pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"




// ex2

const returnTime = function (time) {
    alert('The current time is: ' + time)
}


// my code:
const getTime = function(callback) {
    const time = new Date();
    callback(time);
}

  
getTime(returnTime)

