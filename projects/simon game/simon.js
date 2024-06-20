let gameseq = [];
let userseq = [];
let gamestart = false;
let btns = ["red", "green", "blue", "pink"];
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function() {
   if (!gamestart) {
      
      h3.innerText = "Game started";
      let h4 = document.createElement("h4");
      h4.innerText = "Level 0";
      h3.appendChild(h4);
      gamestart = true;
      levelup();
      
   }

});

function flashup(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}
function levelup() {
    userseq=[];
    level++;
    let h4 = document.querySelector("h4");
    h4.innerText = `Level ${level}`;
    let ranindx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[ranindx];
    let randbtn = document.querySelector(`.${randcolor}`);
   
    gameseq.push(randcolor);
    
    flashup(randbtn);
}
let alltbns=document.querySelectorAll(".btn");
for(button of alltbns){
    button.addEventListener("click",btncliked);
}
function btncliked(){
    
    let btn=this;
    usercolor=btn.getAttribute("id");
    userflash(btn);
    userseq.push(usercolor)
    checking(userseq.length-1);

}
function checking (ind){

    // console.log("current level is",level);
   
    console.log(ind);
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000);
        }
     }else{
        h3.innerText="game is over press any key to start";
        gamestart=false;
        let body=document.querySelector("body");
        body.classList.add("alert")
        setTimeout(function(){
body.classList.remove("alert");
reset();
        },1000);
    }
}
function reset(){
    level=0;
gameseq=[];
gamestart=false;
userseq=[];
}
