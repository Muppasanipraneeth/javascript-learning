let num=parseInt(prompt(" enter the number to sum upto its sum"));
function sum(num){
    let temp=0;
    for (let i = 0; i <num; i++) {
        temp+=i;
        
    }
    return temp;
}
console.log(`printing the sum of the numbers ${sum(num)} `);
console.log(" printing the concatination of the array string elements");
let s=["praneeth","harsha","bhanu ","nikhil","madhu"];
function convertingtostring(s){
    let ans="";
    for (let i = 0; i< s.length-1; i++) {
      ans+=s[i];
      ans+=" ";
       
    }
    return ans;

}
console.log(s);
console.log(convertingtostring(s));
