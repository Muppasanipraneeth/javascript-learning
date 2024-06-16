let par=document.createElement('p');
par.innerText=("hello world");
let body=document.querySelector('body').append(par);
par.classList.add("red");
let h3=document.createElement('h3');
h3.innerText="I am blue color";
document.querySelector('body').append(h3);
h3.classList.add("blue");
// let div=document.createElement('div');
// let p=document.createElement("p");
// let h1=document.createElement("h1");
// p.innerText(" i aslo here !");
// h1.innerText("hey inside the div");
// div.append(p);
// div.append(h1);
// div.classList.add("box");
// document.querySelector('body').append(div);
let div=document.createElement("div");
let p=document.createElement("p");
let h1=document.createElement("h1");
div.append(h1);
div.append(p);
div.classList.add("box")
p.innertext="hey new paragraph";
h1.innerText="hello world";
document.querySelector("body").append(div);
//holy fuck
