// function hello(){
//     console.log(" hello world");
// bye();
    
// }
// function demo(){
//     console.log(" demo was called");
//     hello();
//     console.log("demo was executed");
// }
// demo();
// function bye(){
//     console.log(" bye see you again !");
// }
// function one(){
// return 1;

// }
// function two(){
//     return one()+one();
// }
// function three(){
//     return two()+one();
// }
// let ans=three();
// console.log(ans);
// learning about the call backs
setTimeout(function(){
console.log(" this is in the call back");
},2000);
setTimeout(()=>{
    console.log(" this is also in the call back");
},1000);
console.log("hello world");
 //what this mean javascript is single threaded language and mean it do the single work at a atime not more than that to over come we use callbacks
 setTimeout(()=>{
    console.log(" this is also in the call back 4");
},100);