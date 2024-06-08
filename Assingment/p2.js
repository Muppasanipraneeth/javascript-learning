console.log("if enter roll it it wiil give what is on the top of the dice");
let dice=prompt(" enter");
while(true){
    if(dice=="roll"){
    let num=Math.floor(Math.random()*6)+1;
        console.log("you rolled",num);
    }
    if(dice=="no"){
        console.log(" exist");
        break;
    }
    dice=prompt(" enter again");
}