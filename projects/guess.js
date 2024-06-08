let num=prompt("enter a max range");
let guess=prompt(" guess the number");
while(true){
    let guessnum=Math.floor(Math.random()*num);

    if(guess==guessnum){
        console.log(" you gussed correct number");
    }else if(guess=="quit"){
       alert("you quited");
        break;
    }
    if(roll!="quit" && roll!="roll"){
        console.log(" enter the correct input");
    }

    guess=prompt("guess the number");

}
console.log(" you have quited this game");