
// ex5

// my code:
const capitalize = name => console.log(name.toUpperCase()[0] + name.slice(1).toLowerCase()); 


capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia



// ex6

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}


// my code:
const commentOnWeather = temp => console.log("It's " + determineWeather(temp));


commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"




// // ex7

// const box = document.getElementById("box");
// box.style.width = "400px";
// box.style.height = "400px";
// box.style.position = "50%";
// box.style.marginLeft = "30%";
// box.style.left = "-190px";
// box.style.top = "50px";
// box.style.border = "3px solid black";


const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}
    
const shineLight = () => box.style.backgroundColor = "yellow";
    
const makeSound = sound => alert(sound)
    
explode(shineLight, makeSound, "BOOM")

