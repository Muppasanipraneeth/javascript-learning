function sum(num1,num2){
    return num1+num2;
}
let num1=parseInt(prompt(" enter number 1"));
let num2=parseInt(prompt(" enter number 2"));
let ans=sum(num1,num2);
console.log("sum of number is",ans);
console.log(" enter the 3 number for caluclating the average of the numbers");
let n1=parseInt(prompt(" enter number1"));
let n2=parseInt(prompt(" enter number2"));
let n3=parseInt(prompt(" enter number3"));
function average(n1,n2,n3){
    return (n1+n2+n3)/3;
}
console.log("the average of 3 numbers",average(n1,n2,n3));
console.log(" which tabel you want to print enter it");
let n=parseInt(prompt(" enter "));
printtable(n);
function printtable(n){
    for (let i = 1; i <=10;i++) {
        console.log(`${i} *${n} =${i*n}`)
        
    }
}