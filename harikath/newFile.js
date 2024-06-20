const fs=require('fs');
fs.readfile('a.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});