let gameseq = [];
let userseq = [];
let gamestart = false;
let btns = ["red", "green", "blue", "pink"];
let level = 0;

document.addEventListener("keypress", function() {
   if (!gamestart) {
      let h3 = document.querySelector("h3");
      h3.innerText = "Game started";
      let h4 = document.createElement("h4");
      h4.innerText = "Level 0";
      h3.appendChild(h4);
      gamestart = true;
      
   }levelup();

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
    level++;
    let h4 = document.querySelector("h4");
    h4.innerText = `Level ${level}`;
    let ranindx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[ranindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(ranindx);
    console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    console.log(randcolor);
    flashup(randbtn);
}
let alltbns=document.querySelectorAll(".btn");
for(button of alltbns){
    button.addEventListener("click",btncliked);
}
function btncliked(){
    flashup(this);
}