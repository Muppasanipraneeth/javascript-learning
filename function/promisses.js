/*function savedata(data,sucess,failure){
    let speed=Math.floor(Math.random()*10)+1;
    if(speed>4){
 sucess();
    }else{
    failure();
    }
}
savedata("data",()=>{
    console.log(" the data is sucessfully saved");
},()=>{
    console.log(" the data not saved due to the speed of the internet");
}); */
// function savedata(data,sucess,failure){
//     let speed=Math.floor(Math.random()*10)+1;
//     if(speed>4){
//  sucess();
//     }else{
//     failure();
//     }
// }
// savedata("data",()=>{
//     console.log(" the data is sucessfully saved");
//     savedata("data",()=>{
//         console.log(" the data here also saved");
//         savedata("data",()=>{
//             console.log(" this the thrid time also");
//         },()=>{
//             console.log(" this last data faliled");
//         })
//     },()=>{
//         console.log(" here it is not saved");
//     })
// },()=>{
//     console.log(" the data not saved due to the speed of the internet");
// });
function saveDB(data){
return new Promise((reslove,reject)=>{
    let speed=Math.floor(Math.random()*10)+1;
    if(speed>4){
        reslove("sucess: the data saved")
    }else{
        reject("failure : the data was rejected")
    }
})
}
// console.log(saveDB("data"));
saveDB("data").then((result)=>{
    console.log(" resloved");
    console.log(result);
    // saveDB("hello").then(()=>{
    //     console.log(" data 2 is saved");
    // })
    return saveDB("data");
}).then((result)=>{
    console.log(result);
    console.log(" data 2 is sloved");
})
.catch(()=>{
    console.log(err);
    console.log("rejected");
})