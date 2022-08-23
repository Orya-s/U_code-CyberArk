

$(".generator").on("click", function() {

    console.log($(this).closest("div").attr("id"));

    const computerDataID = [];
    const dataId = $(this).closest(".computer").data().id
    computerDataID.push({cmp_id:dataId})
    console.log(computerDataID);

    console.log($(this).closest(".computer").find(".BUS").text());

})


$(".validator").on("click", function() {
    console.log($(this).text());

    console.log($(this).closest(".computer").find(".MB").text());

    console.log($(this).closest(".computer").find(".QR").text())
})