const tweeter = Tweeter()
const renderer = Renderer()

const rend = function() {
    renderer.renderPosts(tweeter.getPosts())
}

rend();



// twit = add post   -  already in html #post.onclick
const post = function() {
    const p = $("#input").val();
    if(p.length == 0){
        alert("Can't post an empty tweet!")
        return;
    }
    tweeter.addPost(p);  
    rend();
    
    $("#input").val("");
}

// $("#post").on("click", function() {
//     const p = $("#input").val();
//     tweeter.addPost(p);  
//     rend();
    
//     $("#input").val("");
// })



// add comment  (like twit)


// remove post

// on.click()

// const deletePost = function() {
//     const p = $(this).closest(".post")
//     const pId = $(p).attr("id")
//     console.log(p);
// }



// remove comment
