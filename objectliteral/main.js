let elements={
    nam:"praneeth",
    age:20
};
console.log("My name is "+elements["nam"]);
console.log(elements.nam+" age is "+elements.age);
let posts={
    account:"praneeth",
    like:1000,
    share:500
};
console.log(posts);
console.log("account holder's name is",posts.account)
console.log("this post has ",posts.like,"likes")
console.log("this post has",posts.share,"shares")
let person={
    name:"praneeth",
    age:21,
    gender:"male",
    greet:function(){
        console.log("good morning");
    }
}
console.log(person.greet());
// here the  1, null undefined and true are taken as string
let info={
    1:"sai",
    true:"ya he is clever",
    undefined:"may check",
    null:"go again"
};
console.log(info[null]);
// updatig the values in object literals
let personal={
    name:"praneeth",
    age:21,
    marks:91,
    gender:"male",
} ;
console.log(personal);
personal.age=22;
console.log(personal);
delete personal.age;
console.log(personal);
// nested objects
let Infoclass={
praneeth:{
grade:"A+",
city:"kurnool"
},
harsha:{
    grade:"A",
    city:"Anathapur"
},
nikhil:{
    grade:"A",
    city:"Nellore"
}
};
console.log(Infoclass);
console.log(Infoclass.praneeth);
Infoclass.praneeth.grade="O";
console.log(Infoclass.praneeth);

