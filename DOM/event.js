/*// let btn=document.querySelector("button");
let btns =document.querySelectorAll("button");
for(btn of btns){
    
    btn.onmouseenter=function(){
        console.log("you entered button");
    }
btn.onclick=sayhello;
}
// btn.onclick=function(){
//     alert(" button clicked");
// }
function sayhello(){
    alert(" hello ther");
}*/
let btns= document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",Name);
    btn.addEventListener("dblclick",function(){
        console.log(" you double clicked the button");
    })
}
function Name(){
    console.log(" praneeth is here");
}
function sayhello(){
    console.log(" hello world!");
}
