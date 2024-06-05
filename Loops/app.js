// console.log(" here we are printing the even numbers")
// for(let i=0; i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
console.log(" Check how much you know me");
console.log(" guess my favourite mobvie");
let fav="k";
let ans=false;
let guess=prompt(" Enter movie name");
while(!ans && guess!='quit'){
   guess=prompt("worny guess try agian");

    if(guess==fav){
        console.log(" congratulation you won");
        ans=!ans;
    }else if(guess=='quit'){
        console.log("You quited");
    }
}