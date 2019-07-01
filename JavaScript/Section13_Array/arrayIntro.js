//Arrays need brackets in order to distinguish them 
//from regular variables. 
//They can hold any type of data
//They also have a length (array.length) will tell you # of items
//Index is always one less than the length b/c it starts at 0
var friends = ["Noelle", "Ellie", "Maddie"];

//Arrays are indexed starting at 0
// Noelle = 0, Ellie = 1, Maddie= 2

//Can update Arrays 
friends[0] = "Rosey";
//Arrays updates Noelle to be Rosey

//Can add by putting an index that doesn't exist yet. 
friends[3] = "Becky";

//If you add an item that is not the next index
//It will make all indexes up to that on undefined
//If friends[10] = "Becky"; then 3-9 would be undefined

//NEST ARRAYS
var foods = [["Pizza", "Pasta"], ["Burritos", "Tacos"]]
//Calling foods[0][1] would return Pasta.




//PUSH AND POP

//Push - Add to end of array & tells you new length of array
var colors = ["red", "orange", "yellow"];
colors.push("green");

//Pop - Removes last item in an array & tells you removed element
colors.pop();


//SHIFT AND UNSHIFT

//Unshift - Add to the front of the array & tells you new length of array
colors.unshift("infrared");

//Shift - remove the first item in an array & tells you removed element
colors.shift()


//INDEX OF - Gives the index of the first instance of an 
//item in an array. Will return -1 if it's not present.
friends.indexOf("Maddie");


//SLICE - Copy parts of an array to a new array
//specify index where new array starts (1) and ends (2)
//Does not include the last index
var friends = ["Noelle", "Ellie", "Maddie"];
var grewApart = friends.slice(0, 1);
//Would create new array with Noelle & Ellie 

//Doesn't alter original array

//Can also copy entire array to new array
var stillFriends = friends.slice();