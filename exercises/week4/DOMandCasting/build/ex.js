"use strict";
// ex 1
const input = document.querySelector(".foo");
function doX() {
    const text = input;
    console.log(text.value);
}
// ex 2
const inp = document.querySelector(".foo");
inp.addEventListener("input", (event) => {
    const target = event.target;
    console.log(target.value); // WORKS
});
