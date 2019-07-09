/*DOM EVENTS - Making things interactive
Clicking a button, Hovering over a link, Dragging and dropping, Pressing the enter key

SELECT ELEMENT
Select an element and add an event listener 
There can be more than one listener on an element
*/

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var h1 = document.querySelector("h1");

button.addEventListener("click", function(){
    paragraph.textContent = "THANK GOD WE'RE SAVED!";
});

h1.addEventListener("click", function() {
    h1.style.background = "pink";
})
