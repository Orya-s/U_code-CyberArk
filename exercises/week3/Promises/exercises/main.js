
// Ex 1

let p = $.get('https://random-word-api.herokuapp.com/word')

p.then(function (word) {
    console.log(word)
    const title = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    title.then(function (word) {
        // word is an object, inside the items key there's an array with books
        // each book is an object, inside the volumeInfo key there are the title and authors attr
        console.log(word.items[0]["volumeInfo"])
    })
})





// Ex 2

const api_key = "7lDGgO4E7EDkIgQw6ZJWHRUGeVDOdaLS"

let b = $.get('https://random-word-api.herokuapp.com/word')

b.then(function (word) {
    console.log(word)
    const title = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    const gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${api_key}&limit=1`)
    Promise.all([title, gif])
            .then(function (results) {
                console.log(results[0].items)
                console.log(results[1].data[0]);
                $("h1").text(word)
                $("iframe").attr("src", results[1].data[0].embed_url)

    })
})

