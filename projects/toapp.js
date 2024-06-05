todo=[];
let  task=prompt(" Enter the task");
while(true){
    if(task=="add"){
        let element=prompt(" Enter the task to add");
        todo.push(element);
    }else if(task=="list"){
        console.log("--------------->");
        for(let i=0; i<todo.length;i++){
            console.log(`${i}th is ${todo[i]}`);
        }
        console.log("---------------->");
    }else if(task=="delete"){
        let index=prompt("Enter the index");
        todo.splice(index,1);
    }else if(task=="quit"){
        console.log("You have entered Quit so closing the program");
        if(todo.length!=0){
            console.log("Remaing task");
            console.log(todo);
        }
        break;
    }else{
        console.log(" you have entered the worng task please try again");
    }
    task=prompt(" please enter the task");
}