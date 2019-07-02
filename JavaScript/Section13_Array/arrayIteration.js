//FOR LOOP
//To loop over an array using a for loop, 
//we need to make use of the array's length property
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Sites do this for comments

for (var i = 0; i < comments.length; i++); {
    makeCommentHTML(comment(i));
}

//FOR EACH
//JavaScript provides built in way of iterating over an array
//Takes a function as an argument - function in a function.
//Usually pass in an anonymous function
//This will print each color
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(anonymous) {
    console.log(anonymous)
})

//You can define a function before hand and pass that in
function printColor(color){
    console.log("------------")
    console.log(color)
    console.log("------------")
}

colors.forEach(printColor);
//NOTE- Do not put the extra () - colors.forEach(printColor()); 
//This will call the function immediately instead of letting forEach call it