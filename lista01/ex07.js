const input = require('readline-sync')

let num = 50;
let soma = 0;

for(let i = 1; i <= 50; i++){
    num--;
    console.log(`${i}`)
    if(num %2 === 0){
        soma = soma + i;
    }
}
console.log(`${soma}`)