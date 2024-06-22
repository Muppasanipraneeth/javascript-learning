// let student ={
//      "num":23,
//      "age":18,
//      "name":"praneeth"
//     };
//     JSON.stringify(student);
// let url="https://catfact.ninja/fact";
// fetch(url).then((res)=>{
//     console.log(res);
//   return res.json();
// }).then((data)=>{
//     console.log(data.fact);
// }).then(()=>{
//     fetch(url).then((res)=>{
//         return res.json();
//     }).then((data2)=>{
//         console.log(" this is data2 ::",data2.fact);
//     })
// })
// .catch((err)=>{
//     console.log("error is here",err);
// })
// async function getfacts(){
// try{
//     let request=await fetch(url);
//     console.log(request);
//     let fact= await request.json();
//     console.log(fact);

// }catch(err){
//     console.log(err);
// }
// }
// getfacts();
let button=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random";
button.addEventListener("click",async()=>{
    let link=await getpicture();
    let image=document.querySelector("img");
    image.setAttribute("src",link);

});
 async function getpicture(){
   try{
    let a= await axios.get(url);
    console.log(a.data.message);
    return a.data.message;
   }catch(err){
    console.log(err);
    return "nofound";

   }

}