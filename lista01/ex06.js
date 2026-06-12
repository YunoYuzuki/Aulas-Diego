const input = require('readline-sync');

let num = Number(input.question("Escreva um número: "));

for(let i = num; i >= 1; i--){
    console.log(`${i}`);
    num--;
}

console.log("Fim!");