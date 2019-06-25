//Must declare function first (define what it does)
//Then call the function
//Must use () after function in order to run it, 
// if you just type the name it'll just give you the full code of what is in the fuction

function doSomething() {
    console.log("First Function!")
}

doSomething();

function singSong() {
    console.log("Twinkle Twinkle Little Star")
    console.log("Twinkle Twinkle Little Star")
    console.log("Twinkle Twinkle Little Star")
    console.log("Twinkle Twinkle Little Star")
}


//ARGUMENTS
//Functions that take inputs

function square(num) {
    console.log(num * num);
}

square(10)

function sayHello(name) {
    console.log("Hi, " + name +  "!");
}

sayHello("Tera")

function area (length, width) {
    console.log(length * width);
}

area(10,2);


//RETURN KEYWORD

//Return allows you to capture the output of the function.
//Console.log just prints it to the console. It's not storing it
//Stops execution of function once something is returned

function square(x) {
    return x * x;
}

"4 squared is: " + square(4)

var result = square(8);

//function declaration
function capitalize(str) {
    return str.charAt(0) .toUpperCase() + str.slice(1);
}

//function expression - Set a variable equal to a function

var capitalize = function(str) {
    return str.charAt(0) .toUpperCase() + str.slice(1);
}