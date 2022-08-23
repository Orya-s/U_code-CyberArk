
const posts = [{name: "Orya", text: "My Text"}]

const render = function() {
    $("#container").empty()

    for (const post of posts) {
        $("#container").append(`<div class="posts">
                            <span class="names">${post.name}:</span>
                            <span class="text">${post.text}</span>
                          </div>`)
    }
}

render()


$("button").on("click", function() {  
    const n = $("#nameInput").val();
    const t = $("#textInput").val();
    posts.push({name: n, text:t});

    render();

    $("#nameInput").val("");
    $("#textInput").val("");
})


// $("#container").on("click", ".posts", function() {
//     $(this).remove()
//     console.log($(this));
        
//     render()
// })

