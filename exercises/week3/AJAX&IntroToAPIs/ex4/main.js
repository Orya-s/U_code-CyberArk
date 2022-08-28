
const fetch = function(api_key, q="ryan+gosling") {
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${api_key}&limit=1`);
    xhr.done(function(data) { 
        // console.log("success got data", data); 
        
        $("iframe").attr("src", data.data[0].embed_url)
    });
}

// fetch("7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS")

$("#btn").on("click", function() {
    const input = $("#input")
    fetch("7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS", input.val())
})