
// jQuery syntax:

/// instead of - document.getElementById("container")
/// we'll use - $("#container")

// for a class - $(".class-name")     (like css, we will get an array of elements)




// vanilla JS
//      document.getElementById("container").style.display = "none" 

// jQuery
//      $("#container").hide() 

//when we select elements with jQuery, we also get methods that can work on the element,
// on top of the element itself



// changes all the h4 elements in the page - giving them the color red
$("h4").css("color", "red")



// removes all ps from the page
$("p").remove()

// removes p's with a certain class
$("p").remove(".brown")




// Spot Check 1

const header = $("h1");
console.log(header)

console.log($)      // $ === jQuery



// spot check 2     // change elements according to instructions

$("h1").css("color", "blue")    // solution refers to - background-color

$(".red-div").css("color", "red")

$("li:first-child").css("color", "green")    // li:nth-child(2)

$("li:nth-child(2)").css("color", "pink")

$("#brown-div").css("color", "brown")



// spot check 3

$("#b1").addClass("B")
$("#b2").addClass("B")




// spot check 4

$('#my-input').val("Terabyte")
// console.log($('#my-input').val())





// const color = $("#product").data().color     // data() returns an object

// spot check 5
const productDet = $("#product").data()
// console.log(productDet)
console.log("The item with " + productDet.barcode + " barcode will expire on " + productDet.expirationdate)





// spot check 6

$('#my-div').hover(function() {
    $('#my-div').css("background-color", "blue");
})




// spot check 7

$('button').click(function() {
    const msg = $('#my-input2').val()
    alert(msg);
})




// spot check 8

$(".box").hover(function () {
    $(this).css("background-color", "blue");
})




// spot check 9

$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
})




// spot check 10

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for(let name of names){
  $("body").append(`<div>${name.first} - ${name.last}</div>`)
}



// spot check 11

$(".toRemove").hover(function() {
    $(this).remove()
})

