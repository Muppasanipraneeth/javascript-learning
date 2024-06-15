// let sum= (a,b)=>{
//     return a+b;

// }
// console.log(sum(2,4));
// /*  another way for only on parameter 
// let sum= a=>{
//     return a+100;

// }*/
// const hello =()=>{
//     console.log(" hello Boss");
// }
// hello()// calling of the function is same as the normal function

// console.log(" hello ");
// setTimeout(hello(),90000000);
// console.log(" ok ! see you later");
console.log(" hello there ");
let id=setTimeout(() => {
    console.log(" how are man ?");
}, 5000);
console.log(" ok then bye! ");
clearInterval(id);
let id2=setInterval(()=>{
    console.log(" hope you doing well");
},10000);