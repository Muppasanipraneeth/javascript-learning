let marks={
    eng:30,
    math:40,
    phy:40,
     getavg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);

        
    }

   
}
const test={
mark:42,
fun: function m(){
    console.log(this.mark);
    return this.mark;
}
}
console.log(test.fun());
let variable=5;
{
    console.log(this.variable);
    //  variable=10;
    console.log(variable);
    console.log(this.variable);
    // console.log(this.variable);
//here the this keyword refers to the gobal scope only not this  scope which present at 
// the this keyword refer to the gobal scope only not here even tho you have intisillized here
}

