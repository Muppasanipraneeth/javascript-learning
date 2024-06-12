let array=[1,3,4,5,6,7,8];
console.log(greater(5,array));
function greater(n,array){
    let result=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(array[i]>=n){
            result.push(array[i]);
        }
        
    }
    return result;
}
let s="abcdabcdefgggh";
console.log(unique(s));
function unique(s){
    let ans=""
    for( let i=0; i<s.length;i++){
        let char=s.charAt(i);
        if(!ans.includes(char)){
            ans+=char;
        }
    }
    return ans;
}
let countries=["india","pakisthan ","unitedstatesAmerica","united kingdom","austria"]
console.log(largest(countries));
function largest(countries){
    let max=0;
    let ans="";
    for (let i = 0; i < countries.length; i++) {
        let element = countries[i];
        if(element.length>max){
            max=element.length;
            ans=element;
        }


        
    }
    return ans;
}
console.log(" counting the number of vowels int the given string ");
let k=prompt(" enter the string");
function countvowl(k){
let count=0;
for (let i = 0; i < k.length; i++) {
    let char=k.charAt(i);
    if(char=='a'||char=='i'|| char=='e'||char=='u'||char=='o'){
        count=count+1;
    }
    
}
return count;
}
console.log(countvowl(k));
