var button = document.querySelector("button")
var isBlue = false;

button.addEventListener("click", function(){
    document.body.classList.toggle("blue");
})


/*button.addEventListener("click", function(){
    if (isBlue) {
        document.body.style.background = "white";
    }
    else {
        document.body.style.background = "blue";
    }
 isBlue = !isBlue
});
*/