const input = require('readline-sync')

let num = input.question("Digite um numero: ");
let SoN = (num % 2 === 0) ? "par" : "impar";
console.clear()
console.log(`O numero digitado é ${SoN}`)