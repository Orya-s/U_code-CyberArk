// ex1

// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch(9782806269171)


// ex2

// const fetch2 = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch2("isbn", 9789814561778)


// ex3

const fetch3 = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            for (const book of data.items) {
                console.log(`${book.volumeInfo.title} - \nBy - ${book.volumeInfo.authors} , \nisbn - ${book.volumeInfo.industryIdentifiers.map((id) => id.identifier)}`)
            }
            
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch3("isbn", 9782806269171)
