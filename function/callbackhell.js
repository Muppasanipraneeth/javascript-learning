let h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";

// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";

// },3000);
function changecolor(clr,delay,nextcolor){
   setTimeout(()=>{
    h1.style.color=clr;
    if(nextcolor){
        nextcolor();
    }
   },delay)

}
changecolor("red",1000,()=>{
    changecolor("green",1000,()=>{
        changecolor("blue",1000);
    });
});//this is called the call backhell

