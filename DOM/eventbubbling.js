let div= document.querySelector("div");

div.addEventListener("click",function(event){
    event.stopPropagation();

    console.log(" the div is clicked");
})
let ol=document.querySelector("ol")
ol.addEventListener("click",function(event){
    event.stopPropagation();
    console.log(" ol was clicked");
})
let li=document.querySelector("li")

li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log(" ul was clicked");
})