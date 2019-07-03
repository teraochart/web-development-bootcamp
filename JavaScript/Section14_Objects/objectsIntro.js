//OBJECTS

//Can create using object literal notation (all at once)
var person = {
    name: "Travis",
    age: 21,
    city: "LA",
}
//Can create using empty object
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//Can create using new Object function. It will create an empty object for us. 
//Then we can add info to it like above
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";


//Key value pairs
//property: value (name: "Travis")
//Arrays technically are key value pairs, it's a number (the index) and the item.


//Objects have no order unlike an array. So you don't need to remember the index of the item you want.
//Can hold any type of data.

//Two ways to retrieve data.
//Bracket Notation: (Can lookup property using a variable.)
console.log(person["name"]);

var str= "name";
somObject[str] //Will evaluate str and actually looks for the name

//Dot Notation: (Can't use if property starts with number, or has a space in it.)
console.log(person.name);

//Can call info for object by typing the name of it.
person
//Will return:
Object {name: "Travis", age: 21, city: "LA"}


//Can update or add data
person.age += 1; //Adds 1 to age
person["city"] = "Witchita"; //Updates city
person.likes = "Swimming"; //This adds a new key value pair.


//NESTING ARRAYS AND OBJECTS

//Storing objects in arrays. This is an example of each post being an object.
//post[0] Will retrieve the whole first object title, author, and comments.
//comments is an array stored in the object that is stored in the larger array posts
var posts = [
    {
        title: "I love cats",
        author:"Tera",
        comments: ["Awesome post", "Terrible post"]
    },
    {
        title: "How could you not like cats?"
        author: "Every Person"
        comments: ["<3", "Go die"]
    }
]

//To access title of first post
posts[0].title //Will return "I love cats"

//To access second comment in the second post 
posts[1].comments[1] // will return "Go die"


/*METHODS
Can add functions as a property in an object. These functions are called methods.
*/
var obj = {
    name: "Tera"
    add: function(x,y){
        return x + y;
    }
}
//To call it you need to specify object and property(the function) and put in arguments.
obj.add(10,5);

