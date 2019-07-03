/*Create an array of movie objects. 
Each movie should have a title, rating, and watched properties.
Iterate through the array and print out something like:

You have watched "Frozen" - 4.5 stars
You have not seen "Les Miserables" -3.5 stars

*/

var movieDB = [
    {
        title: "Interstellar",
        watched: true,
        Rating: 8.6,

    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        watched: true,
        Rating: 8.5,

    },
    {
        title: "Toy Story 4",
        watched: false,
        Rating: 8.4,

    },
    {
        title:"The Room",
        watched: true,
        Rating:3.7,

    },
    {
        title: "Get Out",
        watched: false,
        Rating: 7.7,

    }
]

movieDB.forEach(movieRating)

function movieRating (array) {
    if(array.watched === true) {
        console.log("You have watched " + array.title + " - " + array.Rating + "/10 stars" )
    }

    else {
        console.log("You have not seen " + array.title + " - " + array.Rating + "/10 stars" )
    }
}


//Solution
movies.forEach(function(movie){
    var result = "You have "
    if(movie.watched){
        result += "watched ";
    }
    else {
        result += "not seen ";
    }

    result += "\"" + movie.title + "\"" + " " + "-";
    result += movie.rating + "stars";
    console.log(result)
})
