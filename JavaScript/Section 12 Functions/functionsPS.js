/*Write a function isEven() which takes a single number argument 
and returns true if it is even and false otherwise */

function isEven(num) {
    if(num % 2 === 0) {
        return "True!"
    }
    return "False!"
}

function isEven(num) {
    return num % 2 === 0;
}

/*Write a function factorial() which takes a number argument 
and returns the factorial of that number 
4! is 4x3x2x1
0! is 1 */

function factorial(num ) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i
    }
    //return a result variable
    return result
}


/*Write a function kebabToSnake() which takes 
a single kebab-cased string argument and returns the snake_cased version
Replace - with _*/

function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_")
    return newStr
}

