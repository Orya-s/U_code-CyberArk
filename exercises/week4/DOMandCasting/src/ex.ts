
// ex 1

const input = document.querySelector(".foo");

function doX() {
    const text = input as HTMLInputElement; 
    console.log(text.value);
}



// ex 2

const inp = document.querySelector(".foo") as HTMLInputElement;

inp.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value); 
});
