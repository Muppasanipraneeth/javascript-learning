console.log(" hii there");
function power(n,m){
    return n**m;
}
function addsomething(n,m,pow,fun){
return fun(n,pow)+fun(m,pow);
}
console.log(addsomething(2,1,2,power));
console.log(" this working fine man");
