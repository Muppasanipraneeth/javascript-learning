function rolldice(){
    return Math.floor(Math.random()*6)+1;
}
for (let index = 0; index <5; index++) {
    console.log(rolldice());
    
}