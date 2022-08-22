
//EX1


// add input and button
$("body").append("<input type='text' id='my-input' placeholder='Human Name'>")
$("body").append("<button>Add Human</button>")


// add listener to input - 
// create li - add to ul

$('button').click(function() {
    const h = $('#my-input').val()
    $("ul").append(`<li class='human'>${h}</li>`);
    $('#my-input').val("") 
})
 


// EX2


$("body").on("click", ".human", function() {
    $(this).remove()
})


