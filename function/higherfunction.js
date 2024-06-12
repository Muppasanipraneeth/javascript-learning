
function evenorodd(fun){
   if(fun=='odd'){
    return function(n){
        return console.log(!(n%2==0));
    
    }
   }else if(fun=='even'){
    return function(n){
        return console.log((n%2==0));
    
    }
   }else{
    console.log("worng request");
   }
   
}
let fun="odd";
let func=evenorodd(fun);
console.log(func);