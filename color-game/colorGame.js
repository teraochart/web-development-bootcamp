var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    }
})

rgbDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to sqaures
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "You Win!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor
            resetButton.textContent = "Play Again?"
        }

        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
}

function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];

}

function generateRandomColors(num){
    //make array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i ++) {
    //get random color and push into array
        arr.push(randomColor())
    }
    //return array
    return arr;
}

function randomColor(){
   var red = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);
   return "rgb(" + red + ", " + green + ", " + blue +")"
}
