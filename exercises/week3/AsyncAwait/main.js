
// sc 1
// How would you rewrite the below recipe API call with async/await?
const fetchRecipes = function (ingredient) {
    $.get(`/recipe/${ingredient}`, function(recipe){
      console.log(recipe)
    });
}


// ans = 
// const fetchRecipes = async function (surname) {
//     let data = await $.get(`/recipe/${ingredient}`)
//     console.log(data)
// }




// sc 2


