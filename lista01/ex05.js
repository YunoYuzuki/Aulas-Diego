const input = require('readline-sync')

let num = 1

function cont(num){
    return num + 1;
}
console.log("1");

for(let i = 0; i <= 99; i++){
    console.log(cont(num))
}