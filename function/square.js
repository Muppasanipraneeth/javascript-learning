// let num=parseInt(prompt(" enter a number to give the square of its"));
// function squar(num){
//     return num*num;
// }
// console.log(squar(num));
// console.log("enter the numbers to sum of square of its  ");
// let num1=parseInt(prompt(" enter the num1"));
// let num2=parseInt(prompt(" enter the num2"));
// function pythagorean(num2,num1){
//     let sum=squar(num1)+squar(num2);
//     return sum;
// }
// console.log(" the result of the pythagorean is "+pythagorean(num1,num2));

// function cube(n){
//     return n*n*n;
// }
// function sumofcube(n1,n2){
// return cube(n1)+cube(n2);
// }
// console.log("printing the sum of cube of the numbers"+sumofcube(num1,num2));
// another way to right this funcitons
let num1=parseInt(prompt(" enter the num 1"));
let num2=parseInt(prompt(" enter thr num 2"));
function cube(n){
    return n*n*n;
}
function square(n){
    return n*n;

}
function sumofsomething(num1,num2, fun){
    let ans=fun(num1)+fun(num2);
    return ans;
}
console.log(" their are two option opt one  square or cube");
let s=prompt(" enter your option ");
if(s=="square"){
    console.log(sumofsomething(num1,num2,square));
}else{
    console.log(sumofsomething(num1,num2,cube));
}


