// const { default: test } = require('node:test')
// const { require } = require('yargs')
// const add = require('./code')
const codeModule = require('./code') 

test("add should return sum of a + b", () => {
    let sum = codeModule.add(1, 2)
    expect(sum).toBe(3)
})


test("should keep only HIGH priority tasks", () => {
    let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
    let filteredTasks = codeModule.clearLowPriority(tasks)

    filteredTasks.forEach(t => {
        expect(t.priority).toBe("HIGH")
    })
})
