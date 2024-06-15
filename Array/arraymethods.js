let array=[1,2,3,4];
// array.forEach(function(el){
//     console.log(el);
// })
let print =function(el){
    console.log(el);
}
array.forEach(print);
array.forEach(element => {
    console.log(element);
});
let arr =[{
    name:"praneeth",
    age:21,
},{
    name:"harsha",
    age:32
},{
    name:"bhanu",
    age:40
}]
arr.forEach((student)=>{
    console.log(student.name);
})
// this can be use for the array of the objects 

arr.map((element)=>{
    console.log(element);
})
let numbers=[1,2,3,4,5,6,7,8,9,10];
let newx=numbers.filter((el)=>{
    return (el%2==0);
})
console.log(newx.every((el)=>el%2==0));
let max=numbers.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})