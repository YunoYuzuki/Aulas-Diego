const input = require('readline-sync');

let a = Number(input.question("Qual o primeiro numero? "));
let b = Number(input.question("Qual o segundo numero? "));

function somar(a, b){
    return a + b;
}

console.log(somar(a, b));