// let form=document.querySelector('form');
// form.addEventListener("submit",function(event){
//     event.defaultPrevented();
//     let ins=document.querySelector("input");
//     console.log(ins);
//     console.dir(ins);
//     console.log(ins.value);
//     alert("your form submitted");
// console.log("form was submited ");
// })
//event prevent default stops  making the action  move to another 
let fm=document.querySelector("form");
fm.addEventListener("submit",function(event){
event.preventDefault();
let user=this.elements[0];
let pass=this.elements[1];

// let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
console.log(user.value);
console.log(pass.value);
})