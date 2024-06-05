let arr=[1,2,3,4,5,6,3,2,1,2];
let num=prompt("enter num");
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  if(element==num){
    arr.splice(i,1);
  }  
}
console.log(arr);
let number="287152";
let count=0;
console.log(number.length);
console.log("hello guru");
let sum=0;
for (let i = 0; i < number.length; i++) {
    let element = number[i];
    sum=sum+element;
}
console.log(sum);