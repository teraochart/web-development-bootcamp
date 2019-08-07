var li = document.querySelectorAll("li");

for(var i = 0; i < li.length; i++){
    li[i].addEventListener("mouseover", function(){
        this.classList.add("grayout");
    });
    li[i].addEventListener("mouseout", function(){
        this.classList.remove("grayout");
    });
    
    li[i].addEventListener("click", function{
        this.classList.toggle("strikethru");
    });
}



// firstLI.addEventListener("mouseover", function(){
//     firstLI.classList.add("grayout");
// })

// firstLI.addEventListener("mouseout", function(){
//     firstLI.classList.remove("grayout");
// })