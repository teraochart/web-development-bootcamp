var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")



init();

function init(){
    //mode button listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
    
        });
    }

    //squares listeners
    for (var i = 0; i < squares.length; i++) {
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

    //reset button listeners
    resetButton.addEventListener("click", reset);


reset();

}



function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    
    }
};

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
