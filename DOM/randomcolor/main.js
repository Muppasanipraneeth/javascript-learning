let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    h2.innerText=random();
    let body=document.querySelector("body");
    body.style.backgroundColor=random();
});

function random(){
console.log(" generating");
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color=`rgb(${red},${green},${blue})`;
console.log(red,green,blue);
return color;
}