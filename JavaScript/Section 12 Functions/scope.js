function doMath() {
    var y = 40
    console.log(y)
}

var y = "hello!"

var x = 30
function doMoreMath() {
    x = 100
    console.log(x);
}

var phrase = "hi there!"

function doSomething(){
    var phrase = "Goodbye!"
    console.log(phrase);
}


function sing() {
    console.log("twinkle twinkle");
    console.log("how I wonder");
}

//setInterval(anotherFunc, intervalin ms)

setInterval(sing, 1000);