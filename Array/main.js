// let fruits=["Mango","orange","Apple","Custard apple"];
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
    
// }
// Arrays of arrays
let heros=[["Spiderman","Ironman","Captain America","Thor"],["Batman","SuperMan","Hee Man"]];
for (let i = 0; i < heros.length; i++) {
 console.log(heros[i]);
    for (let j = 0; j < heros[i].length; j++) {
        console.log(`${j} = ${heros[i][j]}`);
        
    }
}