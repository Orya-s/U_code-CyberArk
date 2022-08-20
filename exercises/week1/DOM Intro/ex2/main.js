
const container = document.getElementById("container");

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71",
     "#1abc9c", "#2c3e50", "#7f8c8d", "rgb(0, 208, 255)", "rgba(4, 4, 93, 0.786)", "cyan"
    ,"cornflowerblue", "seagreen", "salmon"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}


for (let index = 0; index < 25; index++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");

    box.onmouseenter = function() {
        this.style.backgroundColor = getRandomColor()
    }

    container.appendChild(box);
}




