
// add two div boxes to body

$("body").append(
    "<div class='box' id='b1'></div>    <div class='box' id='b2'></div>"
)



// change by id

$("#b1").hover(function() {
    if($("#b2").css("backgroundColor") == "rgb(138, 43, 226)") {
        $("#b2").css("background-color", "salmon")
        
        // $("#b1").css("background-color", "blueviolet")
    }
    else if($("#b2").css("backgroundColor") == "rgb(250, 128, 114)") {
        $("#b2").css("background-color", "blueviolet")
    }
})

$("#b2").hover(function() {
    if($("#b1").css("backgroundColor") == "rgb(138, 43, 226)") {
        $("#b1").css("background-color", "salmon")

        // $("#b2").css("background-color", "blueviolet")
    }
    else {
        $("#b1").css("background-color", "blueviolet")
    }
})



