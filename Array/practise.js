let array=[10,20,30,40];//check the given array is multiple of 10 or not
console.log(array.every((element)=>element%10==0));
// give the min number
let min=array.reduce((min,ans)=>{
    if(ans<min){
        return min;
    }else{
        return min;
    }
})
console.log(min);
console.log(...array);
console.log(..."praneeth");