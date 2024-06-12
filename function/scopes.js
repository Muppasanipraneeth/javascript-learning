let greet="hello";
function changegreet(){
    let greet=" namasthe";
    console.log(greet);
    function inner(){
        console.log(greet);
    }
    inner();
}

changegreet();
console.log(greet);