// async function greet(){
//     // throw "random error";
//     return "hello"; 
// }
// // console.log(greet());
// greet().then((result)=>{
//     console.log(result);
//     console.log(" resloved");
// }).catch((err)=>{
//     console.log(err);
// console.log(" there is an error");
// })
function getnum(){
    return new Promise((resloved,rejected)=>{
setTimeout(()=>{
    let num=Math.floor(Math.random()*10)+1;
    // if(resloved){
    //     return num;
    // }else{
    //     return rejected;

    // }
    console.log(num);
    resloved();
    // console.log(resloved);
},1000);

    });
}
async function demo(){
    // await getnum();
    // await getnum();
    // await getnum();
    await getnum();
   await getnum();
   getnum();
}
// console.log(demo());
function changecolor(color,delay){
    return new Promise((resloved,reject)=>{
      setTimeout(()=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("rejectd");
        }
        let h1=document.querySelector("h1");
        h1.style.color=color;

        resloved(" change color");
        console.log(` the color is changed to the ${color}`);
      },delay);

    })
}
async function demo1(){
    let num=10;

    try{
    await changecolor("blue",1000);
    await changecolor("green",1000);
   await  changecolor("red",1000);
    }
    catch(err){
        console.log(err);
    }
    console.log(num);

}