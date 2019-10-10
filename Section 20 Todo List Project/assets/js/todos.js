// Check off todos by clicking them
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
})

//Delete a todo when X is clicked
$("ul").on("click", ".delete", function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//Add a todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //getting new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add ul
        $("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>")
    }

})

//Toggle new todo
$("#add").click(function(){
    $("input[type='text']").fadeToggle();
})