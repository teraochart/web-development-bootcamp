var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display= "none";
        }
    }
    

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display= "block";
    }
});


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
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
