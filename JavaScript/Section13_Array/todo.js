//Asks you what you want to do
var input = prompt("What would you like to do?")
var todos = ["Pet Korra", "Eat Pizza", "Play MH"];

while (input !== "quit") {
    //Add item
  if(input ==="list") {
    listTodos();
  }

//List items

  else if (input === "new" ) {
    addTodo();
  }

//Delete a specific item
  else if (input === "delete") {
    removeTodo();

  }

//Ask for new input again
  input = prompt("What would you like to do?")

}
//End the app
console.log("App closed!")


function listTodos(){
  console.log("-----------------------")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("-----------------------")
}

function addTodo(){
  var item = prompt("What would you like to add?")
  todos.push(item)
  console.log("Added " + item + "to todo list!")
}

function removeTodo(){
  var del = prompt("What is the index of the item you want to delete?");

  todos.splice(del, 1);
  console.log("Todo removed!")
}