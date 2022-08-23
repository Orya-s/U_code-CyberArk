
const posts = [{name: "Orya", text: "My Text"}]

const render = function() {
    let id = 0;
    $("#container").empty()

    for (const post of posts) {
        $("#container").append(`<div id="${id}" class="posts">
                            <span class="names">${post.name}:</span>
                            <span class="text">${post.text}</span>
                          </div>`)

        id += 1;
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


$("#container").on("click", ".posts", function() {
    
    console.log($(this).attr("id"));

    // loop over posts - search for a match for $("#found_id") where <span>'s match 
        // or use events

    // render()
})

