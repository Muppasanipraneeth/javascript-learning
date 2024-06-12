let calculator={
    add :function (a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }


}
console.log(calculator.add(1,2));
// another way is 
let cal={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(cal.add(3,4));