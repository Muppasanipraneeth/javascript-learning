let text=document.querySelector('input');
text.addEventListener("keydown",function(event){
    console.log("code = ",event.code);
    // console.log(" the key was pressed");
    // console.log(text.value);

    if(event.code=="ArrowUp" || event.code=="KeyW"){
        console.log(" character moves up");

    }else if(event.code=="ArrowDown" || event.code=='KeyS'){
        console.log("character moves Down");
    }else if(event.code=="ArrowRight" || event.code=='KeyA'){
        console.log("character moves right" );
    }else if(event.code=="ArrowLeft" || event.code=='KeyD'){
        console.log("character moves Left");
      }//else{
    //     alert(" You must enter correct key");
    // }

})
// text.addEventListener("keyup",function(){
//     console.log(" the key was up");
// })
