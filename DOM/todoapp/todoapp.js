let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let bn=document.querySelector("button");
bn.addEventListener("click",function(){
    let item=document.createElement("li");
    let bn=document.createElement("button");
    item.innerText=inp.value;
    inp.value="";
    bn.innerText="delete";
    bn.classList.add("delete");
    item.appendChild(bn);
    ul.appendChild(item);
    
    // bn.addEventListener("click",function(){
    //     console.log(" this button is deleted");
    //     let k=this.parentElement;
    //     k.remove();
    // })

})
ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let par=event.target.parentElement;
    par.remove();
}
})// this is event elegation
