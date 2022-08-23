
const Renderer = function() {

    const renderPosts = function(posts) {
        $("#posts").empty();

        for (const post of posts) {
        
            let postComments = "";
            for (const comment of post.comments) {
                postComments += `<div class="comments" id="${comment.id}">${comment.text}</div>`
            }
            $("#posts").append(
                `<div id="${post.id}" class="post">
                    <div class="post-text">${post.text}</div>
                     ${postComments}
                    <div class="delete" onclick="deletePost()">X</div>
                </div>`
            );
        }
    }

    return {
        renderPosts,

    }
}




