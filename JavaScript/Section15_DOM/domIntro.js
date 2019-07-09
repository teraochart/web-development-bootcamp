/* DOM - Document Object Model
Interface between JS and HTML+CSS
Browser turns every HTML tag into a JS object that we can manipulate
This is done by the browser behind the scenes. 
Everything is stored inside of the document object. 
Each object contains the info about the elements associated with that object like color size etc.
The document object is the same as any other JS object and it contains key value pairs of all the HTML code
Workflow: SELECT and MANIPULATE Select elements and then change it 

SELECTOR METHODS
All start with document.
These are JS methods that have been added into the document object.
*/


document.getElementById()

document.getElementsByClassName()

document.getElementsByTagName()


//Newer method- Uses css style selector
document.querySelector(#) //Use for IDs or for selectors with one element. Will return first match

document.querySelectorAll(.) //Use for classes etc. Selectors with multiple returns

var li = document.querySelector("li a.special") // Selects all anchor tags inside an li with a class of special.

//As long as selector is valid in css you can use it with query selector.


/*STYLE
The style object contains tons of properties. One for every possible css property you could set.
*/
//Test class = a css style you have created in your css sheet

var h1 = document.querySelector("h1"); //variable storing the h1 info

h1.classList.add("test-class"); //add a css class to the selected element

h1.classList.remove("test-class"); //remove a css class from selected element

h1.classList.toggle("test-class"); //add or remove css class based on if it is there or not


//TEXT CONTENT

var p = document.querySelector("p");
tag.textContent.Content //Retrieves the content without HTML tags
tag.textContent = "change text to this" //changes the content, will override any html tags in it

//INNER HTML
tag.innerHTML //Retrieves the content with HTML tags
tag.innerHTML = "So <strong>cute</strong>!"; //changes the content and renders the HTML

//STINGING COMMANDS TOGETHER
document.querySelector("h1").textContent = "HELLO WORLD"; //changes the h1 without having to chain it to a var


//ATTRIBUTES
//getAttribute() - Read attributes like src or href
<a href="www.google.com">I am a link</a>
<img src = "logo.png"></img>
var link = document.querySelector("href");

link.getAttribute("href"); // www.google.com

//setAttribute() - write attributes like src or href
link.setAttribute("href", "www.dogs.com"); //<a href="www.dogs.com">I am a link</a>
img.setAttribute("src", "corgi.png"); //<img src=corgi.png>
