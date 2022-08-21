
const Tweeter = function() {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },

        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    // let _lastPost = function() {return _posts[_posts.length-1];}


    let _getPostById = function(Pid) {
        for(const post in _posts){
            if(_posts[post]["id"] == Pid) {
                return _posts[post];
            }
        }
    }

    // let _maxPId = function() {
    //     return _lastPost()["id"].slice(1);
    // } 
    let _maxPId = 2;

    // let _maxCId = function() {
    //     return _lastPost()["comments"][_lastPost()["comments"].length-1]["id"].slice(1);
    // } 
    let _maxCId = 6;

    const getPosts = function() {
        return _posts;
    }

    const addPost = function(t) {
        _maxPId += 1;
        _posts.push({text: t, id: "p" + _maxPId, comments:[]});
    }

    const removePost = function(Pid) {
        for(const post in _posts){
            if(_posts[post]["id"] == Pid) {
                _posts.splice(post, 1);
                break;
            }
        }
    }

    const addComment = function(Pid, t) {
        if (!_getPostById(Pid)) {throw 'Post doesn\'t exist!'}
        _maxCId += 1;
        _getPostById(Pid)["comments"].push({id: "c" + _maxCId, text: t});
    }

    const removeComment = function(Pid, Cid) {
        const com = _getPostById(Pid)["comments"]
        for(const i in com) {
            if(com[i]["id"] == Cid) {
                com.splice(i,1);
                break;
            }
        }
    }


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,


    }
}

// my tests

// const tweeter = Tweeter()
// console.log(tweeter.getPosts());

// tweeter.addPost("Hello")
// console.log(tweeter.getPosts());

// tweeter.removePost("p2")
// console.log(tweeter.getPosts());

// tweeter.addComment("p3", "world!")
// console.log(tweeter.getPosts());

// tweeter.removeComment("p1", "c3")
// console.log(tweeter.getPosts());



// group tests

const tweeter = Tweeter();

tweeter.addPost("This is my own post!");
tweeter.addPost("2");
tweeter.addPost("3");
tweeter.addPost("4");
tweeter.addPost("5");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "aiiiii");
tweeter.addComment("p1", "biiiii");
tweeter.addComment("p2", "ciiiii");  // already removed - throwing error / try&catch?
// tweeter.addComment("p4", "diiiii");
// tweeter.addComment("p5", "eiiiii");
// console.log(tweeter.getPosts());

// tweeter.removeComment("p1", "c2");
// tweeter.removeComment("p4", "c3");
// console.log(tweeter.getPosts());

