
$(".remove").on("click", function() {
    alert($(this).closest(".post").data().id)
})


$('.submit-data').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("input").val()
    alert(relevantInputValue)
})



//  .closest(element / class / id)   =>   goes UP and searches

// .find(element / class / id)   =>   goes DOWN and searches




// spot check 1

$('.print-button').on('click', function() {
    console.log($(this).closest("div").find("span").text());
})




// spot check 2

$("#get").on("click", function() {
    console.log($(".container").find("p").text());
})


