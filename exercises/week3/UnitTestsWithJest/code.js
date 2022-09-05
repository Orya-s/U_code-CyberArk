const add = function(a, b) {
    return a + b
}


const clearLowPriority = function(arr) {
    arr = arr.filter(o => o.priority === "HIGH")
    return arr
}



module.exports = {add, clearLowPriority}