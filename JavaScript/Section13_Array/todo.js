//Asks you what you want to do
var input = prompt("What would you like to do?")
var todos = ["Pet Korra",];


while (input !== "quit") {
    //If new add to array
  if(input ==="list") {
    console.log(todos);
  }

//If list console.log current array

  else if (input === "new" ) {
    var item = prompt("What would you like to add?")
    todos.push(item)
  }
//Ask for new input again
  input = prompt("What would you like to do?")

}
//If quit end app
console.log("App closed!")


