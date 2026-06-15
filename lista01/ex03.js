const input = require('readline-sync')

let num = input.question("Digite um numero: ");
let SooS = (num % 2 === 0) ? "par" : "impar";
console.log(`O numero digitado é ${SooS}`)