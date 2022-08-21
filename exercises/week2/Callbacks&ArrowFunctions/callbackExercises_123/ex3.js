
// ex3

// my code:
const alert = function(data) {
    this.alert(data);
}
const logData = function(data) {
    console.log(data);
}


// Q
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};
  
displayData(alert, logData, "I like to party")


