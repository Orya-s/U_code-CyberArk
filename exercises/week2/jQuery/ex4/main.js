
$(".item").on("click", function() {

    if($(this).data().instock != false) {
        $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
    }
})