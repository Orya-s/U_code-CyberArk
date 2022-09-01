
// add to LocalStorage :  (all do the same)

// Functions
localStorage.setItem('name', 'Shoobert');

// Object
localStorage.name = 'Shoobert';

// Object
localStorage['name'] = 'Shoobert';


console.log(localStorage.getItem('name'))   //  == localStorage.name


// delete a key-value
localStorage.removeItem('name')


// clear everything
// localStorage.clear()


// adding an object can only e done with Stringify - 
localStorage.personalData = JSON.stringify({
    averageTimeOnSite: {unit: "hr", amt: 9},
    probabilityOfFriends: 0.02,
    commonKeywords: ["salsa for one", "1 vs. none Chess"]
})


// to extract the key-value from the stringified object we will use parse -

let userStuff = JSON.parse(localStorage.personalData)

console.log(userStuff.probabilityOfFriends) //prints 0.02




// sc 1

localStorage.userStorage = JSON.stringify({
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]

})

let user = JSON.parse(localStorage.userStorage)

console.log(user.latestMarks.sectionA) //prints 92





// when retrieving data from LS, we always want to guarantee that we have a failsafe

let data = JSON.parse(localStorage.dataThatIsImportant || "[]")

// data.forEach(d => /*something with data*/)






// EXERCISE

const wisdom = []

const show = JSON.parse(localStorage.wisdom || `[]`)
if (show !== "[]") { 
    for (const i in show) {
        text = `<div class="line" data-id="${show[i].text}">
                    <button class="x">X</button>
                    <span>${show[i].text}</span>
                </div>`
        $("#text").append(text);
    }
}
    

$("#show-btn").on("click", function () {
    const input = $("#input").val();     // showing input below button
    $("#text").text(input);
    $("#input").val("");     // clearing input text box

    wisdom.push({text:input})

    if(wisdom.length % 2 === 0) {
        localStorage.wisdom = JSON.stringify(wisdom);   // saving every other click
    }
})

$("#clear-btn").on("click", function() {
    localStorage.removeItem("wisdom")
})


$("#text").on("click", ".x", function() {
    this.closest(".line").remove()
    
    let id = $(this).closest(".line").data().id
    let storage = JSON.parse(localStorage.wisdom)

    for(let i in storage) {
        if(storage[i].text == id){
            storage.splice(i, 1)
        }
    }

    localStorage.wisdom = JSON.stringify(storage)
    // console.log($(`#${this.closest(".line").id}`).text());
    // this.closest(".line").id
})






